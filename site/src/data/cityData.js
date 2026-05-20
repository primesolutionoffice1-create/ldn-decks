export const counties = {
  "loudoun-county": {
    name: "Loudoun County",
    cities: ["Ashburn", "Leesburg", "Sterling", "Aldie", "Middleburg", "Round Hill", "Purcellville", "Lovettsville", "Hamilton", "Waterford", "Brambleton", "South Riding", "Stone Ridge", "Broadlands", "Lansdowne", "Lucketts", "Hillsboro", "Arcola", "Belmont", "Potomac Falls"]
  },
  "fairfax-county": {
    name: "Fairfax County",
    cities: ["Alexandria", "Fairfax", "Vienna", "Reston", "Herndon", "Mclean", "Falls Church", "Annandale", "Burke", "Springfield", "Chantilly", "Centreville", "Oakton", "Great Falls", "Lorton", "Tysons", "West Springfield", "Fort Belvoir", "Mount Vernon", "Merrifield", "Dunn Loring", "Fairfax Station"]
  },
  "prince-william-county": {
    name: "Prince William County",
    cities: ["Manassas", "Manassas Park", "Woodbridge", "Dumfries", "Quantico", "Haymarket", "Gainesville", "Bristow", "Nokesville", "Lake Ridge", "Montclair", "Triangle", "Dale City", "Occoquan", "Yorkshire"]
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
  'ashburn', 'leesburg', 'sterling', 'purcellville', 'brambleton', 'south-riding', // Loudoun
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
