# Form Location Payload - 2026-06-02

## Scope

Added form-location context for lead submissions without changing Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings.

## Components Updated

- `ContactHome`
- `ContactForm`
- `useLeadSubmit`
- `tracking`

## Changes

- Added `data-form-location="homepage_contact_form"` to the homepage form.
- Added dynamic `data-form-location` to the full contact form:
  - `contact_form`
  - `embedded_contact_form`
- Read `formLocation` from the submitted form element.
- Added `form_location` to the `form_submit` dataLayer event.

## Measurement Notes

- `form_type` remains the broad category.
- `form_location` now separates homepage, full contact, and embedded form placements.
- This helps GA4/GTM segment lead quality by placement without changing the user experience.

## Verification

- Targeted source scan confirmed:
  - `formLocation`
  - `form_location`
  - `data-form-location`
  - `homepage_contact_form`
  - `embedded_contact_form`
  - `contact_form`
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_BiUjivZxg3qjuowGmm16js8x7g6d`
- Live homepage check confirmed:
  - `data-form-location="homepage_contact_form"`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 492: Identified missing form-placement context in `form_submit`.
- Task 493: Added `data-form-location` to homepage and full contact forms.
- Task 494: Read form location from submitted form DOM dataset.
- Task 495: Added `form_location` to dataLayer payload.
- Task 496: Validated schema, lint, and production build.
- Task 497: Deployed to production, verified live homepage HTML, daily SEO, and IndexNow.
