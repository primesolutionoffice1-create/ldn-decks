function main() {
  const campaignNames = [
    'SRCH | Composite | 3 Counties | Calls',
    'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    'SRCH | Branded | 3 Counties | Calls'
  ];
  const quoted = campaignNames.map(name => "'" + name.replace(/'/g, "\\'") + "'").join(', ');
  const rows = AdsApp.search(
    "SELECT " +
      "campaign.id, " +
      "campaign.name, " +
      "campaign_conversion_goal.resource_name, " +
      "campaign_conversion_goal.category, " +
      "campaign_conversion_goal.origin, " +
      "campaign_conversion_goal.biddable " +
    "FROM campaign_conversion_goal " +
    "WHERE campaign.name IN (" + quoted + ") " +
    "ORDER BY campaign.name, campaign_conversion_goal.category, campaign_conversion_goal.origin"
  );

  while (rows.hasNext()) {
    const row = rows.next();
    const goal = row.campaignConversionGoal;
    Logger.log(
      [
        row.campaign.name,
        'campaignId=' + row.campaign.id,
        'category=' + goal.category,
        'origin=' + goal.origin,
        'biddable=' + goal.biddable,
        'resource=' + goal.resourceName
      ].join(' | ')
    );
  }
}
