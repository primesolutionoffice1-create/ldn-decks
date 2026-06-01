# Google Cloud Production Baseline

Date: 2026-05-31

Last verified: 2026-06-01

## Project

- Project ID: `potent-howl-416318`
- Project name: `My Maps Project`
- Project number: `781725769743`
- Billing account: confirmed enabled; full account ID stored outside git.
- Active local gcloud account: confirmed; email stored outside git.

## Applied Settings

- Confirmed billing is enabled for the project.
- Confirmed the monthly billing guardrail exists.
- Added project labels:
  - `site=ldn-decks`
  - `environment=production`
  - `managed-by=codex`
- Removed broad `roles/editor` access from the default Compute Engine service account.
- Confirmed there are no Google API keys in this project.
- Confirmed there are no user-managed service account keys for the default Compute Engine service account.
- Added local non-secret project values to `.env.local`; local env files remain ignored and must not be committed.

## Verification Evidence

Verified on 2026-06-01 with `gcloud`:

- `gcloud services api-keys list --project=potent-howl-416318` returned `[]`.
- `gcloud services list --enabled --project=potent-howl-416318` did not include `generativelanguage.googleapis.com`, `aiplatform.googleapis.com`, or Maps APIs.
- `gcloud billing budgets list` confirmed `LDN Decks Monthly Guardrail` at `$25 USD`.
- `gcloud projects get-iam-policy potent-howl-416318` showed no broad `roles/editor` binding.
- `gcloud iam service-accounts list` showed one default Compute Engine service account.
- `gcloud iam service-accounts keys list --managed-by=user` for the default Compute Engine service account returned `[]`.

## Billing Guardrail

- Name: `LDN Decks Monthly Guardrail`
- Amount: `$25 USD`
- Scope: `projects/781725769743`
- Period: monthly
- Alert thresholds:
  - 20% current spend
  - 50% current spend
  - 75% current spend
  - 90% current spend
  - 100% current spend
  - 100% forecasted spend

## Enabled APIs

- `analyticsdata.googleapis.com`
- `billingbudgets.googleapis.com`
- `cloudtrace.googleapis.com`
- `datastore.googleapis.com`
- `googleads.googleapis.com`
- `iam.googleapis.com`
- `iamcredentials.googleapis.com`
- `indexing.googleapis.com`
- `logging.googleapis.com`
- `monitoring.googleapis.com`
- `searchconsole.googleapis.com`
- `servicemanagement.googleapis.com`
- `serviceusage.googleapis.com`
- `sql-component.googleapis.com`

## Intentionally Not Enabled

- `generativelanguage.googleapis.com`
- `aiplatform.googleapis.com`
- Google Maps APIs

These should stay disabled until the site has a real production need for them.

## Remaining Decisions

- If Google Maps is added to the site, create a dedicated browser key restricted by HTTP referrer and exact Maps APIs.
- If Gemini is added, create a dedicated server-only key restricted to Generative Language API or use service-account based auth where supported.
- If Cloud Run, Compute Engine, or other Google-hosted workloads are added, create a dedicated least-privilege service account for that workload.
- Do not create long-lived service account keys unless there is no supported keyless alternative.
