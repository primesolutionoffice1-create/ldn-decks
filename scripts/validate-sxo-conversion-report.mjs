#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const REPORT_MD = `docs/seo/sxo-conversion-report-${DATE}.md`;
const REPORT_JSON = `scripts/output/sxo-conversion-report-${DATE}.json`;
const OUTPUT_JSON = `scripts/output/sxo-conversion-report-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/sxo-conversion-report-validation-${DATE}.md`;

const REQUIRED_ROUTES = [
  '/composite-deck-cost-northern-virginia',
  '/deck-cost-calculator',
  '/services/deck-repair',
  '/deck-repair',
  '/deck-repair-loudoun-county',
  '/services/deck-resurfacing',
  '/services/deck-replacement',
  '/deck-resurfacing-vs-replacement',
  '/deck-financing',
  '/get-estimate',
];

const REQUIRED_MD_PHRASES = [
  'does not claim live SERP rankings or live GBP data',
  'proof-safety constraints',
  'Do not add proof modules until',
  'Do not publish repair cost ranges until',
  'Keep calculator and estimate CTAs high on cost pages',
  'Keep inspection-first positioning on repair pages',
];

const FORBIDDEN_PATTERNS = [
  {
    label: 'unrelated domain',
    pattern: /psolutionservices\.com/i,
  },
  {
    label: 'invalid image model reference',
    pattern: /gpt-image-2/i,
  },
  {
    label: 'live ranking claim',
    pattern: /(?:rank(?:s|ing)?|position)\s+#?\d+\s+(?:in|on|for)\s+Google/i,
  },
  {
    label: 'live GBP metric claim',
    pattern: /(?:GBP|Google Business Profile|map-pack|maps)\s+(?:views|calls|clicks|ranking|rank)\s*[:=]?\s*\d+/i,
  },
];

function read(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

const errors = [];
const warnings = [];
const markdown = read(REPORT_MD);
const jsonText = read(REPORT_JSON);

if (!markdown) errors.push(`Missing SXO report Markdown: ${REPORT_MD}`);
if (!jsonText) errors.push(`Missing SXO report JSON: ${REPORT_JSON}`);

let report = null;
if (jsonText) {
  try {
    report = JSON.parse(jsonText);
  } catch (error) {
    errors.push(`SXO report JSON is invalid: ${error.message}`);
  }
}

for (const item of FORBIDDEN_PATTERNS) {
  if (item.pattern.test(markdown) || item.pattern.test(jsonText)) {
    errors.push(`SXO report contains forbidden content: ${item.label}`);
  }
}

for (const phrase of REQUIRED_MD_PHRASES) {
  if (!markdown.includes(phrase)) errors.push(`SXO report missing required phrase: ${phrase}`);
}

let proofGated = 0;
let redirects = 0;
let lowScoreRows = 0;
let missingCtaRows = 0;
let missingCalculatorRows = 0;
let unsafePricingRows = 0;
let p0Actions = 0;

if (report) {
  if (report.ok !== true) errors.push('SXO report must be ok.');
  if (report.targets !== REQUIRED_ROUTES.length) errors.push(`SXO report must scan ${REQUIRED_ROUTES.length} targets.`);
  if ((report.averageScore ?? 0) < 85) errors.push(`Average SXO score is below 85: ${report.averageScore}.`);

  const rows = Array.isArray(report.rows) ? report.rows : [];
  const routeSet = new Set(rows.map((row) => row.route));
  for (const route of REQUIRED_ROUTES) {
    if (!routeSet.has(route)) errors.push(`SXO report missing required route: ${route}`);
    if (!markdown.includes(`### ${route}`)) errors.push(`SXO Markdown missing detail section for ${route}`);
  }

  for (const row of rows) {
    if (row.redirectTarget) redirects += 1;
    if (/proof-gated/.test(row.status || '')) proofGated += 1;
    if ((row.score ?? 100) < 75) lowScoreRows += 1;
    if (row.metrics?.estimateCta !== true && !row.redirectTarget) missingCtaRows += 1;
    if (/cost|repair|resurface|replace|financing|estimate|calculator/i.test(row.intent || '') && row.metrics?.calculator !== true && !row.redirectTarget) {
      missingCalculatorRows += 1;
    }
    if (row.metrics?.evidenceSafePricing !== true) unsafePricingRows += 1;
    if (/proof-gated/.test(row.status || '') && !(row.issues || []).some((issue) => /^Proof gate:/.test(issue))) {
      errors.push(`${row.route}: proof-gated rows must include a Proof gate issue.`);
    }
  }

  const actions = Array.isArray(report.actions) ? report.actions : [];
  p0Actions = actions.filter((action) => action.priority === 'P0').length;

  if (proofGated !== report.proofGated) errors.push(`Proof-gated count mismatch: rows=${proofGated}, summary=${report.proofGated}.`);
  if (redirects !== report.redirects) errors.push(`Redirect count mismatch: rows=${redirects}, summary=${report.redirects}.`);
  if (lowScoreRows > 0) errors.push(`SXO report has ${lowScoreRows} rows below score 75.`);
  if (missingCtaRows > 0) errors.push(`SXO report has ${missingCtaRows} rows missing estimate CTA.`);
  if (missingCalculatorRows > 0) errors.push(`SXO report has ${missingCalculatorRows} money/repair rows missing calculator/payment path.`);
  if (unsafePricingRows > 0) errors.push(`SXO report has ${unsafePricingRows} rows with unsafe pricing.`);
  if (proofGated > 0 && p0Actions < proofGated) {
    errors.push('Every proof-gated row must surface as a P0 action.');
  }
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  targets: report?.targets ?? null,
  averageScore: report?.averageScore ?? null,
  proofGated,
  redirects,
  lowScoreRows,
  missingCtaRows,
  missingCalculatorRows,
  unsafePricingRows,
  p0Actions,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# SXO Conversion Report Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Targets: ${result.targets ?? '?'}
- Average score: ${result.averageScore ?? '?'}
- Proof-gated rows: ${result.proofGated}
- Redirects: ${result.redirects}
- P0 actions: ${result.p0Actions}
- Low-score rows: ${result.lowScoreRows}
- Missing CTA rows: ${result.missingCtaRows}
- Missing calculator/payment rows: ${result.missingCalculatorRows}
- Unsafe pricing rows: ${result.unsafePricingRows}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Report: \`${REPORT_MD}\`

## Errors

${errors.length ? errors.map((item) => `- ${item}`).join('\n') : '- none'}

## Warnings

${warnings.length ? warnings.map((item) => `- ${item}`).join('\n') : '- none'}
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);

console.log(JSON.stringify(result, null, 2));
if (!result.ok) process.exit(1);
