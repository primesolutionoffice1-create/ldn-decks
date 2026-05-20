---
brain_schema: ads-brain.v1
type: risk-report
platform: google
title: "QUALITY-SCORE-RISK-REPORT"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: complete
---

# Quality Score Risk Report — ldndecks.com (page-side only)

Google's Quality Score has 3 components:
1. **Expected CTR** — historical click-through of the keyword. Cannot assess without CSV data.
2. **Ad relevance** — match between keyword and ad text. Cannot assess without `gads_ads_*.csv`.
3. **Landing page experience** — Google's evaluation of the LP. **This is what we can assess from the site.**

This report covers component 3 only. Components 1 and 2 require Ads CSVs.

## Landing page experience — what Google looks for

Google's documented LP-experience signals (paraphrased from Google Ads Help):
- Relevant, useful, original content matching the search intent
- Easy navigation
- Transparency about the business
- Loading speed (mobile-first)
- Mobile-friendliness

I evaluated each PPC-relevant LP against these. Where a signal cannot be verified without field data, marked **VERIFY**.

## Per-page LP-experience risk

| URL | Content depth | Trust signals | Mobile UX | Loading speed | Risk |
|---|---|---|---|---|---|
| `/get-estimate` | ✅ High (purpose-built, 187 lines) | ✅ 5-star strip + 4 badges + 3 testimonials with cities | VERIFY (form scroll-distance) | VERIFY (no PSI) | **LOW** |
| `/composite-decks` | ✅ High (3 expansion sections, 8 FAQs) | ✅ Trex Platinum + AZEK Certified | VERIFY | VERIFY | **LOW-MED** (filter banner may reduce intent match for some keywords) |
| `/trex-decks` | ⚠️ Med (8 FAQs, 3 inclusions only) | ✅ Brand language | VERIFY | VERIFY | **MEDIUM** (light vs peers) |
| `/services/porches/screened-porch` | ✅ Very high (pricing table, Quick Answer block, service-area paragraph) | ✅ Class A license language | VERIFY | VERIFY | **LOW** |
| `/services/patios` | ✅ Very high (deepest page, 387 lines) | ✅ Material comparison block | VERIFY | VERIFY | **LOW** |
| `/services/gazebo-pergola` | ✅ Med-High (pricing table, expansion sections) | ⚠️ No schema | VERIFY | VERIFY | **MEDIUM** |
| `/deck-repair` | ✅ High (above-the-fold conversion banner, map) | ✅ Restoration / safety language | VERIFY | VERIFY | **LOW** |
| `/services/deck-replacement` | ⚠️ Med (154 lines — short for peers) | ✅ Schema | VERIFY | VERIFY | **MEDIUM** |
| `/services/under-deck-patios` | ⚠️ Med (163 lines, no schema) | ⚠️ No schema | VERIFY | VERIFY | **MEDIUM** |
| `/deck-builder-{city}-va` (template) | ✅ High (FAQ schema, neighborhoods, permit detail) | ✅ Local | VERIFY | VERIFY | **LOW** (verified for `/deck-builder-fairfax-va`; sample 3 more before scaling) |
| `/blog/*` | ⚠️ Article format — Google may flag intent mismatch | varies | VERIFY | VERIFY | **HIGH if paid traffic lands here** |
| `/near-you/*` | n/a — `noindex` per `src/lib/seo.js:26` | n/a | n/a | n/a | **HIGH if used as final URL** |

## Specific risks (page-side)

### Risk 1 — Filter banner on `/composite-decks` will hurt QS for repair-intent keywords
- **Evidence**: `src/app/composite-decks/page.js:132-141` — "Project Minimum: $5,000+. We do NOT offer small repairs or minor fixes."
- **Risk**: If `composite + repair`, `composite + replace board`, `composite + fix` keywords are in any ad-group that points to this page, the LP signals an intent mismatch. Google measures this via post-click engagement (high bounce, short dwell) and the next QS update penalizes the keyword.
- **Confidence**: HIGH (source-confirmed; intent-mismatch model is well-documented).
- **Mitigation options**:
  - Negative-keyword `repair`, `fix`, `replace board` at the campaign/ad-group level (preferred — keeps composite ad-group clean).
  - Build `/composite-deck-repair` LP — only justified if search-terms CSV shows material volume.
  - Remove the contradictory line from one of the two pages (composite-decks or get-estimate's "Deck Repair From $500" services strip).

### Risk 2 — TimberTech keyword cluster has no relevant LP
- **Evidence**: No `/timbertech-decks` route exists in `find src/app -name "page.js"` output. TimberTech is mentioned in copy on `/composite-decks` but is not the H1 / title.
- **Risk**: Paid clicks for `timbertech installer Virginia`, `timbertech AZEK deck cost`, etc., land on `/composite-decks` where the H1 says "Custom Composite Deck Building" (not "TimberTech"). Google's LP-experience model penalizes weak keyword↔LP match.
- **Confidence**: HIGH (source-confirmed).
- **Mitigation**: Build `/timbertech-decks` mirror of the existing `/trex-decks` template — H1, title, 3+ in-copy mentions, ServiceSchema, FAQ, areas grid. Single page, 1–2 days work.

### Risk 3 — Missing schema on 2 service pages
- **Evidence**: `grep` for `ServiceSchema|JsonLd` confirms absence on:
  - `/services/gazebo-pergola/page.js`
  - `/services/under-deck-patios/page.js`
- **Risk**: Schema isn't a direct QS factor, but it is a "rich result eligibility" + LP-quality signal in Google's broader page evaluation. Other service pages do have it.
- **Confidence**: HIGH (source-confirmed).
- **Mitigation**: Add `<ServiceSchema name="..." description="..." price="..." />` import (used by composite-decks etc.). 30 minutes each.

### Risk 4 — Brand-policy contradiction reduces post-click engagement
- **Evidence**:
  - `/composite-decks` line 138: "We do NOT offer small repairs or minor fixes."
  - `/get-estimate` line 155: services-strip shows "Deck Repair From $500".
  - `/deck-repair` is a full 185-line page on repairs.
- **Risk**: Users who land on `/composite-decks` from a repair-intent search bounce. Users who land on `/deck-repair` and then visit `/composite-decks` (e.g., via RelatedGuides) see the contradiction, lose trust, abandon.
- **Confidence**: HIGH (source-confirmed).
- **Mitigation**: Resolve the policy: either keep small repairs on the menu (delete the "we do NOT" line) or drop them (remove the $500 services tile and update `/deck-repair` minimum to match $5k).

### Risk 5 — No dedicated outdoor-living hub
- **Evidence**: No route matches `/outdoor-living` directly. The trends-2026 article is the closest hit.
- **Risk**: Paid clicks on `outdoor living contractor`, `outdoor living design`, `outdoor living space NoVA` hit either the homepage (generic) or the trends article (informational). LP-experience suffers.
- **Confidence**: HIGH (source-confirmed).
- **Mitigation**: Build `/outdoor-living-northern-virginia` service hub. Stitch together decks + porches + patios + pergolas + outdoor kitchens + under-deck systems. Higher-funnel queries get an LP that matches their intent.

### Risk 6 — Single phone number across the site (call attribution risk)
- **Evidence**: `src/components/CallLink.jsx:7` — single constant `BUSINESS_PHONE = '+15716557207'`.
- **Risk**: Not a direct QS risk, but it means call conversions cannot be attributed to Google Ads campaigns without Google Ads call-asset forwarding numbers. Phone leads are dominant in home-services PPC; this is a measurement gap.
- **Confidence**: HIGH.
- **Mitigation**: Enable Google Ads **call-asset forwarding numbers** at the campaign level. Conversion category = "Phone calls". 30-minute setup inside Google Ads UI — but this is an **account-side** change, not a page-side fix. Capture as P0 in the Manual Google Ads Action Queue.

### Risk 7 — `/near-you/*` pages are noindexed
- **Evidence**: `src/lib/seo.js:24-28` — buildMetadata force-noindexes any path starting with `/near-you/`.
- **Risk**: If a current Google Ads campaign uses any `/near-you/*` URL as final URL, the LP-experience signal is "noindex". Google has stated noindex pages can be used as LPs but the experience score suffers.
- **Confidence**: HIGH (source-confirmed).
- **Mitigation**: Audit current campaign final URLs once the CSVs land. Swap any `/near-you/*` to the matching `/deck-builder-{city}-va` or county hub.

## Mobile / loading — not verified

PSI API is rate-limited (quota 0/day). Cannot quote LCP / INP / CLS from field data. Code-side signals:
- Hero image: `priority` + `fetchPriority="high"` + webp + `quality={70}` (`src/components/Hero.jsx:10-18`) → LCP on homepage should be acceptable. **VERIFY in field.**
- Service pages use `dynamic()` imports for below-the-fold components (`src/app/page.js:10-26`) → TBT/INP discipline is in place.
- No font-display issues observed in headers checked.

**Action**: provision a PageSpeed API key (`PAGESPEED_API_KEY`) and re-run PSI for the top 5 LPs. Capture INP, LCP, CLS p75 from CrUX in `imports/cwv/`. Until then, treat speed/CWV as **VERIFY**.

## What cannot be assessed without account data

These QS levers depend on Ads CSVs and cannot be evaluated from source:

- Expected CTR per keyword.
- Ad relevance per keyword (requires `gads_ads_*.csv` headlines/descriptions matched to keyword text).
- Actual landing-page experience values reported in the keyword report's columns ("Landing page experience: Above average / Average / Below average").
- Historical Quality Score by keyword.

Once `gads_keywords_*.csv` is dropped into `.raw/google-ads/2026-05/`, the importer will surface "Landing page experience" and "Ad relevance" columns. Then we can cross-reference low-LPE keywords against this page-side analysis.

## Priority risks (page-side only)

| # | Risk | Severity | Effort | Page-side or account-side? |
|---|---|---|---|---|
| 1 | Composite filter banner vs repair queries | High | Low (negatives) or Med (page edit) | Both |
| 2 | TimberTech LP gap | High | Med (build 1 page) | Page-side |
| 3 | Missing schema on 2 pages | Med | Low | Page-side |
| 4 | Brand-policy contradiction (repairs) | Med | Low | Page-side |
| 5 | No outdoor-living hub | Med | Med (build 1 hub) | Page-side |
| 6 | Single phone (call attribution) | High | Low (enable in Ads) | Account-side |
| 7 | `/near-you/*` as final URL | High (if used) | Low (swap URLs) | Account-side |
