import { counties, slugify } from '@/data/cityData';

export const targetCountySlugs = [
  'loudoun-county',
  'fairfax-county',
  'prince-william-county',
];

export const cityProfiles = {
  ashburn: {
    neighborhoods: ['Brambleton', 'Broadlands', 'Ashburn Village', 'Moorefield Station'],
    context: 'large HOA communities, newer production homes, and premium composite replacement demand',
    permit: 'Loudoun County permit review plus HOA architectural packets for most neighborhoods',
    homeStyle: 'colonial, craftsman, and newer planned-community homes',
  },
  leesburg: {
    neighborhoods: ['Downtown Leesburg', 'Tuscarora Creek', 'Lansdowne', 'River Creek'],
    context: 'historic homes, estate lots, and fast-growing west Loudoun neighborhoods',
    permit: 'Town of Leesburg or Loudoun County review depending on the property address',
    homeStyle: 'historic homes, brick colonials, and larger estate properties',
  },
  sterling: {
    neighborhoods: ['Sterling Park', 'Cascades', 'Lowes Island', 'Countryside'],
    context: 'aging wood decks, family backyards, and strong demand for low-maintenance upgrades',
    permit: 'Loudoun County building permits with HOA review common in Cascades and Lowes Island',
    homeStyle: 'split-levels, colonials, townhomes, and established suburban homes',
  },
  aldie: {
    neighborhoods: ['Stone Ridge', 'Lenah Mill', 'Willowsford', 'Kirkpatrick Farms'],
    context: 'newer luxury homes, larger lots, and outdoor living packages with multiple zones',
    permit: 'Loudoun County permits and community design review for planned developments',
    homeStyle: 'newer craftsman and estate-style homes',
  },
  chantilly: {
    neighborhoods: ['Sully Station', 'South Riding edge', 'Brookfield', 'Poplar Tree'],
    context: 'HOA-led exterior updates, sloped lots, and deck-to-patio combinations',
    permit: 'Fairfax or Loudoun review depending on the address, with HOA submittals common',
    homeStyle: 'colonials, townhomes, and late-1990s planned-community homes',
  },
  fairfax: {
    neighborhoods: ['Mantua', 'Fair Lakes', 'Old Town Fairfax', 'Kings Park West'],
    context: 'mature lots, older deck replacements, and county-code-driven structural work',
    permit: 'Fairfax County or Fairfax City review depending on jurisdiction',
    homeStyle: 'colonials, split-levels, ramblers, and infill homes',
  },
  reston: {
    neighborhoods: ['Lake Anne', 'Lake Audubon', 'North Point', 'South Lakes'],
    context: 'Reston Association design standards, wooded lots, and compact outdoor footprints',
    permit: 'Fairfax County permits plus Reston Association design review for many homes',
    homeStyle: 'contemporary homes, townhomes, and wooded-lot properties',
  },
  mclean: {
    neighborhoods: ['Langley', 'Chesterbrook', 'Salona Village', 'West McLean'],
    context: 'luxury outdoor rooms, estate-grade materials, and complex grading',
    permit: 'Fairfax County review with higher engineering expectations on larger projects',
    homeStyle: 'custom homes, estate properties, and luxury remodels',
  },
  vienna: {
    neighborhoods: ['Town of Vienna', 'Wolf Trap', 'Dunn Loring edge', 'Tysons Woods'],
    context: 'high-value homes, wooded yards, and polished outdoor living upgrades',
    permit: 'Town of Vienna or Fairfax County review depending on property location',
    homeStyle: 'colonials, craftsman rebuilds, and established family homes',
  },
  gainesville: {
    neighborhoods: ['Virginia Oaks', 'Heritage Hunt', 'Lake Manassas', 'Somerset'],
    context: 'growing Prince William neighborhoods with strong demand for full backyard upgrades',
    permit: 'Prince William County permits and HOA architectural review in planned communities',
    homeStyle: 'newer colonials, active-adult homes, and golf-course properties',
  },
  haymarket: {
    neighborhoods: ['Dominion Valley', 'Piedmont', 'Evergreen', 'Villages of Piedmont'],
    context: 'larger lots, golf communities, and premium deck plus porch projects',
    permit: 'Prince William County permits with community architectural standards',
    homeStyle: 'estate-style homes, brick colonials, and luxury planned-community homes',
  },
  bristow: {
    neighborhoods: ['Braemar', 'Victory Lakes', 'New Bristow Village', 'Sheffield Manor'],
    context: 'original builder decks reaching replacement age and family-focused outdoor spaces',
    permit: 'Prince William County permits and HOA packets in most major communities',
    homeStyle: '2000s colonials, townhomes, and family suburban homes',
  },
  manassas: {
    neighborhoods: ['Historic Manassas', 'Wellington', 'Sudley', 'Signal Hill'],
    context: 'mixed housing age, practical replacements, and value-focused composite upgrades',
    permit: 'City of Manassas or Prince William County review depending on address',
    homeStyle: 'ramblers, split-levels, colonials, and townhomes',
  },
  woodbridge: {
    neighborhoods: ['Lake Ridge', 'Belmont Bay', 'Dale City edge', 'Port Potomac'],
    context: 'grade changes, townhome decks, and elevated outdoor living near wooded corridors',
    permit: 'Prince William County review with HOA approval common in larger communities',
    homeStyle: 'townhomes, colonials, and waterfront-adjacent properties',
  },
};

export const servicePageTypes = {
  service: {
    path: 'service',
    label: 'Deck Builder',
    h1Noun: 'Deck Builder',
    titleNoun: 'Deck Builder',
    serviceName: 'Custom Deck Building',
    category: 'Deck Construction',
    intro: 'custom decks, replacement decks, screened porches, pergolas, patios, and complete outdoor living plans',
    materialFocus: 'Trex, TimberTech, AZEK, pressure-treated framing, code-compliant railings, and low-voltage lighting',
    valueProp: 'a single design-build team for the structure, permits, materials, and finish details',
    projectTypes: ['new deck design and construction', 'deck replacement', 'composite deck upgrades', 'porch and patio integration'],
    related: ['/services/new-decks', '/composite-decks', '/services/deck-replacement', '/screened-porch-builder-northern-virginia'],
    lowPrice: '15000',
    highPrice: '95000',
    image: '/images/img36.jpeg',
  },
  'composite-decks': {
    path: 'composite-decks',
    label: 'Composite Decks',
    h1Noun: 'Composite Deck Builder',
    titleNoun: 'Composite Decks',
    serviceName: 'Composite Deck Installation',
    category: 'Deck Construction',
    intro: 'low-maintenance Trex, TimberTech, and AZEK deck builds with hidden fasteners, picture-frame borders, and long-life railing systems',
    materialFocus: 'capped composite and PVC boards selected for heat, fade resistance, texture, warranty, and HOA color compatibility',
    valueProp: 'material guidance that matches the home value, sun exposure, budget, and long-term maintenance expectations',
    projectTypes: ['Trex Transcend decks', 'TimberTech AZEK decks', 'wood-to-composite replacements', 'multi-level composite layouts'],
    related: ['/composite-decks', '/trex-decks', '/timbertech-decks', '/composite-deck-vs-wood-deck-virginia'],
    lowPrice: '20000',
    highPrice: '90000',
    image: '/images/img10.jpeg',
  },
  'wood-decks': {
    path: 'wood-decks',
    label: 'Wood Decks',
    h1Noun: 'Wood Deck Builder',
    titleNoun: 'Wood Decks',
    serviceName: 'Wood Deck Construction',
    category: 'Deck Construction',
    intro: 'pressure-treated pine, cedar, and premium wood deck builds with clean framing, safe stairs, and classic backyard character',
    materialFocus: 'ground-contact framing, proper flashing, modern fasteners, ventilation, and stain-ready surface details',
    valueProp: 'a natural wood deck planned honestly around maintenance, lifespan, and resale value',
    projectTypes: ['new wood decks', 'cedar deck features', 'pressure-treated deck builds', 'wood railing and stair packages'],
    related: ['/wood-decks', '/composite-deck-vs-wood-deck-virginia', '/deck-maintenance-checklist-virginia', '/services/deck-maintenance'],
    lowPrice: '14000',
    highPrice: '65000',
    image: '/images/wood-deck-hero.jpg',
  },
  'deck-repair': {
    path: 'deck-repair',
    label: 'Deck Repair',
    h1Noun: 'Deck Repair Contractor',
    titleNoun: 'Deck Repair',
    serviceName: 'Deck Repair and Structural Maintenance',
    category: 'Deck Repair',
    intro: 'structural deck inspections, ledger repairs, stair rebuilds, railing fixes, board replacement, and resurfacing recommendations',
    materialFocus: 'joist condition, posts, beams, footings, ledger flashing, stair geometry, railing attachment, and moisture damage',
    valueProp: 'a repair-first assessment that separates cosmetic fixes from safety-critical structural issues',
    projectTypes: ['structural inspections', 'stair and railing repair', 'deck resurfacing', 'board and fascia replacement'],
    related: ['/services/deck-repair-and-structural-maintenance', '/deck-safety-inspection-checklist', '/deck-resurfacing-vs-replacement', '/services/deck-resurfacing'],
    lowPrice: '2500',
    highPrice: '45000',
    image: '/images/deck-inspection.png',
  },
  'screened-porches': {
    path: 'screened-porches',
    label: 'Screened Porches',
    h1Noun: 'Screened Porch Builder',
    titleNoun: 'Screened Porches',
    serviceName: 'Screened Porch Construction',
    category: 'Porch Construction',
    intro: 'screened porches, three-season rooms, covered deck conversions, ceiling fans, heaters, lighting, and EZE-Breeze options',
    materialFocus: 'roof tie-ins, porch framing, drainage, screens, ceiling finish, electrical planning, and weather-resistant flooring',
    valueProp: 'a porch that feels integrated with the house instead of added on later',
    projectTypes: ['screened porch additions', 'covered deck conversions', 'three-season rooms', 'porch and deck combinations'],
    related: ['/screened-porch-builder-northern-virginia', '/services/porches', '/services/porches/screened-porch', '/three-season-room-northern-virginia'],
    lowPrice: '35000',
    highPrice: '110000',
    image: '/images/img01.jpeg',
  },
  pergolas: {
    path: 'pergolas',
    label: 'Pergolas',
    h1Noun: 'Pergola Builder',
    titleNoun: 'Pergolas',
    serviceName: 'Pergola Construction',
    category: 'Outdoor Living',
    intro: 'custom pergolas, shade structures, louvered covers, deck-mounted pergolas, patio pergolas, lighting, and privacy screens',
    materialFocus: 'cedar, PVC, aluminum, louvered systems, post anchoring, shade orientation, and low-voltage lighting',
    valueProp: 'shade and architecture planned around the way the sun hits the yard',
    projectTypes: ['deck pergolas', 'patio pergolas', 'louvered pergola systems', 'privacy and shade structures'],
    related: ['/services/gazebo-pergola', '/louvered-pergola-northern-virginia', '/outdoor-living-northern-virginia', '/deck-lighting-ideas-northern-virginia'],
    lowPrice: '12000',
    highPrice: '75000',
    image: '/images/img67.webp',
  },
  patios: {
    path: 'patios',
    label: 'Patios',
    h1Noun: 'Patio Contractor',
    titleNoun: 'Patios',
    serviceName: 'Patio Construction',
    category: 'Outdoor Living',
    intro: 'paver patios, bluestone patios, flagstone, stamped concrete, seating walls, fire features, and deck-to-patio outdoor rooms',
    materialFocus: 'engineered base prep, drainage, clay-soil excavation, freeze-thaw performance, stone selection, and edge restraint',
    valueProp: 'a patio base and drainage plan built for Northern Virginia soil instead of just the first photo day',
    projectTypes: ['paver patios', 'natural stone patios', 'under-deck patios', 'patio and fire pit combinations'],
    related: ['/services/patios', '/stamped-concrete-patio-northern-virginia', '/paver-vs-flagstone-patio-northern-virginia', '/deck-vs-patio-which-is-right'],
    lowPrice: '14000',
    highPrice: '160000',
    image: '/showcase/img12.jpeg',
  },
  'outdoor-living': {
    path: 'outdoor-living',
    label: 'Outdoor Living',
    h1Noun: 'Outdoor Living Contractor',
    titleNoun: 'Outdoor Living',
    serviceName: 'Outdoor Living Design Build',
    category: 'Outdoor Living',
    intro: 'complete backyard systems combining decks, patios, screened porches, pergolas, lighting, fire features, and outdoor kitchens',
    materialFocus: 'traffic flow, elevation changes, shade, privacy, county permits, HOA review, utilities, and long-term durability',
    valueProp: 'one connected plan instead of disconnected deck, patio, and porch projects',
    projectTypes: ['deck and patio suites', 'porch and pergola combinations', 'outdoor kitchens', 'fire feature layouts'],
    related: ['/outdoor-living-northern-virginia', '/outdoor-kitchen-builder-northern-virginia', '/services/fire-pits', '/deck-design-ideas-northern-virginia-2026'],
    lowPrice: '30000',
    highPrice: '180000',
    image: '/images/img17.jpeg',
  },
};

export function getTargetCities() {
  return targetCountySlugs.flatMap((countySlug) => {
    const county = counties[countySlug];
    return county.cities.map((city) => ({
      city,
      citySlug: slugify(city),
      county: county.name,
      countySlug,
      profile: cityProfiles[slugify(city)] || null,
    }));
  });
}

export function getCityBySlug(citySlug) {
  return getTargetCities().find((entry) => entry.citySlug === citySlug) || null;
}

export function getLocalServiceParams(serviceKey) {
  return getTargetCities().map(({ citySlug }) => ({
    city: citySlug,
    service: serviceKey,
  }));
}

export function getAllLocalServicePages() {
  return Object.values(servicePageTypes).flatMap((service) =>
    getTargetCities().map((city) => ({
      path: `/${service.path}/${city.citySlug}`,
      service,
      city,
    }))
  );
}

export function buildCityProfile(city) {
  if (city.profile) return city.profile;

  const countyBase = {
    'loudoun-county': {
      neighborhoods: ['nearby HOA communities', 'established subdivisions', 'newer planned developments'],
      context: 'Loudoun County growth, HOA expectations, and premium outdoor living demand',
      permit: 'Loudoun County permit review with HOA approval where applicable',
      homeStyle: 'colonials, craftsman homes, townhomes, and estate properties',
    },
    'fairfax-county': {
      neighborhoods: ['mature Fairfax neighborhoods', 'townhome communities', 'wooded suburban lots'],
      context: 'Fairfax County code requirements, older deck replacements, and high-value outdoor upgrades',
      permit: 'Fairfax County permit review with separate HOA or town review where applicable',
      homeStyle: 'colonials, split-levels, ramblers, townhomes, and custom homes',
    },
    'prince-william-county': {
      neighborhoods: ['planned communities', 'established subdivisions', 'larger suburban lots'],
      context: 'Prince William County family neighborhoods, original deck replacements, and outdoor entertainment demand',
      permit: 'Prince William County permit review with HOA architectural approval in many communities',
      homeStyle: 'newer colonials, townhomes, split-levels, and active family homes',
    },
  };

  return countyBase[city.countySlug];
}

