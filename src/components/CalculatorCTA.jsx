"use client";
import React from 'react';
import Link from 'next/link';
import styles from './CalculatorCTA.module.css';

export default function CalculatorCTA() {
  const [sqft, setSqft] = React.useState(250);
  const [material, setMaterial] = React.useState('composite');

  const calculatePrice = () => {
    let basePrice = 0;
    if (material === 'wood') basePrice = 30;
    else if (material === 'composite') basePrice = 55;
    else if (material === 'premium') basePrice = 85;

    const min = sqft * basePrice;
    const max = sqft * (basePrice * 1.3); // 30% range for features

    return {
      min: min.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
      max: max.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
    };
  };

  const prices = calculatePrice();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textSide}>
          <span className={styles.badge}>Budget & Estimate Tool</span>
          <h2 className={styles.title}>Plan your deck budget before you request an estimate</h2>
          <p className={styles.description}>
            Use the deck cost calculator to get a practical budget range based on square footage,
            materials, and features before you request a professional estimate.
          </p>
          <Link href="/deck-cost-calculator" className={styles.ctaButton}>
            Use Deck Cost Calculator
          </Link>
        </div>
        <div className={styles.visualSide}>
          <div className={styles.mockupContainer}>
            <div className={styles.miniCalc}>
              <div className={styles.calcHeader}>
                <h3>Instant Estimator</h3>
              </div>
              <div className={styles.calcBody}>
                <div className={styles.inputGroup}>
                  <label>Square Footage: <strong>{sqft} sq ft</strong></label>
                  <input 
                    type="range" 
                    min="100" 
                    max="1000" 
                    step="50" 
                    value={sqft} 
                    onChange={(e) => setSqft(parseInt(e.target.value))}
                    className={styles.slider}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Material Type:</label>
                  <div className={styles.materialToggle}>
                    <button 
                      className={material === 'wood' ? styles.active : ''} 
                      onClick={() => setMaterial('wood')}
                    >Wood</button>
                    <button 
                      className={material === 'composite' ? styles.active : ''} 
                      onClick={() => setMaterial('composite')}
                    >Composite</button>
                    <button 
                      className={material === 'premium' ? styles.active : ''} 
                      onClick={() => setMaterial('premium')}
                    >Premium</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.floatingPrice}>
               <span className={styles.priceLabel}>Estimated Price Range</span>
               <span className={styles.priceValue}>{prices.min} - {prices.max}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
