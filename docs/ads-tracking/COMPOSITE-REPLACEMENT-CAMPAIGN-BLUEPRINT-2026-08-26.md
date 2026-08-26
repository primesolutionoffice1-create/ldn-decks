# Composite Replacement Campaign Blueprint - 2026-08-26

## Objective

Increase high-quality Google Search leads for homeowners who want to replace an aging wood deck with composite decking, while reducing wasted spend from broad composite research, retail material shoppers, DIY traffic, and low-budget repair intent.

Primary landing page:

`https://ldndecks.com/replace-wood-deck-with-composite-northern-virginia`

## Current constraint

Do not scale blindly until the form conversion action is verified again in Google Ads. As of the latest account check, Google Ads showed:

- `Phone call leads`: active and receiving conversions.
- `Submit lead form`: no recent recorded conversions.
- Enhanced conversions: active.
- Consent mode: excellent.

This means budget can be reallocated toward better intent, but Smart Bidding should not be trusted for form volume until `lead_confirmed` / form-submit measurement is confirmed with a real or controlled QA lead.

## Recommended campaign move

Create a dedicated Search campaign:

`SRCH | Wood to Composite Replacement | 3 Counties | Leads`

Recommended starting daily budget: `$45/day`

Budget source:

- Keep `Premium Geo` at `$120/day`.
- Keep `Replacement + Resurfacing` at `$75/day`.
- Keep `Composite` constrained at `$20/day` until it shows qualified conversions.
- Keep `Branded` constrained at `$5/day`.
- Use the new `$45/day` campaign only after tracking QA passes or launch it with manual CPC / Max Clicks cap and close monitoring for 48 hours.

## Campaign settings

| Setting | Recommendation |
|---|---|
| Network | Google Search only |
| Search partners | Off for launch |
| Display expansion | Off |
| Location | Presence only, not presence or interest |
| Primary geo | Loudoun County, Fairfax County, Prince William County |
| Test geo layer | Arlington, Alexandria, McLean only if budget is explicitly allocated and search terms are reviewed daily |
| Bidding launch | Maximize Clicks with CPC cap or Manual CPC if available |
| Smart Bidding gate | Do not move to Max Conversions/tCPA until thresholds below pass |
| Ad schedule | Start with business hours plus early evening; tighten after call quality data |
| Final URL | `/replace-wood-deck-with-composite-northern-virginia` |

## Ad groups

| Ad group | Intent | Landing page | Budget priority |
|---|---|---|---|
| Wood to Composite Replacement | Existing wood deck, wants composite upgrade | `/replace-wood-deck-with-composite-northern-virginia` | High |
| Composite Deck Replacement | Full replacement / rebuild | `/replace-wood-deck-with-composite-northern-virginia` | High |
| Trex Replacement | Trex-specific upgrade | `/replace-wood-deck-with-composite-northern-virginia` | Medium-high |
| TimberTech AZEK Replacement | Premium PVC/composite upgrade | `/replace-wood-deck-with-composite-northern-virginia` | Medium-high |
| Fiberon Comparison | Fiberon cross-shop, not retail material shoppers | `/replace-wood-deck-with-composite-northern-virginia` | Medium |
| Resurface vs Replace | Decision-stage homeowners with existing deck | `/deck-resurfacing-vs-replacement` or new page | Medium |

## Smart Bidding gate

Do not trust automated lead scaling until all thresholds pass:

| Gate | Required threshold |
|---|---|
| Form conversion firing | 3 controlled successful tests plus 3 real leads |
| Duplicate rate | Under 3% |
| Unattributed lead rate | Under 20% after excluding direct/organic returning users |
| Qualified conversions | 30+ primary conversions in 30 days before Max Conversions |
| Offline win data | 10+ booked/qualified outcomes before tCPA |
| Revenue data | 15+ won jobs with values before tROAS testing |
| Search term hygiene | Daily for first 7 days, then 2x weekly |

## Immediate QA before launch

1. Submit one controlled lead with owner-approved test data.
2. Confirm thank-you page loads and `event_id` is present.
3. Confirm Google Ads receives `Submit lead form`.
4. Confirm no duplicate form conversion fires on refresh/back/forward.
5. Confirm call conversion remains unchanged.
6. Confirm page loads without hydration or SSR errors.

## 7-day optimization plan

Day 1:

- Launch only exact and tight phrase match.
- Keep Search partners off.
- Review search terms after first spend.

Day 2-3:

- Add negatives from irrelevant searches.
- Pause keywords with spend and no qualified action if intent is weak.
- Watch city-level lead quality, not just clicks.

Day 4-7:

- Move budget from weak ad groups to wood-to-composite and replacement terms.
- Keep Fiberon terms only if they show homeowner/comparison intent.
- Add RSA copy variants if ad strength or CTR is weak.

## 30-day success criteria

- Cost per qualified lead trending below current account average.
- At least 30 primary conversions with clean deduplication.
- Search term waste below 15% of spend.
- Composite research traffic separated from replacement buyer traffic.
- At least 5 booked-job outcomes tied back to click IDs.

## Sources

- Google Ads enhanced conversions and offline conversion import guidance: https://support.google.com/google-ads/answer/2998031
- Google Ads AI Max for Search campaign documentation: https://developers.google.com/google-ads/api/docs/campaigns/ai-max-for-search-campaigns/getting-started
- Google lead generation best practices: https://business.google.com/us/accelerate/resources/articles/best-practices-for-generating-high-quality-leads/
