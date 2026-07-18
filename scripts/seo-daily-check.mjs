const argValue = (name) => {
  const prefix = `${name}=`;
  return process.argv.find((arg) => arg.startsWith(prefix))?.slice(prefix.length);
};

const ORIGIN = (
  argValue('--origin') ||
  process.env.SEO_CHECK_ORIGIN ||
  process.env.SEO_AUDIT_ORIGIN ||
  'https://ldndecks.com'
).replace(/\/$/, '');
const CANONICAL_ORIGIN = (
  argValue('--canonical-origin') ||
  process.env.SEO_CHECK_CANONICAL_ORIGIN ||
  'https://ldndecks.com'
).replace(/\/$/, '');
// Keep this aligned with verify-local-seo-deployment.mjs. After the May 2026
// core update / June 2026 spam update hardening, only vetted local service
// pages are submitted in the sitemap; broader programmatic pages can stay live
// with noindex/follow until they have enough local proof. P0/P1 city canonical
// consolidation in July 2026 removed duplicate city surfaces and promoted
// vetted city pages. Broadlands replaces its near-you URL in the sitemap, so
// the clean sitemap floor remains 377.
const EXPECTED_SITEMAP_URLS = Number(process.env.EXPECTED_SITEMAP_URLS || 377);
const EXPECTED_LOCAL_SERVICE_URLS = Number(process.env.EXPECTED_LOCAL_SERVICE_URLS || 33);
const KNOWN_BAD_SITEMAP_URLS = Number(process.env.KNOWN_BAD_SITEMAP_URLS || 260);
const localServicePattern = /\/(service|composite-decks|wood-decks|deck-repair|screened-porches|pergolas|patios|outdoor-living)\//;
const submitIndexNowRequested = process.argv.includes('--submit-indexnow');
const allowIndexNowSubmit = process.env.ALLOW_LIVE_INDEXNOW_SUBMIT === 'true';
const shouldSubmitIndexNow = submitIndexNowRequested && allowIndexNowSubmit;

const priorityPaths = [
  '/',
  '/deck-builders-loudoun',
  '/deck-builder-ashburn-va',
  '/deck-builder-leesburg-va',
  '/deck-builder-herndon-va',
  '/deck-builder-reston-va',
  '/deck-builder-mclean-va',
  '/deck-builder-vienna-va',
  '/composite-decks',
  '/trex-decks',
  '/deck-repair-loudoun-county',
  '/get-estimate',
  '/press',
  '/social',
];

const expectedCitationSignals = [
  'google.com/maps/place/Loudoun+Decks',
  'yelp.com/biz/loudoun-decks-centreville',
  'bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241',
  'houzz.com/pro/webuser-782541997/loudoun-decks',
  'buildzoom.com/contractor/loudoun-decks',
  'business.loudounchamber.org/list/member/loudoun-decks-30047',
  'mapquest.com/us/virginia/loudoun-decks-532352487',
];

const citationPages = ['/press', '/social'];

const forbiddenCitationSignals = [
  'business.loudounchamber.org/list/member/loudoun-deck-30047.htm',
  'yelp.com/biz/loudoun-decks-manassas',
  'bbb.org/us/va/manassas/profile/deck-builder/loudoun-decks',
];

const legacySitemapPaths = [
  '/sitemap',
  '/site-map',
  '/sitemaps',
  '/sitemap.html',
  '/xml-sitemap',
  '/page-sitemap.xml',
  '/post-sitemap.xml',
  '/sitemap_index.xml',
  '/sitemap-index.xml',
];

async function getText(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'LDNDecksSEOCheck/1.0 (+https://ldndecks.com)',
    },
  });

  const text = await response.text();
  return { url, status: response.status, ok: response.ok, text };
}

async function getHead(url) {
  const response = await fetch(url, {
    method: 'HEAD',
    redirect: 'manual',
    headers: {
      'user-agent': 'LDNDecksSEOCheck/1.0 (+https://ldndecks.com)',
    },
  });

  return {
    url,
    status: response.status,
    location: response.headers.get('location'),
  };
}

function extractCanonical(html) {
  return html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] || null;
}

function hasNoindex(html) {
  return /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
}

function getRobotsGroupRules(text, targetAgent) {
  let agents = [];
  let rules = [];
  let sawRule = false;

  const finishGroup = () => {
    const matchesTarget = agents.some((agent) => agent.toLowerCase() === targetAgent.toLowerCase());
    const finishedRules = matchesTarget ? rules : null;
    agents = [];
    rules = [];
    sawRule = false;
    return finishedRules;
  };

  for (const rawLine of text.split('\n')) {
    const line = rawLine.replace(/#.*/, '').trim();
    if (!line) continue;

    const userAgentMatch = line.match(/^user-agent\s*:\s*(.+)$/i);
    if (userAgentMatch) {
      if (agents.length && sawRule) {
        const finishedRules = finishGroup();
        if (finishedRules) return finishedRules;
      }

      agents.push(userAgentMatch[1].trim());
      continue;
    }

    const ruleMatch = line.match(/^(allow|disallow)\s*:\s*(.*)$/i);
    if (ruleMatch && agents.length) {
      sawRule = true;
      rules.push({
        directive: ruleMatch[1].toLowerCase(),
        path: ruleMatch[2].trim(),
      });
    }
  }

  return finishGroup() || [];
}

function robotsAllowsMainSite(text) {
  const defaultRules = getRobotsGroupRules(text, '*');
  const disallowsRoot = defaultRules.some((rule) => rule.directive === 'disallow' && rule.path === '/');
  const allowsRoot = defaultRules.some((rule) => rule.directive === 'allow' && rule.path === '/');
  return allowsRoot && !disallowsRoot;
}

function summarizeCheck(name, passed, details = '') {
  const prefix = passed ? 'PASS' : 'FAIL';
  console.log(`${prefix} ${name}${details ? ` - ${details}` : ''}`);
  return passed;
}

const failures = [];

try {
  const sitemap = await getText(`${ORIGIN}/sitemap.xml`);
  const sitemapUrlCount = (sitemap.text.match(/<url>/g) || []).length;
  const sitemapUrls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const localServiceUrlCount = sitemapUrls.filter((url) => localServicePattern.test(url)).length;
  if (!summarizeCheck('sitemap.xml is reachable', sitemap.ok, `${sitemap.status}`)) failures.push('sitemap status');
  if (!summarizeCheck('known 260-url sitemap regression absent', sitemapUrlCount !== KNOWN_BAD_SITEMAP_URLS, `${sitemapUrlCount} URLs`)) failures.push('known 260-url regression');
  if (!summarizeCheck('sitemap URL count is healthy', sitemapUrlCount >= EXPECTED_SITEMAP_URLS, `${sitemapUrlCount} URLs`)) failures.push('sitemap count');
  if (!summarizeCheck('local-service URL count is healthy', localServiceUrlCount >= EXPECTED_LOCAL_SERVICE_URLS, `${localServiceUrlCount} URLs`)) failures.push('local service sitemap count');

  for (const path of priorityPaths) {
    const loc = `${CANONICAL_ORIGIN}${path === '/' ? '' : path}`;
    if (!sitemap.text.includes(`<loc>${loc}</loc>`)) {
      failures.push(`missing sitemap URL: ${loc}`);
      summarizeCheck(`sitemap contains ${path}`, false);
    } else {
      summarizeCheck(`sitemap contains ${path}`, true);
    }
  }

  const robots = await getText(`${ORIGIN}/robots.txt`);
  if (!summarizeCheck('robots.txt is reachable', robots.ok, `${robots.status}`)) failures.push('robots status');
  if (!summarizeCheck('robots allows main site crawl', robotsAllowsMainSite(robots.text))) failures.push('robots disallow');

  for (const path of legacySitemapPaths) {
    const legacy = await getHead(`${ORIGIN}${path}`);
    const legacyOk = legacy.status >= 300 && legacy.status < 400 && legacy.location?.endsWith('/sitemap.xml');
    if (!summarizeCheck(`legacy sitemap ${path} redirects`, legacyOk, `${legacy.status} ${legacy.location || ''}`.trim())) {
      failures.push(`${path} legacy sitemap redirect`);
    }
  }

  for (const path of priorityPaths) {
    const page = await getText(`${ORIGIN}${path === '/' ? '' : path}`);
    const canonical = extractCanonical(page.text);
    const expectedCanonical = `${CANONICAL_ORIGIN}${path === '/' ? '' : path}`;
    const routeName = path === '/' ? 'homepage' : path;

    if (!summarizeCheck(`${routeName} returns 200`, page.ok, `${page.status}`)) failures.push(`${path} status`);
    if (!summarizeCheck(`${routeName} is indexable`, !hasNoindex(page.text))) failures.push(`${path} noindex`);
    if (!summarizeCheck(`${routeName} canonical matches`, canonical === expectedCanonical, canonical || 'missing')) {
      failures.push(`${path} canonical`);
    }
  }

  for (const path of citationPages) {
    const page = await getText(`${ORIGIN}${path}`);
    for (const signal of expectedCitationSignals) {
      if (!summarizeCheck(`${path} contains ${signal}`, page.text.includes(signal))) {
        failures.push(`${path} missing ${signal}`);
      }
    }

    for (const signal of forbiddenCitationSignals) {
      if (!summarizeCheck(`${path} does not contain stale ${signal}`, !page.text.includes(signal))) {
        failures.push(`${path} stale ${signal}`);
      }
    }
  }

  if (submitIndexNowRequested && !allowIndexNowSubmit) {
    summarizeCheck(
      'IndexNow live submission blocked by safety guard',
      true,
      'set ALLOW_LIVE_INDEXNOW_SUBMIT=true with --submit-indexnow only after approval',
    );
  }

  const indexNow = await getText(`${ORIGIN}/api/indexnow${shouldSubmitIndexNow ? '?submit=true' : ''}`);
  let indexNowResult = null;
  try {
    indexNowResult = JSON.parse(indexNow.text);
  } catch {
    indexNowResult = null;
  }
  const indexNowOk = shouldSubmitIndexNow
    ? indexNow.ok && indexNowResult?.result?.ok === true && indexNowResult?.submitted > 0
    : indexNow.ok && indexNowResult?.total > 0;
  const indexNowLabel = shouldSubmitIndexNow ? 'IndexNow submission accepted' : 'IndexNow preview is reachable';
  const indexNowDetails = shouldSubmitIndexNow
    ? indexNow.text.trim()
    : `${indexNowResult?.total || 0} URLs; no live submission`;
  if (!summarizeCheck(indexNowLabel, indexNowOk, indexNowDetails)) failures.push('indexnow');

  if (failures.length) {
    console.error(`\nSEO daily check failed: ${failures.join('; ')}`);
    process.exit(1);
  }

  console.log('\nSEO daily check passed.');
} catch (error) {
  console.error('SEO daily check crashed:', error);
  process.exit(1);
}
