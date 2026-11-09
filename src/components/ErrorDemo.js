import React, {useState} from 'react';

// Toy error distribution (illustrative only).
const ERRORS = [
  {name: 'Coreference', pct: 38, source: 'Model', example: 'Resolves "she" to the wrong speaker in a 3-party dialogue.', cause: 'No explicit speaker tracking; relies on recency.'},
  {name: 'Negation', pct: 27, source: 'Model', example: '"I don\'t think it\'s bad" is labeled negative.', cause: 'Training data has few negation examples.'},
  {name: 'Annotation noise', pct: 21, source: 'Data', example: 'Two annotators disagree on the gold label of the same sentence.', cause: 'Guideline is ambiguous for sarcasm.'},
  {name: 'Ambiguous input', pct: 14, source: 'Task', example: '"Great, just great." has no context to tell sarcasm from praise.', cause: 'Even humans cannot decide without more context.'},
];
const COLORS = {Model: '#2e6fd8', Data: '#d98e04', Task: '#7b5ea7'};

export default function ErrorDemo() {
  const [sel, setSel] = useState(0);
  const e = ERRORS[sel];
  return (
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: 16, margin: '16px 0'}}>
      <strong>Try it: click an error type</strong>
      <div style={{margin: '12px 0'}}>
        {ERRORS.map((x, i) => (
          <div key={x.name} onClick={() => setSel(i)} style={{display: 'flex', alignItems: 'center', cursor: 'pointer', margin: '4px 0', opacity: i === sel ? 1 : 0.55}}>
            <span style={{width: 140}}>{x.name}</span>
            <span style={{height: 18, width: `${x.pct * 3}px`, background: COLORS[x.source], borderRadius: 3}} />
            <span style={{marginLeft: 8}}>{x.pct}%</span>
          </div>
        ))}
      </div>
      <div><span style={{color: COLORS[e.source], fontWeight: 600}}>{e.source} error</span> · {e.name} ({e.pct}%)</div>
      <div><em>Example:</em> {e.example}</div>
      <div><em>Cause:</em> {e.cause}</div>
      <small>Color = source of the error: <span style={{color: COLORS.Model}}>model</span>, <span style={{color: COLORS.Data}}>data</span>, <span style={{color: COLORS.Task}}>task</span>.</small>
    </div>
  );
}
