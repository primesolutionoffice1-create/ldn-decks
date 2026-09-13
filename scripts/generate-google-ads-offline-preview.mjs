#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const today = new Date().toISOString().slice(0, 10);
const LIVE_INPUT_DIR = 'docs/ads-tracking';
const LIVE_INPUT_PREFIX = 'live-lead-outcomes-';
const OUTPUT_CSV = `docs/ads-tracking/google-ads-offline-upload-preview-${today}.csv`;
const OUTPUT_JSON = `scripts/output/google-ads-offline-upload-preview-${today}.json`;
const OUTPUT_MD = `scripts/output/google-ads-offline-upload-preview-${today}.md`;

const GOOGLE_ADS_TIME_RE = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})([+-])(\d{2})(\d{2})$/;
const REQUIRED_HEADERS = [
  'lead_date', 'event_id', 'gclid', 'lead_stage', 'qualified',
  'estimate_scheduled', 'won', 'closed_revenue_value', 'ads_action',
];
const CSV_HEADERS = [
  'Google Click ID',
  'Conversion Name',
  'Conversion Time',
  'Conversion Value',
  'Conversion Currency',
  'Order ID',
];

function parseCsv(text) {
  text = text.replace(/^\uFEFF/, '');
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  let closedQuote = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
        closedQuote = true;
      } else {
        field += char;
      }
    } else if (char === '"') {
      if (field || closedQuote) throw new Error('Malformed CSV: unexpected quote.');
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
      closedQuote = false;
    } else if (char === '\n' || char === '\r') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      closedQuote = false;
      if (char === '\r' && next === '\n') i += 1;
    } else {
      if (closedQuote) throw new Error('Malformed CSV: text after closing quote.');
      field += char;
    }
  }

  if (quoted) throw new Error('Malformed CSV: unclosed quoted field.');
  if (field || row.length || closedQuote) {
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
  if (!rows.length) throw new Error('Empty CSV: supply a lead-outcome header and recorded stage data.');
  const [rawHeaders, ...body] = rows;
  const headers = rawHeaders.map(normalize);
  if (headers.some((header) => !header) || new Set(headers).size !== headers.length) {
    throw new Error('Invalid CSV headers: blank or duplicate column names.');
  }
  const missing = REQUIRED_HEADERS.filter((header) => !headers.includes(header));
  if (missing.length) throw new Error(`Missing required headers: ${missing.join(', ')}.`);
  body.forEach((items, index) => {
    if (items.length !== headers.length) throw new Error(`CSV row ${index + 2}: column count does not match header.`);
  });
  return body.map((items) => Object.fromEntries(headers.map((header, index) => [header, normalize(items[index])])));
}

function moneyToNumber(value) {
  const clean = normalize(value);
  if (!/^\$?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(clean)) return '';
  const numeric = Number(clean.replace('$', '').replaceAll(',', ''));
  return Number.isFinite(numeric) && numeric > 0 ? String(numeric) : '';
}

function validConversionTime(value) {
  const match = GOOGLE_ADS_TIME_RE.exec(value || '');
  if (!match) return false;
  const [, year, month, day, hour, minute, second, , offsetHour, offsetMinute] = match;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  return Number(year) >= 1970
    && date.getUTCFullYear() === Number(year)
    && date.getUTCMonth() === Number(month) - 1
    && date.getUTCDate() === Number(day)
    && Number(hour) < 24 && Number(minute) < 60 && Number(second) < 60
    && Number(offsetHour) <= 14 && Number(offsetMinute) < 60
    && (Number(offsetHour) !== 14 || Number(offsetMinute) === 0);
}

function isYes(value) {
  return normalize(value).toLowerCase() === 'yes';
}

function isSampleRow(row) {
  return row.lead_date === 'YYYY-MM-DD';
}

function addCandidate(candidates, errors, row, label, conversionName, timeField, value) {
  label = `${label} (${conversionName})`;
  if (!row.gclid) {
    errors.push(`${label}: a recorded gclid is required; hold braid-only/no-click-ID rows instead of marking them upload-eligible.`);
    return;
  }
  if (!row.event_id) {
    errors.push(`${label}: event_id is required for duplicate prevention.`);
    return;
  }
  if (!validConversionTime(row[timeField])) {
    errors.push(`${label}: ${timeField} must contain the actual stage timestamp as YYYY-MM-DD HH:MM:SS+HHMM or -HHMM, with its recorded UTC offset; do not substitute lead_date or noon.`);
    return;
  }
  const cleanValue = moneyToNumber(value);
  if (!cleanValue) {
    errors.push(`${label}: a strictly positive conversion value with at most two decimal places is required.`);
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

// Both CLI entry points use this validation before opening any output file.
export function buildOfflinePreview(text) {
  const rows = toObjects(parseCsv(text));
  const candidates = [];
  const skipped = [];
  const errors = [];
  let eligibleLeadRows = 0;
  let manualConsentReviewRequired = false;

  rows.forEach((row, index) => {
    const label = `CSV row ${index + 2}`;
    if (isSampleRow(row)) {
      errors.push(`${label}: placeholder sample row; supply recorded lead outcomes instead.`);
      return;
    }
    const action = row.ads_action.toLowerCase();
    if (!['hold', 'do_not_upload', 'eligible_qualified_lead_upload'].includes(action)) {
      errors.push(`${label}: ads_action must be hold, do_not_upload, or eligible_qualified_lead_upload.`);
      return;
    }
    if (!['yes', 'no'].includes(row.qualified.toLowerCase())) {
      errors.push(`${label}: qualified must be yes or no.`);
      return;
    }
    if (action !== 'eligible_qualified_lead_upload') {
      skipped.push({ label, reason: action });
      return;
    }
    if (!isYes(row.qualified)) {
      errors.push(`${label}: an unqualified lead cannot be upload-eligible.`);
      return;
    }
    if (Object.hasOwn(row, 'ad_consent')) {
      if (row.ad_consent !== 'granted') {
        errors.push(`${label}: upload-eligible ad_consent must be granted; denied, blank, or invalid consent blocks export even when a gclid is present.`);
        return;
      }
    } else {
      // Historical files remain previewable, but missing consent is not consent.
      manualConsentReviewRequired = true;
    }
    if (!validConversionTime(`${row.lead_date} 00:00:00+0000`)) {
      errors.push(`${label}: lead_date must be a real YYYY-MM-DD date.`);
    }
    for (const key of ['estimate_scheduled', 'won']) {
      if (!['yes', 'no'].includes(row[key].toLowerCase())) {
        errors.push(`${label}: ${key} must be yes or no.`);
      }
    }
    const stage = row.lead_stage.toLowerCase();
    if (!['qualified', 'estimate scheduled', 'estimate completed', 'proposal sent', 'won', 'closed paid'].includes(stage)) {
      errors.push(`${label}: upload-eligible lead_stage must be Qualified or a supported later stage.`);
    }
    if (['estimate scheduled', 'estimate completed', 'proposal sent'].includes(stage) && !isYes(row.estimate_scheduled)) {
      errors.push(`${label}: lead_stage conflicts with estimate_scheduled.`);
    }
    if (['won', 'closed paid'].includes(stage) && !isYes(row.won)) {
      errors.push(`${label}: lead_stage conflicts with won.`);
    }
    eligibleLeadRows += 1;
    addCandidate(candidates, errors, row, label, 'Qualified Lead', 'qualified_at', '500');
    if (isYes(row.estimate_scheduled)) {
      addCandidate(candidates, errors, row, label, 'Estimate Scheduled', 'estimate_scheduled_at', '1000');
    }
    if (isYes(row.won)) {
      addCandidate(candidates, errors, row, label, 'Contract Signed', 'contract_signed_at', row.closed_revenue_value);
    }
    if (stage === 'closed paid') {
      addCandidate(candidates, errors, row, label, 'Closed Paid', 'closed_paid_at', row.closed_revenue_value);
    }
  });

  const orderIds = new Set();
  for (const candidate of candidates) {
    const orderId = candidate['Order ID'];
    if (orderIds.has(orderId)) errors.push(`Duplicate Order ID for ${candidate['Conversion Name']}; reconcile duplicate input rows before export.`);
    orderIds.add(orderId);
  }
  if (errors.length) throw new Error(errors.join('\n'));

  const csv = [
    CSV_HEADERS.join(','),
    ...candidates.map((row) => CSV_HEADERS.map((header) => csvEscape(row[header])).join(',')),
  ].join('\n');
  const warnings = manualConsentReviewRequired
    ? ['Historical input has no ad_consent column. Manual consent review is required before upload; missing consent must not be treated as granted.']
    : [];
  return { candidates, skipped, eligibleLeadRows, csv, warnings };
}

function main() {
  const inputArg = process.argv[2] || process.env.LEAD_OUTCOME_INPUT || latestLiveInput();
  if (!inputArg) {
    throw new Error(`No input found. Pass a recorded lead-outcomes CSV path or provide docs/ads-tracking/${LIVE_INPUT_PREFIX}YYYY-MM-DD.csv.`);
  }

  const inputPath = path.resolve(ROOT, inputArg);
  const relativeInput = path.relative(ROOT, inputPath);
  const { candidates, skipped, eligibleLeadRows, csv, warnings } = buildOfflinePreview(fs.readFileSync(inputPath, 'utf8'));

  const result = {
    ok: true,
    status: candidates.length ? 'READY_FOR_PREVIEW' : 'NO_UPLOAD_ROWS',
    input: relativeInput,
    eligibleLeadRows,
    uploadPreviewRows: candidates.length,
    skippedRows: skipped.length,
    errors: [],
    warnings,
    skipped,
    outputs: {
      csv: OUTPUT_CSV,
      json: OUTPUT_JSON,
      markdown: OUTPUT_MD,
    },
  };

  if (!candidates.length) {
    console.log(JSON.stringify({ ...result, outputs: {}, note: 'No files written; existing output files are unchanged.' }, null, 2));
    return;
  }

  const md = `# Google Ads Offline Upload Preview - ${today}

## Result

- Status: ${result.status}
- Input: \`${relativeInput}\`
- Eligible lead rows reviewed: ${eligibleLeadRows}
- CSV preview rows generated: ${candidates.length}
- Skipped stage rows: ${skipped.length}
- Errors: 0

## Files

- CSV preview: \`${OUTPUT_CSV}\`
- JSON audit: \`${OUTPUT_JSON}\`

## Guardrails

- This script does not upload anything to Google Ads.
- Upload only after \`npm run measurement:lead-outcomes\` returns \`PASS\`.
- Preview in Google Ads before applying any CSV.
- Manual CSV preview currently emits \`gclid\` rows only. Keep \`gbraid\`, \`wbraid\`, and no-click-ID leads held for the approved enhanced/offline path.
- \`Order ID\` is \`{event_id}::{conversion_name}\` to prevent duplicate uploads.
- When \`ad_consent\` is present, only \`granted\` may be exported. Historical files without this column require manual consent review before upload.

## Warnings

${warnings.length ? warnings.map((warning) => `- ${warning}`).join('\n') : '- none'}

## Skipped Rows

${skipped.length ? skipped.map((item) => `- ${item.label}: ${item.reason}`).join('\n') : '- none'}

## Errors

- none
`;

  fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_CSV)), { recursive: true });
  fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, OUTPUT_CSV), `${csv}\n`);
  fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);
  console.log(JSON.stringify(result, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    main();
  } catch (error) {
    console.error(`Offline export failed: ${error.message}\nDo not upload an existing CSV based on this failed run; correct the input and rerun validation.`);
    process.exitCode = 1;
  }
}
