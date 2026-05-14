# Owner Evidence Collection Brief

**Page:** `/services/deck-repair`
**Branch:** `feat/deck-repair-hub-finalization`
**Status:** Architecture and SEO are production-ready. Proof layer is intentionally incomplete. DO NOT DEPLOY until every gate below is closed.

---

## What you're being asked to do

The deck-repair hub is built. It scores well on every SEO and code-anchored factor we control without your input. What's NOT yet on the page — and cannot be on the page without your input — is the proof layer:

- Real before/after photos from your own projects
- Real city + date + scope for 6 representative repair jobs
- The exact wording of your workmanship warranty
- Verified cost ranges for 4 repair scopes not yet in your standard calculator

Until those land in the placeholders, the page stays on the feature branch and does NOT deploy. This protects: Google manual reviews, AI citation eligibility, future legal exposure, and trust integrity if a reader cross-checks a claim.

---

## The six-step sprint (in order)

Do these in order. Each step gates the next.

### Step 1 — Photo Ingestion  (highest leverage)

**What you supply:** 9 original Loudoun Decks project photos. No stock. No AI-generated. No screenshots from other contractors' sites. If you have a photo with PII (homeowner name on a permit, license plate, house number), redact before sending.

**The 9 photos needed**, mapped 1:1 to placeholders on the page:

| Slot | Photo type | Where it goes on the page |
|---|---|---|
| 1 | Hero before/after — a representative split-image | Top of page, replaces generic `/torndeck.webp` |
| 2 | Ledger failure — water staining, exposed rim joist rot | Common Structural Failures section |
| 3 | Post rot — excavated post base at grade | Common Structural Failures section |
| 4 | Stair rebuild — before and after of stringer / tread work | Common Structural Failures section |
| 5 | Railing repair — code-compliant rail with lateral-load hardware visible | Code Failures section |
| 6 | Composite resurfacing — before (wood) | Resurfacing section |
| 7 | Composite resurfacing — after (composite) | Resurfacing section |
| 8 | Joist sistering / framing repair — new joist bolted to existing | Failures section |
| 9 | Optional: permit or inspection screenshot, all PII redacted | Permits section |

**Naming convention** (so the page can pick them up cleanly):

```
/public/showcase/repair-NN-<slug>.jpg

repair-01-hero-before.jpg
repair-01-hero-after.jpg
repair-02-ledger-failure.jpg
repair-03-post-rot.jpg
repair-04-stair-rebuild-before.jpg
repair-04-stair-rebuild-after.jpg
repair-05-railing-repair.jpg
repair-06-resurface-before.jpg
repair-07-resurface-after.jpg
repair-08-joist-sistering.jpg
repair-09-permit-redacted.jpg  (optional)
```

**Metadata to include** if you have it (helps with EEAT but not blocking):

- City + month/year the photo was taken
- Any code item the photo illustrates
- Whether the homeowner consented to it being public

Drop the photos in `/public/showcase/` or send via the channel we agreed on; the page will be updated to reference the new paths.

---

### Step 2 — Project Evidence Ingestion

**What you supply:** Fill out the 6 project cards on the page with verified data. Use the template at:

> `seo-blueprint/eeat-sweep-2026-05-11/PROJECT-INGESTION-TEMPLATE.csv`

Each project needs:

- City / neighborhood
- Month / year
- Repair type (one line)
- Failure found (one line)
- Work performed (one to two lines)
- Permit jurisdiction (Y/N + which county)
- Before photo path (matches Step 1 naming)
- After photo path
- Whether it was resurface or rebuild
- Any code item corrected (IRC R507.x reference if relevant)

**Hard rule:** if any field is unknown, leave it blank. Do NOT fabricate to fill it. A blank field on the template tells me "skip this slot or rotate in another project."

If you cannot supply 6 projects with verified detail, supply 3 or 4. The page will scale down — fewer real projects beat six half-fabricated ones every time.

---

### Step 3 — Workmanship Warranty Term Verification

**What you supply:** Exact wording of your repair workmanship warranty. I need:

- Workmanship duration (e.g. "5 years on structural workmanship")
- Scope — what's included, what's excluded
- Whether structural repair and labor have different terms
- Whether composite resurfacing carries a separate workmanship period (distinct from the manufacturer's stain-and-fade warranty on the boards)
- Any conditions that void the warranty (e.g. homeowner-applied sealant)
- Whether the warranty transfers if the home is sold

**Hard rule:** I will not guess or industry-average this. The placeholder stays in place until you confirm exact policy language. Send the warranty text from your actual contract paperwork — that's the source of truth.

---

### Step 4 — Verified Cost Ranges

**What you supply:** Real cost ranges for 4 repair scopes currently marked `[VERIFY FINAL COST RANGE BEFORE PUBLISHING]`:

| Scope | What I need |
|---|---|
| Joist sistering (per joist) | Typical NoVA range from your historical estimates / invoices |
| Ledger re-flashing & re-bolt to IRC R507 | Range for a typical Loudoun or Fairfax build, including any siding-removal scope |
| Post replacement (per post, with footing inspection) | Range per post, with separate range for non-conforming footing rebuild |
| Emergency stabilization / safety shoring | Per-visit or per-flat-fee range for same-day response |

**Hard rule:** Source must be one of:

1. Actual past estimates you've sent clients
2. Historical invoices for completed work
3. Numbers already shipping in your `DeckCostCalculatorWidget`

If none of those exist for a scope, the cost stays as a placeholder — the page will note "cost varies; request a free estimate" and offload the number to the inspection visit.

---

### Step 5 — Final QA Pass

**Tooling:** [scripts/qa-gate.sh](./scripts/qa-gate.sh) — run from repo root.

The QA gate script checks:

- Zero `data-evidence-needed` markers in the served HTML of `/services/deck-repair`
- Zero `DO NOT PUBLISH` markers
- Zero `VERIFY FINAL COST` markers
- All 9 photo paths resolve (HTTP 200)
- All 16 internal links resolve
- Schema parses (4 JSON-LD blocks, single FAQPage)
- `npm run build` returns clean
- All 3 deck-repair URLs return 200

Run it. If anything is red, do not proceed to Step 6.

**Manual QA (after the gate passes):**

- Mobile: open `/services/deck-repair` on a real phone — check that all tables overflow-scroll cleanly, jump-link pills wrap, photos load without CLS
- Lighthouse desktop + mobile — LCP < 2.5s, INP < 200ms, CLS < 0.1
- Open all 9 photos in their final paths and visually confirm they're the right ones
- Read the page top-to-bottom one more time, looking for any sentence that doesn't sound like Daniel/Nick would say it

---

### Step 6 — Merge, Deploy, Index, Cross-Link

**Only if Step 5 passes 100%.**

```bash
git checkout main
git pull
git merge --no-ff feat/deck-repair-hub-finalization
git push origin main
```

Then:

1. **Vercel deploy** — verify production URL `/services/deck-repair` returns 200 and matches dev
2. **Request indexing** in Google Search Console — submit URL via URL Inspection → Request Indexing
3. **Cross-link from peer pages** (already mapped — see post-deploy section below)
4. **Add to llms.txt** — append the new hub URL to `/llms.txt`
5. **Submit to Bing IndexNow** — the existing IndexNow route at `/api/indexnow` will handle this automatically on deploy

---

## Post-deploy cross-linking targets

After deploy, add an outbound link to `/services/deck-repair` from each of:

| Page | Anchor text |
|---|---|
| `/deck-permit-loudoun-county-virginia` | "When a repair triggers a permit — see our deck repair hub" |
| `/deck-permit-fairfax-county-virginia` | Same |
| `/deck-permit-prince-william-county-virginia` | Same |
| `/deck-financing-northern-virginia` | "Financing deck repair projects" |
| `/composite-deck-cost-northern-virginia` | "For repair-vs-replace cost decisions" |
| `/services/deck-inspection` | "After inspection: structural repair scope" |
| `/` (homepage `ServicesHome` section) | Featured service card |
| `/deck-builders-loudoun` + city pages | "Deck repair in [city]" |

These are not blocking the deploy — they accelerate indexing once it's live. Add in a single follow-up commit on `main`.

---

## What you do NOT need to do

- Write copy for the page — it's complete
- Pick keywords — they're in
- Design schema — it's in
- Add internal links from the hub outward — all 16 are wired
- Edit the SEO metadata — it's set
- Touch the FAQ content — it's grounded in code, not customer stories

Your job is evidence. Mine was the framework.

---

## Failure modes — what NOT to do under any circumstances

- Do not write customer stories that didn't happen
- Do not invent technician names
- Do not estimate a warranty term — get the real one
- Do not use AI-generated before/after images
- Do not use stock photos
- Do not fabricate dates "approximately"
- Do not embellish a real project to make it sound bigger than it was

If pushed for time, ship fewer projects with real evidence rather than more with embellishment. The page is designed to work at 3 real projects or at 6 — but it cannot work at 6 invented ones.

---

## Status board

When this brief lands in your hands, mark the box as steps complete:

- [ ] Step 1 — All 9 photos supplied and named per convention
- [ ] Step 2 — Project CSV filled with 3+ verified entries
- [ ] Step 3 — Warranty term confirmed and pasted from contract
- [ ] Step 4 — 4 cost ranges supplied or marked "request estimate"
- [ ] Step 5 — `scripts/qa-gate.sh` returns all green
- [ ] Step 6 — Merge + deploy + indexing request + cross-links

Until every box is checked, the branch stays on `feat/deck-repair-hub-finalization` and does not merge.

---

**Current status:** Architecture and SEO production-ready. Proof layer awaiting owner input. **DEPLOY-SAFE: NO.**
