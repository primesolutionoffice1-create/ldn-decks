# Internal Link Gap Report

**Date:** 2026-05-11
**Phase:** BEAST Days 25-30 — E-E-A-T sweep
**Method:** Sampled 51 commercial URLs, normalized all internal `href="/..."` links, counted inbound peer references per target.

## Reading the data

The site has a **global footer mega-link grid** that surfaces many pages with a baseline of ~50 inbound links from any sampled crawl. Pages showing **less than ~15 inbound** are **NOT in the footer grid** and depend on peer-page links only. Those are the real gaps.

## Orphans — 0 inbound links from the sampled peer set

| URL | Note |
|---|---|
| `/services/windows` | Not in `ServicesGrid` (verify) or footer. Commercial service page with no peer crawl reach. |
| `/composite-decks` | Category page. Either retire (and 301) or surface in sitemap + cross-link from `/services/new-decks`, `/trex-decks`, and the cost-page Related Guides grid. |

## Underlinked — 1-2 inbound links

| URL | Inbound | Recommendation |
|---|---:|---|
| `/how-tariffs-affect-deck-prices-2026` | 1 | Cross-link from `/composite-deck-cost-northern-virginia`'s tariff section (already linked there), `/how-much-does-a-deck-cost-northern-virginia`, `/trex-vs-timbertech-vs-azek`, `/services/new-decks`, `/services/deck-replacement`. |
| `/deck-builders-loudoun` | 1 | Cross-link from `/near-you/loudoun-county`, `/deck-builder-leesburg-va`, `/deck-builder-ashburn-va`, `/areas-we-serve`. |
| `/trex-decks` | 2 | Cross-link from `/trex-vs-timbertech-vs-azek`, `/services/new-decks`, `/services/trex-railings`, `/trex-transcend-review-northern-virginia`. |
| `/deck-financing-northern-virginia` | 2 | Cross-link from every cost page sidebar / footer-of-content. Currently linked from `/composite-deck-cost-northern-virginia`. Add from `/how-much-does-a-deck-cost-northern-virginia`, `/screened-porch-cost-northern-virginia`, `/services/new-decks`, `/services/deck-replacement`. |
| `/services/porches/front-porch` | 2 | Surface in `/services/porches` hub grid and `/services/porches/screened-porch` "Compare porch types" related-links block. |
| `/services/porches/open-porch` | 2 | Same as front-porch. |

## Money pages NOT in the global footer

These are higher-intent pages where inbound link counts cluster at 3-12 instead of the footer-baseline ~50. Strong candidates for inclusion in `Footer.jsx` mega-grid:

| URL | Inbound | Type | Why it should be in footer |
|---|---:|---|---|
| `/services/porches/screened-porch` | 4 | Service / money | Tier-2 keyword cluster (5 variants at 19–46). |
| `/composite-deck-cost-northern-virginia` | 4 | Cost / money | BEAST priority page; 22 schema types; should be sitewide-linked. |
| `/screened-porch-cost-northern-virginia` | 11 | Cost / money | Cost page paired with /services/porches/screened-porch. |
| `/deck-permit-fairfax-county-virginia` | 12 | Information Gain | High AI Overview citation potential. |
| `/deck-permit-loudoun-county-virginia` | 6 | Information Gain | Same. |
| `/deck-permit-prince-william-county-virginia` | 3 | Information Gain | Same. |

## Most-linked targets (sanity check — footer mega-grid working as expected)

| URL | Inbound | Note |
|---|---:|---|
| `/loudoun-county-hoa-deck-rules` | 51 | Footer-included |
| `/scholarship` | 51 | Footer-included |
| `/about/why-choose-us` | 51 | Footer-included |
| `/deck-builder-herndon-va` | 51 | City landing — footer-included |
| `/deck-builder-alexandria-va` | 51 | City landing — footer-included |

## Recommended actions (priority-ordered)

### 1. Surface BEAST money pages in `Footer.jsx`

Add these to the footer mega-link grid so they pick up sitewide internal-link equity:

- `/composite-deck-cost-northern-virginia`
- `/services/porches/screened-porch`
- `/screened-porch-cost-northern-virginia`
- `/deck-permit-fairfax-county-virginia`
- `/deck-permit-loudoun-county-virginia`
- `/deck-permit-prince-william-county-virginia`
- `/how-tariffs-affect-deck-prices-2026`

### 2. Resolve the 2 orphans

- `/services/windows` — confirm it's in the `ServicesGrid` component; if not, add it. If the service is no longer offered, 410 the page and remove from sitemap.
- `/composite-decks` — likely a legacy category page. Either:
  - **Keep:** add internal links from cost pages and comparison pages, OR
  - **Retire:** 301 to `/services/new-decks` or `/trex-decks` (already a redirect candidate per `next.config.mjs` redirect block).

### 3. Cross-link financing + tariffs from every cost page

- `/composite-deck-cost-northern-virginia` ✅ already links to both
- `/how-much-does-a-deck-cost-northern-virginia` — add both
- `/screened-porch-cost-northern-virginia` — add both
- `/services/new-decks` — add `/deck-financing-northern-virginia`
- `/services/deck-replacement` — add `/deck-financing-northern-virginia`

### 4. Porch sub-page cross-linking

`/services/porches` hub should grid-link to:
- `/services/porches/screened-porch`
- `/services/porches/front-porch`
- `/services/porches/open-porch`

Each leaf porch page should carry "Compare porch types" with reciprocal links.

## Out-of-scope for this sweep

The user explicitly said "No new content production yet. Trust-layer consolidation first." This report **identifies** the link gaps but does **not** implement the footer changes or new cross-links. Those land in the next content / linking phase.
