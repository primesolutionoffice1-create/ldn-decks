#!/usr/bin/env node
/**
 * Breadcrumb label audit
 *
 * Walks every route under src/app/, extracts each URL segment, and checks
 * whether that segment has an explicit entry in src/lib/breadcrumbLabels.js
 * (SEGMENT_LABELS). Segments without an explicit label fall back to the
 * `humanize()` function, which can produce odd casing or unhelpful labels
 * for compound slugs ("Deck-Permit-Loudoun-County-Virginia" rather than
 * "Loudoun County Deck Permit").
 *
 * Reports missing segments grouped by frequency so the highest-impact
 * additions get prioritized.
 *
 * Also flags duplicate BreadcrumbList JSON-LD: pages that emit their own
 * BreadcrumbList AND inherit the global one from LayoutContent.jsx will
 * have 2 BreadcrumbList blocks, which is wasteful and confusing.
 */
import fs from 'node:fs';
import path from 'node:path';
import { resolveVaultReportsDir } from './lib/report-paths.mjs';
import { localDateStamp } from './lib/local-date.mjs';

const APP_DIR = path.resolve('src/app');
const LABELS_FILE = path.resolve('src/lib/breadcrumbLabels.js');
const REPORT_DIR = resolveVaultReportsDir(path.resolve('.'));

function loadKnownSegments() {
  const src = fs.readFileSync(LABELS_FILE, 'utf8');
  const re = /^\s*'([^']+)':/gm;
  const out = new Set();
  let m;
  while ((m = re.exec(src)) !== null) out.add(m[1]);
  return out;
}

function listPages(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pages = [];
  for (const e of entries) {
    if (e.name === 'api' || e.name === 'admin' || e.name.startsWith('_')) continue;
    if (e.isDirectory()) {
      pages.push(...listPages(path.join(dir, e.name), `${prefix}/${e.name}`));
    } else if (e.name === 'page.js' || e.name === 'page.jsx' || e.name === 'page.tsx') {
      pages.push({ route: prefix || '/', file: path.join(dir, e.name) });
    }
  }
  return pages;
}

function audit() {
  const known = loadKnownSegments();
  const pages = listPages(APP_DIR);

  const missing = new Map();        // segment -> { count, sampleRoutes }
  const duplicates = [];

  for (const p of pages) {
    if (p.route === '/') continue;
    const segments = p.route.split('/').filter(Boolean);
    for (const seg of segments) {
      if (seg.startsWith('[')) continue; // dynamic segments
      if (!known.has(seg)) {
        if (!missing.has(seg)) missing.set(seg, { count: 0, routes: [] });
        const m = missing.get(seg);
        m.count += 1;
        if (m.routes.length < 5) m.routes.push(p.route);
      }
    }

    // Duplicate BreadcrumbList check
    try {
      const src = fs.readFileSync(p.file, 'utf8');
      if (/['"]@type['"]\s*:\s*['"]BreadcrumbList['"]/.test(src)) {
        duplicates.push(p.route);
      }
    } catch {}
  }

  return {
    totalPages: pages.length,
    missing: [...missing.entries()]
      .map(([seg, info]) => ({ segment: seg, count: info.count, sample: info.routes }))
      .sort((a, b) => b.count - a.count),
    duplicates: duplicates.sort(),
  };
}

function main() {
  const r = audit();
  const stamp = localDateStamp();

  console.log(`Breadcrumb Audit — ${stamp}`);
  console.log(`Pages scanned: ${r.totalPages}`);
  console.log(`Known segments: see src/lib/breadcrumbLabels.js`);
  console.log('');
  console.log(`UNKNOWN SEGMENTS (will use humanize() fallback): ${r.missing.length}`);
  if (r.missing.length === 0) {
    console.log('  ✓ all URL segments have explicit labels');
  } else {
    for (const m of r.missing) {
      console.log(`  [${m.count}×] ${m.segment} — e.g. ${m.sample[0]}`);
    }
  }
  console.log('');
  console.log(`DUPLICATE BreadcrumbList (page emits its own + LayoutContent emits global): ${r.duplicates.length}`);
  if (r.duplicates.length > 0) {
    for (const d of r.duplicates.slice(0, 20)) {
      console.log(`  ${d}`);
    }
    if (r.duplicates.length > 20) console.log(`  …and ${r.duplicates.length - 20} more`);
  } else {
    console.log('  ✓ no duplicates');
  }

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const dest = path.join(REPORT_DIR, `breadcrumb-audit-${stamp}.json`);
  fs.writeFileSync(dest, JSON.stringify(r, null, 2));
  console.log('');
  console.log(`Wrote report: ${dest}`);
}

main();
