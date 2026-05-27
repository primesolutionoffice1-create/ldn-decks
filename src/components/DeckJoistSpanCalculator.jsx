'use client';

import { useMemo, useState } from 'react';

const JOIST_OPTIONS = {
  '2x6': {
    label: '2x6 joists',
    spans: { 12: 9.9, 16: 9.0, 24: 7.7 },
  },
  '2x8': {
    label: '2x8 joists',
    spans: { 12: 13.1, 16: 11.9, 24: 10.1 },
  },
  '2x10': {
    label: '2x10 joists',
    spans: { 12: 16.2, 16: 14.0, 24: 12.0 },
  },
  '2x12': {
    label: '2x12 joists',
    spans: { 12: 18.8, 16: 16.6, 24: 14.2 },
  },
};

const SPECIES_OPTIONS = {
  southernPine: { label: 'Southern Pine / strong framing stock', factor: 1 },
  douglasFir: { label: 'Douglas fir-larch / hem-fir planning range', factor: 0.96 },
  spf: { label: 'SPF / mixed framing stock', factor: 0.9 },
  cedar: { label: 'Cedar / lower-capacity planning range', factor: 0.82 },
};

const DECKING_OPTIONS = {
  wood: { label: 'Wood decking', factor: 1, recommendedSpacing: 16 },
  composite: { label: 'Composite decking', factor: 0.96, recommendedSpacing: 16 },
  diagonalComposite: { label: 'Diagonal composite decking', factor: 0.9, recommendedSpacing: 12 },
  heavy: { label: 'Heavy surface, tile, roof, spa, or kitchen load', factor: 0.72, recommendedSpacing: 12 },
};

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

function calculateSpan(joist, spacing, species, decking) {
  const base = JOIST_OPTIONS[joist].spans[spacing] || JOIST_OPTIONS[joist].spans[16];
  return Math.max(4, base * SPECIES_OPTIONS[species].factor * DECKING_OPTIONS[decking].factor);
}

function findSmallestJoist(desiredSpan, spacing, species, decking) {
  return Object.keys(JOIST_OPTIONS).find((joist) => (
    calculateSpan(joist, spacing, species, decking) >= desiredSpan
  ));
}

export default function DeckJoistSpanCalculator({ styles }) {
  const [desiredSpan, setDesiredSpan] = useState('12');
  const [joist, setJoist] = useState('2x10');
  const [spacing, setSpacing] = useState('16');
  const [species, setSpecies] = useState('southernPine');
  const [decking, setDecking] = useState('composite');
  const [cantilever, setCantilever] = useState('1');
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const span = Math.max(4, readNumber(desiredSpan, 12));
    const spacingNumber = Number.parseInt(spacing, 10);
    const overhang = Math.max(0, readNumber(cantilever, 1));
    const maxSpan = calculateSpan(joist, spacingNumber, species, decking);
    const cantileverLimit = Math.min(maxSpan / 4, 3);
    const adjustedSpan = Math.max(4, maxSpan - Math.max(0, overhang - cantileverLimit) * 0.5);
    const smallestJoist = findSmallestJoist(span, spacingNumber, species, decking);
    const isWithinRange = span <= adjustedSpan;
    const warnings = [];
    const notes = [];

    if (spacingNumber === 24) {
      warnings.push('Twenty-four inch joist spacing is rarely the best planning choice for premium composite decking or diagonal board layouts.');
    }

    if (DECKING_OPTIONS[decking].recommendedSpacing < spacingNumber) {
      warnings.push(`${DECKING_OPTIONS[decking].label} often needs joists at ${DECKING_OPTIONS[decking].recommendedSpacing} inches on-center or closer.`);
    }

    if (decking === 'heavy') {
      warnings.push('Roofed decks, outdoor kitchens, hot tubs and tile-like surfaces need structural review beyond ordinary joist span planning.');
    }

    if (overhang > cantileverLimit) {
      warnings.push(`The entered joist cantilever is above the conservative planning limit of about ${formatFeet(cantileverLimit)}.`);
    }

    if (!isWithinRange) {
      warnings.push('The selected joist size and spacing are outside this planning range. Shorten the span, tighten spacing or evaluate a deeper joist.');
    }

    notes.push('Joist span means the clear distance between supports such as ledger, beam or flush beam bearing points.');
    notes.push('Composite decking performance depends heavily on joist spacing, blocking and manufacturer installation instructions.');
    notes.push('Virginia deck projects should be checked against adopted residential code, approved plans and local inspection requirements.');
    notes.push('Joists do not work alone. Ledger attachment, beam span, footings, hangers, blocking and lateral bracing all affect safety.');

    const summary = [
      'Virginia Deck Joist Span Calculator Summary',
      `Desired joist span: ${formatFeet(span)}`,
      `Selected joist: ${JOIST_OPTIONS[joist].label}`,
      `Joist spacing: ${spacingNumber} in. on-center`,
      `Wood species range: ${SPECIES_OPTIONS[species].label}`,
      `Decking/load assumption: ${DECKING_OPTIONS[decking].label}`,
      `Planning max joist span: about ${formatFeet(adjustedSpan)}`,
      `Joist cantilever entered: ${formatFeet(overhang)}`,
      `Conservative cantilever planning limit: about ${formatFeet(cantileverLimit)}`,
      `Planning status: ${isWithinRange ? 'Within planning range' : 'Needs review'}`,
      smallestJoist ? `Smallest listed joist that fits this span: ${JOIST_OPTIONS[smallestJoist].label}` : 'No listed joist fits this span in the planning tool.',
      'Note: This is educational planning guidance only. Final joist sizing, spacing, blocking and connections must be verified by local code review or a qualified professional.',
    ].join('\n');

    return {
      adjustedSpan,
      cantileverLimit,
      isWithinRange,
      smallestJoist,
      warnings,
      notes,
      summary,
    };
  }, [desiredSpan, joist, spacing, species, decking, cantilever]);

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
        <h2 id="calculator-heading">Estimate Deck Joist Span and Spacing</h2>
        <p>
          Enter a basic deck floor framing layout to estimate joist span, spacing warnings,
          composite decking support needs and cantilever review conditions.
        </p>

        <div className={styles.formGrid}>
          <label>
            <span>Desired joist span</span>
            <small>Clear distance between ledger and beam or beam-to-beam supports, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="4"
              step="0.5"
              value={desiredSpan}
              onChange={(event) => setDesiredSpan(event.target.value)}
            />
          </label>

          <label>
            <span>Joist cantilever</span>
            <small>Overhang beyond the outside beam, in feet</small>
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
            <span>Joist size</span>
            <small>Common deck joist depths for early planning</small>
            <select value={joist} onChange={(event) => setJoist(event.target.value)}>
              {Object.entries(JOIST_OPTIONS).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Joist spacing</span>
            <small>On-center spacing between joists</small>
            <select value={spacing} onChange={(event) => setSpacing(event.target.value)}>
              <option value="12">12 in. on-center</option>
              <option value="16">16 in. on-center</option>
              <option value="24">24 in. on-center</option>
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
            <span>Decking or load condition</span>
            <small>Composite and heavy loads need tighter planning</small>
            <select value={decking} onChange={(event) => setDecking(event.target.value)}>
              {Object.entries(DECKING_OPTIONS).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className={styles.resultsPanel} aria-live="polite">
        <p className={styles.kicker}>Planning output</p>
        <div className={styles.resultGrid}>
          <div>
            <span>Max joist span</span>
            <strong>{formatFeet(result.adjustedSpan)}</strong>
          </div>
          <div>
            <span>Cantilever limit</span>
            <strong>{formatFeet(result.cantileverLimit)}</strong>
          </div>
          <div>
            <span>Planning status</span>
            <strong>{result.isWithinRange ? 'OK' : 'Review'}</strong>
          </div>
          <div>
            <span>Smallest listed joist</span>
            <strong>{result.smallestJoist ? JOIST_OPTIONS[result.smallestJoist].label : 'Review'}</strong>
          </div>
        </div>

        <div className={result.isWithinRange ? styles.goodBox : styles.warningBox}>
          <h3>{result.isWithinRange ? 'Within planning range' : 'Needs joist or spacing review'}</h3>
          <p>
            {result.smallestJoist
              ? `${JOIST_OPTIONS[result.smallestJoist].label} is the smallest listed joist that fits this span in the planning tool.`
              : 'No listed joist fits this span in the planning tool. A structural review is the safer next step.'}
          </p>
        </div>

        <div className={styles.warningBox}>
          <h3>Joist planning warnings</h3>
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
          aria-label="Copyable deck joist span calculation summary"
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
