---
brain_schema: ads-brain.v1
type: gate
platform: google
title: "Day 0 GTM Validation Checklist"
created: "2026-05-12"
updated: "2026-05-16"
owner: "Loudoun Decks"
status: open
blocks: optimization
container: "GTM-N87MG6QS"
sources:
  - "docs/tracking-audit/GTM-VALIDATION-REPORT.md"
  - "docs/tracking-audit/ENHANCED-CONVERSIONS-VERIFICATION.md"
  - "docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md"
---

# Day 0 GTM Validation Checklist

Operator-facing checklist that closes blockers **B-01 through B-06** in [[day0-blockers]]. This page is the one-screen execution surface; the full runbooks live in:

- `docs/tracking-audit/GTM-VALIDATION-REPORT.md` — HIGH-1 + HIGH-2 step-by-step
- `docs/tracking-audit/ENHANCED-CONVERSIONS-VERIFICATION.md` — HIGH-3 step-by-step
- `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md` — HIGH-4 + dedup matrix

> **Rule:** every row stays unchecked until verifiable evidence (screenshot OR container export OR DevTools Network capture) is filed in `_attachments/day0-evidence/`. See [[day0-screenshot-evidence]] for the file manifest.

## Status legend (per row)

- `[ ]` — NOT YET — evidence absent
- `[~]` — PARTIAL — change made in GTM workspace but not Published yet, OR Published but tests unrun
- `[x]` — PASS — evidence on file in `_attachments/day0-evidence/`

## Pre-flight (verified — operator does not need to re-do)

Code layer (commits `c9cefd8` → `dca4820`):

- [x] `dataLayer` initialized in `beforeInteractive` script ([src/app/layout.js#L62-L69](/Users/ldndecks/ldn-decks-next/src/app/layout.js))
- [x] Consent defaults run `beforeInteractive`, container `afterInteractive`
- [x] `form_submit` and `lead_confirmed` carry same `event_id` UUID ([src/hooks/useLeadSubmit.js#L32-L35](/Users/ldndecks/ldn-decks-next/src/hooks/useLeadSubmit.js))
- [x] `lead_confirmed` only fires after `sendContactEmail` returns `success: true`
- [x] sessionStorage anti-replay on `/thank-you` reload ([src/lib/tracking.js#L91-L104](/Users/ldndecks/ldn-decks-next/src/lib/tracking.js))
- [x] Honeypot drops bot submissions before any tracking event
- [x] PII fields (email/phone/firstName/lastName/zip/country) in dataLayer for EC mapping


## 2026-05-16 read-only validation update

Evidence was collected without changing GTM, Google Ads, bids, budgets, negatives, or live campaign settings. Filed evidence:

- `_attachments/day0-evidence/01-gtm-tags-inventory.png` — GTM tags list confirms Conversion Linker on All Pages, Google Ads Form Lead on `lead_confirmed`, User Provided Data tag on `lead_confirmed`, phone_click tags, and GA4 tags.
- `_attachments/day0-evidence/02-gtm-form-lead-transaction-id.png` — Google Ads Form Lead tag has `Transaction ID = {{DLV - event_id}}` and trigger `lead_confirmed - Custom Event`.
- `_attachments/day0-evidence/05-gtm-user-provided-data-tag.png` — Google Ads User-provided Data Event uses `{{upd - Form Lead Data}}` and trigger `lead_confirmed - Custom Event`.
- `_attachments/day0-evidence/05-gtm-variables-user-defined.png` — user-defined variables include `dlv - email`, `DLV - event_id`, `dlv - phone`, and `upd - Form Lead Data`.
- `_attachments/day0-evidence/06-google-ads-conversion-actions-inventory.png` and `_attachments/day0-evidence/06-conversion-actions-inventory.md` — conversion action inventory captured.
- `_attachments/day0-evidence/07-www-gclid-redirect.txt` — `www` redirect preserves `gclid`.

Current closure state: B-01 PARTIAL, B-02 PARTIAL, B-03 PARTIAL, B-04 PARTIAL/BLOCKED, B-05 PARTIAL, B-06 PARTIAL/BLOCKED, B-07 VERIFIED. Preview-mode, Network-tab hashing, duplicate-conversion settings, and post-cleanup screenshots are still required before PASS.

## B-01 — Lead conversion tag triggers on `lead_confirmed` ONLY

Closes [[day0-blockers#B-01]].

Reference: `docs/tracking-audit/GTM-VALIDATION-REPORT.md §1.1, §1.3`.

```
[ ] B-01.1  GTM → Tags inventoried; Google Ads Lead tag(s) identified
[ ] B-01.2  Original trigger captured (likely `form_submit`) — screenshot to evidence/01-before-trigger.png
[ ] B-01.3  Lead tag's trigger replaced with:
              Type: Custom Event
              Event name: lead_confirmed
              Fires on: All Custom Events
            — NO additional firing conditions
[ ] B-01.4  Old `form_submit` trigger removed from the Lead tag
            (Form Fill / form_submit may stay as a SECONDARY observe-only conversion;
            but it MUST be detached from the primary Lead tag)
[ ] B-01.5  Saved (workspace, not yet published)
[ ] B-01.6  GTM Preview shows Lead tag fires only on lead_confirmed event,
            NOT on form_submit
            — screenshot to evidence/01-after-trigger-preview.png
```

**Unblock criterion:** all six rows checked AND screenshot pair on file.

## B-02 — `transaction_id` = `{{DLV - event_id}}`

Closes [[day0-blockers#B-02]].

Reference: `docs/tracking-audit/GTM-VALIDATION-REPORT.md §1.2, §1.3`.

```
[ ] B-02.1  Workspace → Variables → User-Defined → DLV - event_id created
              Type: Data Layer Variable, version 2
              Data Layer Variable Name: event_id
              Default Value: (empty)
[ ] B-02.2  DLV - gclid created (Data Layer Variable Name: gclid)
[ ] B-02.3  DLV - gbraid created
[ ] B-02.4  DLV - wbraid created
[ ] B-02.5  Lead tag → Order ID field set to {{DLV - event_id}}
              — screenshot to evidence/02-transaction-id-mapping.png
[ ] B-02.6  GTM Preview confirms Output of Lead tag shows
              transaction_id = <UUID matching the form_submit event_id>
              — screenshot to evidence/02-preview-output.png
```

**Unblock criterion:** all six rows checked AND screenshots on file AND the UUID in the Preview Output matches the one printed by `window.__ldnAttr.snapshot()` for the same submission.

## B-03 — Google Ads "Don't allow duplicate conversions" = ON

Closes [[day0-blockers#B-03]].

Reference: `docs/tracking-audit/GTM-VALIDATION-REPORT.md §1.4`; `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md §2.5`.

```
[ ] B-03.1  Google Ads → Tools → Conversions → Lead action → Settings opened
            — screenshot to evidence/03-lead-action-settings.png
[ ] B-03.2  "Don't allow duplicate conversions" toggle = ON
            (If the UI shows "Tag dedup" instead, set it to deduplicate on
             transaction_id / order_id)
[ ] B-03.3  Conversion Linker tag exists in GTM and fires on All Pages
            — screenshot to evidence/03-conversion-linker-tag.png
```

**Unblock criterion:** all three rows checked AND the dedup matrix in B-05.4 below (cross-tab and reload tests) returns 1 conversion in Diagnostics, not 2+.

## B-04 — Lead conversion action: Count One / 90d click / no view / DDA

Closes [[day0-blockers#B-04]].

Reference: `docs/tracking-audit/GTM-VALIDATION-REPORT.md §1.4`; `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md §2.2–§2.4`.

```
[ ] B-04.1  Count = One (NOT "Every")
[ ] B-04.2  Click-through conversion window = 90 days
            (matches gclid cookie TTL in src/app/layout.js:63)
[ ] B-04.3  View-through window = OFF (or 1 day if Google enforces a minimum)
[ ] B-04.4  Attribution model = Data-driven
            (fall back to Position-based if Google shows "not enough volume")
[ ] B-04.5  Include in "Conversions" = Yes
[ ] B-04.6  Category = Lead → Submit lead form
            — screenshot of full settings panel to evidence/04-lead-action-config.png
```

**Unblock criterion:** all six rows checked AND screenshot on file.

## B-05 — Enhanced Conversions: hashed PII, zero plaintext

Closes [[day0-blockers#B-05]].

Reference: `docs/tracking-audit/ENHANCED-CONVERSIONS-VERIFICATION.md §2–§4`.

**This is the highest-risk row. Do not publish the container until B-05.4 passes — plaintext PII to Google Ads is a ToS violation.**

```
[ ] B-05.1  DLVs created in GTM:
              DLV - email, DLV - phone, DLV - first_name,
              DLV - last_name, DLV - zip, DLV - country
            (verify each exists; some may already be present)
[ ] B-05.2  User-Provided Data variable created:
              Name: UPD - Lead Form Data
              Email:         {{DLV - email}}
              Phone Number:  {{DLV - phone}}
              First Name:    {{DLV - first_name}}
              Last Name:     {{DLV - last_name}}
              Postal Code:   {{DLV - zip}}
              Country:       {{DLV - country}}
              Street/City/Region: leave empty (P2; see Section 5 of EC verification doc)
[ ] B-05.3  Lead tag → "Include user-provided data from your website" = Enabled,
            mapped to {{UPD - Lead Form Data}}
            — screenshot to evidence/05-ec-tag-config.png
[ ] B-05.4  No-plaintext Network-tab verification (CRITICAL):
            1. GTM Preview Mode → URL: https://ldndecks.com/?gclid=ECTEST1
            2. New tab → DevTools → Network → filter "google" or "googleads"
            3. Submit form with:
                 First Name: TestFirst    Last Name: TestLast
                 Email: enhanced-test@example.com
                 Phone: 571-555-1234      Zip: 20148
                 Message: EC verification test
            4. After /thank-you loads, inspect outbound conversion request:
                 URL pattern: googleadservices.com/pagead/conversion/...
                          or  google.com/pagead/conversion/...
                          or  googleads.g.doubleclick.net/...
            5. Confirm every PII field in the request body is a
               64-char hex SHA-256 hash:
                 em  hashed  PASS / FAIL
                 ph  hashed  PASS / FAIL
                 fn  hashed  PASS / FAIL
                 ln  hashed  PASS / FAIL
                 pc  hashed  PASS / FAIL
                 country hashed  PASS / FAIL
            6. Sanity check the em hash:
                 echo -n "enhanced-test@example.com" | shasum -a 256
                 → must equal the em value in the request
            — screenshot to evidence/05-network-tab-hashed.png
            — screenshot to evidence/05-gtm-preview-upd-output.png
            — IF ANY PLAINTEXT IS SEEN: STOP. Do not publish.
              File a P0 in action-queue/ and re-inspect the tag config.
[ ] B-05.5  Google Ads → Conversions → Lead → Diagnostics → EC panel
            shows status "Active" (or "Recording") within 24-48h after test fires
            and match rate ≥ 50% — log value: ____%
            — screenshot to evidence/05-ec-diagnostics.png (filed at 24h)
```

**Unblock criterion:** B-05.1 → B-05.4 all checked with PASS values AND all three screenshots on file AND no plaintext seen in the Network tab. B-05.5 is logged at 24-48h for record but is not blocking — match-rate ≥50% is the green flag, but the gate moves to PASS on B-05.4 alone (correctness first; lift verification is a follow-up).

## B-06 — Conversion goal cleanup (HIGH-4)

Closes [[day0-blockers#B-06]].

Reference: `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md §1.3, §3.2`.

```
[ ] B-06.1  Full conversion-action inventory taken
            — screenshot to evidence/06-conversions-inventory.png
            — copy to inventory section of ADS-CONVERSION-INTEGRITY.md §1.1
[ ] B-06.2  `phone_click` (if present as primary):
              Include in "Conversions" → No (demote to secondary)
            OR confirmed it never was primary
[ ] B-06.3  `form_submit` (if present as a separate primary action, not just a tag):
              Include in "Conversions" → No (demote)
            OR confirmed it never was a separate primary action
[ ] B-06.4  Any "Page view of /thank-you" or engagement / scroll / page_view
            actions demoted to secondary
[ ] B-06.5  Primary conversions list after cleanup =
              ✓ Lead (from lead_confirmed) — primary
              ✓ Phone Call from Ads (if call asset configured) — primary
              ✓ Phone Call from Website (when forwarding-number set up) — primary or N/A
              Qualified Lead — primary (deferred until offline imports start)
            — screenshot to evidence/06-conversions-after-cleanup.png
```

**Unblock criterion:** all five rows checked AND inventory table copied into the repo doc AND post-cleanup screenshot on file.

## Edge-case dedup matrix (run AFTER B-01..B-04 are PUBLISHED)

Reference: `docs/tracking-audit/GTM-VALIDATION-REPORT.md §1.5`; `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md §2.5`.

```
[ ] A. Submit ContactForm with ?gclid=DEDUPTEST1
        dataLayer: form_submit(UUID1) + lead_confirmed(UUID1)
        Google Ads tag: 1× transaction_id=UUID1
        Diagnostics: 1 conversion
[ ] B. Submit ContactHome (homepage form)
        dataLayer: form_submit(UUID2, form_type:homepage) + lead_confirmed(UUID2)
        Google Ads tag: 1× transaction_id=UUID2
        Diagnostics: 1 conversion
[ ] C. After A, reload /thank-you?eid=UUID1
        NO new lead_confirmed (sessionStorage blocks)
        Diagnostics: still 1
[ ] D. After A, browser back/forward to /thank-you?eid=UUID1
        NO new lead_confirmed
        Diagnostics: still 1
[ ] E. After A, open /thank-you?eid=UUID1 in NEW incognito tab
        lead_confirmed(UUID1) fires once (new sessionStorage)
        Google Ads dedupes on transaction_id
        Diagnostics: still 1   ← if this becomes 2, B-03 (don't allow dup) is OFF
[ ] F. Submit twice with intentionally different submissions
        2 conversions correctly recorded (different UUIDs)
        Diagnostics: 2          ← this is the NEGATIVE test; must NOT dedupe
[ ] G. Honeypot test — fill company_website via DevTools, submit
        NO form_submit, NO lead_confirmed, NO navigation
        Diagnostics: 0
```

**PASS condition for the gate:** every row matches expected. Most-likely failure: row E shows 2 conversions → B-03 toggle is OFF → fix in Ads UI.

## Publish gate

```
[ ] All B-01..B-06 rows above checked
[ ] All edge-case rows A..G above checked
[ ] GTM container PUBLISHED (not just workspace-saved)
       Container version: ____
       Publish timestamp: ____
       Publisher email:   ____
       — screenshot to evidence/00-container-version-published.png
[ ] Note container version in [[day0-tracking-gate]] frontmatter
```

## What happens after this checklist closes

Master gate [[day0-tracking-gate]] moves from PARTIAL → PASS for all rows except:

- offline-conversion pipeline (gated by [[day0-blockers#B-09]]..[[day0-blockers#B-11]])
- Meta CAPI activation (gated by [[day0-blockers#B-12]])

Smart Bidding gate [[day0-smart-bidding-readiness]] moves from BLOCKED → "single-campaign Max Conversions allowed" (no target, observe 7-14 days). Full clearance still requires B-09..B-11.

## Rollback

If the published container produces broken conversion behavior (Diagnostics shows zero conversions for >2 hours after a known real submission, OR shows obvious duplicates):

1. GTM → Versions → previous published version → **Set as Latest Version** → **Publish**.
2. Re-run row A from the matrix to confirm restoration.
3. File a P0 entry in `action-queue/` with the Preview Mode debug output that failed.

Full 5-tier rollback decision tree: `docs/ads-tracking/ROLLBACK-PLAN.md`.

## Related

- [[day0-tracking-gate]] — master gate (this page closes ~7 of its rows)
- [[day0-attribution-readiness]] — survivability + dedup detail
- [[day0-smart-bidding-readiness]] — what becomes allowed after this closes
- [[day0-blockers]] — B-01..B-06 ordered list
- [[day0-screenshot-evidence]] — screenshot file manifest
- [[day0-csv-import-sequence]] — what to do with the CSV exports once Day 0 closes
