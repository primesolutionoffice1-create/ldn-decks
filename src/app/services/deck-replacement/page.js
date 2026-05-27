import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/deck-replacement",
  title: "Professional Deck Replacement Northern Virginia | Rebuild & Remodel",
  description: "Full deck replacement in Northern Virginia. Projects from $15k+, permits and HOA handled, 2-4 week typical build timeline, composite rebuilds."
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Deck Replacement and Rebuilding",
  "provider": { "@id": "https://ldndecks.com/#organization" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
    { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
    { "@type": "AdministrativeArea", "name": "Prince William County, VA" }
  ],
  "description": "Professional deck replacement services including structural assessment, old deck removal, and premium composite rebuilds using Trex and TimberTech."
};

const replacementSections = [
  {
    title: "Why Replace Instead of Repair?",
    paragraphs: [
      "Often, an aging deck has underlying structural issues or wood rot that makes simple repairs unsafe or cost-ineffective. Our replacement service provides a fresh start with modern materials."
    ],
    listItems: [
      { label: "1. Safety First", text: "We identify and fix hidden structural failures in old ledger boards or joists." },
      { label: "2. Value Increase", text: "A new composite deck offers a significantly higher ROI than patching up an old wood one." },
      { label: "3. Zero Maintenance", text: "Trade in your yearly staining and sanding for a deck that stays beautiful for 25+ years." },
      { label: "4. Modern Aesthetics", text: "Update your home's look with current colors, hidden fasteners, and sleek railing systems." }
    ]
  },
  {
    title: "Our Specialized Rebuild Process",
    paragraphs: [
      "We don't just 'slap new boards' on top of old wood. Our meticulous process ensures your new deck is built to last a lifetime."
    ],
    listItems: [
      { label: "Structural Audit", text: "We perform a deep-dive inspection of your existing framing to see what can be safely salvaged." },
      { label: "Clean Tear-Down", text: "Eco-friendly removal and disposal of your old, rotted, or infested deck materials." },
      { label: "Framing Reinforcement", text: "We reinforce existing joists or pour new footings to meet modern building codes." },
      { label: "Composite Transformation", text: "Expert installation of Trex, AZEK, or TimberTech boards with a 25-year manufacturer warranty." }
    ]
  }
];

const replacementBenefits = [
  { title: "Code Compliance", desc: "We ensure every rebuild meets or exceeds current VA building codes." },
  { title: "Trex Specialists", desc: "Authorized installers for the world's #1 decking brand." },
  { title: "Clean Jobsite", desc: "No debris left behind; we respect your lawn and landscaping." },
  { title: "Permits & HOA Handled", desc: "We coordinate county permit requirements and HOA architectural review details." },
  { title: "Typical Timeline: 2-4 Weeks", desc: "Most full replacement builds take 2-4 weeks once permits and material selections are complete." },
  { title: "Before & After Results", desc: "See completed deck transformations so you can compare old wood decks with finished composite rebuilds." },
  { title: "Fixed Pricing", desc: "Detailed, itemized quotes with no hidden 'extra' fees during construction." }
];

export default function DeckReplacementPage() {
  return (
    <main>
      <JsonLd data={serviceSchema} />
      <WebPageSchema url="https://ldndecks.com/services/deck-replacement" name="Professional Deck Replacement Northern Virginia | Rebuild &amp; Remodel" description="Full deck replacement in Northern Virginia. Projects from $15k+, permits and HOA handled, 2-4 week typical build timeline, composite rebuilds." speakable />
      <ServicesHeader
        subtext="Projects from $15,000+"
        title="Professional Deck Replacement in Northern Virginia"
        description="Don't let an aging, splintering deck hold you back. We specialize in tearing down old structures and building premium, low-maintenance outdoor retreats. Permits and HOA handled. Typical build timeline: 2-4 weeks."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>

      <AboveFoldCTA headline="Aging deck in Northern Virginia? Get a free structural evaluation and replacement estimate today." />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Full deck replacement projects from $15,000+</strong>
            <br />
            On this page we focus on <strong style={{ color: '#111' }}>full tear-down and rebuild projects</strong>. Looking for board replacement, railing or structural fixes on an otherwise sound deck? See our <a href="/services/deck-repair-and-structural-maintenance" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a>.
          </p>
        </div>
      </section>

      {/* Pricing Anchor */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '24px 20px', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#555', margin: 0 }}>
            <strong style={{ color: '#222' }}>Full deck replacement projects typically range from $20,000-$50,000</strong>
            {' '}— deck size, structural condition, materials, and railing upgrades affect final pricing.{' '}
            <strong>Free structural evaluation, permit guidance, and HOA coordination included.</strong>
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Northern Virginia's Rebuild Experts"
        title="Is it Time to Replace Your Deck?"
        description="If your deck is over 15 years old, shows signs of wood rot, or requires constant sanding and staining, a professional replacement is your best investment. We help Northern Virginia homeowners transition from old pressure-treated wood to luxury composite decking."
        listItems={[
          "Full removal of existing structural debris",
          "Verification of framing and footing integrity",
          "High-end composite and PVC board options",
          "Modern railing and lighting upgrades",
          "Comprehensive HOA and permit coordination",
          "Typical build timeline: 2-4 weeks",
          "Before & after transformation planning"
        ]}
        image1="/images/img05.jpeg"
        image2="/images/img06.jpeg"
      />
      <ServiceContentExpansion sections={replacementSections} />
      <section style={{ padding: '20px 20px 40px', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>
        <h2 style={{ fontSize: '30px', marginBottom: '16px', fontWeight: 800 }}>Replacement Is Also a Code Reset</h2>
        <p style={{ fontSize: '17px', color: '#555', marginBottom: 0 }}>
          A full replacement lets us correct the problems that make older decks fail: shallow footings, undersized joists,
          racked framing, weak ledger connections, and unpermitted work that creates resale issues. Before construction, we confirm
          <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}> footing depth</Link>,
          {' '}<Link href="/blog/2x8-vs-2x10-deck-joists" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>joist sizing</Link>,
          {' '}<Link href="/blog/3-4-5-rule-decking" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>square layout</Link>, and
          {' '}<Link href="/blog/deck-without-permit-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>permit history</Link> so the rebuild is clean from day one.
        </p>
      </section>
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '800' }}>Common Signs Your Deck Needs Replacement</h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto 50px', lineHeight: '1.6' }}>
          If your deck exhibits any of the following issues, a full replacement is often the safest and most cost-effective solution.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck.webp" alt="Severe board rot and splintering" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck1.webp" alt="Weathered and graying structural wood" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck2.webp" alt="Failing deck fasteners and hardware" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck3.jpg" alt="Unsafe railing and structural decay" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px', fontWeight: 800 }}>Seamless Transitions</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>We handle everything from the first drill to the final cleanup.</p>
        <div style={{ position: 'relative', height: '500px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <Image src="/images/img97.jpeg" alt="Deck replacement transformation" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
      </section>
      <ServiceInclusions
        title="The LDN Difference in Replacements"
        description="Why trust us with your rebuild project?"
        items={replacementBenefits}
      />
      <ServiceAreasGrid />
      <ServicesCallToAction />
      <RelatedGuides currentPath="/services/deck-replacement" />
      <SimpleCTA title="Ready for a New Deck?" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
