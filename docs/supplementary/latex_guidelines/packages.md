---
title: Packages
---

# Packages

## Required Packages

Our [template](https://www.overleaf.com/read/yjnvxcjrgghv) uses `acl.sty` to format the paper, indicated at the top of `acl_latex.tex`:

```latex
\usepackage[final]{acl}
```

> If you replace `final` to `review`, it turns into the anonymous mode.

The standard packages include the followings:

```latex
\usepackage{times}
\usepackage{latexsym}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
```

## Fonts

The following packages add useful fonts:

```latex
\usepackage{amsfonts}
\usepackage{amsmath}
\usepackage{amssymb}       % enable \mathbb, \mathcal
\usepackage{bold-extra}    % enable \texttt{\textbf{}}
\usepackage{bm}            % enable bold font in math mode
\renewcommand{\UrlFont}{\ttfamily\small}  % define fonts for URLs
```

## Recommended Packages

The following packages are recommended:

```latex
\usepackage{graphicx}      % import graphical images
\usepackage{multirow}      % merge rows in tables
\usepackage{booktabs}      % borders in tabular
\usepackage{enumitem}      % list margins
\usepackage{subcaption}    % create sub-tables and sub-figures
\usepackage[hang,flushmargin]{footmisc}  % minimize footnote indentation
\newcommand{\LN}{\linebreak\noindent}    % manage inline spacing
```
