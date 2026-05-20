# SEO-OPS-READINESS-SCORE — ldndecks.com

**Date:** 2026-05-12  **Base:** main @ d26e458  **Branch:** audit/access-readiness-2026-05-12

This scoring supersedes the prior audit's scores, which were biased downward by homepage-only public-surface inspection. Scores below are reconciled with source on main HEAD d26e458.

---

## Composite scores (revised)

| Dimension | Score | vs prior | Movement reason |
|---|---|---|---|
| Overall access readiness | **58 / 100** | +20 | Tracking foundation re-classified as Verified. Unknowns dominate residual deficit (UI access not yet granted). |
| SEO execution readiness | **78 / 100** | +16 | Schema, sitemap, robots, redirects, canonical middleware, HSTS, verification meta all verified. GBP claim unknown. |
| Ads tracking readiness (code) | **75 / 100** | +53 | Click IDs, event_id, lead_confirmed, CAPI, Enhanced-Conversions field coverage all present. ContactHome parity is the main code drag. |
| Ads tracking readiness (UI verification) | **30 / 100** | unchanged | UI access to GA4, GTM, Ads not yet granted. |
| Deployment readiness | **70 / 100** | +35 | Vercel + Next.js prerender + middleware + immutable cache headers verified. Env vars + team roles unknown. |
| Attribution readiness | **72 / 100** | new | CAPI + event_id + click IDs + lead_confirmed end-to-end on ContactForm path. ContactHome and CRM gap pull this below 90. |
| Revenue feedback readiness | **15 / 100** | new | SMTP-inbox-only lead store; no booked/won capture; no offline import path. |
| Governance readiness | **40 / 100** | new | Owner identified; backups undocumented; branch protection unknown; rollback docs exist for ads-tracking. |

---

## Scoring rubric

Each dimension scored 0–100 across four factors:
- **Foundation** (25 pts): is the underlying system installed?
- **Correctness** (25 pts): does it work as designed in evidence?
- **Coverage** (25 pts): does it apply to every surface, not just one?
- **Operational durability** (25 pts): governance, monitoring, rollback, runbooks.

---

## Per-dimension breakdown

### Overall access readiness — 58 / 100
- Foundation: 22 (most systems exist, BBB/social/maps confirmed; GBP unknown).
- Correctness: 18 (verified items work; UI configs unverified).
- Coverage: 10 (Yelp/Trustpilot/Trex/TimberTech/Nextdoor/YouTube unclaimed/unknown).
- Operational durability: 8 (backups, named owners, 2FA unconfirmed).

### SEO execution readiness — 78 / 100
- Foundation: 25 (schema, sitemap, robots, redirects, middleware, headers all present).
- Correctness: 22 (live site reflects source; aggregateRating 5.0×41 verified).
- Coverage: 18 (GBP claim status unknown; service-area pages exist but city-level coverage not audited here).
- Operational durability: 13 (rollback exists for ads-tracking; SEO branch hygiene mostly good — `feat/seo-audit-phase3-4` cleanly merged via PR #3).

### Ads tracking readiness — code 75 / UI 30
- **Code 75:** Foundation 25, Correctness 22, Coverage 18 (ContactHome parity gap), Durability 10 (deploy/rollback docs exist; honeypot/rate-limit/dedupe missing).
- **UI 30:** Foundation 10 (account existence inferred), Correctness 5 (untested), Coverage 5, Durability 10 (rollback docs exist).

### Deployment readiness — 70 / 100
- Foundation: 22 (Vercel + Next.js + middleware).
- Correctness: 20 (200 responses, edge caching, security headers).
- Coverage: 15 (env vars unknown; preview protection unknown).
- Operational durability: 13 (instant rollback via Vercel default; deploy-approval flow undocumented).

### Attribution readiness — 72 / 100
- Foundation: 24 (event_id + CAPI + click IDs + lead_confirmed).
- Correctness: 20 (ContactForm path end-to-end correct).
- Coverage: 16 (ContactHome parity gap; phone-call completion not measured).
- Operational durability: 12 (refresh-dedupe missing; CAPI env unverified).

### Revenue feedback readiness — 15 / 100
- Foundation: 5 (no CRM, no Sheet, no Airtable hop).
- Correctness: 5 (email-only path works but doesn't preserve gclid structurally).
- Coverage: 3 (booked/won outcomes not captured anywhere).
- Operational durability: 2 (no monitoring of bounce/spam-flagged lead emails).

### Governance readiness — 40 / 100
- Foundation: 12 (repo, branches, PR hygiene present).
- Correctness: 12 (PRs were used and merged correctly).
- Coverage: 8 (branch protection, deploy-approval, GTM-publish-approval all undocumented).
- Operational durability: 8 (ROLLBACK-PLAN.md exists for ads-tracking; nothing equivalent for SEO branches).

---

## Highest-risk blockers (top 5 real)

1. **ContactHome parity gap** — homepage leads partially untracked. Highest impact in code. ~30 min fix.
2. **CRM / system-of-record durability** — no durable gclid. Blocks offline conversions. 1–2 days work depending on platform choice.
3. **Offline conversion upload loop** — depends on (2). Required before Smart Bidding is safe.
4. **Enhanced Conversions verification in Ads UI** — unblocks bid-quality scoring. ~15 min once UI access granted.
5. **Client-side lead_confirmed dedupe + honeypot/rate-limit** — signal-quality hardening. ~1 hour total.

---

## Fastest fixes under 30 minutes

- Add `trackFormSubmit` + `getClickIds` to ContactHome.jsx.
- Add ttclid to CLICK_ID_KEYS.
- Add sessionStorage `hasFired` guard to ThankYouTracking.
- Add hidden honeypot field to both forms; reject in sendContactEmail.

## Highest-impact fixes under 1 day

- Stand up a durable lead store (Google Sheets via service-account append, or Airtable, or HubSpot free).
- Wire booked/won outcome capture (manual form for operator + Sheets row update).
- Configure Google Ads Offline Conversion CSV import (weekly schedule).
- Claim Google Business Profile and post first 10 photos + service list.

---

## Score trajectory (expected)

If the four fastest fixes ship and §1.1–§1.7 in MISSING-ACCESS-ACTION-PLAN.md complete:

| Dimension | Today | T+1 week |
|---|---|---|
| Overall access | 58 | 82 |
| SEO execution | 78 | 88 |
| Ads tracking (code) | 75 | 92 |
| Ads tracking (UI) | 30 | 75 |
| Deployment | 70 | 85 |
| Attribution | 72 | 90 |
| Revenue feedback | 15 | 55 |
| Governance | 40 | 70 |
