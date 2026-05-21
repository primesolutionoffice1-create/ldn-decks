# Deck Payment Estimator GA4 Event Map

Status: draft implementation documentation

## Purpose

The `/deck-payment-estimator` page now emits GA4-compatible `dataLayer` events for meaningful estimator engagement. These events are designed to measure homeowner budgeting intent without changing GTM, GA4, Ads, or conversion settings live.

## Events

| Event | Where it fires | Deduping | Suggested GA4 meaning |
| --- | --- | --- | --- |
| `estimator_started` | First calculator input change in `FinancingCalculator` | Once per browser session for first interaction | A homeowner engaged with the calculator |
| `financing_option_selected` | Loan term slider changes in `FinancingCalculator` | Once per selected term per browser session | A homeowner compared payment terms |
| `estimator_completed` | After project amount, APR, and term have all been adjusted | Once per browser session | A homeowner completed meaningful estimator interaction |
| `estimator_cta_clicked` | Hero CTA, planning CTA, final CTA, and Enhancify fallback apply button | Not deduped | A homeowner clicked toward a lead action |

## Event Parameters

Shared parameters:

- `tool_name`: `deck_payment_estimator`
- `page_location`
- `page_path`

Calculator parameters when available:

- `project_amount`
- `estimated_apr`
- `loan_term_years`
- `estimated_monthly_payment`
- `estimated_total_interest`

CTA parameters when available:

- `cta_location`
- `financing_option`

## Recommended GA4 Conversions To Mark Later

Do not change GA4 live until approved.

Recommended conversions:

1. `estimator_completed`
   - Reason: strong mid-funnel budgeting intent from a qualified homeowner.
   - Risk: low, informational only.
2. `estimator_cta_clicked`
   - Reason: direct movement from estimator to contact/financing action.
   - Risk: medium if all CTA locations are grouped together; review in Explore first.

Recommended supporting audiences:

- Started estimator but did not complete.
- Completed estimator but did not submit contact form.
- Clicked financing CTA from estimator.

## Approval Gate

Recommended change:
Configure GA4/GTM event tags and conversion marking for the estimator events after data is observed.

Reason:
Improves attribution for high-intent financing and budget-planning behavior.

Expected impact:
Better visibility into which SEO and Ads sessions become qualified deck leads.

Risk level:
Medium, because live tracking configuration can affect reporting and optimization.

Rollback plan:
Disable the GA4 conversion flag or pause the GTM event tag.

Approval required: YES
