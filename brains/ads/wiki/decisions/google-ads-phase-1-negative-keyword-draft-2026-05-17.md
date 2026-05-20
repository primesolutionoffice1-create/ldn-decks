---
brain_schema: "ads-brain.v1"
title: "Google Ads Phase 1 Negative Keyword Draft 2026-05-17"
created: "2026-05-17"
updated: "2026-05-17"
type: "decision"
status: "draft"
sources:
  - ".raw/sources/exports/google/2026-05-16-search-terms-report.csv"
  - "wiki/deliverables/Negative Keyword Candidate Queue.md"
  - "wiki/decisions/google-ads-waste-containment-pack-2026-05-17.md"
related:
  - "[[google-ads-waste-containment-pack-2026-05-17|Google Ads Waste Containment Pack 2026-05-17]]"
  - "[[Negative Keyword Candidate Queue]]"
  - "[[Approval Queue]]"
---

# Google Ads Phase 1 Negative Keyword Draft 2026-05-17

## Purpose

This is the operator-ready draft for the first negative-keyword pass. It is still approval-gated and should not be applied automatically.

## Phase 1 Rules

- Use **phrase match negatives** first unless the owner explicitly wants broader blocking.
- Start with supplier, competitor, and obvious off-offer terms.
- Do not negate premium builder/composite/replacement intent just because the latest export did not show a conversion.
- Re-export search terms after the first cleanup window before expanding the list.

## Draft Negative List By Campaign

| Campaign | Match type | Term | Reason | Source spend |
| --- | --- | --- | --- | ---: |
| `Premium Composite Decks` | phrase | `tart lumber` | Supplier / materials-store intent | 40.47 |
| `Premium Composite Decks` | phrase | `decksdirect` | Supplier / e-commerce intent | 26.24 |
| `Premium Composite Decks` | phrase | `nova stone ashburn` | Non-core hardscape supplier intent | 35.63 |
| `Premium Composite Decks` | phrase | `contractors in my area` | Generic low-fit contractor shopping | 63.46 |
| `Premium Composite Decks` | phrase | `manassas home improvement` | Generic home-improvement, weak deck specificity | 44.16 |
| `Premium Composite Decks` | phrase | `deck inspection` | Low-ticket inspection intent, not premium build | 31.32 |
| `Premium Composite Decks` | phrase | `patio repair near me` | Low-ticket repair, off primary offer | 27.35 |
| `PMAX cu remarketing` | phrase | `core outdoor living` | Competitor intent | 66.41 |
| `PMAX cu remarketing` | phrase | `loudoun deck and fence` | Fence / mixed-service intent, weak premium fit | 58.54 |
| `PMAX cu remarketing` | phrase | `deck impact` | Ambiguous / low-commercial-fit term | 28.23 |
| `Pmax - Dec4` | phrase | `tw perry leesburg` | Supplier intent | 29.87 |
| `Pmax - Dec4` | phrase | `84 lumber fredericksburg va` | Supplier intent | 0.00 |
| `loudoun decks` | phrase | `builders firstsource` | Supplier intent | 36.79 |
| `loudoun decks` | phrase | `loudoun construction` | Mixed / broader construction-brand intent | 32.82 |
| `SRCH \| Replacement + Resurfacing \| 3 Counties \| Calls` | phrase | `sunburst decks` | Competitor intent | 40.20 |

## Holdout Terms: Do Not Negate In Phase 1

These terms should be routed, isolated, or monitored instead.

| Campaign | Term | Why it stays active for now |
| --- | --- | --- |
| `Premium Composite Decks` | `fairfax deck builders` | Strong local builder intent. |
| `Premium Composite Decks` | `deck replacement near me` | Core replacement intent. |
| `Premium Composite Decks` | `trex decking` | Core product intent. |
| `Premium Composite Decks` | `trex deck builder` | Valuable commercial intent. |
| `Premium Composite Decks` | `trex installers near me` | Valuable commercial intent. |
| `Premium Composite Decks` | `timbertech decking` | Valuable commercial intent. |
| `SRCH \| Replacement + Resurfacing \| 3 Counties \| Calls` | `deck builders near me` | Valuable builder intent; poor fit for negative. |
| `Fairfax-Search-Search - Deck Leads - VA - May 2025` | `deck builder fairfax va` | Strong local intent; needs landing-page alignment instead. |
| `Deck Repair - Loudoun County` | `deck repair near me` | Core campaign intent, even if lead quality needs filtering. |

## Campaign-Level Notes

- `Premium Composite Decks` is still the first place to act because it carries the heaviest zero-conversion waste.
- `PMAX cu remarketing` should be treated carefully because search-term visibility is partial by design.
- `Deck Repair - Loudoun County` has noise, but a large share of its terms still sit too close to core offer intent to negate aggressively in Phase 1.

## Operator Checklist

- Copy the phrase negatives into a review sheet before any upload.
- Confirm no approved shared negative list already covers these terms.
- Tag every added term with the date `2026-05-17` in implementation notes.
- Re-check branded query share after the first cleanup window.

## Approval

Human approval required before any upload or manual account edit.
