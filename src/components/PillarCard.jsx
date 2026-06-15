import { Link } from 'react-router-dom';
import { FONT, TONE } from './ui';
import MeridianMark from './MeridianMark';

// `striped` controls the alternating paper background used in the bordered grid.
export default function PillarCard({ pillar, index = 0, striped = true }) {
  const accent = TONE[pillar.tone];
  const baseBg = striped && index % 2 === 0 ? 'var(--ca-paper)' : 'transparent';

  return (
    <Link
      to={`/pillar/${pillar.id}`}
      style={{
        padding: '32px 28px',
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        background: baseBg,
        textDecoration: 'none',
        transition: 'background 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--ca-paper-2)';
        const img = e.currentTarget.querySelector('.ca-card-photo');
        if (img) img.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = baseBg;
        const img = e.currentTarget.querySelector('.ca-card-photo');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <div style={{ margin: '-32px -28px 22px', height: 152, overflow: 'hidden', position: 'relative' }}>
        <div
          className="ca-card-photo"
          style={{ position: 'absolute', inset: 0, backgroundImage: `url('${pillar.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(14,19,32,0.10) 0%, rgba(14,19,32,0.20) 60%, ${accent} 220%)`, mixBlendMode: 'multiply', opacity: 0.55 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{ fontFamily: FONT.serif, fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: accent }}>{pillar.n}</div>
        <div style={{ opacity: 0.5 }}>
          <MeridianMark size={30} color={accent} variant="minimal" />
        </div>
      </div>
      <h3 style={{ fontFamily: FONT.serif, fontSize: 24, fontWeight: 600, margin: '4px 0 12px', lineHeight: 1.1, color: 'var(--ca-obsidian)' }}>
        {pillar.verb} <span style={{ color: accent }}>Africa</span>
      </h3>
      <div style={{ fontFamily: FONT.mono, fontSize: 9, color: accent, letterSpacing: '0.14em', marginBottom: 12, textTransform: 'uppercase', opacity: 0.75 }}>
        {pillar.theme}
      </div>
      <p style={{ fontFamily: FONT.sans, fontSize: 13, lineHeight: 1.6, color: 'var(--ca-ink-soft)', margin: '0 0 16px', flex: 1 }}>
        {pillar.desc}
      </p>
      <span style={{ fontFamily: FONT.mono, fontSize: 9, color: accent, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
        Explore →
      </span>
    </Link>
  );
}
