# LDN Decks — Schema / Robots / Breadcrumb Smoke Test
**Date:** 2026-06-06 | **Hour:** 4-5
**Scripts run:** `npm run seo:validate-schema`, `npm run seo:audit-breadcrumbs`, `npm run seo:verify-robots`

---

## Schema Validation — PASS

```json
{
  "ok": true,
  "appFiles": 249,
  "servicesFaqFiles": 57,
  "jsonLdFiles": 146,
  "duplicateFaqRisks": 0,
  "missingCanonicalRisks": 0,
  "howToSchemaFiles": 0,
  "entityPolicyFiles": 0,
  "reviewSchemaFiles": 0,
  "napDriftFiles": 0,
  "unsafeJsonLdWarnings": []
}
```

All clear. 146 JSON-LD files, zero duplicates, zero canonical risks, zero NAP drift, zero unsafe warnings.

---

## Robots / IndexNow — 6/6 PASS

| Check | Result |
|---|---|
| robots.txt not blocking all crawlers | PASS |
| robots.txt declares sitemap | PASS |
| AI bots declared — 4 bots present | PASS |
| sitemap.xml URL count — 723 URLs | PASS |
| image-sitemap.xml reachable | PASS |
| IndexNow key file matches | PASS |

IndexNow submission: DRY-RUN (not submitted — correct, requires `--submit` flag + explicit approval)

---

## Breadcrumb Audit — LOW ISSUES

**209 pages scanned**

| Issue | Count | Example | Severity | Action |
|---|---|---|---|---|
| Unknown segment `outdoor-living` | 1 | `/outdoor-living/[city]` | LOW | Add label to `src/lib/breadcrumbLabels.js` |
| Unknown segment `pergolas` | 1 | `/pergolas/[city]` | LOW | Add label |
| Unknown segment `screened-porches` | 1 | `/screened-porches/[city]` | LOW | Add label |
| Unknown segment `service` | 1 | `/service/[city]` | LOW | Add label |
| Duplicate BreadcrumbList | 0 | — | NONE | — |

**Humanize() fallback active** for these 4 segments — they will render OK but capitalization/spacing may be imprecise ("outdoor-living" → "Outdoor Living" or "Outdoor-living" depending on fallback).

**Fix (no approval needed — local code change):**  
Add to `src/lib/breadcrumbLabels.js`:
```js
'outdoor-living': 'Outdoor Living',
'pergolas': 'Pergolas & Gazebos',
'screened-porches': 'Screened Porches',
'service': 'Services',
```

---

## Action Items

| Item | Priority | File |
|---|---|---|
| Add 4 breadcrumb label keys | LOW | `src/lib/breadcrumbLabels.js` |
| Schema and robots: no action needed | — | — |
