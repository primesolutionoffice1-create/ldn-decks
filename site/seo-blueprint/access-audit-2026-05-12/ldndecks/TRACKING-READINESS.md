# TRACKING-READINESS — ldndecks.com

**Date:** 2026-05-12  **Base:** main @ d26e458  **Branch:** audit/access-readiness-2026-05-12

Per-layer verdict for the conversion-tracking stack. Source-verified where possible; UI-blocked items explicitly marked.

---

## Executive verdict

> Loudoun Decks has a materially mature attribution foundation. The architecture (click-ID persistence + event_id dedupe + Meta CAPI + GA4-via-GTM + Consent Mode v2 + noindex thank-you flow) is production-grade. Remaining work is hardening + parity + revenue-feedback infrastructure, not foundational construction.

---

## Layer 1 — Consent (✅ ready)

| Item | Status | Evidence |
|---|---|---|
| Consent Mode v2 default | ✅ | layout.js: ad_storage/ad_user_data/ad_personalization/analytics_storage = denied for EEA/UK/CH region list, 500ms wait_for_update |
| Post-load granted default | ✅ | layout.js second consent push |
| Cookie banner UX | ❓ | not inspected in this audit (no banner observed on US viewport) |
| Region-scoping correctness | ✅ | 31 EEA + UK + CH country codes present |

**Verdict:** consent foundation is correctly sequenced (deny → init → grant), satisfying Consent Mode v2 requirements for Google Ads + GA4 attribution.

---

## Layer 2 — GTM container (⚠️ verified install, contents unverified)

| Item | Status | Evidence |
|---|---|---|
| Container ID | ✅ `GTM-N87MG6QS` | layout.js + runtime `window.google_tag_manager` |
| gtm.js, gtm.dom, gtm.load lifecycle | ✅ | observed in dataLayer |
| Noscript iframe | ✅ | layout.js |
| `dedupe_gclid` variable/tag | ✅ | key observed in container object |
| `ads_pageview` tag | ✅ | key observed in container object |
| Full tag inventory | ❓ | UI access required |
| Publish history / unpublished workspace edits | ❓ | UI access required |
| User roles | ❓ | UI access required |

**Verdict:** install verified, contents must be UI-confirmed before Smart Bidding is enabled.

---

## Layer 3 — GA4 (⚠️ install verified, events firing, UI-side conversion config unverified)

| Item | Status | Evidence |
|---|---|---|
| Measurement ID | ✅ `G-B52LCDZ6WS` | inside GTM container |
| page_view | ✅ | GA4 default + Consent Mode page tag |
| form_submit (custom event) | ✅ fires from ContactForm | trackFormSubmit in tracking.js |
| form_submit fires from ContactHome | ❌ | ContactHome.jsx does not import trackFormSubmit |
| phone_click | ✅ fires from ContactForm tel link | trackPhoneClick wired |
| phone_click on every sitewide tel: link | ⚠️ | only ContactForm; other surfaces unverified |
| lead_confirmed | ✅ | ThankYouTracking via trackLeadConfirmed |
| generate_lead | ✅ | present in tracking.js |
| Events marked as Conversions in GA4 UI | ❓ | UI access required |
| Ads link | ❓ | UI access required |
| Data retention 14 months | ❓ | UI access required |

**Verdict:** client-side events are emitting; UI configuration must be confirmed before signal is trustworthy for Smart Bidding.

---

## Layer 4 — Google Ads (❓ unverified in UI; ⚠️ feedback loop missing)

| Item | Status | Evidence |
|---|---|---|
| Account exists | ⚠️ inferred | `ads_pageview` tag implies an Ads account |
| Conversion action: form submit | ❓ | UI access required |
| Conversion action: phone call | ❓ | UI access required |
| Conversion action: booked job (offline) | ❌ not configured | no CRM, no upload pipeline |
| Enhanced Conversions for Leads | ❓ | UI access required (field-mapping is present in code) |
| Offline Conversion import schedule | ❌ | not configured |
| Bidding strategy | ❓ → recommended Manual CPC / Maximize Clicks | Smart Bidding gated on §revenue feedback |

**Verdict:** all UI items must be confirmed. Offline-import pipeline is not yet possible.

---

## Layer 5 — Meta CAPI (✅ scaffolded; depends on env vars)

| Item | Status | Evidence |
|---|---|---|
| Server endpoint | ✅ | src/server/metaCapi.js |
| Env-gated graceful no-op | ✅ | header comment confirms behavior |
| SHA-256 hashing of PII | ✅ | createHash usage |
| fbp + fbc capture | ✅ | both present |
| event_id shared with client | ✅ | propagated through sendEmail |
| Posts to graph.facebook.com | ✅ | endpoint hardcoded |
| Client-side Pixel (fbq) | 🟦 deliberately absent | CAPI-only design |
| META_PIXEL_ID env set in Vercel | ❓ | UI access required |
| META_CAPI_ACCESS_TOKEN env set in Vercel | ❓ | UI access required |
| Test events / Events Manager validation | ❓ | UI access required |

**Verdict:** code-side complete. Cannot verify it is firing without Meta Events Manager + Vercel env access.

---

## Layer 6 — Click-ID capture (✅ mature, one gap)

| Click ID | Status | Notes |
|---|---|---|
| gclid (Google Ads) | ✅ | CLICK_ID_KEYS |
| gbraid (iOS Web→App) | ✅ | CLICK_ID_KEYS |
| wbraid (iOS App→Web) | ✅ | CLICK_ID_KEYS |
| fbclid (Meta) | ✅ | CLICK_ID_KEYS |
| msclkid (Microsoft Ads) | ✅ | CLICK_ID_KEYS |
| ttclid (TikTok) | ❌ | not in CLICK_ID_KEYS, despite TikTok presence |
| li_fat_id (LinkedIn) | n/a | no LinkedIn channel |
| Persistence (cookie 90d + sessionStorage) | ✅ | clickIds.js |
| Auto-capture from URL on landing | ✅ | implied by getClickIds + cookie persistence |

**Verdict:** add ttclid before any TikTok ad spend.

---

## Layer 7 — Forms / lead capture (⚠️ parity gap on homepage)

| Form | Submit | Click IDs | form_submit | phone_click | Honeypot | Rate-limit |
|---|---|---|---|---|---|---|
| ContactForm.jsx | ✅ POST → /thank-you | ✅ | ✅ | ✅ | ❌ | ❌ |
| ContactHome.jsx | ✅ POST → /thank-you | ❌ | ❌ | n/a | ❌ | ❌ |

**Verdict:** ContactHome parity is the single highest-impact code gap.

---

## Layer 8 — /thank-you flow (⚠️ refresh dedupe gap)

| Item | Status | Evidence |
|---|---|---|
| Route + noindex | ✅ | live + source |
| trackLeadConfirmed fired on mount | ✅ | ThankYouTracking |
| eid (event_id) consumed from URL | ✅ | useSearchParams |
| Refresh-safe (client dedupe) | ❌ | no sessionStorage/hasFired guard |
| Server-side dedupe via event_id | ✅ | Ads + Meta dedupe correctly |

**Verdict:** Ads + Meta are safe via event_id. GA4 will double-count on refresh; client-side dedupe must be added.

---

## Layer 9 — System of record / CRM (❌ gap)

| Item | Status | Evidence |
|---|---|---|
| Lead destination | SMTP inbox `office@ldndecks.com` | sendEmail.js |
| Durable gclid storage | ❌ | only in email body |
| Booked/won outcome capture | ❌ | not modeled |
| Offline-conversion CSV pipeline | ❌ | not built |
| CRM platform | none | none observed |

**Verdict:** until a durable lead store with structured `gclid` exists, offline-conversion import to Google Ads is not safe to start.

---

## Smart Bidding verdict (revised)

**Not ready yet, but structurally much closer than the prior audit implied.** Required before Smart Bidding can be safely enabled:

1. ContactHome parity (forms emit form_submit + carry click IDs).
2. Client-side lead_confirmed dedupe (GA4 doesn't double-count refreshes).
3. Honeypot + rate-limit (signal isn't poisoned by bots).
4. Durable lead store + ≥30 verified offline conversions imported.

Estimated time to readiness: 1 week of focused engineering + a clean lead-pipeline week.

---

## Lead attribution trust verdict

| Surface | Trust |
|---|---|
| ContactForm.jsx submissions | ✅ trustworthy (event_id, click IDs, CAPI, lead_confirmed) |
| ContactHome.jsx submissions | ⚠️ partial (event flow OK but click IDs not stamped, form_submit silent) |
| Phone calls | ⚠️ phone_click fires from ContactForm but not measured as call-completion |
| Email-direct (mailto:) | ❌ untracked |
| Offline (closed/won) | ❌ no feedback loop |

---

## Next concrete validations (in order)

1. Open GA4 DebugView, submit a homepage form, confirm: page_view → form_submit (missing today on ContactHome) → page_view /thank-you → lead_confirmed.
2. Open Meta Events Manager Test Events, repeat. Confirm event_id dedupe between Pixel-less browser signal (none) and CAPI server event.
3. Open Google Ads → Conversions diagnostics, verify Enhanced Conversions "Recording" status.
4. Run a Lighthouse + GTM Preview to verify Consent Mode default is denied for EEA simulated locale.
