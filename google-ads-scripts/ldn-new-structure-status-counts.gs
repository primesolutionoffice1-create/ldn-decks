function main() {
  const campaignNames = [
    'SRCH | Composite | 3 Counties | Calls',
    'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    'SRCH | Branded | 3 Counties | Calls'
  ];
  const quoted = campaignNames.map(name => "'" + name.replace(/'/g, "\\'") + "'").join(', ');

  countRows('ADGROUPS', "SELECT campaign.name, ad_group.status FROM ad_group WHERE campaign.name IN (" + quoted + ")", function(r) {
    return r.campaign.name + ' | adGroup=' + r.adGroup.status;
  });

  countRows('KEYWORDS', "SELECT campaign.name, ad_group_criterion.status FROM keyword_view WHERE campaign.name IN (" + quoted + ")", function(r) {
    return r.campaign.name + ' | keyword=' + r.adGroupCriterion.status;
  });

  countRows('ADS', "SELECT campaign.name, ad_group_ad.status FROM ad_group_ad WHERE campaign.name IN (" + quoted + ")", function(r) {
    return r.campaign.name + ' | ad=' + r.adGroupAd.status;
  });
}

function countRows(label, query, keyFn) {
  const rows = AdsApp.search(query);
  const counts = {};
  while (rows.hasNext()) {
    const key = keyFn(rows.next());
    counts[key] = (counts[key] || 0) + 1;
  }
  Logger.log('--- ' + label + ' ---');
  Object.keys(counts).sort().forEach(function(key) {
    Logger.log(key + ' | count=' + counts[key]);
  });
}
