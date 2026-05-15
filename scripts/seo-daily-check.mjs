const ORIGIN = 'https://ldndecks.com';

const priorityPaths = [
  '/',
  '/deck-builders-loudoun',
  '/deck-builder-ashburn-va',
  '/deck-builder-leesburg-va',
  '/deck-builder-herndon-va',
  '/deck-builder-reston-va',
  '/deck-builder-mclean-va',
  '/deck-builder-vienna-va',
  '/composite-decks',
  '/trex-decks',
  '/deck-repair-loudoun-county',
  '/get-estimate',
  '/press',
  '/social',
];

const expectedCitationSignals = [
  'yelp.com/biz/loudoun-decks-centreville',
  'bbb.org/us/va/centreville',
  'buildzoom.com/contractor/loudoun-decks',
  'business.loudounchamber.org/list/member/loudoun-deck-30047.htm',
  'mapquest.com/us/virginia/loudoun-decks-532352487',
];

async function getText(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'LDNDecksSEOCheck/1.0 (+https://ldndecks.com)',
    },
  });

  const text = await response.text();
  return { url, status: response.status, ok: response.ok, text };
}

function extractCanonical(html) {
  return html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] || null;
}

function hasNoindex(html) {
  return /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
}

function summarizeCheck(name, passed, details = '') {
  const prefix = passed ? 'PASS' : 'FAIL';
  console.log(`${prefix} ${name}${details ? ` - ${details}` : ''}`);
  return passed;
}

const failures = [];

try {
  const sitemap = await getText(`${ORIGIN}/sitemap.xml`);
  const sitemapUrlCount = (sitemap.text.match(/<url>/g) || []).length;
  if (!summarizeCheck('sitemap.xml is reachable', sitemap.ok, `${sitemap.status}`)) failures.push('sitemap status');
  if (!summarizeCheck('sitemap URL count is healthy', sitemapUrlCount >= 175, `${sitemapUrlCount} URLs`)) failures.push('sitemap count');

  for (const path of priorityPaths) {
    const loc = `${ORIGIN}${path === '/' ? '' : path}`;
    if (!sitemap.text.includes(`<loc>${loc}</loc>`)) {
      failures.push(`missing sitemap URL: ${loc}`);
      summarizeCheck(`sitemap contains ${path}`, false);
    } else {
      summarizeCheck(`sitemap contains ${path}`, true);
    }
  }

  const robots = await getText(`${ORIGIN}/robots.txt`);
  if (!summarizeCheck('robots.txt is reachable', robots.ok, `${robots.status}`)) failures.push('robots status');
  if (!summarizeCheck('robots allows main site crawl', !/disallow:\s*\/\s*$/im.test(robots.text))) failures.push('robots disallow');

  for (const path of priorityPaths) {
    const page = await getText(`${ORIGIN}${path === '/' ? '' : path}`);
    const canonical = extractCanonical(page.text);
    const expectedCanonical = `${ORIGIN}${path === '/' ? '' : path}`;
    const routeName = path === '/' ? 'homepage' : path;

    if (!summarizeCheck(`${routeName} returns 200`, page.ok, `${page.status}`)) failures.push(`${path} status`);
    if (!summarizeCheck(`${routeName} is indexable`, !hasNoindex(page.text))) failures.push(`${path} noindex`);
    if (!summarizeCheck(`${routeName} canonical matches`, canonical === expectedCanonical, canonical || 'missing')) {
      failures.push(`${path} canonical`);
    }
  }

  const social = await getText(`${ORIGIN}/social`);
  for (const signal of expectedCitationSignals) {
    if (!summarizeCheck(`/social contains ${signal}`, social.text.includes(signal))) {
      failures.push(`/social missing ${signal}`);
    }
  }

  const indexNow = await getText(`${ORIGIN}/api/indexnow?submit=true`);
  let indexNowResult = null;
  try {
    indexNowResult = JSON.parse(indexNow.text);
  } catch {
    indexNowResult = null;
  }
  const indexNowOk = indexNow.ok && indexNowResult?.result?.ok === true && indexNowResult?.submitted >= 175;
  if (!summarizeCheck('IndexNow submission accepted', indexNowOk, indexNow.text.trim())) failures.push('indexnow');

  if (failures.length) {
    console.error(`\nSEO daily check failed: ${failures.join('; ')}`);
    process.exit(1);
  }

  console.log('\nSEO daily check passed.');
} catch (error) {
  console.error('SEO daily check crashed:', error);
  process.exit(1);
}
