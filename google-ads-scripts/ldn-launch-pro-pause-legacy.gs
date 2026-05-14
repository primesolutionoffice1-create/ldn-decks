function main() {
  const legacyToPause = [
    'loudoun decks',
    'Premium Composite Decks',
    'Fairfax-Search-Search - Deck Leads - VA - May 2025',
    'Deck Repair - Loudoun County',
    'Pmax - Dec4',
    'PMAX cu remarketing',
    'Loudoun Decks - Lead Gen - Demand Gen 2026'
  ];

  const proToEnable = [
    'SRCH | Composite | 3 Counties | Calls',
    'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    'SRCH | Branded | 3 Counties | Calls'
  ];

  legacyToPause.forEach(function(name) {
    const iterator = AdsApp.campaigns()
      .withCondition("campaign.name = '" + name.replace(/'/g, "\\'") + "'")
      .get();
    if (!iterator.hasNext()) {
      Logger.log('Legacy not found: ' + name);
      return;
    }
    while (iterator.hasNext()) {
      const campaign = iterator.next();
      campaign.pause();
      Logger.log('PAUSED legacy: ' + name);
    }
  });

  proToEnable.forEach(function(name) {
    const iterator = AdsApp.campaigns()
      .withCondition("campaign.name = '" + name.replace(/'/g, "\\'") + "'")
      .get();
    if (!iterator.hasNext()) {
      Logger.log('PRO not found: ' + name);
      return;
    }
    while (iterator.hasNext()) {
      const campaign = iterator.next();
      campaign.enable();
      Logger.log('ENABLED PRO: ' + name + ' | budget=' + campaign.getBudget().getAmount());
    }
  });
}
