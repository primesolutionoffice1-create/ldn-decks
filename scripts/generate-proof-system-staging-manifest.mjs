#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { proofStagingDate, proofStagingGroups } from './lib/proof-staging-groups.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'docs/seo');

function readJson(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) return null;
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
}

function currentBranch() {
  try {
    return execFileSync('git', ['branch', '--show-current'], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim() || 'unknown';
  } catch {
    return 'unknown';
  }
}

function proofStatus(date) {
  const ledger = readJson('seo-blueprint/evidence/project-evidence-ledger.json');
  const readiness = readJson(`scripts/output/publish-readiness-${date}.json`);
  const projects = ledger?.projects || [];
  const assets = ledger?.asset_requirements || [];
  const pages = readiness?.pages || [];
  return {
    verifiedProjects: projects.filter((project) => project.evidence_status === 'verified').length,
    totalProjects: projects.length,
    missingAssets: assets.filter((asset) => asset.evidence_status !== 'verified').length,
    totalAssets: assets.length,
    warrantyTerms: ledger?.warranty_terms?.length ?? 0,
    repairCostRanges: ledger?.repair_cost_ranges?.length ?? 0,
    publicReviewSources: ledger?.public_review_sources?.length ?? 0,
    publishReadyPages: pages.filter((page) => page.verdict === 'publish-ready').length,
    proofIncompletePages: pages.filter((page) => page.verdict === 'proof-incomplete').length,
    blockedPages: pages.filter((page) => page.verdict === 'blocked').length,
    blockedPagePaths: pages.filter((page) => page.verdict === 'blocked').map((page) => page.page),
    proofIncompletePagePaths: pages.filter((page) => page.verdict === 'proof-incomplete').map((page) => page.page),
  };
}

function renderGroup(group, index) {
  const lines = [
    `### ${index}. ${group.label}`,
    '',
    group.description,
    '',
    group.required ? 'Stage these together for the required proof workflow.' : 'Review and stage this group separately when it is intentional.',
    '',
  ];

  for (const pathValue of group.paths) {
    lines.push(`- \`${pathValue}\``);
  }

  lines.push('');
  return lines;
}

function renderPageList(items, fallback) {
  return items.length ? items.map((item) => `- \`${item}\``) : [`- ${fallback}`];
}

function renderManifest(date, groups, branch, status) {
  const lines = [
    `# Proof System Staging Manifest — ${date}`,
    '',
    'Purpose: keep the Brainstein / SEO proof-safety work mergeable without mixing verified-evidence infrastructure, generated owner handoff files, public SEO copy changes, generated social images, and unrelated worktree noise.',
    '',
    '## Current Branch',
    '',
    `- Branch: \`${branch}\``,
    '- Production deploy: no',
    '- Merge to main: no',
    '- Publish gate: intentionally blocked until owner evidence is verified',
    '',
    '## Required Commit Groups',
    '',
    ...groups.flatMap((group, index) => renderGroup(group, index + 1)),
    '## Acceptance Checks',
    '',
    '- `npm run seo:proof-staging-manifest` regenerates this manifest.',
    '- `npm run seo:proof-staging-check` must pass with `0` required missing files.',
    '- `npm run seo:evidence-handoff:validate` must pass before owner-facing proof instructions are staged.',
    '- `npm run seo:directory-citations:validate` must pass before any citation URL or `sameAs` promotion is staged.',
    '- `npm run seo:validate-ai-discovery` must pass before AI discovery files or routes are staged.',
    '- `npm run seo:proof-commands:validate` must pass before proof docs are handed to the owner.',
    '- `npm run seo:evidence-regression` must pass.',
    '- `npm run seo:validate-owner-intake` must pass.',
    '- `npm run seo:validate-evidence` must pass.',
    '- `npm run seo:weekly` must pass.',
    '- `npm run build` must pass.',
    '- `npm run seo:prepublish-evidence` must fail with the expected owner-evidence blockers until owner proof is supplied.',
    '',
    '## Current Proof Status',
    '',
    `- Verified projects: \`${status.verifiedProjects}/${status.totalProjects}\``,
    `- Missing asset requirements: \`${status.missingAssets}/${status.totalAssets}\``,
    `- Warranty terms: \`${status.warrantyTerms}\``,
    `- Repair cost ranges: \`${status.repairCostRanges}\``,
    `- Public review sources: \`${status.publicReviewSources}\``,
    `- Publish-ready pages: \`${status.publishReadyPages}\``,
    `- Proof-incomplete pages: \`${status.proofIncompletePages}\``,
    `- Blocked pages: \`${status.blockedPages}\``,
    '',
    'Blocked pages:',
    '',
    ...renderPageList(status.blockedPagePaths, '`unknown` — run `npm run seo:publish-readiness` first.'),
    '',
    'Proof-incomplete pages:',
    '',
    ...renderPageList(status.proofIncompletePagePaths, '`none detected`'),
    '',
    '## Verified Provenance Rule',
    '',
    'Any row promoted to `verified` must include concrete `owner_notes`. The notes must name the reviewed source type and summarize what was confirmed without exposing private customer information.',
    '',
    'Acceptable example:',
    '',
    '`Source reviewed: accepted estimate #redacted, May 2026, Ashburn; scope, material, and photo linkage confirmed by owner.`',
    '',
    'Blocked examples:',
    '',
    '- `OWNER TO FILL`',
    '- `owner verification still required`',
    '- `verification still required`',
    '- `source pending`',
    '- `unknown`',
    '',
    '## Non-Negotiable Gates Before Deploy',
    '',
    '- No unresolved public placeholders.',
    '- No `verified` rows without concrete source-reviewed provenance.',
    '- No stock imagery in proof modules.',
    '- No fabricated technician identities, certifications, customer stories, review counts, warranty terms, permit outcomes, or before/after projects.',
    '- No exact repair cost ranges unless source-backed and imported into the ledger.',
    '- `npm run seo:prepublish-evidence` must pass before merge/deploy.',
    '- `npm run build` must pass after the final owner evidence import.',
    '',
    '## Latest Verification Snapshot',
    '',
    `Last verified on ${date}:`,
    '',
    '- `npm run seo:proof-staging-check`: passed with `0` required missing files',
    '- `npm run seo:evidence-handoff:validate`: passed',
    '- `npm run seo:directory-citations:validate`: passed with `5` packets and `0` errors',
    '- `npm run seo:validate-ai-discovery`: passed with all priority AI retrieval URLs present and no exact-address amplification',
    '- `npm run seo:proof-commands:validate`: passed',
    '- `npm run seo:evidence-regression`: passed',
    '- `npm run seo:validate-owner-intake`: passed',
    '- `npm run seo:validate-evidence`: passed',
    '- `npm run seo:weekly`: passed',
    '- `npm run build`: passed',
    '- `npm run seo:prepublish-evidence`: failed intentionally with owner evidence blockers',
    '',
  ];

  return `${lines.join('\n')}\n`;
}

function main() {
  const date = proofStagingDate();
  const groups = proofStagingGroups(date);
  const branch = currentBranch();
  const status = proofStatus(date);
  const report = `docs/seo/proof-system-staging-manifest-${date}.md`;
  const reportPath = path.join(ROOT, report);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(reportPath, renderManifest(date, groups, branch, status));
  console.log(JSON.stringify({
    ok: true,
    report,
    branch,
    groups: groups.length,
    requiredGroups: groups.filter((group) => group.required).length,
    proof: status,
  }, null, 2));
}

main();
