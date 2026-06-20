# Homepage Form Lead Quality Fields - 2026-06-02

## Scope

Improved homepage form lead-quality signals without changing external tracking, Google Ads, GTM, GA4, budgets, bidding, or account settings.

## Components Updated

- `ContactHome`
- `useLeadSubmit`

## Changes

- Replaced homepage `exact quote` language with a written estimate path expectation.
- Added homepage form fields:
  - City
  - Approximate budget
  - HOA / permit status
- Expanded project-details placeholder to request useful scope notes: size, materials, photos/repairs, stairs, railings, and drainage.
- Updated tracking comment to reflect that ContactHome now collects city.

## Measurement Notes

- `sendContactEmail` already reads `city`, `budgetRange`, and `hoa`, so the new fields flow into lead email/routing without new server code.
- `useLeadSubmit` already reads `city` for tracking user-data context when available.
- This improves lead triage and owner follow-up quality, but does not prove Google Ads qualified-call attribution or real lead outcomes.

## Verification

- Targeted scan confirmed:
  - `written estimate path`
  - `Project City`
  - `Approximate Budget`
  - `HOA / Permit Status`
  - `photos/repairs`
  - no `exact quote` on live homepage HTML
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_CJv22Guprzp4b2vMMe7aoV4fHLNX`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because Google Ads qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 448: Inspected homepage and full contact form lead-quality fields.
- Task 449: Confirmed server action already reads city, budget range, and HOA/permit status.
- Task 450: Added homepage city, budget, and HOA/permit fields.
- Task 451: Reframed homepage consultation copy from exact quote to written estimate path.
- Task 452: Validated schema, lint, and build.
- Task 453: Deployed to production, verified live HTML, daily SEO, and IndexNow.
