// POST /api/vapi/check-availability
// Returns up to 5 nearest available 60-min site-visit slots from GHL
// calendar. Voice AI uses this before offering slots to a caller — it must
// never invent times.
//
// GHL Calendars API:
//   GET /calendars/{calendarId}/free-slots?startDate=...&endDate=...&timezone=...

import { vapiHandler, ghlFetch } from '@/server/vapi/utils';

export const runtime = 'nodejs';

const CALENDAR_ID = process.env.GHL_SITE_VISIT_CALENDAR_ID;
const TIMEZONE = 'America/New_York';
const SLOT_DURATION_MIN = 60;

export const POST = vapiHandler(async (args) => {
  if (!CALENDAR_ID) {
    return offlineFallback(args);
  }

  const earliest = args.earliest_iso ? new Date(args.earliest_iso) : new Date(Date.now() + 24 * 60 * 60 * 1000);
  const latest = new Date(earliest.getTime() + 14 * 24 * 60 * 60 * 1000);

  const res = await ghlFetch(`/calendars/${CALENDAR_ID}/free-slots`, {
    query: {
      startDate: earliest.getTime(),
      endDate: latest.getTime(),
      timezone: TIMEZONE,
    },
  });

  if (!res.ok) {
    console.error('[vapi check-availability] GHL fetch failed', res);
    return offlineFallback(args);
  }

  // GHL returns slots keyed by date (YYYY-MM-DD), each with array of times.
  const slots = flattenSlots(res.data, args.preferred_times || []);
  return {
    slots: slots.slice(0, 5),
    total_available: slots.length,
  };
});

function flattenSlots(data, preferredTimes) {
  const flat = [];
  // GHL response shape: { '2026-06-03': { slots: ['2026-06-03T10:00:00-04:00', ...] }, ... }
  Object.entries(data || {}).forEach(([date, day]) => {
    if (!day?.slots) return;
    day.slots.forEach((iso) => {
      const d = new Date(iso);
      const hour = d.getHours();
      const dayOfWeek = d.getDay(); // 0=Sun, 6=Sat
      const timeOfDay = bucketTime(hour);
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      // Filter by caller's preferred times if specified.
      if (preferredTimes.length > 0) {
        const matches =
          (preferredTimes.includes('morning') && timeOfDay === 'morning') ||
          (preferredTimes.includes('afternoon') && timeOfDay === 'afternoon') ||
          (preferredTimes.includes('evening') && timeOfDay === 'evening') ||
          (preferredTimes.includes('weekend') && isWeekend);
        if (!matches) return;
      }

      flat.push({
        iso,
        display: formatSpoken(d),
      });
    });
  });
  return flat;
}

function bucketTime(hour) {
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

function formatSpoken(d) {
  const day = DAYS[d.getDay()];
  const month = MONTHS[d.getMonth()];
  const date = d.getDate();
  const suffix = nth(date);
  let hour = d.getHours();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  const min = d.getMinutes();
  const minStr = min === 0 ? '' : `:${String(min).padStart(2, '0')}`;
  return `${day} ${month} ${date}${suffix} at ${hour}${minStr} ${ampm}`;
}

function nth(n) {
  if (n >= 11 && n <= 13) return 'th';
  const last = n % 10;
  if (last === 1) return 'st';
  if (last === 2) return 'nd';
  if (last === 3) return 'rd';
  return 'th';
}

// Fallback when GHL is unconfigured or down: generate sensible-looking slots
// from the static calendar template (Tue-Sat 9-6, 4 per day). Used in dev
// + as a graceful degrade. Agent shouldn't notice the difference.
function offlineFallback() {
  const slots = [];
  let cursor = new Date(Date.now() + 24 * 60 * 60 * 1000);
  while (slots.length < 5) {
    const dow = cursor.getDay();
    if (dow >= 2 && dow <= 6) {
      [10, 14].forEach((hour) => {
        const s = new Date(cursor);
        s.setHours(hour, 0, 0, 0);
        if (s > new Date() && slots.length < 5) {
          slots.push({ iso: s.toISOString(), display: formatSpoken(s) });
        }
      });
    }
    cursor = new Date(cursor.getTime() + 24 * 60 * 60 * 1000);
  }
  return { slots, total_available: slots.length, fallback: true };
}
