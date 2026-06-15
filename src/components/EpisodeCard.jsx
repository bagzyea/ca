import { Link } from 'react-router-dom';
import { FONT } from './ui';

export default function EpisodeCard({ episode }) {
  return (
    <Link
      to={`/episode/${episode.id}`}
      style={{ background: 'var(--ca-paper)', padding: 24, border: '1px solid var(--ca-rule)', borderRadius: 4, transition: 'all 0.15s ease', textDecoration: 'none', display: 'block' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 16px 32px -12px rgba(26,32,48,0.22)';
        e.currentTarget.style.borderColor = 'var(--ca-brass-500)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        const img = e.currentTarget.querySelector('.ca-ep-photo');
        if (img) img.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--ca-rule)';
        e.currentTarget.style.transform = 'translateY(0)';
        const img = e.currentTarget.querySelector('.ca-ep-photo');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <div style={{ height: 168, marginBottom: 16, borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
        <div className="ca-ep-photo" style={{ position: 'absolute', inset: 0, backgroundImage: `url('${episode.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,19,32,0.05) 40%, rgba(14,19,32,0.45) 100%)' }} />
      </div>
      <div style={{ fontFamily: FONT.mono, fontSize: 10, color: 'var(--ca-brass-700)', marginBottom: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{episode.n}</div>
      <h3 style={{ fontFamily: FONT.serif, fontSize: 18, fontWeight: 600, color: 'var(--ca-ink)', lineHeight: 1.3, margin: '0 0 8px' }}>{episode.title}</h3>
      <p style={{ fontFamily: FONT.sans, fontSize: 13, color: 'var(--ca-ink-soft)', margin: '0 0 16px' }}>{episode.guest}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--ca-ink)', fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{episode.duration}</span>
        <span style={{ background: 'var(--ca-brass-600)', color: 'var(--ca-ivory)', padding: '8px 16px', borderRadius: 2, fontSize: 11, fontFamily: FONT.mono, fontWeight: 600 }}>▶ Play</span>
      </div>
    </Link>
  );
}
