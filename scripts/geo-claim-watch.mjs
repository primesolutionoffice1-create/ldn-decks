// Live GEO claim watch. Fails when a published identity or price rule regresses.
// External planning ranges are allowed only when the page says they are not a
// Loudoun Decks price. This script does not submit forms or contact vendors.

const ORIGIN = (process.env.SEO_CHECK_ORIGIN || 'https://ldndecks.com').replace(/\/$/, '');

const failures = [];

async function get(path) {
  const response = await fetch(`${ORIGIN}${path}`, {
    headers: { 'user-agent': 'ldn-geo-claim-watch/1.0', 'cache-control': 'no-cache' },
    redirect: 'follow',
  });
  const body = await response.text();
  return { path, status: response.status, body, finalUrl: response.url };
}

function visible(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
}

function h1Texts(html) {
  return [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) =>
    match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
  );
}

function requireIncludes(page, needle, label = needle) {
  if (!page.body.includes(needle)) failures.push(`${page.path} is missing ${label}`);
}

function forbid(page, needle) {
  if (page.body.includes(needle)) failures.push(`${page.path} still contains ${JSON.stringify(needle)}`);
}

const home = await get('/');
const warranty = await get('/deck-warranty-guide-northern-virginia');
const cost = await get('/composite-deck-cost-northern-virginia');
const resurfacing = await get('/services/deck-resurfacing');
const estimate = await get('/get-estimate');
const llms = await get('/llms.txt');
const robots = await get('/robots.txt');

for (const page of [home, warranty, cost, resurfacing, estimate, llms, robots]) {
  if (page.status !== 200) failures.push(`${page.path} returned HTTP ${page.status}`);
}

const h1s = h1Texts(home.body);
if (h1s.length !== 1 || h1s[0] !== 'Custom Deck Builder Near You in Northern Virginia') {
  failures.push(`homepage H1 is ${JSON.stringify(h1s)}`);
}
if (!home.body.includes('<title>Custom Deck Builder in Northern Virginia | Loudoun Decks</title>')) {
  failures.push('homepage title changed');
}
requireIncludes(home, 'Financing Available');
requireIncludes(home, '2705191673', 'the published license number');
requireIncludes(home, '"foundingDate":"2022"', 'foundingDate 2022');
for (const area of ['Alexandria', 'Falls Church', 'Stafford']) {
  requireIncludes(home, area, area);
}
forbid(home, 'With Platinum installer');
forbid(home, '10+ years');
forbid(home, 'two offices');

requireIncludes(warranty, 'does not state a TrexPro');
forbid(warranty, 'With Platinum installer');

requireIncludes(cost, 'Planning ranges based on external');
requireIncludes(cost, 'not Loudoun Decks prices');
requireIncludes(cost, 'Request a written estimate for the project.');
if (cost.body.includes('$35') && !cost.body.includes('not Loudoun Decks prices')) {
  failures.push('composite cost page publishes $35 without the external-benchmark disclaimer');
}

if (resurfacing.body.includes('AggregateOffer')) {
  failures.push('resurfacing page emits AggregateOffer');
}

if (!/<form[\s>]/i.test(estimate.body)) {
  failures.push('/get-estimate has no form');
}

if (!llms.body.includes('not a Loudoun Decks price')) {
  failures.push('llms.txt does not say the planning figure is not a Loudoun Decks price');
}
forbid(llms, 'With Platinum installer');
if ((llms.body.match(/\$[0-9]/g) || []).length > 0 && !llms.body.includes('not a Loudoun Decks price')) {
  failures.push('llms.txt has a dollar amount without the external-benchmark disclaimer');
}

if (!robots.body.includes('User-Agent: Googlebot') && !robots.body.includes('User-agent: Googlebot')) {
  failures.push('robots.txt does not name Googlebot');
}
if (/^Disallow:\s*\/\s*$/m.test(robots.body)) {
  failures.push('robots.txt disallows the whole site');
}

if (failures.length) {
  console.error(JSON.stringify({ ok: false, origin: ORIGIN, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  origin: ORIGIN,
  checked: [home, warranty, cost, resurfacing, estimate, llms, robots].map((page) => page.path),
}, null, 2));
