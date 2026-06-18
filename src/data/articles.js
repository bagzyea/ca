// Research briefs & essays. `id` is the URL slug (/writing/:id).
export const ARTICLES = [
  {
    id: 'rules-before-resources',
    title: 'Rules Before Resources',
    category: 'Brief',
    pillar: 'constitutional-governance',
    author: 'The Editors',
    date: '2026-06-02',
    readingTime: '8 min',
    image: '/images/courts-justice.jpg',
    excerpt:
      'The resource-curse literature has the causation backwards. It is not oil that corrodes institutions; it is weak institutions that turn oil into a curse.',
    body: [
      'The standard story is familiar: a country discovers resources, the windfall corrupts its politics, and development stalls. But the data is better explained the other way around. Where institutions are strong before the windfall arrives, resources fund development. Where they are weak, resources fund capture.',
      'This reframes the policy question. The lever is not the resource — it is the rule. Fiscal rules that ring-fence windfalls, courts that can enforce them, and central banks insulated from the political cycle do more to determine outcomes than any sovereign wealth fund design.',
      'The implication for investors and reformers alike is that institutional quality is the leading indicator. Read the rules first.',
    ],
  },
  {
    id: 'afcfta-credibility-problem',
    title: 'AfCFTA Has a Credibility Problem, Not a Trade Problem',
    category: 'Analysis',
    pillar: 'integration',
    author: 'The Editors',
    date: '2026-05-19',
    readingTime: '11 min',
    image: '/images/integration-joburg.jpg',
    excerpt:
      'The treaty is signed. The tariffs are scheduled. What remains missing is the one thing markets price above all: credible enforcement.',
    body: [
      'A trade agreement is a promise about the future. Its value depends entirely on whether firms believe the promise will be kept when it becomes inconvenient for a government to keep it.',
      'AfCFTA’s architecture is sound on paper. The binding constraint is dispute settlement: until a firm in one member state can reliably win, and collect, against a government in another, the agreement will be priced at a discount.',
      'Integration, in other words, is downstream of institutions — the same lesson, at continental scale.',
    ],
  },
  {
    id: 'the-youngest-continent',
    title: 'The Youngest Continent and the Oldest Question',
    category: 'Essay',
    pillar: 'constitutional-governance',
    author: 'The Editors',
    date: '2026-05-05',
    readingTime: '9 min',
    image: '/images/youth-man.jpg',
    excerpt:
      'A demographic dividend is not automatic. It is a constitutional bargain: voice and ownership in exchange for patience and participation.',
    body: [
      'Half of Africa is under twenty. That fact is described, endlessly, as either an opportunity or a threat. It is neither by default. It is a question awaiting an institutional answer.',
      'A dividend materialises when young people are offered genuine constitutional citizenship — a stake in the rules, not merely jobs within them. Where that stake is denied, demographic weight becomes pressure rather than productivity.',
      'The oldest question in political economy — who holds power, and how is it constrained — is the one the youngest continent must now answer in its own terms.',
    ],
  },
];

export const getArticle = (id) => ARTICLES.find((a) => a.id === id);
