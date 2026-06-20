'use client';

import { useMemo, useState } from 'react';

const COMMON_MAX_RISER = 8.25;
const COMMON_MIN_TREAD = 9;
const COMMON_MIN_WIDTH = 36;

function round(value, decimals = 2) {
  return Number.parseFloat(value.toFixed(decimals));
}

function formatInches(value) {
  if (!Number.isFinite(value)) return '0 in';
  return `${round(value, 2)} in`;
}

function formatFeetAndInches(value) {
  if (!Number.isFinite(value)) return '0 ft';
  const feet = Math.floor(value / 12);
  const inches = round(value - feet * 12, 1);
  if (feet <= 0) return `${inches} in`;
  if (inches === 0) return `${feet} ft`;
  return `${feet} ft ${inches} in`;
}

function readNumber(value, fallback) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export default function DeckStairCalculator({ styles }) {
  const [totalRise, setTotalRise] = useState('48');
  const [preferredTreadDepth, setPreferredTreadDepth] = useState('11');
  const [maxRiserHeight, setMaxRiserHeight] = useState('8.25');
  const [stairWidth, setStairWidth] = useState('42');
  const [hasLanding, setHasLanding] = useState('yes');
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const rise = Math.max(1, readNumber(totalRise, 48));
    const tread = Math.max(1, readNumber(preferredTreadDepth, 11));
    const maxRiser = Math.max(1, readNumber(maxRiserHeight, COMMON_MAX_RISER));
    const width = Math.max(1, readNumber(stairWidth, 42));
    const risers = Math.max(1, Math.ceil(rise / maxRiser));
    const exactRiser = rise / risers;
    const fieldTreads = Math.max(1, risers - 1);
    const totalRun = fieldTreads * tread;
    const angle = Math.atan(exactRiser / tread) * (180 / Math.PI);
    const warnings = [];

    if (maxRiser > COMMON_MAX_RISER) {
      warnings.push('Your selected maximum riser is higher than the 8.25 inch upper limit used in Virginia residential stair geometry. Verify the local requirement before using this design.');
    }

    if (exactRiser > COMMON_MAX_RISER) {
      warnings.push('The calculated riser height is above a common residential stair limit. Reduce the maximum riser or add another riser.');
    } else if (exactRiser > 7.25) {
      warnings.push('The calculated riser height is near the upper end of common deck stair comfort. This can still be acceptable, but precision matters.');
    }

    if (tread < COMMON_MIN_TREAD) {
      warnings.push('The selected tread depth is below the 9 inch minimum used in Virginia residential stair geometry.');
    }

    if (width < COMMON_MIN_WIDTH) {
      warnings.push('The stair width is below a common 36 inch clear-width planning target. Check your local county or city requirements.');
    }

    if (angle < 28) {
      warnings.push('This layout is fairly shallow and will use more yard space. Confirm that the total run fits your landing and setback area.');
    }

    if (angle > 37) {
      warnings.push('This layout is fairly steep. Consider a deeper tread, lower riser, or landing change for comfort and safety.');
    }

    if (hasLanding === 'no') {
      warnings.push('Deck stairs typically need a firm, level bottom landing. Plan this before finalizing stringer layout.');
    }

    if (rise > 120) {
      warnings.push('Tall stair runs may need extra review for landings, guards, handrails, support, and permit details.');
    }

    const summary = [
      'Virginia Deck Stair Calculator Summary',
      `Total rise: ${formatInches(rise)}`,
      `Selected maximum riser height: ${formatInches(maxRiser)}`,
      `Preferred tread depth: ${formatInches(tread)}`,
      `Stair width: ${formatInches(width)}`,
      `Bottom landing planned: ${hasLanding === 'yes' ? 'Yes' : 'No'}`,
      `Recommended risers / steps: ${risers}`,
      `Calculated riser height: ${formatInches(exactRiser)}`,
      `Installed tread surfaces to cut: ${fieldTreads}`,
      `Total horizontal run: ${formatFeetAndInches(totalRun)}`,
      `Estimated stair angle: ${round(angle, 1)} degrees`,
      'Note: This is a planning estimate only. Verify code, permit and inspection requirements with the local authority or a qualified professional.',
    ].join('\n');

    return {
      rise,
      tread,
      maxRiser,
      width,
      risers,
      exactRiser,
      fieldTreads,
      totalRun,
      angle,
      warnings,
      summary,
    };
  }, [totalRise, preferredTreadDepth, maxRiserHeight, stairWidth, hasLanding]);

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
        <h2 id="calculator-heading">Calculate Deck Stair Rise and Run</h2>
        <p>
          Enter the height from the finished deck surface to the finished landing surface.
          The calculator estimates the number of risers, tread layout, total run and stair angle.
        </p>

        <div className={styles.formGrid}>
          <label>
            <span>Total rise</span>
            <small>Finished deck surface to landing, in inches</small>
            <input
              inputMode="decimal"
              type="number"
              min="1"
              step="0.25"
              value={totalRise}
              onChange={(event) => setTotalRise(event.target.value)}
            />
          </label>

          <label>
            <span>Preferred tread depth</span>
            <small>Virginia minimum: 9 inches; comfort target: 10 to 12 inches</small>
            <input
              inputMode="decimal"
              type="number"
              min="1"
              step="0.25"
              value={preferredTreadDepth}
              onChange={(event) => setPreferredTreadDepth(event.target.value)}
            />
          </label>

          <label>
            <span>Maximum riser height</span>
            <small>Virginia maximum: 8.25 inches; lower often feels better</small>
            <input
              inputMode="decimal"
              type="number"
              min="1"
              step="0.125"
              value={maxRiserHeight}
              onChange={(event) => setMaxRiserHeight(event.target.value)}
            />
          </label>

          <label>
            <span>Stair width</span>
            <small>Clear stair width, in inches</small>
            <input
              inputMode="decimal"
              type="number"
              min="1"
              step="0.5"
              value={stairWidth}
              onChange={(event) => setStairWidth(event.target.value)}
            />
          </label>

          <fieldset>
            <legend>Bottom landing planned?</legend>
            <div className={styles.segmented}>
              <button
                type="button"
                aria-pressed={hasLanding === 'yes'}
                className={hasLanding === 'yes' ? styles.activeSegment : ''}
                onClick={() => setHasLanding('yes')}
              >
                Yes
              </button>
              <button
                type="button"
                aria-pressed={hasLanding === 'no'}
                className={hasLanding === 'no' ? styles.activeSegment : ''}
                onClick={() => setHasLanding('no')}
              >
                No
              </button>
            </div>
          </fieldset>
        </div>
      </div>

      <div className={styles.resultsPanel} aria-live="polite">
        <p className={styles.kicker}>Estimated layout</p>
        <div className={styles.resultGrid}>
          <div>
            <span>Steps / risers</span>
            <strong>{result.risers}</strong>
          </div>
          <div>
            <span>Exact riser height</span>
            <strong>{formatInches(result.exactRiser)}</strong>
          </div>
          <div>
            <span>Total run</span>
            <strong>{formatFeetAndInches(result.totalRun)}</strong>
          </div>
          <div>
            <span>Stair angle</span>
            <strong>{round(result.angle, 1)} deg</strong>
          </div>
        </div>

        <div className={styles.noteBox}>
          <p>
            Plan for <strong>{result.risers} risers</strong> with each riser at about{' '}
            <strong>{formatInches(result.exactRiser)}</strong>. In many deck layouts, the deck surface
            acts as the top landing, so the stringers typically carry{' '}
            <strong>{result.fieldTreads} installed tread surfaces</strong>.
          </p>
        </div>

        {result.warnings.length > 0 ? (
          <div className={styles.warningBox}>
            <h3>Planning warnings</h3>
            <ul>
              {result.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={styles.goodBox}>
            <h3>No obvious planning flags</h3>
            <p>
              The numbers are within common comfort ranges, but they still need local code, permit,
              site and product review before construction.
            </p>
          </div>
        )}

        <textarea
          className={styles.summary}
          readOnly
          value={result.summary}
          aria-label="Copyable deck stair calculation summary"
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
