---
brain_schema: ads-brain.v1
type: runbook
platform: google
title: "Google Ads Import Commands"
created: "2026-05-11"
updated: "2026-05-11"
owner: "Loudoun Decks"
status: active
---

# Google Ads Import Commands

Run these **after** the export files are sitting in `.raw/google-ads/<YYYY-MM>/` and **before** synthesize/report.

The importer is approval-safe — it only reads CSVs and writes typed notes to `imports/google-ads/`. It never touches the Google Ads account.

## Vars (set once per session)

```bash
export VAULT=/Users/ldndecks/ads-brain-vaults/ldn-decks
export SCRIPTS=/Users/ldndecks/.claude/skills/ads-brain/scripts
export MONTH=2026-05                                  # change per cycle
export FROM=20260411
export TO=20260510
```

## 1. Campaign report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" \
  --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_campaigns_${FROM}_${TO}.csv" \
  --source-label "google-campaigns-$MONTH"
```

## 2. Ad group report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_adgroups_${FROM}_${TO}.csv" \
  --source-label "google-adgroups-$MONTH"
```

## 3. Keyword report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_keywords_${FROM}_${TO}.csv" \
  --source-label "google-keywords-$MONTH"
```

## 4. Search terms report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_search_terms_${FROM}_${TO}.csv" \
  --source-label "google-search-terms-$MONTH"
```

## 5. Ads report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_ads_${FROM}_${TO}.csv" \
  --source-label "google-ads-$MONTH"
```

## 6. Assets / PMax assets

```bash
# RSA / general assets
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_assets_${FROM}_${TO}.csv" \
  --source-label "google-assets-$MONTH"

# PMax (one per campaign)
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_pmax_assets_<campaign>_${FROM}_${TO}.csv" \
  --source-label "google-pmax-<campaign>-$MONTH"
```

## 7. Locations (targeted + user)

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_locations_targeted_${FROM}_${TO}.csv" \
  --source-label "google-locations-targeted-$MONTH"

python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_locations_user_${FROM}_${TO}.csv" \
  --source-label "google-locations-user-$MONTH"
```

## 8. Conversions

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_conversions_${FROM}_${TO}.csv" \
  --source-label "google-conversions-$MONTH"
```

> This import populates evidence for [[Day 0 Tracking and Privacy Gate - Google Ads]].

## 9. Landing pages

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_landing_pages_${FROM}_${TO}.csv" \
  --source-label "google-landing-pages-$MONTH"

python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_landing_pages_expanded_${FROM}_${TO}.csv" \
  --source-label "google-landing-pages-expanded-$MONTH"
```

## 10. Auction insights

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_auction_insights_campaign_${FROM}_${TO}.csv" \
  --source-label "google-auction-insights-campaign-$MONTH"

python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_auction_insights_keyword_${FROM}_${TO}.csv" \
  --source-label "google-auction-insights-keyword-$MONTH"
```

## Batch (all 10 in one shot, after CSVs are in place)

```bash
for f in "$VAULT/.raw/google-ads/$MONTH/"gads_*.csv; do
  label="$(basename "$f" .csv)"
  echo "Importing $label"
  python3 "$SCRIPTS/import_ads_export.py" \
    --vault "$VAULT" --platform google \
    --file "$f" \
    --source-label "$label" || echo "FAILED: $f"
done
```

## After imports

```bash
# Enrich with market context (DataForSEO/GSC plan — dry-run unless creds are set)
python3 "$SCRIPTS/enrich_market_context.py" --vault "$VAULT" --site https://ldndecks.com

# Synthesize sourced action queue
python3 "$SCRIPTS/synthesize_ads_plan.py" --vault "$VAULT"

# Render weekly report
python3 "$SCRIPTS/render_ads_report.py" --vault "$VAULT" --html-only

# Get next action
python3 "$SCRIPTS/guide_next_action.py" --vault "$VAULT"

# Lint vault (sanity check)
python3 "$SCRIPTS/lint_vault.py" --vault "$VAULT"
```

## Limits

- `--max-bytes` and `--max-rows` flags are available if a file is unusually large.
- The importer rejects files outside `$HOME` by default — keep everything under `/Users/ldndecks/`.
