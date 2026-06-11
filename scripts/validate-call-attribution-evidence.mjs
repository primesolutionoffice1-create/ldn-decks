#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DEFAULT_INPUT = 'docs/ads-tracking/templates/call-attribution-readonly-evidence-template.csv';
const DATE = localDateStamp();
const OUTPUT_JSON = `scripts/output/call-attribution-evidence-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/call-attribution-evidence-validation-${DATE}.md`;

const REQUIRED_HEADERS = [
  'evidence_date',
  'reviewer',
  'source_system',
  'conversion_name',
  'call_source',
  'primary_status',
  'count_setting',
  'min_call_duration_seconds',
  'status',
  'diagnostics_status',
  'recent_conversions_30d',
  'phone_click_primary_risk',
  'evidence_url_or_screenshot',
  'notes',
  'gate_decision',
];

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const SOURCE_SYSTEMS = new Set(['google_ads_conversions', 'google_ads_call_assets', 'gtm']);
const GATE_DECISIONS = new Set(['RED', 'YELLOW', 'GREEN']);

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

function normalize(value) {
  return String(value ?? '').trim();
}

function toObjects(rows) {
  const [headers, ...body] = rows;
  return body.map((items) => Object.fromEntries(headers.map((header, index) => [header, normalize(items[index])])));
}

function isSample(row) {
  return row.evidence_date === 'YYYY-MM-DD' || row.reviewer === 'SAMPLE';
}

function validateRow(row, index) {
  const errors = [];
  const warnings = [];
  const label = `row ${index + 2}`;
  const duration = Number.parseInt(row.min_call_duration_seconds || '0', 10);
  const recentConversions = Number.parseInt(row.recent_conversions_30d || '0', 10);

  if (!DATE_RE.test(row.evidence_date)) errors.push(`${label}: evidence_date must be YYYY-MM-DD.`);
  if (!row.reviewer) errors.push(`${label}: reviewer is required.`);
  if (!SOURCE_SYSTEMS.has(row.source_system)) errors.push(`${label}: source_system must be google_ads_conversions, google_ads_call_assets, or gtm.`);
  if (!row.conversion_name) errors.push(`${label}: conversion_name is required.`);
  if (!row.call_source) errors.push(`${label}: call_source is required.`);
  if (!['primary', 'secondary', 'observation', 'not_applicable'].includes(row.primary_status)) {
    errors.push(`${label}: primary_status must be primary, secondary, observation, or not_applicable.`);
  }
  if (!['one', 'every', 'not_applicable'].includes(row.count_setting)) {
    errors.push(`${label}: count_setting must be one, every, or not_applicable.`);
  }
  if (Number.isNaN(duration) || duration < 0) errors.push(`${label}: min_call_duration_seconds must be a non-negative number.`);
  if (!row.status) errors.push(`${label}: status is required.`);
  if (!row.diagnostics_status) errors.push(`${label}: diagnostics_status is required.`);
  if (Number.isNaN(recentConversions) || recentConversions < 0) errors.push(`${label}: recent_conversions_30d must be a non-negative number.`);
  if (!['yes', 'no', 'unknown'].includes(row.phone_click_primary_risk)) {
    errors.push(`${label}: phone_click_primary_risk must be yes, no, or unknown.`);
  }
  if (!row.evidence_url_or_screenshot) errors.push(`${label}: evidence_url_or_screenshot is required.`);
  if (!GATE_DECISIONS.has(row.gate_decision)) errors.push(`${label}: gate_decision must be RED, YELLOW, or GREEN.`);

  if (row.primary_status === 'primary' && row.phone_click_primary_risk === 'yes') {
    errors.push(`${label}: phone_click cannot be a primary Smart Bidding signal.`);
  }
  if (row.primary_status === 'primary' && duration > 0 && duration < 60) {
    warnings.push(`${label}: primary call conversion has duration below the preferred 60 second threshold.`);
  }
  if (row.gate_decision === 'GREEN' && recentConversions < 5) {
    errors.push(`${label}: GREEN gate decision requires at least 5 recent qualified call/lead conversions.`);
  }
  if (row.gate_decision === 'GREEN' && row.diagnostics_status.toLowerCase() !== 'clean') {
    errors.push(`${label}: GREEN gate decision requires clean diagnostics.`);
  }

  return { errors, warnings };
}

const inputArg = process.argv[2] || DEFAULT_INPUT;
const inputPath = path.resolve(ROOT, inputArg);
const text = fs.readFileSync(inputPath, 'utf8');
const parsed = parseCsv(text);
const headers = parsed[0] || [];
const headerErrors = REQUIRED_HEADERS.filter((header) => !headers.includes(header)).map((header) => `Missing required header: ${header}`);
const extraHeaders = headers.filter((header) => !REQUIRED_HEADERS.includes(header));
const rows = headerErrors.length ? [] : toObjects(parsed);
const realRows = rows.filter((row) => !isSample(row));
const rowResults = realRows.map(validateRow);
const errors = headerErrors.concat(rowResults.flatMap((result) => result.errors));
const warnings = extraHeaders.map((header) => `Extra header ignored: ${header}`).concat(rowResults.flatMap((result) => result.warnings));
const primaryQualifiedRows = realRows.filter((row) => row.primary_status === 'primary' && Number.parseInt(row.min_call_duration_seconds || '0', 10) >= 60).length;
const cleanDiagnosticsRows = realRows.filter((row) => row.diagnostics_status.toLowerCase() === 'clean').length;
const phoneClickPrimaryRiskRows = realRows.filter((row) => row.phone_click_primary_risk === 'yes').length;
const status = errors.length ? 'FAIL' : realRows.length ? 'PARTIAL' : 'SAMPLE_ONLY';

const result = {
  ok: errors.length === 0,
  status,
  input: path.relative(ROOT, inputPath),
  rows: realRows.length,
  primaryQualifiedRows,
  cleanDiagnosticsRows,
  phoneClickPrimaryRiskRows,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Call Attribution Evidence Validation - ${DATE}

## Result

- Status: ${status}
- Input: \`${result.input}\`
- Real rows: ${realRows.length}
- Primary qualified-call rows: ${primaryQualifiedRows}
- Clean diagnostics rows: ${cleanDiagnosticsRows}
- Phone-click primary risk rows: ${phoneClickPrimaryRiskRows}
- Errors: ${errors.length}
- Warnings: ${warnings.length}

## Errors

${errors.length ? errors.map((item) => `- ${item}`).join('\n') : '- none'}

## Warnings

${warnings.length ? warnings.map((item) => `- ${item}`).join('\n') : '- none'}

## Gate Notes

- \`SAMPLE_ONLY\` is expected for the template file.
- \`PARTIAL\` means real read-only evidence rows are present but do not yet prove GREEN.
- This validator does not change Google Ads, GTM, GA4, budgets, bidding, conversion actions, or account settings.
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);

console.log(JSON.stringify(result, null, 2));
if (!result.ok) process.exit(1);
