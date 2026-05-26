const ORIGIN = 'https://ldndecks.com';
const FETCH_ORIGIN = process.env.SEO_AUDIT_ORIGIN || ORIGIN;
const FETCH_TIMEOUT_MS = 8000;

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

async function fetchText(url) {
  const response = await fetch(url.replace(ORIGIN, FETCH_ORIGIN), {
    headers: { 'user-agent': 'LDNDecksLinkAudit/1.0 (+https://ldndecks.com)' },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  return response.text();
}

async function fetchStatus(url) {
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
}

const sitemapXml = await fetchText(`${ORIGIN}/sitemap.xml`);
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(match => match[1])
  .filter(url => url.startsWith(ORIGIN));

const links = new Set(sitemapUrls.map(url => url.replace(/\/$/, '')));
const bad = [];

for (const url of sitemapUrls) {
  let html = '';
  try {
    html = await fetchText(url);
  } catch {
    bad.push({ source: 'sitemap-fetch', url, status: 'FETCH_FAIL' });
    continue;
  }

  for (const match of html.matchAll(/(?:href|src)=["']([^"'#]+)(?:#[^"']*)?["']/g)) {
    const normalized = normalizeInternalUrl(match[1]);
    if (normalized) links.add(normalized);
  }
}

for (const url of links) {
  try {
    const result = await fetchStatus(url);
    if (result.status >= 400) {
      bad.push({ url, status: result.status });
    }
  } catch {
    bad.push({ url, status: 'FETCH_FAIL' });
  }
}

console.log(JSON.stringify({
  sitemapUrls: sitemapUrls.length,
  internalLinks: links.size,
  badCount: bad.length,
  bad,
}, null, 2));

if (bad.length) {
  process.exit(1);
}
