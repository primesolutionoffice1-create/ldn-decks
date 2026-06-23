# Google Ads Lead Recovery - 2026-06-22

## Live Account Snapshot

Date range checked in Google Ads: `Jun 15-21, 2026` (`Last 7 days`).

| Metric | Value |
| --- | ---: |
| Spend | `$1,515.91` |
| Clicks | `103` |
| Impressions | `1,656` |
| Avg CPC | `$14.72` |
| Primary conversions | `1.00` |
| Cost / conversion | `$1,515.91` |
| Conversion rate | `0.97%` |

## Campaign Findings

| Campaign | Cost | Clicks | Conv. | Finding |
| --- | ---: | ---: | ---: | --- |
| `SRCH | Composite | 3 Counties | Calls` | `$543.01` | `52` | `0.00` | Largest spend source, no recorded conversions. |
| `SRCH | Premium Geo | Arlington Alexandria McLean | Leads` | `$441.09` | `15` | `0.00` | High CPC, no recorded conversions after prior negative-conflict fix. |
| `SRCH | Replacement + Resurfacing | 3 Counties | Calls` | `$420.03` | `20` | `1.00` | Only campaign with a recorded conversion. |
| `SRCH | Branded | 3 Counties | Calls` | `$111.78` | `16` | `0.00` | High CTR, but no recorded conversion. |

## Search Terms Diagnosis

Top visible search terms are mostly high-intent and locally relevant, including:

- `trex contractor`
- `timbertech deck builders near me`
- `deck builders near me`
- `deck contractors near me`
- `deck replacement near me`
- `trex deck builder near me`
- `trex installers near me`

Conclusion: the immediate issue is not obvious junk-query waste. The bigger issue is that expensive, relevant clicks are not converting or are not being recorded.

## Landing Page Spend

| Landing page | Clicks | Cost | Finding |
| --- | ---: | ---: | --- |
| `https://www.ldndecks.com/composite-decks/` | `44` | `$510.65` | Highest spend landing page; no visible lead conversion signal in Google Ads. |
| `https://www.ldndecks.com/services/deck-replacement/` | `17` | `$295.94` | Strong intent, one related campaign conversion only. |
| `https://ldndecks.com/deck-builder-northern-virginia/` | `6` | `$207.61` | Very high CPC; needs separate CRO review before more spend. |
| `https://www.ldndecks.com/contact/` | `15` | `$109.04` | Brand/contact traffic still did not record lead conversions. |

## Conversion Tracking Status

- `Qualified Call (Ads) - 60s`: active, primary, recorded `1.00` conversion.
- `Submit lead form`: primary website conversion, `Needs attention`, recorded `0.00`.
- `Call From Website - (5716557207)`: secondary website conversion, `Needs attention`, recorded `0.00`.
- GA4 `generate_lead` and `form_start`: no recent conversions in Google Ads.

Hard blocker: form lead measurement is still not proven in Google Ads. Smart Bidding should not be trusted to optimize form leads until `lead_confirmed` -> GTM -> Google Ads is verified with transaction ID dedup and Enhanced Conversions.

## Code Action Taken

Added a compact paid-search lead form to the two highest-spend service landing pages:

- `/composite-decks`
- `/services/deck-replacement`

The new form uses the existing `useLeadSubmit()` pipeline, so it preserves:

- click ID capture (`gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`)
- UTM forwarding
- `event_id` generation
- honeypot filtering
- server-confirmed `/thank-you?eid=...&proof=...`
- `lead_confirmed` firing through the existing anti-replay path

No bids, budgets, campaign settings, networks, match types, Google Ads conversion actions, GTM settings, or production deploys were changed.

## Validation

- `npm run lint`: pass.
- `npm run build`: pass.
- Local visual QA on `http://localhost:3022/composite-decks`: compact paid-search form present.
- Local visual QA on `http://localhost:3022/services/deck-replacement`: compact paid-search form present.

Known QA note: the privacy banner can cover the bottom of the compact form until the user accepts or declines. It does not remove the form, but it may reduce mobile completion rate and should be watched.

## Next Required Operator Actions

1. Deploy this landing-page conversion update.
2. Run GTM Preview on one test lead and capture:
   - `lead_confirmed` event timeline
   - `event_id` value
   - Google Ads lead conversion tag firing
   - transaction ID mapped to `event_id`
   - Enhanced Conversions field map
   - network request showing hashed user data only
3. Confirm Google Ads `Submit lead form` moves out of `Needs attention` after a real/test confirmed lead.
4. Keep Smart Bidding expansion, bid increases, budget increases, AI Max, Search Partners, Display, and PMax paused until the form and offline loop are proven.

## Current Recommendation

Do not scale spend yet. The account is paying for relevant clicks, but the form conversion path is still not trusted in Google Ads. The safest immediate move is conversion-rate improvement on the highest-spend landing pages plus GTM/Enhanced Conversions validation.
