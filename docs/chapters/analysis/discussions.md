---
title: Discussions
description: 'This section discusses limitations and the future direction of this research.'
---

# Discussions

## Limitations

State what your approach cannot do, each backed by evidence from your analysis. Consider three dimensions:

* **Technicality**: what hinders accuracy or scalability?
* **Robustness**: how reliable and generalizable are the results?
* **Applicability**: what prevents real-world adoption?

> Our approach is limited to DOMAIN because REASON (Section #.#), and its performance degrades on CATEGORY (Section #.#).

| Weak | Strong |
|:---|:---|
| "Our model could be improved with more data." | "FINE-TUNED reaches only 62.0 F1 on Other, which covers 6% of the training data (Section #.#)." |
| "Results may not generalize." | "We tested only English support messages from one retailer; other languages and domains are unknown." |
| "LLMs are expensive." | "FEW-SHOT takes 3.6 s per 1K-token request, which is too slow for live chat (Section #.#)." |

:::info
Honest, specific limitations make your work more credible. They also help readers decide when to use your approach.
:::

## Conference Requirements

Many venues now require limitations, so treat this as a core part of your paper, not an afterthought:

| Venue | Requirement |
|:---|:---|
| ACL, EMNLP, NAACL, EACL (via [ACL Rolling Review](https://aclrollingreview.org/authorchecklist)) | A section titled **Limitations** is mandatory, placed after the conclusion and before the references, and it does not count toward the page limit. It may contain only the discussion of limitations (no new experiments, figures, or analysis). Papers without it can be desk-rejected. A separate Responsible NLP Checklist must also be filled in honestly. |
| [NeurIPS](https://neurips.cc/Conferences/2026/EvaluationsDatasetsExtendedReviewerGuidelines) | The paper checklist asks whether you discuss the limitations of your work. Reviewers are told to reward, not penalize, honesty about limitations. |

:::warning
Requirements change every year. Always check the current call for papers and checklist of your target venue.
:::

For the course paper, write the limitations here in the Discussions section. If you submit to a conference that requires a standalone Limitations section, move it there and keep any new analysis in the Analysis section.

## Future Directions

For each major limitation, suggest what researchers can do to overcome it:

> To overcome LIMITATION, future work can explore METHOD, which may improve ASPECT.

:::tip
Stay concrete and tied to your findings. The [Conclusion](/chapters/conclusion_and_abstract/conclusion) is where you commit to your own next steps.
:::
