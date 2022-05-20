# File Structure

## Tex Files

Create a separate tex file for each section under the `tex` folder, which makes it easier to manage long contents.
Our [template](https://www.overleaf.com/read/yjnvxcjrgghv) includes 8 files under the `tex` folder:

* `abstract.tex`
* `introduction.tex`
* `related-work.tex`
* `approach.tex`
* `experiments.tex`
* `analysis.tex`
* `conclusion.tex`
* `acknowledgements.tex`

The main tex file (e.g., `acl_latex_tex`) should be the only tex file kept on the top level.
Add all files in `tex` to the main tex file:

```latex
\input{tex/abstract}
\input{tex/introduction}
\input{tex/related-work}
\input{tex/approach}
\input{tex/experiments}
\input{tex/analysis}
\input{tex/conclusion}
\input{tex/acknowledgments}
```

## Images Files

Create a folder called `img` and put all image files under this folder.