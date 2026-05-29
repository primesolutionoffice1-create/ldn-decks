import { SITE_URL } from '@/lib/seo';

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
  const TRACKING_DISALLOWS = [
    '/*?*utm_',
    '/*?*gclid=',
    '/*?*fbclid=',
    '/*?*msclkid=',
  ];

  // AI crawlers explicitly allowed for citation visibility.
  const AI_BOTS = [
    'Googlebot',
    'Bingbot',
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'CCBot',
    'Applebot',
    'Applebot-Extended',
    'Google-Extended',
    'Amazonbot',
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
        disallow: TRACKING_DISALLOWS,
      },
      ...AI_BOTS.map(userAgent => ({
        userAgent,
        allow: '/',
        disallow: TRACKING_DISALLOWS,
      })),
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/image-sitemap.xml`],
    // host directive removed 2026-05-29: Yandex (the only parser that reads it)
    // wants a bare domain ('ldndecks.com'), not a URL with scheme. Google and
    // Bing ignore it. Cleaner to omit than emit a malformed value.
  }
}
