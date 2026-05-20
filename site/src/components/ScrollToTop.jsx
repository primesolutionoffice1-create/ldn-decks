"use client";
import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';

const CaretUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 14L12 9L7 14H17Z" />
  </svg>
);

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down past ~800px (roughly 2 sections down)
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className={styles.scrollBtn} 
          aria-label="Scroll to top"
        >
          <CaretUpIcon />
        </button>
      )}
    </>
  );
}
