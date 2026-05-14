"use client";
import React, { useState } from 'react';
import styles from './ContactHome.module.css';
import { useLeadSubmit } from '@/hooks/useLeadSubmit';
import CallLink from '@/components/CallLink';

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function ContactHome() {
  const [status, setStatus] = useState(null);
  const submit = useLeadSubmit({ formType: 'homepage' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    const result = await submit(e.target);
    if (!result.success) setStatus("error");
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.subtextWrapper}>
            <span className={styles.line}></span>
            <span className={styles.subtext}>Get In Touch</span>
          </div>
          <h2 className={styles.title}>Ready To Build Your<br/>Dream Deck?</h2>
          <p className={styles.description}>
            Reach out to our team of expert craftsmen today. Whether you have a firm plan in mind or need inspiration, we are here to provide a free consultation and exact quote for your outdoor project.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><PhoneIcon /></div>
              <div className={styles.infoText}>
                <span>Call Us Anytime</span>
                <CallLink display="+1 (571) 655-7207" />
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><MailIcon /></div>
              <div className={styles.infoText}>
                <span>Email Us</span>
                <strong>office@ldndecks.com</strong>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><MapIcon /></div>
              <div className={styles.infoText}>
                <span>Our Location</span>
                <strong>13704 Winding Oak Cir, Centreville, VA 20121</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              {/* Honeypot — bots auto-fill every input, real users never see this.
                  Server-side check in sendEmail.js silently accepts then drops. */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              />
              <h3>Get Your 100% Free Design Consultation</h3>
              <p className={styles.formSubtext}>Licensed & Insured | Trex Platinum Partner | 5.0★ Google Rated</p>
              {status === "error" && <p style={{color: 'red', fontSize: '14px', marginBottom: '10px'}}>There was an error sending your message. Please try again.</p>}
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <input type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
                </div>
                <div className={styles.inputGroup}>
                  <input type="email" name="email" placeholder="Email Address" required aria-label="Email Address" />
                </div>
                <div className={styles.inputGroup}>
                  <input type="tel" name="phone" placeholder="Phone Number" required aria-label="Phone Number" />
                </div>
                <div className={styles.inputGroup}>
                  <select name="service" required defaultValue="" aria-label="Select Service">
                    <option value="" disabled>Select Service</option>
                    <option value="New Decks">New Decks</option>
                    <option value="Deck Resurfacing">Deck Resurfacing</option>
                    <option value="Porches">Screened Porches</option>
                    <option value="Fencing">Fencing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                  <div className={styles.inputGroup}>
                    <select name="timeline" required defaultValue="" aria-label="Project Timeline">
                      <option value="" disabled>Project Timeline</option>
                      <option value="Immediately">Immediately</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="Just Exploring">Just Exploring</option>
                    </select>
                  </div>
                </div>
              <div className={styles.inputGroup}>
                <textarea name="message" placeholder="Tell us about your project (size, materials, location)..." rows="5" required aria-label="Project Details"></textarea>
              </div>
              <button type="submit" disabled={status === "submitting"} className={styles.submitBtn}>
                {status === "submitting" ? "Sending..." : "Get My Free Quote →"}
              </button>
              <p className={styles.privacyNote}>We value your privacy. No spam, only helpful deck experts.</p>
            </form>
        </div>
      </div>
    </section>
  );
}
