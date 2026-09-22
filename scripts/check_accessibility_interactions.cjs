// Run against a served build. Dependencies and manual checks are documented in
// docs/accessibility-checks.md. Native screen-reader and select-menu testing is
// still required separately.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:8765').replace(/\/$/, '');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const failures = [];
  async function check(name, task) {
    try {
      await task();
      console.log(`PASS ${name}`);
    } catch (error) {
      failures.push(name);
      console.error(`FAIL ${name}: ${error.message}`);
    }
  }
  async function withPage(options, task) {
    const context = await browser.newContext(options);
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    try { await task(page); } finally { await context.close(); }
  }
  const go = (page, route) => page.goto(baseUrl + route, { waitUntil: 'networkidle' });
  try {
    for (const scheme of ['light', 'dark']) {
      await check(`${scheme}: keyboard skip link and mobile navigation`, () => withPage({
        colorScheme: scheme, viewport: { width: 320, height: 900 }
      }, async page => {
        await go(page, '/');
        await page.keyboard.press('Tab');
        assert.equal(await page.locator(':focus').getAttribute('href'), '#main-content');
        await page.keyboard.press('Enter');
        assert.equal(await page.locator(':focus').getAttribute('id'), 'main-content');
        await go(page, '/');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        assert.equal(await page.locator('.navbar-toggler').evaluate(el => el === document.activeElement), true);
        await page.keyboard.press('Enter');
        await page.waitForFunction(() => document.querySelector('.navbar-toggler').getAttribute('aria-expanded') === 'true');
        await page.keyboard.press('Tab');
        assert.equal(await page.locator('#navbar-content a').first().evaluate(el => el === document.activeElement), true);
        await go(page, '/about/ark-faq-en/');
        assert.equal(await page.locator('.arka__navbar [aria-current="page"]').count(), 0);
        await go(page, '/about/');
        assert.equal(await page.locator('.arka__navbar [aria-current="page"]').count(), 1);
        await go(page, '/resources/');
        const columns = await page.locator('.list-2-columns').evaluateAll(elements => elements.map(el => getComputedStyle(el).columnCount));
        assert.ok(columns.length > 0 && columns.every(value => value === '1' || value === 'auto'));
      }));
    }
    for (const mode of ['no JavaScript', 'blocked Bootstrap']) {
      await check(`mobile navigation with ${mode}`, () => withPage({
        javaScriptEnabled: mode !== 'no JavaScript', viewport: { width: 320, height: 900 }
      }, async page => {
        if (mode === 'blocked Bootstrap') await page.route('**/bootstrap*.js', route => route.abort());
        await go(page, '/');
        assert.equal(await page.locator('#navbar-content a').first().isVisible(), true);
        assert.equal(await page.locator('.navbar-toggler').isVisible(), false);
      }));
    }
    for (const mode of ['no JavaScript', 'blocked dashboard script', 'blocked registry']) {
      await check(`registry access with ${mode}`, () => withPage({
        javaScriptEnabled: mode !== 'no JavaScript'
      }, async page => {
        if (mode === 'blocked dashboard script') await page.route('**/ark-organizations.js', route => route.abort());
        if (mode === 'blocked registry') await page.route('**/naan_records.json', route => route.abort());
        await go(page, '/community/ark-organizations/');
        assert.equal(await page.locator('#tldFilter').isDisabled(), true);
        assert.doesNotMatch(await page.locator('#yearGraphStatus').innerText(), /loading/i);
        assert.doesNotMatch(await page.locator('#tldDataSummary').innerText(), /loading/i);
        const registryLinks = page.locator('main a[href="https://cdluc3.github.io/naan_reg_priv/"]');
        assert.ok(await registryLinks.count() > 0);
        assert.equal(await registryLinks.first().isVisible(), true);
      }));
    }
    await check('dashboard filter updates table, status, and keyboard reset', () => withPage({}, async page => {
      await go(page, '/community/ark-organizations/');
      await page.waitForFunction(() => !document.querySelector('#tldFilter').disabled);
      const options = await page.locator('#tldFilter option').count();
      assert.ok(options > 1);
      assert.equal(options, await page.locator('#tldDataBody tr').count() + 1);
      const selected = await page.locator('#tldFilter option').nth(1).getAttribute('value');
      const expectedCount = Number((await page.locator('#tldDataBody tr').first().locator('td').first().innerText()).replace(/,/g, ''));
      await page.locator('#tldFilter').focus();
      await page.locator('#tldFilter').selectOption(selected);
      assert.ok((await page.locator('#yearGraphStatus').innerText()).includes(`.${selected}`));
      const actualCount = await page.locator('#yearDataBody tr td:first-of-type').evaluateAll(cells => cells.reduce((sum, cell) => sum + Number(cell.textContent.replace(/,/g, '')), 0));
      assert.equal(actualCount, expectedCount);
      await page.keyboard.press('Tab');
      assert.equal(await page.locator(':focus').getAttribute('id'), 'resetYearGraph');
      await page.keyboard.press('Enter');
      assert.equal(await page.locator('#tldFilter').inputValue(), '');
      assert.equal(await page.locator(':focus').getAttribute('id'), 'tldFilter');
    }));
    for (const motion of ['no-preference', 'reduce']) {
      await check(`suffix illustration stays static with ${motion} motion preference`, () => withPage({
        reducedMotion: motion
      }, async page => {
        await go(page, '/about/ark-suffix-passthrough/');
        // This page deliberately uses a static default, so no animated GIF is
        // allowed to render automatically. A future opt-in player needs its own test.
        const gifs = page.locator('main img[src$=".gif"]');
        for (const gif of await gifs.all()) assert.equal(await gif.isVisible(), false);
        assert.equal(await page.locator('main video[autoplay]').count(), 0);
        assert.equal(await page.locator('main img').evaluateAll(images => images.some(image => {
          const bounds = image.getBoundingClientRect();
          return image.complete && image.naturalWidth > 0 && bounds.width > 0 && bounds.height > 0;
        })), true, 'the static replacement must load and occupy visible space');
      }));
    }
    await check('ARK diagrams and captions keep readable widths', () => withPage({}, async page => {
      const routes = ['/about/', '/about/ark-overview/', '/about/ark-naans-and-systems/',
        '/about/ark-faq-en/', '/about/ark-faq-es/', '/about/ark-faq-fr/',
        '/about/identifier-concepts-and-conventions/'];
      for (const width of [1280, 320]) {
        await page.setViewportSize({ width, height: 900 });
        for (const route of routes) {
          await go(page, route);
          const diagrams = await page.locator('main img[src*="ark-anatomy"], main img[src$="durable-identifier-key.svg"]').evaluateAll(images => images.map(image => {
            const figure = image.closest('figure');
            return {
              loaded: image.complete && image.naturalWidth > 0,
              imageWidth: image.getBoundingClientRect().width,
              captionWidth: figure.querySelector('figcaption').getBoundingClientRect().width,
              availableWidth: figure.parentElement.clientWidth
            };
          }));
          assert.ok(diagrams.length > 0, `${route} must expose its diagram`);
          for (const diagram of diagrams) {
            assert.ok(diagram.loaded, `${route}: diagram must load`);
            assert.ok(diagram.imageWidth >= Math.min(400, diagram.availableWidth * 0.85),
              `${route}: diagram must not shrink to a narrow column at ${width}px`);
            assert.ok(diagram.captionWidth >= diagram.imageWidth - 2,
              `${route}: caption must use the diagram width`);
          }
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true,
            `${route}: diagram must fit the page at ${width}px`);
        }
      }
    }));
    await check('both origin stories expose all comparison cells and headers', () => withPage({
      viewport: { width: 320, height: 900 }
    }, async page => {
      for (const route of ['/about/the-ark-origin-story/', '/news/2021-11-01-the-ark-origin-story/']) {
        await go(page, route);
        const table = page.locator('main table').filter({ has: page.locator('caption') });
        assert.equal(await table.count(), 1);
        assert.equal(await table.locator('thead th[scope="col"]').count(), 6);
        assert.equal(await table.locator('tbody th[scope="row"]').count(), 7);
        assert.equal(await table.locator('tbody td').count(), 35);
        assert.equal(await table.locator('thead th:not(:first-child), tbody td').evaluateAll(cells => cells.every(cell => {
          const range = document.createRange();
          range.selectNodeContents(cell);
          return range.getClientRects().length === 1;
        })), true, 'identifier names and Yes/No values must not split across lines');
        const scrollRegion = page.locator('.table-responsive');
        await scrollRegion.focus();
        await page.keyboard.press('ArrowRight');
        await page.waitForFunction(() => document.querySelector('.table-responsive').scrollLeft > 0);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      }
    }));
  } finally {
    await browser.close();
  }
  if (failures.length) process.exitCode = 1;
})().catch(error => { console.error(error); process.exitCode = 1; });
