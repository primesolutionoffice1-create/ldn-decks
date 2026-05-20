# IMPLEMENTATION-ROADMAP — ldndecks.com

**Date:** 2026-05-12  **Base:** main @ d26e458  **Branch:** audit/access-readiness-2026-05-12

---

## Phase 0 — Access confirmation only (no code, no config changes)

Goal: convert all ❓ Unknown items in ACCESS-MATRIX.md into Verified or Missing within one working day.

| Surface | Action | Owner | Status |
|---|---|---|---|
| GSC | Add domain property; verify via DNS TXT; grant operator Restricted access | site owner | pending |
| GA4 | Confirm property G-B52LCDZ6WS roles; grant Editor; verify Conversions toggles | site owner | pending |
| GTM | Grant Edit+Publish on container GTM-N87MG6QS; inventory tags | site owner | pending |
| Google Ads | Grant Standard access; review conversion actions, Enhanced Conversions toggle | site owner | pending |
| Vercel | Add operator as Member; share env-var read access | site owner | pending |
| DNS | Identify registrar + provider; grant operator access | site owner | pending |
| GBP | Claim or transfer ownership; verify business hours/services | site owner | pending |
| GitHub | Operator already has owner access | — | ✅ verified |

See MISSING-ACCESS-ACTION-PLAN.md §1 for step-by-step instructions per surface.

**Gate to Phase 1:** at minimum Vercel + GitHub access must be confirmed (the rest can flow in parallel).

---

## Phase 1 — ALREADY COMPLETED ✅

This phase reflects work that is already shipped in main @ d26e458. Recorded here for governance clarity.

### 1.1 Tracking foundation (shipped)

- **Click-ID persistence** — `src/lib/clickIds.js` captures `gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid` from URL into 90-day cookies + sessionStorage.
- **event_id dedupe architecture** — UUID generated per form submit; threaded through client → `sendContactEmail` → `metaCapi.sendMetaLeadEvent`; same id shared with GA4 `generate_lead` and the CAPI server event.
- **lead_confirmed standardization** — single authoritative event fired from `/thank-you` (post-success route), not from pre-navigation submit. Pushed via `trackLeadConfirmed` in `src/lib/tracking.js`.
- **GTM foundation** — container `GTM-N87MG6QS` injected in root layout with noscript fallback. Container holds `dedupe_gclid` + `ads_pageview` keys.
- **Consent Mode sequencing** — denied defaults for EEA/UK/CH region list with `wait_for_update: 500`, then granted post-load. Compliant with Consent Mode v2 requirements.
- **CallLink sweep** — `trackPhoneClick` exists in tracking.js and is invoked by ContactForm tel links.
- **Thank-you architecture** — dedicated `/thank-you` route, noindex meta, embeds `ThankYouTracking` which fires `lead_confirmed` exactly when conversion is server-confirmed.
- **Meta CAPI scaffolding** — `src/server/metaCapi.js` posts hashed PII + fbp/fbc + event_id to graph.facebook.com; env-gated graceful no-op when credentials absent.
- **Anti-replay groundwork** — event_id is per-submit (random UUID) and shared with CAPI; server-side dedupe across Pixel/CAPI works correctly.
- **Attribution docs + QA docs** — five files in `docs/ads-tracking/` (TRACKING-CHANGELOG, DEPLOY-CHECKLIST, ROLLBACK-PLAN, ENV-SETUP, QA-TEST-PLAN).
- **Middleware canonical redirects** — host + https consolidation in `src/middleware.js`.
- **GA4 install** — measurement ID G-B52LCDZ6WS loaded via GTM.

### 1.2 SEO foundation (shipped)

- Schema (GeneralContractor / WebPage / FAQPage) with NAP + 5.0★×41 aggregateRating.
- robots.txt with crawler-specific rules + tracking-param disallows.
- sitemap.xml live.
- Ahrefs + Google site-verification meta tags.
- Canonical 301 redirects via next.config.mjs (29 KB of rules) + middleware host/https.
- Service-area landing pages (e.g., `/near-you/loudoun-county`).
- LocalBusiness schema augmentation across service pages (committed by primesolutionoffice1-create May 6).
- Sitemap cleanup removing non-canonical + 308 redirects.

---

## Phase 2 — Revenue Feedback Infrastructure (next priority)

Goal: close the loop between paid clicks and booked revenue so Smart Bidding has real signal.

### 2.1 CRM ingestion
- Pick a system of record (Google Sheets via service account is the lowest-friction; Airtable is next; HubSpot free tier is the heaviest but most durable).
- Modify `src/server/sendEmail.js` to additionally append a structured row containing all FormData fields + `event_id` + click IDs + timestamp + landing URL + UTM params.
- Schema for the lead row: `event_id, timestamp, first_name, last_name, email_hash, phone_hash, address, city, state, zip, timeline, message, gclid, gbraid, wbraid, fbclid, msclkid, ttclid, utm_source, utm_medium, utm_campaign, utm_content, utm_term, landing_url, referrer, status` (initial `status = 'new'`).
- Default visibility: only operator + booking ops; do NOT share publicly.

### 2.2 Booked-job outcome capture
- Add a private internal `/admin/leads` page (auth-gated) that lists rows and allows status transitions: new → contacted → quoted → booked → completed / lost.
- Each transition writes a timestamp + signed-deal value (when booked) into the row.
- This is the data source for offline conversions.

### 2.3 Offline conversion uploads
- Weekly Google Ads CSV upload (or BigQuery + scheduled query → automatic upload).
- Row format: `Google Click ID, Conversion Name, Conversion Time, Conversion Value, Conversion Currency`.
- Conversion Name = `Booked job` (matching the conversion action created in Phase 0).
- Conversion Value = signed-deal value (high-ticket decks $15k–$80k+).

### 2.4 Smart Bidding enablement thresholds
- Hard gate: ≥30 verified offline conversions in trailing 30 days.
- Soft gate: ≥1 week of stable signal (no honeypot bot floods, no double-counted lead_confirmed).
- Begin with Maximize Conversion Value, NOT Target ROAS, until value distribution is understood.

### 2.5 Revenue-quality scoring
- Add lightweight scoring inside the CRM row: `{0–100}` based on timeline urgency + project size + zip-code-class.
- Feed score back to Ads as a custom Conversion Value modifier (Enhanced Conversions for Leads supports this via gclid+value upload).

### 2.6 High-ticket-job optimization
- Once value upload is reliable, segment Ads campaigns by job-size: small (<$15k repair/maintenance), medium ($15k–$40k decks), large ($40k+ composite + railings + add-ons).
- Separate bid strategies per segment.

---

## Phase 3 — SEO ops readiness

### 3.1 Verify GSC domain property
- After Phase 0 GSC access: confirm domain property aggregates all four variants and that sitemap is Discovered → Indexed.

### 3.2 Verify sitemap coverage
- Run a coverage report after 7 days: every canonical URL in the site map appears in "Indexed" or "Crawled - currently not indexed" with a clear reason.
- Resolve any "Discovered - currently not indexed" backlog.

### 3.3 Confirm GBP ownership
- Phase 0 §1.7 plus: post first 10 photos, fill services list, enable messaging, seed Q&A with 5 common questions.

### 3.4 Complete trust-profile access
- Yelp claim, Trustpilot business profile, Houzz pro account verification, Nextdoor business claim, YouTube channel (or verify existing).
- Wire Trustpilot review-collection link into `/thank-you` (after booked-job CSV is live, prompt only booked customers).

### 3.5 Centralize source-resolution asset library
- Pick one location (Drive / Notion / S3) and migrate all `public/showcase/` + `public/images/` sources.
- Capture: project address (private), Trex/TimberTech product SKUs used, before/after pairs, drone shots, team headshots, BBB+Trex+TimberTech+Houzz badges in vector format.
- Establish naming convention: `{project-id}_{view}_{resolution}.{ext}`.

---

## Phase 4 — Governance

### 4.1 Account owners
- Single owner per surface, named in a Notion/Sheets registry: GSC, GA4, GTM, Ads, Vercel, GitHub, DNS, GBP, Yelp, Trustpilot, Houzz, Trex/TimberTech, social (FB/IG/TT/YT/Nextdoor).

### 4.2 Backup owners
- Second person per surface with break-glass access (separate password manager, 2FA enrolled).

### 4.3 Rollback path
- Code: Vercel instant-rollback to previous deployment via UI; documented in `docs/ads-tracking/ROLLBACK-PLAN.md` for tracking changes.
- GTM: workspace versioning + "Restore version" — document the exact steps.
- Ads: keep a "safe configuration" workbook for each campaign in case Smart Bidding misbehaves.

### 4.4 Deploy approval flow
- Production deploys gated on GitHub PR merge to `main`.
- Vercel deploy notifications routed to operator + backup + site owner.

### 4.5 GTM publish approval
- Workspace-edit allowed for operator.
- Publish requires second-pair-of-eyes approval, documented as a 2-line checklist in the container description.

---

## Phase ordering

```
Phase 0 (access)  ──▶  Phase 2 (revenue feedback)  ──▶  Smart Bidding enable
        │
        ├──▶  Phase 3 (SEO ops)
        │
        └──▶  Phase 4 (governance)
```

Phase 1 already complete. Phases 2/3/4 parallelizable once Phase 0 unblocks them.
