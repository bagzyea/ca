import { FONT, Container, Eyebrow, useViewport } from '../components/ui';
import Newsletter from '../components/Newsletter';
import { SITE } from '../data/site';

const PERKS = [
  ['The brief', 'New research briefs and essays, delivered as they publish.'],
  ['New episodes', 'A note when each conversation goes live, with show notes.'],
  ['No noise', 'A few emails a month. Unsubscribe in one click, any time.'],
];

export default function Join() {
  const { isMobile } = useViewport();
  return (
    <section style={{ background: 'linear-gradient(135deg, var(--ca-indigo-700) 0%, var(--ca-indigo-600) 100%)', color: 'var(--ca-ivory)', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Container style={{ padding: isMobile ? '64px 24px' : '96px 56px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow color="var(--ca-brass-300)" style={{ marginBottom: 20 }}>Join</Eyebrow>
          <h1 style={{ fontFamily: FONT.serif, fontWeight: 400, fontSize: isMobile ? 36 : 52, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
            Join the conversation about Africa's future
          </h1>
          <p style={{ fontFamily: FONT.sans, fontSize: 16, lineHeight: 1.7, opacity: 0.88, margin: '0 auto 36px', maxWidth: 560 }}>
            Subscribe to receive the latest episodes, research briefs, and analysis on African constitutional economics.
          </p>
          <Newsletter dark />
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 24 : 32, marginTop: 56, textAlign: 'left' }}>
            {PERKS.map(([h, d]) => (
              <div key={h}>
                <h3 style={{ fontFamily: FONT.serif, fontSize: 17, fontWeight: 600, margin: '0 0 6px' }}>{h}</h3>
                <p style={{ fontFamily: FONT.sans, fontSize: 14, lineHeight: 1.6, opacity: 0.82, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.08em', opacity: 0.6, marginTop: 48 }}>
            Prefer email? Write to <a href={`mailto:${SITE.email}`} style={{ color: 'var(--ca-brass-300)' }}>{SITE.email}</a>
          </p>
        </div>
      </Container>
    </section>
  );
}
