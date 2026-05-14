# Phase 2 — Revenue Feedback Infrastructure

**Status:** Design document. Not yet implemented. Do not deploy until Phase 1A (`FINAL-ATTRIBUTION-SIGNOFF.md`) is signed off AND 5–10 real production leads have flowed cleanly through the Phase 1 stack.

**Scope:** Close the loop between click → form → email → booked job → revenue → Smart Bidding optimization. This is the single highest-leverage system in the entire stack for a $25k+ ticket business with a 2–8 week sales cycle.

**Author:** Architecture reference for Loudoun Decks operators + future engineers. Phase 1 ships the tracking primitives; Phase 2 ships the persistence and revenue layer that turns those primitives into Smart Bidding fuel.

---

## 0. Why Phase 2 is the moat

Phase 1 (tracking) gets Loudoun Decks to parity with sophisticated competitors. Phase 2 is where the **compounding asymmetry** starts:

| Competitor with only Phase 1 | Loudoun Decks after Phase 2 |
|---|---|
| Smart Bidding optimizes on form submissions | Smart Bidding optimizes on **booked jobs × revenue value** |
| All form leads weighted equally — tire-kicker = real buyer | Tire-kicker → "Lost — Just Exploring" → 0 value to Google. Real buyer → "Won — $42,000" → full value uploaded. |
| CPA target reflects cost per form-fill (noise) | CPA target reflects cost per **booked job at target margin** (signal) |
| Lookalike audiences seeded by everyone who filled a form | Lookalike audiences seeded by customers who actually bought $25k+ |
| Cannot tune ad spend toward premium customers | Premium-customer signal compounds into Smart Bidding bias |
| Year-over-year reports oscillate with lead quality | Year-over-year reports stable; revenue per click trends up |

The architecture below is the minimum design that produces this asymmetry without overengineering. Every component has a justification anchored in current Loudoun Decks state (ticket size, sales cycle, team size, technical capacity).

---

## 1. Core architecture — full lifecycle map

```
┌───────────────────────────────────────────────────────────────────────┐
│ STAGE 1: PAID/ORGANIC CLICK                                           │
│ Google/Meta/Microsoft ad → URL with gclid / fbclid / msclkid          │
│ → ldndecks.com city page or service page                              │
│ → click-id-capture script (beforeInteractive, layout.js)              │
│ → writes 90-day SameSite=Lax cookies                                  │
└───────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────────┐
│ STAGE 2: FORM SUBMIT                                                  │
│ ContactForm or ContactHome → useLeadSubmit() hook                     │
│ → reads click IDs from cookies via getClickIds()                      │
│ → generates event_id = crypto.randomUUID()                            │
│ → appends to FormData: click IDs, event_id, source_url                │
│ → trackFormSubmit pushes form_submit to dataLayer                     │
│ → sendContactEmail server action runs                                 │
└───────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────────┐
│ STAGE 3: SERVER-SIDE FAN-OUT (sendEmail.js)                           │
│ ┌──────────────────────────────┬────────────────────────────────────┐ │
│ │ 3A. Nodemailer →             │ 3B. Meta CAPI Lead event           │ │
│ │     office@ldndecks.com      │     → graph.facebook.com           │ │
│ │     (Attribution block with  │     (env-gated; same event_id      │ │
│ │      click IDs in email body)│      for 7-day Pixel dedup)        │ │
│ ├──────────────────────────────┼────────────────────────────────────┤ │
│ │ 3C. [NEW IN PHASE 2]         │ 3D. [NEW IN PHASE 2]               │ │
│ │     POST to webhook endpoint │     Optional: enqueue to           │ │
│ │     /api/webhooks/lead-      │     server-side retry queue        │ │
│ │     ingest                   │     (only if Airtable down)        │ │
│ │     → writes Airtable row    │                                    │ │
│ └──────────────────────────────┴────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────────┐
│ STAGE 4: NAVIGATION TO /thank-you                                     │
│ router.push('/thank-you?eid=<UUID>')                                  │
│ → ThankYouTracking client component mounts                            │
│ → trackLeadConfirmed({eventId})                                       │
│ → sessionStorage anti-replay guard                                    │
│ → push lead_confirmed to dataLayer                                    │
│ → GTM tag fires Google Ads Lead conversion                            │
│   (Transaction ID = event_id; Enhanced Conversions = 6 hashed keys)   │
└───────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────────┐
│ STAGE 5: AIRTABLE LEAD RECORD (created at stage 3C)                   │
│ lead_id (Airtable record ID — auto)                                   │
│ event_id, gclid, gbraid, wbraid, fbclid, msclkid                      │
│ name, email, phone, address fields                                    │
│ landing_page, source/medium/campaign (parsed from utm_*)              │
│ created_at, stage = "New Lead", value_estimate = null                 │
└───────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────────┐
│ STAGE 6: SALES PROCESS (HUMAN-DRIVEN, in Airtable UI)                 │
│ Sales operator updates stage as the deal progresses:                  │
│ New Lead → Qualified → Estimate Scheduled → Estimate Completed →      │
│ Proposal Sent → Won (with revenue) | Lost (with reason)               │
│ Each stage transition writes to Airtable.                             │
└───────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────────┐
│ STAGE 7: OFFLINE CONVERSION UPLOAD                                    │
│ ┌────────────────────────┬──────────────────────────────────────────┐ │
│ │ V1: Manual CSV export  │ V2: Automated via Airtable Automation    │ │
│ │ (weekly Monday)        │ → /api/webhooks/lead-stage-change        │ │
│ │ → Google Ads Offline   │ → builds Google Ads Click Conversions    │ │
│ │   Conversions UI       │   API payload                            │ │
│ │ → upload + verify      │ → POST to Google Ads API                 │ │
│ │ → status logged back   │ → status logged back to Airtable         │ │
│ │ to Airtable            │                                          │ │
│ └────────────────────────┴──────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────────┐
│ STAGE 8: SMART BIDDING LEARNS                                         │
│ Google Ads receives:                                                  │
│ • Conversion name: "Qualified Lead" / "Won — Booked Job"              │
│ • gclid: <from STAGE 5>                                               │
│ • Conversion time: when the stage transitioned                        │
│ • Conversion value: estimated_value or revenue (USD)                  │
│ → Smart Bidding shifts budget toward gclid sources that produce       │
│   high-value Won conversions                                          │
│ → After 30+ Won conversions: switch from Manual to Target CPA         │
│ → After 50+ Won conversions with revenue: switch to Target ROAS       │
└───────────────────────────────────────────────────────────────────────┘
```

**Key property of this architecture:** every stage transition (lead → qualified → won) is reversible without breaking downstream. If a "Won" gets re-classified as "Lost — Buyer Cancelled" 30 days later, the corresponding upload is a conversion adjustment (negative value), not a delete. Google Ads supports this natively.

---

## 2. Required identifiers — generation, persistence, retention, dedup

| Identifier | Generated where | Generated by | Lifetime in system | Dedup strategy |
|---|---|---|---|---|
| `event_id` | Client (browser) at form submit | `crypto.randomUUID()` in `useLeadSubmit.js` | Forever in Airtable + 7 days in Meta + 24h Transaction ID in Google Ads | Used as `transaction_id` on Google Ads conversion + `event_id` on Meta CAPI |
| `gclid` | Google ad click landing | URL param at landing → 90-day cookie | 90-day cookie + forever in Airtable | Primary attribution key for Google Ads offline imports |
| `gbraid` | iOS Google Ads click | URL param → cookie | Same as gclid | Required for iOS attribution post-ATT |
| `wbraid` | Cross-platform Google Ads | URL param → cookie | Same as gclid | Sister to gbraid |
| `fbclid` | Meta ad click | URL param → cookie | 90-day cookie + forever in Airtable | Constructed into `fbc` for Meta CAPI |
| `msclkid` | Microsoft Ads click | URL param → cookie | Same as others | Microsoft Ads Offline Conversion key (Phase 4+) |
| `lead_id` | **Airtable record ID** | Airtable on row insert | Forever — never regenerated | Internal join key; never sent to ad platforms |
| `customer_id` | Optional — manually assigned by sales for repeat customers | Sales operator | Forever | Used to deduplicate same household across multiple leads (resurfacing job → repair → expansion) |
| `job_id` | Generated when stage = "Won" | Airtable formula: `lead_id + sequence` | Forever | Used to map booked jobs back to the originating click in revenue reporting |

### 2.1 Generation point invariants

- **`event_id`**: generated exactly once per submission, in the browser before any network call. Never regenerated server-side. If retry logic re-submits, it MUST reuse the same event_id (the FormData carries it).
- **`lead_id`**: generated by Airtable, never by client or server. The webhook waits for Airtable's response and stores the returned record ID alongside the event_id for cross-referencing.
- **`customer_id` and `job_id`**: never assigned automatically. These are deliberate human assignments to avoid false positives (two people with same address = different customers).

### 2.2 Retention policy

| Identifier | Where retained | How long | Why |
|---|---|---|---|
| Click IDs in cookies | Browser | 90 days | Matches Google Ads default attribution window |
| Click IDs in Airtable rows | Airtable | Indefinite (until row deleted) | Required for offline conversion uploads up to 90 days after click |
| Click IDs in Vercel logs | Vercel | 30 days (default Vercel retention) | Forensic debugging only — not source of truth |
| PII in Airtable | Airtable | 7 years (US tax + statute of limitations on home improvement contracts) | Standard business retention |
| PII in lead-notification emails | Gmail | Indefinite by default — recommend archiving > 1 year old | Operator decision |
| Hashed PII in Google Ads Enhanced Conversions | Google | 30 months (Google policy) | Out of our control |
| Hashed PII in Meta CAPI | Meta | 24 months (Meta policy) | Out of our control |

### 2.3 Dedup invariants

- **Google Ads conversion dedup:** Transaction ID = event_id. Within 24h, two events with the same Transaction ID → one counted conversion. Across days, dedup uses Conversion Linker + gclid match.
- **Meta CAPI dedup:** event_id is the dedup key for 7 days. Server CAPI event + client Pixel event with same event_id → one counted Lead.
- **Airtable dedup:** event_id is unique-constrained. If a retry submits with the same event_id (e.g., network blip caused a double-fire), the second insert is rejected at the webhook layer.
- **Offline conversion upload dedup:** the (gclid + conversion_name + conversion_time) tuple is the dedup key on Google Ads' side. Uploading the same gclid + "Qualified Lead" twice in the same minute will not double-count.

---

## 3. Recommended storage layer

### 3.1 Six-option comparison

| Store | Schema enforcement | API quality | Webhooks/automation | Non-engineer UX | Free tier | Best for |
|---|---|---|---|---|---|---|
| **Airtable** | Yes (typed columns) | REST + webhooks; rate limit 5 req/sec per base | Native automations on row changes | Excellent — spreadsheet-like UI sales already understands | 1,200 rows + 1 GB attachments per base | **RECOMMENDED v1** |
| Notion DB | Loose (text → enforced in formulas only) | REST API; lower throughput | Native automations (basic) | Good — but unfamiliar to most sales teams | Generous | Better for internal wikis than transactional data |
| Google Sheets | None (text everywhere) | Sheets API + Apps Script | Apps Script triggers | Universal but error-prone for shared editing | Free | Last-resort fallback; brittle at scale |
| Supabase | Yes (Postgres) | REST + Realtime + Edge Functions | Database triggers, webhooks via Edge | Engineer-required to administer | 500 MB DB + 50K MAU | **GRADUATE TO v2** when volume > 500 leads/mo |
| HubSpot | Yes (CRM schema) | Robust REST API | Workflows engine | Excellent | Free tier exists but limited contacts | Best for full CRM ops (Phase 4+ when sales team grows) |
| Pipedrive | Yes (pipeline schema) | REST API | Workflow automations | Excellent | $14/seat/mo minimum | Similar to HubSpot; less enterprise-flavored |

### 3.2 Recommendation: Airtable for v1, Supabase migration path for v2

**Why Airtable wins for Loudoun Decks today:**

1. **Sales operator usability.** Loudoun Decks is a contractor business with a small team — the sales operator marking "Won — $42,000" needs a UI that looks like a spreadsheet, not a database. Airtable's grid view is exactly that.

2. **Built-in automations.** "When stage changes to Won → POST to webhook" is a 3-click setup, no code.

3. **Zero-server-infrastructure.** No Postgres to maintain, no backups to configure, no migrations to manage.

4. **Sufficient capacity.** 1,200 free-tier rows = ~2 years of leads at 50 leads/month. Paid tier ($20/mo) lifts to 50,000 rows — enough for 5+ years.

5. **CSV exports are first-class.** Manual fallback (V1 offline conversion uploads) is one click away.

**Why Supabase is the right v2:**

- When lead volume > 500/month, Airtable rate limits become annoying (5 req/sec per base)
- When you want server-side row-level security, Postgres functions, real-time subscriptions
- When you've outgrown Airtable's automation engine and need custom code
- Typical migration trigger: 18-24 months in

**Why not the others:**

- **Google Sheets:** I considered recommending Sheets for the absolute minimum. Dropped it because shared editing introduces row-deletion accidents that are unrecoverable. Airtable's per-row revision history is meaningful for revenue records.
- **HubSpot / Pipedrive:** great products but the cost (and integration complexity) is unjustified at current scale. Adopt when the sales team is 3+ people and lead volume justifies $90+/mo. Phase 4 conversation.
- **Notion DB:** poor fit for transactional volume; better at narrative/document data.

### 3.3 Airtable base structure

One base named **"LDN Decks — Revenue Pipeline"**. Three tables:

**Table 1: Leads** — one row per form submission

| Field | Type | Source | Notes |
|---|---|---|---|
| `lead_id` | Auto record ID | Airtable | Primary key |
| `event_id` | Single line text (unique) | Webhook | Source of truth for cross-platform dedup |
| `created_at` | Created time | Airtable | Auto |
| `first_name` | Single line text | Webhook | From form |
| `last_name` | Single line text | Webhook | From form |
| `email` | Email | Webhook | From form |
| `phone` | Phone | Webhook | From form |
| `city` / `state` / `zip` | Single line text | Webhook | From form (state defaults to "VA") |
| `landing_page` | URL | Webhook | `source_url` from form_submit event |
| `gclid` | Single line text | Webhook | Empty if organic |
| `gbraid` / `wbraid` | Single line text | Webhook | iOS variants |
| `fbclid` | Single line text | Webhook | Empty unless Meta-attributed |
| `msclkid` | Single line text | Webhook | Phase 4 (Microsoft Ads) |
| `utm_source` | Single line text | Parsed from landing_page query | google / meta / direct / referral |
| `utm_medium` | Single line text | Parsed | cpc / organic / social / referral |
| `utm_campaign` | Single line text | Parsed | Campaign name from ad |
| `service_type` | Single select | Parsed from form `service` field | Deck / Screened Porch / Pergola / Patio / Resurfacing |
| `timeline` | Single select | From form | Immediately / 1-3 / 3-6 / Exploring |
| `message` | Long text | From form | Raw inquiry text |
| `form_source` | Single select | From form_type | quote (ContactForm) / homepage (ContactHome) |
| `stage` | Single select | Sales operator (default "New Lead") | See section 4 |
| `estimated_value` | Currency (USD) | Sales operator | Set at "Qualified" |
| `actual_value` | Currency (USD) | Sales operator | Set at "Won" |
| `lost_reason` | Single select | Sales operator | If stage = Lost |
| `notes` | Long text | Sales operator | Free-form |
| `linked_jobs` | Link to Jobs table | Sales operator | Set at "Won" |

**Table 2: Jobs** — one row per booked deck (1:N with Leads — one customer can have multiple jobs over time)

| Field | Type | Notes |
|---|---|---|
| `job_id` | Auto record ID | Primary key |
| `originating_lead` | Link to Leads | The lead that produced this job |
| `contract_signed_at` | Date | When stage → Won |
| `project_value` | Currency | Final contract value |
| `project_status` | Single select | Scheduled / In Progress / Completed / Paid |
| `completion_date` | Date | When status → Completed |
| `paid_at` | Date | When status → Paid |
| `materials_brand` | Single select | Trex / TimberTech / AZEK / Cedar / Other |
| `address_full` | Long text | For project records |

**Table 3: Conversion Uploads** — audit log of every offline conversion uploaded to Google Ads / Meta

| Field | Type | Notes |
|---|---|---|
| `upload_id` | Auto | Primary key |
| `linked_lead` | Link to Leads | Which lead this upload represents |
| `conversion_name` | Single select | Qualified Lead / Estimate Scheduled / Won — Booked Job / Lost (negative adjustment) |
| `conversion_time` | Date+time | When the stage transition happened |
| `conversion_value` | Currency | What was uploaded |
| `gclid_used` | Single line text | Carried from the lead row |
| `platform` | Single select | Google Ads / Meta / Microsoft Ads |
| `upload_method` | Single select | Manual CSV / API |
| `uploaded_at` | Created time | Audit timestamp |
| `uploaded_by` | Single select | Operator name |
| `upload_status` | Single select | Pending / Uploaded / Failed / Reversed |
| `error_detail` | Long text | If status = Failed |

### 3.4 Webhook endpoint design

```
POST /api/webhooks/lead-ingest
  Body: full FormData fields from sendEmail.js
  Behavior:
    1. Validate event_id presence + uniqueness (reject 409 if duplicate)
    2. Parse landing_page query for utm_*
    3. Construct Airtable Leads row payload
    4. POST to Airtable API (uses env: AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_LEADS_TABLE_ID)
    5. Return 200 with { lead_id, event_id }
    6. On Airtable failure: log to Vercel, return 503 (DO NOT throw to caller — fire-and-forget pattern from sendEmail.js)

POST /api/webhooks/lead-stage-change
  Auth: Airtable signed payload (HMAC verification)
  Triggered by: Airtable Automation when Leads.stage changes
  Behavior:
    1. Look up which conversions to fire based on new stage (see section 4 matrix)
    2. For each: build Google Ads Click Conversions API payload + Meta CAPI Lead/Purchase payload
    3. POST to platforms; write result to Conversion Uploads table
    4. Return 200
```

Both endpoints are Next.js Route Handlers under `src/app/api/webhooks/`. Env vars listed in section 9.

---

## 4. Revenue stages — canonical 8 + upload matrix

### 4.1 Stage definitions

| # | Stage | Meaning | Trigger to advance |
|---|---|---|---|
| 1 | **New Lead** | Form submitted; no human contact yet | Webhook creates row |
| 2 | **Qualified** | Sales spoke to lead; budget + timeline confirmed within target ranges | Sales operator sets manually |
| 3 | **Estimate Scheduled** | On-site visit booked on calendar | Sales operator after scheduling |
| 4 | **Estimate Completed** | On-site visit occurred; design discussion done | Sales operator after the visit |
| 5 | **Proposal Sent** | Written quote delivered to customer | Sales operator after sending PDF |
| 6 | **Won** | Customer signed contract; deposit received | Sales operator; **requires `actual_value`** |
| 7 | **Lost** | Customer chose competitor, postponed > 6 months, or unreachable | Sales operator; **requires `lost_reason`** |
| 8 | **Closed Paid** | Project complete, final payment received | Sales operator OR Jobs table state transition |

### 4.2 Upload matrix — which stages feed which platform

| Stage | Google Ads upload | Meta upload | Internal-only |
|---|---|---|---|
| New Lead | Already fires (`lead_confirmed` Google Ads Lead conversion) | Already fires (Meta CAPI Lead event) | — |
| Qualified | **Upload as "Qualified Lead" — $500 default value** | Upload as Lead with higher confidence flag (Meta uses one Lead event but can be re-fired with adjusted value) | — |
| Estimate Scheduled | Upload as "Estimate Scheduled" — $1,000 default value | Optional: upload as InitiateCheckout | — |
| Estimate Completed | (skip — between SQL and proposal) | (skip) | ✓ internal only |
| Proposal Sent | (skip — too far up funnel from booking) | (skip) | ✓ internal only |
| **Won** | **Upload as "Won — Booked Job" with `actual_value` as conversion value** | **Upload as Purchase with `actual_value`** | — |
| Lost | (skip — Google Ads doesn't accept negative-value upload for original lead) | (skip) | ✓ internal only — surface in reports |
| Closed Paid | (already counted as Won; this is internal accounting state) | (same) | ✓ internal only |

### 4.3 Why the value progression (500 → 1,000 → actual)

The default values for Qualified Lead and Estimate Scheduled aren't arbitrary — they're calibrated so Smart Bidding sees an intermediate value signal during the 2-8 week sales cycle:

- Without intermediate values, Smart Bidding only learns from "Won" events that happen weeks after the click. Conversion lag = poor signal.
- With Qualified Lead = $500: ML can start prioritizing clicks within 24-48h that lead to qualified phone calls
- With Estimate Scheduled = $1,000: another mid-cycle signal showing this lead is on a real trajectory
- The actual Won value (avg $22,500) dominates the conversion value column once enough Wons accumulate

After 60 days of operation, review whether the $500 / $1,000 defaults are too high or too low — calibrate to match actual close-rate × actual ticket size:
- If close rate from Qualified is 35% and avg ticket is $24K → true Qualified value = $8,400
- If close rate from Estimate Scheduled is 60% → true Estimate Scheduled value = $14,400

Don't recalibrate before 60 days of data — small samples lie.

---

## 5. Offline conversion strategy

### 5.1 V1 — Manual CSV upload (weeks 1-8 of Phase 2)

**Cadence:** Every Monday morning, 15-30 min.

**Workflow:**

1. Open Airtable → Leads view filtered to `stage IN (Qualified, Estimate Scheduled, Won) AND stage_changed_at > [last upload]`
2. Export to CSV
3. Transform via a small spreadsheet template:
   ```
   Google Click ID, Conversion Name, Conversion Time, Conversion Value, Conversion Currency
   <gclid>, Qualified Lead, 2026-05-12 09:30:00-04:00, 500, USD
   <gclid>, Won — Booked Job, 2026-05-14 14:15:00-04:00, 28000, USD
   ```
4. Google Ads → Tools → Conversions → Uploads → New Upload → upload CSV → Apply
5. Wait for upload status → log result in Airtable Conversion Uploads table

**Why start manual:** zero implementation risk, immediate ROI, sales operator builds intuition for the data before any automation. If something looks weird in the CSV (gclid missing, wrong value, duplicate), it gets caught before going to Google Ads.

### 5.2 V2 — Automated via Airtable Automation + Google Ads API (weeks 9+)

**Trigger:** Airtable Automation on Leads.stage change → POST to `/api/webhooks/lead-stage-change`

**Implementation:**

```js
// src/app/api/webhooks/lead-stage-change/route.js
export async function POST(request) {
  // 1. Verify Airtable HMAC signature
  // 2. Parse new stage + lead record
  // 3. Map stage to conversion(s) per section 4.2 matrix
  // 4. For each conversion:
  //    a. Build payload (gclid, conversion_action_resource_name, conversion_value, ...)
  //    b. Call Google Ads API uploadClickConversions endpoint
  //    c. Write result to Airtable Conversion Uploads table
  // 5. Return 200
}
```

Required env vars (defer until V2):
```
GOOGLE_ADS_DEVELOPER_TOKEN=
GOOGLE_ADS_CUSTOMER_ID=1540741289     # known
GOOGLE_ADS_CLIENT_ID=
GOOGLE_ADS_CLIENT_SECRET=
GOOGLE_ADS_REFRESH_TOKEN=
GOOGLE_ADS_CONVERSION_ACTION_ID_QUALIFIED_LEAD=
GOOGLE_ADS_CONVERSION_ACTION_ID_ESTIMATE_SCHEDULED=
GOOGLE_ADS_CONVERSION_ACTION_ID_WON=
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
AIRTABLE_LEADS_TABLE_ID=
AIRTABLE_CONVERSION_UPLOADS_TABLE_ID=
AIRTABLE_WEBHOOK_SECRET=
```

### 5.3 Hashed customer matching (for non-gclid leads)

Some Won jobs come from leads with NULL gclid (organic, referral, lost cookie). For these, Google Ads supports **Enhanced Conversions for Leads** — match by hashed email/phone instead of gclid.

For Loudoun Decks v2, support both:
- gclid present → upload via Click Conversions API
- gclid null but email + phone present → upload via Enhanced Conversions for Leads API with SHA-256 hashed match keys

This recovers ~15-30% additional Wons that would otherwise be invisible to Google Ads.

### 5.4 Transaction_id strategy

| Conversion | transaction_id field |
|---|---|
| Online: form_submit / lead_confirmed | event_id (UUID) |
| Offline: Qualified Lead upload | `${event_id}_qualified` |
| Offline: Estimate Scheduled upload | `${event_id}_estimate_scheduled` |
| Offline: Won upload | `${event_id}_won` |
| Conversion adjustment (Won → Lost reversal) | `${event_id}_won` (negative value, same ID) |

This naming scheme allows the SAME lead to produce up to 4 conversions across the funnel without colliding, while keeping the join key (event_id) traceable through the whole chain.

### 5.5 Duplicate prevention

Three layers:

1. **Airtable Conversion Uploads table** — query before upload: has this (lead_id, conversion_name) been uploaded successfully in the last 30 days? If yes, skip.
2. **Transaction ID on the platform side** — Google Ads dedupes any conversion with the same transaction_id within its attribution window.
3. **Cron sanity job** (weekly) — compare Airtable Won count vs Google Ads "Won — Booked Job" conversion count for the same week; alert if delta > 5%.

### 5.6 Timezone normalization

All `conversion_time` values uploaded as **ISO 8601 with explicit timezone offset**, anchored to America/New_York (EDT/EST as appropriate):

```
2026-05-14T14:15:00-04:00     (EDT — March–November)
2026-01-08T09:30:00-05:00     (EST — November–March)
```

Airtable stores in UTC internally; the upload transformation step explicitly converts to America/New_York with current DST offset. Don't ship a "naive" timestamp — Google Ads rejects it.

### 5.7 Conversion adjustments (Won → Lost reversal)

Decking contracts can be cancelled within the 3-day rescission period or break later in the build. When a Won becomes Lost:

1. Sales operator changes stage to Lost in Airtable
2. Webhook fires → uploads a **conversion adjustment** to Google Ads with the same transaction_id as the original Won upload, but negative value
3. Google Ads subtracts the value from reporting + Smart Bidding signal

This must be a real adjustment, not a "delete" — Google Ads doesn't support delete of historical conversions. Use the [Conversion Adjustments API endpoint](https://developers.google.com/google-ads/api/docs/conversions/upload-adjustments).

---

## 6. Smart Bidding gate — exact thresholds

Do NOT change bidding strategy until ALL conditions are true for the conversion action you want to optimize toward.

### 6.1 Max Conversions (entry-level Smart Bidding)

| Condition | Threshold | Why |
|---|---|---|
| Total qualified conversions in last 30 days | ≥ **15** | Google's documented minimum for ML signal |
| Attribution confidence (% of conversions with known gclid) | ≥ **80%** | Lower = ML is learning from noise |
| Acceptable duplicate rate (same event_id counted ≥2×) | ≤ **2%** | Higher = dedup is broken; data is poisoning the model |
| Unattributed-lead rate (lead with no gclid AND no organic/referral signal) | ≤ **15%** | Tracking gap is real |
| Days with at least 1 conversion in last 14 | ≥ **7** | Conversions need to be spread, not all in one burst |

### 6.2 Target CPA

| Condition | Threshold | Why |
|---|---|---|
| All Max Conversions conditions above | ✅ | Prerequisite |
| Total qualified conversions in last 30 days | ≥ **30** | Google's documented minimum for tCPA |
| Median time-to-conversion (click → conversion) | ≤ **14 days** | Beyond this, ML can't attribute reliably |
| Conversion value variance (std dev / mean) | ≤ **40%** | Too volatile = ML chases outliers |
| CPL stable for last 2 weeks (week-over-week change) | ≤ **±25%** | Unstable = system isn't in equilibrium |

### 6.3 Target ROAS

| Condition | Threshold | Why |
|---|---|---|
| All Target CPA conditions above | ✅ | Prerequisite |
| Won conversions in last 60 days with revenue values | ≥ **30** | Need real revenue signal, not estimated |
| Median ticket variance (std dev / mean) | ≤ **50%** | Decking ticket varies $12k-$90k; some variance is expected, but extreme variance breaks ROAS targets |
| Average attribution lag (click → Won) | < **70 days** | If most Wons happen at day 90, you need 6 months of data before tROAS works |
| Conversion adjustment rate (Wons reversed to Lost) | ≤ **5%** | Higher = data churn confuses ML |

### 6.4 Acceptable unattributed-lead rate

Per Loudoun Decks audience (NoVA homeowners, gclid-trackable via Chrome+Safari+Edge on desktop/mobile):

- Target: ≤ 15% of total leads with null gclid AND no other attribution signal
- Higher than that → tracking is broken somewhere (Conversion Linker, ITP, browser cookie loss)
- Lower than 5% → ~5% is the natural floor from referrals + truly direct traffic

---

## 7. SEO × Ads flywheel — explicit dynamics

```
       ┌──────────────────────────────────────────────────────────┐
       │                                                          │
       ▼                                                          │
┌──────────────────┐                                              │
│ COST-CONTENT     │  ranks #1 organically for                    │
│ + COMPARISON     │  "composite deck cost northern virginia"     │
│ PAGES            │  "trex vs timbertech vs azek"                │
└──────────────────┘                                              │
       │                                                          │
       │  attracts top-of-funnel research traffic                 │
       ▼                                                          │
┌──────────────────┐                                              │
│ HIGH-INTENT      │  city-page + service-page visitors,          │
│ AUDIENCE         │  90-day cost-content reader segment          │
└──────────────────┘                                              │
       │                                                          │
       │  Customer Match audience built from                      │
       │  past customers + lookalike from this segment            │
       ▼                                                          │
┌──────────────────┐                                              │
│ PAID ADS REACH   │  Google Ads + Meta target NoVA homeowners    │
│ + RETARGETING    │  who match the high-intent profile           │
└──────────────────┘                                              │
       │                                                          │
       │  click ID captured at landing                            │
       │  → form submitted with event_id                          │
       │  → Airtable row created                                  │
       │  → Qualified / Won → offline upload                      │
       ▼                                                          │
┌──────────────────┐                                              │
│ HIGH-TICKET      │  Smart Bidding learns to prefer clicks       │
│ PROJECTS BOOKED  │  from sources/keywords/audiences that        │
│                  │  produce Won conversions with high values    │
└──────────────────┘                                              │
       │                                                          │
       │  customer becomes raving fan;                            │
       │  asks for referral; leaves Google review                 │
       ▼                                                          │
┌──────────────────┐                                              │
│ REVIEW & WORD    │  Google rating climbs from 5.0★ (41) → 5.0★  │
│ OF MOUTH GROWTH  │  (100+) → strongest review signal in NoVA     │
└──────────────────┘                                              │
       │                                                          │
       │  Google's local algorithm + AI Overviews                 │
       │  surface higher-rated businesses more often              │
       ▼                                                          │
┌──────────────────┐                                              │
│ ORGANIC          │  higher rank → more organic traffic →        │
│ AUTHORITY        │  more leads → more reviews → repeat          │
│ COMPOUNDS        │                                              │
└──────────────────┘                                              │
       │                                                          │
       └──────────────────────────────────────────────────────────┘
              (loop completes; cycle time ≈ 60-120 days)
```

**Key dynamic:** the moat builds when the loop completes 3-4 times consecutively. Each completion increases the audience signal quality fed back to Smart Bidding, which increases the marginal value of each ad dollar, which produces more high-ticket Wons, which produce more reviews, which boost organic rank, which feeds more high-intent visitors to the top of the funnel.

**Competitor counter-strategy** (Stoneridge, Deckscapes, etc.):
- They can't replicate the loop without (a) the same infrastructure and (b) 6-12 months of data accumulation
- Even if they install identical infra tomorrow, they'd be 2 cycles behind by the time their Smart Bidding stabilizes
- This is the **6-12 month sustainable competitive advantage** the user asked about

---

## 8. Operational governance

### 8.1 Source of truth

| Domain | Source of truth | Read-replicas |
|---|---|---|
| Lead records | Airtable Leads table | Google Ads + Meta receive uploads but never edit |
| Booked job records | Airtable Jobs table | Accounting/CRM (if added later) reads from here |
| Conversion uploads | Airtable Conversion Uploads table | Google Ads / Meta consume uploads; can verify but Airtable is authoritative |
| Click ID cookies | Browser sessionStorage / cookies | Server reads via FormData; cookies are ephemeral |
| Customer PII (email, phone) | Airtable Leads table | Gmail inbox keeps email copies; treat email as backup |

### 8.2 Backup / export cadence

| Asset | Cadence | Method |
|---|---|---|
| Airtable base | Weekly | Airtable's built-in CSV export (manual for v1; automated via Airtable Automation for v2). Save to a private cloud folder (e.g., Google Drive). |
| Lead-notification email archive | Monthly | Gmail's built-in archive (kept indefinitely; treat as recovery option) |
| Vercel deployment logs | N/A | Vercel retains 30 days by default; if longer retention needed, pipe to a log aggregator (LogTail, Datadog) — defer to Phase 4 |
| GTM container | After every published version | GTM's "Versions" tab keeps history forever; no separate backup needed |
| Ads conversion configs | Quarterly | Screenshot of Google Ads → Tools → Conversions → all conversion actions, settings panel |

### 8.3 Rollback strategy

| Failure mode | Detection | Rollback |
|---|---|---|
| Webhook endpoint broken; new leads not reaching Airtable | Vercel logs show 5xx; sales operator notices no new rows in Airtable | Revert webhook code commit; redeploy. Leads in this window are recoverable from Gmail inbox + manual Airtable entry. |
| Offline conversion upload corrupts data | Google Ads diagnostic warns of dup conversions OR conversion count anomaly | Use Google Ads Conversion Adjustments API to reverse the bad uploads; investigate the transformation step before re-uploading |
| Airtable base accidentally deleted | Sales operator OR API reports 404 on writes | Airtable has 7-day "Trash" for paid plans; restore from there. For free plan: restore from weekly CSV export |
| GTM container misconfigured (Wrong tag fires) | Live conversion count drops/spikes ≥ 25% in one day | GTM → Versions → set previous version as Latest → Publish. Instant. |
| Smart Bidding produces bad outcomes (CPL spike) | Sales reports unusual lead quality OR ROAS drops | Switch bidding strategy back to Manual CPC in Google Ads UI. Smart Bidding state is recoverable — once data normalizes, switch back. |

### 8.4 Edit authority — who can change what

| Asset | Who can edit | Approval required for changes |
|---|---|---|
| Lead row stage (New Lead → Won) | Sales operator | None (routine ops) |
| Lead row revenue value | Sales operator | None (routine ops) |
| Airtable schema (add/remove fields) | Operator with admin access | Engineer review for downstream impact |
| Webhook code (`/api/webhooks/...`) | Engineer | Code review; deploy to preview before production |
| Conversion action settings in Google Ads | Designated PPC owner | Annual review; document changes in Conversion Uploads audit table |
| GTM container | Designated GTM owner | Workspace + Preview + Publish; no direct edits to live container |
| Smart Bidding strategy (Manual → tCPA → tROAS) | Designated PPC owner | Section 6 thresholds must ALL pass before each tier upgrade |

### 8.5 GTM publish governance

Every GTM publish must:

1. Be developed in a Workspace (not Live)
2. Have a workspace description that summarizes intent
3. Pass Preview Mode validation against the QA-TEST-PLAN scenarios
4. Be published with a Version Name that references the workspace
5. Have the previous published version captured in screenshots (for rollback reference)

### 8.6 Ads conversion action governance

- New conversion actions: must be added in a documented PR-style proposal (Airtable row OR doc commit), not ad hoc in the Ads UI
- Existing conversion actions: settings (Count, Window, Attribution) reviewed quarterly
- Conversion action name format: `<stage>-<source>` (e.g., "Won-Form", "Won-Phone")

---

## 9. Security / privacy

### 9.1 PII handling

| Surface | PII state | Notes |
|---|---|---|
| Browser dataLayer | Plaintext | Visible to other GTM tags. Required for Enhanced Conversions (hashed by GTM tag before transmit). Risk: 3rd-party scripts on the same page COULD read this — keep 3rd-party JS surface minimal. |
| Lead-notification email | Plaintext | Standard business practice; sent over TLS to Gmail |
| Airtable rows | Plaintext (encrypted at rest by Airtable) | Standard SaaS DB; per Airtable SOC 2 Type 2 |
| Google Ads conversion API | SHA-256 hashed match keys | Google never receives plaintext |
| Meta CAPI | SHA-256 hashed match keys | Same |
| Webhook payloads (Vercel server) | Plaintext in transit, TLS-encrypted | Vercel logs may retain partial payloads; verify Vercel log redaction |

### 9.2 Retention

Per section 2.2. Key business rule: **7 years for Airtable PII** (US contractor records).

### 9.3 Hashing

Per section 5.3. All match keys SHA-256 + lowercased + trimmed before transmit to Google/Meta. Use the platform's native hashing in their tag/SDK rather than rolling our own — see ENHANCED-CONVERSIONS-VERIFICATION.md appendix A.

### 9.4 Consent

US-only audience. Consent Mode v2 defaults to granted for non-EU traffic. If audience expands to EU/UK/CH, a CMP banner must be wired in before turning on EC for that traffic.

### 9.5 Least-privilege access

| Surface | Access policy |
|---|---|
| Airtable base | Owner = primary PPC operator. Editors = sales operators (limited to Leads table edits). No public sharing. |
| Vercel project | Env vars accessible only to deployment role. No "Preview" exposure of production secrets. |
| Google Ads account | Owner = primary PPC operator. Manager Admin only on a separate account, not main credentials. |
| Meta Business Manager | Same pattern. |
| Google Cloud project (for Ads API in V2) | Service account with only `googleads.adsapi.readonly` + write scopes for the specific conversion actions used; not the wide-open `googleads.adsapi.full_access` scope |

### 9.6 Export controls

- Airtable CSV exports → save to private Google Drive folder accessible to owner + 1 backup operator
- Conversion CSVs uploaded to Google Ads → keep the original CSV in Airtable's Conversion Uploads attachment column for audit
- Never email CSVs with PII outside the team; if needed, share via Drive link with TTL

---

## 10. Minimum viable revenue feedback stack for Loudoun Decks

Stripped to what must exist for the loop to close on day 1. Anything not on this list = Phase 3 or later.

### 10.1 Tools

| Tool | Cost | Purpose |
|---|---|---|
| **Airtable** (free tier) | $0 | Lead datastore — 1,200 rows is ~24 months at current scale |
| **Vercel** (existing) | $0 incremental | Hosts the webhook endpoints |
| **Google Ads** (existing) | $0 incremental | Receives offline conversion uploads |
| **Existing Gmail SMTP** | $0 | Lead-notification emails (already wired) |
| **Optional:** Airtable paid plan if rows exceed 1,200 | $20/mo | After ~24 months |

**Total NEW operating cost: $0/mo for first 24 months.**

### 10.2 Implementation hours (v1, manual offline uploads)

| Task | Hours |
|---|---|
| Create Airtable base with 3 tables + views | 2-3 |
| Build `/api/webhooks/lead-ingest` Next.js route handler | 3-4 |
| Wire sendEmail.js to POST to webhook after email send | 0.5 |
| Add env vars (AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_LEADS_TABLE_ID, AIRTABLE_WEBHOOK_SECRET) to Vercel | 0.25 |
| Test webhook end-to-end with 3 test submissions | 1 |
| Document sales operator workflow (stage transitions, value entry) in Airtable interface notes | 1 |
| Create Conversion Uploads CSV template + transformation spreadsheet | 1 |
| Train sales operator (15-min walkthrough) | 0.5 |
| **TOTAL v1** | **~10 hours** |

### 10.3 Dependencies (must exist before starting Phase 2)

| Dependency | Status as of 2026-05-12 |
|---|---|
| `feat/ads-tracking-instrumentation` merged to main | ⏳ PR ready, click pending |
| FINAL-ATTRIBUTION-SIGNOFF.md gate passed | ⏳ Awaiting GTM operator verification |
| 5-10 real production leads flowed cleanly through Phase 1 | ⏳ Awaiting first 30 days post-merge |
| Phase 1 GTM rewires complete (HIGH-1, HIGH-2, HIGH-3) | ⏳ Awaiting GTM operator |
| Sales operator identified + briefed on revenue stage workflow | ⏳ Operator decision |

### 10.4 What stays manual initially (acceptable)

- ✅ Offline conversion uploads — manual CSV every Monday for first 8 weeks (V1)
- ✅ Stage transitions — sales operator clicks dropdown in Airtable UI; no automation
- ✅ Revenue value entry — sales operator types the dollar amount at "Won"
- ✅ Lost reason tagging — single-select dropdown
- ✅ Weekly CSV backup of Airtable base
- ✅ Quarterly conversion action config review (screenshot to Drive)

### 10.5 What must be automated first (non-negotiable)

- ❌ Webhook from sendEmail.js to Airtable — humans cannot reliably enter lead data from emails without missing event_id / gclid. **This MUST be automated from Day 1 of Phase 2.**
- ❌ Airtable's unique constraint on event_id — prevents duplicate rows from retry/race conditions
- ❌ Vercel env var injection — never paste secrets into code
- ❌ GTM transaction_id dedup — verified in Phase 1A, must remain active

### 10.6 Graduation triggers — when v1 → v2

Move to V2 (automated offline conversion uploads via Google Ads API) when:

- Manual CSV upload becomes a > 60 min/week task (typically when lead volume > 80/week)
- OR an operator misses two consecutive Monday uploads (signal that the manual cadence isn't sustainable)
- OR Google Ads Smart Bidding shows Win signal lag > 14 days (means the weekly cadence is leaving money on the table)

### 10.7 The 10-hour outcome

After ~10 hours of v1 implementation + 30-60 days of operation:

- 100% of paid leads have a gclid recorded with their lead row
- 100% of Wons are uploaded to Google Ads as offline conversions with revenue values
- Google Ads conversion count + Won count in Airtable agree within 5%
- Smart Bidding has ≥30 Won conversions with revenue values → ready for Target ROAS gate

That's the minimum revenue feedback loop. Everything else in this document is amplification on top of that core.

---

## Decisions deferred to Phase 3+

The following are NOT part of Phase 2 — flagged here so they don't sneak in:

- **Google Ads API integration** for automated uploads (deferred to V2 / Phase 3)
- **Meta server-side Lead/Purchase event uploads from Airtable** (deferred — current Meta CAPI from sendEmail.js handles the Lead event; Purchase events at Won stage can be added in Phase 3)
- **Microsoft Ads offline conversion uploads** (deferred — Phase 4 with msclkid-driven Microsoft campaigns)
- **CRM migration to HubSpot/Salesforce** (deferred to Phase 5+ when team scales beyond 2-3 sales operators)
- **Predictive lead scoring** (deferred — needs ≥1 year of Won/Lost data with structured outcome labels)
- **Multi-touch attribution beyond last-click** (deferred — currently use Google Ads data-driven attribution which is sufficient; revisit if cross-channel mix gets complex)

---

## Sign-off (pre-implementation)

```
Architecture reviewed by:               __________________________
Date:                                   __________________________

[ ] All 8 stage definitions accepted as canonical
[ ] Airtable selected as v1 storage (no objection)
[ ] Conversion upload matrix (section 4.2) approved
[ ] Smart Bidding thresholds (section 6) approved
[ ] Sales operator identified and briefed
[ ] Webhook endpoint design (section 3.4) approved for implementation
[ ] Env var inventory (section 5.2) reviewed; secrets to be provisioned
[ ] Dependencies (section 10.3) confirmed not blocking start

Implementation kickoff target:          __________________________
First V1 manual CSV upload target:      __________________________
```

**No implementation work begins until this sign-off is filled and dated.**
