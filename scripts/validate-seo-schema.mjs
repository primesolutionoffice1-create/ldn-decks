import fs from 'node:fs';
import path from 'node:path';

const appDir = path.resolve('src/app');
const componentDir = path.resolve('src/components');

// Recursively lists source files under `dir`, skipping build/dep folders.
function walkSourceFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkSourceFiles(full));
    } else if (entry.isFile() && /\.(js|jsx|ts|tsx|mjs)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

// Returns source files under `dir` whose contents match `pattern` (a regex
// string). Native replacement for the previous `rg -l` shell-out so the
// validator runs on any machine without ripgrep installed.
function rgFiles(pattern, dir) {
  const re = new RegExp(pattern);
  return walkSourceFiles(dir).filter(file => {
    try {
      return re.test(fs.readFileSync(file, 'utf8'));
    } catch {
      return false;
    }
  });
}

function fail(message) {
  throw new Error(message);
}

function hasCustomFaqSchema(source) {
  return /FAQPage|faqSchema|faqSchemaData/.test(source);
}

function serviceFaqTags(source) {
  return [...source.matchAll(/<ServicesFAQ\b[\s\S]*?(?:\/>|>)/g)].map(match => match[0]);
}

const appFiles = rgFiles('.', appDir).filter(file => /\.(js|jsx|ts|tsx)$/.test(file));
const servicesFaqFiles = rgFiles('<ServicesFAQ', appDir);
const schemaTypeFiles = rgFiles('"@type"|\'@type\'|@type', path.resolve('src'));

const duplicateFaqRisks = [];
const missingCanonicalRisks = [];

for (const file of servicesFaqFiles) {
  const source = fs.readFileSync(file, 'utf8');
  const tags = serviceFaqTags(source);
  const fileHasCustomFaq = hasCustomFaqSchema(source);

  for (const tag of tags) {
    const schemaDisabled = /withSchema=\{false\}/.test(tag);
    const hasCanonical = /canonicalUrl=/.test(tag);

    if (fileHasCustomFaq && !schemaDisabled) {
      duplicateFaqRisks.push(file);
    }

    if (!schemaDisabled && !hasCanonical) {
      missingCanonicalRisks.push(file);
    }
  }
}

if (duplicateFaqRisks.length) {
  fail(`ServicesFAQ duplicate FAQPage risk. Add withSchema={false} where the page already emits FAQPage JSON-LD:\n${[...new Set(duplicateFaqRisks)].join('\n')}`);
}

if (missingCanonicalRisks.length) {
  fail(`ServicesFAQ with schema enabled must pass canonicalUrl for stable @id values:\n${[...new Set(missingCanonicalRisks)].join('\n')}`);
}

const howToFiles = schemaTypeFiles.filter(file => {
  const source = fs.readFileSync(file, 'utf8');
  return /['"]@type['"]\s*:\s*['"]HowTo['"]/.test(source);
});

if (howToFiles.length) {
  fail(`HowTo schema is deprecated for Google rich results and should not be emitted:\n${howToFiles.join('\n')}`);
}

const jsonLdFiles = rgFiles('<JsonLd|application/ld\\+json', path.resolve('src'));
const unsafeJsonLdWarnings = jsonLdFiles.filter(file => {
  const source = fs.readFileSync(file, 'utf8');
  return /dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify/.test(source) && !/replace\(/.test(source);
});

// NAP-drift sentinel — fail if any source file mentions an address other than
// the documented canonical Centreville HQ. Stale Ashburn / Manassas / Leesburg
// / Sterling office claims have surfaced in the past and create cross-platform
// entity-inconsistency signals that demote local-pack rankings. The canonical
// record lives in vault/.../citations/NAP Source of Truth.md and `BUSINESS.address`.
// Allow-list: city-name mentions inside obvious copy contexts (city pages,
// service-area lists, FAQ answers) are OK. Forbid: structured-data address
// fields, footer/header NAP rows, and llms.txt "Office:" / "Location:" / "two
// offices" claims that would compete with the canonical Centreville HQ.
const NAP_DRIFT_PATTERNS = [
  // llms-style canonical claim lines
  /^\s*-\s*\*\*Location\*\*:.*(Ashburn|Manassas|Leesburg|Sterling|Reston|Vienna|McLean|Fairfax)/m,
  /two\s+offices/i,
  /second\s+office/i,
  /secondary\s+(office|address|location)/i,
  // Address-shaped strings other than the canonical
  /\b\d{4,5}\s+[A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+){0,3}\s+(?:Dr|Drive|Cir|Circle|Rd|Road|Ave|Avenue|St|Street|Way|Ln|Lane|Pl|Place),?\s+(?:Ashburn|Manassas|Leesburg|Sterling|Reston|Vienna|McLean|Fairfax)/,
];

const napDriftFiles = [];
for (const file of appFiles.concat(rgFiles('.', componentDir).filter(f => /\.(js|jsx|ts|tsx|mjs)$/.test(f)))) {
  // Skip vault, audits, and the canonical record itself
  if (file.includes('lib/business.js')) continue;
  if (file.includes('NAP Source of Truth')) continue;
  const source = fs.readFileSync(file, 'utf8');
  for (const pattern of NAP_DRIFT_PATTERNS) {
    if (pattern.test(source)) {
      napDriftFiles.push({ file: path.relative(process.cwd(), file), pattern: String(pattern).slice(0, 80) });
      break;
    }
  }
}

if (napDriftFiles.length) {
  console.error('NAP-drift sentinel triggered. The following files mention an address or office claim other than the documented canonical Centreville HQ. If the additional office is real, update src/lib/business.js to declare it as a secondary Place entity AND update the NAP Source of Truth deliverable. Otherwise, remove the reference:');
  for (const { file, pattern } of napDriftFiles) {
    console.error(`  ${file}  (matched: ${pattern})`);
  }
  process.exitCode = 1;
}

console.log(JSON.stringify({
  ok: napDriftFiles.length === 0,
  appFiles: appFiles.length,
  servicesFaqFiles: servicesFaqFiles.length,
  jsonLdFiles: jsonLdFiles.length,
  duplicateFaqRisks: 0,
  missingCanonicalRisks: 0,
  howToSchemaFiles: 0,
  napDriftFiles: napDriftFiles.length,
  unsafeJsonLdWarnings,
}, null, 2));
