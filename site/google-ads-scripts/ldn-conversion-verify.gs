function main() {
  const rows = AdsApp.search(
    "SELECT " +
      "conversion_action.name, " +
      "conversion_action.status, " +
      "conversion_action.type, " +
      "conversion_action.primary_for_goal, " +
      "conversion_action.include_in_conversions_metric, " +
      "conversion_action.phone_call_duration_seconds, " +
      "conversion_action.counting_type, " +
      "conversion_action.category " +
    "FROM conversion_action " +
    "ORDER BY conversion_action.name"
  );

  let enabledPrimary = 0;
  let enabledSecondary = 0;
  while (rows.hasNext()) {
    const c = rows.next().conversionAction;
    if (c.status === 'ENABLED' && c.primaryForGoal) enabledPrimary++;
    if (c.status === 'ENABLED' && !c.primaryForGoal) enabledSecondary++;
    Logger.log(
      [
        c.name,
        'status=' + c.status,
        'type=' + c.type,
        'primary=' + c.primaryForGoal,
        'include=' + c.includeInConversionsMetric,
        'duration=' + c.phoneCallDurationSeconds,
        'counting=' + c.countingType,
        'category=' + c.category
      ].join(' | ')
    );
  }
  Logger.log('SUMMARY enabledPrimary=' + enabledPrimary + ' enabledSecondary=' + enabledSecondary);
}
