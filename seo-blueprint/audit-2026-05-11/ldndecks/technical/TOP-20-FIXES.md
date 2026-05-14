# Technical SEO — Top 20 Fixes (ldndecks.com)

| # | Fix | Affected URLs | Severity | Traffic Impact | Effort | Code Reference |
|---|---|---|---|---|---|---|
| 1 | Add `OAI-SearchBot` to AI bot allowlist | sitewide (robots.txt) | Medium | Medium (ChatGPT Search visibility) | 5 min | [src/app/robots.js:29-40](src/app/robots.js#L29-L40) — append `'OAI-SearchBot'` to `AI_BOTS` array |
| 2 | Decide noindex `/near-you/*` strategy: consolidate vs promote vs delete | 47 routes | High | Very High (40 cities have ZERO indexable surface) | 1 day discovery + 2 weeks content | [src/lib/seo.js:24-28](src/lib/seo.js#L24-L28) |
| 3 | Add city-page links to footer (top 8-12 cities) | sitewide | High | High (kill homepage cannibalization) | 1 hour | [src/components/Footer.jsx](src/components/Footer.jsx) |
| 4 | Add city-page links to `HomeQuickLinks` (top 4 cities) | / | Medium | Medium | 30 min | [src/components/HomeQuickLinks.jsx:5-36](src/components/HomeQuickLinks.jsx#L5-L36) |
| 5 | Add `<link rel="preload">` for city-page hero image | 28 standalone city pages | Medium | Medium (LCP) | 1 hour | per-page metadata or per-page `<head>` |
| 6 | Replace duplicated hero images on city pages (img36 used 16x, img37 14x, img17 10x) | 28 city pages | High | Medium (visual + freshness signal) | 1 week (photography + selection) | grep `image1=\"/images/img36\\.jpeg\"` |
| 7 | Remove dead `/near-you` entries from sitemap staticPages | sitemap.xml | Low | Low (code hygiene) | 10 min | [src/app/sitemap.js:101-104](src/app/sitemap.js#L101-L104), 235-236 |
| 8 | Add Content-Security-Policy header in report-only mode | sitewide | Medium | Low (security defense-in-depth) | 1 day | [next.config.mjs:306-362](next.config.mjs#L306-L362) |
| 9 | Wire IndexNow auto-submission on deploy | new + updated URLs | Medium | Medium (Bing freshness) | 4 hours | Vercel deploy hook + Bing IndexNow API |
| 10 | Verify all 28 canonical city standalone routes in sitemap (spot-check) | sitemap.xml | Low | Low | 10 min | [src/app/sitemap.js](src/app/sitemap.js) |
| 11 | Slug-convention cleanup: pick one between `/deck-permit-{county}-county-virginia` vs `/loudoun-county-hoa-deck-rules` vs `/hoa-deck-rules-northern-virginia` | 3 URLs | Medium | Medium (cannibalization) | 1 day audit | [src/app/](src/app/) — also see Content audit |
| 12 | Add `Cross-Origin-Opener-Policy: same-origin` header | sitewide | Low | Low (security) | 15 min | [next.config.mjs:310-320](next.config.mjs#L310-L320) |
| 13 | Add `Cross-Origin-Embedder-Policy: credentialless` header | sitewide | Low | Low (security) | 15 min | [next.config.mjs:310-320](next.config.mjs#L310-L320) |
| 14 | Verify mobile Lighthouse on top 5 city pages (LCP/INP/CLS lab) | top 5 cities | Medium | Medium (CWV) | 2 hours | n/a |
| 15 | Confirm `notFound()` path on `/near-you/{county}/{slug}` for invalid city → 404 in production | `/near-you/[county]/[city]` | Low | Low | 5 min verify | [src/app/near-you/[county]/[city]/page.js:98](src/app/near-you/[county]/[city]/page.js#L98) |
| 16 | Add `<link rel="preconnect">` for Ahrefs analytics | sitewide | Low | Low (CWV) | 5 min | [src/app/layout.js:53](src/app/layout.js#L53) — already has DNS prefetch; upgrade to preconnect |
| 17 | Audit lazy-loaded modal (`PromoModal`) for hydration-time interactivity cost | / | Low | Low (INP) | 30 min | [src/app/page.js:9-10](src/app/page.js#L9-L10) |
| 18 | Confirm `/showcase/rooftop-deck-washington-dc` is actually broken vs intentionally hidden | /showcase/rooftop-deck-washington-dc | Low | Low | 10 min | [src/lib/seo.js:26](src/lib/seo.js#L26) |
| 19 | Consider promoting `Bingbot` crawlDelay removal (current: 1s) once crawl-budget is solid | sitewide | Low | Low (Bing) | 5 min | [src/app/robots.js:50-54](src/app/robots.js#L50-L54) |
| 20 | Document the canonical-city set in a single CHANGELOG or onboarding doc; the 28-name list is in `cityData.js` but not surfaced anywhere visible to non-engineers | n/a | Low | Low | 30 min | [src/data/cityData.js:62-69](src/data/cityData.js#L62-L69) |
