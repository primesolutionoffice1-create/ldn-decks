# Duplicate-Fire Check — Loudoun Decks

Every event source × every dedup gate × every outcome. A conversion that fires twice is just as broken as one that fires zero times — Smart Bidding sees inflated counts and over-bids on the patterns producing the inflation.

---

## How duplicates happen (taxonomy)

| Type | Cause | Example |
|---|---|---|
| **Client-side double-push** | Same handler invoked twice, no idempotency | User double-clicks Submit before disable state lands |
| **Multi-event double-count** | Two distinct dataLayer events both wired to same conversion action | `form_submit` + `lead_confirmed` → both → Google Ads Lead |
| **Page-reload re-fire** | Effect re-runs on mount; same event_id reused | User refreshes `/thank-you` |
| **Cross-component re-mount** | Component unmounts and re-mounts (modal close + reopen, navigation back) | Modal toggling |
| **Server + client double** | Server CAPI fires same event as client Pixel without shared event_id | Meta Lead from Pixel + CAPI without dedup |
| **Cross-form double** | Same user submits two different forms in one session | Homepage form THEN ContactForm modal |

---

## Event ledger

All events that exist in the system today, with current dedup state.

### `form_submit` (dataLayer)

**Source:** [tracking.js:21-33](../../src/lib/tracking.js#L21-L33), pushed from [ContactForm.jsx:38](../../src/components/ContactForm.jsx#L38)
**Carries:** `event_id`, `email`, `phone`, click IDs, page

| Trigger path | Fires? | event_id | Dedup gate | Outcome |
|---|---|---|---|---|
| ContactForm normal submit | ✅ Yes | ✅ Set (crypto UUID) | `hasTracked.current` ref blocks 2nd push in same instance | ✅ Single fire |
| ContactForm — double-click on Submit button while submitting | ❌ Blocked | N/A | `status === "submitting"` disables button + `hasTracked.current` | ✅ Single fire |
| ContactForm — submit, modal closes, user reopens modal, submits again | ⚠️ Yes (NEW event_id) | ✅ Set (different UUID) | Component re-mount = new ref. No higher-scope guard. | ❌ **2 conversions counted** (distinct event_ids) |
| ContactHome (homepage form) submit | ❌ **NOT FIRED** | N/A | N/A | ❌ Missing entirely |
| `lead_confirmed` GTM trigger ALSO mapped to same Google Ads conversion | ⚠️ N/A | matches | GTM transaction_id dedup | If dedup ON → ✅ single. If OFF → ❌ **2 counted** |

### `lead_confirmed` (dataLayer)

**Source:** [tracking.js:57-64](../../src/lib/tracking.js#L57-L64), pushed from [ThankYouTracking.jsx:18](../../src/components/ThankYouTracking.jsx#L18)
**Carries:** `event_id` (from URL `?eid=`), page

| Trigger path | Fires? | event_id | Dedup gate | Outcome |
|---|---|---|---|---|
| ContactForm submit → /thank-you?eid=UUID | ✅ Yes | ✅ Set | None client-side. GTM transaction_id assumed. | If GTM dedup ON → ✅ |
| ContactHome submit → /thank-you (no eid) | ✅ Yes | ❌ **null** | None possible — event_id is null | ❌ **Every reload = +1 conversion** |
| User refreshes /thank-you?eid=UUID | ✅ Yes | ✅ Set (same UUID) | GTM transaction_id dedup IF configured | If dedup ON → ✅. If OFF → ❌ **2 counted** |
| Browser back-forward to /thank-you | ✅ Yes | ✅ Set (same UUID) | useEffect re-runs; same gate | Same as above |
| User shares /thank-you URL with friend → friend opens | ✅ Yes | ✅ Set (same UUID) | Same gate | If dedup ON → ✅ |
| Bot crawls /thank-you (despite noindex) | ⚠️ Likely no (no JS exec) | N/A | Robots noindex + bot signature | ✅ Very rare |
| User bookmarks /thank-you?eid=UUID, returns next month | ✅ Yes | ✅ Set (same UUID) | Conversion already counted weeks ago | ❌ **+1 phantom conversion** unless Google Ads conversion action window has expired |

### `phone_click` (dataLayer)

**Source:** [tracking.js:40-45](../../src/lib/tracking.js#L40-L45), called from 3 places only
**Carries:** hardcoded `phone: '+15716557207'`

| Trigger path | Fires? | event_id | Dedup gate | Outcome |
|---|---|---|---|---|
| Click Header phone link | ✅ Yes | ❌ Not set | None | Counts each click |
| Click FloatingCallButton | ✅ Yes | ❌ Not set | None | Counts each click |
| Click ContactForm sidebar phone | ✅ Yes | ❌ Not set | None | Counts each click |
| Click any of the 40+ untracked `tel:` links | ❌ **NOT FIRED** | N/A | N/A | Missing |
| User clicks tracked phone link 3 times | ✅ Fires 3× | ❌ None | None | ❌ **3 conversions counted** |
| User clicks tracked link on phone, dialer opens, doesn't actually call | ✅ Fires | ❌ None | None | ❌ Vanity click, not real conversion |

### Server-side Meta CAPI `Lead` event

**Source:** [metaCapi.js:101-134](../../src/server/metaCapi.js#L101-L134), called from [sendEmail.js:80-92](../../src/server/sendEmail.js#L80-L92)
**Carries:** `event_id` (passed from formData), hashed PII, fbc, fbp

| Trigger path | Fires? | event_id | Dedup gate | Outcome |
|---|---|---|---|---|
| ContactForm submit (env configured) | ✅ Yes | ✅ Set | Meta dedupes within 7-day window vs client Pixel with same eventID | If client Pixel exists with same eventID → ✅ deduped. If no client Pixel → single event, fine. |
| ContactHome submit (env configured) | ✅ Yes | ❌ **null** | None possible | If client Pixel later added → ❌ **cannot dedup**, double-counted |
| ContactForm submit (env NOT configured) | ❌ Skipped | N/A | N/A | ✅ Safe no-op |
| sendMail throws BEFORE Meta call | ❌ Doesn't reach Meta call | N/A | N/A | ✅ Correct — server returned failure, no event |
| Meta CAPI POST itself fails (404, 500, network) | ❌ Catch logged, not re-thrown | N/A | N/A | ✅ Fire-and-forget pattern correct |

### GA4 `generate_lead` (assumed inside GTM)

| Trigger path | Likely mapping | Risk |
|---|---|---|
| `form_submit` event in dataLayer | → GA4 Event tag fires generate_lead | If `lead_confirmed` ALSO mapped → 2 GA4 events for 1 lead |
| `lead_confirmed` event in dataLayer | → GA4 Event tag fires generate_lead | Same risk |

**Cannot verify without GTM container export.** Most likely scenario based on the tracking.js comment ("GA4 generate_lead + Google Ads Form Lead + Enhanced Conversions"): both events fire generate_lead in GA4, with event_id as a parameter. GA4 does NOT deduplicate by event_id by default — you'd see 2 events in GA4 reports for 1 actual lead.

**Recommendation:** in GTM, fire GA4 generate_lead from EXACTLY ONE of the two events (recommend `lead_confirmed` for proof-of-conversion semantics).

---

## Critical duplicate-fire scenarios — what happens TODAY

Assume the **worst plausible** GTM config (no dedup configured, both events mapped to same Google Ads action). This is the worst case; real GTM may be better. Until verified, treat as default.

### Scenario A: ContactForm submission, well-behaved user

```
Action → Events fired
─────────────────────
User submits form → form_submit (event_id=UUID1)
                  → server returns success
                  → Meta CAPI Lead (event_id=UUID1) — server-side
                  → router.push(/thank-you?eid=UUID1)
                  → lead_confirmed (event_id=UUID1)
                  → user closes tab

Google Ads Lead conversion count: 2 (form_submit + lead_confirmed)
  └── unless GTM transaction_id dedup is on, in which case: 1
GA4 generate_lead count: 2 (most likely) — needs to be 1
Meta Lead: 1 (server-side only; safe)
```

### Scenario B: ContactHome submission, well-behaved user

```
Action → Events fired
─────────────────────
User submits homepage form → server returns success
                           → Meta CAPI Lead (event_id=null) — server-side
                           → router.push(/thank-you)   [no eid]
                           → lead_confirmed (event_id=null)

Google Ads Lead conversion count: 1 (lead_confirmed only — form_submit never fired)
  ⚠️  BUT: no event_id means future server-side CAPI / additional client events
  cannot dedup against this one. Each /thank-you reload adds another +1.
GA4 generate_lead count: 1
Meta Lead: 1
```

### Scenario C: ContactForm submission, user reloads /thank-you 3 times

```
Action → Events fired
─────────────────────
Form submit + thank-you load → form_submit (UUID1) + lead_confirmed (UUID1)
Reload /thank-you             → lead_confirmed (UUID1)
Reload /thank-you             → lead_confirmed (UUID1)
Reload /thank-you             → lead_confirmed (UUID1)

Google Ads Lead conversion count:
  - With GTM transaction_id dedup ON: 1 (correct)
  - With GTM dedup OFF: 5 (form_submit once + lead_confirmed × 4)
GA4 events: 5 generate_lead rows in BigQuery export
```

### Scenario D: ContactHome submission, user reloads /thank-you 3 times

```
Action → Events fired
─────────────────────
Homepage form submit + thank-you → lead_confirmed (null)
Reload                            → lead_confirmed (null)
Reload                            → lead_confirmed (null)
Reload                            → lead_confirmed (null)

Google Ads Lead conversion count: 4
  ⚠️  No event_id, so dedup CANNOT fire. 4 distinct conversions always.
```

This is the worst case in the codebase today. Every homepage lead is at risk of N reloads = N conversions.

### Scenario E: Modal open-submit-close-reopen-submit

```
Action → Events fired
─────────────────────
Open contact modal, fill, submit  → form_submit (UUID1) + nav to /thank-you
Modal closes implicitly. User clicks browser back to original page.
Modal reopens.
User submits same form again       → form_submit (UUID2) — NEW component instance, new ref

Both pass server validation, two emails sent, two Meta CAPI events.
Google Ads Lead count: 2-4 depending on dedup config.
```

The two submits have DIFFERENT event_ids → dedup cannot catch them. They legitimately look like two different leads. Same user contacted twice in quick succession.

This is "correct" in a sense — two leads were generated — but Smart Bidding will overcount the value of bid contexts that produce double-submissions.

---

## Dedup gates today

| Gate | Where | Scope | Effective? |
|---|---|---|---|
| `hasTracked.current` ref | [ContactForm.jsx:14,36-39](../../src/components/ContactForm.jsx) | Per component instance | ✅ Prevents same-instance double-fire |
| Submit button `disabled={status === "submitting"}` | ContactForm + ContactHome | Per submit attempt | ✅ Prevents double-click spam |
| Shared `event_id` UUID in URL | ContactForm → /thank-you | Cross-page within session | ✅ For ContactForm only. ❌ Missing for ContactHome. |
| GTM `transaction_id` dedup | GTM container — **NOT VERIFIED** | Per Google Ads conversion action | ❓ Unknown |
| Google Ads "Don't allow duplicate conversions" | Conversion action setting — **NOT VERIFIED** | Per conversion action | ❓ Unknown |
| Meta `event_id` field on CAPI payload | [metaCapi.js:88](../../src/server/metaCapi.js#L88) | 7-day window per Meta Pixel | ✅ For ContactForm. ❌ Null for ContactHome. |
| sessionStorage / localStorage anti-replay | **NOT IMPLEMENTED** | Per browser tab/session | ❌ None |
| Server-side idempotency key in sendContactEmail | **NOT IMPLEMENTED** | Per server action call | ❌ None — same form can submit twice, two emails sent |

---

## Recommended dedup architecture

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. CLIENT-SIDE COMPONENT GUARD                                  │
│    hasTracked.current (already exists in ContactForm)           │
│    → Add to ContactHome                                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 2. SESSION-SCOPED ANTI-REPLAY                                   │
│    sessionStorage.setItem(`lead_fired_${event_id}`, '1')        │
│    → Block re-fire of lead_confirmed within session             │
│    → Implement in trackLeadConfirmed                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 3. GTM TRANSACTION_ID DEDUP                                     │
│    Google Ads Lead tag:                                         │
│      transaction_id = {{DLV - event_id}}                        │
│      Trigger: ONLY lead_confirmed (single source of truth)      │
│      "Don't allow duplicate conversions" enabled                │
│                                                                 │
│    GA4 generate_lead tag:                                       │
│      Trigger: ONLY lead_confirmed                               │
│      Parameter: event_id                                        │
│                                                                 │
│    Meta Pixel Lead (client) tag (when added):                   │
│      Trigger: ONLY form_submit                                  │
│      eventID: {{DLV - event_id}}                                │
│      Meta will dedupe vs server CAPI within 7d window           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 4. SERVER-SIDE IDEMPOTENCY                                      │
│    sendContactEmail:                                            │
│      Check Redis/memory cache for event_id                      │
│      If seen in last 1h, return success without sending email   │
│      Else: send email, set cache flag                           │
│    → Prevents server double-fire on resubmit                    │
│    → Optional; small business may skip                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 5. EVENT TRIGGER SEPARATION                                     │
│    form_submit → Meta Pixel Lead ONLY (when added)              │
│    lead_confirmed → Google Ads Lead + GA4 generate_lead         │
│                                                                 │
│    Never map both events to the same destination tag.           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Verification protocol

After fixes are applied, verify with Google Tag Assistant (Preview Mode):

1. **Open Preview Mode** in the GTM container
2. **Navigate to homepage** → confirm gtm.dom + gtm.load fire
3. **Submit ContactHome form** → expect:
   - `form_submit` event with event_id present
   - Google Ads tag does **NOT** fire (form_submit doesn't map to it anymore)
   - Meta Pixel tag fires (if Pixel added) with eventID matching event_id
4. **Navigate to /thank-you?eid=UUID** → expect:
   - `lead_confirmed` event with same event_id
   - Google Ads Lead tag fires with transaction_id = event_id
   - GA4 generate_lead fires
5. **Refresh /thank-you** → expect:
   - `lead_confirmed` event fires again with same event_id
   - Google Ads tag fires BUT conversion is **flagged as duplicate** in conversion debugger
   - GA4 generate_lead fires again (GA4 doesn't dedupe; report in BigQuery will need DISTINCT on event_id)
6. **Resubmit form (modal reopen)** → expect:
   - NEW event_id
   - Whole chain fires again as a distinct conversion

If any of these don't match, the dedup architecture is misconfigured.

---

## TL;DR

**Today's worst-case duplicate risk:** every ContactHome submission can produce unlimited Google Ads conversions if the user reloads /thank-you, because `event_id=null` defeats every dedup gate downstream.

**Fix priority:**
1. Make ContactHome generate + pass an event_id (TRACKING-FIX-QUEUE.md #1)
2. Verify or configure GTM transaction_id dedup on Google Ads Lead tag (TRACKING-FIX-QUEUE.md #4)
3. Map Google Ads Lead conversion to ONLY `lead_confirmed`, not both events (TRACKING-FIX-QUEUE.md #4)
4. Add sessionStorage guard in trackLeadConfirmed (TRACKING-FIX-QUEUE.md #10)

After those four, the system is dedup-clean.
