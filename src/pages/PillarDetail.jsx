import { useParams, Link } from 'react-router-dom';
import { FONT, TONE, Container, Eyebrow, useViewport } from '../components/ui';
import MeridianMark from '../components/MeridianMark';
import { getPillar, PILLARS } from '../data/pillars';
import { EPISODES } from '../data/episodes';
import { ARTICLES } from '../data/articles';
import EpisodeCard from '../components/EpisodeCard';
import NotFound from './NotFound';

export default function PillarDetail() {
  const { id } = useParams();
  const pillar = getPillar(id);
  const { isMobile } = useViewport();

  if (!pillar) return <NotFound />;

  const accent = TONE[pillar.tone];
  const idx = PILLARS.findIndex((p) => p.id === id);
  const next = PILLARS[(idx + 1) % PILLARS.length];
  const relatedEpisodes = EPISODES.filter((e) => e.pillar === id);
  const relatedArticles = ARTICLES.filter((a) => a.pillar === id);

  return (
    <>
      {/* Hero with the pillar image */}
      <section style={{ position: 'relative', color: 'var(--ca-ivory)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${pillar.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(120deg, rgba(7,41,26,0.92) 0%, rgba(7,41,26,0.72) 55%, ${accent}99 140%)` }} />
        <Container style={{ position: 'relative', padding: isMobile ? '64px 24px' : '104px 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <span style={{ fontFamily: FONT.serif, fontStyle: 'italic', fontSize: 40, color: 'var(--ca-brass-300)' }}>{pillar.n}</span>
            <MeridianMark size={34} color="rgba(246,241,228,0.7)" variant="minimal" />
          </div>
          <Eyebrow color="var(--ca-brass-300)" style={{ marginBottom: 16 }}>{pillar.theme}</Eyebrow>
          <h1 style={{ fontFamily: FONT.serif, fontWeight: 400, fontSize: isMobile ? 40 : 60, lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>
            {pillar.verb} <span style={{ fontStyle: 'italic', color: 'var(--ca-brass-300)' }}>Africa</span>
          </h1>
          <p style={{ fontFamily: FONT.sans, fontSize: isMobile ? 16 : 18, lineHeight: 1.7, opacity: 0.92, maxWidth: 640, marginTop: 24 }}>{pillar.summary}</p>
        </Container>
      </section>

      {/* Body + topics */}
      <section style={{ background: 'var(--ca-paper)', borderBottom: '1px solid var(--ca-rule)' }}>
        <Container style={{ padding: isMobile ? '56px 24px' : '88px 56px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 300px', gap: isMobile ? 40 : 72, alignItems: 'start' }}>
          <div>
            {pillar.body.map((para, i) => (
              <p key={i} style={{ fontFamily: FONT.sans, fontSize: 17, lineHeight: 1.8, color: 'var(--ca-ink)', margin: '0 0 24px' }}>{para}</p>
            ))}
          </div>
          <aside>
            <Eyebrow style={{ marginBottom: 16 }}>What we track</Eyebrow>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {pillar.topics.map((t) => (
                <span key={t} style={{ fontFamily: FONT.sans, fontSize: 12, padding: '6px 12px', border: `1px solid ${accent}`, color: accent, borderRadius: 3 }}>{t}</span>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      {/* Related episodes */}
      {relatedEpisodes.length > 0 && (
        <section style={{ background: 'var(--ca-ivory)' }}>
          <Container style={{ padding: isMobile ? '48px 24px' : '72px 56px' }}>
            <Eyebrow style={{ marginBottom: 24 }}>Related conversations</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
              {relatedEpisodes.map((ep) => <EpisodeCard key={ep.id} episode={ep} />)}
            </div>
          </Container>
        </section>
      )}

      {/* Related writing */}
      {relatedArticles.length > 0 && (
        <section style={{ background: 'var(--ca-paper)', borderTop: '1px solid var(--ca-rule)' }}>
          <Container style={{ padding: isMobile ? '48px 24px' : '72px 56px' }}>
            <Eyebrow style={{ marginBottom: 24 }}>Related writing</Eyebrow>
            {relatedArticles.map((a) => (
              <Link key={a.id} to={`/writing/${a.id}`} style={{ display: 'block', padding: '20px 0', borderTop: '1px solid var(--ca-rule)', textDecoration: 'none' }}>
                <span style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent }}>{a.category}</span>
                <h3 style={{ fontFamily: FONT.serif, fontSize: 22, fontWeight: 600, color: 'var(--ca-obsidian)', margin: '6px 0 0' }}>{a.title}</h3>
              </Link>
            ))}
          </Container>
        </section>
      )}

      {/* Next pillar */}
      <section style={{ background: 'var(--ca-obsidian)', color: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '40px 24px' : '56px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <Link to="/work" style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(246,241,228,0.7)', textDecoration: 'none' }}>← All pillars</Link>
          <Link to={`/pillar/${next.id}`} style={{ textAlign: 'right', textDecoration: 'none', color: 'var(--ca-ivory)' }}>
            <span style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ca-brass-300)' }}>Next pillar</span>
            <div style={{ fontFamily: FONT.serif, fontSize: 20, fontWeight: 600 }}>{next.verb} Africa →</div>
          </Link>
        </Container>
      </section>
    </>
  );
}
