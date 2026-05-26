import React from 'react';
import Link from 'next/link';
import ContactHome from '@/components/ContactHome';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';

export const metadata = buildMetadata({
  path: '/social',
  title: 'Follow LDN Decks | Social Media & Online Profiles',
  description: 'Follow LDN Decks on X, Instagram, Facebook, Houzz, Yelp & more. See our latest deck projects, tips, and reviews across Northern Virginia.',
});

// No page-level org JSON-LD here: the canonical #organization entity (with
// sameAs / NAP) is emitted once globally by StructuredData in the root layout.
const socialProfiles = [
  {
    name: 'X (Twitter)',
    handle: '@ldndecks',
    url: 'https://x.com/ldndecks',
    desc: 'Deck building tips, project updates, and Northern Virginia outdoor living news.',
    color: '#000',
    icon: 'X',
  },
  {
    name: 'Instagram',
    handle: '@loudoundecks',
    url: 'https://www.instagram.com/loudoundecks/',
    desc: 'Project photos, before & after transformations, and behind-the-scenes build content.',
    color: '#E1306C',
    icon: 'IG',
  },
  {
    name: 'Facebook',
    handle: 'LDN Decks',
    url: 'https://www.facebook.com/profile.php?id=61573750423712',
    desc: 'Community updates, customer reviews, promotions, and project showcases.',
    color: '#1877F2',
    icon: 'FB',
  },
  {
    name: 'Google Business',
    handle: 'Loudoun Decks',
    url: 'https://www.google.com/maps/place/Loudoun+Decks/',
    desc: `${BUSINESS.aggregateRating.reviewCount}+ five-star reviews. See our location, hours, photos, and leave a review.`,
    color: '#4285F4',
    icon: 'G',
  },
  {
    name: 'Houzz',
    handle: 'LDN Decks',
    url: 'https://www.houzz.com/pro/webuser-782541997/loudoun-decks',
    desc: 'Full project portfolio, ideabooks, and professional profile with client reviews.',
    color: '#4DBC15',
    icon: 'Hz',
  },
  {
    name: 'Yelp',
    handle: 'Loudoun Decks',
    url: 'https://www.yelp.com/biz/loudoun-decks-centreville',
    desc: 'Customer reviews, photos, and business information.',
    color: '#D32323',
    icon: 'Y',
  },
  {
    name: 'BBB',
    handle: 'Loudoun Decks',
    url: 'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241',
    desc: 'Better Business Bureau accreditation and complaint history.',
    color: '#005DAA',
    icon: 'BBB',
  },
  {
    name: 'BuildZoom',
    handle: 'Loudoun Decks',
    url: 'https://www.buildzoom.com/contractor/loudoun-decks',
    desc: 'Contractor profile with license and project credibility signals.',
    color: '#364fc7',
    icon: 'BZ',
  },
  {
    name: 'Loudoun Chamber',
    handle: 'Loudoun Decks',
    url: 'https://business.loudounchamber.org/list/member/loudoun-deck-30047.htm',
    desc: 'Local business directory profile and Northern Virginia chamber citation.',
    color: '#0f766e',
    icon: 'LC',
  },
  {
    name: 'MapQuest',
    handle: 'Loudoun Decks',
    url: 'https://www.mapquest.com/us/virginia/loudoun-decks-532352487',
    desc: 'Map listing that reinforces address, service area, and local entity data.',
    color: '#6d28d9',
    icon: 'MQ',
  },
];

export default function SocialPage() {
  return (
    <main>
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Follow LDN Decks</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Connect with us on social media, review platforms, and professional directories</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p>See our latest projects, get deck building tips, and read what Northern Virginia homeowners say about working with us. We post regularly on X and Instagram.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {socialProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  background: '#fff',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  border: '1px solid #e5e5e5',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: profile.color,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                  }}>
                    {profile.icon}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>{profile.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>{profile.handle}</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5, margin: 0 }}>{profile.desc}</p>
              </a>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Leave Us a Review</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Your feedback helps other Northern Virginia homeowners find a trusted deck builder. If you&apos;ve worked with us, we&apos;d appreciate a quick review on any of these platforms:</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="https://www.google.com/maps/place/Loudoun+Decks/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>Review on Google</a>
            <a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#D32323', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>Review on Yelp</a>
            <a href="https://www.houzz.com/pro/webuser-782541997/loudoun-decks" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#4DBC15', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>Review on Houzz</a>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>More About LDN Decks</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/before-and-after', 'Before & After Deck Transformations'],
              ['/reviews', `Read Our ${BUSINESS.aggregateRating.reviewCount}+ Google Reviews`],
              ['/team', 'Meet Our Team'],
              ['/about/certifications-and-licenses', 'Certifications & Licenses'],
              ['/showcase', 'Full Project Gallery'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Ready to Start Your Deck Project?" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
