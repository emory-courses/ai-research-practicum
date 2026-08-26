---
title: Datasets
description: 'This section describes datasets used for the experiments.'
---

# Datasets

## Data Selection

If there are datasets for your task that have been widely used by previous work, you need to test your models on them for fair comparisons. For each dataset, briefly describe the dataset:

> For our experiments, DATASET is used (CITATION) to evaluate our MODEL.

If it is not widely used but appropriate to evaluate your approach, explain why it is selected:

> For our MODEL, the DATASET is used (CITATION) because REASON(S). 

If it is a new dataset that you create, briefly mention it and reference the section describing how the dataset is created (e.g., [Data Creation](/chapters/approach/resources)):

> All our models are evaluated on the EXISTING DATASET (CITATION) as well as YOUR DATASET (Section #).

:::info
It is always better to experiment with multiple datasets to validate the generalizability of your approach.
:::

## Data Split

Your work is not comparable to previous work unless it uses the same data split. Indicate which previous work you follow to split the training, development, and evaluation sets:

> The same split as CITATION is used for our experiments.

:::info
During the development (including hyper-parameter tuning), your model should be trained on the training set and tested on the development set (aka. validation set).
:::

:::info
While you are training, you should frequently check the performance of your model (usually once every epoch) and save the model that gives the highest performance on the development set.
:::

:::info
Once the training is done, your best model (on the development set) is tested on the evaluation set, and the results are reported in the paper.
:::

If a new dataset is used, you need to create your own split. If the dataset has:

* < 1K instances, use $$n$$-fold [cross-validation](https://en.wikipedia.org/wiki/Cross-validation_\(statistics\)) for evaluation ($$n = [4, 5]$$).
* \[1K, 10K] instances, use the 75/10/15 split for the training/development/evaluation sets.
* \> 10K instances, use the 80/10/10 split.

:::info
It is important to create training, development, and evaluation sets that follow similar distributions (in terms of labels, etc.) as the entire data.
:::

:::warning
Cross-validation is typically used for development, and for evaluation. However, when the data is not sufficiently large, the evaluation set becomes too small, which can cause many variants in the model performance tested on the set. Thus, cross-validation is used to average out the variants.
:::

Once you split the data, create a table describing the distribution and statistics of each set. This table should include all necessary statistics to help researchers understand your experimental results (e.g., how many entities per sentence for named entity recognition, how many questions per document for question answering).

![Excerpted from Yang and Choi, SIGDIAL 2019.](/img/experiments/dataset-example-1.png)

![Excerpted from Li et al., EMNLP, 2020.](/img/experiments/dataset-example-2.png)

:::info
If it is unclear how the data is split from the previous work, contact the authors. If the authors do not respond, create your own split and describe the datasets.
:::
