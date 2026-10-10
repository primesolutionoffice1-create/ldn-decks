import assert from 'node:assert/strict';
import fs from 'node:fs';

import {
  canonicalCities,
  counties,
  getCanonicalCityUrl,
  getCityLink,
  getIndexableCitiesForCounty,
  isCanonicalCity,
  slugify,
} from '../src/data/cityData.js';
import { getCanonicalBreadcrumbHref } from '../src/lib/breadcrumbRoutes.js';

const linkedCities = [];
const visibleNoncanonicalCities = [];

for (const [countySlug, county] of Object.entries(counties)) {
  const indexableCities = getIndexableCitiesForCounty(countySlug);

  for (const city of indexableCities) {
    assert.equal(
      isCanonicalCity(city),
      true,
      `${city} must be canonical before it can be linked from a shared navigation surface`,
    );
    const href = getCanonicalCityUrl(countySlug, city);
    assert.equal(
      href,
      `/deck-builder-${slugify(city)}-va`,
      `${city} must link directly to its indexable canonical route`,
    );
    linkedCities.push(city);
  }

  for (const city of county.cities) {
    if (!isCanonicalCity(city)) visibleNoncanonicalCities.push(city);
  }
}

assert.equal(
  linkedCities.length,
  canonicalCities.size,
  'Shared navigation must expose every canonical city exactly once',
);
assert.equal(
  new Set(linkedCities.map(slugify)).size,
  canonicalCities.size,
  'Shared navigation must not duplicate canonical city links',
);
assert.ok(
  visibleNoncanonicalCities.length > 0,
  'Noncanonical service-area names must remain available for visible plain-text coverage',
);
assert.equal(
  getCityLink('arlington-county', 'Ballston'),
  null,
  'Intentionally noindex city templates must not be linked from indexable directory pages',
);
assert.equal(
  getCityLink('loudoun-county', 'Ashburn'),
  '/deck-builder-ashburn-va',
  'Canonical city pages must remain linkable from indexable directory pages',
);

assert.equal(
  getCanonicalBreadcrumbHref('deck-repair', '/deck-repair'),
  '/services/deck-repair',
  'Deck-repair breadcrumbs must point directly to the canonical service URL',
);
assert.equal(
  getCanonicalBreadcrumbHref('unknown-segment', '/unknown-segment'),
  '/unknown-segment',
  'Unknown breadcrumb segments must retain their generated URL',
);

const sitemapSource = fs.readFileSync(new URL('../src/app/sitemap.js', import.meta.url), 'utf8');
assert.match(
  sitemapSource,
  /path:\s*["']\/fiberon-decking-review-northern-virginia["']\s*,\s*priority:\s*0\.85\s*,\s*lastMod:\s*TIER1\s*,\s*freq:\s*["']weekly["']/,
  'The indexable Fiberon review must be present in the sitemap as a weekly Tier-1 entry',
);

const auditOrigin = process.env.SEO_AUDIT_ORIGIN;
if (auditOrigin) {
  const directoryPaths = [
    '/contact',
    '/deck-builder-ashburn-va',
    '/areas-we-serve',
    ...Object.keys(counties).map((countySlug) => `/near-you/${countySlug}`),
  ];
  const directoryHtml = await Promise.all(directoryPaths.map(async (pagePath) => {
    const response = await fetch(`${auditOrigin}${pagePath}`);
    assert.equal(response.status, 200, `${pagePath} must render successfully`);
    return response.text();
  }));
  const renderedHtml = directoryHtml.join('\n');
  const internalHrefs = [...renderedHtml.matchAll(/href=["']([^"']+)["']/g)]
    .map((match) => match[1].split('#')[0].split('?')[0])
    .filter((href) => href.startsWith('/'));
  const linkedNoindexCityTemplates = [...new Set(internalHrefs.filter((href) => (
    /^\/near-you\/[^/]+\/[^/]+$/.test(href)
  )))];

  assert.deepEqual(
    linkedNoindexCityTemplates,
    [],
    'Indexable directory surfaces must not link to intentionally noindex city templates',
  );
  for (const countySlug of Object.keys(counties)) {
    assert.ok(
      internalHrefs.includes(`/near-you/${countySlug}`),
      `County hub /near-you/${countySlug} must remain linked`,
    );
  }
  for (const city of linkedCities) {
    assert.ok(
      internalHrefs.includes(`/deck-builder-${slugify(city)}-va`),
      `${city} canonical city page must remain linked`,
    );
  }
  for (const city of visibleNoncanonicalCities) {
    assert.ok(
      renderedHtml.toLowerCase().includes(city.toLowerCase()),
      `${city} must remain visible as plain text`,
    );
  }

  const fiberonPath = '/fiberon-decking-review-northern-virginia';
  const sitemapResponse = await fetch(`${auditOrigin}/sitemap.xml`);
  assert.equal(sitemapResponse.status, 200, 'Generated sitemap must render successfully');
  const sitemapXml = await sitemapResponse.text();
  assert.equal(
    sitemapXml.split(`https://ldndecks.com${fiberonPath}`).length - 1,
    1,
    'Generated sitemap must contain exactly one Fiberon review entry',
  );
  const fiberonResponse = await fetch(`${auditOrigin}${fiberonPath}`, { redirect: 'manual' });
  const fiberonHtml = await fiberonResponse.text();
  assert.equal(fiberonResponse.status, 200, 'Fiberon review must be direct HTTP 200');
  assert.match(
    fiberonHtml,
    new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']https://ldndecks\\.com${fiberonPath}["']`, 'i'),
    'Fiberon review must be self-canonical',
  );
  assert.doesNotMatch(
    fiberonHtml,
    /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i,
    'Fiberon review must remain indexable',
  );
}

console.log(JSON.stringify({
  canonicalCityLinks: linkedCities.length,
  visibleNoncanonicalCities: visibleNoncanonicalCities.length,
  fiberonInSitemap: true,
  deckRepairBreadcrumb: '/services/deck-repair',
}, null, 2));
