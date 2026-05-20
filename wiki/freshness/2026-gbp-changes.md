---
type: "freshness"
title: "2026 GBP Changes (sunsets + new features)"
created: "2026-05-19"
updated: "2026-05-19"
status: "current"
applies_to: ["gbp-overview", "gbp-posts", "gbp-optimization", "gbp-categories", "gbp-services", "gbp-description", "gbp-verification"]
confidence: "high"
retrieved: "2026-05-19"
---

# 2026 GBP Changes — sunsets + new features

> **Why this note exists:** Google has shipped material GBP changes since
> the seeded KB was written. Some features it describes no longer exist;
> others have replaced them. The seeded strategy is still correct; the
> tactics need this update.

## Sunset features (don't recommend these anymore)

| Feature | Sunset date | Replacement |
|---|---|---|
| **Google Business Profile Chat** | 2024-07-31 | Text messages or WhatsApp via eligible profiles |
| **GBP Call History** | 2024-07-31 | None (third-party tracking only) |
| **GBP Q&A (manual + API)** | API sunset 2025-11-03 | **Ask Maps** (Gemini-generated answers) |
| **GBP Free Website Builder** | 2024 (full sunset) | Standalone websites required — Google won't host one |
| **Chat FAQ** | 2024 | Removed |
| **Request a Quote** (in-profile) | 2024 | Removed |
| **`BUSINESS_CONVERSATIONS` Performance metric** | 2024 | No longer in Performance API |

If the seeded KB or a client recommendation references any of these as
*current capability*, flag it. The brain refuses to recommend recreating
sunset workflows.

## New / changed features (recommend these)

### Ask Maps (Gemini-powered Q&A)

Replaces the manual "Ask a question" feature. Gemini scans:

- Your GBP profile
- Your website
- Your reviews
- Public web data

…to generate an instant conversational answer. **You don't control it
directly** — you control it by ensuring your GBP, website, and review
content are accurate, complete, and well-structured.

**Tactic:** Treat your GBP description, FAQ section on your site, and
review responses as **training data for Ask Maps**.

### Post scheduling + multi-location posting

Google rolled out **scheduled posts** and **bulk posting across multiple
locations** in 2025. For agencies/franchises managing 10+ locations, this
is a meaningful workflow improvement.

**The brain still refuses to autopost in V1.** Use scheduling **manually**
inside GBP; the brain produces the *content* in [[Approval Queue]].

### AR Store Tours + "Transform with AI" images

Visual search is now a **core ranking pillar**. GBP prioritizes profiles
with immersive imagery. New tools:

- **AR Store Tours** — 360° virtual tours of physical locations
- **Transform with AI** — Google's image enhancement (better backgrounds,
  consistent lighting)

**Tactic:** Audit existing photos. If they're under 10 originals, schedule
a photo upload sprint. Use AR Store Tour where physical location supports it.

### AI fake-review detection

Google has improved automated fake-review removal in 2026. Side effect:

- Some legitimate reviews get caught up in dispute queues
- Reporting and tracking review disputes is now possible **directly from
  the GBP dashboard** (was a slow email-based process before)

**Tactic:** Add review dispute tracking to the weekly client report cadence.

### Local Service Ads / eCommerce integration

GBP integrates more deeply with Local Service Ads (LSA) and eCommerce in
2026. Customers can:

- See local inventory inside Search
- Book services directly from the search result
- Purchase via Google Shopping integrations

**Tactic:** For service businesses, evaluate LSA enrollment as a complement
to organic GBP (separate budget, separate gates).

## Algorithm/ranking changes (2026)

### Less brand prominence, more popularity

Google adjusted the local algorithm: **interaction count** (clicks, calls,
direction requests) now matters more than raw brand mentions / link
authority. Implication:

- Mid-tier brands with high engagement can outrank dominant brands with
  lower engagement
- Citation building alone doesn't move the needle — engagement does
- "Get your GBP found and clicked" is the new Phase 2 mantra

### Activity decay is steeper

Profiles inactive for 30+ days now see **meaningful visibility drops**. In
2023, decay was gradual; in 2026 it's sharp.

**Tactic:** Post at least 2× per week. Schedule them. This is now table
stakes, not advanced.

### Recommended cadence (2026)

| Activity | 2023 baseline | 2026 minimum |
|---|---|---|
| GBP Posts | 1×/month | 2×/week |
| New photos | quarterly | weekly |
| Review responses | within 7 days | within 24 hours |
| Q&A updates | manual, rare | passive (Ask Maps handles via your content) |

## What this changes about the seeded playbook

### `gbp-posts` chapter

- Strategy unchanged, cadence raised from "regular" to **2×/week**.
- "Schedule them" is now a first-class option, not an external tool hack.

### `gbp-overview` chapter

- Map Pack still captures the lion's share of local clicks, but **AI
  Overviews are eating into it** (see [[2026-ai-overviews-state|2026 AI Overviews State]]).
- Reviews + photos + structured content feed both surfaces.

### `gbp-verification` chapter

- Verification process is unchanged for most categories.
- Some categories (e.g., locksmiths, home services in certain regions) now
  require video verification.

### `gbp-categories`, `gbp-services`

- Strategy unchanged. Category importance is still ~80% of GBP relevance.
- Use [[2026-llm-model-lineup|Claude Opus 4.7 or Sonnet 4.6]] for the
  generation prompts in those chapters (was "Claude" in seeded copy).

## Refusal

- No recommending sunset features as if current.
- No autoposting via API in V1.
- No fake-review tactics (Google is now removing them aggressively).

## Sources

- Reputation.com — [Goodbye GBP Chat and Call History](https://reputation.com/resources/articles/goodbye-google-business-profile-chat-and-call-history-what-you-should-know)
- Google Help — [Changes to GBP chat and call history](https://support.google.com/business/answer/14919056?hl=en)
- Birdeye — [Google is sunsetting the Q&A API](https://birdeye.com/blog/google-business-profile-qa-api-discontinued/)
- OAK Interactive — [GBP Updates 2026](https://oakinteractive.com/whats-new-in-google-business-profile-the-2026-updates-you-cant-ignore/)
- Explore Digital — [Top 8 Biggest GBP Changes in 2026](https://www.exploredigital.com/blog/top-8-biggest-changes-to-google-business-profile-in-2026-so-far/)

## Related

- [[gbp-overview|GBP Overview (seeded)]]
- [[gbp-posts|GBP Posts (seeded)]]
- [[gbp-optimization|GBP Optimization (seeded)]]
- [[GBP Optimization Workflow]]
- [[wiki/freshness/_index|Freshness Hub]]
