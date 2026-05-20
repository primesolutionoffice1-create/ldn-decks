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
      "conversion_goal_campaign_config.resource_name, " +
      "conversion_goal_campaign_config.custom_conversion_goal, " +
      "conversion_goal_campaign_config.goal_config_level " +
    "FROM conversion_goal_campaign_config " +
    "WHERE campaign.name IN (" + quoted + ") " +
    "ORDER BY campaign.name"
  );

  while (rows.hasNext()) {
    const row = rows.next();
    const config = row.conversionGoalCampaignConfig;
    Logger.log(
      [
        row.campaign.name,
        'campaignId=' + row.campaign.id,
        'goalConfigLevel=' + config.goalConfigLevel,
        'customGoal=' + config.customConversionGoal,
        'resource=' + config.resourceName
      ].join(' | ')
    );
  }
}
