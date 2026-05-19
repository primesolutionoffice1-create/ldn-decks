const BASE_URL = process.env.SEO_BASE_URL || 'https://ldndecks.com';
const CONCURRENCY = Number(process.env.SEO_AUDIT_CONCURRENCY || 8);

const skipSchemes = /^(mailto:|tel:|sms:|javascript:|data:|blob:)/i;

function toAbsoluteUrl(href, pageUrl) {
  if (!href || href.startsWith('#') || skipSchemes.test(href)) return null;

  try {
    const url = new URL(href, pageUrl);
    url.hash = '';
    return url;
  } catch {
    return null;
  }
}

function isAuditableInternalUrl(url) {
  const base = new URL(BASE_URL);
  if (url.hostname !== base.hostname) return false;
  if (url.pathname.startsWith('/_next/')) return false;
  if (/\.(webp|png|jpe?g|gif|svg|ico|css|js|pdf|xml|txt)$/i.test(url.pathname)) return false;
  return true;
}

function extractUrlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

function extractInternalLinks(html, pageUrl) {
  const urls = new Set();
  for (const match of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/gi)) {
    const url = toAbsoluteUrl(match[1], pageUrl);
    if (url && isAuditableInternalUrl(url)) urls.add(url.toString());
  }
  return urls;
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
const internalLinks = new Map();

await mapLimit(sitemapUrls, CONCURRENCY, async (pageUrl) => {
  const response = await fetchWithTimeout(pageUrl);
  if (!response.ok) return;
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return;

  const html = await response.text();
  for (const link of extractInternalLinks(html, pageUrl)) {
    if (!internalLinks.has(link)) internalLinks.set(link, new Set());
    internalLinks.get(link).add(pageUrl);
  }
});

const checked = await mapLimit([...internalLinks.keys()], CONCURRENCY, getStatus);
const bad = checked.filter((result) => result.status >= 400);

console.log(`sitemapUrls=${sitemapUrls.length}`);
console.log(`internalLinks=${checked.length}`);
console.log(`badCount=${bad.length}`);

for (const result of bad.slice(0, 50)) {
  const sources = [...internalLinks.get(result.url)].slice(0, 3).join(', ');
  console.log(`${result.status} ${result.url} <- ${sources}`);
}

if (bad.length > 0) {
  process.exitCode = 1;
}
