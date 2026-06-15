import { Container, Eyebrow, FONT, useViewport } from '../components/ui';
import PageHero from '../components/PageHero';
import EpisodeCard from '../components/EpisodeCard';
import { EPISODES } from '../data/episodes';
import { SITE } from '../data/site';

export default function Listen() {
  const { isMobile } = useViewport();
  return (
    <>
      <PageHero
        eyebrow="The Podcast"
        title="Conversations on Africa's constitutional future"
        intro="Long-form conversations with the economists, lawyers and builders shaping the rules Africa chooses to live by."
      />

      <section style={{ background: 'var(--ca-paper)', borderBottom: '1px solid var(--ca-rule)' }}>
        <Container style={{ padding: isMobile ? '28px 24px' : '32px 56px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ca-ink-soft)' }}>Subscribe</span>
          {[['Spotify', SITE.socials.spotify], ['Apple Podcasts', SITE.socials.apple], ['YouTube', SITE.socials.youtube], ['RSS', SITE.socials.rss]].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{ fontFamily: FONT.sans, fontSize: 13, color: 'var(--ca-indigo-700)', textDecoration: 'none', borderBottom: '1px solid var(--ca-rule)', paddingBottom: 2 }}>{label}</a>
          ))}
        </Container>
      </section>

      <section style={{ background: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '40px 24px 64px' : '64px 56px 104px' }}>
          <Eyebrow style={{ marginBottom: 28 }}>All episodes</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
            {EPISODES.map((ep) => <EpisodeCard key={ep.id} episode={ep} />)}
          </div>
        </Container>
      </section>
    </>
  );
}
