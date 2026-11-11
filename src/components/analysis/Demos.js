import React, {useState} from 'react';
import {Frame, TableView, SLICES, useTip} from './Frame';
import {ABLATION, ERRORS, CASES, COST} from './data';

export function AblationDemo() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(true);
  const S = ABLATION.scores;
  const cur = S[`${+a}${+b}`];
  const fmt = v => (v > 0 ? '+' : '') + v.toFixed(1);
  const rows = [
    ['FINE-TUNED (both)', S['11']],
    [`− ${ABLATION.methods[0]}`, S['01']],
    [`− ${ABLATION.methods[1]}`, S['10']],
    ['− both (ZERO-SHOT)', S['00']],
  ];
  return (
    <Frame title="Ablating FINE-TUNED" note={`Removing each method alone costs ${(S['11'] - S['01']).toFixed(1)} and ${(S['11'] - S['10']).toFixed(1)} (sum ${(2 * S['11'] - S['01'] - S['10']).toFixed(1)}), but removing both costs ${(S['11'] - S['00']).toFixed(1)}. The methods overlap, so one-at-a-time ablations alone understate their joint contribution.`}>
      <div className="viz-controls">
        <label><input type="checkbox" checked={a} onChange={e => setA(e.target.checked)} /> {ABLATION.methods[0]}</label>
        <label><input type="checkbox" checked={b} onChange={e => setB(e.target.checked)} /> {ABLATION.methods[1]}</label>
      </div>
      <div>Macro-F1 = <strong>{cur.toFixed(1)}</strong> ({fmt(cur - S['11'])} vs. FINE-TUNED)</div>
      <div style={{marginTop: 8}}>
        {rows.map(([name, v]) => {
          const on = v === cur;
          return (
            <div key={name} style={{display: 'flex', alignItems: 'center', gap: 8, margin: '4px 0', opacity: on ? 1 : 0.6}}>
              <span style={{width: 190, fontSize: '0.85rem'}}>{name}</span>
              <span style={{height: 14, width: `${v * 3}px`, background: on ? 'var(--viz-1)' : 'var(--ifm-color-emphasis-400)', borderRadius: 2}} />
              <span style={{fontSize: '0.85rem'}}>{v.toFixed(1)} ({fmt(v - S['11'])})</span>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}

export function ErrorDemo() {
  const [model, setModel] = useState(1);
  const [sel, setSel] = useState(0);
  const {ref, tipFor, tipEl} = useTip();
  const names = ['ZERO-SHOT', 'FINE-TUNED'];
  const total = ERRORS.reduce((s, e) => s + e.count[model], 0);
  const bySource = src => ERRORS.filter(e => e.source === src).reduce((s, e) => s + e.count[model], 0);
  const e = ERRORS[sel];
  const R = 100, C = 110;
  let acc = 0;
  const slices = ERRORS.map((x, i) => {
    const frac = x.count[model] / total;
    const a0 = acc * 2 * Math.PI - Math.PI / 2;
    acc += frac;
    const a1 = acc * 2 * Math.PI - Math.PI / 2;
    const pt = a => `${C + R * Math.cos(a)} ${C + R * Math.sin(a)}`;
    const mid = (a0 + a1) / 2;
    return {x, i, frac, mid, d: `M ${C} ${C} L ${pt(a0)} A ${R} ${R} 0 ${frac > 0.5 ? 1 : 0} 1 ${pt(a1)} Z`};
  });
  const tip = s => tipFor(<><strong>{s.x.name}</strong><div>{s.x.count[model]} per 1K messages ({Math.round(s.frac * 100)}%)</div><div>{s.x.source} error</div></>);
  return (
    <Frame
      title="Distribution of errors"
      frameRef={ref}
      tipEl={tipEl}
      note={`${names[model]} makes ${total} errors per 1K messages: ${bySource('Model')} from the model, ${bySource('Task')} from the task, and ${bySource('Data')} from the data. Switch models to see how the mix shifts: fine-tuning removes most model errors, while task and data errors fall far less.`}
    >
      <div className="viz-controls">
        {names.map((n, i) => (
          <label key={n}><input type="radio" name="errmodel" checked={i === model} onChange={() => setModel(i)} /> {n}</label>
        ))}
      </div>
      <div className="viz-pie">
        <svg viewBox="0 0 220 220" role="img" aria-label="Pie chart of error types">
          {slices.map(s => (
            <path
              key={s.x.name} className="slice" d={s.d} fill={SLICES[s.i]}
              stroke="var(--ifm-background-color)" strokeWidth={2}
              style={{transform: s.i === sel ? `translate(${Math.cos(s.mid) * 6}px, ${Math.sin(s.mid) * 6}px)` : 'none'}}
              onClick={() => setSel(s.i)} aria-label={`${s.x.name}: ${Math.round(s.frac * 100)}%`}
              {...tip(s)}
            />
          ))}
        </svg>
        <div style={{flex: 1, minWidth: 220}}>
          {slices.map(s => (
            <div
              key={s.x.name} className="viz-slice-row" role="button" tabIndex={0} aria-pressed={s.i === sel}
              onClick={() => setSel(s.i)} onKeyDown={k => (k.key === 'Enter' || k.key === ' ') && setSel(s.i)}
            >
              <span className="viz-key" style={{background: SLICES[s.i]}} />
              <span style={{flex: 1}}>{s.x.name}</span>
              <strong>{Math.round(s.frac * 100)}%</strong>
              <span className="viz-chip">{s.x.source}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{marginTop: 12, fontSize: '0.9rem'}}>
        <div><strong>{e.name}</strong> ({e.source} error)</div>
        <div><em>Example:</em> {e.example}</div>
        <div><em>Cause:</em> {e.cause}</div>
        <div><em>Fix:</em> {e.fix}</div>
      </div>
      <TableView head={['Error type', 'Source', ...names.map(n => `${n} (per 1K)`)]} rows={ERRORS.map(x => [x.name, x.source, ...x.count])} />
    </Frame>
  );
}

export function AblationCases() {
  const [sel, setSel] = useState(0);
  const c = CASES[sel];
  const box = (title, o, good) => (
    <div style={{flex: 1, minWidth: 220, border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 6, padding: 10}}>
      <div style={{fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-700)'}}>{title}</div>
      <div><strong>{o.label}</strong> {good ? '✓' : '✗'}</div>
      <div style={{fontSize: '0.85rem'}}>{o.note}</div>
    </div>
  );
  return (
    <Frame title="Same input, with and without each method" note={c.why}>
      <div className="viz-controls">
        {CASES.map((x, i) => (
          <label key={x.method}><input type="radio" name="case" checked={i === sel} onChange={() => setSel(i)} /> {x.method}</label>
        ))}
      </div>
      <div>Input: <em>"{c.input}"</em> (gold: <strong>{c.gold}</strong>)</div>
      <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8}}>
        {box('Without the method', c.without, false)}
        {box('With the method', c.with, sel !== 2)}
      </div>
    </Frame>
  );
}

export function CostBenefit() {
  return (
    <Frame title="Gain vs. cost of each method" note="Gain is the macro-F1 added to the previous model. Report cost in whatever resource limits your use case: latency, money, data, or engineering effort.">
      <table style={{display: 'table', width: '100%'}}>
        <thead><tr><th>Method</th><th>Gain (F1)</th><th>Cost</th></tr></thead>
        <tbody>{COST.map(c => <tr key={c.method}><td>{c.method}</td><td><strong>{c.gain}</strong></td><td>{c.cost}</td></tr>)}</tbody>
      </table>
    </Frame>
  );
}
