# Access Readiness Audit — Loudoun Decks (ldndecks.com)

**Audit date:** 2026-05-12
**Repo:** primesolutionoffice1-create/ldn-decks-next
**Base branch:** main @ d26e458
**Audit branch:** audit/access-readiness-2026-05-12
**Auditor:** Claude (browser-automation session, evidence-only)

---

## Method

1. **Public-surface inspection** of https://ldndecks.com/ (DOM, headers, robots.txt, sitemap.xml, JSON-LD, dataLayer, network).
2. **Source inspection** of main HEAD d26e458 in this repo — every file named in the audit scope was opened and verified.
3. **Cross-check** between deployed reality and source-of-truth to separate "truly missing" from "unverified-but-implemented."

The initial public-surface pass was **homepage-only** and produced false-negatives on tracking. Source inspection corrected those findings. This README and the rest of the audit pack reflect the corrected reality.

---

## Revised framing

> Loudoun Decks already has a materially mature attribution foundation implemented in code and deployed. The remaining gaps are primarily homepage-form instrumentation parity, client-side dedupe hardening, spam / rate-limit protection, CRM durability, GTM verification, Enhanced Conversions verification, offline-conversion infrastructure, and governance / access validation.

This is **not** a "tracking missing" project. It is a **tracking hardening + signal-quality + revenue-feedback-loop completion** project.

---

## What was verified ✅

- GTM container `GTM-N87MG6QS` installed sitewide in `src/app/layout.js` with noscript iframe fallback.
- Google Consent Mode v2 wired with EEA/UK/CH denied defaults, then granted post-load.
- GA4 measurement ID `G-B52LCDZ6WS` loaded via GTM (verified inside `window.google_tag_manager`).
- Click-ID persistence for `gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid` in `src/lib/clickIds.js` (90-day cookies + sessionStorage).
- `event_id` UUID generation and propagation through ContactForm → sendContactEmail → metaCapi.
- `/thank-you` route exists in source AND in production, returns 200, h1 "Message Received!", `<meta name="robots" content="noindex, follow">`.
- `trackFormSubmit`, `trackPhoneClick`, `trackLeadConfirmed`, `trackEvent` exported from `src/lib/tracking.js`, push to dataLayer including a `generate_lead` event.
- Meta CAPI server forwarder in `src/server/metaCapi.js` with hashed PII, `fbp`/`fbc`, shared `event_id`, posts to graph.facebook.com — env-gated.
- Middleware in `src/middleware.js` performs host and https canonical redirects (covers GSC variant consolidation mechanism).
- Ahrefs + Google site-verification meta tags injected in root layout.
- Schema markup: `GeneralContractor` org, `WebPage`, `FAQPage` JSON-LD with NAP, 5.0★ × 41 aggregateRating.
- Form forms (`ContactForm.jsx`) use `onSubmit + preventDefault + sendContactEmail` server action — **no GET-leak to URL**.
- robots.txt allows all major crawlers and disallows tracking-param URLs to prevent duplicate indexation.
- sitemap.xml returns 200 application/xml.
- BBB profile linked and accredited (`0241-236091241`). Facebook, Instagram, TikTok profiles linked. Google Maps presence confirmed.
- Five ads-tracking docs already exist under `docs/ads-tracking/` (CHANGELOG, DEPLOY-CHECKLIST, ROLLBACK-PLAN, ENV-SETUP, QA-TEST-PLAN).

---

## What is missing or partial ⚠️ / ❌

- **❌ `ContactHome.jsx` parity gap.** Homepage form calls `sendContactEmail` and redirects to `/thank-you` but does **not** call `trackFormSubmit`, `trackPhoneClick`, or `getClickIds`. Homepage is the primary lead surface — this is the highest-impact code gap.
- **⚠️ `ThankYouTracking.jsx` lacks client-side dedupe guard.** No `sessionStorage`/`hasFired` check observed. A page refresh re-fires `lead_confirmed` in GA4. (Ads + Meta still dedupe via `event_id`.)
- **❌ No honeypot, rate-limit, or input validation** in `sendContactEmail`. Spam, bot floods, and malformed payloads will pollute GA4 conversions and inflate Smart Bidding signal noise.
- **⚠️ `ttclid` (TikTok) not in CLICK_ID_KEYS** despite TikTok being a linked social channel.
- **⚠️ No browser-side Meta Pixel (`fbq`).** CAPI-only design — intentional but means no client-side conversion signal for Meta and Pixel-dedupe pairing only works one-way.
- **❌ System of record is SMTP email to `office@ldndecks.com`.** No CRM, no durable `gclid` storage, no offline-conversion upload loop possible without manual inbox parsing.
- **❌ Offline-conversion upload to Google Ads** is not configured (depends on CRM durability).

---

## What is unknown ❓ (external UI access required)

- GSC: domain-property vs URL-prefix; coverage of apex/www × http/https variants; account roles.
- GA4: event configuration as Conversions; Ads link status; Enhanced Conversions toggle; user roles.
- GTM: tag/trigger/variable list inside the container UI; publish history; user roles.
- Google Ads: account existence, conversion actions configured, Enhanced Conversions, offline-import schedule.
- Vercel: team roles, env vars, preview-protection.
- DNS / registrar: provider; SPF / DKIM / DMARC for `office@ldndecks.com`.
- GBP (Google Business Profile): claim status, admin access.
- Trust profiles: Yelp, Trustpilot, TrexPro, TimberTech, Nextdoor, YouTube admin status.

---

## Revised readiness scores

| Dimension | Score | vs prior |
|---|---|---|
| Overall access readiness | **58 / 100** | +20 |
| SEO execution readiness | **78 / 100** | +16 |
| Ads tracking readiness (code) | **75 / 100** | +53 |
| Ads tracking readiness (external UI verification) | **30 / 100** | unchanged |
| Deployment readiness | **70 / 100** | +35 |
| Attribution readiness | **72 / 100** | new |

---

## Top 5 real blockers

1. `ContactHome.jsx` parity gap — homepage leads partially untracked.
2. CRM / system-of-record durability — no `gclid` storage path.
3. Offline-conversion upload loop to Google Ads — depends on (2).
4. Enhanced Conversions field mapping verification inside GTM/Ads UI.
5. Client-side `lead_confirmed` dedupe + honeypot/rate-limit hardening.

---

## Next step recommendation

Treat this audit branch as documentation-only. **Do not merge yet.** Use it as the source of truth for the next two work streams:

1. **Code stream** — execute CODE-ACTION-QUEUE.md on a separate feature branch off main.
2. **Access stream** — execute MISSING-ACCESS-ACTION-PLAN.md by granting Claude verified UI access to GSC, GA4, GTM, Ads, Vercel, DNS, GBP.

CSV ingestion for offline conversions **cannot safely begin yet** — there is no durable `gclid` storage outside email body parsing. Build (1)+(2) first.

---

## File index

| File | Purpose |
|---|---|
| ACCESS-AUDIT-REPORT.md | Full evidence-based narrative of what is verified / partial / missing / unknown. |
| ACCESS-MATRIX.md | Status table across every access surface. |
| MISSING-ACCESS-ACTION-PLAN.md | Concrete steps to close every Unknown / Missing item. |
| TRACKING-READINESS.md | Tracking-stack-specific verdict per data layer (GTM, GA4, Ads, Meta, CRM). |
| SEO-OPS-READINESS-SCORE.md | Scoring breakdown + rationale. |
| IMPLEMENTATION-ROADMAP.md | Phase 0–4 plan, including "Phase 1 already completed" and "Phase 2 — Revenue Feedback Infrastructure." |
| CODE-ACTION-QUEUE.md | Codebase-only tasks, source-verified, with risk + verification per task. |
