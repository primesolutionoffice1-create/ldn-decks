---
brain_schema: ads-brain.v1
type: gate
platform: google
title: "Day 0 Blockers"
created: "2026-05-12"
updated: "2026-05-16"
owner: "Loudoun Decks"
status: ordered
sources:
  - "wiki/day0-tracking-gate.md"
  - "wiki/day0-attribution-readiness.md"
  - "wiki/day0-smart-bidding-readiness.md"
  - "wiki/day0-gtm-validation-checklist.md"
  - "wiki/day0-screenshot-evidence.md"
  - "docs/tracking-audit/FINAL-ATTRIBUTION-SIGNOFF.md"
  - "docs/tracking-audit/GTM-VALIDATION-REPORT.md"
  - "docs/tracking-audit/ENHANCED-CONVERSIONS-VERIFICATION.md"
  - "docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md"
---

# Day 0 Blockers

The exact ordered list of what is blocking optimization for the Loudoun Decks Google Ads account, with owner type and unblock criteria. This is the punch list — every closed row in this page moves the master gate ([[day0-tracking-gate]]) closer to PASS.

## Severity definitions

- **P0 — tracking-blocking**: bidding decisions are unsafe and the gate cannot move from PARTIAL to PASS without this.
- **P1 — quality-blocking**: gate may close without it, but signal quality will be poor (Smart Bidding will optimize toward noise).
- **P2 — improvement**: not on the critical path; defer until P0/P1 close.

## Blocker list (ordered by unblock dependency)

### B-01 — GTM container: Lead tag trigger = lead_confirmed

- **Severity:** P0
- **Status:** PARTIAL (live GTM tag-list evidence exists; Preview proof still missing)
- **Owner type:** GTM
- **Evidence:** `_attachments/day0-evidence/01-gtm-tags-inventory.png` and `_attachments/day0-evidence/02-gtm-form-lead-transaction-id.png` show `Google Ads - Form Lead Conversion` is a Google Ads Conversion Tracking tag triggered by `lead_confirmed - Custom Event`.
- **Evidence gap:** no GTM Preview-mode event timeline yet showing the tag fires on `lead_confirmed` and does NOT fire on `form_submit`.
- **Unblock criteria** (all must be true):
  1. `_attachments/day0-evidence/01-before-trigger.png` — screenshot of the Lead tag's original (likely `form_submit`) trigger.
  2. The Lead tag's only Custom Event trigger is `lead_confirmed` (Fires on: All Custom Events, no additional filters).
  3. `_attachments/day0-evidence/01-after-trigger-preview.png` — GTM Preview event timeline showing the Lead tag fires on the `lead_confirmed` event row, NOT on the `form_submit` event row, after a real test submission.
  4. GTM container PUBLISHED post-change (`00-container-version-published.png` filed; version recorded in [[day0-gtm-validation-checklist#Publish gate]]).
- **Reference:** `docs/tracking-audit/GTM-VALIDATION-REPORT.md §1.3`; [[day0-gtm-validation-checklist#B-01]].
- **Risk if not closed:** double-count of every form submission, OR (worse) misfire on bots that bypass the honeypot.

### B-02 — GTM container: transaction_id = {{DLV - event_id}}

- **Severity:** P0
- **Status:** PARTIAL (field mapping verified; Preview UUID match still missing)
- **Owner type:** GTM
- **Evidence:** `_attachments/day0-evidence/02-gtm-form-lead-transaction-id.png` shows `Transaction ID = {{DLV - event_id}}`; `_attachments/day0-evidence/05-gtm-variables-user-defined.png` shows `DLV - event_id` exists as a user-defined Data Layer Variable.
- **Evidence gap:** no GTM Preview Output capture proving `transaction_id` equals the live `event_id` for a real submission.
- **Unblock criteria** (all must be true):
  1. `DLV - event_id` (Data Layer Variable Name: `event_id`) exists in GTM Variables (verifiable in `gtm-container-export.json`).
  2. The Lead tag's Order ID / Transaction ID field is set to `{{DLV - event_id}}`. Screenshot: `02-transaction-id-mapping.png`.
  3. `02-preview-output.png` — GTM Preview → Lead tag fire → Output panel shows `transaction_id = <UUID>` where `<UUID>` equals the value of `event_id` in the corresponding `form_submit` and `lead_confirmed` events for the same submission.
  4. Independent cross-check: `window.__ldnAttr.snapshot()` in DevTools console shows the same UUID across `form_submit` and `lead_confirmed` history entries (this confirms the UUID flowing from `src/hooks/useLeadSubmit.js:32-35` made it into the dataLayer correctly).
  5. GTM container PUBLISHED post-change.
- **Reference:** `docs/tracking-audit/GTM-VALIDATION-REPORT.md §1.2-§1.3`; [[day0-gtm-validation-checklist#B-02]].
- **Risk if not closed:** dedup is non-functional. Even if B-01 fires the correct event, duplicates from reload / cross-tab / cross-user mistakes will inflate conversions.

### B-03 — Google Ads Lead action: "Don't allow duplicate conversions" = ON

- **Severity:** P0
- **Status:** PARTIAL (Conversion Linker verified; Ads dedup setting still missing)
- **Owner type:** Ads UI
- **Evidence:** `_attachments/day0-evidence/01-gtm-tags-inventory.png` shows `Conversion Linker` firing on `All Pages`.
- **Evidence gap:** no Google Ads Lead action settings screenshot proving duplicate conversions are blocked on transaction_id/order_id; no cross-tab dedup proof.
- **Unblock criteria** (all must be true):
  1. `_attachments/day0-evidence/03-lead-action-settings.png` — Google Ads → Tools → Conversions → Lead → Settings, with "Don't allow duplicate conversions" (or "Tag dedup on transaction_id") visibly enabled.
  2. `_attachments/day0-evidence/03-conversion-linker-tag.png` — GTM Tags shows a Conversion Linker tag with trigger = All Pages.
  3. **Cross-tab dedup proof:** `_attachments/day0-evidence/E-newtab-still-one.png` — after edge-case row E (open `/thank-you?eid=<UUID>` in incognito), Google Ads → Lead → Diagnostics → Recent shows only ONE conversion for that UUID. If it shows two, this toggle is OFF or misconfigured — re-test after fixing.
- **Reference:** `docs/tracking-audit/GTM-VALIDATION-REPORT.md §1.4`; `ADS-CONVERSION-INTEGRITY.md §2.5.3`; [[day0-gtm-validation-checklist#B-03]].
- **Risk if not closed:** dedup at the platform layer fails; Smart Bidding sees inflated counts.

### B-04 — Google Ads Lead action: Count = One, Window = 90d click / no view, Attribution = Data-driven

- **Severity:** P0
- **Status:** PARTIAL / BLOCKED (inventory visible, settings not compliant/proven)
- **Owner type:** Ads UI
- **Evidence:** `_attachments/day0-evidence/06-google-ads-conversion-actions-inventory.png` and `_attachments/day0-evidence/06-conversion-actions-inventory.md` show primary lead actions with Count = One, but `Submit lead form` has 30-day click window and `Lead form - Submit` has 1-day click window.
- **Evidence gap:** no full Lead action settings screenshot proving 90-day click window, view-through window, attribution model, and duplicate handling.
- **Unblock criteria** (all must be true):
  1. `_attachments/day0-evidence/04-lead-action-config.png` — full Lead action configuration screenshot showing:
     - Category: Lead → Submit lead form
     - Count: **One** (not "Every")
     - Click-through conversion window: **90 days** (matches gclid cookie TTL in `src/app/layout.js:63`)
     - View-through conversion window: **off** (or "1 day" if Google enforces a minimum)
     - Attribution model: **Data-driven** (fall back to Position-based only if Google explicitly says insufficient volume)
     - Include in "Conversions": **Yes**
  2. Each of the six rows above is individually legible in the screenshot.
- **Reference:** `ADS-CONVERSION-INTEGRITY.md §2.2-§2.4`; [[day0-gtm-validation-checklist#B-04]].
- **Risk if not closed:** misaligned with gclid cookie TTL (90 days); long-cycle leads attributed wrong; Smart Bidding optimizes on the wrong model.

### B-05 — Enhanced Conversions: hashing verified, ZERO plaintext

- **Severity:** P0 (tracking-blocking; ToS exposure)
- **Status:** PARTIAL (UPD tag and variable exist; hash/no-plaintext proof missing)
- **Owner type:** GTM + Ads UI
- **Evidence:** `_attachments/day0-evidence/05-gtm-user-provided-data-tag.png` shows `Google Ads - User Provided Data - Form Lead` uses `{{upd - Form Lead Data}}` and fires on `lead_confirmed - Custom Event`; `_attachments/day0-evidence/05-gtm-variables-user-defined.png` shows `dlv - email`, `dlv - phone`, and `upd - Form Lead Data` exist.
- **Evidence gap:** no Network-tab verification on file. Code intentionally sends plaintext PII to dataLayer (`src/lib/tracking.js:37-53`); GTM's Google Ads tag template **must** SHA-256 hash before the conversion request leaves the browser.
- **Unblock criteria** (all must be true):
  1. `_attachments/day0-evidence/05-ec-tag-config.png` — Lead tag has "Include user-provided data" enabled and mapped to `{{UPD - Lead Form Data}}`.
  2. `_attachments/day0-evidence/05-upd-variable-config.png` — the UPD variable shows Email / Phone / First Name / Last Name / Postal Code / Country mapped to their respective DLVs.
  3. **The certification image:** `_attachments/day0-evidence/05-network-tab-hashed.png` — DevTools Network tab capture of the outbound request to `googleadservices.com/pagead/conversion/...` (or `google.com/pagead/conversion/...` or `googleads.g.doubleclick.net/...`) after submitting the test form (`enhanced-test@example.com` / `571-555-1234` / `TestFirst TestLast` / `20148`), showing every PII field as a 64-char hex hash:
     - `em` → 64-char hex (NOT `enhanced-test@example.com`)
     - `ph` → 64-char hex (NOT `5715551234`)
     - `fn` → 64-char hex (NOT `TestFirst`)
     - `ln` → 64-char hex (NOT `TestLast`)
     - `pc` → 64-char hex (NOT `20148`)
     - `country` → 64-char hex
  4. `_attachments/day0-evidence/05-gtm-preview-upd-output.png` — GTM Preview shows the same hashed values in the Lead tag's Output panel.
  5. **Hash sanity check:** `_attachments/day0-evidence/05-em-hash-sanity.txt` contains the output of `echo -n "enhanced-test@example.com" | shasum -a 256` AND the `em` field value from the request — the two must match exactly (proves canonical lowercase normalization).
  6. (Non-blocking lift verification, file at 24-48h): `_attachments/day0-evidence/05-ec-diagnostics.png` showing Enhanced Conversions status = Active, match rate ≥ 50%.
- **Critical:** if ANY plaintext PII is seen in the Network capture, do NOT file the screenshot. File a P0 entry in `action-queue/` and fix the GTM config first.
- **Reference:** `docs/tracking-audit/ENHANCED-CONVERSIONS-VERIFICATION.md §4`; [[day0-gtm-validation-checklist#B-05]].
- **Risk if not closed:** account-suspension risk (Google Ads ToS violation) + reporting distortion.

### B-06 — Conversion goal cleanup (HIGH-4)

- **Severity:** P0
- **Status:** PARTIAL / BLOCKED (inventory captured; cleanup not performed)
- **Owner type:** Ads UI
- **Evidence:** `_attachments/day0-evidence/06-google-ads-conversion-actions-inventory.png` and `_attachments/day0-evidence/06-conversion-actions-inventory.md` record the current conversion action inventory.
- **Evidence gap:** no after-cleanup screenshot; no live demotions were performed because V1 does not mutate live accounts and the user instruction forbids settings changes.
- **Unblock criteria** (all must be true):
  1. `_attachments/day0-evidence/06-conversions-inventory.png` — full Google Ads → Conversions → Summary list (before cleanup) — every action visible with Source / Category / Include-in-Conversions / Count / Window.
  2. `_attachments/day0-evidence/06-conversion-action-export.csv` — CSV export of the same list.
  3. `_attachments/day0-evidence/06-inventory-table.md` — markdown copy of the inventory, also pasted into `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md §1.1`.
  4. `phone_click` (or "Phone link click") demoted: Include in "Conversions" = No (or confirmed it never was primary).
  5. `form_submit` as a separate primary action: demoted to secondary (or confirmed it never was primary).
  6. Any "Page view of /thank-you", engagement, scroll, or page_view conversion actions: demoted to secondary.
  7. `_attachments/day0-evidence/06-conversions-after-cleanup.png` — same Summary list AFTER cleanup, with the primary conversions list = `Lead` (from `lead_confirmed`) + `Phone Call from Ads` (if call asset exists) only.
- **Reference:** `ADS-CONVERSION-INTEGRITY.md §3`; [[day0-gtm-validation-checklist#B-06]].
- **Risk if not closed:** Smart Bidding optimizes toward `phone_click` tire-kickers and pre-lead form abandons; budget burns on noise.

### B-07 — www → non-www redirect preserves ?gclid=

- **Severity:** P0
- **Status:** VERIFIED
- **Owner type:** code (verify) + deploy
- **Evidence:** `_attachments/day0-evidence/07-www-gclid-redirect.txt` records `curl -I https://www.ldndecks.com/?gclid=CURLTEST123` returning `HTTP/2 308` with `location: https://ldndecks.com/?gclid=CURLTEST123`. The redirect preserves the gclid query parameter.
- **Unblock criteria:**
  ```bash
  curl -sI "https://www.ldndecks.com/?gclid=CURLTEST123"
  # Expect: 301 Location: https://ldndecks.com/?gclid=CURLTEST123
  ```
- **Reference:** `ADS-CONVERSION-INTEGRITY.md §2.6`.
- **Risk if not closed:** Safari + www-typing visitors lose gclid; campaigns appear less effective than they are.

### B-08 — GA4 SPA page_view on /thank-you

- **Severity:** P1
- **Status:** BLOCKED
- **Owner type:** GTM
- **Evidence gap:** no verification GTM has a History Change trigger and matching GA4 page_view tag for SPA routes.
- **Unblock criteria:** B2 in `FINAL-ATTRIBUTION-SIGNOFF.md`. Either (a) GA4 Config has `send_page_view: false` and a separate GA4 Event tag fires page_view on history-change events, or (b) the GA4 Config is wired to handle SPA nav natively.
- **Risk if not closed:** GA4 reports omit `/thank-you` from "Pages and screens"; conversion-rate-by-page reports under-attribute thank-you views; audiences based on thank-you view don't accumulate.

### B-09 — CRM / lead-status source of truth identified

- **Severity:** P1 (Smart-Bidding-quality blocker)
- **Status:** NOT IMPLEMENTED
- **Owner type:** CRM (owner)
- **Evidence gap:** repo shows lead emails via SMTP to `EMAIL_TO || EMAIL_USER`; no CRM, no sheet sync, no scheduled job.
- **Unblock criteria:** owner names the source (e.g., shared Google Sheet "Loudoun Decks Leads 2026" or HubSpot/Pipedrive instance). A defined column for "Qualified" or "Closed Won" + gclid.
- **Risk if not closed:** offline conversion pipeline (B-10) cannot be built; Smart Bidding can never optimize on lead quality.

### B-10 — Offline conversion upload SOP — at least one test run

- **Severity:** P1
- **Status:** NOT IMPLEMENTED
- **Owner type:** CRM + Ads UI
- **Evidence gap:** no upload script, no manual SOP, no Google Ads "Conversions from clicks" import history.
- **Unblock criteria:** at least one successful CSV upload to Google Ads (Tools → Conversions → Upload conversions) for a real lead containing gclid + conversion_time + value (or qualified-yes-no). Status in Google Ads = "Recorded".
- **Reference:** Implicit dependency in `FINAL-ATTRIBUTION-SIGNOFF.md` Section C "Next allowable steps".
- **Risk if not closed:** Smart Bidding never sees post-lead quality signal; tCPA / tROAS unsafe.

### B-11 — "Qualified Lead" definition documented

- **Severity:** P1
- **Status:** NOT IMPLEMENTED
- **Owner type:** CRM (owner) → write decision into `wiki/decisions/`
- **Unblock criteria:** a one-page decision note describing the criteria (e.g., "in-service-area + project scope ≥ $X + timeline ≤ Y months + responded to outreach"). File in `wiki/decisions/google-ads/` per [[RESOLVER]].
- **Risk if not closed:** B-10 has no logical signal to upload.

### B-12 — Meta CAPI test event visible in Events Manager

- **Severity:** P2
- **Status:** NOT IMPLEMENTED (env-gated no-op)
- **Owner type:** Ads UI + deploy (env vars)
- **Evidence gap:** `META_PIXEL_ID` + `META_CAPI_ACCESS_TOKEN` + `META_CAPI_TEST_EVENT_CODE` not set; `src/server/metaCapi.js:106-108` returns early.
- **Unblock criteria:** env vars set on hosting; one test submission produces a Lead event visible in Meta Events Manager → Test events tab; EMQ score recorded.
- **Reference:** B5 in `FINAL-ATTRIBUTION-SIGNOFF.md`; `docs/ads-tracking/ENV-SETUP.md`.
- **Risk if not closed:** Meta channel is dark for measurement. Not on Google-Ads critical path.

### B-13 — Cloudflare Turnstile / second-layer spam defense

- **Severity:** P2
- **Status:** NOT IMPLEMENTED
- **Owner type:** code
- **Evidence gap:** honeypot in place (`src/server/sendEmail.js:16-23`); no challenge-based bot filter behind it.
- **Unblock criteria:** Turnstile or hCaptcha wired into both forms; success rates monitored for 1 week post-launch.
- **Risk if not closed:** sophisticated form-spam services may push junk leads through. P2 because honeypot already catches the easy ~90%.

### B-14 — Google Ads Conversions API (server-side) for Safari coverage

- **Severity:** P2
- **Status:** NOT IMPLEMENTED
- **Owner type:** code (future)
- **Evidence gap:** Safari ITP caps client-side gclid cookie at 7 days; Days 8+ Safari conversions are dark to client-side attribution (`day0-attribution-readiness.md`). Server-to-server Google Ads Conversions API would close it.
- **Unblock criteria:** dedicated implementation; not on Phase 1 scope.
- **Risk if not closed:** under-attribution of Safari mobile conversions. Magnitude depends on Safari traffic share.

## Ordered unblock sequence

The fastest path from PARTIAL → PASS:

1. **B-07** — `curl -sI` verification (5 minutes, code-side).
2. **B-01 → B-02 → B-03 → B-04** — single GTM Preview session + Ads UI walkthrough (~2 hours operator time). Closes deterministic + idempotent + cross-tab dedup.
3. **B-05** — DevTools Network verification (~30 minutes after B-01..B-04 are published in GTM). Closes hashable.
4. **B-06** — Ads UI demote vanity actions (~10 minutes). Closes signal-quality.
5. **B-08** — GA4 SPA page_view (~30 minutes operator time). Closes auditable on `/thank-you`.
6. **B-09 + B-11 + B-10** — CRM identification → "Qualified Lead" definition → first offline upload (~1 day, owner-led). Closes Smart Bidding quality gate.
7. **B-12** — Meta CAPI activation (after env vars; ~15 minutes verification).
8. **B-13 + B-14** — P2 deferred.

## Verdict at top of file

After all P0 blockers (B-01 through B-08 + B-09 informational) close, the **master gate** in [[day0-tracking-gate]] becomes PASS and the Smart Bidding gate in [[day0-smart-bidding-readiness]] moves from BLOCKED to "single-campaign Max Conversions allowed". Full Smart Bidding clearance still requires B-09 → B-11.

## Related

- [[day0-tracking-gate]]
- [[day0-attribution-readiness]]
- [[day0-smart-bidding-readiness]]
- [[Tracking and Attribution Risk Register]]
- [[No Live Changes Without Approval]]
