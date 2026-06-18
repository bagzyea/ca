export const SITE = {
  name: 'Constitutional Africa',
  tagline: 'A Platform for Africa’s Constitutional-Economic Transformation',
  foundation: 'Founded under the auspices of the Tindira Foundation',
  email: 'hello@constitutionalafrica.org',
  // Newsletter: point this at your provider's form-action URL (Buttondown, Mailchimp,
  // ConvertKit, etc). If left empty the form simulates success locally.
  newsletterAction: '',
  socials: {
    spotify: 'https://open.spotify.com/',
    apple: 'https://podcasts.apple.com/',
    youtube: 'https://youtube.com/',
    rss: '/rss.xml',
  },
};

export const NAV = [
  { label: 'Work', to: '/work' },
  { label: 'Framework', to: '/framework' },
  { label: 'Listen', to: '/listen' },
  { label: 'Writing', to: '/writing' },
  { label: 'About', to: '/about' },
];

// Credibility band. Some values are computed from content at render time; the rest
// are editable here. Keep them honest.
export const STATS = [
  { value: '6', label: 'Pillars of analysis' },
  { value: '54', label: 'Nations in scope' },
  { key: 'episodes', label: 'Conversations' },   // count comes from episodes.js
  { key: 'articles', label: 'Briefs & essays' },  // count comes from articles.js
];

// Affiliations strip. These are PLACEHOLDERS — replace with the real institutions
// your guests/contributors come from (or swap for actual logo images).
export const AFFILIATIONS = [
  'University',
  'Policy Institute',
  'Central Bank',
  'Law School',
  'Development Bank',
  'Foundation',
];

// Audience-segmented entry points (rendered as an editorial index).
export const AUDIENCES = [
  {
    kicker: 'For readers',
    title: 'Briefs & essays',
    meta: 'Written analysis',
    desc: 'Durable writing examined through one lens — built to be worth revisiting a decade on.',
    to: '/writing',
    tone: 'indigo',
  },
  {
    kicker: 'For listeners',
    title: 'The conversations',
    meta: 'The podcast',
    desc: 'Long-form interviews with the economists, lawyers and builders shaping Africa’s rules.',
    to: '/listen',
    tone: 'brass',
  },
  {
    kicker: 'For institutions',
    title: 'Partner with us',
    meta: 'Collaboration',
    desc: 'A shared framework for reading the continent — bring it to your team or commission work.',
    to: '/join',
    tone: 'jade',
  },
];
