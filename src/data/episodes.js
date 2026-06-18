// Podcast episodes. `id` is the URL slug (/episode/:id).
// `spotifyEmbed` / `appleEmbed`: paste the provider embed URL to enable the inline player.
export const EPISODES = [
  {
    id: 'ep-08-monetary-union',
    n: 'EP 08',
    title: 'The Constitutional Logic of Monetary Union',
    guest: 'Prof. Janine Mukiza',
    guestTitle: 'Monetary economist, University of Kigali',
    duration: '52 MIN',
    date: '2026-05-28',
    pillar: 'integration',
    image: '/images/guest-woman-1.jpg',
    summary:
      'What does it actually take, constitutionally, to share a currency? Prof. Mukiza on the rules a monetary union needs before it needs a central bank.',
    spotifyEmbed: '',
    appleEmbed: '',
    notes: [
      'Why monetary union is a constitutional commitment device, not just a monetary one.',
      'The fiscal rules a shared currency presupposes — and why they fail.',
      'Lessons from the CFA franc zone and the eurozone for African integration.',
    ],
  },
  {
    id: 'ep-07-land-rights',
    n: 'EP 07',
    title: 'Land Rights and the Future of Agriculture',
    guest: 'Dr. Kofi Anane',
    guestTitle: 'Land economist & policy advisor',
    duration: '48 MIN',
    date: '2026-05-14',
    pillar: 'economic-transformation',
    image: '/images/guest-man.jpg',
    summary:
      'Secure, transferable land rights are the hinge on which agricultural investment turns. Dr. Anane on titling, customary tenure and the politics of reform.',
    spotifyEmbed: '',
    appleEmbed: '',
    notes: [
      'Why customary tenure is a feature, not a bug — and how to register it.',
      'The investment that only happens once land can be used as collateral.',
      'Where land reform has gone wrong, and the institutional reasons why.',
    ],
  },
  {
    id: 'ep-06-integration-ace',
    n: 'EP 06',
    title: 'Pan-African Integration Through ACE',
    guest: 'Dr. Amara Okonkwo',
    guestTitle: 'Trade lawyer & AfCFTA negotiator',
    duration: '55 MIN',
    date: '2026-04-30',
    pillar: 'integration',
    image: '/images/guest-woman-2.jpg',
    summary:
      'Reading the African Continental Free Trade Area through the lens of constitutional economics: rules, enforcement, and the architecture of shared sovereignty.',
    spotifyEmbed: '',
    appleEmbed: '',
    notes: [
      'What makes a trade rule credible enough to invest behind.',
      'Dispute settlement as the real test of AfCFTA.',
      'The corridors and payment rails that turn a treaty into a market.',
    ],
  },
];

export const getEpisode = (id) => EPISODES.find((e) => e.id === id);
