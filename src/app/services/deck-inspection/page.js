import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import Testimonials from '@/components/Testimonials';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/services/deck-inspection",
      title: "Deck Inspection Loudoun VA | $350 Safety Audit | LDN Decks",
  description: "Ensure your outdoor space is safe with a professional $350 deck inspection in Northern Virginia. We identify hidden structural rot, foundational settling, and safety hazards."
});

export default function DeckInspectionPage() {
  return (
    <main>
      <ServiceSchema name="Deck Safety Inspection" description="Professional structural deck inspection in Northern Virginia. Ledger board, posts, joists, railings checked." price="150" />
      <ServicesHeader
        subtext="Deck Inspection Services"
        title="Comprehensive Deck Inspection for $350"
        description="Ensure the safety, structural integrity, and longevity of your deck with our professional inspection services. We identify hidden rot, structural issues, and potential safety hazards."
      />
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '700' }}>Providing Expert Deck Restoration Services</h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto 50px', lineHeight: '1.6' }}>
          Over time, even the most well-built decks fall victim to weathering, moisture, and foundational settling.
          Our $350 specialized deck inspection evaluates your entire structure from the footers to the railings.
          If we find issues, our restoration experts can repair, reinforce, and completely revitalize your older deck
          through <Link href="/services/deck-resurfacing">deck resurfacing</Link>, saving you thousands compared to a
          full <Link href="/services/new-decks">new deck build</Link>.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck.webp" alt="Old deck damage" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck1.webp" alt="Weathered deck boards" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck2.webp" alt="Deck requiring restoration" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck3.jpg" alt="Deck structural inspection" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <section style={{ padding: '20px 20px 80px', maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8', color: '#444' }}>
        <h3 style={{ fontSize: '28px', color: '#222', marginBottom: '25px', fontWeight: '700', textAlign: 'center' }}>The Hidden Dangers of Older and Outdated Decks</h3>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          A deck is not just an aesthetic addition to your outdoor space; it is a structural extension of your home.
          Over time, constant exposure to unpredictable weather, blistering summer UV rays, severe freeze-thaw cycles,
          and heavy moisture takes a severe toll on the building materials. Even decks built with premium wood or
          composite materials decades ago will eventually begin to show inescapable signs of aging. Ignoring these
          warning signs isn&apos;t just an eyesore—it is a critical and potentially devastating safety hazard.
        </p>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          As decks age, the underlying structural integrity of the frame often compromises long before the visible
          surface boards completely fail. Important foundational elements like concrete footings can sink or shift,
          causing the entire platform to become unstable or unleveled. Fasteners, joist hangers, and ledger boards
          often rust or pull away from the home&apos;s primary structure. In fact, ledger board failure is the leading
          cause of catastrophic deck collapses nationwide. Outdated building codes from 15 or 20 years ago lacked the
          heavy-duty flashing, tension ties, and lateral load requirements required by modern standards, leaving older
          decks inherently vulnerable to water intrusion and dangerously pulling away from the house. If you want the
          structural background before booking, start with our guides to <Link href="/blog/deck-footing-depth-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck footing depth in Virginia</Link>
          {' '}and <Link href="/blog/2x8-vs-2x10-deck-joists" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>2x8 vs 2x10 deck joists</Link>.
        </p>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          Moisture is the natural enemy of any traditional wooden deck. Over time, protective sealants strip away,
          allowing water to penetrate deep into the fibers. This leads to hidden dry rot underneath the surface,
          terrifying structural sponginess, and widespread mildew that makes the surface dangerously slippery.
          Additionally, older composite materials from early manufacturing generations didn&apos;t have the advanced
          capping technologies we use today, meaning they are highly prone to fading, growing persistent mold inside
          the core, and cracking under heavy pressure or prolonged heat.
        </p>
        <p style={{ fontSize: '18px' }}>
          It is absolutely essential that older decks are routinely inspected and evaluated for structural retro-fitting
          or outright replacement. Changing out an outdated deck doesn&apos;t just modernize your backyard aesthetic,
          raise your property value, and eliminate maintenance chores; it guarantees the fundamental safety of your
          family, friends, and guests. If your deck spans over 10 to 15 years old, begins to feel even slightly spongy
          underfoot, visibly sways when you walk, or exhibits extensive surface splintering and warping, it is definitely
          time for a professional change. If the structure was built without approvals, review <Link href="/blog/deck-without-permit-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>what happens with an unpermitted deck in Virginia</Link>
          {' '}before repairs begin. Let our experts assess your structure with a comprehensive $350 inspection to
          keep your outdoor living space safe, secure, and beautiful for years to come.
        </p>
        <section style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '12px', textAlign: 'center' }}>
          <h4 style={{ fontSize: '22px', marginBottom: '15px' }}>Check Your Local Safety Standards</h4>
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>Verify if your deck meets the latest safety and building codes in Northern Virginia:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="https://www.loudoun.gov/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-color)', fontWeight: '600', textDecoration: 'underline' }}>Loudoun County Residential Decks</a>
            <a href="https://www.fairfaxcounty.gov/landdevelopment/typical-deck-details" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-color)', fontWeight: '600', textDecoration: 'underline' }}>Fairfax County Deck Audit Guide</a>
          </div>
        </section>
      </section>
      <Testimonials />
      <ServiceAreasGrid />
      <RelatedGuides currentPath="/services/deck-inspection" />
      <SimpleCTA title="Schedule Your $350 Deck Inspection" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
            }
