---
brain_schema: ads-brain.v1
type: audit
platform: google
audit_scope: conversion-ux
title: "CONVERSION-UX-AUDIT"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: complete
---

# Conversion UX Audit — ldndecks.com

Source basis: Next.js source, components and tracking library. No conversion-rate numbers are quoted — those require analytics data and a Google Ads conversion column.

## 1. The conversion mechanism

A "conversion" on ldndecks.com fires through this chain:

1. **ContactForm submit** (`src/components/ContactForm.jsx:8`) → `useLeadSubmit({ formType: 'quote' })` posts to the server endpoint.
2. Server processes via `src/server/sendEmail.js` (modified per `git status`).
3. On success → `closeContact()` then redirect to **`/thank-you`**.
4. **`/thank-you`** renders `<ThankYouTracking />` (`src/app/thank-you/page.js:21`).
5. ThankYouTracking calls `trackLeadConfirmed({ eventId })` → dataLayer `event: 'lead_confirmed'` (`src/lib/tracking.js:89-106`).
6. GTM (external — not in repo) maps `lead_confirmed` to a Google Ads Lead conversion action.
7. Phone clicks fire `phone_click` (vanity GA4 event, not the conversion).

This architecture is correct. The risks are in execution.

## 2. Conversion-blocker inventory

### 2.1 Above-the-fold form presence

| Page | Form above-the-fold (desktop) | Phone above-the-fold | Sticky CTA |
|---|---|---|---|
| `/get-estimate` | ✅ (right column) | ✅ (orange button in hero) | VERIFY |
| `/composite-decks` | ❌ (bottom only) | ❌ | VERIFY |
| `/trex-decks` | ❌ | ❌ | VERIFY |
| `/services/porches/screened-porch` | ❌ | ❌ | VERIFY |
| `/services/patios` | ❌ | ❌ | VERIFY |
| `/services/gazebo-pergola` | ❌ | ❌ | VERIFY |
| `/deck-repair` | ❌ (form bottom) | ✅ (orange banner with CallLink) | VERIFY |
| `/services/deck-replacement` | ❌ | ❌ | VERIFY |
| `/deck-builder-{city}-va` (template) | ❌ | VERIFY | VERIFY |

**Pattern**: only `/get-estimate` and (partially) `/deck-repair` have above-the-fold conversion mechanics. Every other service page makes the visitor scroll to the bottom `<ContactHome />` to convert. On mobile, that's 1500–3000+ px of scroll for a $20k–$80k decision — too far without a persistent CTA.

### 2.2 ContactForm UX (`src/components/ContactForm.jsx`)

- ✅ Honeypot (`company_website` hidden input, line 59-66) — bots auto-fill, real users don't see.
- ✅ Required fields marked, autoComplete attributes correct.
- ✅ Submit handler shows a `submitting` state, but errors are handled with an `alert()` (line 20) — not the friendliest UX for a $25k+ form. Inline error toast preferred.
- ⚠️ No phone field listed in the first 80 lines viewed — VERIFY the form has a phone input (PPC home-services accounts depend on phone capture for callbacks; phone is also the strongest Enhanced Conversions signal alongside email).
- ⚠️ No ZIP code field visible in the first 80 lines — VERIFY. ZIP is critical for both Enhanced Conversions and lead-routing in a multi-county SAB.
- ⚠️ No "service interested in" select — every lead lands as "quote" (`formType: 'quote'`). Means downstream lead routing and Smart Bidding lacks the segmentation signal that "screened porch" leads convert differently than "repair" leads.

### 2.3 Phone CTA

- ✅ Single `CallLink` component wired with `trackPhoneClick` dataLayer push (`src/components/CallLink.jsx`).
- ✅ Display number consistent across the site.
- ❌ No call-tracking forwarding number — see [[QUALITY-SCORE-RISK-REPORT]] Risk 6.

### 2.4 Trust signals

| Signal | Where it appears | PPC value |
|---|---|---|
| 5.0 Google rating + review count (41) | Hero, get-estimate hero, footer | ✅ Strong |
| Trex Platinum Partner badge | Hero, every service page in copy | ✅ Strong |
| TimberTech Certified | Homepage copy | ⚠️ Inconsistent — appears in body, not in any badge |
| BBB Accredited | `/bbb-accredited-deck-builder-virginia` exists | ⚠️ Verify badge is rendered on top-converting LPs |
| Virginia Class A License | Mentioned in screened-porch page | ⚠️ Add to every service page header |
| Insured / bonded | get-estimate hero shows "Licensed & Insured" | ✅ |
| Local address | `13704 Winding Oak Cir, Centreville, VA 20121` in ContactForm info col | ✅ |
| Process steps + 3D design | ProcessSteps component on every service page | ✅ |
| Before / after | `/before-and-after` linked from get-estimate | ✅ |

### 2.5 Friction and dead-ends

- **Thank-you page only links to "Back to Home" and "View Project Gallery"** (`src/app/thank-you/page.js:63-69`). No upsell to "Book my consultation now" or "Schedule a call". Missed step in the conversion flow. Recommend adding a Calendly link or "we'll call within 2 hours — or call us now: (571) 655-7207" to keep the warm lead engaged.
- **`alert("Failed to send message. Please try again.")`** on form error (`src/components/ContactForm.jsx:20`). Modal alert is dated UX and gets blocked in some browsers. Inline error message preferred.
- **Form requires manual submit, no auto-save / multi-step** — for a $25k decision, splitting the form into 2 steps (project type → contact info) typically lifts completion by 10–20% on home-services LPs.

## 3. Mobile lead-flow

I cannot test rendering without a browser, so this section is source-derived + flagged as **VERIFY**.

- Hero is `fill` Image with `sizes="(max-width: 768px) 100vw, 100vw"` — mobile-friendly.
- `<HeroCTA />` is a client component → buttons hydrate. VERIFY tap targets are 48×48 px minimum.
- No explicit "sticky CTA bar on mobile scroll" component found in `grep -l "sticky" src/components/`. **High lift opportunity** — a persistent "Call · Quote" bar at the bottom of mobile screens typically lifts PPC mobile CVR 8–15% on home-services accounts.
- The get-estimate page uses `gridTemplateColumns: '1fr 1fr'` on the hero (line 41). On mobile this stacks. VERIFY the form stacks below the trust strip and not below the image (form should be reachable in 1 scroll).

## 4. Conversion path: gclid / Enhanced Conversions

`src/lib/clickIds.js` (untracked file from `git status`) — open question: confirm it captures and persists `gclid`, `gbraid`, `wbraid` on first paid visit and replays them to the form submission. Looking at `tracking.js:31-50` the dataLayer push expects `clickIds.gclid` etc to be passed in.

**VERIFY** the chain end-to-end:
1. `?gclid=XYZ` lands user on `/get-estimate`.
2. clickIds.js stores in cookie / localStorage.
3. ContactForm reads on submit.
4. dataLayer push contains gclid.
5. GTM forwards to Google Ads conversion tag.
6. Enhanced Conversions hashes firstName/lastName/email/phone/zip client-side.
7. Conversion is uploaded with Enhanced Conversions match data + gclid.

If any link breaks, ROAS reporting in Google Ads will be undercounted and Smart Bidding loses match quality.

## 5. SXO scoring per cluster

Score = subjective 0–5 on **paid-search experience optimization** (intent match + speed-to-form + trust above-the-fold). Verify with field data and post-click analytics.

| Cluster | Best LP | SXO score | Top lift |
|---|---|---|---|
| Custom decks | `/get-estimate` | 4.5/5 | Add sticky mobile CTA |
| Composite decks | `/composite-decks` | 3.5/5 | Move phone CTA above the fold; resolve repair-policy contradiction |
| Trex decks | `/trex-decks` | 3.0/5 | Add pricing table; phone above the fold; deeper content |
| TimberTech decks | (none) | 1.0/5 | Build the page |
| Screened porches | `/services/porches/screened-porch` | 4.0/5 | Phone above the fold |
| Patios | `/services/patios` | 4.0/5 | Phone above the fold |
| Pergolas | `/services/gazebo-pergola` | 3.0/5 | Add schema; phone above the fold |
| Deck repair | `/deck-repair` | 4.0/5 | Resolve policy contradiction |
| Deck replacement | `/services/deck-replacement` | 3.0/5 | Deepen content; add pricing table |
| Outdoor living | (none) | 1.0/5 | Build the hub |

## 6. Tracking-layer findings (re-stated for the Day 0 gate)

For the [[Day 0 Tracking and Privacy Gate - Google Ads]]:

- ✅ Dedicated `/thank-you` page, noindex, success-only.
- ✅ `lead_confirmed` event is the authoritative conversion (not `form_submit`).
- ✅ Anti-replay via sessionStorage `lead_fired_${eventId}` (`src/lib/tracking.js:91-99`).
- ✅ Click-ID forwarding wired into dataLayer.
- ✅ Phone clicks fire `phone_click` (marked as vanity in code comments, correct posture).
- ⚠️ **VERIFY in GTM**: `lead_confirmed` is mapped to a Google Ads Lead conversion action, Enhanced Conversions enabled, event_id used as transaction_id for dedup.
- ⚠️ **VERIFY in Google Ads**: call-asset forwarding numbers per campaign for phone conversions.
- ⚠️ **VERIFY**: Enhanced Conversions user-data field mapping (email, phone, firstName, lastName, zip) is wired in the GTM conversion tag.

These last 3 cannot be verified from the repo — they require:
- Tag Assistant inspection on a live form submission
- Google Ads → Tools → Conversions screen for diagnostics
- The `gads_conversions_*.csv` export from the [[Google Ads Export Checklist]]
