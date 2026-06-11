import { execSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { blogPosts } from '@/lib/blogData';
import { educationArticles } from '@/lib/educationData';
import { showcaseProjects } from '@/lib/showcaseData';
import { SITE_URL } from '@/lib/seo';
import { getAllLocalServicePages } from '@/data/localServicePages';

// Tier dates are fallbacks for entries whose source file we cannot resolve
// (blog posts, education articles, showcase projects come from data files,
// not per-route page.js files). For static routes we resolve the actual
// last-modified date from git — Google discounts sitemaps where lastMod
// inflates on every deploy without real content changes.
//
// Tier 1: high-velocity commercial pages
// Tier 2: city/service hubs
// Tier 3: support pages, blog index, secondary services
// Tier 4: legal, team, evergreen
function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().split('T')[0];
}
const TIER1 = daysAgo(0);
const TIER2 = daysAgo(7);
const TIER3 = daysAgo(30);
const TIER4 = daysAgo(180);

// Maps a URL path to the source page.js file. Returns null if no file found
// (route comes from a dynamic data source, or path is the homepage with no
// extra segment).
const APP_ROOT = resolve(process.cwd(), 'src/app');
const PAGE_EXTENSIONS = ['page.js', 'page.jsx', 'page.tsx', 'page.ts'];

function pathToPageFile(urlPath) {
  // Normalize: '' or '/' → root segment
  const segment = urlPath === '' || urlPath === '/' ? '' : urlPath.replace(/^\//, '');
  for (const ext of PAGE_EXTENSIONS) {
    const f = resolve(APP_ROOT, segment, ext);
    if (existsSync(f)) return f;
  }
  return null;
}

// Returns last git commit date (YYYY-MM-DD) for a file, or null if git is
// unavailable / file has no history (e.g. shallow clones in CI).
function gitMtime(filePath) {
  try {
    const out = execSync(
      `git log -1 --format=%cI -- "${filePath}"`,
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], cwd: process.cwd() }
    ).trim();
    if (!out) return null;
    return out.split('T')[0];
  } catch {
    return null;
  }
}

// Filesystem mtime fallback when git is unavailable.
function fsMtime(filePath) {
  try {
    return statSync(filePath).mtime.toISOString().split('T')[0];
  } catch {
    return null;
  }
}

// Resolves the most accurate lastModified date for a route, with a tiered
// fallback ladder: git mtime → fs mtime → caller-supplied tier date.
function resolveLastMod(urlPath, tierFallback) {
  const file = pathToPageFile(urlPath);
  if (!file) return tierFallback;
  return gitMtime(file) || fsMtime(file) || tierFallback;
}

// Paths to exclude from sitemap (Technical Package Sprint 1)
const EXCLUDE_PATHS = [
  '/admin',
  '/api',
  '/draft',
  // Redirect sources from next.config.mjs
  '/about-loudoun-deck-company',
  '/why-choose-us',
  '/our-process',
  '/faq-deck-building',
  '/project-gallery',
  '/contacts',
  '/blog-deck-tips',
  '/free-estimates',
  '/home-2',
  '/the-ultimate-deck-building-guide',
  '/services/new-decks-installation',
  '/services/outdoor-power-washing',
  '/services/gazebos-and-pergolas',
  '/services/fences',
  '/top-decks-build-near-you',
  '/get-quote',
  '/deck-builder-in-loudoun-county',
  '/deck-builder-in-fairfax-county',
  '/deck-builder-in-prince-william-county',
  // Phase 1 Cleanup Exclusions
  '/showcase/rooftop-deck-washington-dc',
  '/blog/trex-vs-timbertech-vs-azek',
];

const educationPriorityOverrides = new Map([
  ['deck-stair-code-rise-run-virginia', { priority: 0.86, freq: 'weekly' }],
  ['deck-stair-construction-diagram', { priority: 0.86, freq: 'weekly' }],
  ['ledger-board-flashing-deck-attachment-virginia', { priority: 0.86, freq: 'weekly' }],
  ['deck-snow-load-requirements-virginia', { priority: 0.84, freq: 'weekly' }],
  ['understanding-deck-load-paths', { priority: 0.84, freq: 'weekly' }],
  ['soil-bearing-capacity-deck-footings-va', { priority: 0.84, freq: 'weekly' }],
  ['deck-understructure-guide', { priority: 0.82, freq: 'weekly' }],
  ['deck-stair-safety-inspection-checklist', { priority: 0.82, freq: 'weekly' }],
  ['common-deck-stair-inspection-failures-virginia', { priority: 0.82, freq: 'weekly' }],
  ['fairfax-county-deck-setbacks-zoning', { priority: 0.80, freq: 'weekly' }],
  ['hoa-deck-approval-guidelines-nova', { priority: 0.80, freq: 'weekly' }],
]);

export default async function sitemap() {
  const baseUrl = SITE_URL;

  // Filter helper
  const isExcluded = (path) => EXCLUDE_PATHS.some(ex => {
    return path.startsWith(ex);
  });

	const staticPages = [
		// Tier 1 - Homepage & top commercial pages
		{ 
		  path: "", 
		  priority: 1.00, 
		  lastMod: TIER1, 
		  freq: "daily",
		  videos: [
			{
			  thumbnail_loc: `${baseUrl}/og-default.webp`,
			  title: 'Craftsmanship in Motion | Loudoun Decks',
			  description: 'See how Loudoun Decks transforms Northern Virginia backyards into luxury outdoor living spaces with custom Trex decks and screened porches.',
			  content_loc: `${baseUrl}/introvideo.mp4`,
			  publication_date: '2026-04-23T08:00:00.000Z',
			}
		  ]
		},
		{ path: "/deck-builder-northern-virginia", priority: 0.98, lastMod: TIER1, freq: "weekly" },
		{ path: "/deck-builders-loudoun",        priority: 0.95, lastMod: TIER1, freq: "weekly" },
		{ path: "/deck-builder-ashburn-va",      priority: 0.92, lastMod: TIER1, freq: "weekly" },
		{ path: "/deck-builder-leesburg-va",     priority: 0.92, lastMod: TIER1, freq: "weekly" },
		{ path: "/deck-builder-reston-va",       priority: 0.90, lastMod: TIER1, freq: "weekly" },
		// REMOVED: non-canonical (canonical is /deck-design-ideas-2026)
		{ path: "/deck-repair-loudoun-county",             priority: 0.92, lastMod: TIER1, freq: "weekly" },

		// Tier 2 - Core service pages
		{ path: "/composite-decks",              priority: 0.90, lastMod: TIER2, freq: "weekly" },
		{ path: "/composite-deck-builder-loudoun", priority: 0.92, lastMod: TIER1, freq: "weekly" },
		{ path: "/trex-decks",                   priority: 0.90, lastMod: TIER2, freq: "weekly" },
		{ path: "/wood-decks",                   priority: 0.90, lastMod: TIER1, freq: "weekly" },
		// /deck-replacement removed — redirects to /services/deck-replacement (already in sitemap below)
		// /deck-remodeling removed — page canonical points to /services/deck-resurfacing
		// (intentional consolidation). Submitting it caused "Alternate page with proper
		// canonical tag" in GSC. The canonical target is already in the sitemap below.
		// /deck-repair removed — page canonical points to /services/deck-repair
		// (intentional consolidation). NOTE: do NOT add to EXCLUDE_PATHS — startsWith would
		// also drop /deck-repair-loudoun-county, which is self-canonical and must stay.
		{ path: "/services",                     priority: 0.90, lastMod: TIER2, freq: "weekly" },
		{ path: "/services/new-decks",           priority: 0.85, lastMod: TIER2, freq: "weekly" },
		{ path: "/services/deck-resurfacing",    priority: 0.85, lastMod: TIER2, freq: "weekly" },
		{ path: "/services/deck-repair", priority: 0.90, lastMod: TIER2, freq: "weekly" },
		{ path: "/services/porches",             priority: 0.90, lastMod: TIER2, freq: "weekly" },
		{ path: "/services/porches/front-porch", priority: 0.80, lastMod: TIER2, freq: "monthly" },
		{ path: "/services/porches/open-porch",  priority: 0.80, lastMod: TIER2, freq: "monthly" },
		// /services/porches/screened-porch removed — page canonical points to
		// /screened-porch-builder-northern-virginia (intentional consolidation; that
		// geo page is in the sitemap below). Was triggering "Duplicate, Google chose
		// different canonical" in GSC.
		{ path: "/services/gazebo-pergola",      priority: 0.85, lastMod: TIER2, freq: "weekly" },
		{ path: "/services/deck-maintenance",    priority: 0.80, lastMod: TIER2, freq: "monthly" },
		{ path: "/services/deck-inspection",     priority: 0.80, lastMod: TIER2, freq: "monthly" },
		{ path: "/near-you",                     priority: 0.85, lastMod: TIER2, freq: "weekly" },
		{ path: "/near-you/loudoun-county",      priority: 0.85, lastMod: TIER2, freq: "weekly" },
		{ path: "/near-you/fairfax-county",      priority: 0.85, lastMod: TIER2, freq: "weekly" },
		{ path: "/near-you/prince-william-county", priority: 0.85, lastMod: TIER2, freq: "weekly" },
		{ path: "/near-you/arlington-county",    priority: 0.85, lastMod: TIER2, freq: "weekly" },
		{ path: "/near-you/stafford-county",     priority: 0.85, lastMod: TIER2, freq: "weekly" },

                // Tier 3 - Secondary & support pages
                { path: "/services/patios",              priority: 0.85, lastMod: TIER3, freq: "monthly" },
                { path: "/services/fence",               priority: 0.85, lastMod: TIER3, freq: "monthly" },
                { path: "/services/fence-cleaning",      priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/services/deck-washing",        priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/services/deck-replacement",    priority: 0.85, lastMod: TIER3, freq: "monthly" },
                { path: "/services/concrete-washing",    priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/services/outdoor-washing",     priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/services/house-siding-washing", priority: 0.65, lastMod: TIER3, freq: "monthly" },
                { path: "/services/fire-pits",           priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/services/trex-railings",       priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/services/trex-calm-shell",     priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/services/under-deck-patios",   priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/services/windows",             priority: 0.65, lastMod: TIER3, freq: "monthly" },
                { path: "/services/entry-doors",         priority: 0.65, lastMod: TIER3, freq: "monthly" },
                { path: "/faqs",                         priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/showcase",                     priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/houzz-deck-projects",          priority: 0.80, lastMod: TIER1, freq: "monthly" },
                { path: "/blog",                         priority: 0.70, lastMod: TIER3, freq: "weekly" },
                { path: "/education",                    priority: 0.75, lastMod: TIER1, freq: "weekly" },
                { path: "/contact",                      priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/referral-partners",            priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/bbb-accredited-deck-builder-virginia", priority: 0.85, lastMod: TIER1, freq: "monthly" },
                { path: "/deck-financing",               priority: 0.85, lastMod: TIER1, freq: "monthly" },
                { path: "/scholarship",                  priority: 0.60, lastMod: TIER1, freq: "yearly" },
                { path: "/social",                       priority: 0.55, lastMod: TIER1, freq: "monthly" },
                { path: "/get-estimate",                 priority: 0.85, lastMod: TIER1, freq: "weekly" },

                // Tier 1.5 - High-intent keyword/content pages (new)
                { path: "/screened-porch-builder-northern-virginia",   priority: 0.95, lastMod: TIER1, freq: "weekly" },
                // /how-much-does-a-deck-cost-northern-virginia removed 2026-05-26:
                // 301 → /composite-deck-cost-northern-virginia (cannibalization fix).
                // Size-specific cost pages (size-keyword capture, complementary to canonical)
                { path: "/400-square-foot-deck-cost-northern-virginia", priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/600-square-foot-deck-cost-northern-virginia", priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/800-square-foot-deck-cost-northern-virginia", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-cost-12x20-northern-virginia",          priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-cost-16x20-northern-virginia",          priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-cost-20x20-northern-virginia",          priority: 0.90, lastMod: TIER1, freq: "weekly" },
                // Specialty deck types — rooftop is the Tysons/Arlington urban-core specialty
                { path: "/rooftop-deck-builder-northern-virginia",     priority: 0.85, lastMod: TIER1, freq: "weekly" },
                // Premium HOA hub pages (Loudoun + Centreville/Fairfax communities)
                { path: "/lansdowne-hoa-deck-rules",                   priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/one-loudoun-hoa-deck-rules",                 priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/stone-ridge-hoa-deck-rules",                 priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/belmont-country-club-hoa-deck-rules",        priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/sully-station-hoa-deck-rules",               priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/virginia-run-hoa-deck-rules",                priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/trex-vs-timbertech-vs-azek",                 priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/screened-porch-cost-northern-virginia",       priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/composite-deck-vs-wood-deck-virginia",       priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/does-a-deck-add-value-to-your-home",         priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/hoa-deck-rules-northern-virginia",           priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-vs-patio-which-is-right",               priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/best-time-to-build-a-deck-northern-virginia", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/how-to-choose-a-deck-builder-northern-virginia", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/how-long-does-a-composite-deck-last",        priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-permit-loudoun-county-virginia",        priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-permit-fairfax-county-virginia",        priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-permit-arlington-county-virginia",      priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-mclean-va",                     priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/outdoor-kitchen-builder-northern-virginia",   priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-staining-northern-virginia",            priority: 0.85, lastMod: TIER1, freq: "weekly" },
                // /deck-financing-northern-virginia redirects to /deck-financing.
                // Keep only the canonical financing campaign URL in the sitemap.

                // Tier 1.5b - Deep competitor analysis pages (batch 2)
                { path: "/how-long-to-build-a-deck-northern-virginia",  priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-railing-options-northern-virginia",      priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/porch-vs-deck-which-should-you-build",       priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-lighting-ideas-northern-virginia",      priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-maintenance-checklist-virginia",        priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/winterize-your-deck-northern-virginia",      priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-warranty-guide-northern-virginia",      priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-roi-calculator-northern-virginia",      priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-materials-comparison-virginia",         priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-footing-code-northern-virginia",        priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/loudoun-county-hoa-deck-rules",              priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/brambleton-hoa-deck-rules",                  priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/ashburn-village-hoa-deck-rules",             priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/broadlands-hoa-deck-rules",                  priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/second-story-deck-builder-northern-virginia", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/what-size-deck-should-i-build",              priority: 0.85, lastMod: TIER1, freq: "weekly" },

                // Tier 1.5c - Final batch keyword pages
                { path: "/porch-repair-vs-replacement-northern-virginia", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-enclosure-ideas-northern-virginia",       priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/pool-deck-builder-northern-virginia",          priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/pet-friendly-deck-design",                     priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/under-deck-ceiling-ideas",                     priority: 0.85, lastMod: TIER1, freq: "weekly" },

                // Before & After + Authority pages
                { path: "/before-and-after",                            priority: 0.90, lastMod: TIER1, freq: "weekly" },

                // Authority & E-E-A-T pages
                { path: "/about/certifications-and-licenses",           priority: 0.80, lastMod: TIER1, freq: "monthly" },
                { path: "/about/warranty",                              priority: 0.75, lastMod: TIER2, freq: "monthly" },
                { path: "/areas-we-serve",                              priority: 0.85, lastMod: TIER1, freq: "monthly" },
                { path: "/reviews",                                     priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/review",                                      priority: 0.70, lastMod: TIER1, freq: "monthly" },
                { path: "/ldn-decks-reviews-yelp",                     priority: 0.70, lastMod: TIER1, freq: "monthly" },

                // Geo landing pages (standalone — premium markets)
                { path: "/deck-builder-great-falls-va",                 priority: 0.92, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-vienna-va",                      priority: 0.90, lastMod: TIER1, freq: "weekly" },

                // Additional keyword pages
                { path: "/cable-railing-for-decks-northern-virginia",   priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/paver-vs-flagstone-patio-northern-virginia",  priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/multi-level-deck-builder-northern-virginia",  priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/louvered-pergola-northern-virginia",          priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/three-season-room-northern-virginia",         priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/how-tariffs-affect-deck-prices-2026",         priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/northern-virginia-deck-building-guide",       priority: 0.95, lastMod: TIER1, freq: "weekly" },
                { path: "/eco-friendly-composite-decking",              priority: 0.80, lastMod: TIER1, freq: "monthly" },
                { path: "/questions-to-ask-before-building-a-deck",     priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/trex-transcend-review-northern-virginia",       priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-design-ideas-2026",                      priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/best-deck-stain-sealer-virginia",             priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/outdoor-living-trends-northern-virginia-2026", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-centreville-va",                 priority: 0.92, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-safety-inspection-checklist",            priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-herndon-va",                     priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-manassas-va",                    priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-woodbridge-va",                  priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-chantilly-va",                   priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-permit-prince-william-county-virginia",  priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/lead-magnets",                                priority: 0.65, lastMod: TIER1, freq: "monthly" },
                { path: "/deck-builder-sterling-va",                    priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-fairfax-va",                     priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-oakton-va",                      priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-falls-church-va",                priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-gainesville-va",                 priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-haymarket-va",                   priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-tysons-va",                      priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-alexandria-va",                  priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-arlington-va",                   priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-brambleton-va",                  priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-south-riding-va",                priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/composite-deck-cost-northern-virginia",        priority: 0.95, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-resurfacing-vs-replacement",             priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-burke-va",                       priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-springfield-va",                 priority: 0.88, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-lorton-va",                      priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-purcellville-va",                priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/stamped-concrete-patio-northern-virginia",    priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-stafford-va",                    priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/pressure-washing-deck-northern-virginia",     priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-bristow-va",                     priority: 0.85, lastMod: TIER1, freq: "weekly" },
                // /northern-virginia-deck-cost-report-2026 removed 2026-05-26:
                // 301 → /composite-deck-cost-northern-virginia (cannibalization fix).
                { path: "/covered-deck-builder-northern-virginia",      priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-resurfacing-northern-virginia",         priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/monthly-payment-composite-deck-northern-virginia", priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/timbertech-azek-deck-cost-northern-virginia", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/trex-deck-cost-monthly-payment",             priority: 0.80, lastMod: TIER1, freq: "weekly" },
                { path: "/ashburn-composite-deck-cost-financing",      priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/composite-deck-cost-by-size",                priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/covered-deck-cost-northern-virginia",        priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-permit-hoa-cost-loudoun-county",        priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/resurface-or-replace-deck-financing",        priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/credit-score-deck-financing",                priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-lighting-railings-stairs-addon-cost",   priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/best-time-to-finance-build-deck-northern-virginia", priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/mclean-great-falls-premium-deck-budget",      priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/wood-vs-composite-deck-long-term-cost",      priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/outdoor-living-northern-virginia",            priority: 0.95, lastMod: TIER1, freq: "weekly" },
                { path: "/trex-performance-products",                   priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/timbertech-decks",                            priority: 0.90, lastMod: TIER1, freq: "weekly" },
                // REMOVED: canonicalized to /deck-design-ideas-2026

                // Missing service page
                { path: "/services/deck-stair-lighting",               priority: 0.75, lastMod: TIER3, freq: "monthly" },

                // Linkable assets & authority pages
                { path: "/tools/deck-cost-estimator-northern-virginia", priority: 0.90, lastMod: TIER1, freq: "monthly" },
                { path: "/deck-cost-calculator",                       priority: 0.90, lastMod: TIER1, freq: "monthly" },
                { path: "/deck-payment-estimator",                     priority: 0.85, lastMod: TIER1, freq: "monthly" },
                { path: "/tools",                                      priority: 0.70, lastMod: TIER1, freq: "monthly" },
                { path: "/tools/deck-footing-depth-calculator-virginia", priority: 0.88, lastMod: TIER1, freq: "monthly" },
                { path: "/tools/deck-beam-span-calculator-virginia",   priority: 0.88, lastMod: TIER1, freq: "monthly" },
                { path: "/tools/deck-joist-span-calculator-virginia",  priority: 0.88, lastMod: TIER1, freq: "monthly" },
                { path: "/tools/deck-load-calculator-virginia",        priority: 0.88, lastMod: TIER1, freq: "monthly" },
                { path: "/tools/deck-stair-calculator",                priority: 0.88, lastMod: TIER1, freq: "monthly" },
                { path: "/press",                                      priority: 0.80, lastMod: TIER1, freq: "monthly" },

                // Tier 4 - Evergreen / rarely changes
                { path: "/about",                        priority: 0.65, lastMod: TIER4, freq: "monthly" },
                { path: "/about/why-choose-us",          priority: 0.65, lastMod: TIER4, freq: "monthly" },
                { path: "/about/process",                priority: 0.60, lastMod: TIER4, freq: "monthly" },
                { path: "/team",                         priority: 0.55, lastMod: TIER4, freq: "monthly" },
                { path: "/privacy-policy",               priority: 0.30, lastMod: TIER4, freq: "yearly" },
                { path: "/terms-of-service",             priority: 0.30, lastMod: TIER4, freq: "yearly" },
        ];

        // /near-you/{county}/{city} pages are intentionally noindex (see buildMetadata
        // in lib/seo.js) — kept out of the sitemap so we never submit noindexed URLs.
        // The 5 indexable /near-you/{county} hubs remain in staticPages above.

        // Blog posts — dynamically generated from blogData with real publish dates
        const today = new Date();
        const blogPaths = blogPosts
                .filter(post => {
                        const postDate = new Date(post.date);
                        return postDate <= today;
                })
                .map(post => {
                // Parse date like "April 4, 2026" to ISO
                const parsed = new Date(post.date);
                const lastMod = isNaN(parsed.getTime()) ? TIER3 : parsed.toISOString().split('T')[0];
                return {
                        path: `/blog/${post.slug}`,
                        priority: 0.70,
                        lastMod,
                        freq: "monthly",
                };
        });

        // Education articles — dynamically generated from educationData
        const educationPaths = educationArticles
                .filter(post => {
                        const postDate = new Date(post.date);
                        return postDate <= today;
                })
                .map(post => {
                const parsed = new Date(post.date);
                const lastMod = isNaN(parsed.getTime()) ? TIER3 : parsed.toISOString().split('T')[0];
                const override = educationPriorityOverrides.get(post.slug) || {};
                return {
                        path: `/education/${post.slug}`,
                        priority: override.priority || 0.70,
                        lastMod,
                        freq: override.freq || "monthly",
                };
        });

        // Showcase projects — dynamically generated from showcaseData
        const showcasePaths = showcaseProjects.map(project => ({
                path: `/showcase/${project.slug}`,
                priority: 0.60,
                lastMod: TIER3,
                freq: "monthly",
        }));

        // Programmatic local service pages requested for Loudoun, Fairfax and
        // Prince William. Lower priority than core hubs to keep crawl emphasis
        // on the strongest pages while still exposing every city/service URL.
        const localServicePaths = getAllLocalServicePages().map(({ path, service }) => ({
                path,
                priority: service.path === 'service' ? 0.82 : 0.78,
                lastMod: TIER1,
                freq: "monthly",
        }));

        const allPages = [...staticPages, ...localServicePaths, ...blogPaths, ...educationPaths, ...showcasePaths]
                .filter(p => !isExcluded(p.path));

        return allPages.map(({ path, lastMod, priority, freq, videos }) => ({
                url: `${baseUrl}${path}`,
                lastModified: resolveLastMod(path, lastMod),
                changeFrequency: freq,
                priority,
                ...(videos && { videos }),
        }));
}
