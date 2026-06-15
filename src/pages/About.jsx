import { FONT, Container, Eyebrow, useViewport } from '../components/ui';
import PageHero from '../components/PageHero';
import { SITE } from '../data/site';

const VALUES = [
  ['Rigour', 'Every claim is examined through one lens — constitutional economics — and held to evidence, not slogan.'],
  ['Durability', 'We publish work built to be worth revisiting a decade on, not to win a news cycle.'],
  ['Pan-African', 'The continent is read as one story in six pillars, across borders and disciplines.'],
];

export default function About() {
  const { isMobile } = useViewport();
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A platform for African thought"
        intro="Constitutional Africa studies the rules a continent chooses to live by — and how their design shapes investment, institutions and shared prosperity."
      />

      <section style={{ background: 'var(--ca-paper)', borderBottom: '1px solid var(--ca-rule)' }}>
        <Container style={{ padding: isMobile ? '56px 24px' : '88px 56px', maxWidth: 820 }}>
          <Eyebrow style={{ marginBottom: 16 }}>Our mission</Eyebrow>
          {[
            'We believe Africa’s future is determined not by what lies beneath the soil, but by the quality of the institutions and constitutional frameworks that guide investment, innovation and shared prosperity.',
            'Through a podcast, research briefs and long-form analysis, we examine the continent through the single lens of African Constitutional Economics — the idea that constitutional and institutional design are not downstream of prosperity, but its precondition.',
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: FONT.sans, fontSize: 17, lineHeight: 1.8, color: 'var(--ca-ink)', margin: '0 0 24px' }}>{p}</p>
          ))}
        </Container>
      </section>

      <section style={{ background: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '56px 24px' : '88px 56px' }}>
          <Eyebrow style={{ marginBottom: 32 }}>What we value</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 28 : 48 }}>
            {VALUES.map(([h, d]) => (
              <div key={h}>
                <h3 style={{ fontFamily: FONT.serif, fontSize: 22, fontWeight: 600, color: 'var(--ca-obsidian)', margin: '0 0 10px' }}>{h}</h3>
                <p style={{ fontFamily: FONT.sans, fontSize: 15, lineHeight: 1.7, color: 'var(--ca-ink-soft)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ background: 'var(--ca-obsidian)', color: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '48px 24px' : '64px 56px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 26 : 32, fontWeight: 400, margin: '0 0 12px' }}>Get in touch</h2>
          <a href={`mailto:${SITE.email}`} style={{ fontFamily: FONT.mono, fontSize: 15, letterSpacing: '0.06em', color: 'var(--ca-brass-300)', textDecoration: 'none' }}>{SITE.email}</a>
        </Container>
      </section>
    </>
  );
}
