"use client";
import React, { useState } from 'react';
import { useContact } from '@/context/ContactContext';
import styles from './ContactForm.module.css';
import { trackPhoneClick } from '@/lib/tracking';
import { useLeadSubmit } from '@/hooks/useLeadSubmit';

export default function ContactForm({ hideInfoCol = false, noPadding = false }) {
  const [status, setStatus] = useState(null);
  const { closeContact } = useContact();
  const submit = useLeadSubmit({ formType: 'quote' });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
                <a href="tel:+15716557207" aria-label="Call Loudoun Decks" onClick={trackPhoneClick}>(571) 655-7207</a>
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
            <form onSubmit={handleSubmit} className={styles.formBlock} aria-label="Project Inquiry Form">
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
                  <input id="email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number <span className={styles.req}>*</span></label>
                  <input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" autoComplete="tel" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" placeholder="123 Main St" autoComplete="street-address" />
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="timeline">Project Timeline <span className={styles.req}>*</span></label>
                  <select id="timeline" name="timeline" required defaultValue="" className={styles.selectInput}>
                    <option value="" disabled>Select Start Date</option>
                    <option value="Immediately">Immediately</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Just Exploring">Just Exploring</option>
                  </select>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="city">City</label>
                  <input id="city" name="city" type="text" placeholder="e.g. Ashburn" autoComplete="address-level2" />
                </div>
                <div className={styles.inputGroup} style={{flex: 0.5}}>
                  <label htmlFor="state">State</label>
                  <input id="state" name="state" type="text" defaultValue="VA" autoComplete="address-level1" />
                </div>
                <div className={styles.inputGroup} style={{flex: 0.5}}>
                  <label htmlFor="zip">ZIP</label>
                  <input id="zip" name="zip" type="text" placeholder="Zip Code" autoComplete="postal-code" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message <span className={styles.req}>*</span></label>
                <textarea id="message" name="message" required rows="6" placeholder="Tell us about your deck or outdoor project..."></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className={styles.submitBtn}
                aria-label={status === "submitting" ? "Submitting form" : "Submit project inquiry"}
              >
                {status === "submitting" ? "Sending..." : "Submit Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
