import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MeridianMark from './MeridianMark';
import { FONT, useViewport } from './ui';
import { NAV } from '../data/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isMobile } = useViewport();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  const linkStyle = ({ isActive }) => ({
    fontFamily: FONT.sans,
    fontSize: 13,
    fontWeight: 400,
    color: 'var(--ca-obsidian)',
    textDecoration: 'none',
    paddingBottom: 4,
    borderBottom: `2px solid ${isActive ? 'var(--ca-brass-500)' : 'transparent'}`,
    transition: 'border-color 0.2s ease',
  });

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(246,241,228,0.94)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--ca-rule)',
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: isMobile ? '14px 24px' : `${scrolled ? 12 : 20}px 56px`,
          display: 'flex',
          alignItems: 'center',
          transition: 'padding 0.2s ease',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 13, marginRight: 'auto', textDecoration: 'none' }}>
          <MeridianMark size={scrolled && !isMobile ? 32 : 38} />
          <div>
            <div style={{ fontFamily: FONT.sans, fontWeight: 500, fontSize: 15, color: 'var(--ca-obsidian)', letterSpacing: '-0.01em', lineHeight: 1 }}>
              Constitutional Africa
            </div>
            <div style={{ fontFamily: FONT.mono, fontSize: 8, color: 'var(--ca-brass-700)', marginTop: 3, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Constitutional-Economic Transformation
            </div>
          </div>
        </Link>

        {!isMobile && (
          <>
            <nav style={{ display: 'flex', gap: 34 }}>
              {NAV.map((item) => (
                <NavLink key={item.label} to={item.to} style={linkStyle}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginLeft: 38 }}>
              <span style={{ fontFamily: FONT.mono, fontSize: 10, color: 'var(--ca-ink-soft)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>EN</span>
              <Link
                to="/join"
                className="ca-btn solid"
                style={{ padding: '10px 20px', fontSize: 12, background: 'var(--ca-indigo-700)', border: '1.5px solid var(--ca-indigo-700)', color: 'var(--ca-ivory)', borderRadius: 3, fontWeight: 500, textDecoration: 'none' }}
              >
                Join
              </Link>
            </div>
          </>
        )}

        {isMobile && (
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 24,
                  height: 2,
                  background: 'var(--ca-obsidian)',
                  transition: 'transform 0.2s ease, opacity 0.2s ease',
                  transform: open && i === 0 ? 'translateY(7px) rotate(45deg)' : open && i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </div>

      {isMobile && open && (
        <nav style={{ borderTop: '1px solid var(--ca-rule)', padding: '12px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              style={({ isActive }) => ({
                fontFamily: FONT.sans,
                fontSize: 16,
                color: isActive ? 'var(--ca-brass-700)' : 'var(--ca-obsidian)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid var(--ca-rule)',
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/join"
            style={{ marginTop: 16, textAlign: 'center', padding: '14px 20px', background: 'var(--ca-indigo-700)', color: 'var(--ca-ivory)', borderRadius: 3, fontFamily: FONT.sans, fontWeight: 500, fontSize: 14, textDecoration: 'none' }}
          >
            Join
          </Link>
        </nav>
      )}
    </header>
  );
}
