---
brain_schema: "ads-brain.v1"
title: "Google Ads Waste Containment Pack 2026-05-17"
created: "2026-05-17"
updated: "2026-05-17"
type: "decision"
status: "draft"
sources:
  - ".raw/sources/exports/google/2026-05-16-campaign-report.csv"
  - ".raw/sources/exports/google/2026-05-16-search-terms-report.csv"
  - "wiki/deliverables/Wasted Spend Ledger.md"
  - "wiki/deliverables/Negative Keyword Candidate Queue.md"
  - "wiki/deliverables/Tracking and Attribution Risk Register.md"
related:
  - "[[Approval Queue]]"
  - "[[Wasted Spend Ledger]]"
  - "[[Negative Keyword Candidate Queue]]"
  - "[[Tracking and Attribution Risk Register]]"
  - "[[Weekly Client Report]]"
---

# Google Ads Waste Containment Pack 2026-05-17

## Compiled Truth

No live account changes were applied in this session.

The latest authoritative Google Ads sources in the vault are the imported UI exports dated `2026-05-16`.

- Search terms export totals: `$3,587.35` spend, `468` clicks, `29` imported conversions, `123.70` blended CPA.
- Zero-conversion spend by campaign from the search terms export:
  - `Premium Composite Decks` — `$1,072.17`
  - `PMAX cu remarketing` — `$507.21`
  - `Deck Repair - Loudoun County` — `$478.39`
  - `loudoun decks` — `$331.01`
  - `Fairfax-Search-Search - Deck Leads - VA - May 2025` — `$206.44`
  - `Pmax - Dec4` — `$131.98`
  - `SRCH | Replacement + Resurfacing | 3 Counties | Calls` — `$93.95`
  - `SRCH | Branded | 3 Counties | Calls` — `$55.15`
- Highest-signal query winners still worth protecting or isolating:
  - `timbertech decking` — `1` conversion at `$13.44`
  - `deck builder near me` — `1` conversion at `$24.10`
  - `deck building contractors` — `1` conversion at `$10.89`
  - `premier deck builders` — `1` conversion at `$6.48`

## Objective

Stop obvious waste without choking off premium composite, builder, Trex, TimberTech, and replacement intent.

## Approval-Gated Changes

| Priority | Exact recommended change | Reason | Expected impact | Risk | Rollback | Approval required |
| --- | --- | --- | --- | --- | --- | --- |
| 10 | Add **high-confidence phrase negatives** for supplier / competitor / irrelevant-retailer terms: `tart lumber`, `builders firstsource`, `decksdirect`, `tw perry`, `84 lumber`, `sunburst decks`, `core outdoor living`, `nova stone ashburn`. Start in `Premium Composite Decks`, `PMAX cu remarketing`, `Pmax - Dec4`, and `loudoun decks` where the spend occurred. | These terms burned real spend while pulling buyers toward supply houses, competitors, or non-project intent. | Fastest waste reduction with low odds of blocking premium project leads. | Low to medium. Some brand-comparison traffic may disappear. | Remove the new negatives if qualified query volume drops unexpectedly. | YES |
| 10 | Add **high-confidence phrase negatives** for generic junk-intent or off-offer terms: `contractors in my area`, `manassas home improvement`, `deck inspection`, `patio repair near me`, `restoration contractors near me`, `see dirt run`. Review by campaign before applying to deck-repair campaigns. | These terms are broad, low-intent, or outside the premium deck-build focus. | Lower junk clicks and better sales-team fit. | Medium. A few vague but valid homeowners may be filtered out. | Remove individual negatives if call quality drops or if a term later produces qualified leads. | YES |
| 9 | Keep **high-intent builder/composite terms out of the negative list** and isolate them instead: `deck builder near me`, `deck builders near me`, `deck building contractors`, `deck replacement near me`, `fairfax deck builders`, `deck builder fairfax va`, `trex decking`, `timbertech decking`, `trex installers near me`. | These terms are commercially valuable even when current conversion evidence is incomplete or mixed. | Preserves upside while reducing the chance of blocking money queries. | Low. | No rollback needed; this is a protection rule for review. | YES |
| 9 | Build a **Phase 1 isolation set** for `timbertech decking`, `deck builder near me`, and `deck building contractors` using exact and phrase match only, with landing-page review before reallocation. | These are the clearest signals of premium homeowner or composite-material intent in the current export. | Cleaner CPL measurement and better message-to-query alignment. | Medium because the tracking gate is still open. | Move the terms back to the current structure if isolated groups underperform. | YES |
| 8 | Do not expand budgets or broaden match coverage until `[[Day 0 Tracking and Privacy Gate]]` closes and Google conversion action evidence is documented. | Waste cleanup without measurement trust is safer than scaling into blind spots. | Prevents false-positive optimization and wasted budget increases. | Low. | Resume testing once tracking proof is complete. | YES |

## High-Confidence Negative Candidates

Review these first. They are the best fit for immediate approval.

| Term | Campaign | Cost | Clicks | Recommendation |
| --- | --- | ---: | ---: | --- |
| `core outdoor living` | `PMAX cu remarketing` | 66.41 | 3 | Phrase negative |
| `tart lumber` | `Premium Composite Decks` | 40.47 | 3 | Phrase negative |
| `sunburst decks` | `SRCH \| Replacement + Resurfacing \| 3 Counties \| Calls` | 40.20 | 1 | Phrase negative |
| `builders firstsource cerca de mi` | `loudoun decks` | 36.79 | 1 | Phrase negative |
| `nova stone ashburn` | `Premium Composite Decks` | 35.63 | 1 | Phrase negative |
| `decksdirect` | `Premium Composite Decks` | 26.24 | 2 | Phrase negative |
| `tw perry leesburg` | `Pmax - Dec4` | 29.87 | 1 | Phrase negative |

## Review Carefully Before Negating

These look weak in the current export, but the commercial downside of blocking them is higher. Route or isolate before negating.

| Term | Campaign | Cost | Why it stays out of Phase 1 negatives |
| --- | --- | ---: | --- |
| `fairfax deck builders` | `Premium Composite Decks` | 67.94 | Strong local builder intent; current mismatch may be landing-page or ad-group routing. |
| `deck replacement near me` | `Premium Composite Decks` | 34.03 | Core replacement intent, even with no imported conversions yet. |
| `deck builders near me` | `SRCH \| Replacement + Resurfacing \| 3 Counties \| Calls` | 43.49 | Valuable builder intent; should be isolated, not blocked. |
| `deck builder fairfax va` | `Fairfax-Search-Search - Deck Leads - VA - May 2025` | 25.41 | Valuable local builder intent. |
| `trex decking` | `Premium Composite Decks` | 23.49 | Core material term. |
| `timbertech decking` | `SRCH \| Composite \| 3 Counties \| Calls` | 13.44 | Current export already shows a conversion. |

## Operator Notes

- The small file `LDN PRO campaigns - preview_RESULTS.csv` is older than the imported `2026-05-16` Ads Brain exports and should not override this pack.
- If any account-state change happened after `2026-05-16`, preserve the lower-risk current state until a fresh export confirms the new baseline.
- This pack is intentionally conservative: it prioritizes obvious junk first and avoids killing premium deck-builder intent.

## Related

- [[wiki/decisions/_index|Decisions Hub]]
- [[Approval Queue]]
- [[Wasted Spend Ledger]]
- [[Negative Keyword Candidate Queue]]

---

## Timeline

- 2026-05-17 - Created approval-gated Phase 1 Google Ads waste containment pack from the 2026-05-16 imported search-term and campaign exports.
