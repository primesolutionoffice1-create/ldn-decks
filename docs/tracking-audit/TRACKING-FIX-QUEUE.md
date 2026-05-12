# Tracking Fix Queue — Loudoun Decks

Ordered work list. Items are sequenced by impact and dependency. Do not skip ahead — later items assume earlier ones are in place.

Each item includes: severity, business impact, affected conversions, estimated reporting distortion, exact file/component to change, proposed fix, implementation risk.

---

## Status legend

- 🔴 Critical — Smart Bidding cannot run safely until fixed
- 🟠 High — Major attribution accuracy loss
- 🟡 Medium — Edge-case accuracy / polish
- 🟢 Low — Hygiene / future-proofing

## Phase legend

- **P1 — Pre-bidding (blocking)**: Must be done before any Smart Bidding strategy is enabled or any bid-strategy-shaping change is made
- **P2 — Validation cycle**: Done in parallel with bidding decisions
- **P3 — Quality polish**: Done after the account is stable

---

# PHASE 1 — PRE-BIDDING BLOCKERS

## #1 🔴 P1 — Wire ContactHome into the tracked submission pipeline

**Severity:** Critical
**Business impact:** 40–70% of paid-driven leads are currently invisible to Google Ads' attribution engine. Cannot upload offline conversions. Cannot dedup against any future client/server event chain.
**Affected conversions:** Every homepage form submission.
**Estimated reporting distortion:** −40 to −70% of true paid lead volume.

### What to change

**File 1: create `src/hooks/useLeadSubmit.js`** (new file, extracts the shared logic)

```js
'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { sendContactEmail } from '@/server/sendEmail';
import { trackFormSubmit } from '@/lib/tracking';
import { getClickIds, CLICK_ID_KEYS } from '@/lib/clickIds';

export function useLeadSubmit({ formType = 'quote' } = {}) {
  const router = useRouter();
  const hasTracked = useRef(false);

  return async function submit(formElement) {
    const formData = new FormData(formElement);

    // Click IDs → formData (server) + clickIds object (client tracking)
    const clickIds = getClickIds();
    CLICK_ID_KEYS.forEach((k) => {
      if (clickIds[k]) formData.append(k, clickIds[k]);
    });

    // event_id: dedup anchor for client form_submit, client lead_confirmed,
    // server Meta CAPI, and any future server-side Google Ads conversion API call
    const eventId = (typeof crypto !== 'undefined' && crypto.randomUUID)
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    formData.append('event_id', eventId);
    formData.append('source_url', typeof window !== 'undefined' ? window.location.href : '');

    // Read PII for Enhanced Conversions hashing in GTM
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const firstName = formData.get('firstName') || formData.get('name')?.split(' ')[0] || '';
    const lastName = formData.get('lastName') || formData.get('name')?.split(' ').slice(1).join(' ') || '';
    const zip = formData.get('zip') || '';

    const result = await sendContactEmail(formData);

    if (result?.success) {
      if (!hasTracked.current) {
        hasTracked.current = true;
        trackFormSubmit({
          email, phone, firstName, lastName, zip,
          formType, clickIds, eventId,
        });
      }
      router.push(`/thank-you?eid=${encodeURIComponent(eventId)}`);
      return { success: true };
    }
    return { success: false };
  };
}
```

**File 2: refactor `src/components/ContactForm.jsx`** to use the hook

```diff
- import React, { useState, useRef } from 'react';
- import { useRouter } from 'next/navigation';
+ import React, { useState } from 'react';
  import { useContact } from '@/context/ContactContext';
  import styles from './ContactForm.module.css';
- import { sendContactEmail } from '@/server/sendEmail';
- import { trackFormSubmit, trackPhoneClick } from '@/lib/tracking';
- import { getClickIds, CLICK_ID_KEYS } from '@/lib/clickIds';
+ import { trackPhoneClick } from '@/lib/tracking';
+ import { useLeadSubmit } from '@/hooks/useLeadSubmit';

  export default function ContactForm({ hideInfoCol = false, noPadding = false }) {
    const [status, setStatus] = useState(null);
-   const router = useRouter();
    const { closeContact } = useContact();
-   const hasTracked = useRef(false);
+   const submit = useLeadSubmit({ formType: 'quote' });

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("submitting");
-     const formData = new FormData(e.target);
-     const email = formData.get('email') || '';
-     const phone = formData.get('phone') || '';
-     const clickIds = getClickIds();
-     CLICK_ID_KEYS.forEach((k) => {
-       if (clickIds[k]) formData.append(k, clickIds[k]);
-     });
-     const eventId = (typeof crypto !== 'undefined' && crypto.randomUUID)
-       ? crypto.randomUUID()
-       : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
-     formData.append('event_id', eventId);
-     const result = await sendContactEmail(formData);
-     if (result && result.success) {
-       if (!hasTracked.current) {
-         hasTracked.current = true;
-         trackFormSubmit({ email, phone, formType: 'quote', clickIds, eventId });
-       }
-       closeContact();
-       router.push(`/thank-you?eid=${encodeURIComponent(eventId)}`);
-     } else {
-       alert("Failed to send message. Please try again.");
-       setStatus(null);
-     }
+     const result = await submit(e.target);
+     if (result.success) {
+       closeContact();
+     } else {
+       alert("Failed to send message. Please try again.");
+       setStatus(null);
+     }
    };
```

**File 3: refactor `src/components/ContactHome.jsx`** to use the same hook

```diff
- import React, { useState } from 'react';
- import { useRouter } from 'next/navigation';
+ import React, { useState } from 'react';
  import styles from './ContactHome.module.css';
- import { sendContactEmail } from '@/server/sendEmail';
+ import { useLeadSubmit } from '@/hooks/useLeadSubmit';

  // ...

  export default function ContactHome() {
    const [status, setStatus] = useState(null);
-   const router = useRouter();
+   const submit = useLeadSubmit({ formType: 'homepage' });

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("submitting");
-     const formData = new FormData(e.target);
-     const result = await sendContactEmail(formData);
-     if (result && result.success) {
-       router.push('/thank-you');
-     } else {
-       setStatus("error");
-     }
+     const result = await submit(e.target);
+     if (!result.success) setStatus("error");
    };
```

### Implementation risk

**Low.** No external systems change; just code refactor. Test by:
1. Submit ContactForm modal → verify `/thank-you?eid=<UUID>` in URL bar
2. Submit ContactHome on homepage → verify same
3. Check GTM Preview Mode: both submits push `form_submit` with event_id
4. Check sales inbox: both emails include the Attribution block

---

## #2 🔴 P1 — Make all `tel:` links track phone clicks

**Severity:** Critical
**Business impact:** ~45% of total leads (phone calls) are invisible to Google Ads. Smart Bidding cannot optimize for phone leads. City pages (highest-converting LPs) look underperforming.
**Affected conversions:** Every phone click from the 40+ untracked locations.
**Estimated reporting distortion:** −10 to −25% of total phone-conversion volume.

### Why a component, not codemod

The phone number is hardcoded in ~43 different files with varying inline styles. A codemod is brittle and high-risk. A reusable `<CallLink />` component lets you sweep + replace in one PR with a stable interface.

### What to change

**File 1: create `src/components/CallLink.jsx`** (new file)

```jsx
'use client';
import { trackPhoneClick } from '@/lib/tracking';

const BUSINESS_PHONE = '+15716557207';
const BUSINESS_PHONE_DISPLAY = '(571) 655-7207';

export default function CallLink({
  children,
  className,
  style,
  ariaLabel,
  display,
}) {
  return (
    <a
      href={`tel:${BUSINESS_PHONE}`}
      onClick={trackPhoneClick}
      className={className}
      style={style}
      aria-label={ariaLabel || 'Call Loudoun Decks'}
    >
      {children || display || BUSINESS_PHONE_DISPLAY}
    </a>
  );
}

export { BUSINESS_PHONE, BUSINESS_PHONE_DISPLAY };
```

**File 2-44: sweep all `tel:+15716557207` references**

Use grep + manual replace (faster than a codemod given inline-style variance):

```bash
# Find every file needing migration
grep -rln 'tel:+15716557207' src/

# Pattern:
# Before:  <a href="tel:+15716557207" style={...}>Call (571) 655-7207</a>
# After:   <CallLink style={...}>Call (571) 655-7207</CallLink>
#
# Or for simple cases:
# Before:  <a href="tel:+15716557207">(571) 655-7207</a>
# After:   <CallLink />
```

Then add `import CallLink from '@/components/CallLink';` at top of each file.

Update [tracking.js:40-45](../../src/lib/tracking.js#L40-L45) to remove the hardcoded phone string and add a source param:

```diff
-export function trackPhoneClick() {
-  push({
-    event: 'phone_click',
-    phone: '+15716557207',
-  });
+export function trackPhoneClick(event) {
+  push({
+    event: 'phone_click',
+    phone_source: 'tel_link',
+    page: typeof window !== 'undefined' ? window.location.pathname : null,
+  });
 }
```

### Implementation risk

**Low-medium.** ~43 file changes. Risk of:
- Missing one (visually identical link without onClick)
- Layout regressions where inline `style` props don't carry over cleanly

Mitigation: after the sweep, run `grep -rln 'href="tel:' src/` and confirm only `CallLink.jsx` matches. Visually inspect 5–10 city pages in dev to confirm styling unchanged.

**Note:** Don't deprecate `phone_click` as a primary Google Ads conversion yet — keep it as a GA4-only event until Layer 3 call tracking (ENHANCED-CONVERSIONS-PLAN.md) is in place. The real phone conversions will come from Google's forwarding numbers.

---

## #3 🔴 P1 — Fix consent-mode load order

**Severity:** Critical
**Business impact:** First ~100ms of tag firing happens with unset consent state. Inconsistent reporting. Blocks future EU/UK/California compliance.
**Affected conversions:** All conversions during the initial-load window.
**Estimated reporting distortion:** Small (most users wait for GTM to load before converting), but unbounded edge case.

### What to change

**File: `src/app/layout.js:67-82`**

Move the consent defaults inline to `beforeInteractive` so they're guaranteed before GTM container runs.

```diff
- {/* Google Tag Manager - dataLayer init */}
- <Script id="gtm-init" strategy="lazyOnload">
-   {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500,'region':['BE','BG','CZ','DK','DE','EE','IE','GR','ES','FR','HR','IT','CY','LV','LT','LU','HU','MT','NL','AT','PL','PT','RO','SI','SK','FI','SE','IS','LI','NO','GB','CH']}); gtag('consent','default',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});`}
- </Script>
+ {/* Consent Mode defaults — MUST run before GTM container loads to avoid
+     unset-consent window. beforeInteractive guarantees order vs lazyOnload. */}
+ <Script id="gtm-consent-defaults" strategy="beforeInteractive">
+   {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent','default',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});`}
+ </Script>

  {/* Google Tag Manager */}
  <Script
    id="gtm-script"
-   strategy="lazyOnload"
+   strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){...})(...,'GTM-N87MG6QS');`,
    }}
  />
```

**About the EU/UK denial branch:** since you have no CMP banner to grant consent after page load, EU/UK visitors would stay denied forever — modeled-only conversions in those regions. For a NoVA-only business this is dead code. Drop it. If you ever expand or get a CCPA letter, add a proper CMP at that point. The simplified consent default above grants for everyone (acceptable for US-only target market).

### Implementation risk

**Low.** The change moves consent setting earlier in the load pipeline. If you DO want to keep EU/UK denial as future-proofing, keep the original two-call structure but move both to `beforeInteractive`. Test by:
1. Open DevTools → Network → reload homepage
2. Check the order: `gtm-consent-defaults` should execute before `gtm-script`
3. In GTM Preview Mode, verify consent state shows "granted" on first event

---

## #4 🔴 P1 — Verify GTM dedup configuration

**Severity:** Critical (verification, not code change)
**Business impact:** Without dedup, every form submission can count as 2+ Google Ads conversions. Cannot trust the conversion column.
**Affected conversions:** All form-based conversions.
**Estimated reporting distortion:** Up to +100% if both events map to same conversion without dedup.

### Verification steps

1. **Open GTM container** (someone with access)
2. **Export the container JSON** (Admin → Export Container) — attach to the audit folder for review
3. **For the Google Ads Lead conversion tag:**
   - Confirm trigger is **exactly one** of `form_submit` OR `lead_confirmed` (recommend: `lead_confirmed`)
   - Confirm "Order ID" or "Transaction ID" field is mapped to `{{DLV - event_id}}`
4. **For the Google Ads conversion action in Google Ads UI:**
   - Tools → Conversions → click into the Lead conversion → Settings
   - "Counting" set to "One per click"
   - **Critical:** "Don't allow duplicate conversions" should be enabled (look for it in tag-level deduplication settings)
5. **Test:**
   - Open GTM Preview Mode
   - Submit a form
   - Reach /thank-you
   - Refresh /thank-you
   - In the preview console, you should see the Google Ads tag fire twice but with same transaction_id
   - In Google Ads conversion debugger (Conversions → Diagnostics), check that the duplicate is flagged

### Action if misconfigured

- If trigger is BOTH `form_submit` and `lead_confirmed`: remove `form_submit` trigger from the Google Ads tag, keep only `lead_confirmed`
- If transaction_id isn't mapped: create a DLV variable for event_id, map it
- If counting is "Every" not "One per click": switch to "One"

### Implementation risk

**Trivial code-wise.** Risk is human — requires GTM access and someone who's careful in the container.

---

## #5 🟠 P1 — Verify GA4 SPA page_view firing

**Severity:** High
**Business impact:** GA4 thank-you reporting broken, audience definitions broken, "conversions by page" reports broken.
**Affected conversions:** GA4 reporting only — does not affect Google Ads.

### Verification steps

1. **In GTM**, find the GA4 Configuration tag
2. Check if `send_page_view` field is set to `false`
3. If `false` → there should be a separate GA4 Event tag firing `page_view` on a **History Change** trigger
4. If `true` → SPA route changes are NOT firing page_views in GA4

### Fix (if broken)

Two options:

**Option A — Recommended:** turn off auto page_view, add manual history-change firing

1. In the GA4 Config tag, set "Send a page view event when this configuration loads" to **false**
2. Create a new GA4 Event tag named `GA4 - page_view (history)`
   - Configuration tag: same GA4 Config
   - Event Name: `page_view`
   - Parameters: `page_location = {{Page URL}}`, `page_title = {{Page Title}}`, `page_path = {{Page Path}}`
3. Create a new trigger: `Trigger Type: History Change`, fires on All History Changes
4. Attach trigger to the new tag

**Option B:** keep auto page_view, accept missing SPA route reporting (not recommended)

### Verification after fix

1. Open GA4 Realtime → DebugView (need GA debug extension)
2. Visit homepage → see page_view
3. Submit form → land on /thank-you → see another page_view for /thank-you
4. Verify event_id parameter present

### Implementation risk

**Low.** GTM-only change. No code impact.

---

## #6 🟠 P1 — Enable Enhanced Conversions hashing in GTM

**Severity:** High
**Business impact:** Without hashing, PII is sent plaintext to Google (ToS violation, may suspend account). Without Enhanced Conversions, ~10-15% of conversions go unattributed (cross-device).
**Affected conversions:** All Google Ads conversions.

### Verification + fix

In GTM:

1. **Create Variables:** (DataLayer Variable type)
   - `DLV - email` → variable name `email`
   - `DLV - phone` → variable name `phone`
   - `DLV - first_name` → variable name `first_name`
   - `DLV - last_name` → variable name `last_name`
   - `DLV - zip` → variable name `zip`

2. **In the Google Ads Lead conversion tag:**
   - Expand "Include user-provided data"
   - Select "New Variable" → User-Provided Data variable type
   - Map:
     - Email: `{{DLV - email}}`
     - Phone Number: `{{DLV - phone}}`
     - First Name: `{{DLV - first_name}}`
     - Last Name: `{{DLV - last_name}}`
     - Postal Code: `{{DLV - zip}}`
     - Country: `US` (constant)

3. **GTM hashes automatically** — confirm by checking the network request in DevTools after submitting a test form. The conversion API call should have `em=<64-char-hash>`, `ph=<64-char-hash>`, etc.

### Code prerequisite

The dataLayer must contain `first_name`, `last_name`, `zip` — added in fix #1's `useLeadSubmit` hook.

### Verification

1. Submit form
2. In Google Ads → Tools → Conversions → "Lead" → Diagnostics tab
3. After 24-48h, "Enhanced Conversions" status should show "Active" with a match rate
4. Match rate target: >60% within 2 weeks

### Implementation risk

**Low.** GTM-only after code prerequisite #1 is in place.

---

## #7 🟠 P1 — Demote `phone_click` from primary conversion

**Severity:** High
**Business impact:** Currently phone_click (if used as a conversion) optimizes toward clicks-that-don't-call, contaminating Smart Bidding signals.
**Affected conversions:** Phone-related conversions.

### What to verify in Google Ads

1. Tools → Conversions → list of conversion actions
2. If there's a conversion named like "Phone Click" or fed by `phone_click` event:
   - Open it → set "Include in 'Conversions'" to **OFF** (move to secondary / observe-only)
   - Keep it for GA4 reporting only

3. Set up real call conversion actions (see ENHANCED-CONVERSIONS-PLAN.md Layer 3):
   - "Call from Ads" — count calls >60s from call asset
   - "Phone Call from Website" — count calls >60s via Google forwarding number swap

### Implementation risk

**Low.** Google Ads UI only. No code change.

---

## #8 🟠 P1 — Add spam protection to forms

**Severity:** High
**Business impact:** Bot form submissions inflate conversion count, poison Smart Bidding, can spike CPL by 2-5x within weeks of bot discovery.
**Affected conversions:** All form conversions.

### What to change

**Minimum (honeypot, free, takes 15 min):**

Add a hidden field that real users won't fill but bots will:

```diff
// ContactForm.jsx + ContactHome.jsx, inside the <form>

  <div className={styles.row}>
    {/* honeypot — bots fill anything visible, this field is hidden */}
+   <input
+     type="text"
+     name="company_website"
+     tabIndex={-1}
+     autoComplete="off"
+     style={{ position: 'absolute', left: '-9999px' }}
+     aria-hidden="true"
+   />
```

```diff
// sendEmail.js

  export async function sendContactEmail(formData) {
    try {
+     // Honeypot — silently reject bot submissions
+     if (formData.get('company_website')) {
+       console.log('Honeypot triggered, rejecting submission');
+       return { success: true }; // Lie to the bot — pretend it worked
+     }
+
      const transporter = nodemailer.createTransport({...});
```

**Better (Cloudflare Turnstile, free, invisible to users):**

1. Sign up at cloudflare.com for a free Turnstile widget
2. Add `<Script>` tag for the Turnstile JS to layout.js
3. Add Turnstile widget to each form
4. In sendEmail.js, verify the Turnstile token via Cloudflare API before processing

Recommend starting with the honeypot today, adding Turnstile if spam still gets through.

### Implementation risk

**Low for honeypot.** A real screen reader will skip the off-screen input thanks to aria-hidden, but verify with NVDA/JAWS just in case. The "Lie to the bot" pattern is intentional — returning failure tells the bot to retry; returning success makes them move on.

---

# PHASE 2 — VALIDATION CYCLE (parallel to bidding work)

## #9 🟡 P2 — Add `service` selector to ContactForm

**Severity:** Medium
**Business impact:** Sales team can't filter ContactForm leads by service. Lead quality routing impossible.
**Affected conversions:** None directly; CRM/sales process only.

### What to change

Add to [ContactForm.jsx](../../src/components/ContactForm.jsx) inside the field grid:

```jsx
<div className={styles.inputGroup}>
  <label htmlFor="service">Project Type <span className={styles.req}>*</span></label>
  <select id="service" name="service" required defaultValue="" className={styles.selectInput}>
    <option value="" disabled>Select Project Type</option>
    <option value="Custom Deck">Custom Deck</option>
    <option value="Composite Deck">Composite Deck</option>
    <option value="Trex Deck">Trex Deck</option>
    <option value="Screened Porch">Screened Porch</option>
    <option value="Pergola">Pergola</option>
    <option value="Patio">Patio</option>
    <option value="Outdoor Living (multi-feature)">Outdoor Living (multi-feature)</option>
    <option value="Deck Repair / Resurfacing">Deck Repair / Resurfacing</option>
    <option value="Other">Other</option>
  </select>
</div>
```

Bonus: add a `form_source` hidden field so server can distinguish homepage vs. modal vs. service page:

```jsx
<input type="hidden" name="form_source" value="contact-page-or-modal" />
```

In ContactHome.jsx use `value="homepage"`.

### Implementation risk

**Trivial.**

---

## #10 🟡 P2 — Block re-fire of `lead_confirmed` on /thank-you reload

**Severity:** Medium
**Business impact:** Power users who bookmark or reload /thank-you produce phantom conversions.
**Affected conversions:** /thank-you reload events.

### What to change

**File: `src/lib/tracking.js`**

```diff
 export function trackLeadConfirmed({ eventId } = {}) {
   if (typeof window === 'undefined') return;
+  // Anti-replay: same event_id within session = same conversion.
+  // Belt-and-braces with GTM transaction_id dedup; this blocks the network
+  // request entirely rather than relying on Google Ads to dedupe.
+  if (eventId) {
+    const key = `lead_fired_${eventId}`;
+    try {
+      if (sessionStorage.getItem(key)) return;
+      sessionStorage.setItem(key, '1');
+    } catch (e) {
+      // sessionStorage unavailable (e.g. Safari private mode) — fall through, let GTM dedup
+    }
+  }
   push({
     event: 'lead_confirmed',
     event_id: eventId || null,
     page: window.location.pathname,
   });
 }
```

### Implementation risk

**Low.** SessionStorage failures gracefully fall through to GTM dedup.

---

## #11 🟡 P2 — Capture `_fbp` and `source_url`

**Severity:** Medium
**Business impact:** Meta CAPI event_source_url always reports `/contact`, breaking Meta's "Conversions by page" attribution. Meta match rate ~15% lower without `_fbp`.
**Affected conversions:** Meta CAPI events.

### What to change

**File: `src/lib/clickIds.js` (or new file)**

```diff
 export function getClickIds() {
   return CLICK_ID_KEYS.reduce((acc, key) => {
     acc[key] = readCookie(key);
     return acc;
   }, {});
 }
+
+export function getFbp() {
+  if (typeof document === 'undefined') return null;
+  const match = document.cookie.match(/(?:^|; )_fbp=([^;]*)/);
+  return match ? decodeURIComponent(match[1]) : null;
+}
```

**File: `src/hooks/useLeadSubmit.js` (from fix #1)**

```diff
+  import { getFbp } from '@/lib/clickIds';
   // ...
   formData.append('event_id', eventId);
-  formData.append('source_url', typeof window !== 'undefined' ? window.location.href : '');
+  formData.append('source_url', typeof window !== 'undefined' ? window.location.href : '');
+  const fbp = getFbp();
+  if (fbp) formData.append('_fbp', fbp);
```

### Implementation risk

**Trivial.** `_fbp` is only set after Meta Pixel runs (so requires Pixel to be added separately — until then, the field stays null and CAPI behaves the same as today).

---

## #12 🟡 P2 — Add IP/User-Agent to CAPI events

**Severity:** Medium
**Business impact:** Meta Event Match Quality (EMQ) ~1.5 points lower without these.
**Affected conversions:** Meta CAPI events.

### What to change

**File: `src/server/sendEmail.js`**

```diff
 'use server';
+ import { headers } from 'next/headers';
 import nodemailer from 'nodemailer';
 import { sendMetaLeadEvent } from './metaCapi';

 export async function sendContactEmail(formData) {
   try {
+    const h = await headers();
+    const ipAddress = (h.get('x-forwarded-for') || '').split(',')[0].trim() || null;
+    const userAgent = h.get('user-agent') || null;
     // ...
     sendMetaLeadEvent({
       email, phone,
       firstName: formData.get('firstName'),
       lastName: formData.get('lastName'),
       city, state, zip,
       fbclid,
       fbp: formData.get('_fbp'),
       eventId,
       eventSourceUrl: formData.get('source_url') || 'https://ldndecks.com/contact',
+      ipAddress,
+      userAgent,
     }).catch((err) => console.error('Meta CAPI fire-and-forget error:', err));
```

### Implementation risk

**Trivial.** [metaCapi.js](../../src/server/metaCapi.js) already accepts `ipAddress` and `userAgent` and slots them into userData (lines 78-79).

---

## #13 🟡 P2 — Verify www→non-www redirect preserves gclid

**Severity:** Medium
**Business impact:** Paid traffic landing on www.* may lose gclid through redirect.
**Affected conversions:** Unknown share (depends on which domain ads target).

### Verification

```bash
curl -sI "https://www.ldndecks.com/test?gclid=ABCTEST123" | grep -i location
```

Expected: `Location: https://ldndecks.com/test?gclid=ABCTEST123`

If it doesn't include the query, the redirect is stripping it.

### Fix if broken

Next.js redirects preserve query params by default UNLESS the destination explicitly specifies them. The current rule looks correct:

```js
{
  source: '/:path*',
  has: [{ type: 'host', value: 'www.ldndecks.com' }],
  destination: 'https://ldndecks.com/:path*',
  statusCode: 301,
}
```

If verification shows gclid is being stripped, change destination to `'https://ldndecks.com/:path*?'` with explicit query handling, OR move this redirect to middleware.js for finer control.

### Implementation risk

**Low.** Verification is one curl command.

---

# PHASE 3 — POLISH

## #14 🟡 P3 — Drop dead `trackEvent` function

**File: `src/lib/tracking.js:67-74`** — delete `trackEvent` (no callers).

## #15 🟢 P3 — Constant-ize phone numbers

Already proposed in fix #2 — `BUSINESS_PHONE` constant in CallLink.jsx replaces all hardcoded strings.

## #16 🟢 P3 — Decide on Meta Pixel client-side

If Meta Ads is or will be running: add Pixel via GTM, fire Lead from `form_submit` event with `eventID` = `event_id` DLV → Meta dedupes vs CAPI within 7 days.

If Meta Ads is NOT being run: remove `fbclid` capture and metaCapi.js entirely. Currently it's overhead with no return.

## #17 🟢 P3 — Add Customer Match upload

When you have 100+ past customer records: hash + upload to Google Ads Audience Manager as Customer Match audience. Use for prospecting exclusion and lookalike seeding. (ENHANCED-CONVERSIONS-PLAN.md customer match section.)

---

# Sequence summary

| # | Item | Phase | Sev | Effort | Dependencies |
|---|------|-------|-----|--------|--------------|
| 1 | useLeadSubmit hook + wire ContactHome | P1 | 🔴 | 2h | None |
| 2 | CallLink component + sweep | P1 | 🔴 | 3h | None |
| 3 | Consent-mode load order | P1 | 🔴 | 30m | None |
| 4 | GTM dedup verification | P1 | 🔴 | 1h | None (GTM access) |
| 5 | GA4 SPA page_view trigger | P1 | 🟠 | 1h | None (GTM access) |
| 6 | Enhanced Conversions hashing | P1 | 🟠 | 1h | #1 done |
| 7 | Demote phone_click from primary | P1 | 🟠 | 15m | None (Ads UI) |
| 8 | Spam protection (honeypot) | P1 | 🟠 | 30m | None |
| 9 | Service selector on ContactForm | P2 | 🟡 | 30m | None |
| 10 | sessionStorage anti-replay | P2 | 🟡 | 15m | None |
| 11 | _fbp + source_url capture | P2 | 🟡 | 30m | #1 done |
| 12 | IP/UA to CAPI | P2 | 🟡 | 15m | None |
| 13 | Verify www redirect | P2 | 🟡 | 5m | None |
| 14 | Drop trackEvent | P3 | 🟢 | 5m | None |
| 15 | Phone constant | P3 | 🟢 | Folded into #2 | #2 |
| 16 | Meta Pixel client-side or remove | P3 | 🟢 | 1h or 30m | Decision |
| 17 | Customer Match upload | P3 | 🟢 | 2h | 100+ past customers |

**Total Phase 1 effort:** ~9 hours of work across code + GTM. Realistic timeline: 1-2 working days.

**After Phase 1 completion, the attribution layer is sound enough to begin Google Ads optimization** (the Phase 1–8 plan from the prior session).

---

# How to verify each fix

For every Phase 1 item, the test is the same:

1. **Open GTM Preview Mode** (Tag Assistant Companion extension)
2. **Run the user flow** (submit form, click phone, reload thank-you)
3. **Verify in real-time** that:
   - The expected dataLayer events fire
   - The expected GTM tags fire
   - No duplicate firing
   - Event_id propagates correctly through the chain
4. **In Google Ads → Conversions → Diagnostics** after 24h, confirm:
   - "Enhanced Conversions" shows "Active"
   - Match rate > 50%
   - No "Misconfigured" or "Inactive" warnings

The sign-off conditions are listed at the bottom of [TRACKING-AUDIT.md](./TRACKING-AUDIT.md). When all 8 are checked, proceed to bid-strategy optimization.
