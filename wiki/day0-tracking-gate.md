---
brain_schema: ads-brain.v1
type: gate
platform: google
title: "Day 0 Tracking Gate (Grounded)"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: partial
blocks: optimization
sources:
  - "docs/tracking-audit/TRACKING-AUDIT.md"
  - "docs/tracking-audit/FINAL-ATTRIBUTION-SIGNOFF.md"
  - "docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md"
  - "git: c9cefd8, 8e0ef30, 5f86dce, 2774d7f, dca4820, 3cf7454"
---

# Day 0 Tracking Gate — Grounded

This page replaces the operator checklist in [[Day 0 Tracking and Privacy Gate - Google Ads]] with a **source-grounded** readiness snapshot. Every row is evaluated from the current code state on the `fix/paid-search-sxo-p1` branch (which carries the merged Phase 1 ads-tracking commits originally landed via PRs #1, #2, #3, #8, #10) and the audit docs under `docs/tracking-audit/` and `docs/ads-tracking/` of the `ldn-decks-next` repo.

> **Repo branch note**: the tracking audit references `feat/ads-tracking-instrumentation` as the work branch. The Phase 1 commits (`c9cefd8` → `dca4820`) are present on the current working branch `fix/paid-search-sxo-p1` and visible in `git log -30`. Code-layer claims below reflect commits actually merged.

## Status legend

- **VERIFIED** — code or repo doc proves the claim. No remaining doubt.
- **PARTIAL** — code layer satisfied; GTM / Ads UI / CRM half pending.
- **BLOCKED** — no resolution evidence; explicit blocker on the path to PASS.
- **UNKNOWN** — not determinable from code or repo docs (lives in an external account).
- **NOT IMPLEMENTED** — doesn't exist anywhere yet.

## Gate rows

### Click-ID capture (gclid / gbraid / wbraid / fbclid / msclkid)

- **Status:** VERIFIED
- **Evidence:** `src/app/layout.js:62-64` — inline `beforeInteractive` script writes 5 click-ID cookies with 90-day TTL, `SameSite=Lax`, `path=/`. `src/lib/clickIds.js` provides SSR-safe reader. `docs/tracking-audit/TRACKING-AUDIT.md` "What is correct" §1-2.
- **Risk:** LOW
- **Dependency:** none
- **Next action:** none — keep as baseline.
- **Owner type:** code (done)

### gclid / gbraid / wbraid persistence (90-day window vs. Ads conversion window)

- **Status:** PARTIAL
- **Evidence:** Cookie TTL is 90 days (`layout.js:63`). Google Ads conversion-action click window is **UNKNOWN** until the repo conversion action inventory (`docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md` §1.1) is filled. Recommended target: 90-day click / no view (matches cookie TTL).
- **Risk:** MED
- **Dependency:** Ads UI inventory (B4.1 in `FINAL-ATTRIBUTION-SIGNOFF.md`).
- **Next action:** operator fills Section 1.1 of `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md` and aligns Lead click window to 90d.
- **Owner type:** Ads UI

### fbclid persistence

- **Status:** VERIFIED (cookie capture); PARTIAL (server hand-off)
- **Evidence:** Captured at `layout.js:62-64`, forwarded to server via `useLeadSubmit.js:22-25`, used to construct `fbc` in `src/server/metaCapi.js:62-65`.
- **Risk:** LOW (capture); MED (CAPI activation pending — see §Meta CAPI readiness).
- **Dependency:** Meta CAPI env vars + EMQ verification.
- **Next action:** none on code; gate Meta CAPI activation behind §Meta CAPI readiness below.
- **Owner type:** code (done) / Ads UI (pending)

### event_id generation + dedup

- **Status:** VERIFIED (code); BLOCKED (GTM mapping unverified)
- **Evidence:** `src/hooks/useLeadSubmit.js:32-35` — `crypto.randomUUID()` with `${Date.now()}-${Math.random()...}` fallback (never null). Same UUID flows into: dataLayer `form_submit.event_id`, URL `/thank-you?eid=`, dataLayer `lead_confirmed.event_id`, server FormData `event_id`, Meta CAPI body `event_id`. Audit confirmation: `TRACKING-AUDIT.md` §A2.
- **Risk:** CRITICAL until GTM mapping (HIGH-1 / B1.2) is verified — without `transaction_id={{DLV - event_id}}` in the Google Ads Lead tag, every form fill double-counts.
- **Dependency:** B1.2 in `docs/tracking-audit/FINAL-ATTRIBUTION-SIGNOFF.md`; GTM Preview run per `GTM-VALIDATION-REPORT.md §1`.
- **Next action:** export GTM container JSON; verify Lead tag has `transaction_id = {{DLV - event_id}}` and Conversion Linker fires All Pages.
- **Owner type:** GTM

### lead_confirmed architecture

- **Status:** VERIFIED
- **Evidence:** `src/lib/tracking.js:91-111` — `trackLeadConfirmed` is the authoritative conversion event; fires only on `/thank-you` mount, which is only reachable after `sendContactEmail` returns `success: true` (see `useLeadSubmit.js:61-78`). Robots noindex on `/thank-you` (`TRACKING-AUDIT.md` "What is correct" §6).
- **Risk:** LOW (code); risk shifts to GTM mapping — see §event_id dedup row.
- **Dependency:** GTM Lead tag must trigger on `lead_confirmed`, NOT `form_submit` (B1.1).
- **Next action:** verify GTM Lead trigger.
- **Owner type:** code (done) / GTM (pending)

### Thank-you flow integrity

- **Status:** VERIFIED
- **Evidence:** `/thank-you` is noindex, gated by successful `sendContactEmail`, fires `lead_confirmed` exactly once per `event_id` per sessionStorage scope. `src/components/ThankYouTracking.jsx` reads `eid` from URL query and forwards to `trackLeadConfirmed`.
- **Risk:** LOW
- **Dependency:** none on code side. GA4 SPA page_view depends on GTM History Change trigger (HIGH-2 / B2.2) — UNKNOWN.
- **Next action:** verify GTM History Change trigger and GA4 SPA page_view tag (B2.x).
- **Owner type:** GTM

### Anti-replay protection (sessionStorage)

- **Status:** VERIFIED
- **Evidence:** `src/lib/tracking.js:91-104` — sessionStorage key `lead_fired_${eventId}` blocks duplicate `lead_confirmed` push on `/thank-you` reload / back-forward. `recordDedupHit()` increments a dev-only counter for visibility. Safe degradation if sessionStorage unavailable (Safari private mode): falls through to GTM `transaction_id` dedup. Commit `dca4820` / PR #10.
- **Risk:** LOW
- **Dependency:** none
- **Next action:** none.
- **Owner type:** code (done)

### Honeypot spam filtering

- **Status:** VERIFIED
- **Evidence:** `src/server/sendEmail.js:16-23` — server checks `company_website` FormData field; if populated, returns `{ success: true, skipped: true }` and short-circuits before emailing, before Meta CAPI fires, and (via `useLeadSubmit.js:57-59`) before client tracking and `/thank-you` navigation. Both ContactForm and ContactHome render the hidden field (commit `2774d7f` / PR #8). No reCAPTCHA / Turnstile yet, but the honeypot closes the audit's HIGH-5 finding.
- **Risk:** LOW (basic bots); MED (sophisticated form-spam services that skip honeypots will still get through — secondary defense recommended later).
- **Dependency:** none
- **Next action:** monitor lead quality post-launch; consider Cloudflare Turnstile as a P2 add if spam survives.
- **Owner type:** code (done)

### Consent Mode sequencing

- **Status:** VERIFIED
- **Evidence:** `src/app/layout.js:67-75` — consent defaults run `beforeInteractive`; GTM container script runs `afterInteractive` (`layout.js:77-89`). EU/UK dead-branch dropped (commit `5f86dce` / PR #3). US-only audience documented inline.
- **Risk:** LOW for current US-only audience. Documented limitation: if a CMP/banner is added later, the region-scoped denied defaults + `consent.update` callback must be restored.
- **Dependency:** none today; future CMP work is out of scope for Day 0.
- **Next action:** none.
- **Owner type:** code (done)

### Phone click instrumentation

- **Status:** VERIFIED (event coverage); BLOCKED (signal quality)
- **Evidence:** `src/components/CallLink.jsx` is a tracked wrapper; swept across 53 files via PR #2 (commit `8e0ef30`). 2 files excluded pending SEO branch merge — noted in audit. Hardcoded number replaced by `BUSINESS_PHONE` const.
- **Risk:** MED — `phone_click` is a vanity event ("click ≠ call"); using it as a primary Smart Bidding signal will optimize toward tire-kickers. Per `TRACKING-AUDIT.md` HIGH-4 + `ADS-CONVERSION-INTEGRITY.md §3`.
- **Dependency:** B4 in `FINAL-ATTRIBUTION-SIGNOFF.md` — `phone_click` must be demoted from primary in Google Ads.
- **Next action:** in Ads UI, demote `phone_click` to secondary (Include in 'Conversions' = No). Replace with Google call asset + 60s minimum call duration as the primary phone conversion.
- **Owner type:** Ads UI

### Enhanced Conversions readiness

- **Status:** PARTIAL
- **Evidence:** Code provides the required dataLayer fields (`email`, `phone`, `first_name`, `last_name`, `zip`, `country`) in `src/lib/tracking.js:37-53`. PII flows plaintext into dataLayer; GTM's Google Ads tag template **must** hash client-side before the conversion request leaves the browser. Verification runbook: `docs/tracking-audit/ENHANCED-CONVERSIONS-VERIFICATION.md`.
- **Risk:** HIGH if hashing isn't enabled — plaintext PII to Google Ads violates ToS (account suspension risk). `TRACKING-AUDIT.md` HIGH-3.
- **Dependency:** B3 in `FINAL-ATTRIBUTION-SIGNOFF.md` — DLV variables created, UPD - Lead Form Data variable mapped, User-Provided Data toggle ON, Network-tab hash verification.
- **Next action:** operator runs `ENHANCED-CONVERSIONS-VERIFICATION.md` end to end and confirms B3.4 (no-plaintext check) passes for em / ph / fn / ln / pc.
- **Owner type:** GTM + Ads UI

### Meta CAPI readiness

- **Status:** PARTIAL (code-complete, not activated)
- **Evidence:** `src/server/metaCapi.js` — Meta Graph v18.0 POST, SHA-256 hashed PII (em / ph / fn / ln / ct / st / zp), fbc constructed from fbclid, fire-and-forget. Env-gated: no-ops without `META_PIXEL_ID` + `META_CAPI_ACCESS_TOKEN`. Setup guide: `docs/ads-tracking/ENV-SETUP.md`.
- **Risk:** LOW today (no-op); MED on activation if event_id parity isn't proven in test events.
- **Dependency:** B5 in `FINAL-ATTRIBUTION-SIGNOFF.md` — env vars, test event visible in Events Manager, EMQ score recorded.
- **Next action:** obtain `META_PIXEL_ID` + `META_CAPI_ACCESS_TOKEN`, set `META_CAPI_TEST_EVENT_CODE`, fire one test submission, verify event_id parity between any client Pixel and the server CAPI hit.
- **Owner type:** Ads UI + deploy (env vars)

### Offline conversion readiness

- **Status:** PARTIAL (data layer ready, pipeline NOT IMPLEMENTED)
- **Evidence:** Lead emails carry gclid / gbraid / wbraid / fbclid / msclkid in an attribution block (`src/server/sendEmail.js:46-67`). Click IDs in inbox are operator-uploadable to Google Ads via Conversions → Upload Conversions. There is **no automated CRM → Google Ads pipeline**; no scheduled upload script exists in the repo.
- **Risk:** HIGH — Smart Bidding cannot optimize on "Qualified Lead" or "Closed Won" without offline imports. Until at least manual uploads happen weekly, Smart Bidding learns only on raw form fills.
- **Dependency:** owner exports lead-to-status mapping from email/CRM (TBD which CRM); operator builds the gclid + conversion-time + value CSV and uploads to Google Ads.
- **Next action:** P2 work — define the manual upload SOP for at least Qualified Lead before any tCPA / tROAS bid switch.
- **Owner type:** CRM + Ads UI

### CRM / storage gap

- **Status:** BLOCKED (no CRM identified in repo)
- **Evidence:** Leads land via `nodemailer` SMTP to `EMAIL_TO || EMAIL_USER` (`src/server/sendEmail.js:70`). No HubSpot / Salesforce / Pipedrive / sheet sync visible in the repo. Click IDs live in an HTML email body — manual extraction only.
- **Risk:** HIGH — without a CRM, "Qualified Lead" and "Closed Won" labels never get attached to a gclid. Offline imports are theoretically possible but laborious.
- **Dependency:** owner names the source of truth for lead status (inbox? sheet? CRM?).
- **Next action:** ask owner — even a Google Sheet that sales updates with "Qualified" / "Closed" status would unblock manual offline imports.
- **Owner type:** CRM

### GET vs POST form semantics

- **Status:** VERIFIED
- **Evidence:** Both forms submit via React Server Action (`sendContactEmail` in `src/server/sendEmail.js`) invoked from the client-side `useLeadSubmit` hook (POST under the hood; no query-string leakage of PII). The honeypot drop is server-side. `/thank-you?eid=...` is a SPA `router.push`, not a form action GET.
- **Risk:** LOW
- **Dependency:** none
- **Next action:** none.
- **Owner type:** code (done)

### Smart Bidding safety

- **Status:** BLOCKED
- **Evidence:** Smart Bidding (Max Conversions / tCPA / tROAS) is gated by every row above plus a clean 7–14 day window of de-duped conversion data. Audit verdict (`TRACKING-AUDIT.md` line 11): "DO NOT change bid strategies, smart-bidding signals, or conversion-based audiences yet." Audit estimates **40–60% of true conversion volume is currently miscounted, attributed wrong, or invisible** in the pre-fix state — and current state is "code-layer ready, GTM/Ads UI unverified".
- **Risk:** CRITICAL (account-budget-burning if bidding switched on noisy data).
- **Dependency:** see [[day0-smart-bidding-readiness]].
- **Next action:** stay on Manual CPC / Max Clicks until B1–B4 PASS in `FINAL-ATTRIBUTION-SIGNOFF.md`.
- **Owner type:** Ads UI

### GTM dependency gaps

- **Status:** BLOCKED
- **Evidence:** Code can guarantee dataLayer contents and event ordering. Code **cannot** verify:
  - Google Ads Lead tag trigger is `lead_confirmed` (B1.1)
  - `transaction_id = {{DLV - event_id}}` mapping (B1.2)
  - Conversion Linker fires All Pages (B1.3)
  - History Change trigger for SPA page_view (B2.2)
  - GA4 SPA page_view tag wiring (B2.3)
  - Enhanced Conversions hashing enabled per-tag (B3.3)
  - "Don't allow duplicate conversions" toggle on the Lead conversion action
- **Risk:** CRITICAL — any one missing causes either double-counting or invisible conversions.
- **Dependency:** GTM container export + Preview Mode walk per `GTM-VALIDATION-REPORT.md`.
- **Next action:** operator runs `GTM-VALIDATION-REPORT.md` and `ENHANCED-CONVERSIONS-VERIFICATION.md` end to end; pastes container version + screenshots into `_attachments/` in this vault.
- **Owner type:** GTM

### Deployment readiness

- **Status:** VERIFIED (code build); PARTIAL (env vars on hosting)
- **Evidence:** Build integrity confirmed in `FINAL-ATTRIBUTION-SIGNOFF.md §A1` — `npm run build` exits 0, 235 static pages, +<2KB gzipped. No new third-party deps. Deploy runbook: `docs/ads-tracking/DEPLOY-CHECKLIST.md`. Env list: `docs/ads-tracking/ENV-SETUP.md`. `npm run lint` has a **pre-existing** ESLint v9 config gap unrelated to Phase 1.
- **Risk:** LOW
- **Dependency:** Vercel / hosting env vars: `EMAIL_USER`, `EMAIL_PASS`, optional `EMAIL_TO`, optional `META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`, `META_CAPI_TEST_EVENT_CODE`.
- **Next action:** confirm prod env vars match `ENV-SETUP.md` before any cutover.
- **Owner type:** deploy

### Rollback readiness

- **Status:** VERIFIED
- **Evidence:** Atomic Phase 1 commits — `c9cefd8` / `8e0ef30` / `5f86dce` / `2774d7f` / `dca4820` are independently revertable (`FINAL-ATTRIBUTION-SIGNOFF.md §A6`). GTM-side rollback: 5-tier matrix in `docs/ads-tracking/ROLLBACK-PLAN.md`.
- **Risk:** LOW
- **Dependency:** none
- **Next action:** none.
- **Owner type:** code (done)

## Summary scoreboard

| Status | Count | Rows |
|---|---|---|
| VERIFIED | 8 | click-id capture, fbclid (code), lead_confirmed (code), thank-you flow, anti-replay, honeypot, consent mode, GET/POST, rollback |
| PARTIAL | 6 | gclid persistence (cookie ✓ / window ?), Enhanced Conversions, Meta CAPI, offline conversion, deployment env, phone click (event ✓ / signal ?) |
| BLOCKED | 4 | event_id dedup (GTM), Smart Bidding safety, GTM mapping gaps, CRM / storage |
| UNKNOWN | 0 | — |
| NOT IMPLEMENTED | 0 | — (offline-conversion pipeline is NOT IMPLEMENTED but rolled into the PARTIAL row) |

> Gate-wide verdict: **PARTIAL — code layer green; GTM + Ads UI + CRM half remains open.** Do not move to optimization.

## What CSV imports will unlock next

CSV exports per [[Google Ads Export Checklist]] dropped into `.raw/google-ads/2026-05/` will let the importer:

1. **Populate the conversion action inventory** (`ADS-CONVERSION-INTEGRITY.md §1.1`) — proves what conversion actions exist, their count/window/attribution settings, and which are primary. Closes the row "gclid persistence vs conversion window".
2. **Detect duplicate-fire patterns** — if total conversion count >> form_submit count >> lead_confirmed count, GTM dedup is missing (B1).
3. **Detect phone-click contamination** — if `phone_click` conversions outweigh form leads, demote (B4).
4. **Detect untracked campaign / ad-group spend** — search-terms report + campaign export show which campaigns Google has been spending on without a working conversion signal.
5. **Set baselines for negative-keyword candidate queue** — search-terms report drives [[Negative Keyword Candidate Queue]].

CSV exports will **not** unlock: GTM container audit, EC hashing verification, Meta CAPI test events, CRM / offline pipeline. Those still require account access.

## Minimum viable signal quality (before Smart Bidding)

A campaign is "Smart-Bidding-eligible" only when all of the following hold:

- [ ] Google Ads Lead conversion action is set to trigger on `lead_confirmed` (not `form_submit`).
- [ ] Lead action has `transaction_id = {{DLV - event_id}}` mapped.
- [ ] "Don't allow duplicate conversions" is ON.
- [ ] Click window = 90 days; view window = off.
- [ ] Attribution = Data-driven (or Position-based as fallback until volume).
- [ ] Enhanced Conversions enabled with hashed em / ph / fn / ln / pc verified in DevTools Network tab.
- [ ] `phone_click` is **NOT** in the primary conversions column.
- [ ] Conversion Linker fires All Pages.
- [ ] At least one offline-conversion test upload has succeeded (manual CSV with one real gclid + Qualified Lead label).
- [ ] 7 consecutive days of clean conversion data with no duplicate-flag warnings in Diagnostics.

Until every checkbox above is true: Manual CPC or Max Clicks only.

## Ready for Ads Brain synthesis?

**No.**

Synthesis (negatives, bid adjustments, budget moves, structure recommendations) requires:

1. CSV exports landing in `.raw/google-ads/2026-05/` (still empty per `wiki/hot.md`).
2. Day 0 gate moved from PARTIAL to PASS — at minimum B1 + B4 closed in `FINAL-ATTRIBUTION-SIGNOFF.md`.
3. A confirmed CRM / lead-status source so offline imports can be planned.

Until then the Ads Brain stays in **observe + advise** mode: no recommendation may carry a "scale" or "change bid" action.

## Related

- [[Day 0 Tracking and Privacy Gate]] — generic flow checklist (this page is the grounded version)
- [[Day 0 Tracking and Privacy Gate - Google Ads]] — operator checklist (Sections 1-10)
- [[day0-attribution-readiness]] — survivability across browser scenarios + dedup matrix
- [[day0-smart-bidding-readiness]] — bid-strategy guardrails until gate closes
- [[day0-blockers]] — the ordered list of what's actually blocking optimization
- [[Tracking and Attribution Risk Register]] — risk-register feed
- [[End-to-End Google Ads Workflow]] — overall sequence
