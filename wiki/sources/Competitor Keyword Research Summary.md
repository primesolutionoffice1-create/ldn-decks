---
type: source
title: "Competitor Keyword Research Summary"
created: 2026-05-04
updated: 2026-05-11
tags:
  - source
  - competitors
  - keywords
  - serp-research
status: developing
related:
  - "[[Competitor Landscape Cache]]"
  - "[[Primary Competitors]]"
  - "[[Keyword Targets and Page Map]]"
  - "[[DataForSEO Keyword Exports]]"
  - "[[Information Gain]]"
  - "[[Topical Authority for Niche Sites]]"
sources:
  - "keywords-2026-05-11.xlsx (4 sheets: High Opportunity 891, Hidden Gems 2,059, High Volume 100, All Keywords 3,890)"
  - "competitor-kw-summary-2026-05-11.json"
  - "Keyword curator round-2 report (`wiki/meta/keyword-curator-report-2026-05-11.md`)"
---

# Competitor Keyword Research Summary

**Status: developing.** Synthesis of `keywords-2026-05-11.xlsx` after the round-2 aggregator quarantine (see `wiki/meta/keyword-curator-report-2026-05-11.md` for QA). Every claim below cites the XLSX sheet and row, or the per-competitor JSON.

## Universe Sizing

- **Total unique keywords across all 20 legit competitors**: **3,890** (`All Keywords` sheet).
- **High Opportunity sheet**: **891** rows (volume-weighted, low best-competitor-position).
- **Hidden Gems sheet**: **2,059** rows (low KD, low competition).
- **High Volume sheet**: **100** rows (top-volume queries regardless of opportunity score).
- LDN Decks currently ranks for **132** keywords (3.4% of the universe). Massive upside on coverage; the question is *which* of the 3,890 to chase first.

## Top 20 Highest-Opportunity Keywords (High Opportunity sheet, sorted by `opportunity_score` desc)

| # | Keyword | SV | KD | Best comp pos | Best comp | OS |
|---|---|---:|---:|---:|---|---:|
| 1 | deck repair | 9,900 | 0 | 4 | `deckguru.com` | 1,980 |
| 2 | deck builders | 90,500 | 18 | 48 | `decksva.com` | 1,847 |
| 3 | contractor for screened in porch | 5,400 | 0 | 2 | `deckscapesofva.com` | 1,800 |
| 4 | board on board fence | 4,400 | 0 | 2 | `fenceanddeckconnection.com` | 1,467 |
| 5 | deck and fence connection | 2,400 | 28 | 1 | `fenceanddeckconnection.com` | 1,200 |
| 6 | deck fence connection | 2,400 | 27 | 1 | `fenceanddeckconnection.com` | 1,200 |
| 7 | fence & deck connection | 2,400 | 24 | 1 | `fenceanddeckconnection.com` | 1,200 |
| 8 | fence and deck connection | 2,400 | 49 | 1 | `fenceanddeckconnection.com` | 1,200 |
| 9 | fence and deck connection maryland | 2,400 | 49 | 1 | `fenceanddeckconnection.com` | 1,200 |
| 10 | designing pools | 8,100 | 5 | 6 | `deckscapesofva.com` | 1,157 |
| 11 | patio builders near me | 4,400 | 20 | 3 | `battlefielddecks.com` | 1,100 |
| 12 | decking footers | 9,900 | 0 | 10 | `deckguru.com` | 900 |
| 13 | concrete driveway refurbishment | 8,100 | 0 | 8 | `fairfaxcontractor.com` | 900 |
| 14 | horizontal wooden fence | 5,400 | 0 | 5 | `fenceanddeckconnection.com` | 900 |
| 15 | screened porch contractors | 5,400 | 0 | 5 | `fenceanddeckconnection.com` | 900 |
| 16 | timbertech decking | 22,200 | 0 | 24 | `sunburstdeck.com` | 888 |
| 17 | timbertech decks | 22,200 | 9 | 24 | `sunburstdeck.com` | 888 |
| 18 | deck and patios | 5,400 | 31 | 6 | `battlefielddecks.com` | 771 |
| 19 | horizontal fences wooden | 5,400 | 0 | 6 | `fenceanddeckconnection.com` | 771 |
| 20 | horizontal wood fence | 5,400 | 0 | 6 | `fenceanddeckconnection.com` | 771 |

**Reading the table**: rows 5–9 (`fence and deck connection` variants) are brand-search for the **Maryland competitor** `fenceanddeckconnection.com` — LDN Decks should NOT chase them. Same for `fence-vocabulary` rows 14, 19, 20 (also fenceanddeckconnection territory in MD). The actionable LDN Decks targets in this top 20 are: **deck repair** (1), **deck builders** (2), **contractor for screened in porch** (3), **designing pools** (10 — adjacent), **patio builders near me** (11), **decking footers** (12), **screened porch contractors** (15), **timbertech decking/decks** (16/17), **deck and patios** (18).

## Top 20 Hidden Gems (Hidden Gems sheet, sorted by `opportunity_score` desc)

Low-KD, low-competitor-count terms. Read with brand-context caveat — several rows are competitor-brand searches.

| # | Keyword | SV | KD | Best comp | Notes |
|---|---|---:|---:|---|---|
| 1 | deck fire pit safety | 480 | 0 | `fenceanddeckconnection.com` | Legitimate Information-Gain target; safety-and-code page. |
| 2 | community construction | 320 | 0 | `commconstruct.com` | **Brand search — skip.** |
| 3 | fence contractors in maryland | 390 | 16 | `fenceanddeckconnection.com` | Wrong geo — skip. |
| 4 | contractor northern virginia | 260 | 11 | `fairfaxcontractor.com` | Direct overlap with LDN Decks brand. Strong target. |
| 5 | northern va contractors | 260 | 7 | `fairfaxcontractor.com` | Same. |
| 6 | fire pit on decking safety | 480 | 0 | `fenceanddeckconnection.com` | Same as #1 — safety page. |
| 7 | fortress construction | 210 | 4 | `fortress.builders` | **Brand search — skip.** |
| 8 | md fence company | 390 | 16 | `fenceanddeckconnection.com` | Wrong geo. |
| 9 | dog park fencing | 480 | 0 | `fenceanddeckconnection.com` | Off-niche. |
| 10 | contractors in northern va | 260 | 3 | `fairfaxcontractor.com` | Strong target. |
| 11 | battlefield deck and patio | 170 | 3 | `battlefielddecks.com` | **Brand search.** |
| 12 | battlefield decks and patios | 170 | 3 | `battlefielddecks.com` | **Brand search.** |
| 13 | deck guru | 170 | 7 | `deckguru.com` | **Brand search.** |
| 14 | fairfax contractors | 140 | 0 | `fairfaxcontractor.com` | Brand-anchored but generic; possible. |
| 15 | fence contractors savannah ga | 480 | 10 | `fenceanddeckconnection.com` | Wrong geo. |
| 16 | savannah ga fence companies | 480 | 24 | `fenceanddeckconnection.com` | Wrong geo. |
| 17 | staining pressure treated fence | 480 | 0 | `fenceanddeckconnection.com` | Off-niche fence; defer. |
| 18 | front porch skirting ideas | 390 | 0 | `deckguru.com` | Information-Gain target — porch + skirting. |
| 19 | deck builders in maryland | 390 | 29 | `fenceanddeckconnection.com` | Wrong geo. |
| 20 | fence companies md | 390 | 23 | `fenceanddeckconnection.com` | Wrong geo. |

**Hidden Gems reality check**: the curator-report flagged that Hidden Gems is sorted by opportunity-score (not by volume/KD ratio as the rubric stated — a known non-blocking drift). After filtering out competitor-brand searches and wrong-geo (MD / Savannah / fence-only) rows, the actionable gems are: `deck fire pit safety` (480), `fire pit on decking safety` (480), `contractor northern virginia` / `northern va contractors` (260 each), `front porch skirting ideas` (390), and a long tail of NoVA-modifier variants further down the sheet.

## Top 20 Highest-Volume Keywords (High Volume sheet, sorted by `search_volume` desc)

| # | Keyword | SV | KD | Best comp pos | Best comp |
|---|---|---:|---:|---:|---|
| 1 | deck builders | 90,500 | 18 | 48 | `decksva.com` |
| 2 | timbertech decking | 22,200 | 0 | 24 | `sunburstdeck.com` |
| 3 | timbertech decks | 22,200 | 9 | 24 | `sunburstdeck.com` |
| 4 | contractor deck | 12,100 | 30 | 67 | `battlefielddecks.com` |
| 5 | deck contractor | 12,100 | 27 | 87 | `decksva.com` |
| 6 | deck repair | 9,900 | 0 | 4 | `deckguru.com` |
| 7 | decking footers | 9,900 | 0 | 10 | `deckguru.com` |
| 8 | deck foundations footings | 9,900 | 0 | 12 | `deckguru.com` |
| 9 | deck repairs | 9,900 | 0 | 21 | `deckguru.com` |
| 10 | vinyl siding installation contractors | 9,900 | 5 | 68 | `commconstruct.com` |
| 11 | designing pools | 8,100 | 5 | 6 | `deckscapesofva.com` |
| 12 | concrete driveway refurbishment | 8,100 | 0 | 8 | `fairfaxcontractor.com` |
| 13 | underdeck drainage systems | 8,100 | 9 | 12 | `deckscapesofva.com` |
| 14 | under deck drainage system | 8,100 | 14 | 27 | `deckscapesofva.com` |
| 15 | under decking drainage system | 8,100 | 12 | 27 | `deckscapesofva.com` |
| 16 | fiber cement siding installer | 8,100 | 16 | 27 | `commconstruct.com` |
| 17 | skirting for deck | 8,100 | 0 | 27 | `deckguru.com` |
| 18 | cost of trex deck | 8,100 | 0 | 27 | `sunburstdeck.com` |
| 19 | cost for trex deck | 8,100 | 0 | 27 | `sunburstdeck.com` |
| 20 | cost of trex decking | 8,100 | 0 | 27 | `sunburstdeck.com` |

**Reading the table**: the head term `deck builders` (90.5K) has every NoVA competitor stuck below #20 — the SERP is structurally fragmented and dominated by aggregators (`yelp.com`, `houzz.com`, `angi.com`, `northernvirginiamag.com`). That fragmentation is the opportunity. Realistic ambition: top 5–10 over multiple quarters, not #1. The 22.2K `timbertech decking` / `timbertech decks` queries are sub-niche specifics where a Trex/TimberTech-certified contractor has authentic information-gain leverage. The 9.9K **`deck repair`** cluster is wide open — `deckguru.com` is the only NoVA competitor in the top 10 and LDN Decks does not yet rank for any repair term.

## Per-Competitor Row Counts (best_competitor_domain in All Keywords)

How many of the 3,890 unique keywords each competitor is the best ranker for. From `keywords-2026-05-11.xlsx`, All Keywords sheet.

| Rank | Domain | Rows | Tier |
|---:|---|---:|---|
| 1 | `fenceanddeckconnection.com` | 497 | T3 (MD — out-of-geo) |
| 2 | `deckguru.com` | 467 | T1 (NoVA — owns repair) |
| 3 | `deckscapesofva.com` | 462 | T1 (NoVA — owns screened porch + pools) |
| 4 | `fairfaxcontractor.com` | 460 | T2 (NoVA multi-trade) |
| 5 | `sunburstdeck.com` | 459 | T2 (NoVA — owns sunrooms + cost) |
| 6 | `steadfastinc.com` | 301 | T2 (NoVA — sunrooms) |
| 7 | `commconstruct.com` | 298 | T2 (NoVA — siding/adjacent) |
| 8 | `battlefielddecks.com` | 185 | T1 (NoVA — owns patio + custom-near-me) |
| 9 | `stoneridgeoutdoor.com` | 153 | T2 (Richmond — adjacent) |
| 10 | `nvdeck.com` | 128 | T1 (NoVA — owns the state cluster) |
| 11 | `coreoutdoor.com` | 96 | T2 (NoVA — Fairfax adjacency) |
| 12 | `velerodeckdesigns.com` | 83 | T2 (Vienna VA) |
| 13 | `fortress.builders` | 72 | T2 (Fairfax) |
| 14 | `decksva.com` | 70 | T2 (Statewide VA) |
| 15 | `noverraexteriors.com` | 50 | T2 (NoVA roofing-led) |
| 16 | `deckbuildersinc.com` | 31 | T2 (Manassas) |
| 17 | `prodeckconstructionva.com` | 29 | T1 (NoVA brand) |
| 18 | `hoppy2u.com` | 22 | T2 (cost-calculator tool) |
| 19 | `northerndeckworks.com` | 16 | T1 (NoVA) |
| 20 | `craigsundecks.com` | 11 | T2 (Vienna) |

Tier mapping anchored to [[Primary Competitors]].

## Cluster-Level Summary (intent buckets across All Keywords)

Substring-matched against `All Keywords` (some rows match multiple buckets):

| Cluster | Row count | Top-level intent |
| --- | ---: | --- |
| Composite / Trex / TimberTech / AZEK / Fiberon | 454 | Material-comparison + brand-spec |
| Cost / pricing / quote / estimate | 445 | Commercial — high purchase-intent |
| Fence (adjacent vertical) | 444 | Mostly out-of-geo MD or off-niche; selectively pursue |
| Screened / 4-season / 3-season porch + sunroom | 406 | LDN Decks's #1 conversion target — already has the page |
| Geo-modified (VA cities / NoVA / Virginia) | 390 | The local-SEO bread and butter |
| Patio / pergola / gazebo / outdoor living | 353 | Adjacent — battlefielddecks owns "patio builders" |
| Deck builder / contractor (head) | 158 | The big head-term battleground |
| Deck repair / replacement | 131 | Wide-open — deckguru.com is the only top-10 NoVA competitor |
| Deck permit / code / regs | 58 | Pure Information-Gain plays (LDN Decks holds `loudoun-county-virginia` permit page) |

## Intent Distribution

From `All Keywords` `intent` column:

- Informational: 1,382 (35.5%)
- Commercial: 1,303 (33.5%)
- Transactional: 754 (19.4%)
- Navigational: 451 (11.6%)

Commercial + transactional = 52.9% of the universe. The local-SEO-services overlay says lead-gen pages outrank info content for revenue — see [[Business Type Overlay]].

## Information Gain Levers Identified

Per [[Information Gain]], the differentiation axes where LDN Decks can ship content competitors literally cannot:

1. **Trex Platinum + TimberTech certifications** — only a handful of NoVA competitors hold both (Trex's locator is quarantined, but the certification is real and most competitors are Trex-certified only).
2. **Named expert author** — LDN Decks owner / project manager bio with photo + verifiable certifications, applied across service and location pages. [[E-E-A-T for local-seo-services]] is the canonical playbook.
3. **5.0★ Google rating** — honest schema reflecting actual review count (no fabrication; see [[What Not To Do]]).
4. **Real NoVA project photography** — every service page gets actual completed-project photos with location captions (Loudoun, Fairfax, Ashburn, etc.). The "real project at <town>" treatment is what beats `deckscapesofva.com`'s photo set on `/services/porches/screened-porch/`.
5. **Loudoun + Fairfax permit specifics** — LDN Decks already has `/deck-permit-loudoun-county-virginia/`; mirror for Fairfax, Prince William, Arlington.
6. **NoVA cost ranges** — replace the 880-volume `/composite-deck-cost-northern-virginia/` (current rank 70) with a real range table by deck-size × material × NoVA county.
7. **Trex / TimberTech / AZEK comparison authenticity** — LDN Decks's comparison page is at #4 for the 3-way; expand into a category hub.

## Cluster Difficulty Inferences

Confirmed with KD values from the XLSX:

- **Deck repair cluster** (9.9K head, KD 0): the wide-open opportunity. Build `/services/deck-repair/`.
- **Screened porch cluster** (5.4K head, KD 0–13 per variant): LDN Decks at 19–46, deckscapesofva at #2. Push tier — refresh, don't rebuild.
- **TimberTech decking cluster** (22.2K head, KD 0–9): sunburstdeck stuck at #24. Trex Platinum + TimberTech certification = Information-Gain leverage.
- **Deck builder cluster** (12.1K–90.5K, KD 18–30): fragmented SERP, multi-quarter play, not single-sprint.
- **Patio cluster** (4.4K–5.4K, KD 20–31): battlefielddecks owns "patio builders near me" #3. LDN Decks's `/services/patios/` needs a content rebuild to compete.

## Caveats

- All theme ownership claims trace to per-competitor JSONs in `.raw/sources/dataforseo/competitor-kw-*-2026-05-11.json` and `keywords-2026-05-11.xlsx`.
- The 7 quarantined aggregator domains hold massive SERP real-estate on the head terms (`deck builders`, `top-rated deck builder northern virginia`). Reaching top 5 on a 90.5K-volume head means displacing one of them, not displacing a local competitor — this is structurally hard.
- Difficulty (KD) is one DataForSEO signal; full SERP-feature competitive intensity (local pack, PAA, video, images) sits in the XLSX `serp_features` column and should be re-checked per target keyword via the `seo-dataforseo` skill at the SERP-First Content Creation Gate.
- The 333-row HO ∩ HG cross-sheet overlap (curator-report Round 2 finding) requires the BEAST planner to dedupe intent when assigning to pages.
