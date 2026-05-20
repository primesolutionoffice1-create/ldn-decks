function main() {
  Logger.log('--- CAMPAIGN PERFORMANCE LAST_90_DAYS ---');
  let rows = AdsApp.search(
    "SELECT campaign.name, campaign.status, campaign.advertising_channel_type, " +
      "metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.cost_per_conversion, metrics.ctr, metrics.average_cpc " +
    "FROM campaign " +
    "WHERE segments.date BETWEEN '2026-02-12' AND '2026-05-13' " +
    "ORDER BY metrics.cost_micros DESC"
  );
  while (rows.hasNext()) {
    const r = rows.next();
    Logger.log([
      r.campaign.name,
      'status=' + r.campaign.status,
      'type=' + r.campaign.advertisingChannelType,
      'impr=' + r.metrics.impressions,
      'clicks=' + r.metrics.clicks,
      'cost=' + money(r.metrics.costMicros),
      'conv=' + r.metrics.conversions,
      'cpa=' + money(r.metrics.costPerConversion),
      'ctr=' + pct(r.metrics.ctr),
      'avgCpc=' + money(r.metrics.averageCpc)
    ].join(' | '));
  }

  Logger.log('--- AD GROUP PERFORMANCE LAST_90_DAYS ---');
  rows = AdsApp.search(
    "SELECT campaign.name, ad_group.name, ad_group.status, " +
      "metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.cost_per_conversion, metrics.ctr, metrics.average_cpc " +
    "FROM ad_group " +
    "WHERE segments.date BETWEEN '2026-02-12' AND '2026-05-13' " +
    "ORDER BY metrics.cost_micros DESC " +
    "LIMIT 80"
  );
  while (rows.hasNext()) {
    const r = rows.next();
    Logger.log([
      r.campaign.name + ' / ' + r.adGroup.name,
      'status=' + r.adGroup.status,
      'impr=' + r.metrics.impressions,
      'clicks=' + r.metrics.clicks,
      'cost=' + money(r.metrics.costMicros),
      'conv=' + r.metrics.conversions,
      'cpa=' + money(r.metrics.costPerConversion),
      'ctr=' + pct(r.metrics.ctr),
      'avgCpc=' + money(r.metrics.averageCpc)
    ].join(' | '));
  }

  Logger.log('--- SEARCH TERMS LAST_90_DAYS TOP COST ---');
  rows = AdsApp.search(
    "SELECT campaign.name, ad_group.name, search_term_view.search_term, " +
      "metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.cost_per_conversion, metrics.ctr, metrics.average_cpc " +
    "FROM search_term_view " +
    "WHERE segments.date BETWEEN '2026-02-12' AND '2026-05-13' AND metrics.impressions > 0 " +
    "ORDER BY metrics.cost_micros DESC " +
    "LIMIT 80"
  );
  while (rows.hasNext()) {
    const r = rows.next();
    Logger.log([
      r.campaign.name + ' / ' + r.adGroup.name,
      'term=' + r.searchTermView.searchTerm,
      'impr=' + r.metrics.impressions,
      'clicks=' + r.metrics.clicks,
      'cost=' + money(r.metrics.costMicros),
      'conv=' + r.metrics.conversions,
      'cpa=' + money(r.metrics.costPerConversion),
      'ctr=' + pct(r.metrics.ctr),
      'avgCpc=' + money(r.metrics.averageCpc)
    ].join(' | '));
  }

  Logger.log('--- KEYWORDS LAST_90_DAYS TOP COST ---');
  rows = AdsApp.search(
    "SELECT campaign.name, ad_group.name, ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, ad_group_criterion.status, " +
      "metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.cost_per_conversion, metrics.ctr, metrics.average_cpc " +
    "FROM keyword_view " +
    "WHERE segments.date BETWEEN '2026-02-12' AND '2026-05-13' AND metrics.impressions > 0 " +
    "ORDER BY metrics.cost_micros DESC " +
    "LIMIT 80"
  );
  while (rows.hasNext()) {
    const r = rows.next();
    Logger.log([
      r.campaign.name + ' / ' + r.adGroup.name,
      'kw=' + r.adGroupCriterion.keyword.text,
      'match=' + r.adGroupCriterion.keyword.matchType,
      'status=' + r.adGroupCriterion.status,
      'impr=' + r.metrics.impressions,
      'clicks=' + r.metrics.clicks,
      'cost=' + money(r.metrics.costMicros),
      'conv=' + r.metrics.conversions,
      'cpa=' + money(r.metrics.costPerConversion),
      'ctr=' + pct(r.metrics.ctr),
      'avgCpc=' + money(r.metrics.averageCpc)
    ].join(' | '));
  }
}

function money(micros) {
  if (micros === null || micros === undefined) return 'n/a';
  return '$' + (Number(micros) / 1000000).toFixed(2);
}

function pct(value) {
  if (value === null || value === undefined) return 'n/a';
  return (Number(value) * 100).toFixed(2) + '%';
}
