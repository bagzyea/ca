import { useParams, Link } from 'react-router-dom';
import { FONT, Container, Eyebrow, useViewport } from '../components/ui';
import { getArticle, ARTICLES } from '../data/articles';
import { getPillar } from '../data/pillars';
import NotFound from './NotFound';

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function ArticleDetail() {
  const { id } = useParams();
  const article = getArticle(id);
  const { isMobile } = useViewport();

  if (!article) return <NotFound />;

  const pillar = getPillar(article.pillar);
  const more = ARTICLES.filter((a) => a.id !== id).slice(0, 2);

  return (
    <>
      <article>
        <section style={{ background: 'var(--ca-paper)', borderBottom: '1px solid var(--ca-rule)' }}>
          <Container style={{ padding: isMobile ? '48px 24px' : '80px 56px', maxWidth: 820 }}>
            <Link to="/writing" style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ca-brass-700)', textDecoration: 'none' }}>← All writing</Link>
            <div style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ca-ink-soft)', margin: '20px 0 16px' }}>
              {article.category} · {formatDate(article.date)} · {article.readingTime} · {article.author}
            </div>
            <h1 style={{ fontFamily: FONT.serif, fontWeight: 400, fontSize: isMobile ? 34 : 52, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ca-obsidian)', margin: 0 }}>{article.title}</h1>
            <p style={{ fontFamily: FONT.serif, fontSize: isMobile ? 18 : 21, fontStyle: 'italic', lineHeight: 1.5, color: 'var(--ca-ink-soft)', marginTop: 20 }}>{article.excerpt}</p>
          </Container>
        </section>

        <section style={{ background: 'var(--ca-ivory)' }}>
          <Container style={{ padding: isMobile ? '40px 24px' : '64px 56px', maxWidth: 760 }}>
            <div style={{ height: isMobile ? 200 : 360, borderRadius: 6, backgroundImage: `url('${article.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: isMobile ? 32 : 48 }} />
            {article.body.map((p, i) => (
              <p key={i} style={{ fontFamily: FONT.sans, fontSize: 18, lineHeight: 1.85, color: 'var(--ca-ink)', margin: '0 0 26px' }}>{p}</p>
            ))}
            {pillar && (
              <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--ca-rule)' }}>
                <Eyebrow style={{ marginBottom: 8 }}>Filed under</Eyebrow>
                <Link to={`/pillar/${pillar.id}`} style={{ fontFamily: FONT.serif, fontSize: 20, fontWeight: 600, color: 'var(--ca-indigo-700)', textDecoration: 'none' }}>{pillar.verb} Africa → {pillar.theme}</Link>
              </div>
            )}
          </Container>
        </section>
      </article>

      {more.length > 0 && (
        <section style={{ background: 'var(--ca-paper)', borderTop: '1px solid var(--ca-rule)' }}>
          <Container style={{ padding: isMobile ? '48px 24px' : '72px 56px' }}>
            <Eyebrow style={{ marginBottom: 24 }}>Keep reading</Eyebrow>
            {more.map((a) => (
              <Link key={a.id} to={`/writing/${a.id}`} style={{ display: 'block', padding: '20px 0', borderTop: '1px solid var(--ca-rule)', textDecoration: 'none' }}>
                <span style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ca-brass-700)' }}>{a.category}</span>
                <h3 style={{ fontFamily: FONT.serif, fontSize: 22, fontWeight: 600, color: 'var(--ca-obsidian)', margin: '6px 0 0' }}>{a.title}</h3>
              </Link>
            ))}
          </Container>
        </section>
      )}
    </>
  );
}
