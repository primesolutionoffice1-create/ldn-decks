#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');

function today() {
  return localDateStamp();
}

function dateFromArgs() {
  const index = process.argv.indexOf('--date');
  if (index === -1) return null;
  return process.argv[index + 1] || null;
}

function intakeFiles(date) {
  return {
    assets: `docs/seo/photo-ingestion-manifest-${date}.csv`,
    warranty: `docs/seo/warranty-terms-intake-${date}.csv`,
    repairCosts: `docs/seo/repair-cost-ranges-intake-${date}.csv`,
    projects: `docs/seo/project-evidence-intake-${date}.csv`,
    beforeAfter: `docs/seo/before-after-evidence-resolution-${date}.csv`,
  };
}

function intakeSetExists(date) {
  const files = intakeFiles(date);
  return Object.values(files).some((file) => fs.existsSync(path.join(ROOT, file)));
}

function latestIntakeDate() {
  const docsDir = path.join(ROOT, 'docs/seo');
  const current = today();
  if (!fs.existsSync(docsDir)) return current;
  const dates = new Set();
  for (const file of fs.readdirSync(docsDir)) {
    const match = file.match(/(?:photo-ingestion-manifest|warranty-terms-intake|repair-cost-ranges-intake|project-evidence-intake|before-after-evidence-resolution)-(\d{4}-\d{2}-\d{2})\.(?:csv|md)$/);
    if (match) dates.add(match[1]);
  }
  const eligible = [...dates].filter((date) => date <= current).sort();
  return eligible.at(-1) || current;
}

function resolveDate() {
  const requested = dateFromArgs();
  if (requested && requested !== 'latest') {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(requested)) {
      throw new Error(`Invalid --date value "${requested}". Use YYYY-MM-DD or latest.`);
    }
    return requested;
  }
  if (requested === 'latest') return latestIntakeDate();
  const current = today();
  return intakeSetExists(current) ? current : latestIntakeDate();
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function parseTrailingJson(output) {
  const match = output.match(/\{[\s\S]*?\}\s*$/);
  if (!match) throw new Error(`Expected trailing JSON output, received:\n${output}`);
  return JSON.parse(match[0]);
}

function refreshReadiness() {
  const output = execFileSync('node', ['scripts/publish-readiness-gate.mjs'], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const summary = parseTrailingJson(output);
  if (!summary.json) throw new Error('Publish readiness script did not return a JSON report path.');
  return readJson(path.join(ROOT, summary.json));
}

function byPage(items, page) {
  return items.filter((item) => item.page === page);
}

function projectPage(project) {
  if (project.project_id.startsWith('before-after-')) return '/before-and-after';
  if (project.project_id.startsWith('showcase-')) return '/showcase';
  return null;
}

function statusIcon(status) {
  if (status === 'verified') return 'green';
  if (status === 'partial') return 'yellow';
  if (status === 'blocked') return 'red';
  return 'red';
}

function commandBlock(commands) {
  return ['```bash', ...commands, '```'].join('\n');
}

function missingItemCounts(readinessPage) {
  return {
    assets: (readinessPage.items?.assets || []).filter((item) => item.status !== 'verified').length,
    projects: (readinessPage.items?.projects || []).filter((item) => item.status !== 'verified').length,
    warrantyTerms: (readinessPage.items?.warrantyTerms || []).filter((item) => item.status !== 'verified').length,
    repairCostRanges: (readinessPage.items?.repairCostRanges || []).filter((item) => item.status !== 'verified').length,
  };
}

function evidenceWorkloadSection(pages) {
  const rows = pages
    .filter((page) => ['blocked', 'proof-incomplete'].includes(page.verdict))
    .map((page) => ({
      page: page.page,
      verdict: page.verdict,
      ...missingItemCounts(page),
    }));

  const totals = rows.reduce((acc, row) => {
    acc.assets += row.assets;
    acc.projects += row.projects;
    acc.warrantyTerms += row.warrantyTerms;
    acc.repairCostRanges += row.repairCostRanges;
    return acc;
  }, { assets: 0, projects: 0, warrantyTerms: 0, repairCostRanges: 0 });

  const lines = [
    '## Evidence Workload Summary',
    '',
    `- Missing/partial photo or asset items: ${totals.assets}`,
    `- Missing/partial project records: ${totals.projects}`,
    `- Missing warranty term records: ${totals.warrantyTerms}`,
    `- Missing repair cost range records: ${totals.repairCostRanges}`,
    '',
    '| Page | Verdict | Assets | Projects | Warranty Terms | Repair Cost Ranges |',
    '|---|---|---:|---:|---:|---:|',
    ...rows.map((row) => `| ${row.page} | ${row.verdict} | ${row.assets} | ${row.projects} | ${row.warrantyTerms} | ${row.repairCostRanges} |`),
    '',
  ];

  return lines.join('\n');
}

function pageSection(page, ledger, readinessPage) {
  const assets = byPage(ledger.asset_requirements || [], page);
  const projects = (ledger.projects || []).filter((project) => projectPage(project) === page);
  const lines = [];

  lines.push(`## ${page}`);
  lines.push('');
  lines.push(`Verdict: **${readinessPage?.verdict || 'unknown'}**`);
  lines.push('');

  if (readinessPage?.issues?.length) {
    lines.push('### Current Gate Issues');
    lines.push('');
    for (const issue of readinessPage.issues) {
      lines.push(`- ${issue.severity.toUpperCase()}: ${issue.message}`);
    }
    lines.push('');
  }

  if (assets.length) {
    lines.push('### Evidence Assets To Resolve');
    lines.push('');
    lines.push('| Status | Asset ID | Needed | Owner Notes |');
    lines.push('|---|---|---|---|');
    for (const asset of assets) {
      lines.push(`| ${statusIcon(asset.evidence_status)} | \`${asset.asset_id}\` | ${asset.needed} | ${asset.owner_notes || ''} |`);
    }
    lines.push('');
  }

  if (projects.length) {
    lines.push('### Project Records To Resolve');
    lines.push('');
    lines.push('| Status | Project ID | City | Month/Year | Missing Proof Area | Owner Notes |');
    lines.push('|---|---|---|---|---|---|');
    for (const project of projects) {
      lines.push(`| ${statusIcon(project.evidence_status)} | \`${project.project_id}\` | ${project.city || 'unknown'} | ${project.month_year || 'unknown'} | ${project.verified_failure || 'not recorded'} | ${project.owner_notes || ''} |`);
    }
    lines.push('');
  }

  if (page === '/services/deck-repair') {
    lines.push('### Warranty + Repair Cost Requirements');
    lines.push('');
    lines.push('- Required warranty record: `repair-workmanship-warranty-term` in `warranty_terms`.');
    lines.push('- Required repair cost records: `joist-sistering`, `ledger-reflash-rebolt`, `post-replacement`, `emergency-stabilization`.');
    lines.push('- Keep rows `partial` unless exact terms/ranges are tied to owner policy, accepted estimates, invoices, or calculator data.');
    lines.push('');
  }

  return lines.join('\n');
}

function main() {
  const date = resolveDate();
  if (!intakeSetExists(date)) {
    throw new Error(`No owner intake files found for ${date}. Generate intake files first or use --date latest.`);
  }
  const files = intakeFiles(date);
  const outPath = path.join(ROOT, `docs/seo/evidence-unblock-runbook-${date}.md`);
  const ledger = readJson(LEDGER_PATH);
  const readiness = refreshReadiness();
  const pages = readiness.pages || [];
  const blocked = pages.filter((page) => page.verdict === 'blocked');
  const incomplete = pages.filter((page) => page.verdict === 'proof-incomplete');

  const lines = [];
  lines.push(`# Evidence Unblock Runbook - ${date}`);
  lines.push('');
  lines.push('Purpose: give the owner and SEO operator a concrete path from missing proof to publish-ready evidence without fabricating photos, project details, costs, warranties, reviews, or permit outcomes.');
  lines.push('');
  lines.push('## Current Readiness');
  lines.push('');
  lines.push(`- Publish-ready pages: ${readiness.pages?.filter((page) => page.verdict === 'publish-ready').length || 0}`);
  lines.push(`- Blocked pages: ${blocked.length}`);
  lines.push(`- Proof-incomplete pages: ${incomplete.length}`);
  lines.push(`- Runtime proof synced: ${readiness.proofRuntimeOk ? 'yes' : 'no'}`);
  lines.push(`- Public placeholder findings: ${readiness.publicPlaceholderFindings}`);
  lines.push('');

  lines.push(evidenceWorkloadSection(pages));

  lines.push('## Intake Files');
  lines.push('');
  lines.push(`- Asset/photos: \`${files.assets}\``);
  lines.push(`- Warranty terms: \`${files.warranty}\``);
  lines.push(`- Repair cost ranges: \`${files.repairCosts}\``);
  lines.push(`- Project records: \`${files.projects}\``);
  lines.push(`- Before/after resolution: \`${files.beforeAfter}\``);
  lines.push('');

  lines.push('## Red Gates');
  lines.push('');
  lines.push('- Do not mark rows `verified` while owner-fill, unknown, unspecified, placeholder, or not-recorded values remain.');
  lines.push('- Do not use stock images as proof-bearing project media.');
  lines.push('- Do not publish exact repair cost ranges without source-backed low/high values.');
  lines.push('- Do not publish exact warranty durations, exclusions, or coverage scopes until the owner verifies written policy text.');
  lines.push('- Do not publish customer names, private addresses, phone numbers, permit numbers, or unredacted documents.');
  lines.push('');

  lines.push('## Operator Commands');
  lines.push('');
  lines.push('Preflight/dry-run after owner fills rows:');
  lines.push('');
  lines.push(commandBlock([
    `npm run seo:ingest-assets -- --file ${files.assets} --preflight`,
    `npm run seo:ingest-assets -- --file ${files.assets} --dry-run`,
    `npm run seo:import-evidence -- --type warranty_terms --file ${files.warranty} --dry-run`,
    `npm run seo:import-evidence -- --type repair_cost_ranges --file ${files.repairCosts} --dry-run`,
    `npm run seo:import-evidence -- --type projects --file ${files.projects} --dry-run`,
  ]));
  lines.push('');
  lines.push('Only after source review, promote verified rows intentionally:');
  lines.push('');
  lines.push(commandBlock([
    `npm run seo:ingest-assets -- --file ${files.assets} --allow-verified`,
    `npm run seo:import-evidence -- --type warranty_terms --file ${files.warranty} --allow-verified`,
    `npm run seo:import-evidence -- --type repair_cost_ranges --file ${files.repairCosts} --allow-verified`,
    `npm run seo:import-evidence -- --type projects --file ${files.projects} --allow-verified`,
  ]));
  lines.push('');
  lines.push('Final gates before merge/deploy:');
  lines.push('');
  lines.push(commandBlock([
    'npm run seo:validate-evidence',
    'npm run seo:proof-snippets',
    'npm run seo:validate-proof-runtime',
    'npm run seo:audit-placeholders',
    'npm run seo:prepublish-evidence',
    'npm run seo:evidence-regression',
    'npm run seo:validate-schema',
    'npm run build',
  ]));
  lines.push('');

  for (const readinessPage of pages) {
    if (!['blocked', 'proof-incomplete'].includes(readinessPage.verdict)) continue;
    lines.push(pageSection(readinessPage.page, ledger, readinessPage));
  }

  lines.push('## Publish Rule');
  lines.push('');
  lines.push('A page is publish-ready only when tracked proof dependencies are verified, public placeholders are absent, runtime proof is synced, and the prepublish evidence gate passes.');
  lines.push('');

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${lines.join('\n')}\n`);

  console.log(JSON.stringify({
    ok: true,
    date,
    output: path.relative(ROOT, outPath),
    blockedPages: blocked.length,
    proofIncompletePages: incomplete.length,
  }, null, 2));
}

main();
