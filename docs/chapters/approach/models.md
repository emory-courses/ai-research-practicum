---
title: Model Design
---

# Model Design

## Encoder Challenge

Given the input text $$W = \{w_1, \ldots, w_n\}$$ where $$w_i$$ is the $$i$$'th token in ​$$W$$, a contextualized encoder (e.g., [BERT](https://aclanthology.org/N19-1423/)) takes $$W$$ and generates an embedding $$e_i \in \mathbb{R}^{1 \times d}$$ for every token $$w_i \in W$$using $$w_i$$ as well as its context. The challenge is that this encoder can take only up the $$m$$-number of tokens such that it cannot handle any input where $$n > m$$.

:::warning
What are the ways to handle arbitrarily large input using a contextualized encoder?
:::

### Baseline

One popular method is called the "Sliding Window", which splits the input into multiple blocks of text, generates embeddings for each block separately, and merges them at the end.

Let $$W = W_1 \cup \cdots \cup W_k \$$where $$W_h = \{w_{(h-1)m+1}, \ldots, w_{hm}\}$$ if $$hm < n$$; otherwise, $$W_h = \{w_{(h-1)m+1}, \ldots, w_{n}\}$$ such that $$km \leq n$$. Then, the encoder takes each $$W_h$$​ and generates $$E_h = \{e_{(h-1)m+1}, \ldots, e_{hm}\}$$ for every token in $$W_h$$. Finally, the embedding matrix $$E \in \mathbb{R}^{n \times d}$$ is created by sequentially stacking all embeddings in $$W_{\forall h}$$.

<details>

<summary>What are the potential issues with this baseline method?</summary>

The baseline method does not have enough context to generate high-quality embeddings for tokens on the edge of each block.

</details>

### Advanced (Exercise)

Modify the baseline method such that a block has overlapped tokens with its surrounding blocks (both front and back). Once all blocks are encoded, each overlapped token should have two embeddings. Create an average embedding of those two embeddings and make it the final embedding for the overlapped token.

## Decoder Challenge

In a [sequence-to-sequence model](https://en.wikipedia.org/wiki/Seq2seq) (aka, an encoder-decoder model), a decoder takes an embedding matrix $$E \in \mathbb{R}^{m \times d}$$ and predicts what token should come next. It is often the case that this embedding matrix is also bounded by a certain size, which becomes an issue when the size of the matrix becomes larger than $$m$$ (for the case above, $$E \in \mathbb{R}^{n \times d}$$ where $$n > m$$). One common method to handle this issue is to use an attention matrix for dimensionality reduction as follows:

The embedding matrix $$E \in \mathbb{R}^{n \times d}$$ is first transposed to $$E^T \in \mathbb{R}^{d \times n}$$ then multiplied by an attention matrix $$A \in \mathbb{R}^{n \times m}$$ such that $$E^T \cdot A \rightarrow D \in \mathbb{R}^{d \times m}$$. Finally, the transpose of $$D$$, that is $$D^T \in \mathbb{R}^{m \times d}$$ gets fed into the decoder.

:::warning
Would the following method be equivalent to the above method?
:::

An attention matrix $$A \in \mathbb{R}^{m \times n}$$is multiplied by the embedding matrix $$E \in \mathbb{R}^{n \times d}$$ such that $$A \cdot E \rightarrow D \in \mathbb{R}^{m \times d}$$. Finally, $$D$$ gets fed into the decoder.
