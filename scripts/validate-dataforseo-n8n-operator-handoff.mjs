#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const HANDOFF_JSON = `scripts/output/dataforseo-n8n-operator-handoff-${DATE}.json`;
const HANDOFF_MD = `docs/seo/dataforseo-n8n-operator-handoff-${DATE}.md`;
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-operator-handoff-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/dataforseo-n8n-operator-handoff-validation-${DATE}.md`;

function readText(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

const errors = [];
const warnings = [];
const jsonText = readText(HANDOFF_JSON);
const mdText = readText(HANDOFF_MD);

if (!jsonText) errors.push(`Missing handoff JSON: ${HANDOFF_JSON}`);
if (!mdText) errors.push(`Missing handoff Markdown: ${HANDOFF_MD}`);

let handoff = null;
if (jsonText) {
  try {
    handoff = JSON.parse(jsonText);
  } catch (error) {
    errors.push(`Handoff JSON is invalid: ${error.message}`);
  }
}

if (handoff) {
  if (handoff.ok !== true) errors.push('Operator handoff must be ok.');
  if (handoff.operatorStatus !== 'READY_FOR_READ_ONLY_RUNS_ONLY') {
    errors.push('Operator handoff must remain READY_FOR_READ_ONLY_RUNS_ONLY while promotion gate has no promotable rows.');
  }
  if (handoff.manifest?.targetDomain !== 'ldndecks.com') errors.push('Handoff target domain must be ldndecks.com.');
  if (handoff.manifest?.readOnly !== true) errors.push('Handoff manifest must be read-only.');
  if (handoff.rawFindings?.ok !== true) errors.push('Handoff raw findings validation must be ok.');
  if (handoff.findingsDraft?.ok !== true) errors.push('Handoff findings draft generation must be ok.');
  if ((handoff.promotionGate?.promotableRows ?? 1) !== 0) errors.push('Handoff must report 0 promotable rows.');
  if ((handoff.reviewBoard?.publicClaimsAllowed ?? 1) !== 0) errors.push('Handoff must report 0 public claims allowed.');
  if ((handoff.reviewBoard?.adsActionsAllowed ?? 1) !== 0) errors.push('Handoff must report 0 Ads actions allowed.');
  if (!Array.isArray(handoff.blockedNow) || handoff.blockedNow.length < 5) errors.push('Handoff must include blocked-now rules.');
  if (!Array.isArray(handoff.nextCommands) || !handoff.nextCommands.includes('npm run seo:weekly')) {
    errors.push('Handoff must include npm run seo:weekly in required commands.');
  }
  if (!handoff.nextCommands.includes('npm run dataforseo:n8n-mcp:raw-findings:validate')) {
    errors.push('Handoff must include raw findings validation in required commands.');
  }
  if (!handoff.nextCommands.includes('npm run dataforseo:n8n-mcp:findings:draft')) {
    errors.push('Handoff must include findings draft generation in required commands.');
  }
}

for (const phrase of [
  'READY_FOR_READ_ONLY_RUNS_ONLY',
  'Raw findings validation',
  'Findings intake draft',
  'raw output',
  'Do not publish public claims',
  'Do not create verified proof snippets',
  'Do not change Google Ads',
  'Do not promote sample-only rows',
  'not cleared for public claims',
]) {
  if (!mdText.includes(phrase)) errors.push(`Handoff Markdown missing required phrase: ${phrase}`);
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  operatorStatus: handoff?.operatorStatus ?? null,
  promotableRows: handoff?.promotionGate?.promotableRows ?? null,
  publicClaimsAllowed: handoff?.reviewBoard?.publicClaimsAllowed ?? null,
  adsActionsAllowed: handoff?.reviewBoard?.adsActionsAllowed ?? null,
  errors,
  warnings,
  handoff: HANDOFF_MD,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# DataForSEO n8n Operator Handoff Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Operator status: ${result.operatorStatus ?? 'unknown'}
- Promotable rows: ${result.promotableRows ?? '?'}
- Public claims allowed: ${result.publicClaimsAllowed ?? '?'}
- Ads actions allowed: ${result.adsActionsAllowed ?? '?'}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Handoff: \`${HANDOFF_MD}\`

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
