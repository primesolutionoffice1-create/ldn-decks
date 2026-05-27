import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/northern-virginia-deck-building-guide',
  title: 'The Complete Guide to Building a Deck in Northern Virginia (2026)',
  description: 'Everything you need to know about building a deck in Northern Virginia: costs, materials, permits, HOA, timeline, contractors, maintenance. The definitive 2026 guide.',
});

export default function MegaGuidePage() {
  const sections = [
    { id: 'cost', title: '1. How Much Does a Deck Cost?', content: 'Composite decks in Northern Virginia cost $30–$75/sqft installed. Pressure-treated wood: $18–$35/sqft. A typical 300–500 sqft project runs $15,000–$45,000. Northern Virginia prices are 25–35% above the state average due to higher labor, stricter codes, and HOA requirements.', link: '/how-much-does-a-deck-cost-northern-virginia', linkText: 'Full pricing guide with tables →' },
    { id: 'materials', title: '2. Choosing the Right Material', content: 'Trex Transcend is the best overall choice for most NoVA homeowners best balance of durability, appearance, and price ($45–$65/sqft). TimberTech AZEK is the premium pick ($50–$75/sqft, 50-year warranty). Trex Enhance is the budget option ($30–$50/sqft). Wood costs less upfront but more over 15 years when you add maintenance.', link: '/trex-vs-timbertech-vs-azek', linkText: 'Trex vs TimberTech vs AZEK comparison →' },
    { id: 'composite-vs-wood', title: '3. Composite vs Wood', content: 'Over 15 years, composite is actually cheaper than wood. Wood needs $300–$800/year in staining and repairs. Composite needs zero maintenance. Wood lasts 10–15 years; composite lasts 25–50 years. Composite recoups 65–80% at resale vs 50–65% for wood. For Virginia\'s freeze-thaw climate, composite is the clear winner.', link: '/composite-deck-vs-wood-deck-virginia', linkText: 'Full composite vs wood comparison →' },
    { id: 'permits', title: '4. Permits in Northern Virginia', content: 'Every deck attached to a house or over 30 inches above grade needs a building permit. Loudoun County: 10–15 business days. Fairfax County: 3–6 weeks. Prince William: 2–4 weeks. Three inspections required: footings, framing, final. Cost: $200–$800. A quality builder handles all permits for you.', link: '/deck-permit-fairfax-county-virginia', linkText: 'Fairfax County permit guide →' },
    { id: 'hoa', title: '5. HOA Approval', content: 'Over 80% of NoVA homes are in HOA communities requiring architectural review before deck construction. Submit: site plan, materials list, color samples, railing details. Timeline: 2–4 weeks. Common restrictions: material type, colors, railing profile, setbacks. We handle all HOA submissions with a 100% approval rate.', link: '/hoa-deck-rules-northern-virginia', linkText: 'Complete HOA guide →' },
    { id: 'size', title: '6. What Size Deck to Build', content: 'Couples: 150–200 sqft. Families of 4: 300–400 sqft. Entertainers: 500+ sqft. Average NoVA deck: 300–400 sqft. Don\'t exceed 20–25% of your backyard area. Allow 12×12 ft minimum for a 6-person dining table with walking room.', link: '/what-size-deck-should-i-build', linkText: 'Deck size guide with tables →' },
    { id: 'timeline', title: '7. How Long Does It Take?', content: 'Construction: 2–4 weeks for most decks. Full timeline including consultation, design, permits, and construction: 6–12 weeks. The biggest variable is permits Fairfax County can take 3–6 weeks alone. Start the process 2–3 months before your desired completion date.', link: '/how-long-to-build-a-deck-northern-virginia', linkText: 'Full timeline breakdown →' },
    { id: 'best-time', title: '8. Best Time to Build', content: 'February–April for best pricing and availability. May–August is peak season with 4–6 week waits. September–November is the second-best window. Winter builds get 10–15% better pricing due to lower demand.', link: '/best-time-to-build-a-deck-northern-virginia', linkText: 'Month-by-month building calendar →' },
    { id: 'railings', title: '9. Railing Options', content: 'Composite ($40–$70/ft): most popular, zero maintenance. Aluminum ($35–$60/ft): clean modern look. Cable rail ($60–$100/ft): best view, modern. Glass ($80–$150/ft): premium, unobstructed. Check HOA guidelines some restrict cable and glass railings.', link: '/deck-railing-options-northern-virginia', linkText: 'All railing options compared →' },
    { id: 'lighting', title: '10. Deck Lighting', content: 'Post cap lights + stair risers = essential ($500–$1,200). Add under-rail LED strips for the popular package ($1,500–$3,000). Premium with recessed + smart controls: $3,000–$5,000+. Include lighting in the initial build 30–50% cheaper than retrofitting.', link: '/deck-lighting-ideas-northern-virginia', linkText: 'Lighting options and costs →' },
    { id: 'choose-builder', title: '11. Choosing a Contractor', content: '10 questions to ask: License? Insurance? Permits? HOA? Materials? References? Warranty? Estimate details? Timeline? Change orders? Red flags: no license, cash-only, no written warranty, suggests skipping permits, price far below others.', link: '/how-to-choose-a-deck-builder-northern-virginia', linkText: '10 questions + 5 red flags →' },
    { id: 'roi', title: '12. Does a Deck Add Value?', content: 'Composite deck ROI: 65–80% at resale. Screened porch: 70–85%. Wood deck: 50–65%. In NoVA\'s competitive market, homes with finished outdoor spaces sell 3–5 days faster. A $35,000 Trex deck can add $21,000–$28,000 to your home value.', link: '/does-a-deck-add-value-to-your-home', linkText: 'Full ROI data →' },
    { id: 'maintenance', title: '13. Maintenance', content: 'Composite: wash 1–2x/year with soap and water. That\'s it. Wood: stain/seal every 1–2 years ($600–$2,000), sand, replace rotted boards. Virginia\'s freeze-thaw (50–80 cycles/winter) and humidity (70–90% in summer) make maintenance critical for wood and trivial for composite.', link: '/deck-maintenance-checklist-virginia', linkText: 'Seasonal maintenance checklist →' },
    { id: 'screened-porch', title: '14. Screened Porch Option', content: 'Screened porches cost $25,000–$70,000+ but extend usable season from 5 months to 9–10 months. EZE-Breeze windows convert to a 3-season room. ROI at resale: 70–85%. Many clients combine an open deck with a screened porch for the best of both worlds.', link: '/screened-porch-cost-northern-virginia', linkText: 'Screened porch cost guide →' },
    { id: 'financing', title: '15. Financing Options', content: 'Finance your deck with $0 down and 12–60 month terms. Typical payments for a $30,000 deck: ~$525/month over 60 months. Building now locks in today\'s prices material costs rise 5–8% annually. Your deck adds home equity from day one.', link: '/deck-financing-northern-virginia', linkText: 'Financing options and payments →' },
  ];

  return (
    <>
      <WebPageSchema url="https://ldndecks.com/northern-virginia-deck-building-guide" name="The Complete Guide to Building a Deck in Northern Virginia (2026)" description="Everything you need to know about building a deck in Northern Virginia: costs, materials, permits, HOA, timeline, contractors, maintenance. The definitive 2026 guide." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img10.jpeg"
              alt="Professional deck construction in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Complete Guide to Building a Deck in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Everything you need to know costs, materials, permits, HOA, timeline, contractors, maintenance, and more</p>
          <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>By Loudoun Decks · Updated 2026 · 15 chapters · ~4,000 words</p>
        </div>
      </section>

      <nav style={{ background: '#f9f9f9', borderBottom: '1px solid #e5e5e5', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9rem' }}>Table of Contents</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.25rem' }}>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} style={{ fontSize: '0.85rem', color: 'var(--color-primary)', textDecoration: 'none', padding: '0.2rem 0' }}>{s.title}</a>
            ))}
          </div>
        </div>
      </nav>

      <article style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} style={{ marginBottom: '3rem', paddingTop: '1rem' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-dark)' }}>{s.title}</h2>
              <p style={{ lineHeight: 1.8, marginBottom: '1rem', fontSize: '1rem' }}>{s.content}</p>
              <Link href={s.link} style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{s.linkText}</Link>
              {i === 7 && (
                <div style={{ background: 'var(--color-primary)', color: '#fff', borderRadius: 8, padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Start Your Project?</h3>
                  <p style={{ marginBottom: '1rem', opacity: 0.9 }}>Free on-site consultation · Detailed estimate in 48 hours · We handle permits &amp; HOA</p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <CallLink style={{ background: '#fff', color: 'var(--color-primary)', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
                    <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
                  </div>
                </div>
              )}
            </section>
          ))}

          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '2rem', marginTop: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>About This Guide</h2>
            <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>This guide is written and maintained by <strong>Loudoun Decks</strong>, a Virginia Class A Licensed contractor and certified Trex Pro installer based in Centreville, VA. We&apos;ve built 200+ decks across Loudoun, Fairfax, and Prince William counties with a 5.0★ Google rating ({BUSINESS.aggregateRating.reviewCount}+ reviews).</p>
            <p style={{ lineHeight: 1.7 }}>Every data point reflects current 2026 Northern Virginia pricing, permit timelines, and market conditions. We update this guide quarterly. Questions? <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(571) 655-7207</CallLink> or <Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>request a free consultation</Link>.</p>
          </div>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Build Your Dream Deck" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
