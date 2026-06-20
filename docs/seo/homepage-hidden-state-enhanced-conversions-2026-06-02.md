# Homepage Hidden State Enhanced Conversions - 2026-06-02

## Scope

Improved homepage lead user-data context without adding user-facing friction and without changing Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings.

## Components Updated

- `ContactHome`
- `useLeadSubmit`

## Changes

- Added hidden homepage form input:
  - `state=VA`
- Updated the lead-submit comment to reflect that homepage now supplies city plus hidden state.

## Measurement Notes

- `useLeadSubmit` already reads `state`.
- `trackFormSubmit` already forwards `state` into the `form_submit` dataLayer event.
- This improves Enhanced Conversions context for homepage leads while keeping the form visually unchanged.
- It does not prove qualified-call attribution, booked-job outcomes, or Google Ads offline conversion quality.

## Verification

- Targeted source scan confirmed:
  - hidden `state=VA`
  - updated `hidden state=VA` tracking comment
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_96fhPmNdVDV5FGdqv2Yc6MEx711L`
- Live homepage check confirmed:
  - `name="state" value="VA"`
  - `Project City`
  - `Material Interest`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 466: Identified homepage state context gap for Enhanced Conversions.
- Task 467: Added hidden `state=VA` to homepage lead form.
- Task 468: Updated the tracking comment to match the new homepage data.
- Task 469: Validated schema, lint, and production build.
- Task 470: Deployed to production, verified live homepage HTML, daily SEO, and IndexNow.
