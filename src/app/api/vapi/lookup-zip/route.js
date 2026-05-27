// POST /api/vapi/lookup-zip
// Returns which Virginia county a zip code belongs to. Used by the voice AI
// to validate service area before continuing the conversation flow.

import { vapiHandler } from '@/server/vapi/utils';
import { lookupCounty, inServiceArea } from '@/server/decks/zipCounty';

export const runtime = 'nodejs';

export const POST = vapiHandler(async (args) => {
  const zip = String(args.zip || '').slice(0, 5);
  if (!/^\d{5}$/.test(zip)) {
    return { county: null, in_service_area: false, error: 'Invalid zip format' };
  }
  return {
    zip,
    county: lookupCounty(zip),
    in_service_area: inServiceArea(zip),
  };
});
