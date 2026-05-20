# ldndecks.com — Technical SEO Audit (Codebase-Grounded)

**Date:** 2026-05-11 · **Method:** Direct source-code inspection (Read/Glob/Grep on `/Users/ldndecks/ldn-decks-next/`) + live HTTP behavior inferred from configuration · **Score:** 78 / 100

---

## 1. Crawlability

### robots.txt — [src/app/robots.js](src/app/robots.js)
- ✅ Dynamic route handler; safe production fallback (only blocks when `VERCEL_ENV` explicitly set to non-production).
- ✅ Tracking parameter wildcards disallowed: `/*?*utm_`, `/*?*gclid=`, `/*?*fbclid=`, `/*?*msclkid=` — applied to every UA, not just `*`.
- ✅ AI bots explicitly allowed: GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, Amazonbot, ClaudeBot, Bytespider, CCBot, Applebot-Extended, cohere-ai.
- ✅ Sitemap declarations: `/sitemap.xml`, `/news-sitemap.xml`, `/image-sitemap.xml`, plus `host: SITE_URL`.
- ❌ **OAI-SearchBot missing** from the AI bot allowlist (OpenAI's distinct user-agent for ChatGPT Search — separate from GPTBot training crawler).
- ⚠ `Bingbot` gets a 1-second crawlDelay — appropriate for a small-mid site, but verify Bing IndexNow is wired (see §9).

### Sitemap — [src/app/sitemap.js](src/app/sitemap.js)
- ✅ Tiered `lastModified` (Tier1 = today, Tier2 = -7d, Tier3 = -30d, Tier4 = -180d) — derived from build time, never stale.
- ✅ Homepage carries embedded video sitemap entry (`/introvideo.mp4`).
- ✅ Dynamic blog + showcase paths pulled from canonical data sources.
- ✅ `EXCLUDE_PATHS` filter correctly removes all `/near-you/*` from the final XML, matching the noindex behavior.
- ⚠ Lines 101–104 add `/near-you`, `/near-you/loudoun-county`, `/near-you/fairfax-county`, `/near-you/prince-william-county` to `staticPages`, then the exclude filter strips them — **dead entries**, should be deleted for clarity.
- ⚠ Lines 49–50 list `/llms.txt` and `/llms-full.txt` in `EXCLUDE_PATHS` while also adding them to `staticPages` at lines 235–236 — same dead-add pattern.
- ⚠ Sitemap omits paths for the 22 standalone city pages outside the explicit Tier1.5 batch — verify [these standalone routes](src/app/) are emitted via the `staticPages` array (manual spot-check: deck-builder-{ashburn|leesburg|reston|mclean|sterling|centreville|fairfax|chantilly|herndon|woodbridge|tysons|alexandria|arlington|brambleton|burke|south-riding|gainesville|haymarket|oakton|falls-church|springfield|lorton|purcellville|stafford|bristow|great-falls|vienna|manassas} are all present). All 28 canonical cities ARE in the sitemap.
- ✅ Image-sitemap.xml + news-sitemap.xml route handlers exist at [src/app/image-sitemap.xml/route.js](src/app/image-sitemap.xml/route.js) and [src/app/news-sitemap.xml/route.js](src/app/news-sitemap.xml/route.js) — no broken sitemap references from robots.

### Middleware — [src/middleware.js](src/middleware.js)
- ✅ `www.ldndecks.com` → `ldndecks.com` 301 (NextResponse.redirect with status 301 explicit). Backed up redundantly in [next.config.mjs:295-304](next.config.mjs).
- ✅ Matcher correctly excludes `api`, `_next`, `static`, `favicon`, `sitemap.xml`, `robots.txt`, `.webp` — no asset-tax.

### Redirect chains
- ✅ Single-hop 301s in [next.config.mjs:4-294](next.config.mjs) — every legacy URL → canonical destination directly.
- ✅ `permanent: true` everywhere (= 308 in Next 14+, treated as 301 by all major crawlers).
- ✅ 90+ legacy URL redirects covering old tag pages, old slug variants, near-you canonical-city paths.

---

## 2. Indexability

### Canonical declarations
- ✅ Every page using `buildMetadata` from [src/lib/seo.js](src/lib/seo.js) emits a self-referential `alternates.canonical` from `SITE_URL + path`.
- ✅ Root layout sets `metadataBase` ([src/app/layout.js:18](src/app/layout.js#L18)).

### Noindex audit — **CRITICAL FINDING REVISED**
The prior SXO specialist claimed "50+ city pages noindexed." Ground truth from [src/lib/seo.js:24-28](src/lib/seo.js#L24-L28):

```js
if (path.startsWith('/near-you/') || path === '/showcase/rooftop-deck-washington-dc') {
    finalNoIndex = true;
}
```

**Every path under `/near-you/` is noindexed by buildMetadata, plus `/near-you` itself.** Affected routes:

| Bucket | Count | Examples |
|---|---|---|
| Top hub | 1 | `/near-you` |
| County hubs | 5 | `/near-you/loudoun-county`, `/near-you/fairfax-county`, `/near-you/prince-william-county`, `/near-you/arlington-county`, `/near-you/stafford-county` |
| Non-canonical city template | 40 | `/near-you/{county}/{slug}` for cities NOT in `canonicalCities` set ([src/data/cityData.js:62-69](src/data/cityData.js#L62-L69)) |
| Broken showcase | 1 | `/showcase/rooftop-deck-washington-dc` |
| **Total noindexed** | **47** | |

Canonical cities (28 standalone `/deck-builder-{slug}-va` routes) ARE indexable.

**This is an intentional architecture choice**, not a bug — see code comment in [src/app/near-you/[county]/[city]/page.js:75-77](src/app/near-you/[county]/[city]/page.js#L75-L77). But the **business question** is whether to (a) keep it, (b) consolidate non-canonical content into canonical pages and 301 the rest, or (c) promote more cities to canonical with unique content. Currently 40 cities have ZERO indexable surface area.

### Status-code paths
- ✅ `/near-you/[county]/[city]` with unknown city → `notFound()` → 404 ([line 98](src/app/near-you/[county]/[city]/page.js#L98)).
- ✅ Legacy URLs → 301 → canonical destination.
- ❓ Live-fetch verification not done in this pass; no obvious 5xx vectors in code.

---

## 3. Security headers — [next.config.mjs:306-362](next.config.mjs#L306-L362)

| Header | Value | Verdict |
|---|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | ✅ HSTS-preload-ready |
| `X-Frame-Options` | `SAMEORIGIN` | ✅ |
| `X-Content-Type-Options` | `nosniff` | ✅ |
| `Referrer-Policy` | `origin-when-cross-origin` | ✅ |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | ✅ |
| `X-DNS-Prefetch-Control` | `on` | ✅ |
| `Content-Security-Policy` | **NOT SET** | ⚠ Medium — CSP would add defense-in-depth, but conflicts with the dynamic-script GTM setup. Lab CSP with `report-only` first. |
| `Cross-Origin-Opener-Policy` | not set | ⚠ Low |
| `Cross-Origin-Embedder-Policy` | not set | ⚠ Low |
| `X-Robots-Tag` | only on non-production envs ([line 326-333](next.config.mjs#L326-L333)) | ✅ Safe fallback — production never accidentally noindexes |

### Cache headers
- ✅ `/images/*` and `*.webp` immutable, 1 year.
- ✅ `/showcase/*` immutable, 1 year.
- ✅ `/team/*` 30-day cache.

---

## 4. URL structure
- ✅ Lowercase, hyphenated, no trailing slash, no parameters in body URLs.
- ✅ Geo URLs follow consistent `/deck-builder-{slug}-va` pattern.
- ✅ Service URLs follow `/services/{slug}` pattern.
- ⚠ Mixed convention: `/deck-permit-{county}-county-virginia` vs `/loudoun-county-hoa-deck-rules` vs `/hoa-deck-rules-northern-virginia` — 3 different slug conventions for permit/HOA content. Audit for cannibalization candidates (see Content audit).
- ⚠ Both `/composite-decks` (service hub) AND `/composite-deck-cost-northern-virginia` (commercial keyword page) AND `/composite-deck-vs-wood-deck-virginia` (informational) exist — verify in Content audit that internal links point to the right one per intent.

---

## 5. Mobile optimization
- ✅ `<meta name="viewport">` auto-injected by Next.js metadata API.
- ✅ Image config: AVIF + WebP formats, deviceSizes [640, 750, 828, 1080, 1200, 1920], imageSizes [16-384].
- ❓ No physical breakpoint test in this pass — should be verified with Lighthouse mobile.

---

## 6. Core Web Vitals (lab assessment from code)

### LCP
- ✅ Hero preloaded with `fetchPriority="high"` in root layout ([src/app/layout.js:51](src/app/layout.js#L51)): `/home-page-ldn.webp`.
- ✅ DNS prefetch + preconnect to GTM ([lines 52-54](src/app/layout.js#L52-L54)).
- ✅ City-page hero images use `priority` prop on Next `<Image>` (verified Ashburn line 137, Leesburg pattern matches).
- ⚠ Homepage WebP preload, but city pages preload `/images/img{NN}.jpeg` — 16 city pages share `img36.jpeg` (potentially a 100KB+ image). The preload-link from layout is for the homepage hero only; city pages don't add their own `<link rel="preload">`. Verify whether the first-byte HTML carries a usable LCP hint on city pages.

### INP / TBT
- ✅ Below-fold components dynamically imported in [src/app/page.js:9-25](src/app/page.js#L9-L25) — reduces hydration weight.
- ✅ GTM loaded `afterInteractive`, Ahrefs analytics `lazyOnload`, consent defaults `beforeInteractive`.
- ⚠ `PromoModal` is dynamic — verify it doesn't ship interactive JS to non-modal users.

### CLS
- ✅ Hero image has explicit container dimensions, `objectFit: 'cover'`, `fill` + `sizes`.
- ⚠ No bug evident in code, but live measurement required.

### Preload duplication audit
- ✅ Single `<link rel="preload" as="image" href="/home-page-ldn.webp" fetchPriority="high">` at layout level — no duplicate.
- ✅ Single `<link rel="dns-prefetch">` and `<link rel="preconnect">` for GTM.

---

## 7. Structured data presence (catalog only — schema audit covers validation)
- ✅ Global Organization + WebSite emitted once via [src/components/StructuredData.jsx](src/components/StructuredData.jsx) → builds clean `@graph` from `business.js` single source.
- ✅ Homepage adds WebPage schema with `speakable`, `significantLink`, `isPartOf`, `about` references.
- ⚠ 16 pages emit page-level LocalBusiness schemas — see Schema audit for duplication risks.
- ⚠ 6 FAQ components + 30+ pages emit FAQPage schemas — see Schema audit for duplication.

---

## 8. JavaScript rendering
- ✅ Next.js App Router static generation — all pages prerender to HTML.
- ✅ Critical content (titles, body copy, schemas) emitted server-side.
- ⚠ Interactive components (`ServicesFAQ`, `PromoModal`) marked `"use client"` — accordion state, but content still in initial HTML.
- ✅ No critical content in client-only code paths detected.

---

## 9. IndexNow protocol
- ✅ IndexNow key file present at `public/ldndecks2026indexnow.txt`.
- ❓ No evidence of automated submission integration on deploy. Manual ping-on-publish or Vercel deploy hook recommended.

---

## Internal linking depth — **Validated finding**

Click-depth from homepage to each city page:

| Path | Depth | PageRank flow |
|---|---|---|
| Home → /areas-we-serve → city | **2 clicks** | Single hub → 28 cities (signal diffuses) |
| Home → city page (direct) | ❌ Not present | Footer has 0 city links; HomeQuickLinks has 0; Hero has 0 |
| Home → /services → city (via ServiceAreasGrid) | 3 clicks | Diluted further |

**Footer link inventory** ([src/components/Footer.jsx](src/components/Footer.jsx)): 24 `<Link>` elements. ZERO direct city-page links.

**Homepage QuickLinks** ([src/components/HomeQuickLinks.jsx](src/components/HomeQuickLinks.jsx)): 6 links, all to /before-and-after, /composite-deck-cost-northern-virginia, /reviews, /areas-we-serve, /team, /deck-cost-calculator. Zero city pages.

**Conclusion:** PageRank concentrates on the homepage and `/areas-we-serve`. The standalone city pages get hit only by an external query rewriting "deck builder ashburn va" through Google's index — they have very limited internal-link signal to compete with the homepage when both surface for the same query.

---

## Findings summary

See **TOP-20-FIXES.md** and **ACTION-PLAN.md** in this directory.

See **HEALTH-SCORE.md** for the weighted category score (78 / 100).
