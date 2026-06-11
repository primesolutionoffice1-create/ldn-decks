const DEFAULT_TIME_ZONE = 'America/New_York';

export function localDateStamp(date = new Date(), timeZone = DEFAULT_TIME_ZONE) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function localIsoTimestamp(date = new Date()) {
  return date.toISOString();
}
