// Pre-build · IA artboards
// SITEMAP · USER JOURNEYS · NAVIGATION MODEL

// ───────────────── Sitemap ─────────────────
const Sitemap = () => {
  const Card = ({ title, sub, kind = 'page', tone = 'indigo', children, w = 'auto' }) => {
    const tones = {
      indigo:  { bg:'var(--ca-indigo-700)', fg:'var(--ca-ivory)' },
      brass:   { bg:'var(--ca-brass-500)',  fg:'var(--ca-obsidian)' },
      jade:    { bg:'var(--ca-jade-600)',   fg:'var(--ca-ivory)' },
      ivory:   { bg:'#fff',                  fg:'var(--ca-ink)', border:'1px solid var(--ca-rule)' },
      ghost:   { bg:'var(--ca-paper-2)',     fg:'var(--ca-ink)', border:'1px dashed var(--ca-ink-faint)' },
    };
    const t = tones[tone];
    return (
      <div style={{ background:t.bg, color:t.fg, border:t.border, padding:'10px 12px', width:w, display:'inline-flex', flexDirection:'column', minHeight:42, justifyContent:'center' }}>
        <div className="ca-mono" style={{ fontSize:8.5, letterSpacing:'0.18em', opacity:0.7, textTransform:'uppercase' }}>{kind}</div>
        <div className="ca-sans" style={{ fontWeight:600, fontSize:13, lineHeight:1.15, marginTop:2 }}>{title}</div>
        {sub && <div className="ca-mono" style={{ fontSize:9, opacity:0.7, marginTop:3 }}>{sub}</div>}
        {children}
      </div>
    );
  };

  const Branch = ({ children, label }) => (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
      {label && <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.16em' }}>{label}</div>}
      {children}
    </div>
  );

  const VLine = ({ h = 20 }) => (
    <div style={{ width:1, height:h, background:'var(--ca-ink-faint)' }} />
  );

  return (
    <div style={{ background:'var(--ca-paper)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <div>
          <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>01 · Sitemap v0.2</div>
          <div className="ca-serif" style={{ fontSize:34, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
            Eight primary surfaces. One nav. One footer.
          </div>
        </div>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', textAlign:'right' }}>
          <div><span className="pb-dot ok"/>v1 scope</div>
          <div style={{ marginTop:3 }}><span className="pb-dot warn"/>v1.1</div>
          <div style={{ marginTop:3 }}><span className="pb-dot bad"/>later</div>
        </div>
      </div>

      {/* Root */}
      <div style={{ marginTop:30, display:'flex', flexDirection:'column', alignItems:'center', gap:0 }}>
        <Card title="Constitutional Africa" sub="/ — root domain" kind="root" tone="indigo" w={260}/>
        <VLine h={24}/>
        {/* primary nav bar */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(8, 1fr)', gap:10, width:'100%' }}>
          <Card title="Home" sub="/" kind="01" tone="ivory"/>
          <Card title="About" sub="/about" kind="02" tone="ivory"/>
          <Card title="Podcast" sub="/podcast" kind="03" tone="ivory"/>
          <Card title="ACE Framework" sub="/ace" kind="04" tone="ivory"/>
          <Card title="Africa in Transition" sub="/transition" kind="05" tone="ivory"/>
          <Card title="Youth Voices" sub="/youth" kind="06" tone="ivory"/>
          <Card title="Insights" sub="/insights" kind="07" tone="ivory"/>
          <Card title="Contact" sub="/contact" kind="08" tone="ivory"/>
        </div>

        {/* sub-pages */}
        <div style={{ marginTop:18, display:'grid', gridTemplateColumns:'repeat(8, 1fr)', gap:10, width:'100%', alignItems:'flex-start' }}>
          {/* Home */}
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            <Card title="(no sub)" kind="∅" tone="ghost"/>
          </div>
          {/* About */}
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            <Card title="Founder" sub="/about/founder" kind="page" tone="ivory"/>
            <Card title="Editorial board" sub="/about/board" kind="page" tone="ivory"/>
            <Card title="Partners" sub="/about/partners" kind="page" tone="ivory"/>
          </div>
          {/* Podcast */}
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            <Card title="Episode :slug" sub="/podcast/:slug" kind="dynamic" tone="ivory"/>
            <Card title="Subscribe hub" sub="/podcast/subscribe" kind="page" tone="ivory"/>
            <Card title="Season archive" sub="/podcast/s:n" kind="dynamic" tone="ghost"/>
          </div>
          {/* ACE */}
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            <Card title="Pillar :slug" sub="/ace/:slug" kind="dynamic" tone="ivory"/>
            <Card title="Working papers" sub="/ace/papers" kind="page" tone="ivory"/>
            <Card title="Paper :id" sub="/ace/papers/:id" kind="dynamic" tone="ivory"/>
            <Card title="Reading list" sub="/ace/reading" kind="page" tone="ivory"/>
          </div>
          {/* Transition */}
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            <Card title="Country :iso" sub="/transition/:iso" kind="dynamic" tone="ivory"/>
            <Card title="Theme :slug" sub="/transition/themes/:slug" kind="dynamic" tone="ghost"/>
          </div>
          {/* Youth */}
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            <Card title="Submit" sub="/youth/submit" kind="form" tone="ivory"/>
            <Card title="Voice :slug" sub="/youth/:slug" kind="dynamic" tone="ivory"/>
          </div>
          {/* Insights */}
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            <Card title="Essay :slug" sub="/insights/:slug" kind="dynamic" tone="ivory"/>
            <Card title="By topic" sub="?topic=" kind="filter" tone="ghost"/>
            <Card title="By country" sub="?country=" kind="filter" tone="ghost"/>
          </div>
          {/* Contact */}
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            <Card title="Newsletter" sub="/newsletter" kind="form" tone="ivory"/>
            <Card title="Pitch / contribute" sub="/contribute" kind="form" tone="ivory"/>
          </div>
        </div>

        {/* utility */}
        <div style={{ marginTop:30, alignSelf:'stretch' }}>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>UTILITY · FOOTER · LEGAL</div>
          <div style={{ marginTop:8, display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:10 }}>
            <Card title="Search" sub="/search?q=" kind="utility" tone="ghost"/>
            <Card title="Language switch" sub="EN · FR · SW" kind="utility" tone="ghost"/>
            <Card title="RSS feeds" sub="/feed.xml" kind="feed" tone="ghost"/>
            <Card title="404" sub="not found" kind="state" tone="ghost"/>
            <Card title="Privacy" sub="/privacy" kind="legal" tone="ghost"/>
            <Card title="Terms" sub="/terms" kind="legal" tone="ghost"/>
          </div>
        </div>
      </div>

      <div style={{ marginTop:'auto', paddingTop:20, borderTop:'1px solid var(--ca-rule)', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:30 }}>
        <div>
          <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>Decisions to confirm</div>
          <ul className="ca-sans" style={{ fontSize:12, lineHeight:1.55, marginTop:6, paddingLeft:18, color:'var(--ca-ink)' }}>
            <li><b>Insights vs. Africa in Transition</b> — are these separate, or is Transition a filtered view of Insights?</li>
            <li><b>Featured Conversations</b> — sub-section of Podcast, or merged with Insights as "Long-reads"?</li>
            <li><b>Working Papers</b> — live under ACE or as a top-level Research surface?</li>
          </ul>
        </div>
        <div>
          <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>v1 scope (recommended)</div>
          <ul className="ca-sans" style={{ fontSize:12, lineHeight:1.55, marginTop:6, paddingLeft:18, color:'var(--ca-ink)' }}>
            <li>All 8 primary surfaces, indexes + detail templates only</li>
            <li>EN content; FR/SW stubs ready</li>
            <li>No global search yet — section-scoped filters</li>
            <li>Newsletter capture, no member accounts</li>
          </ul>
        </div>
        <div>
          <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>Out of scope · v1</div>
          <ul className="ca-sans" style={{ fontSize:12, lineHeight:1.55, marginTop:6, paddingLeft:18, color:'var(--ca-ink-soft)' }}>
            <li>Member portal / saved reading</li>
            <li>Comments / community</li>
            <li>Translation tooling — manual only</li>
            <li>Donations / paid subscriptions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// ───────────────── User Journeys ─────────────────
const UserJourneys = () => {
  const personas = [
    {
      tag: 'A · POLICY RESEARCHER',
      name: 'Adaeze',
      role: 'Senior fellow · Lagos-based think tank',
      goal: 'Land on a citation, verify the source, save the working paper for review.',
      tone: 'indigo',
      steps: [
        { surface:'Google → /ace/papers/wp-03', do:'Arrives mid-document on the cited paragraph', need:'Stable anchor links; visible citation export' },
        { surface:'/ace/papers/wp-03', do:'Scans abstract, downloads PDF', need:'Clear authorship, date, DOI-style ID, download CTA above the fold' },
        { surface:'/ace', do:'Backs up to the pillar to see related papers', need:'Breadcrumb + "related papers in this pillar"' },
        { surface:'/newsletter', do:'Subscribes to working-papers digest', need:'Topic-segmented signup, not just one master list' },
      ],
    },
    {
      tag: 'B · GRADUATE STUDENT',
      name: 'Kofi',
      role: 'Master\'s candidate · public policy · Accra',
      goal: 'Find the podcast, pick an episode to listen to on the commute, share it.',
      tone: 'brass',
      steps: [
        { surface:'Instagram → /podcast', do:'Arrives from a story link', need:'Above-the-fold "play latest" + platform-of-choice buttons' },
        { surface:'/podcast', do:'Filters by theme = "Federalism"', need:'Theme filter visible, no search required' },
        { surface:'/podcast/:slug', do:'Listens 4 minutes, queues for later', need:'Native HTML5 player with chapter markers; share sheet' },
        { surface:'Apple Podcasts', do:'Subscribes from the deep-link', need:'OG metadata + Apple-podcast-app-aware deep link' },
      ],
    },
    {
      tag: 'C · FUNDER · DUE DILIGENCE',
      name: 'Hannah',
      role: 'Programme officer · Nairobi · open-society foundation',
      goal: 'Vet the institute\'s credibility in under three minutes.',
      tone: 'jade',
      steps: [
        { surface:'/about', do:'Skims founder, board, partners', need:'Plain-language bio + photographed editorial board + partner logos' },
        { surface:'/about/board', do:'Verifies a board member\'s affiliation', need:'Each member links to external affiliation, not internal page' },
        { surface:'/ace/papers', do:'Counts published output', need:'Visible publishing cadence — dates, volume, byline diversity' },
        { surface:'/contact', do:'Sends a partnership inquiry', need:'Direct email, not just a form; expected response time stated' },
      ],
    },
  ];

  return (
    <div style={{ background:'var(--ca-paper)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>02 · User journeys · v1</div>
      <div className="ca-serif" style={{ fontSize:34, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
        Three people. Three jobs. One platform.
      </div>
      <div className="ca-sans" style={{ fontSize:13.5, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:680, lineHeight:1.55 }}>
        Every module on every page should serve at least one of these journeys. Modules that don't, we cut.
      </div>

      <div style={{ marginTop:30, display:'flex', flexDirection:'column', gap:24 }}>
        {personas.map(p => (
          <div key={p.tag} style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:24, display:'grid', gridTemplateColumns:'220px 1fr', gap:24 }}>
            <div>
              <div className="ca-mono" style={{ fontSize:9.5, color:`var(--ca-${p.tone === 'brass' ? 'brass-700' : p.tone === 'jade' ? 'jade-700' : 'indigo-700'})`, letterSpacing:'0.2em' }}>{p.tag}</div>
              <div className="ca-serif" style={{ fontSize:22, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, lineHeight:1.1 }}>{p.name}</div>
              <div className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink-soft)', marginTop:4 }}>{p.role}</div>
              <div style={{ marginTop:14, height:1, background:'var(--ca-rule)' }}/>
              <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em', marginTop:14 }}>GOAL</div>
              <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink)', marginTop:6, lineHeight:1.5 }}>{p.goal}</div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0 }}>
              {p.steps.map((s, i) => (
                <div key={i} style={{ borderLeft: i === 0 ? '1px solid var(--ca-rule)' : '1px dashed var(--ca-rule)', paddingLeft:14, paddingRight:8, position:'relative' }}>
                  <div className="ca-mono" style={{ fontSize:9, color:`var(--ca-${p.tone === 'brass' ? 'brass-700' : p.tone === 'jade' ? 'jade-700' : 'indigo-700'})`, letterSpacing:'0.2em' }}>STEP 0{i+1}</div>
                  <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink)', marginTop:4 }}>{s.surface}</div>
                  <div className="ca-sans" style={{ fontSize:12.5, color:'var(--ca-ink)', marginTop:8, lineHeight:1.45 }}><b>Does:</b> {s.do}</div>
                  <div className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink-soft)', marginTop:6, lineHeight:1.45, fontStyle:'italic' }}>Needs: {s.need}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop:24, padding:18, background:'var(--ca-indigo-700)', color:'var(--ca-ivory)' }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>ACCEPTANCE TEST</div>
        <div className="ca-serif" style={{ fontSize:18, fontWeight:600, marginTop:6, lineHeight:1.3 }}>
          Before sign-off, walk each journey end-to-end in the prototype. If any step requires search, copy-paste a URL, or a back-arrow more than twice — that's a bug, not a feature.
        </div>
      </div>
    </div>
  );
};

// ───────────────── Navigation Model ─────────────────
const NavigationModel = () => (
  <div style={{ background:'var(--ca-ivory)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
    <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>03 · Navigation & global UI</div>
    <div className="ca-serif" style={{ fontSize:34, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
      One header. One footer. One persistent player.
    </div>

    <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
      <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>DESKTOP NAV · ≥ 1024PX</div>
        <div style={{ marginTop:14, padding:'12px 14px', background:'var(--ca-paper)', border:'1px solid var(--ca-rule)', display:'flex', alignItems:'center', gap:14, fontFamily:'IBM Plex Sans', fontSize:11 }}>
          <span style={{ fontWeight:600 }}>◉ Constitutional Africa</span>
          <span style={{ marginLeft:'auto', display:'flex', gap:14, color:'var(--ca-ink-soft)' }}>
            <span>Home</span><span>About</span><span>Podcast</span><span style={{ color:'var(--ca-obsidian)', fontWeight:600, borderBottom:'2px solid var(--ca-brass-500)' }}>ACE</span><span>Transition</span><span>Youth</span><span>Insights</span>
          </span>
          <span style={{ marginLeft:14, fontFamily:'IBM Plex Mono', fontSize:10, color:'var(--ca-ink-soft)' }}>EN ⇩</span>
          <span style={{ marginLeft:6, padding:'4px 10px', background:'var(--ca-indigo-700)', color:'#fff', fontSize:10 }}>Subscribe →</span>
        </div>
        <ul className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink)', marginTop:14, paddingLeft:18, lineHeight:1.55 }}>
          <li>Sticky; condenses to 56px after 240px scroll</li>
          <li>Active state = brass underline, no fills</li>
          <li>No mega-menu — sub-pages live in section landings</li>
        </ul>
      </div>

      <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>MOBILE NAV · &lt; 768PX</div>
        <div style={{ marginTop:14, padding:'12px 14px', background:'var(--ca-paper)', border:'1px solid var(--ca-rule)', display:'flex', alignItems:'center', justifyContent:'space-between', fontFamily:'IBM Plex Sans', fontSize:11 }}>
          <span style={{ fontWeight:600 }}>◉ CA</span>
          <span style={{ display:'flex', gap:10, color:'var(--ca-ink-soft)', alignItems:'center' }}>
            <span style={{ fontFamily:'IBM Plex Mono', fontSize:10 }}>EN</span>
            <span style={{ fontSize:14 }}>⌕</span>
            <span style={{ fontSize:14 }}>≡</span>
          </span>
        </div>
        <ul className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink)', marginTop:14, paddingLeft:18, lineHeight:1.55 }}>
          <li>Drawer pushes from right, full-height</li>
          <li>Each primary surface gets a section header in the drawer; sub-pages listed below</li>
          <li>Persistent mini-player docks above the bottom edge when an episode is playing</li>
        </ul>
      </div>

      <div style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:20 }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>PERSISTENT AUDIO PLAYER</div>
        <div style={{ marginTop:14, padding:'10px 12px', background:'var(--ca-indigo-800)', display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:36, height:36, background:'var(--ca-brass-500)' }}/>
          <div style={{ flex:1, minWidth:0 }}>
            <div className="ca-sans" style={{ fontSize:11, fontWeight:600, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>EP·04 — The Constitutional Logic of the AfCFTA</div>
            <div style={{ height:3, background:'rgba(246,241,228,0.2)', marginTop:6, position:'relative' }}>
              <div style={{ width:'34%', height:'100%', background:'var(--ca-brass-400)' }}/>
            </div>
          </div>
          <span style={{ fontSize:14 }}>▶</span>
          <span style={{ fontSize:14 }}>✕</span>
        </div>
        <ul className="ca-sans" style={{ fontSize:12, color:'var(--ca-ivory)', opacity:0.85, marginTop:14, paddingLeft:18, lineHeight:1.55 }}>
          <li>Appears the moment an episode plays — persists across navigation</li>
          <li>Click title → opens full episode page</li>
          <li>Mobile: docks above bottom; tap to expand into full controls</li>
        </ul>
      </div>

      <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>NEWSLETTER STRATEGY</div>
        <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink)', marginTop:12, lineHeight:1.55 }}>
          One topic-segmented signup, three placements:
        </div>
        <ol className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink)', marginTop:8, paddingLeft:18, lineHeight:1.7 }}>
          <li><b>Footer (always)</b> — single email field, "what topics?" radio</li>
          <li><b>Inline mid-essay</b> — after the second sub-heading on any insight</li>
          <li><b>End-of-episode banner</b> — "the next conversation" framing, not "subscribe"</li>
        </ol>
        <div className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink-soft)', marginTop:10, lineHeight:1.5, fontStyle:'italic' }}>
          No modal pop-ups. No exit-intent. The brand can't afford the friction.
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { Sitemap, UserJourneys, NavigationModel });
