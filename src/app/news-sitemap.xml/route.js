import { blogPosts } from '@/lib/blogData';
import { SITE_URL } from '@/lib/seo';

// Google News Sitemap helps blog posts get indexed faster and appear in Google News
// https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap

export async function GET() {
  // Google News requires posts within 2 days. Older posts cause sitemap rejection.
  const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const withDates = blogPosts
    .map(post => ({ post, date: new Date(post.date) }))
    .filter(({ date }) => !isNaN(date.getTime()));
  const fresh = withDates.filter(({ date }) => now - date.getTime() <= TWO_DAYS_MS);
  // Google News only features posts under 2 days old, but an EMPTY urlset makes
  // Search Console report "Missing XML tag" (no <url> element). When nothing is
  // fresh, fall back to the single most recent post with its real date: the XML
  // stays valid, Google simply skips the stale entry for the News surface.
  const selected = fresh.length
    ? fresh
    : withDates.sort((a, b) => b.date - a.date).slice(0, 1);
  const entries = selected
    .map(({ post, date }) => {
      const isoDate = date.toISOString();
      return `
    <url>
      <loc>${SITE_URL}/blog/${post.slug}</loc>
      <news:news>
        <news:publication>
          <news:name>Loudoun Decks</news:name>
          <news:language>en</news:language>
        </news:publication>
        <news:publication_date>${isoDate}</news:publication_date>
        <news:title>${escapeXml(post.title)}</news:title>
      </news:news>
    </url>`;
    })
    .filter(Boolean)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
