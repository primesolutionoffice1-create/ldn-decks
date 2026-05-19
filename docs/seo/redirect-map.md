# LDN Decks Redirect Map

Status: recommendation/applied-local
Last updated: 2026-05-19
Scope: Google Search Console 404 cleanup, historical URL recovery, redirect chain prevention, crawl efficiency.

## Google Search Console 404 Examples

Source: Google Search Console > Pages > Not found (404), property `ldndecks.com`.
Report last update: 2026-05-14.
Affected pages: 9.

| Old URL | Likely original intent | SEO value | Relevant replacement page | Best redirect target | Should redirect | Confidence | Date added | Notes |
|---|---|---:|---|---|---|---:|---|---|
| `https://ldndecks.com/choosing-right-deck-material-wood-vs-composite/` | Legacy article about choosing wood vs composite decking | Medium | Yes | `/composite-deck-vs-wood-deck-virginia` | YES | 10 | 2026-05-19 | Exact topical match. Added slash-explicit rule to avoid trailing-slash hop. |
| `https://ldndecks.com/top-decks-build-near-you/deck-builder-in-aldie/` | Old Aldie city deck builder page | Medium | Yes | `/near-you/loudoun-county/aldie` | YES | 10 | 2026-05-19 | Exact city/service intent. Added slash-explicit rule to avoid trailing-slash hop. |
| `https://ldndecks.com/top-decks-build-near-you/deck-builder-in-annandale/` | Old Annandale city deck builder page | Medium | Yes | `/near-you/fairfax-county/annandale` | YES | 10 | 2026-05-19 | Exact city/service intent. Added slash-explicit rule to avoid trailing-slash hop. |
| `https://ldndecks.com/deck-projects-showcase/locationn-new-page-sample/` | Old/test showcase sample page | Low | Yes | `/showcase` | YES | 8 | 2026-05-19 | Showcase path intent is clear, but page slug is a sample/test URL. Redirect to gallery hub, not homepage. |
| `https://ldndecks.com/marker-listing/` | Old marker/listing test or plugin page | Low | No | none | NO | 9 | 2026-05-19 | Production returns `410 Gone` with `x-robots-tag: noindex`. Keep gone; no semantic replacement. |
| `https://ldndecks.com/drafts/` | Old draft directory | Low | No | none | NO | 9 | 2026-05-19 | Production returns `410 Gone` with `x-robots-tag: noindex`. Keep gone; no public search value. |
| `https://ldndecks.com/wp-*.php` | WordPress/security probe pattern | None | No | none | NO | 10 | 2026-05-19 | Vercel mitigates representative PHP probes with `403`. Do not redirect security probes. |
| `https://ldndecks.com/wp-content/plugins/*` | WordPress plugin/security probe pattern | None | No | none | NO | 10 | 2026-05-19 | Representative plugin path returns `410 Gone`. Do not redirect to homepage. |
| `https://ldndecks.com/wp-content/*` | WordPress content/security probe pattern | None | No | none | NO | 10 | 2026-05-19 | Representative generic `wp-content` probe returns `403`. Do not redirect security probes. |

## Redirects Added

| Source | Target | Reason | Semantic relevance | Backlink/search relevance | Confidence |
|---|---|---|---|---|---:|
| `/choosing-right-deck-material-wood-vs-composite/` | `/composite-deck-vs-wood-deck-virginia` | Recover legacy wood vs composite article URL and prevent a slash-normalization hop. | Exact | Medium | 10 |
| `/top-decks-build-near-you/deck-builder-in-aldie/` | `/near-you/loudoun-county/aldie` | Recover old city page URL and prevent a slash-normalization hop. | Exact | Medium | 10 |
| `/top-decks-build-near-you/deck-builder-in-annandale/` | `/near-you/fairfax-county/annandale` | Recover old city page URL and prevent a slash-normalization hop. | Exact | Medium | 10 |
| `/deck-projects-showcase/locationn-new-page-sample/` | `/showcase` | Clean up old showcase sample URL with the closest relevant hub. | Good | Low | 8 |
| `/top-decks-build-near-you/deck-builder-in-ballston` | `/near-you/arlington-county/ballston` | Restore malformed redirect that was accidentally embedded inside a comment. | Exact | Low | 9 |

## Intentionally Left Gone or Blocked

| URL/pattern | Current behavior | Reason |
|---|---|---|
| `/marker-listing/` | `308` slash normalization to `/marker-listing`, then `410 Gone` | No trustworthy replacement; keeping gone is cleaner than a soft-404 homepage redirect. |
| `/drafts/` | `308` slash normalization to `/drafts`, then `410 Gone` | Draft/private URL with no public search intent. |
| `/wp-*.php` | Representative probe returns `403` | Security/probe traffic; not a business page. |
| `/wp-content/plugins/*` | Representative path returns `410 Gone` | Security/probe traffic; not a business page. |
| `/wp-content/*` | Representative probe returns `403` | Security/probe traffic; not a business page. |

## Crawl Health Notes

- Current production audit: 242 sitemap URLs, 0 sitemap non-200 URLs, 280 internal links checked, 0 internal 404 links.
- GSC 404 examples are historical/external, not current internal-link errors.
- Existing production behavior already redirects several old URLs, but slash-final versions create a temporary two-hop path (`/old/` -> `/old` -> `/target`). Slash-explicit rules were added only for GSC URLs with clear replacement intent.
- Staged SEO redirect config audit after cleanup: 215 redirect rules, 0 duplicate sources, 0 internal redirect chains.
- Avoid redirecting probe, draft, or plugin paths to the homepage; that creates soft-404 signals and wastes crawl budget.
- Next step after deploy: validate these exact GSC examples with `curl -I -L`, then rerun validation in Search Console once Google has recrawled.
