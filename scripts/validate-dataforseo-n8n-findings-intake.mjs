#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const CSV = 'docs/seo/dataforseo-n8n-findings-intake-2026-06-03.csv';
const DOC = 'docs/seo/dataforseo-n8n-findings-intake-2026-06-03.md';
const PREFLIGHT_JSON = `scripts/output/dataforseo-n8n-mcp-import-preflight-${DATE}.json`;
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-findings-intake-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/dataforseo-n8n-findings-intake-validation-${DATE}.md`;

const REQUIRED_COLUMNS = [
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

const ALLOWED_TYPES = new Set([
  'serp_context',
  'citation_context',
  'backlink_context',
  'ai_visibility_context',
  'competitor_context',
]);

const ALLOWED_STRENGTHS = new Set(['sample', 'weak', 'medium', 'strong']);
const ALLOWED_CONFIDENCE = new Set(['low', 'medium', 'high']);
const ALLOWED_STATUS = new Set(['sample_only', 'needs_review', 'reviewed_rejected', 'reviewed_action_candidate']);
const unrelatedDomainPattern = new RegExp('prime\\s+solution|p' + 'solutionservices\\.com', 'i');

const FORBIDDEN_PATTERNS = [
  {
    label: 'Basic auth header',
    pattern: /Basic\s+[A-Za-z0-9+/=]{20,}/i,
  },
  {
    label: 'Bearer token',
    pattern: /Bearer\s+[A-Za-z0-9._~+/=-]{20,}/i,
  },
  {
    label: 'secret-like field',
    pattern: /(api[_-]?key|access[_-]?token|refresh[_-]?token|password|secret|client[_-]?secret|auth[_-]?token)\s*[:=]\s*[^,\s]{8,}/i,
  },
  {
    label: 'unrelated-domain text',
    pattern: unrelatedDomainPattern,
  },
];

function readText(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (inQuotes && char === '"' && next === '"') {
      value += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (!inQuotes && char === ',') {
      row.push(value);
      value = '';
      continue;
    }

    if (!inQuotes && (char === '\n' || char === '\r')) {
      if (char === '\r' && next === '\n') index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim() !== '')) rows.push(row);
      row = [];
      value = '';
      continue;
    }

    value += char;
  }

  if (value || row.length) {
    row.push(value);
    if (row.some((cell) => cell.trim() !== '')) rows.push(row);
  }

  return rows;
}

function toObjects(rows) {
  const [headers, ...body] = rows;
  return body.map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ''])));
}

function isLdnUrl(value) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.hostname === 'ldndecks.com' || url.hostname.endsWith('.ldndecks.com');
  } catch {
    return false;
  }
}

const csvText = readText(CSV);
const docText = readText(DOC);
const preflightText = readText(PREFLIGHT_JSON);
const errors = [];
const warnings = [];

if (!csvText) errors.push(`Missing findings intake CSV: ${CSV}`);
if (!docText) errors.push(`Missing findings intake doc: ${DOC}`);

for (const item of FORBIDDEN_PATTERNS) {
  if (item.pattern.test(csvText) || item.pattern.test(docText)) {
    errors.push(`Findings intake contains forbidden content: ${item.label}`);
  }
}

let rows = [];
let objects = [];
if (csvText) {
  rows = parseCsv(csvText);
  const headers = rows[0] || [];
  for (const column of REQUIRED_COLUMNS) {
    if (!headers.includes(column)) errors.push(`CSV missing required column: ${column}`);
  }
  objects = toObjects(rows);
}

if (!objects.length && csvText) {
  errors.push('Findings intake must include at least one row.');
}

let preflight = null;
if (preflightText) {
  try {
    preflight = JSON.parse(preflightText);
  } catch (error) {
    errors.push(`Import preflight output is not valid JSON: ${error.message}`);
  }
}

if (!preflight?.ok) {
  errors.push('DataForSEO n8n import preflight must pass before findings intake is valid.');
}

if ((preflight?.workflowExports ?? 0) < 1) {
  errors.push('At least one sanitized n8n workflow export must be validated before findings intake is valid.');
}

const ids = new Set();
let sampleRows = 0;
let realRows = 0;
let reviewOnlyRows = 0;

objects.forEach((row, index) => {
  const rowNumber = index + 2;
  const id = row.finding_id?.trim();

  if (!id) errors.push(`Row ${rowNumber}: finding_id is required.`);
  if (ids.has(id)) errors.push(`Row ${rowNumber}: duplicate finding_id ${id}.`);
  ids.add(id);

  if (row.target_domain !== 'ldndecks.com') {
    errors.push(`Row ${rowNumber}: target_domain must be ldndecks.com.`);
  }

  if (!ALLOWED_TYPES.has(row.finding_type)) {
    errors.push(`Row ${rowNumber}: unsupported finding_type ${row.finding_type}.`);
  }

  if (!ALLOWED_STRENGTHS.has(row.evidence_strength)) {
    errors.push(`Row ${rowNumber}: unsupported evidence_strength ${row.evidence_strength}.`);
  }

  if (!ALLOWED_CONFIDENCE.has(row.confidence)) {
    errors.push(`Row ${rowNumber}: unsupported confidence ${row.confidence}.`);
  }

  if (!ALLOWED_STATUS.has(row.status)) {
    errors.push(`Row ${rowNumber}: unsupported status ${row.status}.`);
  }

  if (!isLdnUrl(row.affected_url)) {
    errors.push(`Row ${rowNumber}: affected_url must be an ldndecks.com URL.`);
  }

  if (row.public_claim_allowed !== 'no') {
    errors.push(`Row ${rowNumber}: public_claim_allowed must remain no for DataForSEO findings intake.`);
  }

  if (row.ads_action_allowed !== 'no') {
    errors.push(`Row ${rowNumber}: ads_action_allowed must remain no for DataForSEO findings intake.`);
  }

  if (row.owner_review_required !== 'yes') {
    errors.push(`Row ${rowNumber}: owner_review_required must be yes.`);
  }

  if (row.action_bucket !== 'review_only') {
    errors.push(`Row ${rowNumber}: action_bucket must be review_only.`);
  } else {
    reviewOnlyRows += 1;
  }

  if (!/read-only|sample-only|review/i.test(`${row.summary} ${row.notes}`)) {
    warnings.push(`Row ${rowNumber}: summary/notes should explicitly keep the finding in review-only mode.`);
  }

  if (row.status === 'sample_only') {
    sampleRows += 1;
  } else {
    realRows += 1;
  }
});

for (const phrase of [
  'ldndecks.com',
  'npm run dataforseo:n8n-mcp:findings:validate',
  'public_claim_allowed',
  'ads_action_allowed',
  'owner_review_required',
  'sample_only',
]) {
  if (!docText.includes(phrase)) errors.push(`Findings doc missing required phrase: ${phrase}`);
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  status: realRows ? 'REAL_ROWS_REVIEW_REQUIRED' : 'SAMPLE_ONLY',
  csv: CSV,
  doc: DOC,
  rows: objects.length,
  sampleRows,
  realRows,
  reviewOnlyRows,
  preflightStatus: preflight?.status ?? null,
  preflightExports: preflight?.workflowExports ?? null,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# DataForSEO n8n Findings Intake Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Mode: ${result.status}
- Rows: ${result.rows}
- Sample rows: ${result.sampleRows}
- Real rows: ${result.realRows}
- Review-only rows: ${result.reviewOnlyRows}
- Import preflight: ${result.preflightStatus ?? 'unknown'} · ${result.preflightExports ?? '?'} exports
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- CSV: \`${CSV}\`
- Doc: \`${DOC}\`

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
