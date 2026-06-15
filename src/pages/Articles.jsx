import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FONT, Container, useViewport } from '../components/ui';
import PageHero from '../components/PageHero';
import { ARTICLES } from '../data/articles';

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function Articles() {
  const { isMobile } = useViewport();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(ARTICLES.map((a) => a.category))], []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const matchesCat = category === 'All' || a.category === category;
      const matchesQuery = !q || `${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageHero
        eyebrow="Writing · Briefs & Essays"
        title="Research, briefs and analysis"
        intro="Short, durable pieces examined through a single lens — built to be worth revisiting a decade on."
      />

      <section style={{ background: 'var(--ca-paper)', borderBottom: '1px solid var(--ca-rule)' }}>
        <Container style={{ padding: isMobile ? '24px' : '28px 56px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                style={{
                  fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '7px 13px', borderRadius: 3, cursor: 'pointer',
                  border: `1px solid ${category === c ? 'var(--ca-indigo-700)' : 'var(--ca-rule)'}`,
                  background: category === c ? 'var(--ca-indigo-700)' : 'transparent',
                  color: category === c ? 'var(--ca-ivory)' : 'var(--ca-ink-soft)',
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search writing…"
            style={{ fontFamily: FONT.sans, fontSize: 14, padding: '10px 14px', border: '1px solid var(--ca-rule)', borderRadius: 3, background: '#fff', minWidth: 220, outline: 'none', color: 'var(--ca-ink)' }}
          />
        </Container>
      </section>

      <section style={{ background: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '40px 24px 64px' : '64px 56px 104px' }}>
          {results.length === 0 ? (
            <p style={{ fontFamily: FONT.sans, fontSize: 16, color: 'var(--ca-ink-soft)' }}>No pieces match your search.</p>
          ) : (
            <div style={{ display: 'grid', gap: isMobile ? 28 : 0 }}>
              {results.map((a, i) => (
                <Link
                  key={a.id}
                  to={`/writing/${a.id}`}
                  style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '200px 1fr', gap: isMobile ? 16 : 32, padding: isMobile ? 0 : '28px 0', borderTop: isMobile ? 'none' : i === 0 ? '1px solid var(--ca-rule)' : '1px solid var(--ca-rule)', textDecoration: 'none', alignItems: 'center' }}
                >
                  <div style={{ height: isMobile ? 180 : 130, borderRadius: 4, backgroundImage: `url('${a.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div>
                    <div style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ca-brass-700)', marginBottom: 8 }}>
                      {a.category} · {formatDate(a.date)} · {a.readingTime}
                    </div>
                    <h3 style={{ fontFamily: FONT.serif, fontSize: isMobile ? 22 : 26, fontWeight: 600, color: 'var(--ca-obsidian)', margin: '0 0 8px', lineHeight: 1.2 }}>{a.title}</h3>
                    <p style={{ fontFamily: FONT.sans, fontSize: 14, lineHeight: 1.65, color: 'var(--ca-ink-soft)', margin: 0, maxWidth: 640 }}>{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
