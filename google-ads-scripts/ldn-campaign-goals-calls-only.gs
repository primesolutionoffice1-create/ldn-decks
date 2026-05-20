function main() {
  const campaignNames = [
    'SRCH | Composite | 3 Counties | Calls',
    'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    'SRCH | Branded | 3 Counties | Calls'
  ];
  const quoted = campaignNames.map(name => "'" + name.replace(/'/g, "\\'") + "'").join(', ');
  const rows = AdsApp.search(
    "SELECT " +
      "campaign.name, " +
      "campaign_conversion_goal.resource_name, " +
      "campaign_conversion_goal.category, " +
      "campaign_conversion_goal.origin, " +
      "campaign_conversion_goal.biddable " +
    "FROM campaign_conversion_goal " +
    "WHERE campaign.name IN (" + quoted + ")"
  );

  let changed = 0;
  let alreadyCorrect = 0;
  let skippedUndefined = 0;
  let failed = 0;

  while (rows.hasNext()) {
    const row = rows.next();
    const goal = row.campaignConversionGoal;
    const shouldBid =
      goal.category === 'PHONE_CALL_LEAD' &&
      goal.origin === 'CALL_FROM_ADS';

    if (goal.biddable === undefined) {
      skippedUndefined++;
      Logger.log('Skipped non-biddable-capable goal: ' + row.campaign.name + ' | ' + goal.category + ' | ' + goal.origin);
      continue;
    }
    if (goal.biddable === shouldBid) {
      alreadyCorrect++;
      Logger.log('Already correct: ' + row.campaign.name + ' | ' + goal.category + ' | ' + goal.origin + ' | biddable=' + goal.biddable);
      continue;
    }

    const result = AdsApp.mutate({
      campaignConversionGoalOperation: {
        update: {
          resourceName: goal.resourceName,
          biddable: shouldBid
        },
        updateMask: 'biddable'
      }
    });

    if (result.isSuccessful()) {
      changed++;
      Logger.log('Updated: ' + row.campaign.name + ' | ' + goal.category + ' | ' + goal.origin + ' | biddable=' + shouldBid);
    } else {
      failed++;
      Logger.log('FAILED: ' + row.campaign.name + ' | ' + goal.category + ' | ' + goal.origin + ' | ' + result.getErrorMessages().join(' | '));
    }
  }

  Logger.log('SUMMARY changed=' + changed + ' alreadyCorrect=' + alreadyCorrect + ' skippedUndefined=' + skippedUndefined + ' failed=' + failed);
}
