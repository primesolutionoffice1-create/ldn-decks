import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ORIGIN = 'https://ldndecks.com';
const FETCH_ORIGIN = process.env.SEO_AUDIT_ORIGIN || ORIGIN;
const FETCH_TIMEOUT_MS = 8000;
const FETCH_RETRIES = Number(process.env.SEO_LINK_AUDIT_FETCH_RETRIES || 2);
const CRAWL_CONCURRENCY = Number(process.env.SEO_LINK_AUDIT_CRAWL_CONCURRENCY || 12);
const STATUS_CONCURRENCY = Number(process.env.SEO_LINK_AUDIT_STATUS_CONCURRENCY || 24);
const today = localDateStamp();

function normalizeInternalUrl(value) {
  try {
    const url = new URL(value, ORIGIN);
    if (url.origin !== ORIGIN) return null;
    if (url.pathname === '/_next/image') return null;
    if (url.pathname.startsWith('/_next/static/')) return null;
    url.hash = '';
    return url.href.replace(/\/$/, '');
  } catch {
    return null;
  }
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

async function fetchText(url) {
  return withRetry(async () => {
    const response = await fetch(url.replace(ORIGIN, FETCH_ORIGIN), {
      headers: { 'user-agent': 'LDNDecksLinkAudit/1.0 (+https://ldndecks.com)' },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    return response.text();
  });
}

async function fetchStatus(url) {
  return withRetry(async () => {
    let response = await fetch(url.replace(ORIGIN, FETCH_ORIGIN), {
      method: 'HEAD',
      redirect: 'manual',
      headers: { 'user-agent': 'LDNDecksLinkAudit/1.0 (+https://ldndecks.com)' },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });

    if (response.status === 405) {
      response = await fetch(url.replace(ORIGIN, FETCH_ORIGIN), {
        method: 'GET',
        redirect: 'manual',
        headers: { 'user-agent': 'LDNDecksLinkAudit/1.0 (+https://ldndecks.com)' },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
    }

    return {
      status: response.status,
      location: response.headers.get('location'),
    };
  });
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;

  async function worker() {
    while (next < items.length) {
      const current = next++;
      results[current] = await fn(items[current], current);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

const sitemapXml = await fetchText(`${ORIGIN}/sitemap.xml`);
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(match => match[1])
  .filter(url => url.startsWith(ORIGIN));

const links = new Set(sitemapUrls.map(url => url.replace(/\/$/, '')));
const bad = [];

await mapLimit(sitemapUrls, CRAWL_CONCURRENCY, async (url) => {
  let html = '';
  try {
    html = await fetchText(url);
  } catch {
    bad.push({ source: 'sitemap-fetch', url, status: 'FETCH_FAIL' });
    return;
  }
  for (const match of html.matchAll(/(?:href|src)=["']([^"'#]+)(?:#[^"']*)?["']/g)) {
    const normalized = normalizeInternalUrl(match[1]);
    if (normalized) links.add(normalized);
  }
});

await mapLimit([...links], STATUS_CONCURRENCY, async (url) => {
  try {
    const result = await fetchStatus(url);
    if (result.status >= 400) {
      bad.push({ url, status: result.status });
    }
  } catch {
    bad.push({ url, status: 'FETCH_FAIL' });
  }
});

const summary = {
  sitemapUrls: sitemapUrls.length,
  internalLinks: links.size,
  badCount: bad.length,
  bad,
};

const outputDir = path.join(process.cwd(), 'scripts/output');
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, `seo-link-audit-${today}.json`), `${JSON.stringify(summary, null, 2)}\n`);

console.log(JSON.stringify(summary, null, 2));

if (bad.length) {
  process.exit(1);
}
