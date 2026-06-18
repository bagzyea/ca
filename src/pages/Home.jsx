import { Link } from 'react-router-dom';
import { FONT, Container, Eyebrow, Button, useViewport, useScrollY } from '../components/ui';
import MeridianMark from '../components/MeridianMark';
import PillarCard from '../components/PillarCard';
import EpisodeCard from '../components/EpisodeCard';
import Newsletter from '../components/Newsletter';
import CredibilityBand from '../components/CredibilityBand';
import Audiences from '../components/Audiences';
import { PILLARS } from '../data/pillars';
import { EPISODES } from '../data/episodes';
import { AFRICA_PATH } from '../data/africaPath';

const IMAGES = { hero: '/images/hero-capetown.jpg', framework: '/images/infrastructure-port.jpg' };
const THEMES = ['Constitutional Governance', 'Economic Transformation', 'Infrastructure', 'Technology & Digital Sovereignty', 'Culture & Heritage', 'Continental Integration'];

export default function Home() {
  const scrollY = useScrollY();
  const { isMobile, isTablet } = useViewport();

  return (
    <>
      <Hero scrollY={scrollY} isMobile={isMobile} />
      <CredibilityBand />
      <Proposition isMobile={isMobile} />
      <PillarsSection isMobile={isMobile} isTablet={isTablet} />
      <Audiences />
      <FrameworkSummary isMobile={isMobile} />
      <ImageBand scrollY={scrollY} isMobile={isMobile} />
      <LatestEpisodes isMobile={isMobile} />
      <CTA isMobile={isMobile} />
    </>
  );
}

function Hero({ scrollY, isMobile }) {
  return (
    <section style={{ background: 'linear-gradient(135deg, var(--ca-indigo-700) 0%, var(--ca-indigo-600) 100%)', color: 'var(--ca-ivory)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-12%', top: `-${scrollY * 0.15}px`, opacity: 0.06, pointerEvents: 'none' }}>
        <MeridianMark size={isMobile ? 360 : 720} color="#F6F1E4" variant="latitudes" />
      </div>

      <Container style={{ position: 'relative', zIndex: 1, padding: isMobile ? '28px 24px 0' : '40px 56px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 24, alignItems: 'center', color: 'rgba(246,241,228,0.65)', paddingBottom: isMobile ? 32 : 56, fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
          <span>2026</span>
          <div style={{ height: 1, background: 'rgba(246,241,228,0.2)' }} />
          <span>Pan-African Platform</span>
        </div>
      </Container>

      <Container style={{ position: 'relative', zIndex: 1, padding: isMobile ? '0 24px 56px' : '48px 56px 88px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.75fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'start' }}>
        <div>
          <Eyebrow color="var(--ca-brass-300)" style={{ marginBottom: 32 }}>What We Study</Eyebrow>
          <h1 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 40 : 62, fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 0 36px' }}>
            Constitutional economics as the lens for Africa's future
          </h1>
          <p style={{ fontFamily: FONT.sans, fontSize: 16, lineHeight: 1.75, opacity: 0.92, maxWidth: 600, marginBottom: 44 }}>
            We believe Africa's future is determined not by what lies beneath the soil, but by the quality of the institutions and constitutional frameworks that guide investment, innovation, and shared prosperity.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Button as={Link} to="/listen" variant="brass">Listen Now →</Button>
            <Button as={Link} to="/framework" variant="outlineLight">Learn Framework</Button>
          </div>
        </div>

        <div style={{ paddingTop: 12 }}>
          <svg
            viewBox="0 0 600 660"
            width="100%"
            height="auto"
            role="img"
            aria-label="Map of Africa filled with a photograph of Cape Town"
            style={{ display: 'block', maxHeight: isMobile ? 360 : 520, margin: '0 auto', filter: 'drop-shadow(0 28px 36px rgba(10,19,48,0.55))' }}
          >
            <defs>
              <clipPath id="heroAfricaClip">
                <path d={AFRICA_PATH} />
              </clipPath>
            </defs>
            {/* the photograph (slow Ken-Burns zoom) + indigo tint, clipped to the continent */}
            <g clipPath="url(#heroAfricaClip)">
              <image className="hero-map-photo" href={IMAGES.hero} x="0" y="0" width="600" height="660" preserveAspectRatio="xMidYMid slice" />
              <rect x="0" y="0" width="600" height="660" fill="rgba(7,41,26,0.34)" />
            </g>
            {/* dim dotted boundary that drifts around the coastline */}
            <path className="hero-map-dots" d={AFRICA_PATH} pathLength="1000" fill="none" stroke="var(--ca-brass-300)" strokeWidth="2" strokeLinecap="round" />
            {/* faint pulse travelling the outline */}
            <path className="hero-map-comet" d={AFRICA_PATH} pathLength="1000" fill="none" stroke="var(--ca-brass-300)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {THEMES.map((t) => (
              <span key={t} style={{ border: '1px solid rgba(246,241,228,0.22)', color: 'rgba(246,241,228,0.72)', background: 'rgba(246,241,228,0.05)', fontFamily: FONT.sans, fontSize: 11, padding: '6px 12px', borderRadius: 3 }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Proposition({ isMobile }) {
  return (
    <section style={{ background: 'var(--ca-paper)', borderBottom: '1px solid var(--ca-rule)' }}>
      <Container style={{ padding: isMobile ? '56px 24px' : '92px 56px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr', gap: isMobile ? 24 : 56, alignItems: 'start' }}>
        {!isMobile && (
          <div style={{ fontFamily: FONT.mono, color: 'var(--ca-brass-700)', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)', alignSelf: 'stretch', marginTop: 8 }}>
            Our Premise
          </div>
        )}
        {isMobile && <Eyebrow>Our Premise</Eyebrow>}
        <div>
          <p style={{ fontFamily: FONT.serif, fontSize: isMobile ? 28 : 42, fontWeight: 400, lineHeight: 1.22, letterSpacing: '-0.015em', color: 'var(--ca-obsidian)', margin: 0, maxWidth: 1000 }}>
            Africa's future will be decided less by what lies beneath its soil than by the quality of the{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--ca-indigo-700)' }}>rules it chooses to live by.</span>
          </p>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 24 : 48, maxWidth: 920 }}>
            <p style={{ fontFamily: FONT.sans, fontSize: 15, lineHeight: 1.7, color: 'var(--ca-ink)', margin: 0 }}>
              This is the premise of <b>African Constitutional Economics</b> — the framework at the heart of everything we do. It holds that constitutional and institutional design are not downstream of prosperity, but its precondition.
            </p>
            <p style={{ fontFamily: FONT.sans, fontSize: 15, lineHeight: 1.7, color: 'var(--ca-ink-soft)', margin: 0 }}>
              Every conversation, brief, and analysis we publish is examined through that single lens — and built to be worth revisiting a decade on.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PillarsSection({ isMobile, isTablet }) {
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  return (
    <section style={{ background: 'var(--ca-ivory)' }}>
      <Container style={{ padding: isMobile ? '56px 24px 64px' : '92px 56px 104px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto', gap: isMobile ? 16 : 48, alignItems: 'end', marginBottom: 52 }}>
          <div>
            <Eyebrow style={{ marginBottom: 12 }}>Six Pillars</Eyebrow>
            <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 32 : 44, fontWeight: 400, margin: 0, letterSpacing: '-0.02em', color: 'var(--ca-obsidian)', lineHeight: 1.1 }}>One continental story</h2>
          </div>
          <p style={{ fontFamily: FONT.sans, fontSize: 14, lineHeight: 1.65, color: 'var(--ca-ink-soft)', maxWidth: 380, margin: 0 }}>
            Each pillar represents a dimension of Africa's constitutional and economic future, examined through rigorous analysis and conversation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: cols, border: '1px solid var(--ca-rule)', borderBottom: 'none' }}>
          {PILLARS.map((p, i) => (
            <div key={p.id} style={{ borderRight: '1px solid var(--ca-rule)', borderBottom: '1px solid var(--ca-rule)' }}>
              <PillarCard pillar={p} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FrameworkSummary({ isMobile }) {
  return (
    <section style={{ background: 'var(--ca-obsidian)', color: 'var(--ca-ivory)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', opacity: 0.04, pointerEvents: 'none' }}>
        <MeridianMark size={isMobile ? 420 : 760} color="#F6F1E4" variant="sealed" />
      </div>
      <Container style={{ padding: isMobile ? '56px 24px' : '96px 56px', position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'center' }}>
        <div>
          <Eyebrow color="var(--ca-brass-300)" style={{ marginBottom: 20 }}>The Framework</Eyebrow>
          <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 38 : 48, fontWeight: 400, margin: 0, lineHeight: 1.1, letterSpacing: '-0.015em' }}>
            African <br /><span style={{ fontWeight: 500 }}>Constitutional</span><br /><span style={{ fontStyle: 'italic', color: 'var(--ca-brass-300)' }}>Economics.</span>
          </h2>
          <div style={{ marginTop: 32 }}>
            <Button as={Link} to="/framework" variant="brass">Explore Framework →</Button>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: FONT.serif, fontSize: isMobile ? 19 : 22, fontWeight: 400, lineHeight: 1.5, margin: 0, opacity: 0.92 }}>
            A framework for reading the continent: how the design of constitutions and institutions shapes investment, infrastructure, innovation and the long arc of African prosperity.
          </p>
          <div style={{ height: 1, background: 'var(--ca-rule-on-dark)', margin: '36px 0' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {[
              ['The rules', 'Constitutions, rights and the separation of powers — the source code of a state.'],
              ['The institutions', 'Courts, regulators and the credibility that compounds into trust.'],
              ['The infrastructure', 'The physical and digital layer on which sovereignty is exercised.'],
              ['The capital', 'How law shapes investor confidence and commercial certainty.'],
            ].map(([h, d]) => (
              <div key={h}>
                <h3 style={{ fontFamily: FONT.serif, fontSize: 15, fontWeight: 600, margin: '0 0 6px', color: 'var(--ca-ivory)' }}>{h}</h3>
                <p style={{ fontFamily: FONT.sans, fontSize: 13, lineHeight: 1.55, margin: 0, opacity: 0.8 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ImageBand({ scrollY, isMobile }) {
  return (
    <section style={{ position: 'relative', height: isMobile ? 320 : 420, overflow: 'hidden', background: 'var(--ca-obsidian)' }}>
      <div style={{ position: 'absolute', inset: '-60px 0', backgroundImage: `url('${IMAGES.framework}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: `translateY(${scrollY * 0.04}px)`, willChange: 'transform' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,33,20,0.92) 0%, rgba(20,90,46,0.72) 45%, rgba(5,33,20,0.55) 100%)' }} />
      <Container style={{ position: 'relative', height: '100%', padding: isMobile ? '0 24px' : '0 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'var(--ca-ivory)' }}>
        <Eyebrow color="var(--ca-brass-300)" style={{ marginBottom: 18 }}>Infrastructure & Sovereignty</Eyebrow>
        <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 28 : 40, fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.015em', margin: 0, maxWidth: 720 }}>
          The physical and digital layer on which <span style={{ fontStyle: 'italic', color: 'var(--ca-brass-300)' }}>sovereignty is exercised.</span>
        </h2>
      </Container>
    </section>
  );
}

function LatestEpisodes({ isMobile }) {
  return (
    <section style={{ background: 'var(--ca-ivory)' }}>
      <Container style={{ padding: isMobile ? '56px 24px' : '96px 56px' }}>
        <div style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Eyebrow style={{ marginBottom: 12 }}>Latest Conversations</Eyebrow>
            <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 32 : 44, fontWeight: 400, color: 'var(--ca-obsidian)', margin: 0 }}>The Podcast</h2>
          </div>
          <Link to="/listen" style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ca-brass-700)', textDecoration: 'none' }}>All episodes →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
          {EPISODES.map((ep) => <EpisodeCard key={ep.id} episode={ep} />)}
        </div>
      </Container>
    </section>
  );
}

function CTA({ isMobile }) {
  return (
    <section id="newsletter" style={{ background: 'var(--ca-indigo-700)', color: 'var(--ca-ivory)', padding: isMobile ? '64px 24px' : '88px 56px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 32 : 44, fontWeight: 400, lineHeight: 1.15, marginBottom: 24 }}>
          Join the conversation about Africa's future
        </h2>
        <p style={{ fontFamily: FONT.sans, fontSize: 16, lineHeight: 1.7, opacity: 0.88, margin: '0 auto 36px', maxWidth: 600 }}>
          Subscribe to receive the latest episodes, research briefs, and analysis on African constitutional economics.
        </p>
        <Newsletter dark />
      </div>
    </section>
  );
}
