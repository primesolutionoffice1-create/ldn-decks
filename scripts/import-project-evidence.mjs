#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const VALIDATOR_PATH = path.join(ROOT, 'scripts/validate-evidence-ledger.mjs');
const OWNER_PACKET_PATH = path.join(ROOT, 'scripts/generate-owner-evidence-packet.mjs');
const PROOF_SNIPPETS_PATH = path.join(ROOT, 'scripts/generate-verified-proof-snippets.mjs');
const DEFAULT_STATUS = 'partial';
const OWNER_FILL_PATTERN = /UNKNOWN - OWNER TO FILL|OWNER TO FILL/i;
const UNVERIFIED_PROVENANCE_PATTERN = /\b(unknown|not recorded|not specified|unspecified|unverified|pending owner verification|owner verification still required|verification still required|verify from owner|evidence missing)\b/i;
const TYPE_CONFIGS = {
  projects: {
    arrayField: 'projects',
    requiredFieldsKey: 'projectRequiredFields',
    idField: 'project_id',
    label: 'project evidence',
  },
  warranty_terms: {
    arrayField: 'warranty_terms',
    requiredFieldsKey: 'warrantyTermRequiredFields',
    idField: 'warranty_id',
    label: 'warranty term evidence',
  },
  repair_cost_ranges: {
    arrayField: 'repair_cost_ranges',
    requiredFieldsKey: 'repairCostRangeRequiredFields',
    idField: 'cost_id',
    label: 'repair cost range evidence',
  },
  asset_requirements: {
    arrayField: 'asset_requirements',
    requiredFieldsKey: 'assetRequirementRequiredFields',
    idField: 'asset_id',
    label: 'asset requirement evidence',
  },
  public_review_sources: {
    arrayField: 'public_review_sources',
    requiredFieldsKey: 'publicReviewSourceRequiredFields',
    idField: 'source_id',
    label: 'public review source evidence',
  },
};

function argValue(name) {
  const prefix = `${name}=`;
  const inline = process.argv.find((arg) => arg.startsWith(prefix));
  if (inline) return inline.slice(prefix.length);
  const index = process.argv.indexOf(name);
  if (index !== -1) return process.argv[index + 1];
  return null;
}

function hasFlag(name) {
  return process.argv.includes(name);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        value += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        value += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(value);
      value = '';
    } else if (char === '\n') {
      row.push(value);
      rows.push(row);
      row = [];
      value = '';
    } else if (char !== '\r') {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  if (!rows.length) return [];
  const headers = rows[0].map((header) => header.trim());
  return rows.slice(1)
    .filter((cells) => cells.some((cell) => String(cell).trim()))
    .map((cells) => Object.fromEntries(headers.map((header, index) => [header, (cells[index] || '').trim()])));
}

function normalizeEmpty(value) {
  if (value == null) return null;
  const trimmed = String(value).trim();
  return trimmed === '' ? null : trimmed;
}

function normalizeEvidenceRow(row, ledger, config, options) {
  const record = {};
  const requiredFields = ledger[config.requiredFieldsKey] || [];

  for (const field of requiredFields) {
    record[field] = normalizeEmpty(row[field]);
  }

  if (!record[config.idField]) {
    throw new Error(`Every imported ${config.label} row must include ${config.idField}.`);
  }

  if (!record.evidence_status) {
    record.evidence_status = DEFAULT_STATUS;
  }

  if (record.evidence_status === 'verified' && !options.allowVerified) {
    record.evidence_status = 'partial';
    record.owner_notes = [
      record.owner_notes,
      'Importer downgraded requested verified status to partial because --allow-verified was not used.',
    ].filter(Boolean).join(' ');
  }

  if (config.arrayField === 'asset_requirements' && record.evidence_status === 'verified') {
    throw new Error(`${record[config.idField]} cannot be imported as verified through the generic evidence importer. Use npm run seo:ingest-assets so source files and public paths are validated.`);
  }

  if (record.evidence_status === 'verified') {
    const ownerFillFields = Object.entries(record)
      .filter(([, value]) => typeof value === 'string' && OWNER_FILL_PATTERN.test(value))
      .map(([field]) => field);

    if (ownerFillFields.length) {
      throw new Error(`${record[config.idField]} cannot be imported as verified while owner-fill placeholders remain: ${ownerFillFields.join(', ')}`);
    }

    if (!record.owner_notes || UNVERIFIED_PROVENANCE_PATTERN.test(record.owner_notes)) {
      throw new Error(`${record[config.idField]} cannot be imported as verified without concrete owner_notes describing the reviewed evidence source.`);
    }

    if ('source' in record && (!record.source || UNVERIFIED_PROVENANCE_PATTERN.test(record.source))) {
      throw new Error(`${record[config.idField]} cannot be imported as verified without a concrete source.`);
    }
  }

  if (!ledger.allowedEvidenceStatuses.includes(record.evidence_status)) {
    throw new Error(`Invalid evidence_status for ${record[config.idField]}: ${record.evidence_status}`);
  }

  if (!record.owner_notes) {
    record.owner_notes = `Imported from ${options.sourceLabel}; owner verification still required before public proof use.`;
  }

  return record;
}

function upsertRecords(existing, incoming, idField) {
  const byId = new Map(existing.map((record) => [record[idField], record]));
  let added = 0;
  let updated = 0;

  for (const record of incoming) {
    if (byId.has(record[idField])) {
      byId.set(record[idField], { ...byId.get(record[idField]), ...record });
      updated += 1;
    } else {
      byId.set(record[idField], record);
      added += 1;
    }
  }

  return { records: [...byId.values()], added, updated };
}

function runJsonScript(scriptPath) {
  const output = execFileSync('node', [scriptPath], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  const match = output.match(/\{[\s\S]*?\}\s*$/);
  if (!match) return { ok: false, script: path.relative(ROOT, scriptPath), output: output.trim() };
  return JSON.parse(match[0]);
}

function validatorOutput(error) {
  return `${error.stdout || ''}\n${error.stderr || ''}`.trim();
}

function main() {
  const fileArg = argValue('--file');
  const type = argValue('--type') || 'projects';
  const dryRun = hasFlag('--dry-run');
  const allowVerified = hasFlag('--allow-verified');
  const config = TYPE_CONFIGS[type];

  if (!config) {
    console.error(`Unsupported evidence type: ${type}`);
    console.error(`Supported types: ${Object.keys(TYPE_CONFIGS).join(', ')}`);
    process.exit(1);
  }

  if (!fileArg) {
    console.error('Usage: npm run seo:import-evidence -- --type projects --file seo-blueprint/evidence/project-evidence-intake-template.csv [--dry-run] [--allow-verified]');
    console.error(`Supported types: ${Object.keys(TYPE_CONFIGS).join(', ')}`);
    process.exit(1);
  }

  const csvPath = path.resolve(ROOT, fileArg);
  const ledger = JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf8'));
  const rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
  const requestedVerifiedRows = rows.filter((row) => row.evidence_status === 'verified').length;
  const incoming = rows.map((row) => normalizeEvidenceRow(row, ledger, config, {
    allowVerified,
    sourceLabel: path.relative(ROOT, csvPath),
  }));
  const result = upsertRecords(ledger[config.arrayField] || [], incoming, config.idField);
  const nextLedger = {
    ...ledger,
    [config.arrayField]: result.records,
  };

  const summary = {
    ok: true,
    dryRun,
    type,
    array: config.arrayField,
    idField: config.idField,
    source: path.relative(ROOT, csvPath),
    rows: rows.length,
    added: result.added,
    updated: result.updated,
    requestedVerifiedRows,
    importedVerifiedRows: incoming.filter((record) => record.evidence_status === 'verified').length,
    note: allowVerified
      ? 'Verified rows were allowed, but validator still checks required fields, placeholders, URLs, cost ranges, and asset paths where applicable.'
      : 'Rows requesting verified status are downgraded to partial unless --allow-verified is used.',
    regenerated: [],
  };

  if (!dryRun) {
    const previousLedger = fs.readFileSync(LEDGER_PATH, 'utf8');
    try {
      fs.writeFileSync(LEDGER_PATH, `${JSON.stringify(nextLedger, null, 2)}\n`);
      execFileSync('node', [VALIDATOR_PATH], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    } catch (error) {
      fs.writeFileSync(LEDGER_PATH, previousLedger);
      throw new Error(`Evidence import failed validation and the ledger was restored.\n${validatorOutput(error)}`);
    }
    const proofSnippets = runJsonScript(PROOF_SNIPPETS_PATH);
    const ownerPacket = runJsonScript(OWNER_PACKET_PATH);
    summary.regenerated = [
      {
        type: 'verified_proof_snippets',
        report: proofSnippets.report,
        json: proofSnippets.json,
        runtimeJson: proofSnippets.runtimeJson,
        projectSnippets: proofSnippets.projectSnippets,
        reviewSourceSnippets: proofSnippets.reviewSourceSnippets,
        skipped: proofSnippets.skipped,
      },
      {
        type: 'owner_evidence_packet',
        report: ownerPacket.report,
        csv: ownerPacket.csv,
        rows: ownerPacket.rows,
        p0: ownerPacket.p0,
        p1: ownerPacket.p1,
        blocked: ownerPacket.blocked,
        proofIncomplete: ownerPacket.proofIncomplete,
      },
    ];
  }

  console.log(JSON.stringify(summary, null, 2));
}

main();
