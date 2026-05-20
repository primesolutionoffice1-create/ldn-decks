# Local SEO Brain — Vault Operating Instructions

This vault is the brain. Read it before you write to it.

## LDN Decks context

This vault is configured for LDN Decks, a premium Northern Virginia deck
builder focused on high-value outdoor living and structural deck work.

Primary revenue outcomes:

- Qualified phone calls
- High-ticket composite deck leads
- Google Maps visibility
- Local SEO rankings
- AI search visibility
- Backlinks and local authority
- Conversion-rate improvement

Core markets:

- Ashburn, Leesburg, Sterling, Fairfax, McLean, Reston, Arlington, Vienna,
  Great Falls, Loudoun County, Fairfax County, and Northern Virginia.

Core services:

- Composite decks, Trex, TimberTech, AZEK/PVC, deck replacement, covered
  decks, luxury outdoor living, cable railings, deck lighting, outdoor
  kitchens, and high-ticket structural deck repair.

## LDN safety overlay

This vault is for analysis, drafts, recommendations, checklists, files, and
implementation plans only.

Never take live-impact actions from this vault without explicit
action-specific approval. This includes publishing pages, changing canonicals
or redirects, editing GBP, changing Google Ads, editing GA4/GTM/tracking,
sending outreach, submitting listings, or changing public business profiles.

Use this approval block before any live-impact recommendation moves beyond
planning:

```text
Recommended change:
Reason:
Expected impact:
Risk level:
Rollback plan:
Approval required: YES
```

Every prioritized recommendation should use the LDN scoring line:

```text
Priority score: X/10 | Revenue: X | Urgency: X | Difficulty: X | Speed: X | Confidence: X
```

## Read order

1. `wiki/hot.md` — current state and next action.
2. `wiki/index.md` — full map of the vault.
3. `wiki/overview.md` — plain-language summary.
4. The relevant chapter, audit, or framework note (linked from Index).
5. **If the chapter has a `> [!warning] 2026 freshness layer` callout** at
   the top, also read the linked freshness note. The seeded chapter gives
   you the strategy; the freshness note gives you current tactics (model
   names, sunset features, post-Dec-2025 E-E-A-T reality).

## What this vault is

A persistent, source-cited operating brain for ranking local businesses in
the Google Map Pack, organic local SERPs, and AI search.

It comes pre-loaded with a seeded knowledge base:

- 59 chapter notes across glossary, concepts, frameworks, audits, GBP,
  content, backlinks, and LLM SEO.
- 37 reusable AI prompts grouped by parent chapter.
- 26 reference images.

## Folder roles

| Folder | What lives here |
|---|---|
| `meta/` | Start Here, Dashboard, RESOLVER |
| `glossary/` | Local SEO terminology |
| `concepts/` | Foundational concepts (what is Local SEO, ranking factors, E-E-A-T) |
| `frameworks/` | Strategic frameworks (3 Phases, Core 30, Local Link, Schema) |
| `audits/` | Audit playbooks (property, content, technical, CTR, authority) |
| `gbp/` | Google Business Profile playbooks |
| `content/` | Content production playbooks |
| `backlinks/` | Backlink + local citation strategy |
| `citations/` | Per-client citation tracker (populated on ingest) |
| `llm-seo/` | AI/LLM ranking factors and schema |
| `freshness/` | **2026 freshness layer — supplements seeded chapters with current state (model names, sunset features, Dec 2025 Core Update, Reddit-LLM partnership, schema modernization)** |
| `prompts/` | 37 reusable AI prompts |
| `locations/` | Per-location profile notes (populated on scaffold) |
| `competitors/` | Competitor profiles |
| `reviews/` | Review-thread notes |
| `keywords/` | Keyword research output |
| `sources/` | Source manifests for every imported raw file |
| `flows/` | Workflow notes |
| `decisions/` | Approval queue + decision log |
| `deliverables/` | Health scorecard, action roadmap |
| `reports/` | Weekly client reports |
| `canvases/` | Obsidian canvas overviews |

## Hard rules

1. **Preserve `.raw/`.** Raw source material is immutable. Never edit raw
   files after import. If a source is stale, import a new dated copy.
2. **Cite every recommendation.** Every audit line, every roadmap item,
   every decision in the approval queue points to a source note or raw
   file hash. No exceptions.
3. **No credentials in the vault.** No API keys, OAuth tokens, GBP login,
   GA4 credentials, or client passwords. Use `.env` files outside the
   vault.
4. **No PII in review notes.** Hash or generalize review-author names.
   Preserve ratings, dates, sentiment, and themes — not identities.
5. **No GBP profile mutation in V1.** All GBP changes go through the
   client. The Brain produces the diff; the human ships it.
6. **No NAP change recommendation without owner sign-off.** Document the
   change in the approval queue with rollback steps.
7. **Update `hot.md`, `index.md`, `overview.md`, `log.md`** after any
   meaningful work. Stale operating files are the #1 cause of brain rot.
8. **Refresh freshness notes every 90 days.** They cite retrieval dates and
   source URLs. If the source claims have moved, update the note in place
   (preserve the slug to keep wikilinks).
9. **LDN live systems stay protected.** Do not modify `ldn-decks-next`, live
   website code, GBP, Google Ads, GA4, GTM, tracking, outreach, paid listings,
   or other public systems from this vault without explicit approval for the
   exact action.

## Wikilink discipline

- Use `[[Note Name]]` for canonical links.
- Use `[[note-slug|Display Text]]` for prettier links.
- Use `[[folder/_index|Folder Hub]]` to link to folder hubs.
- Use `![[images/imageN.png]]` to embed images.
- Every chapter note must link back to its folder hub.
- Every new note must be reachable from `wiki/index.md` within 2 hops.

## When you're stuck

- Read `wiki/meta/RESOLVER.md` for the troubleshooting playbook.
- Check `wiki/log.md` for the last meaningful change.
- If the next action isn't obvious, run
  `python scripts/guide_next_action.py --vault <this-vault>` to read hot.md
  and surface the next move.
