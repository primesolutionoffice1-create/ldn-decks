#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-all-gates-${DATE}.json`;
const OUTPUT_MD = `scripts/output/dataforseo-n8n-all-gates-${DATE}.md`;

const STEPS = [
  ['Runbook validation', 'node scripts/validate-dataforseo-n8n-mcp-runbook.mjs'],
  ['Workflow manifest validation', 'node scripts/validate-dataforseo-n8n-mcp-workflow-manifest.mjs'],
  ['Import preflight', 'node scripts/validate-dataforseo-n8n-mcp-import-preflight.mjs'],
  ['Raw findings validation', 'node scripts/validate-dataforseo-n8n-raw-findings.mjs'],
  ['Findings intake draft generation', 'node scripts/generate-dataforseo-n8n-findings-intake-draft.mjs'],
  ['Findings intake validation', 'node scripts/validate-dataforseo-n8n-findings-intake.mjs'],
  ['Findings review board generation', 'node scripts/generate-dataforseo-n8n-findings-review-board.mjs'],
  ['Findings review board validation', 'node scripts/validate-dataforseo-n8n-findings-review-board.mjs'],
  ['Promotion gate', 'node scripts/validate-dataforseo-n8n-promotion-gate.mjs'],
  ['Operator handoff generation', 'node scripts/generate-dataforseo-n8n-operator-handoff.mjs'],
  ['Operator handoff validation', 'node scripts/validate-dataforseo-n8n-operator-handoff.mjs'],
];

function parseTrailingJson(out) {
  for (let start = out.lastIndexOf('{'); start !== -1; start = out.lastIndexOf('{', start - 1)) {
    try {
      return JSON.parse(out.slice(start));
    } catch {
      // Try the previous opening brace.
    }
  }
  return null;
}

const results = [];

for (const [label, command] of STEPS) {
  const start = Date.now();
  try {
    const out = execSync(command, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    results.push({
      label,
      command,
      ok: true,
      ms: Date.now() - start,
      summary: parseTrailingJson(out),
    });
    console.log(`✓ ${label}`);
  } catch (error) {
    const out = `${error.stdout || ''}\n${error.stderr || ''}`.trim();
    results.push({
      label,
      command,
      ok: false,
      ms: Date.now() - start,
      summary: parseTrailingJson(out),
      error: error.message,
    });
    break;
  }
}

const failed = results.filter((step) => !step.ok);
const handoff = results.find((step) => step.label === 'Operator handoff validation')?.summary;
const promotion = results.find((step) => step.label === 'Promotion gate')?.summary;

const result = {
  ok: failed.length === 0 && results.length === STEPS.length,
  date: DATE,
  status: failed.length ? 'FAILED' : 'PASS_READ_ONLY_ONLY',
  steps: results.length,
  expectedSteps: STEPS.length,
  failures: failed.length,
  operatorStatus: handoff?.operatorStatus ?? null,
  promotableRows: promotion?.promotableRows ?? null,
  publicClaimsAllowed: promotion?.publicClaimsAllowed ?? null,
  adsActionsAllowed: promotion?.adsActionsAllowed ?? null,
  results,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# DataForSEO n8n All Gates - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Mode: ${result.status}
- Steps completed: ${result.steps}/${result.expectedSteps}
- Failures: ${result.failures}
- Operator status: ${result.operatorStatus ?? 'unknown'}
- Promotable rows: ${result.promotableRows ?? '?'}
- Public claims allowed: ${result.publicClaimsAllowed ?? '?'}
- Ads actions allowed: ${result.adsActionsAllowed ?? '?'}

## Steps

| Step | Status | Runtime |
|---|---|---|
${results.map((step) => `| ${step.label} | ${step.ok ? 'PASS' : 'FAIL'} | ${step.ms}ms |`).join('\n')}

## Operating Rule

Use this command as the canonical sequence for DataForSEO/n8n local operations. The current state is read-only only; it does not clear public claims, proof promotion, SEO task promotion, citation edits, Ads actions, budget changes, bidding changes, conversion changes, or external account changes.
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);

console.log(JSON.stringify(result, null, 2));
if (!result.ok) process.exit(1);
