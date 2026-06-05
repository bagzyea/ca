// Constitutional Indigo — palette explored as a token system + usage.

const Swatch = ({ name, token, hex, contrast, surface, fg, big }) => (
  <div style={{ display:'flex', flexDirection:'column' }}>
    <div style={{
      background: hex,
      color: fg,
      aspectRatio: big ? '5/4' : '1/1',
      padding:'14px 14px 12px',
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      border: surface ? '1px solid var(--ca-rule)' : 'none',
    }}>
      <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, letterSpacing:'0.14em', opacity:0.85 }}>{token}</div>
      <div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize: big ? 18 : 14, fontWeight:600 }}>{name}</div>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, opacity:0.85, marginTop:2 }}>{hex}</div>
      </div>
    </div>
    {contrast && (
      <div className="ca-mono" style={{ fontSize:9, marginTop:6, color:'var(--ca-ink-soft)', letterSpacing:'0.1em' }}>
        AAA {contrast}
      </div>
    )}
  </div>
);

const IndigoSystem = () => (
  <div style={{ background:'var(--ca-paper)', padding:48, height:'100%', display:'flex', flexDirection:'column' }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
      <div>
        <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>Palette · Constitutional Indigo</div>
        <div className="ca-serif" style={{ fontSize:42, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.025em', lineHeight:1.05 }}>
          A scholarly, premium,<br/>distinctly continental palette.
        </div>
        <div className="ca-sans" style={{ fontSize:14, color:'var(--ca-ink-soft)', marginTop:14, maxWidth:620, lineHeight:1.55 }}>
          Inkwell <i>indigo</i> as the institutional base. Brass for moments of authority and pull-quotes. Jade as a quiet pan-African counterpoint. Ivory grounds the editorial surface; obsidian carries body copy.
        </div>
      </div>
      <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', textAlign:'right', letterSpacing:'0.14em' }}>
        TOKENS · v0.1<br/>5 CORE · 14 STEPS
      </div>
    </div>

    {/* Core swatches */}
    <div style={{ marginTop:36, display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr 1fr', gap:14 }}>
      <Swatch big token="ca-indigo-700" name="Inkwell Indigo" hex="#16264D" fg="#F6F1E4" contrast="AAA · 14.8" />
      <Swatch token="ca-brass-500"  name="Brass"     hex="#B38A3A" fg="#0E1320" contrast="AA · 5.1" />
      <Swatch token="ca-ivory"      name="Ivory"     hex="#F6F1E4" fg="#0E1320" surface contrast="AAA · 18.9" />
      <Swatch token="ca-jade-600"   name="Jade"      hex="#3E7A5E" fg="#F6F1E4" contrast="AAA · 7.4" />
      <Swatch token="ca-obsidian"   name="Obsidian"  hex="#0E1320" fg="#F6F1E4" contrast="AAA · 19.2" />
    </div>

    {/* Tints/Shades scale */}
    <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
      <div>
        <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>Indigo scale</div>
        <div style={{ display:'flex', marginTop:10, border:'1px solid var(--ca-rule)' }}>
          {[
            ['100','#D8DDEC'], ['300','#7E8FB4'], ['500','#2F4878'], ['600','#1E325C'], ['700','#16264D'], ['800','#0F1B3D'], ['900','#0A1330'],
          ].map(([s, hex], i, arr) => (
            <div key={s} style={{ flex:1, height:60, background:hex, color: parseInt(s) >= 500 ? '#F6F1E4' : '#0E1320', padding:'8px 10px', display:'flex', alignItems:'flex-end', borderRight: i < arr.length-1 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
              <div className="ca-mono" style={{ fontSize:9, letterSpacing:'0.1em' }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>Brass scale</div>
        <div style={{ display:'flex', marginTop:10, border:'1px solid var(--ca-rule)' }}>
          {[
            ['300','#D6BC78'], ['400','#C6A050'], ['500','#B38A3A'], ['600','#A47E2E'], ['700','#8E6B26'],
          ].map(([s, hex], i, arr) => (
            <div key={s} style={{ flex:1, height:60, background:hex, color:'#0E1320', padding:'8px 10px', display:'flex', alignItems:'flex-end', borderRight: i < arr.length-1 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
              <div className="ca-mono" style={{ fontSize:9, letterSpacing:'0.1em' }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Usage examples */}
    <div style={{ marginTop:32, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16 }}>
      {/* Example A — indigo dominant */}
      <div style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:'28px 24px', minHeight:280, position:'relative', overflow:'hidden' }}>
        <div className="ca-mono" style={{ fontSize:10, opacity:0.7, letterSpacing:'0.2em' }}>SPLASH · 60% INDIGO</div>
        <div className="ca-serif" style={{ fontSize:24, fontWeight:600, marginTop:14, lineHeight:1.05 }}>
          Ideas, institutions, infrastructure.
        </div>
        <div style={{ position:'absolute', bottom:-60, right:-60, opacity:0.12 }}>
          <MeridianMark size={220} color="#F6F1E4" />
        </div>
        <div style={{ position:'absolute', left:24, bottom:18, display:'flex', gap:6 }}>
          <span style={{ width:10, height:10, background:'var(--ca-brass-500)' }} />
          <span style={{ width:10, height:10, background:'var(--ca-ivory)' }} />
          <span style={{ width:10, height:10, background:'var(--ca-jade-600)' }} />
        </div>
      </div>

      {/* Example B — ivory editorial */}
      <div style={{ background:'var(--ca-ivory)', color:'var(--ca-obsidian)', padding:'28px 24px', minHeight:280, border:'1px solid var(--ca-rule)' }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', letterSpacing:'0.2em' }}>EDITORIAL · 30% IVORY</div>
        <div className="ca-serif" style={{ fontSize:22, fontWeight:600, marginTop:14, lineHeight:1.1 }}>
          A continental policy platform, in print and pixel.
        </div>
        <div className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink-soft)', marginTop:12, lineHeight:1.5 }}>
          Body copy reads at AAA contrast against ivory. Brass underlines and indigo links carry editorial moments.
        </div>
        <div style={{ marginTop:16, height:1, background:'var(--ca-brass-500)' }} />
      </div>

      {/* Example C — brass moment */}
      <div style={{ background:'var(--ca-brass-500)', color:'var(--ca-obsidian)', padding:'28px 24px', minHeight:280, position:'relative' }}>
        <div className="ca-mono" style={{ fontSize:10, opacity:0.7, letterSpacing:'0.2em' }}>ACCENT · 10% BRASS</div>
        <div className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, fontSize:22, marginTop:14, lineHeight:1.15 }}>
          "Africa's transformation is, before anything else, a constitutional question."
        </div>
        <div className="ca-mono" style={{ fontSize:10, marginTop:'auto', position:'absolute', bottom:18, left:24, letterSpacing:'0.18em' }}>
          MANIFESTO · §01
        </div>
      </div>
    </div>

    <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', marginTop:18, letterSpacing:'0.14em' }}>
      USAGE RATIO · 60 INDIGO · 30 IVORY · 10 BRASS · JADE FOR EMPHASIS · OBSIDIAN FOR TEXT
    </div>
  </div>
);

Object.assign(window, { IndigoSystem });
