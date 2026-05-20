const { counties, slugify } = require('./src/data/cityData.js');

const redirects = [
  // Core & Services
  { source: '/services/deck-replacement', destination: '/services/new-decks', permanent: true },
  { source: '/get-quote', destination: '/contact', permanent: true },
];

Object.keys(counties).forEach(countySlug => {
  counties[countySlug].cities.forEach(city => {
    const citySlug = slugify(city);
    // Patterns from screenshot: /near-you/ashburn-va/ and /near-you/ashburn/
    redirects.push({
      source: `/near-you/${citySlug}-va`,
      destination: `/near-you/${countySlug}/${citySlug}`,
      permanent: true
    });
    redirects.push({
      source: `/near-you/${citySlug}`,
      destination: `/near-you/${countySlug}/${citySlug}`,
      permanent: true
    });
  });
});

console.log(JSON.stringify(redirects, null, 2));
