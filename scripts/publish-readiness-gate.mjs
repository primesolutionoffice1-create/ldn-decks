#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { localDateStamp, localIsoTimestamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const PROOF_RUNTIME_VALIDATOR = path.join(ROOT, 'scripts/validate-proof-runtime.mjs');
const PLACEHOLDER_AUDIT = path.join(ROOT, 'scripts/audit-public-placeholders.mjs');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function pageFromProject(project) {
  if (project.project_id?.startsWith('before-after-')) return '/before-and-after';
  if (project.project_id?.startsWith('showcase-')) return '/showcase';
  return 'unmapped';
}

function runJsonScript(scriptPath) {
  try {
    const output = execFileSync('node', [scriptPath], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    const match = output.match(/\{[\s\S]*?\}\s*$/);
    return match ? JSON.parse(match[0]) : { ok: false, errors: [`Could not parse ${path.relative(ROOT, scriptPath)} output.`] };
  } catch (error) {
    const output = `${error.stdout || ''}\n${error.stderr || ''}`;
    const match = output.match(/\{[\s\S]*?\}\s*$/);
    return match ? JSON.parse(match[0]) : { ok: false, errors: [error.message] };
  }
}

function emptyPage(page) {
  return {
    page,
    projects: [],
    assets: [],
    items: {
      projects: [],
      assets: [],
      warrantyTerms: [],
      repairCostRanges: [],
    },
    verified: 0,
    partial: 0,
    missing: 0,
    blocked: 0,
    issues: [],
  };
}

function addIssue(row, severity, message) {
  row.issues.push({ severity, message });
}

function buildRows(ledger, proofRuntime, placeholderAudit) {
  const pages = new Map();

  function getPage(page) {
    if (!pages.has(page)) pages.set(page, emptyPage(page));
    return pages.get(page);
  }

  for (const project of ledger.projects || []) {
    const row = getPage(pageFromProject(project));
    row.projects.push(project.project_id);
    row.items.projects.push({
      id: project.project_id,
      status: project.evidence_status || 'missing',
      city: project.city || null,
      monthYear: project.month_year || null,
      needed: project.owner_notes || project.verified_failure || '',
    });
    row[project.evidence_status] = (row[project.evidence_status] || 0) + 1;
  }

  for (const asset of ledger.asset_requirements || []) {
    const row = getPage(asset.page || 'unmapped');
    row.assets.push(asset.asset_id);
    row.items.assets.push({
      id: asset.asset_id,
      status: asset.evidence_status || 'missing',
      needed: asset.needed || '',
      ownerNotes: asset.owner_notes || '',
    });
    row[asset.evidence_status] = (row[asset.evidence_status] || 0) + 1;
  }

  if (!(ledger.warranty_terms || []).some((item) => item.evidence_status === 'verified')) {
    const repair = getPage('/services/deck-repair');
    repair.items.warrantyTerms.push({
      id: 'repair-workmanship-warranty-term',
      status: 'missing',
      needed: 'Exact verified repair workmanship warranty term, scope, exclusions, and limitations.',
    });
    addIssue(repair, 'red', 'No verified warranty term recorded for repair proof modules.');
  }

  if (!(ledger.repair_cost_ranges || []).some((item) => item.evidence_status === 'verified')) {
    const repair = getPage('/services/deck-repair');
    repair.items.repairCostRanges.push(
      {
        id: 'joist-sistering',
        status: 'missing',
        needed: 'Verified low/high range for joist sistering.',
      },
      {
        id: 'ledger-reflash-rebolt',
        status: 'missing',
        needed: 'Verified low/high range for ledger reflash/rebolt.',
      },
      {
        id: 'post-replacement',
        status: 'missing',
        needed: 'Verified low/high range for post replacement.',
      },
      {
        id: 'emergency-stabilization',
        status: 'missing',
        needed: 'Verified low/high range for emergency stabilization.',
      },
    );
    addIssue(repair, 'red', 'No verified repair cost ranges recorded.');
  }

  if (!proofRuntime.ok) {
    for (const row of pages.values()) {
      addIssue(row, 'red', 'Verified proof runtime is stale or invalid.');
    }
  }

  const routesWithPlaceholders = Object.keys(placeholderAudit.byRoute || {});
  for (const route of routesWithPlaceholders) {
    const row = getPage(route);
    addIssue(row, 'red', 'Public placeholder markers remain on this route.');
  }

  for (const row of pages.values()) {
    if (row.blocked > 0) addIssue(row, 'red', `${row.blocked} blocked evidence item(s).`);
    if (row.missing > 0) addIssue(row, 'red', `${row.missing} missing evidence item(s).`);
    if (row.partial > 0) addIssue(row, 'yellow', `${row.partial} partial evidence item(s).`);
    if (row.projects.length > 0 && row.verified === 0) addIssue(row, 'yellow', 'No verified project proof snippets available for this page.');
  }

  return [...pages.values()].map((row) => {
    const red = row.issues.filter((item) => item.severity === 'red').length;
    const yellow = row.issues.filter((item) => item.severity === 'yellow').length;
    let verdict = 'publish-ready';
    if (red > 0) verdict = 'blocked';
    else if (yellow > 0) verdict = 'proof-incomplete';

    return {
      page: row.page,
      verdict,
      projects: row.projects.length,
      assets: row.assets.length,
      verified: row.verified || 0,
      partial: row.partial || 0,
      missing: row.missing || 0,
      blocked: row.blocked || 0,
      items: row.items,
      issues: row.issues,
    };
  }).sort((a, b) => {
    const order = { blocked: 0, 'proof-incomplete': 1, 'publish-ready': 2 };
    if (order[a.verdict] !== order[b.verdict]) return order[a.verdict] - order[b.verdict];
    return a.page.localeCompare(b.page);
  });
}

function buildMarkdown(summary, today) {
  const lines = [
    `# Publish Readiness Gate — ${today}`,
    '',
    `Generated: ${summary.generated}`,
    '',
    '## Summary',
    '',
    `- Pages evaluated: ${summary.pages.length}`,
    `- Publish-ready: ${summary.counts['publish-ready'] || 0}`,
    `- Proof-incomplete: ${summary.counts['proof-incomplete'] || 0}`,
    `- Blocked: ${summary.counts.blocked || 0}`,
    `- Runtime proof synced: ${summary.proofRuntimeOk ? 'yes' : 'no'}`,
    `- Public placeholder findings: ${summary.publicPlaceholderFindings}`,
    '',
    '## Page Verdicts',
    '',
    '| Page | Verdict | Projects | Assets | Verified | Partial | Missing | Blocked | Top issue |',
    '|---|---|---:|---:|---:|---:|---:|---:|---|',
    ...summary.pages.map((row) => {
      const issue = row.issues[0]?.message || '';
      return `| ${row.page} | ${row.verdict} | ${row.projects} | ${row.assets} | ${row.verified} | ${row.partial} | ${row.missing} | ${row.blocked} | ${issue.replace(/\|/g, '/')} |`;
    }),
    '',
    '## Evidence Items',
    '',
  ];

  for (const row of summary.pages) {
    const items = [
      ...(row.items?.assets || []).map((item) => ['asset', item]),
      ...(row.items?.projects || []).map((item) => ['project', item]),
      ...(row.items?.warrantyTerms || []).map((item) => ['warranty', item]),
      ...(row.items?.repairCostRanges || []).map((item) => ['repair_cost_range', item]),
    ].filter(([, item]) => item.status !== 'verified');

    if (!items.length) continue;
    lines.push(`### ${row.page}`);
    lines.push('');
    lines.push('| Type | ID | Status | Needed / Notes |');
    lines.push('|---|---|---|---|');
    for (const [type, item] of items) {
      const needed = item.needed || item.ownerNotes || '';
      lines.push(`| ${type} | \`${item.id}\` | ${item.status} | ${String(needed).replace(/\|/g, '/')} |`);
    }
    lines.push('');
  }

  lines.push(
    '## Policy',
    '',
    '- `publish-ready`: no red or yellow proof gates for tracked proof dependencies.',
    '- `proof-incomplete`: no red blockers, but partial proof still needs owner/source completion.',
    '- `blocked`: missing/blocked evidence, stale runtime proof, public placeholders, or missing repair warranty/cost proof.',
    '',
  );

  return lines.join('\n');
}

function main() {
  const ledger = readJson(LEDGER_PATH);
  const proofRuntime = runJsonScript(PROOF_RUNTIME_VALIDATOR);
  const placeholderAudit = runJsonScript(PLACEHOLDER_AUDIT);
  const today = localDateStamp();
  const pages = buildRows(ledger, proofRuntime, placeholderAudit);
  const counts = pages.reduce((acc, row) => {
    acc[row.verdict] = (acc[row.verdict] || 0) + 1;
    return acc;
  }, {});

  const summary = {
    ok: proofRuntime.ok && placeholderAudit.publicFindings === 0,
    allTrackedPagesPublishReady: pages.every((row) => row.verdict === 'publish-ready'),
    generated: localIsoTimestamp(),
    ledger: path.relative(ROOT, LEDGER_PATH),
    proofRuntimeOk: Boolean(proofRuntime.ok),
    publicPlaceholderFindings: placeholderAudit.publicFindings || 0,
    counts,
    pages,
  };

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const jsonPath = path.join(OUTPUT_DIR, `publish-readiness-${today}.json`);
  const mdPath = path.join(OUTPUT_DIR, `publish-readiness-${today}.md`);
  fs.writeFileSync(jsonPath, `${JSON.stringify(summary, null, 2)}\n`);
  fs.writeFileSync(mdPath, `${buildMarkdown(summary, today)}\n`);

  console.log(JSON.stringify({
    ok: summary.ok,
    report: path.relative(ROOT, mdPath),
    json: path.relative(ROOT, jsonPath),
    pages: pages.length,
    publishReady: counts['publish-ready'] || 0,
    proofIncomplete: counts['proof-incomplete'] || 0,
    blocked: counts.blocked || 0,
    allTrackedPagesPublishReady: summary.allTrackedPagesPublishReady,
    proofRuntimeOk: summary.proofRuntimeOk,
    publicPlaceholderFindings: summary.publicPlaceholderFindings,
  }, null, 2));
}

main();
