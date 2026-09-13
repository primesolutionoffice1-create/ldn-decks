import assert from 'node:assert/strict';
import { ADDONS, MATERIALS, calculateDeckBudget, formatBudget } from '../src/lib/deckBudgetModel.js';

assert.deepEqual(calculateDeckBudget(400, 3, [0, 1]), {
  baseLow: 18000, baseHigh: 26000, addonLow: 4500, addonHigh: 12000,
  low: 28125, high: 51300,
});
assert.equal(calculateDeckBudget(400).low, 22500);
assert.equal(calculateDeckBudget(400).high, 35100);
assert.equal(formatBudget(28125), '$28,125');

let scenarios = 0;
for (let sqft = 100; sqft <= 800; sqft += 50) {
  for (const [materialIndex, material] of MATERIALS.entries()) {
    const base = calculateDeckBudget(sqft, materialIndex);
    assert.equal(base.low, Math.round(sqft * material.min * 1.25));
    assert.equal(base.high, Math.round(sqft * material.max * 1.35));
    for (const [addonIndex, addon] of ADDONS.entries()) {
      const budget = calculateDeckBudget(sqft, materialIndex, [addonIndex]);
      assert.equal(budget.addonLow, addon.min);
      assert.equal(budget.addonHigh, addon.max);
      assert.ok(budget.low >= base.low && budget.high >= base.high);
      assert.ok(budget.high >= budget.low);
      scenarios += 1;
    }
  }
}
console.log(JSON.stringify({ status: 'PASS', scenarios, referenceLow: 28125, referenceHigh: 51300 }));
