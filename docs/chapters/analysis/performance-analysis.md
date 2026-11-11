---
title: Performance Analysis
description: 'This section gives a detailed analysis in performance.'
---

import {LabelAnalysis, ConfusionMatrix, CategoryAnalysis, SpeedAnalysis} from '@site/src/components/analysis';

# Performance Analysis

Once you have shown the overall performance in the [Results](/chapters/experiments/results) section, give a more detailed analysis that explains *where* and *why* your models differ. The aim of the Analysis section is to show what your models can and cannot do, so that researchers can make informed decisions in their next steps and in applications.

:::info
Include any quantitative analysis that does not involve manual annotation. Qualitative analysis goes in the [Error Analysis](/chapters/analysis/error-analysis) section.
:::

:::note Running example
All figures in this chapter use one example: **intent classification on customer-support messages** with three LLM-based models, following the incremental design in [Models](/chapters/experiments/models).

* ZERO-SHOT: a prompted LLM.
* FEW-SHOT: ZERO-SHOT + retrieved examples in the prompt.
* FINE-TUNED: FEW-SHOT + LoRA fine-tuning.

The numbers are illustrative; use your own.
:::

Start by stating which questions the analysis answers:

> To understand where FINE-TUNED improves over ZERO-SHOT, we analyze the results by labels (Section #.#), input categories (Section #.#), and speed (Section #.#).

## By Labels

For multi-class tasks, show the score of each label together with its distribution. Most models, including LLMs, perform worse on rare labels, so explain any label that stands out:

> All models perform worst on LABEL, which accounts for only #% of the training data.

<LabelAnalysis />

Show every model, not only the best one. If some pairs of labels are confused more often than others, add a confusion matrix and explain the pairs:

> LABEL 1 is often confused with LABEL 2 (#%) because REASON(S).

<ConfusionMatrix />

## By Categories

If your data forms meaningful groups (e.g., challenging inputs or complex outputs), report the score of each group and explain where each model is strong or weak:

> FINE-TUNED shows the smallest gain on CATEGORY, suggesting that METHOD does not help with ASPECT.

<CategoryAnalysis />

## Speed Analysis

If speed or cost is one of your contributions, group the data by input size and report latency (or throughput, or cost per request) for each model:

> FINE-TUNED is #x faster than FEW-SHOT on inputs of # tokens because MODEL is smaller and needs no retrieved examples in the prompt.

<SpeedAnalysis />

:::tip
Measure several times after a warm-up, report the median (and a tail percentile such as p95), and make sure no other process interferes. For API-based models, state the date and the model version since both change over time.
:::
