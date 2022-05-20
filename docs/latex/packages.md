# Packages

## Required Packages

Most LaTex templates come with their own style files.
Our [template](https://www.overleaf.com/read/yjnvxcjrgghv) uses the style file, `acl.sty`, that is indicated as the first package in the main tex file, `acl_latex.tex`:

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
<!-- \renewcommand{\UrlFont}{\ttfamily\small} -->

## Fonts

The following packages add useful fonts:

```latex
\usepackage{amsfonts}
\usepackage{amsmath}
\usepackage{amssymb}       % enable \mathbb, \mathcal
\usepackage{bold-extra}    % enable \texttt{\textbf{}}
\usepackage{bm}            % enable bold font in math mode
\renewcommand{\UrlFont}{\ttfamily\small}
```


## Recommended Packages

The following packages are recommended:

```latex
\usepackage{graphicx}      % import graphical images
\usepackage{multirow}      % merge rows in tables
\usepackage{booktabs}      % borders in tabular
\usepackage{subcaption}    % create sub-tables and sub-figures
\usepackage[hang,flushmargin]{footmisc}  % minimize footnote indentation
\newcommand{\LN}{\linebreak\noindent}    % to manage inline spacing
```

## Optional Packages

Include the followings if you do not want any indentation for the enumerate/itemize environments:

```latex
\usepackage{enumitem}
\setenumerate[1]{leftmargin=*}    % no enumerate indentation
\setitemize[1]{leftmargin=*}      % no itemize indentation
```
