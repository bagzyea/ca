// Shared wireframe primitives for the Constitutional Africa wireframe deck.
// All components use plain JSX + inline styles; class names from index.html
// handle the "ink on paper" aesthetic. Exposed on window at the end.

const Line = ({ width = '100%', thin = false, style }) => (
  <div className={'wf-text-line' + (thin ? ' thin' : '')} style={{ width, ...style }} />
);

const Lines = ({ count = 3, widths, thin = false, gap = 8, style }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap, ...style }}>
    {Array.from({ length: count }).map((_, i) => (
      <Line key={i} width={(widths && widths[i]) || (i === count - 1 ? '60%' : '100%')} thin={thin} />
    ))}
  </div>
);

// striped image placeholder with optional "X" cross + caption
const Img = ({ width = '100%', height = 120, label, x = true, style }) => (
  <div className="wf-img" style={{ width, height, ...style }}>
    {x && <div className="x" />}
    {label && <span style={{ position: 'relative', zIndex: 1, background:'#faf7f0', padding:'2px 6px' }}>{label}</span>}
  </div>
);

const Box = ({ children, style, dashed = false, thick = false, ...rest }) => (
  <div
    className={'wf-box' + (dashed ? ' dashed' : '') + (thick ? ' thick' : '')}
    style={style}
    {...rest}
  >
    {children}
  </div>
);

const Pill = ({ children, style }) => <span className="wf-pill" style={style}>{children}</span>;
const Chip = ({ children, style }) => <span className="wf-chip" style={style}>{children}</span>;
const Btn  = ({ children, solid, style }) => (
  <span className={'wf-btn' + (solid ? ' solid' : '')} style={style}>{children}</span>
);

const Note = ({ children, style }) => <div className="wf-note" style={style}>{children}</div>;
const Callout = ({ children, style }) => <div className="wf-callout" style={style}>{children}</div>;
const LabelU = ({ children, style }) => <span className="wf-label-u" style={style}>{children}</span>;

// Page-level chrome: a sketchy browser bar
const BrowserBar = ({ url = 'constitutionalafrica.org', style }) => (
  <div style={{
    display:'flex', alignItems:'center', gap:8,
    padding:'8px 12px', borderBottom:'1.5px solid #1a1612',
    background:'#f3efe6', fontFamily:'IBM Plex Mono, monospace', fontSize:10,
    ...style,
  }}>
    <span style={{ display:'inline-flex', gap:4 }}>
      <span style={{ width:8, height:8, borderRadius:999, border:'1.25px solid #1a1612' }} />
      <span style={{ width:8, height:8, borderRadius:999, border:'1.25px solid #1a1612' }} />
      <span style={{ width:8, height:8, borderRadius:999, border:'1.25px solid #1a1612' }} />
    </span>
    <span style={{ flex:1, border:'1.25px solid #1a1612', background:'#fff', padding:'2px 8px', borderRadius:4, color:'#5a544b' }}>
      {url}
    </span>
  </div>
);

// Top nav for desktop wireframes — generic, used across pages
const TopNav = ({ active, compact = false }) => {
  const items = ['Home', 'About', 'Podcast', 'ACE Framework', 'Africa in Transition', 'Youth Voices', 'Insights', 'Newsletter'];
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:14,
      padding: compact ? '12px 20px' : '16px 28px',
      borderBottom:'1.5px solid #1a1612', background:'#faf7f0',
      fontFamily:'IBM Plex Mono, monospace', fontSize:10,
    }}>
      {/* logo lockup placeholder */}
      <div style={{ display:'flex', alignItems:'center', gap:6, marginRight:'auto' }}>
        <div style={{
          width:24, height:24, border:'1.75px solid #1a1612',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'IBM Plex Serif, serif', fontWeight:700, fontSize:14,
        }}>C<span style={{ marginLeft:-2 }}>A</span></div>
        <span style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:600, fontSize:12, letterSpacing:'0.06em', textTransform:'uppercase' }}>
          Constitutional&nbsp;Africa
        </span>
      </div>
      {items.map(n => (
        <span key={n} style={{
          textTransform:'uppercase', letterSpacing:'0.04em',
          fontWeight: n === active ? 600 : 400,
          borderBottom: n === active ? '1.5px solid #1a1612' : 'none',
          paddingBottom: n === active ? 1 : 0,
        }}>{n}</span>
      ))}
      <span className="wf-btn" style={{ padding:'5px 10px', fontSize:9 }}>Subscribe</span>
    </div>
  );
};

const Footer = ({ style }) => (
  <div style={{
    borderTop:'1.5px solid #1a1612', background:'#1a1612', color:'#faf7f0',
    padding:'24px 28px', display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:24,
    fontFamily:'IBM Plex Mono, monospace', fontSize:9, ...style,
  }}>
    <div>
      <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:13, fontWeight:600, letterSpacing:'0.06em' }}>
        CONSTITUTIONAL · AFRICA
      </div>
      <div style={{ marginTop:8, opacity:0.7, lineHeight:1.5 }}>
        Ideas · Institutions · Infrastructure · Integration.
      </div>
      <div style={{ marginTop:14, display:'flex', gap:6 }}>
        {['X','LI','YT','SP','AP'].map(s => (
          <span key={s} style={{ width:22, height:22, border:'1px solid #faf7f0', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:8 }}>{s}</span>
        ))}
      </div>
    </div>
    {[
      ['Platform', ['Podcast', 'Insights', 'Youth Voices', 'Featured Conversations']],
      ['Framework', ['ACE Overview', 'Pillars', 'Research', 'Publications']],
      ['Institute', ['About', 'Editorial Board', 'Partnerships', 'Contact']],
    ].map(([h, items]) => (
      <div key={h}>
        <div style={{ textTransform:'uppercase', letterSpacing:'0.1em', opacity:0.6, marginBottom:8 }}>{h}</div>
        {items.map(i => <div key={i} style={{ marginBottom:4 }}>{i}</div>)}
      </div>
    ))}
  </div>
);

Object.assign(window, { Line, Lines, Img, Box, Pill, Chip, Btn, Note, Callout, LabelU, BrowserBar, TopNav, Footer });
