// Existing calculator assumptions, not measured local prices or supplier quotes.
export const MATERIALS = [
  { name: 'Pressure-Treated Wood', min: 18, max: 35 },
  { name: 'Cedar', min: 25, max: 45 },
  { name: 'Trex Enhance', min: 30, max: 50 },
  { name: 'Trex Transcend', min: 45, max: 65 },
  { name: 'TimberTech Advanced PVC (AZEK)', min: 50, max: 75 },
];

export const ADDONS = [
  { name: 'Stairs (per flight)', min: 1500, max: 4000 },
  { name: 'Composite Railings', min: 3000, max: 8000 },
  { name: 'Cable Railings', min: 5000, max: 12000 },
  { name: 'Built-in Lighting', min: 1500, max: 4000 },
  { name: 'Pergola', min: 5000, max: 15000 },
  { name: 'Screened Porch Conversion', min: 15000, max: 40000 },
];

export function calculateDeckBudget(sqft, materialIndex = 3, addonIndexes = []) {
  const material = MATERIALS[materialIndex];
  const baseLow = sqft * material.min;
  const baseHigh = sqft * material.max;
  const addonLow = addonIndexes.reduce((sum, index) => sum + ADDONS[index].min, 0);
  const addonHigh = addonIndexes.reduce((sum, index) => sum + ADDONS[index].max, 0);
  return {
    baseLow, baseHigh, addonLow, addonHigh,
    low: Math.round((baseLow + addonLow) * 1.25),
    high: Math.round((baseHigh + addonHigh) * 1.35),
  };
}

export const formatBudget = (amount) => '$' + amount.toLocaleString('en-US');
