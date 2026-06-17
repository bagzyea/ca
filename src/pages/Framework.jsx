import { Link } from 'react-router-dom';
import { FONT, Container, Eyebrow, Button, useViewport } from '../components/ui';
import MeridianMark from '../components/MeridianMark';
import FAQ from '../components/FAQ';
import { GLOSSARY } from '../data/faq';

const LAYERS = [
  ['The rules', 'Constitutions, rights and the separation of powers — the source code of a state. Get these wrong and everything above is built on sand.'],
  ['The institutions', 'Courts, regulators, central banks and auditors — the machinery that makes the rules binding. Credibility here compounds into trust.'],
  ['The infrastructure', 'The physical and digital layer — corridors, grids, payment rails — on which sovereignty is actually exercised.'],
  ['The capital', 'How law and credibility translate into investor confidence, commercial certainty and the cost of capital.'],
];

export default function Framework() {
  const { isMobile } = useViewport();
  return (
    <>
      <section style={{ background: 'var(--ca-obsidian)', color: 'var(--ca-ivory)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', opacity: 0.05, pointerEvents: 'none' }}>
          <MeridianMark size={isMobile ? 460 : 820} color="#F6F1E4" variant="sealed" />
        </div>
        <Container style={{ position: 'relative', padding: isMobile ? '64px 24px' : '104px 56px' }}>
          <Eyebrow color="var(--ca-brass-300)" style={{ marginBottom: 20 }}>The Framework</Eyebrow>
          <h1 style={{ fontFamily: FONT.serif, fontWeight: 400, fontSize: isMobile ? 42 : 64, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>
            African <span style={{ fontWeight: 500 }}>Constitutional</span> <span style={{ fontStyle: 'italic', color: 'var(--ca-brass-300)' }}>Economics</span>
          </h1>
          <p style={{ fontFamily: FONT.serif, fontSize: isMobile ? 20 : 24, lineHeight: 1.5, opacity: 0.92, maxWidth: 760, marginTop: 28 }}>
            A framework for reading the continent: how the design of constitutions and institutions shapes investment, infrastructure, innovation and the long arc of African prosperity.
          </p>
        </Container>
      </section>

      {/* The argument */}
      <section style={{ background: 'var(--ca-paper)', borderBottom: '1px solid var(--ca-rule)' }}>
        <Container style={{ padding: isMobile ? '56px 24px' : '88px 56px', maxWidth: 820 }}>
          <Eyebrow style={{ marginBottom: 16 }}>The argument</Eyebrow>
          {[
            'Constitutional economics studies the rules of the game rather than the moves within it. Applied to Africa, it makes a single, testable claim: institutional and constitutional design are not downstream of prosperity — they are its precondition.',
            'The resource-curse literature, read carefully, supports this. It is not oil that corrodes a state; it is a weak state that turns oil into a curse. The lever is always the rule, not the resource.',
            'So we read the continent in layers. Each builds on the one beneath it, and weakness at any layer caps what is possible above.',
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: FONT.sans, fontSize: 17, lineHeight: 1.8, color: 'var(--ca-ink)', margin: '0 0 24px' }}>{p}</p>
          ))}
        </Container>
      </section>

      {/* The four layers */}
      <section style={{ background: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '56px 24px' : '88px 56px' }}>
          <Eyebrow style={{ marginBottom: 32 }}>Four layers</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 1, background: 'var(--ca-rule)', border: '1px solid var(--ca-rule)' }}>
            {LAYERS.map(([h, d], i) => (
              <div key={h} style={{ background: 'var(--ca-paper)', padding: isMobile ? '28px 24px' : '36px 32px' }}>
                <div style={{ fontFamily: FONT.serif, fontStyle: 'italic', fontSize: 28, color: 'var(--ca-brass-700)', marginBottom: 8 }}>{`0${i + 1}`}</div>
                <h3 style={{ fontFamily: FONT.serif, fontSize: 22, fontWeight: 600, color: 'var(--ca-obsidian)', margin: '0 0 10px' }}>{h}</h3>
                <p style={{ fontFamily: FONT.sans, fontSize: 14, lineHeight: 1.65, color: 'var(--ca-ink-soft)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Primer / glossary for newcomers */}
      <section style={{ background: 'var(--ca-paper)', borderTop: '1px solid var(--ca-rule)', borderBottom: '1px solid var(--ca-rule)' }}>
        <Container style={{ padding: isMobile ? '56px 24px' : '88px 56px' }}>
          <Eyebrow style={{ marginBottom: 12 }}>New to the framework?</Eyebrow>
          <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 28 : 38, fontWeight: 400, color: 'var(--ca-obsidian)', margin: '0 0 40px', letterSpacing: '-0.02em' }}>
            Start with the terms
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? 28 : 40 }}>
            {GLOSSARY.map((g) => (
              <div key={g.term}>
                <h3 style={{ fontFamily: FONT.serif, fontSize: 20, fontWeight: 600, color: 'var(--ca-indigo-700)', margin: '0 0 8px' }}>{g.term}</h3>
                <p style={{ fontFamily: FONT.sans, fontSize: 15, lineHeight: 1.7, color: 'var(--ca-ink-soft)', margin: 0 }}>{g.def}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '56px 24px' : '88px 56px', maxWidth: 900 }}>
          <Eyebrow style={{ marginBottom: 12 }}>Questions</Eyebrow>
          <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 28 : 38, fontWeight: 400, color: 'var(--ca-obsidian)', margin: '0 0 32px', letterSpacing: '-0.02em' }}>
            Frequently asked
          </h2>
          <FAQ />
        </Container>
      </section>

      {/* Tie to pillars */}
      <section style={{ background: 'var(--ca-indigo-700)', color: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '56px 24px' : '80px 56px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 28 : 36, fontWeight: 400, margin: '0 0 16px' }}>The framework, applied</h2>
          <p style={{ fontFamily: FONT.sans, fontSize: 16, lineHeight: 1.7, opacity: 0.88, maxWidth: 600, margin: '0 auto 32px' }}>
            We apply this lens across six pillars — from institutions and belonging to enterprise and integration.
          </p>
          <Button as={Link} to="/work" variant="brass">Explore the six pillars →</Button>
        </Container>
      </section>
    </>
  );
}
