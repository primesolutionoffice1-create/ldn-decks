import React from 'react';
import { buildMetadata } from '@/lib/seo';
import styles from './Scholarship.module.css';

export const metadata = buildMetadata({
  path: '/scholarship',
  title: '$500 Trades Scholarship | LDN Decks Northern Virginia',
  description: 'LDN Decks is proud to offer a $500 scholarship to students pursuing a career in the skilled trades. Learn more about eligibility and how to apply.',
});

export default function ScholarshipPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <h1>LDN Decks Trades Scholarship</h1>
          <p className={styles.subtitle}>Supporting the next generation of Northern Virginia master carpenters and builders.</p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.textSide}>
              <h2>Investing in Our Future Craftsmen</h2>
              <p>
                At LDN Decks, we believe that the skilled trades are the backbone of our community. 
                As a family-owned business in Northern Virginia, we want to support students who are 
                dedicated to learning the craft of building, carpentry, and construction management.
              </p>
              
              <div className={styles.awardBox}>
                <h3>The Award</h3>
                <p className={styles.amount}>$500.00 USD</p>
                <p>Awarded annually to one deserving student to help cover tuition, tools, or supplies.</p>
              </div>

              <div className={styles.eligibility}>
                <h3>Eligibility Requirements</h3>
                <ul>
                  <li>Must be a resident of Virginia (Northern Virginia preferred).</li>
                  <li>Must be enrolled in a vocational school, trade school, or community college.</li>
                  <li>Must be pursuing a certificate or degree in a construction-related field (Carpentry, HVAC, Electrical, Construction Management, etc.).</li>
                  <li>Minimum 2.5 GPA.</li>
                </ul>
              </div>
            </div>

            <div className={styles.applySide}>
              <div className={styles.card}>
                <h3>How to Apply</h3>
                <p>Please submit the following to <strong>office@ldndecks.com</strong> with the subject "Scholarship Application - [Your Name]":</p>
                <ol>
                  <li>A 500-word essay explaining why you chose a career in the skilled trades and your goals for the future.</li>
                  <li>Proof of enrollment at an accredited Virginia institution.</li>
                  <li>Your most recent academic transcript.</li>
                </ol>
                <div className={styles.deadline}>
                  <strong>Deadline:</strong> September 1st, 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
