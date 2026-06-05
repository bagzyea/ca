// Hi-fi Homepage · Variant A (Editorial).
// Constitutional Indigo palette + IBM Plex Sans dominant.
// Designed for 1440 desktop artboard; total height ~3200.

// — Shared chrome —
const HiFiNav = ({ active = 'Home' }) => (
  <nav style={{
    display:'flex', alignItems:'center', gap:0,
    padding:'18px 56px',
    background:'var(--ca-ivory)',
    borderBottom:'1px solid var(--ca-rule)',
    position:'sticky', top:0, zIndex:5,
  }}>
    {/* logo lockup */}
    <div style={{ display:'flex', alignItems:'center', gap:12, marginRight:'auto' }}>
      <MeridianMark size={36} />
      <div>
        <div className="ca-sans" style={{ fontWeight:600, fontSize:14, color:'var(--ca-obsidian)', letterSpacing:'-0.005em' }}>Constitutional Africa</div>
        <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-700)', marginTop:1, letterSpacing:'0.2em' }}>EST · MMXXVI</div>
      </div>
    </div>
    {/* nav items */}
    <div style={{ display:'flex', gap:28 }}>
      {['Home', 'About', 'Podcast', 'ACE Framework', 'Africa in Transition', 'Youth Voices', 'Insights'].map(n => (
        <a key={n} style={{
          fontFamily:'IBM Plex Sans', fontSize:13, fontWeight: n === active ? 600 : 400,
          color:'var(--ca-obsidian)', textDecoration:'none',
          borderBottom: n === active ? '2px solid var(--ca-brass-500)' : '2px solid transparent',
          paddingBottom:3,
        }}>{n}</a>
      ))}
    </div>
    <div style={{ display:'flex', alignItems:'center', gap:14, marginLeft:32 }}>
      <span style={{ fontSize:16, color:'var(--ca-ink-soft)', cursor:'pointer' }}>⌕</span>
      <button className="ca-btn solid" style={{ padding:'8px 16px', fontSize:12 }}>
        Subscribe →
      </button>
    </div>
  </nav>
);

const HiFiFooter = () => (
  <footer style={{ background:'var(--ca-obsidian)', color:'var(--ca-ivory)', padding:'72px 56px 32px' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:48 }}>
      <div>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <MeridianMark size={48} color="#F6F1E4" accent="#C6A050" />
          <div>
            <div className="ca-sans" style={{ fontWeight:600, fontSize:16 }}>Constitutional Africa</div>
            <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', marginTop:2, letterSpacing:'0.2em' }}>EST · MMXXVI</div>
          </div>
        </div>
        <div className="ca-serif" style={{ fontStyle:'italic', fontWeight:400, fontSize:18, marginTop:20, lineHeight:1.4, opacity:0.85, maxWidth:340 }}>
          Ideas, institutions, infrastructure — and the constitution of an African century.
        </div>
        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          {['Spotify','Apple','YouTube','X','LinkedIn'].map(s => (
            <span key={s} className="ca-mono" style={{ fontSize:10, padding:'6px 10px', border:'1px solid rgba(246,241,228,0.3)', letterSpacing:'0.1em' }}>{s}</span>
          ))}
        </div>
      </div>
      {[
        ['The Platform', ['Podcast', 'Insights', 'Africa in Transition', 'Featured Conversations', 'Youth Voices']],
        ['The Framework', ['ACE Overview', 'Six Pillars', 'Working Papers', 'Reading List', 'Research']],
        ['The Institute', ['About', 'Founder', 'Editorial Board', 'Partnerships', 'Contact']],
      ].map(([h, items]) => (
        <div key={h}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>{h}</div>
          <div style={{ marginTop:16, display:'flex', flexDirection:'column', gap:9 }}>
            {items.map(i => <a key={i} className="ca-sans" style={{ fontSize:13, color:'var(--ca-ivory)', opacity:0.85, textDecoration:'none' }}>{i}</a>)}
          </div>
        </div>
      ))}
    </div>
    <div style={{ height:1, background:'rgba(246,241,228,0.15)', margin:'48px 0 20px' }} />
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <div className="ca-mono" style={{ fontSize:10, opacity:0.6, letterSpacing:'0.14em' }}>
        © 2026 · CONSTITUTIONAL AFRICA · ALL RIGHTS RESERVED
      </div>
      <div style={{ display:'flex', gap:24 }}>
        {['Privacy', 'Terms', 'Editorial standards', 'Accessibility'].map(l => (
          <a key={l} className="ca-mono" style={{ fontSize:10, color:'var(--ca-ivory)', opacity:0.6, textDecoration:'none', letterSpacing:'0.14em' }}>{l.toUpperCase()}</a>
        ))}
      </div>
    </div>
  </footer>
);

// — HERO —
const HeroSection = () => (
  <section style={{ background:'var(--ca-ivory)', padding:'88px 56px 64px', position:'relative', overflow:'hidden' }}>
    {/* Ledger header */}
    <div style={{ display:'grid', gridTemplateColumns:'auto 1fr auto auto', gap:20, alignItems:'center', marginBottom:48, color:'var(--ca-ink-soft)' }}>
      <span className="ca-mono" style={{ fontSize:10, letterSpacing:'0.24em' }}>VOL · 01</span>
      <div style={{ height:1, background:'var(--ca-rule)' }} />
      <span className="ca-mono" style={{ fontSize:10, letterSpacing:'0.24em' }}>A CONTINENTAL PLATFORM</span>
      <span className="ca-mono" style={{ fontSize:10, letterSpacing:'0.24em' }}>MMXXVI</span>
    </div>

    <div style={{ display:'grid', gridTemplateColumns:'1.55fr 1fr', gap:64, alignItems:'start' }}>
      <div>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-700)', letterSpacing:'0.24em', marginBottom:24 }}>
          ISSUE 01 · THE MANIFESTO
        </div>
        <h1 className="ca-sans" style={{
          fontSize:88, fontWeight:300, lineHeight:0.95, letterSpacing:'-0.035em',
          color:'var(--ca-obsidian)', margin:0,
        }}>
          Africa's<br/>
          transformation is,<br/>
          before anything else,<br/>
          <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, color:'var(--ca-indigo-700)' }}>a constitutional</span><br/>
          <span style={{ fontWeight:600 }}>question.</span>
        </h1>
        <div style={{ marginTop:36, display:'flex', gap:14 }}>
          <button className="ca-btn solid" style={{ padding:'14px 22px', fontSize:13 }}>
            Read the manifesto →
          </button>
          <button className="ca-btn" style={{ padding:'14px 22px', fontSize:13, color:'var(--ca-obsidian)' }}>
            Listen to the podcast
          </button>
        </div>
      </div>

      {/* Right column: founder note + imagery */}
      <div style={{ display:'flex', flexDirection:'column', gap:24, paddingTop:8 }}>
        <div className="ca-img" style={{ aspectRatio:'4/5', minHeight:380 }}>
          <span className="ca-img-tag">FIG · 01</span>
          <span className="ca-img-label">parliament chamber · accra</span>
        </div>
        <div style={{ borderLeft:'2px solid var(--ca-brass-500)', paddingLeft:18 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>FROM THE FOUNDER</div>
          <div className="ca-serif" style={{ fontStyle:'italic', fontWeight:400, fontSize:17, color:'var(--ca-obsidian)', marginTop:8, lineHeight:1.45 }}>
            "We are building a serious continental platform — for the ideas, institutions and infrastructure of an African century."
          </div>
          <div className="ca-sans" style={{ fontWeight:600, fontSize:13, color:'var(--ca-obsidian)', marginTop:12 }}>Ruth Sebatindira, SC</div>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:2, letterSpacing:'0.16em' }}>FOUNDER · CONSTITUTIONAL AFRICA</div>
        </div>
      </div>
    </div>
  </section>
);

// — LATEST EPISODE STRIP —
const LatestEpisode = () => (
  <section style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', position:'relative', overflow:'hidden' }}>
    {/* Background mark */}
    <div style={{ position:'absolute', right:-120, top:-80, opacity:0.06 }}>
      <MeridianMark size={520} color="#F6F1E4" variant="latitudes" />
    </div>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', position:'relative' }}>
      {/* Now playing — featured */}
      <div style={{ padding:'56px 48px 48px 56px', borderRight:'1px solid rgba(246,241,228,0.15)' }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.24em' }}>NOW PLAYING · EPISODE 04</div>
        <h2 className="ca-serif" style={{ fontSize:38, fontWeight:600, marginTop:14, lineHeight:1.05, letterSpacing:'-0.015em' }}>
          The Constitutional Logic of the AfCFTA
        </h2>
        <div className="ca-sans" style={{ fontSize:14, opacity:0.85, marginTop:14, lineHeight:1.55, maxWidth:480 }}>
          What does a continental free-trade area demand of African constitutions? A conversation with Dr. Kebadi Nthatisi on harmonisation, sovereignty and the long game.
        </div>
        <div style={{ marginTop:28, display:'flex', alignItems:'center', gap:16 }}>
          <button style={{
            width:56, height:56, borderRadius:'50%', border:'1.5px solid var(--ca-brass-500)',
            background:'var(--ca-brass-500)', color:'var(--ca-obsidian)',
            display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, paddingLeft:4, cursor:'pointer',
          }}>▶</button>
          <div style={{ flex:1 }}>
            <div style={{ height:3, background:'rgba(246,241,228,0.2)', position:'relative' }}>
              <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'38%', background:'var(--ca-brass-500)' }} />
              <div style={{ position:'absolute', left:'38%', top:'50%', width:8, height:8, background:'var(--ca-brass-500)', borderRadius:'50%', transform:'translate(-50%,-50%)' }} />
            </div>
            <div className="ca-mono" style={{ fontSize:10, marginTop:8, display:'flex', justifyContent:'space-between', opacity:0.8 }}>
              <span>19:42</span><span>52:18</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop:24, display:'flex', gap:8, flexWrap:'wrap' }}>
          {['Spotify','Apple Podcasts','YouTube','RSS','Pocket Casts'].map(p => (
            <span key={p} className="ca-mono" style={{ fontSize:10, padding:'6px 12px', border:'1px solid rgba(246,241,228,0.3)', letterSpacing:'0.12em' }}>{p}</span>
          ))}
        </div>
      </div>

      {/* Recent episodes list */}
      <div style={{ padding:'56px 56px 48px 40px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:24 }}>
          <div className="ca-mono" style={{ fontSize:10, opacity:0.7, letterSpacing:'0.24em' }}>RECENT EPISODES</div>
          <a className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em', cursor:'pointer' }}>VIEW ALL →</a>
        </div>
        {[
          { ep:'03', dur:'48 min', date:'2026.03', title:'The Energy Sovereignty Question', guest:'w/ Amina Diop', tag:'ENERGY' },
          { ep:'02', dur:'56 min', date:'2026.02', title:'Constitutional Design as Economic Infrastructure', guest:'w/ Prof. Chinedu Okolo', tag:'CONSTITUTIONAL' },
          { ep:'01', dur:'62 min', date:'2026.01', title:'A Framework for the Constitutional Century', guest:'Inaugural · Ruth Sebatindira, SC', tag:'FRAMEWORK' },
        ].map(it => (
          <div key={it.ep} style={{
            display:'grid', gridTemplateColumns:'72px 1fr auto auto', gap:20, alignItems:'center',
            padding:'18px 0', borderTop:'1px solid rgba(246,241,228,0.15)',
          }}>
            <div className="ca-img warm" style={{ width:72, height:72 }}>
              <span style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'IBM Plex Serif', fontWeight:600, fontSize:18, color:'#F6F1E4', zIndex:2 }}>{it.ep}</span>
            </div>
            <div>
              <div className="ca-serif" style={{ fontSize:18, fontWeight:600, lineHeight:1.2 }}>{it.title}</div>
              <div className="ca-sans" style={{ fontSize:12, opacity:0.7, marginTop:4 }}>{it.guest}</div>
            </div>
            <span className="ca-mono" style={{ fontSize:10, opacity:0.7, letterSpacing:'0.12em' }}>{it.tag}</span>
            <span className="ca-mono" style={{ fontSize:10, opacity:0.7, letterSpacing:'0.12em' }}>{it.dur} · {it.date}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// — ACE FRAMEWORK TEASER —
const ACETeaser = () => (
  <section style={{ background:'var(--ca-paper)', padding:'88px 56px' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:64, marginBottom:48, alignItems:'end' }}>
      <div>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-700)', letterSpacing:'0.24em' }}>THE FRAMEWORK</div>
        <h2 className="ca-sans" style={{ fontSize:54, fontWeight:300, marginTop:14, lineHeight:0.98, letterSpacing:'-0.03em', color:'var(--ca-obsidian)' }}>
          African<br/>
          <span style={{ fontWeight:600 }}>Constitutional</span><br/>
          <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, color:'var(--ca-indigo-700)' }}>Economics.</span>
        </h2>
      </div>
      <div>
        <div className="ca-sans" style={{ fontSize:18, lineHeight:1.5, color:'var(--ca-ink)', maxWidth:560 }}>
          An emerging intellectual framework for how constitutional and institutional design shape Africa's economic transformation — investment climate, infrastructure, innovation, and long-term prosperity.
        </div>
        <button className="ca-btn solid" style={{ marginTop:24, padding:'14px 22px', fontSize:13 }}>
          Explore the framework →
        </button>
      </div>
    </div>

    {/* Six pillars */}
    <div style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', border:'1px solid var(--ca-rule)' }}>
      {[
        ['I','Constitutional design','Rules, rights, separation of powers — the source code.'],
        ['II','Institutions','Capacity, accountability, the trust that compounds.'],
        ['III','Infrastructure & energy','The physical layer of sovereignty.'],
        ['IV','Technology & AI','Digital public infrastructure for the continent.'],
        ['V','Finance & investment','Capital formation, deep markets, AfCFTA flows.'],
        ['VI','Continental integration','Mobility, standards, the African common project.'],
      ].map(([num, title, desc], i, arr) => (
        <div key={title} style={{
          padding:'28px 22px',
          borderRight: i < arr.length-1 ? '1px solid var(--ca-rule)' : 'none',
          background: i % 2 === 0 ? 'var(--ca-ivory)' : 'transparent',
          minHeight:240, display:'flex', flexDirection:'column',
        }}>
          <div className="ca-serif" style={{ fontStyle:'italic', fontWeight:400, fontSize:24, color:'var(--ca-brass-700)' }}>{num}</div>
          <div className="ca-sans" style={{ fontSize:17, fontWeight:600, marginTop:14, lineHeight:1.2, color:'var(--ca-obsidian)' }}>{title}</div>
          <div className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink-soft)', marginTop:10, lineHeight:1.5, flex:1 }}>{desc}</div>
          <a className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', marginTop:14, letterSpacing:'0.14em', cursor:'pointer' }}>READ →</a>
        </div>
      ))}
    </div>
  </section>
);

// — FEATURED INSIGHTS —
const InsightsGrid = () => (
  <section style={{ background:'var(--ca-ivory)', padding:'88px 56px', borderTop:'1px solid var(--ca-rule)' }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:40 }}>
      <div>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-700)', letterSpacing:'0.24em' }}>INSIGHTS & ANALYSIS</div>
        <h2 className="ca-sans" style={{ fontSize:40, fontWeight:600, marginTop:8, color:'var(--ca-obsidian)', letterSpacing:'-0.02em' }}>
          The ideas shaping the continent.
        </h2>
      </div>
      <a className="ca-mono" style={{ fontSize:11, letterSpacing:'0.18em', color:'var(--ca-indigo-700)', cursor:'pointer' }}>VIEW ARCHIVE →</a>
    </div>

    <div style={{ display:'grid', gridTemplateColumns:'1.45fr 1fr 1fr', gap:32 }}>
      {/* Lead feature */}
      <article>
        <div className="ca-img" style={{ aspectRatio:'5/3' }}>
          <span className="ca-img-tag">LEAD · STRATEGIC ANALYSIS</span>
          <span className="ca-img-label">grid infrastructure · sub-saharan</span>
        </div>
        <div style={{ display:'flex', gap:8, marginTop:18, alignItems:'center' }}>
          <span className="ca-chip" style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)' }}>STRATEGIC ANALYSIS</span>
          <span className="ca-chip" style={{ background:'transparent', color:'var(--ca-ink-soft)', border:'1px solid var(--ca-rule)' }}>12 MIN READ</span>
        </div>
        <h3 className="ca-sans" style={{ fontSize:30, fontWeight:600, marginTop:14, lineHeight:1.1, letterSpacing:'-0.015em', color:'var(--ca-obsidian)' }}>
          Why energy sovereignty is the next constitutional frontier.
        </h3>
        <p className="ca-sans" style={{ fontSize:14, color:'var(--ca-ink-soft)', marginTop:12, lineHeight:1.6, maxWidth:560 }}>
          A constitution that cannot keep the lights on cannot keep its promises. On grid sovereignty, regional pooling, and the legal architecture of African energy.
        </p>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', marginTop:14, letterSpacing:'0.14em' }}>
          BY ADAEZE OBIORA · 2026.04
        </div>
      </article>

      {/* Middle column — stacked */}
      <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
        {[
          { tag:'AfCFTA', title:'The harmonisation problem — and what the continent gets right.', author:'BY MAKHOSI MOYO', date:'2026.04', read:'8 min', img:'jade' },
          { tag:'TECHNOLOGY & AI', title:'Digital public infrastructure as constitutional infrastructure.', author:'BY DR. SAMUEL KAMAU', date:'2026.04', read:'6 min', img:'warm' },
        ].map((it, i) => (
          <article key={i}>
            <div className={`ca-img ${it.img}`} style={{ aspectRatio:'5/3' }} />
            <span className="ca-chip" style={{ background:'transparent', color:'var(--ca-brass-700)', border:'1px solid var(--ca-brass-500)', marginTop:14 }}>{it.tag}</span>
            <h4 className="ca-sans" style={{ fontSize:19, fontWeight:600, marginTop:10, lineHeight:1.2, color:'var(--ca-obsidian)' }}>{it.title}</h4>
            <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', marginTop:10, letterSpacing:'0.14em' }}>
              {it.author} · {it.date} · {it.read}
            </div>
          </article>
        ))}
      </div>

      {/* Right — most read */}
      <aside>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-700)', letterSpacing:'0.2em', marginBottom:14 }}>MOST READ THIS MONTH</div>
        {[
          'The constitutional grammar of a continental economy.',
          'Trust as the African investment thesis.',
          'AI sovereignty: who governs the model weights?',
          'AfCFTA at five — a constitutional audit.',
          'Industrial policy and the limits of the post-colonial state.',
        ].map((t, i) => (
          <div key={i} style={{
            display:'grid', gridTemplateColumns:'auto 1fr', gap:18, alignItems:'start',
            padding:'18px 0', borderTop: i ? '1px solid var(--ca-rule)' : 'none',
          }}>
            <div className="ca-serif" style={{ fontStyle:'italic', fontSize:32, fontWeight:500, color:'var(--ca-brass-700)', lineHeight:0.9 }}>{String(i+1).padStart(2,'0')}</div>
            <div>
              <div className="ca-sans" style={{ fontSize:15, fontWeight:500, lineHeight:1.35, color:'var(--ca-obsidian)' }}>{t}</div>
              <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', marginTop:6, letterSpacing:'0.14em' }}>2026.0{i+1} · {6+i} MIN</div>
            </div>
          </div>
        ))}
      </aside>
    </div>
  </section>
);

// — YOUTH VOICES —
const YouthVoices = () => (
  <section style={{ background:'var(--ca-jade-600)', color:'var(--ca-ivory)', padding:'80px 56px', position:'relative', overflow:'hidden' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:48, alignItems:'start' }}>
      <div>
        <div className="ca-mono" style={{ fontSize:10, color:'rgba(246,241,228,0.8)', letterSpacing:'0.24em' }}>YOUTH VOICES</div>
        <h2 className="ca-sans" style={{ fontSize:42, fontWeight:600, marginTop:14, lineHeight:1.0, letterSpacing:'-0.02em' }}>
          The continent's next constitutional generation, in their own words.
        </h2>
        <div className="ca-sans" style={{ fontSize:14, opacity:0.85, marginTop:18, lineHeight:1.6, maxWidth:380 }}>
          A rotating roster of African writers under 30 — building the institutions they want to inherit.
        </div>
        <button className="ca-btn" style={{ marginTop:24, padding:'12px 20px', fontSize:12, color:'var(--ca-ivory)', borderColor:'var(--ca-ivory)' }}>
          Read all voices →
        </button>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:18 }}>
        {[
          { name:'Aïssatou Diallo',    city:'DAKAR · SN',     topic:'on fiscal sovereignty', img:'warm' },
          { name:'Tendai Mukamuri',    city:'HARARE · ZW',    topic:'on land & the constitution', img:'jade' },
          { name:'Olusegun Adebayo',  city:'LAGOS · NG',     topic:'on AI governance', img:'' },
          { name:'Khadija El-Amin',    city:'NAIROBI · KE',  topic:'on AfCFTA in practice', img:'warm' },
          { name:'Bongani Nkosi',      city:'JOHANNESBURG · ZA', topic:'on industrial policy', img:'jade' },
          { name:'Léa Mbeki',          city:'KIGALI · RW',   topic:'on digital identity', img:'' },
        ].map((v, i) => (
          <article key={i} style={{ background:'rgba(246,241,228,0.06)', border:'1px solid rgba(246,241,228,0.2)', padding:18 }}>
            <div className={`ca-img ${v.img}`} style={{ aspectRatio:'1/1', width:64, height:64, borderRadius:'50%' }} />
            <div className="ca-sans" style={{ fontWeight:600, fontSize:16, marginTop:14 }}>{v.name}</div>
            <div className="ca-mono" style={{ fontSize:10, opacity:0.7, marginTop:4, letterSpacing:'0.16em' }}>{v.city}</div>
            <div className="ca-serif" style={{ fontStyle:'italic', fontSize:13, marginTop:10, opacity:0.9 }}>"{v.topic}"</div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// — FEATURED CONVERSATION —
const FeaturedConversation = () => (
  <section style={{ background:'var(--ca-obsidian)', color:'var(--ca-ivory)', padding:'80px 56px' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>
      <div className="ca-img" style={{ aspectRatio:'4/5' }}>
        <span className="ca-img-tag">FEATURED CONVERSATION · 02</span>
        <span className="ca-img-label">in conversation · kigali</span>
      </div>
      <div>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.24em' }}>FEATURED CONVERSATION</div>
        <h2 className="ca-serif" style={{ fontSize:54, fontWeight:600, marginTop:14, lineHeight:1.0, letterSpacing:'-0.025em' }}>
          "The constitutional question precedes the economic one — always."
        </h2>
        <div className="ca-sans" style={{ fontSize:14, opacity:0.85, marginTop:22, lineHeight:1.6, maxWidth:520 }}>
          A long-form conversation with Prof. Chinedu Okolo on institutional credibility, sovereign credit, and what it means to design a constitution for the next century of African transformation.
        </div>
        <div style={{ marginTop:28, display:'flex', alignItems:'center', gap:14 }}>
          <button className="ca-btn brass" style={{ padding:'14px 22px', fontSize:13 }}>
            Watch the conversation →
          </button>
          <a className="ca-mono" style={{ fontSize:11, color:'var(--ca-ivory)', opacity:0.8, letterSpacing:'0.18em', cursor:'pointer' }}>READ THE TRANSCRIPT</a>
        </div>
      </div>
    </div>
  </section>
);

// — NEWSLETTER —
const NewsletterCTA = () => (
  <section style={{ background:'var(--ca-brass-500)', color:'var(--ca-obsidian)', padding:'72px 56px', position:'relative', overflow:'hidden' }}>
    <div style={{ position:'absolute', right:-100, top:-50, opacity:0.1 }}>
      <MeridianMark size={400} color="#0E1320" variant="latitudes" />
    </div>
    <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:48, alignItems:'center', position:'relative' }}>
      <div>
        <div className="ca-mono" style={{ fontSize:10, letterSpacing:'0.24em' }}>THE BRIEFING · WEEKLY</div>
        <h2 className="ca-sans" style={{ fontSize:48, fontWeight:600, marginTop:12, lineHeight:1.0, letterSpacing:'-0.025em' }}>
          A weekly dispatch on the institutions shaping Africa.
        </h2>
        <div className="ca-sans" style={{ fontSize:14, marginTop:14, lineHeight:1.5, maxWidth:520, opacity:0.85 }}>
          Five minutes. Every Monday. The one analysis we'd send to a head of state. Read in 60 countries.
        </div>
      </div>
      <div>
        <form style={{ background:'var(--ca-ivory)', border:'2px solid var(--ca-obsidian)', display:'flex', alignItems:'center' }}>
          <input
            type="email" placeholder="your@email.org"
            style={{
              flex:1, border:'none', background:'transparent',
              padding:'18px 20px', fontFamily:'IBM Plex Mono', fontSize:13, color:'var(--ca-obsidian)',
              outline:'none',
            }}
            readOnly
          />
          <button type="button" style={{
            padding:'18px 24px', background:'var(--ca-obsidian)', color:'var(--ca-ivory)',
            border:'none', fontFamily:'IBM Plex Mono', fontSize:12, letterSpacing:'0.18em', cursor:'pointer',
          }}>SUBSCRIBE →</button>
        </form>
        <div className="ca-mono" style={{ fontSize:10, marginTop:12, opacity:0.7, letterSpacing:'0.14em' }}>
          NO SPAM · UNSUBSCRIBE ANY TIME · ENG · FR · SW
        </div>
      </div>
    </div>
  </section>
);

// — Page composition —
const HiFiHomeA = () => (
  <div style={{ background:'var(--ca-ivory)', minHeight:'100%' }}>
    <HiFiNav active="Home" />
    <HeroSection />
    <LatestEpisode />
    <ACETeaser />
    <InsightsGrid />
    <YouthVoices />
    <FeaturedConversation />
    <NewsletterCTA />
    <HiFiFooter />
  </div>
);

Object.assign(window, { HiFiNav, HiFiFooter, HiFiHomeA });
