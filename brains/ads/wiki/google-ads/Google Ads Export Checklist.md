---
brain_schema: ads-brain.v1
type: checklist
platform: google
title: "Google Ads Export Checklist"
created: "2026-05-11"
updated: "2026-05-11"
owner: "Loudoun Decks"
status: active
---

# Google Ads Export Checklist

Exports are the only way data enters the Ads Brain. The vault is approval-first — no live mutations. See [[No Live Changes Without Approval]].

## Universal rules

- **Account**: log in at https://ads.google.com — confirm the correct customer ID at the top right before exporting.
- **Default date range**: `Last 30 days` for the first ingest. Use `Last 90 days` once we have a 30-day baseline.
- **Segment**: do **not** apply segments unless the report explicitly requires it. Segmenting bloats rows.
- **Format**: `.csv` (Excel CSV is OK; tab-separated is not). Download the CSV without summary rows when prompted.
- **Currency / time zone**: leave at account default.
- **Filename pattern**: `gads_<report>_<YYYYMMDD>_<YYYYMMDD>.csv`
  - Example: `gads_campaigns_20260411_20260510.csv`
- **Save path**: `/Users/ldndecks/ads-brain-vaults/ldn-decks/.raw/google-ads/<YYYY-MM>/`
  - Create the month folder if missing. Never modify files after drop.
- **Columns**: include every column listed below. Missing columns reduce analysis depth and may trip quality gates.
- **Conversions columns**: when "Conversions" appears, also include "All conv.", "Conv. value", "Cost / conv.", "Conv. rate", "Value / conv.".

> Tip: in Google Ads, click the **columns icon → Modify columns → save preset** so future exports are one click.

---

## 1. Campaign report

**Where to click**: Left nav → **Campaigns** → Campaigns view → set date → **Columns → Modify columns** → toggle the list below → Apply → **Download (cloud icon) → .csv**.

**Date range**: Last 30 days (then Last 90 days monthly).

**Columns**:
- Campaign, Campaign state, Campaign type, Campaign sub type, Bid strategy type, Bid strategy, Budget, Budget type
- Impressions, Clicks, CTR, Avg. CPC, Cost
- Conversions, All conv., Conv. value, Cost / conv., Conv. rate, Value / conv., ROAS
- Search impr. share, Search lost IS (rank), Search lost IS (budget), Search top IS, Search abs. top IS
- Optimization score (if available)

**Filename**: `gads_campaigns_<from>_<to>.csv`
**Save to**: `.raw/google-ads/<YYYY-MM>/`

---

## 2. Ad group report

**Where to click**: Left nav → **Ad groups** → set date → Modify columns → Apply → Download CSV.

**Date range**: Last 30 days.

**Columns**:
- Campaign, Ad group, Ad group state, Ad group type, Default max. CPC, Target CPA, Target ROAS
- Impressions, Clicks, CTR, Avg. CPC, Cost
- Conversions, All conv., Conv. value, Cost / conv., Conv. rate
- Search impr. share, Search lost IS (rank), Search lost IS (budget)

**Filename**: `gads_adgroups_<from>_<to>.csv`
**Save to**: `.raw/google-ads/<YYYY-MM>/`

---

## 3. Keyword report

**Where to click**: Left nav → **Insights and reports → Search keywords** (or **Audiences, keywords, content → Search keywords**) → set date → Modify columns → Download CSV.

**Date range**: Last 30 days.

**Columns**:
- Campaign, Ad group, Keyword, Match type, Keyword status, Policy details, Final URL, Quality Score, Landing page experience, Expected CTR, Ad relevance
- Impressions, Clicks, CTR, Avg. CPC, Cost
- Conversions, All conv., Conv. value, Cost / conv., Conv. rate
- Top of page bid (low/high range), Search impr. share, Search lost IS (rank), Search lost IS (budget), Search abs. top IS

**Filename**: `gads_keywords_<from>_<to>.csv`
**Save to**: `.raw/google-ads/<YYYY-MM>/`

---

## 4. Search terms report

**Where to click**: Left nav → **Insights and reports → Search terms** → set date → Modify columns → Download CSV.

**Date range**: Last 30 days (do not exceed 90 — the table caps row counts).

**Columns**:
- Campaign, Ad group, Search term, Match type, Added/Excluded
- Impressions, Clicks, CTR, Avg. CPC, Cost
- Conversions, All conv., Conv. value, Cost / conv., Conv. rate
- Keyword (the matched keyword)

**Filename**: `gads_search_terms_<from>_<to>.csv`
**Save to**: `.raw/google-ads/<YYYY-MM>/`

---

## 5. Ads report

**Where to click**: Left nav → **Ads** → set date → Modify columns → Download CSV.

**Date range**: Last 30 days.

**Columns**:
- Campaign, Ad group, Ad type, Ad state, Ad strength, Final URL
- Headlines (1..15), Descriptions (1..4), Path 1, Path 2
- Impressions, Clicks, CTR, Avg. CPC, Cost
- Conversions, All conv., Conv. value, Cost / conv., Conv. rate
- Approval status, Policy details

**Filename**: `gads_ads_<from>_<to>.csv`
**Save to**: `.raw/google-ads/<YYYY-MM>/`

---

## 6. Assets report (RSA + Performance Max asset groups)

**Where to click**:
- For RSA assets: **Ads → Assets** tab on a Search campaign (or **Insights and reports → Asset details** view if surfaced).
- For Performance Max: open each PMax campaign → **Asset groups** → click an asset group → **Combinations** / **Asset details** view.

**Date range**: Last 30 days.

**Columns**:
- Campaign, Ad group / Asset group, Asset, Asset type (Headline / Description / Image / Logo / Video / Sitelink / Callout / Structured snippet / Lead form)
- Performance label (Best / Good / Low / Pending / Learning)
- Impressions, Clicks, CTR, Conversions, Conv. value (where shown)

**Filename**: `gads_assets_<from>_<to>.csv` (or `gads_pmax_assets_<campaign>_<from>_<to>.csv` per PMax campaign).
**Save to**: `.raw/google-ads/<YYYY-MM>/`

---

## 7. Locations report

**Where to click**: Left nav → **Audiences, keywords, content → Locations** (or **Locations** under campaign settings → **Geographic report**) → choose **Targeted locations** view → set date → Modify columns → Download CSV.
Also export the **User locations** view (where users actually were) — these are different.

**Date range**: Last 30 days.

**Columns**:
- Campaign, Location, Location type, Targeting status (Targeted / Excluded)
- Impressions, Clicks, CTR, Avg. CPC, Cost
- Conversions, All conv., Conv. value, Cost / conv., Conv. rate

**Filename**:
- `gads_locations_targeted_<from>_<to>.csv`
- `gads_locations_user_<from>_<to>.csv`

**Save to**: `.raw/google-ads/<YYYY-MM>/`

---

## 8. Conversions report

**Where to click**: Tools (wrench) → **Conversions → Summary** (or **Goals → Conversions → Summary**) → set date → Modify columns → Download CSV.

**Date range**: Last 30 days.

**Columns**:
- Conversion action name, Source (Website / Phone calls / Import / App / Store visits), Category (Lead / Purchase / Sign-up / etc.)
- Tracking status, Include in "Conversions" (Yes/No), Count (Every / One), Attribution model, Click-through conv. window, View-through conv. window
- Enhanced conversions status (Active / Not configured / Needs attention)
- Conversions, All conv., Conv. value, Cost / conv., Value / conv.

**Filename**: `gads_conversions_<from>_<to>.csv`
**Save to**: `.raw/google-ads/<YYYY-MM>/`

> This export is the **foundation of the [[Day 0 Tracking and Privacy Gate - Google Ads]]**. Optimization stays blocked until this is clean.

---

## 9. Landing pages report

**Where to click**: Left nav → **Insights and reports → Landing pages** → set date → Modify columns → Download CSV. Also export **Expanded landing pages** view.

**Date range**: Last 30 days.

**Columns**:
- Landing page (final URL), Expanded landing page, Mobile-friendly click rate, Valid AMP click rate
- Impressions, Clicks, CTR, Avg. CPC, Cost
- Conversions, All conv., Conv. value, Cost / conv., Conv. rate

**Filename**:
- `gads_landing_pages_<from>_<to>.csv`
- `gads_landing_pages_expanded_<from>_<to>.csv`

**Save to**: `.raw/google-ads/<YYYY-MM>/`

---

## 10. Auction Insights (if available)

**Where to click**:
- Campaign-level: select campaigns → **Auction insights** tab.
- Keyword-level: **Search keywords** → select keywords → **Auction insights** tab.
- Click **Download → .csv** (top-right of the Auction insights view).

**Date range**: Last 30 days (Last 7 days if competitive landscape is volatile).

**Columns** (provided as-is — Google Ads doesn't allow custom columns here):
- Display URL domain, Impression share, Overlap rate, Position above rate, Top of page rate, Abs. top of page rate, Outranking share

**Filename**:
- `gads_auction_insights_campaign_<from>_<to>.csv`
- `gads_auction_insights_keyword_<from>_<to>.csv`

**Save to**: `.raw/google-ads/<YYYY-MM>/`

> If Auction Insights is unavailable (very low volume or restricted advertisers), record this in the [[Day 0 Tracking and Privacy Gate - Google Ads]] under Notes.

---

## Quick fill-down for owner

| # | Report | Path in Google Ads | Filename pattern |
|---|---|---|---|
| 1 | Campaigns | Campaigns | `gads_campaigns_*.csv` |
| 2 | Ad groups | Ad groups | `gads_adgroups_*.csv` |
| 3 | Keywords | Insights and reports → Search keywords | `gads_keywords_*.csv` |
| 4 | Search terms | Insights and reports → Search terms | `gads_search_terms_*.csv` |
| 5 | Ads | Ads | `gads_ads_*.csv` |
| 6 | Assets / PMax assets | Ads → Assets / PMax → Asset groups | `gads_assets_*.csv` |
| 7 | Locations (targeted + user) | Audiences, keywords, content → Locations | `gads_locations_*_*.csv` |
| 8 | Conversions | Tools → Conversions → Summary | `gads_conversions_*.csv` |
| 9 | Landing pages | Insights and reports → Landing pages | `gads_landing_pages*_*.csv` |
| 10 | Auction insights | Campaign/keyword → Auction insights tab | `gads_auction_insights_*_*.csv` |

After saving all files into `.raw/google-ads/<YYYY-MM>/`, follow [[Google Ads Import Commands]] then [[End-to-End Google Ads Workflow]].
