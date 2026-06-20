# Generate Lead Form Location Alignment - 2026-06-02

## Scope

Aligned `generate_lead` context with `form_submit` context. No Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Component Updated

- `tracking`

## Changes

- Added `form_location` to the `generate_lead` dataLayer event.
- Kept `form_location` already present on the `form_submit` event.

## Measurement Notes

- GA4 `generate_lead` reporting can now segment by form placement.
- `form_submit` remains the richer event for Enhanced Conversions and lead-quality parameters.
- This does not prove qualified-call attribution or downstream lead quality.

## Verification

- Targeted source check confirmed `form_location` is present on both:
  - `generate_lead`
  - `form_submit`
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_49HufZ5KWmrCvosXQogNByHDBfr7`
- Live homepage check confirmed:
  - `data-form-location="homepage_contact_form"`
  - `data-cta-location="homepage_contact_info"`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 498: Identified `generate_lead`/`form_submit` form-location mismatch.
- Task 499: Added `form_location` to `generate_lead`.
- Task 500: Validated schema, lint, and production build.
- Task 501: Deployed to production, verified live homepage HTML, daily SEO, and IndexNow.
