# ldndecks.com — Prioritized Action Plan

**Date:** 2026-05-11
**Health score:** ~68 / 100 (B−, partial confidence)
**Headline blocker:** 50+ city template pages noindexed

---

## 🚨 7-Day Plan (Critical + High)

### Day 1 — Unblock indexation (Critical)
**Fix:** Remove `robots: { index: false }` from `/near-you/[county]/[city]` template pages **OR**, if those pages are intentionally thin, consolidate them into the standalone `/deck-builder-[city]-va` template and 301 the URLs.

**Implementation:**
- Locate the page-level `export const metadata = { robots: { index: false } }` (or equivalent in `generateMetadata`) on the `/near-you/[county]/[city]` route.
- Decide: each `/near-you/...` page must be genuinely unique (local HOA names, project gallery, named author, embedded map) before flipping to `index: true`. Templated thin content that gets indexed but ranks for nothing is worse than noindex.
- Recommended path: **consolidate** — pick the 10–15 highest-intent cities, migrate any local detail from `/near-you/[county]/[city]` into the corresponding `/deck-builder-[city]-va` page, then 301 the old URL.

**Validation:** Verify with `site:ldndecks.com near-you` in Google after 14 days; confirm via GSC URL Inspection on 3 sample URLs.

### Day 2 — Stop homepage cannibalization
- Add **footer keyword-anchored internal links** to each standalone city page: "Deck Builder Ashburn VA", "Deck Builder Leesburg VA", etc.
- Add a **homepage "Service Areas" section** with direct in-body links to the city pages (not just a link list — use natural anchor text inside a paragraph).
- Remove duplicate links from the homepage to its own URL (no self-canonicals via internal nav).

### Day 3 — Fix `/deck-builder-leesburg-va`
- Add a 3–5 image project gallery from Leesburg jobs.
- Embed a Google Map of Leesburg + adjacent HOAs.
- Add a "Communities We Serve in Leesburg" section: Lansdowne, River Creek, Belmont Country Club, Potomac Station.
- Replace the duplicate hero image with a unique Leesburg-specific image (a real local project beats stock).

### Day 4 — GEO quick wins (impact-to-effort ratio ~10x)
- Expand the FAQ answers from 25-40 words to **134-167 words each**, with specific numbers, costs, timelines.
- Change blog author schema from `@type: Organization` to `@type: Person` for Nick. Add `sameAs` links (LinkedIn, project gallery URLs).
- Add `OAI-SearchBot` to robots.txt allow list.
- Add 60-word **"Quick Answer"** boxes at the top of every blog article.

### Day 5 — Fix data conflicts
- Resolve three conflicts between the cost-calculator page and `llms-full.txt`: permit fees, PVC pricing, total project count. **Pick one source of truth** (cost calculator) and update `llms-full.txt` to match.

### Day 6-7 — Re-run the missing specialists
- Dispatch `seo-technical`, `seo-content`, `seo-schema`, `seo-local` with persistent output to `seo-blueprint/audit-2026-05-11/ldndecks/` to lock the final health score and surface remaining issues.

---

## 30-Day Plan (Medium impact, structural work)

### Week 2: Schema completion
- Add `LocalBusiness` / `HomeAndConstructionBusiness` to homepage (if not present) with `areaServed`, `geo`, `priceRange`, `image`, `aggregateRating`.
- Add `Review` / `AggregateRating` schema sitewide (pulled from real Google review data).
- Add `BreadcrumbList` schema to every non-homepage URL.
- Add `Service` schema to each service page; fix the missing `name` property flagged in this audit.
- Add `FAQPage` schema to pages that already display FAQs.

### Week 3: City-page deep-dive
For each top-priority city (Ashburn, Leesburg, Reston, Sterling, Herndon, Fairfax, Vienna, Great Falls):
- **Unique** hero image (real local project).
- 3-5 image local-project gallery.
- HOA / community names in H2 or above-fold body.
- Embedded Google Map.
- Local-author byline (`NamedAuthor` component is already in place — use it).
- Permit timeline detail (`NoVAPermitTimeline` component already exists — use it).
- 800-1,200 words minimum, unique per city.

### Week 4: Authority and AI citations
- Launch a YouTube channel: 4-6 short videos (project walk-throughs, material comparisons, install timelapses). Single strongest LLM-citation correlator.
- Add `Person` schema for Nick with `sameAs` → LinkedIn, YouTube, project case studies.
- Add a press / certifications block with logos (Trex Platinum Contractor, TimberTech, AZEK, NADRA, Loudoun County license number visible).
- Verify all third-party review profiles are linked from the contact page.

---

## Technical SEO Fixes
1. Re-run `seo-technical` to surface remaining issues.
2. Confirm middleware rename revert (commit `819913a`) didn't reintroduce a 302 path.
3. Confirm HSTS, CSP, X-Frame-Options headers on `next.config.mjs`.
4. Lighthouse pass for LCP/INP/CLS on homepage + top city pages.

## Content Fixes
1. Expand FAQ answers to 134-167 words.
2. Add Quick Answer boxes to blog posts.
3. Fix llms-full.txt vs cost calculator data conflicts.
4. Lock byline + author entity for every blog post via `NamedAuthor`.

## Schema Fixes
1. Fix the `Service` schema missing `name` property.
2. Add `LocalBusiness`, `BreadcrumbList`, `Review`, `FAQPage` where missing.
3. Switch blog author `@type` from `Organization` to `Person`.

## SXO / Conversion Fixes
1. **Un-noindex or consolidate the 50+ near-you city pages** (the single highest-leverage SEO move on this site).
2. Footer + homepage internal links to standalone city pages (kill homepage cannibalization).
3. Unique hero images per city page.
4. Above-fold HOA community names on Loudoun city pages.
5. Embedded Google Map on every city page.
