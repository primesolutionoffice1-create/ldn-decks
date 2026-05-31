'use client';

import React, { useEffect, useRef, useState } from 'react';

// Enhancify Monthly Payment Calculator widget — interactive calculator that
// lets visitors model a project amount → monthly payment, distinct from the
// Apply-Now CTA widget in EnhancifyWidget.jsx (which uses realwidget).
//
// Brand inputs from the Enhancify dashboard configuration:
//   page     9930216 (Loudoun Decks account)
//   color1   #68BA62 (primary)
//   color2   #1C418C (secondary)
//   white    #FFFFFF (co-branded color)
const WIDGET_SRC = 'https://www.enhancify.com/paymentcalculatorwidget/';

export default function EnhancifyPaymentCalculator() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!containerRef.current) return;

    let scriptEl = document.querySelector(`script[src="${WIDGET_SRC}"]`);
    let timeoutId;

    const handleLoad = () => {
      timeoutId = setTimeout(() => {
        const widgetMounted = containerRef.current?.querySelector('iframe, input, button');
        setStatus(widgetMounted ? 'ready' : 'error');
      }, 1500);
    };

    const handleError = () => setStatus('error');

    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.src = WIDGET_SRC;
      scriptEl.async = true;
      scriptEl.addEventListener('load', handleLoad);
      scriptEl.addEventListener('error', handleError);
      document.body.appendChild(scriptEl);
    } else {
      handleLoad();
    }

    const failsafe = setTimeout(() => {
      setStatus((s) => (s === 'loading' ? 'error' : s));
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(failsafe);
      if (scriptEl) {
        scriptEl.removeEventListener('load', handleLoad);
        scriptEl.removeEventListener('error', handleError);
      }
    };
  }, []);

  return (
    <div style={{ minHeight: 320 }}>
      <div
        ref={containerRef}
        id="paymentcalculatorwidget"
        data-defaultScheme="false"
        data-color1="#68BA62"
        data-color2="#1C418C"
        data-coBrandedColor="#FFFFFF"
        data-border="true"
        data-page="9930216"
        data-hideLink="0"
      />
      {status === 'loading' && (
        <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', marginTop: '1rem' }}>
          Loading monthly payment calculator…
        </p>
      )}
      {status === 'error' && (
        <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
          Calculator could not load. Call (571) 655-7207 for a quick monthly payment estimate.
        </p>
      )}
    </div>
  );
}
