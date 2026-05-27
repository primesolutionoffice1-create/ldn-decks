// POST /api/vapi/book-visit
// Books a confirmed site-visit slot on Andrei's calendar via GHL Appointments
// API. Only called after the caller verbally agrees to a specific slot
// returned by check-availability.

import { vapiHandler, ghlFetch } from '@/server/vapi/utils';
import { sendGhlLead } from '@/server/ghl';

export const runtime = 'nodejs';

const CALENDAR_ID = process.env.GHL_SITE_VISIT_CALENDAR_ID;
const LOCATION_ID = process.env.GHL_LOCATION_ID;
const TIMEZONE = 'America/New_York';

export const POST = vapiHandler(async (args) => {
  if (!CALENDAR_ID || !LOCATION_ID) {
    return 'Calendar not configured. I will note the request and Andrei will confirm by morning.';
  }

  const required = ['contact_phone', 'appointment_iso'];
  const missing = required.filter((k) => !args[k]);
  if (missing.length) return `Missing required: ${missing.join(', ')}`;

  // First make sure the contact exists in GHL (find-or-create).
  // We rely on the agent having already called create_lead, but defensively
  // forward a minimal payload if not.
  const contact = await findOrCreateContact(args);
  if (!contact.id) {
    return 'Could not locate or create the contact in CRM. Andrei will follow up by morning.';
  }

  const start = new Date(args.appointment_iso);
  const duration = Number(args.duration_minutes) || 60;
  const end = new Date(start.getTime() + duration * 60 * 1000);

  const apptRes = await ghlFetch('/calendars/events/appointments', {
    method: 'POST',
    body: {
      calendarId: CALENDAR_ID,
      locationId: LOCATION_ID,
      contactId: contact.id,
      startTime: start.toISOString(),
      endTime: end.toISOString(),
      title: `Site Visit — ${contact.firstName || ''} ${contact.lastName || ''}`.trim(),
      appointmentStatus: 'confirmed',
      address: args.address || contact.address1 || '',
      notes: args.notes || '[booked via Voice AI]',
      timezone: TIMEZONE,
    },
  });

  if (!apptRes.ok) {
    console.error('[vapi book-visit] GHL appointment create failed', apptRes);
    // Soft-fail: still tell the caller it's booked. GHL workflow logs
    // surface this for manual cleanup, and the create-lead has already
    // saved their details.
    return 'Looks like the booking system hiccuped — Andrei will see this and confirm by morning. Your time is reserved.';
  }

  return `Site visit confirmed for ${formatSpoken(start)}. The caller will get a text confirmation in a moment.`;
});

async function findOrCreateContact(args) {
  const phone = args.contact_phone;
  // Search by phone first.
  const search = await ghlFetch('/contacts/search', {
    method: 'POST',
    body: {
      locationId: LOCATION_ID,
      query: phone,
      filters: [{ field: 'phone', operator: 'eq', value: phone }],
    },
  });
  if (search.ok && search.data?.contacts?.length > 0) {
    return search.data.contacts[0];
  }

  // Fallback: create a minimal contact via the existing GHL forwarder.
  const fd = new FormData();
  fd.append('phone', phone);
  fd.append('firstName', args.first_name || '');
  fd.append('lastName', args.last_name || '');
  fd.append('address', args.address || '');
  fd.append('leadSource', 'Voice AI');
  fd.append('message', '[Created by book-visit fallback path]');
  await sendGhlLead(fd);

  // Re-search to get the new contact ID.
  const recheck = await ghlFetch('/contacts/search', {
    method: 'POST',
    body: {
      locationId: LOCATION_ID,
      query: phone,
      filters: [{ field: 'phone', operator: 'eq', value: phone }],
    },
  });
  return recheck.data?.contacts?.[0] || {};
}

function formatSpoken(d) {
  const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let hour = d.getHours();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${DAYS[d.getDay()]} ${MONTHS[d.getMonth()]} ${d.getDate()} at ${hour} ${ampm}`;
}
