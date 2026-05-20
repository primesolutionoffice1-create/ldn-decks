---
type: report
title: "Local Entity And Index Cleanup Pack 2026-05-17"
created: 2026-05-17
updated: 2026-05-17
status: draft
tags:
  - report
  - ldndecks
  - local-seo
  - technical-seo
  - ai-search
related:
  - "[[local-seo-tracker|Local SEO Tracker]]"
  - "[[seo-command-center|SEO Command Center]]"
  - "[[ai-visibility-tracker|AI Visibility Tracker]]"
  - "[[LDN Decks Local SEO Dominance Hub]]"
  - "[[LDN Decks AI Overview Visibility Hub]]"
---

# Local Entity And Index Cleanup Pack 2026-05-17

## Compiled Truth

No live site or citation changes were applied in this session.

Current public and internal evidence still shows:

- mixed `www` and apex host exposure in search;
- duplicate comparison-page exposure around `trex-vs-timbertech-vs-azek`;
- indexed off-focus URLs such as `/services/windows`;
- Chamber citation drift between older `Loudoun Deck` / Ashburn traces and the current Centreville business state;
- fragmented public trust counts across search snippets, Birdeye, and Trustpilot.

## Important Preflight Warning

Older notes disagree on the intended canonical host. Some project notes point to `www.ldndecks.com`, while the marketing-brain audit stack argues for apex normalization. Do not ship redirects or canonical changes until the chosen host is verified against:

1. current site config,
2. canonical tags,
3. sitemap output,
4. Search Console property setup,
5. any live redirect rules already in production.

## Approval-Gated Cleanup Actions

| Priority | Exact recommended change | Reason | Expected impact | Risk | Rollback | Approval required |
| --- | ---: | --- | --- | --- | --- | --- |
| 9 | Verify and enforce one canonical host globally across redirects, canonicals, sitemap, and internal links. | Mixed host signals split authority and confuse entity retrieval. | Stronger topical consolidation and cleaner brand/entity resolution. | Medium because legacy assumptions conflict. | Revert redirect/canonical rules to the prior state if validation fails. | YES |
| 9 | After host choice is confirmed, consolidate `/blog/trex-vs-timbertech-vs-azek` into the primary comparison owner URL. | Duplicate comparison pages split ranking and citation equity. | Better performance on an already valuable comparison asset. | Medium. | Remove the redirect if the wrong owner URL was selected. | YES |
| 8 | Remove, noindex, or otherwise de-prioritize off-focus URLs like `/services/windows` from sitemap/index coverage. | These pages dilute topical authority and attract low-value traffic. | Cleaner crawl budget and stronger topical focus on decks/outdoor living. | Low to medium. | Restore sitemap or index settings if a page proves commercially needed. | YES |
| 8 | Normalize Loudoun Chamber and related citation records to one brand/address state: `Loudoun Decks`, `13704 Winding Oak Cir, Centreville, VA 20121`, `(571) 655-7207`, and the approved canonical site URL. | Public NAP drift weakens Maps trust and AI entity clarity. | Better local trust, better entity consolidation, fewer buyer-confidence leaks. | Low. | Restore prior directory fields if a verified legal/business naming issue appears. | YES |
| 7 | Align on-site review-count copy and trust snippets with current public sources instead of older `41+` shorthand. | Search snippets and third-party trust surfaces currently disagree. | Cleaner buyer trust and fewer AI retrieval contradictions. | Low. | Restore prior copy if public counts are verified differently. | YES |

## Execution Checklist

- Confirm the intended canonical host with code and live fetch evidence.
- Build a redirect map for duplicate comparison and legacy location URLs.
- Audit sitemap entries for off-focus services before removal.
- Capture current Chamber listing screenshots before editing.
- Prepare exact replacement NAP copy for Chamber and any matching citation sources.
- Re-check public search snippets after changes propagate.

## AI / GEO Benefit

This pack is not just local SEO hygiene. It directly supports ChatGPT, Google AI Overviews, Perplexity, and Gemini retrieval by reducing entity ambiguity:

- one host,
- one comparison-page owner,
- one public business state,
- one trust story.

## Recommended Owner Split

- SEO/dev owner: host, canonical, redirect, sitemap, and index decisions.
- Local SEO owner: Chamber and citation normalization.
- Brand/content owner: trust-copy alignment on the site.

## Deadline

Review this pack by `2026-05-23` before any new location-page expansion or GBP-promoted content work.
