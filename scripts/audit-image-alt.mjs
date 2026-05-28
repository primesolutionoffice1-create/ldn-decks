#!/usr/bin/env node
/**
 * Image alt-text audit.
 *
 * Scans every <Image> JSX usage under src/ and src/app/ and classifies each
 * by alt-text quality:
 *   - MISSING     no alt attribute at all (worst — accessibility + SEO loss)
 *   - EMPTY       alt="" (only valid for purely decorative images)
 *   - GENERIC     short / non-descriptive alt that doesn't mention what's in
 *                 the image, where, or for whom (e.g. "deck", "image", "photo")
 *   - WEAK        present but missing local context (no city / county / brand)
 *   - GOOD        descriptive + includes a local or product reference
 *
 * Run: `npm run seo:audit-images` or `node scripts/audit-image-alt.mjs`
 *
 * Output: JSON report listing every issue with file path + line number +
 * current alt text. Exit code 0 (report-only — does not fail the build).
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOTS = [path.resolve('src/app'), path.resolve('src/components')];

// Tokens that signal local-context strength in alt text.
const LOCAL_TOKENS = [
  // Northern Virginia geography
  'virginia', ' va ', ' va.', 'northern virginia', 'nova',
  'loudoun', 'fairfax', 'arlington', 'prince william', 'stafford',
  // Top-volume cities
  'ashburn', 'leesburg', 'sterling', 'centreville', 'tysons',
  'mclean', 'vienna', 'chantilly', 'reston', 'herndon', 'manassas',
  'haymarket', 'gainesville', 'purcellville', 'broadlands', 'brambleton',
  'one loudoun', 'lansdowne', 'belmont', 'sully station', 'virginia run',
  // Brand-context
  'trex', 'timbertech', 'azek', 'composite', 'cedar',
  // Project-context (signals descriptiveness)
  'screened porch', 'pergola', 'outdoor kitchen', 'multi-level',
  'cable rail', 'multi level',
];

// Generic tokens that signal weak alt text — present alone, not descriptive.
const GENERIC_PATTERNS = [
  /^(?:deck|image|photo|picture|gallery|item|project|build|construction)\s*\d*$/i,
  /^untitled/i,
  /^img\b/i,
  /^logo\s*$/i,
  /^icon\s*$/i,
  /^\s*$/,
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(jsx?|tsx?|mjs)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function findImageTags(source) {
  // Match <Image ... /> or <Image ... > (multi-line). Capture the full open-tag.
  const re = /<Image\b([^>]*?)\/?>/gs;
  const results = [];
  let m;
  while ((m = re.exec(source)) !== null) {
    results.push({ start: m.index, raw: m[0], inner: m[1] });
  }
  return results;
}

function lineNumberAt(source, index) {
  return source.slice(0, index).split('\n').length;
}

function extractAlt(tagInner) {
  // alt="..."  OR  alt={...}  OR  alt={`...`}
  const dq = tagInner.match(/\balt\s*=\s*"([^"]*)"/);
  if (dq) return { type: 'string', value: dq[1] };
  const sq = tagInner.match(/\balt\s*=\s*'([^']*)'/);
  if (sq) return { type: 'string', value: sq[1] };
  const tpl = tagInner.match(/\balt\s*=\s*\{\s*`([^`]*)`\s*\}/);
  if (tpl) return { type: 'template', value: tpl[1] };
  const expr = tagInner.match(/\balt\s*=\s*\{([^}]*)\}/);
  if (expr) return { type: 'expression', value: expr[1].trim() };
  return null;
}

function classifyAlt(alt) {
  if (alt === null) return 'MISSING';
  if (alt.type === 'string' && alt.value === '') return 'EMPTY';
  // expression-bound alt (e.g. {project.title}) — we trust the source data
  // unless it's clearly a placeholder.
  if (alt.type === 'expression') {
    const v = alt.value.toLowerCase();
    if (/^["']?\s*["']?$/.test(v)) return 'EMPTY';
    return 'EXPRESSION';
  }
  const v = (alt.value || '').toLowerCase();
  if (GENERIC_PATTERNS.some(re => re.test(v))) return 'GENERIC';
  if (v.length < 15) return 'GENERIC';
  const hasLocal = LOCAL_TOKENS.some(tok => v.includes(tok));
  return hasLocal ? 'GOOD' : 'WEAK';
}

const files = ROOTS.flatMap(r => fs.existsSync(r) ? walk(r) : []);
const findings = { MISSING: [], EMPTY: [], GENERIC: [], WEAK: [], GOOD: [], EXPRESSION: [] };
let totalImages = 0;

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const tags = findImageTags(source);
  for (const tag of tags) {
    totalImages += 1;
    const alt = extractAlt(tag.inner);
    const klass = classifyAlt(alt);
    findings[klass].push({
      file: path.relative(process.cwd(), file),
      line: lineNumberAt(source, tag.start),
      alt: alt ? (alt.value || `<${alt.type}>`) : null,
    });
  }
}

const summary = {
  totalImages,
  MISSING: findings.MISSING.length,
  EMPTY: findings.EMPTY.length,
  GENERIC: findings.GENERIC.length,
  WEAK: findings.WEAK.length,
  EXPRESSION: findings.EXPRESSION.length,
  GOOD: findings.GOOD.length,
};

const REPORT_OUT = path.resolve('scripts/output/image-alt-audit.json');
fs.mkdirSync(path.dirname(REPORT_OUT), { recursive: true });
fs.writeFileSync(REPORT_OUT, JSON.stringify({ summary, findings }, null, 2));

console.log(JSON.stringify(summary, null, 2));
console.log(`\nFull report written to ${path.relative(process.cwd(), REPORT_OUT)}`);

if (process.argv.includes('--verbose') || process.argv.includes('-v')) {
  for (const klass of ['MISSING', 'EMPTY', 'GENERIC', 'WEAK']) {
    if (findings[klass].length === 0) continue;
    console.log(`\n=== ${klass} (${findings[klass].length}) ===`);
    for (const f of findings[klass].slice(0, 30)) {
      console.log(`  ${f.file}:${f.line}  alt=${JSON.stringify(f.alt)}`);
    }
    if (findings[klass].length > 30) {
      console.log(`  ... ${findings[klass].length - 30} more (see ${path.relative(process.cwd(), REPORT_OUT)})`);
    }
  }
}
