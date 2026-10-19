---
title: Pivot Checkpoint
description: 'An in-class checkpoint to test project feasibility, check team chemistry, and commit to a scope for the rest of the semester.'
---

# Pivot Checkpoint

As you have pasted the planning phase, [Introduction](/chapters/introduction/task_selection) and [Related Work](/chapters/related_work/literature-review), the next chapters, [Approach](/chapters/approach/algorithms), [Experiments](/chapters/experiments/overview), and [Analysis](/chapters/analysis/overview), require real implementation. This **Pivot Checkpoint** is a single, structured class hour where your team takes an honest look at where the project stands and makes one explicit decision: **stay**, **narrow**, or **shift**.

:::info
A pivot is not a failure. Research projects rarely survive first contact with data and compute unchanged. The failure mode this checkpoint prevents is **drift**: continuing for weeks on a plan that no one on the team still believes in.
:::

## 1. Smoke Test

It is easy to feel that a project is on track and hard to know it. The smoke test replaces gut feeling with a short checklist: for each checkpoint, score your team **0** (not yet), **1** (partly), or **2** (yes). The total tells you, and the class, where the project really stands.

**Exercise:** As a team, score the ten checkpoints below. **2** requires that you can **show it on your screen right now**, not that you plan to or believe it works. When teammates disagree, take the lower score.

| # | Checkpoint | 0 (not yet) | 1 (partly) | 2 (yes) |
|:---:|:---|:---|:---|:---|
| 1 | **Dataset loads** | Not found or not accessible | Found or requested, but not loaded in code | Loads in code |
| 2 | **Data inspected** | Not looked at | Looked at a few examples | Checked examples, size, and labels, and they match your assumptions |
| 3 | **Data is sufficient** | Too little or too noisy to use | Usable with known workarounds, or license unclear | Enough clean data with usable splits |
| 4 | **Evaluation defined** | No metric chosen | Metric chosen but not justified for your question | Metric chosen and matches your research question |
| 5 | **Metric runs** | Not implemented | Implemented but not tested | Runs on a tiny (even hand-made) output and behaves sensibly |
| 6 | **Baseline identified** | No baseline | Candidates named, none chosen | Chosen, with code or a library located |
| 7 | **Baseline runs** | Not run | Runs with errors or only on part of the pipeline | Runs end to end on one example |
| 8 | **Approach is concrete** | Idea only | Outline, but open design questions remain | Every member can say what to implement next |
| 9 | **Compute is confirmed** | No access or no estimate | Access, but cost of a full run unknown | Access confirmed and a full run is affordable |
| 10 | **Contribution is clear** | Cannot say how it differs from related work | Differs, but vaguely | One sentence naming what the closest paper does not do |

Sum your scores for a total out of **20** (these bands are a guide for discussion, not a verdict):

* 17-20: On track. Likely **Stay**.
* 12-16: Real gaps. Likely **Narrow**, or **Stay** with a fix list.
* 0-11: At risk. Seriously consider **Narrow** or **Shift**.

**Discussion:** We look at the distribution of scores and the checkpoints most often missed, and discuss:

* Which checkpoints are weak across many teams, and what would fix them?
* What is the one thing that would raise the score the most in the next week?
* Are there any **blocker** (nothing downstream can work until it is fixed) or merely a gap?

Write down the 0s and 1s you will fix first, ranked by impact. They feed into the following exercises.

:::tip
Do not spend the scoring time debugging. If a checkpoint fails because something upstream is missing, score it 0 and move on; that is the finding.
:::

## 2. Limitations

The smoke test showed where the project stands today. Limitations look forward: what could derail you over the remaining weeks? For each risk below, score your team **0** (serious risk, no plan), **1** (known risk, with a workaround or plan), or **2** (low risk, or already handled). A higher total means a more resilient project.

**Exercise:** As a team, score the ten risks below. **2** requires that you can say **why** the risk is low, not just that you hope it is. When teammates disagree, take the lower score.

| # | Risk | 0 (serious, no plan) | 1 (known, with a plan) | 2 (low or handled) |
|:---:|:---|:---|:---|:---|
| 1 | **Time** | Remaining work clearly exceeds the remaining weeks | Tight, but you know what to cut | Fits comfortably, including other courses and deadlines |
| 2 | **Scope** | Many datasets, models, or settings, with no priority order | Ordered, but all still planned | A minimum set is defined, with the rest as stretch goals |
| 3 | **Data** | Needs labeling, cleaning, or collection that no one has started | Needs more work, and someone owns it | Ready to use as is |
| 4 | **Compute** | Plan needs more GPU hours, memory, or API budget than you can get | Enough, but only if runs are small or carefully planned | Comfortable margin for repeated runs and failures |
| 5 | **Knowledge** | Core methods or tools are new to everyone | New to some, and a teammate or resource can help | Someone on the team has used them before |
| 6 | **Evaluation** | The metric may not reflect real quality, and there is no alternative | Known weakness, with a backup (e.g., manual check) | Metric is standard or well justified for the task |
| 7 | **Novelty** | Closest work may already do what you plan | Overlaps, but you can differentiate | Clear gap that the closest work leaves open |
| 8 | **Dependencies** | A model, API, or teammate you do not control is essential | Depends on one, with a fallback | Fully within your control |
| 9 | **Negative result** | If the approach does not beat the baseline, there is no paper | Still a paper, but a weak one | A negative or mixed result is still informative |
| 10 | **Ethics and compliance** | Privacy, licensing, or sensitive-data issues not yet checked | Issues known and being handled | Checked, with nothing outstanding |

Sum your scores for a total out of **20**:

* 17-20: Low risk. Likely **Stay**.
* 12-16: Manageable if the plans hold. Likely **Narrow**, or **Stay** with mitigations.
* 0-11: High risk. Seriously consider **Narrow** or **Shift**.

For every **0** and **1**, write one line on the mitigation or the early warning sign you will watch for. Any **0** must be addressed in the [Pivot Decision](#4-pivot-decision).

**Discussion:** We look at the distribution of scores and the risks most often scored low, and discuss:

* Which risks are shared across many teams, and could the class address them together?
* Which low scores are risks you can plan around, and which are ones you cannot?
* Which single risk, if it happened, would hurt your team the most?

## 3. Team Chemistry

A project can be technically sound and still fail because the team cannot work together. Surface problems now, while they are small.

**Exercise:** Each member scores the ten statements below on their own, **privately and without discussing**: **0** (rarely true), **1** (sometimes true), or **2** (consistently true). Answer for how the team works today, not how you hope it will.

| # | Statement |
|:---:|:---|
| 1 | Our meetings are regular and productive. |
| 2 | Everyone knows what they own. |
| 3 | The workload has been divided fairly. |
| 4 | Teammates respond and deliver on the timeline they promised. |
| 5 | We share updates and blockers early, not at the last minute. |
| 6 | I feel comfortable disagreeing with my teammates. |
| 7 | When we disagree, we resolve it rather than avoid it. |
| 8 | We make decisions quickly and stick to them. |
| 9 | Each of us could state our research question the same way. |
| 10 | I am still excited about this project. |

Sum your own scores for a total out of **20**, then compute the **team score** as the average of all members' totals:

* 17-20: Healthy. Keep your current habits.
* 12-16: Some friction. Fix the lowest-scoring statements now.
* 0-11: Needs attention. Talk to the instructor about how to reset.

**Team discussion:** Share only your **lowest-scoring statements**, not your individual totals, and agree on:

* One thing to **start** doing, **stop** doing, and/or **keep** doing.
* Who owns what for the next two weeks, written explicitly by name.

**Class discussion:** Teams report only their **team score** and the statement number scored lowest, with no names and no individual ratings. We look at the distribution and discuss:

* Which statements are weak across many teams?
* What practices have worked for teams that scored high?
* What is one habit your team can change this week?

:::tip
Contribution percentages on [team assignments](/chapters/getting_started/syllabus#team-grading) will matter more as the paper grows, so make sure expectations are clear now.
:::

## 4. Pivot Decision

Now use your three scores to make one decision: **stay**, **narrow**, or **shift**.

| Smoke Test | Limitations | Team Chemistry |
|:---:|:---:|:---:|
| / 20 | / 20 | / 20 |

Your **lowest** score is the one most likely to sink the project, so it leads the decision:

| Lowest score | What it suggests |
|:---:|:---|
| 17-20 | **Stay.** Keep the plan and watch for the early warning signs you listed. |
| 12-16 | **Stay with a fix list**, or **Narrow** if the weak spot is data, compute, or time. |
| 0-11 | **Narrow** or **Shift.** If it is Team Chemistry, fix how you work together first and choose the smaller scope. |

These suggestions are a starting point, not a rule. If you choose differently, say why.

**Exercise:** Choose exactly one option, and justify it in 3-4 sentences citing your scores, especially your 0s.

| Option | When it fits | What you commit to |
|:---|:---|:---|
| **Stay** | Scores are mostly high, no 0 is left unaddressed, and the team is functioning. | Keep the current plan, and name the first milestone and who owns it. |
| **Narrow** | The goal is still right, but data, compute, or time make the full scope unrealistic. | A reduced scope: fewer datasets, models, languages, or settings, while keeping a clear contribution. |
| **Shift** | The novelty, feasibility, or interest is fundamentally in doubt. | A new research question or task, reusing as much of your literature review and tooling as possible. |

Then complete these items:

1. **Updated research question** in one sentence (even if unchanged), with the one sentence on what it contributes that the closest related paper does not.
2. **Minimum viable result:** the smallest experiment that would still make a defensible paper.
3. **Stretch goals** you will attempt only if the minimum is done.
4. **Plan B:** what you will cut first if things slip again.
5. **Milestones** for the next two weeks, leading to the [Approach](/chapters/approach/algorithms) presentation.

**Discussion:** Each team states its decision (Stay, Narrow, or Shift) in one word. We look at the split and discuss:

* Which teams chose differently from what their scores suggested, and why?
* What did teams that narrowed decide to cut?
* What is the first thing each team will do tomorrow?

:::caution
Choosing **Shift** this late is allowed, but the bar is high: only about eight weeks remain until the poster presentations. Talk to the instructor before leaving class so the new plan can be sanity-checked.
:::

## 5. Pivot Sheet

Submit one sheet per team on Canvas, containing:

1. Team members present.
2. **Smoke Test**: the ten scores, the total out of 20, and the 0s and 1s you will fix first.
3. **Limitations**: the ten scores, the total out of 20, and a one-line mitigation for every 0 and 1.
4. **Chemistry**: the team score out of 20, the lowest-scoring statement numbers, the start / stop / keep items, and the two-week ownership list. Individual ratings stay with each member and are not submitted.
5. **Decision**: the three scores, Stay, Narrow, or Shift with your justification, and the updated research question with its one-sentence contribution, minimum viable result, stretch goals, Plan B, and milestones.
6. **Questions for the instructor.**
