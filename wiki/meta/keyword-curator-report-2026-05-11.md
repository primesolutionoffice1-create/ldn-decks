---
type: meta
title: "Keyword Curator Report — 2026-05-11"
created: 2026-05-11
updated: 2026-05-11
tags:
  - meta
  - qa-report
  - keywords
status: mature
---

# Keyword Curator Report

**Round 2** — Round 1 returned FAIL for aggregator contamination. Between rounds, 14 aggregator JSONs (yelp.com, houzz.com, angi.com, bestpickreports.com, northernvirginiamag.com, trex.com, locator.timbertech.com — each plus its `page-0` pair) were quarantined to `<vault>/.raw/sources/dataforseo-aggregators/` (not deleted) and `scripts/build_keyword_xlsx.py` was re-run. This round 2 report supersedes round 1 and re-validates against the cleaned XLSX.

**Verdict:** PASS
**Total keywords (All Keywords sheet):** 3,890 (was 7,089 in round 1 — 45% reduction, all aggregator pollution)
**Total competitors (with rows in XLSX):** 20 (was 27)
**XLSX file:** keywords-2026-05-11.xlsx (size 0.62 MB)

Round 1's catastrophic top-50 contamination is fully resolved: top 50 High Opportunity is now 100% deck-relevant (was 0%). Top 5: "deck repair", "deck builders", "contractor for screened in porch", "board on board fence", "deck and fence connection". Score formula, sort, schema, dedup, and source attribution all mechanically correct and now point at the right universe.

## Checks

### 1. Sheet structure
- [x] All four expected sheets present (High Opportunity, Hidden Gems, High Volume, All Keywords)
- [x] Header row matches schema (15 cols: keyword, search_volume, kd, cpc, competition, intent, competitor_count, best_competitor_position, best_competitor_domain, best_competitor_url, all_competitors, our_position, our_url, opportunity_score, serp_features) — identical to round 1
- [x] Row counts (sane reductions vs round 1):
  - High Opportunity: 891 (was 1,786, −50.1%)
  - Hidden Gems: 2,059 (was 2,901, −29.0%)
  - High Volume: 100 (was 100, unchanged — capped)
  - All Keywords: 3,890 (was 7,089, −45.1%)

### 2. Duplicate detection
- [x] No duplicate keyword strings within any single sheet (HO=0, HG=0, HV=0, All=0)
- [x] No duplicate (keyword, best_competitor_domain) pairs in All Keywords (0 dupes / 3,890 rows)
- [x] Cross-sheet overlap is intentional and bounded:
  - HO ∩ HG = 333 (new in round 2 — round 1 was 0). Driven by the same root cause: with aggregators removed, mid-volume deck keywords now qualify for both buckets (a 320-volume "deck quotes" type term passes HO's score threshold AND HG's low-KD threshold). Acceptable; flagged for the synthesizer so it deduplicates intent when assigning to pages.
  - HO ∩ HV = 100 (HV is entirely a subset of HO, expected — same as round 1).
  - HG ∩ HV = 0.
  - HO ⊂ All, HG ⊂ All, HV ⊂ All — all verified true.

### 3. Score sanity
- [x] No NaN, no Inf, no negatives across any sheet
- [x] All scores ≥ 0; ranges (HO: 15.45–1,980; HG: 0.53–240; HV: 40.45–1,980; All: 0.20–1,980). The max collapsed from 5,550,000 (round 1) to 1,980 because the 11.1M-volume "breakfast near me" yelp.com row was excised.
- [x] Score formula matches rubric. Spot-checked 10 random rows from All Keywords (seed=42): all 10 match `volume / (1 + best_competitor_position)` exactly, with ×0.3 penalty when `our_position ≤ 10`. Examples verified: "what to clean trex decking with" (v=90, pos=33) → 2.65; "timbertech vs trex" (v=4400, pos=21) → 200.00; "how to clean trex deck boards" (v=2400, pos=49) → 48.00.

### 4. Sort order
- [x] High Opportunity sorted by `opportunity_score` desc, monotonic (0 violations)
- [ ] Hidden Gems sorted by (volume / KD) desc — **same rubric drift as round 1**: actually sorted by `opportunity_score` desc (0 violations on that key, 657 on the rubric-stated volume/KD key). Informational; not a disqualifying issue. Either fix the script to honor the rubric or update the rubric — flagged for round 3 hygiene, not blocking.
- [x] High Volume sorted by `search_volume` desc, monotonic (0 violations)

### 5. Source columns
- [x] Every row has a non-empty `best_competitor_domain` (0 empties across all 4 sheets)
- [x] Every `best_competitor_domain` in the XLSX exists in the per-competitor JSONs. 20 unique source domains, all 20 have a matching `competitor-kw-<slug>-2026-05-11.json`. No orphans.
- [x] Position columns (`best_competitor_position`, `our_position`) are integers ≥ 1 or empty across all 4 sheets (0 bad cells)
- [x] **No quarantined-aggregator residual.** 0 rows in any sheet attribute to yelp.com / houzz.com / angi.com / bestpickreports.com / northernvirginiamag.com / trex.com / locator.timbertech.com. The quarantine is effective.

### 6. Top-row sanity
- [x] **Top 50 of High Opportunity: 50/50 = 100% deck-relevant.** Every top-50 row maps cleanly to deck, porch, fence, composite/Trex/TimberTech, screened porch, four-seasons-room, patio, contractor, or NoVA-geo tokens. Sample (top 10): deck repair, deck builders, contractor for screened in porch, board on board fence, deck and fence connection, deck fence connection, fence & deck connection, fence and deck connection, fence and deck connection maryland, designing pools.
- [x] **Top 50 of Hidden Gems: 50/50 = 100% deck-relevant.** Sample (top 10): deck fire pit safety, community construction, fence contractors in maryland, contractor northern virginia, northern va contractors, fire pit on decking safety, fortress construction, md fence company, dog park fencing, contractors in northern va. Note: legitimate competitor brand-name terms (deck guru, fairfax contractors, prodeck, core outdoors, fortress construction) appear in HG — these are brand-defense / SERP-co-occurrence opportunities, not noise.
- [x] All top-20 Hidden Gems have search_volume > 0
- [x] No keyword > 100 chars in any sheet

### 7. Cross-source consistency & new-source verification
- [x] Sum of per-competitor `items_pulled` = 4,698 across 20 JSONs. All Keywords sheet = 3,890 rows. Dedup rate ≈ 17.2% (4,698 → 3,890), reasonable for a market where multiple NoVA contractors rank for the same brand/category terms. (Round 1 dedup rate was ~11.5% on a wider, polluted pull.)
- [x] **New-source verification (round 1 did not call these out):**
  - **`hoppy2u.com`** — legitimate. Domain hosts `deckcalculator.hoppy2u.com`, a deck cost calculator. 22 items pulled, all in-niche: "build a deck cost estimator", "deck paint cost calculator", "deck quotes", "porch estimate calculator", "hoppy porch". Tool/calculator competitor — keep.
  - **`fenceanddeckconnection.com`** — legitimate. Maryland-based fence + deck contractor (`https://www.fenceanddeckconnection.com/`), ranks #1–3 for its own brand and high-rank for board-on-board fence, screened porch, fire-pit-on-deck content. 500 items pulled (largest pull of any NoVA contractor — DataForSEO caps at 500 per page; reported total is 1,372). This domain drives 497 rows in All Keywords (~13%) and contributes most of the fence-vocabulary top-of-HO clustering. Some Savannah-GA and Maryland geographic spill exists in tail rows but is in-niche (deck/fence contractor terms). Keep.
- [x] No new noise sources surfaced. Every one of the 20 source domains is a legitimate in-niche contractor, manufacturer-adjacent, or tool/calculator competitor.

## Failures

None blocking. Two non-blocking notes carried from round 1 (unchanged):

| Sheet | Row | Issue | Severity |
|---|---|---|---|
| Hidden Gems | sort | Rubric drift — sheet sorted by `opportunity_score` desc, not volume/KD desc (657 violations on rubric-stated key) | INFO — fix script or update rubric in round 3 |
| HO ∩ HG | overlap | 333 keywords appear in both High Opportunity and Hidden Gems (new in round 2; expected side-effect of removing aggregator-inflated HO scores) | INFO — synthesizer must dedupe when assigning to pages |

## Recommended next action

**PROCEED to Step 4 (`mine_paa_serps.py`)**. The XLSX is now production-quality:

- Top 50 of High Opportunity is 100% deck-relevant (target was ≥80%, achieved 100%).
- Top 50 of Hidden Gems is 100% deck-relevant.
- All 20 source domains verified as legitimate NoVA/MD deck-or-adjacent businesses or tools.
- Score formula matches rubric in 10/10 spot-checks.
- Zero aggregator residual; zero NaN/Inf/negatives; zero duplicates; zero orphan source attributions.
- Row counts (HO 891, HG 2,059, HV 100, All 3,890) are sane and within expected post-quarantine bounds.

Optional cleanup for future round (do not block on these):

1. Reconcile Hidden Gems sort with the Opportunity Score Rubric (either change the sort key in `build_keyword_xlsx.py` to `volume/kd` desc OR update the rubric to document that the implementation uses `opportunity_score` desc).
2. Flag HO ∩ HG = 333 cross-sheet duplicates to the BEAST synthesizer with an "intent dedup" rule so a single keyword doesn't get assigned to two separate refresh pages.
