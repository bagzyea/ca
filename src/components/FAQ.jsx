import { useState } from 'react';
import { FONT } from './ui';
import { FAQ as ITEMS } from '../data/faq';

function Item({ q, a, isOpen, onToggle }) {
  return (
    <div style={{ borderTop: '1px solid var(--ca-rule)' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontFamily: FONT.serif, fontSize: 19, fontWeight: 600, color: 'var(--ca-obsidian)' }}>{q}</span>
        <span style={{ fontFamily: FONT.serif, fontSize: 26, lineHeight: 1, color: 'var(--ca-brass-700)', flexShrink: 0, transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div style={{ maxHeight: isOpen ? 320 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <p style={{ fontFamily: FONT.sans, fontSize: 15, lineHeight: 1.75, color: 'var(--ca-ink-soft)', margin: '0 0 24px', maxWidth: 720 }}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {ITEMS.map((item, i) => (
        <Item key={item.q} q={item.q} a={item.a} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
      ))}
    </div>
  );
}
