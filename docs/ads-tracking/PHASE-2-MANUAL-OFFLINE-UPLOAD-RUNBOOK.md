# Phase 2 Manual Offline Upload Runbook

**Purpose:** weekly operator procedure for Phase 2 V1. This is the manual control period before Google Ads API automation is allowed.

**Cadence:** every Monday morning.

**Expected time:** 15-30 minutes once the Airtable views exist.

**Hard rule:** do not upload raw form submissions as the primary optimization signal. Upload revenue-stage events only.

---

## Preconditions

Before running this procedure:

| Check | Required state |
|---|---|
| Phase 1A sign-off | Complete |
| Phase 1B live validation | 5-10 clean production leads observed |
| Airtable Leads table | Exists and receives website leads automatically |
| Airtable Conversion Uploads table | Exists |
| Google Ads conversion actions | Created for `Qualified Lead`, `Estimate Scheduled`, `Contract Signed`, `Closed Paid` |
| Google Ads conversion action `Count` | One |
| Timezone | America/New_York |

If the Google Ads conversion actions do not exist, stop. Do not invent names in the CSV.

---

## Conversion actions

Use these names exactly:

| Conversion Name | When to upload | Value |
|---|---|---:|
| `Qualified Lead` | Lead is a real homeowner in service area with relevant project | 500 |
| `Estimate Scheduled` | Sales has booked an estimate visit / consultation | 1000 |
| `Contract Signed` | Customer signs agreement | Actual contract value |
| `Closed Paid` | Final payment received | Final paid amount |

For Smart Bidding, `Contract Signed` is the first revenue-quality milestone. `Closed Paid` is the accounting-quality milestone.

---

## Airtable views needed

Create these saved views:

| View | Filter |
|---|---|
| `Upload — Qualified Lead` | `stage = Qualified` AND no successful `Qualified Lead` upload exists |
| `Upload — Estimate Scheduled` | `stage = Estimate Scheduled` OR later AND no successful `Estimate Scheduled` upload exists |
| `Upload — Contract Signed` | `stage = Won` OR `Closed Paid` AND `closed_revenue_value` is not empty AND no successful `Contract Signed` upload exists |
| `Upload — Closed Paid` | `stage = Closed Paid` AND final paid amount exists AND no successful `Closed Paid` upload exists |
| `Rejected Uploads` | Conversion Uploads where `upload_status = Rejected` |

If Airtable cannot express the "no successful upload exists" filter cleanly in V1, use manual inspection of the linked Conversion Uploads rows. It is clunky but acceptable for the first 4 uploads.

---

## Monday procedure

### 1. Open Google Ads conversion import

Google Ads → Goals → Conversions → Uploads → Uploads → New upload → Google Sheets / CSV.

Use CSV for V1. Do not connect Google Sheets yet.

### 2. Build the CSV

Start from:

```txt
docs/ads-tracking/templates/google-ads-offline-conversions-template.csv
```

For each upload view, create rows using this shape:

```csv
Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency,Order ID
```

Rules:

- `Google Click ID` = `gclid` when present.
- If only `gbraid` / `wbraid` exists, use the Google Ads-supported column shape for enhanced iOS identifiers only after confirming the current Google import template. Do not guess.
- If no click ID exists, skip manual CSV upload for now; hold those leads for Enhanced Conversions for Leads later.
- `Conversion Time` must include timezone offset, e.g. `2026-05-13 10:30:00-0400`.
- `Order ID` = `{event_id}::{conversion_name}`.
- `Conversion Value` = 500 / 1000 / contract value / final paid value depending on event.
- Currency always `USD`.

### 3. Upload preview first

In Google Ads:

1. Upload CSV.
2. Click **Preview** if available.
3. Review warnings before applying.
4. If preview has row-level errors, do not apply. Fix the CSV first.

### 4. Apply upload

Only apply when preview has no blocking errors.

Record immediately in Airtable Conversion Uploads:

| Field | Value |
|---|---|
| `lead` | Linked lead |
| `conversion_name` | Uploaded conversion name |
| `transaction_id` | `{event_id}::{conversion_name}` |
| `platform` | Google Ads |
| `click_id_type` | `gclid` |
| `click_id_value` | The gclid |
| `conversion_time` | Timestamp uploaded |
| `conversion_value` | Uploaded value |
| `upload_method` | Manual CSV |
| `upload_status` | Uploaded |
| `uploaded_at` | Current timestamp |

Attach or link the CSV file in the upload audit record if available.

### 5. Check diagnostics

Wait for Google Ads to process. Then update `upload_status`:

| Google result | Airtable status |
|---|---|
| Accepted / imported | Accepted |
| Rejected | Rejected |
| Partially imported | Accepted for successful rows; Rejected rows get separate audit rows or error notes |

Paste row-level errors into `error_message`.

---

## Common rejection causes

| Error | Likely cause | Fix |
|---|---|---|
| Click ID not found | Click older than window, typo, or not a Google click | Verify gclid copied exactly; if still rejected, mark as Rejected and leave note |
| Conversion action not found | Name mismatch | Use exact Google Ads conversion action name |
| Conversion time before click time | Wrong timestamp / timezone | Use stage_changed_at in America/New_York with offset |
| Duplicate order ID | Already uploaded | Mark duplicate as Adjusted or skip; do not re-upload |
| Value format invalid | Currency symbols or commas included | Use plain number like `42000`, not `$42,000` |
| Currency invalid | Missing or not `USD` | Set `USD` |

---

## Duplicate prevention

Before uploading a row:

1. Look at linked Conversion Uploads for the lead.
2. If a row exists where:
   - same `conversion_name`
   - same `transaction_id`
   - `upload_status` is Uploaded or Accepted
3. Skip it.

Never change `event_id` to force an upload through. If a duplicate is found, the system is working.

---

## Weekly reconciliation

After diagnostics settle:

| Metric | Target |
|---|---|
| Airtable Wons uploaded as `Contract Signed` | 100% |
| Google Ads accepted `Contract Signed` rows | Within 5% of Airtable uploaded rows |
| Rejected rows | < 5% |
| Duplicate rows | 0 |
| Rows missing `gclid` | Track separately; do not force upload |

If rejected rows exceed 5%, stop future uploads until root cause is known.

---

## What to do with no-click-ID Wons

Do not discard them. Mark them:

```txt
click_id_type = enhanced_lead
upload_status = Pending
```

These become candidates for Enhanced Conversions for Leads in Phase 3, where email/phone hashed matching can recover some of the lost attribution.

---

## End-of-run checklist

```
Date: ______________________
Operator: __________________

[ ] Airtable upload views reviewed
[ ] CSV built from current Airtable data
[ ] Preview completed before apply
[ ] Upload applied
[ ] Conversion Uploads rows created
[ ] Diagnostics checked
[ ] Accepted/rejected status updated
[ ] CSV archived
[ ] Rejected rows triaged
[ ] No Smart Bidding changes made
```

Phase 2 V1 is allowed to be boring. Boring means the revenue signal is trustworthy.

