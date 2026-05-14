import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
                     // Core Pages
      { source: '/tag/trex-decking', destination: '/trex-decks', permanent: true },
      { source: '/tag/loudoun-county', destination: '/near-you/loudoun-county', permanent: true },
      { source: '/tag/gazebos', destination: '/services/gazebo-pergola', permanent: true },
      { source: '/composite-deck-builder-loudoun-2', destination: '/deck-builders-loudoun', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/best-composite-decking-virginia-trex-timbertech-fiberon', destination: '/trex-vs-timbertech-vs-azek', permanent: true },
      // BEAST plan Cluster H: legacy /blog/ URL competing with apex owner at #4
      // Explicit 301 (matches canonical-signal convention used for www→apex above)
      { source: '/blog/trex-vs-timbertech-vs-azek', destination: '/trex-vs-timbertech-vs-azek', statusCode: 301 },
      { source: '/rooftop-deck-washington-dc', destination: '/showcase/rooftop-deck-washington-dc', permanent: true },
      { source: '/trex-deck-builder-loudoun', destination: '/deck-builders-loudoun', permanent: true },
      { source: '/how-much-does-it-cost-to-build-a-deck-in-northern-virginia', destination: '/how-much-does-a-deck-cost-northern-virginia', permanent: true },
      { source: '/deck-resurfacing-vs-replacement-northern-virginia', destination: '/deck-resurfacing-vs-replacement', permanent: true },
      { source: '/terms-and-conditions', destination: '/privacy-policy', permanent: true },
      { source: '/choosing-right-deck-material-wood-vs-composite', destination: '/composite-deck-vs-wood-deck-virginia', permanent: true },
      
      // Batch 2 - Legacy & WordPress Remnants

      { source: '/blog-deck-tips/2', destination: '/blog', permanent: true },
      { source: '/ldn-decks-reviews-yelp', destination: '/reviews', permanent: true },
      { source: '/new-composite-deck-in-ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/new-deck-building-in-manassas', destination: '/deck-builder-manassas-va', permanent: true },
      { source: '/wood-multi-level-deck-in-chantilly', destination: '/deck-builder-chantilly-va', permanent: true },
      { source: '/tag/deck-builders', destination: '/near-you', permanent: true },
      { source: '/tag/deck-resurfacing', destination: '/services/deck-resurfacing', permanent: true },
      { source: '/tag/pavilions', destination: '/services/gazebo-pergola', permanent: true },
      { source: '/tag/decking-for-homes', destination: '/composite-decks', permanent: true },
      { source: '/tag/low-maintenance-decking', destination: '/composite-decks', permanent: true },
      { source: '/tag/licenced-contractor-in-virginia', destination: '/about', permanent: true },
      { source: '/cookie-policy', destination: '/privacy-policy', permanent: true },
      { source: '/tag/outdoor-decking-options', destination: '/composite-decks', permanent: true },
      { source: '/new-custom-wood-fence-ashburn', destination: '/services/fence', permanent: true },
      { source: '/deck-construction-in-reston', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/tag/screened-porch', destination: '/services/porches', permanent: true },
      { source: '/tag/enclosed-porch', destination: '/services/porches', permanent: true },
      { source: '/tag/composite-decking-pros-and-cons', destination: '/composite-deck-vs-wood-deck-virginia', permanent: true },
      
      // Batch 3 - More Location & Tag Fixes
      { source: '/tag/split-rail-fencing', destination: '/services/fence', permanent: true },

      { source: '/tag/deck-companies', destination: '/near-you', permanent: true },
      { source: '/deck-builder-in-loudoun-county/landing', destination: '/near-you/loudoun-county', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-dale-city', destination: '/near-you/prince-william-county/dale-city', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-stafford-county', destination: '/deck-builder-stafford-va', permanent: true },
      { source: '/tag/deck-installers', destination: '/near-you', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-bristow', destination: '/deck-builder-bristow-va', permanent: true },
      { source: '/deck-resurfacing', destination: '/services/deck-resurfacing', permanent: true },

      { source: '/new-decks-installation', destination: '/services/new-decks', permanent: true },
      { source: '/the-ultimate-deck-building-guide-avoid-these-common-mistakes', destination: '/blog', permanent: true },
      { source: '/composite-decks-essential-tips-for-choosing-the-perfect-builder', destination: '/how-to-choose-a-deck-builder-northern-virginia', permanent: true },
      { source: '/deck-builder-fairfax-county', destination: '/near-you/fairfax-county', permanent: true },
      { source: '/tag/deck-contractor-in-loudoun-county', destination: '/near-you/loudoun-county', permanent: true },
      { source: '/tag/deck-builder-near-me', destination: '/near-you', permanent: true },
      { source: '/tag/deck-installation', destination: '/services/new-decks', permanent: true },
      { source: '/tag/fence-repair', destination: '/services/fence', permanent: true },
      { source: '/tag/wood-vs-composite-decking', destination: '/composite-deck-vs-wood-deck-virginia', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-fairfax-station', destination: '/near-you/fairfax-county/fairfax-station', permanent: true },

      // Batch 4 - Additional Missing Pages
      { source: '/multi-level-deck-balcony-in-alexandria', destination: '/deck-builder-alexandria-va', permanent: true },
      { source: '/outdoor-projects', destination: '/showcase', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-arcola', destination: '/near-you/loudoun-county/arcola', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-dunn-loring', destination: '/near-you/fairfax-county/dunn-loring', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-belmont', destination: '/near-you/loudoun-county/belmont', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-fort-belvoir', destination: '/near-you/fairfax-county/fort-belvoir', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-merrifield', destination: '/near-you/fairfax-county/merrifield', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-mount-vernon', destination: '/near-you/fairfax-county/mount-vernon', permanent: true },

      { source: '/top-decks-build-near-you/deck-builder-in-hillsboro', destination: '/near-you/loudoun-county/hillsboro', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-occoquan', destination: '/near-you/prince-william-county/occoquan', permanent: true },
      { source: '/deck-projects-showcase/new-custom-wood-fence-ashburn', destination: '/services/fence', permanent: true },

      // Batch 5 - /feed/ cleanup and specific tags
      { source: '/top-decks-build-near-you/deck-builder-in-ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/tag/deck-in-fairfax/feed', destination: '/near-you/fairfax-county', permanent: true },

      { source: '/tag/vienna', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/tag/wood-fences', destination: '/services/fence', permanent: true },

      { source: '/deck-balcony-resurfacing-in-sterling', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/deck-projects-showcase/deck-builder-ashburn-va', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/deck-projects-showcase/deck-builder-ashburn', destination: '/deck-builder-ashburn-va', permanent: true },

      // Batch 6 - Path Normalization & Final Tag Cleanup

      { source: '/deck-repair-loudoun-county-va', destination: '/deck-repair-loudoun-county', permanent: true },
      { source: '/tag/:path*', destination: '/near-you', permanent: true }, // Catch-all for any remaining tag URLs
      { source: '/about-loudoun-deck-company', destination: '/about', permanent: true },
      { source: '/why-choose-us', destination: '/about/why-choose-us', permanent: true },
      { source: '/our-process', destination: '/about/process', permanent: true },
      { source: '/faq-deck-building', destination: '/faqs', permanent: true },
      { source: '/project-gallery', destination: '/showcase', permanent: true },
      { source: '/contacts', destination: '/contact', permanent: true },
      { source: '/blog-deck-tips', destination: '/blog', permanent: true },
      { source: '/free-estimates', destination: '/contact', permanent: true },

      { source: '/the-ultimate-deck-building-guide', destination: '/blog', permanent: true },
      { source: '/deck-replacement', destination: '/services/deck-replacement', permanent: true },

      // Services
      { source: '/services/new-decks-installation', destination: '/services/new-decks', permanent: true },
      { source: '/services/deck-repair', destination: '/services/deck-repair-and-structural-maintenance', permanent: true },
      { source: '/services/outdoor-power-washing', destination: '/services/outdoor-washing', permanent: true },
      { source: '/services/outdoor-power-washing/:path*', destination: '/services/outdoor-washing', permanent: true },
      { source: '/services/gazebos-and-pergolas', destination: '/services/gazebo-pergola', permanent: true },
      { source: '/services/fences', destination: '/services/fence', permanent: true },
      { source: '/deck-replacement', destination: '/services/deck-replacement', permanent: true },
      { source: '/fence-builder-northern-virginia', destination: '/services/fence', permanent: true },
      { source: '/fire-pit-builder-northern-virginia', destination: '/services/fire-pits', permanent: true },
      { source: '/pergola-builder-northern-virginia', destination: '/services/gazebo-pergola', permanent: true },

      // Location Hubs
      { source: '/top-decks-build-near-you', destination: '/near-you', permanent: true },
      { source: '/get-quote', destination: '/contact', permanent: true },
      { source: '/deck-builders', destination: '/near-you', permanent: true },
      { source: '/deck-builder', destination: '/near-you', permanent: true },
      { source: '/deck-builder-in-loudoun-county', destination: '/near-you/loudoun-county', permanent: true },
      { source: '/deck-builder-in-fairfax-county', destination: '/near-you/fairfax-county', permanent: true },
      { source: '/deck-builder-in-prince-william-county', destination: '/near-you/prince-william-county', permanent: true },

      // Loudoun County Cities
      { source: '/near-you/ashburn-va', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/near-you/ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/near-you/leesburg-va', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/near-you/leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/near-you/sterling-va', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/near-you/sterling', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/near-you/aldie-va', destination: '/near-you/loudoun-county/aldie', permanent: true },
      { source: '/near-you/aldie', destination: '/near-you/loudoun-county/aldie', permanent: true },
      { source: '/near-you/middleburg-va', destination: '/near-you/loudoun-county/middleburg', permanent: true },
      { source: '/near-you/middleburg', destination: '/near-you/loudoun-county/middleburg', permanent: true },
      { source: '/near-you/round-hill-va', destination: '/near-you/loudoun-county/round-hill', permanent: true },
      { source: '/near-you/round-hill', destination: '/near-you/loudoun-county/round-hill', permanent: true },
      { source: '/near-you/purcellville-va', destination: '/deck-builder-purcellville-va', permanent: true },
      { source: '/near-you/purcellville', destination: '/deck-builder-purcellville-va', permanent: true },

      // Fairfax County Cities
      { source: '/near-you/alexandria-va', destination: '/deck-builder-alexandria-va', permanent: true },
      { source: '/near-you/alexandria', destination: '/deck-builder-alexandria-va', permanent: true },
      { source: '/near-you/fairfax-va', destination: '/deck-builder-fairfax-va', permanent: true },
      { source: '/near-you/fairfax', destination: '/deck-builder-fairfax-va', permanent: true },
      { source: '/near-you/vienna-va', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/near-you/vienna', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/near-you/reston-va', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/near-you/reston', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/near-you/herndon-va', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/near-you/herndon', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/near-you/mclean-va', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/near-you/mclean', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/near-you/centreville-va', destination: '/deck-builder-centreville-va', permanent: true },
      { source: '/near-you/centreville', destination: '/deck-builder-centreville-va', permanent: true },

      // Prince William County Cities
      { source: '/near-you/manassas-va', destination: '/deck-builder-manassas-va', permanent: true },
      { source: '/near-you/manassas', destination: '/deck-builder-manassas-va', permanent: true },
      { source: '/near-you/woodbridge-va', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/near-you/woodbridge', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/near-you/haymarket-va', destination: '/deck-builder-haymarket-va', permanent: true },
      { source: '/near-you/haymarket', destination: '/deck-builder-haymarket-va', permanent: true },
      { source: '/near-you/gainesville-va', destination: '/deck-builder-gainesville-va', permanent: true },
      { source: '/near-you/gainesville', destination: '/deck-builder-gainesville-va', permanent: true },

      // 301 from /near-you/[county]/[city] → /deck-builder-[city]-va (canonical)
      { source: '/near-you/loudoun-county/ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/near-you/loudoun-county/leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/near-you/loudoun-county/sterling', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/near-you/loudoun-county/purcellville', destination: '/deck-builder-purcellville-va', permanent: true },
      { source: '/near-you/loudoun-county/brambleton', destination: '/deck-builder-brambleton-va', permanent: true },
      { source: '/near-you/loudoun-county/south-riding', destination: '/deck-builder-south-riding-va', permanent: true },
      { source: '/near-you/fairfax-county/alexandria', destination: '/deck-builder-alexandria-va', permanent: true },
      { source: '/near-you/fairfax-county/fairfax', destination: '/deck-builder-fairfax-va', permanent: true },
      { source: '/near-you/fairfax-county/vienna', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/near-you/fairfax-county/reston', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/near-you/fairfax-county/herndon', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/near-you/fairfax-county/mclean', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/near-you/fairfax-county/centreville', destination: '/deck-builder-centreville-va', permanent: true },
      { source: '/near-you/fairfax-county/chantilly', destination: '/deck-builder-chantilly-va', permanent: true },
      { source: '/near-you/fairfax-county/falls-church', destination: '/deck-builder-falls-church-va', permanent: true },
      { source: '/near-you/fairfax-county/burke', destination: '/deck-builder-burke-va', permanent: true },
      { source: '/near-you/fairfax-county/springfield', destination: '/deck-builder-springfield-va', permanent: true },
      { source: '/near-you/fairfax-county/oakton', destination: '/deck-builder-oakton-va', permanent: true },
      { source: '/near-you/fairfax-county/great-falls', destination: '/deck-builder-great-falls-va', permanent: true },
      { source: '/near-you/fairfax-county/lorton', destination: '/deck-builder-lorton-va', permanent: true },
      { source: '/near-you/fairfax-county/tysons', destination: '/deck-builder-tysons-va', permanent: true },
      { source: '/near-you/prince-william-county/manassas', destination: '/deck-builder-manassas-va', permanent: true },
      { source: '/near-you/prince-william-county/woodbridge', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/near-you/prince-william-county/haymarket', destination: '/deck-builder-haymarket-va', permanent: true },
      { source: '/near-you/prince-william-county/gainesville', destination: '/deck-builder-gainesville-va', permanent: true },
      { source: '/near-you/prince-william-county/bristow', destination: '/deck-builder-bristow-va', permanent: true },
      { source: '/near-you/arlington-county/arlington', destination: '/deck-builder-arlington-va', permanent: true },
      { source: '/near-you/stafford-county/stafford', destination: '/deck-builder-stafford-va', permanent: true },

      // Bare county URLs returning 404 (Bing flagged) → redirect to existing city landing pages
      { source: '/near-you/arlington-county', destination: '/deck-builder-arlington-va', permanent: true },
      { source: '/near-you/stafford-county', destination: '/deck-builder-stafford-va', permanent: true },

      // Old /top-decks-build-near-you/deck-builder-in-{city} — ALL cities
      // Loudoun County cities
      { source: '/top-decks-build-near-you/deck-builder-in-ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-sterling', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-sterling-va', destination: '/deck-builder-sterling-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-aldie', destination: '/near-you/loudoun-county/aldie', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-middleburg', destination: '/near-you/loudoun-county/middleburg', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-purcellville', destination: '/deck-builder-purcellville-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-round-hill', destination: '/near-you/loudoun-county/round-hill', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-brambleton', destination: '/deck-builder-brambleton-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-south-riding', destination: '/deck-builder-south-riding-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-broadlands', destination: '/near-you/loudoun-county/broadlands', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lovettsville', destination: '/near-you/loudoun-county/lovettsville', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-hamilton', destination: '/near-you/loudoun-county/hamilton', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lansdowne', destination: '/near-you/loudoun-county/lansdowne', permanent: true },

      // Fairfax County cities
      { source: '/top-decks-build-near-you/deck-builder-in-herndon', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-reston', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-fairfax', destination: '/deck-builder-fairfax-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-vienna', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-mclean', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-centreville', destination: '/deck-builder-centreville-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-alexandria', destination: '/deck-builder-alexandria-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-falls-church', destination: '/deck-builder-falls-church-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-burke', destination: '/deck-builder-burke-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-springfield', destination: '/deck-builder-springfield-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-chantilly', destination: '/deck-builder-chantilly-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-oakton', destination: '/deck-builder-oakton-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-great-falls', destination: '/deck-builder-great-falls-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lorton', destination: '/deck-builder-lorton-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-tysons', destination: '/deck-builder-tysons-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-annandale', destination: '/near-you/fairfax-county/annandale', permanent: true },

      // Prince William County cities
      { source: '/top-decks-build-near-you/deck-builder-in-manassas', destination: '/deck-builder-manassas-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-woodbridge', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-haymarket', destination: '/deck-builder-haymarket-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-gainesville', destination: '/deck-builder-gainesville-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-bristow', destination: '/deck-builder-bristow-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-dale-city', destination: '/near-you/prince-william-county/dale-city', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-dumfries', destination: '/near-you/prince-william-county/dumfries', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-lake-ridge', destination: '/near-you/prince-william-county/lake-ridge', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-occoquan', destination: '/near-you/prince-william-county/occoquan', permanent: true },

      // Arlington County cities
      { source: '/top-decks-build-near-you/deck-builder-in-arlington', destination: '/deck-builder-arlington-va', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-rosslyn', destination: '/near-you/arlington-county/rosslyn', permanent: true },
  // Old Showcase Redirects    { source: '/top-decks-build-near-you/deck-builder-in-ballston', destination: '/near-you/arlington-county/ballston', permanent: true },
      { source: '/top-decks-build-near-you/deck-builder-in-clarendon', destination: '/near-you/arlington-county/clarendon', permanent: true },

      // Stafford County cities
      { source: '/top-decks-build-near-you/deck-builder-in-stafford', destination: '/deck-builder-stafford-va', permanent: true },

      // Catch-all for any remaining old city URLs not covered above
      { source: '/top-decks-build-near-you/:path*', destination: '/near-you', permanent: true },

      // Old /deck-builder-{city} patterns (without -va suffix)
      { source: '/deck-builder-ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/deck-builder-herndon', destination: '/deck-builder-herndon-va', permanent: true },
      { source: '/deck-builder-leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/deck-builder-reston', destination: '/deck-builder-reston-va', permanent: true },
      { source: '/deck-builder-centreville', destination: '/deck-builder-centreville-va', permanent: true },
      { source: '/deck-builder-manassas', destination: '/deck-builder-manassas-va', permanent: true },

      // Old /decks-build-near-you/ pattern (typo variant without "top-")
      { source: '/decks-build-near-you/:path*', destination: '/near-you', permanent: true },

      // Old Showcase Redirects
      { source: '/deck-projects-showcase/deck-builder-ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/deck-projects-showcase', destination: '/showcase', permanent: true },
      { source: '/deck-projects-showcase/:path*', destination: '/showcase', permanent: true },

      // Major City Page Consolidation (Redirect dynamic to static SEO-optimized)
      { source: '/near-you/loudoun-county/ashburn', destination: '/deck-builder-ashburn-va', permanent: true },
      { source: '/near-you/loudoun-county/leesburg', destination: '/deck-builder-leesburg-va', permanent: true },
      { source: '/near-you/fairfax-county/vienna', destination: '/deck-builder-vienna-va', permanent: true },
      { source: '/near-you/fairfax-county/mclean', destination: '/deck-builder-mclean-va', permanent: true },
      { source: '/near-you/prince-william-county/woodbridge', destination: '/deck-builder-woodbridge-va', permanent: true },
      { source: '/near-you/fairfax-county/chantilly', destination: '/deck-builder-chantilly-va', permanent: true },

      // Legacy WordPress image redirects (broken 404s from old WP upload paths)
      { source: '/wp-content/uploads/2024/09/ldndecks-logo-new-e1731874431860.webp', destination: '/ldndecks-logo.webp', permanent: true },
      { source: '/wp-content/uploads/2024/09/ldndecks-logo-new.png', destination: '/ldndecks-logo.webp', permanent: true },


      // Single-hop www → non-www canonical redirect
      // Eliminates 2-hop chain: http://www → https://www → https://non-www
      // Now: http://www → https://non-www (1 hop)
      // Using explicit statusCode 301 (was permanent:true / 308). 301 is the
      // historic canonical-permanent code; some legacy bots / link aggregators
      // still treat it as a stronger signal than 308 even though Google handles
      // both. Proxy (src/proxy.js) is the fallback for any other
      // www.* host this rule doesn't cover.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ldndecks.com' }],
        destination: 'https://ldndecks.com/:path*',
        statusCode: 301,
      },
    ];
  },
  async headers() {
    const headers = [];
    
    // Security headers
    //
    // CSP shipped as Report-Only so the policy can be observed in production
    // without breaking pages. Violations POST to /api/csp-report for 30 days,
    // then promote to enforcing `Content-Security-Policy` once the report
    // stream is clean. Allowlist covers: Vercel infra, GTM + GA + Google
    // Fonts + AdSense, Ahrefs analytics, Google Maps embed, YouTube/Vimeo
    // (if/when embedded), Next.js inline-style/script needs, and image
    // sources used by next/image including the BBB seal (self-hosted).
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.googletagservices.com https://analytics.ahrefs.com https://*.vercel-scripts.com https://va.vercel-scripts.com https://www.google.com https://www.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://*.googleusercontent.com https://www.google-analytics.com https://*.google.com https://*.googletagmanager.com https://maps.gstatic.com https://maps.googleapis.com",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.ahrefs.com https://*.vercel-insights.com https://vitals.vercel-insights.com https://www.googletagmanager.com",
      "frame-src 'self' https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
      "report-uri /api/csp-report",
    ].join('; ');

    headers.push({
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Content-Security-Policy-Report-Only', value: csp },
      ],
    });

    // Block indexing on staging / preview deployments
    // Only apply noindex when we KNOW it's a non-production Vercel env (preview/development)
    // If VERCEL_ENV is undefined (e.g., custom hosting), do NOT block — assume production
    const vercelEnv = process.env.VERCEL_ENV;
    if (vercelEnv && vercelEnv !== 'production') {
      headers.push({
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      });
    }

    // Static asset caching — aggressive caching for images, fonts, CSS, JS
    headers.push({
      source: '/images/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    });
    headers.push({
      source: '/showcase/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    });
    headers.push({
      source: '/team/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=2592000' },
      ],
    });
    headers.push({
      source: '/:path*.webp',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    });

    return headers;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
