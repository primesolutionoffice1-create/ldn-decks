---
type: "deliverable"
title: "Action Roadmap"
created: "2026-05-19"
updated: "2026-05-20"
status: "active"
---

# Action Roadmap

Prioritized remediation for the [[site-seo-audit-2026-05-20|2026-05-20 SEO audit]].
Sequenced Blocker → High → Medium → Low. Live-impact items route through
[[Approval Queue]].

## Done — 2026-05-20

- **C1** unverified Manassas address removed; NAP unified to Centreville.
- **H1** noindexed `/near-you/{county}/{city}` URLs removed from the sitemap.
- **H4** `news-sitemap.xml` reference removed from robots.
- **H6** `/timbertech-decks` + `/about/warranty` added to the sitemap.
- **M1** `priceRange` mismatch fixed (merged branch).
- Shipped in commit `ea5a0a9` — **awaiting Vercel unblock to go live.**

## Batch 2 — Schema + reviews (next)

- **H2** consolidate the 3 conflicting `#organization` JSON-LD nodes into one
  canonical entity sourced from `business.js`.
- **H3** fix schema `name` "LDN Decks" → "Loudoun Decks".
- **C2** sync review rating + count to real GBP numbers — **blocked on owner input.**
- **M2/M3/M4** `LocalBusinessSchema.jsx` derives from `business.js` (sameAs,
  worstRating, `@type` consistency).

## Phase 3 — Keyword research + competitive intelligence

- Process `brains/marketing/keywords-2026-05-11.csv` (3,891 rows) + Ahrefs/GSC.
- Striking-distance map, competitor profiles → filed to the brain.

## Phase 4 — Content + on-page

- **H5** de-risk the city-page fleet from doorway treatment.
- Striking-distance page optimization; **M5–M11**, **L1–L6**.

## Phase 5 — Local / GBP / backlinks

- **H7** review-acquisition funnel + direct review link.
- GBP optimization, citation gap, backlink gap — recommendations via
  [[Approval Queue]]; owner executes GBP.

## Phase 6 — Tracking

- `seo-drift` baseline, Ahrefs rank tracking, Weekly Report cadence.

Related: [[Health Scorecard]] | [[site-seo-audit-2026-05-20]] | [[Approval Queue]]
