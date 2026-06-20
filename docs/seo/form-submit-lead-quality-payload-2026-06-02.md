# Form Submit Lead Quality Payload - 2026-06-02

## Scope

Extended website lead-tracking context without changing Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings.

## Components Updated

- `useLeadSubmit`
- `tracking`

## Changes

- Read lead-quality fields from submitted forms:
  - `budgetRange`
  - `materialInterest`
  - `hoa`
- Forwarded those values to `trackFormSubmit`.
- Added lead-quality fields to the `form_submit` dataLayer event:
  - `budget_range`
  - `material_interest`
  - `hoa_permit_status`

## Measurement Notes

- The fields were already collected by the full contact form and now also partially by the homepage form.
- The values already flow into lead email/routing where available.
- This batch improves local measurement context and future GTM/GA4 segmentation readiness.
- It does not prove qualified-call attribution, booked-job outcomes, or Google Ads offline conversion quality.

## Verification

- Targeted source scan confirmed:
  - `budgetRange`
  - `materialInterest`
  - `hoa`
  - `budget_range`
  - `material_interest`
  - `hoa_permit_status`
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_Ew4kf5ZTpHFAwP66ExSsXqNJ3Q8S`
- Live homepage check confirmed:
  - `written estimate path`
  - `Project City`
  - `Approximate Budget Range`
  - `HOA or Permit Status`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 454: Audited lead-quality fields collected by homepage and full contact forms.
- Task 455: Confirmed the current tracking gap: form fields existed but were not included in the `form_submit` event.
- Task 456: Added budget, material, and HOA/permit fields to `useLeadSubmit`.
- Task 457: Added `budget_range`, `material_interest`, and `hoa_permit_status` to the dataLayer payload.
- Task 458: Validated schema, lint, and production build.
- Task 459: Deployed to production, verified live homepage HTML, daily SEO, and IndexNow.
