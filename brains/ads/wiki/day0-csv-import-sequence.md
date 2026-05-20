---
brain_schema: ads-brain.v1
type: runbook
platform: google
title: "Day 0 CSV Import Sequence"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: ready-pending-csvs
sources:
  - "wiki/google-ads/Google Ads Export Checklist.md"
  - "wiki/google-ads/Google Ads Import Commands.md"
  - "wiki/day0-tracking-gate.md"
---

# Day 0 CSV Import Sequence

The exact order to import Google Ads CSV exports once they land in `.raw/google-ads/2026-05/`. The importer is **approval-safe**: it only reads CSVs and writes typed notes to `imports/google-ads/`; it never touches the account.

## When to run

Two acceptable windows:

1. **In parallel with Day 0 GTM work.** Imports build the inventory and detect duplicate-fire patterns from the wild — useful even if the gate hasn't closed yet. **Stays in observe + advise mode.** No bid recommendations issued from the data.
2. **After Day 0 closure.** Same imports, but the brain can now move from advise into low-risk action (negatives, ad-copy tightening, geo/schedule trimming). Bid/budget changes still off-limits until offline imports start.

Either way, CSV ingestion is **safe right now** — the only risk is acting on the data prematurely, which the [[day0-smart-bidding-readiness]] guardrails prevent.

## Pre-flight

```bash
# Set once per session
export VAULT=/Users/ldndecks/ads-brain-vaults/ldn-decks
export SCRIPTS=/Users/ldndecks/.claude/skills/ads-brain/scripts
export MONTH=2026-05
export FROM=20260411
export TO=20260510
```

Confirm CSVs are in place:

```bash
ls -la "$VAULT/.raw/google-ads/$MONTH/"
# Expect 10+ files named gads_*.csv per Google Ads Export Checklist
```

If no CSVs are present yet: owner must export per [[Google Ads Export Checklist]] first.

## Import order

The reason for a specific order: each step builds context the next step depends on (campaigns → ad groups → keywords → search terms → ads → assets), and the conversions import (#1) is what populates the inventory referenced in B-04 / B-06.

### Step 1 — Conversions report (the Day 0 evidence)

Run this FIRST. The output populates the conversion-action inventory referenced in [[day0-blockers#B-04]] / [[day0-blockers#B-06]].

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_conversions_${FROM}_${TO}.csv" \
  --source-label "google-conversions-$MONTH"
```

After this runs, [[day0-tracking-gate]] can re-evaluate the "gclid persistence vs conversion window" row using real data (Count / Window / Attribution / Include-in-Conversions columns from the CSV).

### Step 2 — Campaign report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_campaigns_${FROM}_${TO}.csv" \
  --source-label "google-campaigns-$MONTH"
```

### Step 3 — Ad group report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_adgroups_${FROM}_${TO}.csv" \
  --source-label "google-adgroups-$MONTH"
```

### Step 4 — Keyword report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_keywords_${FROM}_${TO}.csv" \
  --source-label "google-keywords-$MONTH"
```

### Step 5 — Search terms report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_search_terms_${FROM}_${TO}.csv" \
  --source-label "google-search-terms-$MONTH"
```

This populates [[Negative Keyword Candidate Queue]].

### Step 6 — Ads report

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_ads_${FROM}_${TO}.csv" \
  --source-label "google-ads-$MONTH"
```

### Step 7 — Landing pages

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

Joins to the [[PAID-SEARCH-SXO-FIX-QUEUE]] page-side audit.

### Step 8 — Locations (targeted + user)

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

### Step 9 — Assets / PMax

```bash
python3 "$SCRIPTS/import_ads_export.py" \
  --vault "$VAULT" --platform google \
  --file "$VAULT/.raw/google-ads/$MONTH/gads_assets_${FROM}_${TO}.csv" \
  --source-label "google-assets-$MONTH"

for f in "$VAULT/.raw/google-ads/$MONTH/"gads_pmax_assets_*.csv; do
  [ -e "$f" ] || continue
  label="$(basename "$f" .csv)"
  python3 "$SCRIPTS/import_ads_export.py" \
    --vault "$VAULT" --platform google --file "$f" \
    --source-label "$label"
done
```

### Step 10 — Auction insights (if available)

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

Missing Auction Insights is normal for low-volume accounts — note it in [[day0-tracking-gate]] under evidence_note and continue.

## Batch alternative (one command, all 10 reports)

```bash
for f in "$VAULT/.raw/google-ads/$MONTH/"gads_*.csv; do
  label="$(basename "$f" .csv)"
  echo "Importing $label"
  python3 "$SCRIPTS/import_ads_export.py" \
    --vault "$VAULT" --platform google --file "$f" \
    --source-label "$label" || echo "FAILED: $f"
done
```

Loses the conversions-first ordering benefit but is fine for one-shot ingestion.

## Post-import sequence

### Always safe to run

```bash
python3 "$SCRIPTS/lint_vault.py" --vault "$VAULT"
python3 "$SCRIPTS/guide_next_action.py" --vault "$VAULT"
```

### Safe with Day 0 still PARTIAL

```bash
# DRY-RUN unless DATAFORSEO_LOGIN + DATAFORSEO_PASSWORD set. Produces a plan, not live calls. No cost.
python3 "$SCRIPTS/enrich_market_context.py" \
  --vault "$VAULT" --site https://ldndecks.com
```

### Gated — only run AFTER Day 0 PASS

```bash
# Synthesizes recommendations from imported data. Until Day 0 closes, these would target unverified conversion signals — explicitly forbidden by quality gates in SKILL.md.
python3 "$SCRIPTS/synthesize_ads_plan.py" --vault "$VAULT"
python3 "$SCRIPTS/render_ads_report.py" --vault "$VAULT" --html-only
```

## What each import unlocks

| Step | Closes / informs |
|---|---|
| 1. Conversions | [[day0-blockers#B-04]] (Lead action config inventory); [[day0-blockers#B-06]] (action cleanup) |
| 2. Campaigns | [[Ads Health Scorecard]] populated; spend baselines |
| 3. Ad groups | Drill-down for B-04 |
| 4. Keywords | [[QUALITY-SCORE-RISK-REPORT]] cross-check |
| 5. Search terms | [[Negative Keyword Candidate Queue]] populated |
| 6. Ads | Creative inventory; informs [[Creative Fatigue Board]] |
| 7. Landing pages | Joins to [[LANDING-PAGE-AUDIT]] + [[KEYWORD-TO-LANDING-PAGE-MAP]] |
| 8. Locations | Validates "Presence vs Presence-or-interest" assumption (gate §8) |
| 9. Assets | RSA + PMax asset performance baseline |
| 10. Auction insights | Competitor visibility — feeds [[Open Questions for Ldn Decks]] |

## Quality gates (built into every import)

- No ROAS quoted as "incremental" without holdout evidence.
- No Broad Match recommendation without Smart Bidding context AND verified conversion quality (latter blocked by Day 0).
- No budget-scale recommendation during active learning phase.
- No live-account-edit recommendation while Day 0 is open.
- Every claim cites a source CSV row.

If any of those triggers fire, the importer flags the entry as `needs_review` and surfaces it in the action queue rather than auto-approving.

## Failure modes

| Symptom | Likely cause | Fix |
|---|---|---|
| `importer rejects files outside $HOME` | CSV in `/tmp` or similar | Move to `$VAULT/.raw/google-ads/$MONTH/` |
| Empty notes generated | Wrong CSV (e.g., daily summary instead of campaign report) | Re-export per [[Google Ads Export Checklist]]; disable summary rows |
| Conversion category missing | Conversions export missing "Category" column | Re-export with the column list from §8 of Export Checklist |
| Match-type column unrecognized | Google changed label | File a P1 in `action-queue/` for adapter fix |

## Status after a full ingest

- `imports/google-ads/` has 10+ typed notes, one per CSV.
- [[wiki/sources/_index|Sources Hub]] lists the new imports.
- [[wiki/campaigns/_index|Campaigns Hub]] populates with named campaigns.
- [[wiki/conversions/_index|Conversions Hub]] populates with the action inventory.
- `guide_next_action.py` will now point to: enrich → (after Day 0 PASS) synthesize → report.

CSV ingestion does **NOT** move the master gate past PARTIAL on its own, does **NOT** unblock Smart Bidding, does **NOT** trigger any live-account changes.

## Related

- [[Google Ads Export Checklist]]
- [[Google Ads Import Commands]]
- [[End-to-End Google Ads Workflow]]
- [[day0-tracking-gate]]
- [[day0-blockers]]
