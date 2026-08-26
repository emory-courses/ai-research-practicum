---
title: Algorithm Development
description: 'This chapter discusses how to develop new algorithms and write them in pseudocode.'
---

# Algorithm Development

## Task

Your task is to design an algorithm that takes a post with the title and its comments with replies from a discussion forum (e.g., Reddit) and converts them into a multi-turn one-to-one dialogue.

### Input

A post with the title ([https://www.reddit.com/r/college/comments/v7h9rs](https://www.reddit.com/r/college/comments/v7h9rs)):

> **How do you focus when you’re depressed?**
>
> I have so many assignments due, with exams coming up too. Life's just keeps hitting me recently and I'm finding it really hard to sit down and take information in. Writing is hard, listening and paying attention is hard. Even if I manage to listen or read none of the information stays in my head. Any help is very appreciated!!

Comments and replies:

> Get up early everyday and use the library to study if you have one, idk if you're like me but as soon as I get home I'm kinda done for the day so it helps to stay somewhere where you can't really relax.
>
> * Thank you, I’ll give this a try tomorrow

> What helps me is embracing when I'm feeling down and allowing myself to take a deserved break. Sometimes I confuse my depressive episodes with burnout and it's important to know your limits. The biggest pro tip to not be overwhelmed with so much to do all at once is doing something every day. Dedicating simply 30 minutes to an hour a day of intense studying goes a long way over time vs cramming at the end. If you're able to do more than 1 hour then great! But know that you don't have to do 6-7 intense studying hours a day to be successful. Be intentional with your time and work smarter vs harder. Your future self will thank you.
>
> * This is so nice to hear, and very helpful, thank you!

> Hardest part is starting to study, once I have like 15 minutes into my study session that’s my only focus and just forget everything else.

### Overview

Give a comparison overview of your algorithms with key features:

> We introduce two algorithms for the reddit-to-dialogue generation: the baseline algorithm considers every sentence in the post an utterance of Speaker 1 and each comment an utterance of Speaker 2  (Section 3.1), whereas the advanced algorithm finds an appropriate span of sentences from the post to form an utterance for Speaker 1 and an appropriate span of any comment to form an utterance for Speaker 2 (Section 3.2).

Indicate the objective of your algorithm(s):

> The main objective is to generate a multi-turn dialogue using a post, its comments, and replies that flows naturally in context.

Describe what the input and output data should be (possible with a figure) that are commonly applied to all algorithms:

> All algorithms assume that the number of sentences in the input post is less than or equal to the number of comments. The generated dialogues involve two speakers where utterances of Speakers 1 and 2 are extracted from the post and comments, respectively.

## Baseline

### Objective

* The title or each sentence in the post is considered an utterance of Speaker 1 (`S1`).
* For each utterance $$u_1$$ of `S1`, find a comment that is the most relevant and make it the response to $$u_1$$ from Speaker 2 (`S2`).

### Output

> `S1` : How do you focus when you’re depressed?
>
> `S2` : What helps me is embracing when I'm feeling down and allowing myself to take ...
>
> `S1` : I have so many assignments due, with exams coming up too.
>
> `S2` : Get up early everyday and use the library to study if you have one, ...
>
> `S1` : Life's just keeps hitting me recently and I'm finding it really hard to sit down and take information in.
>
> `S2` : Hardest part is starting to study, once I have like 15 minutes into my study session that’s my only focus and just forget everything else.

### Algorithm

1. Illustrate the baseline algorithm in pseudocode. Create helper methods if they help the readability and/or generalizability of your algorithm.
2. Give a brief overview of the algorithm by explaining what each line of the code does.
3. Describe helper methods (if any) in detail.

[Algorithm - Baseline](/img/approach/algo-baseline.pdf)

#### Overview

Define the input:

> Let $$P = [p_1, .., p_n]$$be an input post where $$p_i$$ is the $$i$$'th sentence in $$P$$, and $$\mathbb{C} = \{C_1, .., C_m\}$$ be a set of $$P$$'s comments such that $$C_j = [c_{j1}, .., c_{j\ell}]$$ where $$C_j$$ is the $$j$$'th comment in $$\mathbb{C}$$ and $$c_{jk}$$ is the $$k$$'th sentence in $$C_j$$.

:::warning
Is the input correctly described according to the objective?
:::

Initialize the output and auxiliary data structures:

> Let $$D$$ be the list of utterances representing the output dialogue (`L1`) and $$T$$ be a set of segments created from $$\mathbb{C}$$ (`L2`).

Describe the loop:

> The algorithm visits every sentence $$p_0 \in P$$ (`L3`) and appends it to $$D$$ (`L4`). It then finds the most-relevant segment $$\hat{t} \in T$$ (`L5`) and adds $$\hat{t}$$ to $$D$$ (`L6`).$$T$$ gets trimmed with $$\hat{t}$$ (`L7`).

Return the output:

> Finally, it returns $$D$$ as the output (`L8`).

#### Helper Methods

Describe the $$\textit{first}$$ method:

> The $$\textit{first}$$ method removes and returns the first sentence in $$P$$.

Describe the $$\textit{segment}$$ method:

> The $$\textit{segment}$$ method makes each comment a segment s.t. $$\textit{segment}(\mathbb{C}) = \{C'_1, \ldots, C'm\}$$_, where_ $$C'j = c_{j1}\,^\frown ...^\frown c_{j\ell}$$ ($$^\frown$$: text concatenation).

Describe the $$\textit{ranker}$$ method:

> The $$\textit{ranker}$$ method takes $$D$$ comprising all previous utterances and $$p_i$$, then estimates the likelihood of $$t$$ being the next utterance.

:::warning
How do you estimate such likelihoods? 
:::

Describe the $$\textit{trim}$$ method:

> the $$\textit{trim}$$ method removes $$\hat{t} = C'_j$$ from $$T$$ such that $$\textit{trim}(T, \hat{t}) = T \setminus {C'_j}$$.

## Advanced (Exercise)

### Objective

* Any span of consecutive sentences is considered an utterance of `S1`.
* For each utterance $$u_1$$ of `S1`, find a span of any consecutive sentences in comments that is the most relevant and make it the response to $$u_1$$ from `S2`.

### Output

> `S1` : How do you focus when you’re depressed? I have so many assignments due, with exams coming up too.
>
> `S2` : What helps me is embracing when I'm feeling down and allowing myself to take a deserved break.
>
> `S1` : Life's just keeps hitting me recently and I'm finding it really hard to sit down and take information in.
>
> `S2` : Get up early everyday and use the library to study if you have one, idk if you're like me but as soon as I get home I'm kinda done for the day so it helps to stay somewhere where you can't really relax.
>
> `S1` : Writing is hard, listening and paying attention is hard.
>
> `S2` : Hardest part is starting to study, once I have like 15 minutes into my study session that’s my only focus and just forget everything else.
>
> `S1`: Even if I manage to listen or read none of the information stays in my head. Any help is very appreciated!!
>
> `S2`: Sometimes I confuse my depressive episodes with burnout and it's important to know your limits. The biggest pro tip to not be overwhelmed with so much to do all at once is doing something every day.

[Algorithm - Advanced](/img/approach/algo-exercise.pdf)
