#!/usr/bin/env node

const ORIGIN = (process.env.SEO_AUDIT_ORIGIN || 'https://ldndecks.com').replace(/\/$/, '');
const EXPECTED_SITEMAP_URLS = Number(process.env.EXPECTED_SITEMAP_URLS || 721);
const EXPECTED_LOCAL_SERVICE_URLS = Number(process.env.EXPECTED_LOCAL_SERVICE_URLS || 464);
const KNOWN_BAD_SITEMAP_URLS = Number(process.env.KNOWN_BAD_SITEMAP_URLS || 260);
const TIMEOUT_MS = Number(process.env.SEO_DEPLOYMENT_GUARD_TIMEOUT_MS || 12000);

const localServicePattern = /\/(service|composite-decks|wood-decks|deck-repair|screened-porches|pergolas|patios|outdoor-living)\//;

const priorityPaths = [
  '/service/ashburn',
  '/composite-decks/leesburg',
  '/deck-repair/fairfax',
  '/screened-porches/chantilly',
  '/outdoor-living/woodbridge',
  '/service/mclean',
  '/service/great-falls',
  '/service/gainesville',
  '/service/haymarket',
  '/service/lake-ridge',
];

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'LDNDecksDeploymentGuard/1.0 (+https://ldndecks.com)' },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  return { url, status: response.status, ok: response.ok, text: await response.text() };
}

async function fetchStatus(pathname) {
  let response = await fetch(`${ORIGIN}${pathname}`, {
    method: 'HEAD',
    headers: { 'user-agent': 'LDNDecksDeploymentGuard/1.0 (+https://ldndecks.com)' },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (response.status === 405) {
    response = await fetch(`${ORIGIN}${pathname}`, {
      method: 'GET',
      headers: { 'user-agent': 'LDNDecksDeploymentGuard/1.0 (+https://ldndecks.com)' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  }

  return { path: pathname, status: response.status, ok: response.ok };
}

function getSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

function pass(checks, name, details = null) {
  checks.push({ name, ok: true, details });
}

function fail(checks, name, details = null) {
  checks.push({ name, ok: false, details });
}

const checks = [];
let sitemapUrls = [];
let localServiceUrls = [];
let priorityPages = [];

try {
  const sitemap = await fetchText(`${ORIGIN}/sitemap.xml`);
  if (sitemap.ok) pass(checks, 'sitemap.xml reachable', `status ${sitemap.status}`);
  else fail(checks, 'sitemap.xml reachable', `status ${sitemap.status}`);

  sitemapUrls = getSitemapUrls(sitemap.text);
  localServiceUrls = sitemapUrls.filter((url) => localServicePattern.test(url));

  if (sitemapUrls.length === KNOWN_BAD_SITEMAP_URLS) {
    fail(checks, 'known 260-url regression absent', `sitemap has ${KNOWN_BAD_SITEMAP_URLS} URLs`);
  } else {
    pass(checks, 'known 260-url regression absent', `${sitemapUrls.length} URLs`);
  }

  if (sitemapUrls.length >= EXPECTED_SITEMAP_URLS) {
    pass(checks, 'sitemap URL count', `${sitemapUrls.length} >= ${EXPECTED_SITEMAP_URLS}`);
  } else {
    fail(checks, 'sitemap URL count', `${sitemapUrls.length} < ${EXPECTED_SITEMAP_URLS}`);
  }

  if (localServiceUrls.length >= EXPECTED_LOCAL_SERVICE_URLS) {
    pass(checks, 'local service URL count', `${localServiceUrls.length} >= ${EXPECTED_LOCAL_SERVICE_URLS}`);
  } else {
    fail(checks, 'local service URL count', `${localServiceUrls.length} < ${EXPECTED_LOCAL_SERVICE_URLS}`);
  }

  for (const pathname of priorityPaths) {
    const loc = `${ORIGIN}${pathname}`;
    if (sitemapUrls.includes(loc)) pass(checks, `sitemap contains ${pathname}`);
    else fail(checks, `sitemap contains ${pathname}`);
  }

  priorityPages = await Promise.all(priorityPaths.map(fetchStatus));
  for (const page of priorityPages) {
    if (page.ok) pass(checks, `${page.path} returns 200`, `status ${page.status}`);
    else fail(checks, `${page.path} returns 200`, `status ${page.status}`);
  }

  const robots = await fetchText(`${ORIGIN}/robots.txt`);
  if (robots.ok && new RegExp(`Sitemap:\\s*${ORIGIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/sitemap\\.xml`, 'i').test(robots.text)) {
    pass(checks, 'robots.txt declares canonical sitemap');
  } else {
    fail(checks, 'robots.txt declares canonical sitemap', `status ${robots.status}`);
  }

  const llms = await fetchText(`${ORIGIN}/llms.txt`);
  if (llms.ok && /464 local service|Local Service Architecture|service\/ashburn/i.test(llms.text)) {
    pass(checks, 'llms.txt exposes local architecture');
  } else {
    fail(checks, 'llms.txt exposes local architecture', `status ${llms.status}`);
  }

  const llmsFull = await fetchText(`${ORIGIN}/llms-full.txt`);
  if (llmsFull.ok && /464 local service|58 Northern Virginia localities|outdoor-living\/woodbridge/i.test(llmsFull.text)) {
    pass(checks, 'llms-full.txt exposes local architecture');
  } else {
    fail(checks, 'llms-full.txt exposes local architecture', `status ${llmsFull.status}`);
  }
} catch (error) {
  fail(checks, 'deployment guard completed', error.message);
}

const failed = checks.filter((check) => !check.ok);
const report = {
  status: failed.length ? 'FAIL' : 'PASS',
  origin: ORIGIN,
  expectedSitemapUrls: EXPECTED_SITEMAP_URLS,
  expectedLocalServiceUrls: EXPECTED_LOCAL_SERVICE_URLS,
  sitemapUrls: sitemapUrls.length,
  localServiceUrls: localServiceUrls.length,
  priorityPages,
  checks,
};

console.log(JSON.stringify(report, null, 2));

if (failed.length) {
  process.exit(1);
}
