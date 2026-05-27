'use client';

import { useMemo, useState } from 'react';

const SPECIES_OPTIONS = {
  southernPine: { label: 'Southern Pine / strong framing stock', factor: 1 },
  douglasFir: { label: 'Douglas fir-larch / hem-fir planning range', factor: 0.96 },
  spf: { label: 'SPF / mixed framing stock', factor: 0.9 },
  cedar: { label: 'Cedar / lower-capacity planning range', factor: 0.84 },
};

const LOAD_OPTIONS = {
  standard: { label: 'Standard residential walking deck', factor: 1 },
  composite: { label: 'Composite deck with railing and lighting', factor: 0.96 },
  roof: { label: 'Covered deck, screened porch, pergola, or kitchen', factor: 0.76 },
  spa: { label: 'Hot tub, swim spa, or concentrated heavy load', factor: 0.55 },
};

const BEAM_OPTIONS = {
  '2-2x8': {
    label: 'Double 2x8 beam',
    spans: { 6: 8.0, 8: 7.0, 10: 6.3, 12: 5.8, 14: 5.3, 16: 4.9 },
  },
  '2-2x10': {
    label: 'Double 2x10 beam',
    spans: { 6: 10.0, 8: 8.8, 10: 7.8, 12: 7.0, 14: 6.4, 16: 5.9 },
  },
  '2-2x12': {
    label: 'Double 2x12 beam',
    spans: { 6: 11.7, 8: 10.2, 10: 9.1, 12: 8.2, 14: 7.5, 16: 6.9 },
  },
  '3-2x8': {
    label: 'Triple 2x8 beam',
    spans: { 6: 10.0, 8: 8.7, 10: 7.8, 12: 7.1, 14: 6.5, 16: 6.0 },
  },
  '3-2x10': {
    label: 'Triple 2x10 beam',
    spans: { 6: 12.5, 8: 10.9, 10: 9.8, 12: 8.9, 14: 8.2, 16: 7.5 },
  },
  '3-2x12': {
    label: 'Triple 2x12 beam',
    spans: { 6: 14.5, 8: 12.6, 10: 11.3, 12: 10.3, 14: 9.5, 16: 8.8 },
  },
};

const BEAM_ORDER = Object.keys(BEAM_OPTIONS);

function readNumber(value, fallback) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function round(value, decimals = 1) {
  return Number.parseFloat(value.toFixed(decimals));
}

function formatFeet(value) {
  return `${round(value, 1)} ft`;
}

function nearestSpanKey(tributaryWidth) {
  const keys = [6, 8, 10, 12, 14, 16];
  return keys.reduce((best, key) => (
    Math.abs(key - tributaryWidth) < Math.abs(best - tributaryWidth) ? key : best
  ), 6);
}

function interpolateSpan(spans, tributaryWidth) {
  const keys = Object.keys(spans).map(Number).sort((a, b) => a - b);

  if (tributaryWidth <= keys[0]) return spans[keys[0]];
  if (tributaryWidth >= keys[keys.length - 1]) return spans[keys[keys.length - 1]];

  for (let index = 0; index < keys.length - 1; index += 1) {
    const low = keys[index];
    const high = keys[index + 1];

    if (tributaryWidth >= low && tributaryWidth <= high) {
      const ratio = (tributaryWidth - low) / (high - low);
      return spans[low] + (spans[high] - spans[low]) * ratio;
    }
  }

  return spans[nearestSpanKey(tributaryWidth)];
}

function calculateMaxSpan(beam, tributaryWidth, species, load) {
  const base = interpolateSpan(BEAM_OPTIONS[beam].spans, tributaryWidth);
  return Math.max(2, base * SPECIES_OPTIONS[species].factor * LOAD_OPTIONS[load].factor);
}

function findNextBeam(tributaryWidth, species, load, desiredPostSpacing) {
  return BEAM_ORDER.find((beam) => (
    calculateMaxSpan(beam, tributaryWidth, species, load) >= desiredPostSpacing
  ));
}

export default function DeckBeamSpanCalculator({ styles }) {
  const [deckLength, setDeckLength] = useState('20');
  const [joistSpan, setJoistSpan] = useState('12');
  const [desiredPostSpacing, setDesiredPostSpacing] = useState('6');
  const [beam, setBeam] = useState('2-2x10');
  const [species, setSpecies] = useState('southernPine');
  const [load, setLoad] = useState('standard');
  const [layout, setLayout] = useState('ledger');
  const [cantilever, setCantilever] = useState('1');
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const length = Math.max(6, readNumber(deckLength, 20));
    const span = Math.max(4, readNumber(joistSpan, 12));
    const postSpacing = Math.max(2, readNumber(desiredPostSpacing, 6));
    const overhang = Math.max(0, readNumber(cantilever, 1));
    const tributaryWidth = layout === 'ledger' ? span / 2 : span;
    const maxBeamSpan = calculateMaxSpan(beam, tributaryWidth, species, load);
    const adjustedMaxSpan = Math.max(2, maxBeamSpan - Math.max(0, overhang - maxBeamSpan / 4) * 0.5);
    const safeCantilever = adjustedMaxSpan / 4;
    const status = postSpacing <= adjustedMaxSpan ? 'Within planning range' : 'Needs larger beam or closer posts';
    const nextBeam = findNextBeam(tributaryWidth, species, load, postSpacing);
    const planningPosts = Math.ceil(length / Math.min(postSpacing, adjustedMaxSpan)) + 1;
    const warnings = [];
    const notes = [];

    if (layout === 'freestanding') {
      warnings.push('Freestanding decks often load beams on both sides. This can reduce allowable beam span and deserves closer framing review.');
    } else {
      warnings.push('Ledger-supported decks also depend on correct ledger fastening, flashing, lateral connections, joist hangers, and house framing.');
    }

    if (load === 'roof') {
      warnings.push('Covered decks, screened porches, pergolas, and outdoor kitchens add loads that should be reviewed against approved plans.');
    }

    if (load === 'spa') {
      warnings.push('Hot tubs and swim spas are concentrated heavy loads. Treat this as an engineering-review condition, not a prescriptive beam design.');
    }

    if (overhang > safeCantilever) {
      warnings.push(`The entered beam cantilever is above the common span/4 planning check. Keep cantilevers near ${formatFeet(safeCantilever)} or have the layout reviewed.`);
    }

    if (postSpacing > adjustedMaxSpan) {
      warnings.push('The selected beam and post spacing are outside this calculator planning range. Reduce post spacing or evaluate a larger multi-ply beam.');
    }

    if (span > 16) {
      warnings.push('Joist spans above 16 feet can quickly move outside common prescriptive deck-table assumptions.');
    }

    notes.push('Beam span means the distance between supporting posts or bearing points, not the total deck length.');
    notes.push('The effective joist span or tributary width is a major input in Virginia Residential Code deck beam tables.');
    notes.push('Each ply of a multi-ply beam needs proper bearing and fastening at posts.');
    notes.push('Final beam size depends on species, grade, load, snow exposure, joist cantilever, post connection and local review.');

    const summary = [
      'Virginia Deck Beam Span Calculator Summary',
      `Deck length along beam: ${formatFeet(length)}`,
      `Joist span / deck projection: ${formatFeet(span)}`,
      `Estimated tributary width: ${formatFeet(tributaryWidth)}`,
      `Selected beam: ${BEAM_OPTIONS[beam].label}`,
      `Wood species range: ${SPECIES_OPTIONS[species].label}`,
      `Load assumption: ${LOAD_OPTIONS[load].label}`,
      `Desired post spacing: ${formatFeet(postSpacing)}`,
      `Planning max beam span: about ${formatFeet(adjustedMaxSpan)}`,
      `Beam cantilever entered: ${formatFeet(overhang)}`,
      `Common cantilever planning limit: about ${formatFeet(safeCantilever)}`,
      `Planning status: ${status}`,
      `Rough post count along this beam: ${planningPosts}`,
      nextBeam ? `Smallest listed beam that fits the desired spacing in this tool: ${BEAM_OPTIONS[nextBeam].label}` : 'No listed beam fits the desired spacing in this tool. Professional review needed.',
      'Note: This is educational planning guidance only. Final beam span, post spacing, connections and load design must be verified by the local authority or a qualified professional.',
    ].join('\n');

    return {
      adjustedMaxSpan,
      tributaryWidth,
      safeCantilever,
      status,
      nextBeam,
      planningPosts,
      warnings,
      notes,
      summary,
      isWithinRange: postSpacing <= adjustedMaxSpan,
    };
  }, [deckLength, joistSpan, desiredPostSpacing, beam, species, load, layout, cantilever]);

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(result.summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className={styles.calculatorShell} aria-labelledby="calculator-heading">
      <div className={styles.inputPanel}>
        <p className={styles.kicker}>Interactive framing tool</p>
        <h2 id="calculator-heading">Estimate Deck Beam Span and Post Spacing</h2>
        <p>
          Enter a basic deck framing layout to estimate whether a beam size and post spacing are in
          a reasonable planning range before permit drawings or a professional review.
        </p>

        <div className={styles.formGrid}>
          <label>
            <span>Deck length along beam</span>
            <small>Total length the beam supports, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="6"
              step="1"
              value={deckLength}
              onChange={(event) => setDeckLength(event.target.value)}
            />
          </label>

          <label>
            <span>Joist span / deck projection</span>
            <small>Distance joists span from ledger or beam, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="4"
              step="0.5"
              value={joistSpan}
              onChange={(event) => setJoistSpan(event.target.value)}
            />
          </label>

          <label>
            <span>Desired post spacing</span>
            <small>Distance between posts under the beam, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="2"
              step="0.5"
              value={desiredPostSpacing}
              onChange={(event) => setDesiredPostSpacing(event.target.value)}
            />
          </label>

          <label>
            <span>Beam cantilever</span>
            <small>Beam overhang beyond the outside post, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="0"
              step="0.25"
              value={cantilever}
              onChange={(event) => setCantilever(event.target.value)}
            />
          </label>

          <label>
            <span>Beam size</span>
            <small>Common multi-ply deck beam sizes</small>
            <select value={beam} onChange={(event) => setBeam(event.target.value)}>
              {Object.entries(BEAM_OPTIONS).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Wood species range</span>
            <small>Use the closest framing lumber range</small>
            <select value={species} onChange={(event) => setSpecies(event.target.value)}>
              {Object.entries(SPECIES_OPTIONS).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Load assumption</span>
            <small>Heavy features require structural review</small>
            <select value={load} onChange={(event) => setLoad(event.target.value)}>
              {Object.entries(LOAD_OPTIONS).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <fieldset>
            <legend>Deck layout</legend>
            <div className={styles.segmented}>
              <button
                type="button"
                aria-pressed={layout === 'ledger'}
                className={layout === 'ledger' ? styles.activeSegment : ''}
                onClick={() => setLayout('ledger')}
              >
                Ledger
              </button>
              <button
                type="button"
                aria-pressed={layout === 'freestanding'}
                className={layout === 'freestanding' ? styles.activeSegment : ''}
                onClick={() => setLayout('freestanding')}
              >
                Freestanding
              </button>
            </div>
          </fieldset>
        </div>
      </div>

      <div className={styles.resultsPanel} aria-live="polite">
        <p className={styles.kicker}>Planning output</p>
        <div className={styles.resultGrid}>
          <div>
            <span>Max beam span</span>
            <strong>{formatFeet(result.adjustedMaxSpan)}</strong>
          </div>
          <div>
            <span>Tributary width</span>
            <strong>{formatFeet(result.tributaryWidth)}</strong>
          </div>
          <div>
            <span>Planning status</span>
            <strong>{result.isWithinRange ? 'OK' : 'Review'}</strong>
          </div>
          <div>
            <span>Rough post count</span>
            <strong>{result.planningPosts}</strong>
          </div>
        </div>

        <div className={result.isWithinRange ? styles.goodBox : styles.warningBox}>
          <h3>{result.status}</h3>
          <p>
            {result.nextBeam
              ? `${BEAM_OPTIONS[result.nextBeam].label} is the smallest listed beam that fits the desired spacing in this planning tool.`
              : 'No listed beam fits this spacing in the planning tool. A structural review is the safer next step.'}
          </p>
        </div>

        <div className={styles.noteBox}>
          <p>
            Common beam cantilever checks limit overhang to about one-quarter of the adjacent beam
            span. For this layout, keep the planning cantilever near{' '}
            <strong>{formatFeet(result.safeCantilever)}</strong> or verify it professionally.
          </p>
        </div>

        <div className={styles.warningBox}>
          <h3>Framing warnings</h3>
          <ul>
            {result.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </div>

        <div className={styles.goodBox}>
          <h3>Plan review notes</h3>
          <ul>
            {result.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <textarea
          className={styles.summary}
          readOnly
          value={result.summary}
          aria-label="Copyable deck beam span calculation summary"
        />

        <div className={styles.actions}>
          <button type="button" onClick={copySummary}>
            {copied ? 'Copied' : 'Copy Summary'}
          </button>
          <button type="button" onClick={() => window.print()}>
            Print
          </button>
        </div>
      </div>
    </section>
  );
}
