function main() {
  const campaignNames = [
    'SRCH | Composite | 3 Counties | Calls',
    'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    'SRCH | Branded | 3 Counties | Calls'
  ];
  const quoted = campaignNames.map(name => "'" + name.replace(/'/g, "\\'") + "'").join(', ');

  Logger.log('--- CAMPAIGNS ---');
  const campaigns = AdsApp.search(
    "SELECT campaign.id, campaign.name, campaign.status, campaign_budget.amount_micros, " +
      "campaign.network_settings.target_google_search, " +
      "campaign.network_settings.target_search_network, " +
      "campaign.network_settings.target_content_network, " +
      "campaign.geo_target_type_setting.positive_geo_target_type, " +
      "campaign.geo_target_type_setting.negative_geo_target_type " +
    "FROM campaign WHERE campaign.name IN (" + quoted + ") ORDER BY campaign.name"
  );
  while (campaigns.hasNext()) {
    const row = campaigns.next();
    Logger.log([
      row.campaign.name,
      'status=' + row.campaign.status,
      'budget=' + (row.campaignBudget.amountMicros / 1000000),
      'googleSearch=' + row.campaign.networkSettings.targetGoogleSearch,
      'searchPartners=' + row.campaign.networkSettings.targetSearchNetwork,
      'display=' + row.campaign.networkSettings.targetContentNetwork,
      'geoPositive=' + row.campaign.geoTargetTypeSetting.positiveGeoTargetType,
      'geoNegative=' + row.campaign.geoTargetTypeSetting.negativeGeoTargetType
    ].join(' | '));
  }

  Logger.log('--- CONVERSIONS ---');
  const conversions = AdsApp.search(
    "SELECT conversion_action.name, conversion_action.status, conversion_action.type, " +
      "conversion_action.primary_for_goal, conversion_action.include_in_conversions_metric, " +
      "conversion_action.phone_call_duration_seconds, conversion_action.counting_type, conversion_action.category " +
    "FROM conversion_action " +
    "WHERE conversion_action.status = ENABLED " +
    "ORDER BY conversion_action.name"
  );
  while (conversions.hasNext()) {
    const c = conversions.next().conversionAction;
    if (
      c.name === 'Qualified Call (Ads) - 60s' ||
      c.primaryForGoal === true
    ) {
      Logger.log([
        c.name,
        'type=' + c.type,
        'primary=' + c.primaryForGoal,
        'include=' + c.includeInConversionsMetric,
        'duration=' + c.phoneCallDurationSeconds,
        'counting=' + c.countingType,
        'category=' + c.category
      ].join(' | '));
    }
  }

  Logger.log('--- CUSTOMER GOALS ---');
  const goals = AdsApp.search(
    "SELECT customer_conversion_goal.category, customer_conversion_goal.origin, customer_conversion_goal.biddable " +
    "FROM customer_conversion_goal ORDER BY customer_conversion_goal.category, customer_conversion_goal.origin"
  );
  while (goals.hasNext()) {
    const g = goals.next().customerConversionGoal;
    if (g.biddable !== undefined) {
      Logger.log('category=' + g.category + ' | origin=' + g.origin + ' | biddable=' + g.biddable);
    }
  }

  Logger.log('--- CAMPAIGN GOAL CONFIG ---');
  const configs = AdsApp.search(
    "SELECT campaign.name, conversion_goal_campaign_config.goal_config_level, conversion_goal_campaign_config.custom_conversion_goal " +
    "FROM conversion_goal_campaign_config WHERE campaign.name IN (" + quoted + ") ORDER BY campaign.name"
  );
  while (configs.hasNext()) {
    const row = configs.next();
    Logger.log(row.campaign.name + ' | goalConfigLevel=' + row.conversionGoalCampaignConfig.goalConfigLevel + ' | customGoal=' + row.conversionGoalCampaignConfig.customConversionGoal);
  }
}
