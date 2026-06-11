#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const INPUT_CSV = 'docs/seo/dataforseo-n8n-findings-intake-2026-06-03.csv';
const VALIDATION_JSON = `scripts/output/dataforseo-n8n-findings-intake-validation-${DATE}.json`;
const OUTPUT_MD = `docs/seo/dataforseo-n8n-findings-review-board-${DATE}.md`;
const OUTPUT_CSV = `docs/seo/dataforseo-n8n-findings-review-board-${DATE}.csv`;

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

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function reviewPriority(row) {
  if (row.status === 'sample_only') return 'P3';
  if (row.evidence_strength === 'strong' && row.confidence === 'high') return 'P1';
  if (row.evidence_strength === 'medium' || row.confidence === 'medium') return 'P2';
  return 'P3';
}

function reviewDecision(row) {
  if (row.status === 'sample_only') return 'sample_only_no_action';
  if (row.status === 'reviewed_rejected') return 'rejected_no_action';
  return 'needs_owner_review';
}

const validationText = readText(VALIDATION_JSON);
let validation = null;
if (validationText) {
  try {
    validation = JSON.parse(validationText);
  } catch {
    validation = null;
  }
}

if (!validation?.ok) {
  throw new Error(`Findings intake validation must pass first: ${VALIDATION_JSON}`);
}

const intake = toObjects(parseCsv(readText(INPUT_CSV)));
const boardRows = intake.map((row) => ({
  finding_id: row.finding_id,
  priority: reviewPriority(row),
  review_decision: reviewDecision(row),
  finding_type: row.finding_type,
  affected_url: row.affected_url,
  evidence_strength: row.evidence_strength,
  confidence: row.confidence,
  public_claim_allowed: 'no',
  ads_action_allowed: 'no',
  owner_review_required: 'yes',
  next_step: row.status === 'sample_only'
    ? 'Replace sample row with real read-only DataForSEO/n8n finding before action.'
    : 'Owner/source review required before any SEO, content, citation, or Ads decision.',
  source_workflow: row.source_workflow,
  notes: row.notes,
}));

const csvHeaders = [
  'finding_id',
  'priority',
  'review_decision',
  'finding_type',
  'affected_url',
  'evidence_strength',
  'confidence',
  'public_claim_allowed',
  'ads_action_allowed',
  'owner_review_required',
  'next_step',
  'source_workflow',
  'notes',
];

const csv = [
  csvHeaders.join(','),
  ...boardRows.map((row) => csvHeaders.map((header) => csvEscape(row[header])).join(',')),
].join('\n');

const md = `# DataForSEO n8n Findings Review Board - ${DATE}

## Status

- Intake validation: ${validation.status}
- Findings: ${boardRows.length}
- Real findings: ${validation.realRows}
- Sample findings: ${validation.sampleRows}
- Review-only rows: ${validation.reviewOnlyRows}
- Public claims allowed: 0
- Ads actions allowed: 0

## Operating Rule

This board is a review queue only. DataForSEO/n8n findings must not become public claims, Ads actions, verified project proof, citation edits, budget changes, bidding changes, or conversion-setting changes without the separate proof, measurement, owner-review, and scaling gates passing.

## Board

| Finding | Priority | Decision | Type | Affected URL | Evidence | Confidence | Next step |
|---|---|---|---|---|---|---|---|
${boardRows.map((row) => `| ${row.finding_id} | ${row.priority} | ${row.review_decision} | ${row.finding_type} | ${row.affected_url} | ${row.evidence_strength} | ${row.confidence} | ${row.next_step} |`).join('\n')}

## Files

- Source intake: \`${INPUT_CSV}\`
- Board CSV: \`${OUTPUT_CSV}\`
- Findings validator: \`npm run dataforseo:n8n-mcp:findings:validate\`
`;

fs.writeFileSync(path.join(ROOT, OUTPUT_CSV), `${csv}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);

const result = {
  ok: true,
  date: DATE,
  status: validation.status,
  rows: boardRows.length,
  realRows: validation.realRows,
  sampleRows: validation.sampleRows,
  reviewOnlyRows: validation.reviewOnlyRows,
  publicClaimsAllowed: 0,
  adsActionsAllowed: 0,
  board: OUTPUT_MD,
  csv: OUTPUT_CSV,
};

console.log(JSON.stringify(result, null, 2));
