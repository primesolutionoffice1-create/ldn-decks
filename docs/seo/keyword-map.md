# Keyword-to-URL map

Public origin: `https://ldndecks.com`. This map assigns one primary URL per service and town so internal links and titles point at the same page. It does not add rankings claims, prices, review counts, years, certifications, hours, or awards.

Phone on the site: (571) 655-7207.

Routes left unedited because other work owns them: `src/app/deck-builder-ashburn-va/page.js`, `src/app/deck-builder-leesburg-va/page.js`, `src/app/deck-builder-sterling-va/page.js`, `src/app/composite-decks/page.js`, `src/app/trex-decks/page.js`, `src/app/composite-deck-cost-northern-virginia/page.js`, `src/app/monthly-payment-composite-deck-northern-virginia/page.js`, `src/app/trex-deck-cost-monthly-payment/page.js`, `src/app/screened-porch-builder-northern-virginia/page.js`, and `src/app/screened-porches/[city]/page.js` (including Fairfax). They are still valid primary or competing URLs below.

## Service primaries

| Query | Primary URL | Why this URL | Competing URLs (still indexable) |
| --- | --- | --- | --- |
| New composite decks | `/composite-decks` | Composite builder hub | `/trex-decks`, `/timbertech-decks`, `/composite-deck-builder-loudoun`, `/services/new-decks` |
| Wood decks | `/wood-decks` | Only indexable wood-builder URL. `/wood-decks/{city}` is noindex | Wood-vs-composite explainers |
| Deck repair | `/services/deck-repair` | `/deck-repair` canonicalizes here. `/services/deck-repair-and-structural-maintenance` redirects here | `/deck-repair-loudoun-county`, `/deck-repair/{city}` for the indexable city set |
| Deck replacement | `/services/deck-replacement` | Dedicated replacement service | `/replace-wood-deck-with-composite-northern-virginia`, `/premium-composite-deck-replacement-arlington-alexandria-mclean-va`, `/services/deck-resurfacing` (different service) |
| Screened porches | `/screened-porch-builder-northern-virginia` | `/screened-porches` and `/services/porches/screened-porch` redirect here | `/services/porches`, `/screened-porches/{city}` including Fairfax, `/screened-porch-cost-northern-virginia` (cost intent) |
| Railings | `/services/trex-railings` | Railing installation URL in the services grid | `/deck-railing-options-northern-virginia` (comparison), `/blog/deck-railing-options-northern-virginia`, `/cable-railing-for-decks-northern-virginia` (cable only) |
| Stairs | `/deck-lighting-railings-stairs-addon-cost` | No stair-builder service route. This page is the stair planning URL. Stair repair stays on `/services/deck-repair` | `/services/deck-stair-lighting`, `/education/deck-stair-code-rise-run-virginia` |
| Pergolas | `/services/gazebo-pergola` | Services-grid pergola and gazebo URL. `/pergolas/{city}` is noindex | `/louvered-pergola-northern-virginia` (motorized product) |
| Under-deck drainage and ceilings | `/services/under-deck-patios` | Service page for waterproofing and ceilings | `/under-deck-ceiling-ideas`, `/blog/under-deck-drainage-systems`, `/blog/under-deck-drainage-systems-northern-virginia`, `/education/deck-drainage-systems-guide` |

`/services/new-decks` stays the general new-deck installation URL. It is not the composite head term.

## Town primaries

Each town uses the static deck-builder page. Older `/blog/deck-builder-{town}-va`, `/service/{town}`, and `/near-you/{county}/{town}` URLs redirect there, so they are not live duplicates.

| Town | Primary URL |
| --- | --- |
| Ashburn | `/deck-builder-ashburn-va` |
| Leesburg | `/deck-builder-leesburg-va` |
| Sterling | `/deck-builder-sterling-va` |
| Herndon | `/deck-builder-herndon-va` |
| Reston | `/deck-builder-reston-va` |
| Centreville | `/deck-builder-centreville-va` |
| Chantilly | `/deck-builder-chantilly-va` |
| Fairfax | `/deck-builder-fairfax-va` |
| Vienna | `/deck-builder-vienna-va` |
| Manassas | `/deck-builder-manassas-va` |
| Gainesville | `/deck-builder-gainesville-va` |
| Brambleton | `/deck-builder-brambleton-va` |
| South Riding | `/deck-builder-south-riding-va` |
| Purcellville | `/deck-builder-purcellville-va` |
| Woodbridge | `/deck-builder-woodbridge-va` |

City-service URLs such as `/composite-decks/{town}`, `/deck-repair/{town}`, and `/screened-porches/{town}` answer a narrower query (that service in that town). They are not a second primary for "deck builder {town}". Chantilly, Gainesville, Brambleton, South Riding, and Purcellville city-service URLs are noindex.

## Cannibalization

Same query, more than one indexable URL. The fix in this pass is a contextual link to the primary and a distinct title where the title was broken. No new city pages.

| Priority | Query | Primary | Also indexable | What to do |
| --- | --- | --- | --- | --- |
| P1 | Composite deck builder, Northern Virginia | `/composite-decks` | `/trex-decks`, `/timbertech-decks`, `/composite-deck-builder-loudoun`, `/services/new-decks` | Keep brand and county pages. Point generic composite mentions at `/composite-decks`. Do not edit the composite or Trex NoVA files in this pass. |
| P1 | Deck repair | `/services/deck-repair` | `/deck-repair-loudoun-county` and indexable `/deck-repair/{city}` | Loudoun and city URLs stay as modifiers. Guides link the head term to `/services/deck-repair`. |
| P1 | Deck replacement | `/services/deck-replacement` | Wood-to-composite and premium Arlington/Alexandria/McLean replacement landers | Those landers now point "replacement", stairs, and railings at the primary service URLs. |
| P1 | Screened porch builder | `/screened-porch-builder-northern-virginia` | `/services/porches`, city `/screened-porches/{city}`, cost guide | Do not edit the builder page or the Fairfax city route. The Purcellville project post links the builder. |
| P1 | Deck railing options | `/deck-railing-options-northern-virginia` | `/blog/deck-railing-options-northern-virginia` | Blog post links composite railing to `/services/trex-railings`. Do not add a third railing guide. |
| P1 | Under-deck drainage | `/services/under-deck-patios` | Ideas page plus two drainage posts and the education guide | Both drainage posts now link the service page. |
| P1 | Pergola builder | `/services/gazebo-pergola` | `/louvered-pergola-northern-virginia` | Louvered stays the product URL. Pergola posts link the service page. |
| P2 | Deck builder {town} | `/deck-builder-{town}-va` | `/composite-decks/{town}` where that city page is indexable | Titles still contain "Deck Builder {City}". Do not retitle those city templates in this pass. |

## Orphans

A static check of the path literals in `src/app/sitemap.js` found no sitemap path that appears only in its own `page` file. Blog posts are linked from `BlogList` on `/blog`. Education articles are linked from `EducationList` on `/education`. Showcase projects are linked from `ShowcaseGrid`.

These primaries were easy to miss from guides even though nav, areas, or another service page already linked them. Contextual links added in this change:

| URL | New contextual source |
| --- | --- |
| `/wood-decks` | Trex-vs-wood post, pressure-treated boards post, both wood-vs-composite guides |
| `/composite-decks` | Same posts and guides |
| `/services/deck-repair` | Deck resurfacing guide |
| `/services/deck-replacement` | Resurfacing guide, repair-vs-replace post, wood-to-composite page |
| `/services/trex-railings` | Railing options post, modern railing post, wood-to-composite page |
| `/services/gazebo-pergola` | Pergola-vs-gazebo post, pergola-on-a-deck post |
| `/services/under-deck-patios` | Both under-deck drainage posts |
| `/deck-lighting-railings-stairs-addon-cost` | Railing-code post, stair-code education article, wood-to-composite page |
| `/screened-porch-builder-northern-virginia` | Purcellville screened porch project post |
| `/deck-builder-ashburn-va`, `/deck-builder-leesburg-va`, `/deck-builder-fairfax-va` | Deck cost post |
| `/deck-builder-sterling-va`, `/deck-builder-herndon-va`, `/deck-builder-chantilly-va` | Joist-rot post |
| `/deck-builder-reston-va` | Small-deck post |
| `/deck-builder-brambleton-va` | Stairs, railings, and lighting cost page |
| `/deck-railing-options-northern-virginia` | Railing-code post and small-deck post |

Vienna, Centreville, Manassas, Gainesville, South Riding, Purcellville, and Woodbridge already have inbound links from city grids, HOA posts, or project posts. This pass did not add another sentence where the live copy did not already name the town.

## Breadcrumbs

`LayoutContent` renders `Breadcrumbs` on every route except `/`, `/thank-you`, `/deck-project-estimate`, and `/instagram`. `Breadcrumbs` emits one visible trail and one `BreadcrumbList`. Local service pages do not emit a second list. No breadcrumb component was missing on indexable templates.
