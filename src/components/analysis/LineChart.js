import React, {useState} from 'react';
import {Frame, Legend, TableView, SERIES, useTip} from './Frame';
import {MODELS, SPEED} from './data';

const W = 640, H = 300, L = 48, R = 100, T = 12, B = 36;

export default function SpeedAnalysis() {
  const [log, setLog] = useState(false);
  const [idx, setIdx] = useState(null);
  const {ref, tipFor, tipEl, hide} = useTip();
  const n = SPEED.lengths.length;
  const all = SPEED.latency.flat();
  const lo = log ? Math.floor(Math.log10(Math.min(...all)) * 2) / 2 : 0;
  const hi = log ? Math.ceil(Math.log10(Math.max(...all))) : Math.ceil(Math.max(...all));
  const sy = v => T + (1 - ((log ? Math.log10(v) : v) - lo) / (hi - lo)) * (H - T - B);
  const sx = i => L + (i / (n - 1)) * (W - L - R);
  const ticks = log ? [0.1, 0.3, 1, 3].filter(t => Math.log10(t) >= lo && Math.log10(t) <= hi) : Array.from({length: hi + 1}, (_, i) => i);

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    const i = Math.max(0, Math.min(n - 1, Math.round(((px - L) / (W - L - R)) * (n - 1))));
    setIdx(i);
  };
  const tipProps = idx === null ? {} : tipFor(
    <>
      <strong>{SPEED.lengths[idx]} input tokens</strong>
      {MODELS.map((m, k) => (
        <div className="row" key={m.id}>
          <span><span className="line" style={{background: SERIES[k]}} />{m.name}</span>
          <strong>{SPEED.latency[k][idx].toFixed(2)} s</strong>
        </div>
      ))}
    </>
  );

  return (
    <Frame
      title="Latency by input length"
      frameRef={ref}
      tipEl={tipEl}
      note="ZERO-SHOT and FEW-SHOT call a large hosted LLM; FINE-TUNED serves a small LoRA-adapted model. Median of 5 runs per length after warm-up, batch size 1."
    >
      <div className="viz-controls">
        <label><input type="checkbox" checked={log} onChange={e => setLog(e.target.checked)} /> Log scale</label>
      </div>
      <Legend items={MODELS.map(m => m.name)} />
      <svg
        viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Latency in seconds by input length for three models"
        onPointerMove={e => { onMove(e); tipProps.onPointerMove && tipProps.onPointerMove(e); }}
        onPointerLeave={() => { setIdx(null); hide(); }}
      >
        {ticks.map(t => (
          <g key={t}>
            <line className="grid" x1={L} x2={W - R} y1={sy(t || 1e-9)} y2={sy(t || 1e-9)} />
            <text className="muted" x={L - 6} y={sy(t || 1e-9) + 4} textAnchor="end">{t}</text>
          </g>
        ))}
        <text className="muted" x={4} y={12}>sec</text>
        {SPEED.lengths.map((len, i) => (
          <text key={len} className="muted" x={sx(i)} y={H - 16} textAnchor="middle">{len}</text>
        ))}
        <text className="muted" x={(L + W - R) / 2} y={H - 2} textAnchor="middle">input tokens</text>
        {idx !== null && <line x1={sx(idx)} x2={sx(idx)} y1={T} y2={H - B} stroke="var(--ifm-color-emphasis-500)" strokeDasharray="3 3" />}
        {SPEED.latency.map((ys, k) => (
          <g key={k}>
            <polyline fill="none" stroke={SERIES[k]} strokeWidth={2} points={ys.map((v, i) => `${sx(i)},${sy(v)}`).join(' ')} />
            {ys.map((v, i) => <circle key={i} cx={sx(i)} cy={sy(v)} r={4} fill={SERIES[k]} stroke="var(--ifm-background-color)" strokeWidth={2} />)}
            <text x={sx(n - 1) + 10} y={sy(ys[n - 1]) + 4}>{MODELS[k].name}</text>
          </g>
        ))}
      </svg>
      <TableView head={['Input tokens', ...MODELS.map(m => `${m.name} (s)`)]} rows={SPEED.lengths.map((l, i) => [l, ...SPEED.latency.map(s => s[i])])} />
    </Frame>
  );
}
