---
brain_schema: ads-brain.v1
type: gate
platform: google
title: "Day 0 Smart Bidding Readiness"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: blocked
blocks: bid-strategy-changes
sources:
  - "docs/tracking-audit/TRACKING-AUDIT.md"
  - "docs/tracking-audit/FINAL-ATTRIBUTION-SIGNOFF.md"
  - "docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md"
---

# Day 0 Smart Bidding Readiness

Smart Bidding (Maximize Conversions, tCPA, tROAS, Maximize Conversion Value) optimizes the bid strategy against the conversion signal Google Ads believes is real. If the signal is wrong — duplicated, missing, inflated by clicks-that-aren't-calls, or starved of post-lead labels — Smart Bidding will burn budget faster than no bidding at all.

This page is the guardrail. **No bid strategy change is permitted while this gate is BLOCKED.**

## Verdict

**BLOCKED.**

> Tracking architecture is now structurally sound but still blocked on GTM validation + offline conversion loop before Smart Bidding activation.

## Why blocked — the four hard conditions

### 1. lead_confirmed verified end-to-end

- **Status:** PARTIAL
- **Evidence (code):** `src/lib/tracking.js:91-111` fires `lead_confirmed` only on `/thank-you` mount after server-side `sendContactEmail` success. Anti-replay in place. Both forms route through `useLeadSubmit` (`src/hooks/useLeadSubmit.js`).
- **Evidence (operator):** UNKNOWN — depends on GTM Lead tag being mapped to `lead_confirmed` (not `form_submit`) per B1.1 in `docs/tracking-audit/FINAL-ATTRIBUTION-SIGNOFF.md`.
- **Risk:** CRITICAL if mapped to `form_submit` — every bot fill (pre-honeypot survivors), abandoned-but-submitted form, or accidental double-click can trip conversion before the lead is real.
- **Next action:** operator confirms in GTM Preview: Lead tag fires only on `lead_confirmed`, with `transaction_id={{DLV - event_id}}`.
- **Owner type:** GTM

### 2. GTM transaction_id dedup verified

- **Status:** BLOCKED
- **Evidence:** Code produces a single UUID and threads it through every event (see [[day0-attribution-readiness#event_id propagation map]]). GTM mapping is unverified.
- **Risk:** CRITICAL. Two failure modes:
  - Without mapping: each `form_submit` + `lead_confirmed` pair = 2 conversions per real lead. Smart Bidding sees inflated conversion count and lowers tCPA — eventually overspending on tire-kicker traffic.
  - With mapping but no "Don't allow duplicate" toggle in Ads UI: cross-tab and re-load duplicates still slip through.
- **Next action:**
  1. Run `docs/tracking-audit/GTM-VALIDATION-REPORT.md §1` end to end in GTM Preview.
  2. In Google Ads → Conversions → Lead → Settings → enable "Don't allow duplicate conversions" (B1.4).
  3. Execute the dedup matrix in `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md §2.5` (4 sub-tests: real-time fire, reload, cross-tab, cross-user negative).
- **Owner type:** GTM + Ads UI

### 3. Enhanced Conversions verified

- **Status:** PARTIAL
- **Evidence (code):** dataLayer carries email / phone / first_name / last_name / zip / country plaintext (`src/lib/tracking.js:37-53`). This is by design — GTM's Google Ads tag template hashes client-side before the conversion request leaves the browser.
- **Evidence (operator):** UNKNOWN — depends on the GTM Lead tag having "User-Provided Data: enabled" with the right variables mapped, AND the Network-tab no-plaintext verification passing (B3.4).
- **Risk:** HIGH — if hashing isn't enabled, plaintext PII is sent to Google Ads, which is a ToS violation and can suspend the account. `TRACKING-AUDIT.md` HIGH-3.
- **Next action:** operator runs `docs/tracking-audit/ENHANCED-CONVERSIONS-VERIFICATION.md` end to end. Specifically B3.4 — open DevTools Network → submit form → inspect the Google Ads `conversion` hit → confirm every PII field is a 64-char hex hash, never plaintext.
- **Owner type:** GTM

### 4. Offline conversion path exists

- **Status:** NOT IMPLEMENTED
- **Evidence:** Lead emails carry gclid + click IDs (`src/server/sendEmail.js:46-67`), so the data is reachable. But there is no CRM in the repo, no scheduled upload script, no documented SOP for "Qualified Lead" or "Closed Won" import to Google Ads.
- **Risk:** HIGH — Smart Bidding without an offline-conversion loop only optimizes on raw form fills. It cannot learn which leads converted into qualified opportunities, let alone revenue. For a high-ticket home-services business, tCPA on raw form fills is a known overspend pattern (junk leads + tire kickers count just as much as qualified ones).
- **Next action:**
  - Owner names the lead-status source of truth (inbox, sheet, CRM).
  - Operator drafts a manual weekly upload SOP: extract gclid + conversion-time + value (or qualified/yes-no) from the source → format Google Ads upload CSV → upload to Conversions → Upload conversions.
  - Until at least one real upload completes successfully, Smart Bidding stays off.
- **Owner type:** CRM + Ads UI

### 5. Lead validation path documented

- **Status:** NOT IMPLEMENTED
- **Evidence:** No documented definition of "Qualified Lead" exists in the vault. `wiki/Open Questions for Ldn Decks.md` likely covers this.
- **Risk:** MED — without a definition, the offline-conversion loop has no logical signal to upload.
- **Next action:** owner defines "Qualified Lead" (e.g., "responded with project scope ≥ $X, in service area, with timeline ≤ Y months"). File in `wiki/decisions/`.
- **Owner type:** CRM (owner)

## Pre-flight checklist (every box must be ✓ before any bid switch)

```
Tracking (from day0-tracking-gate.md):
  [ ] GTM Lead tag triggers on lead_confirmed, NOT form_submit (B1.1)
  [ ] transaction_id = {{DLV - event_id}} mapped on Lead tag (B1.2)
  [ ] Conversion Linker tag exists, fires All Pages (B1.3)
  [ ] Google Ads Lead conversion action:
        Count = One
        Click window = 90 days
        View window = off
        Don't allow duplicate conversions = ON
        Attribution = Data-driven OR Position-based (B1.4)
  [ ] Enhanced Conversions: hashed em / ph / fn / ln / pc verified in DevTools (B3.4)
  [ ] phone_click demoted from primary (B4.2)
  [ ] form_submit demoted to secondary or never was primary (B4.3)
  [ ] Engagement / page_view conversions demoted (B4.4)
  [ ] Primary conversions list = Lead + Phone Call from Ads only (B4.5)

Attribution (from day0-attribution-readiness.md):
  [ ] curl -sI verifies www → non-www preserves ?gclid=
  [ ] Cross-tab dedup test (2.5.3) passes
  [ ] Cross-user negative test (2.5.4) passes — two distinct UUIDs = two conversions counted

Volume:
  [ ] At least 7 consecutive days of post-fix conversion data with NO duplicate-flag warnings in Diagnostics
  [ ] At least 30 conversions on the Lead action in the past 30 days
  [ ] At least 1 successful offline-conversion CSV upload completed

Operational:
  [ ] CRM / lead-status source of truth identified
  [ ] "Qualified Lead" definition documented
  [ ] At least one weekly offline-import SOP rehearsal completed
```

## Bid strategy decision matrix

| Current state | Today's recommendation | Why |
|---|---|---|
| Tracking gate PARTIAL, no exports | Stay on Manual CPC or Max Clicks | Bid changes optimize toward unverified signals |
| Tracking gate PARTIAL, exports landed | Stay on Manual CPC; use data only to refine negatives + structure | Reading data is safe; bidding on it isn't |
| Tracking gate PASS, no offline imports | Switch one campaign (lowest-stakes) to **Max Conversions (no target)** for 7-14 days | Accumulates clean data for tCPA later; one campaign limits blast radius |
| Tracking gate PASS, 30+ conversions in last 30 days, no offline imports | Max Conversions across more campaigns; **do not move to tCPA yet** | Need offline labels before bidding on quality |
| Tracking gate PASS, 30+ Qualified Leads accumulated via offline imports | Eligible for **tCPA on Qualified Lead** | Bidding on quality, not quantity |
| Tracking gate PASS, 50+ Closed Won with value, ≥ 30 days of value data | Eligible for **tROAS** | Bidding on revenue, not pipeline |

## Hard "do not do" list (until gate closes)

- Do **not** switch any campaign to Maximize Conversions, tCPA, tROAS, or Maximize Conversion Value.
- Do **not** import conversions from GA4 if they overlap with Google Ads native tags (creates duplicate-fire path).
- Do **not** add Broad Match keywords (Broad Match presupposes Smart Bidding to be safe).
- Do **not** widen budgets >20% in any campaign — budget moves on an unverified signal compound the error.
- Do **not** turn on Performance Max — PMax requires a clean conversion signal AND substantial conversion volume; both are absent.
- Do **not** rely on `phone_click` as a primary conversion signal in any campaign.

## Allowed today (with tracking gate PARTIAL)

- Pause obviously wasteful keywords / search terms identified in the exports.
- Add negative keywords from the search-terms CSV.
- Pause underperforming ads when CTR < 1% over 30+ days with statistical significance.
- Update ad copy to reflect verified service offerings (no spend impact when CTRs are similar).
- Tighten geo / schedule targeting based on documented owner constraints (per `wiki/google-ads/Day 0 Tracking and Privacy Gate - Google Ads.md` §8).
- Verify ad assets are loading and that landing pages are reachable.

Everything above is **observe + advise** mode — no bidding lever moves.

## Related

- [[day0-tracking-gate]] — master gate
- [[day0-attribution-readiness]] — dedup + survivability detail
- [[day0-blockers]] — ordered blocker list
- [[Day 0 Tracking and Privacy Gate - Google Ads]] — operator checklist
- `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md` — Ads conversion integrity matrix (repo doc)
