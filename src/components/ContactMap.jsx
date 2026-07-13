'use client';

import React from 'react';
import styles from './ContactMap.module.css';

export default function ContactMap() {
  const [showMap, setShowMap] = React.useState(false);

  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <h2>Our Primary Location</h2>
        </div>
        <div className={styles.mapWrapper}>
          {showMap ? (
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps?q=13704+Winding+Oak+Cir,+Centreville,+VA+20121&output=embed"
              width="100%"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Loudoun Decks Office Location Map"
            />
          ) : (
            <div className={styles.mapPlaceholder}>
              <p className={styles.mapEyebrow}>Centreville, Virginia</p>
              <h3>13704 Winding Oak Cir</h3>
              <p>Use the map for directions to our office, or open the Google Maps profile in a new tab.</p>
              <div className={styles.mapActions}>
                <button type="button" onClick={() => setShowMap(true)}>
                  Show Map
                </button>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=13704+Winding+Oak+Cir+Centreville+VA+20121"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
