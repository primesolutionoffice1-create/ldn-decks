import Link from 'next/link';

const CITY_DATA = {
  brambleton: {
    name: 'Brambleton',
    county: 'Loudoun County',
    permit: '/deck-permit-loudoun-county-virginia',
    nearby: 'Ashburn, South Riding, Stone Ridge and Chantilly',
    intent: 'builder-grade deck upgrades, composite resurfacing and HOA-ready outdoor living plans',
    lot: 'narrower, deeper planned-community lots where traffic flow, stairs and privacy matter',
    materials: 'Trex Transcend, Trex Select and TimberTech composite boards that keep a clean community look without annual staining',
    projectTypes: ['composite resurfacing', 'deck replacement', 'stair rebuilds', 'deck lighting', 'privacy-friendly railing upgrades'],
    localNotes: ['Brambleton ARC expectations', 'Loudoun County inspections', 'older pressure-treated frames from the 2007-2015 build cycle'],
    premium: 'A smart Brambleton deck usually feels organized rather than oversized: a better stair location, cleaner railing lines, lighting at the stairs and a composite color that works with the brick or siding package.',
    cityFaqs: [
      { q: "Do you handle Brambleton Community Association ARC submissions?", a: "Yes. We prepare the full Brambleton ARC submission package — site plan, materials list with brand and color, railing details, and any required rendering — and submit it on your behalf. We map each design to current community guidelines before submitting so revision risk is reduced." },
      { q: "What does a Brambleton deck typically cost?", a: "Brambleton deck projects typically run $22,000 to $48,000. Composite resurfacing on a sound frame: $14,000 to $22,000. Full PT-to-composite replacement: $25,000 to $40,000. Multi-level or screened-porch additions push toward the upper end. Pricing depends on lot access, framing condition, railing system, and integrated features like lighting." },
      { q: "Which Trex colors and railings are approved in Brambleton?", a: "Brambleton's ARC favors muted earth tones — Spiced Rum, Tiki Torch, Havana Gold for Trex Transcend; matte-black aluminum railings or composite balustrade in Bronze. Bright or high-contrast finishes typically require ARC pre-approval. We carry current Brambleton-approved sample lists, so material selection happens before submission." },
      { q: "How long does Brambleton ARC review take?", a: "Brambleton ARC review averages 14 to 21 days from a complete submission. Incomplete packages get returned, adding 1 to 2 weeks. We never submit until samples, drawings, and the project narrative are all aligned to current guidelines so the first review has the best chance of moving cleanly." },
    ],
  },
  bristow: {
    name: 'Bristow',
    county: 'Prince William County',
    permit: '/deck-permit-prince-william-county-virginia',
    nearby: 'Gainesville, Haymarket, Manassas and Nokesville',
    intent: 'family-friendly composite decks, resurfacing and screened porch planning',
    lot: 'suburban Prince William lots where play space, grilling space and stair safety are frequent priorities',
    materials: 'Trex Enhance, Trex Transcend and TimberTech products for durable family-use decks',
    projectTypes: ['builder deck resurfacing', 'new composite decks', 'safe stair rebuilds', 'covered grill zones', 'railing replacement'],
    localNotes: ['Braemar and Linton Hall HOA review', 'Prince William County permit timing', 'older builder-grade frames entering replacement age'],
    premium: 'The best Bristow projects balance budget and durability: preserve sound framing when possible, upgrade surfaces and rails, and solve the stair or landing problems that make an older deck feel tired.',
    cityFaqs: [
      { q: 'What does a deck cost in Bristow, VA?', a: 'Bristow deck projects typically run $20,000 to $42,000. Composite resurfacing on a sound builder frame: $14,000 to $20,000. Full Trex Enhance or Transcend replacement on 350-500 sqft: $26,000 to $38,000. Screened porches and multi-level designs run higher. Most Bristow homes are 2003-2015 builds with original PT decks now at end of life.' },
      { q: 'Which Bristow HOAs do you submit to?', a: 'We regularly submit to Braemar Homeowners Association, Linton Hall area HOAs, Sheffield Manor, Victory Lakes, and the smaller townhome associations. Each runs its own architectural review with specific color and railing requirements — we map current guidelines before design starts.' },
      { q: 'What deck features do Bristow families request most?', a: 'Bristow is a family-heavy market, so we see strong demand for safe stair geometry (lower-rise, deeper-tread), wider landings, picture-frame board patterns, integrated stair lighting, and covered grill zones for year-round outdoor cooking. Privacy-friendly railing systems (composite balustrade or matte-black aluminum) are also common.' },
      { q: 'How long is a Bristow project from contract to completion?', a: '8-12 weeks total: Prince William County permit runs 2-4 weeks through the ePortal; HOA approval (parallel with permit) 2-3 weeks; material delivery 1-2 weeks; on-site construction 1-2 weeks. Multi-level or screened-porch additions add 1-2 weeks to construction.' },
    ],
  },
  burke: {
    name: 'Burke',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Springfield, Fairfax Station, Annandale and Lorton',
    intent: 'structural deck replacement, composite upgrades and shaded backyard planning',
    lot: 'mature Fairfax neighborhoods with trees, slopes, walk-out basements and aging deck structures',
    materials: 'TimberTech, Trex and PVC options that hold up against shade, pollen, leaf debris and moisture',
    projectTypes: ['deck replacement', 'structural repair', 'composite resurfacing', 'under-deck drainage', 'screened porch transitions'],
    localNotes: ['Fairfax County plan review', 'tree coverage and moisture exposure', 'older deck ledgers and footings that need inspection'],
    premium: 'A Burke deck often needs structural thinking first: ledger condition, post bases, stair movement and drainage around mature landscaping before the finish boards are selected.',
    cityFaqs: [
      { q: 'Why do Burke decks need structural inspection before resurfacing?', a: 'Most Burke neighborhoods were built 1970s-1990s, so existing decks are 25-50 years old. Posts, footings, ledger boards, and joist hangers regularly show rot, corrosion, or undersized framing under code. We always inspect structure first — a beautiful composite surface over a failing frame is a code failure waiting to happen. The structural pass also determines whether resurfacing or full replacement is the right scope.' },
      { q: 'What does a Burke deck replacement cost?', a: 'Burke deck replacements typically run $24,000 to $55,000 depending on size, slope, and structural complexity. Walk-out basement decks with elevated framing: $32,000 to $48,000. Multi-level builds on sloped Burke Centre lots: $40,000 to $60,000. Composite resurfacing (when frame passes inspection): $14,000 to $22,000.' },
      { q: 'Which Burke neighborhoods do you build in?', a: 'We build regularly in Burke Centre, Burke Cove, Lake Braddock, Burke Lake Park area, Cherry Run, Cardinal Park, Fairfax Station-adjacent, and the older single-family communities along Burke Lake Road. Each has its own HOA or civic association — most require ARC approval for visible exterior changes.' },
      { q: 'Do you handle under-deck drainage in Burke?', a: 'Yes — Burke\'s mature tree canopy, sloped lots, and walk-out basements make under-deck dry systems (Trex RainEscape, Timbertech Dry Joist EZ) a common request. We install these as part of original construction or as add-ons to existing decks. They turn the lower-level patio into usable rainproof space year-round.' },
    ],
  },
  fallsChurch: {
    name: 'Falls Church',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Arlington, McLean, Vienna and Annandale',
    intent: 'compact premium decks, privacy-conscious outdoor rooms and replacement decks for older homes',
    lot: 'smaller infill lots where setbacks, privacy and efficient layouts drive the design',
    materials: 'premium composite or PVC decking, aluminum railings and low-voltage lighting for tight outdoor spaces',
    projectTypes: ['compact composite decks', 'privacy screens', 'screened porches', 'stair and landing rebuilds', 'deck lighting'],
    localNotes: ['Fairfax County or City of Falls Church jurisdiction checks', 'older home attachment details', 'neighbor visibility and setback planning'],
    premium: 'Falls Church projects win by using space precisely: cleaner circulation, privacy where it matters and materials that make a smaller deck feel intentional rather than squeezed in.',
    cityFaqs: [
      { q: 'City of Falls Church or Fairfax County — which permit do I need?', a: 'Depends on the parcel. The City of Falls Church is an independent jurisdiction (separate from Fairfax County) with its own Department of Development Services. Properties inside city limits permit through the city; properties just outside permit through Fairfax County LDS. We verify parcel jurisdiction with the GIS before scoping the permit.' },
      { q: 'What does a compact Falls Church deck cost?', a: 'Falls Church infill lots typically support 180-350 sqft decks ranging from $18,000 to $42,000. Premium composite or PVC with aluminum railings runs $45-70/sqft installed. Privacy screening, integrated planters, low-voltage lighting, and screen room conversions are common add-ons that push toward the upper range.' },
      { q: 'Which Falls Church neighborhoods do you build in?', a: 'We build across Falls Church proper plus East Falls Church, Falls Hill, Pimmit Hills, Broyhill Park, Sleepy Hollow, and Westmoreland. Smaller lots often require careful setback work and neighbor sightline planning — we handle this in the design phase.' },
      { q: 'How do you handle small-lot privacy in Falls Church?', a: 'Privacy is the design challenge in Falls Church. We use slatted composite or stained-cedar privacy screens, planter walls, partial pergola roofs to define edges without blocking sky, and strategic landscape coordination. A well-designed compact Falls Church deck reads intentional rather than squeezed in.' },
    ],
  },
  haymarket: {
    name: 'Haymarket',
    county: 'Prince William County',
    permit: '/deck-permit-prince-william-county-virginia',
    nearby: 'Gainesville, Bristow, Nokesville and western Prince William',
    intent: 'large composite decks, covered outdoor living and mountain-view backyard projects',
    lot: 'larger western Prince William properties with sun exposure, slopes and entertaining-focused backyards',
    materials: 'Trex, TimberTech and cable or aluminum rail systems that preserve open views',
    projectTypes: ['large composite decks', 'covered decks', 'outdoor kitchens', 'cable railings', 'multi-level layouts'],
    localNotes: ['Prince William County inspections', 'HOA review in planned communities', 'wind and sun exposure on open lots'],
    premium: 'Haymarket homeowners often have room to build the full outdoor system: deck, shade, stairs, lighting and grill space planned together rather than as disconnected add-ons.',
    cityFaqs: [
      { q: 'What does a Haymarket deck typically cost?', a: 'Haymarket deck projects typically run $28,000 to $75,000. Premium composite on 400-600 sqft: $32,000 to $58,000. Large multi-level builds with covered roof sections: $55,000 to $85,000. Outdoor kitchen integrations push toward the upper end. Haymarket\'s larger western Prince William lots support bigger outdoor systems than inner-NoVA markets.' },
      { q: 'Which Haymarket communities have HOA review?', a: 'Heritage Hunt (55+), Piedmont, Dominion Valley Country Club, Greenhill Crossing, and Stonewall Heights all have architectural review committees. Each has specific railing-height, color, and material guidelines — we carry current approved-finish lists for all major Haymarket HOAs.' },
      { q: 'Do you build outdoor kitchens in Haymarket?', a: 'Yes — Haymarket\'s larger lots and entertaining-focused backyards make outdoor kitchens a frequent request. Typical Haymarket outdoor kitchen: $18,000 to $75,000 depending on built-in grill brand, counter material, electrical/gas/water infrastructure, and storage cabinetry. We coordinate with electricians, plumbers, and gas fitters as part of the project.' },
      { q: 'What materials work best for sun-exposed Haymarket lots?', a: 'Open western Prince William lots get heavy summer sun, so heat retention matters. We recommend TimberTech AZEK Vintage Coastline or Mahogany (lighter colors retain less heat), Trex Transcend in Vintage Lantern (cooler temperature reading), and cable railings to preserve mountain views. Avoid dark composite surfaces on full-sun decks — they read 30-50°F hotter than lighter shades.' },
    ],
  },
  lorton: {
    name: 'Lorton',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Springfield, Burke, Woodbridge and Fairfax Station',
    intent: 'replacement decks, composite upgrades and elevated decks for sloped yards',
    lot: 'sloped Fairfax County lots, walk-out basements and wooded backyards where structure and drainage matter',
    materials: 'composite decking, stronger rail systems and under-deck drainage options for multi-use backyards',
    projectTypes: ['elevated decks', 'deck replacement', 'structural inspection', 'under-deck patios', 'stair rebuilds'],
    localNotes: ['Fairfax County permit review', 'grade changes and stair landings', 'drainage around lower-level patios'],
    premium: 'A strong Lorton deck should make the slope work for the homeowner, turning elevation into usable upper-deck and lower-patio space without ignoring footings, posts and water movement.',
    cityFaqs: [
      { q: 'What does a Lorton elevated deck cost?', a: 'Lorton elevated decks typically run $26,000 to $55,000. Walk-out basement designs (deck above, patio below): $32,000 to $58,000. Multi-level builds with intermediate landings: $38,000 to $68,000. Hillside Lorton lots often need engineered footings and stronger framing, which adds 10-15% to base cost.' },
      { q: 'How do you handle sloped backyard structure in Lorton?', a: 'Sloped Lorton lots need elevated framing on deeper footings (often 36-48 inches versus the 24-inch frost-depth code minimum) plus stronger post bases and lateral bracing. We engineer each footing layout to match the soil conditions and grade. The structural work matters more than the surface — a beautiful composite over a poorly engineered frame won\'t pass inspection.' },
      { q: 'Which Lorton communities do you build in?', a: 'We build across Lorton\'s diverse neighborhoods: Laurel Hill, Mason Neck, Pohick, Newington Forest, Crosspointe, Springbrook Estates, and Workhouse-area communities. Each has different lot sizes, slope conditions, and HOA processes — we research before quoting.' },
      { q: 'Do you build under-deck patios in Lorton?', a: 'Yes — Lorton\'s sloped, walk-out basement homes are ideal for under-deck dry systems creating usable lower-level patio space. We install Trex RainEscape, TimberTech Dry Joist EZ, or Zip-UP under-deck ceilings during construction. Lower patio becomes a covered outdoor room with deck above used for sun and grilling.' },
    ],
  },
  oakton: {
    name: 'Oakton',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Vienna, Fairfax, Reston and Great Falls',
    intent: 'premium composite decks, estate-style outdoor living and careful replacement work',
    lot: 'larger Fairfax lots with wooded edges, custom homes and higher finish expectations',
    materials: 'TimberTech AZEK, Trex Transcend, cable railings, lighting and picture-frame details',
    projectTypes: ['premium composite decks', 'covered decks', 'screened porches', 'multi-level decks', 'deck inspections'],
    localNotes: ['Fairfax County inspection expectations', 'tree shade and leaf-load maintenance', 'custom-home material matching'],
    premium: 'Oakton projects should feel tailored: tighter detailing, better transitions from interior rooms, upgraded railing choices and structure that supports a long-term outdoor living plan.',
    cityFaqs: [
      { q: 'What does a premium Oakton deck cost?', a: 'Oakton deck projects typically run $35,000 to $85,000. Premium TimberTech AZEK or Trex Transcend on 400-600 sqft: $40,000 to $65,000. Multi-level builds with cable railings, integrated lighting, and screened porch components: $60,000 to $95,000. Oakton homeowners typically choose the premium tier of composite — we rarely install entry-grade boards here.' },
      { q: 'Which Oakton neighborhoods do you build in most?', a: 'We build regularly in Hunter Mill, Vale Estates, Oak Marr, Crowell Farm, Oak Hill Estates, Greenwood Manor, and the rural-edge Oakton communities. Most lots are 1+ acre with mature tree canopy and custom home elevations that demand careful material matching.' },
      { q: 'What composite materials do Oakton homeowners choose?', a: 'Oakton\'s custom-home market favors TimberTech AZEK Vintage Mahogany, Coastline, or Weathered Teak for premium projects; Trex Transcend Tiki Torch, Vintage Lantern, or Spiced Rum for traditional colonials; and cable or glass railings to preserve the wooded views typical of Oakton properties. Picture-frame board patterns and hidden fasteners are standard, not upgrades.' },
      { q: 'Do you build screened porches in Oakton?', a: 'Yes — Oakton\'s mature tree canopy and bug season make screened porches especially valuable. Typical Oakton screened porch: $55,000 to $95,000 with full structural roof, EZE-Breeze or Phantom Screen systems, ceiling fans, electric, and integrated lighting. Connected to a new or existing deck for the full indoor-outdoor flow.' },
    ],
  },
  purcellville: {
    name: 'Purcellville',
    county: 'Loudoun County',
    permit: '/deck-permit-loudoun-county-virginia',
    nearby: 'Round Hill, Hamilton, Hillsboro, Bluemont, Lovettsville, Waterford and western Loudoun',
    intent: 'estate-scale decks, countryside screened porches, covered decks and scenic outdoor entertaining spaces',
    lot: 'larger western Loudoun properties with slopes, long views, open sun, wind exposure and room for premium outdoor rooms',
    materials: 'Trex Transcend, TimberTech AZEK, Deckorators mineral-based composite, cable railings and low-maintenance PVC trim details',
    projectTypes: ['large composite decks', 'screened porches', 'covered decks', 'outdoor kitchens', 'hillside or elevated decks', 'cable railing view decks'],
    localNotes: ['Town of Purcellville versus Loudoun County jurisdiction', 'rural driveway access', 'well and septic setbacks', 'Blue Ridge view preservation', 'open-lot wind and sun exposure'],
    premium: 'Purcellville and western Loudoun are premium expansion markets because the homes can support bigger outdoor living ideas: a covered dining zone, a screened porch for bug season, a view-facing deck, a lower patio and a grill or outdoor kitchen that fits the countryside lifestyle.',
    westernLoudoun: true,
  },
  southRiding: {
    name: 'South Riding',
    county: 'Loudoun County',
    permit: '/deck-permit-loudoun-county-virginia',
    nearby: 'Chantilly, Stone Ridge, Brambleton and Aldie',
    intent: 'HOA-ready composite decks, resurfacing and compact outdoor living upgrades',
    lot: 'planned-community yards where HOA approval, privacy and usable square footage drive the design',
    materials: 'Trex and TimberTech composite boards with white, black or bronze rail systems that fit community standards',
    projectTypes: ['HOA-ready composite decks', 'resurfacing', 'privacy screening', 'stair lighting', 'deck replacement'],
    localNotes: ['South Riding Proprietary review', 'Loudoun County permits', 'neighbor sightlines and compact lot planning'],
    premium: 'South Riding decks perform best when they solve practical problems: reduce maintenance, improve privacy, make stairs safer and turn a builder patio door into an outdoor room families use daily.',
    cityFaqs: [
      { q: 'What does an estate-scale Purcellville deck cost?', a: 'Purcellville estate decks typically run $45,000 to $120,000. Large covered decks with outdoor kitchens: $65,000 to $95,000. Multi-level builds with mountain-view cable railings and integrated lighting: $75,000 to $110,000. Western Loudoun\'s larger lots support bigger outdoor systems than inner-NoVA markets.' },
      { q: 'Town of Purcellville or Loudoun County — which permit?', a: 'Properties inside Purcellville town limits permit through the Town of Purcellville; properties just outside permit through Loudoun County LandMARC. The boundary matters: Town of Purcellville and Loudoun County have different submission processes, fee structures, and inspection cadences. We verify jurisdiction with the GIS before scoping.' },
      { q: 'Do you build covered decks in Purcellville?', a: 'Yes — Purcellville\'s rural lots, sun exposure, and entertaining culture make covered decks a frequent request. Typical Purcellville covered deck: $48,000 to $85,000 with structural roof, integrated ceiling fans, electric, and tongue-and-groove ceiling. Designed to extend usable outdoor time into Virginia\'s hot summer afternoons and rainy spring evenings.' },
      { q: 'How do you handle Blue Ridge view preservation?', a: 'Western Loudoun homes often have direct Blue Ridge views worth preserving. We use cable railings (4mm stainless steel) or glass-panel systems instead of opaque balustrades — both pass code at full railing height while maintaining sight lines. Strategic post placement, lower-profile post caps, and cap lighting that doesn\'t reflect into the view round out the approach.' },
    ],
  },
  springfield: {
    name: 'Springfield',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Burke, Lorton, Annandale and Alexandria',
    intent: 'replacement decks, structural repairs and composite upgrades for established neighborhoods',
    lot: 'older Fairfax neighborhoods with mature trees, walk-out basements and decks that may need structural review before resurfacing',
    materials: 'Trex, TimberTech and pressure-treated structural framing paired with composite surfaces and safer railings',
    projectTypes: ['deck replacement', 'structural repair', 'composite resurfacing', 'stair rebuilds', 'inspection-driven upgrades'],
    localNotes: ['Fairfax County permits', 'older ledgers and posts', 'tree shade, moisture and stair safety concerns'],
    premium: 'In Springfield, the highest-value work is often not the biggest deck; it is the safest, cleanest replacement that fixes structure, improves stairs and gives the home a low-maintenance outdoor space.',
    cityFaqs: [
      { q: 'Do you handle South Riding Proprietary submissions?', a: 'Yes. We prepare the full South Riding Proprietary architectural submission — site plan, materials list with brand and color, railing details, and any required rendering — and submit it on your behalf. We map each design to current community guidelines before submitting so review questions can be handled early.' },
      { q: 'What does a South Riding deck typically cost?', a: 'South Riding deck projects typically run $20,000 to $42,000. Composite resurfacing on builder frame: $14,000 to $20,000. Full PT-to-composite replacement: $24,000 to $36,000. Screened porch additions push toward the upper end. South Riding\'s planned-community lots favor compact, well-designed decks over oversized layouts.' },
      { q: 'Which railings and colors are approved in South Riding?', a: 'South Riding\'s architectural standards favor white composite balustrade, black aluminum, or bronze cable systems. Trex Transcend in Spiced Rum, Tiki Torch, or Havana Gold; TimberTech in similar earth tones. We carry current South Riding-approved finish lists, so material selection happens before submission.' },
      { q: 'How long does South Riding ARC review take?', a: 'South Riding architectural review averages 14 to 21 days from a complete submission. Incomplete packages return for revision, adding 1 to 2 weeks. We never submit until samples, drawings, and the project narrative are aligned to current guidelines — first-round approval matters because re-submission can push project start by a month.' },
    ],
  },
  alexandria: {
    name: 'Alexandria',
    county: 'City of Alexandria',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Old Town, Del Ray, Rosemont, North Ridge and Beverley Hills',
    intent: 'composite conversions of weathered wood decks, screened porches on Del Ray bungalows and historic-district-compliant rebuilds in Old Town',
    lot: 'older Alexandria stock — many federal-period and Victorian rowhouses with second-story rear decks, plus mid-century Del Ray bungalows and Beverley Hills colonials',
    materials: 'Trex Transcend, TimberTech AZEK, narrow-profile cable rails and matte-black aluminum systems that read clean against historic exteriors',
    projectTypes: ['composite resurfacing of rear townhouse decks', 'screened porch additions', 'Old Town ARB-compliant rebuilds', 'second-story stair rebuilds', 'historic-district railing replacements'],
    localNotes: ['City of Alexandria is an independent city — permits run through City of Alexandria DPI, not Fairfax County', 'Old Town and Parker-Gray Historic Districts require Architectural Review Board (ARB) approval before any rear-deck change visible from the public right-of-way', 'City tree-protection ordinance limits trenching near mature trees during footing installation'],
    premium: 'Alexandria projects win on detailing rather than scale. The deck has to fit the home: an Old Town federal needs hand-rail proportions that match the front of the house; a Del Ray bungalow wants a screened porch that reads like an original sleeping porch; a North Ridge colonial needs a deck-and-stair sequence that respects the formal yard.',
    cityFaqs: [
      { q: 'What does a Springfield deck replacement cost?', a: 'Springfield deck replacements typically run $24,000 to $52,000. Composite over passing structure (resurfacing): $14,000 to $22,000. Full PT-to-composite rebuild including frame: $30,000 to $48,000. Multi-level walk-out basement designs: $36,000 to $60,000. Most Springfield decks needing replacement were built 1985-2000 with undersized framing by today\'s code.' },
      { q: 'Why do Springfield decks need structural review?', a: 'Springfield\'s housing stock is mostly 1960s-1990s. Wood decks from that era have aged 25-40 years — ledger boards rot, joist hangers corrode, posts settle, and many were built before current code (2x10 joists at 16-inch spacing, properly flashed ledger, code-current stair geometry). We inspect every Springfield deck before quoting resurfacing — a beautiful composite surface over failing structure isn\'t a deal, it\'s a future code failure.' },
      { q: 'Which Springfield neighborhoods do you build in?', a: 'We build regularly in West Springfield, Springfield proper, Lake Braddock, Saratoga, Newington Forest, Cardinal Forest, Pohick, and Rolling Forest. Each has different lot sizes, slope conditions, mature-tree challenges, and HOA processes — we factor these into design before quoting.' },
      { q: 'How long is a Springfield project from contract to completion?', a: '10-14 weeks total for replacements: structural inspection 1 week; Fairfax County plan review 3-6 weeks; HOA approval (parallel) 2-3 weeks; material delivery 2 weeks; demolition and rebuild 2-3 weeks. Resurfacing-only projects (when structure passes) cut this to 6-8 weeks total.' },
    ],
  },
  chantilly: {
    name: 'Chantilly',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Greenbriar, Brookfield, Sully Station, Pleasant Valley, Westone and South Riding',
    intent: 'new composite builds for original-owner homes upgrading from builder-grade pressure-treated, multi-level designs for walk-out basements and outdoor kitchen integrations',
    lot: 'planned communities built mostly 1980s-2000s, single-family detached on 1/4 to 1/3 acre lots, with HOAs reviewing material and color before submission to Fairfax County',
    materials: 'Trex Transcend, TimberTech Pro, aluminum and composite rails, and stone-veneer columns that work with Chantilly\'s mix of colonial and craftsman exteriors',
    projectTypes: ['builder-grade PT replacement', 'multi-level walk-out decks', 'screened porches', 'outdoor kitchen integrations', 'composite resurfacing'],
    localNotes: ['Fairfax County LDS submission through the PLUS portal', 'RPC (Residential Planned Community) zoning carries extra architectural-compatibility review at the HOA level', 'Resource Protection Area (RPA) restrictions apply near the Cub Run watershed — check setbacks before footing layout', 'Sully Station II, Brookfield and Greenbriar each run their own ARC with their own approved-color lists'],
    premium: 'Chantilly decks return the most when the build matches the original architectural intent of the community. Builder-grade colonials want clean lines and matching trim; craftsman elevations want deeper rail tops and warmer composite tones; Brookfield contemporaries want black aluminum and picture-frame board patterns.',
  },
  gainesville: {
    name: 'Gainesville',
    county: 'Prince William County',
    permit: '/deck-permit-prince-william-county-virginia',
    nearby: 'Heritage Hunt, Piedmont, Virginia Oaks, Somerset Crossing, Lake Manassas and Dominion Valley Country Club',
    intent: 'builder-grade pressure-treated replacement, low-maintenance composite for 55+ communities and pool-deck integrations for club homes',
    lot: '1990s-2010s build stock, many original-owner homes with builder PT decks now at end of life, plus age-restricted active-adult communities with different priorities',
    materials: 'Trex Enhance for value, Trex Transcend and TimberTech AZEK for premium 55+ work, hidden fasteners and low-rise stair sequences for aging-in-place',
    projectTypes: ['PT-to-composite full replacement', 'low-maintenance Heritage Hunt and Piedmont composite', 'club-home pool deck builds', 'multi-level walk-outs', 'covered grill zones'],
    localNotes: ['Prince William County DDS submission through ePortal — fees scale with deck square footage', 'Heritage Hunt and Piedmont have age-restricted ARCs with specific railing-height and color rules', 'Dominion Valley Country Club has its own architectural standards for club-home elevations', 'Prince William County DCSM (Design and Construction Standards Manual) governs structural requirements'],
    premium: 'The strongest Gainesville projects either solve aging-in-place ergonomics (lower-rise stairs, wider landings, slip-resistant decking) for 55+ residents, or unify the deck with the house\'s pool and patio in club communities so the outdoor zone reads as a single designed room rather than three add-ons.',
  },
  herndon: {
    name: 'Herndon',
    county: 'Town of Herndon / Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Hiddenbrook, Crestbrook, Chandon, McNair Farms, Folly Lick and the Worldgate/Reston Tech Corridor edge',
    intent: 'composite resurfacing of 30+ year wood frames, multi-level builds for sloped Hiddenbrook lots and screened porch additions on rear townhouse decks near downtown',
    lot: '1970s-2000s mixed stock, many original PT decks from the 1980s-1990s now requiring structural inspection before resurfacing, plus townhouses with steep rear-grade access',
    materials: 'Trex Transcend on solid frames; full PT-to-composite rebuilds when ledger or joists show rot; aluminum or composite rails for townhouse contexts',
    projectTypes: ['structural inspection + composite resurfacing on 30+ year frames', 'full deck replacement when framing fails inspection', 'multi-level builds on Hiddenbrook slopes', 'townhouse screened porches near downtown', 'stair rebuilds with code-current rise/run'],
    localNotes: ['Properties inside Town of Herndon limits permit through the Town of Herndon, not Fairfax County — check the parcel jurisdiction before scoping permits', 'Town of Herndon Zoning Ordinance §78-1100 covers accessory structure setbacks (typical 5 ft side / 10 ft rear)', 'Frost depth: 24" minimum footing depth per Virginia USBC', '90 mph 3-second wind gust design load (ASCE 7) applies to all residential decks'],
    premium: 'Herndon projects win when they start with the frame, not the surface. A 1985 PT deck with rotted ledger, undersized 2x8 joists at 24" spacing and decayed post bases needs a full rebuild, not a resurfacing. The right inspection up front saves the homeowner from paying twice and the deck from a code failure five years later.',
  },
  stafford: {
    name: 'Stafford',
    county: 'Stafford County',
    permit: '/deck-permit-prince-william-county-virginia',
    nearby: 'Woodbridge, Manassas, Dumfries, Quantico and Triangle',
    intent: 'best-value composite decks, screened porches and outdoor living upgrades for growing families',
    lot: 'larger Stafford County lots where bigger decks at better per-sqft value are possible compared to inner NoVA',
    materials: 'Trex Transcend, Trex Enhance and TimberTech composite boards that deliver premium performance at Stafford pricing',
    projectTypes: ['composite decks', 'screened porches', 'pergolas', 'deck resurfacing', 'stair rebuilds', 'fencing'],
    localNotes: ['Stafford County plan review in 2-3 weeks (faster than most NoVA counties)', 'lower labor and permit costs than Fairfax or Loudoun', 'Embrey Mill, Aquia Harbour and Garrisonville HOA review'],
    premium: 'Stafford projects deliver the best outdoor living value in Northern Virginia: the same Trex and TimberTech materials, the same expert craftsmanship, but 15-25% lower overall project cost due to more efficient permitting and competitive labor rates.',
    cityFaqs: [
      { q: "How much does a deck cost in Stafford, VA?", a: "Stafford deck projects typically run $18,000 to $52,000, which is roughly 15-25% less than the same scope in Fairfax or Loudoun. Composite decks: $30-50/sqft installed. Screened porches: $35,000-$60,000. Lower per-sqft cost comes from shorter permit timelines, less expensive labor, and lower material delivery costs from our staging area." },
      { q: "How long does the Stafford County permit take?", a: "Stafford County plan review averages 2 to 3 weeks — faster than Fairfax (3-6 weeks) or Loudoun (2-4 weeks). Submissions go through the Stafford County Department of Planning & Zoning. We file everything as part of the project and track plan-review status weekly." },
      { q: "Which Stafford communities do you build in?", a: "We build regularly in Embrey Mill, Aquia Harbour, Garrisonville, Falmouth, Stafford Lakes, Augustine North, and the rural sections of Stafford County. Each has its own HOA process when applicable — we map the submission requirements before design finalizes." },
      { q: "Why is Stafford cheaper than Fairfax for the same deck?", a: "Three reasons: Stafford County permit fees are roughly half what Fairfax charges ($150-300 vs. $300-600); the labor market in Stafford has more competitive rates; and shorter permit timelines reduce carry costs on the project. The materials, design quality, and craftsmanship are identical — only the overhead is lower." },
    ],
  },
  sterling: {
    name: 'Sterling',
    county: 'Loudoun County',
    permit: '/deck-permit-loudoun-county-virginia',
    nearby: 'Ashburn, Leesburg, Herndon, Reston, Broadlands and Potomac Falls',
    intent: 'deck replacement and composite upgrades for established neighborhoods, screened porch conversions and townhome-friendly builds',
    lot: 'established Loudoun communities with a mix of townhomes and single-family homes, many with 15-20 year old wood decks due for replacement',
    materials: 'Trex Transcend, TimberTech and composite overlay systems for solid existing frames, plus full rebuilds when structure requires it',
    projectTypes: ['deck replacement', 'composite resurfacing', 'screened porch conversions', 'townhome deck builds', 'HOA-compliant upgrades', 'stair rebuilds'],
    localNotes: ['Loudoun County permits in 10-15 business days (fastest in NoVA)', 'Sugarland Run, Countryside, Cascades and Potomac Falls each have their own HOA requirements', 'many Sterling decks built 2005-2010 are now entering replacement age'],
    premium: 'Sterling is one of our most active service areas, close to headquarters with the fastest response times. The best Sterling projects preserve sound framing when possible, upgrade to composite surfaces and rails, and solve the circulation and stair problems that make an older deck feel tired.',
    cityFaqs: [
      { q: "How quickly can you start a deck project in Sterling?", a: "Sterling is roughly 25 minutes from our Centreville HQ, so we can do same-week site visits and start most projects within 4 to 8 weeks of contract — 2-4 weeks for Loudoun County permit, 2-3 weeks for HOA approval (parallel with permit), and 1-2 weeks for material delivery. Sterling decks typically take 1-2 weeks on-site." },
      { q: "Which Sterling HOAs do you submit to?", a: "We regularly submit to Sugarland Run Homes Association, Countryside Proprietary, Cascades Community Association, Potomac Falls HOA, Sterling Park Civic Association, and several smaller townhome associations. Each has its own architectural review board with specific railing, color, and material guidelines — we map these before design starts." },
      { q: "What composite materials work best for established Sterling homes?", a: "For 1990s-2000s Sterling homes with brick or vinyl siding, Trex Transcend in Spiced Rum or Tiki Torch reads warm and traditional. For newer 2010+ builds with cleaner exteriors, TimberTech AZEK Vintage in Mahogany or Coastline holds up better visually. Townhomes often look best with picture-frame board patterns to add visual depth on smaller decks." },
      { q: "Do you build townhouse decks in Sterling?", a: "Yes — Sterling has a large townhome market and we build there regularly. Typical townhome deck: 180-280 sqft, composite, with HOA-compliant aluminum or composite railings. Cost range: $18,000 to $32,000. The biggest challenges are ledger attachment on stucco or EIFS exteriors and second-story stair sequences — both we handle routinely." },
    ],
  },
  greatFalls: {
    name: 'Great Falls',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'McLean, Vienna, Oakton, Reston, Herndon and Falls Church',
    intent: 'premium estate-scale outdoor living: multi-level decks, screened porches with fireplaces, outdoor kitchens and pool deck surrounds',
    lot: 'estate lots of 1-5+ acres with $1.5M+ homes, many near the Potomac River in RPA zones requiring additional environmental review',
    materials: 'TimberTech AZEK, Trex Transcend, exotic hardwoods, cable railings and premium lighting systems that match the caliber of Great Falls properties',
    projectTypes: ['estate composite decks', 'screened porches with fireplaces', 'pool deck surrounds', 'outdoor kitchens', 'multi-level wraparound decks', 'RPA-zone builds'],
    localNotes: ['Fairfax County zoning + structural review (3-6 weeks)', 'RPA (Resource Protection Area) environmental review for lots within 100 ft of perennial streams or the Potomac', 'well and septic setback coordination', 'some neighborhoods have deed covenants, many estate lots have no HOA'],
    premium: 'Great Falls projects are among the most architecturally significant in Northern Virginia. The right build matches the scale of the property: 600-1,200+ sqft outdoor living spaces with premium materials, integrated lighting, and structural design that supports long-term multi-season use.',
  },
  woodbridge: {
    name: 'Woodbridge',
    county: 'Prince William County',
    permit: '/deck-permit-prince-william-county-virginia',
    nearby: 'Lake Ridge, Dale City, Belmont Bay, Potomac Club, Powell\'s Landing and Westridge',
    intent: 'marine-grade composite builds near Occoquan, large family decks for Lake Ridge homes and under-deck dry systems for Belmont Bay waterfront properties',
    lot: '1970s-2000s mix; many homes overlook the Occoquan Reservoir watershed and carry stricter near-water code (Chesapeake Bay Preservation Act applies within 100 ft of tributaries)',
    materials: 'stainless or hot-dipped galvanized (ASTM A153) fasteners near water, Trex Transcend and TimberTech Pro for deck surface, under-deck dry systems (RainEscape, Trex RainEscape) for Belmont Bay walk-out lower patios',
    projectTypes: ['waterfront marine-grade builds', 'large Lake Ridge family decks', 'under-deck dry-system installations', 'Belmont Bay waterfront rebuilds', 'composite resurfacing of inland PT decks'],
    localNotes: ['Prince William County DDS submission through ePortal; properties near the Occoquan watershed add RPA (Resource Protection Area) and RMA (Resource Management Area) review', 'Chesapeake Bay Preservation Act applies within 100 ft of Occoquan tributaries — limits digging and grading, requires additional erosion control', 'Prince William County DCSM governs all structural requirements', 'Lake Ridge Parks and Recreation Association reviews exterior changes within Lake Ridge — submit before permit'],
    premium: 'The Woodbridge premium is salt-and-water resilience. Near Occoquan or Belmont Bay, a standard galvanized fastener corrodes years before the deck surface fails. The right material spec — stainless or hot-dipped per ASTM A153, marine-grade joist hangers, treated framing rated for ground contact — is what separates a 30-year deck from a 12-year deck on this side of the county.',
  },
};

function renderList(items) {
  return items.map((item) => <li key={item}>{item}</li>);
}

export default function CityAuthorityExpansion({ cityKey }) {
  const city = CITY_DATA[cityKey];
  if (!city) return null;

  return (
    <section style={{ background: '#f8fafc', padding: '3rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <p style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Local planning notes
        </p>
        <h2 style={{ fontSize: '1.9rem', lineHeight: 1.2, fontWeight: 800, marginBottom: '1rem', color: '#111827' }}>
          Building Better Decks for {city.name} Homes
        </h2>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1rem' }}>
          Homeowners in {city.name} usually need more than a generic deck estimate. The right plan
          has to match {city.lot}, the local permit path in {city.county}, material performance,
          stair safety, privacy, drainage and the way the family actually uses the backyard.
        </p>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1.5rem' }}>
          Loudoun Decks focuses this page on {city.intent}. That means connecting the local page to
          real service intent: <Link href="/services/new-decks">new deck construction</Link>,{' '}
          <Link href="/services/deck-replacement">deck replacement</Link>,{' '}
          <Link href="/services/deck-resurfacing">deck resurfacing</Link>,{' '}
          <Link href="/services/deck-inspection">deck inspections</Link>, and the technical tools
          homeowners use before they request an estimate.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem' }}>Best-fit projects</h3>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7 }}>{renderList(city.projectTypes)}</ul>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem' }}>Local review factors</h3>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7 }}>{renderList(city.localNotes)}</ul>
          </div>
        </div>

        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#111827' }}>
          Materials, Structure and Code Context
        </h3>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1rem' }}>
          For {city.name}, the strongest material choices are usually {city.materials}. Material
          selection should be tied to the frame underneath: joist spacing, beam span, post loads,
          footing depth, ledger attachment, stair landings and rail-post blocking. Start with the{' '}
          <Link href="/tools/deck-load-calculator-virginia">deck load calculator</Link>,{' '}
          <Link href="/tools/deck-joist-span-calculator-virginia">joist span calculator</Link>,{' '}
          <Link href="/tools/deck-beam-span-calculator-virginia">beam span calculator</Link>, and{' '}
          <Link href="/tools/deck-footing-depth-calculator-virginia">footing depth calculator</Link>{' '}
          for planning context, then confirm the final structure through plans and inspection.
        </p>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1rem' }}>
          Permit and inspection requirements should be checked before design is finalized. The
          relevant starting point for this page is the <Link href={city.permit}>{city.county} deck permit guide</Link>,
          supported by the <Link href="/education/deck-understructure-guide">deck understructure guide</Link>,{' '}
          <Link href="/education/understanding-deck-load-paths">deck load path guide</Link>, and{' '}
          <Link href="/education/ledger-board-flashing-deck-attachment-virginia">ledger flashing guide</Link>.
        </p>

        {city.westernLoudoun && (
          <div style={{ background: '#111827', color: '#fff', borderRadius: 8, padding: '1.5rem', margin: '2rem 0' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Western Loudoun Premium Outdoor Living
            </h3>
            <p style={{ lineHeight: 1.75, color: 'rgba(255,255,255,0.84)', marginBottom: '1rem' }}>
              Purcellville, Round Hill, Hamilton, Hillsboro, Bluemont, Lovettsville and rural
              Loudoun properties deserve a different kind of outdoor living plan. The goal is often
              not just a deck; it is a view-facing entertainment platform, a shaded dining area, a
              screened porch for summer evenings, a covered grill zone and a structure that handles
              slope, drainage, wind exposure and long-term low maintenance.
            </p>
            <p style={{ lineHeight: 1.75, color: 'rgba(255,255,255,0.84)', margin: 0 }}>
              For estate-style homes and countryside lots, we prioritize premium composite or PVC
              decking, cable railing where views matter, covered-deck transitions, outdoor kitchen
              coordination, stronger framing review and clean architectural lines that fit the
              western Loudoun landscape without feeling suburban or generic.
            </p>
          </div>
        )}

        {city.cityFaqs && city.cityFaqs.length > 0 && (
          <>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#111827' }}>
              {city.name}-specific deck questions
            </h3>
            <div style={{ marginBottom: '1.75rem' }}>
              {city.cityFaqs.map((faq, idx) => (
                <details key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '0.5rem', background: '#fff' }}>
                  <summary style={{ fontWeight: 700, cursor: 'pointer', lineHeight: 1.4 }}>{faq.q}</summary>
                  <p style={{ marginTop: '0.75rem', marginBottom: 0, lineHeight: 1.7, color: '#334155' }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </>
        )}

        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#111827' }}>
          Conversion Path for {city.name} Homeowners
        </h3>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1rem' }}>
          {city.premium} The next step is to compare scope and budget using the{' '}
          <Link href="/composite-deck-cost-northern-virginia">Northern Virginia deck cost guide</Link>, review
          local trust signals on the <Link href="/reviews">reviews page</Link>, and request an estimate
          when the project is ready for a site visit.
        </p>
        <p style={{ lineHeight: 1.75, color: '#334155', margin: 0 }}>
          We also serve nearby communities including {city.nearby}, which helps reinforce local
          service-area relevance without creating thin duplicate city pages.
        </p>
      </div>
    </section>
  );
}
