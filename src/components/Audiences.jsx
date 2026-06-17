import { Link } from 'react-router-dom';
import { FONT, TONE, Container, Eyebrow, useViewport } from './ui';
import MeridianMark from './MeridianMark';
import { AUDIENCES } from '../data/site';

export default function Audiences() {
  const { isMobile } = useViewport();

  return (
    <section style={{ background: 'var(--ca-paper)', borderTop: '1px solid var(--ca-rule)', borderBottom: '1px solid var(--ca-rule)' }}>
      <Container style={{ padding: isMobile ? '56px 24px' : '96px 56px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.82fr 1.18fr', gap: isMobile ? 40 : 80, alignItems: 'start' }}>
        {/* Intro column */}
        <div>
          <Eyebrow style={{ marginBottom: 16 }}>Where to start</Eyebrow>
          <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 32 : 44, fontWeight: 400, color: 'var(--ca-obsidian)', margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Three ways <span style={{ fontStyle: 'italic', color: 'var(--ca-brass-700)' }}>in</span>
          </h2>
          <p style={{ fontFamily: FONT.sans, fontSize: 16, lineHeight: 1.7, color: 'var(--ca-ink-soft)', margin: 0, maxWidth: 360 }}>
            One body of work, examined through a single lens. Enter it wherever it suits you — to read, to listen, or to build alongside us.
          </p>
          {!isMobile && (
            <div style={{ marginTop: 40, opacity: 0.25 }}>
              <MeridianMark size={64} color="var(--ca-indigo-700)" variant="latitudes" />
            </div>
          )}
        </div>

        {/* Editorial index */}
        <div style={{ borderTop: '1px solid var(--ca-rule)' }}>
          {AUDIENCES.map((a, i) => {
            const accent = TONE[a.tone];
            return (
              <Link
                key={a.kicker}
                to={a.to}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'auto 1fr auto' : '64px 1fr auto',
                  alignItems: 'center',
                  gap: isMobile ? 16 : 28,
                  padding: isMobile ? '24px 12px' : '30px 20px',
                  borderBottom: '1px solid var(--ca-rule)',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--ca-ivory)';
                  e.currentTarget.style.boxShadow = `inset 3px 0 0 ${accent}`;
                  const arrow = e.currentTarget.querySelector('.aud-arrow');
                  if (arrow) { arrow.style.transform = 'translateX(4px)'; arrow.style.color = accent; }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                  const arrow = e.currentTarget.querySelector('.aud-arrow');
                  if (arrow) { arrow.style.transform = 'translateX(0)'; arrow.style.color = 'var(--ca-ink-faint)'; }
                }}
              >
                <span style={{ fontFamily: FONT.serif, fontStyle: 'italic', fontWeight: 400, fontSize: isMobile ? 30 : 42, color: accent, lineHeight: 1 }}>
                  {`0${i + 1}`}
                </span>
                <div>
                  <div style={{ fontFamily: FONT.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent, marginBottom: 8 }}>
                    {a.kicker} · {a.meta}
                  </div>
                  <h3 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 22 : 26, fontWeight: 600, color: 'var(--ca-obsidian)', margin: '0 0 6px', lineHeight: 1.15 }}>
                    {a.title}
                  </h3>
                  <p style={{ fontFamily: FONT.sans, fontSize: 14, lineHeight: 1.6, color: 'var(--ca-ink-soft)', margin: 0, maxWidth: 460 }}>
                    {a.desc}
                  </p>
                </div>
                <span className="aud-arrow" style={{ fontFamily: FONT.serif, fontSize: 24, color: 'var(--ca-ink-faint)', transition: 'transform 0.2s ease, color 0.2s ease', justifySelf: 'end' }}>
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
