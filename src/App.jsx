import { useState, useEffect } from 'react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ background: 'var(--ca-ivory)', overflowX: 'hidden' }}>
      <Nav />
      <Hero scrollY={scrollY} />
      <Proposition />
      <Pillars />
      <Framework />
      <Conversations />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(246,241,228,0.94)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--ca-rule)',
        transition: 'padding 0.2s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: scrolled ? '12px 56px' : '20px 56px',
          display: 'flex',
          alignItems: 'center',
          transition: 'padding 0.2s ease',
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 13, marginRight: 'auto', textDecoration: 'none' }}>
          <MeridianMark size={scrolled ? 32 : 38} />
          <div>
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 500, fontSize: 15, color: 'var(--ca-obsidian)', letterSpacing: '-0.01em', lineHeight: 1 }}>
              Constitutional Africa
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '8px', color: 'var(--ca-brass-700)', marginTop: 3, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              A Platform for African Thought
            </div>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 42 }}>
          {[
            ['Work', '#work'],
            ['Framework', '#framework'],
            ['Listen', '#listen'],
            ['About', '#about'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                color: 'var(--ca-obsidian)',
                textDecoration: 'none',
                paddingBottom: '4px',
                borderBottom: '2px solid transparent',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--ca-brass-500)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
            >
              {label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginLeft: 42 }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: 'var(--ca-ink-soft)', letterSpacing: '0.1em', cursor: 'pointer', textTransform: 'uppercase' }}>
            EN
          </span>
          <button
            className="ca-btn solid"
            style={{
              padding: '10px 20px',
              fontSize: '12px',
              background: 'var(--ca-indigo-700)',
              border: '1.5px solid var(--ca-indigo-700)',
              color: 'var(--ca-ivory)',
              cursor: 'pointer',
              borderRadius: '3px',
              fontWeight: 500,
            }}
          >
            Join
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ scrollY }) {
  const THEMES = ['Governance', 'Institutions', 'Infrastructure', 'Capital', 'Technology & AI', 'Integration', 'Culture & Heritage', 'Youth & Leadership'];

  return (
    <section
      id="top"
      style={{
        background: 'linear-gradient(135deg, var(--ca-indigo-700) 0%, #1a2f5a 100%)',
        color: 'var(--ca-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-12%',
          top: `-${scrollY * 0.15}px`,
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      >
        <MeridianMark size={720} color="#F6F1E4" variant="latitudes" />
      </div>

      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '40px 56px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            gap: 24,
            alignItems: 'center',
            color: 'rgba(246,241,228,0.65)',
            paddingBottom: '56px',
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
          }}
        >
          <span>2026</span>
          <div style={{ height: 1, background: 'rgba(246,241,228,0.2)' }} />
          <span>Pan-African Platform</span>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '48px 56px 88px',
          display: 'grid',
          gridTemplateColumns: '1.75fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--ca-brass-300)',
              marginBottom: '32px',
            }}
          >
            What We Study
          </div>
          <h1
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '62px',
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              margin: '0 0 36px 0',
              color: 'var(--ca-ivory)',
            }}
          >
            Constitutional economics as the lens for Africa's future
          </h1>
          <p
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '16px',
              lineHeight: 1.75,
              opacity: 0.87,
              maxWidth: 600,
              fontWeight: 400,
              color: 'rgba(246, 241, 228, 0.95)',
              marginBottom: '44px',
            }}
          >
            We believe Africa's future is determined not by what lies beneath the soil, but by the quality of the institutions and constitutional frameworks that guide investment, innovation, and shared prosperity.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#listen"
              style={{
                padding: '14px 28px',
                background: 'var(--ca-brass-500)',
                border: '1.5px solid var(--ca-brass-500)',
                color: 'var(--ca-obsidian)',
                textDecoration: 'none',
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontWeight: 500,
                fontSize: '13px',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--ca-brass-400)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--ca-brass-500)';
              }}
            >
              Listen Now →
            </a>
            <a
              href="#framework"
              style={{
                padding: '14px 28px',
                borderColor: 'rgba(246, 241, 228, 0.35)',
                border: '1.5px solid rgba(246, 241, 228, 0.35)',
                color: 'var(--ca-ivory)',
                textDecoration: 'none',
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontWeight: 400,
                fontSize: '13px',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(246, 241, 228, 0.7)';
                e.currentTarget.style.background = 'rgba(246, 241, 228, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(246, 241, 228, 0.35)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Learn Framework
            </a>
          </div>
        </div>

        <div style={{ paddingTop: 12 }}>
          <div
            className="ca-img"
            style={{
              aspectRatio: '4/5',
              minHeight: 440,
              borderRadius: '6px',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 16,
                left: 16,
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '8px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(246,241,228,0.65)',
              }}
            >
              Constitutional Assembly
            </span>
          </div>
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {THEMES.map((t) => (
              <span
                key={t}
                style={{
                  border: '1px solid rgba(246,241,228,0.22)',
                  color: 'rgba(246,241,228,0.72)',
                  background: 'rgba(246,241,228,0.05)',
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  padding: '6px 12px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(246,241,228,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(246,241,228,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(246,241,228,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(246,241,228,0.22)';
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Proposition() {
  return (
    <section style={{ background: 'var(--ca-paper)', borderBottom: '1px solid var(--ca-rule)' }}>
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '92px 56px',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 56,
          alignItems: 'start',
        }}
      >
        <div
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            color: 'var(--ca-brass-700)',
            fontSize: '10px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            alignSelf: 'stretch',
            marginTop: '8px',
          }}
        >
          Our Premise
        </div>
        <div>
          <p
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '42px',
              fontWeight: 400,
              lineHeight: 1.22,
              letterSpacing: '-0.015em',
              color: 'var(--ca-obsidian)',
              margin: 0,
              maxWidth: 1000,
            }}
          >
            Africa's future will be decided less by what lies beneath its soil than by the quality of the{' '}
            <span
              style={{
                fontStyle: 'italic',
                color: 'var(--ca-indigo-700)',
              }}
            >
              rules it chooses to live by.
            </span>
          </p>
          <div
            style={{
              marginTop: 40,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              maxWidth: 920,
              alignItems: 'start',
            }}
          >
            <p
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--ca-ink)',
                margin: 0,
              }}
            >
              This is the premise of <b>African Constitutional Economics</b> — the framework at the heart of everything we do. It holds that constitutional and institutional design are not downstream of prosperity, but its precondition.
            </p>
            <p
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--ca-ink-soft)',
                margin: 0,
              }}
            >
              Every conversation, brief, and analysis we publish is examined through that single lens — and built to be worth revisiting a decade on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const PILLARS = [
    { verb: 'Building', theme: 'Constitutionalism, Institutions & the State', desc: 'Governance, courts, regulators, strategic assets and the future African state.', n: 'I', tone: 'indigo' },
    { verb: 'Healing', theme: 'Peace, Memory & Human Belonging', desc: 'Conflict and reconstruction, belonging, citizenship and reconciliation.', n: 'II', tone: 'terra' },
    { verb: 'Rooting', theme: 'Culture, Heritage & Identity', desc: 'Identity, language, memory, the creative economies and civilisational confidence.', n: 'III', tone: 'brass' },
    { verb: 'Preparing', theme: 'Youth, Diaspora & the Future', desc: 'Youth leadership, innovation, enterprise and constitutional citizenship.', n: 'IV', tone: 'jade' },
    { verb: 'Sustaining', theme: 'Enterprise & Family Legacies', desc: 'African enterprise, resilience, succession and economic dignity.', n: 'V', tone: 'brass' },
    { verb: 'Connecting', theme: 'Integration & Shared Future', desc: 'AfCFTA, corridors, infrastructure and Pan-African systems.', n: 'VI', tone: 'indigo' },
  ];

  return (
    <section id="work" style={{ background: 'var(--ca-ivory)' }}>
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '92px 56px 104px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 48,
            alignItems: 'end',
            marginBottom: 52,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                color: 'var(--ca-brass-700)',
                fontSize: '10px',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Six Pillars
            </div>
            <h2
              style={{
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '44px',
                fontWeight: 400,
                margin: 0,
                letterSpacing: '-0.02em',
                color: 'var(--ca-obsidian)',
                lineHeight: 1.1,
              }}
            >
              One continental story
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '14px',
              lineHeight: 1.65,
              color: 'var(--ca-ink-soft)',
              maxWidth: 380,
              margin: 0,
            }}
          >
            Each pillar represents a dimension of Africa's constitutional and economic future, examined through rigorous analysis and conversation.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            border: '1px solid var(--ca-rule)',
            background: 'var(--ca-ivory)',
          }}
        >
          {PILLARS.map((p, i) => {
            const accentMap = {
              terra: 'var(--ca-terra-600)',
              brass: 'var(--ca-brass-700)',
              jade: 'var(--ca-jade-700)',
              indigo: 'var(--ca-indigo-700)',
            };
            const accent = accentMap[p.tone];
            const col = i % 3;
            const row = Math.floor(i / 3);

            return (
              <div
                key={p.verb}
                style={{
                  padding: '32px 28px',
                  minHeight: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRight: col < 2 ? '1px solid var(--ca-rule)' : 'none',
                  borderTop: row > 0 ? '1px solid var(--ca-rule)' : 'none',
                  background: i % 2 === 0 ? 'var(--ca-paper)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ca-paper-2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? 'var(--ca-paper)' : 'transparent')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div style={{ fontFamily: 'IBM Plex Serif, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: accent }}>
                    {p.n}
                  </div>
                  <div style={{ opacity: 0.5 }}>
                    <MeridianMark size={30} color={accent} variant="minimal" />
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: 'IBM Plex Serif, serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    margin: '4px 0 12px',
                    lineHeight: 1.1,
                    color: 'var(--ca-obsidian)',
                  }}
                >
                  {p.verb} <span style={{ color: accent }}>Africa</span>
                </h3>
                <div
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '9px',
                    color: accent,
                    letterSpacing: '0.14em',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    opacity: 0.75,
                  }}
                >
                  {p.theme}
                </div>
                <p
                  style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: 'var(--ca-ink-soft)',
                    margin: '0 0 16px 0',
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>
                <a
                  href="#"
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '9px',
                    color: accent,
                    letterSpacing: '0.16em',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'letter-spacing 0.15s ease',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = '0.24em')}
                  onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = '0.16em')}
                >
                  Explore
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Framework() {
  return (
    <section
      id="framework"
      style={{
        background: 'var(--ca-obsidian)',
        color: 'var(--ca-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      >
        <MeridianMark size={760} color="#F6F1E4" variant="sealed" />
      </div>
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '96px 56px',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              color: 'var(--ca-brass-300)',
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            The Framework
          </div>
          <h2
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '48px',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
            }}
          >
            African <br />
            <span style={{ fontWeight: 500 }}>Constitutional</span>
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--ca-brass-300)' }}>Economics.</span>
          </h2>
          <a
            href="#"
            style={{
              marginTop: 32,
              padding: '14px 28px',
              background: 'var(--ca-brass-500)',
              border: '1.5px solid var(--ca-brass-500)',
              color: 'var(--ca-obsidian)',
              textDecoration: 'none',
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              borderRadius: '3px',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--ca-brass-400)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--ca-brass-500)';
            }}
          >
            Explore Framework →
          </a>
        </div>
        <div>
          <p
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
              opacity: 0.92,
            }}
          >
            A framework for reading the continent: how the design of constitutions and institutions shapes investment, infrastructure, innovation and the long arc of African prosperity.
          </p>
          <div style={{ height: 1, background: 'var(--ca-rule-on-dark)', margin: '36px 0' }} />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 28,
            }}
          >
            {[
              ['The rules', 'Constitutions, rights and the separation of powers — the source code of a state.'],
              ['The institutions', 'Courts, regulators and the credibility that compounds into trust.'],
              ['The infrastructure', 'The physical and digital layer on which sovereignty is exercised.'],
              ['The capital', 'How law shapes investor confidence and commercial certainty.'],
            ].map(([h, d]) => (
              <div key={h}>
                <h3
                  style={{
                    fontFamily: 'IBM Plex Serif, serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    margin: 0,
                    color: 'var(--ca-ivory)',
                    marginBottom: '6px',
                  }}
                >
                  {h}
                </h3>
                <p
                  style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontSize: '13px',
                    lineHeight: 1.55,
                    margin: 0,
                    opacity: 0.8,
                  }}
                >
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Conversations() {
  return (
    <section
      id="listen"
      style={{
        background: 'var(--ca-ivory)',
        padding: '96px 56px',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              color: 'var(--ca-brass-700)',
              fontSize: '10px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Latest Conversations
          </div>
          <h2
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '44px',
              fontWeight: 400,
              marginTop: 0,
              color: 'var(--ca-obsidian)',
              margin: 0,
            }}
          >
            The Podcast
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 28,
          }}
        >
          {[
            { n: 'EP 08', title: 'The Constitutional Logic of Monetary Union', guest: 'Prof. Janine Mukiza', duration: '52 MIN' },
            { n: 'EP 07', title: 'Land Rights and the Future of Agriculture', guest: 'Dr. Kofi Anane', duration: '48 MIN' },
            { n: 'EP 06', title: 'Pan-African Integration Through ACE', guest: 'Dr. Amara Okonkwo', duration: '55 MIN' },
          ].map((ep, i) => (
            <div
              key={i}
              style={{
                background: 'var(--ca-paper)',
                padding: 24,
                border: '1px solid var(--ca-rule)',
                borderRadius: 4,
                transition: 'all 0.15s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(26, 32, 48, 0.08)';
                e.currentTarget.style.borderColor = 'var(--ca-brass-500)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--ca-rule)';
              }}
            >
              <div
                className="ca-img"
                style={{
                  height: 160,
                  marginBottom: 16,
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '10px',
                  color: 'var(--ca-brass-700)',
                  marginBottom: 10,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                {ep.n}
              </div>
              <h3
                style={{
                  fontFamily: 'IBM Plex Serif, serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--ca-ink)',
                  marginBottom: 8,
                  lineHeight: 1.3,
                  margin: '0 0 8px 0',
                }}
              >
                {ep.title}
              </h3>
              <p
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontSize: '13px',
                  color: 'var(--ca-ink-soft)',
                  marginBottom: 16,
                  margin: '0 0 16px 0',
                }}
              >
                {ep.guest}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    color: 'var(--ca-ink)',
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {ep.duration}
                </span>
                <button
                  style={{
                    background: 'var(--ca-brass-600)',
                    color: 'var(--ca-ivory)',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 2,
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontWeight: 600,
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--ca-brass-500)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--ca-brass-600)';
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

function CTA() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--ca-indigo-700)',
        color: 'var(--ca-ivory)',
        padding: '88px 56px',
      }}
    >
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'IBM Plex Serif, serif',
            fontSize: '44px',
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: '24px',
          }}
        >
          Join the conversation about Africa's future
        </h2>
        <p
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontSize: '16px',
            lineHeight: 1.7,
            opacity: 0.88,
            marginBottom: '36px',
            margin: '0 auto 36px',
          }}
        >
          Subscribe to receive the latest episodes, research briefs, and analysis on African constitutional economics.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              padding: '12px 18px',
              border: '1.5px solid rgba(246, 241, 228, 0.35)',
              background: 'rgba(246, 241, 228, 0.08)',
              color: 'var(--ca-ivory)',
              borderRadius: '3px',
              fontSize: '14px',
              minWidth: '280px',
              outline: 'none',
              transition: 'all 0.2s ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(246, 241, 228, 0.6)';
              e.currentTarget.style.background = 'rgba(246, 241, 228, 0.12)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(246, 241, 228, 0.35)';
              e.currentTarget.style.background = 'rgba(246, 241, 228, 0.08)';
            }}
          />
          <button
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              padding: '12px 28px',
              background: 'var(--ca-brass-500)',
              border: 'none',
              color: 'var(--ca-obsidian)',
              cursor: 'pointer',
              borderRadius: '3px',
              fontWeight: 500,
              fontSize: '14px',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--ca-brass-400)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--ca-brass-500)';
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ca-obsidian)',
        color: 'var(--ca-ivory)',
        padding: '64px 56px',
        borderTop: '1px solid var(--ca-rule-on-dark)',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
          marginBottom: 56,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: 16,
              opacity: 0.9,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Navigate
          </h3>
          {['Work', 'Framework', 'Listen', 'About'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                display: 'block',
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '13px',
                marginBottom: 10,
                opacity: 0.75,
                color: 'var(--ca-ivory)',
                textDecoration: 'none',
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
            >
              {link}
            </a>
          ))}
        </div>

        <div>
          <h3
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: 16,
              opacity: 0.9,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Listen
          </h3>
          <p
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '13px',
              lineHeight: 1.6,
              opacity: 0.75,
              margin: 0,
            }}
          >
            Available on Spotify, Apple Podcasts, YouTube, and RSS.
          </p>
        </div>

        <div>
          <h3
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: 16,
              opacity: 0.9,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Contact
          </h3>
          <p
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '13px',
              opacity: 0.75,
              margin: 0,
            }}
          >
            hello@constitutionalafrica.org
          </p>
        </div>
      </div>

      <hr style={{ background: 'var(--ca-rule-on-dark)', border: 'none', height: 1, marginBottom: 24 }} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          opacity: 0.6,
        }}
      >
        <p style={{ margin: 0 }}>© 2026 Constitutional Africa</p>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#" style={{ color: 'var(--ca-ivory)', textDecoration: 'none', opacity: 0.6, transition: 'opacity 0.15s ease' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}>
            Privacy
          </a>
          <a href="#" style={{ color: 'var(--ca-ivory)', textDecoration: 'none', opacity: 0.6, transition: 'opacity 0.15s ease' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}>
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

function MeridianMark({ size = 40, color = 'currentColor', variant = 'default' }) {
  const variants = {
    default: () => (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.5" />
        <line x1="20" y1="4" x2="20" y2="36" stroke={color} strokeWidth="1.5" />
        <line x1="4" y1="20" x2="36" y2="20" stroke={color} strokeWidth="1.5" />
      </svg>
    ),
    minimal: () => (
      <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="13" stroke={color} strokeWidth="1.2" />
        <path d="M15 5 A10 10 0 1 0 15 25 A10 10 0 0 0 15 5" fill="none" stroke={color} strokeWidth="1.2" />
      </svg>
    ),
    sealed: () => (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <line x1="20" y1="8" x2="20" y2="32" stroke={color} strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    latitudes: () => (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1" />
        <line x1="2" y1="20" x2="38" y2="20" stroke={color} strokeWidth="1" />
        <line x1="4" y1="12" x2="36" y2="12" stroke={color} strokeWidth="0.8" opacity="0.6" />
        <line x1="4" y1="28" x2="36" y2="28" stroke={color} strokeWidth="0.8" opacity="0.6" />
      </svg>
    ),
  };

  return variants[variant] ? variants[variant]() : variants.default();
}
