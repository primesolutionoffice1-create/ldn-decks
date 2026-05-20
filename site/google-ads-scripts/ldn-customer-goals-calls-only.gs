function main() {
  const rows = AdsApp.search(
    "SELECT " +
      "customer_conversion_goal.resource_name, " +
      "customer_conversion_goal.category, " +
      "customer_conversion_goal.origin, " +
      "customer_conversion_goal.biddable " +
    "FROM customer_conversion_goal"
  );

  let changed = 0;
  let alreadyCorrect = 0;
  let skipped = 0;
  let failed = 0;

  while (rows.hasNext()) {
    const goal = rows.next().customerConversionGoal;
    const shouldBid =
      goal.category === 'PHONE_CALL_LEAD' &&
      goal.origin === 'CALL_FROM_ADS';

    if (goal.biddable === undefined || goal.category === 'UNKNOWN') {
      skipped++;
      Logger.log('Skipped: ' + goal.category + ' | ' + goal.origin + ' | biddable=' + goal.biddable);
      continue;
    }

    if (goal.biddable === shouldBid) {
      alreadyCorrect++;
      Logger.log('Already correct: ' + goal.category + ' | ' + goal.origin + ' | biddable=' + goal.biddable);
      continue;
    }

    const operation = {
      customerConversionGoalOperation: {
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
        Logger.log('Updated: ' + goal.category + ' | ' + goal.origin + ' | biddable=' + shouldBid);
      } else {
        failed++;
        const messages = results.length ? results[0].getErrorMessages().join(' | ') : 'No result returned';
        Logger.log('FAILED: ' + goal.category + ' | ' + goal.origin + ' | ' + messages);
      }
    } catch (e) {
      failed++;
      Logger.log('FAILED: ' + goal.category + ' | ' + goal.origin + ' | ' + e);
    }
  }

  Logger.log('SUMMARY changed=' + changed + ' alreadyCorrect=' + alreadyCorrect + ' skipped=' + skipped + ' failed=' + failed);
}
