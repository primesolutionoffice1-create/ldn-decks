---
brain_schema: ads-brain.v1
type: gate
platform: google
title: "Day 0 Screenshot Evidence Manifest"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: open
sources:
  - "wiki/day0-gtm-validation-checklist.md"
  - "wiki/day0-blockers.md"
---

# Day 0 Screenshot Evidence Manifest

The set of screenshots, exports, and Network captures that the operator must file before the master gate ([[day0-tracking-gate]]) can move from PARTIAL → PASS. Every checkbox in [[day0-gtm-validation-checklist]] points at one or more files in this manifest.

> **No checkbox flips to PASS without its evidence file present in `_attachments/day0-evidence/`.**

## Storage location

All files go in:

```
/Users/ldndecks/ads-brain-vaults/ldn-decks/_attachments/day0-evidence/
```

Folder is already created. Naming convention: `NN-short-description.png` where `NN` matches the B-row in [[day0-gtm-validation-checklist]] (00 = container-wide, 01–06 = per-blocker, A–G = edge-case matrix).

> Screenshots may contain PII from test submissions. **Use the test email/phone from the runbook** (`enhanced-test@example.com` / `571-555-1234` / `TestFirst TestLast`). Do not capture real lead data into the vault.

## File manifest

### 00 — container-wide

| File | Proves | Source step | Required for |
|---|---|---|---|
| `00-container-version-published.png` | The GTM container has been Published (not just workspace-saved), with version number visible | GTM → Versions → after Publish | All B-01..B-06 |

### 01 — B-01: Lead tag trigger = lead_confirmed

| File | Proves | Source step | Required for |
|---|---|---|---|
| `01-before-trigger.png` | The Lead tag's ORIGINAL trigger (likely `form_submit`) — before the change | GTM Tags → Lead → screenshot config | B-01.2 |
| `01-after-trigger-preview.png` | GTM Preview shows Lead tag fires on `lead_confirmed` event, NOT on `form_submit` | GTM Preview event timeline | B-01.6 |

### 02 — B-02: transaction_id = {{DLV - event_id}}

| File | Proves | Source step | Required for |
|---|---|---|---|
| `02-transaction-id-mapping.png` | The Lead tag's "Order ID" field shows `{{DLV - event_id}}` | GTM Tags → Lead → Order ID screenshot | B-02.5 |
| `02-preview-output.png` | In Preview, Lead tag Output shows `transaction_id = <UUID>` matching the UUID printed by `window.__ldnAttr.snapshot()` for the same submit | GTM Preview → click Lead tag → Output panel | B-02.6 |

### 03 — B-03: Don't allow duplicate conversions = ON

| File | Proves | Source step | Required for |
|---|---|---|---|
| `03-lead-action-settings.png` | Google Ads Lead action Settings panel with "Don't allow duplicate conversions" visibly enabled (and Count = One, etc.) | Google Ads → Conversions → Lead → Settings | B-03.1, B-03.2 |
| `03-conversion-linker-tag.png` | GTM has a Conversion Linker tag firing on All Pages | GTM Tags → Conversion Linker | B-03.3 |

### 04 — B-04: Lead conversion config

| File | Proves | Source step | Required for |
|---|---|---|---|
| `04-lead-action-config.png` | Single screenshot of the full Lead conversion-action page showing Count = One, Click window = 90d, View window = OFF, Attribution = Data-driven, Include in Conversions = Yes, Category = Lead → Submit lead form | Google Ads → Conversions → Lead → top of page (full scroll if needed, may be 2 images) | B-04 |

### 05 — B-05: Enhanced Conversions — NO PLAINTEXT (CRITICAL)

| File | Proves | Source step | Required for |
|---|---|---|---|
| `05-ec-tag-config.png` | Lead tag has "Include user-provided data" enabled, mapped to `{{UPD - Lead Form Data}}` | GTM Tags → Lead → User-Provided Data section | B-05.3 |
| `05-upd-variable-config.png` | The UPD variable shows Email/Phone/First/Last/Zip/Country mapped to their DLVs | GTM Variables → UPD - Lead Form Data | B-05.2 |
| `05-network-tab-hashed.png` | DevTools Network tab showing the outbound Google Ads conversion request body with **every PII field as a 64-char hex SHA-256 hash**, never plaintext | DevTools Network → Google Ads conversion request → Request Body / Payload tab | B-05.4 — the certification image |
| `05-gtm-preview-upd-output.png` | GTM Preview → click Lead tag fire → Output section shows User-Provided Data values as **hashed** strings | GTM Preview → Lead tag fire → Output | B-05.4 |
| `05-em-hash-sanity.txt` | Plain text file pasting `echo -n "enhanced-test@example.com" \| shasum -a 256` output AND the `em` hash from the request — they must match | Terminal → save output | B-05.4 sanity |
| `05-ec-diagnostics.png` | Google Ads → Conversions → Lead → Diagnostics shows Enhanced Conversions: **Active**, match rate ≥50% (file 24-48h after test fires) | Google Ads → Diagnostics tab | B-05.5 (lift verification — non-blocking) |

> **If `05-network-tab-hashed.png` shows ANY plaintext PII**: do not file it as evidence; file a P0 entry in `action-queue/` and fix the GTM config first.

### 06 — B-06: Conversion goal cleanup

| File | Proves | Source step | Required for |
|---|---|---|---|
| `06-conversions-inventory.png` | Full Google Ads Conversions list BEFORE cleanup — every action visible with its Source, Category, Include-in-Conversions setting | Google Ads → Tools → Conversions → Summary | B-06.1 |
| `06-conversions-after-cleanup.png` | Same list AFTER cleanup — `phone_click`/`form_submit`/page-view actions show "Include in Conversions = No", primary list = Lead + Phone Call from Ads only | Same view, after demoting | B-06.5 |
| `06-inventory-table.md` | Markdown copy of the inventory pasted into `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md §1.1` (file the .md here too as a vault-side mirror) | Copy from Google Ads, normalize as markdown | B-06.1 |

### A–G — Edge-case dedup matrix

Reference: [[day0-gtm-validation-checklist#Edge-case dedup matrix]].

| File | Proves | Source step | Required for |
|---|---|---|---|
| `A-contactform-submit.png` | Diagnostics shows 1 new conversion with the test UUID after a ContactForm submission | Google Ads → Lead → Diagnostics → Recent | Row A |
| `A-contactform-snapshot.png` | `window.__ldnAttr.snapshot()` shows form_submit + lead_confirmed with matching event_id | DevTools console | Row A |
| `B-contacthome-submit.png` | Diagnostics shows a second conversion from the homepage form (`form_type: homepage`) | Same | Row B |
| `C-reload-no-new.png` | After reload of /thank-you, Diagnostics still shows the same count; `dedupHits` incremented in snapshot() | DevTools console + Diagnostics | Row C |
| `D-back-forward-no-new.png` | After browser back/forward to /thank-you, count unchanged | Same | Row D |
| `E-newtab-still-one.png` | Open /thank-you in incognito tab → lead_confirmed fires → Diagnostics still 1 conversion (B-03 dedup catches it) | Same | Row E — the cross-tab proof |
| `F-distinct-submissions.png` | Two intentionally different submissions produce 2 distinct conversions (negative test — must not over-dedupe) | Same | Row F |
| `G-honeypot-zero.png` | Honeypot fill via DevTools produces zero events in dataLayer + zero conversions | Same | Row G |

### CSV / inventory exports

| File | Proves | Source step | Required for |
|---|---|---|---|
| `06-conversion-action-export.csv` | CSV export of the Google Ads Conversions Summary (one row per action) | Google Ads → Conversions → Download | B-06.1 |
| `gtm-container-export.json` | Full GTM container JSON export, post-Publish | GTM → Admin → Export Container | All B-01..B-05 (provides programmatic verification of tag config) |

## Acceptance criteria

A blocker (B-01..B-06) is only marked PASS when:

1. Every required screenshot in its row above exists in `_attachments/day0-evidence/`.
2. Each screenshot is **legible** at 1× zoom — field names and values readable.
3. Screenshots are timestamped (file mtime is fine — don't rename to obscure when they were taken).
4. For B-05: the `05-em-hash-sanity.txt` shasum check passes.

## File log (operator fills as evidence lands)

| Filename | Filed at | By | Notes |
|---|---|---|---|
| `_attachments/day0-evidence/00-container-version-published.png` | _________ | ___ | Container version: ____ |
| `_attachments/day0-evidence/01-before-trigger.png` | _________ | ___ | |
| `_attachments/day0-evidence/01-after-trigger-preview.png` | _________ | ___ | |
| `_attachments/day0-evidence/02-transaction-id-mapping.png` | _________ | ___ | |
| `_attachments/day0-evidence/02-preview-output.png` | _________ | ___ | UUID: ____ |
| `_attachments/day0-evidence/03-lead-action-settings.png` | _________ | ___ | |
| `_attachments/day0-evidence/03-conversion-linker-tag.png` | _________ | ___ | |
| `_attachments/day0-evidence/04-lead-action-config.png` | _________ | ___ | |
| `_attachments/day0-evidence/05-ec-tag-config.png` | _________ | ___ | |
| `_attachments/day0-evidence/05-upd-variable-config.png` | _________ | ___ | |
| `_attachments/day0-evidence/05-network-tab-hashed.png` | _________ | ___ | **CRITICAL** |
| `_attachments/day0-evidence/05-gtm-preview-upd-output.png` | _________ | ___ | |
| `_attachments/day0-evidence/05-em-hash-sanity.txt` | _________ | ___ | |
| `_attachments/day0-evidence/05-ec-diagnostics.png` | _________ | ___ | Match rate: ____% |
| `_attachments/day0-evidence/06-conversions-inventory.png` | _________ | ___ | |
| `_attachments/day0-evidence/06-conversions-after-cleanup.png` | _________ | ___ | |
| `_attachments/day0-evidence/06-conversion-action-export.csv` | _________ | ___ | |
| `_attachments/day0-evidence/06-inventory-table.md` | _________ | ___ | |
| `_attachments/day0-evidence/A-contactform-submit.png` | _________ | ___ | UUID: ____ |
| `_attachments/day0-evidence/A-contactform-snapshot.png` | _________ | ___ | |
| `_attachments/day0-evidence/B-contacthome-submit.png` | _________ | ___ | UUID: ____ |
| `_attachments/day0-evidence/C-reload-no-new.png` | _________ | ___ | dedupHits: __ |
| `_attachments/day0-evidence/D-back-forward-no-new.png` | _________ | ___ | |
| `_attachments/day0-evidence/E-newtab-still-one.png` | _________ | ___ | |
| `_attachments/day0-evidence/F-distinct-submissions.png` | _________ | ___ | |
| `_attachments/day0-evidence/G-honeypot-zero.png` | _________ | ___ | |
| `_attachments/day0-evidence/gtm-container-export.json` | _________ | ___ | Container version: ____ |

## What's still needed right now

As of 2026-05-12, the entire manifest above is unfilled. The minimum set to move the master gate from PARTIAL → PASS:

```
00-container-version-published.png
01-before-trigger.png + 01-after-trigger-preview.png
02-transaction-id-mapping.png + 02-preview-output.png
03-lead-action-settings.png + 03-conversion-linker-tag.png
04-lead-action-config.png
05-ec-tag-config.png + 05-upd-variable-config.png +
  05-network-tab-hashed.png + 05-gtm-preview-upd-output.png +
  05-em-hash-sanity.txt
06-conversions-inventory.png + 06-conversions-after-cleanup.png +
  06-conversion-action-export.csv
A-contactform-submit.png + B-contacthome-submit.png +
  C-reload-no-new.png + D-back-forward-no-new.png +
  E-newtab-still-one.png + F-distinct-submissions.png +
  G-honeypot-zero.png
gtm-container-export.json
```

26 files total. Estimated operator time end-to-end: 2–3 hours (one GTM Preview session + one Ads UI walkthrough + the dedup matrix). Match-rate verification (`05-ec-diagnostics.png`) takes 24–48 hours of real submissions; file later, non-blocking.

## Related

- [[day0-gtm-validation-checklist]] — the checklist that consumes these files
- [[day0-blockers]] — references each file in the per-blocker unblock criteria
- [[day0-tracking-gate]] — master gate that moves to PASS once these are filed
