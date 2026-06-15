import { Link } from 'react-router-dom';
import { FONT, useViewport } from './ui';
import { NAV, SITE } from '../data/site';

const headingStyle = {
  fontFamily: FONT.serif,
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 16,
  opacity: 0.9,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
};

export default function Footer() {
  const { isMobile } = useViewport();
  return (
    <footer style={{ background: 'var(--ca-obsidian)', color: 'var(--ca-ivory)', padding: isMobile ? '48px 24px' : '64px 56px', borderTop: '1px solid var(--ca-rule-on-dark)' }}>
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: isMobile ? 32 : 48,
          marginBottom: isMobile ? 40 : 56,
        }}
      >
        <div>
          <h3 style={headingStyle}>Navigate</h3>
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              style={{ display: 'block', fontFamily: FONT.sans, fontSize: 13, marginBottom: 10, opacity: 0.75, color: 'var(--ca-ivory)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h3 style={headingStyle}>Listen</h3>
          <p style={{ fontFamily: FONT.sans, fontSize: 13, lineHeight: 1.6, opacity: 0.75, margin: '0 0 12px' }}>
            Available on Spotify, Apple Podcasts, YouTube, and RSS.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {[['Spotify', SITE.socials.spotify], ['Apple', SITE.socials.apple], ['YouTube', SITE.socials.youtube], ['RSS', SITE.socials.rss]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{ fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ca-brass-300)', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 style={headingStyle}>Contact</h3>
          <a href={`mailto:${SITE.email}`} style={{ fontFamily: FONT.sans, fontSize: 13, opacity: 0.75, color: 'var(--ca-ivory)', textDecoration: 'none' }}>
            {SITE.email}
          </a>
        </div>
      </div>

      <hr style={{ background: 'var(--ca-rule-on-dark)', border: 'none', height: 1, marginBottom: 24 }} />

      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 12, justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', fontSize: 12, opacity: 0.6 }}>
        <p style={{ margin: 0 }}>© 2026 Constitutional Africa</p>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link to="/about" style={{ color: 'var(--ca-ivory)', textDecoration: 'none', opacity: 0.8 }}>About</Link>
          <a href={`mailto:${SITE.email}`} style={{ color: 'var(--ca-ivory)', textDecoration: 'none', opacity: 0.8 }}>Privacy</a>
        </div>
      </div>
    </footer>
  );
}
