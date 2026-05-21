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

console.log(JSON.stringify({
  ok: true,
  appFiles: appFiles.length,
  servicesFaqFiles: servicesFaqFiles.length,
  jsonLdFiles: jsonLdFiles.length,
  duplicateFaqRisks: 0,
  missingCanonicalRisks: 0,
  howToSchemaFiles: 0,
  unsafeJsonLdWarnings,
}, null, 2));
