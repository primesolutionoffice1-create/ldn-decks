function main() {
  const rows = AdsApp.search(
    "SELECT " +
      "ad_group.name, " +
      "ad_group_ad.ad.id, " +
      "ad_group_ad.policy_summary.approval_status, " +
      "ad_group_ad.policy_summary.policy_topic_entries " +
    "FROM ad_group_ad " +
    "WHERE campaign.name = 'SRCH | Branded | 3 Counties | Calls' " +
      "AND ad_group_ad.policy_summary.approval_status = APPROVED_LIMITED"
  );

  while (rows.hasNext()) {
    const r = rows.next();
    const entries = r.adGroupAd.policySummary.policyTopicEntries || [];
    Logger.log(r.adGroup.name + ' | adId=' + r.adGroupAd.ad.id + ' | approval=' + r.adGroupAd.policySummary.approvalStatus);
    Logger.log(JSON.stringify(entries));
  }
}
