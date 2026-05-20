---
type: meta
title: "Log"
created: 2026-05-04
updated: 2026-05-04
tags:
  - log
  - marketing-brain
status: active
related:
  - "[[Index]]"
  - "[[Hot]]"
sources: []
aliases:
  - Log
---

# Log

**Convention**: append-only. **Newest entries at the TOP.** Never edit or delete past entries — if a prior decision was wrong, file a new entry with the correction and a pointer to the prior entry. The log is the auditable history of what happened, when, and why.

Each entry: `## YYYY-MM-DD — <short title>` followed by paragraph(s) of detail.

---

## 2026-05-11 — BEAST plan written, editorial PDF re-rendered, vault state refreshed

After [[ULTIMATE BEAST Plan]] was written by the `beast-planner` subagent (5,048 words, 10 sections, `status: mature`), the canonical `scripts/render_beast_pdf.py` produced a PDF that showed raw `{{cover_title_html}}` / `{{vol_label}}` / `{{kpi*_value}}` placeholder strings on the cover and inside section bodies. Root cause: the editorial template `assets/beast-pdf.html` references **~50 structured slots** (cover, TL;DR, KPI strip, tables, callouts, FLOW two-col blocks, day blocks, signoff), but the canonical renderer only fills basic slots (`client_name`, `site_url`, `date`, `plan_body`, `plan_css`) and keeps an `HTML_ALLOWED_VARS` allowlist that defaults to escaping every other value — so the structured editorial slots remained as literal `{{...}}` strings.

Fix applied in two passes:
- **Editorial composer pass.** A general-purpose subagent acting as `editorial-composer` read [[ULTIMATE BEAST Plan]] + [[Hot]] + [[Current Site Findings]] + [[Site Inventory and Cannibalization Map]] + [[Keyword Targets and Page Map]] + [[Keyword Cannibalization Ledger]] + [[Competitor Keyword Research Summary]] + [[Primary Competitors]] + the local-seo-services overlay, then composed all 50 slot values (HTML-fragment values for `*_html` slots, plain strings for cover metadata) and wrote them to `.raw/sources/beast-plan-slots-2026-05-11.json` (50 keys, 26 KB).
- **V2 renderer.** A standalone Python renderer at `_scripts/render_pdf.py` loads the editorial template + CSS + slot JSON, substitutes every `{{placeholder}}` without the canonical allowlist's escape pass (the composer-produced HTML is trusted first-party), passes `--base-url about:blank` to WeasyPrint (still prevents `url(...)` exfiltration), and produces the PDF. To re-render after any slot-JSON tweak: `python _scripts/render_pdf.py --vault $VAULT`.

Result: editorial PDF at `<vault>/ldndecks-Beast-Plan.pdf` is now **18 pages A4 / 126 KB**, with the magazine-style cover (LDN Decks / "and the conversion band" / 3-KPI strip / Daniel Agrici signoff), 9 §-numbered page-sections, 8 tables, 6 callouts, 9 day-blocks, 4 FLOW two-col blocks, and zero `{{...}}` literals leaking into rendered output (verified post-render by stripping `<!-- comment -->` and `<style>` blocks and grepping for remaining placeholders).

Vault state refresh:
- [[Hot]] — `Active Threads` section now uses dash-bulleted format (was numbered list, which the guide-loop parser skips because its bullet regex matches only `-`/`*` lines). Thread #4 was stale ("BEAST plan = empty stub") — refreshed to `status: mature`, 5,048 words, PDF rendered. Total now 460 words (under 500-word Karpathy cap, was 484 → spiked to 536 in mid-edit before trim).
- [[Index]] — flipped the `[STUB]` marker off [[ULTIMATE BEAST Plan]] (now mature). Kept `[STUB]` on [[Implementation Roadmap]], [[Full FLOW Review]], [[Dual Surface Scorecard]], [[Booking Attribution Plan]] — those still wait on Day 0 access closing and Day 1 `/seo-audit` triage.
- Guide loop verification: `scripts/guide_next_action.py --vault $VAULT` now returns `state: day-0-blocking` (the priority shortcut, not the `ready-to-ship` fallback) with `action: "Complete Day 0 measurement-access gate"` and `open_file: wiki/flows/Day 0 Measurement Access Gate.md`. Active threads parsed: 5.

Holistic vault review (read-only, 10-check pass) verdict: **PASS-WITH-WARN**. All deliverables present (BEAST plan md + PDF, XLSX + CSV, keywords.base, curator report PASS), all 77 wiki notes have valid frontmatter, no critical issues, two non-blocking carry-overs: (a) **PAA gap** — `paa-digest-2026-05-11.md` yielded 0 unique questions, candidate cause is location-code coarseness (2840 USA) producing thin PAA on long-tail deck queries; consider re-running [[PAA Mining Digest]] with location-code 21178 (Virginia state) on the conversion-band cohort, (b) **23 dead wikilinks** to vault-root files (`[[CODEX]]`, `[[shipping-rules]]`, `[[keywords.base]]`, `[[competitors.base]]`, `[[Onboarding Canvas.canvas]]`) — files exist at vault root but the template uses bare-name wikilinks that Obsidian only resolves within `wiki/`. Either move those files into `wiki/meta/` or re-target with relative wikilinks. Template-level issue, applies to every marketing-brain vault.

No DataForSEO spend on this entry (renderer + composer + state refresh are local-only). Cumulative cap usage still ~$1.30 of $5.00.

---

## 2026-05-11 — Vault scaffolded and populated

Scaffolded from the `marketing-brain` template (Step 5: `scripts/scaffold_vault.py`) and populated by the `vault-synthesizer` subagent from DataForSEO research outputs.

Pipeline summary:
- **27 competitors** discovered (Step 1 `find_competitors` cost: **$0.0105**) from three NoVA deck-builder seeds. **7 aggregator domains quarantined** to `.raw/sources/dataforseo-aggregators/` (`yelp.com`, `houzz.com`, `angi.com`, `bestpickreports.com`, `northernvirginiamag.com`, `trex.com`, `locator.timbertech.com`) — they pollute head-term SERPs without representing competitive contractors. Provenance: see Round 2 preamble in `wiki/meta/keyword-curator-report-2026-05-11.md`.
- **27 competitor + SELF ranked-keyword pulls** completed (Step 2 `pull_competitor_kw` cost: **$1.0937**). Note: full Step-2 budget already spent before the aggregator quarantine decision — no spend lost on quarantine, just data excluded from the XLSX.
- **3,890 unique deduplicated keywords** built across 4 sheets (High Opportunity 891, Hidden Gems 2,059, High Volume 100, All Keywords 3,890) in `keywords-2026-05-11.xlsx`. Step 3 `build_keyword_xlsx` was run **twice** (once pre-quarantine, once post-quarantine to remove aggregator contamination). Cost: **$0.00** (no DataForSEO calls; pure-local dedup). Round 1 returned FAIL for aggregator pollution; Round 2 PASS — see `wiki/meta/keyword-curator-report-2026-05-11.md`.
- **PAA / related-searches mined** for top 100 keywords (Step 4 `mine_paa_serps` cost: **$0.20**). Result: 0 unique PAA questions and 0 unique related searches surfaced — flagged as TBD in [[PAA Mining Digest]]. May need to retry with a different keyword sample, or accept that DataForSEO's PAA endpoint returned thin for the NoVA deck vertical.
- Site itself ranks for **132 keywords** with **~344 monthly clicks** estimated ETV (`site-ranked-keywords-2026-05-11.json`).

**Total DataForSEO spend through Step 4: ~$1.30 of $5.00 cap.**

Notes synthesized in this pass: [[Site Inventory and Cannibalization Map]] (14 cannibalization clusters A–N), [[Current Site Findings]], [[Competitor Landscape Cache]], [[Competitor Keyword Research Summary]], [[Keyword Targets and Page Map]] (5-tier prioritization), [[Keyword Cannibalization Ledger]], [[Primary Competitors]], [[Hot]], [[Index]]. [[ULTIMATE BEAST Plan]] left as `status: seed` for the beast-planner subagent.

**Next action**: invoke the `beast-planner` subagent (Phase B of Step 5) against this populated vault to generate [[ULTIMATE BEAST Plan]] and [[Implementation Roadmap]]. Operator may also want to begin [[Day 0 Measurement Access Gate]] in parallel — none of the recommendations are validated against actual GSC click data until that gate closes.

---

## 2026-05-11 — Vault scaffolded from marketing-brain template

Vault scaffolded from the `marketing-brain` template for **Ldndecks** and `https://ldndecks.com` (Custom composite deck and screened porch builder, Northern Virginia). Business-type overlay applied: `local-seo-services`. Placeholders filled across CODEX, hot, index, overview, log, all wiki notes, and the templates folder. `.raw/.manifest.json` initialized with the canonical schema. `.obsidian/` pre-configured (graph filters hide `.raw/`, `_attachments/`, `_templates/`; CSS snippet color-codes wiki folders; community plugins pre-recommended). [[Visual Reference Capture Workflow]] is available for page screenshots, source image capture, project image collection, and generated-image style recipes.

Next expected entry: Day 0 baseline capture once Ldndecks connects measurement surfaces and runs the first `claude-seo` audit. See [[Day 0 Measurement Access Gate]] and [[Open Questions for Ldndecks]] for the prerequisite list.
