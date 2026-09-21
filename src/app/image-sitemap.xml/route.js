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
        <image:caption>Custom composite deck building in Northern Virginia by Loudoun Decks.</image:caption>
      </image:image>
    </url>`);

  // Key content page images
  const contentImages = [
    {"page": "/blog/screened-porch-trex-select-purcellville-va", "image": "/images/projects/purcellville-screened-porch/purcellville-screened-porch-01-retouched.png", "title": "Screened porch exterior in Purcellville - AI-retouched project photo"},
    {"page": "/blog/screened-porch-trex-select-purcellville-va", "image": "/images/projects/purcellville-screened-porch/purcellville-screened-porch-02-retouched.png", "title": "Screened porch entry and open landing in Purcellville - AI-retouched project photo"},
    {"page": "/blog/screened-porch-trex-select-purcellville-va", "image": "/images/projects/purcellville-screened-porch/purcellville-screened-porch-04-retouched.png", "title": "Backyard stairs and screened porch in Purcellville - AI-retouched project photo"},
    {"page": "/blog/trex-foggy-wharf-deck-gainesville-va", "image": "/images/projects/gainesville-foggy-wharf/01-gainesville-trex-foggy-wharf-deck.jpg", "title": "Trex Foggy Wharf deck in Gainesville Virginia"},
    {"page": "/blog/trex-foggy-wharf-deck-gainesville-va", "image": "/images/projects/gainesville-foggy-wharf/02-foggy-wharf-cocktail-top-black-railing.jpg", "title": "Foggy Wharf cocktail top and Classic Black-on-Black railing"},
    {"page": "/blog/trex-foggy-wharf-deck-gainesville-va", "image": "/images/projects/gainesville-foggy-wharf/03-gainesville-matching-fascia.jpg", "title": "Matching Foggy Wharf fascia on Gainesville deck"},
    {"page": "/blog/trex-foggy-wharf-deck-gainesville-va", "image": "/images/projects/gainesville-foggy-wharf/04-gainesville-deck-exterior.jpg", "title": "Gainesville Trex deck exterior with black railings"},
    { page: '/composite-deck-cost-northern-virginia', image: '/social/composite-deck-cost-northern-virginia-social.png', title: 'Composite Deck Cost Northern Virginia Trex TimberTech AZEK Estimate' },
    { page: '/composite-deck-cost-northern-virginia', image: '/images/img13.jpeg', title: 'Deck Cost Guide Northern Virginia 2026' },
    { page: '/composite-deck-cost-northern-virginia', image: '/images/img11.jpeg', title: 'Composite Deck Cost Northern Virginia Brand-by-Brand Pricing' },
    { page: '/composite-deck-builder-loudoun', image: '/images/img13.jpeg', title: 'Composite Deck Builder Loudoun County VA' },
    { page: '/trex-vs-timbertech-vs-azek', image: '/home-page-ldn.webp', title: 'Trex vs TimberTech vs AZEK Comparison' },
    { page: '/trex-transcend-review-northern-virginia', image: '/images/img36.jpeg', title: 'Trex Transcend Review for Northern Virginia Homes' },
    { page: '/composite-deck-vs-wood-deck-virginia', image: '/images/img16.jpeg', title: 'Composite Deck vs Wood Deck Virginia Comparison' },
    { page: '/deck-design-ideas-2026', image: '/images/img36.jpeg', title: 'Deck Design Ideas 2026 Northern Virginia' },
    { page: '/screened-porch-cost-northern-virginia', image: '/images/screened-porch-cost-northern-virginia-2026.jpg', title: 'Screened Porch Cost Northern Virginia' },
    { page: '/northern-virginia-deck-building-guide', image: '/home-page-ldn.webp', title: 'Complete Deck Building Guide Northern Virginia' },
    { page: '/before-and-after', image: '/images/img04.jpeg', title: 'Before and After Deck Transformations Northern Virginia' },
    { page: '/deck-permit-loudoun-county-virginia', image: '/social/deck-permit-loudoun-county-social.png', title: 'Loudoun County Deck Permit LandMARC HOA Inspection Guide' },
    { page: '/deck-permit-fairfax-county-virginia', image: '/social/deck-permit-fairfax-county-social.png', title: 'Fairfax County Deck Permit PLUS Inspection Guide' },
    { page: '/deck-permit-prince-william-county-virginia', image: '/social/deck-permit-prince-william-county-social.png', title: 'Prince William County Deck Permit ePortal Inspection Guide' },
    { page: '/deck-permit-arlington-county-virginia', image: '/social/deck-permit-arlington-county-social.png', title: 'Arlington County Deck Permit Setbacks Inspection Guide' },
    { page: '/deck-permit-loudoun-county-virginia', image: '/images/img20.jpeg', title: 'Loudoun County Deck Permit Guide 2026' },
    { page: '/education/deck-stair-code-rise-run-virginia', image: '/images/deck-stair-code-virginia.png', title: 'Virginia Deck Stair Code Rise Run Handrail Guide' },
    { page: '/tools/deck-stair-calculator', image: '/social/deck-stair-calculator-social.png', title: 'Virginia Deck Stair Calculator Rise Run Planning' },
    { page: '/education/deck-stair-construction-diagram', image: '/images/deck-stair-construction-diagram.png', title: 'Deck Stair Construction Diagram Stringer Tread Riser Landing' },
    { page: '/education/ledger-board-flashing-deck-attachment-virginia', image: '/images/ledger_flashing_diagram.png', title: 'Ledger Board Flashing Rim Joist Attachment Diagram' },
    { page: '/trex-decks', image: '/social/trex-decks-social.png', title: 'Trex Decks Composite Northern Virginia Planning' },
    { page: '/timbertech-decks', image: '/social/timbertech-decks-social.png', title: 'TimberTech AZEK PVC Decks Northern Virginia Planning' },
    { page: '/composite-decks', image: '/social/composite-decks-social.png', title: 'Composite Decks Trex TimberTech AZEK Northern Virginia' },
    { page: '/services/deck-repair', image: '/social/deck-repair-social.png', title: 'Structural Deck Repair Ledger Posts Inspection Northern Virginia' },
    { page: '/services/deck-replacement', image: '/social/deck-replacement-service-social.png', title: 'Deck Replacement Framing Ledger Stairs Estimate Northern Virginia' },
    { page: '/covered-deck-builder-northern-virginia', image: '/social/covered-deck-builder-northern-virginia-social.png', title: 'Covered Deck Builder Screened Porch Permit Northern Virginia' },
    { page: '/get-estimate', image: '/pinterest/deck-builder-loudoun-project-2x3.jpg', title: 'Deck Estimate Loudoun Northern Virginia Project Planning' },
    { page: '/education/common-deck-stair-inspection-failures-virginia', image: '/images/deck_stair_failures_infographic.png', title: 'Common Deck Stair Inspection Failures Northern Virginia' },
    { page: '/deck-permit-loudoun-county-virginia', image: '/images/blog-permit-guide.png', title: 'Loudoun County Deck Permit Guide Northern Virginia' },
    { page: '/deck-permit-loudoun-county-virginia', image: '/images/permit-portal.png', title: 'Loudoun County Deck Permit Portal Planning' },
    { page: '/blog/deck-permit-process-loudoun-county-step-by-step', image: '/images/blog/generated/deck-permit-process-loudoun-county-step-by-step.jpg', title: 'Loudoun County Deck Permit Process Step by Step' },
    { page: '/blog/how-long-does-deck-permit-take-northern-virginia', image: '/images/blog/generated/how-long-does-deck-permit-take-northern-virginia.jpg', title: 'Northern Virginia Deck Permit Timeline Guide' },
    { page: '/blog/deck-permit-requirements-fairfax-county-2026', image: '/images/blog/generated/deck-permit-requirements-fairfax-county-2026.jpg', title: 'Fairfax County Deck Permit Requirements 2026' },
    { page: '/get-estimate', image: '/images/img36.jpeg', title: 'Free Deck Estimate LDN Decks Northern Virginia' },
    { page: '/blog/why-composite-trex-decking-fades-sun-solutions', image: '/images/composite-deck-faded-vs-restored-before-after.png', title: 'Composite Deck Faded vs Restored Before and After' },
    { page: '/blog/why-composite-trex-decking-fades-sun-solutions', image: '/images/composite-deck-sun-fade-field-photos.png', title: 'Composite Deck Sun Fading Field Photos' },
  ];

  for (const ci of contentImages) {
    entries.push(`
    <url>
      <loc>${SITE_URL}${ci.page}</loc>
      <image:image>
        <image:loc>${SITE_URL}${ci.image}</image:loc>
        <image:title>${escapeXml(ci.title)}</image:title>
        <image:caption>${escapeXml(ci.title)} Expert guide by Loudoun Decks, Northern Virginia's trusted deck builder.</image:caption>
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
    { page: '/composite-decks', image: '/images/img13.jpeg', title: 'Composite deck with low-maintenance railings in Northern Virginia' },
    { page: '/composite-deck-cost-northern-virginia', image: '/images/img11.jpeg', title: 'Rooftop deck construction in Washington DC' },
    { page: '/trex-decks', image: '/images/img12.jpeg', title: 'Trex composite deck project in Northern Virginia' },
    { page: '/services/new-decks', image: '/images/img13.jpeg', title: 'Custom deck design and build in Northern Virginia' },
    { page: '/screened-porch-builder-northern-virginia', image: '/images/img14.jpeg', title: 'Screened-in porch in Northern Virginia' },
    { page: '/services/gazebo-pergola', image: '/images/img15.jpeg', title: 'Pergola and outdoor structure in Northern Virginia' },
    { page: '/services/deck-resurfacing', image: '/images/img16.jpeg', title: 'Deck resurfacing with composite materials' },
    { page: '/deck-builder-leesburg-va', image: '/images/img17.jpeg', title: 'Outdoor living space in Leesburg, VA' },
    { page: '/deck-builder-herndon-va', image: '/images/img18.jpeg', title: 'Custom deck project in Herndon, VA' },
    { page: '/deck-builder-centreville-va', image: '/images/img19.jpeg', title: 'Deck build in Centreville, VA' },
    { page: '/deck-permit-loudoun-county-virginia', image: '/images/img20.jpeg', title: 'Deck framing during Loudoun County inspection' },
    { page: '/deck-builder-sterling-va', image: '/images/img21.jpeg', title: 'New deck construction in Sterling, VA' },
    { page: '/deck-builder-chantilly-va', image: '/images/img22.jpeg', title: 'Composite deck in Chantilly, VA' },
    { page: '/screened-porch-cost-northern-virginia', image: '/images/screened-porch-cost-northern-virginia-2026.jpg', title: 'Modern screened porch in Northern Virginia' },
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
