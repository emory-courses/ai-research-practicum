---
title: Literature Review
description: 'Conduct a survey of previous work relevant to your research.'
---

# Literature Review

## Categorization

It is common to survey the literature for the following three categories:

* [Task](/chapters/related_work/literature-review#task)
* [Methodology](/chapters/related_work/literature-review#methodology)
* [Data](/chapters/related_work/literature-review#data)

:::info
These are general categories; feel free to make your own categorization as needed.
:::

## Task

Conduct a comprehensive survey of the most recent works (e.g., last 2-3 years) that show state-of-the-art results in your task. The survey should not be limited by a certain domain or dataset and should encompass a broad range of approaches and methodologies:

* Begin by examining the latest research papers and proceed by exploring their _Related Work_ and _Experiment_ sections for additional insights.
* Useful sites: [Papers with Code](https://paperswithcode.com), [ACL Anthology](http://aclanthology.org).

:::info
If you are the first to address this task, explore recent works related to similar tasks.
:::

> Many previous studies have shown remarkable results on YOUR TASK.
>
> Only a few works have tackled YOUR TASK.
>
> Although YOUR TASK has been underexplored, several works have been done on similar tasks.

Conduct comparative studies among previous works to identify their strengths and weaknesses. Describe each work briefly in 1-2 sentences, highlighting its unique contributions and differences from other approaches:

> CITATION was the first to adapt APPROACH to TASK.
>
> CITATION presented APPROACH/MODEL that showed the state-of-the-art results on DATA.

:::info
Use `/citet` instead of `/cite` in LaTex, which allows you to indicate the authors without parentheses.
:::

Describe the limitations of the previous works.

> Despite the great work, these models have CHALLENGES.

Explain how your work is distinguished from theirs and can potentially overcome such challenges:

> Our work is distinguished because REASONS that handle ISSUES better.

:::warning
Avoid citing a preprint version (e.g., arXiv) of a paper if it has been published in a peer-reviewed venue; instead, cite the published venue to ensure credibility, as papers on arXiv are not peer-reviewed and may have limited credentials.
:::

## Methodology

If you intend to apply existing methods or techniques from other tasks to your own, conduct a survey of significant works that have employed such methodologies across various tasks:

> YOUR METHOD has been sucessfully adapted to TASKS.

:::info
If you are the first to introduce this methodology, find papers using similar methods.
:::

Provide a brief 1-2 line description of each work and elucidate how these methods have contributed to the improvement of their respective tasks.

> CITATION used METHOD and signficantly improved ASPECTS of TASK.

Explain the reasons why these methods are likely to enhance specific aspects of your task:

> Given the great success of METHOD, we beileve it can enhance ASPECTS of YOUR TASK.

## Data

If you plan to adapt existing tasks or methods to a new domain or language, survey renowned works in that particular domain/language, irrespective of the tasks they address:

> Many recent studies have focused on DATA.

Provide a concise 1-2 line description for each work and highlight the key challenges or contributions they encountered while dealing with data from the specified domain/language:

> CITATION presented METHOD to tackle TASK on DATA and showed promising results.
>
> CITATION tackeled TASK on DATA and found CHALLENGES.

Clarify the importance of applying these findings to your task in the new domain/language, emphasizing the potential benefits and insights that can be gained from tackling such a cross-domain or cross-language challenge:

> Given the growing interest, many people will benefit if there is a robust model for YOUR TASK on DOMAIN/LANGUAGE.
