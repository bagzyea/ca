import { useState, useEffect } from 'react';

export default function App() {
  return (
    <div style={{ background: 'var(--ca-ivory)' }}>
      <Nav />
      <Hero />
      <Proposition />
      <Pillars />
      <Framework />
      <Conversations />
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
        background: 'rgba(246,241,228,0.92)',
        backdropFilter: 'blur(8px)',
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
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--ca-obsidian)', letterSpacing: '-0.01em', lineHeight: 1 }}>
              Constitutional Africa
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '8.5px', color: 'var(--ca-brass-700)', marginTop: 3, letterSpacing: '0.22em' }}>
              A PLATFORM OF THE TINDIRA FOUNDATION
            </div>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 30 }}>
          {[
            ['The Work', '#work'],
            ['The Framework', '#framework'],
            ['Conversations', '#conversations'],
            ['Archive', '#archive'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '13.5px',
                fontWeight: 400,
                color: 'var(--ca-obsidian)',
                textDecoration: 'none',
                paddingBottom: '3px',
                borderBottom: '2px solid transparent',
                transition: 'border-color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--ca-brass-500)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
            >
              {label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 34 }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'var(--ca-ink-soft)', letterSpacing: '0.1em', cursor: 'pointer' }}>
            EN
          </span>
          <button
            className="ca-btn solid"
            style={{
              padding: '9px 18px',
              fontSize: '12.5px',
              background: 'var(--ca-indigo-700)',
              border: '1.5px solid var(--ca-indigo-700)',
              color: 'var(--ca-ivory)',
              cursor: 'pointer',
            }}
          >
            Join
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const THEMES = ['Governance', 'Institutions', 'Infrastructure', 'Capital', 'Technology & AI', 'Integration', 'Culture & Heritage', 'Youth & Leadership'];

  return (
    <section
      id="top"
      style={{
        background: 'var(--ca-indigo-700)',
        color: 'var(--ca-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: -160,
          top: -120,
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      >
        <MeridianMark size={680} color="#F6F1E4" variant="latitudes" />
      </div>

      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '34px 56px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            gap: 20,
            alignItems: 'center',
            color: 'rgba(246,241,228,0.7)',
          }}
        >
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', letterSpacing: '0.26em' }}>
            SEASON ONE · MMXXVI
          </span>
          <div style={{ height: 1, background: 'var(--ca-rule-on-dark)' }} />
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', letterSpacing: '0.26em' }}>
            A PAN-AFRICAN PLATFORM
          </span>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '56px 56px 64px',
          display: 'grid',
          gridTemplateColumns: '1.62fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        <div>
          <div
            className="ca-eyebrow"
            style={{
              color: 'var(--ca-brass-300)',
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            African Constitutional Economics
          </div>
          <h1
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '74px',
              fontWeight: 300,
              lineHeight: 0.99,
              letterSpacing: '-0.035em',
              margin: '22px 0 0',
            }}
          >
            Interpreting Africa&apos;s <br />
            <span style={{ fontWeight: 600 }}>constitutional‑economic</span>
            <br />
            <span
              style={{
                fontFamily: 'IBM Plex Serif, serif',
                fontStyle: 'italic',
                fontWeight: 500,
                color: 'var(--ca-brass-300)',
              }}
            >
              transformation.
            </span>
          </h1>
          <p
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '18px',
              lineHeight: 1.55,
              opacity: 0.86,
              marginTop: 26,
              maxWidth: 560,
              fontWeight: 300,
            }}
          >
            A serious, hopeful, Pan-African conversation about the rules, institutions and infrastructure on which Africa&apos;s future will be built.
          </p>
          <div style={{ marginTop: 34, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="#conversations"
              className="ca-btn brass"
              style={{
                padding: '15px 24px',
                background: 'var(--ca-brass-500)',
                border: '1.5px solid var(--ca-brass-500)',
                color: 'var(--ca-obsidian)',
                textDecoration: 'none',
              }}
            >
              Listen to the conversations →
            </a>
            <a
              href="#framework"
              className="ca-btn"
              style={{
                padding: '15px 24px',
                borderColor: 'var(--ca-ivory)',
                color: 'var(--ca-ivory)',
                textDecoration: 'none',
              }}
            >
              Explore the framework
            </a>
          </div>
        </div>

        <div style={{ paddingTop: 6 }}>
          <div
            className="ca-img"
            style={{
              aspectRatio: '4/5',
              minHeight: 420,
              borderRadius: '4px',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(246,241,228,0.9)',
              }}
            >
              FIG · 01 · ARCHIVAL DUOTONE
            </span>
            <span
              style={{
                position: 'absolute',
                bottom: 12,
                left: 12,
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '9px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(246,241,228,0.7)',
              }}
            >
              constitutional assembly · chamber
            </span>
          </div>
          <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {THEMES.map((t) => (
              <span
                key={t}
                className="ca-chip"
                style={{
                  border: '1px solid var(--ca-rule-on-dark)',
                  color: 'rgba(246,241,228,0.82)',
                  borderColor: 'rgba(246,241,228,0.3)',
                  background: 'rgba(31, 90, 61, 0.1)',
                  color: 'var(--ca-ink)',
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
          padding: '88px 56px',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 48,
          alignItems: 'start',
        }}
      >
        <div
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            color: 'var(--ca-brass-700)',
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            alignSelf: 'stretch',
          }}
        >
          The Proposition
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
            Africa&apos;s future will be decided less by what lies beneath its soil than by the quality of the{' '}
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
              marginTop: 32,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              maxWidth: 880,
              alignItems: 'start',
            }}
          >
            <p
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '15.5px',
                lineHeight: 1.65,
                color: 'var(--ca-ink)',
                margin: 0,
              }}
            >
              This is the proposition of <b>African Constitutional Economics</b> — the framework at the heart of everything we do. It holds that constitutional and institutional design are not downstream of prosperity, but its precondition.
            </p>
            <p
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '15.5px',
                lineHeight: 1.65,
                color: 'var(--ca-ink-soft)',
                margin: 0,
              }}
            >
              Every conversation, brief and paper we publish is examined through that single analytical lens — and built to be worth revisiting a decade on.
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
          padding: '88px 56px 96px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 40,
            alignItems: 'end',
            marginBottom: 44,
          }}
        >
          <div>
            <div
              className="ca-eyebrow"
              style={{
                color: 'var(--ca-brass-700)',
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '11px',
                letterSpacing: '0.26em',
              }}
            >
              The Work
            </div>
            <h2
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '48px',
                fontWeight: 300,
                margin: '14px 0 0',
                letterSpacing: '-0.03em',
                color: 'var(--ca-obsidian)',
                lineHeight: 1.0,
              }}
            >
              Six pillars, <span style={{ fontFamily: 'IBM Plex Serif, serif', fontStyle: 'italic', fontWeight: 500, color: 'var(--ca-indigo-700)' }}>one continental story.</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '14.5px',
              lineHeight: 1.6,
              color: 'var(--ca-ink-soft)',
              maxWidth: 380,
              margin: 0,
            }}
          >
            Every conversation sits within one of six pillars — and is examined through a single analytical lens: African Constitutional Economics.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            border: '1px solid var(--ca-rule)',
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
                  padding: '30px 28px 26px',
                  minHeight: 268,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRight: col < 2 ? '1px solid var(--ca-rule)' : 'none',
                  borderTop: row > 0 ? '1px solid var(--ca-rule)' : 'none',
                  background: i % 2 === 0 ? 'var(--ca-paper)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ca-paper-2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? 'var(--ca-paper)' : 'transparent')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: 'IBM Plex Serif, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 26, color: accent }}>
                    {p.n}
                  </div>
                  <MeridianMark size={34} color={accent} variant="minimal" />
                </div>
                <h3
                  style={{
                    fontFamily: 'IBM Plex Serif, serif',
                    fontSize: '27px',
                    fontWeight: 600,
                    margin: '18px 0 0',
                    lineHeight: 1.0,
                    color: 'var(--ca-obsidian)',
                  }}
                >
                  {p.verb} <span style={{ color: accent }}>Africa</span>
                </h3>
                <div
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '10px',
                    color: 'var(--ca-ink-soft)',
                    letterSpacing: '0.12em',
                    marginTop: 10,
                    textTransform: 'uppercase',
                  }}
                >
                  {p.theme}
                </div>
                <p
                  style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontSize: '13px',
                    lineHeight: 1.55,
                    color: 'var(--ca-ink-soft)',
                    margin: '14px 0 0',
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>
                <a
                  href="#"
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '10px',
                    color: accent,
                    letterSpacing: '0.16em',
                    marginTop: 16,
                    textDecoration: 'none',
                  }}
                >
                  EXPLORE PILLAR →
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
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      >
        <MeridianMark size={760} color="#F6F1E4" variant="sealed" />
      </div>
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '90px 56px',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 72,
          alignItems: 'center',
        }}
      >
        <div>
          <div
            className="ca-eyebrow"
            style={{
              color: 'var(--ca-brass-300)',
              fontFamily: 'IBM Plex Mono, monospace',
            }}
          >
            The Analytical Lens
          </div>
          <h2
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '56px',
              fontWeight: 300,
              margin: '16px 0 0',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
            }}
          >
            African <br />
            <span style={{ fontWeight: 600 }}>Constitutional</span>
            <br />
            <span style={{ fontFamily: 'IBM Plex Serif, serif', fontStyle: 'italic', fontWeight: 500, color: 'var(--ca-brass-300)' }}>
              Economics.
            </span>
          </h2>
          <a
            href="#"
            className="ca-btn brass"
            style={{
              marginTop: 30,
              background: 'var(--ca-brass-500)',
              border: '1.5px solid var(--ca-brass-500)',
              color: 'var(--ca-obsidian)',
              textDecoration: 'none',
              padding: '15px 24px',
            }}
          >
            Explore the framework →
          </a>
        </div>
        <div>
          <p
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '23px',
              fontWeight: 400,
              lineHeight: 1.45,
              margin: 0,
              opacity: 0.92,
            }}
          >
            A framework for reading the continent: how the design of constitutions and institutions shapes investment, infrastructure, innovation and the long arc of African prosperity.
          </p>
          <div style={{ height: 1, background: 'var(--ca-rule-on-dark)', margin: '34px 0' }} />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 26,
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
                    fontSize: '16px',
                    fontWeight: 600,
                    margin: 0,
                    color: 'var(--ca-ivory)',
                  }}
                >
                  {h}
                </h3>
                <p
                  style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontSize: '13px',
                    lineHeight: 1.55,
                    margin: '8px 0 0',
                    opacity: 0.82,
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
      id="conversations"
      style={{
        background: 'var(--ca-ivory)',
        padding: '88px 56px',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div
            className="ca-eyebrow"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              color: 'var(--ca-brass-700)',
            }}
          >
            Latest Conversations
          </div>
          <h2
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '48px',
              fontWeight: 300,
              marginTop: 14,
              color: 'var(--ca-obsidian)',
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
              }}
            >
              <div
                className="ca-img"
                style={{
                  height: 160,
                  marginBottom: 16,
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '10px',
                  color: 'var(--ca-brass-700)',
                  marginBottom: 8,
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
                  fontWeight: 700,
                  color: 'var(--ca-ink)',
                  marginBottom: 8,
                  lineHeight: 1.3,
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
                }}
              >
                {ep.guest}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  className="ca-chip"
                  style={{
                    color: 'var(--ca-ink)',
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

function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ca-obsidian)',
        color: 'var(--ca-ivory)',
        padding: '60px 56px',
        borderTop: '1px solid var(--ca-rule-on-dark)',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 60,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: 16,
              opacity: 0.9,
            }}
          >
            NAVIGATION
          </h3>
          {['The Work', 'The Framework', 'Conversations', 'Archive'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                display: 'block',
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '13px',
                marginBottom: 8,
                opacity: 0.8,
                color: 'var(--ca-ivory)',
                textDecoration: 'none',
              }}
            >
              {link}
            </a>
          ))}
        </div>

        <div>
          <h3
            style={{
              fontFamily: 'IBM Plex Serif, serif',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: 16,
              opacity: 0.9,
            }}
          >
            LISTEN
          </h3>
          <p
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '13px',
              lineHeight: 1.6,
              opacity: 0.8,
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
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: 16,
              opacity: 0.9,
            }}
          >
            CONTACT
          </h3>
          <p
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '13px',
              opacity: 0.8,
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
        <p style={{ margin: 0 }}>© 2026 Constitutional Africa. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#" style={{ color: 'var(--ca-ivory)', textDecoration: 'none' }}>
            Privacy
          </a>
          <a href="#" style={{ color: 'var(--ca-ivory)', textDecoration: 'none' }}>
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
