# ACCESS-MATRIX — ldndecks.com

**Date:** 2026-05-12  **Base:** main @ d26e458  **Branch:** audit/access-readiness-2026-05-12

Legend: ✅ Verified · ⚠️ Partial · ❌ Missing · ❓ Unknown (external UI access required) · 🟦 Intentionally deferred

---

## A. Tracking stack

| Surface | Status | Evidence |
|---|---|---|
| GTM container install | ✅ | `GTM-N87MG6QS` in `src/app/layout.js` + runtime |
| GTM noscript fallback | ✅ | layout.js |
| Consent Mode v2 defaults | ✅ | layout.js (denied for EEA/UK/CH, granted post-load) |
| GA4 measurement ID | ✅ | `G-B52LCDZ6WS` via GTM container |
| GA4 Conversions config | ❓ | UI access required |
| GA4 ↔ Ads link | ❓ | UI access required |
| dataLayer event: form_submit | ✅ | `trackFormSubmit` in tracking.js (ContactForm only) |
| dataLayer event: phone_click | ✅ (partial coverage) | `trackPhoneClick` exists; consumed by ContactForm; **not by ContactHome** |
| dataLayer event: lead_confirmed | ✅ | `trackLeadConfirmed` fired on /thank-you via ThankYouTracking |
| dataLayer event: generate_lead | ✅ | present in tracking.js |
| event_id (UUID) per submission | ✅ | propagated client → server → CAPI |
| Client-side dedupe of lead_confirmed | ❌ | no sessionStorage/hasFired guard in ThankYouTracking |
| Meta CAPI server endpoint | ✅ | metaCapi.js: hashed PII, fbp/fbc, event_id, graph.facebook.com |
| Meta Pixel client-side (`fbq`) | 🟦 | not loaded; CAPI-only design |
| Enhanced Conversions field coverage (client) | ✅ | email, phone, address, city/state/zip captured |
| Enhanced Conversions enabled in Ads | ❓ | UI access required |
| Offline Conversions import | ❌ | no durable lead store; no CSV pipeline |

## B. Forms / lead capture

| Surface | Status | Evidence |
|---|---|---|
| ContactForm.jsx submit flow | ✅ | onSubmit + preventDefault + sendContactEmail + /thank-you redirect with eid |
| ContactForm.jsx click-ID stamping | ✅ | getClickIds + CLICK_ID_KEYS appended to FormData |
| ContactForm.jsx form_submit event | ✅ | trackFormSubmit called |
| ContactForm.jsx phone_click on tel: | ✅ | trackPhoneClick wired |
| ContactHome.jsx submit flow | ✅ | onSubmit + preventDefault + sendContactEmail + /thank-you |
| ContactHome.jsx click-ID stamping | ❌ | does not import getClickIds |
| ContactHome.jsx form_submit event | ❌ | does not call trackFormSubmit |
| ContactHome.jsx phone_click | n/a | no tel link inside this component |
| Honeypot field | ❌ | not present in either form |
| Rate-limit on server action | ❌ | none |
| Schema validation in sendContactEmail | ❌ | no zod/yup |
| ttclid (TikTok) capture | ❌ | not in CLICK_ID_KEYS |

## C. /thank-you flow

| Surface | Status | Evidence |
|---|---|---|
| Route exists in source | ✅ | src/app/thank-you/page.js |
| Route deployed | ✅ | https://ldndecks.com/thank-you returns 200 |
| noindex meta | ✅ | live: `noindex, follow` |
| eid query param consumed | ✅ | ThankYouTracking via useSearchParams |
| lead_confirmed fires | ✅ | trackLeadConfirmed |
| Refresh-safe (client-side dedupe) | ❌ | no sessionStorage guard |

## D. SEO surfaces

| Surface | Status | Evidence |
|---|---|---|
| Schema: GeneralContractor | ✅ | rendered JSON-LD |
| Schema: WebPage | ✅ | rendered JSON-LD |
| Schema: FAQPage | ✅ | rendered JSON-LD |
| aggregateRating 5.0 × 41 reviews | ✅ | JSON-LD |
| NAP consistency | ✅ | 13704 Winding Oak Cir, Centreville, VA 20121, +1 571-655-7207 |
| robots.txt | ✅ | well-formed, allows major bots, blocks tracking-param URLs |
| sitemap.xml | ✅ | 200 application/xml |
| OG + Twitter cards | ✅ | layout meta |
| Google site-verification meta | ✅ | layout.js |
| Ahrefs site-verification meta | ✅ | layout.js |
| Canonical redirect host/https (middleware) | ✅ | middleware.js |
| GSC domain property covering all 4 variants | ❓ | UI access required |

## E. Hosting / deployment / DNS

| Surface | Status | Evidence |
|---|---|---|
| Hosting: Vercel | ✅ | response headers (`server: Vercel`, `x-vercel-id: iad1`) |
| Framework: Next.js App Router prerender | ✅ | `x-nextjs-prerender: 1` |
| HSTS | ✅ | strict-transport-security header |
| Frame-ancestors / x-frame-options | ✅ | SAMEORIGIN |
| Permissions-Policy | ✅ | camera/microphone/geolocation denied |
| Vercel team roles | ❓ | UI access required |
| Vercel env vars (META_*, SMTP_*, GTM_ID) | ❓ | UI access required |
| Preview-deploy protection | ❓ | UI access required |
| DNS provider | ❓ | not resolvable from browser |
| SPF / DKIM / DMARC for office@ldndecks.com | ❓ | DNS access required |

## F. Local / trust profiles

| Surface | Status | Evidence |
|---|---|---|
| Google Business Profile (claim) | ❓ | Maps listing exists; ownership unknown |
| BBB | ✅ present | accredited profile linked, ID 0241-236091241 |
| Facebook | ✅ present | profile linked |
| Instagram | ✅ present | @loudoundecks |
| TikTok | ✅ present | @loudoun.decks |
| Houzz | ⚠️ | internal landing page only |
| Yelp | ❓ | not linked from homepage |
| Trustpilot | ❓ | not linked |
| TrexPro directory | ⚠️ | claimed in copy; directory entry unverified |
| TimberTech directory | ⚠️ | claimed in copy; directory entry unverified |
| Nextdoor | ❓ | not linked |
| YouTube | ❓ | not linked |

## G. Governance

| Surface | Status | Evidence |
|---|---|---|
| Repo owner | ✅ | primesolutionoffice1-create |
| Contributors | ✅ | itampeed, Muhammad Bilal, claude |
| Branch protection on main | ❓ | UI access required |
| Open PRs | ✅ | 0 open |
| Documented deploy approval flow | ❌ | not documented |
| Documented GTM publish approval | ❌ | not documented |
| Documented rollback runbook (ads) | ✅ | docs/ads-tracking/ROLLBACK-PLAN.md |
| Backup owner per surface | ❌ | not documented |
