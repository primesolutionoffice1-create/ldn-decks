# 1. Google Search Console Indexing Triage

Status: Active
Owner: SEO operator
Cadence: Daily until the 173 non-indexed pages are classified, then weekly

## What is already clean

- `https://ldndecks.com/sitemap.xml` is successful.
- `https://ldndecks.com/news-sitemap.xml` is successful.
- `https://ldndecks.com/image-sitemap.xml` is successful.
- IndexNow accepted 180 submitted URLs on 2026-05-15.

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
