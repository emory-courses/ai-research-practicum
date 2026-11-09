---
title: Performance Analysis
description: 'This section gives a detailed analysis in performance.'
---

# Performance Analysis

Once you have shown the overall performance of your models in the [Results](/chapters/experiments/results) section, you need to give a more detailed analysis. The aim of the Analysis section is to provide an in-depth look at what your models can and cannot do, so that researchers can make informed decisions in their next steps and in applications.

:::info
You should consider any quantitative analysis not involving manual annotation in this section that can emphasize the significance of your novel approach. Qualitative analysis is provided in the [Error Analysis](/chapters/analysis/error-analysis) section.
:::

Start by stating which questions the analysis answers, and refer back to the key findings in the [Interpretations](/chapters/experiments/results):

> To better understand why MODEL 2 outperforms MODEL 1 on DATASET 1 but not on DATASET 2, we analyze the results by labels (Section #.#), categories (Section #.#), and speed (Section #.#).

## By Labels

If your task involves multi-class classification, it is good to show how your model performs for each label. Label distributions play an important role in this analysis because most machine learning algorithms tend not to perform well for labels with small distributions. Once you present the table, explain why your model does not perform well on certain labels:

> MODEL performs poorly on LABEL, which accounts for only #% of the training data.

<figure>
<img src={require("/img/analysis/label-analysis.jpg").default} alt="Excerpted from Vaidya et al., LAW, 2011." />
<figcaption>Excerpted from Vaidya et al., LAW, 2011.</figcaption>
</figure>

:::info
Although the above example shows results from one model, it is better to show results from multiple models in comparisons.
:::

Label analysis can be presented by a confusion matrix if certain pairs of labels are getting confused more often than the others. Once you present the matrix, explain why certain labels are confused more than the others:

> LABEL 1 is often confused with LABEL 2 (#%) because REASON(S).

<figure>
<img src={require("/img/analysis/confusion-matrix.jpg").default} alt="Excerpted from Li et al., EMNLP, 2020." />
<figcaption>Excerpted from Li et al., EMNLP, 2020.</figcaption>
</figure>

## By Categories

If your data can be categorized into meaningful groups (e.g., challenging input, complex output), then provide the model performance on each category and explain why your models perform well (or not well) on certain groups:

> MODEL 2 shows the largest gain over MODEL 1 on CATEGORY, suggesting that METHOD is effective for ASPECT.

<figure>
<img src={require("/img/analysis/category-analysis.jpg").default} alt="Excerpted from He and Choi, IWPT, 2021." />
<figcaption>Excerpted from He and Choi, IWPT, 2021.</figcaption>
</figure>

## Speed Analysis

If the model speed is one of your contributions, group data with respect to different sizes and explain for which groups your model shows strength. The speed should be adequately profiled by making sure it is not interrupted by other processes.

<figure>
<img src={require("/img/analysis/speed-analysis.jpg").default} alt="Excerpted from Choi and Palmer, ACL, 2011." />
<figcaption>Excerpted from Choi and Palmer, ACL, 2011.</figcaption>
</figure>

:::info
You should measure the speed multiple times, remove outliers, and present the average speeds to ensure the robustness.
:::

If the model speed can be measured theoretically by counting involved operations, show the plots and explain the overall trend:

> MODEL 2 runs #x faster than MODEL 1 on inputs longer than # tokens, as its complexity is linear rather than quadratic in the input length.

<figure>
<img src={require("/img/analysis/transition-analysis.jpg").default} alt="Excerpted from Choi and McCallum, ACL, 2013." />
<figcaption>Excerpted from Choi and McCallum, ACL, 2013.</figcaption>
</figure>
