#!/usr/bin/env node
/**
 * OG image audit
 *
 * Scans every page under src/app/ and every routed default in `src/lib/seo.js`,
 * resolves the OG image each page would emit (explicit `image:` prop OR the
 * regex-based default in seo.js), and reports:
 *
 *   - MISSING: file doesn't exist on disk
 *   - UNMEASURED: file exists but is not in OG_IMAGE_DIMENSIONS so seo.js
 *     will emit og:image without width/height (scrapers must fetch the image
 *     to size it, increasing card rejection risk)
 *   - WRONG_RATIO: aspect ratio is outside the practical social-card band
 *     (1.91:1 ideal; 16:9 accepted; portrait / square / 4:3 flagged)
 *   - SMALL: smaller than 600x315 (FB minimum for large card)
 *   - HEAVY: file >300 KB (slows render of share-card scrapers)
 *   - OK: passes all checks
 *
 * The script uses ImageMagick `identify` if installed; falls back to the
 * `file` command which is available everywhere.
 *
 * Output: console + JSON at `wiki/reports/og-image-audit-<date>.json`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { resolveVaultReportsDir } from './lib/report-paths.mjs';

const APP_DIR = path.resolve('src/app');
const PUBLIC_DIR = path.resolve('public');
const SEO_LIB = path.resolve('src/lib/seo.js');
const REPORT_DIR = resolveVaultReportsDir(path.resolve('.'));

const IDEAL_RATIO = 1.91;
const MIN_ACCEPTABLE_RATIO = 1.75;
const MAX_ACCEPTABLE_RATIO = 1.95;
const MIN_W = 600;
const MIN_H = 315;
const HEAVY_BYTES = 300 * 1024;

function loadSeoDefaults() {
  const src = fs.readFileSync(SEO_LIB, 'utf8');
  const start = src.indexOf('const OG_DEFAULTS = [');
  const end = src.indexOf('];', start);
  const block = src.slice(start, end);
  const re = /\[\/([^/]+)\/,\s*"([^"]+)"\]/g;
  const out = [];
  let m;
  while ((m = re.exec(block)) !== null) {
    out.push({ pattern: new RegExp(m[1]), image: m[2] });
  }
  return out;
}

function loadMeasured() {
  const src = fs.readFileSync(SEO_LIB, 'utf8');
  const start = src.indexOf('const OG_IMAGE_DIMENSIONS = {');
  const end = src.indexOf('};', start);
  const block = src.slice(start, end);
  const re = /"([^"]+)":\s*\{\s*width:\s*(\d+),\s*height:\s*(\d+)/g;
  const out = {};
  let m;
  while ((m = re.exec(block)) !== null) {
    out[m[1]] = { width: Number(m[2]), height: Number(m[3]) };
  }
  return out;
}

function listPages(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pages = [];
  for (const e of entries) {
    if (e.name === 'api' || e.name === 'admin' || e.name.startsWith('_')) continue;
    if (e.isDirectory()) {
      const sub = path.join(dir, e.name);
      // Skip dynamic segments — they only matter if explicit image: prop is set
      const routeSeg = e.name.startsWith('[') ? e.name : e.name;
      pages.push(...listPages(sub, `${prefix}/${routeSeg}`));
    } else if (e.name === 'page.js' || e.name === 'page.jsx' || e.name === 'page.tsx') {
      pages.push({ route: prefix || '/', file: path.join(dir, e.name) });
    }
  }
  return pages;
}

function extractExplicitImage(file) {
  const src = fs.readFileSync(file, 'utf8');
  // Look for buildMetadata({ ... image: '/x/y' ... }) or `image:`
  const m = src.match(/buildMetadata\(\{[\s\S]*?\bimage:\s*['"]([^'"]+)['"]/);
  if (m) return m[1];
  const m2 = src.match(/openGraph:\s*\{[\s\S]*?images:\s*\[\s*['"]([^'"]+)['"]/);
  if (m2) return m2[1];
  return null;
}

function resolveImage(route, file, defaults) {
  const explicit = extractExplicitImage(file);
  if (explicit) return { src: explicit, source: 'explicit' };
  for (const d of defaults) {
    if (d.pattern.test(route)) return { src: d.image, source: 'regex' };
  }
  return { src: '/og-default.webp', source: 'fallback' };
}

function dimsOf(absPath) {
  // `file` emits e.g. "density 1x1, segment length 16, ... precision 8, 1600x900, components 3"
  // or for WebP "1200x630, Scaling: ...". We want the LARGEST WxH on the line —
  // density values like 1x1 are tiny by definition.
  try {
    const out = execSync(`file "${absPath}"`, { encoding: 'utf8' });
    const matches = [...out.matchAll(/(\d+)\s*x\s*(\d+)/g)].map(m => ({ w: Number(m[1]), h: Number(m[2]) }));
    if (!matches.length) return null;
    matches.sort((a, b) => (b.w * b.h) - (a.w * a.h));
    return { width: matches[0].w, height: matches[0].h };
  } catch {}
  return null;
}

function audit() {
  const defaults = loadSeoDefaults();
  const measured = loadMeasured();
  const pages = listPages(APP_DIR);

  const usageByImage = new Map();
  for (const p of pages) {
    const { src, source } = resolveImage(p.route, p.file, defaults);
    if (!usageByImage.has(src)) usageByImage.set(src, { count: 0, sources: new Set(), routes: [] });
    const u = usageByImage.get(src);
    u.count += 1;
    u.sources.add(source);
    if (u.routes.length < 5) u.routes.push(p.route);
  }

  const findings = [];
  for (const [img, usage] of usageByImage.entries()) {
    const abs = path.join(PUBLIC_DIR, img.replace(/^\//, ''));
    const exists = fs.existsSync(abs);
    if (!exists) {
      findings.push({ severity: 'MISSING', image: img, usage });
      continue;
    }
    const stat = fs.statSync(abs);
    const dims = dimsOf(abs);
    const ratio = dims ? dims.width / dims.height : null;
    const isMeasured = !!measured[img];

    const flags = [];
    if (!isMeasured) flags.push('UNMEASURED');
    if (dims && (ratio < MIN_ACCEPTABLE_RATIO || ratio > MAX_ACCEPTABLE_RATIO)) {
      flags.push(`WRONG_RATIO(${ratio.toFixed(2)}:1)`);
    }
    if (dims && (dims.width < MIN_W || dims.height < MIN_H)) flags.push('SMALL');
    if (stat.size > HEAVY_BYTES) flags.push(`HEAVY(${(stat.size / 1024).toFixed(0)}KB)`);

    findings.push({
      severity: flags.length === 0 ? 'OK' : 'WARN',
      image: img,
      width: dims?.width,
      height: dims?.height,
      ratio: ratio ? Number(ratio.toFixed(2)) : null,
      sizeKB: Math.round(stat.size / 1024),
      measured: isMeasured,
      flags,
      usage,
    });
  }

  findings.sort((a, b) => {
    const rank = { MISSING: 0, WARN: 1, OK: 2 };
    if (rank[a.severity] !== rank[b.severity]) return rank[a.severity] - rank[b.severity];
    return b.usage.count - a.usage.count;
  });

  return { findings, pages: pages.length };
}

function fmtUsage(u) {
  const routes = u.routes.join(', ');
  return `${u.count} pages [${[...u.sources].join('+')}]${u.routes.length ? ` (${routes}${u.count > 5 ? ', …' : ''})` : ''}`;
}

function main() {
  const { findings, pages } = audit();

  console.log(`OG Image Audit — ${new Date().toISOString().slice(0, 10)}`);
  console.log(`Pages scanned: ${pages}`);
  console.log(`Unique OG images: ${findings.length}`);
  console.log('');

  const issues = findings.filter(f => f.severity !== 'OK');
  console.log(`Issues: ${issues.length}`);
  for (const f of issues) {
    console.log(`  [${f.severity}] ${f.image} ${f.flags.length ? f.flags.join(',') : ''}`);
    console.log(`    used by: ${fmtUsage(f.usage)}`);
  }
  console.log('');
  console.log(`Healthy: ${findings.length - issues.length}`);

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const dest = path.join(REPORT_DIR, `og-image-audit-${new Date().toISOString().slice(0, 10)}.json`);
  fs.writeFileSync(dest, JSON.stringify({ pages, findings: findings.map(f => ({ ...f, usage: { ...f.usage, sources: [...f.usage.sources] } })) }, null, 2));
  console.log(`Wrote report: ${dest}`);

  process.exit(0);
}

main();
