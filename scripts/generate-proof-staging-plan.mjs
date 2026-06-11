#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { proofStagingDate, proofStagingGroups } from './lib/proof-staging-groups.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'docs/seo');

function gitStatusMap() {
  const output = execFileSync('git', ['status', '--short'], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const map = new Map();
  for (const line of output.split('\n').filter(Boolean)) {
    const status = line.slice(0, 2).trim() || line.slice(0, 2);
    const file = line.slice(3).trim();
    if (file) map.set(file, status);
  }
  return map;
}

function exists(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

function hasDirtyPath(relativePath, statusMap) {
  if (statusMap.has(relativePath.replace(/\/$/, ''))) return true;
  for (const file of statusMap.keys()) {
    if (file.startsWith(relativePath.replace(/\/$/, '') + '/')) return true;
    if (relativePath.endsWith('/') && file.startsWith(relativePath)) return true;
  }
  return false;
}

function shellQuote(value) {
  return `'${value.replace(/'/g, "'\\''")}'`;
}

function groupPlan(group, statusMap) {
  const existingPaths = group.paths.filter(exists);
  const missingPaths = group.paths.filter((pathValue) => !exists(pathValue));
  const dirtyPaths = existingPaths.filter((pathValue) => hasDirtyPath(pathValue, statusMap));
  return {
    id: group.id,
    label: group.label,
    required: group.required,
    description: group.description,
    configuredPaths: group.paths.length,
    existingPaths,
    missingPaths,
    dirtyPaths,
    gitAddCommand: dirtyPaths.length ? `git add ${dirtyPaths.map(shellQuote).join(' ')}` : '',
  };
}

function renderMarkdown(date, plans) {
  const lines = [
    `# Proof Staging Plan — ${date}`,
    '',
    'Purpose: provide exact, non-destructive staging groups for the Brainstein / SEO proof-safety work. This report does not run `git add`.',
    '',
    'Use the commands only after reviewing the corresponding group. Do not mix proof gate core, generated reports, broad public copy cleanup, generated social assets, and admin/measurement changes in the same commit unless intentionally batching them.',
    '',
  ];

  for (const plan of plans) {
    lines.push(`## ${plan.label}`, '');
    lines.push(`- Group id: \`${plan.id}\``);
    lines.push(`- Required group: ${plan.required ? 'yes' : 'no'}`);
    lines.push(`- Configured paths: ${plan.configuredPaths}`);
    lines.push(`- Existing paths: ${plan.existingPaths.length}`);
    lines.push(`- Missing paths: ${plan.missingPaths.length}`);
    lines.push(`- Dirty/staging-needed paths: ${plan.dirtyPaths.length}`);
    lines.push('');
    lines.push('Suggested command:');
    lines.push('');
    lines.push('```bash');
    lines.push(plan.gitAddCommand || '# Nothing dirty in this group.');
    lines.push('```');
    lines.push('');

    if (plan.missingPaths.length) {
      lines.push('Missing paths:');
      lines.push('');
      for (const pathValue of plan.missingPaths) lines.push(`- \`${pathValue}\``);
      lines.push('');
    }

    lines.push('Dirty/staging-needed paths:');
    lines.push('');
    if (plan.dirtyPaths.length) {
      for (const pathValue of plan.dirtyPaths) lines.push(`- \`${pathValue}\``);
    } else {
      lines.push('- none');
    }
    lines.push('');
  }

  return `${lines.join('\n')}\n`;
}

function main() {
  const date = proofStagingDate();
  const statusMap = gitStatusMap();
  const plans = proofStagingGroups(date).map((group) => groupPlan(group, statusMap));
  const requiredMissing = plans
    .filter((plan) => plan.required)
    .reduce((total, plan) => total + plan.missingPaths.length, 0);
  const report = `docs/seo/proof-staging-plan-${date}.md`;
  const json = `scripts/output/proof-staging-plan-${date}.json`;

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(path.join(ROOT, 'scripts/output'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, report), renderMarkdown(date, plans));
  fs.writeFileSync(path.join(ROOT, json), `${JSON.stringify({
    ok: requiredMissing === 0,
    date,
    requiredMissing,
    groups: plans,
  }, null, 2)}\n`);

  console.log(JSON.stringify({
    ok: requiredMissing === 0,
    report,
    json,
    requiredMissing,
    groups: plans.map((plan) => ({
      id: plan.id,
      missing: plan.missingPaths.length,
      dirty: plan.dirtyPaths.length,
      hasCommand: Boolean(plan.gitAddCommand),
    })),
  }, null, 2));

  if (requiredMissing) process.exit(1);
}

main();
