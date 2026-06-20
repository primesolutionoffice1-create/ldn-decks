# Google Ads Fix Execution Status - 2026-06-09

Mode: controlled execution. No budgets, bidding strategies, conversion actions, or campaign statuses were changed live.

## 1. Conversion Fix

Status: Google Ads primary-action fix completed live; live conversion-hit validation still required.

Website side is already strong:

- `ContactForm` uses `useLeadSubmit`.
- `useLeadSubmit` generates `event_id`.
- click IDs are forwarded: `gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`.
- `/thank-you` fires `lead_confirmed` only after server confirmation proof.
- `measurement:gate` passes 10/11 checks.

Google Ads side before fix:

- `Submit lead form` shows `Needs attention`.
- Branded campaign shows missing primary conversion action warning.
- Required action: map Google Ads primary form conversion to `lead_confirmed` with transaction ID = `event_id`.

Google Ads side after fix:

- Opened Google Ads conversion-goal workflow for `Submit lead form`.
- Changed `Lead form - Submit` from non-primary/secondary to Primary.
- Google Ads workflow showed `Completed`.
- `Submit lead form` primary conversion actions increased from 1 to 2.
- The top Google Ads recommendation banner for missing primary conversion action disappeared after reload.
- Branded campaign status rechecked after the change: `Eligible` with 96% optimization score.

GTM verification:

- Container: `GTM-N87MG6QS`.
- Google Ads form lead tag exists and is wired to `lead_confirmed - Custom Event`.
- Conversion ID: `16888402136`.
- Conversion label: `KNF1CJur4tIbENihgvU-`.
- Transaction ID: `{{DLV - event_id}}`.
- `DLV - event_id` reads Data Layer Variable Name `event_id`, Version 2.
- Enhanced Conversions tag exists: `Google Ads - User Provided Data - Form Lead`.
- Enhanced Conversions user-provided data variable maps Email to `{{dlv - email}}` and Phone to `{{dlv - phone}}`.
- Google Ads Diagnostics shows: `All enhanced conversion actions are active`.
- Google Ads Diagnostics shows Consent Mode Web: `Excellent`.

Remaining validation:

- `Submit lead form` can remain `Needs attention` until Google sees a valid live conversion/tag hit.
- Do not generate fake Google Ads conversions only to clear diagnostics.
- Validate using the next real form lead or a clearly documented test lead that is excluded from lead-quality scoring.

## 2. Negative Keywords

Status: posted live via Google Ads Editor.

Created safe import files:

- `google-ads-import/12-live-campaign-negative-keywords-safe-2026-06-09.csv`
- `google-ads-import/13-live-shared-negative-keywords-safe-2026-06-09.csv`
- `google-ads-import/14-live-campaign-negative-keywords-editor-2026-06-09.csv`

Important correction:

- Old import generation used Broad negatives.
- Updated generator now outputs Phrase/Exact negatives only.
- Validator now fails if Broad negatives appear.
- Google Ads Editor requires `Criterion Type` values such as `Negative Phrase` and `Negative Exact`; the Editor-safe file is `14-live-campaign-negative-keywords-editor-2026-06-09.csv`.

Live execution:

- Posted 23/23 campaign-level negative keywords in Google Ads Editor.
- Posted entity type: `Negative keywords`.
- No normal keywords, ad groups, budgets, bidding strategies, ads, or conversion actions were posted.
- Scope: selected live Search campaigns only.

## 3. Composite Campaign Cleanup

Status: posted live.

Added safe query-based negatives from live search term audit:

- Exact `trex decking`
- Exact `trex decking boards`
- Exact `deck trex`
- Exact `fiberon decking`
- Phrase `decking boards`
- Phrase `decking material`
- Phrase `decking materials`

Rationale: these are material/product-research terms with poor lead signal.

## 4. Campaign Structure By Intent

Status: validated in import pack.

Validated structure:

- Composite
- Deck Builders
- Replacement + Resurfacing
- Branded
- PMax Remarketing

Validator result:

- 5 campaigns
- 4 Search campaigns
- 1 PMax campaign
- 11 ad groups
- 135 keywords
- 22 RSAs
- 0 errors
- 0 warnings

## 5. Landing Pages

Status: already mapped in import pack.

Key mappings:

- Composite campaign → `/composite-decks/`
- Composite cost ad group → `/composite-deck-cost-northern-virginia/`
- TimberTech/AZEK ad group → `/timbertech-decks/`
- Replacement → `/services/deck-replacement/`
- Resurfacing → `/services/deck-resurfacing/`
- Branded → `/contact/`

## 6. Lead Validation

Status: live tracker created; real lead rows still needed.

Form captures:

- service
- timeline
- budget range
- material interest
- HOA / permit status
- city / state / ZIP
- click IDs
- `event_id`

Next required evidence:

- 5-10 real lead rows
- source/campaign/search term where available
- call/form type
- city
- service
- qualified / not qualified
- estimate scheduled
- won/lost

Live tracker:

- `docs/ads-tracking/live-lead-outcomes-2026-06-10.csv`
- Handoff: `docs/ads-tracking/TODAY-LEAD-VALIDATION-HANDOFF-2026-06-10.md`
- Validation command passed with `ok=true`, `status=SAMPLE_ONLY`, `rows=0`, `errors=0`.
- `SAMPLE_ONLY` is expected until the first real lead row is added.

## 7. Budget / Scaling

Status: protected.

No budget increase was made.
No tCPA/tROAS switch was made.
No Max Conversions expansion was made.
No Meta CAPI activation was made.

Reason: scaling gate remains RED until the newly-primary lead form conversion receives valid live hits and 5-10 real lead outcome rows are reviewed.

## Live UI Note

Google Ads live UI was opened at Negative Keywords. Existing account contains many old Broad-match negative keywords.

Google Ads Editor was used for the live-safe fix because it provided an explicit pre-post confirmation:

- Create `Negative keywords`: 23
- Posted: 23/23

Do not use `12-live-campaign-negative-keywords-safe-2026-06-09.csv` directly in Google Ads Editor; it is a readable/export-safe CSV, not the final Editor import format. Use `14-live-campaign-negative-keywords-editor-2026-06-09.csv` for Editor import.

## Live Google Ads Conversion Fix Note

The Google Ads conversion goal fix was performed directly in the live account:

- Account: `943-907-4542 Loudoun Decks Builder-2`.
- Goal: `Submit lead form`.
- Action changed to primary: `Lead form - Submit`.
- Result: workflow marked `Completed`.
- Campaign impact: Branded Search warning cleared; campaign now shows `Eligible`.

No campaign budgets, bid strategies, campaign statuses, ad copy, keywords, assets, or Meta settings were changed during this conversion-goal fix.
