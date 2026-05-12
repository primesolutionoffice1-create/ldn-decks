import { getAllCityPaths, canonicalCities } from '@/data/cityData';
import { blogPosts } from '@/lib/blogData';
import { showcaseProjects } from '@/lib/showcaseData';
import { SITE_URL } from '@/lib/seo';

// Tiered lastModified dates — derived from build time so they stay fresh on every deploy.
// Hardcoded dates went stale; Google discounts sitemaps whose lastMod doesn't move.
// Tier 1: high-velocity commercial pages (touched every release)
// Tier 2: city/service hubs (refreshed roughly weekly)
// Tier 3: support pages, blog index, secondary services (~monthly)
// Tier 4: legal, team, evergreen pages (~biannual)
function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().split('T')[0];
}
const TIER1 = daysAgo(0);
const TIER2 = daysAgo(7);
const TIER3 = daysAgo(30);
const TIER4 = daysAgo(180);

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
  '/near-you',
  '/llms.txt',
  '/llms-full.txt',
  '/showcase/rooftop-deck-washington-dc',
];

export default async function sitemap() {
  const baseUrl = SITE_URL;

  // Filter helper
  const isExcluded = (path) => EXCLUDE_PATHS.some(ex => path.startsWith(ex));

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
                { path: "/deck-builders-loudoun",        priority: 0.95, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-ashburn-va",      priority: 0.92, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-leesburg-va",     priority: 0.92, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-reston-va",       priority: 0.90, lastMod: TIER1, freq: "weekly" },
                // REMOVED: non-canonical (canonical is /deck-design-ideas-2026)
                { path: "/deck-repair-loudoun-county",             priority: 0.92, lastMod: TIER1, freq: "weekly" },

                // Tier 2 - Core service pages
                { path: "/composite-decks",              priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/trex-decks",                   priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/wood-decks",                   priority: 0.90, lastMod: TIER1, freq: "weekly" },
                // /deck-replacement removed — redirects to /services/deck-replacement (already in sitemap below)
                { path: "/deck-remodeling",              priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/deck-repair",                  priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/services",                     priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/services/new-decks",           priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/services/deck-resurfacing",    priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/services/porches",             priority: 0.90, lastMod: TIER2, freq: "weekly" },
                { path: "/services/porches/front-porch", priority: 0.80, lastMod: TIER2, freq: "monthly" },
                { path: "/services/porches/open-porch",  priority: 0.80, lastMod: TIER2, freq: "monthly" },
                { path: "/services/porches/screened-porch", priority: 0.85, lastMod: TIER2, freq: "monthly" },
                { path: "/services/gazebo-pergola",      priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/services/deck-maintenance",    priority: 0.80, lastMod: TIER2, freq: "monthly" },
                { path: "/services/deck-inspection",     priority: 0.80, lastMod: TIER2, freq: "monthly" },
                { path: "/near-you",                     priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/near-you/loudoun-county",      priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/near-you/fairfax-county",      priority: 0.85, lastMod: TIER2, freq: "weekly" },
                { path: "/near-you/prince-william-county", priority: 0.85, lastMod: TIER2, freq: "weekly" },
                // REMOVED: 308-redirects to /deck-builder-arlington-va
                // REMOVED: 308-redirects to /deck-builder-stafford-va

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
                { path: "/houzz-deck-projects",          priority: 0.75, lastMod: TIER3, freq: "monthly" },
                { path: "/blog",                         priority: 0.70, lastMod: TIER3, freq: "weekly" },
                { path: "/contact",                      priority: 0.70, lastMod: TIER3, freq: "monthly" },
                { path: "/bbb-accredited-deck-builder-virginia", priority: 0.85, lastMod: TIER1, freq: "monthly" },
                { path: "/deck-financing",               priority: 0.85, lastMod: TIER1, freq: "monthly" },
                { path: "/scholarship",                  priority: 0.60, lastMod: TIER1, freq: "yearly" },
                { path: "/social",                       priority: 0.50, lastMod: TIER1, freq: "monthly" },
                { path: "/get-estimate",                 priority: 0.85, lastMod: TIER1, freq: "weekly" },

                // Tier 1.5 - High-intent keyword/content pages (new)
                { path: "/screened-porch-builder-northern-virginia",   priority: 0.95, lastMod: TIER1, freq: "weekly" },
                { path: "/how-much-does-a-deck-cost-northern-virginia", priority: 0.95, lastMod: TIER1, freq: "weekly" },
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
                { path: "/deck-builder-mclean-va",                     priority: 0.90, lastMod: TIER1, freq: "weekly" },
                { path: "/outdoor-kitchen-builder-northern-virginia",   priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-staining-northern-virginia",            priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-financing-northern-virginia",           priority: 0.80, lastMod: TIER1, freq: "weekly" },

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
                { path: "/loudoun-county-hoa-deck-rules",              priority: 0.85, lastMod: TIER1, freq: "weekly" },
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
                { path: "/areas-we-serve",                              priority: 0.85, lastMod: TIER1, freq: "monthly" },
                { path: "/reviews",                                     priority: 0.85, lastMod: TIER1, freq: "weekly" },

                // Geo landing pages (standalone — premium markets)
                { path: "/deck-builder-great-falls-va",                 priority: 0.92, lastMod: TIER1, freq: "weekly" },
                { path: "/deck-builder-vienna-va",                      priority: 0.90, lastMod: TIER1, freq: "weekly" },

                // Additional keyword pages
                { path: "/cable-railing-for-decks-northern-virginia",   priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/paver-vs-flagstone-patio-northern-virginia",  priority: 0.85, lastMod: TIER1, freq: "weekly" },
                { path: "/multi-level-deck-builder-northern-virginia",  priority: 0.90, lastMod: TIER1, freq: "weekly" },
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

                // Missing service page
                { path: "/services/deck-stair-lighting",               priority: 0.75, lastMod: TIER3, freq: "monthly" },

                // Linkable assets & authority pages
                { path: "/deck-cost-calculator",                       priority: 0.90, lastMod: TIER1, freq: "monthly" },
                { path: "/press",                                      priority: 0.50, lastMod: TIER1, freq: "monthly" },

                // AI discovery files
                { path: "/llms.txt",                                   priority: 0.50, lastMod: TIER1, freq: "monthly" },
                { path: "/llms-full.txt",                              priority: 0.50, lastMod: TIER1, freq: "monthly" },

                // Tier 4 - Evergreen / rarely changes
                { path: "/about",                        priority: 0.65, lastMod: TIER4, freq: "monthly" },
                { path: "/about/why-choose-us",          priority: 0.65, lastMod: TIER4, freq: "monthly" },
                { path: "/about/process",                priority: 0.60, lastMod: TIER4, freq: "monthly" },
                { path: "/team",                         priority: 0.55, lastMod: TIER4, freq: "monthly" },
                { path: "/privacy-policy",               priority: 0.30, lastMod: TIER4, freq: "yearly" },
                { path: "/terms-of-service",             priority: 0.30, lastMod: TIER4, freq: "yearly" },
        ];

        const cityPaths = getAllCityPaths()
                .filter(path => !canonicalCities.has(path.city))
                .map(path => ({
                        path: `/near-you/${path.county}/${path.city}`,
                        priority: 0.80,
                        lastMod: TIER2,
                        freq: "monthly",
                }));

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

        // Showcase projects — dynamically generated from showcaseData
        const showcasePaths = showcaseProjects.map(project => ({
                path: `/showcase/${project.slug}`,
                priority: 0.60,
                lastMod: TIER3,
                freq: "monthly",
        }));

        const allPages = [...staticPages, ...cityPaths, ...blogPaths, ...showcasePaths]
                .filter(p => !isExcluded(p.path));

        return allPages.map(({ path, priority, lastMod, freq, videos }) => ({
                url: `${baseUrl}${path}`,
                changeFrequency: freq,
                priority,
                lastModified: lastMod,
                ...(videos && { videos }),
        }));
}
