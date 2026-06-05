// Pre-build · COMPONENT AUDIT
// Spec the variants we actually need before build.

// ───────────────── Episode card variants ─────────────────
const EpisodeCardVariants = () => {
  const Cover = ({ size = 56, label = 'EP·04' }) => {
    const isFluid = typeof size !== 'number';
    const boxStyle = isFluid
      ? { width:'100%', aspectRatio:'1/1', background:'var(--ca-indigo-700)', position:'relative', flexShrink:0, display:'flex', alignItems:'flex-end', padding:6 }
      : { width:size, height:size, background:'var(--ca-indigo-700)', position:'relative', flexShrink:0, display:'flex', alignItems:'flex-end', padding:6 };
    const svgProps = isFluid ? { width:'110%', height:'110%' } : { width:size * 1.1, height:size * 1.1 };
    return (
      <div style={boxStyle}>
        <div className="ca-mono" style={{ fontSize:7, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>{label}</div>
        <div style={{ position:'absolute', right:-12, bottom:-12, opacity:0.18 }}>
          <svg {...svgProps} viewBox="0 0 100 100"><circle cx="50" cy="50" r="36" stroke="#F6F1E4" strokeWidth="9" fill="none" /><line x1="50" y1="0" x2="50" y2="100" stroke="#F6F1E4" strokeWidth="1.4"/></svg>
        </div>
      </div>
    );
  };

  return (
    <div style={{ background:'var(--ca-paper)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>07 · Components · Episode card</div>
      <div className="ca-serif" style={{ fontSize:32, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
        Five variants. One source of truth.
      </div>
      <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:680, lineHeight:1.55 }}>
        Same Episode record, five rendering contexts. Build the component once with these as named props/variants.
      </div>

      <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:20, flex:1 }}>
        {/* A · Home hero */}
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>A · HOME HERO · LATEST EPISODE</div>
          <div style={{ marginTop:14, background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:24, display:'grid', gridTemplateColumns:'140px 1fr', gap:20 }}>
            <Cover size={140} label="EP·04 / S02"/>
            <div>
              <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>LATEST · 12 MAY 2026 · 48 MIN</div>
              <div className="ca-serif" style={{ fontSize:22, fontWeight:600, marginTop:8, lineHeight:1.15 }}>The Constitutional Logic of the AfCFTA</div>
              <div className="ca-sans" style={{ fontSize:12, opacity:0.85, marginTop:8, lineHeight:1.5 }}>With Olabisi Akinwale, Trade Law Centre · Pretoria · & Kassem Salim, AU Commission · Addis Ababa.</div>
              <div style={{ marginTop:14, display:'flex', alignItems:'center', gap:10 }}>
                <div style={{ width:36, height:36, borderRadius:999, border:'1.5px solid var(--ca-ivory)', display:'flex', alignItems:'center', justifyContent:'center' }}>▶</div>
                <div style={{ flex:1, height:3, background:'rgba(246,241,228,0.2)' }}><div style={{ width:'0%', height:'100%', background:'var(--ca-brass-400)' }}/></div>
                <span className="ca-mono" style={{ fontSize:10, opacity:0.8 }}>SPOTIFY · APPLE · RSS</span>
              </div>
            </div>
          </div>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:10, letterSpacing:'0.14em' }}>USE · ABOVE-THE-FOLD ON HOME ONLY</div>
        </div>

        {/* B · Grid card */}
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>B · GRID CARD</div>
          <div style={{ marginTop:14, border:'1px solid var(--ca-rule)' }}>
            <Cover size={'100%'} label="EP·03"/>
            <div style={{ padding:14 }}>
              <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-700)', letterSpacing:'0.16em' }}>EP·03 · 38 MIN</div>
              <div className="ca-serif" style={{ fontSize:16, fontWeight:600, marginTop:6, lineHeight:1.2, color:'var(--ca-obsidian)' }}>Federalism in motion: Ethiopia, Nigeria, South Africa</div>
              <div style={{ marginTop:10, display:'flex', gap:6, flexWrap:'wrap' }}>
                <span className="ca-chip" style={{ border:'1px solid var(--ca-rule)', color:'var(--ca-ink-soft)' }}>Federalism</span>
                <span className="ca-chip" style={{ border:'1px solid var(--ca-rule)', color:'var(--ca-ink-soft)' }}>ETH · NGA · ZAF</span>
              </div>
            </div>
          </div>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:10, letterSpacing:'0.14em' }}>USE · PODCAST INDEX · ARCHIVE GRID</div>
        </div>

        {/* C · Compact list row */}
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>C · LIST ROW · COMPACT</div>
          <div style={{ marginTop:14, display:'flex', flexDirection:'column' }}>
            {[
              ['EP·04', 'The Constitutional Logic of the AfCFTA', '48 MIN'],
              ['EP·03', 'Federalism in motion: Ethiopia, Nigeria, South Africa', '38 MIN'],
              ['EP·02', 'Energy sovereignty and the next frontier', '52 MIN'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ display:'grid', gridTemplateColumns:'48px 1fr auto', gap:14, alignItems:'center', padding:'12px 0', borderBottom:'1px solid var(--ca-rule)' }}>
                <Cover size={48} label={n}/>
                <div className="ca-serif" style={{ fontSize:14, fontWeight:600, color:'var(--ca-obsidian)' }}>{t}</div>
                <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)' }}>{d}</div>
              </div>
            ))}
          </div>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:10, letterSpacing:'0.14em' }}>USE · HOME UPCOMING · "MORE LIKE THIS"</div>
        </div>

        {/* D · Inline (embedded in essay) */}
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>D · INLINE · INSIDE AN ESSAY</div>
          <div style={{ marginTop:14, borderLeft:'3px solid var(--ca-brass-500)', padding:'14px 18px', background:'var(--ca-paper)' }}>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-700)', letterSpacing:'0.18em' }}>LISTEN · RELATED EPISODE</div>
            <div className="ca-serif" style={{ fontSize:16, fontWeight:600, color:'var(--ca-obsidian)', marginTop:5, lineHeight:1.25 }}>Energy sovereignty and the next frontier</div>
            <div style={{ marginTop:10, display:'flex', alignItems:'center', gap:10, color:'var(--ca-ink)' }}>
              <span style={{ fontSize:14 }}>▶</span>
              <span style={{ flex:1, height:3, background:'var(--ca-rule)' }}><div style={{ width:'18%', height:'100%', background:'var(--ca-indigo-700)' }}/></span>
              <span className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)' }}>9:24 / 52:00</span>
            </div>
          </div>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:10, letterSpacing:'0.14em' }}>USE · EMBEDDED IN INSIGHT BODY</div>
        </div>

        {/* E · Mobile compact + sharing */}
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20, gridColumn:'span 2' }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>E · MOBILE & SHARE CONTEXT</div>
          <div style={{ marginTop:14, display:'grid', gridTemplateColumns:'280px 1fr 1fr', gap:18 }}>
            {/* mobile player */}
            <div style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:14, border:'1px solid var(--ca-rule)' }}>
              <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>MOBILE PLAYER · 360PX</div>
              <Cover size={'100%'} label="EP·04"/>
              <div className="ca-serif" style={{ fontSize:14, fontWeight:600, marginTop:10, lineHeight:1.2 }}>The Constitutional Logic of the AfCFTA</div>
              <div style={{ marginTop:10, height:3, background:'rgba(246,241,228,0.2)' }}><div style={{ width:'24%', height:'100%', background:'var(--ca-brass-400)' }}/></div>
              <div style={{ marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span className="ca-mono" style={{ fontSize:9, opacity:0.7 }}>11:14 / 48:00</span>
                <div style={{ display:'flex', gap:14, fontSize:16 }}><span>⏮</span><span>▶</span><span>⏭</span></div>
                <span style={{ fontSize:14 }}>⇪</span>
              </div>
            </div>
            {/* OG card */}
            <div>
              <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>OG · 1200×630</div>
              <div style={{ marginTop:8, aspectRatio:'1200/630', background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:20, position:'relative', overflow:'hidden' }}>
                <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>CONSTITUTIONAL AFRICA · EP·04</div>
                <div className="ca-serif" style={{ fontSize:18, fontWeight:600, marginTop:10, lineHeight:1.15 }}>The Constitutional Logic of the AfCFTA</div>
                <div className="ca-sans" style={{ fontSize:10, opacity:0.85, marginTop:8 }}>Olabisi Akinwale · Kassem Salim</div>
                <div style={{ position:'absolute', right:-18, bottom:-18, opacity:0.16 }}>
                  <svg width={140} height={140} viewBox="0 0 100 100"><circle cx="50" cy="50" r="36" stroke="#F6F1E4" strokeWidth="9" fill="none"/></svg>
                </div>
              </div>
            </div>
            {/* Apple/Spotify card */}
            <div>
              <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>APPLE / SPOTIFY · 1:1 · 3000PX</div>
              <div style={{ marginTop:8, aspectRatio:'1/1', background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:18, position:'relative', overflow:'hidden', display:'flex', flexDirection:'column' }}>
                <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>EP · 04 · MMXXVI</div>
                <div style={{ marginTop:'auto' }}>
                  <div className="ca-mono" style={{ fontSize:9, opacity:0.7, letterSpacing:'0.2em' }}>THE PODCAST</div>
                  <div className="ca-serif" style={{ fontSize:14, fontWeight:600, marginTop:5, lineHeight:1.05 }}>The Constitutional Logic of the AfCFTA</div>
                </div>
                <div style={{ position:'absolute', right:-30, top:-30, opacity:0.18 }}>
                  <svg width={140} height={140} viewBox="0 0 100 100"><circle cx="50" cy="50" r="36" stroke="#F6F1E4" strokeWidth="9" fill="none"/><line x1="50" y1="0" x2="50" y2="100" stroke="#F6F1E4" strokeWidth="1.4"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ───────────────── Other components ─────────────────
const OtherComponents = () => (
  <div style={{ background:'var(--ca-paper)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
    <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>08 · Components · Editorial primitives</div>
    <div className="ca-serif" style={{ fontSize:32, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
      Bylines, quotes, citations, callouts.
    </div>
    <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:680, lineHeight:1.55 }}>
      The small repeated parts that determine whether long-form reading feels institutional or amateur.
    </div>

    <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
      {/* Author chip */}
      <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>AUTHOR / GUEST CHIP · 4 SIZES</div>
        <div style={{ marginTop:16, display:'flex', flexDirection:'column', gap:14 }}>
          {[
            { size:'lg', avatar:56, name:18, role:12 },
            { size:'md', avatar:40, name:14, role:11 },
            { size:'sm', avatar:28, name:12, role:10 },
            { size:'xs · inline', avatar:20, name:11, role:0 },
          ].map(s => (
            <div key={s.size} style={{ display:'flex', alignItems:'center', gap:12, padding:'6px 0', borderBottom:'1px dashed var(--ca-rule)' }}>
              <div style={{ width:s.avatar, height:s.avatar, borderRadius:999, background:'linear-gradient(135deg, var(--ca-jade-600), var(--ca-indigo-700))', flexShrink:0 }}/>
              <div style={{ flex:1 }}>
                <div className="ca-serif" style={{ fontSize:s.name, fontWeight:600, color:'var(--ca-obsidian)', lineHeight:1.15 }}>Olabisi Akinwale</div>
                {s.role > 0 && <div className="ca-sans" style={{ fontSize:s.role, color:'var(--ca-ink-soft)', marginTop:2 }}>Senior fellow · Trade Law Centre · Pretoria</div>}
              </div>
              <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-faint)', letterSpacing:'0.16em' }}>{s.size.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pull quote vs block quote vs callout */}
      <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>QUOTE · CALLOUT · DISTINCT</div>
        <div style={{ marginTop:16, display:'flex', flexDirection:'column', gap:18 }}>
          {/* pull quote */}
          <div style={{ borderLeft:0, padding:'0', textAlign:'center' }}>
            <div className="ca-serif" style={{ fontSize:22, fontStyle:'italic', fontWeight:500, color:'var(--ca-obsidian)', lineHeight:1.3 }}>
              "Sovereignty is not declared. It is constituted, one institution at a time."
            </div>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-700)', marginTop:10, letterSpacing:'0.2em' }}>— PULL QUOTE · EDITORIAL EMPHASIS</div>
          </div>
          <div style={{ height:1, background:'var(--ca-rule)' }}/>
          {/* block quote */}
          <div style={{ paddingLeft:18, borderLeft:'2px solid var(--ca-ink)' }}>
            <div className="ca-serif" style={{ fontSize:15, color:'var(--ca-ink)', lineHeight:1.55, fontStyle:'italic' }}>
              The constitutional question is not <i>whether</i> the AfCFTA will reshape African political economy, but in <i>whose</i> name it does so.
            </div>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:8, letterSpacing:'0.16em' }}>O. AKINWALE · WP/03/2026 · BLOCK QUOTE</div>
          </div>
          <div style={{ height:1, background:'var(--ca-rule)' }}/>
          {/* editor callout */}
          <div style={{ background:'var(--ca-paper-2)', padding:14, border:'1px solid var(--ca-rule)' }}>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-700)', letterSpacing:'0.2em' }}>EDITOR'S NOTE</div>
            <div className="ca-sans" style={{ fontSize:12.5, color:'var(--ca-ink)', marginTop:6, lineHeight:1.5 }}>This essay accompanies Working Paper WP/03/2026. Citations follow the author-date system.</div>
          </div>
        </div>
      </div>

      {/* Footnote / citation */}
      <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>CITATION & FOOTNOTE</div>
        <div className="ca-serif" style={{ fontSize:14, color:'var(--ca-ink)', marginTop:14, lineHeight:1.65 }}>
          The AfCFTA Protocol on Investment grants states a sovereign right to regulate
          <sup style={{ fontFamily:'IBM Plex Mono', fontSize:10, color:'var(--ca-brass-700)', marginLeft:2 }}>[1]</sup> 
          {' '}— a clause Akinwale (2026) traces directly to the SADC Model BIT
          <sup style={{ fontFamily:'IBM Plex Mono', fontSize:10, color:'var(--ca-brass-700)', marginLeft:2 }}>[2]</sup>.
        </div>
        <div style={{ marginTop:16, paddingTop:14, borderTop:'1px solid var(--ca-rule)' }}>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>NOTES · AUTHOR-DATE</div>
          <ol className="ca-sans" style={{ fontSize:11.5, color:'var(--ca-ink)', marginTop:8, paddingLeft:16, lineHeight:1.55 }}>
            <li>AfCFTA Secretariat. 2023. <i>Protocol on Investment</i>, Art. 19.</li>
            <li>Akinwale, O. 2026. "Sovereignty in BIT design." <i>Constitutional Africa WP/03/2026</i>.</li>
          </ol>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-700)', marginTop:10, letterSpacing:'0.16em' }}>EXPORT · APA · CHICAGO · BIBTEX</div>
        </div>
      </div>

      {/* Country / Pillar tag */}
      <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>TAG SYSTEM · TAXONOMY-AWARE</div>
        <div style={{ marginTop:14, display:'flex', flexDirection:'column', gap:14 }}>
          <div>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.16em' }}>PILLAR · brass underline</div>
            <div style={{ marginTop:6, display:'flex', gap:8 }}>
              {['01 · Constitutional design', '03 · Infrastructure'].map(t => (
                <span key={t} style={{ fontFamily:'IBM Plex Mono', fontSize:10, padding:'4px 10px', borderBottom:'2px solid var(--ca-brass-500)', color:'var(--ca-obsidian)' }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.16em' }}>COUNTRY · ISO chip</div>
            <div style={{ marginTop:6, display:'flex', gap:6 }}>
              {['NGA', 'KEN', 'ETH', 'ZAF'].map(c => (
                <span key={c} style={{ fontFamily:'IBM Plex Mono', fontSize:10, padding:'3px 8px', background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', letterSpacing:'0.14em' }}>{c}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.16em' }}>THEME · ghost outline</div>
            <div style={{ marginTop:6, display:'flex', gap:6, flexWrap:'wrap' }}>
              {['Federalism', 'Energy sovereignty', 'AfCFTA'].map(c => (
                <span key={c} className="ca-chip" style={{ border:'1px solid var(--ca-ink)', color:'var(--ca-ink)' }}>{c}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.16em' }}>FORMAT · subtle, mono-only</div>
            <div style={{ marginTop:6, display:'flex', gap:10 }}>
              {['ESSAY', 'WORKING PAPER', 'EPISODE'].map(c => (
                <span key={c} style={{ fontFamily:'IBM Plex Mono', fontSize:10, color:'var(--ca-ink-soft)', letterSpacing:'0.2em' }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ───────────────── Data viz house style ─────────────────
const DataVizStyle = () => {
  const Bars = () => {
    const data = [['NGA', 87], ['ZAF', 74], ['EGY', 71], ['KEN', 58], ['GHA', 49], ['ETH', 41], ['SEN', 38], ['RWA', 34]];
    return (
      <svg viewBox="0 0 320 180" style={{ width:'100%', height:180 }}>
        {data.map(([c, v], i) => {
          const x = 30 + i * 36, h = v * 1.4;
          return (
            <g key={c}>
              <rect x={x} y={170 - h} width={22} height={h} fill={i === 0 ? '#16264D' : i === 1 ? '#1E325C' : '#7E8FB4'}/>
              <text x={x+11} y={178} fontSize="7" fontFamily="IBM Plex Mono" textAnchor="middle" fill="#4A506A" letterSpacing="0.1em">{c}</text>
              <text x={x+11} y={170 - h - 4} fontSize="8" fontFamily="IBM Plex Mono" textAnchor="middle" fill="#1B2030">{v}</text>
            </g>
          );
        })}
        <line x1="20" y1="170" x2="310" y2="170" stroke="#4A506A" strokeWidth="0.6"/>
      </svg>
    );
  };
  const Line = () => {
    const pts = [10, 14, 12, 18, 22, 26, 24, 30, 36, 42, 38, 44];
    const w = 320, h = 140, pad = 20;
    return (
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width:'100%', height:h }}>
        <polyline points={pts.map((v, i) => `${pad + i * ((w-2*pad) / (pts.length-1))},${h - pad - v * 2}`).join(' ')} fill="none" stroke="#16264D" strokeWidth="1.8"/>
        <polyline points={pts.map((v, i) => `${pad + i * ((w-2*pad) / (pts.length-1))},${h - pad - (v - 6) * 2}`).join(' ')} fill="none" stroke="#B38A3A" strokeWidth="1.4" strokeDasharray="3 3"/>
        <line x1={pad} y1={h-pad} x2={w-pad} y2={h-pad} stroke="#4A506A" strokeWidth="0.6"/>
      </svg>
    );
  };
  const Map = () => (
    <svg viewBox="0 0 200 240" style={{ width:'100%', height:240 }}>
      {/* extremely abstract continent outline */}
      <path d="M70 30 L120 26 L150 50 L160 90 L150 130 L140 170 L120 200 L100 215 L80 200 L60 180 L50 140 L55 100 L60 60 Z" fill="#D8DDEC" stroke="#4A506A" strokeWidth="0.8"/>
      {/* highlight regions */}
      <circle cx="100" cy="80" r="14" fill="#16264D"/>
      <circle cx="115" cy="120" r="10" fill="#1E325C"/>
      <circle cx="90" cy="160" r="12" fill="#3E7A5E"/>
      <circle cx="75" cy="105" r="7" fill="#7E8FB4"/>
      <circle cx="135" cy="80" r="6" fill="#B38A3A"/>
    </svg>
  );

  return (
    <div style={{ background:'var(--ca-ivory)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>09 · Components · Data visualisation house style</div>
      <div className="ca-serif" style={{ fontSize:32, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
        Charts are content. They get a system.
      </div>
      <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:680, lineHeight:1.55 }}>
        Three primitives, three colour rules, one typeface for labels. Built once in the design system; consumed by every essay, paper, and country profile.
      </div>

      <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:18 }}>
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:18 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>BAR · RANKED · TOP 8</div>
          <Bars/>
          <div className="ca-sans" style={{ fontSize:11.5, color:'var(--ca-ink)', marginTop:10, lineHeight:1.5 }}><b>Constitutional courts: cases ruled in last 5y.</b> Source: African Court on Human and Peoples' Rights.</div>
        </div>
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:18 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>LINE · TIME SERIES · TWO LINES MAX</div>
          <Line/>
          <div style={{ display:'flex', gap:14, fontFamily:'IBM Plex Mono', fontSize:10, color:'var(--ca-ink-soft)', marginTop:10 }}>
            <span><span style={{ display:'inline-block', width:14, height:2, background:'#16264D', verticalAlign:'middle', marginRight:6 }}/>Trade volume</span>
            <span><span style={{ display:'inline-block', width:14, height:2, background:'#B38A3A', verticalAlign:'middle', marginRight:6, borderTop:'1.4px dashed #B38A3A' }}/>Forecast</span>
          </div>
          <div className="ca-sans" style={{ fontSize:11.5, color:'var(--ca-ink)', marginTop:10, lineHeight:1.5 }}><b>Intra-African trade, 2015–2026.</b> Source: AfCFTA Secretariat.</div>
        </div>
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:18 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>MAP · CONTINENTAL · INTENSITY</div>
          <Map/>
          <div className="ca-sans" style={{ fontSize:11.5, color:'var(--ca-ink)', marginTop:10, lineHeight:1.5 }}><b>Countries with constitutional review by apex court.</b> Source: editorial.</div>
        </div>
      </div>

      <div style={{ marginTop:22, padding:18, background:'#fff', border:'1px solid var(--ca-rule)' }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>HOUSE RULES</div>
        <ol className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink)', marginTop:8, paddingLeft:18, lineHeight:1.65, columnCount:2, columnGap:32 }}>
          <li>Labels in IBM Plex Mono only — never serif.</li>
          <li>Indigo for primary series, jade for comparison, brass for forecast/projection.</li>
          <li>No 3D. No gridlines past the baseline.</li>
          <li>Always credit source in a single line below the chart.</li>
          <li>Country always referenced by ISO-3166 alpha-3 code.</li>
          <li>Title is sentence-case, bold; source is mono, soft-ink.</li>
        </ol>
      </div>
    </div>
  );
};

Object.assign(window, { EpisodeCardVariants, OtherComponents, DataVizStyle });
