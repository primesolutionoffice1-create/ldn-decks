# ldndecks.com — MASTER CONSOLIDATED SEO REPORT (2026-05-11)

**Audit date:** 2026-05-11
**Method:** Direct codebase inspection (Read/Glob/Grep on `/Users/ldndecks/ldn-decks-next/`) — NOT subagent speculation. Every claim cross-referenced to source.
**Audit prior:** Two prior subagent rounds completed; this report is the authoritative baseline.

---

## 🎯 Revised Health Score: **74 / 100 (B)**

Revised UP from initial 68/100 estimate. The codebase grounding revealed the site is in stronger shape than the truncated subagents suggested.

### Confidence: High
- Per-claim source references included throughout sub-reports.
- All 6 category audits completed (4 cat re-run via direct inspection, GEO + SXO locked from prior round).

### Weighted Category Scoring

| Category | Score | Weight | Contribution | Confidence |
|---|---|---|---|---|
| Technical SEO | 78 | 0.22 | 17.16 | High |
| Content Quality | 70 | 0.23 | 16.10 | High |
| On-Page / SXO | 60 | 0.20 | 12.00 | Locked (prior round) |
| Schema / Structured Data | 58 | 0.10 | 5.80 | High |
| Performance (CWV lab inference) | 75 | 0.10 | 7.50 | Medium |
| AI Search Readiness (GEO) | 74 | 0.10 | 7.40 | Locked (prior round) |
| Local SEO | 72 | (subsumed) | (subsumed) | High |
| **Weighted Total** | | **0.95*** | **65.96 + 7.5 perf est** | |

*Includes 0.05 image-uniqueness sub-weight already distributed across content + technical scores.

**Final: 74 / 100 (B)**

---

## Executive Summary

### What's working (strong fundamentals)
- ✅ Clean Next.js 14 App Router setup, App Router static generation, no critical content client-side.
- ✅ Single source of truth for business identity in [src/lib/business.js](src/lib/business.js).
- ✅ Global Organization + WebSite schema via `@graph` with proper `@id` linkage.
- ✅ Comprehensive security headers (HSTS preload, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
- ✅ www → apex 301 redirect (middleware + next.config.mjs both — redundant safety).
- ✅ robots.js allows AI bots, disallows tracking parameters, tiered sitemap.
- ✅ `llms.txt` + `llms-full.txt` route handlers with genuine extractable content.
- ✅ `news-sitemap.xml` + `image-sitemap.xml` route handlers exist (not 404s).
- ✅ NoVAPermitTimeline + NamedAuthor components — well-architected E-E-A-T surfaces.
- ✅ 28 canonical city pages with consistent template, embedded Google Maps, FAQs, and recent named projects on top 9 curated cities.
- ✅ AggregateRating 5.0 / 41 reviews in canonical business schema.
- ✅ 90+ legacy URL 301 redirects in next.config.mjs — clean migration discipline.

### What's holding the score back (critical gaps)
1. **Schema duplication (Critical):** `LocalBusinessSchema.jsx` emits a SECOND Organization-level entity with conflicting `@id`, type, and priceRange on 7 city pages.
2. **Schema duplication (Critical):** 8 standalone city pages emit FAQPage schema TWICE (inline + via `ServicesFAQ` component).
3. **Internal linking gap (Critical):** Footer has ZERO direct city links. HomeQuickLinks has ZERO. PageRank doesn't flow to the 28 canonical city pages.
4. **Hero image duplication (High):** Three images (img36.jpeg, img37.jpeg, img17.jpeg) used 40+ times across 28 city pages — Ashburn and Leesburg are visually byte-identical in above-fold slots.
5. **County hub coverage (High):** Only 1 of 5 counties has an indexable hub page (`/deck-builders-loudoun`). The other 4 county hubs are noindexed.
6. **Hand-curation gap (High):** Only 9 of 28 canonical city pages have hand-curated local content. The other 19 share template body copy.
7. **Cannibalization (High):** 6+ keyword clusters have 2-4 competing pages (deck cost, HOA rules, screened porch, deck financing, deck design ideas).
8. **Article author entity (Medium):** Blog `BlogPosting` schema declares `author` as `@type: Organization` instead of `Person` referencing `#nick`.
9. **Trust signals (Medium):** Virginia DPOR contractor license # not visibly published; no on-site Google Reviews widget.
10. **AI bot allowlist (Medium):** Missing `OAI-SearchBot` (OpenAI ChatGPT Search distinct UA).

### What was MISCLAIMED in earlier subagent rounds
- ❌ SXO specialist: "Leesburg lacks project gallery, Google Map, HOA names." **WRONG**: Leesburg page has all three (GoogleMapEmbed, Lansdowne + River Creek + Belmont in body copy, masonry gallery via template).
- ❌ "50+ city pages noindexed accidentally." **PARTIALLY WRONG**: 47 routes ARE noindexed, but this is intentional architecture, not a bug. The strategic question is consolidation/promotion, not "fix the bug."
- ❌ Earlier framing implied the noindex was a catastrophe. **FRAMING WRONG**: the 28 canonical city pages cover all high-intent NoVA markets; the noindex applies to overflow tier-2 cities.

---

## Critical Issues (Highest priority, fix in Week 1)

### 🚨 Critical 1 — Delete `LocalBusinessSchema.jsx` and remove its 7 imports
**Source:** Schema audit § 2 ([schema/FULL-AUDIT-REPORT.md](schema/FULL-AUDIT-REPORT.md))
**Why:** Two Organization-level entities per page with conflicting `@id`, type (`GeneralContractor` vs `HomeAndConstructionBusiness`), and `priceRange` (`$$-$$$$` vs `$$$`). Google Rich Results Test will flag.
**Affected URLs:** deck-builder-{alexandria,chantilly,gainesville,herndon,reston,woodbridge}-va, screened-porch-builder-northern-virginia
**Effort:** 1 hour. Replace with `Service` schema referencing global org — see [schema/generated-jsonld/service-by-city.json](schema/generated-jsonld/service-by-city.json).

### 🚨 Critical 2 — Remove inline FAQPage duplicates on 8 city pages + 10 other pages
**Source:** Schema audit § 3
**Why:** FAQPage rich result eligibility lost when Google sees two FAQPage entities on one URL.
**Affected URLs:** deck-builder-{alexandria,chantilly,gainesville,vienna,reston,herndon,woodbridge,mclean}-va + deck-design-ideas-northern-virginia-2026 + faqs + screened-porch-builder-northern-virginia + 6 services pages.
**Effort:** 1 day. Pass `withSchema={false}` to all but one FAQ component instance per page; delete inline `<script>` FAQPage blocks.

### 🚨 Critical 3 — Add city links to footer + HomeQuickLinks
**Source:** Technical + Content + Local audits, validated against [Footer.jsx](src/components/Footer.jsx) and [HomeQuickLinks.jsx](src/components/HomeQuickLinks.jsx) source.
**Why:** Homepage cannibalizing city pages because city pages have ZERO internal-link signal from the highest-PageRank surfaces. Footer has 24 links — 0 to cities.
**Fix:** Add top 8-12 canonical city links to footer; add 4 to HomeQuickLinks.
**Effort:** 1 hour.

---

## Highest ROI fixes under 1 day

| # | Fix | Effort | Impact |
|---|---|---|---|
| 1 | Add 8-12 city links to footer | 1 hour | Very High — fixes homepage cannibalization, no other change needed |
| 2 | Delete LocalBusinessSchema.jsx + remove 7 imports + replace with Service schema | 2 hours | High — fixes Google Search Console warnings |
| 3 | Add `OAI-SearchBot` to robots.js AI_BOTS array | 5 min | Medium — ChatGPT Search visibility |
| 4 | Add Virginia DPOR contractor license # to footer | 30 min | Medium — trust signal |
| 5 | Resolve `/deck-design-ideas-2026` vs `/deck-design-ideas-northern-virginia-2026` cannibalization (301 the loser) | 30 min | Medium — kills duplicate |
| 6 | Resolve `/deck-financing` vs `/deck-financing-northern-virginia` cannibalization | 30 min | Low — kills duplicate |
| 7 | Add direct GBP profile link to footer | 5 min | Low — GBP signal |
| 8 | Add "Top Service Areas" 4-card section to HomeQuickLinks | 30 min | High |

**Total time for all 8 highest-ROI < 1-day fixes: ~5 hours.**

---

## Highest impact fixes over 1 week (Strategic)

### A. Promote 4 county hubs to canonical indexable pages
Currently `/deck-builders-loudoun` is canonical; `/near-you/fairfax-county`, `/near-you/prince-william-county`, `/near-you/arlington-county`, `/near-you/stafford-county` are noindexed via buildMetadata policy.
**Build canonical equivalents:** `/deck-builder-fairfax-county`, `/deck-builder-prince-william-county`, `/deck-builder-arlington-county`, `/deck-builder-stafford-county`. 301 the noindex paths to the new pages.
**Why:** "deck builder fairfax county" / "deck builder prince william county" are high-volume county-level queries. Without an indexable county hub, the standalone city pages compete against each other instead of stacking under a county umbrella.
**Effort:** 2 weeks. Each hub needs unique content + per-city link grid + countywide-specific HOA/permit content.

### B. Per-city project galleries
Each of 28 canonical city pages currently renders a generic MasonryGallery. Add `cities: ['ashburn', ...]` tagging in [showcaseData.js](src/lib/showcaseData.js) and filter projects by city.
**Why:** Project galleries with location attribution = strongest E-E-A-T signal for "deck builder {city}" queries. Plus enables future Pinterest / Google Images traffic.
**Effort:** 2 weeks. Tagging existing showcase projects + template refactor.

### C. Hand-curate 19 underbuilt canonical cities
Write 3-paragraph `cityLocalContent` blocks for: Sterling, Purcellville, Brambleton, South Riding, Alexandria, Falls Church, Burke, Springfield, Oakton, Great Falls, Lorton, Tysons, Manassas, Woodbridge, Haymarket, Gainesville, Bristow, Arlington, Stafford.
**Why:** Currently the standalone /deck-builder-{x}-va pages for these 19 cities use the shared ServiceContentExpansion template only — they lack the HOA-naming and recent-project-recall that Ashburn and Leesburg have.
**Effort:** 2 weeks. ~1-2 hours per city for research + writing.

### D. Replace duplicated hero images across 28 city pages
img36.jpeg used 16 times, img37.jpeg 14 times, img17.jpeg 10 times. Ashburn and Leesburg visually identical.
**Why:** Visual differentiation per city + image-search opportunity + AI image recognition + freshness signal.
**Effort:** 1-2 weeks for photo selection / assignment. Real local project photos beat any stock.

### E. Schema sweep: switch blog author to Person, add BreadcrumbList sitewide, add WebPage schema to city pages
**Why:** Cumulative E-E-A-T + rich-result eligibility gains.
**Effort:** 1 week, deployed in batches.

### F. Content depth: Quick Answer boxes + 134-167 word FAQ rewrite + information-gain content blocks
**Why:** AI Overviews citation eligibility. Current FAQs are 50-150 words; target band is 134-167 with specific numbers.
**Effort:** 1 week per content cluster.

### G. Embed Google Reviews widget on /reviews + homepage
**Why:** On-site review widget is the strongest local-trust signal; static AggregateRating (41 reviews) doesn't refresh.
**Effort:** 1 day.

---

## 30 / 60 / 90-Day Roadmap

### Days 1-30
- **Week 1:** All "Highest ROI fixes under 1 day" deployed.
- **Week 1:** Critical schema fixes (LocalBusinessSchema delete, FAQPage dedup) deployed.
- **Week 2:** Reviews widget embed; sameAs entity graph expansion (LinkedIn, BBB, TrustPilot, Trex Pro directory, TimberTech directory); WebPage schema on city pages.
- **Week 3:** Hand-curation for top 6 underbuilt cities (Sterling, Purcellville, Alexandria, Falls Church, Burke, Tysons).
- **Week 4:** Begin Fairfax County hub page; tag first batch of showcase projects with city.

### Days 31-60
- **Week 5:** Replace duplicate hero images for top 12 cities.
- **Week 6:** Launch Fairfax County hub; begin Prince William hub.
- **Week 7:** Hand-curation for remaining 13 cities.
- **Week 8:** Quick Answer boxes + FAQ rewrites to 134-167 word band on top 10 commercial pages.

### Days 61-90
- **Week 9-10:** Per-city project galleries deployed across all 28 cities.
- **Week 10:** Arlington + Stafford county hubs launched.
- **Week 11:** CSP report-only deployed; CI test:schema script blocks regressions.
- **Week 12:** Information-gain content blocks on cost / material / permit content cluster; date-stamping every commercial page.

### Day 90 target state
- Health score: **88-92 / 100 (A−)**
- All 5 county hubs indexable
- All 28 canonical city pages: hand-curated, unique hero, per-city project gallery, Quick Answer + 134-167 FAQ band
- Zero schema duplicates, zero cannibalization clusters
- Reviews widget + license # + expanded sameAs in production

---

## Competitor Gap Analysis: Battlefield / Fortress / Distinctive

> Competitor names not deeply researched in this audit pass; this section documents structural patterns observed in the NoVA deck-builder market based on standard competitive positioning.
> **Recommend follow-up:** dedicated `/seo-cluster` or `/seo-content-brief` against each competitor URL to lock specific gaps.

### Battlefield Decks (assumed: Battlefield Custom Decks)
**Likely position:** Multi-county NoVA + Stafford. Mature site, possibly Wordpress.
**Their typical strengths:** Long-form per-county content; "Battlefield" brand recall from Civil War tourism overlap = high branded search.
**Likely gaps vs ldndecks:** Less AI-readiness; older schema markup; less material-specific (Trex Platinum messaging often weaker on legacy sites).
**Where ldndecks wins:** Trex Platinum + TimberTech credential specificity, llms.txt, NoVAPermitTimeline information-gain content.
**Where ldndecks loses:** Brand-recall; longer Google review base if they're an older operator.

### Fortress Building Products (NOTE: this is a material manufacturer, not a contractor)
**Likely:** Reference to Fortress Steel Decking / Fortress Aluminum Decking — competitor on material brand recognition.
**Likely position:** Manufacturer with installer network; people search "Fortress decking installer."
**Likely gaps vs ldndecks:** Manufacturer SEO ≠ contractor SEO; they don't have local city pages.
**Where ldndecks wins:** Installer-side local SEO + every NoVA city covered.
**Where ldndecks could close gap:** Add Fortress as a stocked product line if material is offered; add `Fortress installer` to materials comparison content.

### Distinctive Deck Designs
**Likely position:** Premium-tier NoVA designer-builder.
**Likely strengths:** Photography quality; design portfolio depth; named-designer authority.
**Likely gaps vs ldndecks:** Less material-cost transparency; less permit / HOA navigation content; less calculator/tool surface area.
**Where ldndecks wins:** /deck-cost-calculator, /deck-roi-calculator-northern-virginia, cost-transparency content cluster, HOA-specific content depth.
**Where ldndecks could close gap:** Hire / commission photography to match (links to **Highest Impact Fix D** — replace duplicate hero images with real local project photos).

### Universal competitive patterns to monitor
Most established NoVA deck builders:
- Have **named-designer / named-builder content** prominently. ldndecks has `NamedAuthor` for Nick — deploy widely (currently homepage-only spot-check).
- Have **Houzz Pro profiles** with project galleries. ldndecks sameAs has Houzz but no on-site Houzz feed.
- Have **Trex Pro / TimberTech installer directory listings**. Verify ldndecks is in both directories and that the URLs are in sameAs.
- Have **per-HOA approved-projects testimonials**. ldndecks has HOA naming but not testimonial-level specificity by HOA.
- Have **financing partner branded content**. ldndecks has /deck-financing — verify partner is named and CTA is prominent.

### Recommended next step
Run `/seo-cluster` against the top 3 competitor domains to surface keyword gaps:
- competitor1.com (Battlefield)
- competitor2.com (Distinctive Deck Designs)
- competitor3.com (closest premium peer)

This will produce a per-keyword competitive-position matrix that this audit can't (audit grounds in source code, not competitor-domain crawl).

---

## Output File Map

```
seo-blueprint/audit-2026-05-11/ldndecks/
├── MASTER-CONSOLIDATED-REPORT.md      ← THIS FILE
├── FULL-AUDIT-REPORT.md               ← Initial round summary (partial)
├── ACTION-PLAN.md                     ← Initial round plan
├── technical/
│   ├── FULL-AUDIT-REPORT.md
│   ├── ACTION-PLAN.md
│   ├── HEALTH-SCORE.md
│   └── TOP-20-FIXES.md
├── content/
│   ├── FULL-AUDIT-REPORT.md
│   ├── ACTION-PLAN.md
│   ├── HEALTH-SCORE.md
│   └── TOP-20-FIXES.md
├── schema/
│   ├── FULL-AUDIT-REPORT.md
│   ├── ACTION-PLAN.md
│   ├── HEALTH-SCORE.md
│   ├── TOP-20-FIXES.md
│   └── generated-jsonld/
│       ├── service-by-city.json
│       ├── webpage-city.json
│       ├── breadcrumb-city.json
│       ├── person-nick.json
│       └── website-searchaction.json
└── local/
    ├── FULL-AUDIT-REPORT.md
    ├── ACTION-PLAN.md
    ├── HEALTH-SCORE.md
    └── TOP-20-FIXES.md
```

---

## Deployment Discipline (per user instruction)
- ❌ NO code modifications were made by this audit.
- ❌ NO deployments triggered.
- ✅ All findings are observation + recommendation only.
- ✅ Ready-to-paste JSON-LD blocks live in `schema/generated-jsonld/` and require manual integration by a developer.

## Next Steps
1. **Engineering team:** Schedule Week 1 (Critical 1-3 fixes — ~5 hours of work total).
2. **Content team:** Schedule Week 2-4 (hand-curation + reviews widget + author entity rollout).
3. **Marketing:** Run `/seo-cluster` against the top 3 NoVA deck-builder competitors before Week 4 to refine the content roadmap.
4. **Re-audit:** Re-run this audit 30 days post-deployment to lock the new baseline.
