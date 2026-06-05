import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--ca-ivory)' }}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'podcast' && <PodcastPage />}
        {currentPage === 'insights' && <InsightsPage />}
        {currentPage === 'ace' && <ACEPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

function Header({ currentPage, setCurrentPage }) {
  return (
    <header style={{ background: 'var(--ca-ivory)', borderBottom: '1px solid var(--ca-rule)' }}>
      <div className="wrap" style={{ padding: '20px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <h1 style={{
            fontFamily: 'IBM Plex Serif, serif',
            fontSize: '20px',
            fontWeight: 600,
            color: 'var(--ca-ink)',
            margin: 0,
          }}>
            Constitutional Africa
          </h1>
        </button>

        <nav style={{ display: 'flex', gap: '32px' }}>
          {[
            { label: 'Podcast', value: 'podcast' },
            { label: 'Insights', value: 'insights' },
            { label: 'ACE Framework', value: 'ace' },
            { label: 'About', value: 'about' },
          ].map(item => (
            <button
              key={item.value}
              onClick={() => setCurrentPage(item.value)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '14px',
                fontWeight: currentPage === item.value ? 600 : 400,
                color: currentPage === item.value ? 'var(--ca-brass-600)' : 'var(--ca-ink)',
                borderBottom: currentPage === item.value ? '2px solid var(--ca-brass-600)' : 'none',
                padding: '4px 0',
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: 'var(--ca-paper)', borderBottom: '1.5px solid var(--ca-ink)' }}>
        <div className="wrap" style={{ padding: '60px 56px', display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '36px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              <span className="ca-chip" style={{ color: 'var(--ca-ink)' }}>ISSUE 01</span>
              <span className="ca-chip" style={{ color: 'var(--ca-ink)' }}>EST. 2026</span>
              <span className="ca-chip" style={{ color: 'var(--ca-ink)' }}>EN · FR · SW</span>
            </div>

            <h2 style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--ca-ink)',
              marginBottom: '24px',
              maxWidth: '600px',
            }}>
              Africa's transformation is, before anything else, a <em style={{ fontStyle: 'italic' }}>constitutional</em> question.
            </h2>

            <p style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'var(--ca-ink-soft)',
              maxWidth: '560px',
              marginBottom: '32px',
            }}>
              We explore the foundational constitutional and economic frameworks that enable Africa's continental development. Through rigorous analysis, we examine institutions, policy, and the emerging field of African Constitutional Economics.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button
                onClick={() => { /* manifesto */ }}
                className="ca-btn solid"
                style={{ background: 'var(--ca-ink)', color: 'var(--ca-ivory)' }}
              >
                Read the Manifesto →
              </button>
              <button
                onClick={() => setCurrentPage('podcast')}
                className="ca-btn"
              >
                Listen to Podcast
              </button>
            </div>
          </div>

          <div
            className="ca-img"
            style={{
              height: '360px',
              borderRadius: '4px',
            }}
          >
            <div style={{ padding: '14px', width: '100%' }}>
              <div className="ca-img-label">Hero Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section style={{ borderBottom: '1.5px solid var(--ca-rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr' }}>
          {/* Dark section */}
          <div style={{
            background: 'var(--ca-obsidian)',
            color: 'var(--ca-ivory)',
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div className="ca-eyebrow" style={{ color: 'rgba(246, 241, 228, 0.7)' }}>
              Latest Episode
            </div>
            <h3 style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '28px',
              fontWeight: 700,
              marginTop: '16px',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}>
              The Constitutional Logic of the AfCFTA
            </h3>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.6,
              marginBottom: '24px',
              color: 'rgba(246, 241, 228, 0.85)',
            }}>
              Examining the continental trade agreement as a constitutional moment for Africa's economic integration and sovereignty.
            </p>
            <button
              onClick={() => setCurrentPage('podcast')}
              style={{
                alignSelf: 'flex-start',
                background: 'none',
                border: '1.5px solid var(--ca-ivory)',
                color: 'var(--ca-ivory)',
                padding: '12px 24px',
                cursor: 'pointer',
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: 'auto',
              }}
            >
              ▶ Play Episode
            </button>
            <div style={{
              marginTop: '24px',
              display: 'flex',
              gap: '12px',
              fontSize: '11px',
              opacity: 0.8,
              fontFamily: 'IBM Plex Mono, monospace',
            }}>
              <span>SPOTIFY</span>
              <span>·</span>
              <span>APPLE PODCASTS</span>
              <span>·</span>
              <span>YOUTUBE</span>
            </div>
          </div>

          {/* Recent Episodes */}
          <div style={{ padding: '48px 40px' }}>
            <div className="ca-eyebrow" style={{ marginBottom: '32px' }}>UPCOMING & RECENT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {recentEpisodes.map((ep, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '16px', alignItems: 'center', paddingBottom: '24px', borderBottom: i !== recentEpisodes.length - 1 ? '1px dashed var(--ca-rule)' : 'none' }}>
                  <div className="ca-img" style={{ height: '60px', borderRadius: '2px' }} />
                  <div>
                    <p style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '14px', fontWeight: 600, color: 'var(--ca-ink)', marginBottom: '6px' }}>
                      {ep.title}
                    </p>
                    <p style={{ fontSize: '12px', color: 'var(--ca-ink-soft)' }}>
                      {ep.guest}
                    </p>
                  </div>
                  <div className="ca-chip" style={{ color: 'var(--ca-ink)' }}>{ep.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section style={{ padding: '60px 56px' }}>
        <div className="wrap">
          <div style={{ marginBottom: '48px' }}>
            <div className="ca-eyebrow">Strategic Insights</div>
            <h2 style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '36px',
              fontWeight: 700,
              marginTop: '12px',
              color: 'var(--ca-ink)',
            }}>
              Latest Analysis
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {insights.map((insight, i) => (
              <article key={i} style={{ cursor: 'pointer' }}>
                <div className="ca-img" style={{ height: '240px', marginBottom: '20px', borderRadius: '4px' }} />
                <div className="ca-eyebrow" style={{ marginBottom: '8px' }}>{insight.category}</div>
                <h3 style={{
                  fontFamily: 'IBM Plex Serif, serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--ca-ink)',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}>
                  {insight.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--ca-ink-soft)',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}>
                  {insight.excerpt}
                </p>
                <button
                  onClick={() => setCurrentPage('insights')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--ca-brass-600)',
                    cursor: 'pointer',
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                  }}
                >
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PodcastPage() {
  return (
    <section style={{ padding: '60px 56px' }}>
      <div className="wrap">
        <div style={{ marginBottom: '48px' }}>
          <div className="ca-eyebrow">Multimedia Content</div>
          <h1 style={{
            fontFamily: 'IBM Plex Serif, serif',
            fontSize: '42px',
            fontWeight: 700,
            marginTop: '12px',
            color: 'var(--ca-ink)',
            marginBottom: '12px',
          }}>
            Constitutional Africa Podcast
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--ca-ink-soft)',
            maxWidth: '700px',
            lineHeight: 1.7,
          }}>
            Deep-dive conversations with leading African thinkers, policymakers, and economists exploring constitutional frameworks, economic policy, and continental development.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          {allEpisodes.map((ep, i) => (
            <div key={i} style={{
              background: 'var(--ca-paper)',
              padding: '20px',
              borderRadius: '4px',
              border: '1px solid var(--ca-rule)',
            }}>
              <div className="ca-img" style={{ height: '160px', marginBottom: '16px', borderRadius: '2px' }} />
              <div className="ca-eyebrow" style={{ marginBottom: '8px' }}>{ep.number}</div>
              <h3 style={{
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--ca-ink)',
                marginBottom: '8px',
                lineHeight: 1.3,
              }}>
                {ep.title}
              </h3>
              <p style={{
                fontSize: '12px',
                color: 'var(--ca-ink-soft)',
                marginBottom: '12px',
              }}>
                {ep.guest}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="ca-chip" style={{ color: 'var(--ca-ink)' }}>{ep.duration}</span>
                <button
                  style={{
                    background: 'var(--ca-brass-600)',
                    color: 'var(--ca-ivory)',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontWeight: 600,
                  }}
                >
                  ▶ Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsPage() {
  return (
    <section style={{ padding: '60px 56px' }}>
      <div className="wrap">
        <div style={{ marginBottom: '48px' }}>
          <div className="ca-eyebrow">Strategic Analysis</div>
          <h1 style={{
            fontFamily: 'IBM Plex Serif, serif',
            fontSize: '42px',
            fontWeight: 700,
            marginTop: '12px',
            color: 'var(--ca-ink)',
            marginBottom: '12px',
          }}>
            Insights & Research
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--ca-ink-soft)',
            maxWidth: '700px',
            lineHeight: 1.7,
          }}>
            In-depth research, policy briefs, and strategic analysis on African constitutional economics and institutional development.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {allInsights.map((article, i) => (
            <article key={i} style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '32px',
              alignItems: 'start',
              paddingBottom: '32px',
              borderBottom: i !== allInsights.length - 1 ? '1px solid var(--ca-rule)' : 'none',
            }}>
              <div className="ca-img" style={{ height: '200px', borderRadius: '4px' }} />
              <div>
                <div className="ca-eyebrow" style={{ marginBottom: '12px' }}>{article.category}</div>
                <h2 style={{
                  fontFamily: 'IBM Plex Serif, serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: 'var(--ca-ink)',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}>
                  {article.title}
                </h2>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--ca-ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                  maxWidth: '600px',
                }}>
                  {article.excerpt}
                </p>
                <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: 'var(--ca-ink-faint)' }}>
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ACEPage() {
  return (
    <section>
      <div className="wrap" style={{ padding: '60px 56px' }}>
        <div style={{ marginBottom: '48px' }}>
          <div className="ca-eyebrow">Frameworks & Theory</div>
          <h1 style={{
            fontFamily: 'IBM Plex Serif, serif',
            fontSize: '42px',
            fontWeight: 700,
            marginTop: '12px',
            color: 'var(--ca-ink)',
            marginBottom: '20px',
          }}>
            African Constitutional Economics
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--ca-ink-soft)',
            maxWidth: '800px',
            lineHeight: 1.8,
          }}>
            African Constitutional Economics (ACE) is an emerging framework that places constitutional governance at the center of continental economic policy. It examines how institutional design, sovereignty, and constitutional mandates shape Africa's development trajectory.
          </p>
        </div>
      </div>

      <hr style={{ background: 'var(--ca-rule)', border: 'none', height: '1px', margin: '40px 0' }} />

      <div className="wrap" style={{ padding: '0 56px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {aceFramework.map((pillar, i) => (
            <div key={i}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--ca-brass-400)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '24px',
                color: 'var(--ca-obsidian)',
                marginBottom: '20px',
              }}>
                {i + 1}
              </div>
              <h3 style={{
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--ca-ink)',
                marginBottom: '12px',
              }}>
                {pillar.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: 'var(--ca-ink-soft)',
                lineHeight: 1.7,
              }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section style={{ padding: '60px 56px' }}>
      <div className="wrap">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'IBM Plex Serif, serif',
            fontSize: '42px',
            fontWeight: 700,
            color: 'var(--ca-ink)',
            marginBottom: '32px',
          }}>
            About Constitutional Africa
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h2 style={{
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--ca-ink)',
                marginBottom: '16px',
              }}>
                Our Mission
              </h2>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'var(--ca-ink-soft)',
              }}>
                Constitutional Africa is a serious intellectual platform dedicated to advancing African thought on continental governance, economic policy, and institutional development. We operate as a continental policy institute through rigorous research, thought leadership, and public discourse.
              </p>
            </div>

            <hr style={{ background: 'var(--ca-rule)', border: 'none', height: '1px' }} />

            <div>
              <h2 style={{
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--ca-ink)',
                marginBottom: '16px',
              }}>
                Our Values
              </h2>
              <ul style={{ listStylePosition: 'inside', fontSize: '16px', lineHeight: 1.8, color: 'var(--ca-ink-soft)' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--ca-ink)' }}>Seriousness</strong> — We engage with continental intellectual discourse at the highest standards
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--ca-ink)' }}>Depth</strong> — Rigorous analysis of constitutional and economic frameworks
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--ca-ink)' }}>Access</strong> — Digital-first, mobile-optimized for African audiences
                </li>
                <li>
                  <strong style={{ color: 'var(--ca-ink)' }}>Innovation</strong> — Developing new frameworks for African economic thought
                </li>
              </ul>
            </div>

            <hr style={{ background: 'var(--ca-rule)', border: 'none', height: '1px' }} />

            <div>
              <h2 style={{
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--ca-ink)',
                marginBottom: '16px',
              }}>
                What We Do
              </h2>
              <ul style={{ listStylePosition: 'inside', fontSize: '16px', lineHeight: 1.8, color: 'var(--ca-ink-soft)' }}>
                <li style={{ marginBottom: '12px' }}>🎙️ Produce and host a premier policy podcast</li>
                <li style={{ marginBottom: '12px' }}>📊 Conduct strategic research and publish analysis</li>
                <li style={{ marginBottom: '12px' }}>🏛️ Develop the African Constitutional Economics framework</li>
                <li>🌍 Convene continental thought leaders and policymakers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer style={{
      background: 'var(--ca-obsidian)',
      color: 'var(--ca-ivory)',
      padding: '60px 56px',
      marginTop: '80px',
      borderTop: '1px solid var(--ca-rule-on-dark)',
    }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h3 style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              opacity: 0.9,
            }}>
              NAVIGATION
            </h3>
            {['podcast', 'insights', 'ace', 'about'].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  display: 'block',
                  background: 'none',
                  border: 'none',
                  color: 'var(--ca-ivory)',
                  cursor: 'pointer',
                  fontSize: '13px',
                  marginBottom: '8px',
                  opacity: 0.8,
                  textAlign: 'left',
                  padding: 0,
                }}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>

          <div>
            <h3 style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              opacity: 0.9,
            }}>
              LISTEN
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, opacity: 0.8 }}>
              Available on Spotify, Apple Podcasts, YouTube, and RSS.
            </p>
          </div>

          <div>
            <h3 style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              opacity: 0.9,
            }}>
              CONTACT
            </h3>
            <p style={{ fontSize: '13px', opacity: 0.8 }}>
              hello@constitutionalafrica.org
            </p>
          </div>
        </div>

        <hr style={{ background: 'var(--ca-rule-on-dark)', border: 'none', height: '1px', marginBottom: '24px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', opacity: 0.6 }}>
          <p>© 2026 Constitutional Africa. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--ca-ivory)', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'var(--ca-ivory)', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Data */
const recentEpisodes = [
  { title: 'The AfCFTA & Continental Integration', guest: 'Dr. Kwame Asante', duration: '42 MIN' },
  { title: 'Monetary Sovereignty in Post-Colonial Africa', guest: 'Dr. Amara Okonkwo', duration: '48 MIN' },
  { title: 'Land Rights & Constitutional Design', guest: 'Prof. Adeyemi', duration: '38 MIN' },
];

const allEpisodes = [
  { number: 'EP 04', title: 'The Constitutional Logic of the AfCFTA', guest: 'Dr. Kwame Asante', duration: '42 MIN' },
  { number: 'EP 03', title: 'Monetary Sovereignty in Post-Colonial Africa', guest: 'Dr. Amara Okonkwo', duration: '48 MIN' },
  { number: 'EP 02', title: 'Land Rights & Constitutional Design', guest: 'Prof. Adeyemi', duration: '38 MIN' },
  { number: 'EP 01', title: 'Rethinking African Constitutionalism', guest: 'Prof. J. Ndlela', duration: '45 MIN' },
];

const insights = [
  {
    category: 'POLICY BRIEF',
    title: 'The Constitutional Foundations of Economic Integration',
    excerpt: 'Examining how African constitutional frameworks can support or constrain continental trade and monetary cooperation.',
  },
  {
    category: 'ANALYSIS',
    title: 'Sovereignty and Supranational Institutions',
    excerpt: 'A deep dive into the tension between national sovereignty and continental institutional frameworks.',
  },
  {
    category: 'RESEARCH',
    title: 'Land as Constitutional Matter',
    excerpt: 'How constitutional design around property rights shapes agricultural productivity and development outcomes.',
  },
];

const allInsights = [
  {
    category: 'POLICY BRIEF',
    title: 'The Constitutional Foundations of Economic Integration',
    excerpt: 'Examining how African constitutional frameworks can support or constrain continental trade and monetary cooperation. We analyze case studies from the AU, AfCFTA, and regional bodies.',
    date: 'June 5, 2026',
    readTime: '8 min read',
  },
  {
    category: 'ANALYSIS',
    title: 'Sovereignty and Supranational Institutions',
    excerpt: 'A deep dive into the tension between national sovereignty and continental institutional frameworks. What do African states gain and lose in institutional arrangements?',
    date: 'June 1, 2026',
    readTime: '12 min read',
  },
  {
    category: 'RESEARCH',
    title: 'Land as Constitutional Matter',
    excerpt: 'How constitutional design around property rights shapes agricultural productivity and development outcomes across the continent.',
    date: 'May 28, 2026',
    readTime: '10 min read',
  },
  {
    category: 'FRAMEWORK',
    title: 'African Constitutional Economics: A New Paradigm',
    excerpt: 'Introducing the foundational concepts and principles of ACE as an analytical framework for understanding African development.',
    date: 'May 20, 2026',
    readTime: '15 min read',
  },
];

const aceFramework = [
  {
    title: 'Constitutional Governance',
    description: 'How constitutional design and institutional frameworks shape economic outcomes. We examine separation of powers, checks and balances, and accountability mechanisms.',
  },
  {
    title: 'Sovereignty & Integration',
    description: 'The relationship between national sovereignty and supranational institutions. How can African states balance continental integration with maintaining policy autonomy?',
  },
  {
    title: 'Property & Land Rights',
    description: 'Constitutional frameworks around property rights, land tenure, and resource management. These foundational rights shape investment, productivity, and equity.',
  },
  {
    title: 'Monetary & Fiscal Union',
    description: 'The constitutional prerequisites for monetary union and fiscal coordination. What institutional arrangements enable sustainable continental monetary systems?',
  },
];
