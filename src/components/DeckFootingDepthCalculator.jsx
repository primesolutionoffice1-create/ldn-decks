'use client';

import { useMemo, useState } from 'react';

const COUNTY_OPTIONS = {
  loudoun: { label: 'Loudoun County / Leesburg / Ashburn / Sterling', frostDepth: 24, defaultDepth: 30 },
  fairfax: { label: 'Fairfax County / Herndon / Reston / McLean', frostDepth: 30, defaultDepth: 30 },
  princeWilliam: { label: 'Prince William County / Manassas / Woodbridge', frostDepth: 24, defaultDepth: 30 },
  arlington: { label: 'Arlington County', frostDepth: 24, defaultDepth: 30 },
  alexandria: { label: 'Alexandria / Falls Church', frostDepth: 24, defaultDepth: 30 },
  other: { label: 'Other Northern Virginia location', frostDepth: 24, defaultDepth: 30 },
};

const SOIL_OPTIONS = {
  firm: { label: 'Firm, undisturbed soil', depthAdd: 0, diameterAdd: 0 },
  clay: { label: 'Typical Northern Virginia clay', depthAdd: 0, diameterAdd: 2 },
  soft: { label: 'Soft, wet, sloped, or fill soil', depthAdd: 6, diameterAdd: 4 },
  unknown: { label: 'Unknown soil condition', depthAdd: 3, diameterAdd: 2 },
};

const LOAD_OPTIONS = {
  standard: { label: 'Standard residential deck', depthAdd: 0, diameterAdd: 0 },
  composite: { label: 'Composite deck / heavier finishes', depthAdd: 0, diameterAdd: 2 },
  elevated: { label: 'Elevated, multi-level, roof, pergola, or outdoor kitchen', depthAdd: 6, diameterAdd: 4 },
  spa: { label: 'Hot tub, swim spa, or concentrated heavy load', depthAdd: 12, diameterAdd: 8 },
};

function readNumber(value, fallback) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function round(value, decimals = 1) {
  return Number.parseFloat(value.toFixed(decimals));
}

function formatInches(value) {
  return `${Math.round(value)} in`;
}

function formatFeet(value) {
  return `${round(value, 1)} ft`;
}

function estimateFootings(area, height, attachment) {
  let count = 4;

  if (area > 240) count = 6;
  if (area > 420) count = 8;
  if (area > 640) count = 10;
  if (attachment === 'freestanding') count += 2;
  if (height > 8) count += 2;

  return count;
}

function getDiameter(area, height, soil, load, attachment) {
  let diameter = 12;

  if (area > 300) diameter += 2;
  if (area > 500) diameter += 2;
  if (height > 6) diameter += 2;
  if (attachment === 'freestanding') diameter += 2;

  diameter += SOIL_OPTIONS[soil].diameterAdd;
  diameter += LOAD_OPTIONS[load].diameterAdd;

  if (load === 'spa') return Math.max(24, diameter);
  if (load === 'elevated') return Math.max(18, diameter);
  return Math.min(Math.max(12, diameter), 24);
}

function getDepth(county, height, soil, load, attachment) {
  const countyInfo = COUNTY_OPTIONS[county];
  let depth = Math.max(countyInfo.defaultDepth, countyInfo.frostDepth);

  if (height > 6) depth += 3;
  if (height > 10) depth += 3;
  if (attachment === 'freestanding') depth += 0;

  depth += SOIL_OPTIONS[soil].depthAdd;
  depth += LOAD_OPTIONS[load].depthAdd;

  return Math.max(depth, countyInfo.frostDepth);
}

export default function DeckFootingDepthCalculator({ styles }) {
  const [deckHeight, setDeckHeight] = useState('4');
  const [deckLength, setDeckLength] = useState('20');
  const [deckWidth, setDeckWidth] = useState('16');
  const [county, setCounty] = useState('loudoun');
  const [soil, setSoil] = useState('clay');
  const [load, setLoad] = useState('standard');
  const [attachment, setAttachment] = useState('attached');
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const height = Math.max(0.5, readNumber(deckHeight, 4));
    const length = Math.max(4, readNumber(deckLength, 20));
    const width = Math.max(4, readNumber(deckWidth, 16));
    const area = length * width;
    const countyInfo = COUNTY_OPTIONS[county];
    const depth = getDepth(county, height, soil, load, attachment);
    const diameter = getDiameter(area, height, soil, load, attachment);
    const footings = estimateFootings(area, height, attachment);
    const roughTributaryArea = area / footings;
    const warnings = [];
    const inspectionNotes = [];

    if (height > 6) {
      warnings.push('Elevated decks need closer review for post height, lateral bracing, beam sizing, stairs, guards, and footing performance.');
    }

    if (soil === 'soft' || soil === 'unknown') {
      warnings.push('Soft, wet, sloped, fill, or unknown soil can require larger/deeper footings or engineering review.');
    }

    if (load === 'elevated') {
      warnings.push('Roofs, pergolas, screened porches, outdoor kitchens, and multi-level layouts can add concentrated loads that should be reviewed professionally.');
    }

    if (load === 'spa') {
      warnings.push('Hot tubs and swim spas are heavy concentrated loads. Treat this as an engineering-review condition, not a prescriptive deck footing estimate.');
    }

    if (attachment === 'attached') {
      warnings.push('Attached decks also depend on ledger attachment, flashing, and lateral-load connections. Footing depth alone does not make the deck code-compliant.');
    } else {
      warnings.push('Freestanding decks avoid the ledger connection, but they need independent stability, bracing, and footing layout review.');
    }

    inspectionNotes.push('Footing holes are typically inspected before concrete is poured.');
    inspectionNotes.push('Footings should bear on firm, undisturbed soil, not loose backfill.');
    inspectionNotes.push('The inspector may require adjustment if field conditions differ from the plan.');
    inspectionNotes.push('Call 811 before digging and verify utilities, easements, setbacks, and HOA constraints.');

    const summary = [
      'Virginia Deck Footing Depth Calculator Summary',
      `Location: ${countyInfo.label}`,
      `Deck size: ${formatFeet(length)} x ${formatFeet(width)} (${Math.round(area)} sq ft)`,
      `Deck height: ${formatFeet(height)}`,
      `Attachment: ${attachment === 'attached' ? 'Attached to house' : 'Freestanding'}`,
      `Soil condition: ${SOIL_OPTIONS[soil].label}`,
      `Load assumption: ${LOAD_OPTIONS[load].label}`,
      `Planning frost-depth reference: about ${formatInches(countyInfo.frostDepth)} minimum, verify locally`,
      `Planning footing depth: about ${formatInches(depth)} before final permit/inspection review`,
      `Planning footing diameter: about ${formatInches(diameter)} per footing`,
      `Rough footing count for planning: ${footings}`,
      `Approximate tributary area per footing: ${Math.round(roughTributaryArea)} sq ft`,
      'Note: This is educational planning guidance only. Final footing depth, diameter, reinforcement, spacing, post bases, load path, and inspections must be verified by the local authority or a qualified professional.',
    ].join('\n');

    return {
      area,
      countyInfo,
      depth,
      diameter,
      footings,
      roughTributaryArea,
      warnings,
      inspectionNotes,
      summary,
    };
  }, [deckHeight, deckLength, deckWidth, county, soil, load, attachment]);

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
        <p className={styles.kicker}>Interactive planning tool</p>
        <h2 id="calculator-heading">Estimate Deck Footing Depth and Diameter</h2>
        <p>
          Enter the basic deck conditions. The calculator gives a homeowner planning estimate for
          footing depth, footing diameter, warning conditions, and inspection notes.
        </p>

        <div className={styles.formGrid}>
          <label>
            <span>Deck height</span>
            <small>Approximate height from grade to walking surface, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="0.5"
              step="0.5"
              value={deckHeight}
              onChange={(event) => setDeckHeight(event.target.value)}
            />
          </label>

          <label>
            <span>Deck length</span>
            <small>Approximate deck length, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="4"
              step="1"
              value={deckLength}
              onChange={(event) => setDeckLength(event.target.value)}
            />
          </label>

          <label>
            <span>Deck width</span>
            <small>Approximate deck projection, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="4"
              step="1"
              value={deckWidth}
              onChange={(event) => setDeckWidth(event.target.value)}
            />
          </label>

          <label>
            <span>County / location</span>
            <small>Use the closest Northern Virginia jurisdiction</small>
            <select value={county} onChange={(event) => setCounty(event.target.value)}>
              {Object.entries(COUNTY_OPTIONS).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Soil condition</span>
            <small>Choose the closest field condition</small>
            <select value={soil} onChange={(event) => setSoil(event.target.value)}>
              {Object.entries(SOIL_OPTIONS).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Load assumption</span>
            <small>Heavy loads should be professionally reviewed</small>
            <select value={load} onChange={(event) => setLoad(event.target.value)}>
              {Object.entries(LOAD_OPTIONS).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <fieldset>
            <legend>Deck attachment</legend>
            <div className={styles.segmented}>
              <button
                type="button"
                aria-pressed={attachment === 'attached'}
                className={attachment === 'attached' ? styles.activeSegment : ''}
                onClick={() => setAttachment('attached')}
              >
                Attached
              </button>
              <button
                type="button"
                aria-pressed={attachment === 'freestanding'}
                className={attachment === 'freestanding' ? styles.activeSegment : ''}
                onClick={() => setAttachment('freestanding')}
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
            <span>Footing depth</span>
            <strong>{formatInches(result.depth)}</strong>
          </div>
          <div>
            <span>Footing diameter</span>
            <strong>{formatInches(result.diameter)}</strong>
          </div>
          <div>
            <span>Rough footing count</span>
            <strong>{result.footings}</strong>
          </div>
          <div>
            <span>Deck area</span>
            <strong>{Math.round(result.area)} sq ft</strong>
          </div>
        </div>

        <div className={styles.noteBox}>
          <p>
            For <strong>{result.countyInfo.label}</strong>, use about{' '}
            <strong>{formatInches(result.countyInfo.frostDepth)}</strong> as a planning frost-depth
            reference, then verify the final footing detail with the local building department or
            inspector.
          </p>
        </div>

        <div className={styles.warningBox}>
          <h3>Planning warnings</h3>
          <ul>
            {result.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </div>

        <div className={styles.goodBox}>
          <h3>Inspection notes</h3>
          <ul>
            {result.inspectionNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <textarea
          className={styles.summary}
          readOnly
          value={result.summary}
          aria-label="Copyable deck footing calculation summary"
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
