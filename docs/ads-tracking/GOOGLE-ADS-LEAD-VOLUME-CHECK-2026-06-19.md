# Google Ads Lead Volume Check - 2026-06-19

Mode: live read-only audit plus one controlled eligibility fix.
Account: `943-907-4542 Loudoun Decks Builder-2`
Date checked: 2026-06-19

## Current Situation

The account is spending, but lead volume is weak and the form conversion signal
is still not healthy enough for scaling.

Last 30 days shown in Google Ads: 2026-05-20 to 2026-06-18.

| Metric | Value |
| --- | ---: |
| Cost | `$5,097.56` |
| Clicks | `406` |
| Impressions | `5,375` |
| Avg. CPC | `$12.56` |
| Conversions | `4.00` |
| Cost / conv. | `$1,274.39` |
| Conv. rate | `0.99%` |

Last 7 days shown in Google Ads: 2026-06-12 to 2026-06-18.

| Metric | Value |
| --- | ---: |
| Cost | `$1,553.43` |
| Clicks | `95` |
| Conversions | `2.00` |
| Cost / conv. | `$776.72` |
| Conv. rate | `2.11%` |

## Campaign Readout

Last 30 days by active campaign:

| Campaign | Cost | Clicks | Conversions | CPA | Notes |
| --- | ---: | ---: | ---: | ---: | --- |
| `SRCH | Composite | 3 Counties | Calls` | `$2,622.52` | `249` | `2.00` | `$1,311.26` | Highest spend; conversion rate `0.80%`. |
| `SRCH | Replacement + Resurfacing | 3 Counties | Calls` | `$1,573.56` | `84` | `1.00` | `$1,573.56` | Eligible limited; missing enough relevant keywords. |
| `SRCH | Premium Geo | Arlington Alexandria McLean | Leads` | `$480.08` | `13` | `1.00` | `$480.08` | Best current CPA, but low volume. |
| `SRCH | Branded | 3 Counties | Calls` | `$421.40` | `60` | `0.00` | `$0.00` | Brand traffic has 0 reported conversions. |

Last 7 days by highest-spend ad groups:

| Ad group | Campaign | Cost | Clicks | Conversions |
| --- | --- | ---: | ---: | ---: |
| `Near Me | Premium Geo` | `SRCH | Premium Geo | Arlington Alexandria McLean | Leads` | `$404.41` | `9` | `1.00` |
| `Deck Replacement` | `SRCH | Replacement + Resurfacing | 3 Counties | Calls` | `$366.61` | `18` | `0.00` |
| `Composite Deck Cost` | `SRCH | Composite | 3 Counties | Calls` | `$297.45` | `38` | `0.00` |
| `Trex` | `SRCH | Composite | 3 Counties | Calls` | `$264.75` | `7` | `1.00` |
| `Brand Exact` | `SRCH | Branded | 3 Counties | Calls` | `$76.99` | `14` | `0.00` |

## Conversion Status

Google Ads conversion actions currently show:

| Conversion action | Source | Tracking status | Optimization | Last 30 all conv. |
| --- | --- | --- | --- | ---: |
| `Submit lead form` | Website | `Needs attention` | Primary | `0.00` |
| `Lead form - Submit` | Google hosted | `No recent conversions` | Primary | `0.00` |
| `Qualified Call (Ads) - 60s` | Call from Ads | `Active` | Primary | `4.00` |
| `Call From Website - (5716557207)` | Website | `Needs attention` | Secondary | `0.00` |
| `LDN Decks - Website Tracking (web) generate_lead` | GA4 | `No recent conversions` | Secondary | `0.00` |

Interpretation: current reported conversions are coming from call activity, not
confirmed website form leads. This matches the local live lead tracker still
having zero real rows after the controlled test.

## Live Fix Applied

Applied only the Google Ads recommendation:

`Remove conflicting negative keywords`

Scope:

- Campaign: `SRCH | Premium Geo | Arlington Alexandria McLean | Leads`
- Removed conflicts blocking 11 high-intent keywords/searches, including:
  - `deck replacement alexandria va`
  - `deck replacement near me`
  - `composite deck builder arlington`
  - `composite deck builder alexandria`
  - `composite deck builder near me`
  - `composite deck builder mclean`
  - `trex deck builder arlington`
  - `trex deck builder alexandria`
  - `composite deck builder vienna`
  - `composite deck builder oakton`

Result:

- Recommendation disappeared after confirmation.
- Optimization score moved from `94.1%` to `97.2%`.
- No budget, bid strategy, campaign status, PMax, AI Max, ad copy, keyword
  expansion, conversion action, GTM, or GA4 change was made.

## What This Fix Does And Does Not Do

This fix can improve eligible impression volume in the Premium Geo campaign
because high-intent keywords are no longer blocked by negatives.

It does not solve the core measurement issue: `Submit lead form` still shows
`Needs attention` and `0.00` all conversions.

## Current Diagnosis

The account is not starved for spend. It is starved for trusted lead signals.

The biggest blockers are:

1. Website form lead conversion is still not recording valid Google Ads hits.
2. Brand clicks are not producing reported conversions.
3. Composite Cost and Deck Replacement are spending heavily with zero last-7-day
   conversions.
4. Maximize Conversions is running on very thin primary conversion data.
5. The lead outcome tracker still has no real qualified/unqualified rows.

## Next Safe Actions

1. Recheck Google Ads diagnostics for `Submit lead form` after the next real
   homeowner form lead.
2. Fill `docs/ads-tracking/live-lead-outcomes-2026-06-10.csv` for every new
   paid call/form lead within 24 hours.
3. Pull a fresh Search Terms export for 2026-06-10 to 2026-06-19 before adding
   new negatives.
4. Review last-7-day spend for `Composite Deck Cost`, `Deck Replacement`, and
   `Brand Exact` if no real leads appear in CRM.
5. Keep Smart Bidding expansion, tCPA, tROAS, PMax, AI Max, broad match
   expansion, and budget increases paused until form conversion diagnostics and
   lead-quality rows are clean.

## Do Not Do Yet

- Do not apply `Add new keywords`.
- Do not apply `Add images` without owner-approved real project assets.
- Do not increase budgets.
- Do not change bid strategy targets.
- Do not activate PMax or AI Max expansion.
- Do not treat the current 4 conversions as enough data for scaling.
