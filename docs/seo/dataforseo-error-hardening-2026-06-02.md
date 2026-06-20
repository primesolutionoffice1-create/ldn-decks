# DataForSEO Error Hardening - 2026-06-02

## Scope

Hardened the local LDN SEO/DataForSEO dashboard against the error pattern shown in the DataForSEO API Errors screen:

- `Invalid Field: 'filters'.`
- `Invalid Field: 'location_code'.`

This work was local/site-side only. No DataForSEO account settings, budgets, tasks, Google Ads settings, GTM, GA4, conversions, or tracking configuration were modified.

## What Changed

- Added `errorMentionsInvalidField(error, field)` in `src/lib/dataforseo.js`.
- Updated `getDomainMetrics()` to retry `/dataforseo_labs/google/relevant_pages/live` without `location_code` if DataForSEO rejects that optional field.
- Updated `getCompetitorDomains()` to retry `/dataforseo_labs/google/competitors_domain/live` without `location_code` if DataForSEO rejects that optional field.
- Updated `getDomainWhoisOverview()` to retry `/domain_analytics/whois/overview/live` without `filters` if DataForSEO rejects that optional field.

## Documentation Check

Official DataForSEO docs were checked for:

- DataForSEO Labs Google Relevant Pages Live
- DataForSEO Labs Google Competitors Domain Live
- Domain Analytics Whois Overview Live

The docs list `location_code` and `filters` as supported optional fields in the relevant endpoints, but the live error log showed 40501 field rejection. The fallback keeps the dashboard useful when product, sandbox, account tier, endpoint variant, or API-side behavior rejects an optional field.

## Verification

- `npm run lint`
  - Passed.
- `npm run measurement:gate`
  - Checks: 11
  - Pass: 10
  - Fail: 1
  - Scaling gate: RED
  - Remaining fail: `google-call-attribution`
- `npm run build`
  - Passed.
  - Static/SSG pages generated: 342.
- Live protection check:
  - `https://ldndecks.com/admin/seo` returns `401` without an authenticated session.
  - `https://ldndecks.com/api/seo/overview` returns `401` without an authenticated session.
- `npm run seo:daily-check`
  - Passed.
  - Sitemap reachable: 200.
  - Sitemap URL count: 260.
  - IndexNow submission accepted for 260 URLs.

## Production Deployment

- Deployment ID: `dpl_7LTkbb1ePB7oQysuU9sj5fJB2ic2`
- Production alias: `https://ldndecks.com`
- Vercel URL: `https://ldn-decks-9j57-d9hdgpm1n-primesolutionoffice1-creates-projects.vercel.app`

## Remaining

- If DataForSEO still logs 40501 after this deploy, the next step is to capture the exact API task metadata for the failed call and tune only that product-specific payload.
- If DataForSEO logs 401/auth errors, the fix is valid API Login/API Password in local/Vercel environment, not a code payload change.
- Scaling remains RED because Google Ads qualified-call attribution and real lead quality proof are still not proven.
