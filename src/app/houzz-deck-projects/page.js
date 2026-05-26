import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/houzz-deck-projects',
  title: 'Loudoun Decks on Houzz | Deck Projects in Northern Virginia',
  description: 'View Loudoun Decks projects on Houzz, including custom decks, screened porches, patios, and outdoor living spaces across Northern Virginia.',
});

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Loudoun Decks Houzz Projects",
  "description": "Showcase of Loudoun Decks outdoor living projects on Houzz.",
  "about": { "@id": "https://ldndecks.com/#organization" }
};

const S = {
  section: { padding: '5rem 0' },
  container: { maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' },
  h2: { fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#111' },
  h3: { fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#111' },
  p: { marginBottom: '1.25rem', lineHeight: 1.8, fontSize: '1.15rem', color: '#4b5563' },
  card: { background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', height: '100%' }
};

export default function HouzzProjectsPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <WebPageSchema url="https://ldndecks.com/houzz-deck-projects" name="Loudoun Decks on Houzz | Deck Projects in Northern Virginia" description="View Loudoun Decks projects on Houzz, including custom decks, screened porches, patios, and outdoor living spaces across Northern Virginia." speakable />

      {/* Hero Section */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '7rem 0 6rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image src="/images/img27.jpeg" alt="Loudoun Decks Custom Project" fill priority quality={70} sizes="100vw" style={{ objectFit: 'cover', opacity: 0.18 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.5))' }}></div>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3.75rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Portfolio & Houzz Projects
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '1.35rem', lineHeight: 1.6, maxWidth: 750, margin: '0 auto 3rem' }}>
            Browse our verified Houzz projects showcasing high-end custom decks, screened porches, and backyard transformations across Northern Virginia.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://www.houzz.com/pro/webuser-782541997/loudoun-decks" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ background: 'var(--color-primary)', color: '#fff', padding: '1.25rem 2.75rem', borderRadius: 12, fontWeight: 700, fontSize: '1.15rem', textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 10px 25px rgba(209, 72, 23, 0.3)' }}
            >
              View Our Houzz Profile
            </a>
            <Link 
              href="/get-estimate" 
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '1.25rem 2.75rem', borderRadius: 12, fontWeight: 700, fontSize: '1.15rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)' }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* intro Content */}
      <section style={S.section}>
        <div style={S.container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <h2 style={S.h2}>A Showcase of Craftsmanship</h2>
              <p style={S.p}>
                At Loudoun Decks, we believe that seeing is believing. That’s why we maintain a comprehensive portfolio of our projects on Houzz, the leading platform for home remodeling and design. Whether you are looking for <strong>composite deck ideas</strong>, <strong>screened porch inspiration</strong>, or <strong>custom patio layouts</strong>, our Houzz profile serves as a visual guide to what is possible for your Northern Virginia home.
              </p>
              <p style={S.p}>
                Our featured projects include everything from small urban deck replacements to massive, multi-level outdoor living complexes featuring integrated kitchens, fire pits, and luxury lighting. By browsing our work on Houzz, you can see how we navigate the unique topography and architectural styles of communities like Ashburn, Leesburg, and Reston.
              </p>
              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f3f4f6', borderRadius: 12, borderLeft: '5px solid var(--color-primary)' }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#111' }}>"Nick and his team are true professionals. The design they provided was exactly what we wanted for our backyard."</p>
                <p style={{ margin: '0.5rem 0 0', color: '#6b7280', fontSize: '0.95rem' }}>— Satisfied Homeowner on Houzz</p>
              </div>
            </div>
            <div style={{ position: 'relative', height: 500, borderRadius: 24, overflow: 'hidden', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.25)', border: '1px solid #e5e7eb' }}>
               <Image 
                src="/images/img67.webp" 
                alt="Loudoun Decks High-End Project Portfolio" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
               />
               <div style={{ position: 'absolute', bottom: 25, left: 25, right: 25, background: 'rgba(255,255,255,0.98)', padding: '1.5rem', borderRadius: 16, textAlign: 'center', backdropFilter: 'blur(8px)' }}>
                  <div style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem' }}>5.0 ★★★★★</div>
                  <p style={{ margin: 0, fontWeight: 800, color: '#111', fontSize: '1.2rem' }}>Verified Professional on Houzz</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Content */}
      <section style={{ ...S.section, background: '#f9fafb' }}>
        <div style={S.container}>
          <h2 style={{ ...S.h2, textAlign: 'center', marginBottom: '4rem' }}>Our Specialties Across Northern Virginia</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={S.card}>
              <div style={{ height: 200, position: 'relative', margin: '-2rem -2rem 1.5rem', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                <Image src="/images/img13.jpeg" alt="Custom Deck Construction" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={S.h3}>Trex Certified Deck Builders</h3>
              <p style={S.p}>
                We specialize in high-performance composite decking. As a Trex certified partner, we bring unmatched expertise to every build, ensuring your deck remains splinter-free and rot-resistant for decades.
              </p>
              <Link href="/trex-decks" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>Learn more about Trex →</Link>
            </div>
            <div style={S.card}>
              <div style={{ height: 200, position: 'relative', margin: '-2rem -2rem 1.5rem', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                <Image src="/images/img14.jpeg" alt="Screened Porch Projects" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={S.h3}>Custom Screened Porches</h3>
              <p style={S.p}>
                Experience the best of outdoor living without the bugs. Our screened porches feature premium EZE-Breeze windows and vaulted ceilings, creating a comfortable year-round retreat.
              </p>
              <Link href="/services/porches/screened-porch" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>View Porch Styles →</Link>
            </div>
            <div style={S.card}>
              <div style={{ height: 200, position: 'relative', margin: '-2rem -2rem 1.5rem', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                <Image src="/images/img11.jpeg" alt="Patio and Hardscape Design" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={S.h3}>Luxury Patios & Hardscapes</h3>
              <p style={S.p}>
                From stamped concrete to natural bluestone patios, we design hardscapes that integrate perfectly with your landscape. Add a fire pit or outdoor kitchen to complete the oasis.
              </p>
              <Link href="/services/patios" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>Explore Patios →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content: Why Houzz? */}
      <section style={S.section}>
        <div style={S.container}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={S.h2}>Why Research Our Houzz Projects?</h2>
            <p style={S.p}>
              Houzz is more than just a gallery; it is a community of homeowners and professionals sharing real-world feedback. When you visit our Houzz profile, you are seeing <strong>verified reviews</strong> and <strong>high-resolution photography</strong> from real jobsites in Loudoun County and Fairfax County.
            </p>
            <h3 style={S.h3}>Serving Loudoun, Fairfax, and Prince William Counties</h3>
            <p style={S.p}>
              We are deeply rooted in the Northern Virginia community. Our projects on Houzz span a wide range of locations, including:
            </p>
            <ul style={{ ...S.p, listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <li>✅ <strong>Ashburn</strong> - Modern composite deck designs.</li>
              <li>✅ <strong>Leesburg</strong> - Historic and farmhouse-style porches.</li>
              <li>✅ <strong>Reston & Herndon</strong> - Contemporary outdoor living spaces.</li>
              <li>✅ <strong>Centreville & Chantilly</strong> - Multi-level deck transformations.</li>
              <li>✅ <strong>Woodbridge & Manassas</strong> - Custom patios and fire pits.</li>
              <li>✅ <strong>Sterling</strong> - Deck resurfacing and upgrades.</li>
            </ul>
            <p style={S.p}>
              By checking our local projects, you can see how we handle specific HOA requirements and local building codes, ensuring your project is compliant and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section style={{ ...S.section, background: '#fff', borderTop: '1px solid #eee' }}>
        <div style={S.container}>
          <h2 style={{ ...S.h2, textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Can I see more photos than what's on the website?</h4>
              <p style={S.p}>Yes! Our Houzz profile features hundreds of photos that aren't always available on our main site. It’s the best place to find specific design inspiration for stairs, railings, and lighting.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Do you provide 3D designs before starting?</h4>
              <p style={S.p}>Absolutely. Every project begins with a consultation where we discuss your goals. We then provide detailed plans and, for complex projects, 3D renderings so you can visualize the result before we break ground.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>How long does a typical deck project take?</h4>
              <p style={S.p}>Timelines vary by complexity, but most standard deck projects take 1-2 weeks once construction begins. Permitting and HOA approvals can take additional time, which our team manages for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ ...S.section, background: '#f3f4f6', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={S.h2}>Backyard Inspiration Gallery</h2>
          <p style={{ ...S.p, margin: '0 auto 3rem', maxWidth: 700 }}>
            Take a look at some of our favorite recent projects. Each of these homes now enjoys an outdoor space designed specifically for their lifestyle.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
             {[30, 31, 32, 33, 34, 35].map(num => (
               <div key={num} style={{ height: 250, position: 'relative', borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                 <Image src={`/images/img${num}.jpeg`} alt={`Loudoun Decks Project Showcase ${num}`} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
               </div>
             ))}
          </div>
          <a 
            href="https://www.houzz.com/pro/webuser-782541997/loudoun-decks" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '1.25rem 3rem', borderRadius: 14, fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none', boxShadow: '0 15px 30px rgba(209, 72, 23, 0.25)', transition: 'transform 0.2s' }}
          >
            Visit Our Full Portfolio on Houzz
          </a>
        </div>
      </section>

      <SimpleCTA 
        title="Ready to Start Your Outdoor Project?" 
        subtitle="Serving Loudoun & Fairfax Since 2008" 
        buttonText="Request Free Quote" 
        link="/get-estimate" 
      />
      
      <RelatedGuides currentPath="/houzz-deck-projects" />
      <ContactHome />
    </>
  );
}
