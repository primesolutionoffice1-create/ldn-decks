---
type: "meta"
title: "Start Here"
created: "2026-05-19"
updated: "2026-05-19"
---

# Start Here

Welcome to **Local SEO Brain** for **LDN Decks**.

![[brain-relationship-map.svg]]

## 5-step onboarding

### 1. Set the strategic frame

Read these in order, then come back here:

- [[the-3-phases-of-local-seo|The 3 Phases of Local SEO]]
- [[what-is-local-seo|What is Local SEO]]
- [[key-google-rank-factors|Key Google Rank Factors]]
- [[the-core-30-content-strategy|The Core 30 Content Strategy]]

### 2. Decide which phase the client is in

| Phase | The client is here if... | Next playbook |
|---|---|---|
| **1. Property** | Website is new, audit-untouched, or thin on content | [[property-audit-quick-wins|Property Audit Quick Wins]] |
| **2. GBP** | Website is reasonable but GBP is unverified or unoptimized | [[gbp-overview]] |
| **3. Backlinks** | Site + GBP are clean but rankings are stuck | [[backlinking-overview]] |

Most clients are in Phase 1 even if they think they're in Phase 3. Audit
the property first.

### 3. Establish NAP

Before any GBP or citation work, lock down the canonical NAP record:

- **Name** — exact legal/brand name as it should appear on the GBP.
- **Address** — exact physical address (street, city, state, ZIP). For
  SAB, the service area + hidden address.
- **Phone** — local area code preferred, single canonical phone.

Document this in `wiki/locations/<location-slug>.md` (see template). Any
NAP drift across citations becomes a fix-list line.

For LDN Decks, keep GBP, citation, and public profile recommendations in
draft or approval-queue status until the owner approves the exact action.

### 4. Drop the first raw source

Pick one of these to start:

- **GBP Insights CSV** (Performance export from GBP dashboard)
- **Citation export** (Whitespark, BrightLocal, or Moz Local)
- **Review export** (Google reviews JSON, Yelp scrape)
- **Geo-grid scan** (Local Falcon, GeoRanker, Local Viking CSV)
- **Site crawl** (Screaming Frog export or rendered HTML)

Drop the file under `.raw/clients/ldn-decks/` and run:

```bash
python scripts/ingest_source.py --vault <this-vault> --file <path>
```

### 5. Synthesize and review

```bash
python scripts/synthesize_brain.py --vault <this-vault>
python scripts/lint_vault.py --vault <this-vault>
python scripts/render_brain_report.py --vault <this-vault> --html-only
```

Open the generated HTML report. Review the Health Scorecard, Action
Roadmap, and Approval Queue. Send for client review.

## House rules

- **No GBP edits without owner sign-off.** Document changes in
  [[Approval Queue]].
- **No keyword stuffing, no hidden text, no fake reviews.** The brain
  refuses these.
- **No recommendation without a source.** If you can't cite it, don't
  recommend it.
- **Re-seed is safe.** Re-running `ingest_knowledge_base.py` is idempotent
  and only touches `status: seeded` notes.

## Related

- [[Hot]]
- [[Index]]
- [[Dashboard]]
- [[Overview]]
- [[Source Intake Workflow]]
