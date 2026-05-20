function main() {
  const rows = AdsApp.search(
    "SELECT campaign.name, campaign.status, campaign.advertising_channel_type, campaign_budget.amount_micros " +
    "FROM campaign " +
    "WHERE campaign.status != REMOVED " +
    "ORDER BY campaign.status, campaign.name"
  );

  while (rows.hasNext()) {
    const row = rows.next();
    Logger.log([
      row.campaign.name,
      'status=' + row.campaign.status,
      'type=' + row.campaign.advertisingChannelType,
      'budget=' + (row.campaignBudget.amountMicros / 1000000)
    ].join(' | '));
  }
}
