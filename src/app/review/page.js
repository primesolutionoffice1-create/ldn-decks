import Link from 'next/link';
import WebPageSchema from '@/components/WebPageSchema';
import CallLink from '@/components/CallLink';
import { buildMetadata } from '@/lib/seo';

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/place/Loudoun+Decks/@38.8379807,-77.4214727,15z/data=!4m6!3m5!1s0x89b6450e6789e93d:0x91d60ee13bfdba09!8m2!3d38.8396576!4d-77.4392692!16s%2Fg%2F11vybttycn?entry=ttu';
const YELP_URL = 'https://www.yelp.com/biz/loudoun-decks-centreville';
const BBB_URL = 'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241';

export const metadata = buildMetadata({
  path: '/review',
  title: 'Google Review Guidance for Loudoun Decks | LDN Decks',
  description: 'Share your completed Loudoun Decks project experience on Google. Thank you for helping other Northern Virginia homeowners choose confidently.',
  image: '/social/leave-review-social.png',
});

const S = {
  section: { padding: '4rem 0' },
  container: { maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' },
  card: { border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', background: '#fff' },
  h2: { fontSize: '1.65rem', fontWeight: 800, marginBottom: '1rem' },
  p: { lineHeight: 1.7, color: '#475569', marginBottom: '1rem' },
};

export default function ReviewPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01"
        url="https://ldndecks.com/review"
        name="Google Review Guidance for Loudoun Decks"
        description="Share your completed Loudoun Decks project experience on Google."
        speakable
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
            Thank you for trusting Loudoun Decks
          </p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }} data-speakable>
            Google Review Guidance for Your LDN Decks Project
          </h1>
          <p style={{ color: '#d8dee8', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: 760 }} data-speakable>
            Public reviews help Northern Virginia homeowners compare contractors, verify workmanship, and choose a deck builder with more confidence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.9rem 1.35rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
              Leave a Google Review
            </a>
            <Link href="/reviews" style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '0.9rem 1.35rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
              Read Reviews
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff7ed', borderBottom: '1px solid #fed7aa', padding: '1.5rem 0' }}>
        <div style={S.container}>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            <strong>Public Google review profile</strong> &middot; BBB profile &middot; Trex profile &middot; TimberTech profile &middot; Virginia Class A Contractor
          </p>
        </div>
      </section>

      <section style={S.section}>
        <div style={S.container}>
          <h2 style={S.h2}>Share Your Experience on Google</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              {
                title: 'Google',
                text: 'Best place to help homeowners searching for a local deck builder near them.',
                href: GOOGLE_REVIEW_URL,
                label: 'Leave Google Review',
              },
              {
                title: 'BBB',
                text: 'Useful for homeowners checking public accreditation, licensing, and trust signals.',
                href: BBB_URL,
                label: 'Open BBB Profile',
              },
              {
                title: 'Yelp',
                text: 'Neutral public profile for homeowners who already use Yelp.',
                href: YELP_URL,
                label: 'View Yelp Profile',
              },
            ].map((platform) => (
              <div key={platform.title} style={S.card}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>{platform.title}</h3>
                <p style={{ ...S.p, fontSize: '0.92rem' }}>{platform.text}</p>
                <a href={platform.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 800, textDecoration: 'none' }}>
                  {platform.label} &rarr;
                </a>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>What to Mention</h2>
          <p style={S.p}>
            A short, specific review is more useful than a long generic one. You can mention the project type, city, materials, communication, cleanup, timeline, permit or HOA support, and what changed about your outdoor space after the project.
          </p>
          <div style={{ background: '#f8fafc', borderRadius: 10, padding: '1.5rem', marginBottom: '2.5rem' }}>
            <p style={{ margin: 0, lineHeight: 1.8, color: '#334155' }}>
              Review template: &ldquo;LDN Decks helped with our [project type] in [city]. The estimate was [clear/helpful], the team communicated about [timeline/materials/permit or HOA steps], and the finished outdoor space now [how you use it].&rdquo;
            </p>
          </div>

          <h2 style={S.h2}>Need Help Before Leaving a Review?</h2>
          <p style={S.p}>
            If something about your project still needs attention, please contact us first so we can review it directly. We want every finished project to be something you are comfortable recommending.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.85rem 1.25rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
              Call (571) 655-7207
            </CallLink>
            <Link href="/contact" style={{ border: '1px solid #e5e5e5', color: 'var(--color-dark)', padding: '0.85rem 1.25rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
              Contact the Office
            </Link>
          </div>

          <h2 style={S.h2}>Helpful Links</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              ['/reviews', 'Read Loudoun Decks Reviews'],
              ['/before-and-after', 'Before & After Projects'],
              ['/houzz-deck-projects', 'Houzz Project Portfolio'],
              ['/bbb-accredited-deck-builder-virginia', 'BBB Accredited Deck Builder'],
              ['/about/certifications-and-licenses', 'Certifications & Licenses'],
              ['/get-estimate', 'Request a Written Estimate'],
            ].map(([href, label]) => (
              <li key={href} style={{ marginBottom: '0.55rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{label} &rarr;</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
