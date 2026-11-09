import React, {useState} from 'react';

// Toy F1 scores for every combination of two methods (illustrative only).
const SCORES = {'00': 70.0, '10': 74.5, '01': 71.0, '11': 80.0};
const cell = {padding: '4px 12px', textAlign: 'center'};

export default function AblationDemo() {
  const [m1, setM1] = useState(true);
  const [m2, setM2] = useState(true);
  const f1 = SCORES[`${+m1}${+m2}`];
  const best = SCORES['11'];
  const base = SCORES['00'];

  return (
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: 16, margin: '16px 0'}}>
      <strong>Try it: toggle the methods</strong>
      <div style={{margin: '8px 0'}}>
        <label style={{marginRight: 24}}>
          <input type="checkbox" checked={m1} onChange={e => setM1(e.target.checked)} /> METHOD 1
        </label>
        <label>
          <input type="checkbox" checked={m2} onChange={e => setM2(e.target.checked)} /> METHOD 2
        </label>
      </div>
      <div>
        F1 = <strong>{f1.toFixed(1)}</strong>{' '}
        ({f1 - base >= 0 ? '+' : ''}{(f1 - base).toFixed(1)} over BASELINE
        {f1 !== best && `, ${(f1 - best).toFixed(1)} vs. BEST`})
      </div>
      <table style={{marginTop: 12}}>
        <thead>
          <tr><th>Setting</th><th style={cell}>F1</th><th style={cell}>Δ vs. BEST</th></tr>
        </thead>
        <tbody>
          <tr><td>BEST (both)</td><td style={cell}>{SCORES['11'].toFixed(1)}</td><td style={cell}>–</td></tr>
          <tr><td>− METHOD 1</td><td style={cell}>{SCORES['01'].toFixed(1)}</td><td style={cell}>{(SCORES['01'] - best).toFixed(1)}</td></tr>
          <tr><td>− METHOD 2</td><td style={cell}>{SCORES['10'].toFixed(1)}</td><td style={cell}>{(SCORES['10'] - best).toFixed(1)}</td></tr>
        </tbody>
      </table>
      <small>
        Removing each method alone costs {(best - SCORES['01']).toFixed(1)} and {(best - SCORES['10']).toFixed(1)}, which sum to{' '}
        {(2 * best - SCORES['01'] - SCORES['10']).toFixed(1)}, yet removing both costs {(best - base).toFixed(1)}.
        The two methods overlap, so one-at-a-time ablations alone understate their joint contribution.
      </small>
    </div>
  );
}
