import { useEffect, useState } from 'react';

// ---- Design tokens -------------------------------------------------------
export const FONT = {
  serif: 'IBM Plex Serif, serif',
  sans: 'IBM Plex Sans, sans-serif',
  mono: 'IBM Plex Mono, monospace',
};

export const BP = { mobile: 768, tablet: 1024 };

export const TONE = {
  terra: 'var(--ca-terra-600)',
  brass: 'var(--ca-brass-700)',
  jade: 'var(--ca-jade-700)',
  indigo: 'var(--ca-indigo-700)',
};

// ---- Responsive hook -----------------------------------------------------
export function useViewport() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return { width, isMobile: width <= BP.mobile, isTablet: width <= BP.tablet };
}

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrollY;
}

// ---- Layout primitives ---------------------------------------------------
export function Container({ children, style }) {
  const { isMobile } = useViewport();
  return (
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: isMobile ? '0 24px' : '0 56px', ...style }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, color = 'var(--ca-brass-700)', style }) {
  return (
    <div
      style={{
        fontFamily: FONT.mono,
        fontSize: 10,
        letterSpacing: '0.26em',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ---- Buttons -------------------------------------------------------------
const BTN_BASE = {
  fontFamily: FONT.sans,
  fontWeight: 500,
  fontSize: 13,
  padding: '14px 28px',
  borderRadius: 3,
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  border: '1.5px solid transparent',
  transition: 'all 0.2s ease',
};

const VARIANTS = {
  brass: { background: 'var(--ca-brass-500)', borderColor: 'var(--ca-brass-500)', color: 'var(--ca-obsidian)', hover: 'var(--ca-brass-400)' },
  indigo: { background: 'var(--ca-indigo-700)', borderColor: 'var(--ca-indigo-700)', color: 'var(--ca-ivory)', hover: 'var(--ca-indigo-600)' },
  outlineLight: { background: 'transparent', borderColor: 'rgba(246,241,228,0.35)', color: 'var(--ca-ivory)', hoverBorder: 'rgba(246,241,228,0.7)', hoverBg: 'rgba(246,241,228,0.08)' },
  outlineDark: { background: 'transparent', borderColor: 'var(--ca-rule)', color: 'var(--ca-obsidian)', hoverBorder: 'var(--ca-indigo-700)', hoverBg: 'var(--ca-paper-2)' },
};

export function Button({ as: As = 'button', variant = 'brass', children, style, ...props }) {
  const v = VARIANTS[variant];
  return (
    <As
      {...props}
      style={{ ...BTN_BASE, background: v.background, borderColor: v.borderColor, color: v.color, ...style }}
      onMouseEnter={(e) => {
        if (v.hover) e.currentTarget.style.background = v.hover;
        if (v.hoverBorder) e.currentTarget.style.borderColor = v.hoverBorder;
        if (v.hoverBg) e.currentTarget.style.background = v.hoverBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = v.background;
        e.currentTarget.style.borderColor = v.borderColor;
      }}
    >
      {children}
    </As>
  );
}
