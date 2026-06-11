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
import CallLink from '@/components/CallLink';
import NamedAuthor from '@/components/NamedAuthor';
import VerifiedProjectProofSection from '@/components/VerifiedProjectProofSection';

export const metadata = buildMetadata({
  path: '/before-and-after',
  title: 'Before & After Deck Projects | Northern Virginia | LDN Decks',
  description: 'See before and after deck transformation photos across Northern Virginia with project details marked for verification where records are still needed.',
  image: '/social/before-and-after-social.png',
});

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Before & After Deck Projects LDN Decks",
  "description": "Before and after deck transformation photos from Loudoun Decks projects across Northern Virginia, with project details requiring owner verification before publication as formal case studies.",
  "url": "https://ldndecks.com/before-and-after",
  "publisher": { "@id": "https://ldndecks.com/#organization" },
  "about": {
    "@type": "Service",
    "serviceType": "Deck Building & Renovation",
    "provider": { "@id": "https://ldndecks.com/#organization" }
  },
  "image": [
    { "@type": "ImageObject", "url": "https://ldndecks.com/Projectsbeforeandafter/project1after.jpeg", "name": "Deck resurfacing before and after photo pair", "description": "Before and after deck photo pair with project details pending owner verification before use as a formal case study." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/Projectsbeforeandafter/project2after.jpeg", "name": "Elevated deck before and after photo pair", "description": "Before and after elevated deck photo pair with project details pending owner verification before use as a formal case study." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/Projectsbeforeandafter/project3after.jpeg", "name": "Backyard deck before and after photo pair", "description": "Before and after backyard deck photo pair with project details pending owner verification before use as a formal case study." },
    { "@type": "ImageObject", "url": "https://ldndecks.com/Projectsbeforeandafter/project4after.jpeg", "name": "Townhome deck before and after photo pair", "description": "Before and after townhome deck photo pair with project details pending owner verification before use as a formal case study." }
  ]
};

const projects = [
  {
    id: 1,
    title: 'Wood to Composite Resurfacing',
    location: 'Leesburg, VA',
    county: 'Loudoun County',
    dateLabel: 'Date pending owner verification',
    beforeImg: '/Projectsbeforeandafter/project1before.jpeg',
    afterImg: '/Projectsbeforeandafter/project1after.jpeg',
    beforeAlt: 'Weathered wood deck with traditional vertical balusters before resurfacing in Leesburg VA',
    afterAlt: 'Modern white composite deck with black metal railings after resurfacing in Leesburg VA',
    material: 'Trex Enhance Naturals Foggy Wharf',
    size: '280 sqft',
    duration: 'Timeline pending',
    cost: 'Cost pending',
    description: 'This aging wood deck was functionally sound but aesthetically tired. We performed a full composite resurfacing, replacing the old wood boards and railings with high-performance Trex materials. The white fascia and black railing contrast perfectly with the light gray decking.',
    evidenceNote: 'Project record needed before publishing final date, timeline, cost, frame-reuse details, or savings claims.',
  },
  {
    id: 2,
    title: 'Elevated Deck Modernization',
    location: 'Ashburn, VA',
    county: 'Loudoun County',
    dateLabel: 'Date pending owner verification',
    beforeImg: '/Projectsbeforeandafter/project2before.jpeg',
    afterImg: '/Projectsbeforeandafter/project2after.jpeg',
    beforeAlt: 'High-elevation wood deck with moss and algae growth before replacement in Ashburn VA',
    afterAlt: 'New white and black composite elevated deck after construction in Ashburn VA',
    material: 'TimberTech Reserve Collection',
    size: '350 sqft',
    duration: 'Timeline pending',
    cost: 'Cost pending',
    description: 'The original second-story wood deck was showing signs of decay and surface moss. We rebuilt the structure with premium white composite framing and black metal balusters. The new design includes code-compliant staircases and integrated lighting for safety.',
    evidenceNote: 'Project record needed before publishing final date, timeline, cost, structural scope, permit status, or code-compliance details.',
  },
  {
    id: 3,
    title: 'Full Backyard Revitalization',
    location: 'Manassas, VA',
    county: 'Prince William County',
    dateLabel: 'Date pending owner verification',
    beforeImg: '/Projectsbeforeandafter/project3before.jpeg',
    afterImg: '/Projectsbeforeandafter/project3after.jpeg',
    beforeAlt: 'Weathered gray wood deck with vertical pickets before renovation in Manassas VA',
    afterAlt: 'New gray composite deck with modern white railings and matching skirting in Manassas VA',
    material: 'Trex Transcend Lineage',
    size: '320 sqft',
    duration: 'Timeline pending',
    cost: 'Cost pending',
    description: 'A complete transformation from a weathered wood deck to a multi-tone composite masterpiece. We installed matching composite skirting and a custom storage door beneath the deck, hiding the subframe and creating a clean, finished look.',
    evidenceNote: 'Project record needed before publishing final date, timeline, cost, material color, skirting scope, or storage-access details.',
  },
  {
    id: 4,
    title: 'Townhome Deck Transformation',
    location: 'Sterling, VA',
    county: 'Loudoun County',
    dateLabel: 'Date pending owner verification',
    beforeImg: '/Projectsbeforeandafter/project4before.jpeg',
    afterImg: '/Projectsbeforeandafter/project4after.jpeg',
    beforeAlt: 'Worn townhome wood deck before full renovation in Sterling VA',
    afterAlt: 'Modern white and gray composite townhome deck with black railings in Sterling VA',
    material: 'Trex Enhance Basics Clam Shell',
    size: '180 sqft',
    duration: 'Timeline pending',
    cost: 'Cost pending',
    description: 'Townhome decks require precision due to limited space and close neighbors. We updated this Sterling townhome deck with a high-performance gray composite surface and sleek black metal railings, creating a private, maintenance-free oasis.',
    evidenceNote: 'Project record needed before publishing final date, timeline, cost, HOA status, or neighbor-disruption claims.',
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
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/before-and-after" name="Before &amp; After Deck Projects | Northern Virginia | LDN Decks" description="See before and after deck transformation photos across Northern Virginia with project details marked for verification where records are still needed." speakable />
      <ArticleSchema
        title="Before & After Deck Projects Northern Virginia"
        description="Before and after deck transformation photos from LDN Decks projects across Northern Virginia, with project details marked for verification where records are still needed."
        path="/before-and-after"
        image="/images/img04.jpeg"
        datePublished="2026-04-21"
        dateModified="2026-06-01"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Before &amp; After Deck Transformations</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Before and after deck photos from Loudoun, Fairfax &amp; Prince William counties with project details marked for verification where needed</p>
          <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>Public review profiles &middot; Trex material options &middot; Written scope and warranty terms confirmed in each estimate</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Photo</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Before/after evidence</span></div>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Scope</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Materials and work type</span></div>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Verify</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Dates, costs, timelines</span></div>
          <div><strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Written</strong><br /><span style={{ fontSize: '0.85rem', color: '#666' }}>Warranty in estimate</span></div>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <p style={S.p}>Every deck project starts somewhere: sometimes a bare backyard, sometimes a weathered structure that needs inspection before anyone should recommend repair, resurfacing, or replacement. Below are photo-led transformations from Northern Virginia. Details that require project records are clearly marked for verification instead of being treated as unsupported case-study claims.</p>
          <p style={{ ...S.p, marginBottom: '3rem' }}>Want to see your backyard on this page? <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink> for a free design consultation.</p>

          <VerifiedProjectProofSection />

          {/* Project Cards */}
          {projects.map((project, idx) => (
            <section key={project.id} style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: idx < projects.length - 1 ? '1px solid #e5e5e5' : 'none' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>{project.title}</h2>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{project.location} &middot; {project.county} &middot; {project.dateLabel}</p>

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
              <p style={{ lineHeight: 1.7, fontSize: '0.9rem', color: '#555', fontStyle: 'italic', background: '#fff8f1', border: '1px solid #ead8cc', borderRadius: '6px', padding: '0.75rem 1rem' }}>
                <strong>Evidence status:</strong> {project.evidenceNote}
              </p>
            </section>
          ))}

          {/* Summary Stats */}
          <div style={{ background: 'var(--color-dark)', color: '#fff', borderRadius: '12px', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Projects at a Glance</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>Verify</p>
                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Cost records before publishing</p>
              </div>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>180–350 sqft</p>
                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Size range</p>
              </div>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>Verify</p>
                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Timeline before publishing</p>
              </div>
            </div>
          </div>

          {/* What You Can Expect */}
          <h2 style={S.h2}>What to Expect From Your Deck Transformation</h2>
          <p style={S.p}>Every project on this page followed the same process and yours will too:</p>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: 2, marginBottom: '2rem' }}>
            <li><strong>On-site consultation</strong> we measure, photograph, and discuss your goals in person.</li>
            <li><strong>Design planning</strong> drawings or renderings are prepared when the project scope calls for them.</li>
            <li><strong>Itemized written quote</strong> materials, labor, permits, timeline, and warranty terms in writing.</li>
            <li><strong>Permit management</strong> we submit plans, coordinate HOA review, and schedule inspections.</li>
            <li><strong>Professional build</strong> the construction plan, crew, inspection schedule, and access expectations are confirmed before work starts.</li>
            <li><strong>Final walkthrough</strong> we inspect every detail with you before the project is marked complete.</li>
            <li><strong>Written warranty terms</strong> workmanship and manufacturer coverage are documented in the signed project paperwork.</li>
          </ol>

          {/* Types of Transformations */}
          <h2 style={S.h2}>Types of Deck Transformations We Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'New Deck Construction', desc: 'Bare yard to custom outdoor living space.', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', desc: 'New composite surface on existing frame. Save 25-40%.', link: '/services/deck-resurfacing' },
              { title: 'Full Deck Replacement', desc: 'Complete tear-down and rebuild with modern materials.', link: '/deck-resurfacing-vs-replacement' },
              { title: 'Screened Porch Conversion', desc: 'Open deck to bug-free 3-season room.', link: '/screened-porch-builder-northern-virginia' },
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
              ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/deck-resurfacing-vs-replacement', 'Resurfacing vs Full Replacement'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood 15-Year Cost Analysis'],
              ['/showcase', 'Full Project Gallery'],
              ['/houzz-deck-projects', 'Houzz Project Portfolio'],
              ['/reviews', 'Customer Reviews — verify public profiles'],
              ['/bbb-accredited-deck-builder-virginia', 'BBB Accredited Deck Builder'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/get-estimate', 'Request a Written Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Ready to Transform Your Deck?" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/before-and-after" />
      <NamedAuthor context="Northern Virginia before-and-after project verification" lastUpdated="2026-06-01" />
      <ContactHome />
    </>
  );
}
