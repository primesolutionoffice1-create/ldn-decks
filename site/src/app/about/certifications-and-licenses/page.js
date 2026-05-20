import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/about/certifications-and-licenses',
  title: 'Certifications & Licenses | Loudoun Decks — Verified Contractor',
  description: 'Loudoun Decks: Virginia Class A Licensed, fully insured, Trex Pro certified, BBB accredited. Verify our credentials. Serving Loudoun, Fairfax & Prince William.',
});

const credentialSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ldndecks.com/#organization",
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "Virginia Class A Contractor License", "recognizedBy": { "@type": "GovernmentOrganization", "name": "Virginia Department of Professional and Occupational Regulation (DPOR)" } },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Trex Platinum Partner", "recognizedBy": { "@type": "Organization", "name": "Trex Company" } },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "TimberTech Certified Installer", "recognizedBy": { "@type": "Organization", "name": "TimberTech / AZEK" } },
  ]
};

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={credentialSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Certifications &amp; Licenses</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Verified credentials you can check yourself — transparency builds trust</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Virginia Contractor License', detail: 'Class A Licensed Contractor — Virginia Department of Professional and Occupational Regulation (DPOR). Authorized for residential and commercial projects of any value in Virginia.', verify: 'Verify at dpor.virginia.gov → License Lookup', badge: 'DPOR Licensed' },
              { title: 'Fully Insured', detail: 'Comprehensive general liability insurance and workers\' compensation coverage. Certificate of insurance available on request for any project.', verify: 'Request certificate: office@ldndecks.com', badge: 'Insured' },
              { title: 'Trex Pro Installer', detail: 'Certified Trex Pro installer with direct access to the full Trex product line. Trex Pro certification requires demonstrated installation expertise and ongoing training.', verify: 'Verify at trex.com/find-a-builder', badge: 'Trex Pro' },
              { title: '5.0★ Google Rating', detail: '41 five-star reviews on Google Business Profile. 100% 5-star ratings from Northern Virginia homeowners across Loudoun, Fairfax, and Prince William counties.', verify: 'Search "Loudoun Decks" on Google Maps', badge: '5.0 ★★★★★' },
              { title: '2-Year Workmanship Warranty', detail: 'Every project backed by our written 2-year workmanship warranty, covering all labor and installation. This is on top of manufacturer material warranties (Trex: 25 years, TimberTech AZEK: 50 years).', verify: 'Warranty terms provided in writing with every contract', badge: '2-Year Warranty' },
              { title: '100% Permit Approval Rate', detail: 'Perfect permit approval record across Loudoun County, Fairfax County, Prince William County, Arlington County, and Stafford County. We handle all permit submissions and inspections.', verify: 'Contact your county building department to verify', badge: '100% Approved' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', border: '1px solid #e5e5e5' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.badge}</p>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h2>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#555', marginBottom: '0.75rem' }}>{item.detail}</p>
                <p style={{ fontSize: '0.8rem', color: '#888' }}><strong>Verify:</strong> {item.verify}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Credentials Matter</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Virginia law requires any contractor performing work over $1,000 to hold a valid DPOR license. Unlicensed contractors leave you with:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>No legal recourse if work is defective</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Personal liability if a worker is injured on your property (no workers&apos; comp)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Unpermitted work that must be disclosed (and possibly demolished) at home sale</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>No insurance coverage for property damage during construction</li>
          </ul>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><Link href="/how-to-choose-a-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our full guide to choosing a deck builder →</Link></p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Service Area</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Licensed and insured to operate across Northern Virginia:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { county: 'Loudoun County', cities: 'Ashburn, Leesburg, Sterling, Brambleton, South Riding, Broadlands, Purcellville, Aldie, Middleburg' },
              { county: 'Fairfax County', cities: 'McLean, Vienna, Reston, Great Falls, Herndon, Fairfax, Centreville, Chantilly, Oakton, Tysons, Falls Church' },
              { county: 'Prince William County', cities: 'Manassas, Woodbridge, Haymarket, Gainesville, Bristow, Dumfries, Lake Ridge' },
              { county: 'Also Serving', cities: 'Arlington County, Stafford County, and surrounding areas' },
            ].map((area) => (
              <div key={area.county}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{area.county}</h3>
                <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.5 }}>{area.cities}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Contact</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '0.5rem' }}><strong>Loudoun Decks LLC</strong></p>
            <p style={{ marginBottom: '0.5rem' }}>13704 Winding Oak Cir, Centreville, VA 20121</p>
            <p style={{ marginBottom: '0.5rem' }}>Phone: <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(571) 655-7207</CallLink></p>
            <p style={{ marginBottom: '0.5rem' }}>Email: <a href="mailto:office@ldndecks.com" style={{ color: 'var(--color-primary)' }}>office@ldndecks.com</a></p>
            <p>Hours: Monday–Saturday 8:00 AM – 6:00 PM</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/about', 'About Loudoun Decks'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
              ['/about/process', 'Our Build Process'],
              ['/contact', 'Contact Us'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Verified, Licensed, Insured — Get Your Free Estimate" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
