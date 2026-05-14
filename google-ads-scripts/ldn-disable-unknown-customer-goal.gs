function main() {
  const rows = AdsApp.search(
    "SELECT customer_conversion_goal.resource_name, customer_conversion_goal.category, " +
      "customer_conversion_goal.origin, customer_conversion_goal.biddable " +
    "FROM customer_conversion_goal " +
    "WHERE customer_conversion_goal.category = UNKNOWN AND customer_conversion_goal.origin = GOOGLE_HOSTED"
  );

  if (!rows.hasNext()) {
    Logger.log('No UNKNOWN / GOOGLE_HOSTED customer goal found.');
    return;
  }

  const goal = rows.next().customerConversionGoal;
  Logger.log('Found UNKNOWN goal: ' + goal.resourceName + ' | biddable=' + goal.biddable);
  if (goal.biddable === false) {
    Logger.log('Already disabled.');
    return;
  }

  const results = AdsApp.mutateAll([
    {
      customerConversionGoalOperation: {
        update: {
          resourceName: goal.resourceName,
          biddable: false
        },
        updateMask: 'biddable'
      }
    }
  ], {partialFailure: false});

  if (results.length && results[0].isSuccessful()) {
    Logger.log('Disabled UNKNOWN / GOOGLE_HOSTED customer goal.');
  } else {
    const messages = results.length ? results[0].getErrorMessages().join(' | ') : 'No result returned';
    Logger.log('Could not disable UNKNOWN / GOOGLE_HOSTED customer goal: ' + messages);
  }
}
