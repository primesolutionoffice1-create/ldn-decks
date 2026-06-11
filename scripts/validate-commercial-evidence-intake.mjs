#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const WARRANTY_HEADERS = ['warranty_id', 'service_type', 'term', 'scope', 'source', 'evidence_status', 'owner_notes'];
const REPAIR_COST_HEADERS = ['cost_id', 'repair_type', 'low', 'high', 'source', 'evidence_status', 'owner_notes'];
const REQUIRED_REPAIR_COSTS = new Map([
  ['joist-sistering', 'joist sistering'],
  ['ledger-reflash-rebolt', 'ledger reflash/rebolt'],
  ['post-replacement', 'post replacement'],
  ['emergency-stabilization', 'emergency stabilization'],
]);
const REQUIRED_MARKDOWN_PHRASES = [
  'Purpose: give the owner/team prefilled warranty and repair-cost CSVs without inventing commercial claims.',
  '- Warranty rows needing owner verification: 1',
  '- Repair cost rows needing owner verification: 4',
  '- Default status: `partial`',
  'Do not mark warranty terms `verified` until exact wording, duration, scope, and exclusions are confirmed.',
  'Do not mark repair cost ranges `verified` until `low`, `high`, and `source` are filled from real pricing evidence.',
  'Leave unknown values blank or `partial`; do not infer from marketing copy.',
  'Remove private customer names, addresses, permit numbers, and invoice identifiers from source notes.',
  'Only after owner/source review:',
];

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (char !== '\r') {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((items) => items.some((item) => item.trim()));
}

function toObjects(rows) {
  const [headers, ...body] = rows;
  return body.map((items) => Object.fromEntries(headers.map((header, index) => [header, String(items[index] ?? '').trim()])));
}

function parseTrailingJson(output) {
  const match = output.match(/\{[\s\S]*?\}\s*$/);
  if (!match) return null;
  return JSON.parse(match[0]);
}

function runDryRun(type, file) {
  try {
    const output = execFileSync('node', ['scripts/import-project-evidence.mjs', '--type', type, '--file', file, '--dry-run'], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return { ok: true, json: parseTrailingJson(output), output };
  } catch (error) {
    return {
      ok: false,
      json: parseTrailingJson(`${error.stdout || ''}\n${error.stderr || ''}`),
      output: `${error.stdout || ''}\n${error.stderr || ''}`,
      error: error.message,
    };
  }
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const reportPath = path.join(DOCS_DIR, `commercial-evidence-intake-${today}.md`);
  const warrantyPath = path.join(DOCS_DIR, `warranty-terms-intake-${today}.csv`);
  const repairCostPath = path.join(DOCS_DIR, `repair-cost-ranges-intake-${today}.csv`);
  const validationJsonPath = path.join(OUTPUT_DIR, `commercial-evidence-intake-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `commercial-evidence-intake-validation-${today}.md`);
  const errors = [];
  const warnings = [];

  assert(fs.existsSync(reportPath), `Missing commercial intake report: ${path.relative(ROOT, reportPath)}`, errors);
  assert(fs.existsSync(warrantyPath), `Missing warranty intake CSV: ${path.relative(ROOT, warrantyPath)}`, errors);
  assert(fs.existsSync(repairCostPath), `Missing repair cost intake CSV: ${path.relative(ROOT, repairCostPath)}`, errors);

  const markdown = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, 'utf8') : '';
  const warrantyText = fs.existsSync(warrantyPath) ? fs.readFileSync(warrantyPath, 'utf8') : '';
  const repairCostText = fs.existsSync(repairCostPath) ? fs.readFileSync(repairCostPath, 'utf8') : '';
  const warrantyRowsRaw = warrantyText ? parseCsv(warrantyText) : [];
  const repairCostRowsRaw = repairCostText ? parseCsv(repairCostText) : [];
  const warrantyHeaders = warrantyRowsRaw[0] || [];
  const repairCostHeaders = repairCostRowsRaw[0] || [];
  const warrantyRows = warrantyHeaders.length ? toObjects(warrantyRowsRaw) : [];
  const repairCostRows = repairCostHeaders.length ? toObjects(repairCostRowsRaw) : [];

  assert(markdown.includes(`# Commercial Evidence Intake - ${today}`) || markdown.includes(`# Commercial Evidence Intake — ${today}`), `Markdown title must use today's date: ${today}`, errors);
  for (const phrase of REQUIRED_MARKDOWN_PHRASES) {
    assert(markdown.includes(phrase), `Missing required commercial intake phrase: ${phrase}`, errors);
  }
  assert(markdown.includes(`docs/seo/warranty-terms-intake-${today}.csv --dry-run`), 'Markdown missing warranty dry-run command.', errors);
  assert(markdown.includes(`docs/seo/repair-cost-ranges-intake-${today}.csv --dry-run`), 'Markdown missing repair cost dry-run command.', errors);
  assert(markdown.includes(`docs/seo/warranty-terms-intake-${today}.csv --allow-verified`), 'Markdown missing warranty allow-verified command.', errors);
  assert(markdown.includes(`docs/seo/repair-cost-ranges-intake-${today}.csv --allow-verified`), 'Markdown missing repair cost allow-verified command.', errors);

  assert(warrantyHeaders.length === WARRANTY_HEADERS.length, `Expected ${WARRANTY_HEADERS.length} warranty headers, found ${warrantyHeaders.length}.`, errors);
  for (const [index, header] of WARRANTY_HEADERS.entries()) {
    assert(warrantyHeaders[index] === header, `Warranty header ${index + 1} must be ${header}, found ${warrantyHeaders[index] ?? 'missing'}.`, errors);
  }
  assert(repairCostHeaders.length === REPAIR_COST_HEADERS.length, `Expected ${REPAIR_COST_HEADERS.length} repair cost headers, found ${repairCostHeaders.length}.`, errors);
  for (const [index, header] of REPAIR_COST_HEADERS.entries()) {
    assert(repairCostHeaders[index] === header, `Repair cost header ${index + 1} must be ${header}, found ${repairCostHeaders[index] ?? 'missing'}.`, errors);
  }

  assert(warrantyRows.length === 1, `Expected 1 warranty row, found ${warrantyRows.length}.`, errors);
  const warranty = warrantyRows[0] || {};
  assert(warranty.warranty_id === 'repair-workmanship-warranty-term', `Warranty row must use repair-workmanship-warranty-term, found ${warranty.warranty_id || 'missing'}.`, errors);
  assert(warranty.service_type === 'deck repair', `Warranty service_type must be deck repair, found ${warranty.service_type || 'missing'}.`, errors);
  assert(warranty.term === '', 'Warranty term must remain blank until owner/source verification.', errors);
  assert(warranty.scope === '', 'Warranty scope must remain blank until owner/source verification.', errors);
  assert(warranty.source === '', 'Warranty source must remain blank until owner/source verification.', errors);
  assert(warranty.evidence_status === 'partial', `Warranty evidence_status must remain partial, found ${warranty.evidence_status || 'missing'}.`, errors);
  assert(/exact verified repair workmanship warranty term/i.test(warranty.owner_notes || ''), 'Warranty owner_notes must request exact verified warranty wording.', errors);
  assert(/Do not guess/i.test(warranty.owner_notes || ''), 'Warranty owner_notes must preserve do-not-guess guardrail.', errors);

  assert(repairCostRows.length === 4, `Expected 4 repair cost rows, found ${repairCostRows.length}.`, errors);
  const repairCostIds = new Set(repairCostRows.map((row) => row.cost_id));
  for (const [costId, repairType] of REQUIRED_REPAIR_COSTS.entries()) {
    const row = repairCostRows.find((item) => item.cost_id === costId);
    assert(Boolean(row), `Missing repair cost row: ${costId}`, errors);
    if (!row) continue;
    assert(row.repair_type === repairType, `${costId} repair_type must be ${repairType}, found ${row.repair_type}.`, errors);
    assert(row.low === '', `${costId} low must remain blank until pricing evidence exists.`, errors);
    assert(row.high === '', `${costId} high must remain blank until pricing evidence exists.`, errors);
    assert(row.source === '', `${costId} source must remain blank until pricing evidence exists.`, errors);
    assert(row.evidence_status === 'partial', `${costId} evidence_status must remain partial, found ${row.evidence_status}.`, errors);
    assert(/historical invoice|accepted estimate|calculator data|owner-confirmed pricing policy/i.test(row.owner_notes || ''), `${costId} owner_notes must preserve source-backed pricing options.`, errors);
    assert(/Do not publish until source-backed/i.test(row.owner_notes || ''), `${costId} owner_notes must preserve no-publish-until-source-backed guardrail.`, errors);
  }
  for (const costId of repairCostIds) {
    assert(REQUIRED_REPAIR_COSTS.has(costId), `Unexpected repair cost row: ${costId}`, errors);
  }

  const warrantyDryRun = runDryRun('warranty_terms', path.relative(ROOT, warrantyPath));
  const repairCostDryRun = runDryRun('repair_cost_ranges', path.relative(ROOT, repairCostPath));
  assert(warrantyDryRun.ok && warrantyDryRun.json?.ok, 'Warranty intake dry-run must pass.', errors);
  assert(repairCostDryRun.ok && repairCostDryRun.json?.ok, 'Repair cost intake dry-run must pass.', errors);
  assert(warrantyDryRun.json?.rows === 1, `Warranty dry-run must report 1 row, found ${warrantyDryRun.json?.rows ?? 'unknown'}.`, errors);
  assert(repairCostDryRun.json?.rows === 4, `Repair cost dry-run must report 4 rows, found ${repairCostDryRun.json?.rows ?? 'unknown'}.`, errors);
  assert((warrantyDryRun.json?.importedVerifiedRows ?? 0) === 0, 'Warranty dry-run must import 0 verified rows.', errors);
  assert((repairCostDryRun.json?.importedVerifiedRows ?? 0) === 0, 'Repair cost dry-run must import 0 verified rows.', errors);

  const combined = `${markdown}\n${warrantyText}\n${repairCostText}`;
  assert(!/psolutionservices\.com|prime\s+solution/i.test(combined), 'Commercial intake contains unrelated project/domain wording.', errors);
  assert(!/gpt-image-2/i.test(combined), 'Commercial intake contains invalid image model wording.', errors);
  assert(!/\b(?:2|3|5|10|25|lifetime)[-\s]?(?:year|yr)?\s+(?:labor|workmanship|structural|repair)?\s*warranty\b/i.test(`${warranty.term} ${warranty.scope} ${warranty.source}`), 'Warranty CSV must not invent a duration/scope.', errors);
  assert(!/\b(?:low|high),?verified\b/i.test(repairCostText), 'Repair cost CSV must not mark any pricing row verified.', errors);
  assert(!/\$\d/.test(repairCostText), 'Repair cost CSV must not include dollar amounts before source-backed pricing evidence exists.', errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, reportPath),
    warrantyCsv: path.relative(ROOT, warrantyPath),
    repairCostCsv: path.relative(ROOT, repairCostPath),
    warrantyRows: warrantyRows.length,
    repairCostRows: repairCostRows.length,
    partialWarrantyRows: warrantyRows.filter((row) => row.evidence_status === 'partial').length,
    partialRepairCostRows: repairCostRows.filter((row) => row.evidence_status === 'partial').length,
    blankWarrantyEvidenceFields: ['term', 'scope', 'source'].filter((field) => warranty[field] === '').length,
    blankRepairCostEvidenceFields: repairCostRows.reduce((count, row) => count + ['low', 'high', 'source'].filter((field) => row[field] === '').length, 0),
    dryRuns: {
      warrantyRows: warrantyDryRun.json?.rows ?? null,
      repairCostRows: repairCostDryRun.json?.rows ?? null,
      importedVerifiedRows: (warrantyDryRun.json?.importedVerifiedRows ?? 0) + (repairCostDryRun.json?.importedVerifiedRows ?? 0),
    },
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Commercial Evidence Intake Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Warranty rows: ${result.warrantyRows}`,
    `- Repair cost rows: ${result.repairCostRows}`,
    `- Partial warranty rows: ${result.partialWarrantyRows}`,
    `- Partial repair cost rows: ${result.partialRepairCostRows}`,
    `- Blank warranty evidence fields: ${result.blankWarrantyEvidenceFields}`,
    `- Blank repair cost evidence fields: ${result.blankRepairCostEvidenceFields}`,
    `- Imported verified rows in dry-runs: ${result.dryRuns.importedVerifiedRows}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## Errors',
    '',
    ...(errors.length ? errors.map((error) => `- ${error}`) : ['- None']),
    '',
    '## Warnings',
    '',
    ...(warnings.length ? warnings.map((warning) => `- ${warning}`) : ['- None']),
    '',
  ].join('\n');

  fs.writeFileSync(validationJsonPath, `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(validationMdPath, md);

  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

main();
