---
brain_schema: ads-brain.v1
created: "2026-05-16"
type: source
title: "Google Ads Live Ad Group Verification 2026-05-16"
platform: google-ads
account: "943-907-4542 Loudoun Decks Builder-2"
source_kind: live-ui-export
status: verified-read-only
updated: "2026-05-16"
---

# Google Ads Live Ad Group Verification 2026-05-16

Read-only Google Ads UI verification for account `943-907-4542 Loudoun Decks Builder-2` using the visible Google Ads UI plus downloaded reports. No bids, budgets, settings, negatives, ads, keywords, campaigns, or recommendations were changed.

Date ranges observed:

- Campaigns/ad groups/ads/keywords UI: Last 30 days, Apr 16-May 15, 2026, Eastern time.
- Conversion actions UI: Last 30 days, Apr 15-May 14, 2026, Eastern time.

Raw evidence copied to:

- `.raw/google-ads/2026-05/live-ui-2026-05-16/ad-group-report-2026-05-16.csv`
- `.raw/google-ads/2026-05/live-ui-2026-05-16/ad-report-2026-05-16.csv`
- `.raw/google-ads/2026-05/live-ui-2026-05-16/search-keyword-report-2026-05-16.csv`

## Verdict

The three live Search campaigns have all live ad groups enabled and eligible. Each live ad group has enabled eligible responsive search ads. No disapproved ads, policy-limited ads, paused live ad groups, or Broad Match keywords were found in the live Search structure reviewed.

The account is structurally able to continue CSV ingestion and monitoring, but it is not cleared for scaling, Broad Match, PMax, tCPA/tROAS, or budget expansion. Day 0 GTM/Enhanced Conversions/offline-loop evidence remains the hard gate for Smart Bidding quality.

## Live Ad Group Status

| Campaign | Ad group | Status | Impr. | Clicks | Conv. | Cost |
|---|---|---|---:|---:|---:|---:|
| `SRCH \| Composite \| 3 Counties \| Calls` | Composite Deck Cost | Enabled / Eligible | 201 | 12 | 1.00 | 65.10 |
| `SRCH \| Composite \| 3 Counties \| Calls` | TimberTech/AZEK | Enabled / Eligible | 1 | 0 | 0.00 | 0.00 |
| `SRCH \| Composite \| 3 Counties \| Calls` | Trex | Enabled / Eligible | 28 | 3 | 0.00 | 40.05 |
| `SRCH \| Composite \| 3 Counties \| Calls` | Composite Deck Builder | Enabled / Eligible | 21 | 0 | 0.00 | 0.00 |
| `SRCH \| Replacement + Resurfacing \| 3 Counties \| Calls` | Replace Wood With Composite | Enabled / Eligible | 1 | 0 | 0.00 | 0.00 |
| `SRCH \| Replacement + Resurfacing \| 3 Counties \| Calls` | Deck Resurfacing | Enabled / Eligible | 13 | 1 | 0.00 | 10.26 |
| `SRCH \| Replacement + Resurfacing \| 3 Counties \| Calls` | Deck Replacement | Enabled / Eligible | 40 | 3 | 0.00 | 94.59 |
| `SRCH \| Branded \| 3 Counties \| Calls` | Brand Exact | Enabled / Eligible | 8 | 5 | 0.00 | 55.15 |
| `SRCH \| Branded \| 3 Counties \| Calls` | Brand Phrase | Enabled / Eligible | 0 | 0 | 0.00 | 0.00 |

## Live Ads Status

All 18 live ads are enabled, eligible, and responsive search ads. Each of the 9 live ad groups has 2 enabled eligible RSAs.

Ad strength flags:

- Good: 2 RSAs (`Composite Deck Cost`, `Brand Phrase`).
- Average: 13 RSAs.
- Poor: 3 RSAs (`Trex`, `Deck Replacement`, `Replace Wood With Composite`).

Operational note: Google Ads UI showed a recommendation to add responsive search ads for ad groups with fewer than three RSAs. This was not applied. Treat as a creative-depth improvement, not an emergency blocker.

## Live Keywords Status

Live keyword export contained 105 keywords across the three active Search campaigns:

- Match types: 68 Phrase, 37 Exact.
- Broad Match: 0 found.
- Paused live keywords: 0 found.
- Non-eligible live keywords: 24, all with status reason `rarely served`.

The `rarely served` keywords are mostly long-tail county/brand variants and do not indicate a policy or tracking failure. They are useful to keep under observation until search-term data accumulates.

## Conversion Actions Observed

Visible conversion-action inventory included:

- `Qualified Call (Ads) - 60s`: Call from Ads, Active, Primary, Count One, 30-day window, included in account-level goals, 22.00 all conversions.
- `Submit lead form`: Website, Needs attention, Primary, Count One, 30-day window, included in account-level goals, 0.00 all conversions.
- `Lead form - Submit`: Google hosted, No recent conversions, Primary, Count One, 1-day window, included in account-level goals, 1.00 all conversions.
- `Calls from Smart Campaign Ads`: Call from Ads, No recent conversions, Primary, included, disabled/locked row in UI.
- Several GA4/website/call actions are Secondary and not included in account-level goals.

Risk: the account still has more than one Primary/included conversion source visible. The most defensible primary signal remains `Qualified Call (Ads) - 60s`, but website lead actions still need GTM/Enhanced Conversions/offline validation before Smart Bidding can be considered clean.

## Issues / Watch Items

- All 3 active Search campaigns were visible as `Bid strategy learning` in the campaigns UI. Do not scale while learning and while Day 0 tracking remains incomplete.
- 24 enabled live keywords are `Not eligible` because they are `rarely served`; this is low-volume coverage, not a hard setup error.
- 3 live RSAs have `Poor` ad strength. Improve creative later only after CSV ingestion/search-term review; no live edits were made.
- `Submit lead form` and `Call From Website - (5716557207)` show `Needs attention`; this keeps Day 0 validation open.
- Smart Bidding quality remains blocked by missing GTM transaction_id proof, Enhanced Conversions screenshot proof, and offline conversion loop proof.

## Safe Next Action

CSV ingestion is safe for Ads Brain analysis using the read-only exports. Smart Bidding escalation, Broad Match, PMax, budget scaling, and bid strategy changes remain paused until Day 0 B-01 through B-06 evidence is closed.
