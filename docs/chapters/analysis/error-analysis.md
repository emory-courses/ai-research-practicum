---
title: Error Analysis
description: 'This section provides a quantitative and qualitative error analysis.'
---

import ErrorDemo from '@site/src/components/ErrorDemo';

# Error Analysis

Error analysis explains what your model gets wrong, how often, and why. It complements the [Performance Analysis](/chapters/analysis/performance-analysis) with manual inspection.

1. **Sample** errors, focusing on the portions your performance analysis questions (e.g., a weak label or category).
2. **Categorize** them manually and pick a signature example for each category.
3. **Quantify** the distribution of categories in a figure.
4. **Explain** each major category with an example and a cause:

> The most frequent error is ERROR TYPE (#%), where the model fails to ASPECT, as in "EXAMPLE". It likely occurs because REASON.

<ErrorDemo />

:::tip
For each category, say whether the error comes from the **model**, the **data** (e.g., annotation noise), or the **task** (e.g., inherently ambiguous input). Only model errors can be fixed by a better approach.
:::

<figure>
<img src={require("/img/analysis/error-analysis.jpg").default} alt="Excerpted from Yang and Choi, SIGDIAL, 2019." />
<figcaption>Excerpted from Yang and Choi, SIGDIAL, 2019.</figcaption>
</figure>
