function main() {
  const rows = AdsApp.search(
    "SELECT " +
      "customer_conversion_goal.resource_name, " +
      "customer_conversion_goal.category, " +
      "customer_conversion_goal.origin, " +
      "customer_conversion_goal.biddable " +
    "FROM customer_conversion_goal " +
    "ORDER BY customer_conversion_goal.category, customer_conversion_goal.origin"
  );

  while (rows.hasNext()) {
    const goal = rows.next().customerConversionGoal;
    Logger.log(
      [
        'category=' + goal.category,
        'origin=' + goal.origin,
        'biddable=' + goal.biddable,
        'resource=' + goal.resourceName
      ].join(' | ')
    );
  }
}
