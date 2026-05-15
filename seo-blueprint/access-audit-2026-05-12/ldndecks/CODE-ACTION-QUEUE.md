# CODE-ACTION-QUEUE — ldndecks.com

**Date:** 2026-05-12  **Base:** main @ d26e458  **Branch:** audit/access-readiness-2026-05-12

Source-verified codebase tasks. Each task is grounded in a specific file read on main HEAD d26e458. No task requires GA4 / GTM / Ads / DNS / Vercel UI access (those are tracked separately in MISSING-ACCESS-ACTION-PLAN.md). Tasks should be executed on a NEW feature branch off main — not on this audit branch.

---

## Task 1 — ContactHome.jsx instrumentation parity 🔴 highest priority

**Files:** `src/components/ContactHome.jsx`

**Current state (verified):**
- Imports: `useState`, `useRef`, `useRouter`, `useContact`, `sendContactEmail`
- Submit flow: `onSubmit` + `preventDefault` + `sendContactEmail` + router.push to /thank-you
- Does NOT import: `trackFormSubmit`, `trackPhoneClick`, `getClickIds`, `CLICK_ID_KEYS`

**Required change:**
1. Add imports: `import { trackFormSubmit, trackPhoneClick } from '@/lib/tracking';` and `import { getClickIds, CLICK_ID_KEYS } from '@/lib/clickIds';`
2. Inside the submit handler, before calling `sendContactEmail`:
   - Generate an event_id (`crypto.randomUUID()` or import the helper if ContactForm.jsx exports it).
   - Call `trackFormSubmit({ event_id, form_location: 'home' })`.
   - Append `getClickIds()` to the FormData being sent to the server.
3. After successful submit, `router.push(`/thank-you?eid=${event_id}`)`.
4. If the component has any tel: link, attach an `onClick` calling `trackPhoneClick`.

**Risk:** Low. Additive instrumentation. No behavior change to the submission itself.

**Expected impact:** Closes the single biggest attribution gap. Homepage leads (the primary lead surface) become fully attributable.

**Verification:**
- Reproduce in GA4 DebugView: submit homepage form, confirm `form_submit` event fires with event_id matching the eid in the /thank-you URL.
- Inspect lead email body: `gclid` field present when landing URL had `?gclid=...`.

**External UI access required:** No (for shipping); Yes (for full verification in GA4 DebugView).

---

## Task 2 — ThankYouTracking client-side dedupe 🟠

**Files:** `src/components/ThankYouTracking.jsx`

**Current state (verified):**
- Imports: `useEffect`, `useSearchParams`, `trackLeadConfirmed`
- Calls `trackLeadConfirmed` (referenced twice in component); reads `eid` from search params
- No sessionStorage / localStorage / hasFired guard observed

**Required change:**
```js
useEffect(() => {
  if (!eid) return;
  const key = `ldc_fired_${eid}`;
  if (sessionStorage.getItem(key)) return;
  sessionStorage.setItem(key, '1');
  trackLeadConfirmed({ event_id: eid });
}, [eid]);
```

**Risk:** Low. SessionStorage write is per-tab; ad-block users keep working (gracefully no-ops).

**Expected impact:** Prevents GA4 `lead_confirmed` double-counting on /thank-you refresh. Ads + Meta are already safe via event_id; this fixes the GA4 side.

**Verification:**
- Submit form, land on /thank-you, refresh page 3×: GA4 DebugView shows exactly 1 lead_confirmed per submission.

**External UI access required:** No (for shipping); Yes (DebugView for verification).

---

## Task 3 — Honeypot field on both forms 🟠

**Files:** `src/components/ContactForm.jsx`, `src/components/ContactHome.jsx`, `src/server/sendEmail.js`

**Current state (verified):** No honeypot field; no rejection logic in server.

**Required change:**
1. In each form JSX, add a visually-hidden input:
   ```jsx
   <input type="text" name="company_url" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',opacity:0}} />
   ```
2. In `sendEmail.js`, at the top of `sendContactEmail`:
   ```js
   const company_url = formData.get('company_url');
   if (company_url) {
     // Silent success to bot, no email, no CAPI
     return { ok: true, event_id: null };
   }
   ```

**Risk:** Low. Real users won't fill a hidden field.

**Expected impact:** Cuts bot-driven `lead_confirmed` events. Improves GA4 signal quality directly.

**Verification:** Submit form with browser dev-tools populating the hidden field; confirm no email arrives.

**External UI access required:** No.

---

## Task 4 — Server-side rate-limit 🟠

**Files:** `src/server/sendEmail.js`

**Current state (verified):** No rate-limit. No IP / fingerprint check.

**Required change:** Add a lightweight per-IP rate-limit. Two options:
- **Option A (zero-dep):** in-memory Map keyed by request headers from `next/headers`. Suitable only because Vercel serverless function instances are short-lived; this is best-effort.
- **Option B (durable):** Upstash Redis with @upstash/ratelimit. New env var required.

Recommend Option B if any env var work is planned in Phase 0; otherwise ship Option A as a stopgap.

**Risk:** Medium for Option B (new dependency); Low for Option A.

**Expected impact:** Caps abuse during ad-spam waves. Reduces noise floor for Smart Bidding.

**Verification:** Send 20 submissions from a single IP within 60s; confirm 4–5 succeed and the rest receive 429.

**External UI access required:** No for Option A; Yes for Option B (Vercel env var).

---

## Task 5 — Input validation in sendContactEmail 🟡

**Files:** `src/server/sendEmail.js`

**Current state (verified):** No zod / yup / manual schema validation.

**Required change:** Add lightweight checks at the top of `sendContactEmail`:
- email: must match a regex
- phone: must match a digit pattern (10+ digits after normalization)
- zip: 5 digits
- message: max length (e.g., 5000 chars)
- All required fields present

Return `{ ok: false, error: 'invalid_input' }` on failure; do not throw (preserves CAPI/Pixel dedupe semantics).

**Risk:** Low.

**Expected impact:** Prevents malformed CAPI events being sent (Meta rejects them anyway, but cleaner is better). Prevents inbox spam on free-form fields.

**Verification:** Submit a payload with malformed email; confirm 400-equivalent response and no email sent.

**External UI access required:** No.

---

## Task 6 — Add ttclid to CLICK_ID_KEYS 🟡

**Files:** `src/lib/clickIds.js`

**Current state (verified):** CLICK_ID_KEYS = ['gclid','gbraid','wbraid','fbclid','msclkid']

**Required change:** Add 'ttclid'. Confirm cookie naming and FormData attachment downstream pick it up automatically (they should, since the array drives the loop).

**Risk:** Negligible.

**Expected impact:** TikTok ad spend becomes attributable.

**Verification:** Land on site with `?ttclid=test123`; refresh; submit form; confirm cookie persists and form payload includes `ttclid=test123`.

**External UI access required:** No (TikTok Ads Manager access required separately if you intend to use the data).

---

## Task 7 — Centralize event_id helper 🟡

**Files:** `src/lib/tracking.js` (or new `src/lib/eventId.js`)

**Current state (verified):** `event_id` referenced in multiple places. Currently appears to be generated client-side and threaded through. No central helper observed in tracking.js (no `crypto`, `UUID`, `uuid` tokens).

**Required change:** Add (or expose) a single generator:
```js
export function newEventId() {
  return (crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`);
}
```
Use it in both ContactForm and ContactHome.

**Risk:** Low; refactor only.

**Expected impact:** Consistency. Easier QA.

**Verification:** Grep for ad-hoc UUID generation in ContactForm.jsx; replace with import.

**External UI access required:** No.

---

## Task 8 — Sitewide tel: phone_click sweep 🟡

**Files:** any component rendering tel: links. Inventory required first.

**Current state (verified):** `trackPhoneClick` exists and is called by ContactForm. Coverage on other surfaces (sticky header, footer, mobile call bar, service pages) not verified.

**Required change:** Audit JSX for `href="tel:..."` and ensure each has `onClick={() => trackPhoneClick({ location })}`. Consider a tiny `<CallLink>` component to centralize.

**Risk:** Low.

**Expected impact:** Phone-click conversion becomes accurate across the whole site, not only the contact form.

**Verification:** Click every tel: link sitewide; GA4 DebugView shows phone_click with the right `location` param.

**External UI access required:** No.

---

## Task 9 — Document existing event taxonomy 🟢

**Files:** `docs/ads-tracking/EVENT-TAXONOMY.md` (new)

**Required change:** Add a single doc listing every dataLayer event currently pushed by tracking.js, the surfaces that push them, and the GA4 / Ads / Meta mapping. Becomes the source of truth for QA.

**Risk:** Zero.

**Expected impact:** Reduces future audit overhead and accidental duplicate events.

**Verification:** Doc reviewable in PR.

**External UI access required:** No.

---

## Task 10 — Add QA test matrix for tracking 🟢

**Files:** `docs/ads-tracking/QA-TEST-PLAN.md` (already exists — extend) or new `docs/ads-tracking/QA-TEST-MATRIX.md`

**Required change:** Extend the existing QA plan with a test matrix:

| Scenario | Expected GA4 events | Expected Ads | Expected CAPI | Verify in |
|---|---|---|---|---|
| Landing with ?gclid=X, submit ContactForm | form_submit, page_view /thank-you, lead_confirmed | Conversion w/ EC | Lead event with gclid in user_data | GA4 DebugView, Ads Conversions, Events Manager |
| ... | ... | ... | ... | ... |

**Risk:** Zero.

**External UI access required:** No to author; Yes to execute the matrix.

---

## QA checklist (apply to any branch merging these tasks)

- [ ] `npm run build` succeeds locally.
- [ ] No new console errors on / and /thank-you.
- [ ] Submit each form path; lead email arrives; CAPI event_id matches GA4 event_id.
- [ ] Refresh /thank-you 3× — only one GA4 lead_confirmed.
- [ ] Land with each click ID one-at-a-time (?gclid=, ?gbraid=, ?wbraid=, ?fbclid=, ?msclkid=, ?ttclid=) — confirm cookie + FormData carry it.
- [ ] Honeypot populated via dev tools — confirm silent reject (no email).
- [ ] Vercel preview deploy passes Lighthouse without new regressions.
- [ ] No new CSP violations.

---

## Rollback plan

- All changes additive (instrumentation, honeypot, validation). No DB migration.
- Per Vercel: instant rollback to the prior deployment via the Deployments tab.
- Per code: `git revert <commit>` on the feature branch followed by re-deploy.
- Tracking-specific rollback details are in `docs/ads-tracking/ROLLBACK-PLAN.md`.

---

## Priority order for Phase 1 code work

1. Task 1 (ContactHome parity) — fixes the largest single attribution gap.
2. Task 3 + Task 4 + Task 5 (honeypot, rate-limit, validation) — signal-quality.
3. Task 2 (client-side dedupe) — GA4 accuracy.
4. Task 6 (ttclid) — future-proof for TikTok ad tests.
5. Task 7 (event_id helper) — consistency refactor; bundle with Task 1.
6. Task 8 (tel: sweep) — coverage parity for phone conversions.
7. Tasks 9 + 10 (docs) — last; document the now-stable taxonomy.

---

## Out of scope for this queue

- CRM ingestion (Phase 2; planned in IMPLEMENTATION-ROADMAP.md).
- Offline conversion CSV uploads (Phase 2; depends on CRM).
- GTM / GA4 / Ads UI configuration (MISSING-ACCESS-ACTION-PLAN.md).
- DNS records (MISSING-ACCESS-ACTION-PLAN.md).
- Local-SEO profile claims (MISSING-ACCESS-ACTION-PLAN.md).
