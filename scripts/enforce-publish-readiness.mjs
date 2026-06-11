#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PUBLISH_READINESS_SCRIPT = path.join(ROOT, 'scripts/publish-readiness-gate.mjs');
const EVIDENCE_UNBLOCK_SCRIPT = path.join(ROOT, 'scripts/generate-evidence-unblock-runbook.mjs');

function parseTrailingJson(output) {
  const match = output.match(/\{[\s\S]*?\}\s*$/);
  if (!match) return null;
  return JSON.parse(match[0]);
}

function runReadiness() {
  const output = execFileSync('node', [PUBLISH_READINESS_SCRIPT], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return parseTrailingJson(output);
}

function runEvidenceUnblock() {
  try {
    const output = execFileSync('node', [EVIDENCE_UNBLOCK_SCRIPT, '--date', 'latest'], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return parseTrailingJson(output);
  } catch {
    return null;
  }
}

function readFullReport(summary) {
  if (!summary?.json) return null;
  return JSON.parse(fs.readFileSync(path.join(ROOT, summary.json), 'utf8'));
}

function collectTopMissingItems(page, limit = 5) {
  const items = [
    ...(page.items?.assets || []).map((item) => ({ type: 'asset', ...item })),
    ...(page.items?.projects || []).map((item) => ({ type: 'project', ...item })),
    ...(page.items?.warrantyTerms || []).map((item) => ({ type: 'warranty', ...item })),
    ...(page.items?.repairCostRanges || []).map((item) => ({ type: 'repair_cost_range', ...item })),
  ];

  return items
    .filter((item) => item.status !== 'verified')
    .slice(0, limit)
    .map((item) => ({
      type: item.type,
      id: item.id,
      status: item.status || 'missing',
      needed: item.needed || item.ownerNotes || '',
    }));
}

function collectMissingItemCounts(page) {
  return {
    assets: (page.items?.assets || []).filter((item) => item.status !== 'verified').length,
    projects: (page.items?.projects || []).filter((item) => item.status !== 'verified').length,
    warrantyTerms: (page.items?.warrantyTerms || []).filter((item) => item.status !== 'verified').length,
    repairCostRanges: (page.items?.repairCostRanges || []).filter((item) => item.status !== 'verified').length,
  };
}

function main() {
  const summary = runReadiness();
  const full = readFullReport(summary);
  const blockedPages = (full?.pages || []).filter((page) => page.verdict === 'blocked');
  const incompletePages = (full?.pages || []).filter((page) => page.verdict === 'proof-incomplete');
  const ok = Boolean(summary?.ok && summary?.allTrackedPagesPublishReady);
  const unblock = ok ? null : runEvidenceUnblock();

  const result = {
    ok,
    report: summary?.report || null,
    json: summary?.json || null,
    publishReady: summary?.publishReady ?? null,
    proofIncomplete: summary?.proofIncomplete ?? null,
    blocked: summary?.blocked ?? null,
    allTrackedPagesPublishReady: Boolean(summary?.allTrackedPagesPublishReady),
    blockedPages: blockedPages.map((page) => ({
      page: page.page,
      topIssue: page.issues?.[0]?.message || '',
      missingItemCounts: collectMissingItemCounts(page),
      topMissingItems: collectTopMissingItems(page),
    })),
    proofIncompletePages: incompletePages.map((page) => ({
      page: page.page,
      topIssue: page.issues?.[0]?.message || '',
      missingItemCounts: collectMissingItemCounts(page),
      topMissingItems: collectTopMissingItems(page),
    })),
    evidenceUnblock: unblock
      ? {
          command: 'npm run seo:evidence-unblock -- --date latest',
          report: unblock.output || null,
          blockedPages: unblock.blockedPages ?? null,
          proofIncompletePages: unblock.proofIncompletePages ?? null,
        }
      : null,
    message: ok
      ? 'All tracked proof pages are publish-ready.'
      : 'Prepublish blocked: tracked proof pages still need verified owner evidence.',
  };

  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

main();
