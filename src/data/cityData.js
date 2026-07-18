export const counties = {
  "loudoun-county": {
    name: "Loudoun County",
    cities: ["Ashburn", "Leesburg", "Sterling", "Aldie", "South Riding", "Broadlands", "Brambleton", "Purcellville", "Hamilton", "Lovettsville", "Round Hill", "Middleburg", "Dulles", "Arcola", "Belmont", "Cascades", "Countryside", "Lowes Island", "Potomac Falls", "Lansdowne", "One Loudoun", "Stone Ridge"]
  },
  "fairfax-county": {
    name: "Fairfax County",
    cities: ["Fairfax", "Fairfax Station", "Burke", "Springfield", "West Springfield", "Annandale", "Centreville", "Chantilly", "Clifton", "Herndon", "Reston", "Great Falls", "McLean", "Vienna", "Oakton", "Falls Church", "Tysons", "Dunn Loring", "Merrifield", "Alexandria", "Lorton", "Mount Vernon"]
  },
  "prince-william-county": {
    name: "Prince William County",
    cities: ["Gainesville", "Haymarket", "Bristow", "Manassas", "Manassas Park", "Woodbridge", "Lake Ridge", "Dumfries", "Occoquan", "Nokesville", "Independent Hill", "Montclair", "Dale City", "Triangle"]
  },
  "arlington-county": {
    name: "Arlington County",
    cities: ["Arlington", "Rosslyn", "Ballston", "Clarendon", "Pentagon City", "Crystal City", "Shirlington"]
  },
  "stafford-county": {
    name: "Stafford County",
    cities: ["Stafford", "Falmouth", "Garrisonville", "Aquia Harbour"]
  }
};

export const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

// Helper to get all cities for generateStaticParams
export function getAllCityPaths() {
  const paths = [];
  Object.keys(counties).forEach(countySlug => {
    counties[countySlug].cities.forEach(city => {
      paths.push({
        county: countySlug,
        city: slugify(city)
      });
    });
  });
  return paths;
}

// Helper to get city data from slugs
export function getCityData(countySlug, citySlug) {
  const county = counties[countySlug];
  if (!county) return null;
  
  const city = county.cities.find(c => slugify(c) === citySlug);
  if (!city) return null;

  return {
    cityName: city,
    countyName: county.name,
    countySlug: countySlug
  };
}

export const canonicalCities = new Set([
  'ashburn', 'leesburg', 'sterling', 'aldie', 'purcellville', 'brambleton', 'broadlands', 'cascades', 'south-riding', 'lansdowne', // Loudoun
  'alexandria', 'fairfax', 'vienna', 'reston', 'herndon', 'mclean', 'centreville', 'chantilly',
  'falls-church', 'burke', 'springfield', 'oakton', 'great-falls', 'lorton', 'tysons', // Fairfax
  'manassas', 'woodbridge', 'haymarket', 'gainesville', 'bristow', // Prince William
  'arlington', // Arlington
  'stafford' // Stafford
]);

// Helper to get the canonical URL for a city, avoiding redirects
export function getCanonicalCityUrl(countySlug, city) {
  const citySlug = slugify(city);
  if (canonicalCities.has(citySlug)) {
    return `/deck-builder-${citySlug}-va`;
  }
  return `/near-you/${countySlug}/${citySlug}`;
}

// Returns an internal URL for a city ONLY if a real page exists for it,
// otherwise null. Canonical cities resolve to their standalone
// /deck-builder-{city}-va page; other cities present in cityData resolve to
// their /near-you/{county}/{city} page. Names like "Ashburn, VA" are accepted.
// Use this for county-page city lists so they never link to a 404.
export function getCityLink(countySlug, cityName) {
  const citySlug = slugify(String(cityName).replace(/,?\s*VA\s*$/i, ''));
  if (canonicalCities.has(citySlug)) {
    return `/deck-builder-${citySlug}-va`;
  }
  const county = counties[countySlug];
  if (county && county.cities.some((c) => slugify(c) === citySlug)) {
    return `/near-you/${countySlug}/${citySlug}`;
  }
  return null;
}
