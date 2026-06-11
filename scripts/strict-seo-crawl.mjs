import fs from 'node:fs';
import path from 'node:path';

const ORIGIN = 'https://ldndecks.com';
const FETCH_ORIGIN = process.env.SEO_AUDIT_ORIGIN || ORIGIN;
const FETCH_TIMEOUT_MS = Number(process.env.SEO_STRICT_CRAWL_TIMEOUT_MS || 10000);
const FETCH_RETRIES = Number(process.env.SEO_STRICT_CRAWL_FETCH_RETRIES || 2);
const PAGE_CONCURRENCY = Number(process.env.SEO_STRICT_CRAWL_PAGE_CONCURRENCY || 10);
const STATUS_CONCURRENCY = Number(process.env.SEO_STRICT_CRAWL_STATUS_CONCURRENCY || 24);
const today = new Date().toISOString().slice(0, 10);

function toFetchUrl(url) {
  return url.replace(ORIGIN, FETCH_ORIGIN);
}

function canonicalizeUrl(value) {
  try {
    const url = new URL(value, ORIGIN);
    if (url.origin !== ORIGIN) return null;
    if (url.pathname === '/_next/image') return null;
    if (url.pathname.startsWith('/_next/static/')) return null;
    if (/\.(?:png|jpe?g|webp|gif|svg|ico|css|js|woff2?|pdf)$/i.test(url.pathname)) return null;
    url.hash = '';
    url.search = '';
    return url.href.replace(/\/$/, '');
  } catch {
    return null;
  }
}

function extractCanonical(html) {
  return html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] || null;
}

function hasNoindex(html) {
  return /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
}

async function withRetry(fn) {
  let lastError = null;
  for (let attempt = 0; attempt <= FETCH_RETRIES; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt < FETCH_RETRIES) {
        await new Promise((resolve) => setTimeout(resolve, 150 * (attempt + 1)));
      }
    }
  }
  throw lastError;
}

async function fetchManual(url, method = 'GET') {
  return withRetry(async () => fetch(toFetchUrl(url), {
    method,
    redirect: 'manual',
    headers: { 'user-agent': 'LDNDecksStrictSEOCrawl/1.0 (+https://ldndecks.com)' },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  }));
}

async function fetchText(url) {
  const response = await fetchManual(url, 'GET');
  return {
    status: response.status,
    location: response.headers.get('location'),
    text: await response.text(),
  };
}

async function fetchStatus(url) {
  let response = await fetchManual(url, 'HEAD');
  if (response.status === 405) response = await fetchManual(url, 'GET');
  return {
    status: response.status,
    location: response.headers.get('location'),
  };
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;

  async function worker() {
    while (next < items.length) {
      const index = next;
      next += 1;
      results[index] = await fn(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

const sitemapResponse = await fetchText(`${ORIGIN}/sitemap.xml`);
if (sitemapResponse.status < 200 || sitemapResponse.status >= 300) {
  console.error(`sitemap.xml failed with status ${sitemapResponse.status}`);
  process.exit(1);
}

const sitemapUrls = [...sitemapResponse.text.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => canonicalizeUrl(match[1]))
  .filter(Boolean);

const internalLinks = new Set(sitemapUrls);
const bad = [];
const redirects = [];
const noindex = [];
const canonicalIssues = [];
const canonicalToRoutes = new Map();

await mapLimit(sitemapUrls, PAGE_CONCURRENCY, async (url) => {
  let page;
  try {
    page = await fetchText(url);
  } catch (error) {
    bad.push({ source: 'sitemap-page-fetch', url, status: 'FETCH_FAIL', error: error.message });
    return;
  }

  if (page.status >= 300 && page.status < 400) {
    redirects.push({ source: 'sitemap-page', url, status: page.status, location: page.location });
    return;
  }

  if (page.status >= 400) {
    bad.push({ source: 'sitemap-page', url, status: page.status });
    return;
  }

  if (hasNoindex(page.text)) {
    noindex.push({ url });
  }

  const canonical = canonicalizeUrl(extractCanonical(page.text) || '');
  if (canonical !== url) {
    canonicalIssues.push({ url, canonical: canonical || null });
  } else {
    const routes = canonicalToRoutes.get(canonical) || [];
    routes.push(url);
    canonicalToRoutes.set(canonical, routes);
  }

  for (const match of page.text.matchAll(/(?:href|src)=["']([^"'#]+)(?:#[^"']*)?["']/g)) {
    const normalized = canonicalizeUrl(match[1]);
    if (normalized) internalLinks.add(normalized);
  }
});

await mapLimit([...internalLinks], STATUS_CONCURRENCY, async (url) => {
  let result;
  try {
    result = await fetchStatus(url);
  } catch (error) {
    bad.push({ source: 'internal-link', url, status: 'FETCH_FAIL', error: error.message });
    return;
  }

  if (result.status >= 300 && result.status < 400) {
    redirects.push({ source: 'internal-link', url, status: result.status, location: result.location });
  } else if (result.status >= 400) {
    bad.push({ source: 'internal-link', url, status: result.status });
  }
});

const duplicateCanonicalRouteIssues = [...canonicalToRoutes.entries()]
  .filter(([, routes]) => routes.length > 1)
  .map(([canonical, routes]) => ({ canonical, routes }));

const summary = {
  origin: ORIGIN,
  fetchOrigin: FETCH_ORIGIN,
  sitemapUrls: sitemapUrls.length,
  internalLinks: internalLinks.size,
  badCount: bad.length,
  redirectCount: redirects.length,
  noindexCount: noindex.length,
  canonicalIssueCount: canonicalIssues.length,
  duplicateCanonicalRouteIssueCount: duplicateCanonicalRouteIssues.length,
  bad,
  redirects,
  noindex,
  canonicalIssues,
  duplicateCanonicalRouteIssues,
};

const outputDir = path.join(process.cwd(), 'scripts/output');
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, `strict-seo-crawl-${today}.json`), `${JSON.stringify(summary, null, 2)}\n`);

console.log(JSON.stringify(summary, null, 2));

if (
  summary.badCount ||
  summary.redirectCount ||
  summary.noindexCount ||
  summary.canonicalIssueCount ||
  summary.duplicateCanonicalRouteIssueCount
) {
  process.exit(1);
}
