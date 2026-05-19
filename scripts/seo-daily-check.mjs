const BASE_URL = process.env.SEO_BASE_URL || 'https://ldndecks.com';
const CONCURRENCY = Number(process.env.SEO_AUDIT_CONCURRENCY || 8);

const requiredPaths = [
  '/',
  '/sitemap.xml',
  '/robots.txt',
  '/composite-deck-vs-wood-deck-virginia',
  '/near-you/loudoun-county/aldie',
  '/near-you/fairfax-county/annandale',
  '/showcase',
];

function extractUrlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    return await fetch(url, { redirect: 'manual', ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function getStatus(url) {
  let response = await fetchWithTimeout(url, { method: 'HEAD' });
  if (response.status === 405 || response.status === 403) {
    response = await fetchWithTimeout(url, { method: 'GET' });
  }
  return {
    url,
    status: response.status,
    location: response.headers.get('location') || '',
  };
}

async function mapLimit(items, limit, mapper) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const current = index;
      index += 1;
      results[current] = await mapper(items[current], current);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

const sitemapUrl = new URL('/sitemap.xml', BASE_URL).toString();
const sitemapResponse = await fetchWithTimeout(sitemapUrl);
if (!sitemapResponse.ok) {
  throw new Error(`Sitemap fetch failed: ${sitemapResponse.status} ${sitemapUrl}`);
}

const sitemapUrls = extractUrlsFromSitemap(await sitemapResponse.text());
const sitemapStatuses = await mapLimit(sitemapUrls, CONCURRENCY, getStatus);
const sitemapBad = sitemapStatuses.filter((result) => result.status !== 200);

const requiredStatuses = await mapLimit(
  requiredPaths.map((path) => new URL(path, BASE_URL).toString()),
  CONCURRENCY,
  getStatus
);
const requiredBad = requiredStatuses.filter((result) => result.status >= 400);

console.log(`sitemapUrls=${sitemapUrls.length}`);
console.log(`sitemapNon200=${sitemapBad.length}`);
console.log(`requiredBad=${requiredBad.length}`);

for (const result of [...sitemapBad, ...requiredBad].slice(0, 50)) {
  const suffix = result.location ? ` -> ${result.location}` : '';
  console.log(`${result.status} ${result.url}${suffix}`);
}

if (sitemapBad.length > 0 || requiredBad.length > 0) {
  process.exitCode = 1;
} else {
  console.log('PASS');
}
