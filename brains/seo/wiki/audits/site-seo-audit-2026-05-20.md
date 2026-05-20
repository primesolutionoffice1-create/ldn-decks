---
type: "audit"
title: "Site SEO Audit 2026-05-20"
location: "ldndecks.com"
created: "2026-05-20"
updated: "2026-05-20"
status: "active"
source: "[[site-seo-audit-source-2026-05-20]]"
---

# Site SEO Audit 2026-05-20

Full SEO audit of ldndecks.com (Loudoun Decks). Health Score **75/100**.
Source: [[site-seo-audit-source-2026-05-20]]. See [[Health Scorecard]] and
[[Action Roadmap]].

Severity uses the brain scale: **blocker / high / medium / low**.
Status: **open / shipped / wontfix**.

---

## Blocker

### C1 — Unverified Manassas address (NAP inconsistency) — `shipped`
- **Finding:** "8735 Quarry Rd, Unit 102, Manassas" appeared in Prince William
  page copy and `llms-full.txt` but in no schema and no citation, contradicting
  the single Centreville NAP on GBP/BBB/Yelp.
- **Evidence:** `site/src/app/near-you/prince-william-county/page.js`,
  `site/src/app/llms-full.txt/route.js`.
- **Why it matters:** inconsistent NAP directly suppresses Map Pack rankings.
- **Recommendation:** removed the Manassas address; Centreville is canonical
  (owner-confirmed). Shipped in commit `ea5a0a9` (2026-05-20).
- `Priority score: 9/10 | Revenue: H | Urgency: H | Difficulty: S | Speed: fast | Confidence: H`

### C2 — Stale review data (5.0 / 41) — `open`
- **Finding:** `business.js` and `LocalBusinessSchema.jsx` hardcode
  `aggregateRating` 5.0 / reviewCount 41 on all 28 city pages; `/reviews`
  displays only 8 reviews while claiming "41+".
- **Evidence:** `site/src/lib/business.js`, `site/src/components/LocalBusinessSchema.jsx`,
  `site/src/app/reviews/page.js`.
- **Why it matters:** a mismatched/stale rating is a structured-data policy risk
  and erodes trust signals.
- **Recommendation:** sync the schema rating + count to the real current GBP
  numbers across all references. **Needs owner input: current rating + count.**
- `Priority score: 8/10 | Revenue: M | Urgency: H | Difficulty: S | Speed: fast | Confidence: H`

---

## High

### H1 — 40 noindexed URLs in sitemap.xml — `shipped`
- `sitemap.js` emitted `/near-you/{county}/{city}` URLs that `seo.js` marks
  `noindex` → "Submitted URL marked noindex" in Search Console. Fixed: those
  paths no longer enter the sitemap. Shipped in `ea5a0a9`.
- `Priority score: 7/10 | Revenue: M | Urgency: M | Difficulty: S | Speed: fast | Confidence: H`

### H2 — Fragmented schema entity (`#organization`) — `open`
- Three JSON-LD nodes claim `@id …#organization` with different `@type`s
  (`page.tsx` mainEntity, `reviews/page.js`, global `StructuredData`);
  `LocalBusinessSchema.jsx` mints 28+ per-city `@id`s. Google cannot
  consolidate the entity.
- **Recommendation:** one canonical `#organization` from `business.js`; all
  other nodes reference it by `@id`. Batch 2.
- `Priority score: 7/10 | Revenue: M | Urgency: M | Difficulty: M | Speed: med | Confidence: H`

### H3 — Brand-name drift in schema — `open`
- `ldn-decks-reviews-yelp/page.js` sets schema `name: "LDN Decks"`; GBP name is
  "Loudoun Decks". Fix in Batch 2.
- `Priority score: 6/10 | Revenue: M | Urgency: M | Difficulty: S | Speed: fast | Confidence: H`

### H4 — Inappropriate news-sitemap.xml — `shipped`
- A deck contractor is not a Google News publisher. Removed the
  `news-sitemap.xml` reference from `robots.js`. Shipped in `ea5a0a9`.
- `Priority score: 5/10 | Revenue: L | Urgency: M | Difficulty: S | Speed: fast | Confidence: H`

### H5 — Doorway-page risk on the city-page fleet — `open`
- ~15 of the 28 `/deck-builder-{city}-va` pages share 60–70% prose;
  `composite-decks` repeats one verbatim sentence 3×. At fleet scale this
  matches the Sept 2025 QRG doorway pattern.
- **Recommendation:** add genuine local content (neighborhoods, HOA/permit
  specifics, local projects) to the weakest pages. Phase 4.
- `Priority score: 8/10 | Revenue: H | Urgency: M | Difficulty: L | Speed: slow | Confidence: M`

### H6 — Indexable pages missing from sitemap — `shipped`
- `/timbertech-decks` and `/about/warranty` were live and indexable but absent
  from `staticPages`. Added. Shipped in `ea5a0a9`.
- `Priority score: 5/10 | Revenue: M | Urgency: M | Difficulty: S | Speed: fast | Confidence: H`

### H7 — Weak review acquisition — `open`
- `/reviews` links a Maps *search* URL, not the direct `g.page/r/.../review`
  link; no post-project review funnel; ~65-day review-velocity gap.
- **Recommendation:** direct review link + SMS/email review request after
  project completion. Phase 5 (recommendations; owner executes GBP).
- `Priority score: 8/10 | Revenue: H | Urgency: H | Difficulty: M | Speed: med | Confidence: H`

---

## Medium

- **M1 — `priceRange` mismatch** (`$$$` vs `$$-$$$$`) — `shipped` (merged branch
  `claude/objective-einstein-29f0fb`).
- **M2 — `LocalBusinessSchema.jsx` `sameAs` missing 3 entries** (TikTok,
  BuildZoom, MapQuest) vs `business.js` — `open`, Batch 2.
- **M3 — City `aggregateRating` missing `worstRating`** — `open`, Batch 2.
- **M4 — Schema `@type` inconsistent** (GeneralContractor / HomeAndConstruction
  Business / LocalBusiness) — `open`, Batch 2.
- **M5 — `/areas-we-serve` links to noindexed `/near-you` URLs** — link-equity
  leak; point to `/deck-builder-{city}-va` — `open`, Phase 4.
- **M6 — 12 duplicate redirect rules in `next.config.mjs`** (dead code) — `open`.
- **M7 — Mixed 308/301 redirects** in `next.config.mjs` — `open`.
- **M8 — Orphaned stacked headings** (H2→H3, no copy) on Ashburn/Leesburg — `open`.
- **M9 — No author byline / E-E-A-T attribution** on informational pages — `open`.
- **M10 — Geo precision 4 decimals** (Schema.org recommends 5) — `open`.
- **M11 — CSP report-only, not enforcing** (intentional window — confirm) — `open`.

## Low

- **L1 — Unused `priority`/`freq` keys** on ~190 sitemap entries — `open`.
- **L2 — TIER1 `lastmod`** re-stamps ~170 pages every deploy — `open`.
- **L3 — `GoogleMapEmbed`** uses a city search, not a GBP Place embed — `open`.
- **L4 — `/deck-builder-brambleton-va`** may cannibalize Ashburn — `open`.
- **L5 — `llms.txt`/`llms-full.txt`** in both `staticPages` and `EXCLUDE_PATHS` — `open`.
- **L6 — Blog FAQ answers** duplicate on-page table content — `open`.

---

## Related

- [[wiki/audits/_index|Audits Hub]]
- [[site-seo-audit-source-2026-05-20|Audit Source]]
- [[Health Scorecard]]
- [[Action Roadmap]]
- [[Property Audit Workflow]]
- [[the-3-phases-of-local-seo|The 3 Phases of Local SEO]]
