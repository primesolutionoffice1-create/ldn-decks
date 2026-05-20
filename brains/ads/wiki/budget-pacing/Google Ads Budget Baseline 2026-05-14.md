---
brain_schema: ads-brain.v1
created: "2026-05-14"
updated: "2026-05-14"
type: budget_baseline
title: "Google Ads Budget Baseline 2026-05-14"
platform: google
status: implemented
confidence: high
source: "[[Google Ads Live Setup Verification 2026-05-14]]"
---

# Google Ads Budget Baseline 2026-05-14

## Compiled Truth

Live daily budget baseline: 150/day.

| Campaign | Budget | Rationale |
|---|---:|---|
| `SRCH \| Composite \| 3 Counties \| Calls` | 90/day | Best high-ticket fit; composite demand should carry the largest share. |
| `SRCH \| Replacement + Resurfacing \| 3 Counties \| Calls` | 45/day | Strong high-ticket intent, but narrower than composite. |
| `SRCH \| Branded \| 3 Counties \| Calls` | 15/day | Brand protection and direct-demand capture. |
| PMax remarketing | 0/day | Paused at launch; do not spend until Search baseline and conversion trust are stronger. |

## Guardrails

- Do not scale budgets while Branded replacement RSA ads are still in review unless urgent lead volume requires it.
- Do not move budget into PMax until Search terms and call quality have been reviewed.
- Do not add tCPA until each major Search campaign has enough qualified call conversion volume.
- Budget changes should cite search-term quality, qualified call rate, and campaign-level conversion distribution.

## Timeline

- 2026-05-14: Budget baseline implemented and verified. Source: [[Google Ads Live Setup Verification 2026-05-14]].
