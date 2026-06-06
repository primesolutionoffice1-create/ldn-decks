# Conversion Flow Map — Loudoun Decks

End-to-end sequence diagrams of every path that produces a conversion event. Each step is annotated with the file/line, the data state at that point, and the failure modes that can drop or duplicate the event.

---

## 1. ContactForm submission (`/contact` and modal)

This is the **working** path — properly instrumented end-to-end, modulo the issues called out in TRACKING-AUDIT.md.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ A. User lands on site with ?gclid=ABC                                       │
│    URL: https://ldndecks.com/deck-builder-fairfax-va?gclid=ABC              │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ B. Inline beforeInteractive script writes cookies                           │
│    File: layout.js:62-64                                                    │
│    Strategy: beforeInteractive (runs before React hydration)                │
│    Sets: gclid=ABC; max-age=90d; SameSite=Lax; Path=/                       │
│    Also captures gbraid, wbraid, fbclid, msclkid if present                 │
│                                                                             │
│    ✅ Runs before any user interaction                                      │
│    ⚠️  If user has cookies disabled → click ID lost                         │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ C. Page loads, GTM eventually loads (lazyOnload)                            │
│    File: layout.js:67-82                                                    │
│    Strategy: lazyOnload (after window.onload)                               │
│    Two scripts: gtm-init (consent defaults) + gtm-script (GTM-N87MG6QS)     │
│                                                                             │
│    🟠 Order between two lazyOnload scripts not guaranteed                   │
│    🟡 GTM may load 4-8s after user can interact on slow mobile              │
│    ✅ dataLayer.push calls before GTM loads → queued → processed when ready │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ D. User opens ContactForm, fills it, clicks "Submit Message"                │
│    File: ContactForm.jsx:16-46                                              │
│    Trigger: <form onSubmit={handleSubmit}>                                  │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ E. Client builds payload                                                    │
│    File: ContactForm.jsx:19-33                                              │
│    1. FormData from form                                                    │
│    2. getClickIds() reads gclid/gbraid/wbraid/fbclid/msclkid from cookie    │
│    3. Appends each non-null click ID to FormData                            │
│    4. Generates eventId via crypto.randomUUID() (fallback: timestamp+rand)  │
│    5. Appends event_id to FormData                                          │
│                                                                             │
│    ✅ event_id is the dedup anchor — same value used for client + server    │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ F. Server action: sendContactEmail(formData)                                │
│    File: sendEmail.js:6                                                     │
│    Network: client → Next.js server action (POST to /contact RSC endpoint)  │
│                                                                             │
│    Server reads: name, email, phone, service ('General Inquiry' fallback),  │
│                  message, address, city, state, zip,                        │
│                  gclid, gbraid, wbraid, fbclid, msclkid, event_id           │
│                                                                             │
│    Action 1: nodemailer → SMTP Gmail → office@ldndecks.com (subject + HTML) │
│              HTML includes Attribution block IF any click ID present        │
│                                                                             │
│    Action 2: sendMetaLeadEvent({...}) — fire-and-forget                     │
│              Hashes em, ph, fn, ln, ct, st, zp, country with SHA-256        │
│              Constructs fbc from fbclid if present                          │
│              POSTs to graph.facebook.com/v18.0/{PIXEL}/events               │
│              event_id passed → Meta dedupes against client Pixel if added   │
│              No-ops if META_PIXEL_ID / META_CAPI_ACCESS_TOKEN missing       │
│                                                                             │
│    Returns: { success: true } if SMTP succeeded                             │
│                                                                             │
│    🟡 source_url and _fbp are formData.get() but never set client-side      │
│    ⚠️  If SMTP throws, success=false → no thank-you redirect, no events     │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                       success === true (waiting on SMTP)
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ G. Client fires form_submit dataLayer event                                 │
│    File: ContactForm.jsx:36-39                                              │
│    File: tracking.js:19-34                                                  │
│    Guard: hasTracked.current ref prevents double-fire                       │
│                                                                             │
│    dataLayer.push({                                                         │
│      event: 'form_submit',                                                  │
│      event_id: <UUID>,                                                      │
│      form_type: 'quote',                                                    │
│      email: <plaintext>,           ← 🟠 must be hashed in GTM tag           │
│      phone: <plaintext>,           ← 🟠 must be hashed in GTM tag           │
│      gclid, gbraid, wbraid, fbclid, msclkid,                                │
│      page: <pathname>                                                       │
│    })                                                                       │
│                                                                             │
│    ⚠️  Fires BEFORE router.push — relies on dataLayer surviving SPA nav     │
│        (same window object → it does, but GTM tag firing must not block     │
│         navigation; transport_type=beacon recommended in GTM)               │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ H. closeContact() + router.push(`/thank-you?eid=<UUID>`)                    │
│    File: ContactForm.jsx:40-41                                              │
│    Type: Next.js App Router SPA navigation — same window, URL changes       │
│                                                                             │
│    ⚠️  No browser navigation event fires — GA4 page_view depends on         │
│       GTM History Change trigger being configured                           │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ I. /thank-you page renders                                                  │
│    File: thank-you/page.js                                                  │
│    Metadata: robots: { index: false } → safe from bot crawls                │
│    Renders: <Suspense><ThankYouTracking /></Suspense>                       │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ J. ThankYouTracking useEffect fires                                         │
│    File: ThankYouTracking.jsx:16-19                                         │
│    Reads: searchParams.get('eid') → <UUID>                                  │
│    Calls: trackLeadConfirmed({ eventId: <UUID> })                           │
│                                                                             │
│    dataLayer.push({                                                         │
│      event: 'lead_confirmed',                                               │
│      event_id: <UUID>,            ← SAME as form_submit ✅                  │
│      page: '/thank-you'                                                     │
│    })                                                                       │
│                                                                             │
│    🟡 useEffect re-runs on reload / back-forward → repeat lead_confirmed    │
│       with same event_id → dedup-dependent                                  │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ K. GTM processes events (asynchronously, when container is ready)           │
│                                                                             │
│    Both form_submit and lead_confirmed are in dataLayer with same event_id  │
│    What GTM does with them is invisible to us. EXPECTED config:             │
│                                                                             │
│    - Google Ads "Lead" conversion tag                                       │
│      • Trigger: Custom Event = lead_confirmed                               │
│      • transaction_id = {{DLV - event_id}}                                  │
│      • Enhanced Conversions: ON, email/phone from dataLayer                 │
│      • "Don't allow duplicate conversions" enabled                          │
│                                                                             │
│    - GA4 Event tag                                                          │
│      • Trigger: Custom Event = form_submit OR lead_confirmed                │
│      • Event name: generate_lead                                            │
│      • Parameters: event_id, form_type, page                                │
│                                                                             │
│    - Meta Pixel tag (if present)                                            │
│      • Trigger: Custom Event = form_submit                                  │
│      • Event: Lead                                                          │
│      • eventID: {{DLV - event_id}} → dedupes vs server CAPI                 │
│                                                                             │
│    🟠 NONE of this is verified from code. Could be misconfigured.           │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Failure points for path 1

| Step | Failure | Result |
|------|---------|--------|
| B | Cookie blocked / disabled | No click ID → no offline conversion → broken paid attribution |
| C | GTM never loads (user bounces) | All dataLayer pushes lost |
| C | Two lazyOnload scripts in wrong order | Tags may fire before consent default set |
| F | SMTP fails | `success: false` returned → user sees alert, NO events fire — correct behavior |
| F | Server action throws before SMTP | Same as above, correct |
| G | GTM not yet loaded when push happens | Events queue in dataLayer — processed when GTM arrives (no loss within session) |
| H | User closes tab between push and navigation | form_submit may be lost if `transport_type=beacon` not set |
| J | User reloads /thank-you | lead_confirmed fires again, same event_id, dedup-dependent |
| K | GTM dedup not configured | Double-count: form_submit AND lead_confirmed both create Google Ads conversion |

---

## 2. ContactHome submission (homepage form) — BROKEN PATH

This is the headline issue. The homepage is the highest-traffic form, and it skips every tracking step.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ A-C. Same as path 1 — landing, cookie capture, GTM loads                    │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ D. User fills homepage form, clicks "Get My Free Quote →"                   │
│    File: ContactHome.jsx:31-42                                              │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ E. handleSubmit                                                             │
│    File: ContactHome.jsx:31-42                                              │
│                                                                             │
│    const formData = new FormData(e.target);                                 │
│    const result = await sendContactEmail(formData);                         │
│                                                                             │
│    ❌ NO getClickIds() call                                                 │
│    ❌ NO click IDs appended to formData                                     │
│    ❌ NO event_id generated                                                 │
│    ❌ NO event_id appended to formData                                      │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ F. sendContactEmail receives formData                                       │
│    File: sendEmail.js                                                       │
│                                                                             │
│    formData.get('gclid') → null                                             │
│    formData.get('event_id') → null                                          │
│                                                                             │
│    Email sent to office@: NO "Attribution (paid ad click)" block            │
│    sendMetaLeadEvent fires with eventId=null → Meta can't dedup             │
│                                                                             │
│    ❌ Lead source data lost forever                                         │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ G. NO trackFormSubmit fired                                                 │
│                                                                             │
│    ❌ No form_submit event in dataLayer                                     │
│    ❌ Google Ads conversion tag (if trigger = form_submit) never fires      │
│    ❌ GA4 generate_lead event never fires                                   │
│    ❌ Meta Pixel client-side Lead event never fires                         │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ H. router.push('/thank-you')                                                │
│    File: ContactHome.jsx:38                                                 │
│                                                                             │
│    ❌ NO ?eid= query parameter                                              │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ I-J. /thank-you renders, ThankYouTracking fires                             │
│    File: ThankYouTracking.jsx                                               │
│                                                                             │
│    searchParams.get('eid') → UUID                                           │
│    trackLeadConfirmed({ eventId: UUID })                                    │
│                                                                             │
│    dataLayer.push({                                                         │
│      event: 'lead_confirmed',                                               │
│      event_id: UUID,    ← same dedup chain as form_submit + CAPI            │
│      page: '/thank-you'                                                     │
│    })                                                                       │
│                                                                             │
│    ✅  Conversion confirmation carries the same event_id                    │
│    ⚠️  GTM / Google Ads dedup still must be verified externally            │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Failure points for path 2

| Step | Failure | Result |
|------|---------|--------|
| E | Click ID capture fails | Paid attribution is weakened for that lead |
| F | Email/CAPI delivery fails | Server-side lead evidence is incomplete |
| G | trackFormSubmit fails | Google Ads / GA4 / Meta lose the primary submission signal |
| H | No `?eid=` | `lead_confirmed` cannot share the dedup chain |
| Anywhere | User submits, reloads /thank-you 3x | Dedup depends on GTM / Google Ads transaction_id configuration |

---

## 3. Phone CTA click path

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ User clicks one of ~43 tel:+15716557207 links across the site               │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                ┌──────────────────┴──────────────────┐
                │                                     │
                ▼                                     ▼
┌─────────────────────────────┐
│ Tracked CallLink anchors    │
│                             │
│ • Header + floating CTA     │
│ • Contact forms             │
│ • City / service / content  │
│ • Active raw tel scan clean │
│                             │
│ onClick={trackPhoneClick}   │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ dataLayer.push({            │
│   event: 'phone_click',     │
│   phone_number, link_text,  │
│   cta_location, page_path,  │
│   click IDs, UTM values     │
│ })                          │
│                             │
│ Native <a href="tel:..."/>  │
│ triggers system dialer      │
│                             │
│ 🟠 Click ≠ call — user may   │
│    not actually dial         │
│ 🟠 Multiple clicks = multi   │
│    events, no dedup          │
└─────────────────────────────┘
```

---

## 4. Consent Mode initialization

```
T=0     Page HTML arrives, body parses
        │
        ├─ <script strategy="beforeInteractive"> click-id-capture
        │  ✅ Cookies set for gclid/gbraid/wbraid/fbclid/msclkid
        │
T=interactive  React hydrates
        │
T=load+  window load event fires
        │
        ├─ <script strategy="lazyOnload"> gtm-init       ← order between
        │  Defines window.gtag, pushes consent defaults    these two NOT
        │                                                  guaranteed
        ├─ <script strategy="lazyOnload"> gtm-script     ←
        │  Loads https://www.googletagmanager.com/gtm.js?id=GTM-N87MG6QS
        │
        ├─ <script strategy="lazyOnload"> ahrefs-analytics
        │
        ▼
   GTM container ready, processes queued dataLayer history
```

**Risk:** if `gtm-script` resolves before `gtm-init`, gtm.js boots without consent defaults set. The first ~100ms of tag firing happens in implicit consent mode. For Google Ads tags this means the conversion may fire WITHOUT proper consent state attached.

For a US-only NoVA business, business impact is small (US traffic doesn't require consent under current GTM defaults). But:
- Inconsistent state in GA4 reporting
- Lighthouse and Privacy Sandbox health checks flag it
- Future EU/UK or California compliance work has to fix this anyway

**Recommendation:** promote `gtm-init` to `beforeInteractive` OR inline it directly in the HTML head before any GTM-related script.

---

## 5. Server-side Meta CAPI fan-out

```
sendContactEmail returns success
   │
   ├─ nodemailer.sendMail → Gmail SMTP → office@ldndecks.com
   │   (awaited)
   │
   └─ sendMetaLeadEvent({...})                  ← fire-and-forget
       │  File: metaCapi.js
       │
       ├─ Check env: META_PIXEL_ID + META_CAPI_ACCESS_TOKEN
       │   • Both missing → return { skipped: true }
       │
       ├─ Build payload
       │   • em = SHA256(lowercase email)
       │   • ph = SHA256(normalized phone, E.164 1XXXXXXXXXX)
       │   • fn, ln, ct, st, zp, country = SHA256(lowercase)
       │   • fbc = `fb.1.${Date.now()}.${fbclid}` if fbclid present
       │   • event_id = passed eventId   ← shared by ContactForm + ContactHome
       │   • event_source_url = formData.get('source_url') || hardcoded fallback
       │
       └─ POST https://graph.facebook.com/v18.0/{PIXEL_ID}/events
           • access_token query param
           • body: { data: [event], test_event_code? }
           • Errors logged, never thrown to caller
           • IP / User-Agent NOT captured — Meta match quality lower
```

---

## What the GTM container is presumed to do (unverified)

Since we cannot read the GTM container without export, the audit assumes a "reasonable" config based on dataLayer event shapes. **Every assumption here is a risk until verified.**

| Trigger (Custom Event) | Tag fired | Conversion type | Dedup key |
|---|---|---|---|
| `form_submit` | Meta Pixel `Lead` | Meta client-side | event_id |
| `form_submit` | GA4 `generate_lead` | GA4 | event_id |
| `lead_confirmed` | Google Ads `Lead` conversion | Google Ads | transaction_id = event_id |
| `lead_confirmed` | GA4 `generate_lead` (alt path) | GA4 | event_id |
| `phone_click` | GA4 phone engagement event | GA4 | event_id |
| `phone_click` | Google Ads phone-click conversion? | Google Ads | none — should be secondary or removed |

**If both `form_submit` AND `lead_confirmed` map to the SAME Google Ads conversion action and dedup isn't on → double-count.** This is the single highest-impact unverified assumption.

---

## Next: see [DUPLICATE-FIRE-CHECK.md](./DUPLICATE-FIRE-CHECK.md) for the full event × trigger × dedup matrix.
