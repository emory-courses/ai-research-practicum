import React, {useRef, useState} from 'react';
import './analysis.css';

export const SERIES = ['var(--viz-1)', 'var(--viz-2)', 'var(--viz-3)'];
export const SLICES = [...SERIES, 'var(--viz-4)'];

// Shared hover layer: tip(content) returns pointer/focus handlers that place one tooltip.
export function useTip() {
  const ref = useRef(null);
  const [tip, setTip] = useState(null);
  const tipFor = content => ({
    onPointerMove: e => {
      const r = ref.current.getBoundingClientRect();
      setTip({x: e.clientX - r.left, y: e.clientY - r.top, content});
    },
    onFocus: e => {
      const r = ref.current.getBoundingClientRect();
      const t = e.currentTarget.getBoundingClientRect();
      setTip({x: t.left - r.left + t.width / 2, y: t.top - r.top, content});
    },
    onPointerLeave: () => setTip(null),
    onBlur: () => setTip(null),
    tabIndex: 0,
  });
  const tipEl = tip && (
    <div className="viz-tip" style={{left: Math.min(tip.x + 12, (ref.current?.clientWidth || 600) - 200), top: tip.y + 12}}>
      {tip.content}
    </div>
  );
  return {ref, tipFor, tipEl, hide: () => setTip(null)};
}

export function Legend({items}) {
  return (
    <div className="viz-legend">
      {items.map((m, i) => (
        <span key={m}><span className="viz-key" style={{background: SERIES[i]}} />{m}</span>
      ))}
    </div>
  );
}

// Accessible table view: every value on the chart is reachable without hovering.
export function TableView({head, rows}) {
  return (
    <details>
      <summary>Table view</summary>
      <table>
        <thead><tr>{head.map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
    </details>
  );
}

export function Frame({title, children, frameRef, tipEl, note}) {
  return (
    <div className="viz" ref={frameRef}>
      <div className="viz-title">{title}</div>
      {children}
      {note && <div className="viz-note">{note}</div>}
      {tipEl}
    </div>
  );
}
