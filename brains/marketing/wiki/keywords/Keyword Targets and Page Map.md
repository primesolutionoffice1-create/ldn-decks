---
type: keyword-strategy
title: "Keyword Targets and Page Map"
created: 2026-05-04
updated: 2026-05-11
tags:
  - keywords
  - page-map
status: developing
related:
  - "[[Keyword to URL Map]]"
  - "[[Keyword Cannibalization Ledger]]"
  - "[[Keyword Strategy Framework]]"
  - "[[Site Inventory and Cannibalization Map]]"
  - "[[Competitor Landscape Cache]]"
  - "[[XLSX Structure Reference]]"
  - "[[Opportunity Score Rubric]]"
  - "[[Seasonal Keyword Playbook]]"
  - "[[SERP-First Content Creation Gate]]"
  - "[[DataForSEO Keyword Exports]]"
sources:
  - "site-ranked-keywords-2026-05-11.json"
  - "keywords-2026-05-11.xlsx (High Opportunity 891, Hidden Gems 2,059, High Volume 100, All Keywords 3,890)"
---

# Keyword Targets and Page Map

The 5-tier prioritization map for LDN Decks's sprint. Built from `site-ranked-keywords-2026-05-11.json` (defend / push tiers) and `keywords-2026-05-11.xlsx` (cleanup / new-hub tiers).

The 5-tier structure is organized by where the page currently sits in the SERP, because the typical sprint job is to **defend top-3 wins**, **push 4–10s into top 3**, **climb the 11–30 conversion band**, **resolve cannibalization clusters where multiple URLs split intent**, and **selectively build new hubs only when there's a genuine gap and the [[Business Type Overlay]] supports it**.

**Status: developing.** Recommendations and expected lift below use plain-language phrasing — no traffic guarantees, no #1 promises. Outcomes depend on Google's next core update window. All numerical figures cite `site-ranked-keywords-2026-05-11.json` or the XLSX sheet/row.

## Tier 1 — Quick Wins (Defend Top-3)

Already ranking 1–3 with material volume. Action: **defend** — annual refresh, maintain internal-link equity, watch for SERP-feature creep (AI Overviews, PAA).

| #   | Keyword                 | Volume | Pos | Current URL             | Action                                 |
| --- | ----------------------- | -----: | --: | ----------------------- | -------------------------------------- |
| 1   | loudoun decks builder   |     90 |   1 | `https://ldndecks.com/` | Defend — annual refresh, schema audit  |
| 2   | loudoun deck            |     50 |   2 | `https://ldndecks.com/` | Defend — same as #1                    |
| 3   | decks northern virginia |     40 |   3 | `https://ldndecks.com/` | Defend — confirm NoVA pillar messaging |

Only three keywords sit in the 1–3 bucket. They are all brand-geo terms on the home. Expected outcome: stable wins; the play is to avoid losing them, not to grow them.

## Tier 2 — Conversion-Band Push (4–10 → top 3)

Already top-10, material volume. Action: **refresh + Information-Gain pass + internal-link push from related top-3 pages** ([[Days 13-18 Top Pages Refresh]]). Top 10 candidates by SV from the 15 keywords in this bucket:

| #   | Keyword                       | Volume | Pos | Current URL                        | Action                                                            | Expected lift                            |
| --- | ----------------------------- | -----: | --: | ---------------------------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| 1   | deck contractors northern va  |    260 |   7 | `https://ldndecks.com/`            | Refresh `/` NoVA section + add named-author block + 5-star schema | Plausible top-3; reinforces NoVA cluster |
| 2   | deck companies in northern va |    260 |  10 | `https://ldndecks.com/`            | Same refresh as #1                                                | Plausible top-5                          |
| 3   | loudoun deck and fence        |    260 |  10 | `https://ldndecks.com/`            | Same refresh; add Loudoun-specific project photos                 | Plausible top-5                          |
| 4   | ldn construction              |    170 |   9 | `https://ldndecks.com/`            | Brand defense — keep top-10                                       | Hold                                     |
| 5   | timbertech vs azek            |    140 |  10 | `/trex-vs-timbertech-vs-azek`      | Refresh comparison page; resolve `/blog/...` duplicate (301)      | Plausible top-5                          |
| 6   | decks virginia                |    110 |  10 | `https://ldndecks.com/`            | Refresh NoVA pillar                                               | Plausible top-5                          |
| 7   | va decks                      |    110 |  10 | `https://ldndecks.com/`            | Same                                                              | Plausible top-5                          |
| 8   | trex vs timbertech vs azek    |     90 |   4 | `/trex-vs-timbertech-vs-azek`      | Refresh — extend to a 4-way (add Fiberon section)                 | Defend / move 4→3                        |
| 9   | trex vs azek vs timbertech    |     90 |   7 | `/trex-vs-timbertech-vs-azek`      | Same — variant capture                                            | Plausible top-5                          |
| 10  | deck contractor fairfax va    |     90 |   8 | `/deck-builder-in-fairfax-county/` | Refresh Fairfax page; named author; permit data                   | Plausible top-5                          |

Plus 5 more long-tail in the bucket: `deck contractors northern virginia` #8, `loudoun county typical deck detail` #9 (on the Loudoun-county page — confirm anchor), `deck builders woodbridge va` #6, `fairfax decks` #10, `trex vs azek decking` #10.

## Tier 3 — Cluster Cleanup (Cannibalization Resolution)

Cannibalization clusters where 2+ URLs compete; pick a canonical hub, redirect or repoint the others. Sourced from [[Site Inventory and Cannibalization Map]] (Clusters A, B, E, G, H, I, J, M).

| # | Cluster | URLs competing | Canonical | Non-canonical action |
|---|---|---|---|---|
| 1 | A (host) | `https://ldndecks.com/` (59 kws) vs `https://www.ldndecks.com/` (13 kws) | `https://ldndecks.com/` | 301 `www` → apex |
| 2 | H (comparison) | `/trex-vs-timbertech-vs-azek` vs `/blog/trex-vs-timbertech-vs-azek` | `/trex-vs-timbertech-vs-azek` | 301 `/blog/...` → owner |
| 3 | G (Alexandria) | `/top-decks-build-near-you/deck-builder-in-alexandria/` vs `https://ldndecks.com/` | `/top-decks-build-near-you/...` | Repoint `/` away from Alexandria-specific intent (don't 301; just clean the H1/internal-link signals) |
| 4 | G (Loudoun-leak) | `/top-decks-build-near-you/deck-builder-in-leesburg/` ranking #30 for `loudoun county typical deck details` | `/deck-builder-in-loudoun-county/` | Fix the Leesburg page's accidental Loudoun-county anchor / H2 |
| 5 | G (slug pattern) | `/deck-builder-in-fairfax-county/` vs `/top-decks-build-near-you/deck-builder-in-fairfax-station/` (different patterns coexisting) | DECIDE Day 1 — pick one pattern site-wide | 301 the loser into the winner |
| 6 | I (patio) | `/services/patios/` vs `https://ldndecks.com/` (NoVA-patio variants) | `/services/patios/` | Repoint NoVA-patio intent on `/` to `/services/patios/`; REWRITE patio page to compete with battlefielddecks (#3 on `patio builders near me`) |
| 7 | M (cost) | `/composite-deck-cost-northern-virginia/` (rank 70) | Same — REWRITE | Add a real NoVA cost-range table and link the Trex/TimberTech comparison page in |
| 8 | E (Loudoun split — anchor leak from cluster 4 above) | covered | covered | covered |
| 9 | J (fence) | `https://ldndecks.com/` (2 kws) vs `/services/fences/` (2 kws) | `/services/fences/` for fence intent; `/` defers | Cleanup; low priority — fence is adjacent vertical |

Every cluster decision becomes a row in [[Keyword Cannibalization Ledger]] when accepted.

## Tier 4 — New Hub Pages

High-volume keywords with no current LDN Decks ranking. Build only where there's a genuine gap and the [[Business Type Overlay]] supports it (local-SEO-services overlay favors: dedicated service pages, dedicated location pages, real proof — not pure-info content unless it converts).

| #   | Keyword                            | Volume |  KD | Best comp pos / URL          | Proposed page                                                                                             | Justification                                                                                            |
| --- | ---------------------------------- | -----: | --: | ---------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1   | deck repair                        |  9,900 |   0 | `deckguru.com` #4            | `/services/deck-repair/` (new)                                                                            | Only NoVA competitor in top-10 is `deckguru.com`; 5.0★ + 9.9K SV + KD 0 — strongest single Tier 4 target |
| 2   | timbertech decking                 | 22,200 |   0 | `sunburstdeck.com` #24       | `/materials/timbertech/` (new) or expand `/best-composite-decking-virginia-trex-timbertech-fiberon/`      | LDN Decks is TimberTech-certified; authentic Information Gain                                            |
| 3   | timbertech decks                   | 22,200 |   9 | `sunburstdeck.com` #24       | Same hub as #2                                                                                            | Variant capture                                                                                          |
| 4   | cost of trex deck                  |  8,100 |   0 | `sunburstdeck.com` #27       | `/composite-deck-cost-northern-virginia/` REWRITE (already exists, see Tier 3 cluster M)                  | Real NoVA range table; ties to existing page                                                             |
| 5   | underdeck drainage systems         |  8,100 |   9 | `deckscapesofva.com` #12     | `/services/underdeck-drainage/` (new)                                                                     | Specialty service deckscapesofva owns; LDN Decks can match if it offers the install                      |
| 6   | patio builders near me             |  4,400 |  20 | `battlefielddecks.com` #3    | `/services/patios/` REWRITE (Tier 3 cluster I)                                                            | Already exists; needs content rebuild — covered in Tier 3                                                |
| 7   | screened-in porch builders near me |    590 | TBD | `fortress.builders` #7       | `/services/porches/screened-porch/` REFRESH (already exists, push at Tier 2 scale)                        | Variant of existing screened-porch owner                                                                 |
| 8   | front porch skirting ideas         |    390 |   0 | `deckguru.com`               | `/blog/deck-skirting-ideas-nova/` (new)                                                                   | Information-Gain content piece with LDN Decks project photos                                             |
| 9   | deck fire pit safety               |    480 |   0 | `fenceanddeckconnection.com` | `/blog/deck-fire-pit-safety/` (new)                                                                       | Information-Gain + code/regulation reference                                                             |
| 10  | 3 season sunroom                   |  3,600 | TBD | `steadfastinc.com` #8        | `/services/porches/3-season-sunroom/` (new) — **only if LDN Decks offers this service**; otherwise demote | Sunroom adjacent to screened-porch core                                                                  |

Page builds gate at [[SERP-First Content Creation Gate]]. Items 1, 2/3, and 4 are the highest-leverage Tier 4 picks.

## Tier 5 — Long-Tail Programmatic

Not applicable for a local-services contractor at this scale. The overlay (`local-seo-services`) calls programmatic-SEO patterns "anti-pattern" for this business type — programmatic landing pages for "deck builder in <every-zip-code>" are spam-class and Google has cracked down hard on these post-HCU. The existing `/top-decks-build-near-you/deck-builder-in-<city>/` pattern is fine *if every page has unique content, real projects, and named-author treatment*, but generating new ones at scale is not the play. See [[Business Type Overlay]] anti-patterns section.

## Cross-Sheet Dedup Rule (BEAST Planner Note)

Per `wiki/meta/keyword-curator-report-2026-05-11.md`, 333 keywords appear in both High Opportunity and Hidden Gems sheets (a side-effect of removing aggregator inflation). When assigning keywords to pages, **never assign the same keyword to two different target pages**. The owner-URL field in [[Keyword Cannibalization Ledger]] is the single source of truth per keyword.

## Mapping Rule

Every primary keyword owns **exactly ONE URL** per [[Keyword Cannibalization Ledger]]. Satellites use the keyword in body copy, FAQs, and natural internal anchors back to the owner — never in title, H1, slug, primary CTA, or first-paragraph keyword target.

## Pre-Publish Gate

Before refreshing or creating any target page, complete [[SERP-First Content Creation Gate]]:

1. Pull live SERP top 10 via `seo-dataforseo` for any keyword not already in `keywords-2026-05-11.xlsx`.
2. Confirm page type matches winners (service page vs guide vs comparison vs Q&A).
3. Check SERP-feature density (`serp_features` column in XLSX) — heavy local-pack means GBP signals matter more than on-page.
4. Confirm primary keyword has a single owner in [[Keyword Cannibalization Ledger]].

## Status

Map is **developing** until: (a) Day-1 audit replaces the inventory section in [[Site Inventory and Cannibalization Map]], (b) GSC connects (per [[Day 0 Measurement Access Gate]]) and confirms which of the 132 ranked keywords actually drive clicks vs impressions-only, and (c) the BEAST planner sequences the Tier 1–4 actions across the 30-day sprint and beyond.
