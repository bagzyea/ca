// Constitutional Africa — Homepage sections.
// Content sourced from the Tindira Foundation concept draft.
// Visual system: Constitutional Indigo + IBM Plex + Meridian mark.

const { MeridianMark } = window;

// Image URLs from Unsplash (CC0 licensed) - VERIFIED WORKING
const IMAGE_URLS = {
  heroParliament: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&q=80&auto=format&fit=crop',
  courtsInterior: 'https://images.unsplash.com/photo-1589829085787-46a976bd6621?w=1600&q=80&auto=format&fit=crop',
};

const THEMES = ['Governance', 'Institutions', 'Infrastructure', 'Capital', 'Technology & AI', 'Integration', 'Culture & Heritage', 'Youth & Leadership'];

// ───────────────── NAV ─────────────────
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{ position:'sticky', top:0, zIndex:20,
      background:'rgba(246,241,228,0.92)', backdropFilter:'blur(8px)',
      borderBottom:'1px solid var(--ca-rule)', transition:'padding .2s ease' }}>
      <div className="wrap" style={{ display:'flex', alignItems:'center', padding: scrolled ? '12px 56px' : '20px 56px', transition:'padding .2s ease' }}>
        <a href="#top" style={{ display:'flex', alignItems:'center', gap:13, marginRight:'auto', textDecoration:'none' }}>
          <MeridianMark size={scrolled ? 32 : 38} />
          <div>
            <div className="ca-sans" style={{ fontWeight:600, fontSize:15, color:'var(--ca-obsidian)', letterSpacing:'-0.01em', lineHeight:1 }}>Constitutional Africa</div>
            <div className="ca-mono" style={{ fontSize:8.5, color:'var(--ca-brass-700)', marginTop:3, letterSpacing:'0.22em' }}>A PLATFORM OF THE TINDIRA FOUNDATION</div>
          </div>
        </a>
        <nav aria-label="Primary" style={{ display:'flex', gap:30 }}>
          {[['The Work', '#work'], ['The Framework', '#framework'], ['Conversations', '#conversations'], ['The Archive', '#archive'], ['Founder', '#founder']].map(([label, href]) => (
            <a key={label} href={href} className="ca-sans" style={{ fontSize:13.5, fontWeight:400, color:'var(--ca-obsidian)', textDecoration:'none', paddingBottom:3, borderBottom:'2px solid transparent' }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--ca-brass-500)'}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}>{label}</a>
          ))}
        </nav>
        <div style={{ display:'flex', alignItems:'center', gap:16, marginLeft:34 }}>
          <span className="ca-mono" style={{ fontSize:11, color:'var(--ca-ink-soft)', letterSpacing:'0.1em', cursor:'pointer' }}>EN</span>
          <a href="#brief" className="btn solid" style={{ padding:'9px 18px', fontSize:12.5 }}>Join</a>
        </div>
      </div>
    </header>
  );
};

// ───────────────── HERO ─────────────────
const Hero = () => (
  <section id="top" style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', position:'relative', overflow:'hidden' }}>
    <div style={{ position:'absolute', right:-160, top:-120, opacity:0.07, pointerEvents:'none' }}>
      <MeridianMark size={680} color="#F6F1E4" variant="latitudes" />
    </div>
    <div className="wrap" style={{ position:'relative', padding:'34px 56px 0' }}>
      {/* ledger bar */}
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr auto', gap:20, alignItems:'center', color:'rgba(246,241,228,0.7)' }}>
        <span className="ca-mono" style={{ fontSize:10, letterSpacing:'0.26em' }}>SEASON ONE · MMXXVI</span>
        <div style={{ height:1, background:'var(--ca-rule-on-dark)' }} />
        <span className="ca-mono" style={{ fontSize:10, letterSpacing:'0.26em' }}>A PAN-AFRICAN PLATFORM</span>
      </div>
    </div>

    <div className="wrap" style={{ position:'relative', padding:'56px 56px 64px', display:'grid', gridTemplateColumns:'1.62fr 1fr', gap:64, alignItems:'start' }}>
      <div>
        <div className="eyebrow" style={{ color:'var(--ca-brass-300)' }}>African Constitutional Economics</div>
        <h1 className="ca-sans" style={{ fontSize:74, fontWeight:300, lineHeight:0.99, letterSpacing:'-0.035em', margin:'22px 0 0' }}>
          Interpreting Africa&apos;s<br/>
          <span style={{ fontWeight:600 }}>constitutional&#8209;economic</span><br/>
          <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, color:'var(--ca-brass-300)' }}>transformation.</span>
        </h1>
        <p className="ca-sans" style={{ fontSize:18, lineHeight:1.55, opacity:0.86, marginTop:26, maxWidth:560, fontWeight:300 }}>
          A serious, hopeful, Pan-African conversation about the rules, institutions and infrastructure on which Africa&apos;s future will be built.
        </p>
        <div style={{ marginTop:34, display:'flex', gap:14, flexWrap:'wrap' }}>
          <a href="#conversations" className="btn brass" style={{ padding:'15px 24px' }}>Listen to the conversations →</a>
          <a href="#framework" className="btn ghost-light" style={{ padding:'15px 24px' }}>Explore the framework</a>
        </div>
      </div>

      <div style={{ paddingTop:6 }}>
        <div className="img" style={{
          aspectRatio:'4/5',
          minHeight:420,
          backgroundImage:`url('${IMAGE_URLS.heroParliament}')`,
          backgroundSize:'cover',
          backgroundPosition:'center'
        }}>
          <span className="img-tag">FIG · 01 · ARCHIVAL DUOTONE</span>
          <span className="img-label">constitutional assembly · chamber</span>
        </div>
        <div style={{ marginTop:20, display:'flex', flexWrap:'wrap', gap:7 }}>
          {THEMES.map(t => (
            <span key={t} className="chip" style={{ border:'1px solid var(--ca-rule-on-dark)', color:'rgba(246,241,228,0.82)' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ───────────────── PROPOSITION ─────────────────
const Proposition = () => (
  <section style={{ background:'var(--ca-paper)', borderBottom:'1px solid var(--ca-rule)' }}>
    <div className="wrap" style={{ padding:'88px 56px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:48, alignItems:'start' }}>
        <div className="eyebrow" style={{ color:'var(--ca-brass-700)', writingMode:'vertical-rl', transform:'rotate(180deg)', alignSelf:'stretch' }}>The Proposition</div>
        <div>
          <p className="ca-serif" style={{ fontSize:42, fontWeight:400, lineHeight:1.22, letterSpacing:'-0.015em', color:'var(--ca-obsidian)', margin:0, maxWidth:1000, textWrap:'pretty' }}>
            Africa&apos;s future will be decided less by what lies beneath its soil than by the quality of the
            {' '}<span style={{ fontStyle:'italic', color:'var(--ca-indigo-700)' }}>rules it chooses to live by.</span>
          </p>
          <div style={{ marginTop:32, display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, maxWidth:880, alignItems:'start' }}>
            <p className="ca-sans" style={{ fontSize:15.5, lineHeight:1.65, color:'var(--ca-ink)', margin:0 }}>
              This is the proposition of <b>African Constitutional Economics</b> — the framework at the heart of everything we do. It holds that constitutional and institutional design are not downstream of prosperity, but its precondition.
            </p>
            <p className="ca-sans" style={{ fontSize:15.5, lineHeight:1.65, color:'var(--ca-ink-soft)', margin:0 }}>
              Every conversation, brief and paper we publish is examined through that single analytical lens — and built to be worth revisiting a decade on.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ───────────────── THE WORK · SIX PILLARS ─────────────────
const PILLARS = [
  { verb:'Building',   theme:'Constitutionalism, Institutions & the State', desc:'Governance, courts, regulators, strategic assets and the future African state.', n:'I',   tone:'indigo' },
  { verb:'Healing',    theme:'Peace, Memory & Human Belonging',             desc:'Conflict and reconstruction, belonging, citizenship and reconciliation.',       n:'II',  tone:'terra' },
  { verb:'Rooting',    theme:'Culture, Heritage & Identity',                desc:'Identity, language, memory, the creative economies and civilisational confidence.', n:'III', tone:'brass' },
  { verb:'Preparing',  theme:'Youth, Diaspora & the Future',                desc:'Youth leadership, innovation, enterprise and constitutional citizenship.',       n:'IV',  tone:'jade' },
  { verb:'Sustaining', theme:'Enterprise & Family Legacies',                desc:'African enterprise, resilience, succession and economic dignity.',               n:'V',   tone:'brass' },
  { verb:'Connecting', theme:'Integration & Shared Future',                 desc:'AfCFTA, corridors, infrastructure and Pan-African systems.',                     n:'VI',  tone:'indigo' },
];

const Pillars = () => (
  <section id="work" style={{ background:'var(--ca-ivory)' }}>
    <div className="wrap" style={{ padding:'88px 56px 96px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:40, alignItems:'end', marginBottom:44 }}>
        <div>
          <div className="eyebrow" style={{ color:'var(--ca-brass-700)' }}>The Work</div>
          <h2 className="ca-sans" style={{ fontSize:48, fontWeight:300, margin:'14px 0 0', letterSpacing:'-0.03em', color:'var(--ca-obsidian)', lineHeight:1.0 }}>
            Six pillars, <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, color:'var(--ca-indigo-700)' }}>one continental story.</span>
          </h2>
        </div>
        <p className="ca-sans" style={{ fontSize:14.5, lineHeight:1.6, color:'var(--ca-ink-soft)', maxWidth:380, margin:0 }}>
          Every conversation sits within one of six pillars — and is examined through a single analytical lens: African Constitutional Economics.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0, border:'1px solid var(--ca-rule)' }}>
        {PILLARS.map((p, i) => {
          const accent = p.tone === 'terra' ? 'var(--ca-terra-600)' : p.tone === 'brass' ? 'var(--ca-brass-700)' : p.tone === 'jade' ? 'var(--ca-jade-700)' : 'var(--ca-indigo-700)';
          const col = i % 3, row = Math.floor(i / 3);
          return (
            <div key={p.verb} style={{
              padding:'30px 28px 26px', minHeight:268, display:'flex', flexDirection:'column',
              borderRight: col < 2 ? '1px solid var(--ca-rule)' : 'none',
              borderTop: row > 0 ? '1px solid var(--ca-rule)' : 'none',
              background: (i % 2 === 0) ? 'var(--ca-paper)' : 'transparent',
              cursor:'pointer', transition:'background .2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--ca-paper-2)'}
              onMouseLeave={e => e.currentTarget.style.background = (i % 2 === 0) ? 'var(--ca-paper)' : 'transparent'}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                <div className="ca-serif" style={{ fontStyle:'italic', fontWeight:400, fontSize:26, color:accent }}>{p.n}</div>
                <div style={{ width:34, height:34 }}><MeridianMark size={34} color={accent} variant="minimal" /></div>
              </div>
              <h3 className="ca-serif" style={{ fontSize:27, fontWeight:600, margin:'18px 0 0', lineHeight:1.0, color:'var(--ca-obsidian)' }}>
                {p.verb} <span style={{ color:accent }}>Africa</span>
              </h3>
              <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', letterSpacing:'0.12em', marginTop:10, textTransform:'uppercase' }}>{p.theme}</div>
              <p className="ca-sans" style={{ fontSize:13, lineHeight:1.55, color:'var(--ca-ink-soft)', margin:'14px 0 0', flex:1 }}>{p.desc}</p>
              <a className="ca-mono" style={{ fontSize:10, color:accent, letterSpacing:'0.16em', marginTop:16, textDecoration:'none' }}>EXPLORE PILLAR →</a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ───────────────── THE FRAMEWORK (lens) ─────────────────
const Framework = () => (
  <section id="framework" style={{ background:'var(--ca-obsidian)', color:'var(--ca-ivory)', position:'relative', overflow:'hidden' }}>
    <div style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', opacity:0.05, pointerEvents:'none' }}>
      <MeridianMark size={760} color="#F6F1E4" variant="sealed" />
    </div>
    <div className="wrap" style={{ position:'relative', padding:'90px 56px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>
      <div>
        <div className="eyebrow" style={{ color:'var(--ca-brass-300)' }}>The Analytical Lens</div>
        <h2 className="ca-sans" style={{ fontSize:56, fontWeight:300, margin:'16px 0 0', lineHeight:0.98, letterSpacing:'-0.03em' }}>
          African<br/><span style={{ fontWeight:600 }}>Constitutional</span><br/>
          <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, color:'var(--ca-brass-300)' }}>Economics.</span>
        </h2>
        <a href="#framework" className="btn brass" style={{ marginTop:30 }}>Explore the framework →</a>
      </div>
      <div>
        <p className="ca-serif" style={{ fontSize:23, fontWeight:400, lineHeight:1.45, margin:0, opacity:0.92, textWrap:'pretty' }}>
          A framework for reading the continent: how the design of constitutions and institutions shapes investment, infrastructure, innovation and the long arc of African prosperity.
        </p>
        <div style={{ height:1, background:'var(--ca-rule-on-dark)', margin:'34px 0' }} />
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:26 }}>
          {[
            ['The rules', 'Constitutions, rights and the separation of powers — the source code of a state.'],
            ['The institutions', 'Courts, regulators and the credibility that compounds into trust.'],
            ['The infrastructure', 'The physical and digital layer on which sovereignty is exercised.'],
            ['The capital', 'How law shapes investor confidence and commercial certainty.'],
          ].map(([h, d]) => (
            <div key={h}>
              <div className="ca-sans" style={{ fontSize:15, fontWeight:600 }}>{h}</div>
              <p className="ca-sans" style={{ fontSize:12.5, lineHeight:1.55, opacity:0.72, margin:'7px 0 0' }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Nav, Hero, Proposition, Pillars, Framework, THEMES });
