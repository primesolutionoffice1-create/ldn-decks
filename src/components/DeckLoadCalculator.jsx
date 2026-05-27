'use client';

import { useMemo, useState } from 'react';

const SURFACE_OPTIONS = {
  wood: { label: 'Standard wood or composite walking surface', deadLoad: 10, liveLoad: 40, note: 'Ordinary residential deck planning range.' },
  premiumComposite: { label: 'Premium composite with picture framing', deadLoad: 12, liveLoad: 40, note: 'Composite details can add weight and need tight framing.' },
  covered: { label: 'Covered deck or porch structure above', deadLoad: 18, liveLoad: 40, note: 'Roofed or covered decks need structural review.' },
  hotTub: { label: 'Hot tub, spa, masonry, or outdoor kitchen zone', deadLoad: 30, liveLoad: 80, note: 'Concentrated loads need engineering.' },
};

function readNumber(value, fallback) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function round(value, decimals = 1) {
  return Number.parseFloat(value.toFixed(decimals));
}

function formatPounds(value) {
  return `${Math.round(value).toLocaleString('en-US')} lb`;
}

function formatPlf(value) {
  return `${Math.round(value).toLocaleString('en-US')} lb/ft`;
}

export default function DeckLoadCalculator({ styles }) {
  const [length, setLength] = useState('16');
  const [depth, setDepth] = useState('14');
  const [surface, setSurface] = useState('premiumComposite');
  const [tributaryWidth, setTributaryWidth] = useState('7');
  const [postCount, setPostCount] = useState('4');
  const [snowAllowance, setSnowAllowance] = useState('0');
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const deckLength = Math.max(4, readNumber(length, 16));
    const deckDepth = Math.max(4, readNumber(depth, 14));
    const area = deckLength * deckDepth;
    const selectedSurface = SURFACE_OPTIONS[surface];
    const extraSnow = Math.max(0, readNumber(snowAllowance, 0));
    const designPsf = selectedSurface.deadLoad + selectedSurface.liveLoad + extraSnow;
    const totalDesignLoad = area * designPsf;
    const tributary = Math.max(2, readNumber(tributaryWidth, 7));
    const beamLineLoad = designPsf * tributary;
    const posts = Math.max(1, Math.round(readNumber(postCount, 4)));
    const loadPerPost = totalDesignLoad / posts;
    const warnings = [];
    const notes = [];

    if (surface === 'covered') {
      warnings.push('Covered decks and screened porch roofs add dead, snow, wind and uplift loads that should be reviewed by a qualified professional.');
    }

    if (surface === 'hotTub') {
      warnings.push('Hot tubs, spas, masonry kitchens and tile-like finishes create concentrated loads that should not be planned from ordinary deck assumptions.');
    }

    if (beamLineLoad > 600) {
      warnings.push('The estimated beam line load is high. Beam size, post spacing and footing diameter should be reviewed together.');
    }

    if (loadPerPost > 6000) {
      warnings.push('Estimated load per post is high for early planning. Confirm post size, connector capacity, footing diameter and soil bearing assumptions.');
    }

    if (extraSnow > 0 && surface !== 'covered') {
      warnings.push('Added snow allowance is useful for conservative planning, but uncovered deck live-load requirements and local code assumptions must still control.');
    }

    notes.push('Deck load travels from boards to joists, beams, posts and footings; the weakest connection controls the system.');
    notes.push('Beam tributary width is the portion of deck floor carried by a beam line, not always the full deck depth.');
    notes.push('Virginia deck plans should be checked against adopted residential code, manufacturer instructions, approved drawings and local inspection requirements.');
    notes.push('This tool estimates distributed planning loads only; it does not design beams, joists, ledgers, posts or footings.');

    const summary = [
      'Virginia Deck Load Calculator Summary',
      `Deck size: ${round(deckLength)} ft x ${round(deckDepth)} ft`,
      `Deck area: ${Math.round(area).toLocaleString('en-US')} sq ft`,
      `Load condition: ${selectedSurface.label}`,
      `Dead load assumption: ${selectedSurface.deadLoad} psf`,
      `Live load assumption: ${selectedSurface.liveLoad} psf`,
      `Additional planning allowance: ${extraSnow} psf`,
      `Total design planning load: ${designPsf} psf`,
      `Estimated total distributed load: ${formatPounds(totalDesignLoad)}`,
      `Beam tributary width: ${round(tributary)} ft`,
      `Estimated beam line load: ${formatPlf(beamLineLoad)}`,
      `Post count entered: ${posts}`,
      `Estimated distributed load per post: ${formatPounds(loadPerPost)}`,
      'Note: This is educational planning guidance only. Final load paths, spans, footings and connectors must be verified by permit review, engineering when required and field inspection.',
    ].join('\n');

    return {
      area,
      designPsf,
      totalDesignLoad,
      beamLineLoad,
      loadPerPost,
      selectedSurface,
      warnings,
      notes,
      summary,
    };
  }, [length, depth, surface, tributaryWidth, postCount, snowAllowance]);

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
        <p className={styles.kicker}>Interactive structural planning tool</p>
        <h2 id="calculator-heading">Estimate Deck Loads and Load Paths</h2>
        <p>
          Enter an early deck layout to estimate distributed load, beam line load and post load
          warnings before planning beams, joists, footings or heavy upgrades.
        </p>

        <div className={styles.formGrid}>
          <label>
            <span>Deck length</span>
            <small>Overall deck length in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="4"
              step="0.5"
              value={length}
              onChange={(event) => setLength(event.target.value)}
            />
          </label>

          <label>
            <span>Deck depth</span>
            <small>Projection from house or inside support to outside edge, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="4"
              step="0.5"
              value={depth}
              onChange={(event) => setDepth(event.target.value)}
            />
          </label>

          <label>
            <span>Load condition</span>
            <small>Choose the closest planning scenario</small>
            <select value={surface} onChange={(event) => setSurface(event.target.value)}>
              {Object.entries(SURFACE_OPTIONS).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Beam tributary width</span>
            <small>Width of deck floor carried by the beam line, in feet</small>
            <input
              inputMode="decimal"
              type="number"
              min="2"
              step="0.5"
              value={tributaryWidth}
              onChange={(event) => setTributaryWidth(event.target.value)}
            />
          </label>

          <label>
            <span>Number of posts</span>
            <small>Posts sharing the estimated distributed deck load</small>
            <input
              inputMode="numeric"
              type="number"
              min="1"
              step="1"
              value={postCount}
              onChange={(event) => setPostCount(event.target.value)}
            />
          </label>

          <label>
            <span>Additional allowance</span>
            <small>Optional psf planning allowance for conservative review</small>
            <input
              inputMode="decimal"
              type="number"
              min="0"
              step="5"
              value={snowAllowance}
              onChange={(event) => setSnowAllowance(event.target.value)}
            />
          </label>
        </div>
      </div>

      <div className={styles.resultsPanel} aria-live="polite">
        <p className={styles.kicker}>Planning output</p>
        <div className={styles.resultGrid}>
          <div>
            <span>Deck area</span>
            <strong>{Math.round(result.area).toLocaleString('en-US')} sq ft</strong>
          </div>
          <div>
            <span>Design load</span>
            <strong>{result.designPsf} psf</strong>
          </div>
          <div>
            <span>Total load</span>
            <strong>{formatPounds(result.totalDesignLoad)}</strong>
          </div>
          <div>
            <span>Beam line load</span>
            <strong>{formatPlf(result.beamLineLoad)}</strong>
          </div>
          <div>
            <span>Load per post</span>
            <strong>{formatPounds(result.loadPerPost)}</strong>
          </div>
          <div>
            <span>Review status</span>
            <strong>{result.warnings.length ? 'Review' : 'Planning OK'}</strong>
          </div>
        </div>

        <div className={result.warnings.length ? styles.warningBox : styles.goodBox}>
          <h3>{result.warnings.length ? 'Load path review recommended' : 'Within early planning range'}</h3>
          <p>
            {result.selectedSurface.note} Use these numbers to frame the conversation around joist
            span, beam span, post spacing, footing size and inspection requirements.
          </p>
        </div>

        <div className={styles.warningBox}>
          <h3>Load planning warnings</h3>
          <ul>
            {(result.warnings.length ? result.warnings : ['No high-load warning triggered by the current inputs.']).map((warning) => (
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
          aria-label="Copyable deck load calculation summary"
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
