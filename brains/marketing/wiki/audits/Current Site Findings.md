---
type: audit
title: "Current Site Findings"
created: 2026-05-04
updated: 2026-05-11
tags:
  - audit
  - current-site
  - technical
status: developing
related:
  - "[[Site Inventory and Cannibalization Map]]"
  - "[[HCU Recovery Framework]]"
  - "[[E-E-A-T for local-seo-services]]"
  - "[[Topical Authority for Niche Sites]]"
  - "[[Keyword Targets and Page Map]]"
  - "[[DataForSEO Keyword Exports]]"
sources:
  - "site-ranked-keywords-2026-05-11.json (132 keywords, 27 URLs)"
  - "keywords-2026-05-11.xlsx (3,890 competitor keywords)"
  - "Direct fetch and parse (TBD pending Day 1)"
  - "claude-seo audit reports (TBD pending Day 1)"
---

# Current Site Findings

**Status: developing.** Findings below derive from `site-ranked-keywords-2026-05-11.json` and `keywords-2026-05-11.xlsx`. The technical / on-page / schema findings are **TBD pending Day 1** direct fetch and the first `claude-seo` audit run.

## Headline Posture

- **Total ranking keywords**: **132** (small site, large upside).
- **Total estimated traffic (ETV, monthly clicks)**: **~344**, summed across all 132 keyword positions from `serp_item.etv` in `site-ranked-keywords-2026-05-11.json`.
- **Total search volume across ranked keywords**: ~86,620 (sum of `search_volume`).
- **Unique ranking URLs**: 27 (see [[Site Inventory and Cannibalization Map]]).
- **Brand-level wins**: `loudoun decks builder` #1 (90 SV, ETV 27.4 — single biggest ETV contributor on the site), `loudoun deck` #2 (50 SV).

The posture is classic small-local-services-site: thin keyword footprint, brand-geo wins at the top, dozens of head terms ranking on page 2–5 where a refresh + de-cannibalization sprint can produce meaningful lift.

## Position Bucket Distribution

From `site-ranked-keywords-2026-05-11.json`, bucketed by `rank_group` (the natural-organic position, excluding paid/local-pack positions):

| Position bucket | Keyword count |
|---|---:|
| 1–3 | **3** (2.3%) |
| 4–10 | **15** (11.4%) |
| 11–50 | **80** (60.6%) |
| 51–100 | **34** (25.8%) |
| **Total** | **132** |

The fattest bucket is 11–50: that's the conversion-band push tier (see [[Keyword Targets and Page Map]] Tier 2/3) and where most of the sprint's ETV unlock lives.

## Top 10 Keywords the Site Already Ranks For (by Search Volume)

From `site-ranked-keywords-2026-05-11.json`. Volume ties are common; sorted by SV desc, then position asc.

| # | Keyword | SV | Pos | URL |
|---|---|---:|---:|---|
| 1 | decks companies | 6,600 | 11 | `https://ldndecks.com/` |
| 2 | deck companies | 6,600 | 12 | `https://ldndecks.com/` |
| 3 | deck company | 6,600 | 37 | `https://ldndecks.com/` |
| 4 | screen porches contractors | 5,400 | 19 | `/services/porches/screened-porch/` |
| 5 | screened-in porch contractors | 5,400 | 30 | `/services/porches/screened-porch/` |
| 6 | screened in porch contractor | 5,400 | 36 | `/services/porches/screened-porch/` |
| 7 | deck and patios | 5,400 | 38 | `/services/patios/` |
| 8 | decks and patio | 5,400 | 39 | `/services/patios/` |
| 9 | screened porch contractors | 5,400 | 44 | `/services/porches/screened-porch/` |
| 10 | screened in porches contractors | 5,400 | 46 | `/services/porches/screened-porch/` |

Read: the site is **already on the SERP** for high-volume head terms — just not in the top 10. Every keyword above is a Tier 2/3 push candidate.

## Top 10 High-Volume Keywords Competitors Rank for that the Site Does NOT

From `keywords-2026-05-11.xlsx` (All Keywords sheet), filtered to rows where `our_position` is empty and the keyword does not appear in the site's 132. Sorted by `search_volume` desc.

| # | Keyword | SV | KD | Best competitor pos | Best competitor |
|---|---|---:|---:|---:|---|
| 1 | deck builders | 90,500 | 18 | 48 | `decksva.com` |
| 2 | timbertech decking | 22,200 | 0 | 24 | `sunburstdeck.com` |
| 3 | timbertech decks | 22,200 | 9 | 24 | `sunburstdeck.com` |
| 4 | contractor deck | 12,100 | 30 | 67 | `battlefielddecks.com` |
| 5 | deck contractor | 12,100 | 27 | 87 | `decksva.com` |
| 6 | deck repair | 9,900 | 0 | 4 | `deckguru.com` |
| 7 | decking footers | 9,900 | 0 | 10 | `deckguru.com` |
| 8 | deck foundations footings | 9,900 | 0 | 12 | `deckguru.com` |
| 9 | designing pools | 8,100 | 5 | 6 | `deckscapesofva.com` |
| 10 | underdeck drainage systems | 8,100 | 9 | 12 | `deckscapesofva.com` |

Note: "deck builders" (90.5K) has every NoVA competitor stuck below #20 — the SERP is fragmented, which is a structural opportunity, not a one-shot win.

## Top Quick-Win Refresh Candidates (Site Tier 2: rank 4–10)

15 keywords in this bucket. Highest-SV picks:

- `deck contractors northern va` — 260 SV @ **#7** on `/`.
- `deck companies in northern va` — 260 SV @ **#10** on `/`.
- `loudoun deck and fence` — 260 SV @ **#10** on `/`.
- `ldn construction` — 170 SV @ **#9** on `/` (brand-defense — keep top-10).
- `timbertech vs azek` — 140 SV @ **#10** on `/trex-vs-timbertech-vs-azek`.
- `decks virginia` / `va decks` — 110 SV each @ **#10** on `/`.
- `trex vs timbertech vs azek` — 90 SV @ **#4** on the comparison page (already strong).
- `deck contractor fairfax va` — 90 SV @ **#8** on `/deck-builder-in-fairfax-county/`.
- `deck builders woodbridge va` — 30 SV @ **#6** on `/top-decks-build-near-you/deck-builder-in-woodbridge/`.

These all live on already-existing pages. Refresh play (title/meta/dates/Information-Gain section) plus an internal-link push from `/` is the standard intervention; see [[Days 13-18 Top Pages Refresh]].

## Anomalies Worth Investigating

1. **Patios service page is at #38–65 for three 5.4K-SV head terms** (`deck and patios`, `decks and patio`, `patios and decking`). For a 5.4K-volume head, position 38 means the content is currently too thin to defend a top-10 slot. The page exists and ranks — i.e., Google considers it relevant — but does not rank well. Treat as REWRITE, not 410.
2. **`https://ldndecks.com/` outranks the dedicated Alexandria location page on `deck builders alexandria va`** (#33 vs #26 — both bad, but the location page should be ahead). Internal-link / topical-signal issue.
3. **`/composite-deck-cost-northern-virginia/` ranks #70 for `cost of a composite deck`** (880 SV). The page exists but is invisible. Likely thin content vs hoppy2u (deck-calculator tool) and sunburstdeck (4-season cost owner). Needs a real cost range/table/calculator.
4. **`/top-decks-build-near-you/deck-builder-in-leesburg/` ranks #30 for `loudoun county typical deck details`** — that query belongs to `/deck-builder-in-loudoun-county/`. Probably an H2 / anchor leak.
5. **`www` and apex both rank** — `https://www.ldndecks.com/` shows up for 13 keywords, `https://ldndecks.com/` for 59. Host normalization is splitting authority. Verify canonical/301.

## Sister-Site / Brand Cannibalization

Brand defense: the site holds `ldn construction` #9 (170 SV) — a tangential brand-mention term. Not multi-domain cannibalization; no other LDN-owned domains surfaced in the 27-URL inventory.

## High Findings (TBD pending Day-1 audit)

- Internal linking density per page (verify in CMS — parser false negatives are common).
- Title freshness and dated content on commercial pages.
- Slug pattern decision (`/deck-builder-in-<x>/` vs `/top-decks-build-near-you/...`).
- The duplicate `/blog/trex-vs-timbertech-vs-azek` vs `/trex-vs-timbertech-vs-azek` — 301 setup verification.

## Medium Findings (TBD pending Day-1 audit)

- Schema audit — LocalBusiness / Service / FAQPage presence and accuracy (no fabricated `aggregateRating`, no inflated `reviewCount`; LDN Decks is publicly 5.0★ rated, so honest schema is a defensible E-E-A-T signal).
- GBP coverage cross-check vs the 8 ranked location pages.
- Photo / proof inventory across service pages (Information Gain lever per [[Business Type Overlay]]).
- Off-niche content (`/services/entry-doors/`).

## Strong Signals (Defensible Foundation)

- **Brand-geo top-3**: `loudoun decks builder` #1, `loudoun deck` #2, `decks northern virginia` #3. Brand search is healthy.
- **Trex/TimberTech/AZEK comparison** is **#4** for the 3-way query — the comparison page is a real asset.
- **Screened-porch consolidation is correct**: all five variants of the 5.4K-volume contractor query point at the single `/services/porches/screened-porch/` URL. No cannibalization to clean up — just a refresh-and-push job.
- **5.0★ Google rating + Trex Platinum + TimberTech certifications** are E-E-A-T signals competitors mostly do not match.
- **Cost-per-acquisition economics are favorable**: average CPC across the 132 ranked keywords is double-digit dollars (e.g., `deck builder company` CPC $14, `deck contractors northern va` CPC $14+) — i.e., even modest position improvements translate to high-value clicks.

## Cause Hypothesis

Per [[HCU Recovery Framework]], the default cause-net for a site at this footprint:

1. **Thin coverage** — 132 keywords is a small footprint. The deck-vertical universe (per `keywords-2026-05-11.xlsx`) is 3,890 unique keywords across 20 NoVA competitors; LDN Decks owns ~3% of that universe. Topical authority is undersized.
2. **Position-band stuck on existing pages** — 80 of 132 keywords (60.6%) sit in 11–50, a band that responds well to refresh + internal-link + Information Gain interventions.
3. **Host/duplicate-URL splits** — `www` vs apex, `/blog/...` vs root for the comparison page, two location-slug patterns. All splitting authority.
4. **Patio + cost pages underperforming their own intent** — pages exist but content is thin relative to the head SV they're chasing.
5. **GSC data not yet connected** — cannot validate which 132 keywords are actually driving clicks vs impressions. Day 0 access closes this.

The actual cause-mix is TBD pending Day-1 audit and GSC access.

## Validation Caveats

- All findings derive from a DataForSEO pull dated 2026-05-11. Re-verify after Day-1 direct fetch.
- DataForSEO ETV is an estimate, not measured GA4 traffic. Treat directionally until GA4 is connected per [[Day 0 Measurement Access Gate]].
- Internal-link counts from parsers can be false negatives — VERIFY in CMS before treating as a real issue.
- The site may have URLs not yet ranking for any keyword — those will surface in the Day-1 sitemap crawl.
- GSC data will refine which findings correlate with ranking loss vs which are non-issues. Several "stuck on page 2" findings here may turn out to be impressions-rich (worth pushing) or impressions-poor (ignore).
