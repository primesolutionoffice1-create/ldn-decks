import { SITE_URL } from '@/lib/seo';
import sitemap from '@/app/sitemap';
import { INDEXNOW_KEY } from '@/lib/indexnow';

// IndexNow API endpoint — submit URLs to Bing, Yandex for instant indexing
// Usage: POST /api/indexnow or GET /api/indexnow?submit=true
// Docs: https://www.indexnow.org/

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const submit = searchParams.get('submit');

  // Build complete URL list
  const urls = await buildAllUrls();

  if (submit === 'true') {
    // Actually submit to IndexNow
    const result = await submitToIndexNow(urls);
    return Response.json({ submitted: urls.length, result });
  }

  // Preview mode — show what would be submitted
  return Response.json({
    total: urls.length,
    key: INDEXNOW_KEY,
    note: 'Add ?submit=true to actually submit to IndexNow',
    urls,
  });
}

async function buildAllUrls() {
  const sitemapEntries = await sitemap();
  return [...new Set(sitemapEntries.map(entry => entry.url))];
}

async function submitToIndexNow(urls) {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'ldndecks.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls.slice(0, 10000), // IndexNow max 10k per request
      }),
    });
    return { status: response.status, ok: response.ok };
  } catch (error) {
    return { error: error.message };
  }
}
