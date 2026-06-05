// Meridian logo — refined system.
// Concept: a confident "C" framing the continental chamber, a precise prime
// meridian crossing top→bottom, and a small compass north-star marking the
// constitutional axis. Built from exact circle/line geometry so every lockup
// scales cleanly.

// Reusable parametric mark.
// variant: 'primary' | 'minimal' | 'latitudes' | 'sealed' | 'monogram'
const MeridianMark = ({ size = 72, color = '#16264D', accent, variant = 'primary' }) => {
  const a = accent || color;
  const stroke = size * 0.10;            // proportional stroke
  // ViewBox is 100×100; C is a 270° arc from 45° to 315° (i.e. opens right)
  // angle 0 = right; we use deg→rad for path math
  const cx = 50, cy = 50, r = 38;
  // open the C 70° on the right side
  const openHalf = 35; // degrees on each side of the right axis
  const a1 = (openHalf) * Math.PI / 180;
  const a2 = (-openHalf) * Math.PI / 180;
  // For an arc going counterclockwise (the visible C), start at top-right opening
  // and sweep counterclockwise through left to bottom-right opening.
  const x1 = cx + r * Math.cos(a1), y1 = cy - r * Math.sin(a1); // top-right opening
  const x2 = cx + r * Math.cos(a2), y2 = cy - r * Math.sin(a2); // bottom-right opening
  // largeArc=1 sweep=0 draws CCW (the long way around)
  const cPath = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* Sealed variant — outer ring */}
      {variant === 'sealed' && (
        <circle cx={cx} cy={cy} r={48} stroke={color} strokeWidth={1.4} opacity={0.5}/>
      )}

      {/* Latitude tick marks variant */}
      {variant === 'latitudes' && [22, 34, 50, 66, 78].map(y => (
        <line key={y} x1={47} y1={y} x2={53} y2={y} stroke={color} strokeWidth={1.4} opacity={0.55}/>
      ))}

      {/* Prime meridian — vertical axis */}
      {variant !== 'monogram' && (
        <line
          x1={cx} y1={6} x2={cx} y2={94}
          stroke={color} strokeWidth={variant === 'sealed' ? 2 : 1.6}
        />
      )}

      {/* The C arc */}
      {variant !== 'monogram' && (
        <path d={cPath} stroke={color} strokeWidth={stroke} strokeLinecap="round" fill="none"/>
      )}

      {/* CA monogram variant */}
      {variant === 'monogram' && (
        <>
          {/* C */}
          <path d="M70 28 A24 24 0 1 0 70 72" stroke={color} strokeWidth={9} strokeLinecap="round" fill="none"/>
          {/* A */}
          <path d="M28 76 L42 24 L56 76 M33 60 L51 60" stroke={color} strokeWidth={7} strokeLinejoin="round" strokeLinecap="round" fill="none"/>
        </>
      )}

      {/* Compass north star — sits on meridian at the celestial mark */}
      {(variant === 'primary' || variant === 'sealed') && (
        <g transform={`translate(${cx} ${cy})`}>
          {/* 4-point compass star, slightly stretched vertically */}
          <path
            d="M 0 -10 L 2.4 -2.4 L 10 0 L 2.4 2.4 L 0 10 L -2.4 2.4 L -10 0 L -2.4 -2.4 Z"
            fill={a}
          />
          {/* center dot */}
          <circle cx={0} cy={0} r={1.6} fill={color}/>
        </g>
      )}
    </svg>
  );
};

// ───────────────── PAGE 1 · MARK VARIATIONS ─────────────────
const MeridianMarkSheet = () => (
  <div style={{ background:'var(--ca-paper)', padding:48, height:'100%', display:'flex', flexDirection:'column' }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
      <div>
        <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>03 · Meridian · Refined</div>
        <div className="ca-serif" style={{ fontSize:38, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
          The mark, in five variations.
        </div>
        <div className="ca-sans" style={{ fontSize:14, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:520, lineHeight:1.5 }}>
          A confident "C" framing the continental chamber. The prime meridian crosses top to bottom — sovereignty's vertical axis. A four-point compass star sits at the constitutional centre.
        </div>
      </div>
      <div style={{ textAlign:'right' }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)' }}>GEOMETRY · 100 / 100 · STROKE 10%</div>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', marginTop:4 }}>OPENING · 70° EAST</div>
      </div>
    </div>

    <div style={{ marginTop:36, display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:16, flex:1 }}>
      {[
        { variant:'primary',    name:'Primary',    desc:'C · meridian · north star' },
        { variant:'minimal',    name:'Minimal',    desc:'no marker — for small sizes' },
        { variant:'latitudes',  name:'Latitudes',  desc:'tick marks · editorial use' },
        { variant:'sealed',     name:'Sealed',     desc:'inscribed ring · official' },
        { variant:'monogram',   name:'Monogram',   desc:'CA · favicon / avatar' },
      ].map(v => (
        <div key={v.variant} style={{ background:'#fff', border:'1px solid var(--ca-rule)', borderRadius:2, padding:18, display:'flex', flexDirection:'column', alignItems:'center' }}>
          <div style={{ aspectRatio:'1/1', width:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:14 }}>
            <MeridianMark size={120} variant={v.variant} />
          </div>
          <div className="ca-rule" style={{ width:'100%' }} />
          <div className="ca-sans" style={{ fontSize:13, fontWeight:600, color:'var(--ca-obsidian)', marginTop:12 }}>{v.name}</div>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:4, textAlign:'center', letterSpacing:'0.08em' }}>{v.desc}</div>
        </div>
      ))}
    </div>

    <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap:24, borderTop:'1px solid var(--ca-rule)', paddingTop:20 }}>
      <div>
        <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>What changed</div>
        <ul className="ca-sans" style={{ marginTop:8, fontSize:13, lineHeight:1.6, color:'var(--ca-ink)', paddingLeft:18 }}>
          <li>Tighter, true-circle geometry — the C is exactly 290° of a 38-radius arc.</li>
          <li>Solid meridian (no more dashes) — reads cleaner at small sizes and feels institutional.</li>
          <li>Star simplified from 8 points to a 4-point compass — clearer at favicon scale.</li>
          <li>Rounded stroke caps on the C — humanises the geometric form.</li>
        </ul>
      </div>
      <div>
        <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>System rules</div>
        <ul className="ca-sans" style={{ marginTop:8, fontSize:13, lineHeight:1.6, color:'var(--ca-ink)', paddingLeft:18 }}>
          <li>Star is <i>brass</i> by default; <i>ivory</i> on dark.</li>
          <li>Below 24px → switch to Monogram.</li>
          <li>Sealed only for credentials & official seals.</li>
        </ul>
      </div>
      <div>
        <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>Clear space</div>
        <ul className="ca-sans" style={{ marginTop:8, fontSize:13, lineHeight:1.6, color:'var(--ca-ink)', paddingLeft:18 }}>
          <li>Padding ≥ 25% of mark height on all sides.</li>
          <li>Never compress · never re-colour the star.</li>
          <li>Pair only with Plex Sans or Plex Serif.</li>
        </ul>
      </div>
    </div>
  </div>
);

// ───────────────── PAGE 2 · LOCKUPS ─────────────────
const MeridianLockups = () => (
  <div style={{ background:'var(--ca-ivory)', padding:48, height:'100%', display:'flex', flexDirection:'column' }}>
    <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>Lockups · wordmark system</div>
    <div className="ca-serif" style={{ fontSize:34, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
      How the mark meets the name.
    </div>

    <div style={{ marginTop:32, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, flex:1 }}>
      {/* Horizontal primary */}
      <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:'40px 32px', display:'flex', flexDirection:'column' }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)' }}>A · HORIZONTAL · PRIMARY</div>
        <div style={{ flex:1, display:'flex', alignItems:'center', gap:20, marginTop:20 }}>
          <MeridianMark size={84} />
          <div>
            <div className="ca-sans" style={{ fontWeight:600, fontSize:28, lineHeight:1, color:'var(--ca-obsidian)', letterSpacing:'-0.01em' }}>Constitutional</div>
            <div className="ca-sans" style={{ fontWeight:400, fontSize:28, lineHeight:1.05, color:'var(--ca-obsidian)', letterSpacing:'-0.01em' }}>Africa</div>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-700)', marginTop:8, letterSpacing:'0.2em' }}>EST · MMXXVI</div>
          </div>
        </div>
        <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:14, letterSpacing:'0.14em' }}>USE FOR · WEBSITE HEADER, PARTNER DECKS, EMAIL HEADERS</div>
      </div>

      {/* Stacked */}
      <div style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:'40px 32px', display:'flex', flexDirection:'column' }}>
        <div className="ca-mono" style={{ fontSize:10, opacity:0.7 }}>B · STACKED · ON INDIGO</div>
        <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:14 }}>
          <MeridianMark size={92} color="#F6F1E4" accent="#C6A050" />
          <div style={{ textAlign:'center' }}>
            <div className="ca-sans" style={{ fontWeight:600, fontSize:13, letterSpacing:'0.36em' }}>CONSTITUTIONAL</div>
            <div style={{ height:1, width:120, background:'rgba(246,241,228,0.4)', margin:'10px auto' }} />
            <div className="ca-sans" style={{ fontWeight:600, fontSize:13, letterSpacing:'0.36em' }}>AFRICA</div>
          </div>
        </div>
        <div className="ca-mono" style={{ fontSize:9, opacity:0.7, marginTop:14, letterSpacing:'0.14em' }}>USE FOR · COVERS, REPORTS, INTRO SLIDES</div>
      </div>

      {/* Wordmark only */}
      <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:'40px 32px', display:'flex', flexDirection:'column' }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)' }}>C · WORDMARK ONLY</div>
        <div style={{ flex:1, display:'flex', alignItems:'center' }}>
          <div>
            <div className="ca-sans" style={{ fontWeight:300, fontSize:42, lineHeight:1, color:'var(--ca-obsidian)', letterSpacing:'-0.025em' }}>
              Constitutional
            </div>
            <div className="ca-sans" style={{ fontWeight:600, fontSize:42, lineHeight:1.05, color:'var(--ca-obsidian)', letterSpacing:'-0.025em' }}>
              Africa<span style={{ color:'var(--ca-brass-500)' }}>.</span>
            </div>
          </div>
        </div>
        <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:14, letterSpacing:'0.14em' }}>USE FOR · EDITORIAL HERO, PRINT, SOCIAL OG</div>
      </div>

      {/* Inline / one-liner */}
      <div style={{ background:'var(--ca-paper)', border:'1px solid var(--ca-rule)', padding:'40px 32px', display:'flex', flexDirection:'column' }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)' }}>D · INLINE · ONE-LINER</div>
        <div style={{ flex:1, display:'flex', alignItems:'center', gap:14 }}>
          <MeridianMark size={36} variant="minimal" />
          <div className="ca-sans" style={{ fontWeight:600, fontSize:18, color:'var(--ca-obsidian)', letterSpacing:'-0.005em' }}>
            Constitutional&nbsp;Africa
          </div>
          <div style={{ width:1, height:18, background:'var(--ca-rule)', margin:'0 4px' }} />
          <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-700)' }}>A continental platform</div>
        </div>
        <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:14, letterSpacing:'0.14em' }}>USE FOR · NAVIGATION, BUSINESS CARDS, FOOTERS</div>
      </div>
    </div>
  </div>
);

// ───────────────── PAGE 3 · APPLICATIONS ─────────────────
const MeridianApplications = () => (
  <div style={{ background:'var(--ca-obsidian)', color:'var(--ca-ivory)', padding:48, height:'100%', display:'flex', flexDirection:'column' }}>
    <div className="ca-eyebrow" style={{ opacity:0.7 }}>Applications · at scale</div>
    <div className="ca-serif" style={{ fontSize:34, fontWeight:600, marginTop:6, letterSpacing:'-0.02em' }}>
      How it lives in the wild.
    </div>

    <div style={{ marginTop:30, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:20, flex:1 }}>
      {/* Podcast cover */}
      <div>
        <div className="ca-mono" style={{ fontSize:10, opacity:0.7 }}>PODCAST COVER · 1:1</div>
        <div style={{ marginTop:10, aspectRatio:'1/1', background:'var(--ca-indigo-700)', position:'relative', overflow:'hidden', padding:24, display:'flex', flexDirection:'column' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <MeridianMark size={56} color="#F6F1E4" accent="#C6A050" />
            <div className="ca-mono" style={{ fontSize:9, opacity:0.7, textAlign:'right' }}>EP · 04<br/>MMXXVI</div>
          </div>
          <div style={{ marginTop:'auto' }}>
            <div className="ca-mono" style={{ fontSize:10, opacity:0.7, letterSpacing:'0.2em' }}>THE PODCAST</div>
            <div className="ca-serif" style={{ fontSize:22, fontWeight:600, marginTop:6, lineHeight:1.05 }}>The Constitutional Logic of the AfCFTA</div>
          </div>
          {/* corner glyph */}
          <div style={{ position:'absolute', right:-30, bottom:-30, opacity:0.08 }}>
            <MeridianMark size={200} color="#F6F1E4" variant="latitudes" />
          </div>
        </div>
      </div>

      {/* Social avatar / favicon */}
      <div>
        <div className="ca-mono" style={{ fontSize:10, opacity:0.7 }}>AVATAR · FAVICON SCALE</div>
        <div style={{ marginTop:10, display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          <div style={{ aspectRatio:'1/1', background:'var(--ca-indigo-700)', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'50%' }}>
            <MeridianMark size={64} variant="monogram" color="#F6F1E4" />
          </div>
          <div style={{ aspectRatio:'1/1', background:'var(--ca-brass-500)', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'50%' }}>
            <MeridianMark size={64} variant="monogram" color="#16264D" />
          </div>
          <div style={{ aspectRatio:'1/1', background:'var(--ca-ivory)', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'50%' }}>
            <MeridianMark size={64} variant="monogram" color="#16264D" />
          </div>
          <div style={{ aspectRatio:'1/1', background:'var(--ca-jade-600)', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'50%' }}>
            <MeridianMark size={64} variant="monogram" color="#F6F1E4" />
          </div>
        </div>
        <div className="ca-mono" style={{ fontSize:9, marginTop:8, opacity:0.6, letterSpacing:'0.12em' }}>16PX FAVICON ↓</div>
        <div style={{ marginTop:6, display:'flex', gap:8 }}>
          <div style={{ width:16, height:16, background:'var(--ca-indigo-700)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <MeridianMark size={14} variant="monogram" color="#F6F1E4" />
          </div>
          <div style={{ width:32, height:32, background:'var(--ca-indigo-700)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <MeridianMark size={28} variant="monogram" color="#F6F1E4" />
          </div>
          <div style={{ width:48, height:48, background:'var(--ca-indigo-700)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <MeridianMark size={42} variant="monogram" color="#F6F1E4" />
          </div>
        </div>
      </div>

      {/* Editorial stamp */}
      <div>
        <div className="ca-mono" style={{ fontSize:10, opacity:0.7 }}>EDITORIAL · SIGN-OFF</div>
        <div style={{ marginTop:10, background:'var(--ca-ivory)', color:'var(--ca-obsidian)', padding:'24px 22px', height:'calc(100% - 30px)', display:'flex', flexDirection:'column' }}>
          <div className="ca-mono" style={{ fontSize:10, letterSpacing:'0.18em', color:'var(--ca-ink-soft)' }}>WORKING PAPER · WP/03/2026</div>
          <div className="ca-serif" style={{ fontSize:20, fontWeight:600, marginTop:10, lineHeight:1.1 }}>
            Energy sovereignty and the next constitutional frontier.
          </div>
          <div style={{ flex:1 }}/>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', borderTop:'1px solid var(--ca-rule)', paddingTop:14 }}>
            <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>
              CONSTITUTIONAL · AFRICA<br/>2026 · KAMPALA · UG
            </div>
            <MeridianMark size={44} variant="sealed" />
          </div>
        </div>
      </div>

      {/* Motion identity */}
      <div style={{ gridColumn:'span 2' }}>
        <div className="ca-mono" style={{ fontSize:10, opacity:0.7 }}>MOTION IDENTITY · IDEA SKETCH</div>
        <div style={{ marginTop:10, background:'var(--ca-indigo-800)', padding:24, height:170, display:'flex', alignItems:'center', justifyContent:'space-around', position:'relative', overflow:'hidden' }}>
          {/* progression: meridian draws, C arcs in, star appears */}
          {[0,1,2,3].map(i => (
            <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
              <svg width={80} height={80} viewBox="0 0 100 100">
                {/* meridian appears in step 1 */}
                {i >= 1 && <line x1={50} y1={6} x2={50} y2={94} stroke="#F6F1E4" strokeWidth={1.6}/>}
                {/* C draws step 2 */}
                {i >= 2 && (() => {
                  const cx=50,cy=50,r=38; const openHalf=35;
                  const a1 = (openHalf) * Math.PI / 180, a2 = (-openHalf) * Math.PI / 180;
                  const x1 = cx + r * Math.cos(a1), y1 = cy - r * Math.sin(a1);
                  const x2 = cx + r * Math.cos(a2), y2 = cy - r * Math.sin(a2);
                  return <path d={`M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`} stroke="#F6F1E4" strokeWidth={9} strokeLinecap="round" fill="none"/>;
                })()}
                {/* star step 3 */}
                {i >= 3 && (
                  <g transform="translate(50 50)">
                    <path d="M 0 -10 L 2.4 -2.4 L 10 0 L 2.4 2.4 L 0 10 L -2.4 2.4 L -10 0 L -2.4 -2.4 Z" fill="#C6A050"/>
                  </g>
                )}
              </svg>
              <div className="ca-mono" style={{ fontSize:9, opacity:0.6 }}>{['00','01','02','03'][i]} · {['VOID','AXIS','CHAMBER','NORTH'][i]}</div>
            </div>
          ))}
          {/* time scrubber */}
          <div style={{ position:'absolute', left:24, right:24, bottom:14, height:2, background:'rgba(246,241,228,0.2)' }}>
            <div style={{ height:'100%', width:'100%', background:'linear-gradient(to right, transparent, #C6A050)' }} />
          </div>
        </div>
        <div className="ca-sans" style={{ fontSize:12, opacity:0.7, marginTop:10, lineHeight:1.5 }}>
          Bumper / podcast intro: a vertical axis materialises, the constitutional chamber arcs into being, the north star sets — 1.2s total, eased.
        </div>
      </div>

      {/* Forbidden uses — small */}
      <div>
        <div className="ca-mono" style={{ fontSize:10, opacity:0.7 }}>DON'TS · QUICK REFERENCE</div>
        <div style={{ marginTop:10, display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
          {[
            { label:'no rotate',  bad:true,  el:<g transform="rotate(20 50 50)"><MeridianMark size={60} color="#F6F1E4"/></g> },
            { label:'no recolour star', bad:true, el:<MeridianMark size={60} color="#F6F1E4" accent="#FF3D00"/> },
            { label:'no compress', bad:true, el:<g transform="scale(1.4 0.7) translate(-15 21)"><MeridianMark size={60} color="#F6F1E4"/></g> },
            { label:'no outline meridian', bad:true, el:<MeridianMark size={60} color="#F6F1E4" variant="minimal"/> },
          ].map(d => (
            <div key={d.label} style={{ aspectRatio:'1/1', background:'rgba(246,241,228,0.04)', border:'1px solid rgba(246,241,228,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative' }}>
              {/* fake render with svg wrapper for transforms */}
              <svg width={70} height={70} viewBox="0 0 100 100">{d.el}</svg>
              <div className="ca-mono" style={{ fontSize:8, opacity:0.6, marginTop:6 }}>{d.label}</div>
              <div style={{ position:'absolute', inset:8, border:'1px solid #B23A2E', opacity:0.5 }} />
              <svg style={{ position:'absolute', inset:8, opacity:0.6 }} viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="100" x2="100" y2="0" stroke="#B23A2E" strokeWidth="1.2"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { MeridianMark, MeridianMarkSheet, MeridianLockups, MeridianApplications });
