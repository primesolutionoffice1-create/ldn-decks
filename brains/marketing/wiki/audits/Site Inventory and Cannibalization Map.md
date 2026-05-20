---
type: audit
title: "Site Inventory and Cannibalization Map"
created: 2026-05-04
updated: 2026-05-11
tags:
  - audit
  - inventory
  - cannibalization
status: developing
related:
  - "[[Keyword Cannibalization Ledger]]"
  - "[[Keyword Targets and Page Map]]"
  - "[[Content Pruning and Consolidation]]"
  - "[[Topical Authority for Niche Sites]]"
  - "[[Current Site Findings]]"
sources:
  - "site-ranked-keywords-2026-05-11.json (132 ranking keywords, 27 unique URLs)"
  - "Direct page parsing (pending — Day 1 audit)"
---

# Site Inventory and Cannibalization Map

**Status: partial.** URL inventory below is the DataForSEO-visible surface (27 URLs that rank for at least one keyword). Full sitemap-driven inventory is **TBD pending the Day 1 direct crawl** — there are almost certainly more URLs that do not yet rank. Cannibalization clusters are sourced from `site-ranked-keywords-2026-05-11.json` and are evidence-led.

## Vertical Counts (from DataForSEO ranked surface only)

Counts derive from the 27 unique URLs found in `site-ranked-keywords-2026-05-11.json` and reflect what Google is willing to rank for ldndecks.com today. The full Day-1 crawl may surface additional pages that exist but do not yet rank.

- Home / brand pillar: 1 (`https://ldndecks.com/`)
- Service hub pages: 6 (`/services/porches/screened-porch/`, `/services/porches/open-porch/`, `/services/patios/`, `/services/fences/`, `/services/gazebos-and-pergolas/`, `/services/outdoor-power-washing/`, plus `/services/entry-doors/`)
- Location / "near you" pages: 8 (deck-builder-in-fairfax-county, fairfax-station, leesburg, woodbridge, alexandria, gainesville, stone-ridge, loudoun-county)
- Material comparison / guide pages: 3 (`/trex-vs-timbertech-vs-azek` plus a `/blog/trex-vs-timbertech-vs-azek` duplicate, `/blog/trex-vs-wood-decking`, `/best-composite-decking-virginia-trex-timbertech-fiberon`)
- Cost / pricing pages: 1 (`/composite-deck-cost-northern-virginia/`)
- Permit / regulatory pages: 1 (`/deck-permit-loudoun-county-virginia/`)
- "How to choose" / advisory pages: 1 (`/composite-decks-essential-tips-for-choosing-the-perfect-builder/`)
- General services landing: 1 (`/services`)
- Northern Virginia deck building guide: 1 (`/northern-virginia-deck-building-guide`)

Pillar / hub / spoke / guide classifications are TBD pending Day-1 direct crawl. Sitemap pull is TBD.

## Full URL Inventory (DataForSEO-visible)

Sourced from `site-ranked-keywords-2026-05-11.json`. Volume = sum of `search_volume` across the keywords each URL ranks for; Kws = count of ranking keywords; Best pos = the highest (lowest-numbered) `rank_group` the URL holds. Cluster column references the cannibalization clusters defined below.

| URL | Kws | Sum SV | Best pos | Cluster | Initial Recommendation |
| --- | ---: | ---: | ---: | --- | --- |
| `https://ldndecks.com/` | 59 | ~54,300 | 1 | A, B, C, D, E | KEEP — canonical brand pillar; ranks for the high-SV head terms (`deck companies` 6.6K @11, `decks companies` 6.6K @11) and the brand-geo terms (`loudoun decks builder` 90 @1). Refresh + de-cannibalize. |
| `https://ldndecks.com/services/porches/screened-porch/` | 15 | ~28,400 | 19 | F | KEEP — owns the screened-porch intent at position 19 for `screen porches contractors` (5.4K). Push 19→top-10 via refresh + internal links from `/`. |
| `https://www.ldndecks.com/` | 13 | mixed | mixed | A | 301-REDIRECT-to `https://ldndecks.com/` — `www` and non-`www` both rank, classic mixed-canonical signal. Confirm canonical/redirect after Day-1 fetch. |
| `https://ldndecks.com/deck-builder-in-fairfax-county/` | 6 | ~1,650 | 8 | G (Fairfax) | KEEP — clean Fairfax-county owner. Already top-10 for `deck contractor fairfax va`. Push the three #15–17 variants of `deck builder(s) fairfax va` into top-10. |
| `https://www.ldndecks.com/trex-vs-timbertech-vs-azek` | 5 | ~410 | 4 | H (composite material comparison) | KEEP as comparison-page owner. Strong: ranks #4 for `trex vs timbertech vs azek` (90 SV). 301 the `/blog/...` duplicate (next row) into this one. |
| `https://ldndecks.com/top-decks-build-near-you/deck-builder-in-leesburg/` | 4 | ~190 | 11 | G (Loudoun/Leesburg) | KEEP — Leesburg location page. Confirm slug pattern `/top-decks-build-near-you/...` is intentional (otherwise migrate to `/near-you/...`). |
| `https://ldndecks.com/top-decks-build-near-you/deck-builder-in-fairfax-station/` | 3 | ~80 | 10 | G (Fairfax) | KEEP — distinct micro-location. |
| `https://ldndecks.com/services/patios/` | 3 | ~16,200 | 38 | I (patio + deck combos) | REWRITE — at position 38–65 for `deck and patios` / `decks and patio` / `patios and decking` (each 5.4K). Genuine opportunity but needs a content rebuild to capture either intent. |
| `https://ldndecks.com/top-decks-build-near-you/woodbridge/` | 2 | 60 | 6 | G (Prince William) | KEEP — Woodbridge owner already top-10. |
| `https://ldndecks.com/services/fences/` | 2 | 140 | 26 | J (fence-as-adjacent) | KEEP for now; fence is adjacent, not core. Defer to overlay's "stay-in-lane" guidance. |
| `https://ldndecks.com/services/gazebos-and-pergolas/` | 2 | 70 | 27 | I | KEEP — outdoor-living adjacency. |
| `https://ldndecks.com/services/porches/open-porch/` | 2 | TBD | TBD | F | KEEP — open-porch distinct from screened-porch. |
| `https://ldndecks.com/deck-permit-loudoun-county-virginia/` | 2 | TBD | TBD | K (permit/regs) | KEEP — Information Gain on a regulatory query. Refresh dates. |
| `https://ldndecks.com/deck-builder-in-loudoun-county/` | 1 | 40 | 9 | G (Loudoun) | KEEP — distinct slug pattern. **DECIDE**: does this stand or merge into `/top-decks-build-near-you/...`? See Cluster G below. |
| `https://ldndecks.com/blog/trex-vs-timbertech-vs-azek` | 1 | 140 | 11 | H | 301-REDIRECT-to `https://www.ldndecks.com/trex-vs-timbertech-vs-azek` — duplicate intent, splits ranking. |
| `https://ldndecks.com/top-decks-build-near-you/deck-builder-in-stone-ridge/` | 1 | TBD | TBD | G | KEEP — distinct micro-location. |
| `https://www.ldndecks.com/northern-virginia-deck-building-guide` | 1 | TBD | TBD | L (NoVA pillar guide) | KEEP — guide-tier asset. Normalize host (drop `www`). |
| `https://ldndecks.com/top-decks-build-near-you/deck-builder-in-alexandria/` | 1 | 40 | 26 | G (Alexandria) | KEEP — but see Cluster G; `https://ldndecks.com/` also ranks for the same query at position 33. |
| `https://www.ldndecks.com/services` | 1 | TBD | TBD | — | KEEP — services index. Normalize host. |
| `https://ldndecks.com/services/entry-doors/` | 1 | TBD | TBD | — | DECIDE — off-niche relative to deck/porch core. Verify whether LDN Decks actually sells entry-door installs; prune if not. |
| `https://ldndecks.com/composite-deck-cost-northern-virginia/` | 1 | 880 | 70 | M (cost) | REWRITE — at position 70 for `cost of a composite deck` (880 SV). Needs a real cost calculator/range/table to compete with hoppy2u (deck calculator) and sunburstdeck (4-season cost owner). |
| `https://ldndecks.com/blog/trex-vs-wood-decking` | 1 | 170 | 57 | H | KEEP, REWRITE — comparison page on related axis (composite vs wood). |
| `https://ldndecks.com/best-composite-decking-virginia-trex-timbertech-fiberon/` | 1 | 170 | 38 | H | KEEP — distinct 3-way comparison page. Refresh + internal-link to `/trex-vs-timbertech-vs-azek`. |
| `https://ldndecks.com/services/outdoor-power-washing/` | 1 | 260 | 69 | — | KEEP — adjacent service. |
| `https://ldndecks.com/composite-decks-essential-tips-for-choosing-the-perfect-builder/` | 1 | 40 | 98 | N (advisory) | DECIDE — page-100 ranking; either rewrite into top-10 territory or 410. |
| `https://ldndecks.com/top-decks-build-near-you/deck-builder-in-gainesville/` | 1 | 70 | 36 | G | KEEP — Gainesville micro-location. |

Recommendation values: `KEEP`, `REWRITE`, `MERGE-into <target>`, `301-REDIRECT-to <target>`, `410-GONE`, `DECIDE` (needs Day-1 audit signal or GSC data).

## Cannibalization Clusters

Each cluster is a set of URLs splitting rankings for the same primary intent. Cluster IDs match the [[Keyword Cannibalization Ledger]] rows. Evidence from `site-ranked-keywords-2026-05-11.json`.

### Cluster A — Host normalization (`www` vs apex)

- URLs: `https://ldndecks.com/` (59 keywords), `https://www.ldndecks.com/` (13 keywords)
- Same brand pillar served under two hosts. Splits authority on the home.
- **Owner**: `https://ldndecks.com/` (apex, more rankings).
- **Action**: confirm canonical + 301 in Day-1 audit. Force `www` → apex.

### Cluster B — "Deck builder" head term across home + location pages

- Head term: `deck builder` family — 8 URLs split the keyword family (see `site-ranked-keywords-2026-05-11.json` rows matching `deck builder`, 22 on `/`, 3 on `/deck-builder-in-fairfax-county/`, 3 on `/top-decks-build-near-you/deck-builder-in-leesburg/`, etc.).
- This split is mostly intentional (location pages own geo variants). The cannibalization risk lives between `https://ldndecks.com/` and the **non-located** "near me" / state / regional variants (e.g., `best deck builder near me`, `deck builders in northern virginia`).
- **Owner of non-located variants**: `https://ldndecks.com/`.
- **Owner of geo-located variants**: each respective `/deck-builder-in-<location>` page.
- **Action**: enforce in [[Keyword Cannibalization Ledger]]; verify no location page is targeting the bare non-geo variant in its title/H1.

### Cluster C — "Deck company / companies" + "deck contractor"

- 3 URLs split the contractor head term: `https://ldndecks.com/` (6 kws including `deck contractors northern va` #7), `https://ldndecks.com/deck-builder-in-fairfax-county/` (2 kws), `https://ldndecks.com/composite-decks-essential-tips-for-choosing-the-perfect-builder/` (1 kw).
- **Owner**: `https://ldndecks.com/`.
- **Action**: confirm Fairfax page targets *fairfax* variants only; advisory page is fine as long as it doesn't claim the head.

### Cluster D — "Near me" terms

- `https://ldndecks.com/` (6 kws) vs `https://ldndecks.com/services/outdoor-power-washing/` (1 kw — `deck power washing near me`, distinct intent).
- **Status**: not cannibalized — distinct intents.

### Cluster E — "Loudoun" geo terms

- `https://ldndecks.com/` ranks #1 for `loudoun decks builder`, #2 for `loudoun deck`, #10 for `loudoun deck and fence` (5 kws).
- `https://ldndecks.com/deck-builder-in-loudoun-county/` ranks #9 for `loudoun county typical deck detail` (1 kw).
- `https://ldndecks.com/top-decks-build-near-you/deck-builder-in-leesburg/` ranks #30 for `loudoun county typical deck details` (1 kw — near-duplicate of above).
- **Owner of Loudoun brand**: `https://ldndecks.com/`.
- **Owner of Loudoun-county info / permit**: `/deck-builder-in-loudoun-county/`.
- **Action**: investigate the Leesburg page accidentally ranking for a Loudoun-county permit/detail query — it should defer to the dedicated Loudoun-county page. Probably an unintentional H2 or anchor leak.

### Cluster F — Screened porch contractor variants

- All 5 screened-porch variants (5.4K SV each: `screen porches contractors`, `screened-in porch contractors`, `screened in porch contractor`, `screened porch contractors`, `screened in porches contractors`) rank for **the same URL** `https://ldndecks.com/services/porches/screened-porch/`.
- **Status**: not cannibalized — this is correct consolidation.
- **Action**: this is a Tier 2/3 push candidate — every variant is at 19–46. Refresh + internal links could lift all five together.

### Cluster G — Geo: city / county location pages

- Two competing URL patterns: `/deck-builder-in-<city-or-county>/` (older?) vs `/top-decks-build-near-you/deck-builder-in-<location>/` (newer?). Both patterns are alive.
- Alexandria split: `/top-decks-build-near-you/deck-builder-in-alexandria/` @26 vs `https://ldndecks.com/` @33 for the same query (`deck builder(s) alexandria va`).
- **Action**: **DECIDE** during Day-1 audit which pattern is canonical going forward. Likely: consolidate to one pattern, 301 the other. Until decided, no new location pages should ship.

### Cluster H — Material comparison

- Three URLs in the Trex/TimberTech/AZEK orbit: `https://www.ldndecks.com/trex-vs-timbertech-vs-azek` (5 kws including #4 for the 3-way), `https://ldndecks.com/blog/trex-vs-timbertech-vs-azek` (1 kw @11 — duplicate), `https://ldndecks.com/best-composite-decking-virginia-trex-timbertech-fiberon/` (1 kw @38 — adds Fiberon).
- `https://ldndecks.com/blog/trex-vs-wood-decking` is a distinct axis (composite vs wood) — not cannibalized.
- **Owner**: `https://www.ldndecks.com/trex-vs-timbertech-vs-azek` (apex-normalized).
- **Action**: 301 `/blog/trex-vs-timbertech-vs-azek` → `/trex-vs-timbertech-vs-azek`. Keep Fiberon page as differentiated 3-way alternative; cross-link.

### Cluster I — Patio / outdoor-living

- `/services/patios/` ranks #38–65 for three 5.4K-SV combo queries (`deck and patios`, `decks and patio`, `patios and decking`).
- `https://ldndecks.com/` ranks #16 / #32 for `northern virginia patio builders` / `patio contractors in northern va` (60 total SV).
- **Status**: distinct intents (combo vs NoVA-geo). Not cannibalized, but `/services/patios/` is severely underperforming on its own head terms.
- **Action**: REWRITE `/services/patios/` — current content is not matching the head intent.

### Cluster J — Fence (adjacent vertical)

- `https://ldndecks.com/` (2 kws — `loudoun deck and fence` @10, `northern virginia deck and fence` @33).
- `https://ldndecks.com/services/fences/` (2 kws — `custom fence and deck` @54, `fences and decks` @26).
- **Status**: arguably split, but the volumes are small. Fence is adjacent to deck-and-porch core per [[Business Type Overlay]] — recommend staying out of head-on fence competition with `fenceanddeckconnection.com` (Maryland; see [[Primary Competitors]]).

### Cluster K — Permits / regulatory

- `https://ldndecks.com/deck-permit-loudoun-county-virginia/` — single URL, no cannibalization.
- **Status**: clean owner; refresh dates only.

### Cluster L — Northern Virginia deck building guide

- `https://www.ldndecks.com/northern-virginia-deck-building-guide` — single URL. Normalize host. Potential pillar.

### Cluster M — Cost / pricing

- `https://ldndecks.com/composite-deck-cost-northern-virginia/` ranks #70 for `cost of a composite deck` (880).
- `https://ldndecks.com/blog/trex-vs-wood-decking` ranks #57 for `cost of trex vs wood` (170).
- **Status**: distinct intents (cost-of-composite vs comparative cost). Cost owner is severely underperforming the head SV.
- **Action**: REWRITE `/composite-deck-cost-northern-virginia/` with a real cost range/table/calculator (Information Gain lever the overlay calls out). Compete with hoppy2u (calculator tool, Tier 3) and sunburstdeck (`four seasons room cost` owner).

### Cluster N — Advisory ("how to choose")

- `https://ldndecks.com/composite-decks-essential-tips-for-choosing-the-perfect-builder/` ranks #98 for `how to choose a deck contractor` (40 SV).
- **Action**: DECIDE — REWRITE up-tier or 410-GONE. The volume is small and the slug is overlong; verdict depends on whether this is part of a topical-authority pillar plan.

## Slug Corrections, Off-Niche, and Critical Tech Fixes (surfaced for early ship)

- **Mixed host** (`www` vs apex) splits authority — fix Day 1.
- **Duplicate `/blog/trex-vs-timbertech-vs-azek`** — 301 Day 1.
- **Two location-page slug patterns** (`/deck-builder-in-...` vs `/top-decks-build-near-you/deck-builder-in-...`) — decide canonical pattern Day 1.
- **Off-niche candidate**: `/services/entry-doors/` — verify the business actually offers entry-door installs; if not, 410.
- **Page-98 ranking**: `/composite-decks-essential-tips-for-choosing-the-perfect-builder/` — long, weak slug; decide rewrite-or-prune.

## Status

This map is the WORKING inventory. Day-1 will replace the inventory section with a full sitemap-driven crawl. Cluster decisions land as separate notes in `wiki/decisions/` (one per cluster) and feed the [[Keyword Cannibalization Ledger]] and [[Keyword Targets and Page Map]].
