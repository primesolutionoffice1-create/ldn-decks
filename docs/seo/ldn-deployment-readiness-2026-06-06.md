# LDN Decks — Deployment Readiness Packet
**Date:** 2026-06-06 | **Hour:** 8-9
**Branch:** `codex/ldndecks-deep-seo-implementation`

---

## Deploy Status

| Check | Result |
|---|---|
| Build | GREEN — 811 pages (confirmed 2026-06-06) |
| Final local build after breadcrumb label | PASS — 811 pages generated |
| Lint | GREEN — 0 errors |
| Schema validation | PASS — 0 warnings |
| Robots/IndexNow | PASS — 6/6 |
| Internal links | PASS — 0 bad links |
| Breadcrumbs | LOW — 4 unknown segments (cosmetic, fallback handles) |
| CTA routing (6 primary) | FIXED — all route to /get-estimate |
| PromoModal CTA | FIXED — routes to /get-estimate |

**Deploy is ready for owner review.** The 6 primary CTAs and delayed PromoModal CTA now route through `/get-estimate`, so the conversion chain is locally intact. Production remains unchanged until owner approval.

---

## What's in This Deploy

### Committed to Branch (23+ commits ahead of main)

- H1 fixes for Centreville and Great Falls city pages
- `/near-you/[city]` → flat `/deck-builder-[city]-va` 301 redirects in `next.config.mjs`
- `business.js` update: reviewCount 47, BBB accreditation, Houzz profile (not award)
- `next.config.mjs` redirect cleanup: `/free-estimates → /get-estimate`, `/deck-repair` direction fix, `/ldn-decks-reviews-yelp` redirect removed (page now live)
- `src/lib/seo.js` expansion: 191 new lines of SEO helpers
- 296 staged files: service pages, local pages, schema, metadata updates

### Unstaged Local Changes (CTA Fixes — apply before commit/deploy)

These 7 files need to be staged and committed with the branch before deploy:

```
src/components/HeroCTA.jsx
src/components/Header.jsx
src/components/HowItWorksTriple.jsx
src/components/PromoModal.jsx
src/components/ServiceProcessHorizontal.jsx
src/components/ServicesHeader.jsx
src/components/StickyMobileCTA.jsx
```

---

## Pre-Deploy Checklist

```
[ ] Confirm with owner: approve deploy of codex/ldndecks-deep-seo-implementation → main
[ ] Stage the 7 CTA fix files (git add src/components/{HeroCTA,Header,HowItWorksTriple,PromoModal,ServiceProcessHorizontal,ServicesHeader,StickyMobileCTA}.jsx)
[ ] Run npm run lint — confirm 0 errors
[ ] Run npm run build — confirm 811+ pages, 0 errors
[ ] Commit with message: "fix: route estimate CTAs to /get-estimate"
[ ] Push branch: git push origin codex/ldndecks-deep-seo-implementation
[ ] Merge or PR to main (requires owner approval)
[ ] Vercel auto-deploys on push to main
[ ] Post-deploy: verify /get-estimate loads on production
[ ] Post-deploy: verify HeroCTA "Request Free Estimate" routes to /get-estimate (not modal) on production
[ ] Post-deploy: re-run npm run seo:verify-robots (with --submit to IndexNow if owner approves)
```

---

## Approval Gate

```text
Recommended change: Deploy branch codex/ldndecks-deep-seo-implementation to production (Vercel main)
Reason: 23+ commits of SEO and conversion improvements — H1 fixes, redirect cleanup, CTA routing fixes, metadata updates across 296+ pages
Expected impact: Enables server-confirmed GA4 conversion tracking; fixes H1s for Centreville/Great Falls; cleans redirect chain from /free-estimates; enables correct /near-you flat structure
Risk level: MEDIUM — large changeset; 811 pages; no structural changes to DB or auth
Rollback plan: Vercel supports instant rollback to previous deployment from dashboard
Approval required: YES
```

---

## Post-Deploy QA Checklist

```
[ ] https://ldndecks.com/ — H1 loads, HeroCTA "Request Free Estimate" navigates to /get-estimate
[ ] https://ldndecks.com/get-estimate — form renders, no 404
[ ] https://ldndecks.com/services — ServicesHeader CTA navigates to /get-estimate
[ ] https://ldndecks.com/near-you — HowItWorksTriple "Get Free Estimate Now" navigates to /get-estimate
[ ] https://ldndecks.com/services/deck-washing — ServiceProcessHorizontal CTA navigates to /get-estimate
[ ] Mobile: StickyMobileCTA "Quote" navigates to /get-estimate
[ ] Mobile: Header bar "Get A Free Estimate" navigates to /get-estimate
[ ] https://ldndecks.com/deck-builder-centreville-va — H1 updated (not "near you" phrasing)
[ ] https://ldndecks.com/deck-builder-great-falls-va — H1 updated
[ ] https://ldndecks.com/free-estimates — 301 redirects to /get-estimate
[ ] Contact drawer still opens from desktop nav (non-CTA test)
[ ] PromoModal — wait 10s on any page, verify "Get Free Estimate" navigates to /get-estimate (not contact drawer)
[ ] GA4 — fire a test form submission, verify conversion event in GA4 Realtime
```

---

## Blocked Items (Not in This Deploy)

| Item | Status |
|---|---|
| PromoModal CTA fix | Fixed locally; included in deploy readiness |
| Chamber URL text fix (production) | Awaiting explicit approval |
| CQ-01–CQ-10 lead quality evidence | Owner fills worksheet from Jobber |
| IndexNow submission | Awaiting approval (--submit flag) |
