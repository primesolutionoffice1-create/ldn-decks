---
brain_schema: ads-brain.v1
type: gate
platform: google
title: "Day 0 Tracking and Privacy Gate"
created: "2026-05-11"
updated: "2026-05-11"
owner: "Loudoun Decks"
status: open
blocks: optimization
---

# Day 0 Tracking and Privacy Gate

> Quality gate from `CODEX.md`: **no scaling, no bidding moves, no creative pushes, no budget shifts until this page is closed.** Reported numbers cannot be trusted before this gate is green.

Mark each row **PASS / FAIL / UNKNOWN**. Anything not green blocks optimization.

## 1. Conversion actions

- [ ] **Primary conversion action** exists and is set to **"Primary" (Include in 'Conversions') = Yes**.
- [ ] Conversion category is correct (Lead for a contractor like Loudoun Decks).
- [ ] Count = **One** for leads (not Every) — prevents duplicate counting of the same form fill.
- [ ] Click-through window: 30 days (default). View-through: 1 day (or off).
- [ ] Attribution model is recorded (Data-driven / Last click / etc.). Note: attribution affects every reported number.
- [ ] No "No recent conversions" warning in the Conversions screen.
- **Evidence**: row in `gads_conversions_<from>_<to>.csv`.

## 2. Phone call tracking

- [ ] **Calls from ads**: enabled if call extensions / call assets are used.
- [ ] **Calls from a website** (Google forwarding number on site): tag installed and verified.
- [ ] Minimum call duration matches what counts as a qualified lead (e.g., 30s or 60s).
- [ ] Call conversions show recent data (not "No recent conversions").
- [ ] Counted as **Primary** only if calls are a real lead source. Otherwise mark Secondary so they don't inflate "Conversions".

## 3. Form tracking

- [ ] All site forms fire a conversion event on **successful submit** (not on page load).
- [ ] Form events are deduped across sources (GTM vs. native form vs. CRM webhook).
- [ ] Field-level PII is never sent to Google Ads. Only success signal + hashed identifiers for enhanced conversions.
- [ ] Thank-you page is not the only proof — server-side or form-success event is preferred.

## 4. Thank-you page tracking

- [ ] Thank-you page fires the conversion on load (one-time per user) **and** is not directly linkable without form submission.
- [ ] No-index on thank-you page to prevent organic landing.
- [ ] URL is unique per form (so we can attribute by source if needed).
- [ ] If thank-you redirects, conversion fires before redirect.

## 5. Duplicate conversions

- [ ] No double-firing across GA4 → Google Ads import + Google Ads native tag.
- [ ] Server-side events (if any) are deduped with event_id matching the browser tag's transaction_id.
- [ ] Spot-check: pick one recent lead, confirm exactly one row in the Conversions table.

## 6. Enhanced conversions

- [ ] Enhanced conversions for **web** turned on (Tools → Conversions → action → Enhanced conversions section).
- [ ] Setup method recorded (Google Tag / GTM / API).
- [ ] User-provided data field mapping confirmed (email at minimum; phone if collected).
- [ ] Diagnostics page shows "Recording data" (or equivalent), not "No data".
- [ ] Privacy: the site's privacy policy / consent flow allows sending hashed user data.

## 7. Consent mode (v2)

- [ ] Consent mode v2 implemented (banner + Google Tag respects `ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`).
- [ ] Default consent state matches jurisdiction (EU → denied by default; US → site policy).
- [ ] Behavioral / modeled conversions show in Google Ads if denied-consent traffic is material.
- [ ] If the site has no EU/UK traffic, document that consent mode is set to permissive US-only and why.

## 8. Location targeting

- [ ] "Presence" selected on every campaign — **People in or regularly in your targeted locations** (not "Presence or interest").
  - Reason: "Presence or interest" leaks budget to lookalike geos. Critical for a local contractor.
- [ ] Negative locations exclude states/regions you don't serve.
- [ ] Service-area radius matches the business's actual coverage (Northern Virginia / Loudoun County for ldndecks.com — confirm with owner).
- [ ] Ad schedule reviewed (don't pay for clicks during hours the business can't answer).

## 9. Account access safety

- [ ] **2-Step Verification** required on every user with Standard/Admin access (Tools → Access and security → Users).
- [ ] No expired email addresses with Admin role.
- [ ] Linked Google Analytics property is the correct GA4 property (Tools → Linked accounts).
- [ ] Linked Search Console is the right verified property.
- [ ] **Manager account (MCC)** linked only if owner has authorized it. Otherwise unlink.
- [ ] No script with full mutate scope running on a schedule unless documented in this vault.

## 10. Billing safety

- [ ] Billing account active, payment method valid (no "expiring card" warning).
- [ ] **Account-level budget** (Tools → Billing → Account budgets) set if you want a hard monthly cap — otherwise leave blank and rely on campaign daily budgets.
- [ ] Daily campaign budgets sum to a number you can defend in writing.
- [ ] Auto-payments threshold understood (Google can charge twice in a month at high spend).
- [ ] Promotional credits and their expiry recorded.
- [ ] Invoicing currency and tax ID match the legal entity.

---

## Decision

- **Gate status**: OPEN (re-check after every export ingest)
- **Closing this gate requires**: every row above is PASS, with evidence cited from `.raw/google-ads/*.csv` or a screenshot in `_attachments/`.
- **Once closed**: open [[No Live Changes Without Approval]] and start the [[Manual Google Ads Action Queue Template]].

## Notes

- Auction Insights unavailability is noted here, not treated as a tracking failure.
- Any FAIL row should produce an item in `action-queue/` with priority **P0 - tracking**.
