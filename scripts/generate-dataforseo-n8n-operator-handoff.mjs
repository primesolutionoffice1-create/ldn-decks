#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const OUTPUT_MD = `docs/seo/dataforseo-n8n-operator-handoff-${DATE}.md`;
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-operator-handoff-${DATE}.json`;

const SOURCES = {
  runbook: `scripts/output/dataforseo-n8n-mcp-runbook-validation-${DATE}.json`,
  manifest: `scripts/output/dataforseo-n8n-mcp-workflow-manifest-validation-${DATE}.json`,
  importPreflight: `scripts/output/dataforseo-n8n-mcp-import-preflight-${DATE}.json`,
  rawFindings: `scripts/output/dataforseo-n8n-raw-findings-validation-${DATE}.json`,
  findingsDraft: `scripts/output/dataforseo-n8n-findings-intake-draft-${DATE}.json`,
  findingsIntake: `scripts/output/dataforseo-n8n-findings-intake-validation-${DATE}.json`,
  reviewBoard: `scripts/output/dataforseo-n8n-findings-review-board-validation-${DATE}.json`,
  promotionGate: `scripts/output/dataforseo-n8n-promotion-gate-${DATE}.json`,
};

function readJson(rel) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return null;
  }
}

const checks = Object.fromEntries(Object.entries(SOURCES).map(([key, rel]) => [key, readJson(rel)]));
const missing = Object.entries(checks).filter(([, value]) => !value).map(([key]) => key);
const failing = Object.entries(checks).filter(([, value]) => value && value.ok !== true).map(([key]) => key);
const ok = missing.length === 0 && failing.length === 0;

const operatorStatus = checks.promotionGate?.promotableRows > 0
  ? 'REVIEW_REQUIRED_BEFORE_ACTION'
  : 'READY_FOR_READ_ONLY_RUNS_ONLY';

const allowedNow = [
  'Start the local DataForSEO MCP server from the operator environment.',
  'Import or rebuild only the sanitized disabled n8n workflow sample.',
  'Run read-only LDN Decks research against ldndecks.com.',
  'Drop raw n8n output only into docs/seo/dataforseo-n8n-raw-findings and validate it before CSV intake.',
  'Generate an intake draft from validated raw output before copying any row into the official CSV.',
  'Append real findings to the findings intake only after reviewing raw output for secrets and scope.',
  'Re-run the raw findings, draft, intake, review board, promotion gate, and weekly SEO checks after any finding changes.',
];

const blockedNow = [
  'Do not publish public claims from DataForSEO output.',
  'Do not create verified proof snippets from DataForSEO output.',
  'Do not change Google Ads, GTM, GA4, budgets, bidding, conversions, GHL, Vapi, Twilio, Vercel, or DataForSEO account settings.',
  'Do not promote sample-only rows.',
  'Do not mix unrelated domains into the workflow, findings intake, or review board.',
];

const nextCommands = [
  'npm run dataforseo:n8n-mcp:validate',
  'npm run dataforseo:n8n-mcp:workflow:validate',
  'npm run dataforseo:n8n-mcp:import-preflight',
  'npm run dataforseo:n8n-mcp:raw-findings:validate',
  'npm run dataforseo:n8n-mcp:findings:draft',
  'npm run dataforseo:n8n-mcp:findings:validate',
  'npm run dataforseo:n8n-mcp:findings:board',
  'npm run dataforseo:n8n-mcp:findings:board:validate',
  'npm run dataforseo:n8n-mcp:promotion-gate',
  'npm run seo:weekly',
];

const summary = {
  ok,
  date: DATE,
  operatorStatus,
  missing,
  failing,
  runbook: {
    ok: checks.runbook?.ok ?? false,
    requiredPhrases: checks.runbook?.requiredPhrases ?? null,
  },
  manifest: {
    ok: checks.manifest?.ok ?? false,
    targetDomain: checks.manifest?.targetDomain ?? null,
    readOnly: checks.manifest?.readOnly ?? null,
    costCaps: checks.manifest?.costCaps ?? null,
  },
  importPreflight: {
    ok: checks.importPreflight?.ok ?? false,
    status: checks.importPreflight?.status ?? null,
    workflowExports: checks.importPreflight?.workflowExports ?? null,
    structuralChecks: checks.importPreflight?.structuralChecks ?? null,
  },
  rawFindings: {
    ok: checks.rawFindings?.ok ?? false,
    status: checks.rawFindings?.status ?? null,
    files: checks.rawFindings?.files ?? null,
    realFindings: checks.rawFindings?.realFindings ?? null,
    sampleFindings: checks.rawFindings?.sampleFindings ?? null,
  },
  findingsDraft: {
    ok: checks.findingsDraft?.ok ?? false,
    status: checks.findingsDraft?.status ?? null,
    rows: checks.findingsDraft?.rows ?? null,
    realRows: checks.findingsDraft?.realRows ?? null,
    sampleRows: checks.findingsDraft?.sampleRows ?? null,
  },
  findingsIntake: {
    ok: checks.findingsIntake?.ok ?? false,
    status: checks.findingsIntake?.status ?? null,
    rows: checks.findingsIntake?.rows ?? null,
    realRows: checks.findingsIntake?.realRows ?? null,
    reviewOnlyRows: checks.findingsIntake?.reviewOnlyRows ?? null,
  },
  reviewBoard: {
    ok: checks.reviewBoard?.ok ?? false,
    status: checks.reviewBoard?.status ?? null,
    rows: checks.reviewBoard?.rows ?? null,
    publicClaimsAllowed: checks.reviewBoard?.publicClaimsAllowed ?? null,
    adsActionsAllowed: checks.reviewBoard?.adsActionsAllowed ?? null,
  },
  promotionGate: {
    ok: checks.promotionGate?.ok ?? false,
    status: checks.promotionGate?.status ?? null,
    rows: checks.promotionGate?.rows ?? null,
    candidateRows: checks.promotionGate?.candidateRows ?? null,
    promotableRows: checks.promotionGate?.promotableRows ?? null,
  },
  allowedNow,
  blockedNow,
  nextCommands,
  outputs: {
    markdown: OUTPUT_MD,
    json: OUTPUT_JSON,
  },
};

const md = `# DataForSEO n8n Operator Handoff - ${DATE}

## Status

- Overall: ${ok ? 'PASS' : 'FAIL'}
- Operator status: ${operatorStatus}
- Missing checks: ${missing.length ? missing.join(', ') : 'none'}
- Failing checks: ${failing.length ? failing.join(', ') : 'none'}

## Gate Summary

| Gate | Status | Key metric |
|---|---|---|
| Runbook | ${summary.runbook.ok ? 'PASS' : 'FAIL'} | ${summary.runbook.requiredPhrases ?? '?'} required phrases |
| Workflow manifest | ${summary.manifest.ok ? 'PASS' : 'FAIL'} | ${summary.manifest.targetDomain ?? '?'} · read-only ${summary.manifest.readOnly ? 'yes' : 'no'} · ${summary.manifest.costCaps ?? '?'} cost caps |
| Import preflight | ${summary.importPreflight.ok ? 'PASS' : 'FAIL'} | ${summary.importPreflight.status ?? '?'} · ${summary.importPreflight.workflowExports ?? '?'} exports |
| Raw findings validation | ${summary.rawFindings.ok ? 'PASS' : 'FAIL'} | ${summary.rawFindings.status ?? '?'} · ${summary.rawFindings.files ?? '?'} files · ${summary.rawFindings.realFindings ?? '?'} real findings |
| Findings intake draft | ${summary.findingsDraft.ok ? 'PASS' : 'FAIL'} | ${summary.findingsDraft.status ?? '?'} · ${summary.findingsDraft.rows ?? '?'} rows · ${summary.findingsDraft.realRows ?? '?'} real |
| Findings intake | ${summary.findingsIntake.ok ? 'PASS' : 'FAIL'} | ${summary.findingsIntake.status ?? '?'} · ${summary.findingsIntake.rows ?? '?'} rows · ${summary.findingsIntake.realRows ?? '?'} real |
| Findings review board | ${summary.reviewBoard.ok ? 'PASS' : 'FAIL'} | ${summary.reviewBoard.status ?? '?'} · ${summary.reviewBoard.rows ?? '?'} rows · ${summary.reviewBoard.publicClaimsAllowed ?? '?'} public claims · ${summary.reviewBoard.adsActionsAllowed ?? '?'} Ads actions |
| Promotion gate | ${summary.promotionGate.ok ? 'PASS' : 'FAIL'} | ${summary.promotionGate.status ?? '?'} · ${summary.promotionGate.candidateRows ?? '?'} candidates · ${summary.promotionGate.promotableRows ?? '?'} promotable |

## Allowed Now

${allowedNow.map((item) => `- ${item}`).join('\n')}

## Blocked Now

${blockedNow.map((item) => `- ${item}`).join('\n')}

## Required Commands

${nextCommands.map((item) => `- \`${item}\``).join('\n')}

## Current Operating Rule

DataForSEO/n8n is ready only for read-only LDN Decks research. It is not cleared for public claims, verified proof, SEO task promotion, citation edits, Ads changes, budget changes, bidding changes, conversion changes, or external account changes.
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(summary, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);

console.log(JSON.stringify(summary, null, 2));
if (!summary.ok) process.exit(1);
