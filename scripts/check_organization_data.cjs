const assert = require("node:assert/strict");
const path = require("node:path");

const charts = require(path.join(__dirname, "..", "assets", "js", "ark-organizations.js"));

const fixture = [
  { what: "10001", where: "https://example.org", when: "2020-01-01" },
  { what: "10002", where: "https://example.org/path", when: "2021-01-01" },
  { what: "10003", where: "https://example.de", when: "2021-02-01" },
  { what: "10004", where: "https://example.xn--p1ai", when: "2021-03-01" },
  { what: "10005", where: "not a URL", when: "2022-01-01" },
  { what: "10006", where: "https://example.de", when: "unknown" }
];

const tlds = charts.getTldData(fixture);
assert.deepEqual(tlds.map(({ tld, count }) => [tld, count]), [
  ["org", 2],
  ["de", 2],
  ["xn--p1ai", 1]
]);
assert.equal(tlds.reduce((sum, row) => sum + row.percentage, 0), 100);

const allYears = charts.getYearData(fixture, "");
assert.deepEqual(allYears.map(({ year, count }) => [year, count]), [
  [2020, 1],
  [2021, 3]
]);
assert.equal(allYears.reduce((sum, row) => sum + row.percentage, 0), 100);

const deYears = charts.getYearData(fixture, "de");
assert.deepEqual(deYears.map(({ year, count, percentage }) => [year, count, percentage]), [
  [2021, 1, 100]
]);

assert.deepEqual(charts.getTldData([]), []);
assert.deepEqual(charts.getYearData([], ""), []);
assert.deepEqual(charts.getYearData(fixture, "museum"), []);

console.log("ARK organization data checks passed");
