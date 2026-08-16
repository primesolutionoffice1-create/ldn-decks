/**
 * LDN Decks post-audit verification.
 *
 * Read-only. Logs:
 * - active campaign budget and bidding strategy,
 * - network settings,
 * - final URLs by ad group,
 * - Brand campaign negatives, especially "free".
 *
 * Does not modify the account.
 */

const ACTIVE_CAMPAIGNS = [
  'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
  'SRCH | Premium Geo | Arlington Alexandria McLean | Leads',
  'SRCH | Composite | 3 Counties | Calls',
  'SRCH | Branded | 3 Counties | Calls',
];

function main() {
  Logger.log('=== LDN POST-AUDIT VERIFY 2026-08-16 ===');
  logCampaignSettings();
  logFinalUrls();
  logBrandNegatives();
  Logger.log('=== END VERIFY ===');
}

function logCampaignSettings() {
  Logger.log('--- Campaign Settings ---');
  ACTIVE_CAMPAIGNS.forEach((name) => {
    const campaign = getCampaign(name);
    if (!campaign) {
      Logger.log(`MISSING CAMPAIGN: ${name}`);
      return;
    }

    const bidding = campaign.bidding();
    const strategyType = safe(() => bidding.getStrategyType(), 'unknown');
    const budget = safe(() => campaign.getBudget().getAmount(), 'unknown');
    const networks = safe(() => campaign.getNetworks(), null);
    const search = networks ? networks.getTargetGoogleSearch() : 'unknown';
    const partners = networks ? networks.getTargetSearchNetwork() : 'unknown';
    const content = networks ? networks.getTargetContentNetwork() : 'unknown';

    Logger.log(`${name}`);
    Logger.log(`  Status: ${campaign.isEnabled() ? 'Enabled' : campaign.isPaused() ? 'Paused' : 'Other'}`);
    Logger.log(`  Budget: ${budget}`);
    Logger.log(`  Bid strategy: ${strategyType}`);
    Logger.log(`  Target Google Search: ${search}`);
    Logger.log(`  Search Partners: ${partners}`);
    Logger.log(`  Display/content network: ${content}`);
  });
}

function logFinalUrls() {
  Logger.log('--- Final URLs By Ad Group ---');
  const rows = {};
  const iterator = AdsApp.ads()
    .withCondition('Status = ENABLED')
    .get();

  while (iterator.hasNext()) {
    const ad = iterator.next();
    const adGroup = ad.getAdGroup();
    const campaign = adGroup.getCampaign();
    const campaignName = campaign.getName();
    if (ACTIVE_CAMPAIGNS.indexOf(campaignName) === -1) continue;

    const key = `${campaignName} :: ${adGroup.getName()}`;
    if (!rows[key]) rows[key] = {};
    const urls = safe(() => ad.urls().getFinalUrl(), '');
    if (urls) rows[key][urls] = true;
  }

  Object.keys(rows).sort().forEach((key) => {
    Logger.log(key);
    Object.keys(rows[key]).sort().forEach((url) => Logger.log(`  ${url}`));
  });
}

function logBrandNegatives() {
  Logger.log('--- Brand Campaign Negatives ---');
  const campaign = getCampaign('SRCH | Branded | 3 Counties | Calls');
  if (!campaign) {
    Logger.log('MISSING BRAND CAMPAIGN');
    return;
  }

  let count = 0;
  let freeFound = false;
  const iterator = campaign.negativeKeywords().get();
  while (iterator.hasNext()) {
    const kw = iterator.next();
    const text = kw.getText();
    count += 1;
    if (String(text).toLowerCase().includes('free')) freeFound = true;
    Logger.log(`  ${text}`);
  }

  Logger.log(`Brand negative count: ${count}`);
  Logger.log(`Contains free: ${freeFound}`);
}

function getCampaign(name) {
  const iterator = AdsApp.campaigns()
    .withCondition(`Name = '${escapeCondition(name)}'`)
    .get();
  return iterator.hasNext() ? iterator.next() : null;
}

function escapeCondition(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function safe(fn, fallback) {
  try {
    return fn();
  } catch (err) {
    return fallback;
  }
}
