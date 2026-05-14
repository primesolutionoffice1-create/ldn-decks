# Google Ads Editor Import Pack

Generated from `scripts/generate-google-ads-imports.mjs`.

Regenerate:

```bash
npm run ads:generate-imports
```

## Import Order

Import into Google Ads Editor in this order:

1. `01-campaigns.csv`
2. `02-ad-groups.csv`
3. `03-keywords.csv`
4. `04-responsive-search-ads.csv`
5. `05-shared-negative-keywords.csv`
6. `06-sitelinks.csv`
7. `07-callouts.csv`
8. `08-pmax-remarketing-assets.csv`
9. `09-call-asset.csv`
10. `10-location-targets.csv`
11. `11-campaign-negative-keywords.csv`

## Manual Checks In Google Ads UI

Google Ads Editor imports structure well, but these settings should be confirmed manually before enabling:

- Location option: Presence only.
- Search partners: Off at launch.
- Display expansion: Off for Search.
- PMax final URL expansion: Off.
- Conversion goal: `Qualified Call (Ads) - 60s`.
- Campaigns and ads remain paused until tracking QA is complete.
- GBP location asset is connected.
- Call asset schedule is Monday-Friday, 8am-6pm.
- Shared negative list is attached to all Search campaigns.
- Repair/refinishing/restoration negatives are attached at the Composite and Replacement campaign level only. Keep repair in a separate campaign if it is ever tested.

## Files

- `01-campaigns.csv` - 3 Search campaigns + 1 PMax remarketing campaign.
- `02-ad-groups.csv` - Search ad groups.
- `03-keywords.csv` - Exact and phrase keywords only.
- `04-responsive-search-ads.csv` - 2 RSAs per ad group.
- `05-shared-negative-keywords.csv` - shared negative list.
- `06-sitelinks.csv` - campaign-level sitelinks.
- `07-callouts.csv` - campaign-level callouts.
- `08-pmax-remarketing-assets.csv` - PMax remarketing asset group copy.
- `09-call-asset.csv` - phone asset setup values.
- `10-location-targets.csv` - 3-county presence targeting.
- `11-campaign-negative-keywords.csv` - campaign-level repair/refinishing negatives for high-ticket Search.
