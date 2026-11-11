import React from 'react';
import GroupedBars from './GroupedBars';
import {LABELS, CATEGORIES} from './data';

export {default as SpeedAnalysis} from './LineChart';
export {default as ConfusionMatrix} from './Heatmap';
export {AblationDemo, AblationCases, CostBenefit, ErrorDemo} from './Demos';

export function LabelAnalysis() {
  return (
    <GroupedBars
      title="F1-score by label"
      rows={LABELS}
      extraHead="train share"
      extra={r => `${r.support}%`}
      note="Labels are sorted by their share of the training data: the rarer the label, the lower the F1-score for every model."
    />
  );
}

export function CategoryAnalysis() {
  return (
    <GroupedBars
      title="Accuracy by input category"
      rows={CATEGORIES}
      note="Multiple-intent messages are the hardest category for every model, and the gain from fine-tuning is the smallest there."
    />
  );
}

// Gain of each method per category, derived from the same category scores.
export function AblationByCategory() {
  const rows = CATEGORIES.map(c => ({name: c.name, f1: [c.f1[1] - c.f1[0], c.f1[2] - c.f1[1]]}));
  return (
    <GroupedBars
      title="Gain of each method by input category (F1 points)"
      rows={rows}
      series={['+ Retrieved examples', '+ LoRA fine-tuning']}
      max={20}
      signed
      note="LoRA adds more than retrieval in every category, and the gap is largest on typos and slang (+16 vs. +10)."
    />
  );
}
