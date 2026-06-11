#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { proofStagingDate } from './lib/proof-staging-groups.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');

function parseTrailingJson(output) {
  const start = output.indexOf('{');
  const end = output.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(output.slice(start, end + 1));
  } catch {
    return null;
  }
}

function runStep(label, args, options = {}) {
  const started = Date.now();
  try {
    const output = execFileSync('node', args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const json = parseTrailingJson(output);
    return {
      label,
      ok: true,
      expectedFailure: false,
      ms: Date.now() - started,
      json,
    };
  } catch (error) {
    const output = `${error.stdout || ''}\n${error.stderr || ''}`;
    const json = parseTrailingJson(output);
    if (options.expectedFailure?.(json, output)) {
      return {
        label,
        ok: true,
        expectedFailure: true,
        ms: Date.now() - started,
        json,
      };
    }
    return {
      label,
      ok: false,
      expectedFailure: false,
      ms: Date.now() - started,
      error: error.message,
      json,
    };
  }
}

function runBatchStep(label, commands) {
  const started = Date.now();
  const outputs = [];
  try {
    for (const args of commands) {
      const output = execFileSync('node', args, {
        cwd: ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      });
      outputs.push({
        command: `node ${args.join(' ')}`,
        json: parseTrailingJson(output),
      });
    }
    return {
      label,
      ok: true,
      expectedFailure: false,
      ms: Date.now() - started,
      json: { commands: outputs },
    };
  } catch (error) {
    const output = `${error.stdout || ''}\n${error.stderr || ''}`;
    return {
      label,
      ok: false,
      expectedFailure: false,
      ms: Date.now() - started,
      error: error.message,
      json: {
        commands: outputs,
        failure: parseTrailingJson(output),
      },
    };
  }
}

const OWNER_HANDOFF_REFRESH_COMMANDS = [
  ['scripts/generate-owner-evidence-packet.mjs'],
  ['scripts/generate-owner-evidence-sprint.mjs'],
  ['scripts/generate-project-evidence-intake.mjs'],
  ['scripts/generate-photo-ingestion-manifest.mjs'],
  ['scripts/generate-commercial-evidence-intake.mjs'],
  ['scripts/generate-before-after-evidence-resolution.mjs'],
  ['scripts/generate-evidence-unblock-runbook.mjs'],
  ['scripts/generate-verified-proof-snippets.mjs'],
  ['scripts/generate-directory-citation-packets.mjs'],
  ['scripts/generate-proof-ops-board.mjs'],
  ['scripts/generate-internal-link-gap-report.mjs'],
  ['scripts/generate-deep-seo-growth-map.mjs'],
  ['scripts/generate-sxo-conversion-report.mjs'],
  ['scripts/generate-owner-evidence-handoff.mjs'],
];

function renderMarkdown(result) {
  const lines = [
    `# Proof System Preflight — ${result.date}`,
    '',
    `- Overall status: ${result.ok ? 'pass' : 'fail'}`,
    `- Publish readiness: ${result.publishReady} ready · ${result.proofIncomplete} incomplete · ${result.blocked} blocked`,
    `- Prepublish status: ${result.prepublishExpectedBlocked ? 'expected blocked until owner evidence is verified' : 'not expected-blocked'}`,
    `- Public placeholder findings: ${result.publicPlaceholderFindings}`,
    `- Owner evidence sprint blocks: ${result.ownerSprintBlocks}`,
    `- Directory citation packets: ${result.directoryCitationPackets?.packets?.length ?? 'not run'} (${result.directoryCitationPackets?.ok ? 'valid' : 'not valid'})`,
    `- Brainstein maturity: ${result.brainsteinReadiness?.maturity?.stage || 'not run'}${result.brainsteinReadiness?.maturity?.gate ? ` (${result.brainsteinReadiness.maturity.gate})` : ''}`,
    `- Brainstein task packets: ${result.brainsteinTaskPackets?.packets ?? 'not run'}`,
    '',
    '| Step | Status | Expected failure | Runtime |',
    '|---|---:|---:|---:|',
    ...result.steps.map((step) => `| ${step.label} | ${step.ok ? 'pass' : 'fail'} | ${step.expectedFailure ? 'yes' : 'no'} | ${step.ms}ms |`),
    '',
    '## Blocking Pages',
    '',
    ...(result.blockedPages.length ? result.blockedPages.map((page) => `- \`${page.page}\` — ${page.topIssue || 'owner evidence needed'}`) : ['- none']),
    '',
    '## Proof-Incomplete Pages',
    '',
    ...(result.proofIncompletePages.length ? result.proofIncompletePages.map((page) => `- \`${page.page}\` — ${page.topIssue || 'owner evidence needed'}`) : ['- none']),
    '',
  ];
  return `${lines.join('\n')}\n`;
}

function main() {
  const date = proofStagingDate();
  const steps = [
    runBatchStep('Owner proof report refresh', OWNER_HANDOFF_REFRESH_COMMANDS),
    runStep('Proof staging manifest', ['scripts/generate-proof-system-staging-manifest.mjs']),
    runStep('Proof staging check', ['scripts/proof-system-staging-check.mjs']),
    runStep('Proof staging plan', ['scripts/generate-proof-staging-plan.mjs']),
    runStep('Public placeholder audit', ['scripts/audit-public-placeholders.mjs']),
    runStep('Owner evidence sprint checklist', ['scripts/generate-owner-evidence-sprint.mjs']),
    runStep('Owner intake suite', ['scripts/validate-owner-intake-suite.mjs']),
    runStep('Evidence ledger validator', ['scripts/validate-evidence-ledger.mjs']),
    runStep('Directory citation packet refresh', ['scripts/generate-directory-citation-packets.mjs']),
    runStep('Directory citation packet validation', ['scripts/validate-directory-citation-packets.mjs']),
    runStep('AI discovery validation', ['scripts/validate-ai-discovery.mjs']),
    runBatchStep('Brainstein readiness and task packets', [
      ['scripts/generate-brainstein-readiness-audit.mjs'],
      ['scripts/validate-brainstein-readiness-audit.mjs'],
      ['scripts/generate-brainstein-task-packets.mjs'],
      ['scripts/validate-brainstein-task-packets.mjs'],
    ]),
    runStep('Proof command reference validation', ['scripts/validate-proof-command-references.mjs']),
    runStep('Publish readiness gate', ['scripts/publish-readiness-gate.mjs']),
    runStep('Prepublish evidence gate', ['scripts/enforce-publish-readiness.mjs'], {
      expectedFailure: (json) => json?.ok === false && json?.allTrackedPagesPublishReady === false && Number(json?.blocked ?? 0) >= 1,
    }),
  ];

  const publishReadiness = steps.find((step) => step.label === 'Publish readiness gate')?.json || {};
  const placeholderAudit = steps.find((step) => step.label === 'Public placeholder audit')?.json || {};
  const ownerSprint = steps.find((step) => step.label === 'Owner evidence sprint checklist')?.json || {};
  const directoryCitationStep = steps.find((step) => step.label === 'Directory citation packet validation') || {};
  const prepublish = steps.find((step) => step.label === 'Prepublish evidence gate') || {};
  const brainsteinStep = steps.find((step) => step.label === 'Brainstein readiness and task packets') || {};
  const brainsteinCommands = brainsteinStep.json?.commands || [];
  const result = {
    ok: steps.every((step) => step.ok),
    date,
    publishReady: publishReadiness.publishReady ?? 0,
    proofIncomplete: publishReadiness.proofIncomplete ?? 0,
    blocked: publishReadiness.blocked ?? 0,
    publicPlaceholderFindings: placeholderAudit.publicFindings ?? publishReadiness.publicPlaceholderFindings ?? 0,
    ownerSprintBlocks: ownerSprint.blocks ?? 0,
    directoryCitationPackets: directoryCitationStep.json || null,
    prepublishExpectedBlocked: Boolean(prepublish.expectedFailure),
    blockedPages: prepublish.json?.blockedPages || [],
    proofIncompletePages: prepublish.json?.proofIncompletePages || [],
    brainsteinReadiness: brainsteinCommands[0]?.json || null,
    brainsteinReadinessValidation: brainsteinCommands[1]?.json || null,
    brainsteinTaskPackets: brainsteinCommands[2]?.json || null,
    brainsteinTaskPacketValidation: brainsteinCommands[3]?.json || null,
    steps,
  };

  const report = `scripts/output/proof-system-preflight-${date}.md`;
  const jsonPath = `scripts/output/proof-system-preflight-${date}.json`;
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(ROOT, report), renderMarkdown(result));
  fs.writeFileSync(path.join(ROOT, jsonPath), `${JSON.stringify(result, null, 2)}\n`);

  console.log(JSON.stringify({
    ok: result.ok,
    report,
    json: jsonPath,
    publishReady: result.publishReady,
    proofIncomplete: result.proofIncomplete,
    blocked: result.blocked,
    publicPlaceholderFindings: result.publicPlaceholderFindings,
    ownerSprintBlocks: result.ownerSprintBlocks,
    directoryCitationPackets: result.directoryCitationPackets?.packets?.length || 0,
    directoryCitationErrors: result.directoryCitationPackets?.errors?.length ?? null,
    brainsteinMaturity: result.brainsteinReadiness?.maturity?.stage || null,
    brainsteinGate: result.brainsteinReadiness?.maturity?.gate || null,
    brainsteinTaskPackets: result.brainsteinTaskPackets?.packets || 0,
    prepublishExpectedBlocked: result.prepublishExpectedBlocked,
    steps: steps.map((step) => ({
      label: step.label,
      ok: step.ok,
      expectedFailure: step.expectedFailure,
    })),
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
