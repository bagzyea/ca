import { useState } from 'react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="wf-paper" style={{ minHeight: '100vh', padding: '40px' }}>
      <header style={{ marginBottom: '40px', borderBottom: '2px solid var(--ink)', paddingBottom: '20px' }}>
        <h1 style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '32px', marginBottom: '8px' }}>
          Constitutional Africa
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>
          A serious African intellectual platform for policy analysis and strategic research
        </p>
      </header>

      <nav style={{ marginBottom: '40px', display: 'flex', gap: '20px' }}>
        <NavLink
          active={currentView === 'home'}
          onClick={() => setCurrentView('home')}
        >
          Home
        </NavLink>
        <NavLink
          active={currentView === 'design'}
          onClick={() => setCurrentView('design')}
        >
          Design System
        </NavLink>
        <NavLink
          active={currentView === 'about'}
          onClick={() => setCurrentView('about')}
        >
          About
        </NavLink>
      </nav>

      <main>
        {currentView === 'home' && <HomePage />}
        {currentView === 'design' && <DesignSystemPage />}
        {currentView === 'about' && <AboutPage />}
      </main>
    </div>
  );
}

function NavLink({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: 'IBM Plex Mono, monospace',
        padding: '8px 16px',
        border: active ? '1.5px solid var(--ink)' : '1.5px solid var(--ink-faint)',
        background: active ? 'var(--ink)' : 'transparent',
        color: active ? '#fff' : 'var(--ink)',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}
    >
      {children}
    </button>
  );
}

function HomePage() {
  return (
    <div>
      <h2 style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '24px', marginBottom: '20px' }}>
        Welcome to Constitutional Africa
      </h2>
      <div style={{ maxWidth: '800px', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>
          Constitutional Africa is a platform dedicated to advancing African intellectual thought through:
        </p>
        <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '12px' }}>Podcasts featuring continental thought leaders</li>
          <li style={{ marginBottom: '12px' }}>Strategic analysis and policy research</li>
          <li style={{ marginBottom: '12px' }}>The emerging framework of African Constitutional Economics (ACE)</li>
          <li style={{ marginBottom: '12px' }}>Digital-first, mobile-optimized content</li>
        </ul>
        <p style={{ marginTop: '20px', color: 'var(--ink-soft)' }}>
          Our mission: to establish a continental policy institute grounded in serious intellectual discourse about Africa's future.
        </p>
      </div>
    </div>
  );
}

function DesignSystemPage() {
  return (
    <div>
      <h2 style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '24px', marginBottom: '20px' }}>
        Design System
      </h2>
      <p style={{ marginBottom: '20px', color: 'var(--ink-soft)' }}>
        The design system for Constitutional Africa is built on thoughtful typography, a pan-African color palette, and clear information architecture.
      </p>

      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '16px', marginBottom: '16px' }}>Color Palette</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px' }}>
          <ColorSwatch color="#1f5a3d" name="Sovereign Forest" />
          <ColorSwatch color="#1d2d5a" name="Constitutional Indigo" />
          <ColorSwatch color="#c89b3c" name="Sahel Gold" />
          <ColorSwatch color="#b25a32" name="Terra" />
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '16px', marginBottom: '16px' }}>Typography</h3>
        <p>
          <strong>Serif:</strong> IBM Plex Serif (headings, editorial content)
        </p>
        <p>
          <strong>Sans:</strong> IBM Plex Sans (body, UI)
        </p>
        <p>
          <strong>Mono:</strong> IBM Plex Mono (labels, technical)
        </p>
      </div>
    </div>
  );
}

function ColorSwatch({ color, name }) {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '80px',
          background: color,
          border: '1.5px solid var(--ink)',
          marginBottom: '8px',
        }}
      />
      <p style={{ fontSize: '12px', fontWeight: '500' }}>{name}</p>
      <p style={{ fontSize: '11px', color: 'var(--ink-soft)', fontFamily: 'IBM Plex Mono, monospace' }}>
        {color}
      </p>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h2 style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '24px', marginBottom: '20px' }}>
        About Constitutional Africa
      </h2>
      <div style={{ maxWidth: '800px', lineHeight: '1.8' }}>
        <h3 style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '16px', marginTop: '24px', marginBottom: '12px' }}>
          Mission
        </h3>
        <p style={{ marginBottom: '20px' }}>
          To establish a serious, pan-African intellectual platform that bridges policy analysis, constitutional thought, and economic strategy.
        </p>

        <h3 style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '16px', marginTop: '24px', marginBottom: '12px' }}>
          Core Values
        </h3>
        <ul style={{ paddingLeft: '24px' }}>
          <li style={{ marginBottom: '12px' }}><strong>Seriousness</strong> — Operating as a continental policy institute</li>
          <li style={{ marginBottom: '12px' }}><strong>Identity</strong> — Modern African, pan-continental perspective</li>
          <li style={{ marginBottom: '12px' }}><strong>Depth</strong> — Intellectual rigor and strategic analysis</li>
          <li style={{ marginBottom: '12px' }}><strong>Access</strong> — Digital-first, mobile-optimized for African audiences</li>
        </ul>
      </div>
    </div>
  );
}
