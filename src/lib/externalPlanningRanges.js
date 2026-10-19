// External market benchmarks approved for publication on 2026-10-19.
// Source notes are the October 18, 2026 cost research. Size totals are the
// published per-square-foot bounds times 320 or 400 square feet. They are
// planning estimates, not Loudoun Decks prices, quotes, or guarantees.
// Scenarios the research marked "needs owner numbers" are omitted.

export const PLANNING_DISCLAIMER =
  'Planning ranges based on external benchmarks published October 2026 (sources linked beside each figure), not Loudoun Decks prices or quotes. Ranges assume the area, whether the structure is new or existing, the material tier, railing, stairs, demolition, and whether permits are included or excluded, as noted in each row. Elevated, multi-level, custom railing or lighting, site access, permit and HOA conditions, and structural repairs can move a project above these ranges. Your written estimate — after a site visit and measurements — is the only project price.';

export const NEW_COMPOSITE_ANSWER =
  'For a simple, low-height composite deck with standard railing and without complex stairs or elevation, external 2026 benchmarks put installed cost at $35–$80 per square foot (RemodelCalculators, reviewed October 11, 2026; Angi lists $30–$60 per square foot for deck construction, updated September 24, 2026). That is about $11,200–$25,600 for a 16×20 (320 sq ft) and $14,000–$32,000 for a 20×20 (400 sq ft). These are national planning estimates, not Loudoun Decks prices or quotes. A written estimate after a site visit is the only project price.';

export const COMPOSITE_PLANNING_ROWS = [
  {
    scenario: 'New composite deck',
    assumptions:
      'Simple rectangle, low height, standard perimeter railing included. Complex stairs, elevation, and site adjustments excluded. Permits excluded. Demolition excluded. RemodelCalculators places Trex Enhance at $35–$60 per sq ft and Transcend at $45–$80 per sq ft inside this installed range.',
    rate: '$35–$80 per sq ft installed (2026)',
    size16: '$11,200–$25,600',
    size20: '$14,000–$32,000',
    sourceLabel: 'RemodelCalculators, reviewed October 11, 2026',
    sourceUrl: 'https://remodelcalculators.com/deck-cost',
    corroboration:
      'Corroborated by Angi, Cost to Build a Deck (updated September 24, 2026): $30–$60 per sq ft for deck construction across materials, including standard materials and labor and excluding demolition.',
    corroborationUrl: 'https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm',
  },
  {
    scenario: 'Composite resurfacing',
    assumptions:
      'New composite boards on an existing structure that has been confirmed sound. No new structure. Stairs, railings, and repairs outside that assumption are extra.',
    rate: '$15–$45 per sq ft (2026)',
    size16: '$4,800–$14,400',
    size20: '$6,000–$18,000',
    sourceLabel: 'LatestCost, September 25, 2026',
    sourceUrl: 'https://latestcost.com/composite-decking-cost-comparison-material-size-installation/',
    corroboration: '',
    corroborationUrl: '',
  },
  {
    scenario: 'Old-deck demolition',
    assumptions: 'Separate line when an old deck is removed. Not included in the new-composite or resurfacing rows.',
    rate: '$5–$15 per sq ft (2026)',
    size16: '$1,600–$4,800',
    size20: '$2,000–$6,000',
    sourceLabel: 'Angi, Composite Decking Cost, updated September 29, 2026',
    sourceUrl: 'https://www.angi.com/articles/how-much-does-composite-decking-cost.htm',
    corroboration:
      'The same $5–$15 per sq ft demolition line appears in Angi, Cost to Build a Deck (updated September 24, 2026). Angi also gives one 360 sq ft replacement example of $7,200–$16,900 (demolition $1,800–$5,400, materials $1,800–$6,500, and labor $3,600–$5,000).',
    corroborationUrl: 'https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm',
  },
  {
    scenario: 'Permit fees',
    assumptions:
      'Excluded from the installation rows above. Loudoun County requires a building permit and a zoning permit for every deck. The Typical Deck fee applies under 1,000 sq ft, outside incorporated towns, and cannot be used for a roofed deck, screened porch, hot tub, gazebo, or detached deck. With plan specifications the county lists $395, or $230 in an incorporated town. Decks of 1,000 sq ft or more use a different fee. Fairfax County calculates the fee in PLUS. There is no flat Fairfax total. HOA fees are not published by either county.',
    rate: 'Loudoun Typical Deck: $265 (2026). Incorporated town: $100. Fairfax minimum base fee: $141.75, plus levy and surcharge (2026).',
    size16: 'Not included in the ranges above',
    size20: 'Not included in the ranges above',
    sourceLabel: 'Loudoun County Decks, accessed October 18, 2026',
    sourceUrl: 'https://www.loudoun.gov/1166/Decks',
    corroboration:
      'Fairfax County requires a permit for decks and screen porches. The minimum base fee is in the 2026 fee schedule. Appendix Q was adopted May 5, 2026.',
    corroborationUrl: 'https://www.fairfaxcounty.gov/landdevelopment/when-permit-required',
    corroborationUrl2: 'https://www.fairfaxcounty.gov/landdevelopment/sites/landdevelopment/files/assets/documents/fee-schedule.pdf',
    corroborationLabel2: 'Fairfax County fee schedule (2026)',
  },
];

export const SCREEN_EXISTING_ANSWER =
  'Screening an existing structure that already has a sound roof is about $5–$20 per square foot in HomeAdvisor’s screened-porch guide (updated June 17, 2026), or about $2,000–$4,000 total on that page. A 320 sq ft example of that per-square-foot range is $1,600–$6,400. The range assumes the roof and structure already exist and are sound. A new screened porch with a new roof is not given a planning total here. These are external benchmarks, not Loudoun Decks prices. A written estimate is the only project price.';

export const REPLACEMENT_RANGE_ANSWER =
  'External 2026 planning benchmarks, not Loudoun Decks prices: resurfacing composite decking on a structure that has been confirmed sound is about $15–$45 per square foot (LatestCost, September 25, 2026), or about $4,800–$14,400 for 320 square feet and $6,000–$18,000 for 400 square feet. Demolition of an old deck, when it applies, is a separate about $5–$15 per square foot (Angi, updated September 29, 2026), or about $1,600–$4,800 for 320 square feet and $2,000–$6,000 for 400 square feet. Angi also publishes one 360-square-foot replacement example of $7,200–$16,900, combining demolition, materials, and labor. A written estimate after a site visit and measurements is the only project price.';

export const REPLACEMENT_TIMELINE =
  'Most full replacement builds take 2–4 weeks once permits and material selections are complete. Inspections, weather, HOA review, and project complexity can extend that construction window.';
