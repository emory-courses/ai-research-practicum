---
title: File Structure
---

# File Structure

## Top Level

Our [template](https://www.overleaf.com/read/yjnvxcjrgghv) includes 4 files on the top level:

* `acl_latex.tex`: contains the main content.
* `acl_natbib.bst`: defines the bibliography format.
* `acl.sty`: defines the paper format.
* `custom.bib`: contains all references.

## Tex Folder

Except for `acl_latex.tex`, all the other tex files are saved under  the `tex` folder, making it easier to manage extended contents. There are 9 files under the `tex` folder:

* `abstract.tex`
* `introduction.tex`
* `related-work.tex`
* `approach.tex`
* `experiments.tex`
* `analysis.tex`
* `conclusion.tex`
* `acknowledgements.tex`
* `appndeix.tex`

These files should be added in `acl_latex.tex`:

```latex
\input{tex/abstract}
\input{tex/introduction}
\input{tex/related-work}
\input{tex/approach}
\input{tex/experiments}
\input{tex/analysis}
\input{tex/conclusion}
\input{tex/acknowledgments}

% References come after the acknowledgment section
\bibliography{custom}

% Appendix comes after the references and must start at a new page
\cleardoublepage\appendix
\input{tex/appendix}
```

## Image Folder

Additionally, the `img` folder contains all image files included as figures in the paper.
