#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const BUNDLE_MD = `docs/ads-tracking/scaling-evidence-bundle-${DATE}.md`;
const BUNDLE_JSON = `scripts/output/scaling-evidence-bundle-${DATE}.json`;
const OUTPUT_JSON = `scripts/output/scaling-evidence-bundle-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/scaling-evidence-bundle-validation-${DATE}.md`;

const REQUIRED_SECTIONS = [
  'Google Call Attribution Evidence',
  'Lead Outcome Rows',
  'Owner Proof Evidence',
];

const REQUIRED_PHRASES = [
  'does not authorize Ads activation',
  'budget increases',
  'Smart Bidding changes',
  'public proof claims',
  'Keep scaling RED until the blocker disappears',
  'npm run scaling:readiness',
  `docs/ads-tracking/live-call-attribution-evidence-${DATE}.csv`,
  'docs/ads-tracking/templates/call-attribution-readonly-evidence-template.csv',
  'docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv',
  `docs/seo/owner-evidence-action-packet-${DATE}.csv`,
  `docs/seo/project-evidence-intake-${DATE}.csv`,
  `docs/seo/photo-ingestion-manifest-${DATE}.csv`,
  `docs/seo/warranty-terms-intake-${DATE}.csv`,
  `docs/seo/repair-cost-ranges-intake-${DATE}.csv`,
];

const FORBIDDEN_PATTERNS = [
  {
    label: 'unrelated-domain text',
    pattern: /prime\s+solution|psolutionservices\.com/i,
  },
  {
    label: 'invalid image model reference',
    pattern: /gpt-image-2/i,
  },
  {
    label: 'secret-like field',
    pattern: /(api[_-]?key|access[_-]?token|refresh[_-]?token|password|secret|client[_-]?secret|auth[_-]?token)\s*[:=]\s*[^,\s"}]{8,}/i,
  },
];

function read(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

const errors = [];
const warnings = [];
const markdown = read(BUNDLE_MD);
const jsonText = read(BUNDLE_JSON);

if (!markdown) errors.push(`Missing scaling evidence bundle Markdown: ${BUNDLE_MD}`);
if (!jsonText) errors.push(`Missing scaling evidence bundle JSON: ${BUNDLE_JSON}`);

let bundle = null;
if (jsonText) {
  try {
    bundle = JSON.parse(jsonText);
  } catch (error) {
    errors.push(`Scaling evidence bundle JSON is invalid: ${error.message}`);
  }
}

if (bundle) {
  if (bundle.ok !== true) errors.push('Scaling evidence bundle must be ok.');
  if (bundle.scalingStatus !== 'RED') errors.push('Scaling evidence bundle must preserve scalingStatus RED until blockers are cleared.');
  if (bundle.sections !== 3) errors.push('Scaling evidence bundle must include exactly 3 evidence sections.');
  if (bundle.externalBlockers !== 3) warnings.push(`Expected 3 owner/external blockers, found ${bundle.externalBlockers}.`);
  if ((bundle.missingSources || []).length) errors.push(`Scaling evidence bundle has missing sources: ${bundle.missingSources.join(', ')}`);
}

for (const section of REQUIRED_SECTIONS) {
  if (!markdown.includes(`### ${section}`)) errors.push(`Bundle missing section: ${section}`);
}

for (const phrase of REQUIRED_PHRASES) {
  if (!markdown.includes(phrase)) errors.push(`Bundle missing required phrase: ${phrase}`);
}

for (const item of FORBIDDEN_PATTERNS) {
  if (item.pattern.test(markdown) || item.pattern.test(jsonText)) {
    errors.push(`Bundle contains forbidden content: ${item.label}`);
  }
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  scalingStatus: bundle?.scalingStatus ?? null,
  sections: bundle?.sections ?? null,
  blockers: bundle?.blockers ?? null,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Scaling Evidence Bundle Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Scaling status: ${result.scalingStatus ?? 'unknown'}
- Sections: ${result.sections ?? '?'}
- Blockers: ${result.blockers ?? '?'}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Bundle: \`${BUNDLE_MD}\`

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
