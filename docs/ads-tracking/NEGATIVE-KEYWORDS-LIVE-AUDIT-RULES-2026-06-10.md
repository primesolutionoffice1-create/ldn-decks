# Negative Keywords Live Audit Rules - 2026-06-10

Goal: protect premium homeowner search demand while still blocking low-quality traffic.

Do not delete live negative keywords without exporting the full live negative list first.

## Safe Account-Level Negatives

Keep as account-level negatives when they appear as Phrase or Exact:

- jobs
- hiring
- career
- salary
- diy
- do it yourself
- free
- cheap
- used
- wholesale
- classes
- training
- home depot
- lowes
- materials only
- lumber only
- deck plans
- deck design software
- deck calculator
- permit only

## Risky Broad Negatives To Review

These should not remain broad at account level because they can block high-ticket demand:

- deck
- decking
- composite
- trex
- timbertech
- azek
- porch
- patio
- pergola
- outdoor living
- repair
- replacement
- resurfacing
- cost
- estimate
- contractor
- builder
- company

## Recommended Transformations

| Current broad/risky intent | Safer replacement |
| --- | --- |
| `materials` | phrase `materials only` |
| `lumber` | phrase `lumber only` |
| `plans` | phrase `deck plans`, phrase `building plans` |
| `calculator` | phrase `deck calculator`, phrase `deck cost calculator` |
| `repair` | campaign-level phrase only where repair is not sold |
| `patio` | campaign-level phrase only until patio campaign exists |
| `porch` | campaign-level phrase only until porch campaign exists |

## Campaign-Level Logic

Composite campaign:

- Block material-only searches.
- Block refinishing/staining/washing.
- Keep builder, contractor, installer, replacement, and premium composite intent open.

Deck Builders campaign:

- Block repair-only and handyman traffic.
- Block patio/porch/fence until separate campaigns are active.
- Keep custom deck, composite deck, contractor, builder, installer open.

Replacement + Resurfacing campaign:

- Block staining, refinishing, sealing, pressure washing, small/minor repair.
- Keep deck replacement, resurface deck, wood-to-composite, rebuild, and structural replacement open.

## Review Gate

Before live changes:

1. Export all account, shared-list, campaign, and ad-group negatives from Google Ads / Google Ads Editor.
2. Classify each row as `keep`, `convert`, `remove`, or `move_to_campaign`.
3. Apply only Phrase/Exact negatives.
4. Post changes in Google Ads Editor only after pre-post summary confirms negative keyword changes only.
5. Do not post budget, bid, ad, asset, positive keyword, conversion, or campaign status changes in the same operation.
