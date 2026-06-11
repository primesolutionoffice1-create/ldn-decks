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
const PUBLIC_PREFIX = '/images/evidence/';
const OWNER_FILL_PATTERN = /UNKNOWN - OWNER TO FILL|OWNER TO FILL|\[(INSERT|VERIFY|TODO|TBD|DO NOT PUBLISH)/i;
const UNVERIFIED_PROVENANCE_PATTERN = /\b(unknown|not recorded|not specified|unspecified|unverified|pending owner verification|owner verification still required|verification still required|verify from owner|evidence missing)\b/i;
const IMAGE_EXTENSIONS = new Set(['.avif', '.webp', '.jpg', '.jpeg', '.png', '.heic', '.heif']);

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

function normalizePublicPath(value, assetId, sourcePath) {
  const provided = normalizeEmpty(value);
  if (provided) {
    if (!provided.startsWith('/')) {
      throw new Error(`${assetId} public_path must start with "/": ${provided}`);
    }
    if (provided.includes('..')) {
      throw new Error(`${assetId} public_path must not include "..": ${provided}`);
    }
    return provided;
  }

  const ext = path.extname(sourcePath || '').toLowerCase();
  if (!ext) {
    throw new Error(`${assetId} needs public_path because source_path has no extension.`);
  }
  return `${PUBLIC_PREFIX}${assetId}${ext}`;
}

function resolveSourcePath(value, assetId) {
  const sourcePath = normalizeEmpty(value);
  if (!sourcePath) throw new Error(`${assetId} must include source_path.`);
  return path.isAbsolute(sourcePath) ? sourcePath : path.resolve(ROOT, sourcePath);
}

function assertImageExtension(filePath, assetId) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(ext)) {
    throw new Error(`${assetId} has unsupported image extension "${ext}". Supported: ${[...IMAGE_EXTENSIONS].join(', ')}`);
  }
}

function normalizeAssetFile(row, ledger, options) {
  const asset = {
    asset_id: normalizeEmpty(row.asset_id),
    source_path: normalizeEmpty(row.source_path),
    public_path: null,
    evidence_status: normalizeEmpty(row.evidence_status) || DEFAULT_STATUS,
    city: normalizeEmpty(row.city),
    month_year: normalizeEmpty(row.month_year),
    caption: normalizeEmpty(row.caption),
    owner_notes: normalizeEmpty(row.owner_notes),
  };

  if (!asset.asset_id) throw new Error('Every asset row must include asset_id.');
  if (!ledger.asset_requirements?.some((item) => item.asset_id === asset.asset_id)) {
    throw new Error(`${asset.asset_id} is not listed in ledger.asset_requirements.`);
  }

  const missingSourcePath = !asset.source_path;
  const resolvedSource = missingSourcePath ? null : resolveSourcePath(asset.source_path, asset.asset_id);
  asset.public_path = normalizePublicPath(row.public_path, asset.asset_id, resolvedSource || asset.public_path);
  if (resolvedSource) assertImageExtension(resolvedSource, asset.asset_id);
  assertImageExtension(asset.public_path, asset.asset_id);

  if (missingSourcePath && !options.preflight) {
    throw new Error(`${asset.asset_id} must include source_path.`);
  }

  if (resolvedSource && !fs.existsSync(resolvedSource)) {
    throw new Error(`${asset.asset_id} source_path does not exist: ${resolvedSource}`);
  }

  if (!ledger.allowedEvidenceStatuses.includes(asset.evidence_status)) {
    throw new Error(`Invalid evidence_status for ${asset.asset_id}: ${asset.evidence_status}`);
  }

  if (asset.evidence_status === 'verified' && !options.allowVerified) {
    asset.evidence_status = 'partial';
    asset.owner_notes = [
      asset.owner_notes,
      'Asset importer downgraded requested verified status to partial because --allow-verified was not used.',
    ].filter(Boolean).join(' ');
  }

  if (asset.evidence_status === 'verified') {
    const placeholderFields = Object.entries(asset)
      .filter(([, value]) => typeof value === 'string' && OWNER_FILL_PATTERN.test(value))
      .map(([field]) => field);

    if (placeholderFields.length) {
      throw new Error(`${asset.asset_id} cannot be imported as verified while placeholders remain: ${placeholderFields.join(', ')}`);
    }

    if (!asset.owner_notes || UNVERIFIED_PROVENANCE_PATTERN.test(asset.owner_notes)) {
      throw new Error(`${asset.asset_id} cannot be imported as verified without concrete owner_notes describing the reviewed evidence source.`);
    }
  }

  return {
    ...asset,
    missingSourcePath,
    resolvedSource,
    resolvedDestination: path.join(ROOT, 'public', asset.public_path.replace(/^\/+/, '')),
  };
}

function mergeAssetRequirements(ledger, incoming, options) {
  const filesByAsset = incoming.reduce((acc, file) => {
    if (!acc.has(file.asset_id)) acc.set(file.asset_id, []);
    acc.get(file.asset_id).push(file);
    return acc;
  }, new Map());

  return ledger.asset_requirements.map((requirement) => {
    const files = filesByAsset.get(requirement.asset_id);
    if (!files) return requirement;

    const strongestStatus = files.some((file) => file.evidence_status === 'verified') ? 'verified' : 'partial';
    const publicPaths = files.map((file) => file.public_path).join('; ');
    const notes = [
      requirement.owner_notes,
      `Asset ingestion ${options.dryRun ? 'dry-run checked' : 'recorded'} ${files.length} file(s): ${publicPaths}.`,
      files.some((file) => file.city || file.month_year)
        ? `Metadata: ${files.map((file) => [file.city, file.month_year].filter(Boolean).join(' ')).filter(Boolean).join('; ')}.`
        : null,
    ].filter(Boolean).join(' ');

    return {
      ...requirement,
      evidence_status: strongestStatus,
      public_asset_paths: publicPaths,
      owner_notes: notes,
    };
  });
}

function copyAssetFiles(incoming) {
  for (const file of incoming) {
    if (!file.resolvedSource) {
      throw new Error(`${file.asset_id} cannot be copied because source_path is missing.`);
    }
    fs.mkdirSync(path.dirname(file.resolvedDestination), { recursive: true });
    fs.copyFileSync(file.resolvedSource, file.resolvedDestination);
  }
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
  const dryRun = hasFlag('--dry-run');
  const preflight = hasFlag('--preflight');
  const allowVerified = hasFlag('--allow-verified');

  if (!fileArg) {
    console.error('Usage: npm run seo:ingest-assets -- --file seo-blueprint/evidence/photo-ingestion-manifest-template.csv [--preflight] [--dry-run] [--allow-verified]');
    process.exit(1);
  }

  const csvPath = path.isAbsolute(fileArg) ? fileArg : path.resolve(ROOT, fileArg);
  const ledger = JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf8'));
  const rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
  const requestedVerifiedRows = rows.filter((row) => row.evidence_status === 'verified').length;
  const incoming = rows.map((row) => normalizeAssetFile(row, ledger, { allowVerified, preflight }));
  const missingSourceRows = incoming.filter((file) => file.missingSourcePath);
  const nextLedger = {
    ...ledger,
    asset_requirements: mergeAssetRequirements(ledger, incoming, { dryRun }),
  };

  const summary = {
    ok: true,
    preflight,
    dryRun,
    source: path.relative(ROOT, csvPath),
    rows: rows.length,
    missingSourceRows: missingSourceRows.length,
    requestedVerifiedRows,
    importedVerifiedRows: incoming.filter((file) => file.evidence_status === 'verified').length,
    copied: dryRun || preflight ? 0 : incoming.length,
    destinations: incoming.map((file) => file.public_path),
    regenerated: [],
    note: allowVerified
      ? 'Verified asset rows were allowed, but source files, placeholders, extensions, and ledger IDs were still checked.'
      : 'Rows requesting verified status are downgraded to partial unless --allow-verified is used.',
  };

  if (preflight) {
    summary.note = missingSourceRows.length
      ? 'Preflight checked manifest structure. Fill source_path before dry-run or ingest.'
      : 'Preflight checked manifest structure. Ready for dry-run.';
  } else if (!dryRun) {
    const previousLedger = fs.readFileSync(LEDGER_PATH, 'utf8');
    try {
      copyAssetFiles(incoming);
      fs.writeFileSync(LEDGER_PATH, `${JSON.stringify(nextLedger, null, 2)}\n`);
      execFileSync('node', [VALIDATOR_PATH], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    } catch (error) {
      fs.writeFileSync(LEDGER_PATH, previousLedger);
      throw new Error(`Asset evidence ingest failed validation and the ledger was restored.\n${validatorOutput(error)}`);
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
