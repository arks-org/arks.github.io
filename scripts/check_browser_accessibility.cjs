// Serve a fresh build, then set SITE_DIR, BASE_URL and AUDIT_DIR before running.
// Requires playwright and axe-core; see docs/accessibility-checks.md.
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const axePath = require.resolve('axe-core/axe.min.js');
const root = process.env.AUDIT_DIR || '/tmp/arks-a11y-retest';
const siteDir = process.env.SITE_DIR || path.join(root, 'site');
const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:8765').replace(/\/$/, '');
fs.mkdirSync(root, {recursive:true});
const files = fs.readdirSync(siteDir, {recursive:true}).filter(f => f.endsWith('.html') && fs.readFileSync(path.join(siteDir, f),'utf8').includes('body class="arka"')).sort();
const routes = files.map(f => '/' + f.replace(/index\.html$/, ''));
function inspectLayout() {
  const vw = document.documentElement.clientWidth;
  const visible = el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden';
  return {
    width:vw, scrollWidth:document.documentElement.scrollWidth,
    overflow:[...document.querySelectorAll('body *')].filter(el=>visible(el)&&el.getBoundingClientRect().right>vw+2).slice(0,20).map(el=>({tag:el.tagName,id:el.id,class:el.className,text:el.textContent.trim().slice(0,90),right:el.getBoundingClientRect().right})),
    scrollRegions:[...document.querySelectorAll('main *')].filter(el=>visible(el)&&el.scrollWidth>el.clientWidth+2&&['auto','scroll','hidden'].includes(getComputedStyle(el).overflowX)).slice(0,20).map(el=>({tag:el.tagName,id:el.id,class:el.className,tabindex:el.getAttribute('tabindex'),overflow:getComputedStyle(el).overflowX,client:el.clientWidth,scroll:el.scrollWidth,text:el.textContent.trim().slice(0,100)}))
  };
}
(async()=>{
  const browser = await chromium.launch({headless:true});
  const results=[];
  let next=0;
  async function worker(){
    const context=await browser.newContext({viewport:{width:1280,height:900},colorScheme:'light'});
    const page=await context.newPage();
    page.setDefaultTimeout(15000);
    while(next<routes.length){
      const route=routes[next++];
      const entry={route,errors:[],failedRequests:[]};
      const onError=e=>entry.errors.push(e.message);
      const onRequest=r=>entry.failedRequests.push({url:r.url(),error:r.failure()?.errorText});
      page.on('pageerror',onError);page.on('requestfailed',onRequest);
      try {
        await page.setViewportSize({width:1280,height:900});
        await page.emulateMedia({colorScheme:'light'});
        await page.goto(baseUrl+route,{waitUntil:'networkidle',timeout:30000});
        await page.evaluate(()=>document.fonts.ready);
        if(route==='/community/ark-organizations/') await page.waitForFunction(()=>!document.getElementById('tldFilter').disabled,null,{timeout:15000});
        await page.addScriptTag({path:axePath});
        for(const scheme of ['light','dark']) {
          await page.emulateMedia({colorScheme:scheme});
          await page.waitForFunction(s=>document.documentElement.dataset.bsTheme===s,scheme);
          // A theme switch starts Bootstrap link-color transitions. Inspect
          // their final colors, not the intermediate frame of the transition.
          await page.evaluate(async()=>{
            await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
            await Promise.all(document.getAnimations().filter(animation=>animation.effect?.getTiming().iterations!==Infinity).map(animation=>animation.finished.catch(()=>{})));
          });
          const a=await page.evaluate(async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']},iframes:false}));
          entry[scheme]={violations:a.violations,incomplete:a.incomplete,passes:a.passes.map(x=>x.id)};
        }
        entry.inventory=await page.evaluate(()=>({title:document.title,lang:document.documentElement.lang,
          headings:[...document.querySelectorAll('main h1,main h2,main h3,main h4')].map(e=>({level:e.tagName,text:e.textContent.trim()})),
          images:[...document.querySelectorAll('main img')].map(e=>({src:e.getAttribute('src'),alt:e.getAttribute('alt'),width:e.naturalWidth,caption:e.closest('figure')?.querySelector('figcaption')?.textContent.trim()})),
          frames:[...document.querySelectorAll('iframe')].map(e=>({src:e.src,title:e.title,alt:e.getAttribute('alt')})),
          links:[...document.querySelectorAll('main a[href]')].map(e=>({href:e.getAttribute('href'),text:e.textContent.trim()})),
          tables:[...document.querySelectorAll('main table')].map(e=>({caption:e.caption?.textContent,label:e.getAttribute('aria-label'),headers:e.querySelectorAll('th').length,rows:e.rows.length})),
        }));
        await page.emulateMedia({colorScheme:'light'});
        await page.waitForFunction(()=>document.documentElement.dataset.bsTheme==='light');
        await page.setViewportSize({width:320,height:900});
        entry.mobile=await page.evaluate(inspectLayout);
        await page.addStyleTag({content:'* {line-height:1.5 !important;letter-spacing:0.12em !important;word-spacing:0.16em !important;} p {margin-bottom:2em !important;}'});
        entry.spacing320=await page.evaluate(inspectLayout);
      }catch(e){entry.auditError=e.message;}
      page.off('pageerror',onError);page.off('requestfailed',onRequest);
      results.push(entry);
      fs.writeFileSync(root+'/results.json',JSON.stringify({browser:browser.version(),axe:require('axe-core/package.json').version,routes,results},null,2));
      console.log(JSON.stringify({route,light:entry.light?.violations.map(v=>[v.id,v.nodes.length]),dark:entry.dark?.violations.map(v=>[v.id,v.nodes.length]),mobile:entry.mobile?.scrollWidth,spacing:entry.spacing320?.scrollWidth,error:entry.auditError}));
    }
    await context.close();
  }
  await Promise.all([worker(),worker(),worker()]);
  await browser.close();
  const failures=results.filter(entry=>entry.auditError || entry.errors.length ||
    entry.light?.violations.length || entry.dark?.violations.length ||
    entry.mobile?.scrollWidth>entry.mobile?.width || entry.spacing320?.scrollWidth>entry.spacing320?.width);
  if(!routes.length || results.length!==routes.length || failures.length) {
    console.error(`Accessibility scan failed: ${failures.length} of ${routes.length} pages have violations, errors, or overflow.`);
    process.exitCode=1;
  } else {
    console.log(`Accessibility scan passed: ${routes.length} pages, ${routes.length*2} theme scans, narrow-width and text-spacing checks.`);
  }
})().catch(error=>{console.error(error);process.exitCode=1;});
