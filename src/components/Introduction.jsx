"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Introduction.module.css';
import CallLink from '@/components/CallLink';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className={styles.introSection} ref={sectionRef}>
      <div className={styles.container}>
        {/* Images Column */}
        <div className={styles.imagesCol}>
          <div className={styles.subImgWrapper}>
            <Image
              src="/images/img53.jpeg"
              alt="Custom Trex Transcend composite deck installation in Northern Virginia"
              fill
              className={styles.imgProps}
              sizes="(max-width: 768px) 50vw, 300px"
            />
          </div>
          <div className={styles.frameOutline}></div>
          <div className={styles.mainImgWrapper}>
            <Image
              src="/images/homepage-intro-timbertech-deck.png"
              alt="TimberTech composite deck with screened porch, black railings and step lighting built by Loudoun Decks in Northern Virginia"
              fill
              className={styles.imgProps}
              sizes="(max-width: 768px) 80vw, 400px"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className={styles.contentCol}>
          <div className={styles.subheadingWrapper}>
            <span className={styles.subheading}>Our Introduction</span>
            <span className={styles.line}></span>
          </div>
          <h2 className={styles.title}>Northern Virginia's Trusted<br /> Deck Builder & Contractor</h2>
          <p className={styles.description}>
            Loudoun Decks plans and builds custom outdoor living projects across Fairfax, Loudoun, and Prince William counties &mdash; from luxury decks in McLean and Vienna to townhome transformations in Sterling and Ashburn. As a local <strong>deck contractor</strong>, we help homeowners account for permits, HOA requirements, materials, access, and inspection timing before construction starts.
          </p>
          <ul className={styles.checkList}>
            <li>
              <CheckIcon />
              <span>Trex and TimberTech product experience &mdash; verify current manufacturer profile details directly with each brand</span>
            </li>
            <li>
              <CheckIcon />
              <span>Permit and HOA planning support &mdash; we help define paperwork, timing, and coordination before construction starts</span>
            </li>
          </ul>
          <div className={styles.progressContainer}>
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressTitle}>Decking</span>
              </div>
              <div className={styles.progressBarBg}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: isVisible ? '80%' : '0%' }}
                ></div>
              </div>
            </div>
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressTitle}>Fencing</span>
              </div>
              <div className={styles.progressBarBg}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: isVisible ? '50%' : '0%' }}
                ></div>
              </div>
            </div>
          </div>
          <CallLink className={styles.ctaButton}>
            Call For A Free Quote
          </CallLink>
        </div>
      </div>
    </section>
  );
}
