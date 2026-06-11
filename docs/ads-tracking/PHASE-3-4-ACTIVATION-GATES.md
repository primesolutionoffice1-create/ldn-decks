# Phase 3 + Phase 4 — Activation Gates

**Purpose:** explicit entry conditions for the next two phases of the post-merge attribution maturation roadmap. Companion to `PHASE-2-REVENUE-FEEDBACK-INFRASTRUCTURE.md`. **This document does not authorize implementation** — it defines the gates that must be passed before implementation may begin.

The architecture for both phases is already drafted in earlier documents. What's missing — and what this memo provides — is the precise gating logic that prevents premature activation.

---

# Phase 3 — Offline Conversion Imports (operational rollout)

## What Phase 3 is

The transition from **Phase 2 V1 (manual weekly CSV uploads)** to **Phase 2 V2 (automated uploads via Google Ads Conversions API)**, plus the operational discipline required to run V1 reliably in the weeks before V2 ships.

This is NOT new architecture — it's the *operational steady state* of Phase 2. Treat Phase 3 as "Phase 2 in production."

## Entry gate — all must be true

| # | Condition | Verified by | Why this gate exists |
|---|---|---|---|
| 1 | Phase 1A `FINAL-ATTRIBUTION-SIGNOFF.md` signed and dated | Operator review | Bidding signal must be clean before adding offline data |
| 2 | Phase 2 V1 manual CSV upload completed at least 4 times | Airtable Conversion Uploads table | Operator has muscle memory; cadence is proven |
| 3 | First Won conversion uploaded successfully (verified in Google Ads diagnostics) | Google Ads → Conversions → Diagnostics | End-to-end pipe has produced a real revenue signal |
| 4 | At least 10 leads in Airtable with non-null `gclid` | Airtable filter | Tracking is delivering attribution data, not just nulls |
| 5 | Sales operator has correctly stage-transitioned at least 5 leads through Won OR Lost | Airtable history | Operator understands the workflow; no orphan "New Lead" rows |
| 6 | No CSV upload errors in last 2 consecutive uploads | Conversion Uploads table `upload_status` | V1 is stable; not crashing weekly |

**If any condition fails:** stay in Phase 2 V1. Do not start V2 implementation.

## What Phase 3 ships

### 3A — Automated upload pipeline (replaces manual CSV)

- `src/app/api/webhooks/lead-stage-change/route.js` — Next.js route handler
- Airtable Automation: "When `stage` changes → POST to webhook"
- Google Ads OAuth credentials provisioned (developer token, refresh token, conversion action resource names)
- HMAC signing on the webhook for Airtable → server auth
- Result logged back to Airtable `Conversion Uploads` table

### 3B — Conversion adjustment handling (Won → Lost reversals)

- Additional logic in the webhook to detect stage regressions
- Negative-value conversion adjustment uploads via Google Ads Conversion Adjustments API
- Same `transaction_id` as the original Won upload
- Audit trail row in Airtable

### 3C — Enhanced Conversions for Leads (non-gclid recovery)

- For Wons with null `gclid` but populated email+phone, upload via Enhanced Conversions for Leads API
- SHA-256 hashed match keys server-side
- Typically recovers an additional 15-30% of Wons that would otherwise be unattributed

### 3D — Reporting / sanity checks

- Weekly cron: compare Airtable Won count vs Google Ads Won-Booked-Job conversion count for same week
- Alert if delta > 5% (means uploads are missing or duplicating)
- Optional: surface the comparison in a tiny `/admin/conversion-health` page

## Phase 3 done-state — all must be true

| # | Done means | Measured how |
|---|---|---|
| 1 | Manual CSV upload retired | Operator has skipped 2 consecutive Mondays without manual upload AND offline conversions still appear in Google Ads |
| 2 | Webhook reliability ≥ 99% | Vercel logs show ≤ 1% 5xx on `/api/webhooks/lead-stage-change` over 30 days |
| 3 | Reconciliation alert hasn't fired in 30 days | Cron job + sanity check passes |
| 4 | At least 30 Won uploads completed via automated path | Conversion Uploads table count by `upload_method = API` |
| 5 | Conversion adjustment path proven (at least 1 Won-→-Lost reversal handled cleanly) | Airtable Conversion Uploads row with `conversion_name = "Won adjustment"` and negative value |

## Phase 3 stop conditions — abandon V2, return to V1

| Trigger | Action |
|---|---|
| Webhook 5xx rate > 5% for 24h | Disable Airtable Automation; resume manual CSV; investigate |
| Google Ads API rejects > 10% of uploads | Disable Automation; investigate auth + payload shape; resume manual |
| Reconciliation delta > 15% in any week | Disable Automation; do a full audit; only restart after delta < 5% |
| Sales operator reports Won counts not matching their records | Same as above |

## Estimated effort

| Task | Hours |
|---|---|
| Google Ads OAuth setup (Cloud project + consent + refresh token) | 2-3 |
| `/api/webhooks/lead-stage-change` route handler implementation | 4-6 |
| Airtable Automation wiring | 0.5 |
| Conversion adjustment logic + tests | 2 |
| Enhanced Conversions for Leads fallback path | 2 |
| Reconciliation cron + alert | 1-2 |
| Documentation + handoff | 1 |
| **TOTAL** | **~13-17 hours** |

Realistic calendar window: 2-3 weeks of engineer time across availability.

---

# Phase 4 — Meta Activation

## What Phase 4 is

Production-ready Meta Ads — Pixel installed via GTM, CAPI activated with credentials, domain verified, iOS Aggregated Event Measurement configured, audience signals built. Not just code-deployable (which Phase 1 already shipped) but **actively running ad spend** with reliable attribution.

The site-side foundation is already in place: fbclid capture is live, Meta CAPI server endpoint is env-gated in `src/server/metaCapi.js`, IP/User-Agent capture for EMQ is wired in `sendEmail.js`. **Phase 4 is operational activation, not new code.**

## Entry gate — all must be true

| # | Condition | Verified by | Why this gate exists |
|---|---|---|---|
| 1 | Phase 3 done-state achieved | Done-state table above | Google Ads attribution must be stable before adding Meta noise |
| 2 | Google Ads has at least 30 days of Won conversions with revenue values flowing | Airtable + Google Ads | Need stable Google baseline to attribute Meta lift against |
| 3 | Google Ads is producing positive ROAS at current spend level | Quarterly P&L view | Don't add a second channel if the first isn't profitable |
| 4 | Facebook **Page** (not personal profile) exists for Loudoun Decks | Check `facebook.com/profile.php?id=61573750423712` — currently a profile URL | Pages required for ads; profile-to-Page conversion is sometimes needed |
| 5 | Meta Business Manager account exists with Loudoun Decks owner role | business.facebook.com | Required for Pixel, audiences, ad spend governance |
| 6 | `ldndecks.com` domain verified in Business Manager → Brand Safety → Domains | Business Manager UI | Required for iOS Aggregated Event Measurement (8 priority events) |
| 7 | `META_PIXEL_ID` and `META_CAPI_ACCESS_TOKEN` provisioned and tested in staging | Test event in Events Manager → Test Events tab | Credentials must work before production |
| 8 | Monthly Meta budget envelope approved (recommend $1.5k-$3k for start) | Operator decision | Don't activate without budget commitment |

**If any condition fails:** delay Phase 4. Run Google-only.

## What Phase 4 ships

### 4A — Meta Pixel browser source

- Current site code includes a direct Meta Pixel fallback for dataset `695923313293515`, consent-gated in `src/app/layout.js`.
- Do not add a second Meta base Pixel tag in GTM unless the direct fallback is removed or disabled first.
- Browser `PageView` route tracking must pass `npm run ads:verify-meta-route`: exactly one initial PageView and one additional PageView after SPA navigation.
- If the script returns `BLOCKED_CDP_UNAVAILABLE`, start Chrome with the printed `--remote-debugging-port` command and start the Next.js dev server for `TARGET_URL`; that status is a local test harness setup blocker, not a Meta tracking failure.
- If GTM is used later for Meta Lead, fire it from `lead_confirmed` with `event_id` mapped as Meta `eventID`, and validate dedup against CAPI before spend.

### 4B — Production CAPI env vars

- `META_PIXEL_ID` and `META_CAPI_ACCESS_TOKEN` set in Vercel Production env
- `META_CAPI_TEST_EVENT_CODE` left UNSET for production (only set in `.env.local` during testing)

### 4C — iOS Aggregated Event Measurement — 8 priority events

In Events Manager → Aggregated Event Measurement → configure priority order:

| Priority | Event | Why this order |
|---|---|---|
| 1 | Lead (form submission) | Primary conversion |
| 2 | Purchase (Won — Booked Job, uploaded server-side at Phase 3) | Highest-value signal |
| 3 | Contact (phone click) | Secondary engagement |
| 4 | InitiateCheckout (Estimate Scheduled) | Mid-funnel signal |
| 5 | ViewContent (cost-page reader) | Top-funnel signal |
| 6-8 | Reserved | Adjust based on first 60 days of data |

### 4D — Custom Audiences

- "All website visitors past 180 days"
- "Cost-content readers past 90 days" (URL contains `/composite-deck-cost`, `/composite-deck-vs-wood-deck`, `/trex-vs-timbertech-vs-azek`, `/best-time-to-build`)
- "City-page bouncers past 90 days" (URL contains `/deck-builder-`, time on page < 30s, no Lead event)
- "Customer list" — upload from Airtable Jobs table (past customers, hashed email + phone)

### 4E — Campaigns (in priority order)

| Phase | Campaign | Daily budget | Notes |
|---|---|---|---|
| 4.1 | Retargeting (warm audience only) | $15-20 | Start here; cost-content readers + page visitors |
| 4.2 (after 2 weeks if CPL < $80) | Advantage+ Leads with custom audiences | $30 | Bottom-funnel lead capture |
| 4.3 (after 2 more weeks) | Traffic / Engagement for top-funnel | $15-25 | Builds the retargeting pool |
| 4.4 (Month 3+) | Customer Match reactivation | $10-20 | Past customers for repair/resurfacing |

### 4F — Reporting integration

- Meta-attributed Wons logged in Airtable Conversion Uploads table with `platform = Meta`
- Cross-channel revenue attribution view: Google vs Meta vs Microsoft Wons per month
- Be aware: Meta will claim some Wons that Google also claims (last-click overlap). Don't double-count — use Airtable as the source of truth for revenue.

## Phase 4 done-state — all must be true

| # | Done means | Measured how |
|---|---|---|
| 1 | Meta Pixel + CAPI both firing with matching `event_id` | Events Manager → Lead event detail shows Source = Browser + Server with same event_id |
| 2 | EMQ score ≥ 7.5 over 50+ Lead events | Events Manager → Match Quality tab |
| 3 | Retargeting campaign has run 4 weeks with CPL < $80 | Meta Ads Manager + Airtable Wons cohort |
| 4 | At least 1 Won attributed primarily to Meta in Airtable | `linked_lead.utm_source = facebook` AND stage = Won |
| 5 | iOS AEM event priorities published and stable for 14 days | Events Manager AEM tab |
| 6 | Meta-driven Wons appearing in Conversion Uploads table | Filter `platform = Meta` |

## Phase 4 stop conditions — pause Meta, stay Google-only

| Trigger | Action |
|---|---|
| EMQ score stays < 5.0 after 30 days | Pause campaigns; audit match keys; do not scale spend |
| Meta CPL > $200 for 2 consecutive weeks | Pause; review creative + audience; do not scale |
| Meta-attributed Wons < 1 per month for 2 consecutive months | Pause; reassess whether Meta is the right channel for this business |
| Account-level policy warning email from Meta | STOP. Don't experiment. Resolve before re-enabling. |
| Combined Google + Meta CPA exceeds historical Google-only CPA by >30% | Pause Meta; audit if Meta is producing incremental Wons or just claiming Google's |

## Estimated effort

| Task | Hours |
|---|---|
| Business Manager setup (Page conversion if needed + domain verification) | 1-2 |
| Generate CAPI access token + set Vercel env vars | 0.5 |
| iOS AEM 8-event priority configuration | 0.5 |
| GTM Pixel installation + Lead event tag | 1-2 |
| Custom Audiences setup (4 audiences) | 1 |
| Customer list upload + hashing verification | 0.5 |
| Test event end-to-end (Pixel + CAPI deduplication) | 1-2 |
| Campaign 4.1 build (retargeting) | 2 |
| Creative assembly (5 ad concepts per Meta Strategy v1) | 3-6 |
| **TOTAL** | **~10-15 hours** |

Realistic calendar window: 1-2 weeks of operator + designer time once gates pass.

---

# Cross-cutting principle

Both phases share one operating principle: **the gate exists to prevent premature optimization.**

- Phase 3 gate prevents automation before manual proves data integrity.
- Phase 4 gate prevents diversification before Google proves the foundation.

Failed gates are not failures — they're correctly-fired safety circuits. The right response to a failed gate is to **stabilize the current phase**, not to push through to the next one.

The user explicitly framed this earlier:
> "reliable attribution first, optimization second, scale third."

Phase 3 = optimization. Phase 4 = scale. Neither happens until Phase 2 has proven reliable.

---

## Sign-off (phase entry approval)

### Phase 3 entry approval

```
Reviewed by:                            __________________________
Date:                                   __________________________

[ ] All 6 Phase 3 entry conditions verified
[ ] Operator capacity confirmed (13-17 engineering hours available)
[ ] Google Ads API access provisioned
[ ] First 4 manual CSV uploads documented in Conversion Uploads table

Phase 3 implementation kickoff target:  __________________________
```

### Phase 4 entry approval

```
Reviewed by:                            __________________________
Date:                                   __________________________

[ ] All 8 Phase 4 entry conditions verified
[ ] Monthly budget approved: $____________
[ ] Business Manager + Page + domain verification complete
[ ] CAPI credentials provisioned and test-fired

Phase 4 implementation kickoff target:  __________________________
```

**No implementation work begins for either phase until the corresponding sign-off is filled and dated.**
