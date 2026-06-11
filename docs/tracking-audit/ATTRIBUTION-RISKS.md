# Attribution Risks — Loudoun Decks

Risks specific to **whether a conversion is correctly attributed to the right click**, separate from whether it fires at all. Each risk has a severity, business impact, and a concrete fix path.

---

## Risk classification

| Sev | What it means |
|---|---|
| 🔴 Critical | Attribution permanently lost or grossly distorted for a meaningful share of conversions |
| 🟠 High     | Significant accuracy loss; ROAS / CPL numbers cannot be trusted for optimization |
| 🟡 Medium   | Edge cases that erode accuracy over time |
| 🟢 Low      | Theoretical or low-volume scenarios |

---

## R1 🔴 Homepage lead source lost on submission

**Where:** [ContactHome.jsx:31-42](../../src/components/ContactHome.jsx#L31-L42)
**Affected conversions:** every form submission from the homepage (likely 40–70% of total form volume).
**Current status:** resolved locally. ContactHome now uses `useLeadSubmit()`, forwards click IDs/UTMs, generates `event_id`, and routes to `/thank-you?eid=...`.
**Business impact:**
- Homepage leads can now carry the same attribution chain as ContactForm leads when click IDs are present
- Sales email/routing can receive attribution context
- Meta CAPI and future client Pixel dedup can share the same `event_id`

**Remaining risk:** GTM/Google Ads mapping still must be verified externally before scaling.

**Fix status:** shared `useLeadSubmit()` hook is implemented for both ContactForm and ContactHome.

---

## R2 🔴 Click-ID persistence depends solely on first-party cookies

**Where:** [layout.js:62-64](../../src/app/layout.js#L62-L64) and [clickIds.js](../../src/lib/clickIds.js)
**Affected conversions:** all paid traffic where the user doesn't convert on the landing visit.
**What goes wrong:** click IDs are stored only as cookies. Modern browsers / extensions / privacy tools that strip first-party cookies destroy attribution:
- **Safari ITP** caps client-set cookies at 7 days (the code sets `max-age=90d` but Safari ignores it for `document.cookie`-set cookies)
- **Firefox ETP** + uBlock Origin can clear cookies on close
- **Brave** shields strip many tracking parameters before cookies are set
- **iOS Mail / outlook.com link previews** click the URL with a fresh empty cookie jar — gclid is captured but the user's actual click is a separate session with no cookie

**Reporting distortion:**
- Safari users converting >7 days after click → gclid lost. For NoVA home services (sales cycle is typically 2–8 weeks), this is **HUGE**. Safari is ~25–30% of US mobile traffic.
- Multi-session attribution broken — user clicks ad Monday, returns organically Friday, converts → looks organic in Google Ads

**Fix path:**
1. **Short term:** acceptable — gclid lifetime is 90 days at Google's end, and only ~30% of Safari users are this delayed
2. **Medium term:** add gclid to URL on every internal navigation (Next.js `<Link>` augmentation) so a returning organic visitor still has the click ID in their URL if they bookmarked the entry page
3. **Long term:** server-side first-party tracking via a custom subdomain (`s.ldndecks.com`) using Server-side GTM. This bypasses ITP because the cookie is set as Set-Cookie by your origin server, not by JS.

---

## R3 🔴 SPA navigation may break GA4 page_view chain

**Where:** Next.js App Router SPA navigation throughout the app, terminating at [thank-you/page.js](../../src/app/thank-you/page.js)
**Affected conversions:** GA4 reporting of /thank-you and any "Conversions by Page" segmentation.
**What goes wrong:** SPA route changes don't fire native browser navigation events. GA4 page_view only fires once per pageload by default. Unless GTM has:
- A "History Change" trigger
- A GA4 Event tag with event_name=page_view bound to that trigger
- GA4 Config tag set to `send_page_view: false`

…then `/thank-you` (and every other Next.js route) is never reported as a page_view. The `lead_confirmed` event still fires (data goes to GA4 as an event), but it's not tied to a page_view.

**Reporting distortion:**
- GA4 "Pages and Screens" report: `/thank-you` missing or undercounted
- "Conversions by landing page" works (landing is the entry), but "Conversions by page path" doesn't
- Audience definitions like "users who saw /thank-you" can't be built reliably

**Fix:** in GTM, add a History Change trigger, point a GA4 Event tag at it sending `page_view` with `page_location: {{Page URL}}`. Verify in Real-time → DebugView.

---

## R4 🟢 Client-side Meta Pixel present, CAPI activation still env-gated

**Where:** [layout.js](../../src/app/layout.js) loads the direct Pixel fallback after consent; [metaCapi.js](../../src/server/metaCapi.js) handles env-gated server-side CAPI.
**Affected conversions:** all Meta-attributable conversions.
**Current status:** resolved site-side. The direct Pixel fallback initializes dataset `695923313293515` after accepted consent, sends `PageView`, and the route tracker sends one additional `PageView` per SPA navigation. The `ads:verify-meta-route` test passes with one initial PageView and two after navigation.

**Remaining risk:** production Meta CAPI still requires valid `META_PIXEL_ID` and `META_CAPI_ACCESS_TOKEN`; Meta Events Manager must confirm Browser + Server dedup with the same `event_id` before Meta scaling.

**Do not duplicate:** do not add a second Meta base Pixel through GTM while the direct fallback is active. If GTM is chosen later, first remove or disable the direct fallback and rerun `npm run ads:verify-meta-route`.

---

## R5 🟠 Cross-device attribution gap

**Where:** N/A — architectural
**Affected conversions:** users who click on phone, research on desktop, convert on phone.
**What goes wrong:** click IDs live in device-local cookies. A user who clicks a Google Ad on their phone, browses your site on desktop later, and submits the form from desktop → desktop has no gclid cookie. Google Ads has the click on phone but no conversion. Conversion is attributed to organic or direct.

For home services with $25k+ deals, families often research together on multiple devices.

**Fix path:**
- **Enhanced Conversions for Web** (already partly set up — hashed email/phone) lets Google match across devices if the same user is signed in on both. Confirm this is ON.
- **Customer Match audiences** uploaded from your CRM let you exclude existing leads from prospecting campaigns, reducing wasted spend.

---

## R6 🟠 Refresh / browser-back on /thank-you re-fires lead_confirmed

**Where:** [ThankYouTracking.jsx:16-19](../../src/components/ThankYouTracking.jsx#L16-L19)
**Affected conversions:** any user who reloads, bookmarks, or browser-back-forwards to `/thank-you`.
**What goes wrong:** `useEffect` re-runs on each mount; dataLayer push fires `lead_confirmed` again with the same `event_id`.
- **If GTM dedup is configured** (transaction_id on Google Ads tag + "don't allow duplicates" enabled): only the first fire counts. ✅ Correct outcome.
- **If GTM dedup is NOT configured**: each fire can count as a separate conversion. ❌ Conversion count inflates over time.

ContactHome now passes an `event_id`; the remaining risk is GTM/Google Ads dedup configuration, not missing homepage IDs.

**Reporting distortion:** likely small (most users don't reload /thank-you), but unbounded — a power user who bookmarks /thank-you and revisits 10× adds 10 phantom conversions.

**Fix:** client-side guard using sessionStorage flag `lead_fired_<event_id>` to block re-fire within session. Plus the fundamental GTM dedup verification.

---

## R7 🟠 lazyOnload GTM = lost events on bounce

**Where:** [layout.js:67,74](../../src/app/layout.js#L67)
**Affected conversions:** users who fire an event then leave the tab before GTM loads.
**What goes wrong:** `lazyOnload` fires GTM after `window.onload`. On a slow mobile connection (3G, throttled wifi), this can be 5–10 seconds after the page is interactive. If a user:
1. Lands on city page from Google Ads
2. Immediately clicks "Call (571) 655-7207" (tracked CTA via Header / FloatingCallButton)
3. Phone dialer opens, user switches apps → tab is backgrounded
4. GTM never loads → phone_click event sits in dataLayer, browser may purge before next page load

**Reporting distortion:** mobile phone-click events likely undercounted by 10–25% from this alone.

**Fix:** promote GTM scripts to `strategy="afterInteractive"` (Next.js default for `<Script>`). Trade-off: marginal LCP impact, but tracking is supposed to fire close to user action, not minutes after.

---

## R8 🟠 Referrer-Policy degrades some attribution

**Where:** [next.config.mjs:317](../../next.config.mjs#L317)
**Affected conversions:** any conversion attributed by referrer rather than click ID.
**What goes wrong:** `Referrer-Policy: origin-when-cross-origin` strips the path and query string from cross-origin referrers. When a user navigates from Google → ldndecks.com:
- Referrer arrives as `https://www.google.com/` (no path, no `?q=`)
- Click ID still passes in URL query (so gclid works fine)
- Organic Google search keyword is stripped (Google already strips this anyway via SSL search, so no incremental loss)

**Net:** click-ID-based attribution is unaffected. Referrer-based attribution (which Google Ads doesn't use anyway) is degraded. Low risk.

**No fix needed.** Keep policy as-is for privacy compliance.

---

## R9 🟡 Click ID query stripping by middleware / redirects

**Where:** [next.config.mjs:298-303](../../next.config.mjs#L298-L303), middleware (not read)
**Affected conversions:** any user who lands on a www.* URL.
**What goes wrong:** the www→non-www redirect uses `destination: 'https://ldndecks.com/:path*'` — `:path*` does **NOT** carry query params by default in Next.js redirect destinations unless you explicitly include `?:*` or use `permanent` with the right pattern. Need to verify: when a user clicks `https://www.ldndecks.com/ashburn?gclid=ABC`, does the redirect to `https://ldndecks.com/ashburn` preserve `?gclid=ABC`?

Next.js docs say `:path*` captures only the path. Query strings ARE preserved by default in Next.js redirects unless `has` matching strips them. **Probably fine** but worth a manual verification:

```bash
curl -I "https://www.ldndecks.com/test?gclid=ABCTEST123"
# Check the Location: header in the 301 response
```

If gclid is missing from the Location header, paid traffic landing on www.* permanently loses the click ID after the redirect.

**Fix if broken:** add explicit query preservation in redirect rules.

---

## R10 🟡 Multiple modal opens = multiple form_submit events

**Where:** ContactContext + ContactForm rendered in modal pattern
**Affected conversions:** rare edge case — user submits form, modal closes, modal reopens, user submits again.
**What goes wrong:** `hasTracked.current` is per-component-instance. Modal close + reopen creates a new ContactForm mount → new ref initialized to false → second submit fires a second `form_submit` event.

Each gets a fresh `event_id` (different UUIDs), so dedup won't catch them. Two distinct conversions counted for the same user submitting twice.

**Reporting distortion:** low volume, but bidding signal pollution if it happens.

**Fix:** lift dedup to a higher scope (sessionStorage keyed on email+phone+pathname, expires after 30 min).

---

## R11 🟡 Email may bounce, but conversion already counted

**Where:** [sendEmail.js:74](../../src/server/sendEmail.js#L74)
**Affected conversions:** delivery failures.
**What goes wrong:** `transporter.sendMail` resolves on successful handoff to Gmail SMTP, **not** on actual delivery. If Gmail later bounces the message to office@ldndecks.com (full inbox, blocked, etc.), the sales team never receives the lead, but the user saw the success page, conversion fired, Google Ads gets a conversion ping.

**Net:** conversion counted, lead lost. Smart Bidding optimizes toward "form submits that we can't follow up on."

**Fix:** add a webhook destination + retry queue, OR set up Gmail bounce monitoring with alerts. For a small business this is probably overkill — just monitor the inbox.

---

## R12 🟢 `event_source_url` forwarded to CAPI

**Where:** [useLeadSubmit.js](../../src/hooks/useLeadSubmit.js) appends `source_url`; [sendEmail.js](../../src/server/sendEmail.js) forwards it to CAPI.
**Affected:** Meta CAPI attribution accuracy.
**Current status:** resolved. Every shared lead form using `useLeadSubmit()` appends `window.location.href` as `source_url`. The `/contact` fallback now only applies if JavaScript cannot provide the current URL.

**Remaining risk:** server-only or API-created leads that bypass `useLeadSubmit()` may not have a browser URL and should be treated separately in reporting.

---

## R13 🟢 IP / User-Agent captured for CAPI

**Where:** [sendEmail.js](../../src/server/sendEmail.js) reads request headers and passes them to [metaCapi.js](../../src/server/metaCapi.js).
**Affected:** Meta CAPI match quality.
**Current status:** resolved. `sendEmail.js` reads `x-forwarded-for`, `x-real-ip`, and `user-agent` from `next/headers` when request context is available. If headers are unavailable in a test/build context, the form still succeeds and CAPI degrades gracefully.

**Remaining risk:** final EMQ still depends on real Events Manager diagnostics after credentials are provisioned.

---

## R14 🟢 PII may persist in dataLayer history

**Where:** [tracking.js:25-26](../../src/lib/tracking.js#L25-L26)
**Affected:** privacy posture, browser extension visibility.
**What goes wrong:** email and phone live in `window.dataLayer` array indefinitely (or until tab close). Any script that runs after — Hotjar, Microsoft Clarity, Ahrefs Analytics, third-party chat widgets — can read it. For most home-services sites this is a minor privacy concern, not a regulatory issue (no HIPAA, no PCI). But it's housekeeping.

**Fix:** hash client-side before pushing to dataLayer. Or accept the trade-off.

---

## R15 🟢 Privacy Sandbox / Topics API not configured

**Where:** N/A — architectural for 2026+
**Affected:** Chrome users post third-party cookie deprecation.
**What goes wrong:** Chrome's full third-party cookie deprecation in 2026 makes remarketing audiences and cross-site attribution harder. Privacy Sandbox APIs (Topics, Protected Audience) are the replacement. Google Ads will switch to Sandbox-based remarketing.

**Fix:** for now, do nothing — Privacy Sandbox is opt-in via meta tags and you don't need it yet. Revisit Q4 2026 when remarketing CPMs start spiking.

---

## Summary table

| ID | Sev | Risk | Reporting Distortion | Fix Effort |
|----|-----|------|---------------------|-----------|
| R1 | ✅ | Homepage lead source lost | Resolved by shared `useLeadSubmit()` | Done |
| R2 | 🔴 | Cookie-based click ID brittle | −20 to −30% multi-session | Medium (server-side GTM) |
| R3 | 🔴 | SPA page_view broken | −100% /thank-you in GA4 | Small (GTM config) |
| R4 | ✅ | No client Meta Pixel | Resolved by direct Pixel fallback | Done |
| R5 | 🟠 | Cross-device gaps | Variable | Built-in (Enhanced Conv) |
| R6 | ✅ | Reload re-fires | Source-side session guard implemented | Done |
| R7 | 🟠 | lazyOnload race | −10 to −25% phone clicks | Trivial (change strategy) |
| R8 | 🟠 | Referrer-Policy strips | None (ads use click ID) | None |
| R9 | 🟡 | www redirect query loss | TBD — verify | Small if broken |
| R10 | 🟡 | Modal reopen double-fire | Low volume | Small |
| R11 | 🟡 | Bounce after counted | Hard to measure | Operational |
| R12 | ✅ | CAPI source_url forwarding | Resolved via `source_url` FormData | Done |
| R13 | ✅ | CAPI missing IP/UA | Resolved via request headers | Done |
| R14 | 🟢 | PII in dataLayer history | Privacy housekeeping | Small |
| R15 | 🟢 | No Privacy Sandbox | Future (Q4 2026+) | Defer |

---

## Reading the table

R1, R4, R6, R12, and R13 are now resolved in code. Remaining optimization blockers are primarily GTM/Google Ads configuration proof, real lead/call outcome rows, and offline revenue feedback.
