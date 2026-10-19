// Voice-agent material list. Loudoun Decks has no owner-approved public price
// ledger, so this module does not return dollar ranges.
//
// Materials the caller may name: PT Wood, Cedar, Trex Select, Trex Transcend,
// Trex Lineage, TimberTech, Azek.
// Complexity labels the caller may name: simple, moderate, complex.

const SUPPORTED = {
  'PT Wood': true,
  Cedar: true,
  'Trex Select': true,
  'Trex Transcend': true,
  'Trex Lineage': true,
  TimberTech: true,
  Azek: true,
};

const COMPLEXITY = {
  simple: true,
  moderate: true,
  complex: true,
};

export function priceRange({ material, sqft, complexity = 'moderate', cableRailLinearFeet = 0 }) {
  if (!SUPPORTED[material]) {
    return { error: `Unknown material: ${material}. Valid: ${Object.keys(SUPPORTED).join(', ')}` };
  }

  if (!COMPLEXITY[complexity]) {
    return { error: `Unknown complexity: ${complexity}. Valid: simple, moderate, complex` };
  }

  return {
    material,
    sqft: Number(sqft) || 0,
    complexity,
    cableRailLinearFeet: Number(cableRailLinearFeet) || 0,
    priced: false,
    spoken: 'Loudoun Decks does not publish a fixed range. Request a written estimate for this project.',
  };
}

export const SUPPORTED_MATERIALS = Object.keys(SUPPORTED);
