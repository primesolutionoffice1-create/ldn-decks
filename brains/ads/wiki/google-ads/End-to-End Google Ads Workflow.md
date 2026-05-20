---
brain_schema: ads-brain.v1
type: workflow
platform: google
title: "End-to-End Google Ads Workflow"
created: "2026-05-11"
updated: "2026-05-11"
owner: "Loudoun Decks"
status: active
---

# End-to-End Google Ads Workflow

The full loop: export → drop → import → analyze → propose → approve → execute → review.

The assistant **never** edits the Google Ads account. See [[No Live Changes Without Approval]].

---

## Step 0 — One-time setup (already done)

- Vault scaffolded at `/Users/ldndecks/ads-brain-vaults/ldn-decks/`.
- Folders ready: `.raw/google-ads/`, `imports/google-ads/`, `reports/google-ads/`, `action-queue/`, `decisions/google-ads/`.
- Pages exist: [[Google Ads Export Checklist]], [[Day 0 Tracking and Privacy Gate - Google Ads]], [[Manual Google Ads Action Queue Template]], [[No Live Changes Without Approval]], [[Google Ads Import Commands]].

If any of these are missing, re-run `/ads-brain new` then re-create this folder set.

---

## Step 1 — Owner exports from Google Ads

Owner only. Follow [[Google Ads Export Checklist]].

1. Open https://ads.google.com and confirm the right customer ID.
2. For each of the 10 reports, set date range = **Last 30 days**, columns = the list in the checklist, download CSV.
3. Save with the naming convention: `gads_<report>_<YYYYMMDD>_<YYYYMMDD>.csv`.
4. Drop all files into `.raw/google-ads/<YYYY-MM>/` (create the month folder if missing).

**Verify** before moving on:

```bash
ls -1 /Users/ldndecks/ads-brain-vaults/ldn-decks/.raw/google-ads/2026-05/
```

Expect 10–14 files (locations and landing-pages each produce two; PMax produces one per campaign).

---

## Step 2 — Assistant imports

Run the commands in [[Google Ads Import Commands]]. The batch loop handles all CSVs at once.

This populates `imports/google-ads/` with typed notes per report. No external calls. No live changes.

**Verify**:

```bash
ls -1 /Users/ldndecks/ads-brain-vaults/ldn-decks/imports/google-ads/
python3 /Users/ldndecks/.claude/skills/ads-brain/scripts/lint_vault.py \
  --vault /Users/ldndecks/ads-brain-vaults/ldn-decks
```

---

## Step 3 — Close the Day 0 Tracking and Privacy Gate

Walk [[Day 0 Tracking and Privacy Gate - Google Ads]] top to bottom. Mark each row PASS / FAIL / UNKNOWN using evidence from `imports/google-ads/` (especially the Conversions and Locations imports).

- Any **FAIL** row → spawn a **P0** entry in `action-queue/` using [[Manual Google Ads Action Queue Template]].
- Any **UNKNOWN** row → spawn a **P0** investigation task.
- Only when **every row is PASS** do we proceed to optimization recommendations.

> Until this gate is green, reported numbers are not trustworthy. The assistant will refuse to write P1/P2/P3 recommendations.

---

## Step 4 — Assistant analyzes and proposes

Once Day 0 is green:

```bash
# Optional but recommended — market context
python3 /Users/ldndecks/.claude/skills/ads-brain/scripts/enrich_market_context.py \
  --vault /Users/ldndecks/ads-brain-vaults/ldn-decks \
  --site https://ldndecks.com

# Sourced action queue
python3 /Users/ldndecks/.claude/skills/ads-brain/scripts/synthesize_ads_plan.py \
  --vault /Users/ldndecks/ads-brain-vaults/ldn-decks
```

The assistant writes proposals into `action-queue/` with `status: proposed`. Every proposal cites source rows in `.raw/google-ads/...`.

Typical first-pass findings on a local-service Google Ads account:
- **P1** — Negative keywords from `gads_search_terms_*.csv`.
- **P1** — Geo / radius cleanup from `gads_locations_*.csv`.
- **P1** — Ad-schedule cuts from low-conversion hours.
- **P2** — Underperforming keyword pauses.
- **P2** — RSA / asset performance label fixes (POOR assets to swap, BEST to keep).
- **P2** — Landing page mismatches (high CTR, low Conv. rate URLs).
- **P3** — Naming / labeling.

---

## Step 5 — Owner reviews and decides

For each file in `action-queue/`:

1. Read the file. Confirm `source_files` references real rows in `.raw/google-ads/`.
2. Decision:
   - **Approve**: set `status: approved`, write `approved_by`.
   - **Reject**: set `status: rejected`, write a one-line reason.
   - **Defer**: leave `status: proposed`, add a note.
3. If approved: execute the change **manually in the Google Ads UI**. The assistant cannot do this and will not pretend to.

---

## Step 6 — Owner executes in Google Ads

Open Google Ads. Apply the exact action verbatim. Take a screenshot of the post-change state if useful (save to `_attachments/`).

In the action file:
- Set `status: applied` and `applied_on: YYYY-MM-DD`.
- Set `review_on: YYYY-MM-DD` (typically `applied_on + 14 days`).

Pair the action file with a `decisions/google-ads/<same-slug>.md` capturing what was changed and why.

---

## Step 7 — Weekly report

```bash
python3 /Users/ldndecks/.claude/skills/ads-brain/scripts/render_ads_report.py \
  --vault /Users/ldndecks/ads-brain-vaults/ldn-decks --html-only
```

Outputs an HTML report into `reports/google-ads/` summarizing:
- Spend / conversions / CPA / ROAS (reported, not incremental).
- Action queue status (proposed / approved / applied / review-due).
- Day 0 gate health.
- Top wins / leaks since last report.

---

## Step 8 — Next action

```bash
python3 /Users/ldndecks/.claude/skills/ads-brain/scripts/guide_next_action.py \
  --vault /Users/ldndecks/ads-brain-vaults/ldn-decks
```

This points to the single most important next move. Always prioritizes tracking (P0) over budget leaks (P1) over optimization (P2/P3).

---

## Step 9 — Loop

Re-run weekly (or whenever a material change ships):

1. Export the same 10 reports for the new date range.
2. Drop them in `.raw/google-ads/<new-YYYY-MM>/`.
3. Re-import (Step 2).
4. Re-check the Day 0 gate.
5. Assistant compares this period's metrics against the previous one to write **Reviewed** outcomes on applied actions and propose new ones.

---

## What "deep analysis" looks like once data is in

The assistant will produce, with citations to `.raw/google-ads/...`:

- **Wasted spend** — search terms with $X+ cost and zero conversions, grouped by intent class.
- **Quality Score leaks** — keywords with Low landing-page experience or Low ad relevance, ranked by cost.
- **Match-type drift** — broad/phrase keywords matching irrelevant queries.
- **Schedule waste** — hour/day buckets with cost but no conversions.
- **Geo waste** — user-location rows outside the service area (esp. relevant for ldndecks.com / Northern Virginia).
- **Asset health (RSA)** — counts of Best / Good / Low per ad, plus suggested swaps.
- **PMax asset group breakdown** — by performance label.
- **Auction Insights** — overlap rate trend, top competitors, position-above pressure.
- **Landing page mismatch** — URLs with high CTR + low Conv. rate.
- **Conversion pathology** — duplicates, attribution drift, primary/secondary errors.

Each finding becomes an action file. Each action file becomes (after approval and execution) a decision file.

---

## Hard reminders

- The assistant **does not** control your browser.
- The assistant **does not** mutate Google Ads.
- Every recommendation must cite a source file.
- Every change in Google Ads must have a paired `decisions/` file.
- Tracking gate (Step 3) blocks everything else.

See also: [[Google Ads Export Checklist]] · [[Google Ads Import Commands]] · [[Day 0 Tracking and Privacy Gate - Google Ads]] · [[Manual Google Ads Action Queue Template]] · [[No Live Changes Without Approval]].
