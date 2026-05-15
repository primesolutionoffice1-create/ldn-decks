import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const appDir = path.resolve('src/app');
const componentDir = path.resolve('src/components');

function rgFiles(pattern, dir) {
  try {
    return execFileSync('rg', ['-l', pattern, dir], { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(Boolean);
  } catch (error) {
    if (error.status === 1) return [];
    throw error;
  }
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
