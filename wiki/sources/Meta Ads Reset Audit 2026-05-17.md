---
brain_schema: ads-brain.v1
created: "2026-05-17"
updated: "2026-05-17"
type: source
title: "Meta Ads Reset Audit 2026-05-17"
platform: meta
status: implemented
sources:
  - "[[Meta Ads]]"
  - "[[Tracking and Attribution Risk Register]]"
---

# Meta Ads Reset Audit 2026-05-17

## Evidence

- Ads Manager account `654220273813699` was reviewed in the live UI.
- The visible active post ad `Post: "Your dream backyard is closer than you think"` spent `$207.33` over the selected Last 30 days and reported `162 Link clicks` at `$1.28` per link click.
- The ad is configured from an existing post with CTA `Call now` and destination `tel:+15716557207`.
- The ad text contains `ldndecks.com`, but the clickable CTA in preview is `Call now`, not a website URL.
- `Website events` is unchecked in the ad tracking section.
- Events Manager Test Events for dataset `leads` / `695923313293515` received multiple `Lead` and `PageView` events as `Processed` via Browser / Manual Setup on 2026-05-17.

## Decision

The current Meta post/call ad is not a valid website lead campaign. Do not
publish the draft or relaunch the old boosted-post pattern as-is.

Relaunch only with a website lead campaign:

- Objective: Leads or Sales / Website conversion.
- Conversion location: Website.
- Dataset: `leads` / `695923313293515`.
- Optimization event: `Lead`.
- CTA: website CTA such as Get quote or Learn more, not Call now.
- URL: `https://ldndecks.com/get-estimate?utm_source=facebook&utm_medium=paid_social&utm_campaign=meta_leads_nova_decks_2026_05&utm_content=<creative_name>`.
- Columns: Leads, Cost per Lead, Landing Page Views, outbound clicks, CTR, and Event diagnostics.

## Site-Side Fix

Implemented repo-side UTM attribution capture so future Meta lead emails and
dataLayer events carry `utm_source`, `utm_medium`, `utm_campaign`,
`utm_content`, and `utm_term` in addition to `fbclid`.

Deployed to production in commit `b095164`; live fetch of `/get-estimate`
confirmed Meta Pixel markers and UTM capture keys in the HTML.

## Stop-Loss

Do not spend more than the smaller of 3 days or $75 without at least one clean
website `Lead` event and visible landing-page traffic.
