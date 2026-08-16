/**
 * LDN Decks close-variant containment cleanup.
 *
 * Purpose:
 * - Reduce competitor, material-only, and product-line-only close variants.
 * - Improve routing so Trex/TimberTech/AZEK/composite queries do not fall into
 *   generic Composite Builder or Deck Resurfacing ad groups.
 *
 * Safe scope:
 * - Adds negative keywords only.
 * - Does not change bids, budgets, ads, campaigns, or conversion settings.
 */

const DRY_RUN = false;

const CAMPAIGN_NEGATIVES = [
  {
    campaign: 'SRCH | Composite | 3 Counties | Calls',
    exact: [
      'glk custom decking',
      'sundeck medics',
      'valer deck and patio',
      'deck man reviews',
      'armor fence deck & patio nova',
      'veterans choice deck and fence',
      'nova decks and exteriors reviews',
      'trex board',
      'trex boards',
      'trex deck panels',
      'trex enhance',
      'trex enhance 16 ft',
      'trex enhance basics 1 in x 6 in x 16 ft clam shell grooved scalloped composite deck board',
      'trex enhance naturals',
      'trex toasted sand decking',
      'toasted sand trex',
      'trex rocky harbor decking',
      'trex honey grove',
      'honey grove trex',
      'trex coastal bluff',
      'trex select pebble gray',
      'trex select millstone',
      'timbertech prime',
      'timbertech terrain collection',
      'timbertech mahogany',
      'timbertech coconut husk',
      'timbertech composite boards',
      'fiberon concordia horizon',
      'fiberon decking',
      'deckorators decking',
      'wpc decking price',
    ],
    phrase: [],
  },
  {
    campaign: 'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    exact: [
      'glk custom decking',
      'sundeck medics',
      'valer deck and patio',
      'deck man reviews',
      'armor fence deck & patio nova',
      'veterans choice deck and fence',
      'nova decks and exteriors reviews',
    ],
    phrase: [],
  },
  {
    campaign: 'SRCH | Premium Geo | Arlington Alexandria McLean | Leads',
    exact: [
      'glk custom decking',
      'sundeck medics',
      'valer deck and patio',
      'deck man reviews',
      'armor fence deck & patio nova',
      'veterans choice deck and fence',
      'nova decks and exteriors reviews',
      'deck builders manassas va',
    ],
    phrase: ['affordable', 'cheap', 'amish'],
  },
];

const AD_GROUP_NEGATIVES = [
  {
    campaign: 'SRCH | Composite | 3 Counties | Calls',
    adGroup: 'Composite Deck Builder',
    phrase: ['trex', 'timbertech', 'azek'],
    exact: [],
  },
  {
    campaign: 'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    adGroup: 'Deck Resurfacing',
    phrase: ['trex', 'timbertech', 'azek', 'composite'],
    exact: [],
  },
];

function main() {
  let added = 0;
  let skipped = 0;

  CAMPAIGN_NEGATIVES.forEach((entry) => {
    const campaign = getCampaign(entry.campaign);
    if (!campaign) {
      Logger.log(`MISSING CAMPAIGN: ${entry.campaign}`);
      return;
    }

    entry.exact.forEach((term) => {
      const keyword = `[${term}]`;
      if (addCampaignNegative(campaign, keyword, entry.campaign)) added += 1;
      else skipped += 1;
    });

    entry.phrase.forEach((term) => {
      const keyword = `"${term}"`;
      if (addCampaignNegative(campaign, keyword, entry.campaign)) added += 1;
      else skipped += 1;
    });
  });

  AD_GROUP_NEGATIVES.forEach((entry) => {
    const adGroup = getAdGroup(entry.campaign, entry.adGroup);
    if (!adGroup) {
      Logger.log(`MISSING AD GROUP: ${entry.campaign} / ${entry.adGroup}`);
      return;
    }

    entry.exact.forEach((term) => {
      const keyword = `[${term}]`;
      if (addAdGroupNegative(adGroup, keyword, `${entry.campaign} / ${entry.adGroup}`)) added += 1;
      else skipped += 1;
    });

    entry.phrase.forEach((term) => {
      const keyword = `"${term}"`;
      if (addAdGroupNegative(adGroup, keyword, `${entry.campaign} / ${entry.adGroup}`)) added += 1;
      else skipped += 1;
    });
  });

  Logger.log(`Done. Added: ${added}. Skipped existing or dry-run: ${skipped}. DRY_RUN=${DRY_RUN}`);
}

function getCampaign(name) {
  const iterator = AdsApp.campaigns()
    .withCondition(`Name = '${escapeCondition(name)}'`)
    .get();
  return iterator.hasNext() ? iterator.next() : null;
}

function getAdGroup(campaignName, adGroupName) {
  const iterator = AdsApp.adGroups()
    .withCondition(`CampaignName = '${escapeCondition(campaignName)}'`)
    .withCondition(`Name = '${escapeCondition(adGroupName)}'`)
    .get();
  return iterator.hasNext() ? iterator.next() : null;
}

function addCampaignNegative(campaign, keyword, label) {
  if (campaignNegativeExists(campaign, keyword)) {
    Logger.log(`EXISTS campaign negative ${label}: ${keyword}`);
    return false;
  }
  Logger.log(`${DRY_RUN ? 'DRY RUN' : 'ADD'} campaign negative ${label}: ${keyword}`);
  if (!DRY_RUN) campaign.createNegativeKeyword(keyword);
  return true;
}

function addAdGroupNegative(adGroup, keyword, label) {
  if (adGroupNegativeExists(adGroup, keyword)) {
    Logger.log(`EXISTS ad group negative ${label}: ${keyword}`);
    return false;
  }
  Logger.log(`${DRY_RUN ? 'DRY RUN' : 'ADD'} ad group negative ${label}: ${keyword}`);
  if (!DRY_RUN) adGroup.createNegativeKeyword(keyword);
  return true;
}

function campaignNegativeExists(campaign, keyword) {
  const iterator = campaign.negativeKeywords()
    .withCondition(`Text = '${escapeCondition(keyword)}'`)
    .get();
  return iterator.hasNext();
}

function adGroupNegativeExists(adGroup, keyword) {
  const iterator = adGroup.negativeKeywords()
    .withCondition(`Text = '${escapeCondition(keyword)}'`)
    .get();
  return iterator.hasNext();
}

function escapeCondition(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
