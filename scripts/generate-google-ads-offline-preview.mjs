#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const today = new Date().toISOString().slice(0, 10);
const LIVE_INPUT_DIR = 'docs/ads-tracking';
const LIVE_INPUT_PREFIX = 'live-lead-outcomes-';
const OUTPUT_CSV = `docs/ads-tracking/google-ads-offline-upload-preview-${today}.csv`;
const OUTPUT_JSON = `scripts/output/google-ads-offline-upload-preview-${today}.json`;
const OUTPUT_MD = `scripts/output/google-ads-offline-upload-preview-${today}.md`;

const GOOGLE_ADS_TIME_RE = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}[+-]\d{4}$/;
const CSV_HEADERS = [
  'Google Click ID',
  'Conversion Name',
  'Conversion Time',
  'Conversion Value',
  'Conversion Currency',
  'Order ID',
];

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

function latestLiveInput() {
  const dir = path.join(ROOT, LIVE_INPUT_DIR);
  if (!fs.existsSync(dir)) return null;
  const candidates = fs.readdirSync(dir)
    .filter((file) => file.startsWith(LIVE_INPUT_PREFIX) && file.endsWith('.csv'))
    .sort();
  const latest = candidates.at(-1);
  return latest ? path.join(LIVE_INPUT_DIR, latest) : null;
}

function normalize(value) {
  return String(value ?? '').trim();
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toObjects(rows) {
  const [headers, ...body] = rows;
  return body.map((items) => Object.fromEntries(headers.map((header, index) => [header, normalize(items[index])])));
}

function moneyToNumber(value) {
  const clean = normalize(value).replaceAll('$', '').replaceAll(',', '');
  if (!clean) return '';
  const numeric = Number.parseFloat(clean);
  return Number.isFinite(numeric) ? String(numeric) : '';
}

function isYes(value) {
  return normalize(value).toLowerCase() === 'yes';
}

function isSampleRow(row) {
  return row.lead_date === 'YYYY-MM-DD';
}

function addCandidate(candidates, skipped, row, conversionName, timeField, value) {
  const label = `${row.lead_id || row.event_id || 'unknown'}::${conversionName}`;
  if (!row.gclid) {
    skipped.push({ label, reason: 'no_gclid', detail: 'Manual Google Ads CSV preview currently supports gclid rows only.' });
    return;
  }
  if (!row.event_id) {
    skipped.push({ label, reason: 'missing_event_id', detail: 'Order ID requires event_id for duplicate prevention.' });
    return;
  }
  if (!row[timeField] || !GOOGLE_ADS_TIME_RE.test(row[timeField])) {
    skipped.push({ label, reason: `missing_or_invalid_${timeField}`, detail: `${timeField} must be YYYY-MM-DD HH:MM:SS-0400.` });
    return;
  }
  const cleanValue = moneyToNumber(value);
  if (!cleanValue) {
    skipped.push({ label, reason: 'missing_conversion_value', detail: `${conversionName} requires a numeric conversion value.` });
    return;
  }

  candidates.push({
    'Google Click ID': row.gclid,
    'Conversion Name': conversionName,
    'Conversion Time': row[timeField],
    'Conversion Value': cleanValue,
    'Conversion Currency': 'USD',
    'Order ID': `${row.event_id}::${conversionName}`,
  });
}

const inputArg = process.argv[2] || process.env.LEAD_OUTCOME_INPUT || latestLiveInput();
if (!inputArg) {
  throw new Error(`No live input found. Create docs/ads-tracking/${LIVE_INPUT_PREFIX}YYYY-MM-DD.csv first.`);
}

const inputPath = path.resolve(ROOT, inputArg);
const relativeInput = path.relative(ROOT, inputPath);
const parsed = parseCsv(fs.readFileSync(inputPath, 'utf8'));
const rows = toObjects(parsed).filter((row) => !isSampleRow(row));
const eligibleRows = rows.filter((row) => (
  isYes(row.qualified)
  && normalize(row.ads_action).toLowerCase() === 'eligible_qualified_lead_upload'
));
const candidates = [];
const skipped = [];

eligibleRows.forEach((row) => {
  addCandidate(candidates, skipped, row, 'Qualified Lead', 'qualified_at', '500');

  if (isYes(row.estimate_scheduled)) {
    addCandidate(candidates, skipped, row, 'Estimate Scheduled', 'estimate_scheduled_at', '1000');
  }

  if (isYes(row.won)) {
    addCandidate(candidates, skipped, row, 'Contract Signed', 'contract_signed_at', row.closed_revenue_value);
  }

  if (normalize(row.lead_stage).toLowerCase() === 'closed paid') {
    addCandidate(candidates, skipped, row, 'Closed Paid', 'closed_paid_at', row.closed_revenue_value);
  }
});

const duplicateOrderIds = candidates
  .map((row) => row['Order ID'])
  .filter((orderId, index, all) => all.indexOf(orderId) !== index);
const errors = duplicateOrderIds.length
  ? [`Duplicate Order ID(s): ${[...new Set(duplicateOrderIds)].join(', ')}`]
  : [];

const csv = [
  CSV_HEADERS.join(','),
  ...candidates.map((row) => CSV_HEADERS.map((header) => csvEscape(row[header])).join(',')),
].join('\n');

const result = {
  ok: errors.length === 0,
  status: errors.length ? 'FAIL' : candidates.length ? 'READY_FOR_PREVIEW' : 'NO_UPLOAD_ROWS',
  input: relativeInput,
  eligibleLeadRows: eligibleRows.length,
  uploadPreviewRows: candidates.length,
  skippedRows: skipped.length,
  errors,
  skipped,
  outputs: {
    csv: OUTPUT_CSV,
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Google Ads Offline Upload Preview - ${today}

## Result

- Status: ${result.status}
- Input: \`${relativeInput}\`
- Eligible lead rows reviewed: ${eligibleRows.length}
- CSV preview rows generated: ${candidates.length}
- Skipped stage rows: ${skipped.length}
- Errors: ${errors.length}

## Files

- CSV preview: \`${OUTPUT_CSV}\`
- JSON audit: \`${OUTPUT_JSON}\`

## Guardrails

- This script does not upload anything to Google Ads.
- Upload only after \`npm run measurement:lead-outcomes\` returns \`PASS\`.
- Preview in Google Ads before applying any CSV.
- Manual CSV preview currently emits \`gclid\` rows only. Keep \`gbraid\`, \`wbraid\`, and no-click-ID leads held for the approved enhanced/offline path.
- \`Order ID\` is \`{event_id}::{conversion_name}\` to prevent duplicate uploads.

## Skipped Rows

${skipped.length ? skipped.map((item) => `- ${item.label}: ${item.reason} - ${item.detail}`).join('\n') : '- none'}

## Errors

${errors.length ? errors.map((item) => `- ${item}`).join('\n') : '- none'}
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_CSV)), { recursive: true });
fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_CSV), `${csv}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);
console.log(JSON.stringify(result, null, 2));
