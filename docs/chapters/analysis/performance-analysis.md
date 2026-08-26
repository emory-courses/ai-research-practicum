---
title: Performance Analysis
description: 'This section gives a detailed analysis in performance.'
---

# Performance Analysis

Once you have shown the overall performance of your models in the [Experiments](/chapters/experiments/overview) section, you need to give a more detailed analysis.

:::info
You should consider any quantitative analysis not involving manual annotation in this section that can emphasize the significance of your novel approach. Qualitative analysis is provided in the [Error Analysis](/chapters/analysis/error-analysis) section.
:::

## By Labels

If your task involves multi-class classifiction, it is good to show how your model performs for each label. Label distributions play an important role in this analysis because most machine learning algorithms tend not to perform well for labels with small distributions. Once you present the table, explain why your model does not perform well on certain labels.

<figure>
<img src={require("/img/analysis/label-analysis.jpg").default} alt="Excerpted from Vaidya et al., LAW, 2011." />
<figcaption>Excerpted from Vaidya et al., LAW, 2011.</figcaption>
</figure>

:::info
Although the above example shows results from one model, it is better to show results from multiple models in comparisons.
:::

Label analysis can be presented by a confusion matrix if certain pairs of labels are getting confused more often than the others. Once you present the matrix, explain why certain labels are confused more than the others.

<figure>
<img src={require("/img/analysis/confusion-matrix.jpg").default} alt="Excerpted from Li et al., EMNLP, 2020." />
<figcaption>Excerpted from Li et al., EMNLP, 2020.</figcaption>
</figure>

## By Categories

If your data can be categorized into meaningful groups (e.g., challenging input, complex output), then provide the model performance on each category and explain why your models perform well (or not well) on certain groups.

<figure>
<img src={require("/img/analysis/category-analysis.jpg").default} alt="Excerpted from He and Choi, IWPT, 2021." />
<figcaption>Excerpted from He and Choi, IWPT, 2021.</figcaption>
</figure>

## Speed Analysis

If the model speed is one of your contributions, group data with respect to different sizes and explain for which groups your model shows strength. The model speed should be adequately profiled by making sure it is not interrupted by other processes.

<figure>
<img src={require("/img/analysis/speed-analysis.jpg").default} alt="Excerpted from Choi and Palmer, ACL, 2011." />
<figcaption>Excerpted from Choi and Palmer, ACL, 2011.</figcaption>
</figure>

:::info
You should measure the speed multiple times, remove outliers, and present the average speeds to ensure the robustness.
:::

If the model speed can be measured theoratically by counting involved operations, show the plots and explain the overal trend.

<figure>
<img src={require("/img/analysis/transition-analysis.jpg").default} alt="Excerpted from Choi and McCallum, ACL, 2013." />
<figcaption>Excerpted from Choi and McCallum, ACL, 2013.</figcaption>
</figure>
