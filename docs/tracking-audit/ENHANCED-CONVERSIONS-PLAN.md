# Enhanced Conversions Plan — Loudoun Decks

How to fully turn on Google Ads Enhanced Conversions + Offline Conversion Imports — the two highest-ROI tracking features for a premium home-services account that runs a long sales cycle.

---

## Why this matters more than typical SEO/SEM advice

For a $25k+ deck builder:

1. **The sales cycle is 2–8 weeks.** Most users who convert "today" started clicking ads weeks ago. Standard click-conversion tracking attributes them to whichever last-click happened — often direct or organic. **Without Enhanced Conversions, ~30–40% of paid-driven leads will look unpaid.**

2. **Lead quality varies 10x.** A "form submit" can be a tire-kicker or a $75k composite estate. Smart Bidding optimizing toward raw form submissions is optimizing toward noise. **Without Offline Conversion Imports, Google has no way to learn which leads are actually valuable.**

3. **Phone calls dominate.** Mobile-first home-services buyers call rather than form-fill. **Without proper call conversion tracking, half the funnel is invisible.**

Enhanced Conversions + Offline Imports + proper call tracking is the difference between a tCPA strategy that finds $25k jobs and one that finds tire-kickers in apartment buildings.

---

## Current state — what's already in place

### ✅ Foundation that's already done correctly

| Feature | Status | File |
|---|---|---|
| Click ID capture (gclid/gbraid/wbraid) | ✅ Working | [layout.js:62-64](../../src/app/layout.js#L62-L64) |
| Cookie persistence | ✅ 90-day max-age | Same |
| Server forwards click IDs to email | ✅ Working for both lead forms | [sendEmail.js:42-51](../../src/server/sendEmail.js#L42-L51) |
| Shared `event_id` for dedup | ✅ Working for both lead forms | [useLeadSubmit.js](../../src/hooks/useLeadSubmit.js) |
| Lead-quality form signals | ✅ `budget_range`, `material_interest`, `hoa_permit_status` pushed to dataLayer | [tracking.js](../../src/lib/tracking.js) |
| Email + phone reach dataLayer | ✅ Pushed plaintext (must be hashed in GTM) | [tracking.js:25-26](../../src/lib/tracking.js#L25-L26) |
| Meta CAPI server-side with hashed PII | ✅ Working | [metaCapi.js](../../src/server/metaCapi.js) |
| Thank-you noindex (blocks bot conversions) | ✅ | [thank-you/page.js:14](../../src/app/thank-you/page.js#L14) |

### ❌ What's missing to fully unlock Enhanced Conversions

1. **GTM Enhanced Conversions toggle** — unverified; must be ON in the Google Ads Lead tag
2. **Offline Conversion Import pipeline** — no CRM, no upload schedule, no qualified-lead definition
3. **Call tracking** — no Google forwarding numbers, no website call conversion tag
4. **Customer Match** — no audience uploads from past customers (suppression + lookalike seed)

---

## Three layers of Enhanced Conversions (in priority order)

```
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 1: Enhanced Conversions for Web                           │
│ ─────────────────────────────                                   │
│ What: Hash email/phone client-side, attach to the standard      │
│       Google Ads conversion event. Google matches the hash      │
│       against logged-in Google accounts → recovers              │
│       cross-device + post-ITP attribution.                      │
│                                                                 │
│ Effort: 30 minutes in GTM. Data already in dataLayer.           │
│ Lift: +5 to +15% reported conversions immediately.              │
│ Required: Already-firing Google Ads Lead conversion + GTM tag.  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 2: Offline Conversion Imports                             │
│ ─────────────────────────────                                   │
│ What: When a lead becomes "Qualified" (sales contact confirms   │
│       budget + timeline), upload the gclid + qualification      │
│       timestamp back to Google Ads as a "Qualified Lead"        │
│       conversion. Smart Bidding learns to find more like them.  │
│                                                                 │
│ Effort: 1 week. Needs a CRM or sheet, upload script, cadence.   │
│ Lift: 30–50% reduction in cost per qualified lead within 60d.   │
│ Required: gclid captured at form submit (✅ for ContactForm,    │
│           ❌ for ContactHome), CRM with gclid field, weekly     │
│           Google Ads conversion upload via API or CSV.          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 3: Call Tracking                                          │
│ ─────────────────────────────                                   │
│ What: Replace on-page phone number with Google Ads forwarding   │
│       number for paid clicks. Count calls >60s as conversions.  │
│       For organic, optionally integrate CallRail or similar.    │
│                                                                 │
│ Effort: 1 day for Google Ads forwarding numbers.                │
│ Lift: Recover the 45% of leads currently invisible (untracked   │
│       tel: CTAs across 40+ pages).                              │
│ Required: Google Ads "Call from website" conversion action +    │
│           dynamic number insertion JS snippet.                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Layer 1: Enhanced Conversions for Web

### What Google needs

For each conversion fired in Google Ads, attach hashed user data:

- `email_address` — SHA-256(lowercase trimmed email)
- `phone_number` — SHA-256(E.164 format, e.g., +15716557207)
- `address.first_name` — SHA-256(lowercase first name)
- `address.last_name` — SHA-256(lowercase last name)
- `address.postal_code` — SHA-256(zip)
- `address.country` — SHA-256(lowercase country, e.g., "us")

The good news: **GTM's Google Ads Conversion tag template can hash automatically** if you map raw values from dataLayer. You don't need to hash in JS.

### Current dataLayer state — what we provide

The `form_submit` event from ContactForm already pushes:

```js
{
  event: 'form_submit',
  email: <plaintext>,     // ← raw, GTM will hash
  phone: <plaintext>,     // ← raw, GTM will hash
  // ...
}
```

Missing pieces:
- first name (available in form, not pushed to dataLayer)
- last name (same)
- zip (same)
- country (constant 'US')

### Action items for Layer 1

#### A. Extend trackFormSubmit to push name + zip

```diff
// tracking.js

-export function trackFormSubmit({ email, phone, formType = 'quote', clickIds = {}, eventId } = {}) {
+export function trackFormSubmit({ email, phone, firstName, lastName, zip, formType = 'quote', clickIds = {}, eventId } = {}) {
   if (typeof window === 'undefined') return;
   push({
     event: 'form_submit',
     event_id: eventId || null,
     form_type: formType,
     email,
     phone,
+    first_name: firstName || null,
+    last_name: lastName || null,
+    zip: zip || null,
+    country: 'US',
     gclid: clickIds.gclid || null,
     // ...
   });
 }
```

#### B. Pass name + zip from ContactForm

```diff
// ContactForm.jsx

 const handleSubmit = async (e) => {
   // ...
   const email = formData.get('email') || '';
   const phone = formData.get('phone') || '';
+  const firstName = formData.get('firstName') || '';
+  const lastName = formData.get('lastName') || '';
+  const zip = formData.get('zip') || '';
   // ...
-  trackFormSubmit({ email, phone, formType: 'quote', clickIds, eventId });
+  trackFormSubmit({ email, phone, firstName, lastName, zip, formType: 'quote', clickIds, eventId });
 };
```

ContactHome now uses the same shared `useLeadSubmit()` pipeline, including
click IDs, UTMs, `source_url`, and `event_id`.

#### C. GTM configuration

In the GTM container:

1. **Variables — create User-Provided Data variables:**
   - `UPD - email` → DataLayer Variable `email`
   - `UPD - phone` → DataLayer Variable `phone`
   - `UPD - first_name` → DataLayer Variable `first_name`
   - `UPD - last_name` → DataLayer Variable `last_name`
   - `UPD - zip` → DataLayer Variable `zip`
   - `UPD - country` → DataLayer Variable `country` (constant "US" fallback)

2. **Tag — Google Ads Conversion Linker:** make sure this exists and fires on All Pages.

3. **Tag — Google Ads Lead conversion:**
   - Conversion ID + Label from Google Ads conversion action
   - Conversion Value: pass a dynamic value if you have one, otherwise leave blank
   - Order ID: `{{DLV - event_id}}` ← dedup
   - **User-Provided Data: ENABLE**
     - Email: `{{UPD - email}}`
     - Phone Number: `{{UPD - phone}}`
     - Address > First Name: `{{UPD - first_name}}`
     - Address > Last Name: `{{UPD - last_name}}`
     - Address > Postal Code: `{{UPD - zip}}`
     - Address > Country: `{{UPD - country}}`
   - Trigger: Custom Event = `lead_confirmed`

4. **Verify in Google Ads UI:**
   - Tools → Conversions → click into "Lead" → status should say "Recording conversions"
   - Diagnostics tab → "Enhanced Conversions" should show "Active" with a match rate %
   - Initial match rate should be 40–60%; tune over 2 weeks toward 70%+

---

## Layer 2: Offline Conversion Imports

### The qualified-lead definition

For Loudoun Decks, recommend the following lead classification system:

| Tier | Criteria | Google Ads conversion |
|---|---|---|
| **Tier 1 — Form Fill** | Form submitted, gclid present | `Form Fill` (Primary OFF; observe only) |
| **Tier 2 — Contacted** | Sales rep made successful outbound contact within 48h | `Contacted Lead` (Primary OFF) |
| **Tier 3 — Qualified Lead** | Budget ≥ $25k confirmed + timeline ≤ 6 months | `Qualified Lead` (**Primary ON**) |
| **Tier 4 — Booked Consultation** | In-home design consult scheduled | `Consultation Booked` (Primary ON) |
| **Tier 5 — Closed** | Contract signed, deposit received | `Closed Won` ($ value = contract value, Primary ON for ROAS bidding) |

Smart Bidding optimizes most effectively when it's optimizing toward `Qualified Lead` (Tier 3) — enough volume to learn from (10-30/month) AND high enough quality that you actually want more of them.

### Pipeline architecture

```
┌─────────────────────┐
│ Form submission     │ ← gclid + event_id + form fields captured
│ ContactForm/Home    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Server action       │ ← email to sales, Meta CAPI fire, today
│ sendContactEmail    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐    ┌──────────────────────────────┐
│ CRM ingestion       │←───│ MISSING: no CRM today        │
│ (lead_id + gclid)   │    │ Sales tracks in inbox        │
└──────────┬──────────┘    └──────────────────────────────┘
           │
           ▼
┌─────────────────────┐
│ Sales qualifies     │
│ → status change in  │
│   CRM with timestamp│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Daily/weekly script │
│ exports qualified   │ → upload to Google Ads conversion API
│ leads with gclid    │   as "Qualified Lead" + conversion_time
└─────────────────────┘
```

### The piece that's actually missing: a CRM

Currently, leads land in `office@ldndecks.com` and the sales team works them in the email thread. **For Offline Conversion Imports to function, every lead needs a tracked record with gclid + status field.**

Three options, ordered by effort:

#### Option A: Cheapest (Google Sheet + Zapier)

- Lead form → Zapier webhook (in addition to email)
- Zapier appends row to Google Sheet with all form fields + gclid + timestamp
- Sales team updates a `status` column manually as leads progress
- A daily Apps Script reads rows where `status = 'Qualified'` and `uploaded_at = null`, hits Google Ads API to upload conversion, sets `uploaded_at`

**Setup:** half a day. Cost: $20/mo Zapier + free Sheets.

#### Option B: HubSpot Free + native Google Ads integration

- HubSpot has a free CRM tier (sufficient for <100 contacts/mo)
- Native Google Ads integration auto-uploads qualified-stage conversions
- Form submissions can be wired via HubSpot Forms or webhook

**Setup:** 1 day. Cost: free up to volume threshold.

#### Option C: Pipedrive / Close / Followup CRM

- $30–80/mo for proper CRM with mobile app
- Direct Google Ads conversion sync
- Better fit for $25k+ sales cycles than HubSpot

**Setup:** 2–3 days for sales team training. Cost: $30-80/mo.

**Recommendation:** Option A for fastest validation (proves the pipeline works in 1 week), then migrate to Option C once volume justifies it.

### Google Ads conversion action setup

1. Tools → Conversions → +New conversion action → Import → CRM / files / others
2. Choose "Track conversions from clicks" (gclid-based)
3. Category: **Qualified Lead**
4. Value: leave blank for now (can be set per-lead via upload payload later)
5. Count: One
6. Click-through window: 90 days (matches gclid cookie lifetime)
7. View-through: don't include (low quality for this signal)
8. Attribution: **Data-driven**
9. Include in "Conversions" column: **YES** (this becomes a primary optimization signal)

Then create matching `Closed Won` action with monetary value. Use that one for tROAS bidding once Closed Won volume is high enough (~30+ per month).

---

## Layer 3: Call Tracking

### Three different call sources, each needs its own conversion action

| Source | Mechanism | Effort |
|---|---|---|
| **Calls from ads** | Google Ads call asset (Google forwarding number on SERP) | 15 min |
| **Calls from website** | Google forwarding number swap on the site (JS snippet) | 1 hour |
| **Calls from organic / GBP** | CallRail or similar third-party (optional) | 1 day |

### A. Calls from ads (free, easy, do today)

1. In each Search campaign, add a **Call asset** (formerly Call extension)
2. Phone: `+15716557207`
3. Country: US
4. Operating hours: business hours only (or "Show call asset only during business hours")
5. **Use a Google forwarding number**: YES — this gives Google call analytics
6. Conversion action: create "Call from Ads" → count calls >60s as conversion
7. Mark as Primary conversion goal (Tier 3 equivalent)

### B. Calls from website (medium effort, high value)

This is the big one — upgrades tracked phone-click intent into qualified paid-call attribution through Google's website call forwarding.

1. **Google Ads → Tools → Conversions → +New → Phone calls → "Calls to a phone number on your website"**
2. Conversion name: `Phone Call from Website`
3. Phone number: `+15716557207`
4. Call length threshold: 60s
5. Count: One
6. Click-through window: 30 days
7. Mark as Primary conversion goal

Google generates a JS snippet that dynamically replaces the on-page phone number with a Google forwarding number for paid traffic. Add it via GTM:

- New HTML tag with the snippet code
- Trigger: All Pages

Then paid visitors who see the Google forwarding number can produce call conversion data without additional site-code changes — Google handles the number swap and the conversion fire.

This is the highest-ROI tracking change you can make. **It alone may shift the appearance of Google Ads ROAS by 50%+** since the bulk of paid-driven calls become visible.

### C. Calls from organic (optional, Tier 2)

If you want to attribute calls from organic / GBP / direct: CallRail at $45/mo provides number swapping per traffic source. Worth it once paid attribution is solid and you want to compare channels.

---

## Customer Match (bonus layer)

Upload past customers as a Customer Match audience:

1. Build a CSV of past customers: email, phone, first name, last name, zip
2. Hash with SHA-256 + lowercase (Google Ads UI can do this for you)
3. Upload as Audience → Customer List → "Customer Match"

Use cases:

- **Exclude existing customers** from prospecting campaigns (saves spend bidding on people who already chose you)
- **Suppress current leads** from remarketing once they convert
- **Lookalike seed** (Similar Audiences) for prospecting — Google finds users similar to your past buyers

For a 5-year-old deck business with 500+ past customers, this audience is gold for prospecting.

---

## Implementation order

```
Day 1: Layer 1 (Enhanced Conversions for Web)
├─ 1h: Code changes to push name + zip in dataLayer
├─ 30m: GTM variable creation + tag config
└─ 30m: Verify in Google Ads diagnostics

Week 1: Layer 3 (Call Tracking)
├─ 30m: Create call assets in each campaign
├─ 1h: Create "Phone Call from Website" conversion action
├─ 1h: Add Google's call snippet to GTM, deploy
└─ Wait: 2-3 days to see calls accumulate

Week 2: Layer 2 (Offline Imports — quick path via Option A)
├─ 2h: Add Zapier webhook to form submission (parallel to email)
├─ 1h: Build Google Sheet template with status column
├─ 2h: Write Apps Script to upload to Google Ads
├─ 30m: Create "Qualified Lead" conversion action
└─ Ongoing: sales team marks status as leads progress

Week 4-8: Smart Bidding migration
├─ Wait for 30+ Qualified Leads to accumulate
├─ Switch Search campaigns from Max Clicks / Manual CPC to:
│   • Maximize Conversions (early)
│   • → Target CPA (after 50 Qualified Leads)
│   • → Target ROAS (after 50+ Closed Won at value)
└─ Monitor for first 2 weeks; CPL typically drops 20-40%

Month 3+: Customer Match
├─ Export past customers from QuickBooks / records
├─ Upload to Audience Manager
└─ Apply as exclusion to all prospecting campaigns
```

---

## Sign-off checklist

Before flipping the Smart Bidding switch:

- [ ] Enhanced Conversions match rate > 60% in diagnostics
- [ ] Call from Ads conversion firing (test by calling from your phone after clicking an ad)
- [ ] Call from Website conversion firing (test by visiting site via paid click, clicking phone CTA, calling)
- [ ] At least 30 historical Qualified Leads uploaded via Offline Import
- [ ] Conversion action settings: Data-driven attribution, "Don't allow duplicate" ON
- [ ] GTM Preview Mode confirms dedup via transaction_id

When all five are checked, the account is ready for tCPA. Until then, stay on Maximize Conversions (or Manual CPC if testing).
