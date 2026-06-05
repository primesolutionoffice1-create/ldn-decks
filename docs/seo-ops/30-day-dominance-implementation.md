# LDN Decks 30-Day Local Dominance Implementation

Updated: 2026-06-01

## Operating Goal

Win more qualified deck, porch, patio, pergola, and outdoor-living leads across Northern Virginia by combining website SEO, Google Business Profile operations, citations, reviews, AI search extraction, and conversion tracking.

## Weekly Website Cadence

- Run `npm run seo:dominance` every Monday and save the generated dashboard in the vault.
- Run `npm run seo:deployment-guard` after every deployment. Passing means the live sitemap still has at least 721 URLs and 464 local-service URLs.
- Run `npm run seo:link-audit`, `npm run seo:validate-schema`, and `npm run seo:verify-robots -- --submit` after every SEO deployment.
- Run `npm run local:authority-pack` weekly to generate the GBP, review, citation, backlink, GSC, and AI/entity action pack.
- Inspect these priority URLs in Google Search Console first:
  - `https://ldndecks.com/service/ashburn`
  - `https://ldndecks.com/composite-decks/leesburg`
  - `https://ldndecks.com/deck-repair/fairfax`
  - `https://ldndecks.com/screened-porches/chantilly`
  - `https://ldndecks.com/outdoor-living/woodbridge`
- Use the top 20 local markets for weekly internal-linking and proof updates: Ashburn, Leesburg, Sterling, Aldie, South Riding, Brambleton, Fairfax, Chantilly, Centreville, Reston, McLean, Vienna, Great Falls, Gainesville, Haymarket, Bristow, Manassas, Woodbridge, Lake Ridge, and Outdoor Living in Woodbridge.

## Google Business Profile Execution

- Primary category target: Deck Builder.
- Secondary categories to review manually: Contractor, Patio Enclosure Supplier, Construction Company, Landscaper only if accurate.
- Services to list: Custom Deck Building, Composite Decks, Wood Decks, Deck Repair, Deck Replacement, Screened Porches, Pergolas, Patios, Outdoor Living, Deck Lighting, Railings, Under-Deck Patios.
- Appointment URL: `https://ldndecks.com/get-estimate?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=appointment`
- Website URL: `https://ldndecks.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=website`
- Publish one GBP post per week with one image or video, one service/city angle, and a CTA button. Do not place the phone number inside post text; use the native call button.

## GBP Post Rotation

1. Ashburn composite deck replacement: HOA-ready Trex/TimberTech planning.
2. Leesburg screened porch and covered deck planning for estate and historic-area homes.
3. Woodbridge outdoor living: deck, patio, pergola, lighting, and drainage plan.
4. Fairfax deck repair: ledger, stairs, railings, and structural safety inspection.
5. McLean and Great Falls premium deck budgets: AZEK, cable railing, lighting, and outdoor kitchen packages.

## Photo Upload Plan

- Upload 10+ photos weekly.
- Use filenames before upload that include service and city where true, for example `ashburn-composite-deck-railing.jpg`.
- Rotation: finished deck, before/after, railing detail, stairs, framing/inspection detail, screened porch, pergola, patio, lighting, team/showroom.
- Match photos to city pages when possible so future page proof blocks can reference real project media.

## Review System

- Ask for a review after final walkthrough, warranty handoff, or punch-list completion.
- Send one direct Google review link by text/email and one reminder 5-7 days later.
- Suggested ask: "Could you mention the city and what we built, such as a composite deck, screened porch, deck repair, or patio? It helps nearby homeowners understand the kind of project we completed."
- Reply to every review within 48 hours. Use natural city/service language without keyword stuffing.
- Track review request date, project city, service, customer, sent by, response status, and review URL.

## Citation and Backlink Targets

- Keep NAP consistent: Loudoun Decks, 13704 Winding Oak Cir, Centreville, VA 20121, (571) 655-7207, `https://ldndecks.com`.
- Priority citations: Google Business Profile, Apple Business Connect, Bing Places, Yelp, BBB, Houzz, BuildZoom, MapQuest, Loudoun Chamber, NADRA, Trex dealer profile, TimberTech installer profile.
- Local backlink targets: supplier profiles, chamber profiles, Realtor resource pages, BNI/referral partner pages, local sponsorships, community project stories, HOA resource pages where allowed.
- Log all outreach in `docs/seo/backlink-prospect-list.csv` or the active CRM.

## AI Search and Entity Rules

- Keep `llms.txt` concise and updated with priority URLs, service areas, pricing, certifications, founder proof, and contact paths.
- Keep `llms-full.txt` as the comprehensive extraction source for AI systems.
- Every important page should answer: cost, permit/HOA, material choice, timeline, who handles approval, and how to request an estimate.
- Do not publish unverifiable claims such as guaranteed rankings, guaranteed financing approval, or fake review counts.
