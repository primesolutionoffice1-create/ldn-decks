# Deck Repair Hub Deploy Checklist

**Page:** `/services/deck-repair`  
**Working branch:** `feat/deck-repair-hub-finalization`  
**Deploy status:** **NOT READY** until every hard gate below is green.

This checklist exists to prevent a strong scaffold from becoming a weak public page. The architecture is ready; the proof layer is not.

## 1. Evidence Intake

- [ ] `PHOTO-INGESTION-MANIFEST.csv` filled for all required photo rows.
- [ ] Original photos placed under `/public/showcase/`.
- [ ] No stock images.
- [ ] No AI-generated before/after images.
- [ ] No competitor images.
- [ ] PII review complete for every image.
- [ ] Homeowner consent recorded where required.
- [ ] `PROJECT-INGESTION-TEMPLATE.csv` filled with at least 3 verified repair projects.
- [ ] Unknown project fields left blank, not guessed.

## 2. Page Placeholder Resolution

Run:

```bash
seo-blueprint/eeat-sweep-2026-05-11/scripts/qa-gate.sh
```

Hard gates:

- [ ] Zero `data-evidence-needed` markers in source and served HTML.
- [ ] Zero `DO NOT PUBLISH` markers in source and served HTML.
- [ ] Zero `VERIFY FINAL COST` markers in source and served HTML.
- [ ] Zero `[INSERT ...]` placeholder fragments.
- [ ] All image paths resolve `200`.
- [ ] All required internal links resolve `200` or expected redirect.

## 3. Warranty and Cost Verification

- [ ] Workmanship warranty term pasted from verified contract or policy source.
- [ ] Warranty scope limitations included without marketing embellishment.
- [ ] Joist sistering cost range verified from estimate, invoice, or calculator source.
- [ ] Ledger reflash/rebolt cost range verified.
- [ ] Post replacement cost range verified.
- [ ] Emergency stabilization cost range verified.
- [ ] Any unverified repair scope rewritten as “inspection required” instead of using a dollar range.

## 4. Schema and Technical QA

- [ ] `npm run build` clean.
- [ ] `/services/deck-repair` returns `200`.
- [ ] `/deck-repair` returns `200`.
- [ ] `/deck-repair-loudoun-county` returns `200`.
- [ ] JSON-LD parses cleanly.
- [ ] Exactly one page-local `FAQPage`.
- [ ] Page-local `Service` schema provider references `https://ldndecks.com/#organization`.
- [ ] `areaServed` includes Loudoun, Fairfax, and Prince William.
- [ ] No manual fake `AggregateRating` added to the page.

## 5. Visual QA

- [ ] Desktop browser QA complete.
- [ ] Mobile browser QA complete.
- [ ] Tables scroll or wrap cleanly on mobile.
- [ ] Evidence cards do not overflow.
- [ ] Photos are the right aspect ratio and not blurry.
- [ ] LCP hero image is appropriate and optimized.
- [ ] No layout shift from late-loading images.

## 6. Merge and Deploy Gate

Only after every item above is complete:

- [ ] Merge branch to `main`.
- [ ] Deploy.
- [ ] Verify production `/services/deck-repair`.
- [ ] Request indexing in Google Search Console.
- [ ] Submit IndexNow if not automatic.
- [ ] Add post-deploy internal links from permit, financing, inspection, cost, and homepage service surfaces.

## Current Decision

**Do not deploy today unless the owner evidence pass is complete.**
