---
brain_schema: ads-brain.v1
type: gate
platform: google
title: "Day 0 Attribution Readiness"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: partial
blocks: optimization
sources:
  - "docs/tracking-audit/TRACKING-AUDIT.md"
  - "docs/tracking-audit/FINAL-ATTRIBUTION-SIGNOFF.md"
  - "docs/tracking-audit/ATTRIBUTION-RISKS.md"
  - "docs/tracking-audit/DUPLICATE-FIRE-CHECK.md"
  - "git: c9cefd8, 8e0ef30, 5f86dce, 2774d7f, dca4820"
---

# Day 0 Attribution Readiness

How well does the click-to-conversion chain survive real-world browser conditions, and is every conversion uniquely identifiable end to end? Companion to [[day0-tracking-gate]] focused on the **durability** properties of the attribution layer.

## Definitions

- **Deterministic** — one user action produces a fixed, predictable set of events.
- **Idempotent** — the same action repeated produces the same effect (no inflation).
- **Survivable** — attribution holds across page refresh, SPA nav, modal toggling, slow networks.
- **Hashable** — PII never leaves the browser in plaintext.
- **Auditable** — every conversion can be traced to a specific click-ID + form submission.
- **Reversible** — any change can be rolled back without data loss.

## Survivability matrix

### Page refresh on /thank-you

- **Status:** VERIFIED
- **Evidence:** `src/lib/tracking.js:91-104` — sessionStorage `lead_fired_${eventId}` blocks duplicate `lead_confirmed`. Commit `dca4820` / PR #10.
- **Risk:** LOW
- **Dependency:** none
- **Next action:** none
- **Owner type:** code (done)

### Browser back/forward to /thank-you

- **Status:** VERIFIED (same mechanism as refresh).
- **Evidence:** Same anti-replay guard fires on `useEffect` re-run. `src/components/ThankYouTracking.jsx` re-runs `useEffect` on mount; the sessionStorage key blocks the duplicate.
- **Risk:** LOW
- **Dependency:** none
- **Next action:** none
- **Owner type:** code (done)

### New tab with /thank-you URL

- **Status:** PARTIAL
- **Evidence:** New tab = new sessionStorage scope, so client anti-replay does not fire. The duplicate `lead_confirmed` is then deduped at GTM via `transaction_id={{DLV - event_id}}` and at Google Ads via "Don't allow duplicate conversions". `FINAL-ATTRIBUTION-SIGNOFF.md §A4`.
- **Risk:** MED until B1.2 + B1.4 in `FINAL-ATTRIBUTION-SIGNOFF.md` are verified.
- **Dependency:** GTM mapping; Ads UI dedup toggle.
- **Next action:** verify GTM transaction_id mapping and Google Ads "Don't allow duplicate" on Lead action.
- **Owner type:** GTM + Ads UI

### Cookies disabled

- **Status:** VERIFIED (graceful degradation)
- **Evidence:** `src/lib/clickIds.js:8-12` returns nulls when document is unavailable or cookie absent. `useLeadSubmit.js:22-25` only appends click IDs that exist. Form still submits; tracked as direct/organic.
- **Risk:** LOW (lost attribution, no crash).
- **Dependency:** none
- **Next action:** none.
- **Owner type:** code (done)

### Ad blocker blocks GTM

- **Status:** VERIFIED (graceful degradation)
- **Evidence:** `window.dataLayer.push` calls queue locally even if GTM never loads — no exception thrown. Meta CAPI server-side still fires regardless of client-side blocks. Lead email is still sent.
- **Risk:** LOW (lost client-side conversions, but server-side and email-pipeline both deliver).
- **Dependency:** none
- **Next action:** none.
- **Owner type:** code (done)

### Safari ITP (7-day client cookie cap)

- **Status:** KNOWN LIMITATION
- **Evidence:** Per `FINAL-ATTRIBUTION-SIGNOFF.md §A4` and `ATTRIBUTION-RISKS.md` R2 — Safari caps script-set cookies at 7 days, even though our `Max-Age` says 90. gclid cookie expires client-side after 7 days; users converting Day 8+ on Safari are lost to client-side click-ID dedup.
- **Risk:** MED for Safari mobile traffic share.
- **Dependency:** server-side path (Meta CAPI) closes the loop for Meta but not for Google Ads. Server-to-server Google Ads Conversions API would close it; not implemented.
- **Next action:** P2 — evaluate Google Ads Conversions API for Safari coverage if Safari mobile share materially affects reporting.
- **Owner type:** code (future)

### Slow network — user submits before GTM loads

- **Status:** VERIFIED
- **Evidence:** dataLayer is initialized in the page shell (`window.dataLayer = window.dataLayer || []`); pushes queue and are flushed when GTM loads. `FINAL-ATTRIBUTION-SIGNOFF.md §A4`. GTM is `afterInteractive` (not `lazyOnload`) — commit `5f86dce`.
- **Risk:** LOW
- **Dependency:** none
- **Next action:** none.
- **Owner type:** code (done)

### Tab close between submit and /thank-you

- **Status:** PARTIAL
- **Evidence:** Server email + Meta CAPI (when active) fire before the response returns. Client `form_submit` may be lost if GTM hasn't drained. `lead_confirmed` won't fire because `/thank-you` never loads.
- **Risk:** LOW (lead still reaches sales inbox); MED for Smart Bidding (the missed `lead_confirmed` reduces optimization signal).
- **Dependency:** none on code; server-side Google Ads Conversions API would close it if needed.
- **Next action:** monitor — if tab-close rate is high (mobile bounce after submit), prioritize server-side Google Ads conversions API.
- **Owner type:** code (future)

### gclid lost in www → non-www redirect

- **Status:** UNKNOWN (must be verified live)
- **Evidence:** `ADS-CONVERSION-INTEGRITY.md §2.6` calls out this risk explicitly. The fix is straightforward: middleware must preserve query string on the canonical 301. Branch `fix/paid-search-sxo-p1` recent commits include canonical-redirect work (`122656d fix(seo): align canonical redirect behavior to 301`).
- **Risk:** MED until verified with `curl -sI` per the runbook.
- **Dependency:** live `curl` test against production.
- **Next action:** run `curl -sI "https://www.ldndecks.com/?gclid=CURLTEST123"` and confirm `Location` preserves `?gclid=`. If not, file a P0 middleware fix.
- **Owner type:** code (verify) + deploy

## Dedup matrix

Every place an event can fire, every place dedup can catch it.

| Event source | Fires from | Dedup mechanism | Status |
|---|---|---|---|
| `form_submit` (client) | `useLeadSubmit.js:67-77` | `hasTracked.current` ref (Strict Mode + same-instance) | VERIFIED |
| `form_submit` (GTM → Google Ads tag, if mapped) | GTM trigger | `transaction_id={{DLV - event_id}}` + Google Ads "Don't allow duplicate" | BLOCKED (GTM unverified) |
| `lead_confirmed` (client) | `ThankYouTracking.jsx:16-19` → `tracking.js:91-111` | sessionStorage `lead_fired_${eventId}` (same-tab); GTM `transaction_id` (cross-tab) | VERIFIED (same-tab); BLOCKED (cross-tab) |
| Meta CAPI Lead (server) | `sendEmail.js:97-109` → `metaCapi.js:101-134` | Meta event_id dedup window (7 days) | VERIFIED (code); env-gated for activation |
| Future client-side Meta Pixel (if added) | GTM | Same event_id as CAPI | NOT IMPLEMENTED |

## event_id propagation map

```
crypto.randomUUID() in useLeadSubmit.js:32
        │
        ├─ FormData.append('event_id', eventId)         → server side
        │       ├─ console log in [sendContactEmail]   → audit trail
        │       └─ sendMetaLeadEvent({ eventId })       → metaCapi.js event_id
        │
        ├─ trackFormSubmit({ eventId })                 → dataLayer form_submit.event_id
        │       └─ (GTM) → Google Ads Form Lead tag's transaction_id ⚠ BLOCKED until B1.2
        │
        └─ router.push(`/thank-you?eid=${eventId}`)
                └─ ThankYouTracking.jsx reads ?eid
                        └─ trackLeadConfirmed({ eventId }) → dataLayer lead_confirmed.event_id
                                ├─ sessionStorage anti-replay
                                └─ (GTM) → Google Ads Lead tag's transaction_id ⚠ BLOCKED until B1.2
```

All five places see the same UUID. The only places this can break:

1. GTM doesn't read `{{DLV - event_id}}` into the `transaction_id` field of the Google Ads tag (B1.2 BLOCKED).
2. Google Ads conversion action lacks "Don't allow duplicate conversions" (B1.4 BLOCKED).
3. Future server-side Google Ads Conversions API isn't wired (NOT IMPLEMENTED — not on critical path until offline imports start scaling).

## Click-ID lifecycle audit

| Stage | Mechanism | File:line | Survives | Status |
|---|---|---|---|---|
| Initial capture from URL | inline `beforeInteractive` script | `src/app/layout.js:62-64` | Page navigation | VERIFIED |
| Cookie storage | `Max-Age=7776000` (90d), `SameSite=Lax`, `path=/` | `layout.js:63` | 90 days (browser-dependent — Safari ITP caps at 7d) | VERIFIED (with Safari caveat) |
| Client-side read | `src/lib/clickIds.js` SSR-safe reader | n/a | n/a | VERIFIED |
| Form forwarding to server | `useLeadSubmit.js:22-25` appends to FormData | n/a | Server request | VERIFIED |
| Server email surfacing | `sendEmail.js:46-67` includes attribution block | n/a | Inbox | VERIFIED |
| Meta CAPI hand-off (fbclid only) | `metaCapi.js:62-65` constructs `fbc` | n/a | Meta Events Manager | VERIFIED (env-gated) |
| Offline conversion upload (CRM → Ads) | NOT IMPLEMENTED | n/a | n/a | NOT IMPLEMENTED |

## Property-by-property readiness

| Property | Code layer | GTM layer | Ads UI layer | Overall |
|---|---|---|---|---|
| Deterministic | VERIFIED | BLOCKED (B1) | BLOCKED (B1.4) | PARTIAL |
| Idempotent | VERIFIED | BLOCKED (B1) | BLOCKED (B1.4) | PARTIAL |
| Survivable | VERIFIED (same-tab); PARTIAL (cross-tab) | BLOCKED (B2 + B1) | BLOCKED | PARTIAL |
| Hashable | code provides plaintext to dataLayer | BLOCKED (B3 — must hash in GTM) | n/a | PARTIAL — **HIGH risk if not closed** |
| Auditable | VERIFIED | UNKNOWN | UNKNOWN until offline imports run | PARTIAL |
| Reversible | VERIFIED (atomic commits) | VERIFIED (GTM versioning) | VERIFIED (Ads UI history) | VERIFIED |

## Overall attribution-readiness verdict

**PARTIAL — structurally sound, externally unverified.**

Code layer hits every survivability and dedup requirement that code can guarantee. The remaining six BLOCKED rows all live outside the repo (GTM container + Google Ads UI + Safari ITP + missing CRM). None of them require code changes to unblock.

Movement from PARTIAL → PASS for this gate is contingent on:

1. B1.2 + B1.4 (GTM transaction_id + Ads "Don't allow duplicate") — closes deterministic + idempotent + cross-tab survivability.
2. B3 (Enhanced Conversions hashing) — closes hashable.
3. At least one offline-conversion test upload — closes auditable.
4. `curl -sI` verification of www→non-www gclid preservation — closes the UNKNOWN row.

Once those four close, attribution is production-grade per the definition in `FINAL-ATTRIBUTION-SIGNOFF.md §D`.

## Related

- [[day0-tracking-gate]] — the master gate page
- [[day0-smart-bidding-readiness]] — when bid changes become safe
- [[day0-blockers]] — ordered blocker list
- [[Tracking and Attribution Risk Register]]
- [[Server-Side Conversion API Gate]] — when CAPI activation is reached
