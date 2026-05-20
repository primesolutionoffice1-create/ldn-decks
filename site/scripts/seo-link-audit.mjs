const ORIGIN = 'https://ldndecks.com';

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
  const response = await fetch(url, {
    headers: { 'user-agent': 'LDNDecksLinkAudit/1.0 (+https://ldndecks.com)' },
  });
  return response.text();
}

async function fetchStatus(url) {
  let response = await fetch(url, {
    method: 'HEAD',
    redirect: 'manual',
    headers: { 'user-agent': 'LDNDecksLinkAudit/1.0 (+https://ldndecks.com)' },
  });

  if (response.status === 405) {
    response = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      headers: { 'user-agent': 'LDNDecksLinkAudit/1.0 (+https://ldndecks.com)' },
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
