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
    'GPTBot',
    'ChatGPT-User',
    'Google-Extended',
    'PerplexityBot',
    'Amazonbot',
    'ClaudeBot',
    'Bytespider',
    'CCBot',
    'Applebot-Extended',
    'cohere-ai',
    'OAI-SearchBot',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: TRACKING_DISALLOWS,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: TRACKING_DISALLOWS,
        crawlDelay: 1,
      },
      ...AI_BOTS.map(userAgent => ({
        userAgent,
        allow: '/',
        disallow: TRACKING_DISALLOWS,
      })),
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/news-sitemap.xml`, `${SITE_URL}/image-sitemap.xml`],
    host: SITE_URL,
  }
}
