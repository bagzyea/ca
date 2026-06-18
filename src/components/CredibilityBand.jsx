import { FONT, Container, useViewport } from './ui';
import MeridianMark from './MeridianMark';
import { STATS, AFFILIATIONS } from '../data/site';
import { EPISODES } from '../data/episodes';
import { ARTICLES } from '../data/articles';

const COUNTS = { episodes: EPISODES.length, articles: ARTICLES.length };

export default function CredibilityBand() {
  const { isMobile } = useViewport();

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        color: 'var(--ca-ivory)',
        background: 'radial-gradient(120% 140% at 50% -20%, rgba(31,138,76,0.42) 0%, rgba(7,41,26,0) 55%), var(--ca-obsidian)',
      }}
    >
      {/* Translucent square grid pattern */}
      <svg aria-hidden="true" width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.85, pointerEvents: 'none' }}>
        <defs>
          {/* fine square cells */}
          <pattern id="caGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="rgba(246,241,228,0.07)" strokeWidth="1" />
            <circle cx="0" cy="0" r="1.2" fill="rgba(220,181,68,0.24)" />
          </pattern>
          {/* fade the grid out toward the edges so it sits behind the figures */}
          <radialGradient id="caGridMask" cx="50%" cy="45%" r="75%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.15" />
          </radialGradient>
          <mask id="caGridFade">
            <rect width="100%" height="100%" fill="url(#caGridMask)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#caGrid)" mask="url(#caGridFade)" />
      </svg>

      {/* Faint brand mark */}
      <div style={{ position: 'absolute', right: '-4%', top: '50%', transform: 'translateY(-50%)', opacity: 0.05, pointerEvents: 'none' }}>
        <MeridianMark size={isMobile ? 300 : 460} color="#F6F1E4" variant="latitudes" />
      </div>

      <Container style={{ position: 'relative', zIndex: 1, padding: isMobile ? '48px 24px' : '64px 56px' }}>
        {/* Stats */}
        <div
          style={
            isMobile
              ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }
              : { display: 'flex' }
          }
        >
          {STATS.map((s, i) => {
            return (
              <div
                key={s.label}
                style={
                  isMobile
                    ? {}
                    : { flex: 1, padding: '0 28px', borderLeft: i ? '1px solid var(--ca-rule-on-dark)' : 'none' }
                }
              >
                <div style={{ fontFamily: FONT.serif, fontSize: isMobile ? 46 : 60, fontWeight: 500, lineHeight: 1, color: 'var(--ca-ivory)', letterSpacing: '-0.02em' }}>
                  {s.key ? COUNTS[s.key] : s.value}
                </div>
                <div style={{ width: 28, height: 2, background: 'var(--ca-brass-300)', margin: '16px 0 14px', opacity: 0.7 }} />
                <div style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(246,241,228,0.72)', lineHeight: 1.4 }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ height: 1, background: 'var(--ca-rule-on-dark)', margin: isMobile ? '40px 0 28px' : '56px 0 32px' }} />

        {/* Affiliations */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 16 : 32, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(246,241,228,0.5)', whiteSpace: 'nowrap' }}>
            Voices &amp; contributors from
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '12px 20px' : '14px 28px', alignItems: 'center' }}>
            {AFFILIATIONS.map((name, i) => (
              <span key={name} style={{ display: 'inline-flex', alignItems: 'center', gap: isMobile ? 12 : 28 }}>
                {i > 0 && <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(246,241,228,0.3)' }} />}
                <span style={{ fontFamily: FONT.serif, fontSize: isMobile ? 15 : 17, fontWeight: 500, color: 'rgba(246,241,228,0.62)' }}>{name}</span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
