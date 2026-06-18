import { FONT, Container, Eyebrow, useViewport } from './ui';

// Standard hero band for interior pages.
export default function PageHero({ eyebrow, title, intro, accent = 'var(--ca-brass-300)' }) {
  const { isMobile } = useViewport();
  return (
    <section style={{ background: 'linear-gradient(135deg, var(--ca-indigo-700) 0%, var(--ca-indigo-600) 100%)', color: 'var(--ca-ivory)' }}>
      <Container style={{ padding: isMobile ? '56px 24px' : '88px 56px' }}>
        {eyebrow && <Eyebrow color={accent} style={{ marginBottom: 20 }}>{eyebrow}</Eyebrow>}
        <h1 style={{ fontFamily: FONT.serif, fontWeight: 400, fontSize: isMobile ? 38 : 56, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, maxWidth: 900 }}>
          {title}
        </h1>
        {intro && (
          <p style={{ fontFamily: FONT.sans, fontSize: isMobile ? 15 : 17, lineHeight: 1.7, opacity: 0.9, maxWidth: 640, marginTop: 24 }}>
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
