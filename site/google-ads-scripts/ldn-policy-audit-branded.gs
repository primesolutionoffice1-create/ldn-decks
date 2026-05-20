function main() {
  const rows = AdsApp.search(
    "SELECT " +
      "campaign.name, " +
      "ad_group.name, " +
      "ad_group_ad.status, " +
      "ad_group_ad.ad.id, " +
      "ad_group_ad.ad.type, " +
      "ad_group_ad.policy_summary.approval_status, " +
      "ad_group_ad.policy_summary.review_status " +
    "FROM ad_group_ad " +
    "WHERE campaign.name = 'SRCH | Branded | 3 Counties | Calls' " +
    "ORDER BY ad_group.name, ad_group_ad.ad.id"
  );

  while (rows.hasNext()) {
    const r = rows.next();
    Logger.log([
      r.campaign.name,
      r.adGroup.name,
      'adId=' + r.adGroupAd.ad.id,
      'status=' + r.adGroupAd.status,
      'type=' + r.adGroupAd.ad.type,
      'approval=' + r.adGroupAd.policySummary.approvalStatus,
      'review=' + r.adGroupAd.policySummary.reviewStatus
    ].join(' | '));
  }
}
