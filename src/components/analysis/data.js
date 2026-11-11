// Running example for the Analysis chapter (illustrative numbers):
// intent classification on customer-support messages with three LLM-based models.
export const MODELS = [
  {id: 'zs', name: 'ZERO-SHOT', desc: 'prompted LLM'},
  {id: 'fs', name: 'FEW-SHOT', desc: 'ZERO-SHOT + retrieved examples'},
  {id: 'ft', name: 'FINE-TUNED', desc: 'FEW-SHOT + LoRA fine-tuning'},
];

export const LABELS = [
  {name: 'Billing', support: 24, f1: [78, 84, 91]},
  {name: 'Refund', support: 22, f1: [74, 82, 90]},
  {name: 'Shipping', support: 20, f1: [80, 85, 92]},
  {name: 'Account', support: 16, f1: [72, 79, 88]},
  {name: 'Technical', support: 12, f1: [66, 73, 85]},
  {name: 'Other', support: 6, f1: [41, 50, 62]},
];

// Row-normalized confusion matrix (%) of FINE-TUNED: rows = gold, columns = predicted.
export const CONFUSION = [
  [91, 5, 0, 2, 1, 1],
  [6, 90, 2, 0, 0, 2],
  [0, 3, 92, 0, 2, 3],
  [3, 0, 1, 88, 5, 3],
  [1, 0, 3, 6, 85, 5],
  [8, 7, 5, 6, 12, 62],
];

export const CATEGORIES = [
  {name: 'Short (< 10 tokens)', f1: [76, 82, 89]},
  {name: 'Long (≥ 50 tokens)', f1: [70, 78, 90]},
  {name: 'Typos and slang', f1: [60, 70, 86]},
  {name: 'Multiple intents', f1: [52, 61, 74]},
];

// Latency (seconds per request) by input length (tokens).
export const SPEED = {
  lengths: [64, 128, 256, 512, 1024],
  latency: [
    [0.9, 1.0, 1.2, 1.7, 2.6],
    [1.6, 1.7, 1.9, 2.5, 3.6],
    [0.12, 0.15, 0.21, 0.35, 0.66],
  ],
};

// Macro-F1 for every on/off combination of the two methods that turn ZERO-SHOT into FINE-TUNED.
export const ABLATION = {
  methods: ['Retrieved examples', 'LoRA fine-tuning'],
  scores: {'00': 68.5, '10': 75.5, '01': 83.0, '11': 84.7},
};

// Error analysis: errors per 1,000 test messages for [ZERO-SHOT, FINE-TUNED].
export const ERRORS = [
  {name: 'Missed context', source: 'Model', count: [105, 45], example: '"It still hasn\'t come." (the order was discussed three turns earlier) is labeled Other.', cause: 'Only the last message is encoded; earlier turns are truncated.', fix: 'Encode the full dialogue history.'},
  {name: 'Multiple intents', source: 'Task', count: [70, 39], example: '"Refund my order and change my email." has two gold labels but allows one.', cause: 'The task definition forces a single label.', fix: 'Redefine the task as multi-label (a limitation of this work).'},
  {name: 'Annotation noise', source: 'Data', count: [40, 34], example: '"Why was I charged twice?" is labeled Refund by one annotator and Billing by another.', cause: 'The guideline does not separate Billing from Refund.', fix: 'Clarify the guideline and re-annotate.'},
  {name: 'Typos and slang', source: 'Model', count: [95, 22], example: '"wheres my pakage" is labeled Account.', cause: 'Noisy spellings are rare in the fine-tuning data.', fix: 'Augment the training data with noisy text.'},
];

// Qualitative cases: the same input with and without each method.
export const CASES = [
  {
    method: 'Retrieved examples',
    input: 'wheres my pakage',
    gold: 'Shipping',
    without: {label: 'Account', note: 'The misspelled "pakage" is not recognized as a delivery question.'},
    with: {label: 'Shipping', note: 'Retrieved neighbor: "where is my package" → Shipping.'},
    why: 'Retrieval supplies near-duplicate labeled phrasings, which helps most on noisy and rare wording but cannot teach the annotation guideline.',
  },
  {
    method: 'LoRA fine-tuning',
    input: 'Why was I charged twice?',
    gold: 'Billing',
    without: {label: 'Refund', note: 'Retrieved neighbors mix Billing and Refund; the prompt cannot say which one wins.'},
    with: {label: 'Billing', note: 'Learns the guideline: a duplicate charge is Billing unless a refund is requested.'},
    why: 'Fine-tuning internalizes the label convention, so it helps most where labels overlap and the guideline decides.',
  },
  {
    method: 'Both fail',
    input: 'Refund my order and change my email.',
    gold: 'Refund + Account',
    without: {label: 'Refund', note: 'Without fine-tuning: only one intent is returned.'},
    with: {label: 'Refund', note: 'With both methods: still one intent, since the task allows a single label.'},
    why: 'Neither method changes the task definition, so this error is outside what the approach can fix (see Error Analysis).',
  },
];

// Cost of each method (illustrative).
export const COST = [
  {method: 'Retrieved examples', gain: '+7.0', cost: 'Vector index; +0.7–1.0 s latency per request (longer prompt)'},
  {method: 'LoRA fine-tuning', gain: '+9.2', cost: '2K labeled examples; 3 GPU-hours; −2.9 s latency (smaller model)'},
];
