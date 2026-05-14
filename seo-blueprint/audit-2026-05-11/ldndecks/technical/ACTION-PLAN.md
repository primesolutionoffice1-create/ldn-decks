# Technical SEO — Action Plan (ldndecks.com)

## Today (≤ 1 hour)
1. **Add `OAI-SearchBot` to AI bot allowlist** ([src/app/robots.js:29-40](src/app/robots.js#L29-L40)) — 5 min.
2. **Audit sitemap dead-add entries** for `/near-you` and `/llms.txt` paths that get filtered ([src/app/sitemap.js:101-104](src/app/sitemap.js#L101-L104), 235-236) — 10 min.

## Day 2-3
3. **Add 8-12 city links to footer** ([src/components/Footer.jsx](src/components/Footer.jsx)). Use the canonical-city set from `cityData.js`; pick highest-intent markets (Ashburn, Leesburg, Reston, McLean, Sterling, Fairfax, Vienna, Great Falls).
4. **Add top 4 city links to HomeQuickLinks** as a new section ("Top Service Areas") below the existing 6 cards.

## Week 1
5. **Decide noindex `/near-you/*` strategy** — convene with content team. Three options:
   - **Option A (recommended):** Promote 6-8 high-intent non-canonical cities (Aldie, Stone Ridge, Broadlands, Lansdowne, Annandale, Lake Ridge, Crystal City, Arlington-Rosslyn) to canonical by writing standalone unique pages, then 301 their `/near-you/` paths to the new canonical pages. Reduce noindex set from 40 → 32.
   - **Option B:** Keep noindex on the long tail but make each remaining noindex page contain UNIQUE local detail (HOA names, named neighborhoods, recent project example) so when the noindex is eventually lifted, the pages are ready.
   - **Option C:** Consolidate non-canonical city template into a single robust `/areas-we-serve` page with embedded city sub-sections; 301 all `/near-you/` paths to anchor fragments on that hub.
6. **Run Lighthouse mobile audits** on top 5 city pages. Lock LCP < 2.5s, INP < 200ms, CLS < 0.1.

## Week 2
7. **Replace duplicate hero images** on city pages (img36/img37/img17 used 40 times combined across 28 pages). Real local projects beat stock for both visual differentiation and AI image-search recognition.
8. **Add `<link rel="preload">`** for city-page hero images via per-page metadata block.
9. **Wire IndexNow auto-submission** on deploy (Vercel deploy hook → POST to `https://api.indexnow.org/indexnow` with the new URL + key file path).

## Week 3
10. **CSP report-only**: ship a Content-Security-Policy with `Content-Security-Policy-Report-Only` header for 2 weeks, watch the report endpoint, then flip to enforced.

## Month 1-3
11. **Slug-convention cleanup**: pick one canonical convention for HOA/permit content (recommend `/{county}-county-{topic}`). Plan 301s to consolidate.
12. **Document the canonical-city set** in `seo-blueprint/CITY-ARCHITECTURE.md` for non-engineer visibility.

## Verification gates
- After each city-page hero image replacement: re-fetch page, confirm `og:image` differs across cities.
- After footer change: GSC Performance report should show city pages gaining impression share within 4-6 weeks.
- After CSP rollout: Search Console "Mobile usability" + "Page experience" should not regress.
