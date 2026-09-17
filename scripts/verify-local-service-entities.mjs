import assert from 'node:assert/strict';

const origin = process.env.SEO_AUDIT_ORIGIN || 'http://127.0.0.1:3107';
const canonicalOrigin = 'https://ldndecks.com';
const organizationId = `${canonicalOrigin}/#organization`;
const localServicePattern = /^\/(service|composite-decks|wood-decks|deck-repair|screened-porches|pergolas|patios|outdoor-living)\//;

async function get(path) {
  const response = await fetch(new URL(path, origin), {
    redirect: 'manual',
    signal: AbortSignal.timeout(15000),
  });
  assert.equal(response.status, 200, `${path}: expected direct 200`);
  return response.text();
}

function objects(value) {
  if (!value || typeof value !== 'object') return [];
  return [value, ...Object.values(value).flatMap(objects)];
}

const sitemap = await get('/sitemap.xml');
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter((path) => localServicePattern.test(path));
assert.ok(paths.length >= 33, 'Expected at least 33 vetted local service routes');

// Exercise the same template for service types withheld from the sitemap too.
const samplePaths = ['/service/aldie', '/wood-decks/ashburn', '/pergolas/ashburn', '/patios/ashburn', '/outdoor-living/ashburn'];
const results = [];
for (const path of new Set([...paths, ...samplePaths])) {
  const html = await get(path);
  const scripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(scripts.length, `${path}: missing JSON-LD`);
  const nodes = scripts.flatMap((match) => objects(JSON.parse(match[1])));
  const types = (node) => [].concat(node['@type'] || []);
  const contractorIds = new Set(nodes.filter((node) => types(node).includes('GeneralContractor')).map((node) => node['@id']));
  assert.deepEqual([...contractorIds], [organizationId], `${path}: unexpected contractor identity`);
  assert.ok(!nodes.some((node) => node.branchOf || String(node['@id'] || '').endsWith('#local-business')), `${path}: duplicate branch declaration`);
  const service = nodes.find((node) => node['@id'] === `${canonicalOrigin}${path}#service`);
  assert.ok(service && types(service).includes('Service'), `${path}: missing local Service`);
  assert.equal(service.provider?.['@id'], organizationId, `${path}: incorrect provider`);
  assert.ok(service.areaServed?.name, `${path}: missing service area`);
  assert.ok(!nodes.some((node) => types(node).some((type) => ['Review', 'AggregateRating'].includes(type))), `${path}: review schema regression`);
  results.push({ path, provider: service.provider['@id'], area: service.areaServed.name });
}
console.log(JSON.stringify({ status: 'PASS', origin, checked: results.length, results }, null, 2));
