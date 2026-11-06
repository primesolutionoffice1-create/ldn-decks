// Canonical closer for pages that cite a quoted range and still need a project price.
// Owner-approved quoted ranges (2026-10-31) live in src/lib/quotedPrices.js.
// Do not label an external benchmark as a Loudoun Decks price. Cited external
// planning ranges belong in src/lib/externalPlanningRanges.js.
import { OPEN_DECK_RANGE, QUOTE_LABEL } from './quotedPrices';

export const WRITTEN_ESTIMATE =
  `${QUOTE_LABEL}: ${OPEN_DECK_RANGE} Those figures are quoted prices, not a fixed project price. Demolition, structure, stairs, railings, permits, and site conditions change the total. Request a written estimate for the project.`;
