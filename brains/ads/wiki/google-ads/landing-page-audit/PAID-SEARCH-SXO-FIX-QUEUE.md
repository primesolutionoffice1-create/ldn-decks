---
brain_schema: ads-brain.v1
type: queue
platform: google
scope: page-side
title: "PAID-SEARCH-SXO-FIX-QUEUE"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: complete
---

# Paid-Search SXO Fix Queue — page-side only

Approval-gated. Every fix is proposed. Owner approves and executes (code change for page-side; Google Ads UI for account-side). No account mutation from this document. See [[No Live Changes Without Approval]].

Format per fix:
- **target keyword cluster**
- **current best page**
- **recommended page**
- **issue**
- **why it affects Google Ads performance**
- **expected impact** (qualitative, until Ads CSVs land)
- **priority** (P0–P3)
- **implementation difficulty** (S / M / L)

---

## SXO-001 — Resolve repair-policy contradiction

- **Target keyword cluster**: composite decks, custom decks, deck repair (cross-page consistency)
- **Current best page**: `/composite-decks` says NO repairs (line 138). `/deck-repair` is a full page. `/get-estimate` services strip shows "Deck Repair From $500".
- **Recommended page**: Pick one policy. Update all three.
- **Issue**: Contradictory statements across landing pages reachable from paid traffic.
- **Why it affects Google Ads performance**: Post-click confusion increases bounce, decreases dwell, hurts LP-experience component of Quality Score. Users who came in for repair land on composite-decks, see "no repairs", leave. Users coming for composite see repair entries elsewhere, lose trust.
- **Expected impact**: Lift LP-experience component on composite ad-group keywords + repair ad-group keywords. Magnitude unknown until CSV-side measurement.
- **Priority**: **P1**
- **Difficulty**: S (a few lines of copy)

---

## SXO-002 — Build dedicated `/timbertech-decks` LP

- **Target keyword cluster**: TimberTech (brand modifier)
- **Current best page**: `/composite-decks` (generic) — no dedicated page exists.
- **Recommended page**: New `/timbertech-decks`, mirroring `/trex-decks` template.
- **Issue**: TimberTech is named as a brand partner but has no destination URL.
- **Why it affects Google Ads performance**: Google's Ad relevance metric measures keyword-to-LP match by tokens. `timbertech` keyword landing on a page whose H1 is "Custom Composite Deck Building" triggers a weak match. Same applies to LP-experience for branded queries.
- **Expected impact**: Unlocks ability to run a TimberTech-branded ad-group at non-penalized Quality Score. Net new paid traffic surface.
- **Priority**: **P1**
- **Difficulty**: M (~1 day — clone `/trex-decks` template, swap content, add ServiceSchema, FAQ, areas grid)

---

## SXO-003 — Add schema to `/services/gazebo-pergola` and `/services/under-deck-patios`

- **Target keyword cluster**: pergolas, gazebos, under-deck systems
- **Current best page**: same URLs.
- **Recommended page**: same — add `<ServiceSchema name="..." description="..." price="..." />` import (used by 7 other service pages).
- **Issue**: Missing structured data. Verified via `grep -l "ServiceSchema\|JsonLd"` — these two pages don't import either.
- **Why it affects Google Ads performance**: Schema isn't a direct QS factor, but is a known LP-quality signal in Google's broader page evaluation. Other service pages have it. Add for consistency + potential rich-result eligibility.
- **Expected impact**: Marginal QS lift, possible rich-result eligibility in organic that bleeds into paid LP-experience scoring.
- **Priority**: **P2**
- **Difficulty**: S (~30 min per page)

---

## SXO-004 — Build `/outdoor-living-northern-virginia` hub

- **Target keyword cluster**: outdoor living
- **Current best page**: `/outdoor-living-trends-northern-virginia-2026` (article — informational).
- **Recommended page**: New service hub stitching deck + porch + patio + pergola + under-deck + outdoor kitchen.
- **Issue**: No purpose-built outdoor-living service hub; mid-funnel "outdoor living contractor" queries dump on the homepage or the trends article.
- **Why it affects Google Ads performance**: For paid keywords like `outdoor living contractor NoVA`, `outdoor living space design`, the LP-experience score depends on matching intent. Trends article is informational, homepage is too generic. A hub page that funnels into each service sub-page would convert better and signal LP-quality.
- **Expected impact**: Opens a new upper-funnel ad-group; modest CVR but high-value pre-purchase traffic.
- **Priority**: **P2**
- **Difficulty**: M (~1–2 days)

---

## SXO-005 — Add above-the-fold phone CTA section to top 5 service pages

- **Target keyword cluster**: composite decks, Trex decks, screened porches, patios, pergolas
- **Current best page**: same URLs.
- **Recommended page**: same — add a phone-CTA section near top, mirroring `/deck-repair`'s orange banner (`src/app/deck-repair/page.js:126-134`).
- **Issue**: Only `/deck-repair` has above-the-fold phone CTA. Long service pages (300+ lines) push the form too far for paid mobile traffic.
- **Why it affects Google Ads performance**: Phone calls drop off as scroll depth increases. Each minute to first-contact lowers a hot lead's conversion probability.
- **Expected impact**: Lift on phone-call conversion volume. CVR for form may also rise slightly because trust signals appear sooner.
- **Priority**: **P1**
- **Difficulty**: S (~15 min per page, copy-paste from `/deck-repair`)

---

## SXO-006 — Add sticky mobile CTA bar (site-wide)

- **Target keyword cluster**: all
- **Current best page**: n/a — site-wide change.
- **Recommended page**: Implement `<StickyMobileCTA />` showing on screens < 768px, persistent bottom bar with "Call" + "Get Quote".
- **Issue**: No sticky mobile CTA detected in `src/components/`. Mobile paid traffic must scroll to reach phone/form.
- **Why it affects Google Ads performance**: Mobile is the dominant device for home-services search. Persistent CTA bars routinely lift mobile CVR 8–15% on home-services accounts. Higher CVR → better Smart Bidding signal density → better Quality Score over time.
- **Expected impact**: Most leveraged single page-side fix for mobile traffic.
- **Priority**: **P1**
- **Difficulty**: M (one new component + import in layout)

---

## SXO-007 — Add phone + ZIP fields to ContactForm (and `service_interested` select)

- **Target keyword cluster**: all
- **Current best page**: n/a — form change in `src/components/ContactForm.jsx`.
- **Recommended page**: Add fields: `phone`, `zip`, `service_interested` (select: composite deck / wood deck / Trex / TimberTech / screened porch / patio / pergola / repair / outdoor living / other).
- **Issue**: First 80 lines of ContactForm.jsx do not show phone or ZIP inputs. Service routing is hardcoded to `formType: 'quote'`. VERIFY full file.
- **Why it affects Google Ads performance**: Phone + ZIP are the strongest Enhanced Conversions identifiers. ZIP allows post-lead geo-segmentation for Smart Bidding. Service select enables CVR-by-service breakdown.
- **Expected impact**: Better Enhanced Conversions match rate → more accurate ROAS reporting in Google Ads → Smart Bidding optimizes against truer data.
- **Priority**: **P1**
- **Difficulty**: S (form edit) + M (downstream routing logic in `sendEmail.js`)

---

## SXO-008 — Replace `alert()` form-error with inline error UI

- **Target keyword cluster**: all
- **Current best page**: `src/components/ContactForm.jsx:20`.
- **Recommended page**: Inline error toast / banner.
- **Issue**: `alert("Failed to send message. Please try again.")` is blocked in some browsers and feels dated for a $25k+ inquiry.
- **Why it affects Google Ads performance**: Indirectly — failed-form abandonments are leaked conversions. Inline UI captures the recovery click.
- **Expected impact**: Marginal CVR lift on submission errors. Better UX signal.
- **Priority**: **P3**
- **Difficulty**: S

---

## SXO-009 — Add upsell on `/thank-you` ("we'll call within 2 hours · or call us now")

- **Target keyword cluster**: all
- **Current best page**: `src/app/thank-you/page.js`.
- **Recommended page**: same — add CallLink + "your free 3D consultation is being scheduled" reassurance block.
- **Issue**: Current thank-you has only "Back to Home" + "View Project Gallery" buttons (line 63-69). Warm-lead momentum lost.
- **Why it affects Google Ads performance**: Higher post-conversion engagement signals (calls within 5 min) feed back into Smart Bidding as "high-value" lead category if you import to Google Ads as offline conversions.
- **Expected impact**: Increase in phone-following-form-submit, which is the strongest sales-qualification signal.
- **Priority**: **P2**
- **Difficulty**: S

---

## SXO-010 — Provision PageSpeed API key, baseline CWV for top 5 LPs

- **Target keyword cluster**: all
- **Current best page**: account-side / repo-config.
- **Recommended**: Enable PageSpeed Insights API in Google Cloud project, store `PAGESPEED_API_KEY` (or use Search Console / CrUX directly).
- **Issue**: PSI quota = 0/day. Cannot measure or trend CWV. LP-experience cannot be assessed.
- **Why it affects Google Ads performance**: Speed is a documented LP-experience signal. Without baselines, we can't prove improvement or detect regression.
- **Expected impact**: Enables data-driven CWV optimization. No direct CVR lift until measurements are acted upon.
- **Priority**: **P1**
- **Difficulty**: S (Google Cloud Console)

---

## SXO-011 — Swap any `/near-you/*` URLs out of Google Ads final URLs

- **Target keyword cluster**: geo-modified queries
- **Current best page**: account-side.
- **Recommended page**: Replace with the matching `/deck-builder-{city}-va` page or `/deck-builders-loudoun` county hub.
- **Issue**: `/near-you/*` paths force noindex via `src/lib/seo.js:24-28`. If any campaign uses them, LP-experience suffers.
- **Why it affects Google Ads performance**: Noindex pages used as paid LPs trigger LP-quality flags.
- **Expected impact**: LP-experience lift on geo-modified ad-groups (if currently affected).
- **Priority**: **P1** (conditional — only if CSV data shows usage)
- **Difficulty**: S (URL swap in Google Ads UI per ad group)

---

## SXO-012 — Resolve duplicate-content risk: `/deck-repair` vs `/deck-repair-loudoun-county`

- **Target keyword cluster**: deck repair (geo-modified)
- **Current best page**: both exist as separate routes.
- **Recommended**: Audit whether they are templated duplicates or genuinely different. If duplicate, canonical one to the other.
- **Issue**: Two near-identical URLs can split paid traffic and confuse Quality Score signals.
- **Why it affects Google Ads performance**: If both URLs are used as final URLs for similar keywords, history fragmentation hurts CTR / QS learning.
- **Expected impact**: Consolidate paid-traffic history into one URL → faster QS convergence.
- **Priority**: **P3**
- **Difficulty**: S (canonical or redirect)

---

## SXO-013 — Audit/strengthen `/services/deck-replacement` content depth

- **Target keyword cluster**: deck replacement
- **Current best page**: `/services/deck-replacement` (154 lines — shortest of the deck-service pages).
- **Recommended page**: same — extend with pricing table, FAQ section parity, more local mentions.
- **Issue**: Page is light relative to siblings. May underperform on LP-experience for "deck replacement cost" queries.
- **Why it affects Google Ads performance**: Thin content = weaker LP-experience.
- **Expected impact**: Modest lift on `deck replacement` ad-group QS.
- **Priority**: **P2**
- **Difficulty**: M

---

## SXO-014 — Strengthen `/trex-decks` (pricing table + above-the-fold CTA + more inclusions)

- **Target keyword cluster**: Trex (brand modifier)
- **Current best page**: `/trex-decks`.
- **Recommended page**: same — add pricing table (like `/services/porches/screened-porch` does), expand inclusions block from 3 → 8, mirror `/composite-decks` polish.
- **Issue**: `/trex-decks` has only 3 inclusion items vs `/composite-decks`'s 8. No pricing data on a high-CPC brand keyword cluster.
- **Why it affects Google Ads performance**: Trex-brand searches expect pricing. Page lacks it → bounce → LP-experience hit.
- **Expected impact**: Lift on Trex ad-group LP-experience component.
- **Priority**: **P2**
- **Difficulty**: M

---

## Priority summary

| Priority | Count | Items |
|---|---|---|
| **P1** | 6 | 001, 002, 005, 006, 007, 010, 011 |
| **P2** | 5 | 003, 004, 009, 013, 014 |
| **P3** | 2 | 008, 012 |

## Sequencing recommendation (page-side sprint)

This is a recommendation, **not an approved plan**. Owner must approve each item individually using [[Manual Google Ads Action Queue Template]].

**Week 1 — measurement + fastest wins**
- SXO-010 (PSI API key) — unlocks measurement
- SXO-001 (resolve repair policy) — copy edit
- SXO-005 (add ATF phone CTA to top 5 pages) — copy-paste
- SXO-003 (add schema to pergola + under-deck) — config

**Week 2 — high-leverage page work**
- SXO-007 (ContactForm: phone, ZIP, service_interested)
- SXO-006 (sticky mobile CTA)

**Week 3 — new pages**
- SXO-002 (TimberTech LP)
- SXO-004 (outdoor-living hub)

**Week 4+ — depth**
- SXO-013 (deepen deck-replacement)
- SXO-014 (strengthen Trex page)
- SXO-009 (thank-you upsell)
- SXO-008 (inline form error)
- SXO-012 (duplicate audit)

Coupled with the parallel account-side work (Day 0 tracking gate, then CSV-driven negatives/structure), this would land a credible measurable lift inside 4–6 weeks.

---

See also: [[LANDING-PAGE-AUDIT]] · [[KEYWORD-TO-LANDING-PAGE-MAP]] · [[QUALITY-SCORE-RISK-REPORT]] · [[CONVERSION-UX-AUDIT]] · [[End-to-End Google Ads Workflow]].
