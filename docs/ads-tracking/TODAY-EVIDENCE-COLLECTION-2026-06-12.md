# Today Evidence Collection - 2026-06-12

Purpose: collect only real evidence needed to move Loudoun Decks from `RED` scaling readiness toward validated attribution. Do not invent rows. Do not change Google Ads, GTM, Meta, budgets, or bid strategies while this packet is incomplete.

## Current Status

- Technical SEO local blockers: 0
- Scaling status: `RED`
- Call attribution evidence: `LIVE_EMPTY`
- Lead outcome rows: `LIVE_EMPTY`
- Owner proof evidence: blocked by missing real project/repair proof

## 1. Google Ads / GTM Call Attribution Evidence

Fill: `docs/ads-tracking/live-call-attribution-evidence-2026-06-12.csv`

Minimum required row:

| Field | What To Enter |
|---|---|
| `evidence_date` | `2026-06-12` |
| `reviewer` | Person reviewing Ads/GTM |
| `source_system` | `Google Ads`, `GTM`, or `Google Ads + GTM` |
| `conversion_name` | Exact conversion action name from Google Ads |
| `call_source` | Website call forwarding, call asset, or other exact source |
| `primary_status` | Primary / Secondary exactly as shown |
| `count_setting` | One / Every exactly as shown |
| `min_call_duration_seconds` | Qualified-call duration threshold, numeric |
| `status` | Enabled / No recent conversions / Needs attention, etc. |
| `diagnostics_status` | Exact diagnostics status from Google Ads |
| `recent_conversions_30d` | Count visible in Google Ads |
| `phone_click_primary_risk` | `yes` only if phone_click is primary/bidding-risk; otherwise `no` |
| `evidence_url_or_screenshot` | Screenshot path, Drive link, or export reference |
| `notes` | Short proof note, no secrets |
| `gate_decision` | `hold`, `review`, or `pass` |

Pass condition:

```bash
npm run measurement:call-attribution-evidence
npm run measurement:gate
npm run scaling:readiness
```

Do not pass this gate if `phone_click` is primary or if qualified-call diagnostics are unclear.

## 2. Real Lead Outcome Rows

Fill: `docs/ads-tracking/live-lead-outcomes-2026-06-12.csv`

Minimum: 5 real leads. Better: 10 real leads.

Required for each row:

| Group | Required Fields |
|---|---|
| Identity | `lead_date`, `lead_id`, `event_id` if available |
| Attribution | `source`, `medium`, `campaign`, `gclid` / `gbraid` / `wbraid` if present |
| Lead Type | `phone_or_form`, `city`, `state`, `service_type` |
| Quality | `homeowner_status`, `budget_range`, `qualified`, `qualification_reason` |
| Sales Stage | `lead_stage`, `estimate_scheduled`, `estimate_completed`, `proposal_sent`, `won` |
| Value | `estimated_project_value`, `closed_revenue_value` if known |
| Evidence | `call_recording_or_note_url`, `sales_notes` |
| Ads Decision | `ads_action` |

Recommended `ads_action` values:

- `do_not_upload` for spam, vendor, jobs, low-budget, out-of-area, materials-only, or unclear leads
- `hold` for real but incomplete leads
- `qualified_lead` for strong homeowner leads that meet service-area and budget filters
- `estimate_scheduled` only when actually scheduled
- `won` only when contract/revenue proof exists

Pass condition:

```bash
npm run measurement:lead-outcomes
npm run measurement:gate
npm run scaling:readiness
```

Do not upload unqualified phone clicks or generic form submissions.

## 3. Owner Proof Evidence

Fill these files before public proof claims or high-confidence Ads/SEO scaling:

- `docs/seo/project-evidence-intake-2026-06-12.csv`
- `docs/seo/photo-ingestion-manifest-2026-06-12.csv`
- `docs/seo/warranty-terms-intake-2026-06-12.csv`
- `docs/seo/repair-cost-ranges-intake-2026-06-12.csv`

Highest priority today:

1. Repair workmanship warranty wording.
2. Deck repair before/after or repair detail photos.
3. Numeric low/high repair cost ranges for:
   - joist sistering
   - ledger reflash/rebolt
   - post replacement
   - emergency stabilization
4. Privacy-safe proof notes. No customer names, full addresses, phone numbers, permit numbers, or unredacted documents.

Verification:

```bash
npm run seo:validate-owner-intake
npm run seo:proof-preflight
npm run seo:weekly
```

## Today Decision Rules

Allowed today:

- Add real evidence rows.
- Run validators.
- Generate offline preview only after lead outcome validation passes.
- Keep all activation decisions documented.

Not allowed today:

- Maximize Conversions.
- tCPA or tROAS.
- Budget scaling.
- Meta CAPI production activation.
- Automated Google Ads API uploads.
- Making unverified project/revenue/repair claims public.

## Execution Order

1. Add one real call attribution evidence row.
2. Add 5-10 real lead outcome rows.
3. Run call and lead validators.
4. Run measurement gate.
5. Run scaling readiness.
6. If lead rows pass, generate offline preview.
7. Keep scaling `RED` until all P0 blockers are cleared by real evidence.
