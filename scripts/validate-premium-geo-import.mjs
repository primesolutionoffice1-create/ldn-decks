#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const IMPORT_DIR = path.resolve(ROOT, 'google-ads-import/premium-geo-test');
const OUTPUT_DIR = path.resolve(ROOT, 'scripts/output');
const STAMP = localDateStamp();
const CAMPAIGN = 'SRCH | Premium Geo | Arlington Alexandria McLean | Leads';
const REQUIRED_FILES = [
  '01-campaign.csv',
  '02-ad-groups.csv',
  '03-keywords.csv',
  '04-responsive-search-ads.csv',
  '05-sitelinks.csv',
  '06-callouts.csv',
  '07-call-asset.csv',
  '08-location-targets.csv',
  '09-campaign-negative-keywords.csv',
];
const EXPECTED_LOCATIONS = [
  'Fairfax County, Virginia, United States',
  'Arlington County, Virginia, United States',
  'Alexandria, Virginia, United States',
];
const EXPECTED_FINAL_URLS = new Map([
  ['McLean + Great Falls', 'https://ldndecks.com/mclean-great-falls-premium-deck-budget/'],
  ['Arlington', 'https://ldndecks.com/deck-builder-arlington-va/'],
  ['Alexandria', 'https://ldndecks.com/deck-builder-alexandria-va/'],
  ['Vienna + Oakton', 'https://ldndecks.com/deck-builder-vienna-va/'],
  ['Near Me | Premium Geo', 'https://ldndecks.com/deck-builder-northern-virginia/'],
]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      if (row.some(value => value.length)) rows.push(row);
      row = [];
      field = '';
    } else if (char !== '\r') {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function readCsv(fileName, errors) {
  const filePath = path.join(IMPORT_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing file: ${fileName}`);
    return [];
  }
  const [headers, ...body] = parseCsv(fs.readFileSync(filePath, 'utf8'));
  if (!headers?.length) {
    errors.push(`${fileName} is missing a header row`);
    return [];
  }
  return body.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ''])));
}

function onlyCampaign(rows, fileName, errors) {
  const badRows = rows.filter(row => row.Campaign && row.Campaign !== CAMPAIGN);
  if (badRows.length) {
    errors.push(`${fileName} includes non-premium campaign rows: ${[...new Set(badRows.map(row => row.Campaign))].join(', ')}`);
  }
}

function everyPaused(rows, fileName, errors) {
  const badRows = rows.filter(row => row.Status && row.Status !== 'Paused');
  if (badRows.length) {
    errors.push(`${fileName} includes non-paused rows`);
  }
}

function normalize(value) {
  return String(value || '').trim().toLowerCase();
}

const errors = [];
const warnings = [];

for (const fileName of REQUIRED_FILES) {
  if (!fs.existsSync(path.join(IMPORT_DIR, fileName))) errors.push(`Missing required file: ${fileName}`);
}

const campaigns = readCsv('01-campaign.csv', errors);
const adGroups = readCsv('02-ad-groups.csv', errors);
const keywords = readCsv('03-keywords.csv', errors);
const ads = readCsv('04-responsive-search-ads.csv', errors);
const sitelinks = readCsv('05-sitelinks.csv', errors);
const callouts = readCsv('06-callouts.csv', errors);
const callAssets = readCsv('07-call-asset.csv', errors);
const locations = readCsv('08-location-targets.csv', errors);
const negatives = readCsv('09-campaign-negative-keywords.csv', errors);

[
  ['01-campaign.csv', campaigns],
  ['02-ad-groups.csv', adGroups],
  ['03-keywords.csv', keywords],
  ['04-responsive-search-ads.csv', ads],
  ['05-sitelinks.csv', sitelinks],
  ['06-callouts.csv', callouts],
  ['07-call-asset.csv', callAssets],
  ['08-location-targets.csv', locations],
  ['09-campaign-negative-keywords.csv', negatives],
].forEach(([fileName, rows]) => {
  onlyCampaign(rows, fileName, errors);
  everyPaused(rows, fileName, errors);
});

if (campaigns.length !== 1) errors.push(`Expected 1 campaign row, found ${campaigns.length}`);
if (campaigns[0]?.Campaign !== CAMPAIGN) errors.push(`Expected campaign ${CAMPAIGN}`);
if (campaigns[0]?.Budget !== '50') errors.push(`Expected Premium Geo budget 50, found ${campaigns[0]?.Budget || '(blank)'}`);
if (campaigns[0]?.Networks !== 'Google Search') {
  errors.push('Premium Geo must target Google Search only');
}

if (adGroups.length !== 5) errors.push(`Expected 5 ad groups, found ${adGroups.length}`);
if (keywords.length !== 43) errors.push(`Expected 43 keywords, found ${keywords.length}`);
if (ads.length !== 15) errors.push(`Expected 15 responsive search ads, found ${ads.length}`);
if (sitelinks.length !== 4) errors.push(`Expected 4 sitelinks, found ${sitelinks.length}`);
if (callouts.length !== 8) errors.push(`Expected 8 callouts, found ${callouts.length}`);
if (callAssets.length !== 1) errors.push(`Expected 1 call asset, found ${callAssets.length}`);
if (locations.length !== 3) errors.push(`Expected 3 locations, found ${locations.length}`);
if (negatives.length !== 55) errors.push(`Expected 55 campaign negatives, found ${negatives.length}`);

const broadKeywords = keywords.filter(row => !['Phrase', 'Exact'].includes(row['Match type']));
if (broadKeywords.length) errors.push(`Broad keywords found: ${broadKeywords.map(row => row.Keyword).join(', ')}`);

const broadNegatives = negatives.filter(row => row['Match type'] === 'Broad');
if (broadNegatives.length) errors.push(`Broad negatives found: ${broadNegatives.map(row => row.Keyword).join(', ')}`);

const nonCampaignNegatives = negatives.filter(row => row.Type !== 'Campaign negative');
if (nonCampaignNegatives.length) {
  errors.push(`Non-campaign negative rows found: ${nonCampaignNegatives.map(row => row.Keyword).join(', ')}`);
}

for (const location of EXPECTED_LOCATIONS) {
  if (!locations.some(row => row.Location === location && row['Location option'] === 'Presence')) {
    errors.push(`Missing Presence location: ${location}`);
  }
}

for (const [adGroup, expectedUrl] of EXPECTED_FINAL_URLS.entries()) {
  const keywordUrls = new Set(keywords.filter(row => row['Ad group'] === adGroup).map(row => row['Final URL']));
  const adUrls = new Set(ads.filter(row => row['Ad group'] === adGroup).map(row => row['Final URL']));
  if (keywordUrls.size !== 1 || !keywordUrls.has(expectedUrl)) {
    errors.push(`${adGroup} keyword URL mismatch: ${[...keywordUrls].join(', ')}`);
  }
  if (adUrls.size !== 1 || !adUrls.has(expectedUrl)) {
    errors.push(`${adGroup} ad URL mismatch: ${[...adUrls].join(', ')}`);
  }
}

const duplicateKeywords = new Map();
for (const row of keywords) {
  const key = `${normalize(row['Ad group'])}||${normalize(row.Keyword)}||${row['Match type']}`;
  duplicateKeywords.set(key, (duplicateKeywords.get(key) || 0) + 1);
}
const duplicates = [...duplicateKeywords.entries()].filter(([, count]) => count > 1);
if (duplicates.length) errors.push(`Duplicate keywords found: ${duplicates.map(([key]) => key).join(', ')}`);

const result = {
  ok: errors.length === 0,
  campaign: CAMPAIGN,
  files: REQUIRED_FILES.length,
  adGroups: adGroups.length,
  keywords: keywords.length,
  responsiveSearchAds: ads.length,
  sitelinks: sitelinks.length,
  callouts: callouts.length,
  callAssets: callAssets.length,
  locations: locations.length,
  negatives: negatives.length,
  errors,
  warnings,
  outputs: {
    json: `scripts/output/premium-geo-import-validation-${STAMP}.json`,
    markdown: `scripts/output/premium-geo-import-validation-${STAMP}.md`,
  },
};

const markdown = [
  '# Premium Geo Import Validation',
  '',
  `Date: ${STAMP}`,
  `Status: ${result.ok ? 'PASS' : 'FAIL'}`,
  `Campaign: \`${CAMPAIGN}\``,
  `Files: ${result.files}`,
  `Ad groups: ${result.adGroups}`,
  `Keywords: ${result.keywords}`,
  `Responsive search ads: ${result.responsiveSearchAds}`,
  `Sitelinks: ${result.sitelinks}`,
  `Callouts: ${result.callouts}`,
  `Call assets: ${result.callAssets}`,
  `Locations: ${result.locations}`,
  `Campaign negatives: ${result.negatives}`,
  `Errors: ${errors.length}`,
  `Warnings: ${warnings.length}`,
  '',
  '## Errors',
  '',
  ...(errors.length ? errors.map(error => `- ${error}`) : ['- None']),
  '',
  '## Import Safety',
  '',
  '- Import this pack into Google Ads Editor only.',
  '- Post paused first.',
  '- Do not post if Editor shows changes outside the Premium Geo campaign.',
  '',
].join('\n');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(path.resolve(ROOT, result.outputs.json), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.resolve(ROOT, result.outputs.markdown), markdown);
console.log(JSON.stringify(result, null, 2));

if (!result.ok) process.exit(1);
