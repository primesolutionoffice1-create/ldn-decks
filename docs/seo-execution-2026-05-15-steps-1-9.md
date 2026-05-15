# LDN Decks SEO Execution Log - Steps 1-9

Date: 2026-05-15
Primary domain: https://ldndecks.com
Canonical NAP currently used on public indexed sources:

- Name: Loudoun Decks / LDN Decks
- Address: 13704 Winding Oak Cir, Centreville, VA 20121
- Phone: (571) 655-7207
- Email: office@ldndecks.com
- Website: https://ldndecks.com

## 1. Search Console cleanup

Status: Partially complete

Completed:
- Confirmed `https://ldndecks.com/sitemap.xml` is submitted and successful.
- Submitted `https://ldndecks.com/news-sitemap.xml` successfully.
- Submitted `https://ldndecks.com/image-sitemap.xml` successfully.

Remaining:
- Google Search Console still shows old historical sitemap entries:
  - `https://ldndecks.com/page-sitemap.xml`
  - `https://ldndecks.com/post-sitemap.xml`
  - `https://ldndecks.com/sitemap_index.xml`

Note:
- These are reporting noise, not an active indexation blocker. The current canonical sitemap set is successful.

## 2. Backlinks and citations

Status: In progress

Completed in code:
- Added verified citation/entity profiles to the sitewide `sameAs` graph:
  - Google Business Profile
  - Houzz
  - Yelp Centreville profile
  - BBB Centreville profile
  - BuildZoom
  - Loudoun Chamber
  - MapQuest
- Fixed public profile links that incorrectly pointed to Manassas-only guessed URLs.

Next submissions to complete manually where login/claim is required:
- Angi
- Nextdoor Business
- Porch
- Thumbtack
- HomeAdvisor
- Trex Find a Builder
- TimberTech/AZEK Find a Contractor
- NADRA directory profile optimization
- Apple Business Connect
- Bing Places

## 3. NAP consistency

Status: In progress

Completed:
- Preserved the Centreville address because indexed public sources currently align to Centreville.
- Removed the Manassas second-office row from the press facts table to avoid mixed NAP signals.
- Corrected Yelp/BBB profile URLs on public pages.

Rule:
- Do not publish a different primary address unless GBP, BBB, Yelp, chamber, and website are all changed together.

## 4. Google Business Profile

Status: Requires account-side content work

Weekly checklist:
- Add 5-10 real project photos.
- Publish 2 GBP posts per week.
- Add services: Deck Builder, Composite Deck Contractor, Deck Resurfacing, Screened Porch Builder, Pergola Builder, Fence Contractor.
- Add service areas: Ashburn, Leesburg, Sterling, Reston, Herndon, McLean, Great Falls, Vienna, Centreville, Fairfax, Chantilly, Manassas, Woodbridge, Gainesville, Haymarket.
- Request new reviews after each completed job.

## 5. Reindex priority pages

Status: IndexNow complete, GSC manual inspection still recommended

Completed:
- Submitted 180 production URLs through IndexNow.
- Confirmed Bing Webmaster has 0 sitemap errors, 0 warnings, and 400 URLs discovered.

Priority GSC manual URL inspection queue:
- `/`
- `/deck-builders-loudoun`
- `/deck-builder-ashburn-va`
- `/deck-builder-leesburg-va`
- `/deck-builder-herndon-va`
- `/deck-builder-reston-va`
- `/composite-decks`
- `/trex-decks`
- `/deck-repair-loudoun-county`
- `/get-estimate`
- `/press`
- `/social`
- `/ldn-decks-reviews-yelp`

## 6. Authority pages

Status: In progress

Completed:
- `/press` exists and now includes verified authority profiles.
- `/social` exists and now uses corrected citation URLs.
- `/ldn-decks-reviews-yelp` exists and is now included in sitemap.

Next pages/content upgrades:
- Add deeper project proof to Herndon, Reston, Ashburn, Leesburg, McLean, Vienna pages.
- Add more internal links from authority pages to city/service pages.
- Add concise media citation blocks to cost, permit, and material guides.

## 7. Google Ads and conversion tracking

Status: Needs dedicated Ads pass

Observed in Google Ads:
- Several conversion actions show `Needs attention` or `No recent conversions`.
- Strongest active primary signal: qualified calls.

Next:
- Audit GTM/Google Ads conversion actions.
- Make form submit and phone click tracking reliable.
- Keep primary conversions focused on qualified calls and real lead forms.

## 8. Backlink outreach

Status: Ready to execute

Target categories:
- Supplier/manufacturer profile links.
- Chambers and local business associations.
- Local sponsor pages.
- Home improvement blogs and local guides.
- Project/vendor testimonials.
- Before/after case studies submitted to Houzz/BuildZoom/NADRA.

Outreach asset already available:
- `/press` page with company facts and media contact.
- `/before-and-after`
- `/showcase`
- `/northern-virginia-deck-cost-report-2026`

## 9. Monitoring

Status: Active

Daily checks:
- Production sitemap status.
- IndexNow submission health.
- Robots/noindex regressions.
- Schema validation.
- Redirect errors.
- GSC/Bing index coverage where accessible.
- Citation/backlink progress.

Daily success metric:
- No sitemap errors.
- No accidental noindex.
- No broken canonical pages.
- At least one citation/backlink action completed per business day until Bing's inbound-link recommendation clears.
