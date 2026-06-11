#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const OUTPUT_DIR = path.join(ROOT, 'docs/seo');
const INCOMPLETE_PATTERN = /\b(unknown|not recorded|not specified|unspecified|unverified|verify from owner|evidence missing)\b|OWNER TO FILL/i;

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function csvEscape(value) {
  const text = value == null ? '' : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function normalizeForOwner(value) {
  if (value == null) return '';
  return String(value);
}

function missingFields(project) {
  const fields = [
    'city',
    'neighborhood',
    'month_year',
    'materials',
    'verified_scope',
    'verified_failure',
    'work_performed',
    'permit_or_hoa_status',
    'before_photo_path',
    'after_photo_path',
  ];

  return fields.filter((field) => {
    const value = project[field];
    if (value == null || value === '') return true;
    return typeof value === 'string' && INCOMPLETE_PATTERN.test(value);
  });
}

function ownerPrompt(project) {
  const missing = missingFields(project);
  const base = project.owner_notes || 'Owner verification required before public proof use.';
  if (!missing.length) {
    return `${base} Review source evidence and promote only after validator passes.`;
  }
  return `${base} Missing/weak fields to complete: ${missing.join(', ')}.`;
}

function buildRows(ledger) {
  const headers = ledger.projectRequiredFields || [
    'project_id',
    'city',
    'neighborhood',
    'month_year',
    'service_type',
    'materials',
    'verified_scope',
    'verified_failure',
    'work_performed',
    'permit_or_hoa_status',
    'before_photo_path',
    'after_photo_path',
    'evidence_status',
    'owner_notes',
  ];

  const rows = (ledger.projects || [])
    .filter((project) => project.evidence_status !== 'verified')
    .map((project) => {
      const row = {};
      for (const field of headers) {
        row[field] = normalizeForOwner(project[field]);
      }
      row.evidence_status = project.evidence_status || 'partial';
      row.owner_notes = ownerPrompt(project);
      return row;
    });

  return { headers, rows };
}

function buildMarkdown(rows, today) {
  const beforeAfter = rows.filter((row) => row.project_id.startsWith('before-after-')).length;
  const showcase = rows.filter((row) => row.project_id.startsWith('showcase-')).length;

  return [
    `# Project Evidence Intake — ${today}`,
    '',
    'Purpose: give the owner/team a prefilled CSV for project proof completion without inventing case-study details.',
    '',
    '## Summary',
    '',
    `- Project rows needing owner verification: ${rows.length}`,
    `- Before/after rows: ${beforeAfter}`,
    `- Showcase rows: ${showcase}`,
    '- Default handling: keep `partial` until source evidence is reviewed.',
    '',
    '## Rules',
    '',
    '- Do not mark projects `verified` while any owner-fill, unknown, not recorded, or unverifiable values remain.',
    '- Do not add customer names, full addresses, phone numbers, permit numbers, or unredacted documents.',
    '- Before/after paths must resolve in `public/` before verified import.',
    '- Project dates, materials, scope, costs, timelines, permit/HOA status, and code claims must come from owner/source evidence.',
    '',
    '## Dry-Run Command',
    '',
    '```bash',
    `npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-${today}.csv --dry-run`,
    '```',
    '',
    '## Verified Import Command',
    '',
    'Only after owner/source review:',
    '',
    '```bash',
    `npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-${today}.csv --allow-verified`,
    '```',
    '',
  ].join('\n');
}

function main() {
  const ledger = readJson(LEDGER_PATH);
  const today = localDateStamp();
  const { headers, rows } = buildRows(ledger);
  const csv = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(',')),
  ].join('\n');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const csvPath = path.join(OUTPUT_DIR, `project-evidence-intake-${today}.csv`);
  const reportPath = path.join(OUTPUT_DIR, `project-evidence-intake-${today}.md`);
  fs.writeFileSync(csvPath, `${csv}\n`);
  fs.writeFileSync(reportPath, `${buildMarkdown(rows, today)}\n`);

  console.log(JSON.stringify({
    ok: true,
    report: path.relative(ROOT, reportPath),
    csv: path.relative(ROOT, csvPath),
    rows: rows.length,
    beforeAfterRows: rows.filter((row) => row.project_id.startsWith('before-after-')).length,
    showcaseRows: rows.filter((row) => row.project_id.startsWith('showcase-')).length,
  }, null, 2));
}

main();
