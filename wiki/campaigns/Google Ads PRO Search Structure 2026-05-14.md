---
brain_schema: ads-brain.v1
created: "2026-05-14"
updated: "2026-05-14"
type: campaign_baseline
title: "Google Ads PRO Search Structure 2026-05-14"
platform: google
status: implemented
confidence: high
source: "[[Google Ads Live Setup Verification 2026-05-14]]"
---

# Google Ads PRO Search Structure 2026-05-14

Implemented live Google Ads campaign structure for LDN Decks after the 2026-05-14 calls-first rebuild.

## Compiled Truth

Budget total: [[Google Ads Budget Baseline 2026-05-14|150/day]].

Primary conversion: [[Qualified Call Ads 60s]].

Location strategy:

- Loudoun County
- Fairfax County
- Prince William County
- Presence targeting only: people in or regularly in the targeted locations.

Active campaigns:

| Campaign | Status | Budget | Type | Bidding | Launch role |
|---|---:|---:|---|---|---|
| `SRCH \| Composite \| 3 Counties \| Calls` | Enabled | 90/day | Search | Maximize conversions | Highest-priority high-ticket composite demand |
| `SRCH \| Replacement + Resurfacing \| 3 Counties \| Calls` | Enabled | 45/day | Search | Maximize conversions | Replacement/resurfacing demand |
| `SRCH \| Branded \| 3 Counties \| Calls` | Enabled | 15/day | Search | Maximize conversions | Brand protection and high-intent navigational demand |

Launch exclusions:

- PMax is not active at launch.
- Demand Gen is not active at launch.
- Legacy Search campaigns are paused.
- Repair is separated from Replacement/Composite with campaign-level negatives.

## Cannibalization Guardrails

- Composite should not absorb repair intent.
- Replacement should not absorb repair intent.
- Branded should stay brand-only and should not carry generic deck builder traffic.
- Future Repair campaign should use its own budget and intent filter, because repair attracts cheaper intent and can reduce high-ticket lead quality.

## Weekly Optimization Rules

- Search terms 2-3 times/week.
- Add negatives quickly for repair, DIY, jobs, materials, cheap/free, big-box-store, and handyman intent.
- Move verified converting terms to Exact.
- Do not add Broad until conversion quality and Smart Bidding trust are verified.
- Do not set tCPA until each major Search campaign has enough qualified call conversions for stable learning.

## Timeline

- 2026-05-14: Live structure implemented and verified from Google Ads script logs. Source: [[Google Ads Live Setup Verification 2026-05-14]].
