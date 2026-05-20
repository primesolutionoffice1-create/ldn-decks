# ACCESS-AUDIT-REPORT — ldndecks.com

**Audit date:** 2026-05-12
**Repo:** primesolutionoffice1-create/ldn-decks-next
**Base branch:** main @ d26e458
**Audit branch:** audit/access-readiness-2026-05-12

> **Important:** The first version of this audit was produced from public-surface inspection of the homepage only and produced false-negatives on tracking. This report supersedes that version. All findings below are reconciled against source on main HEAD d26e458.

---

## 1. Evidence ledger

### 1.1 Source files inspected (main @ d26e458)

| File | Size | Confirmed contents |
|---|---:|---|
| src/app/layout.js | 5.2 KB | GTM-N87MG6QS injection, noscript iframe, Consent Mode v2 defaults, Ahrefs + Google verification meta, metadata export, LayoutContent wrapper |
| src/app/LayoutContent.jsx | 1.0 KB | Client wrapper |
| src/components/ContactForm.jsx | 7.5 KB | onSubmit + preventDefault + sendContactEmail server action + router.push('/thank-you?eid=...') + trackFormSubmit + trackPhoneClick + getClickIds; 10 named fields (firstName, lastName, email, phone, address, timeline, city, state, zip, message); **no honeypot** |
| src/components/ContactHome.jsx | 6.3 KB | onSubmit + preventDefault + sendContactEmail + /thank-you redirect — **does NOT import trackFormSubmit, trackPhoneClick, or getClickIds**; no honeypot; no tel link |
| src/components/ThankYouTracking.jsx | 0.9 KB | useEffect + useSearchParams + trackLeadConfirmed (called twice in component); **no client-side dedupe guard** (no sessionStorage / hasFired check) |
| src/lib/tracking.js | 2.1 KB | exports trackFormSubmit, trackPhoneClick, trackLeadConfirmed, trackEvent; dataLayer push; event_id; generate_lead event |
| src/lib/clickIds.js | 0.7 KB | exports CLICK_ID_KEYS = ['gclid','gbraid','wbraid','fbclid','msclkid'] and getClickIds; cookie + sessionStorage persistence |
| src/server/sendEmail.js | 3.9 KB | 'use server'; nodemailer over SMTP; integrates metaCapi; event_id propagation; click ID forwarding; try/catch + console logging; **no zod/schema validation, no rate-limit, no honeypot check** |
| src/server/metaCapi.js | 4.2 KB | 'use server'; META_PIXEL_ID + META_CAPI_ACCESS_TOKEN env-gated; sendMetaLeadEvent exported; fbp, fbc, SHA-256 hashed PII, shared event_id; posts to graph.facebook.com |
| src/app/thank-you/page.js | 2.7 KB | Page route; export metadata; robots noindex; embeds ThankYouTracking |
| src/middleware.js | 1.0 KB | export function middleware; host + https canonical redirects (mechanism for GSC variant consolidation) |
| next.config.mjs | 29.6 KB | trailingSlash false, dense redirects() array including 301 canonicals |
| vercel.json | 0.4 KB | image + _next/static immutable cache headers |
| docs/ads-tracking/ | folder | TRACKING-CHANGELOG, DEPLOY-CHECKLIST, ROLLBACK-PLAN, ENV-SETUP, QA-TEST-PLAN already exist |

### 1.2 Deployed-site evidence

- GTM `GTM-N87MG6QS` loaded; GA4 `G-B52LCDZ6WS` inside container.
- /thank-you returns 200 with h1 "Message Received!" and `noindex, follow`.
- robots.txt + sitemap.xml present and well-formed.
- BBB, Facebook, Instagram, TikTok, Google Maps profiles linked from homepage.
- aggregateRating 5.0 × 41 reviews in JSON-LD.

### 1.3 Branches and PRs

- Branches: main (HEAD d26e458), feat/ads-tracking-instrumentation (4 behind, 0 ahead), feat/seo-audit-phase3-4 (6 behind, 0 ahead), fix/ahrefs-internal-redirect-links (45 behind, 0 ahead), seo/fix-case-sensitive-404s (96 behind, 0 ahead). All feature branches stale and already merged into main.
- PRs: #1, #2, #3 all closed-merged. Zero open PRs.

---

## 2. Verified — already implemented in source ✅

| Item | File / location |
|---|---|
| GTM container install + noscript fallback | src/app/layout.js |
| Consent Mode v2 (EEA denied default, granted post-load) | src/app/layout.js |
| GA4 via GTM (G-B52LCDZ6WS) | GTM container (verified at runtime) |
| Click-ID persistence (gclid, gbraid, wbraid, fbclid, msclkid) | src/lib/clickIds.js |
| event_id propagation across client → server → CAPI | ContactForm → sendEmail → metaCapi |
| /thank-you route with noindex | src/app/thank-you/page.js |
| lead_confirmed firing | ThankYouTracking via trackLeadConfirmed |
| Meta CAPI server-side (hashed PII, fbp/fbc, event_id) | src/server/metaCapi.js |
| Enhanced Conversions field mapping (client-side data captured) | ContactForm fields cover email + phone + address + city/state/zip |
| Canonical conversion architecture (form-submit + thank-you-pageview + CAPI) | wired end-to-end |
| Noindex thank-you flow | src/app/thank-you/page.js + live meta |
| Middleware canonical host/https redirects | src/middleware.js |
| CallLink infrastructure (tel: + trackPhoneClick) | trackPhoneClick exists in tracking.js; consumed by ContactForm |
| GA4/GTM foundations | layout + container |
| Ads-tracking docs (5 files) | docs/ads-tracking/* |
| Schema NAP/aggregateRating/FAQ | rendered JSON-LD |
| robots.txt + sitemap.xml | public/ + dynamic |
| Ahrefs + Google site-verification meta | layout.js |

---

## 3. Implemented in source but UNVERIFIED in external UI ⚠️

- GA4 Conversions config (`lead_confirmed`, `generate_lead`, `phone_click`) — events fire client-side, but no proof they are marked as Conversions in the GA4 UI nor linked to Ads.
- GTM tag list — `dedupe_gclid` and `ads_pageview` keys observed in the container object; full tag/trigger inventory requires UI access.
- Google Ads conversion actions — `ads_pageview` suggests an Ads tag exists; the *configured* conversion actions, Enhanced Conversions toggle, and Ads ↔ GA4 import status are all unverified.
- Meta CAPI env vars (`META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`) — referenced by code; presence in Vercel project env is unverified.
- SMTP credentials for sendContactEmail — referenced; Vercel env vars unverified.
- DNS verification records (TXT for GSC, SPF, DKIM, DMARC) — unverified.

---

## 4. Partially implemented ⚠️

- **ContactHome.jsx tracking parity.** Homepage form submits correctly and reaches /thank-you, but does not call `trackFormSubmit`, `trackPhoneClick`, or `getClickIds`. Click IDs *are* persisted in cookie at landing (clickIds.js auto-runs), so the redirect to /thank-you may still carry the eid — but the dedicated form_submit event is silent and click IDs are not stamped onto the FormData of the homepage submission.
- **Client-side lead_confirmed dedupe.** ThankYouTracking has no sessionStorage / hasFired guard. Refresh of /thank-you re-fires GA4 `lead_confirmed`. Ads/Meta safe via event_id; GA4 will double-count.
- **TikTok click ID (ttclid).** TikTok profile is linked from site; `ttclid` is not in CLICK_ID_KEYS.

---

## 5. Intentionally deferred 🟦

- **Client-side Meta Pixel (`fbq`).** Not loaded by layout. Design choice: CAPI-only. Acceptable tradeoff if iOS browser blocking is the concern, but the Pixel-dedupe pair is one-sided.
- **CRM integration.** Lead system of record is `office@ldndecks.com` SMTP inbox. No HubSpot/Pipedrive/Airtable/Sheets hop. Deferred until offline-conversion loop is needed (it is needed now — see §6).

---

## 6. Truly missing ❌

- **Honeypot field** on either form. Bots will submit and inflate GA4 conversions.
- **Rate-limit** on sendContactEmail server action.
- **Schema validation** of FormData inside sendContactEmail.
- **Offline conversion upload path** to Google Ads. Cannot exist without (a) durable lead store and (b) booked/won outcome capture. Neither exists today.
- **CRM / system-of-record with durable gclid.** Email-only storage means offline-conversion CSV ingestion is not safe to start.
- **Enhanced Conversions verification inside Ads UI.** Field-mapping presence in code does not prove Ads is consuming it.
- **Smart Bidding validation with real leads.** Smart Bidding should remain **paused** until verified signal quality is established.

---

## 7. Unknown ❓ (external UI access required)

- GSC domain property coverage (apex/www × http/https) and account roles.
- GA4 user roles, Conversions toggles, Ads link.
- GTM workspace roles, tag inventory, publish history.
- Google Ads account access, conversion actions, Enhanced Conversions, Offline Conversions schedule.
- Vercel team roles, env vars, preview-protection, deploy approvals.
- DNS provider and record state (SPF/DKIM/DMARC/TXT verifications).
- GBP claim and admin.
- Trust profiles (Yelp, Trustpilot, TrexPro, TimberTech, Nextdoor, YouTube) — admin status.

---

## 8. Smart Bidding verdict

**Not ready yet, but structurally much closer.** Code-side conversion architecture (lead_confirmed + event_id + CAPI + click-ID persistence) is production-grade. What remains:

1. ContactHome parity so 100% of submitted leads emit form_submit + carry click IDs.
2. Client-side dedupe so GA4 doesn't double-count refresh views.
3. Honeypot + rate-limit so the signal isn't poisoned.
4. ≥30 verified offline conversions imported per Google's threshold for Smart Bidding stability.

Until those four are true, keep Smart Bidding **paused** (Manual CPC or Maximize Clicks with a tight budget cap).

---

## 9. Lead attribution trust verdict

**Trustworthy for ContactForm.jsx surfaces. Not yet trustworthy for ContactHome.jsx submissions.** Offline attribution back to Ads is not possible today because no durable `gclid` store exists outside email parsing.

---

## 10. Prior-audit correction notice

The prior version of this audit was based on homepage-only public DOM/network inspection. It incorrectly classified `lead_confirmed`, `phone_click`, `thank_you_view`, click-ID capture, and Meta CAPI as missing. Source inspection on main @ d26e458 has refuted those findings. This document is the corrected version of record.
