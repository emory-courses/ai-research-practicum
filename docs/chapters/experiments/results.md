---
title: Results
description: 'This section presents experimental results.'
---

# Results

## Tables

Create a table displaying experimental results from your [models](/chapters/experiments/models) on each [dataset](/chapters/experiments/datasets) and evaluation metric. The table should also include results from previous work directly comparable to yours.

![Excerpted from Xu and Choi, EMNLP 2020.](/img/experiments/table-experiments-results.png)

:::info
If the table is too large (e.g., taking more than 1/3 of the page), it may overwhelm the readers. In this case, shrink it by including only the critical results and put the rest in the appendix.
:::

Here are a few tips for creating the result table:

* Expand it to the full page if it consists of many columns.
* Use acronyms for the header titles if too long, and explain them in the caption.
* If space allows, include both the average scores and standard deviations. The standard deviation is usually notated by the plus-minus sign (e.g., $$\pm 0.1$$).
* Highlight the key results by making them bold.

:::info
Sometimes, it makes more sense to use multiple tables to present your results (e.g., working on multiple tasks), in which case, use a consistent scheme across the tables so they can be easily compared.
:::

## Interpretations

Once the result table is presented, you need to give an interpretation of the results. First, summarize the overall observations:

> Each model shows an incremental improvement over its predecessor.
>
> MODEL 2 shows a noticeable improvement over MODEL 1, indicating the effectiveness of our METHOD.
>
> The ADVANCED MODEL shows a significant improvement of #.#% from the BASELINE MODEL.

Then, describe any key findings:

> It is interesting that MODEL 2 shows better performance over MODEL 1 on DATASET 1 but the results are opposite on DATASET 2.

Give an interpretation for each key finding (and indicate a specific subsection in the [Analysis](/chapters/analysis/overview) section where further analysis is provided):

> It is likely because METHOD works well for ASPECTS in DATASET 1, but not necessairly for ASPECTS in DATASET 2 (Section #.#).

:::info
In general, high-level interpretations are provided in the Experiments section whereas more detailed analyses are provided in the Analysis section. These two sections, however, can be merged into one if the space is limited.
:::

Finally, explain any additional results that are not included in the table but help readers interpret this work better:

> It it worth mentioning that we also experimented with METHOD 1, which showed a similar result as METHOD 2.

:::info
The interpretation should not be simply reading the table. The main goal of this interpretation is to provide insights that are not so obvious to the readers by reading the table, but you learn from the period of this study.
:::
