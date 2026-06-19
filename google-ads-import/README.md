# Google Ads Editor Import Pack

Generated from `scripts/generate-google-ads-imports.mjs`.

Regenerate:

```bash
npm run ads:generate-imports
```

## Premium Geo Test Pack

For Arlington / Alexandria / McLean only, use the isolated import pack:

`google-ads-import/premium-geo-test/`

This folder contains only the new paused Premium Geo campaign and avoids touching existing live campaigns during Google Ads Editor import.

Validate it with:

```bash
npm run ads:validate-premium-geo
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
- Premium Geo location option: Presence only for Fairfax County, Arlington County, and Alexandria.
- Search partners: Off at launch.
- Display expansion: Off for Search.
- PMax final URL expansion: Off.
- Conversion goal: `Qualified Call (Ads) - 60s`.
- Campaigns and ads remain paused until real-lead validation and Google Ads diagnostics are complete.
- GTM Version 25 is live per `docs/tracking-audit/FINAL-ATTRIBUTION-SIGNOFF.md`, but campaigns should still stay paused until 5-10 real leads and Google Ads Enhanced Conversions diagnostics are reviewed.
- GBP location asset is connected.
- Call asset schedule is Monday-Friday, 8am-6pm.
- Shared negative list is attached to all Search campaigns.
- Repair/refinishing/restoration negatives are attached at the Composite campaign level.
- Replacement + Resurfacing keeps replacement/resurface intent open, but blocks refinishing, staining, pressure-washing, small-repair, and observed competitor queries.
- Repair, patio, porch, fence, hardscaping, and broad construction negatives are attached at the Deck Builders campaign level. Keep those services in separate campaigns if they are tested.
- Premium Geo blocks repair-only, refinishing, staining, pressure-washing, handyman, material-only, and permit-only searches.

## Budget Modes

The import pack is built as a complete paused structure. Do not enable every campaign by accident.

### $150/day protected launch

Use this if the spend cap is still $150/day:

- `SRCH | Composite | 3 Counties | Calls` - $80/day.
- `SRCH | Replacement + Resurfacing | 3 Counties | Calls` - $45/day.
- `SRCH | Branded | 3 Counties | Calls` - $15/day.
- `RMKT | PMax | Visitors 30/60/90d | Calls` - $10/day only if audience size and conversion diagnostics are clean.
- Keep `SRCH | Deck Builders | 3 Counties | Calls` paused, or run it only by moving budget from Composite/Replacement.
- Keep `SRCH | Premium Geo | Arlington Alexandria McLean | Leads` paused until the owner explicitly chooses to test Arlington/Alexandria/McLean.

### $205/day expansion mode

Use this only when the owner explicitly approves the higher cap, without the Premium Geo test:

- `SRCH | Composite | 3 Counties | Calls` - $90/day.
- `SRCH | Deck Builders | 3 Counties | Calls` - $45/day.
- `SRCH | Replacement + Resurfacing | 3 Counties | Calls` - $45/day.
- `SRCH | Branded | 3 Counties | Calls` - $15/day.
- `RMKT | PMax | Visitors 30/60/90d | Calls` - $10/day.

### $180/day with Premium Geo test

Use this to start Arlington / Alexandria / McLean without a large spend increase:

- `SRCH | Composite | 3 Counties | Calls` - $70/day.
- `SRCH | Replacement + Resurfacing | 3 Counties | Calls` - $40/day.
- `SRCH | Premium Geo | Arlington Alexandria McLean | Leads` - $30/day.
- `SRCH | Branded | 3 Counties | Calls` - $10/day.
- Keep `SRCH | Deck Builders | 3 Counties | Calls` paused.
- Keep `RMKT | PMax | Visitors 30/60/90d | Calls` paused.

### $235/day full expansion mode

Use this only after lead tracking is stable and the owner explicitly approves the higher cap:

- `SRCH | Composite | 3 Counties | Calls` - $90/day.
- `SRCH | Deck Builders | 3 Counties | Calls` - $45/day.
- `SRCH | Replacement + Resurfacing | 3 Counties | Calls` - $45/day.
- `SRCH | Premium Geo | Arlington Alexandria McLean | Leads` - $30/day.
- `SRCH | Branded | 3 Counties | Calls` - $15/day.
- `RMKT | PMax | Visitors 30/60/90d | Calls` - $10/day.

### $150/day with Deck Builders test

Use this if Deck Builders must launch without increasing spend:

- `SRCH | Composite | 3 Counties | Calls` - $70/day.
- `SRCH | Deck Builders | 3 Counties | Calls` - $35/day.
- `SRCH | Replacement + Resurfacing | 3 Counties | Calls` - $35/day.
- `SRCH | Branded | 3 Counties | Calls` - $10/day.
- Keep `RMKT | PMax | Visitors 30/60/90d | Calls` paused until remarketing audience size and diagnostics are strong enough.

## Files

- `01-campaigns.csv` - 5 Search campaigns + 1 PMax remarketing campaign.
- `02-ad-groups.csv` - Search ad groups.
- `03-keywords.csv` - Exact and phrase keywords only.
- `04-responsive-search-ads.csv` - 2 RSAs per ad group.
- `05-shared-negative-keywords.csv` - shared negative list using Phrase match only.
- `06-sitelinks.csv` - campaign-level sitelinks.
- `07-callouts.csv` - campaign-level callouts.
- `08-pmax-remarketing-assets.csv` - PMax remarketing asset group copy.
- `09-call-asset.csv` - phone asset setup values.
- `10-location-targets.csv` - 3-county presence targeting plus Premium Geo targets for Fairfax County, Arlington County, and Alexandria.
- `11-campaign-negative-keywords.csv` - campaign-level Phrase/Exact negatives for high-ticket Search.

## Validation

Run this before importing into Google Ads Editor:

```bash
npm run ads:validate-imports
```

The validator fails if campaigns are not paused, if Broad match slips into the keyword file, if Broad negatives appear, if cross-campaign keyword duplication appears, if required negatives are missing, if location targeting is not Presence, or if PMax Final URL expansion is not Off.
