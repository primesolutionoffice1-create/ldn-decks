"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './ShowcaseStats.module.css';

const useCountUp = (end, duration, inView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, inView]);

  return count;
};

const StatItem = ({ endValue, suffix, label }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  
  // Custom exact duration of 3 to 4 seconds realistically requested
  const count = useCountUp(endValue, 3500, inView);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className={styles.statItem} ref={ref}>
       <div className={styles.numberRow}>
         <span>{count}</span>
         <span>{suffix}</span>
       </div>
       <div className={styles.labelRow}>
         {label}
       </div>
    </div>
  );
};

export default function ShowcaseStats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
         <div className={styles.statsGrid}>
           <StatItem endValue={500} suffix="+" label="DECKS INSTALLED" />
           <StatItem endValue={20} suffix="+" label="SERVICES" />
           <StatItem endValue={12} suffix="+" label="YEARS" />
           <StatItem endValue={100} suffix="%" label="PERMIT APPROVAL" />
         </div>
      </div>
    </section>
  );
}
