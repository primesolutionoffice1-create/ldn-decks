function main() {
  const rows = AdsApp.search(
    "SELECT " +
      "campaign.name, " +
      "campaign.status, " +
      "ad_group.name, " +
      "ad_group.status, " +
      "ad_group_ad.status, " +
      "ad_group_ad.ad.id, " +
      "ad_group_ad.ad.type, " +
      "ad_group_ad.policy_summary.approval_status, " +
      "ad_group_ad.policy_summary.review_status, " +
      "ad_group_ad.policy_summary.policy_topic_entries " +
    "FROM ad_group_ad " +
    "WHERE campaign.status = ENABLED " +
      "AND ad_group.status = ENABLED " +
      "AND ad_group_ad.status = ENABLED " +
    "ORDER BY campaign.name, ad_group.name, ad_group_ad.ad.id"
  );

  let total = 0;
  let nonApproved = 0;
  while (rows.hasNext()) {
    const r = rows.next();
    total++;
    const approval = r.adGroupAd.policySummary.approvalStatus;
    const review = r.adGroupAd.policySummary.reviewStatus;
    if (approval !== 'APPROVED') {
      nonApproved++;
      Logger.log([
        r.campaign.name,
        r.adGroup.name,
        'adId=' + r.adGroupAd.ad.id,
        'type=' + r.adGroupAd.ad.type,
        'status=' + r.adGroupAd.status,
        'approval=' + approval,
        'review=' + review,
        'topics=' + JSON.stringify(r.adGroupAd.policySummary.policyTopicEntries)
      ].join(' | '));
    }
  }

  Logger.log('ACTIVE ADS AUDITED=' + total + ' | ACTIVE NON-APPROVED=' + nonApproved);
}
