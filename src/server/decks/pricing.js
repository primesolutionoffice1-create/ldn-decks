// Voice-agent material list. This module does not calculate a project total.
// The spoken line cites the owner-approved quoted range in src/lib/quotedPrices.js.
import { OPEN_DECK_RANGE, QUOTE_LABEL } from '../../lib/quotedPrices';
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
    spoken: `${QUOTE_LABEL}. ${OPEN_DECK_RANGE} Those are quoted prices, not a price for this project. Request a written estimate.`,
  };
}

export const SUPPORTED_MATERIALS = Object.keys(SUPPORTED);
