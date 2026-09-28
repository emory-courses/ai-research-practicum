---
title: AI Ethics
description: 'Where AI tools belong in your writing process, and why hallucinated citations are grounds for a zero.'
---

# AI Ethics

AI tools can genuinely help you write, but they can also quietly damage the one thing a research paper cannot survive without: trustworthy claims about what other work actually says. This section covers where AI use is fine in your writing process, where it is not, why the line falls where it does, and what happens if you cross it.

## Where AI Fits in Your Writing Process

Not all AI use carries the same risk. The distinction is not "AI vs. no AI" but whether the AI is touching something that must not be.

* **Generally fine:** improving sentence flow, fixing grammar, rephrasing an awkward paragraph you already wrote, brainstorming structure, explaining a concept back to you so you can check your own understanding.
* **Never fine:** asking an AI tool to find papers for you, generate a reference list, summarize a paper you have not read and then citing that summary as if you read it, or "clean up" your bibliography's formatting.

The reason these are different: prose style has no truth value to get wrong, but a citation is a factual claim that a specific paper exists, said a specific thing, and appeared in a specific venue. AI tools are fluent at producing text that looks correct in either case, but only one of those cases has a "correct" to get wrong.

:::info
If you are ever unsure whether a particular use falls on the fine side or not, ask yourself: "if this turns out to be wrong, does it embarrass me stylistically, or does it invalidate a claim in my paper?" The first is a style question. The second is a citation question, and citation questions default to not fine.
:::

## Why Hallucinated Citations Are the Bright Line

LLMs are fluent, not factual, when it comes to citations. They will produce a plausible-looking author list, title, venue, and year for a paper that does not exist, or attribute real findings to the wrong paper, with the same confidence as a correct citation. There is no visual difference between a hallucinated reference and a real one in your bibliography.

This is why Related Work is the section where this policy bites hardest: its entire purpose is to give readers trustworthy background, and a single fabricated citation undermines that purpose for the whole section, not just one sentence.


## What This Means for You

* Every citation in your Related Work section must be to a paper you or a teammate has actually read.
* Do not ask an AI tool to "find papers about X" and cite what it returns. Use the databases from [Literature Review](/chapters/related_work/literature-review) instead and verify every entry yourself.
* Do not ask an AI tool to "clean up" or "format" your reference list. Reformatting is exactly where a fabricated detail (wrong year, wrong venue, merged authors) slips in unnoticed.
* Double-check every BibTeX entry against the paper's actual publication venue, not just against whatever autocomplete or citation-generator produced it.



## Conference Disclosure Norms

As of 2026, papers with hallucinated references are desk-rejected without review such that the submission never reaches a reviewer's queue. Separately, most major AI venues (ACL, NeurIPS, ICML, and others) now require an explicit disclosure statement describing any use of generative AI in preparing the submission, distinct from the ordinary acknowledgments section. The two policies target different things: disclosure is about transparency for AI-assisted work that is otherwise legitimate; desk rejection for hallucinated citations is about content that is simply false. This section is where the second failure mode is most likely to appear, because it is the section most tempting to offload to an AI tool.

:::info
When you write the final paper for this course, check the target venue's current author guidelines for its specific disclosure requirements, which are being updated frequently and vary by venue.
:::

## Verification

Papers submitted with this homework may be checked with [GPTZero](https://gptzero.me), a tool adopted by AI conferences to detect AI-generated and AI-organized content, including hallucinated citations. Treat this as a real check, not a formality: verify your references before submission, not after being flagged.

## Exercise

1. Exchange your team's current reference list with another team.
2. For every citation assigned to you, locate the actual paper (not a search-engine snippet) and confirm: the authors, the title, the venue, and the year all match, and the claim your teammates attributed to it is actually in the paper.
3. Flag any citation you cannot verify within a few minutes of searching — that difficulty is itself a signal worth reporting back to the citing team.
4. What made the unverifiable citations hard to check? Would that same difficulty have caught a hallucination, or let one slip through?
