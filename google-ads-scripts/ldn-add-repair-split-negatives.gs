function main() {
  const config = {
    'SRCH | Composite | 3 Counties | Calls': [
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
      'stair repair'
    ],
    'SRCH | Replacement + Resurfacing | 3 Counties | Calls': [
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
      'small deck repair',
      'minor deck repair',
      'deck repair cost'
    ]
  };

  Object.keys(config).forEach(function(campaignName) {
    const iterator = AdsApp.campaigns()
      .withCondition("campaign.name = '" + campaignName.replace(/'/g, "\\'") + "'")
      .get();

    if (!iterator.hasNext()) {
      Logger.log('Campaign not found: ' + campaignName);
      return;
    }

    const campaign = iterator.next();
    const existing = {};
    const negatives = campaign.negativeKeywords().get();
    while (negatives.hasNext()) {
      existing[negatives.next().getText().toLowerCase()] = true;
    }

    let added = 0;
    let skipped = 0;
    config[campaignName].forEach(function(keyword) {
      if (existing[keyword.toLowerCase()]) {
        skipped++;
        return;
      }
      campaign.createNegativeKeyword(keyword);
      added++;
    });
    Logger.log(campaignName + ' | added=' + added + ' | skippedExisting=' + skipped);
  });
}
