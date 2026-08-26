/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  chaptersSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'chapters/getting_started/syllabus',
        'chapters/getting_started/schedule',
        'chapters/getting_started/discussions',
      ],
    },
    {
      type: 'category',
      label: 'Exploration',
      items: [
        'chapters/exploration/research_areas',
        'chapters/exploration/research_topics',
        'chapters/exploration/ai-faculty',
        'chapters/exploration/homework',
      ],
    },
    {
      type: 'category',
      label: 'Team Formation',
      items: [
        'chapters/team_formation/speed_dating',
        'chapters/team_formation/profiles',
        'chapters/team_formation/homework',
      ],
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'chapters/introduction/overview',
        'chapters/introduction/task_selection',
        'chapters/introduction/motivation',
        'chapters/introduction/section-overview',
        'chapters/introduction/exercise',
        'chapters/introduction/homework',
      ],
    },
    {
      type: 'category',
      label: 'Related Work',
      items: [
        'chapters/related_work/overview',
        'chapters/related_work/literature-review',
        'chapters/related_work/exercise',
        'chapters/related_work/homework',
      ],
    },
    {
      type: 'category',
      label: 'Approach',
      items: [
        'chapters/approach/overview',
        'chapters/approach/algorithms',
        'chapters/approach/models',
        'chapters/approach/resources',
        'chapters/approach/homework',
      ],
    },
    {
      type: 'category',
      label: 'Experiments',
      items: [
        'chapters/experiments/overview',
        'chapters/experiments/datasets',
        'chapters/experiments/models',
        'chapters/experiments/results',
        'chapters/experiments/homework',
      ],
    },
    {
      type: 'category',
      label: 'Analysis',
      items: [
        'chapters/analysis/overview',
        'chapters/analysis/performance-analysis',
        'chapters/analysis/error-analysis',
        'chapters/analysis/discussions',
        'chapters/analysis/homework',
      ],
    },
    {
      type: 'category',
      label: 'Conclusion & Abstract',
      items: [
        'chapters/conclusion_and_abstract/overview',
        'chapters/conclusion_and_abstract/conclusion',
        'chapters/conclusion_and_abstract/title-and-abstract',
        'chapters/conclusion_and_abstract/homework',
      ],
    },
    {
      type: 'category',
      label: 'Peer Review',
      items: [
        'chapters/peer_review/overview',
        'chapters/peer_review/homework',
      ],
    },
    {
      type: 'category',
      label: 'Presentations',
      items: [
        'chapters/presentations/overview',
      ],
    },
    {
      type: 'category',
      label: 'LaTeX Guidelines',
      items: [
        'supplementary/latex_guidelines/overview',
        'supplementary/latex_guidelines/getting-started',
        'supplementary/latex_guidelines/file-structure',
        'supplementary/latex_guidelines/packages',
        'supplementary/latex_guidelines/references',
        'supplementary/latex_guidelines/paragraphs',
        'supplementary/latex_guidelines/labels',
        'supplementary/latex_guidelines/tables',
        'supplementary/latex_guidelines/figures',
        'supplementary/latex_guidelines/lists',
      ],
    },
    {
      type: 'doc',
      id: 'supplementary/writing-tips',
      label: 'Writing Tips',
    },
  ],
  projectsSidebar: [
    {
      type: 'category',
      label: 'Team Projects',
      items: [
        'projects/fall-2026',
        'projects/fall-2025',
        'projects/fall-2024',
        'projects/fall-2023',
        'projects/fall-2022',
      ],
    },
  ],
};

export default sidebars;
