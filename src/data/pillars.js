// The six Strategic Thematic Pillars of Constitutional Africa (Founding Charter,
// Article V). `id` is the URL slug (/pillar/:id).
export const PILLARS = [
  {
    id: 'constitutional-governance',
    n: 'I',
    verb: 'Governing',
    theme: 'Constitutional Governance',
    tone: 'indigo',
    image: '/images/courts-justice.jpg',
    desc: 'Constitutionalism, courts, the rule of law and institutional accountability.',
    summary:
      'How constitutions, courts and regulators are designed — and whether they hold — determines everything downstream: investment, rights, and the credibility of the state itself.',
    body: [
      'A constitution is the source code of a state. It sets the rules by which power is acquired, constrained and transferred. In much of Africa the formal text is sound; the binding question is whether the institutions meant to enforce it — courts, electoral commissions, central banks, auditors — can act independently of the executive.',
      'We study the institutional plumbing of the African state: judicial systems, the autonomy of regulators, public administration, the design of fiscal rules and electoral governance. The argument is simple: credible institutions compound into trust, and trust is the cheapest form of capital a country can hold.',
      'This pillar tracks constitutional moments — reforms, court rulings, term-limit fights — and reads them not as isolated political drama but as data about the durability of the rules themselves.',
    ],
    topics: ['Rule of law', 'Separation of powers', 'Judicial independence', 'Electoral governance', 'Institutional accountability'],
  },
  {
    id: 'economic-transformation',
    n: 'II',
    verb: 'Transforming',
    theme: 'Economic Transformation',
    tone: 'brass',
    image: '/images/enterprise-market.jpg',
    desc: 'Industrialisation, finance, capital markets, trade and economic statecraft.',
    summary:
      'Growth alone is not transformation. Industrial capacity, deep capital markets and credible economic statecraft are what convert resources into durable prosperity.',
    body: [
      'Africa’s economic question is no longer whether it will grow, but whether growth will compound into structural transformation — moving from extraction toward industry, services and value added at home.',
      'This pillar examines the machinery of that shift: industrialisation strategy, finance and capital markets, taxation and sovereign wealth, trade policy and entrepreneurship. Each depends on the constitutional foundation beneath it — secure contracts, credible money and rules that outlast a single administration.',
      'We treat economic policy as statecraft: the deliberate construction of markets, the stewardship of strategic resources, and the long-horizon choices that decide whether a windfall becomes a foundation or a curse.',
    ],
    topics: ['Industrialisation', 'Capital markets', 'Sovereign wealth', 'Taxation & trade', 'Entrepreneurship'],
  },
  {
    id: 'infrastructure',
    n: 'III',
    verb: 'Building',
    theme: 'Infrastructure & Strategic Assets',
    tone: 'terra',
    image: '/images/infrastructure-port.jpg',
    desc: 'Energy, transport, logistics, resources and the physical layer of sovereignty.',
    summary:
      'Infrastructure is civilisational. Energy, transport and strategic assets are the physical layer on which productivity, integration and sovereignty are actually exercised.',
    body: [
      'Roads, grids, ports, pipelines and data centres are not merely engineering projects — they are the arteries of an economy and the instruments through which a state exercises sovereignty over its own territory and resources.',
      'This pillar follows the build-out: energy and the transition, oil, gas and mining, transport and aviation, water systems, logistics and urban development. The decisive questions are governance questions — how strategic assets are owned, financed, regulated and maintained across decades.',
      'Infrastructure accelerates productivity, but only where the rules around procurement, concession and stewardship are sound. We read the continent’s great projects as tests of institutional capacity, not just of capital.',
    ],
    topics: ['Energy & transition', 'Oil, gas & mining', 'Transport & logistics', 'Urban development', 'Strategic assets'],
  },
  {
    id: 'technology',
    n: 'IV',
    verb: 'Securing',
    theme: 'Technology & Digital Sovereignty',
    tone: 'jade',
    image: '/images/hero-capetown.jpg',
    desc: 'AI governance, cybersecurity, data, innovation and digital public infrastructure.',
    summary:
      'The digital layer is now constitutional terrain. Who governs data, AI and networks decides how much sovereignty an African state actually retains.',
    body: [
      'The next contest over African sovereignty is being fought in data centres, undersea cables and model weights. Digital public infrastructure — identity, payments, registries — is becoming as foundational as roads and courts.',
      'This pillar examines AI governance, cybersecurity, data governance and telecommunications regulation, alongside the innovation ecosystems remaking African enterprise. The question throughout is sovereignty: whether Africans set the rules for the systems that increasingly govern their lives, or inherit rules written elsewhere.',
      'Digital sovereignty is not autarky. It is the institutional capacity to regulate, to negotiate and to build — so that technology compounds African capability rather than dependence.',
    ],
    topics: ['AI governance', 'Cybersecurity', 'Data governance', 'Digital public infrastructure', 'Innovation ecosystems'],
  },
  {
    id: 'culture',
    n: 'V',
    verb: 'Rooting',
    theme: 'African Culture & Heritage',
    tone: 'brass',
    image: '/images/heritage-sahara.jpg',
    desc: 'Identity, language, heritage, the creative economy and intergenerational memory.',
    summary:
      'Civilisational confidence is an economic asset. Language, heritage and the creative economy shape how a society values its own ideas — and whether it builds for the long term.',
    body: [
      'Economic modernisation without cultural grounding produces fragile societies. A people that does not trust its own past struggles to invest in its own future. This pillar treats culture, language and heritage not as ornament but as the substrate on which institutions are legitimated.',
      'We look at the creative industries, music and storytelling, the repatriation and stewardship of heritage, language policy in law and education, and the intergenerational continuity that carries identity, memory and dignity forward.',
    ],
    topics: ['Creative economy', 'Language policy', 'Heritage & restitution', 'Identity & memory', 'Intergenerational continuity'],
  },
  {
    id: 'integration',
    n: 'VI',
    verb: 'Connecting',
    theme: 'Continental Integration',
    tone: 'indigo',
    image: '/images/integration-joburg.jpg',
    desc: 'AfCFTA, regional blocs, corridors, capital mobility and legal harmonisation.',
    summary:
      'A continent of 1.4 billion people negotiating as one market is a constitutional project as much as a trade one. AfCFTA, corridors and shared infrastructure are its instruments.',
    body: [
      'The African Continental Free Trade Area is the largest free-trade area in the world by membership. Realising it requires harmonised rules, credible dispute resolution and physical corridors that connect markets — a Pan-African constitutional order in miniature.',
      'This pillar tracks integration: AfCFTA and the regional blocs, strategic diplomacy, cross-border infrastructure, African capital mobility, legal harmonisation and the slow construction of shared, continental governance.',
    ],
    topics: ['AfCFTA', 'Regional blocs', 'Trade corridors', 'Capital mobility', 'Legal harmonisation'],
  },
];

export const getPillar = (id) => PILLARS.find((p) => p.id === id);
