---
brain_schema: ads-brain.v1
created: "2026-05-11"
type: source-guide
title: "Export Intake Guide"
updated: "2026-05-11"
---

# Export Intake Guide

## Required Columns

The importer accepts flexible CSV headers and detects common fields:

- campaign
- ad group or ad set
- ad
- cost or spend
- impressions
- clicks
- conversions
- revenue or conversion value
- ctr
- cpa
- roas
- api version and version sunset when available
- attribution setting/window
- tracking status, CAPI/Events API status, deduplication, EMQ/match quality
- UET, Consent Mode, Enhanced Conversions, AdServices, AAK, or equivalent
- learning phase and policy/review status

## First Import Path

1. Export one platform at campaign level first.
2. Save the original file unchanged.
3. Import it through `python -m ads_brain.cli import --vault <vault> --platform <platform> --file <csv>`.
4. Open the generated source note in `wiki/sources/`.
5. Run synthesis only after the source note has the expected platform checks.

Use refreshed exports instead of editing raw files. Ads Brain stores each import
as immutable source evidence under `.raw/`.

## Recommended Exports

- Google: campaigns, search terms, keywords, conversion actions, assets, PMax
  asset groups, AI Max status, consent diagnostics.
- Meta: campaigns, ad sets, ads, creatives, Events Manager/CAPI diagnostics,
  attribution setting, EMQ, deduplication.
- YouTube: campaign and video creative performance, aspect ratio, safe-zone,
  view-through context.
- TikTok: campaign/ad group/ad creative performance, Events API, event ID,
  match keys, Spark/Smart+ status.
- LinkedIn: campaigns, Lead Gen Forms, Insight Tag/CAPI, li_fat_id, CRM
  quality, qualified leads.
- Microsoft: campaigns, search terms, UET, enhanced/offline conversions,
  Google import status, REST readiness.
- Apple: campaigns, ad groups, keywords, search terms, custom product pages,
  AdServices, AAK, AAK app config.

## Related

- [[Campaign Export Import Workflow]]
- [[Day 0 Tracking and Privacy Gate]]
- [[API Version and Connector Readiness Gate]]
- [[wiki/sources/_index|Sources Hub]]
- [[wiki/platforms/_index|Platforms Hub]]
- [[RESOLVER]]
