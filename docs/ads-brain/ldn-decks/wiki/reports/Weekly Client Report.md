---
brain_schema: "ads-brain.v1"
title: "Weekly Client Report"
created: "2026-05-15"
updated: "2026-05-15"
type: "report"
status: "draft"
sources:
  - ".raw/sources/exports/google/2026-05-15-01-campaigns-2.csv"
  - ".raw/sources/exports/google/2026-05-15-01-campaigns.csv"
  - ".raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv"
  - ".raw/sources/exports/google/2026-05-15-02-ad-groups.csv"
  - ".raw/sources/exports/google/2026-05-15-03-keywords-2.csv"
  - ".raw/sources/exports/google/2026-05-15-03-keywords.csv"
  - ".raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv"
  - ".raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv"
  - ".raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv"
  - ".raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv"
  - ".raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv"
  - ".raw/sources/exports/google/2026-05-15-06-sitelinks.csv"
  - ".raw/sources/exports/google/2026-05-15-07-callouts-2.csv"
  - ".raw/sources/exports/google/2026-05-15-07-callouts.csv"
  - ".raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv"
  - ".raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv"
  - ".raw/sources/exports/google/2026-05-15-09-call-asset-2.csv"
  - ".raw/sources/exports/google/2026-05-15-09-call-asset.csv"
  - ".raw/sources/exports/google/2026-05-15-10-location-targets-2.csv"
  - ".raw/sources/exports/google/2026-05-15-10-location-targets.csv"
  - ".raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv"
  - ".raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv"
  - ".raw/sources/research/2026-05-09-ads-brain-production-research.md"
  - "wiki/sources/Market Context 2026-05-15.md"
---

# Weekly Client Report

## Compiled Truth

## Header

- Client: LDN Decks
- Platforms covered: Google Ads
- Source summaries: 22
- Day 0 tracking/privacy gate: **real_lead_validation_pending**
- Ads Health Score: **57 (D)**
- Attribution caveat: reported ROAS is **reported, not incremental** unless a holdout or incrementality source is linked.
- Modeled vs. observed conversion split: unknown unless explicitly supplied by source exports.

## 1. Tracking Health

LDN Decks has an Ads Health Score of **57 (D)** based on 22 imported source summaries.

GTM Version 25 is live per the local final sign-off: Google Ads Form Lead, GA4
`generate_lead`, and User Provided Data fired once on `lead_confirmed` in
Preview, with `event_id` used as the Google Ads transaction ID. The remaining
blocker is real production validation, not code wiring.

Google Ads conversion goals were cleaned up after GTM publish: `Submit lead
form` is now account-default across 10/10 campaigns, `Phone call lead` remains
account-default across 9/10, and `Leads from messages` was removed from the
account-default optimization path. No budgets, bidding strategies, keywords,
ads, or campaign budgets were changed in that pass.

![[tracking-trust-by-platform.svg]]

| Platform | Tracking Trust | Status | Blocking Checks | Warnings | Checks |
| --- | --- | --- | --- | --- | --- |
| cross-platform | 0% | blocked | 1 | 0 | 1 |
| google | 51% | needs_review | 0 | 86 | 88 |

## 2. Performance Snapshot

![[platform-spend-by-source.svg]]

| Platform | Rows | Cost | Clicks | Conversions | Revenue | ROAS | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Google Ads | 5 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| Google Ads | 4 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| Google Ads | 11 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| Google Ads | 9 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| Google Ads | 135 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| Google Ads | 105 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| Google Ads | 22 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| Google Ads | 18 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| Google Ads | 38 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| Google Ads | 38 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| Google Ads | 16 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| Google Ads | 12 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| Google Ads | 32 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| Google Ads | 24 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| Google Ads | 1 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| Google Ads | 1 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| Google Ads | 5 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| Google Ads | 4 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| Google Ads | 15 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| Google Ads | 12 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| Google Ads | 55 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| Google Ads | 33 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |

## 3. Recommendations and Risks

Recommendations are proposals only. Every action requires human approval in
[[Approval Queue]], and performance actions remain blocked where tracking trust
is not `trusted`.

## 3A. SpyFu Import Expansion

- SpyFu showed the largest useful PPC cluster around deck builders/contractors/installation near-me searches.
- The Google Ads import pack now includes `SRCH | Deck Builders | 3 Counties | Calls` at $45/day, mapped to `/deck-builders-loudoun/`.
- The new campaign has 2 ad groups, 30 exact/phrase keywords, 4 RSAs, call/location assets, sitelinks, callouts, and campaign-level negatives for repair, patio, porch, fence, hardscaping, and broad construction intent.
- This is ready for operator review as a paused import, not ready for live optimization until real-lead validation and Google Ads diagnostics are complete.

- X-PI1 (critical, fail): Tracking/privacy gate must be closed before optimization actions are trusted. Evidence: Day 0 gate status: real_lead_validation_pending
- X-CLK1 (high, fail): Imported clicks are zero or missing. Evidence: Clicks 0.0.
- X-ST1 (medium, warning): No search-term hygiene candidates detected or no search-term export imported. Evidence: Negative keyword candidate queues are empty.
- G-TRK1 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-PMAX1 (high, warning): PMax rows include asset group and asset strength evidence. Evidence: PMax rows: 1; asset group: missing; asset strength: missing
- G-ST1 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-2 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-2 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-2 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-PMAX1-2 (high, warning): PMax rows include asset group and asset strength evidence. Evidence: PMax rows: 1; asset group: missing; asset strength: missing
- G-ST1-2 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-2 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-3 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-3 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-3 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-3 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-3 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-4 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-4 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-4 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-4 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-4 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-5 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-5 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-5 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-5 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-5 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-6 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-6 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-6 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-6 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-6 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-7 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-7 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-7 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-7 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-7 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-8 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-8 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-8 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-8 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-8 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-9 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-9 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-9 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-9 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-9 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-10 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-10 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-10 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-10 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-10 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-11 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-11 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-11 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-11 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-11 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-12 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-12 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-12 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-12 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-12 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-13 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-13 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-13 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-13 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-13 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-14 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-14 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-14 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-14 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-14 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-15 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-15 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-15 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-15 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-15 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-16 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-16 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-16 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-16 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-16 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-CM2-17 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-17 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-17 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-17 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-CM2-18 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-18 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-18 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-18 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-19 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-19 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-19 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-19 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-19 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-20 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-20 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-20 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-20 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-20 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-21 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-21 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-21 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-21 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-21 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-22 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-22 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-22 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-22 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-22 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing

## 4. Production Checks

| ID | Platform | Severity | Status | Check | Evidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| X-PI1 | cross-platform | critical | fail | Tracking/privacy gate must be closed before optimization actions are trusted. | Day 0 gate status: real_lead_validation_pending | wiki/flows/Day 0 Tracking and Privacy Gate.md |
| X-SRC1 | cross-platform | critical | pass | Every platform summary must cite immutable raw source path and hash. | 22 imported source summaries checked. | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv, .raw/sources/exports/google/2026-05-15-01-campaigns.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups.csv, .raw/sources/exports/google/2026-05-15-03-keywords-2.csv, .raw/sources/exports/google/2026-05-15-03-keywords.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks.csv, .raw/sources/exports/google/2026-05-15-07-callouts-2.csv, .raw/sources/exports/google/2026-05-15-07-callouts.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets |
| X-CTX1 | cross-platform | medium | pass | Landing-page, query, or SERP context should be present before strategic recommendations. | 2 enrichment/context sources found. | .raw/sources/research/2026-05-09-ads-brain-production-research.md, wiki/sources/Market Context 2026-05-15.md |
| X-CV1 | cross-platform | critical | pass | Imported conversion totals are non-zero or no spend is present. | Cost 0.0, conversions 0.0. | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv, .raw/sources/exports/google/2026-05-15-01-campaigns.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups.csv, .raw/sources/exports/google/2026-05-15-03-keywords-2.csv, .raw/sources/exports/google/2026-05-15-03-keywords.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks.csv, .raw/sources/exports/google/2026-05-15-07-callouts-2.csv, .raw/sources/exports/google/2026-05-15-07-callouts.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets |
| X-CLK1 | cross-platform | high | fail | Imported clicks are zero or missing. | Clicks 0.0. | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv, .raw/sources/exports/google/2026-05-15-01-campaigns.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups.csv, .raw/sources/exports/google/2026-05-15-03-keywords-2.csv, .raw/sources/exports/google/2026-05-15-03-keywords.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks.csv, .raw/sources/exports/google/2026-05-15-07-callouts-2.csv, .raw/sources/exports/google/2026-05-15-07-callouts.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets |
| X-ST1 | cross-platform | medium | warning | No search-term hygiene candidates detected or no search-term export imported. | Negative keyword candidate queues are empty. | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv, .raw/sources/exports/google/2026-05-15-01-campaigns.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups.csv, .raw/sources/exports/google/2026-05-15-03-keywords-2.csv, .raw/sources/exports/google/2026-05-15-03-keywords.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks.csv, .raw/sources/exports/google/2026-05-15-07-callouts-2.csv, .raw/sources/exports/google/2026-05-15-07-callouts.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets |
| G-TRK1 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-CM2 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-EC1 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-PMAX1 | google | high | warning | PMax rows include asset group and asset strength evidence. | PMax rows: 1; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-ST1 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-AIMAX1 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-TRK1-2 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-CM2-2 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-EC1-2 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-PMAX1-2 | google | high | warning | PMax rows include asset group and asset strength evidence. | PMax rows: 1; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-ST1-2 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-AIMAX1-2 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-TRK1-3 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-CM2-3 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-EC1-3 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-PMAX1-3 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-ST1-3 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-AIMAX1-3 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-TRK1-4 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-CM2-4 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-EC1-4 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-PMAX1-4 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-ST1-4 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-AIMAX1-4 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-TRK1-5 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-CM2-5 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-EC1-5 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-PMAX1-5 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-ST1-5 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-AIMAX1-5 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-TRK1-6 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-CM2-6 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-EC1-6 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-PMAX1-6 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-ST1-6 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-AIMAX1-6 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-TRK1-7 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-CM2-7 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-EC1-7 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-PMAX1-7 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-ST1-7 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-AIMAX1-7 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-TRK1-8 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-CM2-8 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-EC1-8 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-PMAX1-8 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-ST1-8 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-AIMAX1-8 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-TRK1-9 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-CM2-9 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-EC1-9 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-PMAX1-9 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-ST1-9 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-AIMAX1-9 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-TRK1-10 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-CM2-10 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-EC1-10 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-PMAX1-10 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-ST1-10 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-AIMAX1-10 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-TRK1-11 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-CM2-11 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-EC1-11 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-PMAX1-11 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-ST1-11 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-AIMAX1-11 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-TRK1-12 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-CM2-12 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-EC1-12 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-PMAX1-12 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-ST1-12 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-AIMAX1-12 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-TRK1-13 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-CM2-13 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-EC1-13 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-PMAX1-13 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-ST1-13 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-AIMAX1-13 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-TRK1-14 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-CM2-14 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-EC1-14 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-PMAX1-14 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-ST1-14 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-AIMAX1-14 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-TRK1-15 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-CM2-15 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-EC1-15 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-PMAX1-15 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: Asset group; asset strength: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-ST1-15 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-AIMAX1-15 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-TRK1-16 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-CM2-16 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-EC1-16 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-PMAX1-16 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: Asset group; asset strength: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-ST1-16 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-AIMAX1-16 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-TRK1-17 | google | critical | pass | Conversion action evidence present for Google Ads. | column: Conversion action | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-CM2-17 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-EC1-17 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-PMAX1-17 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-ST1-17 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-AIMAX1-17 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-TRK1-18 | google | critical | pass | Conversion action evidence present for Google Ads. | column: Conversion action | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-CM2-18 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-EC1-18 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-PMAX1-18 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-ST1-18 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-AIMAX1-18 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-TRK1-19 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-CM2-19 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-EC1-19 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-PMAX1-19 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-ST1-19 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-AIMAX1-19 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-TRK1-20 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-CM2-20 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-EC1-20 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-PMAX1-20 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-ST1-20 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-AIMAX1-20 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-TRK1-21 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-CM2-21 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-EC1-21 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-PMAX1-21 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-ST1-21 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-AIMAX1-21 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-TRK1-22 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |
| G-CM2-22 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |
| G-EC1-22 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |
| G-PMAX1-22 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |
| G-ST1-22 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |
| G-AIMAX1-22 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |

## 5. API and Platform Change Watch

| Platform | Current Concern | Monthly Review |
| --- | --- | --- |
| Google Ads | v24 baseline; monthly 2026 cadence | Re-check AI Max/API parity and sunset dates monthly. |
| Meta Ads | CAPI parameters verified; API version must be source-verified | Record exact Graph/Marketing API version, expiration, and release URL before connector work. |
| TikTok Ads | Events API evidence required; Business API version must be source-verified | Re-check Events API, Smart+, and ownership/data-residency notes monthly. |
| LinkedIn Ads | Linkedin-Version 202604 baseline | Monthly API versions and qualified-lead/Lead Sync changes need source proof. |
| Microsoft Ads | REST transition | New features REST-only from 2026-10-01; SOAP retirement 2027-01-31. |
| Apple Ads | AdServices + AAK | Re-check CPP, AAK, iOS attribution, and new-placement reporting transparency. |

## 6. Evidence Sources

- .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv
- .raw/sources/exports/google/2026-05-15-01-campaigns.csv
- .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv
- .raw/sources/exports/google/2026-05-15-02-ad-groups.csv
- .raw/sources/exports/google/2026-05-15-03-keywords-2.csv
- .raw/sources/exports/google/2026-05-15-03-keywords.csv
- .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv
- .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv
- .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv
- .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv
- .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv
- .raw/sources/exports/google/2026-05-15-06-sitelinks.csv
- .raw/sources/exports/google/2026-05-15-07-callouts-2.csv
- .raw/sources/exports/google/2026-05-15-07-callouts.csv
- .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv
- .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv
- .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv
- .raw/sources/exports/google/2026-05-15-09-call-asset.csv
- .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv
- .raw/sources/exports/google/2026-05-15-10-location-targets.csv
- .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv
- .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv
- .raw/sources/research/2026-05-09-ads-brain-production-research.md
- wiki/sources/Market Context 2026-05-15.md

## 7. Needs Approval

- Tracking/privacy gate review.
- Budget changes from [[Budget Pacing Memo]].
- Negative keyword candidates from [[Negative Keyword Candidate Queue]].
- Creative tests from [[Creative Fatigue Board]].

## 8. Next Actions

1. Review [[Tracking and Attribution Risk Register]].
2. Review [[Wasted Spend Ledger]].
3. Move approved actions into [[Approval Queue]].

---

## Timeline
- 2026-05-15 - Generated weekly report from 22 source summaries.
- 2026-05-15 - Generated weekly report from 11 source summaries.
