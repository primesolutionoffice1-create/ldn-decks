---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: log
title: "Log"
updated: "2026-06-11"
---

# Log

- 2026-06-11 - Aligned attribution runbooks with current tracking code state: shared ContactHome/ContactForm `useLeadSubmit` flow, event ID propagation, browser Meta Pixel source, `event_source_url` forwarding, CAPI IP/User-Agent enrichment, and anti-duplicate `lead_confirmed` behavior. Verification passed: stale-risk `rg` scan, `npm run measurement:gate`, `npm run ads:validate-imports`, `npm run scaling:blocker-exit:validate`, `npm run lint`, and `npm run build`. No Google Ads, GTM, budget, bid strategy, or production deploy changes were made.
- 2026-05-16 - Hardened Google Ads import validation after tracking sweep: confirmed `src` has no raw `tel:` anchors, both site lead forms use `useLeadSubmit`, `/thank-you` fires `lead_confirmed` from the shared event ID, and `ads:validate-imports` now fails on wrong call phone, wrong call schedule, repair keyword leakage into Composite/Replacement, missing repair-separation negatives, or ad-group final URL drift. Verification passed: `npm run ads:validate-imports`, `npm run lint`, `npm run build`.
- 2026-05-16 - Completed current 1-to-5 implementation pass: active-only Google Ads search-term review, no aggressive new negatives due low data, Branded policy status appears clean in active Ads view, resurfacing/replacement pages stayed high-ticket only, phone-first CTA fixed through tracked `CallLink`, resurfacing pricing aligned to $15k+ across support pages, `/deck-builder-northern-virginia` hub verified in build/sitemap, lint/schema/build passed.
- 2026-05-16 - Completed live 1-5 QA sprint: implemented/verified high-confidence exact negatives in active Composite and Replacement + Resurfacing campaigns; validated GTM Preview phone and form conversion firing; confirmed active Google Ads spend at $150/day across three Search campaigns; verified priority Ads landing pages, robots, and sitemap; recorded remaining Search Console issues for old failed sitemap submissions, 9 404 records, and mobile LCP groups at 2.7s.
- 2026-05-15 - Hardened SEO schema and entity citations: removed deprecated HowTo, centralized JSON-LD emitters, aligned Yelp/BBB/BuildZoom/Loudoun Chamber/MapQuest references, validated schema, built successfully, pushed to `main`, and submitted IndexNow for 181 URLs.
- 2026-05-15 - Added first-pass Google Ads search-term hygiene queue with two high-confidence exact negatives and hold guidance for core deck intent pending real post-cleanup lead data.
- 2026-05-15 - Synthesized Ads Brain deliverables with health score 57.
- 2026-05-15 - Imported Google Ads export 11-campaign-negative-keywords.csv with 55 rows.
- 2026-05-15 - Imported Google Ads export 10-location-targets.csv with 15 rows.
- 2026-05-15 - Imported Google Ads export 09-call-asset.csv with 5 rows.
- 2026-05-15 - Imported Google Ads export 08-pmax-remarketing-assets.csv with 1 rows.
- 2026-05-15 - Imported Google Ads export 07-callouts.csv with 32 rows.
- 2026-05-15 - Imported Google Ads export 06-sitelinks.csv with 16 rows.
- 2026-05-15 - Imported Google Ads export 05-shared-negative-keywords.csv with 38 rows.
- 2026-05-15 - Imported Google Ads export 04-responsive-search-ads.csv with 22 rows.
- 2026-05-15 - Imported Google Ads export 03-keywords.csv with 135 rows.
- 2026-05-15 - Imported Google Ads export 02-ad-groups.csv with 11 rows.
- 2026-05-15 - Imported Google Ads export 01-campaigns.csv with 5 rows.
- 2026-05-15 - Synthesized Ads Brain deliverables with health score 57.
- 2026-05-15 - Captured SpyFu PPC keyword intelligence for `ldndecks.com` and stored the observed rows under `.raw/sources/spyfu/2026-05-15-spyfu-ldndecks-keywords-observed.csv`.
- 2026-05-15 - Marked Day 0 Tracking and Privacy Gate as blocked using the local tracking audit as evidence.

Related: [[Hot]] | [[Index]] | [[Dashboard]]

- 2026-05-15 - Enriched market context for https://www.ldndecks.com.
- 2026-05-15 - Imported Google Ads export 11-campaign-negative-keywords.csv with 33 rows.
- 2026-05-15 - Imported Google Ads export 10-location-targets.csv with 12 rows.
- 2026-05-15 - Imported Google Ads export 09-call-asset.csv with 4 rows.
- 2026-05-15 - Imported Google Ads export 08-pmax-remarketing-assets.csv with 1 rows.
- 2026-05-15 - Imported Google Ads export 07-callouts.csv with 24 rows.
- 2026-05-15 - Imported Google Ads export 06-sitelinks.csv with 12 rows.
- 2026-05-15 - Imported Google Ads export 05-shared-negative-keywords.csv with 38 rows.
- 2026-05-15 - Imported Google Ads export 04-responsive-search-ads.csv with 18 rows.
- 2026-05-15 - Imported Google Ads export 03-keywords.csv with 105 rows.
- 2026-05-15 - Imported Google Ads export 02-ad-groups.csv with 9 rows.
- 2026-05-15 - Imported Google Ads export 01-campaigns.csv with 4 rows.
- 2026-05-15 - Rendered Ads Brain template for LDN Decks.
- 2026-05-15 - Scaffolded LDN Decks Ads Brain for LDN Decks.
