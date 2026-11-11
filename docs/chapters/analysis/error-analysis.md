---
title: Error Analysis
description: 'This section provides a quantitative and qualitative error analysis.'
---

import {ErrorDemo} from '@site/src/components/analysis';

# Error Analysis

Error analysis explains what your model gets wrong, how often, and why. Where the [Performance Analysis](/chapters/analysis/performance-analysis) tells you *where* the scores are low, this section reads the actual errors to tell you *what kind* of mistakes they are, and *which of them your approach can fix*.

## Sample

Read real errors, not just scores. Focus on the weak spots found in the performance analysis, and state how you sampled so readers can judge the result:

> We randomly sample # errors of MODEL, including all errors on CATEGORY, the weakest category in Section #.#.

## Categorize

Group the sampled errors manually into a small set of types (3-6) that do not overlap, and give each a name, a definition, and a signature example. Label where each error comes from:

* **Model**: the approach can fix it (e.g., missed context).
* **Data**: the gold label is wrong or inconsistent (e.g., annotation noise).
* **Task**: the input is ambiguous, or the task definition cannot express the answer.

:::tip
Have a second person categorize a subset and report the agreement, as you would for an annotation.
:::

## Quantify

Show the distribution of the types, and compare it across models. A pie chart suits this when there are only a few types that sum to 100%; use a bar chart for more than five.

> The most frequent error of MODEL is ERROR TYPE (#%), where the model fails to ASPECT, as in "EXAMPLE".

<ErrorDemo />

## Explain

For each major type, give an example, a cause, and what it implies. Then step back and ask what the distribution says about the approach as a whole:

> METHOD removes most of the errors of TYPE 1, but the remaining errors are mostly TYPE 2 and 3, which MODEL cannot fix. This suggests that the performance is approaching its ceiling on this data.

:::info
Do not stop at listing errors. A model error becomes a future direction, a data error becomes a limitation of the annotation, and a task error becomes a limitation of the task definition. Carry them into the [Discussions](/chapters/analysis/discussions) section.
:::
