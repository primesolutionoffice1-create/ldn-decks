"use client";
import React, { useState } from 'react';
import { useContact } from '@/context/ContactContext';
import styles from './ContactForm.module.css';
import { useLeadSubmit } from '@/hooks/useLeadSubmit';
import CallLink from '@/components/CallLink';

export default function ContactForm({ hideInfoCol = false, noPadding = false }) {
  const [status, setStatus] = useState(null);
  const [submittedAt] = useState(() => Date.now());
  const { closeContact } = useContact();
  const submit = useLeadSubmit({ formType: 'quote' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent?.stopImmediatePropagation?.();
    setStatus("submitting");
    const result = await submit(e.target);
    if (result.success) {
      closeContact();
    } else {
      alert("Failed to send message. Please try again.");
      setStatus(null);
    }
  };

  return (
    <section className={`${styles.formSection} ${noPadding ? styles.noPadding : ''}`}>
      <div className={`${styles.container} ${noPadding ? styles.noPadding : ''}`}>
        <div className={`${styles.grid} ${hideInfoCol ? styles.fullWidthGrid : ''}`}>
          {!hideInfoCol && (
            <div className={styles.infoCol}>
              <h2>Reach Out Directly</h2>
              <p className={styles.infoDesc}>Our team reviews inquiries as they come in and responds as soon as possible during business hours.</p>
              <div className={styles.contactPoint}>
                <strong>Phone:</strong>
                <br/>
                <CallLink aria-label="Call Loudoun Decks" data-cta-location="contact_form_info_column">(571) 655-7207</CallLink>
              </div>
              <div className={styles.contactPoint}>
                <strong>Email:</strong>
                <br/>
                <a href="mailto:office@ldndecks.com" aria-label="Email Loudoun Decks office">office@ldndecks.com</a>
              </div>
              <div className={styles.contactPoint}>
                <strong>Service Areas:</strong>
                <br/>
                Loudoun County, Fairfax County, Prince William County, Arlington, and Stafford.
              </div>
              <div className={styles.contactPoint}>
                <strong>Primary Location:</strong>
                <br/>
                13704 Winding Oak Cir, Centreville, VA 20121
              </div>
            </div>
          )}
          <div className={`${styles.formCol} ${noPadding ? styles.formColNoPadding : ''}`}>
            <form
              onSubmit={handleSubmit}
              className={styles.formBlock}
              aria-label="Project Inquiry Form"
              data-form-location={hideInfoCol ? 'embedded_contact_form' : 'contact_form'}
            >
              {/* Honeypot — bots auto-fill every input, real users never see this.
                  Server-side check in sendEmail.js silently accepts then drops. */}
              <input
                type="text"
                name="ldn_extra_field"
                tabIndex={-1}
                autoComplete="new-password"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              />
              <input type="hidden" name="submittedAt" value={submittedAt} />
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName">First Name <span className={styles.req}>*</span></label>
                  <input id="firstName" name="firstName" type="text" required placeholder="First Name" autoComplete="given-name" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="lastName">Last Name <span className={styles.req}>*</span></label>
                  <input id="lastName" name="lastName" type="text" required placeholder="Last Name" autoComplete="family-name" />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address <span className={styles.req}>*</span></label>
                  <input id="email" name="email" type="email" required placeholder="name@email.com" autoComplete="email" aria-label="Your email address" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number <span className={styles.req}>*</span></label>
                  <input id="phone" name="phone" type="tel" required placeholder="Phone Number" autoComplete="tel" aria-label="Your phone number" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" placeholder="Street address" autoComplete="street-address" aria-label="Your street address" />
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="service">Service <span className={styles.req}>*</span></label>
                  <select id="service" name="service" required defaultValue="" className={styles.selectInput}>
                    <option value="" disabled>Select Service</option>
                    <option value="New Decks">New Decks</option>
                    <option value="Deck Replacement">Deck Replacement</option>
                    <option value="Composite Decks">Composite Decks</option>
                    <option value="Deck Resurfacing">Deck Resurfacing</option>
                    <option value="Screened Porches">Screened Porches</option>
                    <option value="Pergolas">Pergolas</option>
                    <option value="Patios">Patios</option>
                    <option value="Fencing">Fencing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="city">City <span className={styles.req}>*</span></label>
                  <input id="city" name="city" type="text" required placeholder="e.g. Ashburn" autoComplete="address-level2" />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="timeline">Project Timeline</label>
                  <select id="timeline" name="timeline" defaultValue="" className={styles.selectInput}>
                    <option value="" disabled>Select Start Date</option>
                    <option value="Immediately">Immediately</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Just Exploring">Just Exploring</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="budgetRange">Approximate Budget</label>
                  <select id="budgetRange" name="budgetRange" defaultValue="" className={styles.selectInput}>
                    <option value="" disabled>Select Budget Range</option>
                    <option value="Under $15K">Under $15K</option>
                    <option value="$15K-$25K">$15K-$25K</option>
                    <option value="$25K-$50K">$25K-$50K</option>
                    <option value="$50K-$100K">$50K-$100K</option>
                    <option value="$100K+">$100K+</option>
                    <option value="Not sure, full project">Not sure, but planning a full project</option>
                  </select>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="materialInterest">Material Interest</label>
                  <select id="materialInterest" name="materialInterest" defaultValue="" className={styles.selectInput}>
                    <option value="" disabled>Select Material</option>
                    <option value="Trex">Trex</option>
                    <option value="TimberTech/AZEK">TimberTech/AZEK</option>
                    <option value="Composite">Composite</option>
                    <option value="Pressure-Treated Wood">Pressure-Treated Wood</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="homeownerStatus">Homeowner Status</label>
                  <select id="homeownerStatus" name="homeownerStatus" defaultValue="" className={styles.selectInput}>
                    <option value="" disabled>Select One</option>
                    <option value="Homeowner decision maker">I am the homeowner / decision maker</option>
                    <option value="Homeowner researching with partner">Researching with my partner</option>
                    <option value="Property manager or authorized representative">Property manager</option>
                    <option value="Not the homeowner">Not the homeowner</option>
                  </select>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="hoa">HOA / Permit Status</label>
                <select id="hoa" name="hoa" defaultValue="" className={styles.selectInput}>
                  <option value="" disabled>Select Status</option>
                  <option value="HOA likely required">HOA likely required</option>
                  <option value="Permit likely required">Permit likely required</option>
                  <option value="HOA and permit likely required">HOA and permit likely required</option>
                  <option value="Already approved">Already approved</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your project (optional — we'll discuss details on the call)..."></textarea>
              </div>
              <input type="hidden" name="state" value="VA" />
              <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '0.75rem' }}>
                We call back within 1 business day.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className={styles.submitBtn}
                aria-label={status === "submitting" ? "Submitting form" : "Submit project inquiry"}
              >
                {status === "submitting" ? "Sending..." : "Request Written Estimate"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
