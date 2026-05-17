# Meta Ads Reset Plan - 2026-05-17

## Current finding

The active Meta ad reviewed on 2026-05-17 is not a website lead ad. It uses an
existing post, the call-to-action is `Call now`, the destination is
`tel:+15716557207`, and `Website events` is unchecked. The ad text mentions
`ldndecks.com`, but the clickable CTA dials the phone number instead of opening
the website. This explains link-click spend without reliable website traffic or
website lead conversions.

## Fixed site-side

- Meta Pixel direct fallback is already deployed for dataset `695923313293515`.
- `PageView` fires from the layout.
- `Lead` fires from `/thank-you` via `trackLeadConfirmed()`.
- As of this reset, paid social UTM parameters are captured into 90-day
  first-party cookies and forwarded with the lead form:
  `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.
- Lead emails and the `form_submit` dataLayer event now include those UTM
  values, so future Meta traffic can be traced back to campaign/ad creative.

## Do not publish

Do not publish the current draft or relaunch the current post ad as-is if the
goal is website leads. The current pattern trains Meta toward phone/post
actions, not completed website forms.

## Correct relaunch settings

Use a new website lead campaign/ad set/ad with these minimum settings:

- Objective: Leads or Sales with website conversion optimization.
- Conversion location: Website.
- Dataset / Pixel: `leads` / `695923313293515`.
- Optimization event: `Lead`.
- Website events: enabled.
- Destination URL:
  `https://ldndecks.com/get-estimate?utm_source=facebook&utm_medium=paid_social&utm_campaign=meta_leads_nova_decks_2026_05&utm_content=<creative_name>`
- CTA: `Get quote`, `Learn more`, or equivalent website CTA, not `Call now`.
- Result columns to watch: Leads, Cost per Lead, Landing Page Views, CTR,
  outbound clicks, and `Lead` event diagnostics.

## Stop-loss rule

Do not spend more than the smaller of 3 days or $75 without at least one clean
website `Lead` event and visible landing-page traffic. If Meta reports link
clicks but Events Manager does not show PageView/Lead growth, stop and inspect
destination URL, tracking, placements, and click quality before spending more.
