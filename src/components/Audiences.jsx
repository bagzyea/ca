import { Link } from 'react-router-dom';
import { FONT, TONE, Container, Eyebrow, useViewport } from './ui';
import { AUDIENCES } from '../data/site';

export default function Audiences() {
  const { isMobile } = useViewport();
  return (
    <section style={{ background: 'var(--ca-paper)', borderTop: '1px solid var(--ca-rule)', borderBottom: '1px solid var(--ca-rule)' }}>
      <Container style={{ padding: isMobile ? '56px 24px' : '88px 56px' }}>
        <Eyebrow style={{ marginBottom: 12 }}>Where to start</Eyebrow>
        <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 30 : 40, fontWeight: 400, color: 'var(--ca-obsidian)', margin: '0 0 40px', letterSpacing: '-0.02em' }}>
          One platform, three ways in
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 16 : 24 }}>
          {AUDIENCES.map((a) => {
            const accent = TONE[a.tone];
            return (
              <Link
                key={a.label}
                to={a.to}
                style={{ display: 'flex', flexDirection: 'column', background: 'var(--ca-ivory)', border: '1px solid var(--ca-rule)', borderTop: `3px solid ${accent}`, borderRadius: 4, padding: isMobile ? '28px 24px' : '32px 28px', textDecoration: 'none', transition: 'all 0.15s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 16px 32px -16px rgba(26,32,48,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <h3 style={{ fontFamily: FONT.serif, fontSize: 24, fontWeight: 600, color: 'var(--ca-obsidian)', margin: '0 0 12px' }}>{a.label}</h3>
                <p style={{ fontFamily: FONT.sans, fontSize: 14, lineHeight: 1.65, color: 'var(--ca-ink-soft)', margin: '0 0 24px', flex: 1 }}>{a.desc}</p>
                <span style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: accent }}>{a.cta} →</span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
