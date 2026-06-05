// Page-level wireframes. Each renders to fit inside a DCArtboard.
// Designed at 1280×800 desktop and 360×720 mobile artboards.

// ===================== HOMEPAGE A — EDITORIAL =====================
const HomeA = () => (
  <div className="wf" style={{ background:'#faf7f0', minHeight:'100%' }}>
    <BrowserBar />
    <TopNav active="Home" />

    {/* Hero: huge editorial statement */}
    <div style={{ padding:'48px 40px 32px', display:'grid', gridTemplateColumns:'1.7fr 1fr', gap:36, borderBottom:'1.5px solid #1a1612' }}>
      <div>
        <div style={{ display:'flex', gap:8, marginBottom:16 }}>
          <Chip>ISSUE 01</Chip>
          <Chip>EST. 2026</Chip>
          <Chip>EN · FR · SW</Chip>
        </div>
        <div style={{ fontFamily:'Kalam, cursive', fontSize:44, lineHeight:1.05, fontWeight:700 }}>
          Africa's transformation is, before<br/>
          anything else, a <span style={{ fontStyle:'italic' }}>constitutional</span> question.
        </div>
        <div style={{ marginTop:18, maxWidth:560 }}>
          <Lines count={3} widths={['100%','96%','72%']} />
        </div>
        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Btn solid>Read the manifesto →</Btn>
          <Btn>Listen to the podcast</Btn>
        </div>
      </div>
      <Img height={260} label="HERO IMAGE&#10;portrait / chamber / parliament" />
    </div>

    {/* Latest episode strip */}
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ background:'#1a1612', color:'#faf7f0', padding:'28px 32px' }}>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.16em', opacity:0.7 }}>
          LATEST · EPISODE 04
        </div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:24, fontWeight:600, marginTop:8, lineHeight:1.1 }}>
          The Constitutional Logic of the AfCFTA
        </div>
        <div style={{ marginTop:14, display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:44, height:44, borderRadius:999, border:'1.5px solid #faf7f0', display:'flex', alignItems:'center', justifyContent:'center' }}>▶</div>
          <div>
            <Lines count={2} widths={['80%','40%']} thin />
          </div>
        </div>
        <div style={{ marginTop:18, display:'flex', gap:6, opacity:0.8, fontFamily:'IBM Plex Mono, monospace', fontSize:9 }}>
          <span>SPOTIFY</span><span>·</span><span>APPLE</span><span>·</span><span>YOUTUBE</span><span>·</span><span>RSS</span>
        </div>
      </div>
      <div style={{ padding:'28px 32px' }}>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.16em', color:'#5a544b' }}>UPCOMING / RECENT</div>
        {[1,2,3].map(i => (
          <div key={i} style={{ display:'grid', gridTemplateColumns:'56px 1fr auto', gap:14, alignItems:'center', padding:'12px 0', borderBottom:'1px dashed #1a1612' }}>
            <Img height={48} width={56} x={false} />
            <div>
              <Lines count={2} widths={['90%','50%']} />
            </div>
            <Chip>48 MIN</Chip>
          </div>
        ))}
      </div>
    </div>

    {/* Pillars — ACE framework teaser */}
    <div style={{ padding:'40px', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:18 }}>
        <div>
          <LabelU>The Framework</LabelU>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:28, fontWeight:700, marginTop:8 }}>African Constitutional Economics</div>
        </div>
        <Btn>Explore the framework →</Btn>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14 }}>
        {['Constitutional design','Institutions','Infrastructure & energy','Continental integration'].map((t,i) => (
          <div key={t} style={{ border:'1.5px solid #1a1612', padding:18, background:'#fff', minHeight:140, display:'flex', flexDirection:'column' }}>
            <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>0{i+1}</div>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:16, fontWeight:600, marginTop:6 }}>{t}</div>
            <div style={{ marginTop:'auto' }}><Lines count={2} thin widths={['100%','70%']} /></div>
          </div>
        ))}
      </div>
    </div>

    {/* Featured insights grid */}
    <div style={{ padding:'40px', borderBottom:'1.5px solid #1a1612', background:'#f3efe6' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:18 }}>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:24, fontWeight:700 }}>Insights & Analysis</div>
        <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>VIEW ALL →</span>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap:18 }}>
        <div>
          <Img height={200} label="lead feature image" />
          <div style={{ marginTop:12 }}>
            <Chip>STRATEGIC ANALYSIS</Chip>
          </div>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:20, fontWeight:600, marginTop:8, lineHeight:1.2 }}>
            Why energy sovereignty is the next constitutional frontier
          </div>
          <div style={{ marginTop:10 }}><Lines count={2} widths={['100%','85%']} thin /></div>
        </div>
        {[0,1].map(i => (
          <div key={i}>
            <Img height={130} />
            <div style={{ marginTop:10 }}><Chip>{i===0?'AfCFTA':'YOUTH'}</Chip></div>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:16, fontWeight:600, marginTop:6, lineHeight:1.25 }}>
              <Lines count={2} widths={['100%','70%']} />
            </div>
            <div style={{ marginTop:8 }}><Lines count={2} widths={['100%','60%']} thin /></div>
          </div>
        ))}
      </div>
    </div>

    {/* Youth Voices band */}
    <div style={{ padding:'36px 40px', display:'grid', gridTemplateColumns:'1fr 2fr', gap:24, alignItems:'center', background:'#1F4D34', color:'#faf7f0' }}>
      <div>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.16em', opacity:0.7 }}>YOUTH VOICES</div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:22, fontWeight:600, marginTop:6, lineHeight:1.15 }}>
          The continent's next constitutional generation, in their own words.
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ border:'1.5px solid #faf7f0', padding:12, background:'rgba(255,255,255,0.04)' }}>
            <div style={{ width:36, height:36, borderRadius:999, border:'1.5px solid #faf7f0' }} />
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:13, fontWeight:600, marginTop:8 }}>Contributor name</div>
            <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, opacity:0.7, marginTop:3 }}>NAIROBI · KE</div>
          </div>
        ))}
      </div>
    </div>

    {/* Newsletter CTA */}
    <div style={{ padding:'36px 40px', display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:32, alignItems:'center', background:'#C89B3C' }}>
      <div>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.16em' }}>THE BRIEFING</div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:26, fontWeight:700, marginTop:6 }}>
          A weekly dispatch on the institutions shaping Africa.
        </div>
      </div>
      <div style={{ display:'flex', gap:0, border:'1.75px solid #1a1612', background:'#faf7f0' }}>
        <div style={{ flex:1, padding:'12px 14px', fontFamily:'IBM Plex Mono, monospace', fontSize:11, color:'#5a544b' }}>your@email.org</div>
        <div style={{ padding:'12px 16px', background:'#1a1612', color:'#faf7f0', fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.08em' }}>SUBSCRIBE →</div>
      </div>
    </div>

    <Footer />
  </div>
);

// ===================== HOMEPAGE B — INSTITUTIONAL =====================
const HomeB = () => (
  <div className="wf" style={{ background:'#F6F1E4', minHeight:'100%' }}>
    <BrowserBar />
    <TopNav active="Home" />

    {/* Hero: tight institutional statement, more typographic */}
    <div style={{ padding:'72px 56px 40px', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr auto', gap:18, alignItems:'baseline', marginBottom:18 }}>
        <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.2em' }}>MMXXVI · VOL. 01</span>
        <div style={{ height:1, background:'#1a1612' }} />
        <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.2em' }}>A CONTINENTAL PLATFORM</span>
      </div>
      <div style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:700, fontSize:74, lineHeight:0.96, letterSpacing:'-0.025em' }}>
        Ideas, institutions,<br/>
        infrastructure — <span style={{ fontStyle:'italic', fontWeight:500 }}>and the</span><br/>
        constitution of an<br/>
        African century.
      </div>
      <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap:24 }}>
        <div><Lines count={3} widths={['100%','97%','82%']} /></div>
        <div style={{ borderLeft:'1.5px solid #1a1612', paddingLeft:18 }}>
          <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, color:'#5a544b' }}>FOUNDER</div>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:14, fontWeight:600, marginTop:4 }}>Ruth Sebatindira, SC</div>
        </div>
        <div style={{ borderLeft:'1.5px solid #1a1612', paddingLeft:18 }}>
          <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, color:'#5a544b' }}>FRAMEWORK</div>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:14, fontWeight:600, marginTop:4 }}>African Constitutional Economics</div>
        </div>
      </div>
    </div>

    {/* Index / Issue ledger */}
    <div style={{ padding:'28px 56px', borderBottom:'1.5px solid #1a1612', background:'#fff' }}>
      <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.16em', color:'#5a544b' }}>IN THIS ISSUE</div>
      <div style={{ marginTop:14, display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:0 }}>
        {[
          ['01','Manifesto'],
          ['02','ACE Pillars'],
          ['03','Podcast'],
          ['04','Conversations'],
          ['05','Youth Voices'],
        ].map(([n,t], i, arr) => (
          <div key={n} style={{
            padding:'14px 16px',
            borderRight: i < arr.length-1 ? '1.5px solid #1a1612' : 'none',
          }}>
            <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, color:'#5a544b' }}>{n}</div>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:18, fontWeight:600, marginTop:4 }}>{t}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Feature spread: 2-col editorial */}
    <div style={{ padding:'44px 56px', display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:40, borderBottom:'1.5px solid #1a1612' }}>
      <div>
        <Chip style={{ background:'#16264D', color:'#F6F1E4', borderColor:'#16264D' }}>LEAD ESSAY</Chip>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:34, fontWeight:700, lineHeight:1.05, marginTop:12 }}>
          The constitutional grammar of a continental economy.
        </div>
        <div style={{ marginTop:16 }}>
          <Lines count={6} widths={['100%','98%','95%','100%','92%','60%']} />
        </div>
        <div style={{ marginTop:18 }}><Btn>Continue reading →</Btn></div>
      </div>
      <div>
        <Img height={340} label="full-bleed editorial image&#10;Africa from orbit / parliament chamber" />
        <div style={{ marginTop:10, display:'flex', justifyContent:'space-between', fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>
          <span>FIG. 01 — VIEW FROM THE CONTINENT</span>
          <span>02 / 24</span>
        </div>
      </div>
    </div>

    {/* Podcast + Newsletter side by side */}
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ padding:'36px 40px', background:'#16264D', color:'#F6F1E4' }}>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.18em', opacity:0.7 }}>THE PODCAST</div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:26, fontWeight:700, marginTop:8, lineHeight:1.1 }}>
          Long-form conversations on the institutions shaping the continent.
        </div>
        <div style={{ marginTop:18, display:'flex', gap:14, alignItems:'center' }}>
          <Img height={88} width={88} label="ep cover" x={false} style={{ borderColor:'#F6F1E4' }} />
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, opacity:0.7 }}>EP 04 · 52 MIN</div>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:16, fontWeight:600, marginTop:4, lineHeight:1.2 }}>The Constitutional Logic of the AfCFTA</div>
            <div style={{ marginTop:8, height:4, background:'rgba(255,255,255,0.2)', position:'relative' }}>
              <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'38%', background:'#B38A3A' }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding:'36px 40px', background:'#B38A3A', color:'#1a1612' }}>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.18em' }}>THE BRIEFING</div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:26, fontWeight:700, marginTop:8, lineHeight:1.1 }}>
          A weekly dispatch — 5 minutes, every Monday.
        </div>
        <div style={{ marginTop:18, border:'1.75px solid #1a1612', display:'flex', background:'#F6F1E4' }}>
          <div style={{ flex:1, padding:'12px 14px', fontFamily:'IBM Plex Mono, monospace', fontSize:11, color:'#5a544b' }}>your@email.org</div>
          <div style={{ padding:'12px 16px', background:'#1a1612', color:'#F6F1E4', fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.08em' }}>JOIN →</div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

// ===================== ABOUT =====================
const PageAbout = () => (
  <div className="wf" style={{ background:'#faf7f0', minHeight:'100%' }}>
    <BrowserBar url="constitutionalafrica.org/about" />
    <TopNav active="About" />
    <div style={{ padding:'56px 56px 32px', borderBottom:'1.5px solid #1a1612' }}>
      <LabelU>About</LabelU>
      <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:54, fontWeight:700, lineHeight:1, marginTop:12, letterSpacing:'-0.02em' }}>
        A serious continental<br/>
        <span style={{ fontStyle:'italic', fontWeight:500 }}>intellectual platform.</span>
      </div>
      <div style={{ marginTop:20, display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:48 }}>
        <div><Lines count={5} widths={['100%','98%','96%','99%','64%']} /></div>
        <div>
          <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>FOUNDED</div>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:22, fontWeight:600 }}>2026 · Kampala</div>
          <div style={{ height:1, background:'#1a1612', margin:'12px 0' }} />
          <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>FOUNDER</div>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:18, fontWeight:600 }}>Ruth Sebatindira, SC</div>
        </div>
      </div>
    </div>

    {/* What we do — three columns */}
    <div style={{ padding:'48px 56px', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, borderBottom:'1.5px solid #1a1612' }}>
      {[
        ['Convene', 'Long-form conversations with the people shaping African institutions and infrastructure.'],
        ['Analyse', 'Strategic analysis of constitutional governance, AfCFTA, energy, AI and finance.'],
        ['Build', 'A platform — and eventually an institute — for African Constitutional Economics.'],
      ].map(([t,desc], i) => (
        <div key={t}>
          <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>0{i+1} · WHAT WE DO</div>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:24, fontWeight:700, marginTop:6 }}>{t}</div>
          <div style={{ marginTop:10, fontFamily:'IBM Plex Sans, sans-serif', fontSize:12, lineHeight:1.5, color:'#1a1612' }}>{desc}</div>
        </div>
      ))}
    </div>

    {/* Editorial board */}
    <div style={{ padding:'48px 56px', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:20 }}>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:28, fontWeight:700 }}>Editorial board & contributors</div>
        <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>VIEW FULL ROSTER →</span>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:16 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i}>
            <Img height={160} label="portrait" />
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:14, fontWeight:600, marginTop:8 }}><Lines count={1} widths={['80%']} /></div>
            <div style={{ marginTop:6 }}><Lines count={1} widths={['60%']} thin /></div>
          </div>
        ))}
      </div>
    </div>

    <Footer />
  </div>
);

// ===================== PODCAST INDEX =====================
const PagePodcast = () => (
  <div className="wf" style={{ background:'#faf7f0', minHeight:'100%' }}>
    <BrowserBar url="constitutionalafrica.org/podcast" />
    <TopNav active="Podcast" />

    {/* Featured player */}
    <div style={{ background:'#1a1612', color:'#faf7f0', padding:'48px 56px', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:32, alignItems:'center' }}>
        <Img width={220} height={220} label="EP COVER&#10;abstract pan-african pattern" style={{ borderColor:'#faf7f0' }} />
        <div>
          <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.18em', opacity:0.7 }}>NOW PLAYING · EPISODE 04</div>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:38, fontWeight:700, lineHeight:1.05, marginTop:8 }}>The Constitutional Logic of the AfCFTA</div>
          <div style={{ marginTop:10, opacity:0.8 }}><Lines count={2} widths={['90%','60%']} thin /></div>
          <div style={{ marginTop:24, display:'flex', alignItems:'center', gap:16 }}>
            <div style={{ width:54, height:54, borderRadius:999, border:'1.75px solid #faf7f0', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>▶</div>
            <div style={{ flex:1 }}>
              <div style={{ height:4, background:'rgba(255,255,255,0.2)', position:'relative' }}>
                <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'38%', background:'#C89B3C' }} />
              </div>
              <div style={{ marginTop:6, display:'flex', justifyContent:'space-between', fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>
                <span>19:42</span><span>52:18</span>
              </div>
            </div>
            <div style={{ display:'flex', gap:6 }}>
              {['SP','AP','YT','RSS'].map(p => (
                <span key={p} style={{ width:30, height:30, border:'1.5px solid #faf7f0', display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'IBM Plex Mono, monospace', fontSize:9 }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Filters */}
    <div style={{ padding:'20px 56px', borderBottom:'1.5px solid #1a1612', display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
      <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, color:'#5a544b', marginRight:8 }}>FILTER BY:</span>
      {['All themes','Constitutional Governance','AfCFTA','Energy','Technology & AI','Youth','Finance','Industrialization'].map((t,i) => (
        <Pill key={t} style={i===0?{ background:'#1a1612', color:'#faf7f0' }:{}}>{t}</Pill>
      ))}
    </div>

    {/* Episode grid */}
    <div style={{ padding:'40px 56px', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:28 }}>
      {[1,2,3,4,5,6].map(i => (
        <div key={i}>
          <Img height={180} label={`EP COVER 0${i}`} />
          <div style={{ marginTop:10, display:'flex', justifyContent:'space-between' }}>
            <Chip>EP 0{i}</Chip>
            <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>52 MIN · 2026.0{i}</span>
          </div>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:18, fontWeight:600, marginTop:8, lineHeight:1.2 }}>
            Episode title placeholder lorem ipsum
          </div>
          <div style={{ marginTop:8 }}><Lines count={2} widths={['100%','62%']} thin /></div>
          <div style={{ marginTop:10, fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b', textTransform:'uppercase', letterSpacing:'0.06em' }}>Listen · Read · Watch</div>
        </div>
      ))}
    </div>

    <Footer />
  </div>
);

// ===================== ACE FRAMEWORK =====================
const PageACE = () => (
  <div className="wf" style={{ background:'#F6F1E4', minHeight:'100%' }}>
    <BrowserBar url="constitutionalafrica.org/african-constitutional-economics" />
    <TopNav active="ACE Framework" />

    <div style={{ padding:'64px 56px 40px', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:48, alignItems:'end' }}>
        <div>
          <LabelU>The framework</LabelU>
          <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:64, fontWeight:700, lineHeight:0.98, marginTop:14, letterSpacing:'-0.025em' }}>
            African<br/>
            Constitutional<br/>
            <span style={{ fontStyle:'italic', fontWeight:500 }}>Economics.</span>
          </div>
        </div>
        <div>
          <Lines count={5} widths={['100%','98%','94%','99%','68%']} />
          <div style={{ marginTop:18 }}><Btn solid>Read the working paper →</Btn></div>
        </div>
      </div>
    </div>

    {/* 6 pillars diagram */}
    <div style={{ padding:'48px 56px', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.16em', color:'#5a544b' }}>SIX INTERLOCKING PILLARS</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:0, marginTop:14, border:'1.5px solid #1a1612' }}>
        {[
          ['I','Constitutional design','Rules · rights · separation of powers'],
          ['II','Institutions','Capacity · accountability · trust'],
          ['III','Infrastructure & energy','The physical layer of sovereignty'],
          ['IV','Technology & AI','Digital public infrastructure'],
          ['V','Finance & investment','Capital formation · markets'],
          ['VI','Continental integration','AfCFTA · mobility · standards'],
        ].map(([num, t, sub], i, arr) => (
          <div key={t} style={{
            padding:'18px 14px', minHeight:170,
            borderRight: i < arr.length - 1 ? '1.5px solid #1a1612' : 'none',
            display:'flex', flexDirection:'column',
            background: i % 2 === 0 ? '#fff' : '#F6F1E4',
          }}>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontStyle:'italic', fontSize:18, fontWeight:500 }}>{num}</div>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:16, fontWeight:600, marginTop:8, lineHeight:1.15 }}>{t}</div>
            <div style={{ marginTop:'auto', fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b', lineHeight:1.4 }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Working papers list */}
    <div style={{ padding:'48px 56px', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:16 }}>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:28, fontWeight:700 }}>Working papers & reading list</div>
        <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>ARCHIVE →</span>
      </div>
      {[1,2,3,4].map(i => (
        <div key={i} style={{ display:'grid', gridTemplateColumns:'70px 1fr auto auto', alignItems:'center', gap:24, padding:'16px 0', borderTop:'1px solid #1a1612' }}>
          <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:11, color:'#5a544b' }}>WP · 0{i}</div>
          <div>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:18, fontWeight:600 }}>Working paper title placeholder, in clear declarative phrasing.</div>
            <div style={{ marginTop:6 }}><Lines count={1} widths={['70%']} thin /></div>
          </div>
          <Chip>{['CONSTITUTIONAL','ENERGY','AfCFTA','AI'][i-1]}</Chip>
          <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>PDF · 24P →</span>
        </div>
      ))}
    </div>

    <Footer />
  </div>
);

// ===================== INSIGHTS =====================
const PageInsights = () => (
  <div className="wf" style={{ background:'#faf7f0', minHeight:'100%' }}>
    <BrowserBar url="constitutionalafrica.org/insights" />
    <TopNav active="Insights" />

    <div style={{ padding:'48px 56px 24px', borderBottom:'1.5px solid #1a1612' }}>
      <LabelU>Insights & analysis</LabelU>
      <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:48, fontWeight:700, lineHeight:1, marginTop:14, letterSpacing:'-0.02em' }}>
        The ideas <span style={{ fontStyle:'italic', fontWeight:500 }}>shaping</span> Africa's<br/>constitutional century.
      </div>
    </div>

    {/* Top filter / sort bar */}
    <div style={{ padding:'18px 56px', borderBottom:'1.5px solid #1a1612', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
        {['All','Constitutional','AfCFTA','Energy','AI & Tech','Finance','Youth','Industrial'].map((t,i) => (
          <Pill key={t} style={i===0?{ background:'#1a1612', color:'#faf7f0' }:{}}>{t}</Pill>
        ))}
      </div>
      <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10 }}>SORT · LATEST ↓</span>
    </div>

    {/* Magazine grid */}
    <div style={{ padding:'40px 56px', display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gap:32 }}>
      {/* Lead column — long-form feature */}
      <div>
        <Img height={300} label="hero feature image" />
        <div style={{ marginTop:12, display:'flex', gap:8 }}>
          <Chip>LEAD ESSAY</Chip>
          <Chip>12 MIN READ</Chip>
        </div>
        <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:30, fontWeight:700, marginTop:10, lineHeight:1.1 }}>
          Why energy sovereignty is the next constitutional frontier
        </div>
        <div style={{ marginTop:10 }}><Lines count={4} widths={['100%','98%','100%','60%']} /></div>
        <div style={{ marginTop:12, fontFamily:'IBM Plex Mono, monospace', fontSize:10, color:'#5a544b' }}>BY AUTHOR NAME · 2026.04</div>
      </div>

      {/* Middle column — stacked */}
      <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{ borderTop: i ? '1px solid #1a1612' : 'none', paddingTop: i?16:0 }}>
            <Chip>{['CONSTITUTIONAL','AfCFTA','YOUTH'][i]}</Chip>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:18, fontWeight:600, marginTop:8, lineHeight:1.2 }}>
              <Lines count={2} widths={['100%','75%']} />
            </div>
            <div style={{ marginTop:8 }}><Lines count={2} widths={['100%','55%']} thin /></div>
          </div>
        ))}
      </div>

      {/* Right column — most read */}
      <div>
        <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, letterSpacing:'0.16em', color:'#5a544b' }}>MOST READ</div>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:12, alignItems:'start', padding:'14px 0', borderBottom:'1px dashed #1a1612' }}>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontStyle:'italic', fontSize:24, fontWeight:500, lineHeight:1, color:'#5a544b' }}>0{i}</div>
            <div>
              <Lines count={2} widths={['100%','70%']} />
              <div style={{ marginTop:6, fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>2026.0{i} · 6 MIN</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer />
  </div>
);

// ===================== MOBILE — HOMEPAGE =====================
const MobileHome = () => (
  <div className="wf" style={{ background:'#faf7f0', height:'100%', display:'flex', flexDirection:'column', borderRadius:24, overflow:'hidden', border:'1.5px solid #1a1612' }}>
    {/* status bar */}
    <div style={{ height:18, background:'#faf7f0', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 14px', fontFamily:'IBM Plex Mono, monospace', fontSize:9 }}>
      <span>9:41</span><span>●●● ▮</span>
    </div>
    {/* top bar */}
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 14px', borderBottom:'1.5px solid #1a1612' }}>
      <span style={{ fontFamily:'IBM Plex Serif, serif', fontWeight:700, fontSize:12, letterSpacing:'0.08em' }}>CONSTITUTIONAL · AFRICA</span>
      <span style={{ fontSize:14 }}>≡</span>
    </div>
    {/* hero */}
    <div style={{ padding:'18px 14px', borderBottom:'1.5px solid #1a1612' }}>
      <Chip>ISSUE 01</Chip>
      <div style={{ fontFamily:'Kalam, cursive', fontSize:22, fontWeight:700, lineHeight:1.05, marginTop:10 }}>
        Africa's transformation is, before anything else, a <span style={{ fontStyle:'italic' }}>constitutional</span> question.
      </div>
      <div style={{ marginTop:12 }}><Btn solid style={{ fontSize:9, padding:'7px 12px' }}>Read manifesto →</Btn></div>
    </div>
    {/* podcast card */}
    <div style={{ padding:'14px', background:'#1a1612', color:'#faf7f0' }}>
      <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:8, letterSpacing:'0.18em', opacity:0.7 }}>LATEST · EP 04</div>
      <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:14, fontWeight:600, marginTop:6, lineHeight:1.15 }}>The Constitutional Logic of the AfCFTA</div>
      <div style={{ marginTop:10, display:'flex', alignItems:'center', gap:10 }}>
        <div style={{ width:32, height:32, borderRadius:999, border:'1.5px solid #faf7f0', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10 }}>▶</div>
        <div style={{ flex:1, height:3, background:'rgba(255,255,255,0.2)' }}>
          <div style={{ width:'38%', height:'100%', background:'#C89B3C' }} />
        </div>
      </div>
    </div>
    {/* pillars list */}
    <div style={{ padding:'14px', borderBottom:'1.5px solid #1a1612' }}>
      <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, color:'#5a544b' }}>THE FRAMEWORK</div>
      <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:16, fontWeight:700, marginTop:4 }}>African Constitutional Economics</div>
      <div style={{ marginTop:10, display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
        {['Design','Institutions','Infrastructure','Integration'].map((t,i) => (
          <div key={t} style={{ border:'1.25px solid #1a1612', padding:'8px 10px', minHeight:54 }}>
            <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:8 }}>0{i+1}</div>
            <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:11, fontWeight:600, marginTop:2 }}>{t}</div>
          </div>
        ))}
      </div>
    </div>
    {/* insight cards */}
    <div style={{ padding:'14px', flex:1, overflow:'hidden' }}>
      {[0,1].map(i => (
        <div key={i} style={{ display:'grid', gridTemplateColumns:'58px 1fr', gap:10, padding:'10px 0', borderBottom:'1px dashed #1a1612' }}>
          <Img height={48} width={58} x={false} />
          <div>
            <Chip style={{ fontSize:8 }}>{['ENERGY','AfCFTA'][i]}</Chip>
            <div style={{ marginTop:6 }}><Lines count={2} widths={['100%','70%']} thin /></div>
          </div>
        </div>
      ))}
    </div>
    {/* tab bar */}
    <div style={{ display:'flex', borderTop:'1.5px solid #1a1612', padding:'8px 0' }}>
      {['Home','Listen','ACE','Briefing','You'].map((t,i) => (
        <div key={t} style={{ flex:1, textAlign:'center', fontFamily:'IBM Plex Mono, monospace', fontSize:8, fontWeight: i===0?700:400, letterSpacing:'0.06em' }}>{t.toUpperCase()}</div>
      ))}
    </div>
  </div>
);

// ===================== MOBILE — PODCAST =====================
const MobilePodcast = () => (
  <div className="wf" style={{ background:'#1a1612', color:'#faf7f0', height:'100%', display:'flex', flexDirection:'column', borderRadius:24, overflow:'hidden', border:'1.5px solid #1a1612' }}>
    <div style={{ height:18, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 14px', fontFamily:'IBM Plex Mono, monospace', fontSize:9 }}>
      <span>9:41</span><span>●●● ▮</span>
    </div>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 14px', borderBottom:'1px solid rgba(250,247,240,0.2)' }}>
      <span style={{ fontSize:14 }}>←</span>
      <span style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, letterSpacing:'0.16em' }}>NOW PLAYING</span>
      <span style={{ fontSize:14 }}>⋯</span>
    </div>
    <div style={{ padding:'24px 24px 16px', display:'flex', flexDirection:'column', alignItems:'center' }}>
      <Img width={220} height={220} label="EP COVER" x={false} style={{ borderColor:'#faf7f0' }} />
      <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, opacity:0.7, marginTop:18, letterSpacing:'0.16em' }}>EPISODE 04 · 52 MIN</div>
      <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:22, fontWeight:700, marginTop:8, lineHeight:1.1, textAlign:'center' }}>
        The Constitutional Logic of the AfCFTA
      </div>
      <div style={{ fontFamily:'IBM Plex Sans, sans-serif', fontSize:11, opacity:0.7, marginTop:8 }}>w/ Dr. K. Nthatisi</div>
    </div>
    <div style={{ padding:'0 24px', marginTop:'auto' }}>
      <div style={{ height:3, background:'rgba(255,255,255,0.2)', position:'relative' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'38%', background:'#C89B3C' }} />
        <div style={{ position:'absolute', left:'38%', top:'50%', width:8, height:8, background:'#C89B3C', borderRadius:999, transform:'translate(-50%,-50%)' }} />
      </div>
      <div style={{ marginTop:8, display:'flex', justifyContent:'space-between', fontFamily:'IBM Plex Mono, monospace', fontSize:9, opacity:0.8 }}>
        <span>19:42</span><span>-32:36</span>
      </div>
      <div style={{ marginTop:18, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 12px' }}>
        <span style={{ fontSize:18 }}>↺15</span>
        <span style={{ fontSize:14 }}>⏮</span>
        <div style={{ width:60, height:60, borderRadius:999, border:'2px solid #faf7f0', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24 }}>▶</div>
        <span style={{ fontSize:14 }}>⏭</span>
        <span style={{ fontSize:18 }}>30↻</span>
      </div>
    </div>
    <div style={{ padding:'18px 24px', borderTop:'1px solid rgba(250,247,240,0.2)', marginTop:24, display:'flex', justifyContent:'space-between', fontFamily:'IBM Plex Mono, monospace', fontSize:9 }}>
      <span>NOTES</span><span>TRANSCRIPT</span><span>SHARE</span><span>SAVE</span>
    </div>
  </div>
);

Object.assign(window, {
  HomeA, HomeB, PageAbout, PagePodcast, PageACE, PageInsights,
  MobileHome, MobilePodcast,
});
