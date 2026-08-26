---
title: Lists
---

# Lists

## Left Margin

Use the following command if you do not want any indent in a list environment:

```latex
\begin{itemize}[leftmargin=*]
\item A
\item B
\end{itemize}
```

If you want to set this globally, uncomment the following configurations in `acl_latex.tex`:

```latex
\setenumerate[1]{leftmargin=*}    % no enumerate indentation
\setitemize[1]{leftmargin=*}      % no itemize indentation
```

## Vertical Spacing

Use the following command to control the vertical spacing in a list environment:

```latex
\begin{itemize}
\setlength\itemsep{0em}
\item A
\item B
\end{itemize}
```
