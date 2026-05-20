---
brain_schema: ads-brain.v1
created: "2026-05-14"
updated: "2026-05-14"
type: action_analysis
title: "Google Ads Action Analysis 2026-05-14"
platform: google
status: needs_review
confidence: medium-high
---

# Google Ads Action Analysis 2026-05-14

## Executive Diagnosis

The live account is now directionally correct: Search-only, calls-first, 150/day, high-ticket intent, repair separated from replacement/composite, legacy waste paused.

The next performance ceiling is not campaign count. The ceiling is:

1. Tracking trust and qualified-call feedback.
2. Landing-page match for TimberTech, replacement, and mobile callers.
3. Search-term hygiene in the first 7-14 days.
4. Branded policy review completion.

## Current Account Position

Implemented live:

- [[Google Ads PRO Search Structure 2026-05-14]]
- [[Google Ads Budget Baseline 2026-05-14]]
- [[Qualified Call Ads 60s]]

Budget:

- Composite: 90/day
- Replacement + Resurfacing: 45/day
- Branded: 15/day
- PMax: paused

Primary conversion:

- `Qualified Call (Ads) - 60s`

## Competitor Pattern

Competitors are not only bidding/positioning on generic `deck builder`. They also build authority around:

- Trex + TimberTech certification.
- 3D design / estimator tools.
- Financing.
- Warranty.
- City/county service pages.
- Outdoor living bundles.
- Repair/resurfacing messaging.

Examples observed:

- Stoneridge uses Trex Pro Platinum + TimberTech AZEK Platinum, 8,000+ projects, 3D design, permits, warranties, financing, and broad Loudoun city coverage.
- Deck Buddy pushes competitor price matching, financing, Trex/TimberTech certification, and restoration/repair.
- Hoppy positions premium TimberTech/Trex/Zuri materials, aluminum framing, structural decks, and Northern Virginia service area.
- Velero highlights local project examples, TimberTech/Trex materials, composite/PVC education, and outdoor living.

Implication: LDN should not compete on cheap/repair traffic inside the high-ticket campaigns. It should compete on premium authority, certification, local permit/HOA handling, composite/Trex/TimberTech match, and fast call conversion.

## Main Problems And Solutions

### 1. Tracking Gate Is Still The Biggest Risk

Problem:

- Account optimizes to 60-second calls, which is correct, but full offline lead quality is not closed.
- Ads Brain still marks Day 0 tracking as partial.
- Form submits are intentionally secondary until quality is verified.

Solution:

- Close [[day0-gtm-validation-checklist]].
- Verify Google forwarding/call asset behavior.
- Build offline conversion import from qualified leads/sold jobs.
- Keep form submits secondary until CRM or manual lead-quality scoring confirms they are worth bidding on.

Do not:

- Scale budgets aggressively.
- Activate PMax.
- Add Broad Match.

### 2. TimberTech Has Campaign Intent But No Dedicated Landing Page

Problem:

- Competitors mention TimberTech heavily.
- LDN uses TimberTech claims, but Ads Brain found no dedicated `/timbertech-decks` landing page.
- TimberTech keywords landing on `/composite-decks` create weaker keyword-to-LP match.

Solution:

- Build `/timbertech-decks`.
- Mirror the `/trex-decks` structure.
- Include H1/title with TimberTech, AZEK, Northern Virginia, certification, cost ranges, project examples, FAQs, and service-area copy.
- After page is live, keep TimberTech/AZEK in its own ad group.

### 3. Replacement Page Is Too Light For High-Ticket Spend

Problem:

- Replacement campaign is live at 45/day.
- Existing replacement page is usable but thinner than the best service pages.
- Replacement users need before/after, timeline, permit/HOA, rebuild-vs-resurface education, and minimum project filter.

Solution:

- Upgrade `/services/deck-replacement`.
- Add:
  - "Projects from 15k+" above the fold.
  - Before/after block.
  - timeline.
  - permit + HOA handling.
  - wood-to-composite section.
  - FAQ.
  - call CTA near top.

### 4. Mobile Call Conversion Needs A Sticky CTA

Problem:

- Calls-first account, but service pages do not all expose phone CTA high enough for mobile paid traffic.
- Search visitors are hot; every scroll before contact leaks calls.

Solution:

- Add site-wide sticky mobile CTA: Call + Get Quote.
- Add above-the-fold call CTA block to top paid landing pages:
  - `/composite-decks`
  - `/trex-decks`
  - `/services/deck-replacement`
  - `/services/deck-resurfacing`
  - future `/timbertech-decks`

### 5. Repair Must Stay Separate

Problem:

- Repair attracts cheaper intent.
- If mixed into Composite/Replacement, it can consume budget and teach Smart Bidding to chase low-ticket calls.

Solution:

- Keep repair negatives on Composite and Replacement.
- If repair is desired, create a separate campaign later:
  - `SRCH | Repair | 3 Counties | Calls`
  - Budget: 10-20/day only after main campaigns stabilize.
  - Strict keywords: exact/phrase.
  - Landing page: `/deck-repair`.
  - Strong minimum-job filter if cheap repairs are unwanted.

### 6. Branded Is Correct But Needs Review Completion

Problem:

- Previous RSA ads had `PHONE_NUMBER_IN_AD_TEXT`.
- Clean replacements are in Google review.

Solution:

- Wait for review.
- If still limited, inspect topic.
- Keep phone only in call asset.
- Do not put `(571) 655-7207` in ad headlines/descriptions.

## Budget Recommendation

Keep current budget for the first learning window:

- Composite: 90/day
- Replacement + Resurfacing: 45/day
- Branded: 15/day
- PMax: 0/day
- Repair: 0/day for now

Do not change until:

- At least 7 days of clean Search data.
- Search terms reviewed.
- Branded review clears.
- Qualified call quality is checked.

If Composite gets high-quality calls and Replacement does not:

- Move 10/day from Replacement to Composite.

If Replacement produces stronger sales conversations:

- Move 10/day from Composite to Replacement.

If Branded spends less than 15/day:

- Leave budget; unused budget does not force spend if demand is low.

## First 7-Day Action Plan

Day 1-2:

- Confirm Branded policy review.
- Confirm call asset is serving.
- Check search terms daily.
- Add negatives for repair/cheap/jobs/materials/DIY/handyman.

Day 3-4:

- Review actual call details: duration, caller area, missed calls.
- Add exact versions of any high-intent converting terms.
- Add LP CTA fixes if not already shipped.

Day 5-7:

- Decide whether Replacement and Resurfacing should split into two campaigns or remain together.
- Keep PMax paused.
- No tCPA yet.

## Priority Solution Queue

P0:

- Close tracking gate.
- Confirm call asset + forwarding.
- Keep Branded policy clean.

P1:

- Build `/timbertech-decks`.
- Strengthen `/services/deck-replacement`.
- Add sticky mobile CTA.
- Add above-the-fold phone CTA to paid LPs.
- Run search-term negatives 2-3 times/week.

P2:

- Build outdoor-living hub.
- Add schema to under-deck and gazebo/pergola pages.
- Improve Trex page with pricing and stronger inclusions.

P3:

- Consider separate Repair campaign only after the main campaigns have stable qualified-call data.

## Decision

Recommended immediate decision: keep budget as-is, do not add more campaigns, and focus the next sprint on tracking + LP conversion fixes. This is the highest-confidence path because the account is newly launched and still in learning.

