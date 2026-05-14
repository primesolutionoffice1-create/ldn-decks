# Phase 2 Implementation Checklist — Revenue Feedback V1

**Purpose:** turn `PHASE-2-REVENUE-FEEDBACK-INFRASTRUCTURE.md` into an execution checklist. This is **not** permission to start Phase 2. Start only after Phase 1A is signed off and Phase 1B has 5-10 clean production leads.

**Default stack:** Airtable + Vercel Route Handler + manual Google Ads offline conversion CSV uploads.

**Do not add Google Ads API automation yet.** Manual CSV upload is the control period.

---

## Entry gate

Do not start this checklist until every row is true:

| Gate | Required evidence |
|---|---|
| `FINAL-ATTRIBUTION-SIGNOFF.md` signed | Completed Section A + Section B |
| 5-10 production leads validated | Real lead IDs, not test submissions |
| `lead_confirmed` firing once per lead | GTM Preview + Google Ads diagnostics |
| `event_id` dedup verified | Reload/back-forward/new-tab matrix passed |
| Enhanced Conversions verified | Google Ads tag sends hashed user data only |
| No Meta CAPI production activation | Meta remains deferred |
| Sales owner identified | One person responsible for Airtable stage hygiene |

If any gate is false, stop. Phase 2 is a revenue database, not a bandage for unstable tracking.

---

## Day 0 — Create Airtable base

Create base: **LDN Ads Revenue Feedback**

Template reference: [`templates/airtable-leads-schema.csv`](templates/airtable-leads-schema.csv).

### Table 1 — Leads

Required fields:

| Field | Type | Required | Notes |
|---|---|---:|---|
| `lead_id` | Formula or Record ID | yes | Airtable record ID is canonical |
| `event_id` | Single line text | yes | Unique; reject duplicates in webhook |
| `created_at` | Created time | yes | Airtable native field |
| `stage` | Single select | yes | New Lead, Qualified, Estimate Scheduled, Estimate Completed, Proposal Sent, Won, Lost, Closed Paid |
| `stage_changed_at` | Last modified time | yes | Watch only `stage` |
| `gclid` | Single line text | no | Primary Google click key |
| `gbraid` | Single line text | no | iOS Google click key |
| `wbraid` | Single line text | no | iOS web-to-app click key |
| `fbclid` | Single line text | no | Meta click key |
| `msclkid` | Single line text | no | Microsoft click key |
| `landing_page` | URL | yes | Page where form was submitted |
| `source` | Single line text | no | From UTMs if present |
| `medium` | Single line text | no | From UTMs if present |
| `campaign` | Single line text | no | From UTMs if present |
| `keyword` | Single line text | no | Usually unavailable unless tracking template adds it |
| `first_name` | Single line text | yes | PII |
| `last_name` | Single line text | no | PII |
| `email` | Email | yes | PII |
| `phone` | Phone | yes | PII |
| `city` | Single line text | no | Used for geo-profitability analysis |
| `zip` | Single line text | no | Used for geo-profitability analysis |
| `service_type` | Single select | yes | Deck, Composite Deck, Resurfacing, Repair, Screened Porch, Patio, Pergola, Outdoor Living, Unknown |
| `estimated_project_value` | Currency | no | Early estimate; not final revenue |
| `closed_revenue_value` | Currency | no | Required when stage = Won or Closed Paid |
| `lost_reason` | Single select | no | Price, Timing, No Response, Wrong Service, Competitor, Financing, Other |
| `notes` | Long text | no | Sales context |

Create views:

- **New Leads — Today**
- **Needs Qualification**
- **Estimates Scheduled**
- **Proposals Open**
- **Won — Needs Upload**
- **Lost — Analysis**
- **Missing Click IDs**
- **Missing Revenue Value**

### Table 2 — Jobs

Keep this sparse in V1.

| Field | Type | Notes |
|---|---|---|
| `job_id` | Formula | `JOB-{linked lead_id}` or manual job number |
| `lead` | Linked record | Link to Leads |
| `job_stage` | Single select | Won, In Production, Completed, Paid |
| `contract_value` | Currency | Must match or explain difference from Leads.closed_revenue_value |
| `final_paid_amount` | Currency | Use when Closed Paid differs from contract |
| `project_city` | Single line text | Copied from lead if empty |
| `project_type` | Single select | Same taxonomy as service_type |

### Table 3 — Conversion Uploads

| Field | Type | Notes |
|---|---|---|
| `upload_id` | Autonumber | Audit key |
| `lead` | Linked record | Required |
| `conversion_name` | Single select | Qualified Lead, Estimate Scheduled, Contract Signed, Closed Paid |
| `transaction_id` | Formula/text | `{event_id}::{conversion_name}` |
| `platform` | Single select | Google Ads, Meta, Microsoft |
| `click_id_type` | Single select | gclid, gbraid, wbraid, enhanced_lead, fbclid, msclkid |
| `click_id_value` | Single line text | The uploaded click or hashed-match basis |
| `conversion_time` | Date/time | America/New_York formatting at export |
| `conversion_value` | Currency | 500 / 1000 / contract value / paid value |
| `upload_method` | Single select | Manual CSV, API |
| `upload_status` | Single select | Pending, Uploaded, Accepted, Rejected, Adjusted |
| `error_message` | Long text | Paste Google Ads import error here |
| `uploaded_at` | Date/time | When file/API was sent |

---

## Day 1 — Build lead ingestion webhook

Route:

```txt
POST /api/webhooks/lead-ingest
```

Contract reference: [`PHASE-2-WEBHOOK-CONTRACT.md`](PHASE-2-WEBHOOK-CONTRACT.md).

Behavior:

1. Accept lead payload from `sendEmail.js` after successful email send.
2. Validate required fields: `event_id`, email or phone, `landing_page`.
3. Check Airtable for existing `event_id`.
4. If found, return `200 { duplicate: true }`.
5. If not found, create Leads row.
6. Return `200 { lead_id, event_id }`.
7. If Airtable fails, log error and return gracefully. Do **not** block the user form; Gmail remains backup.

Required env vars:

```bash
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
AIRTABLE_LEADS_TABLE_ID=
AIRTABLE_WEBHOOK_SECRET=
```

Do not put Airtable credentials in client code or GTM.

---

## Day 1 — Wire `sendEmail.js`

After successful email send and before returning `{ success: true }`, fire-and-forget:

```js
sendLeadIngestEvent(leadPayload).catch(...)
```

Payload must include:

- `event_id`
- click IDs
- landing page
- form type
- name/email/phone
- city/state/zip
- service type
- message
- submitted timestamp

This must behave like Meta CAPI: failure logs but does not break form UX.

---

## Day 2 — Test with fake leads

Create 3 test submissions:

| Test | URL params | Expected Airtable |
|---|---|---|
| Google normal | `?gclid=TEST_GCLID_PHASE2` | Lead row with gclid |
| Google iOS | `?gbraid=TEST_GBRAID_PHASE2` | Lead row with gbraid |
| No click ID | no params | Lead row, click IDs empty, source = direct/unknown |

For each:

- Email arrives.
- Airtable row arrives.
- `event_id` matches dataLayer.
- `/thank-you?eid=<event_id>` matches Airtable row.
- Duplicate resubmission with same event_id does not create a second row.

---

## Week 1 — Manual revenue workflow

Sales operator updates stage daily:

Sales SOP: [`PHASE-2-SALES-OPERATOR-SOP.md`](PHASE-2-SALES-OPERATOR-SOP.md).

1. New Lead → Qualified
2. Qualified → Estimate Scheduled
3. Estimate Scheduled → Estimate Completed
4. Estimate Completed → Proposal Sent
5. Proposal Sent → Won or Lost
6. Won → Closed Paid when money collected

Rules:

- `closed_revenue_value` is required at Won.
- `lost_reason` is required at Lost.
- Do not delete rows. Mark spam as Lost → Wrong Service / Spam.
- Keep notes short and operational.

---

## Week 2 — First Google Ads offline CSV

Export from Airtable view: **Won — Needs Upload**.

Template reference: [`templates/google-ads-offline-conversions-template.csv`](templates/google-ads-offline-conversions-template.csv).

Operator runbook: [`PHASE-2-MANUAL-OFFLINE-UPLOAD-RUNBOOK.md`](PHASE-2-MANUAL-OFFLINE-UPLOAD-RUNBOOK.md).

Minimum Google Ads CSV columns:

```csv
Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency
```

For Wons with `gclid`:

```txt
Google Click ID = gclid
Conversion Name = Contract Signed
Conversion Time = stage_changed_at in America/New_York
Conversion Value = closed_revenue_value
Conversion Currency = USD
```

After upload:

1. Create row in Conversion Uploads.
2. Set `upload_status = Uploaded`.
3. Wait for Google Ads diagnostics.
4. Update to Accepted or Rejected.
5. Save original CSV in private Drive or Airtable attachment.

---

## Week 4 — Phase 2 health check

Phase 2 is healthy when:

| Check | Target |
|---|---|
| Lead rows created for form submissions | ≥ 95% |
| Leads with click ID when paid traffic source exists | ≥ 80% |
| Duplicate event_id rows | 0 |
| Won rows with closed revenue value | 100% |
| Upload errors | < 5% |
| Airtable Won count vs Google Ads accepted Contract Signed count | within 5% |

If this table fails, do not move to Phase 3.

---

## What not to do in Phase 2

- Do not enable tROAS.
- Do not enable Max Conversions based on raw form fills.
- Do not automate Google Ads API uploads before 4 successful manual CSV uploads.
- Do not activate Meta Pixel/CAPI production.
- Do not replace Airtable with HubSpot/Salesforce.
- Do not let sales edit click IDs, event IDs, or upload audit fields.

Phase 2 is not glamorous. That is the point. It makes the expensive decisions boring.
