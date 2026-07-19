# Google Ads Safe Cleanup Import - 2026-07-17

Scope: exact negative keyword cleanup only.

## Implementation Status

Implemented live in Google Ads Editor on 2026-07-19 18:47 EDT.

- Imported via Account -> Import -> Paste text.
- Preview showed `Negative keyword`: 3 added, 1 skipped.
- Final check showed `Negative keywords 3/3`.
- Final post confirmation showed `Finished posting`: `Negative keywords 3/3`.
- No campaign settings, budgets, bidding, ads, assets, conversion actions,
  broad match, Smart Bidding, PMax, AI Max, Search Partners, or Display changes
  were made.

## Import File

`docs/ads-tracking/google-ads-search-terms-negatives-2026-07-17.csv`

## Add Now

| Campaign | Exact negative | Reason |
|---|---|---|
| SRCH \| Composite \| 3 Counties \| Calls | `trex decking boards` | Product/board shopping intent, not contractor lead intent |
| SRCH \| Composite \| 3 Counties \| Calls | `plastic boards for decks` | Product material shopping intent |
| SRCH \| Composite \| 3 Counties \| Calls | `trex boards` | Product shopping intent |
| SRCH \| Composite \| 3 Counties \| Calls | `deck material trex` | Product material research intent |

## Do Not Add Yet

| Term | Reason |
|---|---|
| `replacing deck boards and railing` | Could be resurfacing/replacement job intent |
| `can you replace wood deck boards with trex` | Could become wood-to-composite replacement lead |
| `trex decking contractors near me` | Contractor intent; keep |
| `trex deck quote` | Quote intent; keep |

## Guardrails

- Exact negatives only.
- No broad negatives.
- No budget, bidding, Smart Bidding, PMax, AI Max, Search Partners, Display, asset, ad, or conversion action changes.
- Post only if Google Ads Editor preview shows negative keyword changes only.
