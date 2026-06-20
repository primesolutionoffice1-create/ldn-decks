import { SITE_URL } from '@/lib/seo';
import { blogPosts } from '@/lib/blogData';

function hasRecentNewsPosts() {
  const twoDaysMs = 2 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  return blogPosts.some((post) => {
    const date = new Date(post.date);
    return !Number.isNaN(date.getTime()) && now - date.getTime() <= twoDaysMs;
  });
}

export default function robots() {
  // Only block if we KNOW it's a non-production Vercel env (preview/development)
  // If env vars are undefined (custom hosting, missing config), assume production — never accidentally block
  const vercelEnv = process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV;
  const isExplicitlyNonProd = vercelEnv && vercelEnv !== 'production';

  if (isExplicitlyNonProd) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  // Tracking-parameter URLs should never be indexed (duplicate canonical risk).
  // Wildcard disallows are honored by Google + Bing; AI crawlers vary, so we
  // apply the same list to every UA rather than relying on a single * block.
  const PRIVATE_DISALLOWS = [
    '/admin/',
    '/api/',
    '/draft/',
  ];

  const TRACKING_DISALLOWS = [
    '/*?*utm_',
    '/*?*gclid=',
    '/*?*fbclid=',
    '/*?*msclkid=',
  ];
  const DISALLOWS = [...PRIVATE_DISALLOWS, ...TRACKING_DISALLOWS];

  // Search-facing crawlers explicitly allowed for citation visibility.
  const SEARCH_VISIBILITY_BOTS = [
    'Googlebot',
    'Bingbot',
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'PerplexityBot',
    'Applebot',
  ];

  // Training / extended-use crawlers stay blocked until owner approval.
  const TRAINING_BOTS = [
    'Google-Extended',
    'Applebot-Extended',
    'Amazonbot',
    'CCBot',
    'anthropic-ai',
    'Bytespider',
    'cohere-ai',
  ];

  // Bingbot is included in AI_BOTS (line 31), so the explicit Bingbot block
  // here was creating a duplicate stanza in the rendered robots.txt. Removed
  // 2026-05-28 to dedupe.
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOWS,
      },
      ...SEARCH_VISIBILITY_BOTS.map(userAgent => ({
        userAgent,
        allow: '/',
        disallow: DISALLOWS,
      })),
      ...TRAINING_BOTS.map(userAgent => ({
        userAgent,
        disallow: '/',
      })),
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/image-sitemap.xml`,
      ...(hasRecentNewsPosts() ? [`${SITE_URL}/news-sitemap.xml`] : []),
    ],
    // host directive removed 2026-05-29: Yandex (the only parser that reads it)
    // wants a bare domain ('ldndecks.com'), not a URL with scheme. Google and
    // Bing ignore it. Cleaner to omit than emit a malformed value.
  }
}
