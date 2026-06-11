# Call Attribution Read-Only Runbook - 2026-06-02

## Purpose

Resolve the remaining measurement-gate blocker without changing Google Ads, GTM, GA4, budgets, bidding, conversion actions, or account settings. This runbook is for read-only evidence collection only.

## Current Gate

- Scaling gate: RED
- Failing local measurement check: `google-call-attribution`
- Reason: local repo evidence cannot prove Google Ads website call forwarding, call asset attribution, or qualified-call diagnostics are configured and recording.

## Read-Only Evidence To Collect

### Google Ads Conversion Actions

Record the following for each phone-related conversion action:

| Field | Required Evidence |
|---|---|
| Conversion name | Screenshot or exported row |
| Source | Calls from ads / Calls to phone number on website / Website / Other |
| Primary vs secondary | Screenshot or exported row |
| Count | One preferred for qualified calls |
| Minimum call duration | 60 seconds preferred |
| Include in account-default goals | Yes only for qualified-call actions |
| Status | Active / No recent conversions / Needs attention |
| Diagnostics | Screenshot of tag/dynamic-number/call-source diagnostics |
| Recent conversions | Last 7/30 days if available |

### Required Phone Actions

| Action | Expected Role |
|---|---|
| Call from Ads / call asset call | Primary if min duration is 60s+ and diagnostics are clean |
| Phone Call from Website / Google forwarding number | Primary only after website dynamic insertion is proven |
| `phone_click` / Call button click | Secondary or observation only; never a Smart Bidding primary signal |

### Google Ads Assets

For call assets, record:

- Asset status
- Approval status
- Phone number shown
- Scheduling, if present
- Account/campaign association
- Whether calls use Google forwarding numbers
- Whether reporting shows call duration

### GTM Read-Only Checks

Record whether any Google Ads conversion tag is triggered by `phone_click`.

If yes, collect:

- Tag name
- Trigger name
- Conversion ID and label location, if visible
- Whether it is mapped to a primary Ads conversion action
- Whether transaction/event ID is available

Expected finding: `phone_click` may remain GA4/engagement reporting, but it should not be the primary Ads call conversion.

## Pass Criteria

The call-attribution blocker can move from RED to YELLOW only when all are true:

- At least one qualified-call conversion action exists.
- It is primary only if it counts real calls, not clicks.
- Minimum duration is 60 seconds or another owner-approved qualified-call threshold.
- Call source diagnostics are clean.
- Recent test or real call evidence exists.
- `phone_click` is not used as a primary Smart Bidding signal.

The blocker can move toward GREEN only after 5-10 real call or lead outcomes are matched to Ads/CRM evidence.

## Do Not Change

- Do not create conversion actions.
- Do not edit primary/secondary status.
- Do not edit goals.
- Do not edit GTM tags or triggers.
- Do not edit call assets.
- Do not change bidding.
- Do not change budgets.
- Do not publish containers.

## Output Template

```text
Call Attribution Evidence - YYYY-MM-DD

Google Ads call conversions reviewed:
- [name] | source: | primary: | count: | min duration: | status: | diagnostics:

Call assets reviewed:
- [asset/campaign] | status: | approval: | forwarding: | duration reporting:

GTM phone_click mapping:
- GA4 only / Ads secondary / Ads primary risk:

Gate decision:
- RED / YELLOW / GREEN

Reason:
- ...

Next action:
- ...
```

## CSV Evidence Template

Use:

- `docs/ads-tracking/templates/call-attribution-readonly-evidence-template.csv`

Validate the template or a real read-only evidence export with:

```bash
npm run measurement:call-attribution-evidence
node scripts/validate-call-attribution-evidence.mjs path/to/real-call-attribution-evidence.csv
```

Expected statuses:

- `SAMPLE_ONLY`: template only; no real Google Ads/GTM evidence rows yet.
- `PARTIAL`: real rows are present, but the call-attribution blocker is not fully proven.
- `FAIL`: required fields, diagnostics, primary/secondary risk, or gate decision rules are invalid.

The validator does not change Google Ads, GTM, GA4, budgets, bidding, conversion actions, or account settings.
