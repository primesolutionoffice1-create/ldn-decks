import { SITE_URL } from '@/lib/seo';
import { getAllCityPaths } from '@/data/cityData';
import { blogPosts } from '@/lib/blogData';
import { showcaseProjects } from '@/lib/showcaseData';

// IndexNow API endpoint — submit URLs to Bing, Yandex for instant indexing
// Usage: POST /api/indexnow or GET /api/indexnow?submit=true
// Docs: https://www.indexnow.org/

const INDEXNOW_KEY = 'ldndecks2026indexnow';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const submit = searchParams.get('submit');

  // Build complete URL list
  const urls = buildAllUrls();

  if (submit === 'true') {
    // Actually submit to IndexNow
    const result = await submitToIndexNow(urls);
    return Response.json({ submitted: urls.length, result });
  }

  // Preview mode — show what would be submitted
  return Response.json({
    total: urls.length,
    key: INDEXNOW_KEY,
    note: 'Add ?submit=true to actually submit to IndexNow',
    urls,
  });
}

function buildAllUrls() {
  const urls = [];

  // Static high-priority pages
  const staticPages = [
    '', '/services', '/about', '/contact', '/faqs', '/showcase', '/reviews', '/blog', '/before-and-after',
    '/services/new-decks', '/services/deck-resurfacing', '/services/porches',
    '/services/porches/screened-porch', '/services/porches/open-porch', '/services/porches/front-porch',
    '/services/gazebo-pergola', '/services/deck-maintenance', '/services/deck-inspection',
    '/services/patios', '/services/fence', '/services/fire-pits', '/services/deck-washing',
    '/services/deck-replacement', '/services/trex-railings', '/services/under-deck-patios',
    '/services/fence-cleaning', '/services/concrete-washing', '/services/outdoor-washing',
    '/services/house-siding-washing', '/services/windows', '/services/entry-doors',
    '/services/trex-calm-shell',
    '/deck-design-ideas-northern-virginia-2026', '/deck-cost-calculator', '/team', '/press',
    '/near-you', '/near-you/loudoun-county', '/near-you/fairfax-county', '/near-you/prince-william-county',
    '/areas-we-serve', '/about/certifications-and-licenses', '/about/why-choose-us', '/about/process',
    '/northern-virginia-deck-building-guide',
    '/how-much-does-a-deck-cost-northern-virginia',
    '/trex-vs-timbertech-vs-azek',
    '/composite-deck-vs-wood-deck-virginia',
    '/does-a-deck-add-value-to-your-home',
    '/screened-porch-cost-northern-virginia',
    '/how-to-choose-a-deck-builder-northern-virginia',
    '/how-long-does-a-composite-deck-last',
    '/deck-permit-fairfax-county-virginia',
    '/hoa-deck-rules-northern-virginia',
    '/best-time-to-build-a-deck-northern-virginia',
    '/deck-maintenance-checklist-virginia',
    '/deck-railing-options-northern-virginia',
    '/deck-vs-patio-which-is-right',
    '/deck-design-ideas-2026',
    '/deck-safety-inspection-checklist',
    '/winterize-your-deck-northern-virginia',
    '/how-long-to-build-a-deck-northern-virginia',
    '/deck-financing-northern-virginia',
    '/deck-staining-northern-virginia',
    '/porch-vs-deck-which-should-you-build',
    '/deck-lighting-ideas-northern-virginia',
    '/cable-railing-for-decks-northern-virginia',
    '/eco-friendly-composite-decking',
    '/pet-friendly-deck-design',
    '/under-deck-ceiling-ideas',
    '/what-size-deck-should-i-build',
    '/deck-enclosure-ideas-northern-virginia',
    '/paver-vs-flagstone-patio-northern-virginia',
    '/multi-level-deck-builder-northern-virginia',
    '/pool-deck-builder-northern-virginia',
    '/outdoor-kitchen-builder-northern-virginia',
    '/outdoor-living-northern-virginia',
    '/services/gazebo-pergola',
    '/services/fence',
    '/services/fire-pits',
    '/pressure-washing-deck-northern-virginia',
    '/stamped-concrete-patio-northern-virginia',
    '/questions-to-ask-before-building-a-deck',
    '/how-tariffs-affect-deck-prices-2026',
    '/deck-resurfacing-vs-replacement',
    '/composite-deck-cost-northern-virginia',
    '/before-and-after',
    '/deck-permit-loudoun-county-virginia',
    '/trex-transcend-review-northern-virginia',
    '/porch-repair-vs-replacement-northern-virginia',
    '/deck-permit-prince-william-county-virginia',
    '/deck-repair-loudoun-county',
    '/deck-builders-loudoun',
    '/composite-deck-builder-loudoun',
    '/composite-decks', '/trex-decks', '/timbertech-decks', '/deck-repair', '/services/deck-replacement', '/deck-remodeling',
  ];

  for (const path of staticPages) {
    urls.push(`${SITE_URL}${path}`);
  }

  // City builder pages (static)
  const cityBuilderPages = [
    'ashburn', 'leesburg', 'reston', 'mclean', 'great-falls', 'vienna',
    'centreville', 'herndon', 'manassas', 'woodbridge', 'chantilly',
    'fairfax', 'oakton', 'falls-church', 'gainesville', 'haymarket',
    'tysons', 'alexandria', 'arlington', 'brambleton', 'south-riding',
    'burke', 'springfield', 'lorton', 'purcellville', 'stafford',
    'bristow', 'sterling',
  ];
  for (const city of cityBuilderPages) {
    urls.push(`${SITE_URL}/deck-builder-${city}-va`);
  }

  // Dynamic city pages
  const cityPaths = getAllCityPaths();
  for (const cp of cityPaths) {
    urls.push(`${SITE_URL}/near-you/${cp.county}/${cp.city}`);
  }

  // Blog posts
  for (const post of blogPosts) {
    urls.push(`${SITE_URL}/blog/${post.slug}`);
  }

  // Showcase pages
  for (const project of showcaseProjects) {
    urls.push(`${SITE_URL}/showcase/${project.slug}`);
  }

  return urls;
}

async function submitToIndexNow(urls) {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'ldndecks.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls.slice(0, 10000), // IndexNow max 10k per request
      }),
    });
    return { status: response.status, ok: response.ok };
  } catch (error) {
    return { error: error.message };
  }
}
