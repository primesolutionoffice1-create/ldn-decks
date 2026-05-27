// POST /api/vapi/material-pricing
// Returns a pricing range for a deck project. The voice AI uses this to
// give callers HONEST ranges, never firm numbers. See agent system prompt:
// "Never quote a specific number for THEIR project."

import { vapiHandler } from '@/server/vapi/utils';
import { priceRange } from '@/server/decks/pricing';

export const runtime = 'nodejs';

export const POST = vapiHandler(async (args) => {
  const result = priceRange({
    material: args.material,
    sqft: Number(args.approx_sqft) || 0,
    complexity: args.complexity || 'moderate',
    cableRailLinearFeet: Number(args.cable_rail_lf) || 0,
  });
  return result;
});
