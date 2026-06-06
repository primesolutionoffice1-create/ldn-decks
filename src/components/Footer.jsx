"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useContact } from '@/context/ContactContext';
import styles from './Footer.module.css';

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.06 21 2 12.94 2 3C2 2.45 2.45 2 3 2H6.5C7.05 2 7.5 2.45 7.5 3C7.5 4.25 7.7 5.45 8.07 6.57C8.18 6.92 8.1 7.31 7.82 7.59L5.62 9.79L6.62 10.79Z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.53 9-10.95z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M21.35 11.1h-9.17v2.73h5.14c-.22 1.1-.88 2.03-1.85 2.68v2.23h3.01c1.76-1.62 2.77-4.01 2.77-6.85 0-.6-.05-1.18-.13-1.79zM12.18 21c2.43 0 4.47-.8 5.96-2.18l-3.01-2.23c-.83.56-1.9.89-2.95.89-2.27 0-4.2-1.53-4.89-3.59H4.16v2.32c1.48 2.93 4.54 4.91 8.02 4.91zM7.29 13.88c-.18-.54-.28-1.12-.28-1.71s.1-1.17.28-1.71V8.14H4.16c-.62 1.25-.98 2.67-.98 4.17s.36 2.92.98 4.17l3.13-2.6zM12.18 6.5c1.32 0 2.5.45 3.44 1.35l2.58-2.58C16.64 3.81 14.6 3 12.18 3 8.7 3 5.64 4.98 4.16 7.91l3.13 2.14c.69-2.06 2.62-3.59 4.89-3.59z" />
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.42-.11.66-.11 1.34-.02 2.01.01 5.39-4.27 10.12-9.66 9.84-2.58-.13-5.26-1.57-6.52-3.84-2.58-4.66.75-10.99 6-10.74V9.22c-1.68.18-3.3 1.38-3.77 3.01-.58 2.01.5 4.34 2.45 5.09 1.48.56 3.23.23 4.34-.84.94-1.07 1.12-2.58 1.1-3.95V0h.01l.46.02z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
  </svg>
);

export default function Footer() {
  const { openContact } = useContact();
  return (
    <footer className={styles.footerWrapper}>
      {/* Top Dark Background Layer with image */}
      <div className={styles.topFooter}>
        <div className={styles.container}>
          <div className={styles.col1}>
            <div className={styles.logoCont}>
              <Image
                src="/ldndecks-logo.webp"
                alt="Loudoun Decks — Northern Virginia deck builder, Trex Platinum Partner and TimberTech Certified Installer"
                width={100}
                height={80}
                style={{ objectFit: 'contain', background: '#e4dac9', padding: '10px', borderRadius: '4px' }}
              />
            </div>
            <div className={styles.bbbSealFooter} style={{ marginTop: '15px' }}>
              <a href="https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241/#sealclick" target="_blank" rel="nofollow">
                <Image src="/badges/bbb-a-plus-seal.png" style={{ border: 0 }} width={123} height={40} alt="Loudoun Decks BBB Business Review" />
              </a>
            </div>
            <p className={styles.brandPitch}>
              We offer the Perfect Decking Solution for your home to live Your Outdoor Dreams.
            </p>
          </div>

          <div className={styles.col2}>
            <h3>Explore</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/services/new-decks">New Decks</Link></li>
              <li><Link href="/services/windows">Windows</Link></li>
              <li><Link href="/services/porches/front-porch">Front Porches</Link></li>
              <li><Link href="/services/porches/open-porch">Open Porches</Link></li>
              <li><Link href="/trex-decks">Trex Decks</Link></li>
              <li><Link href="/deck-builders-loudoun">Loudoun Deck Builders</Link></li>
              <li><Link href="/showcase">Recent Projects</Link></li>
              <li><Link href="/houzz-deck-projects">Houzz Projects</Link></li>
              <li><Link href="/before-and-after">Before &amp; After</Link></li>
              <li><Link href="/deck-cost-calculator">Cost Calculator</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/review">Leave a Review</Link></li>
              <li><Link href="/blog">Blog &amp; Tips</Link></li>
              <li><Link href="/education">Education Center</Link></li>
              <li><Link href="/areas-we-serve">Areas We Serve</Link></li>
              <li><Link href="/referral-partners">Referral Partners</Link></li>
              <li><Link href="/bbb-accredited-deck-builder-virginia">BBB Accredited</Link></li>
              <li><Link href="/sitemap.xml">Sitemap</Link></li>
              <li><button onClick={openContact} className={styles.footerBtnLink}>Contact Us</button></li>
            </ul>
          </div>

          <div className={styles.col3}>
            <h3>Guides</h3>
            <ul>
              <li><Link href="/northern-virginia-deck-building-guide">Deck Building Guide</Link></li>
              <li><Link href="/composite-deck-cost-northern-virginia">Deck Cost Guide</Link></li>
              <li><Link href="/composite-deck-cost-northern-virginia">Composite Deck Cost</Link></li>
              <li><Link href="/composite-deck-builder-loudoun">Composite Decks Loudoun</Link></li>
              <li><Link href="/screened-porch-cost-northern-virginia">Screened Porch Cost</Link></li>
              <li><Link href="/trex-vs-timbertech-vs-azek">Trex vs TimberTech vs AZEK</Link></li>
              <li><Link href="/timbertech-decks">TimberTech Decks</Link></li>
              <li><Link href="/composite-deck-vs-wood-deck-virginia">Composite vs Wood</Link></li>
              <li><Link href="/composite-decks">Composite Decks</Link></li>
              <li><Link href="/how-tariffs-affect-deck-prices-2026">2026 Tariff Impact</Link></li>
              <li><Link href="/does-a-deck-add-value-to-your-home">Deck ROI &amp; Home Value</Link></li>
              <li><Link href="/how-to-choose-a-deck-builder-northern-virginia">Choosing a Builder</Link></li>
            </ul>
          </div>

          <div className={styles.col3}>
            <h3>Resources</h3>
            <ul>
              <li><Link href="/loudoun-county-hoa-deck-rules">HOA Deck Rules</Link></li>
              <li><Link href="/deck-financing">Deck Financing</Link></li>
              <li><Link href="/outdoor-living-northern-virginia">Outdoor Living</Link></li>
              <li><Link href="/deck-payment-estimator">Payment Estimator</Link></li>
              <li><Link href="/deck-warranty-guide-northern-virginia">Warranty Guide</Link></li>
              <li><Link href="/services/porches/screened-porch">Screened Porches</Link></li>
              <li><Link href="/deck-permit-loudoun-county-virginia">Loudoun Deck Permits</Link></li>
              <li><Link href="/deck-permit-fairfax-county-virginia">Fairfax Deck Permits</Link></li>
              <li><Link href="/deck-permit-arlington-county-virginia">Arlington Deck Permits</Link></li>
              <li><Link href="/deck-permit-prince-william-county-virginia">Prince William Deck Permits</Link></li>
              <li><Link href="/areas-we-serve">Areas We Serve</Link></li>
              <li><Link href="/scholarship">Scholarship</Link></li>
              <li><Link href="/social">Social Media</Link></li>
              <li><Link href="/get-estimate">Get a Free Estimate</Link></li>
            </ul>
          </div>

          <div className={styles.col4}>
            <h3>Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <PhoneIcon />
                <span>+1 (571) 655-7207</span>
              </li>
              <li>
                <EnvelopeIcon />
                <span>office@ldndecks.com</span>
              </li>
              <li className={styles.alignStart}>
                <LocationIcon />
                <span>13704 Winding Oak Cir,<br />Centreville, VA 20121</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Solid Black Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.containerBottom}>
          <p>© Copyrights are Reserved by LDN Decks | <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms of Service</Link></p>

          <div className={styles.socials}>
            <a href="https://www.facebook.com/profile.php?id=61574201228967" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook"><FbIcon /></a>
            <a href="https://x.com/ldndecks" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter"><XIcon /></a>
            <a href="https://www.instagram.com/loudoundecks/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://www.google.com/maps/place/Loudoun+Decks/@38.8379807,-77.4214727,15z/data=!4m6!3m5!1s0x89b6450e6789e93d:0x91d60ee13bfdba09!8m2!3d38.8396576!4d-77.4392692!16s%2Fg%2F11vybttycn?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Google Maps"><GoogleIcon /></a>
            <a href="https://www.tiktok.com/@loudoun.decks" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok"><TiktokIcon /></a>
            <a href="mailto:office@ldndecks.com" className={styles.socialIcon} aria-label="Email Us"><EnvelopeIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
