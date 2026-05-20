function main() {
  const budgets = {
    'SRCH | Composite | 3 Counties | Calls': 90,
    'SRCH | Replacement + Resurfacing | 3 Counties | Calls': 45,
    'SRCH | Branded | 3 Counties | Calls': 15
  };

  Object.keys(budgets).forEach(function(campaignName) {
    const iterator = AdsApp.campaigns()
      .withCondition("campaign.name = '" + campaignName.replace(/'/g, "\\'") + "'")
      .get();

    if (!iterator.hasNext()) {
      Logger.log('Campaign not found: ' + campaignName);
      return;
    }

    const campaign = iterator.next();
    campaign.getBudget().setAmount(budgets[campaignName]);
    Logger.log(campaignName + ' | budget=' + campaign.getBudget().getAmount());
  });
}
