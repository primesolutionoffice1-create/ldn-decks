#!/usr/bin/env node
/**
 * Removes leftover inline serviceSchema/serviceSchemaData const declarations
 * that are no longer referenced (JsonLd usage already removed by previous script).
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const files = [
  'services/deck-replacement',
  'services/deck-resurfacing',
  'services/deck-washing',
  'services/fire-pits',
  'services/gazebo-pergola',
  'services/patios',
  'services/under-deck-patios',
  'services/entry-doors',
  'services/porches/front-porch',
  'services/porches/open-porch',
  'services/trex-railings',
  'services/trex-calm-shell',
  'covered-deck-builder-northern-virginia',
  'get-estimate',
];

const BASE = resolve(import.meta.dirname, '../src/app');
let cleaned = 0;

for (const key of files) {
  const filePath = resolve(BASE, key, 'page.js');
  let content;
  try {
    content = readFileSync(filePath, 'utf8');
  } catch {
    console.log(`SKIP: ${key} (not found)`);
    continue;
  }

  // Find and remove the const serviceSchema(Data) = { ... }; block
  const varName = content.includes('serviceSchemaData') ? 'serviceSchemaData' : 'serviceSchema';
  const pattern = new RegExp(`const ${varName}\\s*=\\s*\\{`);
  const match = content.match(pattern);
  if (!match) {
    console.log(`SKIP: ${key} (no inline schema found)`);
    continue;
  }

  const startIdx = content.indexOf(match[0]);
  let braceDepth = 0;
  let endIdx = startIdx;
  let inString = false;
  let stringChar = '';

  for (let i = startIdx; i < content.length; i++) {
    const ch = content[i];
    const prev = i > 0 ? content[i - 1] : '';

    if (inString) {
      if (ch === stringChar && prev !== '\\') inString = false;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === '{') braceDepth++;
    if (ch === '}') {
      braceDepth--;
      if (braceDepth === 0) {
        endIdx = i + 1;
        // Eat trailing semicolon and newlines
        while (endIdx < content.length && (content[endIdx] === ';' || content[endIdx] === '\n' || content[endIdx] === '\r')) {
          endIdx++;
        }
        break;
      }
    }
  }

  if (endIdx <= startIdx) {
    console.log(`ERROR: ${key} (could not find end of object)`);
    continue;
  }

  // Remove the block (and any leading blank line)
  let newContent = content.slice(0, startIdx) + content.slice(endIdx);
  // Clean up double blank lines
  newContent = newContent.replace(/\n{3,}/g, '\n\n');

  if (newContent !== content) {
    writeFileSync(filePath, newContent, 'utf8');
    cleaned++;
    console.log(`✓ ${key} (removed ${varName})`);
  }
}

console.log(`\nCleaned: ${cleaned} files`);
