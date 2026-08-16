/**
 * One-off fix for the rejected >80-character negative from the close-variant
 * containment run.
 *
 * Safe scope:
 * - Adds one campaign-level negative phrase keyword only.
 * - Does not change bids, budgets, ads, campaigns, or conversion settings.
 */

const DRY_RUN = false;
const CAMPAIGN_NAME = 'SRCH | Composite | 3 Counties | Calls';
const NEGATIVE_KEYWORD = '"trex enhance basics"';

function main() {
  const campaignIterator = AdsApp.campaigns()
    .withCondition(`Name = '${escapeCondition(CAMPAIGN_NAME)}'`)
    .get();

  if (!campaignIterator.hasNext()) {
    Logger.log(`MISSING CAMPAIGN: ${CAMPAIGN_NAME}`);
    return;
  }

  const campaign = campaignIterator.next();
  const existing = campaign.negativeKeywords()
    .withCondition(`Text = '${escapeCondition(NEGATIVE_KEYWORD)}'`)
    .get();

  if (existing.hasNext()) {
    Logger.log(`EXISTS campaign negative ${CAMPAIGN_NAME}: ${NEGATIVE_KEYWORD}`);
    return;
  }

  Logger.log(`${DRY_RUN ? 'DRY RUN' : 'ADD'} campaign negative ${CAMPAIGN_NAME}: ${NEGATIVE_KEYWORD}`);
  if (!DRY_RUN) campaign.createNegativeKeyword(NEGATIVE_KEYWORD);
  Logger.log(`Done. Added: ${DRY_RUN ? 0 : 1}. DRY_RUN=${DRY_RUN}`);
}

function escapeCondition(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
