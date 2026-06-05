// Constitutional Africa — Homepage sections, part 2.
// Conversations · Archive · Founder · The Brief · Footer

const { MeridianMark: Mark } = window;

// ───────────────── FEATURED CONVERSATIONS ─────────────────
const Conversations = () => {
  const premiere = {
    pillar:'BUILDING AFRICA', ep:'EPISODE 01 · PREMIERE',
    title:'Why Africa\u2019s Future Must Be Constitutional',
    desc:'The opening conversation: why prosperity rests on the quality of the rules — and what it means to make a constitution real.',
    cta:'Listen & read the brief',
  };
  const rest = [
    { pillar:'BUILDING AFRICA', ep:'EPISODE 04', title:'Rule of Law as Economic Infrastructure', desc:'How law shapes investor confidence and commercial certainty.', img:'warm' },
    { pillar:'CONNECTING AFRICA', ep:'EPISODE 08', title:'Railways, Ports & Continental Integration', desc:'Corridors, trade systems and the infrastructure of integration.', img:'jade' },
  ];

  return (
    <section id="conversations" style={{ background:'var(--ca-ivory)', borderTop:'1px solid var(--ca-rule)' }}>
      <div className="wrap" style={{ padding:'88px 56px 96px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:40, alignItems:'end', marginBottom:44 }}>
          <div>
            <div className="eyebrow" style={{ color:'var(--ca-brass-700)' }}>Season One · Africa&apos;s Constitutional&#8209;Economic Moment</div>
            <h2 className="ca-sans" style={{ fontSize:48, fontWeight:300, margin:'14px 0 0', letterSpacing:'-0.03em', color:'var(--ca-obsidian)', lineHeight:1.0 }}>
              Featured <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, color:'var(--ca-indigo-700)' }}>conversations.</span>
            </h2>
          </div>
          <p className="ca-sans" style={{ fontSize:14.5, lineHeight:1.6, color:'var(--ca-ink-soft)', maxWidth:400, margin:0 }}>
            Long&#8209;form dialogue with the people who govern, build, finance and study the continent. Every episode researched, sourced and built to be worth revisiting a decade on.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:28 }}>
          {/* Premiere — featured */}
          <article style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column' }}>
            <div style={{ position:'absolute', right:-90, bottom:-80, opacity:0.08 }}><Mark size={420} color="#F6F1E4" variant="latitudes" /></div>
            <div className="img" style={{ aspectRatio:'16/7' }}>
              <span className="img-tag">FIG · PREMIERE</span>
              <span className="img-label">in conversation · the founding dialogue</span>
            </div>
            <div style={{ padding:'34px 36px 36px', position:'relative', flex:1, display:'flex', flexDirection:'column' }}>
              <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                <span className="chip" style={{ background:'var(--ca-brass-500)', color:'var(--ca-obsidian)' }}>{premiere.ep}</span>
                <span className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.16em' }}>{premiere.pillar}</span>
              </div>
              <h3 className="ca-serif" style={{ fontSize:34, fontWeight:600, margin:'18px 0 0', lineHeight:1.08, letterSpacing:'-0.01em' }}>{premiere.title}</h3>
              <p className="ca-sans" style={{ fontSize:14.5, lineHeight:1.6, opacity:0.85, margin:'14px 0 0', maxWidth:520 }}>{premiere.desc}</p>
              <div style={{ marginTop:'auto', paddingTop:28, display:'flex', alignItems:'center', gap:16 }}>
                <button style={{ width:54, height:54, borderRadius:'50%', border:'none', background:'var(--ca-brass-500)', color:'var(--ca-obsidian)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:17, paddingLeft:4, cursor:'pointer', flexShrink:0 }}>▶</button>
                <span className="ca-sans" style={{ fontSize:13.5, fontWeight:500 }}>{premiere.cta} →</span>
                <div style={{ marginLeft:'auto', display:'flex', gap:8 }}>
                  {['SPOTIFY', 'APPLE', 'YOUTUBE'].map(p => (
                    <span key={p} className="ca-mono" style={{ fontSize:9, padding:'6px 9px', border:'1px solid var(--ca-rule-on-dark)', letterSpacing:'0.12em', opacity:0.8 }}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Two stacked */}
          <div style={{ display:'flex', flexDirection:'column', gap:28 }}>
            {rest.map(it => (
              <article key={it.ep} style={{ border:'1px solid var(--ca-rule)', background:'var(--ca-paper)', display:'grid', gridTemplateColumns:'128px 1fr', overflow:'hidden', flex:1 }}>
                <div className={`img ${it.img}`} style={{ position:'relative' }}>
                  <span style={{ position:'absolute', left:10, bottom:10, fontFamily:'IBM Plex Serif', fontWeight:600, fontSize:15, color:'#F6F1E4' }}>{it.ep.replace('EPISODE ', '')}</span>
                </div>
                <div style={{ padding:'20px 22px', display:'flex', flexDirection:'column' }}>
                  <div className="ca-mono" style={{ fontSize:9.5, color:'var(--ca-brass-700)', letterSpacing:'0.14em' }}>{it.ep} · {it.pillar}</div>
                  <h4 className="ca-serif" style={{ fontSize:20, fontWeight:600, margin:'8px 0 0', lineHeight:1.15, color:'var(--ca-obsidian)' }}>{it.title}</h4>
                  <p className="ca-sans" style={{ fontSize:12.5, lineHeight:1.5, color:'var(--ca-ink-soft)', margin:'8px 0 0' }}>{it.desc}</p>
                  <a className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.14em', marginTop:'auto', paddingTop:14, textDecoration:'none' }}>▶ LISTEN</a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div style={{ marginTop:36, display:'flex', justifyContent:'center' }}>
          <a className="btn" style={{ color:'var(--ca-obsidian)' }}>View all conversations →</a>
        </div>
      </div>
    </section>
  );
};

// ───────────────── THE ARCHIVE ─────────────────
const Archive = () => {
  const categories = ['Constitutional moments', 'Infrastructure milestones', 'Institutional reforms', 'Transformation timelines'];
  const facets = [['Country', '54'], ['Institution', '210+'], ['Moonshot', '12'], ['Theme', '08']];
  return (
    <section id="archive" style={{ background:'var(--ca-paper)', borderTop:'1px solid var(--ca-rule)' }}>
      <div className="wrap" style={{ padding:'88px 56px' }}>
        <div className="eyebrow" style={{ color:'var(--ca-brass-700)', textAlign:'center' }}>The African Transformation Archive</div>
        <h2 className="ca-sans" style={{ fontSize:52, fontWeight:300, margin:'16px auto 0', letterSpacing:'-0.03em', color:'var(--ca-obsidian)', lineHeight:1.02, textAlign:'center', maxWidth:880 }}>
          A constitutional&#8209;economic <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, color:'var(--ca-indigo-700)' }}>memory bank</span> for Africa.
        </h2>
        <p className="ca-sans" style={{ fontSize:16, lineHeight:1.6, color:'var(--ca-ink-soft)', margin:'18px auto 0', maxWidth:680, textAlign:'center' }}>
          More than a media library. Every conversation, brief and paper is indexed and preserved — building, over a decade, a searchable record of Africa&apos;s institutional transformation.
        </p>

        <div style={{ marginTop:48, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:18 }}>
          {categories.map((c, i) => (
            <div key={c} style={{ border:'1px solid var(--ca-rule)', background:'var(--ca-ivory)', padding:'22px 20px', minHeight:150, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-700)', letterSpacing:'0.16em' }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="ca-serif" style={{ fontSize:21, fontWeight:600, color:'var(--ca-obsidian)', lineHeight:1.12 }}>{c}</div>
                <div style={{ marginTop:12, width:30, height:30, opacity:0.5 }}><Mark size={30} color="var(--ca-indigo-700)" variant="minimal" /></div>
              </div>
            </div>
          ))}
        </div>

        {/* search affordance */}
        <div style={{ marginTop:24, border:'1px solid var(--ca-rule)', background:'var(--ca-ivory)', padding:'22px 26px', display:'flex', alignItems:'center', gap:24, flexWrap:'wrap' }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>SEARCH BY</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap', flex:1 }}>
            {facets.map(([f, n]) => (
              <button key={f} className="chip" style={{ border:'1px solid var(--ca-rule)', color:'var(--ca-ink)', background:'var(--ca-paper)', cursor:'pointer', display:'flex', gap:8, padding:'8px 14px' }}>
                {f} <span style={{ color:'var(--ca-brass-700)' }}>{n}</span>
              </button>
            ))}
          </div>
          <a className="ca-mono" style={{ fontSize:11, color:'var(--ca-indigo-700)', letterSpacing:'0.16em', textDecoration:'none' }}>ENTER THE ARCHIVE →</a>
        </div>
      </div>
    </section>
  );
};

// ───────────────── FROM THE FOUNDER ─────────────────
const Founder = () => (
  <section id="founder" style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', position:'relative', overflow:'hidden' }}>
    <div className="wrap" style={{ padding:'90px 56px', display:'grid', gridTemplateColumns:'0.85fr 1.15fr', gap:64, alignItems:'center' }}>
      <div className="img warm" style={{ aspectRatio:'4/5', minHeight:440 }}>
        <span className="img-tag">FROM THE FOUNDER</span>
        <span className="img-label">founder portrait</span>
      </div>
      <div>
        <div className="eyebrow" style={{ color:'var(--ca-brass-300)' }}>From the Founder</div>
        <blockquote className="ca-serif" style={{ fontSize:38, fontWeight:400, lineHeight:1.25, letterSpacing:'-0.015em', margin:'22px 0 0', textWrap:'pretty' }}>
          &ldquo;I have seen Africa&apos;s question from both of its sides — from the bench and from the balance sheet.
          {' '}<span style={{ fontStyle:'italic', color:'var(--ca-brass-300)' }}>Law and the economy are not two subjects. They are one.</span>&rdquo;
        </blockquote>
        <div style={{ marginTop:30, display:'flex', alignItems:'center', gap:16 }}>
          <div style={{ width:46, height:1, background:'var(--ca-brass-300)' }} />
          <div>
            <div className="ca-sans" style={{ fontSize:16, fontWeight:600 }}>Ruth Sebatindira SC</div>
            <div className="ca-mono" style={{ fontSize:10, color:'rgba(246,241,228,0.7)', marginTop:4, letterSpacing:'0.1em', lineHeight:1.5 }}>
              FOUNDER · SENIOR COUNSEL<br/>FORMER PRESIDENT, UGANDA LAW SOCIETY · FORMER MEMBER, JUDICIAL SERVICE COMMISSION OF UGANDA
            </div>
          </div>
        </div>
        <a href="#founder" className="btn ghost-light" style={{ marginTop:30 }}>Read the Letter to Africa →</a>
      </div>
    </div>
  </section>
);

// ───────────────── THE BRIEF ─────────────────
const Brief = () => (
  <section id="brief" style={{ background:'var(--ca-brass-500)', color:'var(--ca-obsidian)', position:'relative', overflow:'hidden' }}>
    <div style={{ position:'absolute', right:-120, top:-60, opacity:0.1, pointerEvents:'none' }}><Mark size={440} color="#0E1320" variant="latitudes" /></div>
    <div className="wrap" style={{ padding:'80px 56px', position:'relative', display:'grid', gridTemplateColumns:'1.25fr 1fr', gap:56, alignItems:'center' }}>
      <div>
        <div className="eyebrow">The Constitutional Africa Brief · Monthly</div>
        <h2 className="ca-sans" style={{ fontSize:50, fontWeight:600, margin:'14px 0 0', lineHeight:1.0, letterSpacing:'-0.03em' }}>
          Join the conversation <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500 }}>Africa needs.</span>
        </h2>
        <p className="ca-sans" style={{ fontSize:15.5, lineHeight:1.6, margin:'16px 0 0', maxWidth:540, opacity:0.85 }}>
          A monthly letter on the rules, institutions and infrastructure shaping the continent. Considered, not constant.
        </p>
      </div>
      <div>
        <form onSubmit={e => e.preventDefault()} style={{ background:'var(--ca-ivory)', border:'2px solid var(--ca-obsidian)', display:'flex', alignItems:'stretch' }}>
          <input type="email" placeholder="Your email address" aria-label="Your email address"
            style={{ flex:1, border:'none', background:'transparent', padding:'18px 20px', fontFamily:'IBM Plex Mono', fontSize:13, color:'var(--ca-obsidian)', outline:'none' }} />
          <button type="submit" style={{ padding:'18px 26px', background:'var(--ca-obsidian)', color:'var(--ca-ivory)', border:'none', fontFamily:'IBM Plex Mono', fontSize:12, letterSpacing:'0.16em', cursor:'pointer' }}>SUBSCRIBE →</button>
        </form>
        <div className="ca-mono" style={{ fontSize:10, marginTop:12, opacity:0.65, letterSpacing:'0.12em' }}>CONSIDERED, NOT CONSTANT · UNSUBSCRIBE ANY TIME</div>
      </div>
    </div>
  </section>
);

// ───────────────── FOOTER ─────────────────
const Footer = () => {
  const cols = [
    ['The Platform', ['About', 'Vision 2050', 'Founding Charter', 'Editorial Principles']],
    ['The Work', ['Conversations', 'Research', 'The Archive', 'Seasons']],
    ['Engage', ['Partnerships', 'Fellowships', 'The Brief', 'Contact']],
  ];
  return (
    <footer style={{ background:'var(--ca-obsidian)', color:'var(--ca-ivory)' }}>
      <div className="wrap" style={{ padding:'76px 56px 36px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr', gap:48 }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:14 }}>
              <Mark size={48} color="#F6F1E4" accent="#C6A050" />
              <div>
                <div className="ca-sans" style={{ fontWeight:600, fontSize:16 }}>Constitutional Africa</div>
                <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-300)', marginTop:3, letterSpacing:'0.18em' }}>A PLATFORM OF THE TINDIRA FOUNDATION</div>
              </div>
            </div>
            <p className="ca-sans" style={{ fontSize:13.5, lineHeight:1.6, marginTop:20, opacity:0.78, maxWidth:340 }}>
              A Pan-African platform interpreting the continent&apos;s constitutional&#8209;economic transformation. An initiative of the Tindira Foundation, advancing the framework of African Constitutional Economics.
            </p>
            <div style={{ marginTop:22, display:'flex', gap:8, flexWrap:'wrap' }}>
              {['Spotify', 'Apple', 'YouTube', 'LinkedIn', 'X'].map(s => (
                <span key={s} className="ca-mono" style={{ fontSize:10, padding:'6px 10px', border:'1px solid var(--ca-rule-on-dark)', letterSpacing:'0.1em' }}>{s}</span>
              ))}
            </div>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>{h.toUpperCase()}</div>
              <div style={{ marginTop:16, display:'flex', flexDirection:'column', gap:11 }}>
                {items.map(i => <a key={i} href="#top" className="flink ca-sans" style={{ fontSize:13.5 }}>{i}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ height:1, background:'var(--ca-rule-on-dark)', margin:'44px 0 20px' }} />
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <div className="ca-mono" style={{ fontSize:10, opacity:0.6, letterSpacing:'0.12em' }}>
            © 2026 · CONSTITUTIONAL AFRICA · A PLATFORM OF THE TINDIRA FOUNDATION · <a href="mailto:info@constitutionalafrica.org" style={{ color:'inherit' }}>INFO@CONSTITUTIONALAFRICA.ORG</a>
          </div>
          <div style={{ display:'flex', gap:22 }}>
            {['Privacy', 'Terms', 'Editorial Standards'].map(l => (
              <a key={l} href="#top" className="ca-mono flink" style={{ fontSize:10, letterSpacing:'0.12em', textDecoration:'none' }}>{l.toUpperCase()}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Conversations, Archive, Founder, Brief, Footer });
