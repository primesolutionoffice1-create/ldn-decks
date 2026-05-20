---
type: keyword-strategy
title: "Keyword Cannibalization Ledger"
created: 2026-05-04
updated: 2026-05-11
tags:
  - keywords
  - cannibalization
  - content-governance
status: developing
related:
  - "[[Keyword Strategy Framework]]"
  - "[[Keyword Targets and Page Map]]"
  - "[[Site Inventory and Cannibalization Map]]"
  - "[[Seasonal Keyword Playbook]]"
  - "[[SERP-First Content Creation Gate]]"
  - "[[Content Pruning Decision Framework]]"
  - "[[Days 1-5 GSC Diagnostic and Triage]]"
  - "[[Days 6-12 Content Audit and Prune]]"
sources:
  - "site-ranked-keywords-2026-05-11.json"
  - "GSC 16-month query export (TBD pending Day 0 access)"
---

# Keyword Cannibalization Ledger

The primary-keyword-to-URL ledger that prevents two pages competing for the same intent. Populated from `site-ranked-keywords-2026-05-11.json` (132 keywords across 27 URLs); cluster IDs match [[Site Inventory and Cannibalization Map]].

## Rule

Every primary keyword maps to exactly ONE canonical owner URL. Supporting pages may use the keyword in body copy, FAQs, or natural internal anchors back to the owner page — never in title, H1, slug, primary CTA, or first-paragraph keyword target. Violations are documented here, then resolved (merge, 301, or rewrite).

## Process

1. Before drafting any new or refreshed page, check the ledger.
2. If the keyword has an owner, refresh the owner instead of creating a competitor.
3. If the keyword has no owner and the page being drafted is a credible owner, add the row.
4. If two existing URLs target the same keyword, resolve via [[Content Pruning Decision Framework]] (usually MERGE then 301).

## Cluster Ledger

One row per cannibalization cluster identified from `site-ranked-keywords-2026-05-11.json`. Acceptance criterion = the SERP-observable signal that lets the cluster row move to `resolved`.

| Cluster ID | Intent / head term | URLs competing | Recommended canonical URL | Action for non-canonical URLs | Acceptance criterion | Status |
|---|---|---|---|---|---|---|
| **A** | Host normalization (brand pillar) | `https://ldndecks.com/` (59 kws); `https://www.ldndecks.com/` (13 kws) | `https://ldndecks.com/` | 301 `www` → apex; verify `<link rel=canonical>` on every page points to apex | A single host serves all home-pillar rankings; `www` URLs return 301 to apex; DataForSEO pull on next refresh shows zero `www.ldndecks.com` rankings | open |
| **B** | "deck builder" head term (geo-located variants) | `https://ldndecks.com/` (22 kws, non-geo + state-level); 6 location pages (`/deck-builder-in-fairfax-county/`, `/top-decks-build-near-you/deck-builder-in-{leesburg, gainesville, woodbridge, alexandria, stone-ridge}/`) | Distributed: `https://ldndecks.com/` owns non-geo + NoVA-state variants; each location page owns its own city/county variants | Audit each location page: H1 + title must contain the specific geo only, not the bare "deck builder" head; `https://ldndecks.com/` H1 + title must NOT contain a specific city | Day-1 audit confirms each URL's title/H1/first-paragraph targets only its assigned variant set; new GSC data shows no city variant ranking on `/` ahead of its dedicated page | open |
| **C** | "deck contractor / deck company" head | `https://ldndecks.com/`; `/deck-builder-in-fairfax-county/`; `/composite-decks-essential-tips-for-choosing-the-perfect-builder/` | `https://ldndecks.com/` (for non-geo); `/deck-builder-in-fairfax-county/` (for Fairfax variants); advisory page targets neither in title/H1 | Verify the advisory page does not chase the head in title/H1; rewrite if it does | Day-1 audit confirms title/H1 separation | open |
| **D** | "near me" terms | `https://ldndecks.com/` (6 kws); `/services/outdoor-power-washing/` (1 kw — distinct: `deck power washing near me`) | Distributed — distinct intents, not cannibalized | None | n/a — clean | resolved |
| **E** | Loudoun brand-geo | `https://ldndecks.com/` (5 Loudoun kws); `/deck-builder-in-loudoun-county/` (1 kw — `loudoun county typical deck detail` #9); `/top-decks-build-near-you/deck-builder-in-leesburg/` (1 kw — same query, #30, accidental leak) | `https://ldndecks.com/` for Loudoun brand + city terms; `/deck-builder-in-loudoun-county/` for Loudoun-county-specific (permit / detail) terms; Leesburg page must not chase Loudoun-county queries | Fix the Leesburg page's accidental anchor / H2 leaking the `loudoun county typical deck details` query | Next DataForSEO pull shows the Leesburg page no longer ranks for `loudoun county typical deck details` | open |
| **F** | Screened porch contractor variants | All 5 variants → `/services/porches/screened-porch/` | `/services/porches/screened-porch/` | None — already consolidated correctly | n/a — clean (this is a Tier 2 push target, not a cannibalization fix) | resolved |
| **G** | Geo location-page slug pattern | `/deck-builder-in-<location>/` (2 URLs) vs `/top-decks-build-near-you/deck-builder-in-<location>/` (6 URLs) — two patterns coexisting | DECIDE in Day-1 audit (likely: keep `/top-decks-build-near-you/...` as the dominant pattern OR keep `/deck-builder-in-<county>/` for county-level and the longer pattern for city-level) | Once decided, 301 the loser pattern into the winner; no new location pages ship until decided | A single slug pattern is documented as canonical; sitemap matches it; legacy URLs return 301 | **open — blocks all new location-page work** |
| **H** | Trex / TimberTech / AZEK material comparison | `https://www.ldndecks.com/trex-vs-timbertech-vs-azek` (5 kws, #4 for 3-way); `https://ldndecks.com/blog/trex-vs-timbertech-vs-azek` (1 kw, #11 — duplicate); `/best-composite-decking-virginia-trex-timbertech-fiberon/` (1 kw, #38 — extends to Fiberon) | `https://ldndecks.com/trex-vs-timbertech-vs-azek` (apex-normalized) | 301 `/blog/trex-vs-timbertech-vs-azek` → owner; keep Fiberon page as differentiated 4-way alternative with cross-links | Next DataForSEO pull shows zero rankings on the `/blog/...` URL; the owner gains the consolidated impression share | open |
| **I** | Patio + outdoor living | `/services/patios/` (3 high-SV combo kws @38–65); `https://ldndecks.com/` (2 NoVA-geo patio kws — `northern virginia patio builders` #16, `patio contractors in northern va` #32) | `/services/patios/` for combo head terms; `https://ldndecks.com/` may keep NoVA-modifier variants if its content currently outranks the patio page on them | REWRITE `/services/patios/` content to actually defend the head terms (currently at #38–65); keep `/` NoVA-patio variants until patio page is strong enough to take them | `/services/patios/` reaches top-10 for at least one of `deck and patios` / `decks and patio` / `patios and decking` | open |
| **J** | Fence (adjacent) | `https://ldndecks.com/` (2 fence kws); `/services/fences/` (2 fence kws) | `/services/fences/` for fence-only intent; `/` for deck-and-fence combo queries (`loudoun deck and fence`) | Cleanup low-priority; fence is adjacent vertical per [[Business Type Overlay]] | Day-1 audit confirms title/H1 separation; no head-on competition with `fenceanddeckconnection.com` (MD) | open (low priority) |
| **K** | Permit / regulatory | `/deck-permit-loudoun-county-virginia/` (single URL) | Same — no cannibalization | None | n/a — clean | resolved |
| **L** | NoVA deck building guide | `https://www.ldndecks.com/northern-virginia-deck-building-guide` (single URL) | `https://ldndecks.com/northern-virginia-deck-building-guide` (host-normalized) | Cluster A fix covers this | Same as Cluster A | covered by A |
| **M** | Cost / pricing | `/composite-deck-cost-northern-virginia/` (single URL @70 for `cost of a composite deck`); `/blog/trex-vs-wood-decking` ranks for `cost of trex vs wood` (distinct intent) | Distributed — distinct intents | None on cannibalization; the cost page needs REWRITE per [[Keyword Targets and Page Map]] Tier 4 | Cost page reaches top-20 for `cost of a composite deck` | open (rewrite blocked on Day-1 audit) |
| **N** | Advisory ("how to choose") | `/composite-decks-essential-tips-for-choosing-the-perfect-builder/` (single URL @98) | DECIDE — REWRITE or 410 | Either rebuild into a real comparison guide or prune | Either: page reaches top-30 for `how to choose a deck contractor` OR is 410'd and removed from sitemap | open |

## Anomalies Surfaced (Investigate during Day-1 audit and Days 13–18)

- **`https://ldndecks.com/` outranks `/top-decks-build-near-you/deck-builder-in-alexandria/`** for `deck builders alexandria va` (#33 vs #26). The location page should own this; investigate H1/internal-link/CMS template issue.
- **`/top-decks-build-near-you/deck-builder-in-leesburg/` accidentally ranks #30 for `loudoun county typical deck details`** — confirm whether an H2 or anchor on the Leesburg page is leaking. Likely template / boilerplate.
- **`/services/patios/` at #38–65 for 5.4K-volume head terms** despite ranking for the right intent — content is thin, not wrong. REWRITE candidate.
- **`/composite-deck-cost-northern-virginia/` at #70 for 880-volume head** — same pattern.

## Process Notes

- Each row is reserved on the date the skill or LDN Decks adds it. Verified date updates whenever the SERP is rechecked.
- Updates required when GSC data lands during [[Days 1-5 GSC Diagnostic and Triage]] — GSC may reveal queries that DataForSEO missed (long tail) and may correct intent classification.
- Whenever a 301 redirect, merge, or new publish changes ownership, update the relevant row's canonical URL.
- The "Anomalies" rows are intentional flags for investigation — NOT errors. Each will be resolved when its owning slice runs.

## Pre-Publish Checks

Before publishing or refreshing any page:

1. Normalize the planned primary keyword (lowercase, strip punctuation, singular/plural).
2. Search this ledger for exact and near-match variants.
3. Check current SERP intent for the keyword (rerun via `seo-dataforseo` if not in the current XLSX).
4. Confirm planned title, H1, slug, primary CTA, and first paragraph do not duplicate an owner page's targeting.
5. Require any supporting article to link back to the canonical owner with a natural anchor.

## Rules

- If a keyword is assigned to an owner, do not create a new URL for the same intent.
- If SERP overlap with an existing keyword is high (top 5 URLs largely overlap), treat the new idea as a section/refresh of the existing page, not a new page.
- Secondary/supporting keywords may appear in body copy, FAQs, captions, and internal anchors — never in another page's title/H1/slug/primary CTA.
- Change ownership only after evidence (GSC impressions/clicks) shows the new page is the stronger natural landing page.
- Retire stale rows only after documenting the reason in [[Log]].
