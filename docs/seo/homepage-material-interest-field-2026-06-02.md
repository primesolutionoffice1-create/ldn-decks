# Homepage Material Interest Field - 2026-06-02

## Scope

Improved homepage lead qualification without changing Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings.

## Component Updated

- `ContactHome`

## Changes

- Added a homepage `materialInterest` select field.
- Options match the full contact form:
  - Trex
  - TimberTech/AZEK
  - Composite
  - Pressure-Treated Wood
  - Not Sure
- Reorganized the lower homepage form fields into clean two-column rows:
  - City + Approximate Budget
  - Material Interest + HOA / Permit Status

## Measurement Notes

- `useLeadSubmit` now reads `materialInterest`.
- `trackFormSubmit` now forwards `material_interest` to the `form_submit` dataLayer event.
- `sendContactEmail` already reads `materialInterest`, so homepage leads now carry material intent into routing and follow-up.

## Verification

- Targeted source scan confirmed:
  - `materialInterest`
  - `Material Interest`
  - `TimberTech/AZEK`
  - `HOA / Permit Status`
  - `Approximate Budget`
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_3E12hmZTcsqWmYEnFHQn4QznCB3W`
- Live homepage check confirmed:
  - `Material Interest`
  - `TimberTech/AZEK`
  - `Approximate Budget Range`
  - `HOA or Permit Status`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 460: Identified homepage material-intent gap after adding dataLayer support.
- Task 461: Added homepage `materialInterest` field.
- Task 462: Matched homepage material choices to the full contact form.
- Task 463: Preserved responsive two-column form layout.
- Task 464: Validated schema, lint, and production build.
- Task 465: Deployed to production, verified live homepage HTML, daily SEO, and IndexNow.
