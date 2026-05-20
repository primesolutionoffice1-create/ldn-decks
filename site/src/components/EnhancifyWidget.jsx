'use client';

import React, { useEffect, useRef, useState } from 'react';

const WIDGET_SRC = 'https://www.enhancify.com/realwidget/?page=9930216&color1=%23d14817&color2=%23000000&color3=%23FFFFFF';
const FALLBACK_APPLY_URL = 'https://www.enhancify.com/apply/?page=9930216';

export default function EnhancifyWidget() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!containerRef.current) return;

    let scriptEl = document.querySelector(`script[src="${WIDGET_SRC}"]`);
    let timeoutId;

    const handleLoad = () => {
      timeoutId = setTimeout(() => {
        const widgetMounted = containerRef.current?.querySelector('a, button, iframe');
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
    <div style={{ minHeight: 80 }}>
      <div
        ref={containerRef}
        className="realwidget"
        data-textbutton="Apply now"
        data-widthbtn="400"
        style={{ display: 'flex', justifyContent: 'center' }}
      />
      {status === 'loading' && (
        <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', marginTop: '1rem' }}>
          Loading financing application…
        </p>
      )}
      {status === 'error' && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            Click below to start your financing application:
          </p>
          <a
            href={FALLBACK_APPLY_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'var(--color-primary)',
              color: 'var(--white)',
              padding: '0.85rem 2rem',
              borderRadius: '8px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Apply Now →
          </a>
        </div>
      )}
    </div>
  );
}
