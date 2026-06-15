// The six pillars of Constitutional Africa. `id` is the URL slug (/pillar/:id).
export const PILLARS = [
  {
    id: 'institutions',
    n: 'I',
    verb: 'Building',
    theme: 'Constitutionalism, Institutions & the State',
    tone: 'indigo',
    image: '/images/courts-justice.jpg',
    desc: 'Governance, courts, regulators, strategic assets and the future African state.',
    summary:
      'How constitutions, courts and regulators are designed — and whether they hold — determines everything downstream: investment, rights, and the credibility of the state itself.',
    body: [
      'A constitution is the source code of a state. It sets the rules by which power is acquired, constrained and transferred. In much of Africa the formal text is sound; the binding question is whether the institutions meant to enforce it — courts, electoral commissions, central banks, auditors — can act independently of the executive.',
      'We study the institutional plumbing of the African state: the appointment of judges, the autonomy of regulators, the design of fiscal rules, and the management of strategic assets. The argument is simple: credible institutions compound into trust, and trust is the cheapest form of capital a country can hold.',
      'This pillar tracks constitutional moments — reforms, court rulings, term-limit fights — and reads them not as isolated political drama but as data about the durability of the rules themselves.',
    ],
    topics: ['Separation of powers', 'Judicial independence', 'Central bank autonomy', 'Electoral integrity', 'Strategic state assets'],
  },
  {
    id: 'belonging',
    n: 'II',
    verb: 'Healing',
    theme: 'Peace, Memory & Human Belonging',
    tone: 'terra',
    image: '/images/belonging-woman.jpg',
    desc: 'Conflict and reconstruction, belonging, citizenship and reconciliation.',
    summary:
      'Constitutions do not only allocate power — they decide who belongs. Citizenship, memory and reconciliation are constitutional questions as much as moral ones.',
    body: [
      'Where states have fractured, the work of rebuilding is constitutional before it is economic. Who counts as a citizen? How is memory of conflict held without weaponising it? What does a credible promise of "never again" actually require in law?',
      'This pillar examines transitional justice, citizenship and statelessness, federal and devolved settlements, and the long arc of reconciliation. Belonging is not sentiment; it is the precondition for a shared economic future.',
    ],
    topics: ['Transitional justice', 'Citizenship & statelessness', 'Devolution', 'Reconciliation', 'Minority rights'],
  },
  {
    id: 'culture',
    n: 'III',
    verb: 'Rooting',
    theme: 'Culture, Heritage & Identity',
    tone: 'brass',
    image: '/images/heritage-sahara.jpg',
    desc: 'Identity, language, memory, the creative economies and civilisational confidence.',
    summary:
      'Civilisational confidence is an economic asset. Language, heritage and the creative economy shape how a society values its own ideas — and whether it builds for the long term.',
    body: [
      'A people that does not trust its own past struggles to invest in its own future. This pillar treats culture, language and heritage not as ornament but as the substrate on which institutions are legitimated.',
      'We look at the creative economies, the repatriation and stewardship of heritage, language policy in law and education, and the role of confidence in long-horizon investment.',
    ],
    topics: ['Creative economy', 'Language policy', 'Heritage & restitution', 'Identity', 'Civilisational confidence'],
  },
  {
    id: 'youth',
    n: 'IV',
    verb: 'Preparing',
    theme: 'Youth, Diaspora & the Future',
    tone: 'jade',
    image: '/images/youth-man.jpg',
    desc: 'Youth leadership, innovation, enterprise and constitutional citizenship.',
    summary:
      'Africa is the youngest continent on earth. Whether that demographic weight becomes a dividend or a strain depends on the constitutional citizenship young Africans are offered.',
    body: [
      'The median age across the continent is under twenty. This pillar asks what it means to prepare a generation for constitutional citizenship — not only jobs and skills, but voice, ownership and the institutions through which young people can hold power to account.',
      'We follow youth movements, the diaspora as a constitutional and economic actor, and the innovation ecosystems remaking African enterprise.',
    ],
    topics: ['Demographic dividend', 'Diaspora', 'Innovation ecosystems', 'Civic participation', 'Education'],
  },
  {
    id: 'enterprise',
    n: 'V',
    verb: 'Sustaining',
    theme: 'Enterprise & Family Legacies',
    tone: 'brass',
    image: '/images/enterprise-market.jpg',
    desc: 'African enterprise, resilience, succession and economic dignity.',
    summary:
      'Most African enterprise is family enterprise. Succession, property rights and contract enforcement are the quiet constitutional questions on which prosperity actually turns.',
    body: [
      'Behind the macro story sits the firm — often a family business spanning generations. This pillar studies the legal and institutional conditions for enterprise to survive succession, raise capital and scale: property rights, contract enforcement, insolvency regimes and the dignity of formal work.',
      'Economic resilience is built one enforceable contract at a time. We document what works.',
    ],
    topics: ['Property rights', 'Contract enforcement', 'Succession', 'SME finance', 'Formalisation'],
  },
  {
    id: 'integration',
    n: 'VI',
    verb: 'Connecting',
    theme: 'Integration & Shared Future',
    tone: 'indigo',
    image: '/images/integration-joburg.jpg',
    desc: 'AfCFTA, corridors, infrastructure and Pan-African systems.',
    summary:
      'A continent of 1.4 billion people negotiating as one market is a constitutional project as much as a trade one. AfCFTA, corridors and shared infrastructure are its instruments.',
    body: [
      'The African Continental Free Trade Area is the largest free-trade area in the world by membership. Realising it requires harmonised rules, credible dispute resolution and physical corridors that connect markets — a Pan-African constitutional order in miniature.',
      'This pillar tracks integration: trade rules and their enforcement, cross-border infrastructure, payment systems and the slow construction of shared sovereignty.',
    ],
    topics: ['AfCFTA', 'Trade corridors', 'Cross-border payments', 'Regional courts', 'Shared infrastructure'],
  },
];

export const getPillar = (id) => PILLARS.find((p) => p.id === id);
