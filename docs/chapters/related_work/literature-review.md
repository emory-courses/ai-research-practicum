---
title: Literature Review
description: 'Conduct a survey of previous work relevant to your research.'
---

# Literature Review

Related Work exists to give readers the background they need to understand your approach, not to catalog what others have published. A list of papers, however comprehensive, does not by itself tell a reader why your approach is worth trying. What does is showing, for each relevant line of prior work, what it could do, where it still fell short, and how your approach responds to that shortfall.

:::tip
Writing an extensive related work section is important because:

* It demonstrates your comprehension of the relevant field.
* It provides supporting evidence for your hypothesis.
* Reviewers appreciate relevant citations of their work.
:::


## Categorization

It is common to survey the literature for the following three categories:

* [Task](#task)
* [Methodology](#methodology)
* [Data](#data)

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

Describe the limitations of the previous works. This is where the group of papers you just described becomes evidence for one of your challenges, so state the limitation precisely enough that a reader could not mistake it for a different challenge:

> Despite the great work, these models have CHALLENGES.

Explain how your work is distinguished from theirs and can potentially overcome such challenges. Do this immediately after stating the limitation, in the same paragraph, so the reader sees your approach as the direct response to what you just showed them:

> Our work is distinguished because REASONS that handle ISSUES better.

:::warning
Avoid citing a preprint version (e.g., arXiv) of a paper if it has been published in a peer-reviewed venue; instead, cite the published venue to ensure credibility, as papers on arXiv are not peer-reviewed and may have limited credentials.
:::

## Methodology

If you intend to apply existing methods or techniques from other tasks to your own, conduct a survey of significant works that have employed such methodologies across various tasks:

> YOUR METHOD has been successfully adapted to TASKS.

:::info
If you are the first to introduce this methodology, find papers using similar methods.
:::

Provide a brief 1-2 line description of each work and elucidate how these methods have contributed to the improvement of their respective tasks.

> CITATION used METHOD and significantly improved ASPECTS of TASK.

Explain the reasons why these methods are likely to enhance specific aspects of your task — naming specifically what about your task makes the same mechanism plausible, not just successful elsewhere:

> Given the great success of METHOD, we believe it can enhance ASPECTS of YOUR TASK.

## Data

If you plan to adapt existing tasks or methods to a new domain or language, survey renowned works in that particular domain/language, irrespective of the tasks they address:

> Many recent studies have focused on DATA.

Provide a concise 1-2 line description for each work and highlight the key challenges or contributions they encountered while dealing with data from the specified domain/language:

> CITATION presented METHOD to tackle TASK on DATA and showed promising results.
>
> CITATION tackled TASK on DATA and found CHALLENGES.

Clarify the importance of applying these findings to your task in the new domain/language, emphasizing the potential benefits and insights that can be gained from tackling such a cross-domain or cross-language challenge:

> Given the growing interest, many people will benefit if there is a robust model for YOUR TASK on DOMAIN/LANGUAGE.

:::tip
Whichever lens a piece of evidence comes from, it should end up feeding one of your 2-3 challenges. By the end of the section, a reader should be able to list your challenges back to you, in your own terms, purely from having read the evidence you gave them. If a paper doesn't help make that case, it probably doesn't belong in this section.
:::

## Exercise

1. Assemble your team members.
2. Survey recent papers relevant to your task, categorizing them based on criteria such as task, methodology, data, etc.
3. For each paper, provide a concise overview of the main approach, highlighting its strengths and weaknesses.
4. Explain how your work is distinguished from the existing works, emphasizing the advantages and unique contributions of your approach.

:::info
A practical way of finding relevant papers is to start with one recent paper, collect the state-of-the-art papers cited in the paper (usually found in the Experiment section), branch out to those cited papers, and repeat this process recursively.
:::
