// Deck pricing ranges for LDN Decks (NoVA market, 2026).
//
// Knowledge base used by:
//   - Vapi voice AI agent (material-pricing function) — gives callers honest
//     ranges so they self-qualify before site visit
//   - Internal quoting reference
//
// Numbers are RANGES per square foot, installed, including materials + labor
// + standard footings. Excludes HOA, permit fees, custom features.
//
// Update annually as supplier pricing shifts. Documented at
// /Users/ldndecks/ldn-automation-stack/02-voice-ai/04-knowledge-base.md

const PER_SQFT_USD = {
  'PT Wood':         { low: 35, high: 55 },
  'Cedar':           { low: 55, high: 80 },
  'Trex Select':     { low: 65, high: 90 },
  'Trex Transcend':  { low: 80, high: 115 },
  'Trex Lineage':    { low: 95, high: 135 },
  'TimberTech':      { low: 90, high: 125 },
  'Azek':            { low: 100, high: 145 },
};

const COMPLEXITY_MULTIPLIER = {
  simple:   1.00, // single level, no stairs
  moderate: 1.20, // stairs + standard rail
  complex:  1.45, // multi-level OR built-ins OR pergola OR cable rail premium
};

// Cable rail is a discrete add-on, not a multiplier — priced per linear foot.
const CABLE_RAIL_PER_LF = { low: 80, high: 140 };

export function priceRange({ material, sqft, complexity = 'moderate', cableRailLinearFeet = 0 }) {
  const base = PER_SQFT_USD[material];
  if (!base) {
    return { error: `Unknown material: ${material}. Valid: ${Object.keys(PER_SQFT_USD).join(', ')}` };
  }

  const mult = COMPLEXITY_MULTIPLIER[complexity];
  if (!mult) {
    return { error: `Unknown complexity: ${complexity}. Valid: simple, moderate, complex` };
  }

  const baseLow = base.low * sqft * mult;
  const baseHigh = base.high * sqft * mult;

  const cableLow = cableRailLinearFeet * CABLE_RAIL_PER_LF.low;
  const cableHigh = cableRailLinearFeet * CABLE_RAIL_PER_LF.high;

  // Round to nearest $1,000 — quoting verbally to a caller, never give them
  // false precision. "$45,000 to $62,000" is honest; "$45,847.50" is silly.
  const lowK = Math.round((baseLow + cableLow) / 1000) * 1000;
  const highK = Math.round((baseHigh + cableHigh) / 1000) * 1000;

  return {
    material,
    sqft,
    complexity,
    cableRailLinearFeet,
    low: lowK,
    high: highK,
    spoken: `between $${formatK(lowK)} and $${formatK(highK)}`,
  };
}

function formatK(n) {
  return n.toLocaleString('en-US');
}

// Public list of supported materials for the Vapi function enum to introspect.
export const SUPPORTED_MATERIALS = Object.keys(PER_SQFT_USD);
