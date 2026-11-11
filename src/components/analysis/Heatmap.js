import React, {useState} from 'react';
import {Frame, TableView, useTip} from './Frame';
import {CONFUSION, LABELS} from './data';

export default function ConfusionMatrix() {
  const [offOnly, setOffOnly] = useState(false);
  const {ref, tipFor, tipEl} = useTip();
  const names = LABELS.map(l => l.name);
  const max = offOnly ? Math.max(...CONFUSION.flatMap((r, i) => r.filter((_, j) => j !== i))) : 100;
  return (
    <Frame
      title="Confusion matrix of FINE-TUNED (% of each gold label)"
      frameRef={ref}
      tipEl={tipEl}
      note="Rows are gold labels; columns are predictions. Hide the diagonal to see which pairs are confused."
    >
      <div className="viz-controls">
        <label><input type="checkbox" checked={offOnly} onChange={e => setOffOnly(e.target.checked)} /> Hide correct predictions</label>
      </div>
      <div className="viz-grid" style={{gridTemplateColumns: `90px repeat(${names.length}, 1fr)`}}>
        <div className="viz-head">gold ↓ / pred →</div>
        {names.map(n => <div className="viz-head" key={n}>{n}</div>)}
        {CONFUSION.map((row, i) => (
          <React.Fragment key={i}>
            <div className="viz-head" style={{justifyContent: 'flex-end', paddingRight: 8}}>{names[i]}</div>
            {row.map((v, j) => {
              const hidden = offOnly && i === j;
              const a = hidden ? 0 : Math.round((v / max) * 100);
              return (
                <div
                  key={j}
                  className="viz-cell"
                  style={{background: `color-mix(in srgb, var(--viz-1) ${a}%, transparent)`, color: a > 55 ? '#fff' : 'inherit'}}
                  aria-label={`${names[i]} predicted as ${names[j]}: ${v}%`}
                  {...tipFor(<><strong>{names[i]} → {names[j]}</strong><div>{v}% of {names[i]} messages</div></>)}
                >
                  {hidden ? '' : v}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <TableView head={['gold \\ pred', ...names]} rows={CONFUSION.map((r, i) => [names[i], ...r])} />
    </Frame>
  );
}
