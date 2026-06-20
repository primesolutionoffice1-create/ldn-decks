# Phone Click Context Payload - 2026-06-02

## Scope

Improved local phone-click measurement context without changing Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings.

## Component Updated

- `tracking`

## Changes

- Updated `trackPhoneClick(event)` to read click context from the clicked phone link.
- Added `link_text` to the `phone_click` dataLayer event.
- Added `cta_location` to the `phone_click` dataLayer event.
- Kept existing click-ID, UTM, page path, and page location fields.

## Measurement Notes

- `phone_click` remains an engagement signal, not proof of a completed or qualified phone call.
- The added context helps separate header, sticky, form-side, and page-body phone CTA clicks in GA4/GTM reporting.
- Google Ads scaling still requires qualified-call attribution proof from call assets, website call forwarding, or another call attribution platform.

## Verification

- Targeted source scan confirmed:
  - `trackPhoneClick(event)`
  - `link_text`
  - `cta_location`
  - `dataset?.ctaLocation`
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_eamaKtYBgz3kutPeS3e82wtDyLPL`
- Live homepage check confirmed:
  - `tel:+15716557207`
  - `Call Loudoun Decks`
  - `(571) 655-7207`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 481: Audited current `phone_click` payload fields.
- Task 482: Added clicked-link text capture.
- Task 483: Added CTA-location capture from `data-cta-location` or aria-label.
- Task 484: Validated schema, lint, and production build.
- Task 485: Deployed to production, verified live phone CTA HTML, daily SEO, and IndexNow.
