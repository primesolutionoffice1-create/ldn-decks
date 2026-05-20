# Google Ads Conversion Cleanup Log — Loudoun Decks

**Date:** 2026-05-15
**Account:** `943-907-4542 Loudoun Decks Builder-2`
**Scope:** conversion-goal cleanup only. No budgets, bidding strategies, keywords, ads, or campaign budgets were changed.

## Changes Made

| Area | Before | After | Reason |
|---|---|---|---|
| `Submit lead form` goal | Not account-default; `4 of 10` campaigns | Account-default; `10 of 10` campaigns | Make confirmed website lead the primary account-wide optimization signal after GTM Version 25 publish |
| `Leads from messages` goal | Account-default; `6 of 10` campaigns | Not account-default; `0 of 10` campaigns | Remove low-volume/zero-result message lead goal from default optimization path |

## Confirmed After Save

| Goal | Status after cleanup |
|---|---|
| `Submit lead form` | Account-default, `10 of 10`, Primary conversion actions: 2 |
| `Phone call lead` | Account-default, `9 of 10`, Primary conversion actions: 2 |
| `Leads from messages` | Not account-default, `0 of 10` |

## Current Primary Account-Level Signals

| Conversion action | Source | Optimization | Count | Included in account-level goals |
|---|---|---|---|---|
| `Submit lead form` | Website | Primary | One | Yes |
| `Lead form - Submit` | Google hosted | Primary | One | Yes |
| `Qualified Call (Ads) - 60s` | Call from Ads | Primary | One | Yes |
| `Calls from Smart Campaign Ads` | Call from Ads, locked | Primary | One | Yes |

## Secondary / Non-Optimization Signals Kept Out

| Conversion action | Source | Optimization | Included in account-level goals |
|---|---|---|---|
| `LDN Decks – Website Tracking (web) generate_lead` | GA4 | Secondary | No |
| `LDN Decks – Website Tracking (web) form_start` | GA4 | Secondary | No |
| `Call From Website - (5716557207)` | Website | Secondary | No |
| `Phone Clicks` | Call from Ads | Secondary | No |
| `ldndecks.com (web) call_from_website` | GA4 | Secondary | No |

## Not Changed

- `Contact`, `Request quote`, `Get directions`, `Engagement`, and YouTube goals were not edited in this pass.
- Campaign-specific goals were not individually changed.
- Bid strategies were not changed.
- Budgets were not changed.
- Meta CAPI was not activated.

## Notes

- `Submit lead form` still showed `Needs attention` immediately after GTM publish. This is expected until Google Ads receives real post-publish conversions through the newly published GTM Version 25 path.
- Next validation gate remains 5-10 real production leads with no duplicate conversions.
- Do not switch to Max Conversions, tCPA, or tROAS until the live lead validation log passes.
