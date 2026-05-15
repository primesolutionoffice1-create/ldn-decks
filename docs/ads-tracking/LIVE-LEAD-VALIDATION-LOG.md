# Live Lead Validation Log — Loudoun Decks

**Purpose:** validate GTM Version 25 after publish without changing budgets, bidding, or campaign structure.

**GTM live version:** `25`
**Version name:** `Ads tracking: lead_confirmed + event_id dedup`
**Published:** 2026-05-15

Use this for the first 5-10 real production leads after publish.

## Validation Rules

- Do not create fake customer leads unless explicitly approved.
- Do not change Google Ads bid strategies during this window.
- Do not enable Meta CAPI production activation during this window.
- Do not switch to Max Conversions, tCPA, or tROAS until this log passes.
- Treat one real homeowner submission as one expected `lead_confirmed` conversion.

## Expected Live Behavior

| Layer | Expected result |
|---|---|
| Website | User submits form successfully and lands on `/thank-you?eid=<event_id>` |
| GTM | `lead_confirmed - Custom Event` fires once |
| GA4 | `GA4 Event - generate_lead` fires once |
| Google Ads | `Google Ads - Form Lead Conversion` fires once |
| Google Ads dedup | Transaction ID equals `event_id` |
| Enhanced Conversions | `Google Ads - User Provided Data - Form Lead` fires once |
| Reload/back-forward | No duplicate source-side `lead_confirmed` in same session |

## Lead Validation Table

| # | Date/time | Lead source | Form/page | event_id captured? | Google Ads conversion seen? | Duplicate? | EC diagnostics | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |
| 2 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |
| 3 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |
| 4 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |
| 5 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |
| 6 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |
| 7 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |
| 8 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |
| 9 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |
| 10 |  |  |  | PASS / FAIL | PASS / PENDING / FAIL | YES / NO | PASS / PENDING / FAIL |  |

## Pass/Fail Gate

Phase 1A can be considered stable when:

| Gate | Required threshold |
|---|---|
| Real leads reviewed | Minimum 5, preferred 10 |
| Duplicate conversion rate | 0% observed, hard stop above 2% |
| Missing event_id rate | 0% observed, hard stop above 5% |
| Google Ads conversion delay | Accept normal 3-24h delay; investigate >48h |
| Enhanced Conversions diagnostics | Active/recording within 24-48h after real lead volume |
| UX issues | 0 broken submissions |

## Actions If Something Fails

| Failure | Action |
|---|---|
| Missing `event_id` | Stop bidding changes. Check `useLeadSubmit`, thank-you URL, and `DLV - event_id`. |
| Duplicate Google Ads conversions | Stop bidding changes. Re-check Transaction ID mapping and conversion action count setting. |
| Google Ads tag does not fire | Reopen GTM Version 25 and confirm `Google Ads - Form Lead Conversion` trigger is `lead_confirmed`. |
| Enhanced Conversions not firing | Confirm `Google Ads - User Provided Data - Form Lead` still fires on `lead_confirmed`. |
| Form UX breaks | Roll back GTM to Version 24 only if tag behavior is the cause; otherwise investigate site code. |

## After This Log Passes

Allowed next steps:

1. Confirm Google Ads conversion diagnostics are clean.
2. Begin Phase 2 revenue feedback implementation.
3. Prepare offline conversion import workflow.
4. Consider Meta Pixel/CAPI activation only after attribution stability is confirmed.

Still blocked:

- tCPA
- tROAS
- Max Conversions rollout
- Meta CAPI production activation
- Large budget changes
