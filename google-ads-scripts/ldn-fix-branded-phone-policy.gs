function main() {
  const fixes = [
    {
      adGroup: 'Brand Exact',
      limitedAdId: '808840970585',
      finalUrl: 'https://www.ldndecks.com/contact/',
      headlines: [
        'LDN Decks',
        'Loudoun Decks',
        'Call LDN Decks Today',
        '5.0 Rated Deck Builder',
        'Free Deck Estimate',
        'Trex Platinum Partner',
        'Northern VA Deck Builder',
        'Licensed & Insured',
        'Composite Deck Experts',
        'Contact LDN Decks'
      ],
      descriptions: [
        'Contact LDN Decks for composite, replacement, resurfacing, and outdoor living projects.',
        'Speak with a local Northern Virginia contractor about scope, timeline, and budget.',
        'Serving Loudoun, Fairfax, and Prince William County homeowners.',
        'Free estimates for serious deck projects from a 5.0 rated local team.'
      ]
    },
    {
      adGroup: 'Brand Phrase',
      limitedAdId: '808840970594',
      finalUrl: 'https://www.ldndecks.com/contact/',
      headlines: [
        'Loudoun Decks Contact',
        'LDN Decks Estimate',
        'Call LDN Decks Today',
        'Deck Builder Near You',
        'Projects From $15k+',
        'Permits & HOA Handled',
        'Trex Platinum Partner',
        'TimberTech Certified',
        'Schedule Estimate',
        'Trusted Local Builder'
      ],
      descriptions: [
        'Speak with LDN Decks about your composite deck, replacement, or resurfacing project.',
        'Get help with design, materials, permits, HOA coordination, and build planning.',
        'Premium composite deck and replacement projects across Northern Virginia.',
        'Use the official LDN Decks site to request your free estimate.'
      ]
    }
  ];

  fixes.forEach(function(fix) {
    const adGroupIterator = AdsApp.adGroups()
      .withCondition("campaign.name = 'SRCH | Branded | 3 Counties | Calls'")
      .withCondition("ad_group.name = '" + fix.adGroup.replace(/'/g, "\\'") + "'")
      .get();

    if (!adGroupIterator.hasNext()) {
      Logger.log('Ad group not found: ' + fix.adGroup);
      return;
    }

    const adGroup = adGroupIterator.next();
    adGroup.newAd().responsiveSearchAdBuilder()
      .withFinalUrl(fix.finalUrl)
      .withHeadlines(fix.headlines)
      .withDescriptions(fix.descriptions)
      .build();

    const ads = adGroup.ads().get();
    let paused = 0;
    while (ads.hasNext()) {
      const ad = ads.next();
      if (String(ad.getId()) === fix.limitedAdId) {
        ad.pause();
        paused++;
      }
    }

    Logger.log('Created clean RSA and paused limited ad in ' + fix.adGroup + ' | paused=' + paused);
  });
}
