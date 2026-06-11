#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DEFAULT_INPUT = 'docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv';
const OUTPUT_JSON = 'scripts/output/lead-outcome-validation-2026-06-02.json';
const OUTPUT_MD = 'scripts/output/lead-outcome-validation-2026-06-02.md';

const REQUIRED_HEADERS = [
  'lead_date',
  'lead_id',
  'event_id',
  'source',
  'medium',
  'campaign',
  'gclid',
  'gbraid',
  'wbraid',
  'form_location',
  'phone_or_form',
  'city',
  'state',
  'service_type',
  'budget_range',
  'material_interest',
  'homeowner_status',
  'hoa_permit_status',
  'call_duration_seconds',
  'call_recording_or_note_url',
  'lead_stage',
  'qualified',
  'qualification_reason',
  'estimate_scheduled',
  'estimate_completed',
  'proposal_sent',
  'won',
  'lost_reason',
  'estimated_project_value',
  'closed_revenue_value',
  'sales_notes',
  'ads_action',
];

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const MONEY_RE = /^\$?\d[\d,]*(\.\d{1,2})?$/;

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        i += 1;
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

function hasClickId(row) {
  return Boolean(row.gclid || row.gbraid || row.wbraid);
}

function hasRevenueValue(value) {
  const clean = normalize(value);
  return clean === '' || MONEY_RE.test(clean);
}

function isSampleRow(row) {
  return row.lead_date === 'YYYY-MM-DD';
}

function validateRow(row, index) {
  const errors = [];
  const warnings = [];
  const label = `row ${index + 2}`;
  const phoneOrForm = row.phone_or_form.toLowerCase();
  const qualified = row.qualified.toLowerCase();
  const adsAction = row.ads_action.toLowerCase();
  const callDuration = Number.parseInt(row.call_duration_seconds || '0', 10);

  if (!DATE_RE.test(row.lead_date)) errors.push(`${label}: lead_date must be YYYY-MM-DD.`);
  if (!['phone', 'form'].includes(phoneOrForm)) errors.push(`${label}: phone_or_form must be phone or form.`);
  if (!row.city) errors.push(`${label}: city is required.`);
  if (row.state !== 'VA') errors.push(`${label}: state must be VA for the current LDN Decks market gate.`);
  if (!row.service_type) errors.push(`${label}: service_type is required.`);
  if (!row.lead_stage) errors.push(`${label}: lead_stage is required.`);
  if (!['yes', 'no'].includes(qualified)) errors.push(`${label}: qualified must be yes or no.`);
  if (!row.qualification_reason) errors.push(`${label}: qualification_reason is required.`);
  if (!['hold', 'do_not_upload', 'eligible_qualified_lead_upload'].includes(adsAction)) {
    errors.push(`${label}: ads_action must be hold, do_not_upload, or eligible_qualified_lead_upload.`);
  }
  if (!hasRevenueValue(row.estimated_project_value)) errors.push(`${label}: estimated_project_value must be blank or a money value.`);
  if (!hasRevenueValue(row.closed_revenue_value)) errors.push(`${label}: closed_revenue_value must be blank or a money value.`);

  if (qualified === 'yes' && adsAction === 'eligible_qualified_lead_upload' && !hasClickId(row)) {
    errors.push(`${label}: eligible qualified lead uploads require gclid, gbraid, or wbraid.`);
  }
  if (qualified === 'yes' && adsAction === 'do_not_upload') {
    warnings.push(`${label}: qualified=yes but ads_action=do_not_upload; confirm this is intentional.`);
  }
  if (qualified === 'no' && adsAction === 'eligible_qualified_lead_upload') {
    errors.push(`${label}: unqualified rows cannot be marked eligible_qualified_lead_upload.`);
  }
  if (phoneOrForm === 'phone' && qualified === 'yes' && callDuration < 60 && !row.call_recording_or_note_url) {
    errors.push(`${label}: qualified phone leads need 60+ second duration or a call evidence note URL.`);
  }
  if (phoneOrForm === 'phone' && callDuration === 0 && adsAction !== 'do_not_upload') {
    warnings.push(`${label}: phone row has no call duration; keep ads_action=hold unless call evidence is attached.`);
  }
  if (!hasClickId(row) && adsAction === 'hold') {
    warnings.push(`${label}: no click ID yet; keep held until an approved enhanced/offline import path exists.`);
  }

  return { errors, warnings };
}

function toObjects(rows) {
  const [headers, ...body] = rows;
  return body.map((items) => Object.fromEntries(headers.map((header, index) => [header, normalize(items[index])])));
}

const inputArg = process.argv[2] || DEFAULT_INPUT;
const inputPath = path.resolve(ROOT, inputArg);
const text = fs.readFileSync(inputPath, 'utf8');
const parsed = parseCsv(text);
const headers = parsed[0] || [];
const headerErrors = REQUIRED_HEADERS.filter((header) => !headers.includes(header)).map((header) => `Missing required header: ${header}`);
const extraHeaders = headers.filter((header) => !REQUIRED_HEADERS.includes(header));
const rows = headerErrors.length ? [] : toObjects(parsed);
const realRows = rows.filter((row) => !isSampleRow(row));
const rowResults = realRows.map(validateRow);
const errors = headerErrors.concat(rowResults.flatMap((result) => result.errors));
const warnings = [
  ...extraHeaders.map((header) => `Extra header ignored: ${header}`),
  ...rowResults.flatMap((result) => result.warnings),
];
const qualifiedRows = realRows.filter((row) => row.qualified.toLowerCase() === 'yes').length;
const uploadEligibleRows = realRows.filter((row) => row.ads_action.toLowerCase() === 'eligible_qualified_lead_upload').length;
const phoneRows = realRows.filter((row) => row.phone_or_form.toLowerCase() === 'phone').length;
const rowsWithClickId = realRows.filter(hasClickId).length;
const status = errors.length ? 'FAIL' : realRows.length >= 5 ? 'PASS' : realRows.length ? 'PARTIAL' : 'SAMPLE_ONLY';

const result = {
  ok: errors.length === 0,
  status,
  input: path.relative(ROOT, inputPath),
  rows: realRows.length,
  qualifiedRows,
  uploadEligibleRows,
  phoneRows,
  rowsWithClickId,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Lead Outcome Validation - 2026-06-02

## Result

- Status: ${status}
- Input: \`${result.input}\`
- Real rows: ${realRows.length}
- Qualified rows: ${qualifiedRows}
- Upload-eligible rows: ${uploadEligibleRows}
- Phone rows: ${phoneRows}
- Rows with Google click ID: ${rowsWithClickId}
- Errors: ${errors.length}
- Warnings: ${warnings.length}

## Errors

${errors.length ? errors.map((item) => `- ${item}`).join('\n') : '- none'}

## Warnings

${warnings.length ? warnings.map((item) => `- ${item}`).join('\n') : '- none'}

## Gate Notes

- \`SAMPLE_ONLY\` is expected for the template file.
- \`PARTIAL\` means real rows are present, but fewer than 5 rows are available.
- \`PASS\` means the file has at least 5 real rows and no validation errors.
- This validator does not upload anything to Google Ads and does not prove Google Ads call attribution by itself.
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);
console.log(JSON.stringify(result, null, 2));
