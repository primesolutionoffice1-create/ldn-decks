#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const OUTPUT_DIR = path.join(ROOT, 'docs/seo');

const DEFAULT_WARRANTY_ROWS = [
  {
    warranty_id: 'repair-workmanship-warranty-term',
    service_type: 'deck repair',
    term: '',
    scope: '',
    source: '',
    evidence_status: 'partial',
    owner_notes: 'Provide exact verified repair workmanship warranty term, scope, exclusions, and whether structural/labor/resurfacing coverage differs. Do not guess.',
  },
];

const DEFAULT_REPAIR_COST_ROWS = [
  {
    cost_id: 'joist-sistering',
    repair_type: 'joist sistering',
    low: '',
    high: '',
    source: '',
    evidence_status: 'partial',
    owner_notes: 'Use historical invoice, accepted estimate, calculator data, or owner-confirmed pricing policy. Do not publish until source-backed.',
  },
  {
    cost_id: 'ledger-reflash-rebolt',
    repair_type: 'ledger reflash/rebolt',
    low: '',
    high: '',
    source: '',
    evidence_status: 'partial',
    owner_notes: 'Use historical invoice, accepted estimate, calculator data, or owner-confirmed pricing policy. Do not publish until source-backed.',
  },
  {
    cost_id: 'post-replacement',
    repair_type: 'post replacement',
    low: '',
    high: '',
    source: '',
    evidence_status: 'partial',
    owner_notes: 'Use historical invoice, accepted estimate, calculator data, or owner-confirmed pricing policy. Do not publish until source-backed.',
  },
  {
    cost_id: 'emergency-stabilization',
    repair_type: 'emergency stabilization',
    low: '',
    high: '',
    source: '',
    evidence_status: 'partial',
    owner_notes: 'Use historical invoice, accepted estimate, calculator data, or owner-confirmed pricing policy. Do not publish until source-backed.',
  },
];

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function csvEscape(value) {
  const text = value == null ? '' : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function buildWarrantyRows(ledger) {
  const rows = ledger.warranty_terms?.length ? ledger.warranty_terms : DEFAULT_WARRANTY_ROWS;
  return rows.filter((row) => row.evidence_status !== 'verified');
}

function buildRepairCostRows(ledger) {
  const rows = ledger.repair_cost_ranges?.length ? ledger.repair_cost_ranges : DEFAULT_REPAIR_COST_ROWS;
  return rows.filter((row) => row.evidence_status !== 'verified');
}

function writeCsv(filePath, headers, rows) {
  const csv = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(',')),
  ].join('\n');
  fs.writeFileSync(filePath, `${csv}\n`);
}

function buildMarkdown({ warrantyRows, repairCostRows, today }) {
  return [
    `# Commercial Evidence Intake — ${today}`,
    '',
    'Purpose: give the owner/team prefilled warranty and repair-cost CSVs without inventing commercial claims.',
    '',
    '## Summary',
    '',
    `- Warranty rows needing owner verification: ${warrantyRows.length}`,
    `- Repair cost rows needing owner verification: ${repairCostRows.length}`,
    '- Default status: `partial`',
    '',
    '## Rules',
    '',
    '- Do not mark warranty terms `verified` until exact wording, duration, scope, and exclusions are confirmed.',
    '- Do not mark repair cost ranges `verified` until `low`, `high`, and `source` are filled from real pricing evidence.',
    '- Leave unknown values blank or `partial`; do not infer from marketing copy.',
    '- Remove private customer names, addresses, permit numbers, and invoice identifiers from source notes.',
    '',
    '## Dry-Run Commands',
    '',
    '```bash',
    `npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-${today}.csv --dry-run`,
    `npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-${today}.csv --dry-run`,
    '```',
    '',
    '## Verified Import Commands',
    '',
    'Only after owner/source review:',
    '',
    '```bash',
    `npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-${today}.csv --allow-verified`,
    `npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-${today}.csv --allow-verified`,
    '```',
    '',
  ].join('\n');
}

function main() {
  const ledger = readJson(LEDGER_PATH);
  const today = localDateStamp();
  const warrantyRows = buildWarrantyRows(ledger);
  const repairCostRows = buildRepairCostRows(ledger);
  const warrantyHeaders = ledger.warrantyTermRequiredFields || [
    'warranty_id',
    'service_type',
    'term',
    'scope',
    'source',
    'evidence_status',
    'owner_notes',
  ];
  const repairCostHeaders = ledger.repairCostRangeRequiredFields || [
    'cost_id',
    'repair_type',
    'low',
    'high',
    'source',
    'evidence_status',
    'owner_notes',
  ];

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const warrantyPath = path.join(OUTPUT_DIR, `warranty-terms-intake-${today}.csv`);
  const repairCostPath = path.join(OUTPUT_DIR, `repair-cost-ranges-intake-${today}.csv`);
  const reportPath = path.join(OUTPUT_DIR, `commercial-evidence-intake-${today}.md`);
  writeCsv(warrantyPath, warrantyHeaders, warrantyRows);
  writeCsv(repairCostPath, repairCostHeaders, repairCostRows);
  fs.writeFileSync(reportPath, `${buildMarkdown({ warrantyRows, repairCostRows, today })}\n`);

  console.log(JSON.stringify({
    ok: true,
    report: path.relative(ROOT, reportPath),
    warrantyCsv: path.relative(ROOT, warrantyPath),
    repairCostCsv: path.relative(ROOT, repairCostPath),
    warrantyRows: warrantyRows.length,
    repairCostRows: repairCostRows.length,
  }, null, 2));
}

main();
