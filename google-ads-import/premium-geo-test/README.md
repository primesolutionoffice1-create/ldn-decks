# Premium Geo Test Import Pack

Campaign:

`SRCH | Premium Geo | Arlington Alexandria McLean | Leads`

Purpose:

Start controlled Search coverage for Arlington, Alexandria, McLean, Great Falls, Vienna, and Oakton without touching the existing live campaigns.

## Import Order

Import these files into Google Ads Editor in this order:

1. `01-campaign.csv`
2. `02-ad-groups.csv`
3. `03-keywords.csv`
4. `04-responsive-search-ads.csv`
5. `05-sitelinks.csv`
6. `06-callouts.csv`
7. `07-call-asset.csv`
8. `08-location-targets.csv`
9. `09-campaign-negative-keywords.csv`

## Validation

Before importing, run:

```bash
npm run ads:generate-imports
npm run ads:validate-premium-geo
```

Expected result:

- `ok=true`
- 4 ad groups
- 48 keywords
- 12 responsive search ads
- 3 locations
- 20 campaign-level negative keywords
- 0 errors

## Safety Settings

- Campaign status: `Paused`
- Ad group status: `Paused`
- Keyword status: `Paused`
- Ad status: `Paused`
- Daily budget: `$30`
- Bid strategy: `Maximize conversions`
- Search partners: off
- Display network: off
- Location option: `Presence`

## Location Targets

- Fairfax County, Virginia, United States
- Arlington County, Virginia, United States
- Alexandria, Virginia, United States

## Expected Pre-Post Summary

Google Ads Editor should show adds only for this campaign:

- 1 Search campaign
- 4 ad groups
- 48 keywords
- 12 responsive search ads
- 4 sitelinks
- 8 callouts
- 1 call asset
- 3 location targets
- 20 campaign-level negative keywords

Do not post if Editor shows changes to existing campaigns, budgets, bid strategies, conversion actions, or active statuses.

## Activation Rule

Import and post paused first.

Only enable after:

- Google Ads conversion diagnostics still look clean.
- Lead form quality fields are deployed.
- Owner approves the `$30/day` test.
- First 3-5 leads from this campaign will be tracked in `docs/ads-tracking/live-lead-outcomes-2026-06-10.csv`.
