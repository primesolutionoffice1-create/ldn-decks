# Google Ads Import Reporting Gate - 2026-06-03

## What Changed

- Updated `scripts/validate-google-ads-imports.mjs` so it now writes reusable validation artifacts:
  - `scripts/output/google-ads-import-validation-2026-06-03.json`
  - `scripts/output/google-ads-import-validation-2026-06-03.md`
- Integrated Google Ads import validation into `npm run seo:weekly`.
- Added a weekly checklist reminder to run `npm run ads:validate-imports` before any Ads Editor import or campaign activation.

## Current Validation Result

`npm run ads:validate-imports`:

```json
{
  "ok": true,
  "campaigns": 5,
  "searchCampaigns": 4,
  "pmaxCampaigns": 1,
  "adGroups": 11,
  "keywords": 135,
  "responsiveSearchAds": 22,
  "totalDailyBudget": 205,
  "errors": [],
  "warnings": []
}
```

`npm run seo:weekly` now includes:

```text
Google Ads import validation: launch-safe local pack - 5 campaigns - 135 keywords - $205 daily budget - 0 errors
```

## Safety Scope

This gate verifies the local Google Ads Editor import pack only:

- required CSV files exist,
- all editable rows remain paused,
- Search/PMax campaign counts match plan,
- full expansion budget totals $205/day,
- network settings are launch-safe,
- match types are Exact/Phrase only,
- cross-campaign keyword duplicates are blocked,
- required negatives are present,
- repair keywords do not leak into high-ticket Search campaigns,
- landing URLs match expected ad groups,
- location targets use Presence,
- call assets use `Qualified Call (Ads) - 60s`,
- PMax final URL expansion is off.

It does not authorize activation. External Google Ads/GTM qualified-call proof, real lead outcome rows, and owner evidence are still required before scaling.

## Deploy Decision

No production deploy was needed. This batch changed internal validation/reporting only; no public page content, routing, ad platform settings, GTM, GA4, budgets, bidding, conversions, or Google Ads account settings were changed.
