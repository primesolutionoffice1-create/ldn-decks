# Cost guides, TrexPro labor warranty, and reflow — 18 October 2026

Lot after PR #222 (`c8cec428`). Closed lot was not reopened. This file is the persistent record: problem, source, change, test, status.

## Confirmed

- Loudoun Decks has no owner-approved price ledger. `src/lib/business.js` only has a schema `priceRange` of `$$-$$$$`. `docs/seo/LDN-GEO-PROOF-LOCK-2026-07-19.md` marks a project minimum and typical range as blocked. Repair-cost intake CSVs through 22 June 2026 leave low/high empty and say not to publish until source-backed.
- `src/lib/deckBudgetModel.js` previously multiplied square footage by unsourced rates (for example Trex Transcend $45–$65) and then applied a 25–35% adjustment. The comment in that file said the rates were not measured local prices or supplier quotes.
- `src/server/decks/pricing.js` previously returned per-square-foot ranges to the voice-agent route. Those ranges were not an owner-approved ledger.
- Service and city pages emitted `AggregateOffer` low/high prices with no source. That schema type presents a price as an offer.
- Competitor or market pages were not used as Loudoun Decks prices.
- Loudoun County deck permit fees were re-read on 18 October 2026 at https://www.loudoun.gov/1166/Decks. Outside an incorporated town, a County Typical Deck Detail under 1,000 sq ft is $265. The same page lists $100, $165 plus a size fee, $230, $335 plus a size fee, and $395 for the other stated cases. Those figures are county fees, not a Loudoun Decks price.
- Trex’s warranty index on 18 October 2026 (https://www.trex.com/customer-support/trex-owners/warranty/) links the Decking, Fascia & Cladding Limited Warranty (https://online.flippingbook.com/view/861215527/) and the TrexPro Residential Limited Labor Warranty (https://online.flippingbook.com/view/322590450/, copyright 2026).
- The product warranty’s residential terms in that booklet: Enhance decking and fascia 25 years; Select decking and fascia 35 years; Transcend and Signature decking and fascia 50 years; Refuge decking 50 years. Fade is limited by stated Delta E changes. The product remedy described there is material replacement or a refund of the product purchase price, not installation labor. A residential warranty may transfer once within five years of purchase.
- Lineage is not named in that product table.
- The labor warranty is a separate document. It requires a TrexPro contractor, installation on an individual residence, and registration. Trex names TrexPro, TrexPro Gold, and TrexPro Platinum. The term depends on level, decking line, and whether decking, railing, and Trex fasteners are installed. Commercial installations are excluded.
- Loudoun Decks’ TrexPro level is not confirmed. The labor warranty is not stated as part of the firm’s offer.
- Overflow was measured in headless Chrome 154 on the dev server, with `documentElement.clientWidth` as the CSS viewport. Elements were counted only when their box extended past that viewport and an intermediate ancestor with overflow hidden, clip, auto, or scroll did not already clip them. `html`/`body` overflow hidden was not treated as a fix.
- At 320, 360, and 390 CSS px, and at 640 CSS px (1280 desktop at 200% zoom) and 720 CSS px (1440 desktop at 200% zoom), the homepage, warranty guide, composite cost guide, and `/get-estimate` had no such offenders after the grid fix. The estimate link remained in the DOM.
- At 180 CSS px (also what a 360px phone becomes at 200% zoom), the old `minmax(250px, 1fr)` related-guide tracks and the warranty two-column grid overflowed. The warranty grid also overflowed at 320 and 360 before the fix (right edge about 371px) because `1fr 1fr` did not shrink. After the fix, 320 and above were clean. At 180, a few inline fragments and the partner ticker still paint past the edge; the ticker stays inside its existing local `overflow: clip`, and the page `scrollWidth` stayed equal to the viewport. 180px was not used as a pass/fail rule for normal phones.

## Not confirmed

- TimberTech, AZEK, and Fiberon warranty years and labor terms. The warranty table now tells readers to use the current manufacturer warranty.
- The cell-by-cell year grid in the 2026 TrexPro labor booklet. The booklet’s text layer does not preserve a reliable grid, so this page states the conditions and links the booklet instead of republishing a reconstructed year table.
- Any remaining percentage in older articles that was not one of the replaced price-gap phrases. Those phrases that were found (including 40–60% resurfacing savings, 15–25% Stafford discounts, and fixed resale-recovery percentages) were removed because they had no source.
- Loudoun Decks’ TrexPro, Gold, or Platinum status.

## Changes

- Public dollar ranges for decks and related work were removed from guides, FAQs, blog copy, `llms.txt`, and `llms-full.txt` where they were not the Loudoun County fees above. The replacement is a written estimate, with the scope called out: demolition, structure, stairs, railings, permits, and site conditions.
- `AggregateOffer` / `Offer` prices are no longer emitted by `ServiceSchema` or city service pages.
- The cost planner and the homepage budget card no longer multiply by unsourced rates. The financing slider remains an illustration at about 9% APR for an amount the visitor chooses. It is not labeled as a Loudoun Decks price or an “as low as” offer.
- The voice pricing function still accepts the same material and complexity names and no longer speaks a dollar range.
- The warranty guide separates the Trex product warranty from the TrexPro labor warranty and links the two Trex booklets checked on 18 October 2026.
- Grid tracks that used a fixed `minmax(Npx, 1fr)` now use `minmax(min(100%, Npx), 1fr)`, so a narrow container does not widen the page. Wide tables keep local horizontal scrolling. The permit timing table’s scroller is a keyboard-focusable region. No new `overflow-x: hidden` was added on `html` or `body`.

## Status

See the commit, pull request, deployment, and live check recorded after this file ships. Guides whose visible wording changed and that already carried `dateModified` were set to 2026-10-18 because the price or warranty wording was reviewed. Dates were not bumped on pages that were not edited.
