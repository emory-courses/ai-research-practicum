import React from 'react';
import {Frame, Legend, TableView, SERIES, useTip} from './Frame';
import {MODELS} from './data';

const W = 640, LEFT = 130, RIGHT = 70, BAR = 10, GAP = 2, PAD = 14;

// Horizontal grouped bars: one row per group (label or category), one bar per model.
export default function GroupedBars({title, rows, extraHead, extra, controls, note, series = MODELS.map(m => m.name), max = 100, signed = false}) {
  const {ref, tipFor, tipEl} = useTip();
  const ROW = series.length * (BAR + GAP) + PAD;
  const ticks = [0, 1, 2, 3, 4].map(i => (max * i) / 4);
  const plotW = W - LEFT - RIGHT;
  const H = rows.length * ROW + 28;
  const x = v => LEFT + (v / max) * plotW;
  return (
    <Frame title={title} frameRef={ref} tipEl={tipEl} note={note}>
      {controls}
      <Legend items={series} />
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title}>
        {ticks.map(t => (
          <g key={t}>
            <line className="grid" x1={x(t)} x2={x(t)} y1={0} y2={H - 22} />
            <text className="muted" x={x(t)} y={H - 6} textAnchor="middle">{t}</text>
          </g>
        ))}
        {extraHead && <text className="muted" x={W - 4} y={10} textAnchor="end">{extraHead}</text>}
        {rows.map((r, i) => {
          const y0 = i * ROW + 14;
          return (
            <g key={r.name}>
              <text x={LEFT - 8} y={y0 + ROW / 2 - 4} textAnchor="end">{r.name}</text>
              {extra && <text className="muted" x={W - 4} y={y0 + ROW / 2 - 4} textAnchor="end">{extra(r)}</text>}
              {r.f1.map((v, k) => (
                <rect key={k} x={LEFT} y={y0 + k * (BAR + GAP)} width={Math.max(0, x(v) - LEFT)} height={BAR} rx={2} fill={SERIES[k]} />
              ))}
              <rect
                className="viz-hit" x={0} y={y0 - 6} width={W} height={ROW}
                aria-label={`${r.name}: ${series.map((m, k) => `${m} ${r.f1[k]}`).join(', ')}`}
                {...tipFor(
                  <>
                    <strong>{r.name}</strong>
                    {r.f1.map((v, k) => (
                      <div className="row" key={k}>
                        <span><span className="line" style={{background: SERIES[k]}} />{series[k]}</span>
                        <strong>{signed && v > 0 ? '+' : ''}{v.toFixed(1)}</strong>
                      </div>
                    ))}
                    {extra && <div className="muted">{extra(r)}</div>}
                  </>
                )}
              />
            </g>
          );
        })}
      </svg>
      <TableView head={['', ...series, ...(extraHead ? [extraHead] : [])]} rows={rows.map(r => [r.name, ...r.f1, ...(extra ? [extra(r)] : [])])} />
    </Frame>
  );
}
