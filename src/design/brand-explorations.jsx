// Brand explorations: 4 logo directions, 3 palettes, sitemap diagram.
// Each component is meant to be rendered inside a DCArtboard.

// ---------- LOGO CONCEPTS ----------

// 01 · Pillar / Column — the "constitutional" foundation
const LogoPillar = () => (
  <div style={{ padding:32, height:'100%', display:'flex', flexDirection:'column', background:'#faf7f0' }}>
    <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:18 }}>
      {/* mark: stylized column / pillar with a continental base */}
      <svg width="86" height="110" viewBox="0 0 86 110" fill="none">
        <rect x="6" y="92" width="74" height="10" stroke="#1a1612" strokeWidth="2"/>
        <rect x="14" y="20" width="58" height="72" stroke="#1a1612" strokeWidth="2"/>
        <line x1="26" y1="20" x2="26" y2="92" stroke="#1a1612" strokeWidth="1.5"/>
        <line x1="43" y1="20" x2="43" y2="92" stroke="#1a1612" strokeWidth="1.5"/>
        <line x1="60" y1="20" x2="60" y2="92" stroke="#1a1612" strokeWidth="1.5"/>
        <rect x="6" y="10" width="74" height="10" stroke="#1a1612" strokeWidth="2"/>
        {/* small notch — Africa anchor */}
        <path d="M34 100 L43 108 L52 100" stroke="#1a1612" strokeWidth="2" fill="none"/>
      </svg>
      <div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:700, fontSize:24, letterSpacing:'-0.01em', lineHeight:1 }}>
          Constitutional
        </div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:400, fontStyle:'italic', fontSize:24, letterSpacing:'-0.01em', lineHeight:1, marginTop:2 }}>
          Africa
        </div>
      </div>
    </div>
    <div style={{ borderTop:'1px dashed #1a1612', paddingTop:12, display:'flex', justifyContent:'space-between', fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>
      <span>01 · PILLAR</span>
      <span style={{ color:'#5a544b' }}>foundation / architecture / institution</span>
    </div>
    <Callout style={{ position:'absolute', right:-14, top:38, transform:'rotate(4deg)' }}>
      reads as a stamp /<br/>institutional seal
    </Callout>
  </div>
);

// 02 · Aperture — three arches forming a continental gateway
const LogoAperture = () => (
  <div style={{ padding:32, height:'100%', display:'flex', flexDirection:'column', background:'#faf7f0' }}>
    <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:18 }}>
      <svg width="120" height="76" viewBox="0 0 120 76" fill="none">
        {/* three nested arches */}
        <path d="M10 70 Q10 12 60 12 Q110 12 110 70" stroke="#1a1612" strokeWidth="2.25" fill="none"/>
        <path d="M26 70 Q26 24 60 24 Q94 24 94 70" stroke="#1a1612" strokeWidth="2" fill="none"/>
        <path d="M42 70 Q42 36 60 36 Q78 36 78 70" stroke="#1a1612" strokeWidth="1.75" fill="none"/>
        <line x1="2" y1="70" x2="118" y2="70" stroke="#1a1612" strokeWidth="2.25"/>
        {/* small dot — keystone */}
        <circle cx="60" cy="48" r="2.5" fill="#1a1612"/>
      </svg>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontFamily:'IBM Plex Sans, sans-serif', fontWeight:600, fontSize:14, letterSpacing:'0.32em' }}>
          CONSTITUTIONAL
        </div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontStyle:'italic', fontWeight:500, fontSize:26, letterSpacing:'-0.01em', marginTop:2 }}>
          Africa
        </div>
      </div>
    </div>
    <div style={{ borderTop:'1px dashed #1a1612', paddingTop:12, display:'flex', justifyContent:'space-between', fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>
      <span>02 · APERTURE</span>
      <span style={{ color:'#5a544b' }}>gateway / convening / threshold</span>
    </div>
    <Callout style={{ position:'absolute', left:-10, bottom:60, transform:'rotate(-3deg)' }}>
      arches = senate /<br/>chamber / future
    </Callout>
  </div>
);

// 03 · Meridian — letter C as a constitutional compass over Africa
const LogoMeridian = () => (
  <div style={{ padding:32, height:'100%', display:'flex', flexDirection:'column', background:'#faf7f0' }}>
    <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:20 }}>
      <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
        {/* outer C */}
        <path d="M82 22 A36 36 0 1 0 82 70" stroke="#1a1612" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* meridian line through center */}
        <line x1="46" y1="6" x2="46" y2="86" stroke="#1a1612" strokeWidth="1.5" strokeDasharray="2 3"/>
        {/* small star marker */}
        <path d="M46 36 L48 44 L56 44 L49.5 49 L52 57 L46 52 L40 57 L42.5 49 L36 44 L44 44 Z" fill="#1a1612"/>
      </svg>
      <div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:700, fontSize:28, letterSpacing:'-0.02em', lineHeight:1 }}>
          Constitutional<br/>Africa
        </div>
        <div style={{ marginTop:6, fontFamily:'IBM Plex Mono, monospace', fontSize:9, letterSpacing:'0.18em', color:'#5a544b' }}>
          IDEAS · INSTITUTIONS · INFRASTRUCTURE
        </div>
      </div>
    </div>
    <div style={{ borderTop:'1px dashed #1a1612', paddingTop:12, display:'flex', justifyContent:'space-between', fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>
      <span>03 · MERIDIAN</span>
      <span style={{ color:'#5a544b' }}>orientation / north star / sovereignty</span>
    </div>
    <Callout style={{ position:'absolute', right:-6, top:60, transform:'rotate(5deg)' }}>
      pairs well<br/>w/ serif title
    </Callout>
  </div>
);

// 04 · Monogram seal — bold CA crest, very institutional
const LogoMonogram = () => (
  <div style={{ padding:32, height:'100%', display:'flex', flexDirection:'column', background:'#faf7f0' }}>
    <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:20 }}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        {/* outer ring (institutional seal) */}
        <circle cx="50" cy="50" r="46" stroke="#1a1612" strokeWidth="2"/>
        <circle cx="50" cy="50" r="40" stroke="#1a1612" strokeWidth="1" strokeDasharray="1 4"/>
        {/* CA monogram inside */}
        <path d="M62 32 A18 18 0 1 0 62 68" stroke="#1a1612" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M36 68 L46 32 L56 68 M40 56 L52 56" stroke="#1a1612" strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
        {/* tiny laurel/baobab tick at bottom */}
        <line x1="40" y1="84" x2="60" y2="84" stroke="#1a1612" strokeWidth="1.5"/>
      </svg>
      <div>
        <div style={{ fontFamily:'IBM Plex Sans, sans-serif', fontWeight:700, fontSize:13, letterSpacing:'0.42em' }}>
          CONSTITUTIONAL
        </div>
        <div style={{ height:1, background:'#1a1612', margin:'6px 0' }} />
        <div style={{ fontFamily:'IBM Plex Sans, sans-serif', fontWeight:700, fontSize:13, letterSpacing:'0.42em' }}>
          AFRICA &nbsp;·&nbsp; EST. 2026
        </div>
      </div>
    </div>
    <div style={{ borderTop:'1px dashed #1a1612', paddingTop:12, display:'flex', justifyContent:'space-between', fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>
      <span>04 · MONOGRAM SEAL</span>
      <span style={{ color:'#5a544b' }}>scholarly / publication / archive</span>
    </div>
    <Callout style={{ position:'absolute', left:-6, top:38, transform:'rotate(-4deg)' }}>
      use as favicon /<br/>podcast cover stamp
    </Callout>
  </div>
);

// ---------- PALETTES ----------

const Swatch = ({ color, name, hex, role, dark }) => (
  <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
    <div style={{
      height:96, background:color, border:'1.5px solid #1a1612',
      display:'flex', alignItems:'flex-end', padding:8,
      color: dark ? '#faf7f0' : '#1a1612',
      fontFamily:'IBM Plex Mono, monospace', fontSize:10, fontWeight:600,
    }}>{hex}</div>
    <div style={{ fontFamily:'IBM Plex Sans, sans-serif', fontSize:11, fontWeight:600 }}>{name}</div>
    <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b', textTransform:'uppercase', letterSpacing:'0.05em' }}>{role}</div>
  </div>
);

const PaletteCard = ({ index, title, mood, colors, sample }) => (
  <div style={{ padding:28, height:'100%', display:'flex', flexDirection:'column', background:'#faf7f0' }}>
    <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:6 }}>
      <div>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, color:'#5a544b' }}>0{index} · PALETTE</div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:600, fontSize:22, marginTop:2 }}>{title}</div>
      </div>
      <div className="wf-handwrite" style={{ fontSize:18, color:'#7a6b4a' }}>{mood}</div>
    </div>
    <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:10, marginTop:14 }}>
      {colors.map(c => <Swatch key={c.name} {...c} />)}
    </div>
    {/* tiny preview using these colors */}
    <div style={{ marginTop:18, border:'1.5px solid #1a1612', display:'flex', overflow:'hidden' }}>
      <div style={{ flex:'0 0 38%', background:sample.bg, color:sample.fg, padding:'14px 16px' }}>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:8, letterSpacing:'0.16em', opacity:0.7 }}>ISSUE 01</div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:700, fontSize:18, marginTop:6, lineHeight:1.05 }}>{sample.headline}</div>
      </div>
      <div style={{ flex:1, background:sample.bg2, color:sample.fg2, padding:'14px 16px' }}>
        <div style={{ display:'flex', gap:6, marginBottom:8 }}>
          <span style={{ padding:'2px 7px', background:sample.accent, color:sample.accentFg, fontFamily:'IBM Plex Mono, monospace', fontSize:8, letterSpacing:'0.1em' }}>ACE</span>
          <span style={{ padding:'2px 7px', border:'1px solid '+sample.fg2, fontFamily:'IBM Plex Mono, monospace', fontSize:8, letterSpacing:'0.1em' }}>EPISODE 04</span>
        </div>
        <div style={{ fontFamily:'IBM Plex Sans, sans-serif', fontSize:10, lineHeight:1.45 }}>
          Constitutional design as economic infrastructure — a working framework for African transformation.
        </div>
      </div>
    </div>
    <div style={{ marginTop:'auto', paddingTop:14, fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>
      Pairs with: IBM Plex Serif + IBM Plex Sans &nbsp;//&nbsp; Söhne + Tiempos Text (premium swap)
    </div>
  </div>
);

const Palette1 = () => (
  <PaletteCard
    index={1}
    title="Sovereign Forest"
    mood="grounded · institutional · evergreen"
    colors={[
      { name:'Deep Forest', hex:'#1F4D34', color:'#1F4D34', role:'Primary', dark:true },
      { name:'Savanna Gold', hex:'#C89B3C', color:'#C89B3C', role:'Accent' },
      { name:'Bone',         hex:'#F4EFE3', color:'#F4EFE3', role:'Surface' },
      { name:'Terracotta',   hex:'#A8462C', color:'#A8462C', role:'Highlight', dark:true },
      { name:'Ink',          hex:'#15201A', color:'#15201A', role:'Text', dark:true },
    ]}
    sample={{
      bg:'#1F4D34', fg:'#F4EFE3',
      bg2:'#F4EFE3', fg2:'#15201A',
      accent:'#C89B3C', accentFg:'#15201A',
      headline:'The Continent Builds Itself.',
    }}
  />
);

const Palette2 = () => (
  <PaletteCard
    index={2}
    title="Constitutional Indigo"
    mood="serious · scholarly · global"
    colors={[
      { name:'Inkwell Indigo', hex:'#16264D', color:'#16264D', role:'Primary', dark:true },
      { name:'Brass',          hex:'#B38A3A', color:'#B38A3A', role:'Accent' },
      { name:'Ivory',          hex:'#F6F1E4', color:'#F6F1E4', role:'Surface' },
      { name:'Jade',           hex:'#3E7A5E', color:'#3E7A5E', role:'Secondary', dark:true },
      { name:'Obsidian',       hex:'#0E1320', color:'#0E1320', role:'Text', dark:true },
    ]}
    sample={{
      bg:'#16264D', fg:'#F6F1E4',
      bg2:'#F6F1E4', fg2:'#0E1320',
      accent:'#B38A3A', accentFg:'#0E1320',
      headline:'A framework for the constitutional century.',
    }}
  />
);

const Palette3 = () => (
  <PaletteCard
    index={3}
    title="Sahel Modern"
    mood="warm · youthful · pan-african"
    colors={[
      { name:'Baobab Red',  hex:'#B23A2E', color:'#B23A2E', role:'Primary', dark:true },
      { name:'Sun Ochre',   hex:'#E0A23A', color:'#E0A23A', role:'Accent' },
      { name:'Sand',        hex:'#F1E7D2', color:'#F1E7D2', role:'Surface' },
      { name:'Nile Teal',   hex:'#1F5560', color:'#1F5560', role:'Secondary', dark:true },
      { name:'Charcoal',    hex:'#1B1A17', color:'#1B1A17', role:'Text', dark:true },
    ]}
    sample={{
      bg:'#B23A2E', fg:'#F1E7D2',
      bg2:'#F1E7D2', fg2:'#1B1A17',
      accent:'#E0A23A', accentFg:'#1B1A17',
      headline:'Ideas built for a younger Africa.',
    }}
  />
);

// ---------- TYPOGRAPHY DIRECTION ----------
const TypeSystem = () => (
  <div style={{ padding:28, height:'100%', background:'#faf7f0', display:'flex', flexDirection:'column' }}>
    <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, color:'#5a544b' }}>TYPE SYSTEM · DIRECTION</div>
    <div style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:700, fontSize:22, marginTop:2 }}>Editorial + Institutional pairing</div>

    <div style={{ marginTop:18, display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
      <div style={{ border:'1.5px solid #1a1612', padding:16 }}>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>DISPLAY · SERIF</div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:700, fontSize:34, lineHeight:1, letterSpacing:'-0.02em', marginTop:6 }}>
          Constitutional<br/><span style={{ fontStyle:'italic', fontWeight:500 }}>Economics</span>
        </div>
        <div style={{ marginTop:10, fontFamily:'IBM Plex Mono, monospace', fontSize:9 }}>IBM Plex Serif · 700 / 500 italic</div>
      </div>
      <div style={{ border:'1.5px solid #1a1612', padding:16 }}>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>UI · SANS</div>
        <div style={{ fontFamily:'IBM Plex Sans, sans-serif', fontWeight:600, fontSize:18, lineHeight:1.1 }}>
          Africa in Transition is a weekly briefing on the institutions shaping the continent.
        </div>
        <div style={{ marginTop:10, fontFamily:'IBM Plex Mono, monospace', fontSize:9 }}>IBM Plex Sans · 400/500/600</div>
      </div>
      <div style={{ border:'1.5px solid #1a1612', padding:16 }}>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>UTILITY · MONO</div>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:11, lineHeight:1.5, letterSpacing:'0.04em' }}>
          EP · 04 / 2026 — 48 MIN<br/>
          THEME · CONSTITUTIONAL ECONOMICS<br/>
          GUEST · DR. K. NTHATISI
        </div>
        <div style={{ marginTop:10, fontFamily:'IBM Plex Mono, monospace', fontSize:9 }}>IBM Plex Mono · captions, metadata</div>
      </div>
      <div style={{ border:'1.5px solid #1a1612', padding:16 }}>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>HUMAN · PULL QUOTE</div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontStyle:'italic', fontWeight:500, fontSize:17, lineHeight:1.25 }}>
          "Africa's transformation is, before anything else, a constitutional question."
        </div>
        <div style={{ marginTop:10, fontFamily:'IBM Plex Mono, monospace', fontSize:9 }}>Plex Serif Italic · large quotations</div>
      </div>
    </div>
    <div style={{ marginTop:'auto', paddingTop:14, fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>
      Premium swap (if budget allows): Söhne (UI) + Tiempos / GT Sectra (display) + JetBrains Mono (utility).
    </div>
  </div>
);

// ---------- SITEMAP ----------

const SiteNode = ({ label, primary, style }) => (
  <div style={{
    border: primary ? '2px solid #1a1612' : '1.5px solid #1a1612',
    background: primary ? '#1a1612' : '#fff',
    color: primary ? '#faf7f0' : '#1a1612',
    padding:'8px 12px', fontFamily:'IBM Plex Mono, monospace', fontSize:10,
    letterSpacing:'0.04em', textTransform:'uppercase',
    textAlign:'center',
    ...style,
  }}>{label}</div>
);

const Sitemap = () => (
  <div style={{ padding:28, height:'100%', background:'#faf7f0', display:'flex', flexDirection:'column' }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
      <div>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, color:'#5a544b' }}>INFORMATION ARCHITECTURE</div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:700, fontSize:22, marginTop:2 }}>Sitemap · v0.1</div>
      </div>
      <div className="wf-handwrite" style={{ fontSize:18, color:'#7a6b4a' }}>three primary clusters</div>
    </div>

    {/* Top: Homepage hub */}
    <div style={{ marginTop:24, display:'flex', justifyContent:'center' }}>
      <SiteNode label="Homepage · constitutionalafrica.org" primary style={{ minWidth:280 }} />
    </div>

    {/* connector */}
    <div style={{ display:'flex', justifyContent:'center', height:24, position:'relative' }}>
      <div style={{ width:1, background:'#1a1612' }} />
    </div>

    {/* 3 cluster columns */}
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24, position:'relative' }}>
      {/* horizontal connector */}
      <div style={{ position:'absolute', top:-12, left:'16.6%', right:'16.6%', height:1, background:'#1a1612' }} />
      {[
        { cluster:'IDENTITY', items:['About Constitutional Africa', 'Editorial Board', 'Contact', 'Press'] },
        { cluster:'IDEAS', items:['African Constitutional Economics', 'Africa in Transition', 'Insights / Articles', 'Featured Conversations'] },
        { cluster:'MEDIA & COMMUNITY', items:['Podcast / Episodes', 'Youth Voices', 'Newsletter / Community', 'YouTube Hub'] },
      ].map(col => (
        <div key={col.cluster} style={{ display:'flex', flexDirection:'column', alignItems:'stretch', gap:10, paddingTop:12, position:'relative' }}>
          <div style={{ position:'absolute', top:0, left:'50%', width:1, height:12, background:'#1a1612' }} />
          <div style={{
            fontFamily:'IBM Plex Mono, monospace', fontSize:9, letterSpacing:'0.14em',
            color:'#5a544b', textAlign:'center', marginBottom:4,
          }}>{col.cluster}</div>
          {col.items.map(it => (
            <SiteNode key={it} label={it} />
          ))}
        </div>
      ))}
    </div>

    <div style={{ marginTop:'auto', paddingTop:20, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12 }}>
      {[
        ['IDENTITY', 'who & why · trust signals · convening voice'],
        ['IDEAS', 'the intellectual layer — ACE framework, longform'],
        ['MEDIA', 'podcast, youth voices, multimedia, community'],
        ['UTILITY', 'search · subscribe · partnerships · accessibility'],
      ].map(([k,v]) => (
        <div key={k} style={{ border:'1px dashed #1a1612', padding:'8px 10px' }}>
          <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, fontWeight:600, letterSpacing:'0.1em' }}>{k}</div>
          <div style={{ fontFamily:'IBM Plex Sans, sans-serif', fontSize:10, color:'#5a544b', marginTop:3, lineHeight:1.35 }}>{v}</div>
        </div>
      ))}
    </div>
  </div>
);

Object.assign(window, {
  LogoPillar, LogoAperture, LogoMeridian, LogoMonogram,
  Palette1, Palette2, Palette3,
  TypeSystem, Sitemap,
});
