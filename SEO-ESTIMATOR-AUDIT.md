# SEO Estimator Audit

Status: draft technical SEO and CRO audit

## Executive Summary

The `/deck-payment-estimator` page is positioned to become a high-authority budgeting asset for Northern Virginia homeowners comparing composite, Trex, TimberTech, AZEK, covered deck, and financing options. Phase 2 strengthens the page with visible FAQ content, matching FAQPage schema, GA4-compatible estimator events, improved conversion prompts, and selective contextual internal links from cost/material/city pages.

## Findings

- The route exists at `/deck-payment-estimator`.
- Metadata already uses a canonical path through `buildMetadata`.
- The page already has Product/SoftwareApplication-style JSON-LD through `calculatorSchema`; Phase 2 adds a separate FAQPage JSON-LD block using the same visible FAQ content.
- Internal linking existed from some related pages; Phase 2 expands links only where cost, financing, or material comparison context exists.
- The calculator is client-side but rendered inside a server page, so schema and FAQ content remain server-rendered.

## Why Changes Matter

- FAQ schema helps Google and AI answer engines understand the estimator as a financing and budgeting resource, not just a thin tool page.
- Visible FAQs reduce friction for homeowners who are unsure about financing, approval, permits, timeline, and long-term material value.
- Event tracking creates a measurement layer for estimator engagement without touching GA4, GTM, Ads, or conversion settings live.
- Contextual internal links consolidate authority from cost and material pages without sitewide link spam.
- Conversion improvements give homeowners a clearer next step after they understand payment range.

## Technical SEO Validation Checklist

| Area | Status | Notes |
| --- | --- | --- |
| Canonical | Pass | Local production HTML renders `https://ldndecks.com/deck-payment-estimator`. |
| Sitemap inclusion | Pass | Local sitemap includes `https://ldndecks.com/deck-payment-estimator`. |
| Schema validation | Pass | Server-rendered JSON-LD includes `GeneralContractor`, `WebSite`, `BreadcrumbList`, and `FAQPage` with 8 visible FAQ questions. |
| Mobile rendering | Pass | Browser check at 390x844 and 1440x1100 found no horizontal overflow. |
| Metadata quality | Pass | Title, description, index/follow robots, canonical, OpenGraph, and Twitter tags render in production HTML. |
| OpenGraph/Twitter | Pass | `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card`, and Twitter title/description/image render. |
| Core Web Vitals risk | Low | Added text, links, and JSON-LD only; no new heavy media. |
| Hydration mismatch risk | Low | Tracking is client-only and guards `window`; FAQ/schema render server-side. |
| Accessibility | Medium-low | Native `<details>/<summary>` FAQ remains keyboard accessible; CTA links are real anchors. |

## Conversion Optimization Changes

- Added above-the-fold estimator and written-estimate CTAs.
- Added trust signals near the calculator:
  - 5.0 Google rating with 49+ reviews
  - A+ BBB Accredited Business
  - Written, itemized estimates
  - Soft-pull financing path available
- Added a planning callout that explains how homeowners should use monthly payment as a filter, not as a final quote.
- Added tracked CTA clicks for hero, planning, final contact, and Enhancify fallback apply actions.

## A/B Tests To Consider Later

- Hero CTA order: estimator-first vs written-estimate-first.
- Trust signal placement: directly under hero vs directly under calculator.
- Financing language: "estimate monthly payment" vs "plan your project budget."
- Final CTA: contact form first vs phone-first for mobile visitors.
- Calculator default amount: `$25,000` vs `$35,000` for high-ticket composite leads.

## What Should Not Change Yet

- Do not remove the existing calculator schema until Search Console and rich result behavior is reviewed.
- Do not change routing structure or canonical URL.
- Do not make GA4/GTM conversion changes until the new events have been observed.
- Do not add estimator links sitewide.
- Do not promise financing approval, exact APR, or exact final monthly payment.

## Risk Register

| Risk | Level | Mitigation |
| --- | --- | --- |
| Over-attribution from CTA click events | Medium | Review event volume before marking conversion. |
| Slider event noise | Low-medium | `estimator_started` and `estimator_completed` are deduped; term selection is deduped per term. |
| FAQ claim risk | Low | Answers use estimates and homeowner-focused language. |
| Internal link overuse | Low | Links limited to cost, financing, material, and one city page. |

## Safe Execution Plan

1. Verify route and schema locally. Done.
2. Run `npm run build`. Passed.
3. Run `npm run lint`. Passed.
4. Run `npm run seo:daily-check`. Passed; IndexNow accepted 208 submitted URLs.
5. Check for duplicate route files. Passed; no `page 2.*` files found in `src/app`.
6. Commit in logical groups:
   - Estimator FAQ, CRO, and tracking.
   - Contextual internal link expansion.
   - Content/audit/tracking documentation.
7. Deploy only after approval.

## Browser Verification Notes

- Production local route: `http://localhost:3421/deck-payment-estimator`
- HTTP status: 200
- Mobile viewport: 390x844
- Desktop viewport: 1440x1100
- FAQ count: 8 visible FAQ accordions
- Horizontal overflow: 0px on mobile and desktop
- Tracking event check:
  - `estimator_started`: passed
  - `financing_option_selected`: passed
  - `estimator_completed`: passed
  - `estimator_cta_clicked`: passed
- Local-only console noise:
  - Vercel Analytics and Speed Insights scripts return 404 under `next start`; this is expected outside the Vercel runtime and is not caused by this change.

## Recommended Deploy Order

Deploy all Phase 2 commits together after local verification passes. The page changes, internal links, and docs are cohesive and low-risk, but the deploy should still be reviewed because it changes production page content and tracking event pushes.

## Rollback Notes

If the deploy causes any issue, revert the Phase 2 commits only. No routing, tracking configuration, Ads settings, GA4/GTM, GBP, or sitemap restructuring is part of this phase.

## Approval Gate

Recommended change:
Deploy the Phase 2 estimator authority package after verification and review.

Reason:
Turns the estimator into a stronger SEO, CRO, and analytics asset for high-ticket deck leads.

Expected impact:
More qualified budgeting sessions, stronger internal authority around deck cost/financing, and better GA4 visibility after tracking is configured.

Risk level:
Low-medium because production content and tracking dataLayer events change.

Rollback plan:
Revert only the Phase 2 commits and redeploy the previous production state.

Approval required: YES
