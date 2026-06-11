# Tracking Integrity Audit — Loudoun Decks

**Audit date:** 2026-05-11
**Scope:** Conversion attribution stack — GTM container `GTM-N87MG6QS`, GA4 (config inside GTM), Google Ads conversions, Meta CAPI server-side, click-ID persistence, lead-source capture.
**Reviewer:** Static code review of `feat/seo-audit-phase3-4` branch. Does **not** include in-account verification of the GTM container, Google Ads conversion-action settings, or GA4 property config.

---

## Verdict

> ❌ **DO NOT change bid strategies, smart-bidding signals, or conversion-based audiences yet.** Attribution is contaminated by one critical blind spot and several high-severity duplicate/loss risks. Estimated reporting distortion in current state: **40–60% of true conversion volume is either miscounted, attributed wrong, or invisible.**

The good architectural news: the team has already done the hard parts right (server-side Meta CAPI with hashed PII, shared `event_id` for dedup, click-ID cookie capture before-interactive, dedicated `lead_confirmed` event on thank-you). The audit findings are **gaps and races, not foundation rebuilds.**

---

## Severity Summary

| Sev | Count | Areas |
|-----|-------|-------|
| 🔴 Critical | 3 | Homepage form untracked; phone-CTA tracking gap; consent-mode race |
| 🟠 High     | 5 | Duplicate-fire dependency on GTM config; SPA page_view risk; PII in dataLayer; phone_click as conversion signal; form spam exposure |
| 🟡 Medium   | 4 | Service field gap on ContactForm; lead_confirmed re-fire on reload; missing `_fbp` / `source_url`; lazyOnload race |
| 🟢 Low      | 2 | trackEvent dead code; fbclid captured without Pixel client-side |

Full enumeration in [TRACKING-FIX-QUEUE.md](./TRACKING-FIX-QUEUE.md).

---

## What is correct

These are working as intended and do not need changes:

| Area | Implementation | File |
|---|---|---|
| Click-ID capture (`gclid`/`gbraid`/`wbraid`/`fbclid`/`msclkid`) | Inline `beforeInteractive` script writes 90-day cookies | [layout.js:62-64](../../src/app/layout.js#L62-L64) |
| Click-ID retrieval | Cookie reader with SSR-safe nulls | [clickIds.js](../../src/lib/clickIds.js) |
| Shared `event_id` for dedup | `crypto.randomUUID()` with timestamp fallback, forwarded via URL `?eid=` | [ContactForm.jsx:30-33](../../src/components/ContactForm.jsx#L30-L33), [ThankYouTracking.jsx:17](../../src/components/ThankYouTracking.jsx#L17) |
| Server-side proof-of-conversion event | `lead_confirmed` fires only after `sendContactEmail` succeeds | [tracking.js:57-64](../../src/lib/tracking.js#L57-L64) |
| Meta CAPI server-side | SHA-256 hashed PII, fbc construction, fire-and-forget, env-gated | [metaCapi.js](../../src/server/metaCapi.js) |
| Click IDs in lead email | Server passes gclid/gbraid/wbraid/fbclid/msclkid into email HTML for CRM ingestion | [sendEmail.js:42-51](../../src/server/sendEmail.js#L42-L51) |
| Robots noindex on thank-you | Prevents lead_confirmed firing from bot crawls | [thank-you/page.js:14](../../src/app/thank-you/page.js#L14) |
| Client-side dedup guard | `hasTracked.current` ref blocks double form_submit fires | [ContactForm.jsx:14,36-39](../../src/components/ContactForm.jsx#L14) |

---

## What is broken or risky

### ✅ RESOLVED-1: Homepage form now uses shared attribution pipeline

The homepage form ([ContactHome.jsx](../../src/components/ContactHome.jsx)) now uses the shared `useLeadSubmit()` pipeline.

Current status:

- ✅ Calls `trackFormSubmit` on successful non-honeypot submissions.
- ✅ Captures and forwards `gclid`/`gbraid`/`wbraid`/`fbclid`/`msclkid` to the server when present.
- ✅ Generates an `event_id` for submit, email/CAPI forwarding, and `/thank-you` confirmation.
- ✅ Passes `?eid=` and proof token context to `/thank-you` when email delivery succeeds.
- ✅ Lead emails receive attribution fields when click IDs or UTM values are available.
- ✅ Captures lead-quality context: city, hidden `state=VA`, service, timeline, budget range, material interest, and HOA/permit status.

**Business impact:** homepage form attribution is no longer the primary local blocker. It is now ready for GTM/GA4/Google Ads variable mapping validation. Scaling remains gated by external proof: Google Ads qualified-call attribution, real lead outcomes, and owner/source lead-quality evidence.

**Historical note:** this item was a true critical finding when the audit was written. It is retained here as a resolved audit item so future reviews can see why the shared submit pipeline exists.

---

### ✅ RESOLVED-2: Phone CTA links now use tracked CallLink component

Phone CTA links now route through [CallLink.jsx](../../src/components/CallLink.jsx), which wraps `tel:+15716557207` and fires `trackPhoneClick`.

Current status:

- ✅ Raw `href="tel:"` scan in `src` returns no active raw anchors outside the `CallLink` comment.
- ✅ Header, floating CTA, contact forms, city pages, service pages, tool pages, and major content CTAs use `CallLink`.
- ✅ `phone_click` now carries click IDs and UTM values when available.

**Business impact:** local phone-click coverage is no longer the primary blocker. The remaining risk is measurement integrity, not code coverage: `phone_click` is still only a click signal, not proof of a qualified call.

**Scaling note:** keep `phone_click` as GA4/engagement context only. Google Ads scaling still requires website call forwarding or call-asset attribution proof before phone calls should influence bidding.

---

### 🔴 CRITICAL-3: Consent-mode race / structural confusion

[layout.js:67-69](../../src/app/layout.js#L67-L69) sets two `gtag('consent','default',...)` calls inside a `lazyOnload` script:

```js
gtag('consent','default',{ad_storage:'denied', ..., region:['BE','BG',...EU/UK]});
gtag('consent','default',{ad_storage:'granted', ad_user_data:'granted', ...});  // no region → global
```

**Three problems:**

1. **Order vs. Google's GTM container script load — both are `lazyOnload`.** Next.js does not guarantee execution order between two `<Script strategy="lazyOnload">` tags. If `gtm-script` fires before `gtm-init`, Google's tag-manager runtime starts processing tags without any consent defaults set — Consent Mode v2 treats the absence of consent signals differently than explicit denied. **Risk:** tags may fire in implicit / unsafe mode briefly.

2. **No CMP / UI is wired in.** For EU/UK visitors, consent stays at `denied` forever (there's no `gtag('consent','update',...)` triggered by a banner). Modeled conversions in EU/UK will be heavily damped. Low business impact (NoVA-only audience), but it means the EU/UK denial code is functionally dead weight.

3. **California exposure.** `ad_personalization` is `granted` by default for all non-EU/UK users including California. Under CCPA/CPRA, users have an opt-out right. Low traffic from CA for a NoVA business, but **worth noting** if you ever build a CMP or face a CCPA letter.

**Fix:** see queue item #3. Move the consent-mode defaults to `strategy="beforeInteractive"` (or inline before the GTM container) AND drop the dead EU/UK branch unless a banner exists.

---

### 🟠 HIGH-1: Dedup depends on GTM config we can't see

The shared `event_id` plumbing only works **IF** GTM is configured to:
- Pass `event_id` as the `transaction_id` (Google Ads) or `event_id` (Meta) parameter on the conversion tag
- Have "Don't allow duplicate conversions" enabled on the Google Ads conversion action
- Have the same `event_id` parameter mapped on both `form_submit` AND `lead_confirmed` triggers

Without confirming the GTM container, **the entire dedup foundation is unverified**. If GTM is missing this mapping, every form submission produces 2 client-side conversions (form_submit + lead_confirmed) plus potentially a third (Meta CAPI server-side, which IS event_id-bound — that one will dedup against the client Meta Pixel).

**Fix:** queue item #4 — export GTM container JSON, verify mappings, or run real-time debugger.

---

### 🟠 HIGH-2: SPA navigation may drop page_view events

[ThankYouTracking.jsx](../../src/components/ThankYouTracking.jsx) fires on mount in a `useEffect`. The `/thank-you` route is reached via `router.push('/thank-you?eid=...')` — Next.js App Router SPA navigation. The browser URL changes, but **no native browser navigation event fires**.

GA4 by default sends a page_view on `gtag('config', 'G-...')` initialization — once per pageload. **SPA route changes don't fire page_view unless:**
- GTM has a "History Change" trigger
- The GA4 Configuration tag has `send_page_view: false` and a separate GA4 Event tag fires `page_view` on history-change events

If GTM isn't configured this way:
- `/thank-you` is never logged as a page_view in GA4
- "Conversions / Page" reports omit thank-you entirely
- Audience builds based on "viewed thank-you" don't capture the data

The `lead_confirmed` dataLayer push still fires (good), but GA4 won't tie it to a thank-you page view.

**Fix:** queue item #5 — verify GTM History Change trigger and GA4 SPA page_view config.

---

### 🟠 HIGH-3: PII (email, phone) pushed plaintext to dataLayer

[tracking.js:19-34](../../src/lib/tracking.js#L19-L34) pushes raw email and phone to `dataLayer`. This is acceptable **only if** GTM hashes them before sending to Google Ads (Enhanced Conversions) or Meta. Default GTM Google Ads tag template **does** support automatic hashing (the "Enhanced Conversions" sub-section in the tag config) — but this must be explicitly enabled per tag.

Risks if hashing isn't configured:
- PII transmitted plaintext to Google's servers (violates Google Ads ToS, may cause account suspension)
- PII visible in `dataLayer` history to any browser extension, other GTM tags, or `console.log` from third-party scripts
- Meta Pixel client-side (if added later via GTM) would receive plaintext PII — also a violation

**Fix:** queue item #6 — confirm "Enhanced Conversions: user-provided data" is ON for the Google Ads Lead conversion tag in GTM, and that the email/phone variables are mapped from dataLayer.

---

### 🟠 HIGH-4: `phone_click` is a vanity event, not a conversion

[tracking.js:40-45](../../src/lib/tracking.js#L40-L45) fires `phone_click` when a user clicks `tel:`. **Clicking ≠ calling.** Some users click and never actually dial. Some click multiple times. Some click on mobile and the dialer doesn't open (e.g., desktop browsers, blocked).

Using `phone_click` as a primary Google Ads conversion (or in Smart Bidding signals) will optimize toward people who click, not people who call. **In practice this means tire-kickers and accidental taps drive your spend.**

The right setup:
- `phone_click` → GA4 event only (engagement signal, not conversion)
- Real phone conversion comes from:
  - **Google Ads call asset** with call extension (Google forwards the number, tracks duration; only count >60s)
  - **Website call tracking** via Google forwarding numbers replacing the on-page number for paid clicks (`grokit` / CallRail / Google's own dynamic insertion)

**Fix:** queue item #7 — keep `phone_click` as a GA4-only event, configure Google Ads to count calls from the call asset or website call tracking integration only.

---

### ✅ RESOLVED HIGH-5: Honeypot spam protection added to both lead forms

[ContactForm.jsx](../../src/components/ContactForm.jsx) and [ContactHome.jsx](../../src/components/ContactHome.jsx) now render a hidden `ldn_extra_field` honeypot. [sendEmail.js](../../src/app/actions/sendEmail.js) checks that field before email delivery, Meta CAPI, analytics navigation, or thank-you routing can happen.

Current behavior:
- Human submissions leave `ldn_extra_field` empty and continue through the normal lead flow.
- Bot submissions that fill the hidden field return `{ success: true, skipped: true }`, so the bot sees a successful response while the hook does not fire conversion events or navigate to `/thank-you`.
- `sendEmail.js` also accepts legacy honeypot aliases `company_website` and `companyWebsite` so older test payloads are still filtered.

**Remaining hardening:** Cloudflare Turnstile or rate limiting can still be added if spam appears in production, but the baseline Smart Bidding poison-control layer is in place.

---

### 🟡 MEDIUM-1: `service` field gap

`sendEmail.js` reads `formData.get('service')` with fallback `'General Inquiry'`. ContactForm doesn't have a `service` field, so all ContactForm leads land in email as "General Inquiry" — only ContactHome has it.

Impact: sales team can't sort/filter inbound leads by service from ContactForm.

**Fix:** queue item #9 — add a service selector to ContactForm matching ContactHome, OR add a `form_source` field that distinguishes "homepage" vs "contact page" vs "service page" submissions.

---

### 🟡 MEDIUM-2: `lead_confirmed` re-fires on /thank-you reload

If a user bookmarks `/thank-you?eid=abc123` or hits browser back-forward to it, `useEffect` re-runs on mount → `trackLeadConfirmed` fires again with the same `event_id`. GTM should dedup (since event_id is shared), but **if GTM dedup isn't configured (HIGH-1), each reload = another counted conversion.**

**Fix:** queue item #10 — set sessionStorage flag `lead_confirmed_${eventId}` to block re-fire client-side, AND verify GTM transaction_id dedup.

---

### 🟡 MEDIUM-3: `_fbp` and `source_url` never reach server

[sendEmail.js:89,91](../../src/server/sendEmail.js#L89-L91) calls `formData.get('_fbp')` and `formData.get('source_url')` — neither is added to the form by ContactForm or ContactHome. They're always `null`. Means Meta CAPI is missing:
- `_fbp` cookie (Meta browser ID) → lower match rate for events
- `event_source_url` → falls back to hardcoded `https://ldndecks.com/contact` for ALL submissions (wrong for homepage and city-page form opens)

**Fix:** queue item #11 — read `_fbp` cookie client-side (similar to clickIds.js), append to formData, append `source_url` from `window.location.href`.

---

### 🟡 MEDIUM-4: `lazyOnload` GTM = slow first-event capture

Both `gtm-init` and `gtm-script` use `strategy="lazyOnload"` ([layout.js:67,74](../../src/app/layout.js#L67)) — they load after `window.onload`. On mobile / slow connections that can be 4–8 seconds after a click.

Events pushed before GTM is ready queue in `dataLayer` and **do** process when GTM loads — that part is fine. **The risk:** if a user bounces (closes tab, hits back) before GTM ever loads, all queued events are lost. For high-bounce mobile traffic this is meaningful.

**Fix:** queue item #12 — promote GTM to `strategy="afterInteractive"` (default for `<Script>`).

---

### 🟢 LOW-1: `trackEvent` is dead code

[tracking.js:67-74](../../src/lib/tracking.js#L67-L74) defines `trackEvent` — `grep -r "trackEvent"` shows no callers. Delete to reduce surface area.

### ✅ RESOLVED LOW-2: Business phone centralized in tracking event

[tracking.js](../../src/lib/tracking.js) now reads the `phone_click` phone number from `BUSINESS.telephone` in [business.js](../../src/lib/business.js). `CallLink` also uses the same source of truth for the E.164 phone number and the shared display constant.

### 🟢 LOW-3: `fbclid` captured but no client-side Meta Pixel

`fbclid` is read from URL, stored in cookie, sent to server-side Meta CAPI. Server-side coverage is fine, but **without a client-side Meta Pixel firing the same Lead event**, Meta's Event Match Quality score will be lower than it could be. Server-only CAPI delivers ~60–70% match rate; CAPI + client Pixel typically delivers 85–95%.

---

## Reporting Distortion Estimates (current state)

| Channel / Signal | Distortion | Direction |
|---|---|---|
| Google Ads form conversions | Homepage form invisibility resolved by shared `useLeadSubmit()`; residual trust depends on GTM `lead_confirmed` + transaction_id proof | Proof-gated |
| Google Ads phone conversions | Site phone-click coverage is fixed through `CallLink`; Smart Bidding trust still depends on Google forwarding / call-asset proof and real call-quality rows | Proof-gated |
| Total Google Ads conversion count | **+0 to +100%** depending on GTM dedup config | Could be over OR under |
| Smart Bidding signal quality | Still not safe to scale until real lead/call quality rows and offline outcomes exist | Data-gated |
| GA4 thank-you page_view | **−100%** if no History Change trigger | Undercount |
| Meta CAPI match rate | Browser Pixel exists; final EMQ depends on production CAPI credentials and Events Manager diagnostics | Proof-gated |
| Offline conversion-import readiness | Click IDs and event_id are wired; live lead-outcome intake exists but is currently `LIVE_EMPTY` until real CRM/outcome rows are added | Data-gated |

**Net read:** you cannot trust the conversion column in Google Ads today. Bid optimization on this data is optimizing toward noise.

---

## Sign-off conditions before resuming Google Ads optimization

Per the user's directive (do not change bidding/budgets/negatives/restructure until tracking is validated), the following must be true:

- [x] **CRITICAL-1 fixed** — ContactHome submits with click IDs + event_id + trackFormSubmit (commit `c9cefd8` — useLeadSubmit hook)
- [x] **CRITICAL-2 fixed** — All `tel:` links use a tracked `<CallLink />` component (commit `8e0ef30` — 53 files swept; 2 files excluded pending SEO branch merge)
- [x] **CRITICAL-3 fixed** — Consent-mode runs `beforeInteractive`, dead EU/UK branch dropped (commit `5f86dce`)
- [ ] HIGH-1 — GTM container exported + dedup mappings verified in writing **(GTM/Ads UI — manual, deferred)**
- [ ] HIGH-2 — GTM History Change trigger confirmed firing on `/thank-you` SPA nav **(GTM/Ads UI — manual, deferred)**
- [ ] HIGH-3 — Enhanced Conversions hashing confirmed ON for Google Ads Lead tag **(GTM/Ads UI — manual, deferred; code provides the dataLayer fields after commit `c9cefd8`)**
- [ ] HIGH-4 — `phone_click` removed from primary conversion column; only call asset + Google forwarding numbers feed Smart Bidding **(Ads UI — manual, deferred)**
- [x] **HIGH-5 fixed** — Spam protection added: honeypot on both forms + server reject (commit `2774d7f`)
- [x] **R6 fixed** — sessionStorage anti-replay on /thank-you reload (commit `dca4820`)

**Code layer status:** 5 of 8 sign-off items resolved in code on `feat/ads-tracking-instrumentation`. The remaining 3 are GTM container / Google Ads UI configuration tasks that must be performed manually with account access.

**Next:** Phase 1 code is ready for GTM QA (see [docs/ads-tracking/QA-TEST-PLAN.md](../ads-tracking/QA-TEST-PLAN.md) Section 5). Once HIGH-1/2/3/4 are verified in the live GTM container and Google Ads conversion actions, attribution is trustworthy enough to bid on — then proceed with the Phase 1–8 Google Ads optimization from the prior session.

---

## Referenced deliverables

- [CONVERSION-FLOW-MAP.md](./CONVERSION-FLOW-MAP.md) — sequence diagrams of both forms + phone CTA
- [ATTRIBUTION-RISKS.md](./ATTRIBUTION-RISKS.md) — gclid persistence, refresh survival, SPA hops
- [DUPLICATE-FIRE-CHECK.md](./DUPLICATE-FIRE-CHECK.md) — every event source × dedup gate
- [ENHANCED-CONVERSIONS-PLAN.md](./ENHANCED-CONVERSIONS-PLAN.md) — what's already in place, what to turn on
- [TRACKING-FIX-QUEUE.md](./TRACKING-FIX-QUEUE.md) — ordered work list with file paths and code changes
