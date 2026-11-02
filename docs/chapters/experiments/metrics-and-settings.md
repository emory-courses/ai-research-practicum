---
title: Metrics & Settings
description: 'This section describes evaluation metrics, experimental settings, and the model development process.'
---

# Metrics & Settings

## Evaluation Metrics

Because a neural model produces a different result every time trained, you need to train it 3 \~ 5 times and report its average score with the standard deviation (see [Results](/chapters/experiments/results)).

:::warning
Why would a neural model produce a different result every time it is trained?

Hint: random weight initialization, data shuffling, and dropout all involve randomness.
:::

Thus, indicate how many times each model is trained and what is used as the evaluation metric(s):

> Every model is trained 3 to 5 times (with different random seeds) and its average F1-score and the standard deviation is used as the evaluation metric.

:::info
If you experiment on datasets used in previous work, you must use the same evaluation metrics for fair comparisons. Even if you present a new metric, you still need to evaluate both the old and new metrics to show the advantage of your new metric.
:::

If you use a non-standard metric that has not been used in previous work because:

* The task is new,
* The new aspect introduced for this task has never been tested before,
* You find a better way of evaluating this, which has not been used in the previous work

explain why you cannot apply standard metrics to evaluate this task and describe the new metric:

> Since TASK has not been evaluated on ASPECT(S) in previous work, we introduce new metrics ...

:::info
If your new evaluation metric is novel that requires bigger attention, explain it in the approach section so it would be considered one of the main contributions.
:::

Define each metric with proper mathematical notation (e.g., $$F_1 = \frac{2PR}{P + R}$$), justify why it suits your task, and discuss its limitations if any (e.g., accuracy can be misleading on imbalanced labels):

> We use macro-averaged F1-score because the label distribution is highly skewed; however, it does not account for ASPECT.

## Experimental Settings

Describe hyper-parameters used to build the models (e.g., epoch, learning rate, hidden layer, optimizer, batch size):

> MODEL is trained for # epochs using the learning rate of FLOAT, ...

Explain anything special that you do for training:

> Early stop is adopted to control the number of epochs if the score on the development set does not improve over two epochs.

Describe the software environment, including the frameworks and their versions, and the random seeds used:

> Our models are implemented in PyTorch 2.x using HuggingFace Transformers 4.x; the random seeds are 0, 1, and 2.

Describe computing devices used for the experiments:

> Our experiments use NVIDIA Titan RTX GPUs, which takes 10/20/30 hours for training the BASELINE/ADVANCED/BEST MODELS, respectively.

:::info
It is important to describe the experimental settings for replication, although they are often put in the appendix due to the page limit for the actual paper submission. If possible, state that your code and data will be released, and provide a link.
:::

## Development

If you observe enhanced training efficiency (e.g., your new loss function requires a fewer number of epochs to train), create a figure (e.g., x-axis: epochs, y-axis: accuracy) describing the training processes of the baseline and the enhanced models.

> Our ENHANCED MODEL reaches the same accuracy (or higher) than the BASELINE model after only a third of epochs.

If you experience unusual phenomena during training (e.g., results on the development set are unstable), describe the phenomena and analyze why they are happening:

<figure>
<img src={require("/img/experiments/figure-development.png").default} alt="Excerpted from Xu et al., BIONLP, 2020." />
<figcaption>Excerpted from Xu et al., BIONLP, 2020.</figcaption>
</figure>

Finally, describe the key decisions and modifications you made during development (e.g., a different optimizer, a revised data filter), the challenges you encountered, and how you resolved them:

> Training initially diverged with the learning rate of FLOAT; lowering it to FLOAT and adding warm-up for # steps stabilized the training.
