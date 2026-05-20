---
brain_schema: ads-brain.v1
type: routine-audit
platform: google
title: "Google Ads Routine Audit 2026-05-19"
created: "2026-05-19"
status: recommendation
live_changes_applied: false
source_skill:
  - "/Users/ldndecks/.codex/skills/ads-google/SKILL.md"
  - "/Users/ldndecks/.codex/skills/ads/references/google-audit.md"
  - "/Users/ldndecks/.codex/skills/ads/references/gaql-notes.md"
source_files:
  - "/Users/ldndecks/Downloads/Campaign report.csv"
  - "/Users/ldndecks/Downloads/Ad group report.csv"
  - "/Users/ldndecks/Downloads/Ad report.csv"
  - "/Users/ldndecks/Downloads/Search terms report.csv"
  - "/Users/ldndecks/Downloads/Search keyword report (4).csv"
---

# Google Ads Routine Audit 2026-05-19

## Context:

Routine local audit using the newly installed `ads-google` skill and the latest available Google Ads exports.

Export date range: **April 16, 2026 - May 15, 2026**.

No live Google Ads changes were applied.

Full 80-check Google Ads Health Score was **not calculated** because exports do not include all required settings evidence: conversion-action inventory, Enhanced Conversions status, Consent Mode status, location targeting method, ad assets/extensions, audience lists, PMax asset details, and account-level negative lists. This report is an operational routine audit from available exports.

## Findings:

- Active campaigns:
  - `SRCH | Composite | 3 Counties | Calls` - `$90/day`, `Maximize Conversions`, `Eligible (Learning)`
  - `SRCH | Replacement + Resurfacing | 3 Counties | Calls` - `$45/day`, `Maximize Conversions`, `Eligible (Learning)`
  - `SRCH | Branded | 3 Counties | Calls` - `$15/day`, `Maximize Conversions`, `Eligible (Learning)`
- Active campaign totals in the export:
  - Cost: `$265.15`
  - Clicks: `24`
  - Conversions: `1`
  - Avg CPC: `$11.05`
  - CPA: `$265.15`
- Search-term hygiene:
  - Active Search Terms reviewed: `106`
  - Active search terms with `>$10` cost and `0` conversions: `5`
  - Active visible waste candidates total: `$161.41`
- Do **not** treat all 5 as negatives:
  - `ldn decks` is branded intent; do not block.
  - `deck builders near me`, `trex decking`, and `deck resurfacing` are core commercial intent; do not block from this small sample.
  - `sunburst decks` is the only high-confidence negative candidate from active campaigns.
- Keyword quality:
  - Active keyword rows: `105`
  - Only `7` active keywords have visible QS data.
  - Average visible QS: `5.29`
  - QS `<=4`: `4` of `7`
  - This suggests landing-page/ad relevance work is needed, but sample is too small for aggressive pausing.
- Ads:
  - Active ads: `18`
  - `Good`: `2`
  - `Average`: `13`
  - `Poor`: `3`
  - The biggest immediate ad-quality issue is `SRCH | Replacement + Resurfacing | 3 Counties | Calls / Deck Replacement`, which spent `$94.59` with `Poor` ad strength and `0` conversions.
- Campaign status:
  - All active Search campaigns are still in learning. Avoid big budget and bidding changes.

## Recommendations:

### 1. Do today

Keep current active budgets and bidding unchanged while campaigns are learning:

- Composite: keep `$90/day`
- Replacement + Resurfacing: keep `$45/day`
- Branded: keep `$15/day`
- Keep `Maximize Conversions`
- Do not enable AI Max, Broad Match expansion, PMax, or Demand Gen today.

Priority score: 9/10 | Revenue: 8 | Urgency: 9 | Difficulty: 1 | Speed: 9 | Confidence: 9

### 2. Do this week

Rewrite or improve the `Poor` RSAs before scaling:

- `SRCH | Replacement + Resurfacing | 3 Counties | Calls` / `Deck Replacement`
- `SRCH | Composite | 3 Counties | Calls` / `Trex`
- `SRCH | Replacement + Resurfacing | 3 Counties | Calls` / `Replace Wood With Composite`

Use at least 12-15 unique headlines where possible, keep 3-4 descriptions, and align headline language to the ad group theme. Avoid putting phone numbers directly in ad text; use call assets.

Priority score: 8/10 | Revenue: 8 | Urgency: 8 | Difficulty: 4 | Speed: 7 | Confidence: 8

### 3. Needs approval

Recommended change:
Add `sunburst decks` as a **phrase-match negative** in `SRCH | Replacement + Resurfacing | 3 Counties | Calls`, unless competitor conquesting is intentional.

Reason:
Active search term `sunburst decks` spent `$40.20` from 1 click and 0 conversions. It is competitor intent, not LDN Decks branded or generic deck-builder intent.

Expected impact:
Small direct savings, but cleaner Smart Bidding signal during the learning window.

Risk level:
Low. The term is specific and reversible.

Rollback plan:
Remove `"sunburst decks"` from the negative keyword list if competitor leads are intentionally desired.

Approval required: YES

### 4. Do not do

- Do not pause `deck builders near me` from one click.
- Do not block `trex decking` from two clicks.
- Do not block `deck resurfacing` from one click.
- Do not block `ldn decks`; it is brand intent.
- Do not reduce budget based on only `$265.15` active spend.
- Do not turn on AI Max or Broad Match until negative coverage and conversion quality are stronger.
- Do not change conversion tracking, GTM, GA4, or call conversion actions without a separate approval gate.

Priority score: 10/10 | Revenue: 9 | Urgency: 10 | Difficulty: 1 | Speed: 10 | Confidence: 10

### 5. Single highest ROI action

Fix the `Poor` ad strength in the active `Deck Replacement` ad group, then re-check Search Terms and conversions after 7-14 days.

Priority score: 9/10 | Revenue: 9 | Urgency: 8 | Difficulty: 4 | Speed: 7 | Confidence: 8

## Priority scores:

| Recommendation | Priority score | Revenue | Urgency | Difficulty | Speed | Confidence |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Hold current budgets/bidding during learning | 9/10 | 8 | 9 | 1 | 9 | 9 |
| Improve Poor RSAs | 8/10 | 8 | 8 | 4 | 7 | 8 |
| Add `sunburst decks` negative after approval | 8/10 | 6 | 8 | 2 | 9 | 8 |
| Do not overreact to low sample terms | 10/10 | 9 | 10 | 1 | 10 | 10 |
| Re-export Search Terms in 7-14 days | 8/10 | 7 | 8 | 2 | 8 | 9 |

## Risks:

- Active campaign sample is still small: `24` clicks and `1` conversion.
- Export data does not prove conversion tracking health; conversion action settings must be exported or verified separately.
- QS data is sparse, so QS findings are directional.
- A competitor negative can block competitor-conquest traffic if that strategy is intentional.
- Most historical waste in the 30-day export came from paused campaigns; do not assume all historical waste is still active.

## Approval gates:

- Negative keyword upload: approval required.
- RSA/ad copy live edits: approval required.
- Budget changes: approval required.
- Bid strategy changes: approval required.
- PMax, Demand Gen, AI Max, or Broad Match activation: approval required.
- Conversion tracking, GTM, GA4, call conversion, or offline conversion changes: approval required.

