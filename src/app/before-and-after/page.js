import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/before-and-after',
  title: 'Before & After Deck Projects | Northern Virginia | LDN Decks',
  description: 'See real before and after deck transformations across Loudoun, Fairfax & Prince William counties. Composite decks, resurfacing, screened porches & more by LDN Decks.',
  image: '/images/img04.jpeg',
});

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Before & After Deck Projects LDN Decks",
  "description": "Real before and after deck transformation photos from Loudoun Decks projects across Northern Virginia.",
  "url": "https://ldndecks.com/before-and-after",
  "publisher": { "@id": "https://ldndecks.com/#organization" },
  "about": {
    "@type": "Service",
    "serviceType": "Deck Building & Renovation",
    "provider": { "@id": "https://ldndecks.com/#organization" }
  },
  "image": [
    { "@type": "ImageObject", "url": "https://ldndecks.com/Projectsbeforeandafter/project1after.jpeg", "name": "Wood to composite resurfacing Leesburg, VA", "description": "Worn wood deck transformed with gray Trex composite resurfacing in Leesburg, Virginia." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/Projectsbeforeandafter/project2after.jpeg", "name": "Elevated deck modernization Ashburn, VA", "description": "Second-story wood deck rebuilt with premium white-and-black composite materials in Ashburn, Virginia." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/Projectsbeforeandafter/project3after.jpeg", "name": "Full backyard deck revitalization Manassas, VA", "description": "Weathered wood deck fully transformed into a modern gray composite deck with matching skirting in Manassas, Virginia." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/Projectsbeforeandafter/project4after.jpeg", "name": "Townhome deck renovation Sterling, VA", "description": "Compact townhome deck modernized with low-maintenance gray composite and black metal railings in Sterling, Virginia." }
  ]
};

const projects = [
  {
    id: 1,
    title: 'Wood to Composite Resurfacing',
    location: 'Leesburg, VA',
    county: 'Loudoun County',
    date: 'March 2025',
    beforeImg: '/Projectsbeforeandafter/project1before.jpeg',
    afterImg: '/Projectsbeforeandafter/project1after.jpeg',
    beforeAlt: 'Weathered wood deck with traditional vertical balusters before resurfacing in Leesburg VA',
    afterAlt: 'Modern white composite deck with black metal railings after resurfacing in Leesburg VA',
    material: 'Trex Enhance Naturals Foggy Wharf',
    size: '280 sqft',
    duration: '7 days',
    cost: '$14,500',
    description: 'This aging wood deck was functionally sound but aesthetically tired. We performed a full composite resurfacing, replacing the old wood boards and railings with high-performance Trex materials. The white fascia and black railing contrast perfectly with the light gray decking.',
    highlight: 'Saved ~$6,000 by reusing the sound structural frame.',
  },
  {
    id: 2,
    title: 'Elevated Deck Modernization',
    location: 'Ashburn, VA',
    county: 'Loudoun County',
    date: 'April 2025',
    beforeImg: '/Projectsbeforeandafter/project2before.jpeg',
    afterImg: '/Projectsbeforeandafter/project2after.jpeg',
    beforeAlt: 'High-elevation wood deck with moss and algae growth before replacement in Ashburn VA',
    afterAlt: 'New white and black composite elevated deck after construction in Ashburn VA',
    material: 'TimberTech Reserve Collection',
    size: '350 sqft',
    duration: '12 days',
    cost: '$28,000',
    description: 'The original second-story wood deck was showing signs of decay and surface moss. We rebuilt the structure with premium white composite framing and black metal balusters. The new design includes code-compliant staircases and integrated lighting for safety.',
    highlight: 'Upgraded to a code-compliant structural frame for maximum safety.',
  },
  {
    id: 3,
    title: 'Full Backyard Revitalization',
    location: 'Manassas, VA',
    county: 'Prince William County',
    date: 'May 2025',
    beforeImg: '/Projectsbeforeandafter/project3before.jpeg',
    afterImg: '/Projectsbeforeandafter/project3after.jpeg',
    beforeAlt: 'Weathered gray wood deck with vertical pickets before renovation in Manassas VA',
    afterAlt: 'New gray composite deck with modern white railings and matching skirting in Manassas VA',
    material: 'Trex Transcend Lineage',
    size: '320 sqft',
    duration: '10 days',
    cost: '$22,000',
    description: 'A complete transformation from a weathered wood deck to a multi-tone composite masterpiece. We installed matching composite skirting and a custom storage door beneath the deck, hiding the subframe and creating a clean, finished look.',
    highlight: 'Integrated matching composite skirting and under-deck storage access.',
  },
  {
    id: 4,
    title: 'Townhome Deck Transformation',
    location: 'Sterling, VA',
    county: 'Loudoun County',
    date: 'June 2025',
    beforeImg: '/Projectsbeforeandafter/project4before.jpeg',
    afterImg: '/Projectsbeforeandafter/project4after.jpeg',
    beforeAlt: 'Worn townhome wood deck before full renovation in Sterling VA',
    afterAlt: 'Modern white and gray composite townhome deck with black railings in Sterling VA',
    material: 'Trex Enhance Basics Clam Shell',
    size: '180 sqft',
    duration: '6 days',
    cost: '$12,000',
    description: 'Townhome decks require precision due to limited space and close neighbors. We updated this Sterling townhome deck with a high-performance gray composite surface and sleek black metal railings, creating a private, maintenance-free oasis.',
    highlight: 'Completed in under a week with minimal disruption to neighbors.',
  },
];

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
};

export default function BeforeAndAfterPage() {
  return (
    <>
      <JsonLd data={imageGallerySchema} />
      <WebPageSchema url="https://ldndecks.com/before-and-after" name="Before &amp; After Deck Projects | Northern Virginia | LDN Decks" description="See real before and after deck transformations across Loudoun, Fairfax &amp; Prince William counties. Composite decks, resurfacing, screened porches &amp; more by LDN Decks." speakable />
      <ArticleSchema
        title="Before & After Deck Projects Northern Virginia"
        description="Real before and after deck transformation photos from LDN Decks projects across Loudoun, Fairfax & Prince William counties."
        path="/before-and-after"
        image="/images/img04.jpeg"
        datePublished="2026-04-21"
        dateModified="2026-04-23"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Before &amp; After Deck Transformations</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Real projects from Loudoun, Fairfax &amp; Prince William counties with costs, materials, and timelines</p>
          <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>5.0 on Google &middot; {BUSINESS.reviewSummary.reviewCount} reviews &middot; Trex Platinum Partner &middot; 2-Year Workmanship Warranty</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>100+</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Projects completed</span></div>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>10+</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Years experience</span></div>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>5.0</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Google rating</span></div>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>2yr</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Workmanship warranty</span></div>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <p style={S.p}>Every deck project starts somewhere sometimes a bare backyard, sometimes a rotting 20-year-old structure that&apos;s become a safety hazard. Below are real transformations from our builds across Northern Virginia. Each project includes the materials used, total cost, timeline, and what made it unique.</p>
          <p style={{ ...S.p, marginBottom: '3rem' }}>Want to see your backyard on this page? <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink> for a free design consultation.</p>

          {/* Project Cards */}
          {projects.map((project, idx) => (
            <section key={project.id} style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: idx < projects.length - 1 ? '1px solid #e5e5e5' : 'none' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>{project.title}</h2>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{project.location} &middot; {project.county} &middot; {project.date}</p>

              {/* Before/After Image Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ position: 'relative', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src={project.beforeImg} alt={project.beforeAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 50vw, 440px" />
                    <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>BEFORE</span>
                  </div>
                </div>
                <div>
                  <div style={{ position: 'relative', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src={project.afterImg} alt={project.afterAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 50vw, 440px" />
                    <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'var(--color-primary)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>AFTER</span>
                  </div>
                </div>
              </div>

              {/* Project Details Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', background: '#f9f9f9', borderRadius: '8px', padding: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Material</p>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{project.material}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Size</p>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{project.size}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Timeline</p>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{project.duration}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Total Cost</p>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-primary)' }}>{project.cost}</p>
                </div>
              </div>

              {/* Description */}
              <p style={{ lineHeight: 1.7, marginBottom: '0.75rem' }}>{project.description}</p>
              <p style={{ lineHeight: 1.7, fontSize: '0.9rem', color: '#555', fontStyle: 'italic', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '0.75rem 1rem' }}>{project.highlight}</p>
            </section>
          ))}

          {/* Summary Stats */}
          <div style={{ background: 'var(--color-dark)', color: '#fff', borderRadius: '12px', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Projects at a Glance</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>$12k–$28k</p>
                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Project range shown</p>
              </div>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>180–350 sqft</p>
                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Size range</p>
              </div>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>6–12 days</p>
                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Build time range</p>
              </div>
            </div>
          </div>

          {/* What You Can Expect */}
          <h2 style={S.h2}>What to Expect From Your Deck Transformation</h2>
          <p style={S.p}>Every project on this page followed the same process and yours will too:</p>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: 2, marginBottom: '2rem' }}>
            <li><strong>Free on-site consultation</strong> we measure, photograph, and discuss your vision in person.</li>
            <li><strong>3D design rendering</strong> you see exactly what your deck will look like before we break ground.</li>
            <li><strong>Itemized written quote</strong> materials, labor, permits, timeline, and warranty terms in writing.</li>
            <li><strong>Permit management</strong> we submit plans, coordinate HOA review, and schedule inspections.</li>
            <li><strong>Professional build</strong> our in-house crew (never subcontracted) builds your deck on schedule.</li>
            <li><strong>Final walkthrough</strong> we inspect every detail with you before the project is marked complete.</li>
            <li><strong>2-year workmanship warranty</strong> on all labor plus 25–50 year manufacturer warranty on materials.</li>
          </ol>

          {/* Types of Transformations */}
          <h2 style={S.h2}>Types of Deck Transformations We Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'New Deck Construction', desc: 'Bare yard to custom outdoor living space.', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', desc: 'New composite surface on existing frame. Save 25-40%.', link: '/services/deck-resurfacing' },
              { title: 'Full Deck Replacement', desc: 'Complete tear-down and rebuild with modern materials.', link: '/deck-resurfacing-vs-replacement' },
              { title: 'Screened Porch Conversion', desc: 'Open deck to bug-free 3-season room.', link: '/services/porches/screened-porch' },
              { title: 'Pool Deck Replacement', desc: 'Chlorine-resistant AZEK for poolside safety.', link: '/pool-deck-builder-northern-virginia' },
              { title: 'Multi-Level Builds', desc: 'Tiered decks for entertaining and defined zones.', link: '/multi-level-deck-builder-northern-virginia' },
            ].map(({ title, desc, link }) => (
              <Link key={link} href={link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1.25rem', textDecoration: 'none', color: 'inherit', border: '1px solid #e5e5e5', transition: 'border-color 0.2s' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>{desc}</p>
              </Link>
            ))}
          </div>

          {/* Related Guides */}
          <h2 style={S.h2}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia (2026)'],
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/deck-resurfacing-vs-replacement', 'Resurfacing vs Full Replacement'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood 15-Year Cost Analysis'],
              ['/showcase', 'Full Project Gallery'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Ready to Transform Your Deck?" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/before-and-after" />
      <ContactHome />
    </>
  );
}
