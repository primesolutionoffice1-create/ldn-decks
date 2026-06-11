#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const RAW_DIR = 'docs/seo/dataforseo-n8n-raw-findings';
const RAW_VALIDATION_JSON = `scripts/output/dataforseo-n8n-raw-findings-validation-${DATE}.json`;
const OUTPUT_CSV = `docs/seo/dataforseo-n8n-findings-intake-draft-${DATE}.csv`;
const OUTPUT_MD = `docs/seo/dataforseo-n8n-findings-intake-draft-${DATE}.md`;
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-findings-intake-draft-${DATE}.json`;

const COLUMNS = [
  'finding_id',
  'source_workflow',
  'target_domain',
  'finding_type',
  'source_query_or_url',
  'affected_url',
  'summary',
  'evidence_strength',
  'confidence',
  'action_bucket',
  'public_claim_allowed',
  'ads_action_allowed',
  'owner_review_required',
  'status',
  'notes',
];

function readText(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function readJson(rel) {
  const text = readText(rel);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function listJsonFiles() {
  const dir = path.join(ROOT, RAW_DIR);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => `${RAW_DIR}/${file}`);
}

function csvEscape(value) {
  const text = String(value ?? '');
  if (/[",\n\r]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

const errors = [];
const warnings = [];
const rawValidation = readJson(RAW_VALIDATION_JSON);

if (!rawValidation?.ok) {
  errors.push(`Raw findings validation must pass before draft generation: ${RAW_VALIDATION_JSON}`);
}

const rows = [];

for (const rel of listJsonFiles()) {
  const payload = readJson(rel);
  if (!payload) {
    errors.push(`${rel}: invalid JSON or unreadable raw findings payload.`);
    continue;
  }

  const sampleOnly = payload.sampleOnly === true;
  for (const finding of payload.findings || []) {
    rows.push({
      finding_id: finding.id,
      source_workflow: payload.sourceWorkflow,
      target_domain: 'ldndecks.com',
      finding_type: finding.type,
      source_query_or_url: finding.source,
      affected_url: finding.affectedUrl,
      summary: `${finding.summary} Draft row generated from validated raw read-only output; manual review required before official intake.`,
      evidence_strength: finding.evidenceStrength,
      confidence: finding.confidence,
      action_bucket: 'review_only',
      public_claim_allowed: 'no',
      ads_action_allowed: 'no',
      owner_review_required: 'yes',
      status: sampleOnly ? 'sample_only' : 'needs_review',
      notes: `${finding.notes || 'No notes.'} This draft does not authorize public claims, proof snippets, citation edits, SEO task promotion, Ads actions, or account changes.`,
    });
  }
}

if (!rows.length) warnings.push('No draft rows were generated from raw findings.');

const sampleRows = rows.filter((row) => row.status === 'sample_only').length;
const realRows = rows.length - sampleRows;

const csv = [
  COLUMNS.join(','),
  ...rows.map((row) => COLUMNS.map((column) => csvEscape(row[column])).join(',')),
].join('\n');

const result = {
  ok: errors.length === 0,
  date: DATE,
  status: realRows ? 'REAL_DRAFT_ROWS_REVIEW_REQUIRED' : 'SAMPLE_ONLY',
  rawValidationStatus: rawValidation?.status ?? null,
  rows: rows.length,
  sampleRows,
  realRows,
  publicClaimsAllowed: 0,
  adsActionsAllowed: 0,
  errors,
  warnings,
  outputs: {
    csv: OUTPUT_CSV,
    markdown: OUTPUT_MD,
    json: OUTPUT_JSON,
  },
};

const md = `# DataForSEO n8n Findings Intake Draft - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Mode: ${result.status}
- Rows: ${result.rows}
- Sample rows: ${result.sampleRows}
- Real rows: ${result.realRows}
- Public claims allowed: 0
- Ads actions allowed: 0
- Raw validation: ${result.rawValidationStatus ?? 'unknown'}
- CSV: \`${OUTPUT_CSV}\`

## Operating Rule

This draft is not the official findings intake. Copy rows into \`docs/seo/dataforseo-n8n-findings-intake-2026-06-03.csv\` only after manual review, then run \`npm run dataforseo:n8n-mcp:findings:validate\`, \`npm run dataforseo:n8n-mcp:promotion-gate\`, and \`npm run dataforseo:n8n-mcp:all\`.

## Errors

${errors.length ? errors.map((item) => `- ${item}`).join('\n') : '- none'}

## Warnings

${warnings.length ? warnings.map((item) => `- ${item}`).join('\n') : '- none'}
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_CSV)), { recursive: true });
fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_CSV), `${csv}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);

console.log(JSON.stringify(result, null, 2));
if (!result.ok) process.exit(1);
