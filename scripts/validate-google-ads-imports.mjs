import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const importDir = path.resolve('google-ads-import');
const outputDir = path.resolve('scripts/output');
const stamp = localDateStamp();
const jsonOut = path.join(outputDir, `google-ads-import-validation-${stamp}.json`);
const mdOut = path.join(outputDir, `google-ads-import-validation-${stamp}.md`);
const errors = [];
const warnings = [];
const requiredFiles = [
  '01-campaigns.csv',
  '02-ad-groups.csv',
  '03-keywords.csv',
  '04-responsive-search-ads.csv',
  '05-shared-negative-keywords.csv',
  '06-sitelinks.csv',
  '07-callouts.csv',
  '08-pmax-remarketing-assets.csv',
  '09-call-asset.csv',
  '10-location-targets.csv',
  '11-campaign-negative-keywords.csv',
];

const requiredSharedNegatives = [
  'jobs',
  'hiring',
  'career',
  'diy',
  'plans',
  'blueprint',
  'cheap',
  'free',
  'used',
  'pallets',
  'home depot',
  'lowes',
  'materials only',
  'lumber only',
  'stain',
  'paint',
  'sealer',
  'sanding',
  'powerwash',
  'kit',
  'handyman',
  'small repair',
];

const requiredDeckBuilderNegatives = [
  'repair',
  'deck repair',
  'deck refinishing',
  'deck restoration',
  'deck staining',
  'deck sealing',
  'deck painting',
  'power washing',
  'pressure washing',
  'patio',
  'fence',
  'porch',
  'hardscaping',
  'construction company',
  'general contractor',
];

const requiredRepairSeparationNegatives = [
  'repair',
  'deck repair',
  'deck repair near me',
  'deck repair company',
  'deck repair contractor',
  'deck refinishing',
  'deck restoration',
  'deck staining',
  'deck sealing',
  'deck painting',
  'power washing',
  'pressure washing',
  'board repair',
  'railing repair',
  'stair repair',
];

const repairSeparatedCampaigns = [
  'SRCH | Composite | 3 Counties | Calls',
];

const requiredReplacementResurfacingNegatives = [
  'deck refinishing',
  'deck restoration',
  'deck staining',
  'deck sealing',
  'deck painting',
  'power washing',
  'pressure washing',
  'board repair',
  'railing repair',
  'stair repair',
  'small deck repair',
  'minor deck repair',
  'deck repair cost',
  'sunburst decks',
  'nova deck doctor',
];
const requiredPremiumGeoNegatives = [
  'deck repair',
  'minor deck repair',
  'small deck repair',
  'deck refinishing',
  'deck staining',
  'power washing',
  'pressure washing',
  'handyman',
  'materials only',
  'permit only',
];

const requiredLocations = [
  'Loudoun County, Virginia, United States',
  'Fairfax County, Virginia, United States',
  'Prince William County, Virginia, United States',
];
const premiumGeoCampaign = 'SRCH | Premium Geo | Arlington Alexandria McLean | Leads';
const premiumGeoLocations = [
  'Fairfax County, Virginia, United States',
  'Arlington County, Virginia, United States',
  'Alexandria, Virginia, United States',
];

const requiredCallPhone = '+15716557207';
const requiredCallSchedule = 'Mon-Fri 08:00-18:00';
const expectedAdGroupFinalUrls = new Map([
  ['SRCH | Composite | 3 Counties | Calls||Trex', 'https://www.ldndecks.com/composite-decks/'],
  ['SRCH | Composite | 3 Counties | Calls||TimberTech/AZEK', 'https://www.ldndecks.com/timbertech-decks/'],
  ['SRCH | Composite | 3 Counties | Calls||Composite Deck Builder', 'https://www.ldndecks.com/composite-decks/'],
  ['SRCH | Composite | 3 Counties | Calls||Composite Deck Cost', 'https://www.ldndecks.com/composite-deck-cost-northern-virginia/'],
  ['SRCH | Deck Builders | 3 Counties | Calls||Deck Builders Near Me', 'https://www.ldndecks.com/deck-builders-loudoun/'],
  ['SRCH | Deck Builders | 3 Counties | Calls||Deck Contractors Near Me', 'https://www.ldndecks.com/deck-builders-loudoun/'],
  ['SRCH | Replacement + Resurfacing | 3 Counties | Calls||Deck Replacement', 'https://www.ldndecks.com/services/deck-replacement/'],
  ['SRCH | Replacement + Resurfacing | 3 Counties | Calls||Deck Resurfacing', 'https://www.ldndecks.com/services/deck-resurfacing/'],
  ['SRCH | Replacement + Resurfacing | 3 Counties | Calls||Replace Wood With Composite', 'https://www.ldndecks.com/services/deck-replacement/'],
  ['SRCH | Branded | 3 Counties | Calls||Brand Exact', 'https://www.ldndecks.com/contact/'],
  ['SRCH | Branded | 3 Counties | Calls||Brand Phrase', 'https://www.ldndecks.com/contact/'],
  [`${premiumGeoCampaign}||McLean + Great Falls`, 'https://www.ldndecks.com/mclean-great-falls-premium-deck-budget/'],
  [`${premiumGeoCampaign}||Arlington`, 'https://www.ldndecks.com/deck-builder-arlington-va/'],
  [`${premiumGeoCampaign}||Alexandria`, 'https://www.ldndecks.com/deck-builder-alexandria-va/'],
  [`${premiumGeoCampaign}||Vienna + Oakton`, 'https://www.ldndecks.com/deck-builder-vienna-va/'],
]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === ',' && !inQuotes) {
      row.push(field);
      field = '';
      continue;
    }

    if (char === '\n' && !inQuotes) {
      row.push(field);
      if (row.some(value => value.length > 0)) {
        rows.push(row);
      }
      row = [];
      field = '';
      continue;
    }

    if (char !== '\r') {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function readCsv(fileName) {
  const filePath = path.join(importDir, fileName);
  if (!fs.existsSync(filePath)) {
    fail(`Missing required import file: ${fileName}`);
    return [];
  }

  const rows = parseCsv(fs.readFileSync(filePath, 'utf8'));
  const [headers, ...body] = rows;
  if (!headers?.length) {
    fail(`${fileName} is empty or missing a header row`);
    return [];
  }
  return body.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ''])));
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}

function fail(message) {
  errors.push(message);
}

function assertEveryPaused(rows, fileName) {
  const activeRows = rows.filter(row => row.Status && row.Status !== 'Paused');
  if (activeRows.length) {
    fail(`${fileName} contains non-paused rows: ${activeRows.map(row => row.Campaign || row.Keyword || row['Ad group']).join(', ')}`);
  }
}

for (const fileName of requiredFiles) {
  if (!fs.existsSync(path.join(importDir, fileName))) {
    fail(`Missing required file: ${fileName}`);
  }
}

const campaigns = readCsv('01-campaigns.csv');
const adGroups = readCsv('02-ad-groups.csv');
const keywords = readCsv('03-keywords.csv');
const ads = readCsv('04-responsive-search-ads.csv');
const sharedNegatives = readCsv('05-shared-negative-keywords.csv');
const sitelinks = readCsv('06-sitelinks.csv');
const callouts = readCsv('07-callouts.csv');
const pmaxAssets = readCsv('08-pmax-remarketing-assets.csv');
const callAssets = readCsv('09-call-asset.csv');
const locations = readCsv('10-location-targets.csv');
const campaignNegatives = readCsv('11-campaign-negative-keywords.csv');

[
  ['01-campaigns.csv', campaigns],
  ['02-ad-groups.csv', adGroups],
  ['03-keywords.csv', keywords],
  ['04-responsive-search-ads.csv', ads],
  ['06-sitelinks.csv', sitelinks],
  ['07-callouts.csv', callouts],
  ['08-pmax-remarketing-assets.csv', pmaxAssets],
  ['09-call-asset.csv', callAssets],
  ['10-location-targets.csv', locations],
  ['11-campaign-negative-keywords.csv', campaignNegatives],
].forEach(([fileName, rows]) => assertEveryPaused(rows, fileName));

const campaignNames = new Set(campaigns.map(row => row.Campaign));
const searchCampaigns = campaigns.filter(row => row['Campaign type'] === 'Search');
const pmaxCampaigns = campaigns.filter(row => row['Campaign type'] === 'Performance Max');

if (searchCampaigns.length !== 5 || pmaxCampaigns.length !== 1) {
  fail(`Expected 5 Search campaigns and 1 PMax campaign, found ${searchCampaigns.length} Search and ${pmaxCampaigns.length} PMax`);
}

const totalDailyBudget = campaigns.reduce((sum, row) => sum + Number(row.Budget || 0), 0);
if (totalDailyBudget !== 235) {
  fail(`Expected full expansion budget to total $235/day, found $${totalDailyBudget}/day`);
}

const nonSearchNetworkProblems = searchCampaigns.filter(row => row.Networks !== 'Google Search');
if (nonSearchNetworkProblems.length) {
  fail(`Search campaigns must target Google Search only: ${nonSearchNetworkProblems.map(row => row.Campaign).join(', ')}`);
}

for (const row of [...adGroups, ...keywords, ...ads, ...sitelinks, ...callouts, ...callAssets, ...locations, ...campaignNegatives]) {
  if (row.Campaign && !campaignNames.has(row.Campaign)) {
    fail(`Unknown campaign reference: ${row.Campaign}`);
  }
}

const broadKeywords = keywords.filter(row => !['Exact', 'Phrase'].includes(row['Match type']));
if (broadKeywords.length) {
  fail(`Broad or unknown match keywords found: ${broadKeywords.map(row => `${row.Campaign} / ${row.Keyword}`).join(', ')}`);
}

const byNormalizedKeyword = new Map();
for (const row of keywords) {
  const key = normalize(row.Keyword);
  const existing = byNormalizedKeyword.get(key) || { campaigns: new Set(), rows: [] };
  existing.campaigns.add(row.Campaign);
  existing.rows.push(row);
  byNormalizedKeyword.set(key, existing);
}

const crossCampaignDuplicates = [...byNormalizedKeyword.entries()].filter(([, value]) => value.campaigns.size > 1);
if (crossCampaignDuplicates.length) {
  fail(`Cross-campaign keyword duplicates found: ${crossCampaignDuplicates.map(([keyword]) => keyword).join(', ')}`);
}

for (const campaign of searchCampaigns) {
  const campaignAds = ads.filter(row => row.Campaign === campaign.Campaign);
  const campaignAdGroups = adGroups.filter(row => row.Campaign === campaign.Campaign);
  for (const adGroup of campaignAdGroups) {
    const count = campaignAds.filter(row => row['Ad group'] === adGroup['Ad group']).length;
    if (count < 2) {
      fail(`${campaign.Campaign} / ${adGroup['Ad group']} has ${count} RSAs; expected at least 2`);
    }
  }
}

const sharedNegativeSet = new Set(sharedNegatives.map(row => normalize(row.Keyword)));
for (const negative of requiredSharedNegatives) {
  if (!sharedNegativeSet.has(negative)) {
    fail(`Missing shared negative keyword: ${negative}`);
  }
}

const deckBuilderCampaign = 'SRCH | Deck Builders | 3 Counties | Calls';
const deckBuilderNegativeSet = new Set(
  campaignNegatives
    .filter(row => row.Campaign === deckBuilderCampaign)
    .map(row => normalize(row.Keyword)),
);
for (const negative of requiredDeckBuilderNegatives) {
  if (!deckBuilderNegativeSet.has(negative)) {
    fail(`Missing Deck Builders campaign negative: ${negative}`);
  }
}

for (const campaignName of repairSeparatedCampaigns) {
  const negativeSet = new Set(
    campaignNegatives
      .filter(row => row.Campaign === campaignName)
      .map(row => normalize(row.Keyword)),
  );

  for (const negative of requiredRepairSeparationNegatives) {
    if (!negativeSet.has(negative)) {
      fail(`Missing repair-separation negative for ${campaignName}: ${negative}`);
    }
  }
}

const replacementResurfacingCampaign = 'SRCH | Replacement + Resurfacing | 3 Counties | Calls';
const replacementResurfacingNegativeSet = new Set(
  campaignNegatives
    .filter(row => row.Campaign === replacementResurfacingCampaign)
    .map(row => normalize(row.Keyword)),
);
for (const negative of requiredReplacementResurfacingNegatives) {
  if (!replacementResurfacingNegativeSet.has(negative)) {
    fail(`Missing Replacement + Resurfacing campaign negative: ${negative}`);
  }
}

const premiumGeoNegativeSet = new Set(
  campaignNegatives
    .filter(row => row.Campaign === premiumGeoCampaign)
    .map(row => normalize(row.Keyword)),
);
for (const negative of requiredPremiumGeoNegatives) {
  if (!premiumGeoNegativeSet.has(negative)) {
    fail(`Missing Premium Geo campaign negative: ${negative}`);
  }
}

const broadNegativeRows = [...sharedNegatives, ...campaignNegatives]
  .filter(row => row['Match type'] === 'Broad');
if (broadNegativeRows.length) {
  fail(`Broad negative keywords found: ${broadNegativeRows.map(row => `${row.Campaign || row['Shared set']} / ${row.Keyword}`).join(', ')}`);
}

const nonCampaignNegativeRows = campaignNegatives.filter(row => row.Type !== 'Campaign negative');
if (nonCampaignNegativeRows.length) {
  fail(`Campaign negative rows missing Type=Campaign negative: ${nonCampaignNegativeRows.map(row => `${row.Campaign} / ${row.Keyword}`).join(', ')}`);
}

const repairKeywordLeaks = keywords.filter(row => (
  repairSeparatedCampaigns.includes(row.Campaign)
  && /\brepair\b/i.test(row.Keyword)
));
if (repairKeywordLeaks.length) {
  fail(`Repair keyword leaked into high-ticket Search: ${repairKeywordLeaks.map(row => `${row.Campaign} / ${row['Ad group']} / ${row.Keyword}`).join(', ')}`);
}

for (const [key, expectedUrl] of expectedAdGroupFinalUrls) {
  const [campaignName, adGroupName] = key.split('||');
  const keywordUrls = new Set(
    keywords
      .filter(row => row.Campaign === campaignName && row['Ad group'] === adGroupName)
      .map(row => row['Final URL']),
  );
  const adUrls = new Set(
    ads
      .filter(row => row.Campaign === campaignName && row['Ad group'] === adGroupName)
      .map(row => row['Final URL']),
  );

  if (!keywordUrls.has(expectedUrl) || keywordUrls.size !== 1) {
    fail(`${campaignName} / ${adGroupName} keyword Final URL mismatch: expected ${expectedUrl}, found ${[...keywordUrls].join(', ')}`);
  }
  if (!adUrls.has(expectedUrl) || adUrls.size !== 1) {
    fail(`${campaignName} / ${adGroupName} RSA Final URL mismatch: expected ${expectedUrl}, found ${[...adUrls].join(', ')}`);
  }
}

for (const campaign of campaigns) {
  const campaignLocations = locations.filter(row => row.Campaign === campaign.Campaign);
  const expectedLocations = campaign.Campaign === premiumGeoCampaign ? premiumGeoLocations : requiredLocations;
  for (const location of expectedLocations) {
    if (!campaignLocations.some(row => row.Location === location && row['Location option'] === 'Presence')) {
      fail(`${campaign.Campaign} is missing Presence target for ${location}`);
    }
  }
  const unexpectedLocations = campaign.Campaign === premiumGeoCampaign
    ? campaignLocations.filter(row => !premiumGeoLocations.includes(row.Location))
    : [];
  if (unexpectedLocations.length) {
    fail(`${campaign.Campaign} has unexpected location targets: ${unexpectedLocations.map(row => row.Location).join(', ')}`);
  }
}

const badCallAssets = callAssets.filter(row => row['Conversion action'] !== 'Qualified Call (Ads) - 60s');
if (badCallAssets.length) {
  fail(`Call assets must optimize to Qualified Call (Ads) - 60s: ${badCallAssets.map(row => row.Campaign).join(', ')}`);
}

const badCallPhoneAssets = callAssets.filter(row => row['Phone number'] !== requiredCallPhone);
if (badCallPhoneAssets.length) {
  fail(`Call assets must use ${requiredCallPhone}: ${badCallPhoneAssets.map(row => `${row.Campaign} (${row['Phone number']})`).join(', ')}`);
}

const badCallSchedules = callAssets.filter(row => row.Schedule !== requiredCallSchedule);
if (badCallSchedules.length) {
  fail(`Call assets must use schedule ${requiredCallSchedule}: ${badCallSchedules.map(row => `${row.Campaign} (${row.Schedule})`).join(', ')}`);
}

const pmaxExpansionProblems = pmaxAssets.filter(row => row['Final URL expansion'] !== 'Off');
if (pmaxExpansionProblems.length) {
  fail(`PMax Final URL expansion must be Off: ${pmaxExpansionProblems.map(row => row.Campaign).join(', ')}`);
}

const result = {
  ok: errors.length === 0,
  campaigns: campaigns.length,
  searchCampaigns: searchCampaigns.length,
  pmaxCampaigns: pmaxCampaigns.length,
  adGroups: adGroups.length,
  keywords: keywords.length,
  responsiveSearchAds: ads.length,
  totalDailyBudget,
  requiredFiles: requiredFiles.length,
  errors,
  warnings,
  outputs: {
    jsonOut,
    mdOut,
  },
  note: 'Full expansion budget is $235/day with Premium Geo included. Use README launch modes if spend cap is $150/day.',
};

function renderMarkdown(summary) {
  return [
    '# Google Ads Import Validation',
    '',
    `Date: ${stamp}`,
    `Status: ${summary.ok ? 'PASS' : 'FAIL'}`,
    `Required files: ${summary.requiredFiles}`,
    `Campaigns: ${summary.campaigns}`,
    `Search campaigns: ${summary.searchCampaigns}`,
    `PMax campaigns: ${summary.pmaxCampaigns}`,
    `Ad groups: ${summary.adGroups}`,
    `Keywords: ${summary.keywords}`,
    `Responsive search ads: ${summary.responsiveSearchAds}`,
    `Full expansion daily budget: $${summary.totalDailyBudget}/day`,
    `Errors: ${summary.errors.length}`,
    `Warnings: ${summary.warnings.length}`,
    '',
    '## Errors',
    '',
    ...(summary.errors.length ? summary.errors.map((item) => `- ${item}`) : ['- None']),
    '',
    '## Warnings',
    '',
    ...(summary.warnings.length ? summary.warnings.map((item) => `- ${item}`) : ['- None']),
    '',
    '## Launch Safety Notes',
    '',
    '- All import rows should remain paused until external Google Ads/GTM/call attribution and lead outcome gates are proven.',
    '- The validator confirms local CSV structure, negatives, URLs, call assets, location targets, and PMax final URL expansion safety.',
    `- ${summary.note}`,
    '',
  ].join('\n');
}

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(jsonOut, `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(mdOut, renderMarkdown(result));

console.log(JSON.stringify(result, null, 2));

if (!result.ok) {
  process.exit(1);
}
