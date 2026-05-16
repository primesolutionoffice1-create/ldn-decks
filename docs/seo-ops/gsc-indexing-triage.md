# 1. Google Search Console Indexing Triage

Status: Active
Owner: SEO operator
Cadence: Daily until the 173 non-indexed pages are classified, then weekly

## Current GSC snapshot

Observed in Google Search Console on 2026-05-15.
GSC report last update: 2026-05-10.

| Status | Count |
|---|---:|
| Indexed | 239 |
| Not indexed | 300 |
| Not indexed reasons | 7 |

Current non-indexed breakdown:

| Priority | Reason | Source | Validation | Pages | Treatment |
|---:|---|---|---|---:|---|
| 1 | Not found (404) | Website | Failed | 9 | Fix or redirect first |
| 2 | Page with redirect | Website | Not Started | 106 | Keep out of sitemap; validate intentional redirects |
| 3 | Excluded by `noindex` tag | Website | Not Started | 10 | Confirm intentional noindex only |
| 4 | Crawled - currently not indexed | Google systems | Not Started | 55 | Improve content/internal links or consolidate |
| 5 | Duplicate, Google chose different canonical than user | Google systems | Not Started | 13 | Fix canonical conflict or consolidate |
| 6 | Alternate page with proper canonical tag | Website | Not Started | 1 | Usually OK if canonical is correct |
| 7 | Discovered - currently not indexed | Google systems | Passed | 106 | Add internal links/content priority; request indexing only for strong URLs |

## What is already clean

- `https://ldndecks.com/sitemap.xml` is successful.
- `https://ldndecks.com/news-sitemap.xml` is successful.
- `https://ldndecks.com/image-sitemap.xml` is successful.
- IndexNow accepted 180 submitted URLs on 2026-05-15.

## Fixes applied from this snapshot

2026-05-16 internal-link pass:
- Strengthened homepage crawl paths to priority URLs from the manual inspection queue:
  - `/deck-builder-ashburn-va`
  - `/deck-builder-leesburg-va`
  - `/deck-builder-herndon-va`
  - `/deck-builder-reston-va`
  - `/deck-builder-mclean-va`
  - `/deck-builder-vienna-va`
  - `/deck-repair-loudoun-county`
  - `/press`
  - `/social`
  - `/reviews`
- Converted `HomeQuickLinks` from a client component with `styled-jsx` to a server-rendered component with a CSS module. The links now render as crawlable homepage anchors without adding client-side JavaScript for that section.
- Local production HTML verification confirmed all priority links appear as `href` anchors on `/`.

2026-05-16 canonical/sitemap pass:
- Live sitemap audit checked 183 URLs for HTTP status, redirect headers, canonical tags, and noindex signals.
- Found 1 canonical mismatch in the submitted sitemap:
  - `https://ldndecks.com/deck-design-ideas-northern-virginia-2026`
  - canonical: `https://ldndecks.com/deck-design-ideas-2026`
- Removed the canonicalized URL from the main sitemap and moved its image-sitemap entry to the canonical `/deck-design-ideas-2026` URL.
- Reason: submitted sitemap URLs should be canonical, indexable `200` URLs only. Keeping canonicalized duplicates in sitemap can feed the `Duplicate, Google chose different canonical than user` bucket.

2026-05-16 LCP pass:
- Reduced critical-path competition for the two Search Console mobile LCP groups:
  - Homepage keeps only the actual hero image as an image preload.
  - `/composite-deck-cost-northern-virginia` no longer preloads the below-the-fold `/showcase/img09.jpeg` image.
  - Header logo no longer uses `next/image` priority on every route; it remains eager but with low fetch priority.
  - Pinterest base tag moved from `afterInteractive` to `lazyOnload` so it does not compete with first-render mobile LCP. Lead tracking remains tied to the post-submit lead confirmation flow.
- Local production HTML verification:
  - `/` image preloads: `/home-page-ldn.webp` only.
  - `/composite-deck-cost-northern-virginia` image preloads: none.

2026-05-16:
- Re-verified legacy sitemap URLs live:
  - `/page-sitemap.xml` -> `/sitemap.xml`
  - `/post-sitemap.xml` -> `/sitemap.xml`
  - `/sitemap_index.xml` -> `/sitemap.xml`
  - `/sitemap-index.xml` -> `/sitemap.xml`
- Confirmed several Search Console 404 rows are stale because the live site now redirects them:
  - `/best-composite-decking-virginia-trex-timbertech-fiberon` -> `/trex-vs-timbertech-vs-azek`
  - `/choosing-right-deck-material-wood-vs-composite` -> `/composite-deck-vs-wood-deck-virginia`
  - `/top-decks-build-near-you/deck-builder-in-aldie` -> `/near-you/loudoun-county/aldie`
  - `/top-decks-build-near-you/deck-builder-in-annandale` -> `/near-you/fairfax-county/annandale`
- Removed the homepage redirect for `/home-2`; legacy/junk URLs now return `410 Gone` with `X-Robots-Tag: noindex` where appropriate:
  - `/home-2`
  - `/drafts`
  - `/marker-listing`
  - `/comments/feed`
  - `/wp-login.php`
  - `/elementskit-content/*`
  - `/wp-content/plugins/*`
- Reason: these URLs have no clean modern equivalent and should be removed from the index instead of consolidating junk signals into the homepage.

2026-05-15:
- Added 301 redirects from legacy sitemap URLs to the canonical `/sitemap.xml`:
  - `/page-sitemap.xml`
  - `/post-sitemap.xml`
  - `/sitemap_index.xml`
  - `/sitemap-index.xml`
- Reason: Google Search Console still polls old sitemap submissions, and the first three returned 404 before this fix.
- Verified the live sitemap after deploy: 183 URLs, 0 non-200 sitemap URLs.
- Ran internal link crawl from live sitemap pages: 447 internal links checked, 0 real internal 404 links found.

## Do first in GSC

Open Page indexing and export or inspect the non-indexed groups. Classify every URL into one of these actions:

| GSC reason | Action |
|---|---|
| Discovered - currently not indexed | Improve internal links/content, then request indexing |
| Crawled - currently not indexed | Improve page quality or consolidate |
| Duplicate without user-selected canonical | Verify canonical target; remove duplicate from sitemap if needed |
| Alternate page with proper canonical | Leave alone if canonical is correct |
| Not found / 404 | Remove from sitemap and fix internal links |
| Soft 404 | Expand page or redirect to stronger parent |
| Excluded by noindex | Keep only if intentionally private/utility |

## Manual URL inspection queue

Request indexing in this order only after each URL returns 200, has canonical, and is in sitemap:

1. `https://ldndecks.com/`
2. `https://ldndecks.com/deck-builders-loudoun`
3. `https://ldndecks.com/composite-decks`
4. `https://ldndecks.com/get-estimate`
5. `https://ldndecks.com/deck-builder-herndon-va`
6. `https://ldndecks.com/deck-builder-ashburn-va`
7. `https://ldndecks.com/deck-builder-leesburg-va`
8. `https://ldndecks.com/deck-builder-reston-va`
9. `https://ldndecks.com/deck-builder-mclean-va`
10. `https://ldndecks.com/deck-builder-vienna-va`
11. `https://ldndecks.com/deck-repair-loudoun-county`
12. `https://ldndecks.com/press`
13. `https://ldndecks.com/social`
14. `https://ldndecks.com/reviews`

## Decision rule

Do not request indexing for every excluded URL. Google should index the strongest pages, not every generated variant. Weak/duplicate location pages should be improved, redirected, or kept out of the sitemap.

Known canonical redirect:
- `https://ldndecks.com/ldn-decks-reviews-yelp` redirects to `https://ldndecks.com/reviews`; do not submit the redirected URL in sitemap or URL inspection.
