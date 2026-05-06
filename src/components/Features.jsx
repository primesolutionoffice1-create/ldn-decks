"use client";
import React, { useEffect, useRef } from 'react';
import styles from './Features.module.css';

const RibbonIcon = () => (
  <svg width="40" height="40" viewBox="0 0 384 512" fill="currentColor" aria-label="Experience award ribbon">
    <path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path>
  </svg>
);

const LeafIcon = () => (
  <svg width="40" height="40" viewBox="0 0 576 512" fill="currentColor" aria-label="Premium materials leaf icon">
    <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path>
  </svg>
);

const LicensedIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-label="Licensed and insured certificate icon">
    <path d="M19 2H5C3.35 2 2 3.35 2 5v14c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3zm1 17c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v14z"/>
    <path d="M15.5 14c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm0 3.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7 6h10v2H7zM7 10h10v2H7zM7 14h4v2H7z"/>
    <path d="M17 19.5c-.13 0-.26-.05-.35-.15l-1.5-1.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l1.15 1.15 2.65-2.65c.2-.2.51-.2.71 0s.2.51 0 .71l-3 3c-.1.1-.23.15-.37.15z"/>
  </svg>
);

const HandshakeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 640 512" fill="currentColor" aria-label="Free consultation handshake icon">
    <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
  </svg>
);

const featuresData = [
  {
    icon: <RibbonIcon />,
    title: 'TREX PLATINUM',
    subtitle: 'Partner Status'
  },
  {
    icon: <LeafIcon />,
    title: 'NO MAINTENANCE',
    subtitle: 'Composite Materials'
  },
  {
    icon: <LicensedIcon />,
    title: 'FULLY LICENSED',
    subtitle: 'VA Class A Contractor'
  },
  {
    icon: <HandshakeIcon />,
    title: 'FREE QUOTE',
    subtitle: 'Within 24 Hours'
  }
];

export default function Features() {

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply a staggered delay to children based on their index
            const children = Array.from(entry.target.querySelectorAll(`.${styles.featureBox}`));
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add(styles.visible);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
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
    <section className={styles.featuresSection} ref={sectionRef}>
      <div className={styles.container}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureBox}>
            <div className={styles.iconCircle}>
              {feature.icon}
            </div>
            <div className={styles.textContent}>
              <h4 className={styles.title}>{feature.title}</h4>
              <p className={styles.subtitle}>{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
