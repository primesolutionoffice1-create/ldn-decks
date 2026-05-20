---
brain_schema: ads-brain.v1
type: source
title: "Google Ads Tracking Settings Research 2026-05-16"
created: "2026-05-16"
updated: "2026-05-16"
platform: google
status: source_confirmed
source_type: official_docs_research
related:
  - "[[day0-blockers]]"
  - "[[Day 0 Closure Execution 2026-05-16]]"
  - "[[day0-smart-bidding-readiness]]"
---

# Google Ads Tracking Settings Research 2026-05-16

Purpose: define the exact Google Ads/GTM settings required to finish Day 0 without guessing. Sources are official Google Ads Help pages checked on 2026-05-16.

## Official source links

- Google Ads Help: Use a transaction ID to minimize duplicate conversions — https://support.google.com/google-ads/answer/6386790?hl=en-EN
- Google Ads Help: Set up enhanced conversions for web using Google Tag Manager — https://support.google.com/google-ads/answer/13262500?hl=en-EN
- Google Ads Help: About primary and secondary conversion actions — https://support.google.com/google-ads/answer/11461796?hl=en-EN
- Google Ads Help: About conversion goals — https://support.google.com/google-ads/answer/10995103?hl=en-EN
- Google Ads Help: About enhanced conversions for leads — https://support.google.com/google-ads/answer/15713840?hl=en-EN
- Google Ads Help: Configure GTM for enhanced conversions for leads — https://support.google.com/google-ads/answer/11347292
- Google Ads Help: About offline conversion imports — https://support.google.com/google-ads/answer/2998031?hl=en-EN
- Google Ads Help: Using Data Manager with enhanced conversions for leads — https://support.google.com/google-ads/answer/15707550?hl=en

## Source-confirmed rules

### 1. Transaction ID / dedup

Google states that if two conversions for the same conversion action have the same transaction ID, Google Ads identifies the second as duplicate and does not count it. Google also warns that IDs must be dynamic, unique per transaction, and must not contain personally identifiable information.

**Required LDN setting:** keep `Google Ads - Form Lead Conversion` using `Transaction ID = {{DLV - event_id}}`. Do not replace it with email, phone, name, static text, or form type.

**Evidence already captured:** `_attachments/day0-evidence/02-gtm-form-lead-transaction-id.png`.

**Still required:** GTM Preview Output proving `transaction_id` equals the `event_id` for the same real submission.

### 2. Enhanced Conversions for web via GTM

Google says Enhanced Conversions sends first-party customer data such as email, name, address, or phone in hashed form, using SHA-256 before sending to Google. Google also says user-provided data collection only begins once the relevant terms are accepted and applicable consent permits it.

**Required LDN setting:** Enhanced Conversions must remain GTM-managed and use the UPD variable, not automatic scraping. The outbound Google Ads conversion request must show only hashed values, never plaintext PII.

**Evidence already captured:** `_attachments/day0-evidence/05-gtm-user-provided-data-tag.png` and `_attachments/day0-evidence/05-gtm-variables-user-defined.png`.

**Still required:** DevTools Network screenshot showing hashed `em`, `ph`, and available name/address fields; no plaintext email/phone/name/zip.

### 3. Primary vs Secondary conversion actions

Google defines Primary conversion actions as those reported in the Conversions column and used for bidding when their standard goal is used. Secondary conversion actions are observation-only and report in All conversions, not bidding, except when included in a custom goal.

**Required LDN setting:** only true business outcomes should be Primary and included in account-level goals. Pre-lead events such as `form_start`, `phone_click`, page views, contacts, or diagnostics should remain Secondary / not included.

**Current LDN evidence:** `_attachments/day0-evidence/06-conversion-actions-inventory.md` shows multiple Primary + Included actions still visible: `Submit lead form`, `Lead form - Submit`, `Qualified Call (Ads) - 60s`, and locked `Calls from Smart Campaign Ads`.

**Still required:** operator-approved cleanup and post-cleanup screenshot.

### 4. Account-default goals

Google recommends account-default goals should represent the conversion goals campaigns should automatically optimize toward. Google notes that when multiple standard goals track different funnel stages, only one should be account-default.

**Required LDN setting:** account-default optimization should not mix lead starts, click proxies, page views, or duplicate lead-form actions with final lead/call outcomes.

**Still required:** inspect account-default goals after conversion-action cleanup; verify only final lead and qualified call outcomes are active for bidding.

### 5. Enhanced Conversions for Leads / offline loop

Google describes Enhanced Conversions for Leads as upgraded offline conversion import using hashed customer data and recommends retaining/importing GCLID when possible. Google supports Data Manager, Google Ads API, and related integrations for import. Offline conversion import is how Google Ads receives what happened after the online lead.

**Required LDN setting:** define a CRM or sheet source of truth with `event_id`, `gclid`, `gbraid`, `wbraid`, lead timestamp, email/phone, lead status, qualified flag, and value/stage. Then create/import a `Qualified Lead` offline conversion path.

**Still required:** owner must choose CRM/sheet source and document the `Qualified Lead` definition.

## Exact Day 0 setting target

### GTM

- `Google Ads - Form Lead Conversion`
  - Trigger: `lead_confirmed - Custom Event`
  - Transaction ID / Order ID: `{{DLV - event_id}}`
  - No trigger on `form_submit`
- `Conversion Linker`
  - Trigger: `All Pages`
- `Google Ads - User Provided Data - Form Lead`
  - Type: Google Ads User-provided Data Event
  - User-provided Data: `{{upd - Form Lead Data}}`
  - Trigger: `lead_confirmed - Custom Event`
- Variables
  - `DLV - event_id` = data layer variable `event_id`
  - Email/phone/name/zip/country DLVs exist and map into UPD variable

### Google Ads conversion actions

Target account-default Primary actions only:

- Website form lead from `lead_confirmed` / final submit success, with Count = One, dedup by transaction/order ID, included in Conversions.
- Qualified call from Ads, if it reflects a meaningful duration threshold. Current evidence: `Qualified Call (Ads) - 60s` is Active, Primary, Count One, Included Yes.

Target Secondary / observation-only:

- `form_start`
- `phone_click`
- GA4 imported form/contact/page events
- Google-hosted lead form action unless intentionally active as a separate acquisition channel
- any Smart Campaign legacy call action that cannot be used for current Search campaign bidding

### Offline conversion path

Minimum viable offline fields:

- `event_id` / order ID
- `gclid` when available
- `gbraid` / `wbraid` when available
- lead timestamp
- conversion timestamp
- lead source/campaign when available
- normalized email and phone for hashed matching
- status: raw lead / qualified / booked / sold / disqualified
- value or stage value

## Smart Bidding verdict

Do not activate or expand Smart Bidding yet. The official-source-confirmed reason is simple: Primary actions feed bidding. Until Primary actions are clean and offline lead quality exists, Google can optimize toward duplicate or low-quality signals.

Current allowed mode: observe, import, diagnose, document.

Current disallowed mode: bid changes, budget changes, keyword expansion, Broad Match expansion, PMax activation, or Smart Bidding scale-up.
