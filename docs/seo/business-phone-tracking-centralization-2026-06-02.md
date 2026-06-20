# Business Phone Tracking Centralization - 2026-06-02

## Scope

Centralized the business phone source used by phone tracking and phone links. No Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Components Updated

- `business`
- `CallLink`
- `tracking`
- `TRACKING-AUDIT`

## Changes

- Added `BUSINESS_PHONE_DISPLAY` to the shared business identity module.
- Updated `CallLink` to use `BUSINESS.telephone` and `BUSINESS_PHONE_DISPLAY`.
- Updated `phone_click` tracking payload to use `BUSINESS.telephone`.
- Marked the old hardcoded-phone audit item as resolved.

## Verification

- Targeted source scan confirmed:
  - `phone_number: BUSINESS.telephone`
  - `BUSINESS_PHONE = BUSINESS.telephone`
  - `BUSINESS_PHONE_DISPLAY`
  - `RESOLVED LOW-2`
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_43YChjr6gTo6QEhWHp89EywUiN6q`
- Live homepage check confirmed:
  - `tel:+15716557207`
  - `(571) 655-7207`
  - `data-cta-location="header_top_bar"`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 505: Identified stale LOW-2 hardcoded-phone audit item.
- Task 506: Added shared phone display constant to business identity module.
- Task 507: Updated CallLink to use business identity phone constants.
- Task 508: Updated phone_click to use `BUSINESS.telephone`.
- Task 509: Marked LOW-2 as resolved in the tracking audit.
- Task 510: Validated schema, lint, and production build.
- Task 511: Deployed to production, verified live homepage HTML, daily SEO, and IndexNow.
