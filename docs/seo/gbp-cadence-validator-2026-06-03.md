# GBP Cadence Validator - 2026-06-03

## What Changed

- Added `scripts/validate-gbp-cadence.mjs`.
- Added `npm run gbp:validate`.
- Generated validation outputs:
  - `scripts/output/gbp-cadence-validation-2026-06-03.json`
  - `scripts/output/gbp-cadence-validation-2026-06-03.md`

## What The Gate Checks

- 12-week GBP post calendar exists and is sequential.
- Each week has a title, body, button, link, and image guidance.
- GBP body copy stays under the 1,500 character limit.
- Button links use `https://ldndecks.com/` and resolve to local app routes.
- Public title/body copy avoids proof-risk phrases such as completed project claims, customer stories, fake review claims, guarantees, and permit-approved claims.
- Image guidance requires verified, owner-approved, neutral branded, or educational assets.
- `this-week.md` matches the selected week and includes the correct character count.
- Q&A seed list has at least 12 priority questions and proof-safe use rules.
- Review response templates include the core rating scenarios and privacy/reuse rules.

## Validation Result

`npm run gbp:validate`:

```json
{
  "ok": true,
  "calendarWeeks": 12,
  "selectedWeek": 1,
  "errors": 0,
  "warnings": 0
}
```

`npm run gbp:this-week` regenerated Week 1 for the June 2, 2026 Tuesday cadence. This is still correct on June 3, 2026 because the generator intentionally keeps the current Tuesday post active inside its rollover window.

## Vault Mismatch Caught

When first integrated into `npm run seo:weekly`, the validator correctly failed against the live GBP operations vault copy. That vault copy still had an older 12-week calendar with:

- external/non-local button links,
- missing local app routes,
- old post types such as `PROJECT SHOWCASE`, `OFFER`, `TIP`, and `TRUST SIGNAL`,
- incomplete Q&A/review template structure compared with the proof-safe repo copy.

The vault files were synchronized from the validated repo copy:

- `post-calendar-90day.md`
- `this-week.md`
- `qa-seed-list.md`
- `review-response-templates.md`

After sync, `npm run gbp:validate` passed against the vault source paths and `npm run seo:weekly` reported:

```text
GBP cadence validation: ready - 12 weeks - selected Week 1 - 0 errors - 0 warnings
```

## Deploy Decision

No production deploy was needed for this batch. The change is an internal local validation script plus documentation/output artifacts; it does not modify public LDN Decks page content or live routing.
