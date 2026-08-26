---
title: Models
description: 'This section describes models used for comparative study.'
---

# Models

## Descriptions

Describe existing models or frameworks commonly adopted by your models (if any):

> All our models adopt MODEL (CITATION) as the encoder.

List all models used for your experiments. Give a brief description of each model by referencing specific sections explaining the core methods used by the model:

> The following three models are experimented:
>
> * BASELINE: DESCRIPTION (Section #)
> * ADVANCED: BASELINE + METHOD (Section #)
> * BEST: ADVANCED + METHOD (Section #)

:::info
It is important to design models in a way that clearly shows key differences in methods.
:::

## Evaluation Metrics

Because a neural model produces a different result every time trained, you need to train it 3 \~ 5 times and report its average score with the standard deviation ([Section 5.3](/chapters/experiments/results)).

:::warning
Why would a neural model produce a different result every time it is trained?
:::

Thus, indicate how many times each model is trained and what is used as the evaluation metric(s):

> Every model is trained 3 times and its average F1-score and the standard deviation is used as the evaluation metric.

:::info
If you experiment on datasets used in previous work, you must use the same evaluation metrics for fair comparisons. Even if you present a new metric, you still need to evaluate both the old and new metrics to show the advantage of your new metric.
:::

If you use a non-standard metric that has not been used in previous work because:

* The task is new,
* The new aspect introduced for this task has never been tested before,
* You find a better way of evaluating this, which has not been used in the previous work

explain why you cannot apply standard metrics to evaluate this task and describe the new metric:

> Since TASK has not been evaluated on ASPECT(S) in prevoius work, we introduce new metrics ...

:::info
If your new evaluation metric is novel that requires bigger attention, explain it in the approach section so it would be considered one of the main contributions.
:::

## Experimental Settings

Describe hyper-parameters used to build the models (e.g., epoch, learning rate, hidden layer, optimizer, batch size):

> MODEL is trained for # epochs using the learning rate of FLOAT, ...

Explain anything special that you do for training:

> Early stop is adopted to control the number of epochs if the score on the development set does not improve over two epochs.

Describe computing devices used for the experiments:

> Our experiments use NVIDIA Titan RTX GPUs, which takes 10/20/30 hours for training the BASELINE/ADVANCED/BEST MODELS, respectively.

:::info
It is important to describe the experimental settings for replication, although they are often put in the appendix due to the page limit for the actual paper submission.
:::

## Development

If you observe enhanced training efficiency (e.g., your new loss function requires a fewer number of epochs to train), create a figure (e.g., x-axis: epochs, y-axis: accuracy) describing the training processes of the baseline and the enhanced models.

> Our ENHANCED MODEL reaches the same accuracy (or higher) than the BASELINE model after only a third of epochs.

If you experience unusual phenomena during training (e.g., results on the development set are unstable), describe the phenomena and analyze why they are happening:

<figure>
<img src={require("/img/experiments/figure-development.png").default} alt="Excerpted from Xu et al., BIONLP, 2020." />
<figcaption>Excerpted from Xu et al., BIONLP, 2020.</figcaption>
</figure>
