#!/usr/bin/env python3
"""Migrate Gitbook content under book/ into Docusaurus docs/ (NLP Essentials style)."""

from __future__ import annotations

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BOOK = ROOT / "book"
DOCS = ROOT / "docs"
STATIC_IMG = ROOT / "static" / "img"

# old book-relative path -> (new docs-relative path without .md, chapter img folder, title override)
FILE_MAP: dict[str, tuple[str, str | None, str | None]] = {
    # Landing is handled separately as intro.md
    "overview/syllabus.md": ("chapters/overview/syllabus", "overview", None),
    "overview/schedule.md": ("chapters/overview/schedule", "overview", None),
    "overview/discussions.md": ("chapters/overview/discussions", "overview", None),
    "speed-dating/README.md": ("chapters/speed_dating/overview", "speed_dating", "Speed Dating"),
    "speed-dating/profiles.md": ("chapters/speed_dating/profiles", "speed_dating", None),
    "speed-dating/previous-years.md": ("chapters/speed_dating/previous-years", "speed_dating", None),
    "research-areas.md": ("chapters/research_areas/overview", "research_areas", "Research Areas"),
    "research-areas/ai-conferences.md": ("chapters/research_areas/ai-conferences", "research_areas", None),
    "faculty-interests.md": ("chapters/faculty_interests/overview", "faculty_interests", "Faculty Interests"),
    "faculty-interests/ai-faculty.md": ("chapters/faculty_interests/ai-faculty", "faculty_interests", None),
    "task-selection.md": ("chapters/task_selection/overview", "task_selection", "Task Selection"),
    "2.-introduction/README.md": ("chapters/introduction/overview", "introduction", "Introduction"),
    "2.-introduction/2.2.-motivation.md": ("chapters/introduction/motivation", "introduction", None),
    "2.-introduction/2.3.-overview.md": ("chapters/introduction/section-overview", "introduction", "Overview"),
    "2.-introduction/2.4.-exercise.md": ("chapters/introduction/exercise", "introduction", None),
    "3.-related-work.md": ("chapters/related_work/overview", "related_work", "Related Work"),
    "3.-related-work/3.1.-literature-review.md": ("chapters/related_work/literature-review", "related_work", None),
    "3.-related-work/3.2.-exercise.md": ("chapters/related_work/exercise", "related_work", None),
    "4.-approach/README.md": ("chapters/approach/overview", "approach", "Approach"),
    "4.-approach/4.1.-algorithms.md": ("chapters/approach/algorithms", "approach", None),
    "4.-approach/4.2.-models.md": ("chapters/approach/models", "approach", None),
    "4.-approach/4.3.-resources.md": ("chapters/approach/resources", "approach", "Data Creation"),
    "research-challenges.md": ("chapters/research_challenges/overview", "research_challenges", "Research Challenges"),
    "5.-experiments/README.md": ("chapters/experiments/overview", "experiments", "Experiments"),
    "5.-experiments/5.1.-datasets.md": ("chapters/experiments/datasets", "experiments", None),
    "5.-experiments/5.2.-models.md": ("chapters/experiments/models", "experiments", None),
    "5.-experiments/5.3.-results.md": ("chapters/experiments/results", "experiments", None),
    # Prefer canonical HW7/HW8; skip chapter-local 5.4 / 6.4 duplicates
    "6.-analysis.md": ("chapters/analysis/overview", "analysis", "Analysis"),
    "6.-analysis/6.1.-performance-analysis.md": ("chapters/analysis/performance-analysis", "analysis", None),
    "6.-analysis/6.2.-error-analysis.md": ("chapters/analysis/error-analysis", "analysis", None),
    "6.-analysis/6.3.-discussions.md": ("chapters/analysis/discussions", "analysis", None),
    "7.-conclusion-and-abstract/README.md": (
        "chapters/conclusion_and_abstract/overview",
        "conclusion_and_abstract",
        "Conclusion & Abstract",
    ),
    "7.-conclusion-and-abstract/7.1.-conclusion.md": (
        "chapters/conclusion_and_abstract/conclusion",
        "conclusion_and_abstract",
        None,
    ),
    "7.-conclusion-and-abstract/7.2.-title-and-abstract.md": (
        "chapters/conclusion_and_abstract/title-and-abstract",
        "conclusion_and_abstract",
        None,
    ),
    "peer-review.md": ("chapters/peer_review/overview", "peer_review", "Peer Review"),
    "8.-presentation-and-review/8.1.-presentation.md": (
        "chapters/presentations/overview",
        "presentations",
        "Presentations",
    ),
    # Assignments
    "introduction/homework.md": ("assignments/hw1-speed-dating", None, "HW1: Speed Dating"),
    "speed-dating/homework.md": ("assignments/hw2-research-areas", None, "HW2: Research Areas"),
    "assignments/hw3-team-promotion.md": ("assignments/hw3-team-promotion", None, "HW3: Team Promotion"),
    "homework/hw4-introduction.md": ("assignments/hw4-introduction", None, "HW4: Introduction"),
    "homework/hw5-related-work.md": ("assignments/hw5-related-work", None, "HW5: Related Work"),
    "homework/hw6-approach.md": ("assignments/hw6-approach", None, "HW6: Approach"),
    "homework/hw7-experiments.md": ("assignments/hw7-experiments", None, "HW7: Experiments"),
    "homework/hw8-analysis.md": ("assignments/hw8-analysis", None, "HW8: Analysis"),
    "homework/hw9-conclusion-and-abstract.md": (
        "assignments/hw9-conclusion-and-abstract",
        None,
        "HW9: Conclusion & Abstract",
    ),
    "homework/hw10-peer-review.md": ("assignments/hw10-peer-review", None, "HW10: Peer Review"),
    # Supplementary
    "supplementary/latex-guidelines/README.md": (
        "supplementary/latex_guidelines/overview",
        None,
        "LaTeX Guidelines",
    ),
    "supplementary/latex-guidelines/getting-started.md": (
        "supplementary/latex_guidelines/getting-started",
        None,
        None,
    ),
    "supplementary/latex-guidelines/file-structure.md": (
        "supplementary/latex_guidelines/file-structure",
        None,
        None,
    ),
    "supplementary/latex-guidelines/packages.md": (
        "supplementary/latex_guidelines/packages",
        None,
        None,
    ),
    "supplementary/latex-guidelines/references.md": (
        "supplementary/latex_guidelines/references",
        None,
        None,
    ),
    "supplementary/latex-guidelines/paragraphs.md": (
        "supplementary/latex_guidelines/paragraphs",
        None,
        None,
    ),
    "supplementary/latex-guidelines/labels.md": (
        "supplementary/latex_guidelines/labels",
        None,
        None,
    ),
    "supplementary/latex-guidelines/tables.md": (
        "supplementary/latex_guidelines/tables",
        None,
        None,
    ),
    "supplementary/latex-guidelines/figures.md": (
        "supplementary/latex_guidelines/figures",
        None,
        None,
    ),
    "supplementary/latex-guidelines/lists.md": (
        "supplementary/latex_guidelines/lists",
        None,
        None,
    ),
    "supplementary/writing-tips.md": ("supplementary/writing-tips", None, "Writing Tips"),
    "supplementary/team-projects/README.md": (
        "projects/fall-2025",
        None,
        "Fall 2025",
    ),
    "team-projects/fall-2024.md": ("projects/fall-2024", None, "Fall 2024"),
    "team-projects/fall-2023.md": ("projects/fall-2023", None, "Fall 2023"),
    "supplementary/team-projects/fall-2022.md": (
        "projects/fall-2022",
        None,
        "Fall 2022",
    ),
}

# Asset rename: old filename -> (chapter folder, new filename)
ASSET_MAP = {
    "algo-baseline.pdf": ("approach", "algo-baseline.pdf"),
    "algo-exercise.pdf": ("approach", "algo-exercise.pdf"),
    "table-experiments-results.png": ("experiments", "table-experiments-results.png"),
    "image (1) (1).png": ("experiments", "dataset-example-1.png"),
    "image (2).png": ("experiments", "dataset-example-2.png"),
    "figure-development.png": ("experiments", "figure-development.png"),
    "label-analysis.jpg": ("analysis", "label-analysis.jpg"),
    "confusion-matrix.jpg": ("analysis", "confusion-matrix.jpg"),
    "category-analysis.jpg": ("analysis", "category-analysis.jpg"),
    "speed-analysis.jpg": ("analysis", "speed-analysis.jpg"),
    "transition-analysis.jpg": ("analysis", "transition-analysis.jpg"),
    "error-analysis.jpg": ("analysis", "error-analysis.jpg"),
}

HINT_MAP = {
    "info": "info",
    "warning": "warning",
    "success": "tip",
    "danger": "danger",
}

# Patterns for rewriting internal links (order matters: longer paths first)
LINK_REWRITES: list[tuple[str, str]] = []


def build_link_rewrites() -> None:
    pairs: list[tuple[str, str]] = []
    for old, (new, _, _) in FILE_MAP.items():
        # Absolute-ish doc path used in markdown links
        pairs.append((old, f"/{new}"))
        # Directory-style links (README / folder)
        if old.endswith("/README.md"):
            folder = old[: -len("/README.md")]
            pairs.append((folder + "/", f"/{new}"))
            pairs.append((folder, f"/{new}"))
        if old.endswith(".md") and "/" not in old:
            # root-level like research-areas.md -> also without extension for some links
            stem = old[:-3]
            pairs.append((stem, f"/{new}"))
    # Special: book root overview
    pairs.append(("README.md", "/"))
    pairs.append(("../", "/"))
    # Broken schedule link -> team projects overview
    pairs.append(("/broken/pages/6PDAjNi0QZP65mXny2V8", "/projects/fall-2026"))
    # Sort by old path length descending so longer matches win
    pairs.sort(key=lambda x: len(x[0]), reverse=True)
    LINK_REWRITES.clear()
    LINK_REWRITES.extend(pairs)


def strip_front_matter(text: str) -> tuple[dict[str, str], str]:
    if not text.startswith("---"):
        return {}, text
    end = text.find("\n---", 3)
    if end == -1:
        return {}, text
    fm_raw = text[3:end].strip()
    body = text[end + 4 :].lstrip("\n")
    meta: dict[str, str] = {}
    # Simple YAML: description may be multiline with >
    key = None
    buf: list[str] = []
    for line in fm_raw.splitlines():
        if re.match(r"^[a-zA-Z_]+:", line):
            if key is not None:
                meta[key] = " ".join(buf).strip().strip("'\"")
            key, _, rest = line.partition(":")
            rest = rest.strip()
            if rest == ">" or rest == "|":
                buf = []
            else:
                buf = [rest]
        else:
            buf.append(line.strip())
    if key is not None:
        meta[key] = " ".join(buf).strip().strip("'\"")
    return meta, body


def extract_title(body: str, override: str | None) -> tuple[str, str]:
    if override:
        # Remove leading H1 if present
        body2 = re.sub(r"^# .+\n+", "", body, count=1)
        return override, body2
    m = re.match(r"^# (.+)\n+", body)
    if m:
        return m.group(1).strip(), body[m.end() :]
    return "Untitled", body


def convert_hints(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        style = HINT_MAP.get(m.group(1), "info")
        content = m.group(2).strip()
        return f":::{style}\n{content}\n:::"

    return re.sub(
        r"\{%\s*hint\s+style=\"(\w+)\"\s*%\}(.*?)\{%\s*endhint\s*%\}",
        repl,
        text,
        flags=re.DOTALL,
    )


def convert_files(text: str, img_folder: str | None) -> str:
    def repl(m: re.Match[str]) -> str:
        src = m.group(1)
        label = m.group(2).strip() or Path(src).name
        fname = Path(src).name
        if fname in ASSET_MAP:
            folder, new_name = ASSET_MAP[fname]
            url = f"/img/{folder}/{new_name}"
        else:
            url = src
        return f"[{label}]({url})"

    return re.sub(
        r"\{%\s*file\s+src=\"([^\"]+)\"\s*%\}(.*?)\{%\s*endfile\s*%\}",
        repl,
        text,
        flags=re.DOTALL,
    )


def convert_figures(text: str, img_folder: str | None) -> str:
    def repl(m: re.Match[str]) -> str:
        src = m.group(1)
        # figcaption may contain HTML
        caption_html = m.group(2) or ""
        caption = re.sub(r"<[^>]+>", "", caption_html)
        caption = clean_entities(caption).strip()
        # Fix known typo in figure-development caption
        caption = caption.replace("Excerpted from Xu", "Excerpted from Xu")
        caption = re.sub(r"Excerpted fro\s*m Xu", "Excerpted from Xu", caption)
        fname = Path(src.split("?")[0]).name
        # URL-decode spaces already in path
        fname = fname.replace("%20", " ")
        if fname in ASSET_MAP:
            folder, new_name = ASSET_MAP[fname]
            img_path = f"/img/{folder}/{new_name}"
        else:
            img_path = src
        alt = caption[:80] if caption else new_name if fname in ASSET_MAP else "figure"
        fig = f'<figure>\n<img src={{require("{img_path}").default}} alt="{alt}" />\n'
        if caption:
            fig += f"<figcaption>{caption}</figcaption>\n"
        fig += "</figure>"
        return fig

    return re.sub(
        r"<figure>\s*<img\s+src=\"([^\"]+)\"[^>]*>\s*<figcaption>(.*?)</figcaption>\s*</figure>",
        repl,
        text,
        flags=re.DOTALL | re.IGNORECASE,
    )


def convert_md_images(text: str) -> str:
    # ![alt](path) and ![alt](<path with spaces>)
    def repl(m: re.Match[str]) -> str:
        alt = m.group(1)
        src = m.group(2)
        fname = Path(src.split("?")[0]).name
        fname = fname.replace("%20", " ")
        if fname in ASSET_MAP:
            folder, new_name = ASSET_MAP[fname]
            return f"![{alt}](/img/{folder}/{new_name})"
        return m.group(0)

    text = re.sub(r"!\[([^\]]*)\]\(<([^>]+)>\)", repl, text)
    text = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", repl, text)
    return text


def clean_entities(text: str) -> str:
    replacements = {
        "&#x20;": " ",
        "&#x26;": "&",
        "&amp;": "&",
        "\\_": "_",  # Gitbook-escaped underscores in URLs sometimes
    }
    for a, b in replacements.items():
        text = text.replace(a, b)
    # Collapse *** horizontal rules used as spacers -> ---
    text = re.sub(r"\n\*\*\*\n", "\n\n---\n\n", text)
    return text


def rewrite_href(href: str, current_old: str) -> str:
    if href.startswith(("http://", "https://", "mailto:", "#")):
        return href
    # Resolve relative against current file
    if not href.startswith("/"):
        base = Path(current_old).parent
        # Handle ../ and ./
        resolved = (base / href).as_posix()
        # Normalize ..
        parts: list[str] = []
        for p in resolved.split("/"):
            if p == "..":
                if parts:
                    parts.pop()
            elif p in ("", "."):
                continue
            else:
                parts.append(p)
        resolved = "/".join(parts)
    else:
        resolved = href.lstrip("/")

    # Split anchor
    path, anchor = (resolved.split("#", 1) + [""])[:2]
    # Try matching FILE_MAP keys
    candidates = [path]
    if not path.endswith(".md"):
        candidates.extend([path + ".md", path + "/README.md", path.rstrip("/") + "/README.md"])
    else:
        candidates.append(path)

    for cand in candidates:
        # Also try with book-relative
        for old, (new, _, _) in FILE_MAP.items():
            if cand == old or cand.endswith("/" + old) or cand == old:
                result = f"/{new}"
                if anchor:
                    result += f"#{anchor}"
                return result
        if cand in FILE_MAP:
            result = f"/{FILE_MAP[cand][0]}"
            if anchor:
                result += f"#{anchor}"
            return result

    # Direct lookup on path without leading junk
    for old, new_path in LINK_REWRITES:
        if path == old or path.endswith(old) or href == old or href.endswith(old):
            result = new_path
            if anchor and "#" not in result:
                result += f"#{anchor}"
            return result

    # Same-directory short links like 5.2.-models.md
    short = Path(path).name
    parent = str(Path(current_old).parent)
    for old, (new, _, _) in FILE_MAP.items():
        if Path(old).name == short and str(Path(old).parent) == parent:
            result = f"/{new}"
            if anchor:
                result += f"#{anchor}"
            return result
        if Path(old).name == short and parent in old:
            result = f"/{new}"
            if anchor:
                result += f"#{anchor}"
            return result

    # Anchor-only same-page links like discussions.md#foo from discussions.md
    if Path(path).name == Path(current_old).name or path == Path(current_old).name:
        if current_old in FILE_MAP:
            result = f"/{FILE_MAP[current_old][0]}"
            if anchor:
                result += f"#{anchor}"
            return result

    return href


def rewrite_links(text: str, current_old: str) -> str:
    def repl_md(m: re.Match[str]) -> str:
        label, href = m.group(1), m.group(2)
        if href.startswith("<") and href.endswith(">"):
            href = href[1:-1]
        new_href = rewrite_href(href, current_old)
        return f"[{label}]({new_href})"

    def repl_html(m: re.Match[str]) -> str:
        href = m.group(1)
        new_href = rewrite_href(href, current_old)
        return f'href="{new_href}"'

    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", repl_md, text)
    text = re.sub(r'href="([^"]+)"', repl_html, text)
    return text


def convert_page(old_rel: str, new_id: str, img_folder: str | None, title_override: str | None) -> None:
    src = BOOK / old_rel
    if not src.exists():
        print(f"MISSING: {old_rel}")
        return
    raw = src.read_text(encoding="utf-8")
    meta, body = strip_front_matter(raw)
    title, body = extract_title(body, title_override)

    body = convert_hints(body)
    body = convert_files(body, img_folder)
    body = convert_figures(body, img_folder)
    body = convert_md_images(body)
    body = clean_entities(body)
    body = rewrite_links(body, old_rel)

    # Clean escaped underscores left in wiki URLs from Gitbook
    body = body.replace("Cross-validation\\_(statistics)", "Cross-validation_(statistics)")
    body = body.replace("cross-validation\\_(statistics)", "cross-validation_(statistics)")

    fm_lines = ["---"]
    if any(c in title for c in ":#{}[]&*!|>%@`"):
        fm_lines.append(f"title: '{title.replace(chr(39), chr(39)+chr(39))}'")
    else:
        fm_lines.append(f"title: {title}")
    if new_id.startswith("assignments/"):
        fm_lines.append(f"description: '{title.replace(chr(39), chr(39)+chr(39))}'")
    elif meta.get("description"):
        desc = meta["description"].replace("'", "''")
        fm_lines.append(f"description: '{desc}'")
    fm_lines.append("---")
    fm_lines.append("")
    fm_lines.append(f"# {title}")
    fm_lines.append("")

    out = DOCS / f"{new_id}.md"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text("\n".join(fm_lines) + body.lstrip() + ("\n" if not body.endswith("\n") else ""), encoding="utf-8")
    print(f"OK  {old_rel} -> {new_id}.md")


def copy_assets() -> None:
    src_dir = BOOK / ".gitbook" / "assets"
    for old_name, (folder, new_name) in ASSET_MAP.items():
        src = src_dir / old_name
        dst_dir = STATIC_IMG / folder
        dst_dir.mkdir(parents=True, exist_ok=True)
        if src.exists():
            shutil.copy2(src, dst_dir / new_name)
            print(f"IMG {old_name} -> img/{folder}/{new_name}")
        else:
            print(f"MISSING ASSET: {old_name}")


def write_intro() -> None:
    content = """---
sidebar_position: 1
slug: /
title: AI Research Practicum
description: 'CS371W: Research Practicum in Artificial Intelligence'
---

# AI Research Practicum

By [Jinho D. Choi](https://www.emorynlp.org/faculty/jinho-choi)

This course is designed to equip students with the essential skills and knowledge to conduct rigorous and impactful research in Artificial Intelligence (AI). As AI continues to evolve from a futuristic concept into a foundational technology that permeates every aspect of modern life, its role in advancing scientific discovery, innovation, and societal progress has become increasingly critical. Understanding the breadth and depth of AI and its potential to address complex challenges across various domains is vital for any aspiring researcher in this field.

:::tip
This course satisfies the [**Continuing Communication Requirement**](https://secure.web.emory.edu/college/senate/committees/curriculum-and-educational-policy/satisfying-communication-requirement-guidelines.html).
:::

## Course Objectives

* **Comprehensive Survey of AI Domains:** Explore a broad spectrum of AI areas, delving into the latest advancements and understanding the implications of these developments in both theoretical and applied contexts.
* **Idea Development:** Generate innovative and compelling research ideas that resonate with and engage the broader research community.
* **Methodological Innovation:** Design cutting-edge methods that push the boundaries of existing knowledge in AI research.
* **Experimental Rigor:** Conduct experiments with meticulous attention to detail, ensuring analyses capture the research question and contribute to broader understanding.
* **Effective Communication of Research:** Present research findings clearly and persuasively to academic and general audiences.

## Course Requirements

* **Collaborative Team Project:** Engage in a group project that leverages collective expertise and promotes interdisciplinary collaboration.
* **Research Paper Writing:** Author a research paper that reflects the depth and originality of your team's insights.
* **Peer Review:** Critically evaluate and provide constructive feedback on the work of your peers.
* **Public Presentations:** Deliver presentations that showcase your research findings to diverse audiences.

## Chapters

1. [Overview](/chapters/overview/syllabus)
1. [Speed Dating](/chapters/speed_dating/overview)
1. [Research Areas](/chapters/research_areas/overview)
1. [Faculty Interests](/chapters/faculty_interests/overview)
1. [Task Selection](/chapters/task_selection/overview)
1. [Introduction](/chapters/introduction/overview)
1. [Related Work](/chapters/related_work/overview)
1. [Approach](/chapters/approach/overview)
1. [Research Challenges](/chapters/research_challenges/overview)
1. [Experiments](/chapters/experiments/overview)
1. [Analysis](/chapters/analysis/overview)
1. [Conclusion & Abstract](/chapters/conclusion_and_abstract/overview)
1. [Peer Review](/chapters/peer_review/overview)
1. [Presentations](/chapters/presentations/overview)

## Assignments

1. [HW1: Speed Dating](/assignments/hw1-speed-dating)
1. [HW2: Research Areas](/assignments/hw2-research-areas)
1. [HW3: Team Promotion](/assignments/hw3-team-promotion)
1. [HW4: Introduction](/assignments/hw4-introduction)
1. [HW5: Related Work](/assignments/hw5-related-work)
1. [HW6: Approach](/assignments/hw6-approach)
1. [HW7: Experiments](/assignments/hw7-experiments)
1. [HW8: Analysis](/assignments/hw8-analysis)
1. [HW9: Conclusion & Abstract](/assignments/hw9-conclusion-and-abstract)
1. [HW10: Peer Review](/assignments/hw10-peer-review)

## Projects

* [Fall 2026](/projects/fall-2026),
  [Fall 2025](/projects/fall-2025),
  [Fall 2024](/projects/fall-2024),
  [Fall 2023](/projects/fall-2023),
  [Fall 2022](/projects/fall-2022)
"""
    (DOCS / "intro.md").write_text(content, encoding="utf-8")
    print("OK  intro.md")


def write_overview_landing() -> None:
    content = """---
title: Overview
---

# Overview

Course logistics and orientation materials for **CS 371W: Research Practicum in Artificial Intelligence**.

## Contents

* [Syllabus](syllabus)
* [Schedule](schedule)
* [Discussions](discussions)
"""
    path = DOCS / "chapters/overview/overview.md"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print("OK  chapters/overview/overview.md")


def main() -> None:
    build_link_rewrites()
    copy_assets()
    write_intro()
    write_overview_landing()
    for old, (new_id, img_folder, title) in FILE_MAP.items():
        convert_page(old, new_id, img_folder, title)
    print("Done.")


if __name__ == "__main__":
    main()
