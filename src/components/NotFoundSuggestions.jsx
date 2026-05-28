'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

// Curated list of high-value routes the 404 suggestion engine can route to.
// We don't bundle the entire sitemap (over 200 entries) into this client
// component — instead we list the routes that a misspelled URL is most
// likely to be intending. Add new high-value pages here when launched.
const KNOWN_ROUTES = [
  // Hubs
  ['/deck-builder-northern-virginia', 'Northern Virginia Deck Builder'],
  ['/deck-builders-loudoun', 'Loudoun County Deck Builder'],
  ['/services', 'Our Services'],
  ['/showcase', 'Project Showcase'],
  ['/blog', 'Blog'],
  ['/education', 'Deck Education Library'],
  ['/contact', 'Get a Free Estimate'],
  ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost — Northern Virginia'],
  ['/northern-virginia-deck-building-guide', 'Northern Virginia Deck Building Guide'],

  // City pages
  ['/deck-builder-ashburn-va', 'Deck Builder — Ashburn, VA'],
  ['/deck-builder-leesburg-va', 'Deck Builder — Leesburg, VA'],
  ['/deck-builder-sterling-va', 'Deck Builder — Sterling, VA'],
  ['/deck-builder-reston-va', 'Deck Builder — Reston, VA'],
  ['/deck-builder-brambleton-va', 'Deck Builder — Brambleton, VA'],
  ['/deck-builder-vienna-va', 'Deck Builder — Vienna, VA'],
  ['/deck-builder-fairfax-va', 'Deck Builder — Fairfax, VA'],
  ['/deck-builder-centreville-va', 'Deck Builder — Centreville, VA'],
  ['/deck-builder-arlington-va', 'Deck Builder — Arlington, VA'],
  ['/deck-builder-tysons-va', 'Deck Builder — Tysons, VA'],
  ['/deck-builder-mclean-va', 'Deck Builder — McLean, VA'],
  ['/deck-builder-falls-church-va', 'Deck Builder — Falls Church, VA'],

  // Service pages
  ['/services/new-decks', 'New Deck Installation'],
  ['/services/deck-resurfacing', 'Deck Resurfacing'],
  ['/services/deck-repair-and-structural-maintenance', 'Deck Repair & Structural Maintenance'],
  ['/services/porches', 'Porches'],
  ['/services/porches/screened-porch', 'Screened-In Porches'],
  ['/services/patios', 'Patios'],
  ['/services/gazebo-pergola', 'Gazebos & Pergolas'],
  ['/services/deck-maintenance', 'Deck Maintenance'],

  // Money pages
  ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
  ['/deck-payment-estimator', 'Deck Payment Estimator'],
  ['/deck-financing', 'Deck Financing Options'],
  ['/deck-roi-calculator-northern-virginia', 'Deck ROI Calculator'],

  // HOA + permit
  ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
  ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
  ['/loudoun-county-hoa-deck-rules', 'Loudoun County HOA Deck Rules'],
];

function levenshtein(a, b) {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  const row = new Array(n + 1).fill(0).map((_, i) => i);
  for (let i = 1; i <= m; i++) {
    let prev = i;
    for (let j = 1; j <= n; j++) {
      const val = a[i - 1] === b[j - 1] ? row[j - 1] : 1 + Math.min(row[j - 1], row[j], prev);
      row[j - 1] = prev;
      prev = val;
    }
    row[n] = prev;
  }
  return row[n];
}

function score(needle, candidate) {
  if (!needle) return Infinity;
  if (candidate === needle) return -1;
  // Strong boost for substring containment in either direction
  if (candidate.includes(needle) || needle.includes(candidate)) return 0;
  // Token overlap (segments separated by hyphens or slashes)
  const needleTokens = new Set(needle.split(/[-/]/).filter(Boolean));
  const candTokens = candidate.split(/[-/]/).filter(Boolean);
  const shared = candTokens.filter(t => needleTokens.has(t)).length;
  const lev = levenshtein(needle, candidate);
  // Score = lev minus 5 per shared token (so token overlap dominates)
  return lev - shared * 5;
}

function fmtPath(p) {
  return p.replace(/^\//, '').replace(/-/g, ' ');
}

export default function NotFoundSuggestions() {
  const [requested, setRequested] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setRequested(window.location.pathname || null);
  }, []);

  const suggestions = useMemo(() => {
    if (!requested || requested === '/') return [];
    const needle = fmtPath(requested);
    return KNOWN_ROUTES
      .map(([path, label]) => ({ path, label, s: score(needle, fmtPath(path)) }))
      .sort((a, b) => a.s - b.s)
      .slice(0, 5);
  }, [requested]);

  if (!requested || suggestions.length === 0) return null;

  return (
    <div style={{ marginTop: '2rem', textAlign: 'left', maxWidth: 460 }}>
      <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#ccc', fontSize: '0.9rem' }}>
        Did you mean one of these?
      </p>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {suggestions.map(({ path, label }) => (
          <li key={path}>
            <Link
              href={path}
              style={{
                color: 'var(--color-primary, #d14817)',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
