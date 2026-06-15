import { useParams, Link } from 'react-router-dom';
import { FONT, Container, Eyebrow, useViewport } from '../components/ui';
import { getEpisode, EPISODES } from '../data/episodes';
import { getPillar } from '../data/pillars';
import { SITE } from '../data/site';
import NotFound from './NotFound';

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function EpisodeDetail() {
  const { id } = useParams();
  const episode = getEpisode(id);
  const { isMobile } = useViewport();

  if (!episode) return <NotFound />;

  const pillar = getPillar(episode.pillar);
  const more = EPISODES.filter((e) => e.id !== id).slice(0, 2);

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--ca-indigo-700) 0%, #1a2f5a 100%)', color: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '48px 24px' : '80px 56px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 320px', gap: isMobile ? 32 : 56, alignItems: 'center' }}>
          <div>
            <Link to="/listen" style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ca-brass-300)', textDecoration: 'none' }}>← All episodes</Link>
            <div style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(246,241,228,0.7)', margin: '20px 0 14px' }}>
              {episode.n} · {episode.duration} · {formatDate(episode.date)}
            </div>
            <h1 style={{ fontFamily: FONT.serif, fontWeight: 400, fontSize: isMobile ? 32 : 46, lineHeight: 1.12, letterSpacing: '-0.02em', margin: 0 }}>{episode.title}</h1>
            <p style={{ fontFamily: FONT.sans, fontSize: 15, opacity: 0.9, marginTop: 18 }}>
              {episode.guest} — <span style={{ opacity: 0.75 }}>{episode.guestTitle}</span>
            </p>
          </div>
          <div style={{ aspectRatio: '1/1', borderRadius: 6, overflow: 'hidden', backgroundImage: `url('${episode.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 24px 48px -20px rgba(10,19,48,0.6)' }} />
        </Container>
      </section>

      <section style={{ background: 'var(--ca-paper)', borderBottom: '1px solid var(--ca-rule)' }}>
        <Container style={{ padding: isMobile ? '48px 24px' : '72px 56px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 280px', gap: isMobile ? 40 : 64, alignItems: 'start' }}>
          <div>
            {/* Player: Spotify embed if provided, otherwise a subscribe prompt */}
            {episode.spotifyEmbed ? (
              <iframe
                title={`${episode.title} — player`}
                src={episode.spotifyEmbed}
                width="100%"
                height="180"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: 8, marginBottom: 32 }}
              />
            ) : (
              <div style={{ border: '1px solid var(--ca-rule)', borderRadius: 8, padding: '20px 24px', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', background: 'var(--ca-ivory)' }}>
                <span style={{ background: 'var(--ca-brass-600)', color: 'var(--ca-ivory)', borderRadius: '50%', width: 44, height: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>▶</span>
                <span style={{ fontFamily: FONT.sans, fontSize: 14, color: 'var(--ca-ink)' }}>Listen on</span>
                {[['Spotify', SITE.socials.spotify], ['Apple', SITE.socials.apple], ['YouTube', SITE.socials.youtube]].map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" style={{ fontFamily: FONT.sans, fontSize: 14, color: 'var(--ca-indigo-700)', textDecoration: 'none', borderBottom: '1px solid var(--ca-rule)' }}>{label}</a>
                ))}
              </div>
            )}

            <Eyebrow style={{ marginBottom: 14 }}>About this episode</Eyebrow>
            <p style={{ fontFamily: FONT.sans, fontSize: 17, lineHeight: 1.8, color: 'var(--ca-ink)', margin: '0 0 28px' }}>{episode.summary}</p>

            <Eyebrow style={{ marginBottom: 14 }}>In this conversation</Eyebrow>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {episode.notes.map((n, i) => (
                <li key={i} style={{ fontFamily: FONT.sans, fontSize: 15, lineHeight: 1.7, color: 'var(--ca-ink-soft)', marginBottom: 10 }}>{n}</li>
              ))}
            </ul>
          </div>

          <aside>
            {pillar && (
              <>
                <Eyebrow style={{ marginBottom: 12 }}>Pillar</Eyebrow>
                <Link to={`/pillar/${pillar.id}`} style={{ fontFamily: FONT.serif, fontSize: 18, fontWeight: 600, color: 'var(--ca-indigo-700)', textDecoration: 'none', display: 'block', marginBottom: 6 }}>
                  {pillar.verb} Africa →
                </Link>
                <p style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ca-ink-faint)', margin: 0 }}>{pillar.theme}</p>
              </>
            )}
          </aside>
        </Container>
      </section>

      {more.length > 0 && (
        <section style={{ background: 'var(--ca-ivory)' }}>
          <Container style={{ padding: isMobile ? '48px 24px' : '72px 56px' }}>
            <Eyebrow style={{ marginBottom: 24 }}>More episodes</Eyebrow>
            {more.map((e) => (
              <Link key={e.id} to={`/episode/${e.id}`} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '18px 0', borderTop: '1px solid var(--ca-rule)', textDecoration: 'none', alignItems: 'baseline' }}>
                <h3 style={{ fontFamily: FONT.serif, fontSize: 20, fontWeight: 600, color: 'var(--ca-obsidian)', margin: 0 }}>{e.title}</h3>
                <span style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.12em', color: 'var(--ca-brass-700)', whiteSpace: 'nowrap' }}>{e.n}</span>
              </Link>
            ))}
          </Container>
        </section>
      )}
    </>
  );
}
