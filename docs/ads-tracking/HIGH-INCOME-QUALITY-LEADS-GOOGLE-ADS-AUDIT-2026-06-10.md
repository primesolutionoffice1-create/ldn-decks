# High-Income Quality Leads Google Ads Audit - 2026-06-10

Business: Loudoun Decks  
Target: high-income Northern Virginia homeowners  
Goal: fewer low-quality leads, more premium booked estimates, cleaner Smart Bidding signal  

## Audit Basis

This audit is based on:

- Google Ads read-only audit for account `943-907-4542` covering May 10 - Jun 8, 2026.
- Current Google Ads import pack in `google-ads-import/`.
- Live fixes already completed: primary form conversion fix, 23 campaign-level negative keywords posted, GTM `lead_confirmed` verification.
- Current local validation:
  - `npm run ads:validate-imports`: pass.
  - `npm run measurement:gate`: pass technically, but `scalingGate=RED`.
  - `live-lead-outcomes-2026-06-10.csv`: valid structure, 0 real lead rows.
- External market context:
  - Loudoun County median household income is about `$181.8k` for 2020-2024 per USAFacts / Census-derived data.
  - Fairfax County median household income is about `$153.6k`.
  - Prince William County median household income is about `$131.4k`.
  - Northern Virginia is one of the strongest income markets in the U.S.; Loudoun and Fairfax should receive priority over broad equal county allocation.

Sources:

- https://usafacts.org/answers/what-is-the-income-of-a-us-household/county/loudoun-county-va/
- https://usafacts.org/answers/what-is-the-income-of-a-us-household/county/fairfax-county-va/
- https://usafacts.org/answers/what-is-the-income-of-a-us-household/county/prince-william-county-va/
- https://www.novaregiondashboard.com/median-household-income

## Executive Diagnosis

The account is now technically cleaner than it was, but it is not yet ready for aggressive scaling.

The main weakness is not campaign structure. The structure is directionally good: Search-first, service-intent campaigns, exact/phrase keywords, Search Partners off, Display expansion off, and conversion tracking now points toward `lead_confirmed`.

The main weakness is that Google still does not have enough trusted quality data. For a premium contractor, raw calls and raw forms are not enough. The account must learn which clicks become:

- qualified homeowner leads,
- estimate appointments,
- premium project scopes,
- won jobs,
- real revenue.

Until that feedback exists, Maximize Conversions can still chase cheap form/call activity instead of high-ticket jobs.

## Health Score

Estimated Google Ads quality-lead readiness score: `68/100`.

Breakdown:

| Area | Score | Status |
| --- | ---: | --- |
| Campaign structure | 82 | Solid foundation |
| Keyword intent | 74 | Good, but some cost/material risk remains |
| Negative keyword control | 72 | Improved, but live legacy broad negatives need review |
| Geo strategy | 55 | Too broad for high-income homeowner objective |
| Ad copy qualification | 70 | Good premium signals, but still too much "free estimate" language |
| Landing page alignment | 64 | Functional, but not premium-market segmented enough |
| Conversion tracking | 78 | Strong wiring, still needs live conversion proof |
| Revenue feedback / offline quality | 30 | Biggest gap; no real lead rows yet |
| Smart Bidding readiness | 45 | Not ready for tCPA/tROAS or budget scaling |

## Critical Weak Spots

### 1. No Revenue Feedback Loop Yet

Problem:

The account can now track `lead_confirmed`, but it still has no real rows showing which leads were qualified, scheduled, won, lost, or high-value. The live tracker exists but has 0 real rows.

Why it hurts:

Google can optimize only toward the conversion actions it sees. If the primary signal is still just a call or form, the algorithm may prefer lower-friction leads instead of homeowners with `$25k-$100k+` projects.

Solution:

- Treat `docs/ads-tracking/live-lead-outcomes-2026-06-10.csv` as the temporary source of truth.
- Every lead must be classified within 24 hours.
- Add real outcomes: qualified, estimate scheduled, estimate completed, proposal sent, won/lost, revenue.
- Upload offline conversions only after the rows are clean and validated.

Priority: Critical.

Do before scaling.

### 2. Geo Targeting Is Too Equal Across Unequal Markets

Problem:

The import pack targets Loudoun, Fairfax, and Prince William equally at the campaign level. That is clean operationally, but not ideal for high-income homeowner acquisition.

Why it hurts:

Loudoun and Fairfax have stronger premium-homeowner density. Prince William has good pockets, but more variation. Equal county targeting can dilute spend into lower-ticket or less profitable areas.

Solution:

Restructure launch priority into market tiers:

| Tier | Priority Areas | Strategy |
| --- | --- | --- |
| Tier 1 | Ashburn, Brambleton, Lansdowne, Belmont, Broadlands, South Riding, McLean, Great Falls, Vienna, Oakton, Clifton | Highest bids/budget once data supports it |
| Tier 2 | Leesburg, Purcellville, Reston, Herndon, Chantilly, Centreville, Fairfax, Burke, Springfield | Normal bids; qualify by budget/form |
| Tier 3 | Gainesville, Haymarket, Bristow, Nokesville, Lake Ridge, Woodbridge | Test carefully; require strong query and budget qualification |

Near-term action:

- Keep county targeting for operational simplicity today.
- Add location reporting review after the next 5-10 leads.
- Move budget toward Tier 1 locations only after lead quality confirms.

Priority: High.

### 3. Smart Bidding Is Premature For Premium Quality Optimization

Problem:

The structure uses Maximize Conversions. That is acceptable as a temporary launch strategy, but not enough for revenue-quality optimization.

Why it hurts:

Maximize Conversions will not know the difference between:

- a `$12k` price shopper,
- a handyman repair lead,
- a serious `$65k` composite deck + porch homeowner,
- a booked project.

Solution:

Keep current bidding conservative until:

- at least 30 clean primary conversions in 30 days per major campaign, or
- at least 15 qualified lead/offline conversions in 30 days for a tightly grouped campaign, and
- duplicate rate under 2%,
- unattributed lead rate under 20%,
- at least 5 won or strongly qualified opportunities with click IDs.

Do not activate:

- tCPA,
- tROAS,
- broad match expansion,
- AI Max,
- budget scaling,
- PMax prospecting.

Priority: Critical.

### 4. Campaigns Do Not Yet Fully Cover Premium Outdoor Living Demand

Problem:

The current Search pack covers:

- composite decks,
- deck builders,
- replacement/resurfacing,
- branded.

It does not yet have dedicated premium campaigns for:

- screened porches,
- covered decks,
- outdoor living spaces,
- pergolas,
- patios,
- deck + porch packages,
- estate-tier backyard transformations.

Why it hurts:

High-income homeowners often search by project outcome, not only "deck builder near me." A premium homeowner may search for:

- screened porch contractor near me,
- covered deck builder,
- outdoor living contractor,
- deck and patio contractor,
- backyard renovation contractor,
- pergola builder near me.

Solution:

Add these only after tracking stabilizes:

1. `SRCH | Screened Porch | Premium NoVA | Calls`
2. `SRCH | Covered Deck + Outdoor Living | Premium NoVA | Calls`
3. `SRCH | Pergola + Patio Addons | Premium NoVA | Calls`

Use exact/phrase only. Keep budgets small until quality proves out.

Priority: High, but after lead validation.

### 5. "Free Estimate" Language Can Attract Low-Commitment Leads

Problem:

Current ad copy and assets use "Free Deck Estimate" and "Free Consultation" often. This is common, but for premium targeting it can pull in price shoppers.

What is good:

The ads already include `Projects From $15k+`, permits/HOA, Trex/TimberTech, and premium language.

What is weak:

`$15k+` is useful as a floor, but it may still invite smaller jobs. For premium homeowners, the stronger filter is project scope and value, not "free."

Solution:

Replace some "free" language with higher-intent CTAs:

- Request A Written Estimate
- Schedule A Design Call
- Plan A Premium Deck
- Discuss Your Project Scope
- Get A Build-Ready Quote
- Premium Composite Projects
- Full Builds & Replacements

Recommended budget qualifiers:

- Composite / Trex / TimberTech: "Premium projects from $20k+"
- Replacement / resurfacing: "Serious projects from $15k+"
- Outdoor living / screened porch: "Outdoor living projects from $30k+"
- Estate-tier pages: "Premium backyard projects from $40k+"

Priority: Medium-high.

### 6. Cost Keywords Need Tighter Lead Qualification

Problem:

The Composite Cost ad group is useful, but cost queries can split into two groups:

- good: homeowners budgeting a serious project,
- bad: low-budget research, DIY, materials-only shoppers.

Solution:

Keep cost keywords, but add stronger filters:

- Ad copy must say full installed projects, not material-only.
- Landing page should show realistic ranges and push serious homeowners to written estimate.
- Add negatives for material-only and DIY modifiers.
- Track lead quality separately for cost pages.

Watch closely:

- `composite deck cost`
- `trex deck cost`
- `timbertech deck cost`
- `azek deck cost`

Do not scale cost ad groups until they prove qualified estimate rate.

Priority: High.

### 7. Legacy Broad Negative Keywords In Live Account Need Review

Problem:

The live UI note says the existing account contains many old Broad-match negative keywords. New imports now avoid broad negatives, but old negatives may still exist.

Why it hurts:

Broad negatives can accidentally block profitable searches. For example, a broad negative around `repair`, `porch`, or `patio` can block adjacent high-ticket projects if the account later expands into outdoor living.

Solution:

- Export all live negative keywords.
- Classify into safe, risky, remove, move-to-campaign.
- Convert risky broad negatives into exact/phrase where appropriate.
- Keep account-level negatives only for universally bad intent: jobs, DIY, free, plans, materials only, Home Depot, Lowes, classes.

Priority: High.

### 8. Landing Pages Are Good For SEO, But Ads Need Premium Segmentation

Problem:

The site has strong SEO content and city pages, but the ads currently point many high-intent terms to a small set of general pages:

- `/composite-decks/`
- `/deck-builders-loudoun/`
- `/services/deck-replacement/`
- `/services/deck-resurfacing/`
- `/contact/`

Why it hurts:

High-income homeowners should land on pages that mirror their intent and geography. A McLean/Great Falls homeowner should not get the same sales path as a broad "deck builders near me" user.

Solution:

Build or use dedicated ad landing pages:

| Landing Page | Purpose |
| --- | --- |
| `/mclean-great-falls-premium-deck-budget/` | Premium Fairfax wealth cluster |
| `/deck-builder-ashburn-va/` | Loudoun/Ashburn premium homeowner intent |
| `/lansdowne-hoa-deck-rules/` | Estate/HOA-heavy replacement and upgrade intent |
| `/screened-porch-builder-northern-virginia/` | Screened porch campaign |
| `/covered-deck-builder-northern-virginia/` | Covered deck / outdoor living campaign |
| `/composite-deck-cost-northern-virginia/` | Cost traffic with qualification |

Priority: Medium-high.

### 9. Form Qualification Is Close, But Budget Should Be Required

Problem:

The form already captures timeline, service, budget range, material, HOA/permit, city, state, ZIP. That is strong. But budget, city, and ZIP are not required.

Why it hurts:

For high-income quality leads, missing budget/location means sales has to qualify manually and Google gets weaker offline feedback.

Solution:

Make these required after confirming UX impact:

- budget range,
- city,
- ZIP,
- homeowner/property owner question,
- project type.

Add one field:

- "Are you the homeowner / authorized decision maker?"

Recommended budget options:

- Under `$15k` - route to nurture or lower priority.
- `$15k-$25k`
- `$25k-$50k`
- `$50k-$100k`
- `$100k+`
- Not sure, but planning a full project.

Priority: High for quality, medium for UX risk.

### 10. Call Schedule May Miss Premium Homeowners

Problem:

Call assets are scheduled Monday-Friday, 8am-6pm. Premium homeowners often research after work or on weekends.

Solution:

Do not blindly extend call-only hours unless calls can be answered. Instead:

- Keep call extensions during answerable hours.
- Ensure form CTA is strong after hours.
- Consider evening/weekend form-focused ad schedule once tracking proves lead quality.
- If call answering improves, test Saturday 9am-2pm.

Priority: Medium.

## Recommended High-Income Campaign Architecture

Use this after current tracking validates 5-10 real leads.

| Campaign | Purpose | Budget Priority |
| --- | --- | --- |
| `SRCH | Composite Premium | Loudoun/Fairfax | Leads` | Trex, TimberTech, AZEK, composite builder/installer intent | Highest |
| `SRCH | Replacement + Resurface | Premium NoVA | Leads` | Old wood deck replacement, composite upgrades | High |
| `SRCH | Outdoor Living | Premium NoVA | Leads` | Covered decks, screened porches, outdoor living packages | High |
| `SRCH | Estate Communities | Loudoun/Fairfax | Leads` | Ashburn, Brambleton, Lansdowne, Belmont, McLean, Great Falls, Vienna | Medium-high |
| `SRCH | Branded | NoVA | Leads` | Brand protection | Always on, small |
| `RMKT | PMax | Qualified Visitors | Leads` | Only remarketing, no prospecting | Later |

## High-Intent Keyword Expansion

Add later, not before tracking is stable:

### Premium Composite

- `[premium composite deck builder]`
- `[trex deck installer near me]`
- `[timbertech deck builder near me]`
- `[azek deck contractor]`
- `"custom composite deck builder"`
- `"high end deck builder"`

### Outdoor Living

- `[screened porch contractor near me]`
- `[covered deck builder]`
- `[outdoor living contractor near me]`
- `[deck and patio contractor]`
- `"screened porch builder"`
- `"covered deck contractor"`

### Premium Geo

- `[deck builder mclean va]`
- `[deck builder great falls va]`
- `[deck builder vienna va]`
- `[deck builder ashburn va]`
- `[deck builder brambleton va]`
- `[deck builder lansdowne va]`
- `[deck builder haymarket va]`

## Negative Keyword Recommendations

Keep or add at account level:

- diy
- how to
- plans
- design ideas
- free
- cheap
- low cost
- wholesale
- materials
- materials only
- boards
- decking boards
- lumber
- home depot
- lowes
- menards
- jobs
- hiring
- salary
- classes
- training
- used
- craigslist
- permit only

Campaign-level:

- Composite: block material-only terms, repair-only terms, staining/sealing/washing.
- Deck Builders: block small repair, handyman, fence, broad patio/hardscape until dedicated campaigns exist.
- Replacement/Resurfacing: block refinishing, staining, pressure washing, minor repair.
- Outdoor Living future campaign: block cheap patio, stamped concrete budget-only, DIY pergola kits.

Do not add broad negative `decking`, `porch`, `patio`, `repair`, or `cost` account-wide.

## Budget Recommendation

Do not increase total spend yet.

Best protected budget allocation for quality:

| Campaign | Daily Budget | Reason |
| --- | ---: | --- |
| Composite | `$70-$80` | Highest premium material intent |
| Replacement + Resurfacing | `$35-$45` | Good homeowner upgrade intent |
| Branded | `$10-$15` | Protect demand |
| Deck Builders | `$0-$35` | Only if budget allows; broadest non-brand risk |
| PMax Remarketing | `$0-$10` | Only after clean audience and conversion proof |

For high-income lead quality, Composite + Replacement should win budget before broad Deck Builder traffic.

## 7-Day Action Plan

### Day 1-2

- Do not change budgets.
- Do not change bidding.
- Export live negative keywords and audit old broad negatives.
- Start filling `live-lead-outcomes-2026-06-10.csv` for every real lead.
- Confirm every form lead has `event_id` and, when available, click ID.

### Day 3-4

- Review real search terms.
- Add only exact/phrase negatives from actual bad terms.
- Mark each lead as qualified/not qualified.
- Split notes by city, service, budget, and source.

### Day 5-7

- Decide if cost ad group is producing qualified homeowners or research traffic.
- Decide if Prince William should stay equal priority or be narrowed to better pockets.
- Prepare offline conversion upload only if rows are clean.
- Draft premium outdoor living campaign, but keep paused.

## 30-Day Plan

- Collect 30+ real lead records.
- Identify winning cities and services.
- Upload qualified lead / estimate scheduled conversions only after validation.
- Build premium geo landing path for Ashburn/Brambleton/Lansdowne/McLean/Great Falls/Vienna.
- Rewrite ad copy to reduce "free estimate" overuse.
- Add screened porch/outdoor living campaign if search demand and landing page are ready.

## 90-Day Plan

- Move from raw leads to qualified-lead optimization.
- Import estimate scheduled and won-job offline conversions.
- Consider tCPA only after enough qualified conversion volume exists.
- Consider tROAS only after closed revenue data is consistently uploaded.
- Scale Tier 1 markets first.
- Use SEO page performance to build better Ads landing pages.

## Final Recommendation

The next strategic move is not more budget. It is quality filtration.

Best path:

1. Keep current Search foundation.
2. Audit legacy broad negatives.
3. Capture every real lead outcome.
4. Prioritize Loudoun/Fairfax premium cities.
5. Require stronger budget/location qualification.
6. Upload only qualified offline conversions.
7. Scale after Google can see which clicks become premium jobs.

The account should optimize for premium booked projects, not raw lead volume.
