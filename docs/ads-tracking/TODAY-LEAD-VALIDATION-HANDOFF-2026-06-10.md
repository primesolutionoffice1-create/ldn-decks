# Today Lead Validation Handoff - 2026-06-10

## Current Status

Google Ads conversion wiring is now ready for real lead validation.

- `Lead form - Submit` is now a Primary conversion action in Google Ads.
- GTM form lead conversion fires on `lead_confirmed`.
- Google Ads transaction ID uses `event_id`.
- Enhanced Conversions are active.
- Consent Mode diagnostics are `Excellent`.
- Budgets and bid strategies should not be changed again until live lead quality is reviewed.
- The Premium Geo campaign is live and in learning:
  - `SRCH | Premium Geo | Arlington Alexandria McLean | Leads`
  - campaign ID: `23922482802`
  - budget: `$50/day`
  - bidding: Maximize conversions
  - targets: Fairfax County, Arlington County, Alexandria
  - active ad groups: `McLean + Great Falls`, `Arlington`, `Alexandria`, `Vienna + Oakton`, `Near Me | Premium Geo`

## Same-Day Check

Latest local checks completed:

- `npm run ads:validate-imports` passed with `ok=true`, 5 campaigns, 11 ad groups, 135 keywords, 22 RSAs, 0 errors, 0 warnings.
- `npm run measurement:gate` passed technically with `ok=true`, 10 pass, 1 warning, 0 fail.
- `scalingGate` remains `RED` because the live lead tracker has 0 real rows.
- `node scripts/validate-lead-outcome-rows.mjs docs/ads-tracking/live-lead-outcomes-2026-06-10.csv` passed with `ok=true`, `status=SAMPLE_ONLY`, `rows=0`, `errors=0`.
- Quality-lead form update completed locally:
  - budget range is required,
  - city is required,
  - ZIP is required,
  - homeowner / decision maker status is required,
  - budget ranges now separate `Under $15K`, `$15K-$25K`, `$25K-$50K`, `$50K-$100K`, `$100K+`, and `Not sure, but planning a full project`.
- Tracking/email update completed locally:
  - `homeownerStatus` is sent through the lead submission pipeline,
  - `homeowner_status` is pushed to the data layer,
  - the lead email includes `Homeowner / Decision Maker`.
- Google Ads import copy update completed locally:
  - composite and deck-builder ad copy now emphasizes `Projects From $20k+`,
  - repeated `Free Estimate` wording was replaced with `Written Deck Estimate`, `Design Call Available`, `Structural Review`, and similar higher-intent language.
- Premium Geo campaign prepared and activated:
  - `SRCH | Premium Geo | Arlington Alexandria McLean | Leads`,
  - 5 ad groups: `McLean + Great Falls`, `Arlington`, `Alexandria`, `Vienna + Oakton`, `Near Me | Premium Geo`,
  - 43 exact/phrase keywords after anti-cannibalization cleanup,
  - 15 RSAs,
  - `$50/day` live budget,
  - Presence targets: Fairfax County, Arlington County, Alexandria,
  - dedicated sitelinks for McLean premium budget, Arlington, Alexandria, and Composite Decks,
  - campaign-level negatives for repair-only, refinishing, staining, washing, handyman, materials-only, permit-only intent, composite/Trex overlap, and replacement overlap.
- Live Google Ads anti-cannibalization completed:
  - 17 overlapping Premium Geo keywords paused,
  - 12 campaign-level phrase negatives added for composite/Trex/replacement overlap,
  - account structure now separates generic premium geo, composite/Trex, replacement/resurfacing, and brand intent.
- Premium Geo isolated import pack created at `google-ads-import/premium-geo-test/`.
- Premium Geo validator created:
  - command: `npm run ads:validate-premium-geo`,
  - status: `ok=true`,
  - 5 ad groups,
  - 43 keywords,
  - 15 RSAs,
  - 3 locations,
  - 55 campaign-level negatives,
  - 0 errors.
- Negative keyword live-audit rules were documented in `docs/ads-tracking/NEGATIVE-KEYWORDS-LIVE-AUDIT-RULES-2026-06-10.md`.
- `LeadConfirmationToken` local proof test passed:
  - valid event/token accepted,
  - wrong event rejected,
  - missing token rejected.
- GTM Preview evidence:
  - container `GTM-N87MG6QS` connected,
  - `Conversion Linker` fired on page load,
  - form conversion tags remained idle on page load as expected,
  - the remaining external gate is a controlled form submit that produces `lead_confirmed`.
- Chrome automation limitation:
  - the contact page opened with a test `gclid`,
  - Computer Use/AppleScript could inspect the page,
  - direct form automation was not reliable enough to submit a production test lead without manual confirmation.
- `npm run lint` passed.
- `npm run build` passed.

Interpretation:

- No additional technical Google Ads campaign setup is required today.
- Do not delete old live broad negatives until the complete live negative list is exported and classified.
- Do not force a test conversion into production data just to clear diagnostics.
- The next legitimate action is one controlled test submission or the first real lead validation.

## Controlled GTM Test Still Needed

Use the open Chrome contact tab or open:

`https://ldndecks.com/contact?gclid=TEST-GCLID-CODEX-20260610&utm_source=google&utm_medium=cpc&utm_campaign=codex_tracking_validation`

Submit one clearly marked test lead:

- First Name: `TEST`
- Last Name: `LDN`
- Email: `office+tracking-test@ldndecks.com`
- Phone: `(571) 555-0100`
- Address: `13704 Winding Oak Cir`
- Timeline: `1-3 Months`
- Service: `New Decks`
- Budget: `$25K-$50K`
- Material: `Composite`
- Homeowner / Decision Maker: `I am the homeowner / decision maker`
- HOA / Permit Status: `Not sure`
- City: `Arlington`
- State: `VA`
- ZIP: `22207`
- Message: `TEST TRACKING - DO NOT CONTACT - Codex GTM lead_confirmed validation.`

In Tag Assistant, confirm:

- `form_submit` appears with an `event_id`.
- `/thank-you?eid=...&proof=...` loads.
- `lead_confirmed` appears with the same `event_id`.
- `Google Ads - Form Lead Conversion` fires only on `lead_confirmed`.
- `Google Ads - User Provided Data - Form Lead` fires only on `lead_confirmed`.
- GA4 `generate_lead` fires once.
- Refreshing `/thank-you` does not create a second Google Ads conversion with a new transaction ID.

## Controlled Test Submission - 2026-06-10

One controlled TEST lead was submitted from Chrome after enabling JavaScript from Apple Events.

- Landing URL: `https://ldndecks.com/contact?gtm_debug=1781116909250&gclid=TEST-GCLID-CODEX-20260610&utm_source=google&utm_medium=cpc&utm_campaign=codex_tracking_validation`
- Test lead: `TEST LDN`
- Email: `office+tracking-test@ldndecks.com`
- Phone: `5715550100`
- City: `Arlington`
- Service: `New Decks`
- Budget: `$20K-$40K`
- Material: `Composite`
- Message: `TEST TRACKING - DO NOT CONTACT - Codex GTM lead_confirmed validation.`
- Thank-you URL reached: `/thank-you?eid=64daec76-2a26-44bd-9043-c528e5d8afdd&proof=...`
- Event ID: `64daec76-2a26-44bd-9043-c528e5d8afdd`
- Click ID cookie persisted: `gclid=TEST-GCLID-CODEX-20260610`
- Source cookies persisted: `utm_source=google`, `utm_medium=cpc`, `utm_campaign=codex_tracking_validation`
- Browser session guard present: `lead_fired_64daec76-2a26-44bd-9043-c528e5d8afdd=1`
- Live HTML check: `GTM-N87MG6QS`, `window.dataLayer`, and `https://www.googletagmanager.com/gtm.js` are present on both `/contact` and `/thank-you`.

Interpretation:

- Form submission, server confirmation, proof token redirect, click ID persistence, and client duplicate guard are working.
- Direct AppleScript inspection of `window.dataLayer` in the debug browser context returned inconsistent results, so final GTM tag firing still needs visual Tag Assistant confirmation or Google Ads diagnostics after the test event processes.
- Do not treat this TEST lead as a real qualified lead.

## Google Ads Diagnostics Check - 2026-06-10

Google Ads Conversions diagnostics were checked after the controlled test lead.

- Diagnostics page: `Conversions > Diagnostics`
- Enhanced Conversions: `All enhanced conversion actions are active`
- Consent Mode: `Web - Excellent`
- Conversion actions table:
  - `Submit lead form`: Website, `Needs attention`, Primary, Count `One`, included in account-level goals, `0.00` all conversions
  - `Lead form - Submit`: Google hosted, `No recent conversions`, Primary
  - `Qualified Call (Ads) - 60s`: Call from Ads, `Active`, Primary
  - `Call From Website - (5716557207)`: Website, `Needs attention`, Secondary

Notes:

- Google Ads reporting is not real-time. The controlled test should be rechecked after diagnostics have time to process.
- Chrome showed a Google Ads warning: `Turn off ad blockers`. This may affect Google Ads UI diagnostics/testing, not necessarily live visitor tracking.
- Do not change bidding or budgets based on the same-day `0.00` conversion count.

## What To Do For Each New Lead

Add one row to:

`docs/ads-tracking/live-lead-outcomes-2026-06-10.csv`

Required minimum fields:

- `lead_date`
- `event_id`
- `source`
- `medium`
- `campaign`
- `gclid`, `gbraid`, or `wbraid` when available
- `form_location` or call location
- `phone_or_form`
- `city`
- `state`
- `service_type`
- `budget_range`
- `lead_stage`
- `homeowner_status`
- `qualified`
- `qualification_reason`
- `ads_action`

## Ads Action Rules

Use `hold` by default.

Use `eligible_qualified_lead_upload` only when:

- `qualified=yes`
- service fit is good
- location is in target market
- budget is realistic
- next step is confirmed
- at least one click ID exists: `gclid`, `gbraid`, or `wbraid`

Use `do_not_upload` when:

- spam
- wrong area
- wrong service
- low-budget/non-fit
- phone click only with no qualified-call proof

## Verification Commands

Validate the live tracker:

```bash
node scripts/validate-lead-outcome-rows.mjs docs/ads-tracking/live-lead-outcomes-2026-06-10.csv
```

When 5+ real rows validate with no errors:

```bash
npm run measurement:lead-outcomes
npm run scaling:readiness
```

Prepare offline conversion upload only after validation passes:

```bash
node scripts/generate-google-ads-offline-from-lead-outcomes.mjs docs/ads-tracking/live-lead-outcomes-2026-06-10.csv
```

## Do Not Do Today

- Do not increase budgets.
- Do not change bid strategies.
- Do not enable tCPA or tROAS.
- Do not activate Meta CAPI.
- Do not upload offline conversions until rows are real and validated.
- Do not create fake conversions to clear Google diagnostics.

## Done Condition

Today's setup is complete when:

- the live tracker exists,
- the tracker validates,
- Google Ads/GTM status is documented,
- the next real lead can be reviewed without changing account settings.
