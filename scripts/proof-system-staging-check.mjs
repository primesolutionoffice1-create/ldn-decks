#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { proofStagingDate, proofStagingGroups } from './lib/proof-staging-groups.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');

function gitStatusMap() {
  const output = execFileSync('git', ['status', '--short'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  const map = new Map();
  for (const line of output.split('\n').filter(Boolean)) {
    const status = line.slice(0, 2).trim() || line.slice(0, 2);
    const file = line.slice(3).trim();
    if (!file) continue;
    map.set(file, status);
  }
  return map;
}

function walk(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) return [];
  const stat = fs.statSync(absolutePath);
  if (stat.isFile()) return [relativePath.replace(/\/$/, '')];
  const entries = fs.readdirSync(absolutePath, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const child = path.join(relativePath, entry.name);
    if (entry.isDirectory()) return walk(`${child}/`);
    if (entry.isFile()) return [child];
    return [];
  });
}

function statusFor(file, statusMap) {
  if (statusMap.has(file)) return statusMap.get(file);
  for (const [candidate, status] of statusMap) {
    if (candidate.endsWith('/') && file.startsWith(candidate)) return status;
    if (candidate.startsWith(`${file.replace(/\/$/, '')}/`)) return status;
  }
  return 'clean';
}

function summarizeGroup(group, statusMap) {
  const entries = [];
  const missing = [];
  for (const configuredPath of group.paths) {
    const absolutePath = path.join(ROOT, configuredPath);
    const exists = fs.existsSync(absolutePath);
    if (!exists) {
      missing.push(configuredPath);
      entries.push({ path: configuredPath, exists: false, status: 'missing' });
      continue;
    }
    const expanded = configuredPath.endsWith('/') ? walk(configuredPath) : [configuredPath];
    const statuses = new Set(expanded.map((file) => statusFor(file, statusMap)));
    const dirty = [...statuses].filter((status) => status !== 'clean');
    entries.push({
      path: configuredPath,
      exists: true,
      files: expanded.length,
      status: dirty.length ? dirty.join(',') : 'clean',
    });
  }

  const dirtyEntries = entries.filter((entry) => !['clean', 'missing'].includes(entry.status));
  return {
    id: group.id,
    label: group.label,
    required: group.required,
    configuredPaths: group.paths.length,
    missing,
    dirtyCount: dirtyEntries.length,
    cleanCount: entries.filter((entry) => entry.status === 'clean').length,
    entries,
  };
}

function renderMarkdown(result) {
  const lines = [
    `# Proof System Staging Check — ${result.date}`,
    '',
    `- Overall status: ${result.ok ? 'pass' : 'fail'}`,
    `- Required missing files: ${result.requiredMissing}`,
    `- Branch: ${result.branch}`,
    '',
  ];

  for (const group of result.groups) {
    lines.push(`## ${group.label}`, '');
    lines.push(`- Required group: ${group.required ? 'yes' : 'no'}`);
    lines.push(`- Configured paths: ${group.configuredPaths}`);
    lines.push(`- Missing: ${group.missing.length}`);
    lines.push(`- Dirty/staging pending: ${group.dirtyCount}`);
    lines.push('', '| Path | Status | Files |', '|---|---:|---:|');
    for (const entry of group.entries) {
      lines.push(`| \`${entry.path}\` | ${entry.status} | ${entry.files ?? 0} |`);
    }
    lines.push('');
  }

  return `${lines.join('\n')}\n`;
}

function main() {
  const statusMap = gitStatusMap();
  const branch = execFileSync('git', ['branch', '--show-current'], {
    cwd: ROOT,
    encoding: 'utf8',
  }).trim();
  const date = proofStagingDate();
  const groups = proofStagingGroups(date).map((group) => summarizeGroup(group, statusMap));
  const requiredMissing = groups
    .filter((group) => group.required)
    .reduce((total, group) => total + group.missing.length, 0);
  const result = {
    ok: requiredMissing === 0,
    date,
    branch,
    requiredMissing,
    groups,
  };

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const jsonPath = path.join(OUTPUT_DIR, `proof-system-staging-check-${date}.json`);
  const mdPath = path.join(OUTPUT_DIR, `proof-system-staging-check-${date}.md`);
  fs.writeFileSync(jsonPath, `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(mdPath, renderMarkdown(result));

  console.log(JSON.stringify({
    ok: result.ok,
    branch,
    requiredMissing,
    report: path.relative(ROOT, mdPath),
    json: path.relative(ROOT, jsonPath),
    groups: groups.map((group) => ({
      id: group.id,
      missing: group.missing.length,
      dirtyCount: group.dirtyCount,
    })),
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
