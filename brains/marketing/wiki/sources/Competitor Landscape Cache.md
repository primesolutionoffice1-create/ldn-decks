---
type: source
title: "Competitor Landscape Cache"
created: 2026-05-04
updated: 2026-05-11
tags:
  - source
  - competitors
  - serp-research
status: developing
related:
  - "[[Competitor Keyword Research Summary]]"
  - "[[Primary Competitors]]"
  - "[[Keyword Targets and Page Map]]"
  - "[[HCU Recovery Framework]]"
  - "[[Topical Authority for Niche Sites]]"
sources:
  - "competitors-2026-05-11.json (27 competitors discovered, 7 aggregators quarantined)"
  - "competitor-kw-*-2026-05-11.json (20 legit competitor pulls)"
  - "competitor-kw-summary-2026-05-11.json"
  - "Direct SERP research (TBD)"
---

# Competitor Landscape Cache

**Status: developing.** Populated from the DataForSEO `competitors_domain` pull (`competitors-2026-05-11.json`) and per-competitor `keywords_for_site` pulls. 27 competitors were initially discovered against three NoVA seed queries; **7 aggregator domains** (`yelp.com`, `houzz.com`, `angi.com`, `bestpickreports.com`, `northernvirginiamag.com`, `trex.com`, `locator.timbertech.com`) were quarantined to `.raw/sources/dataforseo-aggregators/` because they pollute the head-term SERP without representing competitive deck contractors. This cache profiles the 20 remaining legitimate domains.

The canonical Tier 1–4 list lives in [[Primary Competitors]]; this cache holds the per-competitor profile detail (focus, content strength, threat, response).

## Tier 1 — Direct NoVA Head-to-Head Competitors

Domains with high SERP intersection on `top-rated deck builder northern virginia`, `custom deck builder & contractor serving northern virginia`, and `trex platinum & timbertech certified deck builders in nova`. Score from `competitors-2026-05-11.json`.

| Domain | Score | Items | Total ETV | Focus | Top owned terms | Threat | Suggested response |
| --- | ---: | ---: | ---: | --- | --- | --- | --- |
| `deckscapesofva.com` | **1.33** | 500 | **3,907.7** | NoVA composite decks, screened porches, pools/underdeck-drainage | `contractor for screened in porch` #2 (5.4K), `designing pools` #6 (8.1K), `deck builder fairfax va` #1 (480) | **HIGH** — strongest direct rival; owns both head terms LDN Decks is chasing | Compete head-on with information-gain (named author, real project photos, dated permits) on `/services/porches/screened-porch/` and `/services/patios/`. Match underdeck-drainage page. |
| `prodeckconstructionva.com` | 0.68 | 88 | 109.5 | Small content footprint; brand search drives traffic | `pro deck construction` #2 (90), `deck builder fairfax va` #9 (480) | LOW — small footprint, brand-defense play | Watch only; no head-on. |
| `battlefielddecks.com` | 0.45 | 263 | **1,783.3** | Patio-builder leader; "near me" pattern | `patio builders near me` #3 (4.4K), `deck and patios` #6 (5.4K), `custom decks near me` #4 (1.9K) | **HIGH** — owns "patio builders" cluster LDN Decks's `/services/patios/` is at #38 for | Rewrite `/services/patios/` to take the `deck and patios` query (currently #38; battlefielddecks at #6). |
| `deckguru.com` | 0.42 | 500 | **2,556.4** | Deck repair / installation specifics / dimensions guide | `deck repair` #4 (9.9K), `how wide are decking boards` #2 (1K) ×3 variants | **HIGH** — owns `deck repair` (9.9K SV, KD 0, top opportunity in entire XLSX) | Build a `/services/deck-repair/` page; LDN Decks does not currently rank for any repair term. |
| `northerndeckworks.com` | 0.38 | 59 | 343.8 | NoVA brand + state-level deck-builder terms | `deck builders in northern virginia` #1 (260), `north deck` #10 (4.4K — likely brand match) | MEDIUM — owns the state-level NoVA SERP for the bare phrase | Push `/` from "deck builders in northern virginia" #11 → top-10. |
| `nvdeck.com` | 0.23 | 157 | 618.5 | NoVA-state head terms | `deck builders in northern va` #1 (260), `deck contractors northern va` #1 (260), `deck companies in northern va` #1 (260) | **HIGH** — owns the NoVA-state cluster outright | LDN Decks already ranks #7–10 for these on `/`; refresh + internal-link push to take the cluster. |

## Tier 2 — Adjacent NoVA Specialists / Sub-Niche Owners

Strong domains with overlapping coverage but a primary focus that's adjacent rather than identical.

| Domain | Score | Items | Total ETV | Focus | Top owned terms | Threat | Suggested response |
| --- | ---: | ---: | ---: | --- | --- | --- | --- |
| `sunburstdeck.com` | 0.11 | 500 | **2,438.4** | 4-season / 3-season sunrooms + porch-cost / TimberTech-cost guides | `four seasons room cost` #1 (720), variants #2 (720 ×3), `timbertech decking` #24 (22.2K SV) | **HIGH** in screened-porch / sunroom orbit | Build a `/services/porches/4-season-sunroom/` (or merge into screened-porch hub). Information Gain: cost table for NoVA. |
| `fairfaxcontractor.com` | 0.15 | 500 | **1,550.8** | Multi-trade Fairfax contractor (concrete, roofing, decks) | `concrete driveway refurbishment` #8 (8.1K), `contractor northern virginia` #1 (260) | MEDIUM — overlaps on `fairfax` head terms | Deck-specific content out-executes generalist content; not a head-on competitor on deck queries. |
| `stoneridgeoutdoor.com` | 0.17 | 200 | 449.0 | Outdoor-living / privacy screens / sunrooms; Richmond + NoVA | `stoneridge outdoor living` #1 (390), `privacy screen nearby` #4 (320), `two story sunroom` #3 (170) | LOW — different geo center (Richmond) | Watch only. |
| `decksva.com` | 0.18 | 137 | 838.7 | Statewide VA deck builder | `deck builders` #48 (90.5K), `northern virginia deck builders` #1 (260), `deck builders in va` #1 (210) | MEDIUM — owns several Virginia-state brand-anchor variants | LDN Decks already overlaps on the state cluster; push the same queries from rank 11–13 into top-10. |
| `fortress.builders` | 0.14 | 130 | 246.9 | Fairfax custom builder; brand SERP plus screened-porch terms | `fortress construction` #1 (210), `screened-in porch builders near me` #7 (590) | MEDIUM — direct screened-porch overlap | Confirm `/services/porches/screened-porch/` strong, push the "near me" variant. |
| `noverraexteriors.com` | 0.13 | 62 | 31.1 | Fairfax exteriors (roofing-led); deck adjacent | `roof repair fairfax va` #6 (170), some deck-company terms in tail | LOW — primary vertical is roofing | Cite as exterior-trade context; not a deck competitor. |
| `commconstruct.com` | 0.06 | 298 | 544.9 | Siding / vinyl / fiber-cement installer; community-construction brand | `community construction` #1 (320), `vinyl siding contractors near me` #13 (5.4K), `hardie plank siding installers` #17 (6.6K) | LOW on decks; HIGH on adjacent exteriors | Different vertical. Cite or partner; do not compete. |
| `coreoutdoor.com` | 0.25 | 171 | 383.7 | Custom outdoor living / Fairfax | `core outdoor living` #1 (260), `deck builder fairfax va` #4 (480), `porch builder` #47 (8.1K) | MEDIUM — direct Fairfax overlap | Out-execute on the Fairfax county page. |
| `velerodeckdesigns.com` | 0.06 | 125 | 103.7 | Vienna, VA custom decks; screened-deck variants | `velero deck designs` #1 (40), `screened-in deck` #44 (3.6K), `back screened porch` #47 (2.4K) | LOW — small footprint | Watch. |
| `steadfastinc.com` | 0.07 | 383 | 468.2 | NoVA contractor; 3-season sunrooms + porches | `steadfast construction` #2 (590), `3 season sunroom` #8 (3.6K), `3-season room contractors` #9 (1K) | MEDIUM — sunroom adjacency | Add 3-season sunroom page if LDN Decks offers it. |
| `craigsundecks.com` | 0.08 | 19 | 43.1 | Vienna, VA deck/sundeck specialist | `craig sundecks and porches` #1 (50), `screened in porch northern virginia` #4 (30) | LOW — tiny footprint, ranks for ultra-specific brand | Watch; brand-defense only. |
| `deckbuildersinc.com` | 0.14 | 84 | 170.9 | Small VA deck builder; Manassas focus | `deck builders va` #2 (210), `deck builders in manassas va` #1 (40) | LOW–MEDIUM — owns Manassas | Build a Manassas location page if LDN Decks serves that geo. |
| `hoppy2u.com` | 0.31 | 22 | 13.7 | Deck cost calculator tool (not a contractor) | `cost of a deck calculator` #68 (1.6K), `deck price calculator` #56 (590) | TOOL — not a service competitor | Out-execute by embedding LDN Decks's own NoVA cost table on `/composite-deck-cost-northern-virginia/`. |

## Tier 3 — Adjacent / Wrong-Geography / Specialist (demote on planning)

Strong domains that surfaced in the discovery seeds but compete in a different geography or sub-vertical.

| Domain | Score | Items | Total ETV | Focus | Why demoted | Suggested response |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `fenceanddeckconnection.com` | 0.19 | 500 | **10,426.3** | **Maryland-based** fence + deck contractor; massive content footprint | Wrong geography (MD, not NoVA); contributes 497 rows / ~13% of XLSX from its Maryland-/Savannah-GA-spillover content | **Cite, do not compete**. Out-of-geo competitor with stronger domain authority. Their fence content (`board on board fence` #2 4.4K, `fence and deck connection` #1 2.4K) is wrong vertical for LDN Decks's deck-and-porch core. |

## Tier 4 — Quarantined Aggregators (excluded from planning)

The marketing-brain pipeline quarantined these to `.raw/sources/dataforseo-aggregators/` because they pollute SERPs without being competitive contractors. Listed for provenance only; the XLSX has zero rows attributing to any of these.

| Domain | Why quarantined |
| --- | --- |
| `yelp.com` | Aggregator — 34.7M total keywords reported; appearing for "Deck Builder Fairfax VA" search-result pages, not a contractor. |
| `houzz.com` | Aggregator — 2.07M keywords reported; professional directory. |
| `angi.com` | Aggregator — 1.5M keywords reported; lead-gen directory. |
| `bestpickreports.com` | Aggregator — 25.2K keywords reported; review-list site. |
| `northernvirginiamag.com` | Magazine listicle — `best/home-experts/deck-builders/` is a curated list, not a contractor. |
| `trex.com` | Manufacturer — runs `find-a-builder` directory; not a competitor. |
| `locator.timbertech.com` | Manufacturer directory — TimberTech's certified-builder locator. |

Provenance note: see `wiki/meta/keyword-curator-report-2026-05-11.md` Round 2 preamble.

## Authority Sources (Citation Targets, Not Competitors)

Government / regulatory / industry domains that LDN Decks cites from owned pages rather than competing against.

- **Loudoun County / Fairfax County permit offices** — already the topical authority for permit and deck-code queries (TBD specific URLs Day 1).
- **Virginia Uniform Statewide Building Code (USBC)** — referenced on `/deck-permit-loudoun-county-virginia/`.
- **Trex Inc.** — manufacturer authority on Trex Platinum standards (LDN Decks is Platinum-certified — cite-as-credential, not compete-against).
- **TimberTech** — manufacturer authority on AZEK / TimberTech composite (LDN Decks is certified — same posture).

## Caveats

- All scores, intersection counts, and ETV figures derive from `competitors-2026-05-11.json` and the per-competitor `competitor-kw-*-2026-05-11.json` files. Every claim above traces to one of those files.
- Tier assignments may shift after Day-1 audit reveals which queries actually drive LDN Decks's residual traffic (GSC clicks vs DataForSEO ETV estimate).
- Some competitors may also be in algorithmic recovery; this opens windows but means SERPs may be unstable.
- The 500-item DataForSEO cap means the largest competitors (`deckscapesofva.com` reported 858 total; `fenceanddeckconnection.com` reported 1,372; `sunburstdeck.com` reported 693) have a tail we cannot see. Pull more pages if a specific term in the tail becomes load-bearing.
