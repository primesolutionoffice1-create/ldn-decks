# Ldndecks Marketing Brain

This folder is an **Obsidian vault**. It is the strategic brain for **Ldndecks** and the website **https://ldndecks.com** — a reusable marketing-brain template scaffolded by the `marketing-brain` Claude Code skill.

If you reached this folder some other way (cloned the repo to explore, downloaded the template, copied it manually), it works exactly the same — open it as a vault in Obsidian and follow the read-order below.

## Open This As An Obsidian Vault

1. Install [Obsidian](https://obsidian.md) (free desktop app, all platforms).
2. Open Obsidian → **Open folder as vault** → select THIS folder.
3. Obsidian will ask "Trust author and enable plugins?" — say yes (the vault uses Templater, Bases, and other recommended community plugins listed in `.obsidian/community-plugins.json`).
4. The vault opens. Start reading at `wiki/hot.md`.

If you have never used Obsidian before: it is a markdown editor with `[[wikilinks]]` between notes. Click any wikilink to follow it. `Ctrl+O` (or `Cmd+O` on Mac) opens the quick switcher to jump to any note by name. The graph view (`Ctrl+G` / `Cmd+G`) shows the link structure.

## Karpathy Read Order (Hot → Index → Note)

This vault is organized as a Karpathy-style LLM wiki. The read order is the same for humans and for AI agents:

1. **Read `wiki/hot.md` first** — the working-memory cache. ~500 words. What's recent, what's blocking, where to start.
2. **Then `wiki/index.md`** — the navigation map. Find the section that matches what you need; click the wikilink.
3. **Then the relevant note** — flow, decision, page brief, audit, deliverable, or concept.

This pattern is enforced in `CODEX.md` (the vault's operating rules). Any Claude or other LLM agent that opens this vault should follow the same order.

## What's In Here

```
Ldndecks Marketing Brain/
├── CODEX.md                       Operating rules + cred-safety + Karpathy read-order
├── shipping-rules.md              The release standard (read before any change)
├── README.md                      You are here
├── _attachments/                  Publishable image and asset folder
├── _templates/                    Templater templates for new notes
├── .raw/                          Immutable source documents (manifest.json tracks them)
│   └── sources/visuals/           Optional screenshot + image reference captures
└── wiki/                          The knowledge layer
    ├── hot.md                     Karpathy hot context (read first)
    ├── index.md                   Navigation map (read second)
    ├── overview.md                Plain-language summary
    ├── log.md                     Activity log (newest-first, append-only)
    ├── meta/                      Onboarding + dashboards (Bases views)
    ├── audits/                    Site state diagnostics
    ├── concepts/                  Knowledge layer (FLOW, HCU, E-E-A-T, etc.)
    ├── entities/                  People, brands, tools, competitors
    ├── flows/                     30-day execution flows
    ├── decisions/                 Decision records
    ├── pages/                     Page-brief templates per content type
    ├── keywords/                  Keyword strategy + XLSX schema docs
    ├── sources/                   Source documentation
    ├── deliverables/              Strategic outputs (ULTIMATE BEAST plan, scorecard, roadmap)
    ├── questions/                 Open questions for the client
    └── business-types/            Vertical-specific strategy overlays
```

## Filling The Placeholders Manually

If you opened this template directly (without running the `marketing-brain` skill), every note contains `Ldndecks`, `https://ldndecks.com`, `Custom composite deck and screened porch builder, Northern Virginia`, `local-seo-services`, `Daniel Agrici`, and `2026-05-11` placeholders. Two ways to fill them:

**Recommended** — let the skill do it:

```
/marketing-brain new <client-slug> <site-url> --business-type <type>
```

Where `<type>` is one of: `affiliate-content`, `local-seo-services`, `saas`, `ecommerce`, `lead-gen-b2b`, `publisher-news`. The skill scaffolds a fresh copy of this template into a new vault, slot-fills every placeholder, applies the business-type overlay, and runs the 6-step DataForSEO research pipeline that populates the wiki notes with real data.

**Manual** — find/replace in your editor:

- `Ldndecks` → the client's name (e.g., "Acme Outdoors")
- `https://ldndecks.com` → the site's canonical URL (e.g., "https://www.example.com")
- `Custom composite deck and screened porch builder, Northern Virginia` → the niche (e.g., "fly fishing", "dental practice", "B2B SaaS")
- `local-seo-services` → the business-type overlay slug (e.g., "Affiliate Content")
- `Daniel Agrici` → the strategic owner (e.g., "Daniel Agrici")
- `2026-05-11` → today's date in YYYY-MM-DD format
- `ldndecks.com` → the site/brand name (e.g., "Acme Outdoors")
- `local-seo-services` → the site type used in the E-E-A-T concept filename (e.g., "Affiliate Sites", "Local Service Businesses")

After filling, open `wiki/hot.md` and walk the [[Start Here]] flow.

## Business-Type Variants

The same template adapts to six verticals. Each variant lives in `wiki/business-types/`:

- **Affiliate Content** — affiliate links + display ads + lead-gen for an attached service brand. Recovery posture often relevant. E-E-A-T moat: real on-the-ground experience.
- **Local SEO Services** — local service business, NAP consistency, GBP-driven, local prominence signals, citations.
- **SaaS** — trial conversion focus, comparison content ("X vs Y"), BoFu pages, free-tool SEO, integration pages.
- **Ecommerce** — product schema, category hierarchy, review aggregation, faceted nav considerations, seasonal demand peaks.
- **Lead Gen B2B** — whitepapers, gated content, booking funnels, ABM signals, LinkedIn + sales-assist content.
- **Publisher News** — topical authority, freshness signals, EEAT-heavy author profiles, news schema, RSS, Google Discover.

The active overlay is referenced in `CODEX.md` and surfaces specific decisions, page templates, and measurement priorities relevant to the client's revenue model.

## What This Brain Is NOT

- **Not a one-off project artifact** — it's a reusable template proven across multiple verticals.
- **Not a guarantee** — every recommendation is advisory until verified against Ldndecks's GSC, analytics, and site state.
- **Not a content factory** — the brain governs strategy and decisions; content is produced by humans (with AI assistance) following the page-brief templates.
- **Not the execution engine** — execution lives in [`claude-seo`](https://github.com/AgriciDaniel/claude-seo) (audits) and [`claude-blog`](https://github.com/AgriciDaniel/claude-blog) (content production). This brain orchestrates them.

## Next Steps

If you opened this for the first time, go to `wiki/meta/Start Here.md` for the beginner-friendly walkthrough.

For future image generation or page refreshes, start with `[[Visual Reference Capture Workflow]]` so screenshots, source images, style constraints, and reuse boundaries are saved before production work begins.

If you scaffolded via the skill and the wiki notes are already populated, go straight to `wiki/hot.md` and pick up the most recent active thread.

If you are an AI agent (Claude or other) opening this vault: read `CODEX.md`, then `wiki/hot.md`, then `wiki/index.md`, then the relevant note.

— `marketing-brain` template, scaffolded 2026-05-11
