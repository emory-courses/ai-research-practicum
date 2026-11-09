---
title: Ablation Study
description: 'This section analyzes the contribution of each design choice.'
---

import AblationDemo from '@site/src/components/AblationDemo';

# Ablation Study

An ablation study removes (or replaces) one design choice at a time while keeping everything else fixed, to show how much each choice contributes.

:::info
The BASELINE → ADVANCED → BEST design in [Models](/chapters/experiments/models) and the table in [Results](/chapters/experiments/results) already give a first view. Use this section for what they cannot show; if you have nothing more to add, merge it into Experiments.
:::

## Design

State what is ablated and how:

> We ablate METHOD 1 (Section #.#) and METHOD 2 (Section #.#) from BEST one at a time, keeping all other settings fixed.

## Findings

Report the drop for each ablation and interpret it:

> Removing METHOD 1 drops F1 by #.#%, whereas removing METHOD 2 has little effect, suggesting that METHOD 1 is the key contributor.

<AblationDemo />

:::tip
If methods overlap, also report removing them together. Only keep ablations that support a claim in your paper.
:::
