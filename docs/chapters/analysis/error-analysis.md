---
title: Error Analysis
description: 'This section provides a qualitative error analysis.'
---

# Error Analysis

It is important to understand what errors are produced by your model, how often those errors occur on which occasions, and what causes such errors. Error analysis should be done both quantitatively and qualitatively.

1. Sample instances that your model makes errors for. Focus on data portions that your performance analysis has questions about.
2. Categorize errors by analyzing them (manually) and pick signature examples.
3. Provide distributions of the categorized errors in a figure (see below).
4. Explain why the model makes certian errors with examples.

<figure>
<img src={require("/img/analysis/error-analysis.jpg").default} alt="Excerpted from Yang and Choi, SIGDIAL, 2019." />
<figcaption>Excerpted from Yang and Choi, SIGDIAL, 2019.</figcaption>
</figure>
