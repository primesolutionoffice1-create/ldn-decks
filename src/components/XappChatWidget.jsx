'use client';

import { useEffect } from 'react';
import { XAPP_SCRIPT_ID, XAPP_WIDGET_SRC } from '@/lib/xappWidget';

const INTERACTION_EVENTS = ['pointerdown', 'keydown', 'touchstart'];

export function mountXappChatWidget() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(XAPP_SCRIPT_ID)) return;
  const script = document.createElement('script');
  script.id = XAPP_SCRIPT_ID;
  script.src = XAPP_WIDGET_SRC;
  script.async = true;
  document.body.appendChild(script);
}

// The loader stays off the initial document. The first pointer, key, or touch
// schedules the script on requestIdleCallback so the bundle does not run on
// the interaction task or during first paint.
export default function XappChatWidget() {
  useEffect(() => {
    let idleId = 0;
    let timeoutId = 0;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      INTERACTION_EVENTS.forEach((eventName) => window.removeEventListener(eventName, start));
      const run = () => mountXappChatWidget();
      if (typeof window.requestIdleCallback === 'function') {
        idleId = window.requestIdleCallback(run, { timeout: 2000 });
      } else {
        timeoutId = window.setTimeout(run, 1);
      }
    };

    INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, start, { passive: true });
    });

    return () => {
      INTERACTION_EVENTS.forEach((eventName) => window.removeEventListener(eventName, start));
      if (idleId && typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
