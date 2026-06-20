# Reputation Sprint 1 - 2026-06-01

Domain: `https://ldndecks.com`

## Current State

The new site rollout has strong topical coverage:

- 36 city / deck-builder / specialty-builder pages
- 20 cost, payment, calculator, and estimator pages
- 11 HOA pages
- 5 permit / code pages
- 8 trust / reputation pages
- multiple tools and education assets

DataForSEO live is temporarily blocked because the current API Login/API Password return `40100`. The SEO dashboard and API routes have been restored, but live DataForSEO refreshes require valid credentials from `https://app.dataforseo.com/api-access`.

## Sprint Goal

Turn existing content into a stronger entity/reputation system:

- make Google and AI systems understand LDN Decks as the Northern Virginia deck authority
- route authority from trust assets into commercial pages
- make cost, HOA, permit, and tools pages link back to money pages
- create outreach assets that local partners can realistically link to

## Priority Page Sets

### Money Pages

- `/deck-builder-northern-virginia`
- `/deck-builders-loudoun`
- `/deck-builder-ashburn-va`
- `/deck-builder-leesburg-va`
- `/deck-builder-reston-va`
- `/deck-builder-fairfax-va`
- `/composite-deck-builder-loudoun`
- `/screened-porch-builder-northern-virginia`
- `/covered-deck-builder-northern-virginia`
- `/trex-decks`

### Authority Assets

- `/deck-cost-calculator`
- `/deck-payment-estimator`
- `/composite-deck-cost-northern-virginia`
- `/deck-permit-loudoun-county-virginia`
- `/deck-permit-fairfax-county-virginia`
- `/loudoun-county-hoa-deck-rules`
- `/northern-virginia-deck-building-guide`
- `/bbb-accredited-deck-builder-virginia`
- `/reviews`
- `/houzz-deck-projects`

### Outreach Assets

- `/deck-cost-calculator`
- `/deck-payment-estimator`
- `/deck-permit-hoa-cost-loudoun-county`
- `/lead-magnets/nova-deck-permit-checklist-2026`
- `/tools/deck-cost-estimator-northern-virginia`
- `/tools/deck-footing-depth-calculator-virginia`
- `/tools/deck-stair-calculator`

## Internal Linking Plan

### Cost Cluster

Every cost/payment page should link to:

- `/deck-cost-calculator`
- `/deck-payment-estimator`
- `/composite-deck-cost-northern-virginia`
- `/deck-builder-northern-virginia`
- nearest relevant city page, when local context is present

### HOA Cluster

Every HOA page should link to:

- `/loudoun-county-hoa-deck-rules`
- `/deck-permit-hoa-cost-loudoun-county`
- `/deck-builder-ashburn-va` or matching community/city page
- `/get-estimate`

### Permit / Code Cluster

Every permit/code page should link to:

- matching county page
- `/deck-footing-code-northern-virginia`
- `/tools/deck-footing-depth-calculator-virginia`
- `/deck-builder-northern-virginia`

### Trust Cluster

Trust pages should link directly into commercial conversion pages:

- `/bbb-accredited-deck-builder-virginia` -> `/deck-builder-northern-virginia`, `/deck-builders-loudoun`, `/get-estimate`
- `/reviews` -> `/deck-builder-northern-virginia`, `/showcase`, `/get-estimate`
- `/houzz-deck-projects` -> `/showcase`, `/composite-decks`, `/get-estimate`
- `/press` -> `/about`, `/bbb-accredited-deck-builder-virginia`, `/referral-partners`

## 7-Day Execution Plan

1. Add or verify cross-links between cost pages and the main cost calculator.
2. Add or verify links from all HOA pages to the Loudoun HOA hub and matching city pages.
3. Add or verify permit pages link to footing/code tools and county pages.
4. Add trust-page links from BBB/reviews/Houzz/press into money pages.
5. Use `/deck-cost-calculator` and `/lead-magnets/nova-deck-permit-checklist-2026` as outreach assets for realtors, HOAs, home inspectors, and local suppliers.
6. Prepare 20 outreach targets: chambers, suppliers, realtors, inspectors, HOA resource pages, local blogs.
7. Re-run DataForSEO once valid API credentials are restored and convert live competitor/backlink results into prospect rows.

## DataForSEO Blocker

Current API status:

- `40100`
- message: not authorized; check API Access credentials

Required action:

- sign in to DataForSEO
- open `https://app.dataforseo.com/api-access`
- copy current API Login and API Password
- update `.env.local` and Vercel Production
- redeploy and re-run live refreshes

## Success Metrics

- zero active DataForSEO API errors from LDN code
- all key authority assets linked from at least 3 relevant cluster pages
- all top money pages receive links from cost, HOA, permit, and trust clusters
- 20 outreach prospects prepared
- 5-10 real local authority links pursued first
