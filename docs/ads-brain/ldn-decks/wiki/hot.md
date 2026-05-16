---
brain_schema: "ads-brain.v1"
created: "2026-05-15"
type: "hot"
title: "Hot"
updated: "2026-05-16"
---

# Hot

## Last Updated

2026-05-16

## Key Recent Facts

- Client: LDN Decks
- Business type: local-service
- Site: https://www.ldndecks.com
- State: Synthesis complete across 22 imported source summaries. Ads Health Score: 57 (D). Code-side tracking fixes are complete, GTM Version 25 is live per `FINAL-ATTRIBUTION-SIGNOFF.md`, and Google Ads account-level conversion goals were cleaned up per `GOOGLE-ADS-CONVERSION-CLEANUP-LOG.md`. On 2026-05-16, GTM Preview verified live phone and form conversion tags firing once, active Google Ads spend was confirmed at $150/day across three Search campaigns, and high-confidence exact negatives were implemented/verified in Composite and Replacement + Resurfacing. SEO/schema hardening is live: deprecated HowTo schema removed, JSON-LD rendering centralized, duplicate FAQ risk remains 0, and citation/entity URLs were aligned for Yelp, BBB, BuildZoom, Loudoun Chamber, and MapQuest. The remaining blockers are 5-10 real-lead validation, Google Ads diagnostics after data accrues, mobile LCP at 2.7s groups in Search Console, and cleanup of old failed sitemap submissions / 404 index records.

## Recent Changes

- 2026-05-16 - Live QA sprint: verified form submit reaches `/thank-you` and fires GA4/Google Ads form conversion/user-provided-data tags once; verified phone click fires GA4 and Google Ads call conversion; confirmed active Google Ads budget is Composite $90/day, Replacement + Resurfacing $45/day, Branded $15/day; verified PMax/Demand Gen/repair campaigns are paused; live checked Ads landing pages, robots, sitemap, Core Web Vitals, Page indexing, and Sitemaps.
- 2026-05-16 - Google Ads waste control: `[contractors in my area]` was already present as exact campaign-level negative in Composite and Replacement + Resurfacing; `[restoration contractors near me]` was added as exact campaign-level negative to both campaigns. No broad negatives, budget changes, bidding changes, ad edits, or campaign status changes were made.
- 2026-05-15 - Synthesis complete across 22 imported source summaries. Ads Health Score: 57 (D).
- 2026-05-15 - Regenerated Google Ads import pack with `SRCH | Deck Builders | 3 Counties | Calls`, 2 ad groups, 30 exact/phrase keywords, 4 RSAs, call/location/assets, and campaign-level negatives for repair/patio/porch/fence/hardscaping/broad construction intent.
- 2026-05-15 - Local sign-off evidence says GTM Version 25 is live: lead tags fire once on `lead_confirmed`, Google Ads transaction ID uses `{{DLV - event_id}}`, and Enhanced Conversions user-provided data tag fired in Preview.
- 2026-05-15 - Google Ads conversion-goal cleanup completed: `Submit lead form` is account-default on 10/10 campaigns, `Phone call lead` remains account-default on 9/10, and `Leads from messages` was removed from account-default optimization.
- 2026-05-15 - Hardened site schema and entity trust: removed deprecated HowTo schema, centralized JSON-LD escaping, validated 0 duplicate FAQ risks / 0 unsafe JSON-LD warnings, added citation updates to `/social`, `/press`, sitemap, and sitewide `sameAs`; IndexNow submitted 181 URLs.
- 2026-05-15 - Added first-pass search-terms negative queue in `docs/ads-tracking/SEARCH-TERMS-NEGATIVE-KEYWORD-QUEUE.md`: exact negatives recommended for `[contractors in my area]` and `[restoration contractors near me]`; hold core deck intent until real post-cleanup data arrives.
- 2026-05-15 - Added ContactForm service selector, normalized ContactHome name data before Meta CAPI, verified no remaining raw JSX `tel:` anchors, and passed `npm run build`.

## Active Threads

- Complete or refresh [[Day 0 Tracking and Privacy Gate]].
- Review generated deliverables under [[Ads Health Scorecard]].
- Keep [[Approval Queue]] current before account execution.

## Next Action

Collect 5-10 real production leads, check Google Ads Enhanced Conversions diagnostics after 24-48h, then import real Google Ads performance/search terms. Next technical sprint: fix the Search Console hygiene items that remain visible today, starting with old failed sitemap submissions / 404 records and then the mobile LCP groups at 2.7s. Do not broad-negative repair/contractor/near-me terms.

## Account

- Client: LDN Decks
- Business type: local-service
- Site: https://www.ldndecks.com
