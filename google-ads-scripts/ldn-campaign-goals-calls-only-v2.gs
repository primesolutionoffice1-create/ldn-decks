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
      continue;
    }
    if (goal.biddable === shouldBid) {
      alreadyCorrect++;
      Logger.log('Already correct: ' + row.campaign.name + ' | ' + goal.category + ' | ' + goal.origin + ' | biddable=' + goal.biddable);
      continue;
    }

    const operation = {
      campaignConversionGoalOperation: {
        update: {
          resourceName: goal.resourceName,
          biddable: shouldBid
        },
        updateMask: 'biddable'
      }
    };

    try {
      const results = AdsApp.mutateAll([operation], {partialFailure: false});
      if (results.length && results[0].isSuccessful()) {
        changed++;
        Logger.log('Updated: ' + row.campaign.name + ' | ' + goal.category + ' | ' + goal.origin + ' | biddable=' + shouldBid);
      } else {
        failed++;
        const messages = results.length ? results[0].getErrorMessages().join(' | ') : 'No result returned';
        Logger.log('FAILED: ' + row.campaign.name + ' | ' + goal.category + ' | ' + goal.origin + ' | ' + messages);
      }
    } catch (e) {
      failed++;
      Logger.log('FAILED: ' + row.campaign.name + ' | ' + goal.category + ' | ' + goal.origin + ' | ' + e);
    }
  }

  Logger.log('SUMMARY changed=' + changed + ' alreadyCorrect=' + alreadyCorrect + ' skippedUndefined=' + skippedUndefined + ' failed=' + failed);
}
