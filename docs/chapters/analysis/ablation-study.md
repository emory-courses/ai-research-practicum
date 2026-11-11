---
title: Ablation Study
description: 'This section analyzes the contribution of each design choice.'
---

import {AblationDemo, AblationByCategory, AblationCases, CostBenefit} from '@site/src/components/analysis';

# Ablation Study

An ablation study asks, for each method in your approach: *does it matter, where, why, and at what cost?* Reporting the drop in score answers only the first question. The analysis is in the other three.

:::info
The BASELINE → ADVANCED → BEST design in [Models](/chapters/experiments/models) already gives a first view. Use this section to analyze each method individually; if you have nothing beyond that, merge it into Experiments.
:::

Start by stating the methods and the questions:

> We analyze METHOD 1 (Section #.#) and METHOD 2 (Section #.#) by removing each from BEST while keeping everything else fixed, and ask where each helps, why, and at what cost.

## Contribution

Report how much each method contributes, alone and together:

> Removing METHOD 1 drops F1 by #.#%, whereas removing METHOD 2 has little effect, suggesting that METHOD 1 is the key contributor.

<AblationDemo />

## Where It Helps

Break the gain down by the labels or categories from the [Performance Analysis](/chapters/analysis/performance-analysis). Each method should have a distinct profile:

> METHOD 1 mainly improves CATEGORY 1 (+#.#), whereas METHOD 2 mainly improves CATEGORY 2 (+#.#), suggesting that they address different weaknesses.

<AblationByCategory />

## Why It Helps

Show a few inputs that each method fixes (or fails to fix), and explain the mechanism. This is where you test whether the method works for the reason you claimed:

> Without METHOD, the model predicts LABEL for "INPUT" because REASON. With METHOD, it predicts LABEL because MECHANISM.

<AblationCases />

## Cost and Benefit

State what each method costs and whether the gain justifies it:

> METHOD 1 adds #.# F1 at the cost of RESOURCE, whereas METHOD 2 adds #.# F1 at no extra cost.

<CostBenefit />

:::tip
Change one factor at a time so each difference is attributable, and also remove the methods together if they may overlap. Keep only the ablations that support a claim in your paper.
:::
