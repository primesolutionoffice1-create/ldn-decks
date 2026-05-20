---
brain_schema: ads-brain.v1
type: map
platform: google
title: "KEYWORD-TO-LANDING-PAGE-MAP"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: complete
---

# Keyword → Landing Page Map (Paid Search)

Routing for each keyword cluster. Search-volume and CPC are **not** quoted here — those require Google Ads CSVs ([[Google Ads Export Checklist]]).

Legend:
- **Final URL** = where the click should land
- **Display path** = ad-display URL
- **Ad-group fit** = match-quality between the keyword cluster and the LP's H1/title/copy (Google Ads "Ad relevance" component of QS)
- **Confidence** = how sure I am about the mapping based on source evidence (H: page exists and is purpose-built; M: page exists but is generic; L: no purpose-built page)

---

## 1. Custom decks (high intent, installer queries)

| Query intent class | Final URL | Display path | Ad-group fit | Confidence |
|---|---|---|---|---|
| `custom deck builder` / `custom decks` | `/get-estimate` | `ldndecks.com/quote/custom-deck` | H — H1 "Custom Deck Builder" | H |
| `deck builder near me` | `/get-estimate` | `ldndecks.com/quote/free-estimate` | H | H |
| `deck contractor` | `/get-estimate` | `ldndecks.com/quote` | H | H |
| `deck installation` | `/composite-decks` | `ldndecks.com/composite/install` | M — page is composite-specific | M |

---

## 2. Composite decks (material-aware install)

| Query intent class | Final URL | Display path | Ad-group fit | Confidence |
|---|---|---|---|---|
| `composite deck builder` / `installer` | `/composite-decks` | `ldndecks.com/composite-decks` | H — H1 "Custom Composite Deck Building" | H |
| `composite deck cost` / `price` | `/composite-deck-cost-northern-virginia` | `ldndecks.com/composite-cost` | H — cost-focused page | H |
| `composite deck vs wood` | `/composite-deck-vs-wood-deck-virginia` | `ldndecks.com/composite-vs-wood` | H | H |
| `composite deck repair` | ❌ **NO MATCH** | — | L — composite-decks page explicitly says "no repairs" | L |

> **Routing rule**: if `composite + repair` query is positive in `gads_search_terms_*.csv`, you must either (a) build a `/composite-deck-repair` LP, or (b) exclude the `repair` token from composite ad-groups via negative keyword. Current `/deck-repair` page does cover this — but the composite-decks page actively contradicts it.

---

## 3. Trex decks (brand modifier)

| Query intent class | Final URL | Display path | Ad-group fit | Confidence |
|---|---|---|---|---|
| `trex deck builder` / `installer` | `/trex-decks` | `ldndecks.com/trex-decks` | H | H |
| `trex platinum partner` | `/trex-decks` | `ldndecks.com/trex/platinum` | H — title says "Trex Platinum Deck Builder" | H |
| `trex transcend` | `/trex-transcend-review-northern-virginia` | `ldndecks.com/trex-transcend` | H | H |
| `trex deck cost` | `/composite-deck-cost-northern-virginia` (fallback) | `ldndecks.com/trex-cost` | **M — token-mismatch risk** | M |
| `trex railing` | `/services/trex-railings` | `ldndecks.com/trex/railings` | H | H |
| `trex calm shell` | `/services/trex-calm-shell` | `ldndecks.com/trex/calm-shell` | H | H |
| `trex performance` | `/trex-performance-products` | `ldndecks.com/trex/performance` | H | H |

---

## 4. TimberTech decks (brand modifier — **GAP**)

| Query intent class | Final URL today | Recommended | Confidence |
|---|---|---|---|
| `timbertech deck installer` | `/composite-decks` | **Build new** `/timbertech-decks` page | L |
| `timbertech AZEK contractor` | `/composite-decks` | New `/timbertech-azek-decks` page | L |
| `timbertech vs trex` | `/trex-vs-timbertech-vs-azek` | (keep) | H |
| `timbertech composite cost` | `/composite-deck-cost-northern-virginia` | (acceptable, cost-page is general) | M |

> **Lever**: building a dedicated `/timbertech-decks` page in parallel to `/trex-decks` is the single biggest ad-relevance fix possible for the TimberTech keyword cluster. Title + H1 + 2 mentions in body copy is the minimum threshold for Google Ads "Ad relevance" to register a match.

---

## 5. Screened porches

| Query intent class | Final URL | Ad-group fit | Confidence |
|---|---|---|---|
| `screened in porch builder` | `/services/porches/screened-porch` | H | H |
| `screened porch contractor` | `/services/porches/screened-porch` | H | H |
| `screened porch cost / price` | `/screened-porch-cost-northern-virginia` | H | H |
| `screened porch builders {city}` | `/screened-porch-builder-northern-virginia` | M (regional) — verify city pages have screened-porch sections | M |
| `eze breeze porch` | `/services/porches/screened-porch` | H — mentioned in page copy | H |
| `3 season room / 4 season room` | `/services/porches/screened-porch` | H — EZE-Breeze 4-season language present | H |
| `open porch` / `front porch` | `/services/porches/open-porch` or `/services/porches/front-porch` | H | H |

---

## 6. Patios

| Query intent class | Final URL | Confidence |
|---|---|---|
| `patio contractor` / `installer` | `/services/patios` | H |
| `paver patio` | `/services/patios` | H |
| `paver vs flagstone` | `/paver-vs-flagstone-patio-northern-virginia` | H |
| `stamped concrete patio` | `/stamped-concrete-patio-northern-virginia` | H |
| `bluestone patio` | `/services/patios` (table mentions bluestone tiers) | H |
| `flagstone patio` | `/services/patios` | H |

---

## 7. Pergolas / gazebos

| Query intent class | Final URL | Ad-group fit | Confidence |
|---|---|---|---|
| `pergola builder` | `/services/gazebo-pergola` | M — combined page (gazebo + pergola) | M |
| `pergola installation` | `/services/gazebo-pergola` | M | M |
| `gazebo builder` | `/services/gazebo-pergola` | M | M |
| `louvered roof pergola` | `/services/gazebo-pergola` | H — language is present | H |

> Page covers both — works, but if Ads spend justifies it, split to `/services/pergolas` and `/services/gazebos` for tighter Ad relevance.

---

## 8. Deck repair

| Query intent class | Final URL | Confidence |
|---|---|---|
| `deck repair` | `/deck-repair` | H |
| `deck repair near me` | `/deck-repair` (or `/deck-repair-loudoun-county` if Loudoun-targeted) | H |
| `deck board replacement` | `/deck-repair` | H |
| `deck railing repair` | `/deck-repair` | H — railing language present |
| `deck rot repair` | `/deck-repair` | H — rot/structural language present |
| `deck inspection` | `/services/deck-inspection` | H |
| `deck staining` | `/deck-staining-northern-virginia` | H |

---

## 9. Deck replacement

| Query intent class | Final URL | Confidence |
|---|---|---|
| `deck replacement` | `/services/deck-replacement` | H |
| `deck resurfacing` | `/services/deck-resurfacing` | H |
| `deck resurfacing vs replacement` | `/deck-resurfacing-vs-replacement` | H (decision-stage — lower conversion) |
| `wood to composite deck` | `/services/deck-resurfacing` | M |

---

## 10. Outdoor living (**GAP**)

| Query intent class | Final URL today | Recommended | Confidence |
|---|---|---|---|
| `outdoor living contractor` | (no match) homepage | Build `/outdoor-living-northern-virginia` hub | L |
| `outdoor living space design` | (none) | Same hub | L |
| `outdoor kitchen builder` | `/outdoor-kitchen-builder-northern-virginia` | (keep) | H |
| `under deck patio` | `/services/under-deck-patios` | (keep, add schema) | H |
| `under deck ceiling` | `/under-deck-ceiling-ideas` | M — ideas page, not a service page | M |
| `outdoor living trends` | `/outdoor-living-trends-northern-virginia-2026` | (article — informational only) | H |

---

## 11. Geo-modified queries (high-volume in Local SAB)

Map by city → city LP. Currently 25 city pages exist (verified):

| City | LP | Status |
|---|---|---|
| Alexandria | `/deck-builder-alexandria-va` | ✅ |
| Arlington | `/deck-builder-arlington-va` | ✅ |
| Ashburn | `/deck-builder-ashburn-va` | ✅ |
| Brambleton | `/deck-builder-brambleton-va` | ✅ |
| Bristow | `/deck-builder-bristow-va` | ✅ |
| Burke | `/deck-builder-burke-va` | ✅ |
| Centreville | `/deck-builder-centreville-va` | ✅ |
| Chantilly | `/deck-builder-chantilly-va` | ✅ |
| Fairfax | `/deck-builder-fairfax-va` | ✅ |
| Falls Church | `/deck-builder-falls-church-va` | ✅ |
| Gainesville | `/deck-builder-gainesville-va` | ✅ |
| Great Falls | `/deck-builder-great-falls-va` | ✅ |
| Haymarket | `/deck-builder-haymarket-va` | ✅ |
| Herndon | `/deck-builder-herndon-va` | ✅ |
| Leesburg | `/deck-builder-leesburg-va` | ✅ |
| Lorton | `/deck-builder-lorton-va` | ✅ |
| Manassas | `/deck-builder-manassas-va` | ✅ |
| McLean | `/deck-builder-mclean-va` | ✅ |
| Oakton | `/deck-builder-oakton-va` | ✅ |
| Purcellville | `/deck-builder-purcellville-va` | ✅ |
| Reston | `/deck-builder-reston-va` | ✅ |
| South Riding | `/deck-builder-south-riding-va` | ✅ |
| Springfield | `/deck-builder-springfield-va` | ✅ |
| Stafford | `/deck-builder-stafford-va` | ✅ |
| Sterling | `/deck-builder-sterling-va` | ✅ |
| Tysons | `/deck-builder-tysons-va` | ✅ |
| Vienna | `/deck-builder-vienna-va` | ✅ |
| Woodbridge | `/deck-builder-woodbridge-va` | ✅ |
| Loudoun (county hub) | `/deck-builders-loudoun` | ✅ |
| Fairfax County (hub) | `/near-you/fairfax-county` | ⚠️ noindexed |
| Loudoun County (hub) | `/near-you/loudoun-county` | ⚠️ noindexed |
| Prince William (hub) | `/near-you/prince-william-county` | ⚠️ noindexed |
| Arlington County | `/near-you/arlington-county` | ⚠️ noindexed |
| Stafford County | `/near-you/stafford-county` | ⚠️ noindexed |

> `/near-you/*` pages are `noindex`. They are still **reachable** for paid traffic, but Google Ads landing-page experience may down-score noindex pages. Verify whether the campaign uses these URLs — if so, swap to the indexed city pages or to `/deck-builders-loudoun`.

---

## 12. Negative-landing-page list (do NOT send paid traffic here)

| URL | Why |
|---|---|
| `/blog/*` | Informational, no form prominence |
| `/thank-you` | `noindex` — conversion-only destination |
| `/privacy-policy`, `/terms-of-service` | Utility |
| `/team`, `/about/*`, `/press`, `/scholarship`, `/social` | Brand pages, low CVR |
| `/review`, `/reviews` | Social proof — too easy to leak budget |
| `/showcase/*` | Gallery, no form above the fold |
| `/faqs` | Informational |
| `/near-you/*` | Indexed status compromised |

---

## 13. Open routing decisions (require Ads CSV data)

These can only be settled once you import the keyword and search-terms exports:

1. **Composite + repair queries**: confirm in `gads_search_terms_*.csv` and either build LP or negative.
2. **`{city} screened porch` queries**: send to `/services/porches/screened-porch` (single page) or build city-specific screened-porch LPs? Decision pivots on volume per city.
3. **`{city} composite deck cost` queries**: send to `/composite-deck-cost-northern-virginia` or to the matching `/deck-builder-{city}-va` city page that mentions composite pricing? Decision pivots on per-city CVR.
4. **Brand+location queries** (e.g., `trex deck builder ashburn`): combine into the Ashburn page or the Trex page — depends on user-location report.
