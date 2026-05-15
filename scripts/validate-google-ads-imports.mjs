import fs from 'node:fs';
import path from 'node:path';

const importDir = path.resolve('google-ads-import');
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
  'materials',
  'lumber',
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

const requiredLocations = [
  'Loudoun County, Virginia, United States',
  'Fairfax County, Virginia, United States',
  'Prince William County, Virginia, United States',
];

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
    throw new Error(`Missing required import file: ${fileName}`);
  }

  const rows = parseCsv(fs.readFileSync(filePath, 'utf8'));
  const [headers, ...body] = rows;
  return body.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ''])));
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}

function fail(message) {
  throw new Error(message);
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

if (searchCampaigns.length !== 4 || pmaxCampaigns.length !== 1) {
  fail(`Expected 4 Search campaigns and 1 PMax campaign, found ${searchCampaigns.length} Search and ${pmaxCampaigns.length} PMax`);
}

const totalDailyBudget = campaigns.reduce((sum, row) => sum + Number(row.Budget || 0), 0);
if (totalDailyBudget !== 205) {
  fail(`Expected full expansion budget to total $205/day, found $${totalDailyBudget}/day`);
}

const nonSearchNetworkProblems = searchCampaigns.filter(row => row.Networks !== 'Google search; Search partners: off; Display network: off');
if (nonSearchNetworkProblems.length) {
  fail(`Search network settings are not launch-safe for: ${nonSearchNetworkProblems.map(row => row.Campaign).join(', ')}`);
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

for (const campaign of campaigns) {
  const campaignLocations = locations.filter(row => row.Campaign === campaign.Campaign);
  for (const location of requiredLocations) {
    if (!campaignLocations.some(row => row.Location === location && row['Location option'] === 'Presence')) {
      fail(`${campaign.Campaign} is missing Presence target for ${location}`);
    }
  }
}

const badCallAssets = callAssets.filter(row => row['Conversion action'] !== 'Qualified Call (Ads) - 60s');
if (badCallAssets.length) {
  fail(`Call assets must optimize to Qualified Call (Ads) - 60s: ${badCallAssets.map(row => row.Campaign).join(', ')}`);
}

const pmaxExpansionProblems = pmaxAssets.filter(row => row['Final URL expansion'] !== 'Off');
if (pmaxExpansionProblems.length) {
  fail(`PMax Final URL expansion must be Off: ${pmaxExpansionProblems.map(row => row.Campaign).join(', ')}`);
}

console.log(JSON.stringify({
  ok: true,
  campaigns: campaigns.length,
  searchCampaigns: searchCampaigns.length,
  pmaxCampaigns: pmaxCampaigns.length,
  adGroups: adGroups.length,
  keywords: keywords.length,
  responsiveSearchAds: ads.length,
  totalDailyBudget,
  note: 'Full expansion budget is $205/day. Use README launch modes if spend cap is $150/day.',
}, null, 2));
