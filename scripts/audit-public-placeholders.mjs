#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp, localIsoTimestamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const SCAN_DIRS = ['src/app', 'src/components'];
const PLACEHOLDER_PATTERN = /\[(VERIFY|INSERT|TODO|TBD|DO NOT PUBLISH)[^\]]*\]|UNKNOWN - OWNER TO FILL|OWNER TO FILL/gi;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (/\.(js|jsx|ts|tsx|mdx)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function routeFromAppFile(relativePath) {
  if (!relativePath.startsWith('src/app/')) return null;
  const route = relativePath
    .replace(/^src\/app/, '')
    .replace(/\/page\.(js|jsx|ts|tsx|mdx)$/, '')
    .replace(/\/route\.(js|jsx|ts|tsx)$/, '')
    .replace(/\/layout\.(js|jsx|ts|tsx)$/, '/layout')
    .replace(/\/not-found\.(js|jsx|ts|tsx)$/, '/not-found');
  return route || '/';
}

function lineNumber(text, index) {
  return text.slice(0, index).split('\n').length;
}

function scanFile(file) {
  const text = fs.readFileSync(file, 'utf8');
  const relative = path.relative(ROOT, file);
  const matches = [];
  for (const match of text.matchAll(PLACEHOLDER_PATTERN)) {
    matches.push({
      file: relative,
      route: routeFromAppFile(relative),
      line: lineNumber(text, match.index || 0),
      marker: match[0],
    });
  }
  return matches;
}

function main() {
  const today = localDateStamp();
  const files = SCAN_DIRS.flatMap((dir) => walk(path.join(ROOT, dir)));
  const findings = files.flatMap(scanFile);
  const publicFindings = findings.filter((item) => item.route && !item.route.includes('/layout'));

  const byRoute = publicFindings.reduce((acc, item) => {
    const key = item.route || item.file;
    acc[key] ||= [];
    acc[key].push(item);
    return acc;
  }, {});

  const summary = {
    ok: true,
    generated: localIsoTimestamp(),
    scannedFiles: files.length,
    findings: findings.length,
    publicFindings: publicFindings.length,
    affectedRoutes: Object.keys(byRoute).length,
    byRoute,
  };

  const md = [
    `# Public Placeholder Audit — ${today}`,
    '',
    `Generated: ${summary.generated}`,
    '',
    '## Summary',
    '',
    `- Files scanned: ${summary.scannedFiles}`,
    `- Total markers in public source files: ${summary.findings}`,
    `- Public route markers: ${summary.publicFindings}`,
    `- Affected routes: ${summary.affectedRoutes}`,
    '',
    '## Affected Routes',
    '',
    publicFindings.length
      ? '| Route | File | Line | Marker |\n|---|---|---:|---|\n' + publicFindings.map((item) => `| ${item.route} | ${item.file} | ${item.line} | \`${item.marker.replace(/`/g, '\\`')}\` |`).join('\n')
      : 'No public route placeholders found.',
    '',
    '## Policy',
    '',
    '- `[VERIFY ...]`, `[INSERT ...]`, `DO NOT PUBLISH`, and owner-fill markers should not appear on publish-ready pages.',
    '- Evidence scaffolds may keep visible markers only when the page is intentionally not deploy-ready or clearly marked evidence-needed.',
    '- Convert markers to verified copy only after matching source evidence is recorded in the evidence ledger.',
    '',
  ].join('\n');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const jsonPath = path.join(OUTPUT_DIR, `public-placeholder-audit-${today}.json`);
  const mdPath = path.join(OUTPUT_DIR, `public-placeholder-audit-${today}.md`);
  fs.writeFileSync(jsonPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(mdPath, md);

  console.log(JSON.stringify({
    ok: true,
    report: path.relative(ROOT, mdPath),
    json: path.relative(ROOT, jsonPath),
    publicFindings: summary.publicFindings,
    affectedRoutes: summary.affectedRoutes,
  }, null, 2));
}

main();
