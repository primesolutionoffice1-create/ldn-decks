#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DEFAULT_INPUT = 'docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv';
const DEFAULT_OUTPUT = 'scripts/output/google-ads-offline-conversions-from-lead-outcomes.csv';

const REQUIRED_HEADERS = [
  'lead_date',
  'lead_id',
  'event_id',
  'gclid',
  'gbraid',
  'wbraid',
  'lead_stage',
  'qualified',
  'estimate_scheduled',
  'estimate_completed',
  'proposal_sent',
  'won',
  'estimated_project_value',
  'closed_revenue_value',
  'ads_action',
];

const STAGE_ORDER = [
  'New Lead',
  'Qualified',
  'Estimate Scheduled',
  'Estimate Completed',
  'Proposal Sent',
  'Won',
  'Closed Paid',
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

function toObjects(rows) {
  const [headers, ...body] = rows;
  return body.map((items) => Object.fromEntries(headers.map((header, index) => [header, String(items[index] ?? '').trim()])));
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function parseMoney(value) {
  const cleaned = String(value ?? '').replace(/[$,]/g, '').trim();
  if (!cleaned) return null;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function yes(value) {
  return String(value ?? '').trim().toLowerCase() === 'yes';
}

function stageRank(stage) {
  const index = STAGE_ORDER.indexOf(stage);
  return index === -1 ? -1 : index;
}

function conversionTime(row) {
  // The lead outcome tracker is intentionally daily-grain. For manual V1,
  // noon Eastern avoids midnight ambiguity while still preserving date.
  return `${row.lead_date} 12:00:00-0400`;
}

function googleClickId(row) {
  return row.gclid || row.gbraid || row.wbraid || '';
}

function isSampleRow(row) {
  return row.lead_date === 'YYYY-MM-DD';
}

function buildRows(rows) {
  const output = [];
  const skipped = [];

  for (const row of rows) {
    if (isSampleRow(row)) continue;

    const label = row.lead_id || row.event_id || row.lead_date || '(unknown lead)';
    const clickId = googleClickId(row);
    if (row.ads_action !== 'eligible_qualified_lead_upload') {
      skipped.push(`${label}: ads_action=${row.ads_action || '(blank)'}`);
      continue;
    }
    if (!yes(row.qualified)) {
      skipped.push(`${label}: qualified is not yes`);
      continue;
    }
    if (!clickId) {
      skipped.push(`${label}: missing Google click ID`);
      continue;
    }
    if (!row.event_id) {
      skipped.push(`${label}: missing event_id`);
      continue;
    }

    output.push([
      clickId,
      'Qualified Lead',
      conversionTime(row),
      500,
      'USD',
      `${row.event_id}::Qualified Lead`,
    ]);

    if (yes(row.estimate_scheduled) || stageRank(row.lead_stage) >= stageRank('Estimate Scheduled')) {
      output.push([
        clickId,
        'Estimate Scheduled',
        conversionTime(row),
        1000,
        'USD',
        `${row.event_id}::Estimate Scheduled`,
      ]);
    }

    if (yes(row.won) || stageRank(row.lead_stage) >= stageRank('Won')) {
      const revenue = parseMoney(row.closed_revenue_value);
      if (revenue == null) {
        skipped.push(`${label}: won but closed_revenue_value is missing`);
      } else {
        output.push([
          clickId,
          'Contract Signed',
          conversionTime(row),
          revenue,
          'USD',
          `${row.event_id}::Contract Signed`,
        ]);
      }
    }
  }

  return { output, skipped };
}

const inputPath = path.resolve(ROOT, process.argv[2] || DEFAULT_INPUT);
const outputPath = path.resolve(ROOT, process.argv[3] || DEFAULT_OUTPUT);
const parsed = parseCsv(fs.readFileSync(inputPath, 'utf8'));
const headers = parsed[0] || [];
const missingHeaders = REQUIRED_HEADERS.filter((header) => !headers.includes(header));

if (missingHeaders.length) {
  console.error(`Missing required headers: ${missingHeaders.join(', ')}`);
  process.exit(1);
}

const { output, skipped } = buildRows(toObjects(parsed));
const csv = [
  ['Google Click ID', 'Conversion Name', 'Conversion Time', 'Conversion Value', 'Conversion Currency', 'Order ID'],
  ...output,
].map((row) => row.map(csvEscape).join(',')).join('\n');

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${csv}\n`);

console.log(`Wrote ${output.length} Google Ads offline conversion rows to ${path.relative(ROOT, outputPath)}`);
if (skipped.length) {
  console.log(`Skipped ${skipped.length} rows/candidates:`);
  for (const item of skipped) console.log(`- ${item}`);
}
