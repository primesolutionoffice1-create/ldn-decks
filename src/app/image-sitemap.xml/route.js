import { showcaseProjects } from '@/lib/showcaseData';
import { SITE_URL } from '@/lib/seo';

// Image Sitemap helps Google Image Search index all project photos
// Showcase/project photos are high-value for "deck ideas" and "deck design" image searches
// https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps

export async function GET() {
  const entries = [];

  // Showcase project images
  for (const project of showcaseProjects) {
    entries.push(`
    <url>
      <loc>${SITE_URL}/showcase/${project.slug}</loc>
      <image:image>
        <image:loc>${SITE_URL}${project.image}</image:loc>
        <image:title>${escapeXml(project.title)} ${escapeXml(project.location)}</image:title>
        <image:caption>${escapeXml(project.title)} by Loudoun Decks in ${escapeXml(project.location)}. Professional deck and outdoor living construction in Northern Virginia.</image:caption>
      </image:image>
    </url>`);
  }

  // Homepage hero
  entries.push(`
    <url>
      <loc>${SITE_URL}</loc>
      <image:image>
        <image:loc>${SITE_URL}/home-page-ldn.webp</image:loc>
        <image:title>Loudoun Decks Custom Deck Builder Northern Virginia</image:title>
        <image:caption>Custom composite deck building in Northern Virginia by Loudoun Decks. Trex Platinum Partner.</image:caption>
      </image:image>
    </url>`);

  // Key content page images
  const contentImages = [
    { page: '/how-much-does-a-deck-cost-northern-virginia', image: '/images/img10.jpeg', title: 'Deck Cost Guide Northern Virginia 2026' },
    { page: '/composite-deck-cost-northern-virginia', image: '/images/img11.jpeg', title: 'Composite Deck Cost Northern Virginia Brand-by-Brand Pricing' },
    { page: '/composite-deck-builder-loudoun', image: '/images/img10.jpeg', title: 'Composite Deck Builder Loudoun County VA' },
    { page: '/trex-vs-timbertech-vs-azek', image: '/home-page-ldn.webp', title: 'Trex vs TimberTech vs AZEK Comparison' },
    { page: '/trex-transcend-review-northern-virginia', image: '/images/img36.jpeg', title: 'Trex Transcend Review Honest Assessment After 500+ Installs' },
    { page: '/composite-deck-vs-wood-deck-virginia', image: '/images/img16.jpeg', title: 'Composite Deck vs Wood Deck Virginia Comparison' },
    { page: '/deck-design-ideas-northern-virginia-2026', image: '/images/img36.jpeg', title: 'Deck Design Ideas 2026 Northern Virginia' },
    { page: '/screened-porch-cost-northern-virginia', image: '/images/img23.jpeg', title: 'Screened Porch Cost Northern Virginia' },
    { page: '/northern-virginia-deck-building-guide', image: '/home-page-ldn.webp', title: 'Complete Deck Building Guide Northern Virginia' },
    { page: '/before-and-after', image: '/images/img04.jpeg', title: 'Before and After Deck Transformations Northern Virginia' },
    { page: '/deck-permit-loudoun-county-virginia', image: '/images/img20.jpeg', title: 'Loudoun County Deck Permit Guide 2026' },
    { page: '/get-estimate', image: '/images/img36.jpeg', title: 'Free Deck Estimate LDN Decks Northern Virginia' },
  ];

  for (const ci of contentImages) {
    entries.push(`
    <url>
      <loc>${SITE_URL}${ci.page}</loc>
      <image:image>
        <image:loc>${SITE_URL}${ci.image}</image:loc>
        <image:title>${escapeXml(ci.title)}</image:title>
        <image:caption>${escapeXml(ci.title)} Expert guide by Loudoun Decks, Northern Virginia's top-rated deck builder.</image:caption>
      </image:image>
    </url>`);
  }

  // Gallery images mapped to their actual display pages
  const galleryImages = [
    { page: '/deck-builder-reston-va', image: '/images/img01.jpeg', title: 'Custom deck installation in Reston, VA' },
    { page: '/services/fence', image: '/images/img02.jpeg', title: 'Metal fence installation in Centreville, VA' },
    { page: '/deck-builder-manassas-va', image: '/images/img03.jpeg', title: 'Deck construction in Manassas, VA' },
    { page: '/deck-resurfacing-vs-replacement', image: '/images/img04.jpeg', title: 'Deck resurfacing project in Sterling, VA' },
    { page: '/deck-repair-loudoun-county', image: '/images/img05.jpeg', title: 'Balcony reconstruction in Chantilly, VA' },
    { page: '/services/fence', image: '/images/img06.jpeg', title: 'Custom fence and gate in Falls Church, VA' },
    { page: '/deck-builder-manassas-va', image: '/images/img07.jpeg', title: 'New deck build in Manassas, VA' },
    { page: '/deck-builder-ashburn-va', image: '/images/img08.jpeg', title: 'Custom wood fence in Ashburn, VA' },
    { page: '/multi-level-deck-builder-northern-virginia', image: '/images/img09.jpeg', title: 'Wood multi-level deck in Chantilly, VA' },
    { page: '/composite-decks', image: '/images/img10.jpeg', title: 'New composite deck in Ashburn, VA' },
    { page: '/composite-deck-cost-northern-virginia', image: '/images/img11.jpeg', title: 'Rooftop deck construction in Washington DC' },
    { page: '/trex-decks', image: '/images/img12.jpeg', title: 'Trex composite deck project in Northern Virginia' },
    { page: '/services/new-decks', image: '/images/img13.jpeg', title: 'Custom deck design and build in Northern Virginia' },
    { page: '/services/porches/screened-porch', image: '/images/img14.jpeg', title: 'Screened-in porch in Northern Virginia' },
    { page: '/services/gazebo-pergola', image: '/images/img15.jpeg', title: 'Pergola and outdoor structure in Northern Virginia' },
    { page: '/services/deck-resurfacing', image: '/images/img16.jpeg', title: 'Deck resurfacing with composite materials' },
    { page: '/deck-builder-leesburg-va', image: '/images/img17.jpeg', title: 'Outdoor living space in Leesburg, VA' },
    { page: '/deck-builder-herndon-va', image: '/images/img18.jpeg', title: 'Custom deck project in Herndon, VA' },
    { page: '/deck-builder-centreville-va', image: '/images/img19.jpeg', title: 'Deck build in Centreville, VA' },
    { page: '/deck-permit-loudoun-county-virginia', image: '/images/img20.jpeg', title: 'Deck framing during Loudoun County inspection' },
    { page: '/deck-builder-sterling-va', image: '/images/img21.jpeg', title: 'New deck construction in Sterling, VA' },
    { page: '/deck-builder-chantilly-va', image: '/images/img22.jpeg', title: 'Composite deck in Chantilly, VA' },
    { page: '/screened-porch-cost-northern-virginia', image: '/images/img23.jpeg', title: 'Screened porch with EZE-Breeze in Northern Virginia' },
    { page: '/pool-deck-builder-northern-virginia', image: '/images/img24.jpeg', title: 'Pool deck project in Northern Virginia' },
    { page: '/deck-builder-great-falls-va', image: '/images/img25.jpeg', title: 'Premium deck in Great Falls, VA' },
    { page: '/deck-builder-vienna-va', image: '/images/img26.jpeg', title: 'Deck design for sloped backyard in Vienna, VA' },
    { page: '/deck-railing-options-northern-virginia', image: '/images/img27.jpeg', title: 'Deck railing options in Northern Virginia' },
    { page: '/deck-lighting-ideas-northern-virginia', image: '/images/img28.jpeg', title: 'Deck lighting installation in Northern Virginia' },
    { page: '/deck-staining-northern-virginia', image: '/images/img29.jpeg', title: 'Professional deck staining in Northern Virginia' },
    { page: '/deck-builder-fairfax-va', image: '/images/img30.jpeg', title: 'Custom deck in Fairfax, VA' },
  ];

  for (const gi of galleryImages) {
    entries.push(`
    <url>
      <loc>${SITE_URL}${gi.page}</loc>
      <image:image>
        <image:loc>${SITE_URL}${gi.image}</image:loc>
        <image:title>${escapeXml(gi.title)}</image:title>
        <image:caption>${escapeXml(gi.title)} Professional deck and outdoor living project by Loudoun Decks.</image:caption>
      </image:image>
    </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
