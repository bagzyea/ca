import { FONT, Container, useViewport } from './ui';
import { STATS, AFFILIATIONS } from '../data/site';
import { EPISODES } from '../data/episodes';
import { ARTICLES } from '../data/articles';

const COUNTS = { episodes: EPISODES.length, articles: ARTICLES.length };

export default function CredibilityBand() {
  const { isMobile } = useViewport();
  return (
    <section style={{ background: 'var(--ca-obsidian)', color: 'var(--ca-ivory)' }}>
      <Container style={{ padding: isMobile ? '40px 24px' : '56px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 28 : 24 }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: isMobile ? 'left' : 'center' }}>
              <div style={{ fontFamily: FONT.serif, fontSize: isMobile ? 40 : 52, fontWeight: 500, lineHeight: 1, color: 'var(--ca-brass-300)' }}>
                {s.key ? COUNTS[s.key] : s.value}
              </div>
              <div style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(246,241,228,0.7)', marginTop: 10 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: 'var(--ca-rule-on-dark)', margin: isMobile ? '36px 0 28px' : '48px 0 32px' }} />

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 16 : 36, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(246,241,228,0.55)', whiteSpace: 'nowrap' }}>
            Voices & contributors from
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? 18 : 32, alignItems: 'center' }}>
            {AFFILIATIONS.map((name) => (
              <span key={name} style={{ fontFamily: FONT.serif, fontSize: isMobile ? 15 : 17, fontWeight: 500, color: 'rgba(246,241,228,0.6)', letterSpacing: '0.01em' }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
