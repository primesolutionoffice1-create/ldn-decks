# Ahrefs SEO Action Log - 2026-05-13

Source: Ahrefs dashboard for `ldndecks.com` project `Ldndecks`.

## Collected Ahrefs Data

- Health Score: 96.
- Crawled URLs: 442.
- Redirects: 36.
- Broken/4xx URLs: 5.
- Domain Rating: 0.
- Referring domains: 100, up 58.
- Total visitors: 1.4K, up 1.4K.
- Organic traffic: 24, up 16.
- Organic keywords: 10-14 depending report view.
- Tracked keywords: 45.
- Rank buckets: 3 keywords in positions 1-3, 12 in positions 4-10, 9 in positions 11-20, 21 at 21+ or no-rank.

## High-Value Ranking Opportunities

- `deck contractors`: position 5, volume 11K, tracked traffic 496.
- `composite deck builder near me`: position 4, volume 300.
- `best deck builder in northern virginia`: position 4, volume 200.
- `trex deck builder near me`: position 5, volume 150.
- `deck builder virginia`: position 4, volume 80.
- `deck builder ashburn`: position 5, volume 30.
- `deck builders northern va`: position 10-14, volume 200-300.
- `deck contractor northern virginia`: position 4, volume 20.
- `deck builder woodbridge va`: position 15 in Rank Tracker, older Ahrefs organic report shows legacy URL lost.
- `screened in porch builder`: position 49, volume 1K.
- `screened porch contractor`: position 45, volume 600.

## Ahrefs Site Audit Issues

- 3 404 pages / 3 4XX pages.
- 13 orphan pages.
- 1 broken CSS asset: `/_next/static/css/e483df081785a1bc.css`, linked from `/services/concrete-washing`.
- 29 titles too long.
- 176 pages linking to redirects.
- 36 3XX redirects.
- 5 indexable pages not in sitemap.

## Referring Domain Findings

- Ahrefs shows 103 referring domains, but many are flagged as spam or zero-traffic directory/link-shop domains.
- Stronger useful referring domains include:
  - `bbb.org` DR 93.
  - `yellowpages.com` DR 89.
  - `birdeye.com` DR 85.
  - `dexknows.com` DR 78.
  - `yp.com` DR 73.
  - `loudounchamber.org` DR 53, with dofollow links.
  - `fenceadvisors.com` DR 39.
  - `localrepairsnow.com` DR 35.
  - `yellow411.org` DR 21.
  - `whosmypro.com` with 18 links.
- Many new May 2026 links are spam-pattern domains such as `.shop`, `seoexpress.*`, backlink stores, directory farms, and PBN-looking domains. These should not drive strategy; monitor only unless Google Search Console shows manual action or clear toxic-link patterns.

## Implemented Adjustments

- Rewrote homepage metadata around `deck contractor Northern Virginia` and `composite deck builder`.
- Expanded homepage schema with service catalog, area served, and `knowsAbout` terms based on Ahrefs keyword wins.
- Strengthened homepage copy for:
  - deck contractor Northern Virginia
  - composite deck builder near me
  - deck replacement / resurfacing
  - city-level deck builder pages
- Added direct internal links from homepage to:
  - `/composite-decks`
  - `/services/deck-replacement`
  - `/deck-resurfacing-vs-replacement`
  - `/screened-porch-builder-northern-virginia`
  - `/deck-builder-ashburn-va`
  - `/deck-builder-woodbridge-va`
  - `/deck-builder-mclean-va`
  - `/areas-we-serve`
- Added homepage quick-link cards for composite decks, deck replacement, and screened porch builder.
- Restored `/near-you` and county/city pages to sitemap generation by removing the overly broad sitemap exclusion.
- Replaced the IndexNow `/deck-replacement` redirect source with canonical `/services/deck-replacement`.

## Next Recommended Batch

- Strengthen legitimate local authority links instead of chasing generic backlinks:
  - Chamber profile optimization.
  - BBB profile completeness.
  - Local supplier/manufacturer partner pages.
  - Houzz/Angi/BuildZoom-style citations if already real business profiles.
  - Local project/case-study outreach in Loudoun, Fairfax, and Prince William.
- Export Ahrefs Site Audit `Title too long` report and shorten the 29 affected titles.
- Export Ahrefs `Page has links to redirect` report and replace redirecting internal hrefs with canonical URLs.
- Add or strengthen dedicated pages for:
  - `deck contractors`
  - `custom deck builder near me`
  - `local deck builder`
  - `screened in porch contractors near me`
- Run a fresh Ahrefs crawl after deployment to confirm:
  - indexable-not-in-sitemap count drops
  - links-to-redirect count drops
  - no new broken CSS assets persist after build asset refresh
