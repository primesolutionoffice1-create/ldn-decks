# Lead Quality Outcome Rows Runbook - 2026-06-02

## Purpose

Collect the first 5-10 real Loudoun Decks lead outcomes so scaling decisions are based on qualified demand, not raw form submits or phone clicks.

## Template

Use:

- `docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv`

## Validation

Run:

```bash
npm run measurement:lead-outcomes
```

The command validates the sample template by default and writes:

- `scripts/output/lead-outcome-validation-2026-06-02.json`
- `scripts/output/lead-outcome-validation-2026-06-02.md`

To validate a real owner/CRM export, pass the CSV path directly:

```bash
node scripts/validate-lead-outcome-rows.mjs path/to/real-lead-outcomes.csv
```

Validation statuses:

- `SAMPLE_ONLY`: expected for the template file; no real rows yet.
- `PARTIAL`: real rows exist, but fewer than 5.
- `PASS`: at least 5 real rows and no validation errors.
- `FAIL`: missing required fields, unsafe upload flags, or phone/click evidence problems.

## Minimum Row Requirements

Each row should include:

- Lead date
- `event_id` when available
- Click ID when available: `gclid`, `gbraid`, or `wbraid`
- Source/medium/campaign if available
- Form location or phone CTA location
- City and state
- Service type
- Budget range
- Material interest
- HOA/permit status
- Phone vs form source
- Call duration or call evidence note, if phone
- Lead stage
- Qualified yes/no
- Qualification reason
- Estimate/proposal/won/lost status
- Estimated project value or closed revenue value when known

## Rules

- Do not upload phone-click-only rows as qualified conversions.
- Do not mark a lead qualified until budget, service fit, location fit, and next step are confirmed.
- Do not upload rows with no click ID unless using an approved enhanced-lead offline import method.
- Do not use customer names, full addresses, private notes, or unredacted documents in public SEO proof files.
- Use `ads_action=hold` until a human validates the row.
- Use `ads_action=eligible_qualified_lead_upload` only for rows with `qualified=yes` and `gclid`, `gbraid`, or `wbraid`.
- For phone leads, attach a 60+ second duration or a call evidence note before marking the row qualified.

## Suggested First Review

After 5-10 rows:

1. Count qualified vs unqualified leads.
2. Compare qualified rate by form location and phone CTA location.
3. Compare qualified rate by service type.
4. Identify waste sources: wrong location, wrong service, low budget, no response, spam.
5. Decide whether Google Ads can receive `Qualified Lead` offline imports.

## Offline Conversion CSV Prep

After `npm run measurement:lead-outcomes` returns `PASS`, generate the manual Google Ads offline conversion CSV from the same reviewed tracker:

```bash
npm run ads:offline-from-lead-outcomes
```

Default input:

```txt
docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv
```

Default output:

```txt
scripts/output/google-ads-offline-conversions-from-lead-outcomes.csv
```

For a real CRM/export file:

```bash
node scripts/generate-google-ads-offline-from-lead-outcomes.mjs path/to/real-lead-outcomes.csv
```

Rules:

- Only rows with `ads_action=eligible_qualified_lead_upload` are exported.
- Rows must have `qualified=yes`.
- Rows must have `event_id`.
- Rows must have `gclid`, `gbraid`, or `wbraid`.
- The first milestone exported is `Qualified Lead` with value `500`.
- `Estimate Scheduled` is exported with value `1000` when `estimate_scheduled=yes` or the stage is at/after `Estimate Scheduled`.
- `Contract Signed` is exported only when `won=yes` or stage is `Won`/`Closed Paid`, and `closed_revenue_value` exists.
- The generated CSV is still a prep artifact. Preview it in Google Ads before applying any upload.

## Gate Impact

This can move lead-quality proof from missing to partial once 5-10 real rows are complete. It does not resolve qualified-call attribution by itself unless call duration and call-source evidence are attached.
