#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp, localIsoTimestamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const OWNER_PACKET_PATH = path.join(ROOT, 'scripts/generate-owner-evidence-packet.mjs');
const OWNER_SPRINT_PATH = path.join(ROOT, 'scripts/generate-owner-evidence-sprint.mjs');

function parseTrailingJson(output) {
  const match = output.match(/\{[\s\S]*?\}\s*$/);
  if (!match) return null;
  return JSON.parse(match[0]);
}

function runJson(command, args) {
  try {
    const output = execFileSync(command, args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return { ok: true, json: parseTrailingJson(output), output };
  } catch (error) {
    const output = `${error.stdout || ''}\n${error.stderr || ''}`;
    return {
      ok: false,
      json: parseTrailingJson(output),
      output,
      error: error.message,
    };
  }
}

function fileExists(relativePath) {
  return Boolean(relativePath && fs.existsSync(path.join(ROOT, relativePath)));
}

function auditArtifact(label, relativePath, expectedRows, actualRows, errors) {
  const exists = fileExists(relativePath);
  if (!exists) errors.push(`${label} is missing: ${relativePath || 'not reported'}`);
  if (expectedRows != null && actualRows !== expectedRows) {
    errors.push(`${label} row count mismatch: expected ${expectedRows}, got ${actualRows}`);
  }
  return { label, path: relativePath, exists, expectedRows, actualRows };
}

function main() {
  const today = localDateStamp();
  const errors = [];
  const ownerPacketRun = runJson('node', [OWNER_PACKET_PATH]);
  const ownerPacket = ownerPacketRun.json;
  const ownerSprintRun = runJson('node', [OWNER_SPRINT_PATH]);
  const ownerSprint = ownerSprintRun.json;

  if (!ownerPacketRun.ok || !ownerPacket?.ok) {
    errors.push('Owner evidence packet generation failed.');
  }
  if (!ownerSprintRun.ok || !ownerSprint?.ok) {
    errors.push('Owner evidence sprint checklist generation failed.');
  }

  const artifacts = [
    auditArtifact('Owner evidence packet report', ownerPacket?.report, null, null, errors),
    auditArtifact('Owner evidence packet CSV', ownerPacket?.csv, ownerPacket?.rows, ownerPacket?.rows, errors),
    auditArtifact('Owner evidence sprint report', ownerSprint?.report, null, null, errors),
    auditArtifact('Owner evidence sprint CSV', ownerSprint?.csv, ownerSprint?.blocks, ownerSprint?.blocks, errors),
    auditArtifact('Project intake CSV', ownerPacket?.projectIntakeCsv, 10, ownerPacket?.projectIntakeRows, errors),
    auditArtifact('Project intake report', ownerPacket?.projectIntakeReport, null, null, errors),
    auditArtifact('Photo manifest CSV', ownerPacket?.photoManifestCsv, 17, ownerPacket?.photoManifestRows, errors),
    auditArtifact('Photo manifest report', ownerPacket?.photoManifestReport, null, null, errors),
    auditArtifact('Commercial intake report', ownerPacket?.commercialIntakeReport, null, null, errors),
    auditArtifact('Warranty intake CSV', ownerPacket?.warrantyCsv, 1, ownerPacket?.warrantyRows, errors),
    auditArtifact('Repair cost intake CSV', ownerPacket?.repairCostCsv, 4, ownerPacket?.repairCostRows, errors),
  ];

  const dryRuns = [
    {
      label: 'Project intake dry-run',
      command: 'node',
      args: ['scripts/import-project-evidence.mjs', '--type', 'projects', '--file', ownerPacket?.projectIntakeCsv || '', '--dry-run'],
      expectedRows: ownerPacket?.projectIntakeRows,
    },
    {
      label: 'Warranty intake dry-run',
      command: 'node',
      args: ['scripts/import-project-evidence.mjs', '--type', 'warranty_terms', '--file', ownerPacket?.warrantyCsv || '', '--dry-run'],
      expectedRows: ownerPacket?.warrantyRows,
    },
    {
      label: 'Repair cost intake dry-run',
      command: 'node',
      args: ['scripts/import-project-evidence.mjs', '--type', 'repair_cost_ranges', '--file', ownerPacket?.repairCostCsv || '', '--dry-run'],
      expectedRows: ownerPacket?.repairCostRows,
    },
    {
      label: 'Photo manifest preflight',
      command: 'node',
      args: ['scripts/ingest-evidence-assets.mjs', '--file', ownerPacket?.photoManifestCsv || '', '--preflight'],
      expectedRows: ownerPacket?.photoManifestRows,
      allowMissingSourceRows: true,
    },
  ].map((check) => {
    const result = runJson(check.command, check.args);
    if (!result.ok || !result.json?.ok) {
      errors.push(`${check.label} failed.`);
    }
    if (check.expectedRows != null && result.json?.rows !== check.expectedRows) {
      errors.push(`${check.label} row count mismatch: expected ${check.expectedRows}, got ${result.json?.rows}`);
    }
    if (!check.allowMissingSourceRows && (result.json?.missingSourceRows || 0) > 0) {
      errors.push(`${check.label} has unexpected missing source rows: ${result.json.missingSourceRows}`);
    }
    return {
      label: check.label,
      ok: Boolean(result.ok && result.json?.ok),
      rows: result.json?.rows ?? null,
      missingSourceRows: result.json?.missingSourceRows ?? 0,
    };
  });

  const summary = {
    ok: errors.length === 0,
    generated: localIsoTimestamp(),
    ownerPacket: {
      report: ownerPacket?.report || null,
      csv: ownerPacket?.csv || null,
      rows: ownerPacket?.rows ?? null,
      p0: ownerPacket?.p0 ?? null,
      p1: ownerPacket?.p1 ?? null,
      publishReady: ownerPacket?.publishReady ?? null,
      proofIncomplete: ownerPacket?.proofIncomplete ?? null,
      blocked: ownerPacket?.blocked ?? null,
    },
    ownerSprint: {
      report: ownerSprint?.report || null,
      csv: ownerSprint?.csv || null,
      blocks: ownerSprint?.blocks ?? null,
      assetActions: ownerSprint?.assetActions ?? null,
      projectActions: ownerSprint?.projectActions ?? null,
      warrantyActions: ownerSprint?.warrantyActions ?? null,
      repairCostActions: ownerSprint?.repairCostActions ?? null,
    },
    artifacts,
    dryRuns,
    errors,
  };

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const jsonPath = path.join(OUTPUT_DIR, `owner-intake-suite-${today}.json`);
  const mdPath = path.join(OUTPUT_DIR, `owner-intake-suite-${today}.md`);
  fs.writeFileSync(jsonPath, `${JSON.stringify(summary, null, 2)}\n`);
  fs.writeFileSync(mdPath, [
    `# Owner Intake Suite Validation — ${today}`,
    '',
    `Generated: ${summary.generated}`,
    '',
    '## Summary',
    '',
    `- Status: ${summary.ok ? 'pass' : 'fail'}`,
    `- Owner actions: ${summary.ownerPacket.rows ?? '?'}`,
    `- Sprint blocks: ${summary.ownerSprint.blocks ?? '?'}`,
    `- P0: ${summary.ownerPacket.p0 ?? '?'}`,
    `- P1: ${summary.ownerPacket.p1 ?? '?'}`,
    `- Publish readiness: ${summary.ownerPacket.publishReady ?? '?'} ready · ${summary.ownerPacket.proofIncomplete ?? '?'} incomplete · ${summary.ownerPacket.blocked ?? '?'} blocked`,
    '',
    '## Artifacts',
    '',
    '| Artifact | Exists | Rows | Path |',
    '|---|---|---:|---|',
    ...artifacts.map((artifact) => `| ${artifact.label} | ${artifact.exists ? 'yes' : 'no'} | ${artifact.actualRows ?? ''} | ${artifact.path || ''} |`),
    '',
    '## Dry Runs',
    '',
    '| Check | OK | Rows | Missing source rows |',
    '|---|---|---:|---:|',
    ...dryRuns.map((check) => `| ${check.label} | ${check.ok ? 'yes' : 'no'} | ${check.rows ?? ''} | ${check.missingSourceRows ?? 0} |`),
    '',
    '## Errors',
    '',
    ...(errors.length ? errors.map((error) => `- ${error}`) : ['- none']),
    '',
  ].join('\n'));

  console.log(JSON.stringify({
    ok: summary.ok,
    report: path.relative(ROOT, mdPath),
    json: path.relative(ROOT, jsonPath),
    ownerRows: summary.ownerPacket.rows,
    sprintBlocks: summary.ownerSprint.blocks,
    projectIntake: dryRuns.find((check) => check.label === 'Project intake dry-run')?.rows ?? null,
    photoManifest: dryRuns.find((check) => check.label === 'Photo manifest preflight')?.rows ?? null,
    warrantyRows: dryRuns.find((check) => check.label === 'Warranty intake dry-run')?.rows ?? null,
    repairCostRows: dryRuns.find((check) => check.label === 'Repair cost intake dry-run')?.rows ?? null,
    errors: errors.length,
  }, null, 2));

  if (!summary.ok) process.exit(1);
}

main();
