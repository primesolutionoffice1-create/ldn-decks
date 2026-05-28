#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

const appDir = resolve(import.meta.dirname, '../src/app');

// Pages already in llms-full.txt (extracted from file)
const existing = new Set(
  readFileSync(resolve(import.meta.dirname, '../public/llms-full.txt'), 'utf8')
    .match(/https:\/\/ldndecks\.com\/[^\s)>]*/g)
    ?.map(u => u.replace('https://ldndecks.com', '')) || []
);

// Skip utility pages
const SKIP = /^(admin|privacy|terms|thank|review$|social$|team$|press$|scholarship|referral|lead-magnets|llms|sitemap)/;

function extractMeta(filePath) {
  const src = readFileSync(filePath, 'utf8');
  const titleMatch = src.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const descMatch = src.match(/description:\s*['"`]([^'"`]+)['"`]/);
  return {
    title: titleMatch?.[1] || '',
    description: descMatch?.[1] || '',
  };
}

function classifyIntent(slug, title, desc) {
  const text = `${slug} ${title} ${desc}`.toLowerCase();
  if (text.includes('cost') || text.includes('price') || text.includes('financing') || text.includes('payment') || text.includes('budget')) return 'Commercial — cost research / purchase planning';
  if (text.includes('builder') || text.includes('contractor') || text.includes('service')) return 'Commercial — hiring intent';
  if (text.includes('hoa') || text.includes('permit')) return 'Informational — regulatory / compliance';
  if (text.includes('calculator') || text.includes('estimator') || text.includes('tool')) return 'Transactional — interactive tool';
  if (text.includes('vs') || text.includes('comparison') || text.includes('review')) return 'Informational — comparison research';
  if (text.includes('how') || text.includes('guide') || text.includes('checklist') || text.includes('ideas')) return 'Informational — educational / planning';
  if (text.includes('repair') || text.includes('maintenance') || text.includes('stain') || text.includes('wash')) return 'Commercial — maintenance service';
  return 'Informational';
}

function classifyCategory(slug) {
  if (/^\d+.*sqft|cost-by-size|deck-cost|composite-deck-cost|covered-deck-cost|monthly-payment|financing|credit-score|resurface-or-replace|long-term-cost|mclean.*budget|timbertech.*cost|trex.*cost|addon-cost|lighting-railings-stairs/.test(slug)) return 'PRICING & COST GUIDES';
  if (/hoa|architectural/.test(slug)) return 'HOA COMMUNITY GUIDES';
  if (/permit/.test(slug)) return 'PERMIT GUIDES';
  if (/deck-builder-(?!northern)/.test(slug)) return 'CITY PAGES';
  if (/near-you/.test(slug)) return 'NEAR YOU PAGES';
  if (/services\//.test(slug)) return 'SERVICE PAGES';
  if (/vs|comparison|material|composite-deck-vs|wood-vs|stain-sealer/.test(slug)) return 'COMPARISON & MATERIAL GUIDES';
  if (/repair|maintenance|safety|resurfacing|staining|washing|pressure|winterize/.test(slug)) return 'MAINTENANCE & REPAIR';
  if (/design|ideas|lighting|railing|enclosure|size|multi-level|rooftop|pool|outdoor-kitchen|patio|porch|pergola|covered|three-season|outdoor-living/.test(slug)) return 'DESIGN & SPECIALTY BUILDS';
  if (/calculator|estimator|tool/.test(slug)) return 'INTERACTIVE TOOLS';
  if (/bbb|review|about|warranty|certif|choose|question|how-long|best-time|tariff|eco|pet|value|guide|blog|education|showcase|before-and-after|houzz/.test(slug)) return 'TRUST, GUIDES & RESOURCES';
  return 'OTHER';
}

// Walk all page.js files
const entries = [];
function walk(dir, prefix = '') {
  for (const item of readdirSync(dir)) {
    const full = join(dir, item);
    if (item.startsWith('[') || item.startsWith('.')) continue;
    if (statSync(full).isDirectory()) {
      walk(full, prefix + '/' + item);
    } else if (item === 'page.js') {
      const slug = prefix || '/';
      if (SKIP.test(slug.slice(1))) continue;
      if (existing.has(slug)) continue;

      // Try page.js first, then layout.js for metadata
      let meta = extractMeta(full);
      if (!meta.title) {
        const layoutPath = join(dir, 'layout.js');
        try { meta = extractMeta(layoutPath); } catch {}
      }
      if (!meta.title) return;

      entries.push({
        slug,
        title: meta.title,
        description: meta.description,
        intent: classifyIntent(slug.slice(1), meta.title, meta.description),
        category: classifyCategory(slug.slice(1)),
      });
    }
  }
}

walk(appDir);

// Group by category and output
const grouped = {};
for (const e of entries) {
  if (!grouped[e.category]) grouped[e.category] = [];
  grouped[e.category].push(e);
}

const categoryOrder = [
  'PRICING & COST GUIDES',
  'COMPARISON & MATERIAL GUIDES',
  'DESIGN & SPECIALTY BUILDS',
  'HOA COMMUNITY GUIDES',
  'PERMIT GUIDES',
  'MAINTENANCE & REPAIR',
  'CITY PAGES',
  'SERVICE PAGES',
  'INTERACTIVE TOOLS',
  'TRUST, GUIDES & RESOURCES',
  'NEAR YOU PAGES',
  'OTHER',
];

let output = '';
for (const cat of categoryOrder) {
  if (!grouped[cat] || grouped[cat].length === 0) continue;
  output += `\n---\n\n## ${cat} (NEW)\n\n`;
  for (const e of grouped[cat].sort((a, b) => a.slug.localeCompare(b.slug))) {
    const cleanTitle = e.title.replace(/\s*\|.*$/, '').replace(/\s*—.*$/, '');
    output += `### ${cleanTitle}\n`;
    output += `- URL: https://ldndecks.com${e.slug}\n`;
    output += `- Content: ${e.description}\n`;
    output += `- Intent: ${e.intent}\n`;
    output += `- Updated: 2026-05-28\n\n`;
  }
}

console.log(output);
console.log(`\n// Total new entries: ${entries.length}`);
