// Pre-build · CONTENT STRESS TESTS
// Run the same components with real, varied content & in French.

// ───────────────── Stress test: home hero ─────────────────
const StressTestHero = () => {
  const HeroBlock = ({ tag, headline, lang, byline, font = 'IBM Plex Serif' }) => (
    <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:24, display:'flex', flexDirection:'column' }}>
      <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>{tag}</div>
      <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:22, marginTop:14, flex:1 }}>
        <div>
          <div style={{ display:'flex', gap:6, marginBottom:10 }}>
            <span className="ca-chip" style={{ border:'1px solid var(--ca-rule)', color:'var(--ca-ink-soft)' }}>{lang === 'fr' ? 'ÉDITION 01' : 'EDITION 01'}</span>
            <span className="ca-chip" style={{ border:'1px solid var(--ca-rule)', color:'var(--ca-ink-soft)' }}>EST · 2026</span>
            <span className="ca-chip" style={{ border:'1px solid var(--ca-rule)', color:'var(--ca-ink-soft)' }}>{lang.toUpperCase()}</span>
          </div>
          <div style={{ fontFamily:font, fontSize:36, fontWeight:600, color:'var(--ca-obsidian)', lineHeight:1.05, letterSpacing:'-0.015em' }}>
            {headline}
          </div>
          <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink-soft)', marginTop:14, lineHeight:1.55, maxWidth:420 }}>
            {byline}
          </div>
        </div>
        <div className="pb-img" style={{ minHeight:160 }}><span className="pb-img-label">{lang === 'fr' ? 'IMAGE D\'OUVERTURE' : 'HERO IMAGE'}</span></div>
      </div>
    </div>
  );

  return (
    <div style={{ background:'var(--ca-paper)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>10 · Stress test · Hero headline</div>
      <div className="ca-serif" style={{ fontSize:32, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
        Real headlines. Short, long, and French.
      </div>
      <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:680, lineHeight:1.55 }}>
        The wireframe headline reads beautifully in isolation. These don't always.
      </div>

      <div style={{ marginTop:22, display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
        <HeroBlock
          tag="A · SHORT · 7 WORDS"
          lang="en"
          headline="Africa, constituted."
          byline="A two-word manifesto risks looking thin in a tall hero. Either fill the space (large image, decorative axis), or lean fully into typographic confidence at 96px+."
        />
        <HeroBlock
          tag="B · MEDIUM · WIREFRAME DEFAULT"
          lang="en"
          headline={<>Africa's transformation is, before anything else, a <i>constitutional</i> question.</>}
          byline="Our running headline. Reads well; tests well. Keep as the canonical reference."
        />
        <HeroBlock
          tag="C · LONG · 28 WORDS"
          lang="en"
          headline="Why the next generation of African statecraft — energy sovereignty, monetary independence, cross-border infrastructure — is, before anything else, a constitutional question of the highest order."
          byline="Real essay-length headlines need a smaller size. Suggest clamp(28px, 3.2vw, 44px) and a max of 22 words editorially."
        />
        <HeroBlock
          tag="D · FRENCH · ~28% EXPANSION"
          lang="fr"
          headline={<>La transformation de l'Afrique est, avant toute chose, une question <i>constitutionnelle</i>.</>}
          byline="French runs longer with longer words; «constitutionnelle» alone is 17 characters. Headline size must drop one step for FR, or break point must shift earlier."
        />
        <HeroBlock
          tag="E · SWAHILI · COMPACT"
          lang="sw"
          headline={<>Mageuzi ya Afrika ni, kabla ya yote, swali la <i>kikatiba</i>.</>}
          byline="Swahili sits between EN and FR in length but uses fewer rare characters. No special handling needed at hero scale."
        />
        <HeroBlock
          tag="F · ARABIC PROOF · RTL READY"
          lang="ar"
          font="IBM Plex Serif"
          headline={<span dir="rtl">تحوُّل أفريقيا، قبل كل شيء، مسألة دستورية.</span>}
          byline="Even if we don't ship Arabic in v1, the layout must not break under dir=rtl. Test now: chip order reverses, image stays right? Confirm."
        />
      </div>
    </div>
  );
};

// ───────────────── Stress test: cards ─────────────────
const StressTestCards = () => {
  const cards = [
    { title: 'AfCFTA.', meta:'EP·12 · 8 MIN', warn:false },
    { title: 'Energy sovereignty and the next constitutional frontier.', meta:'EP·02 · 52 MIN', warn:false },
    { title: 'The constitutional logic of land tenure reform across the Southern African Development Community member states, 1994–2026.', meta:'EP·17 · 1h 14 MIN', warn:true },
    { title: 'Federalism in motion: Ethiopia, Nigeria, and South Africa', meta:'EP·03 · 38 MIN', warn:false },
    { title: 'L\'État de droit et la souveraineté monétaire au sein de l\'UEMOA', meta:'EP·09 · 47 MIN', warn:false },
    { title: 'Untitled draft', meta:'DRAFT · NO DATE', warn:true },
  ];

  return (
    <div style={{ background:'var(--ca-ivory)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>11 · Stress test · Cards & lists</div>
      <div className="ca-serif" style={{ fontSize:32, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
        One-word titles. Run-on titles. Drafts.
      </div>
      <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:680, lineHeight:1.55 }}>
        Grid behaviour at the edges. Single-word titles need vertical balance; run-ons need a cap.
      </div>

      <div style={{ marginTop:22, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:14 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background:'#fff', border:'1px solid var(--ca-rule)', position:'relative' }}>
            <div className="pb-img" style={{ height:140, padding:10 }}><span className="pb-img-label">EP · {String(i+1).padStart(2, '0')}</span></div>
            <div style={{ padding:14, minHeight:120 }}>
              <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-brass-700)', letterSpacing:'0.16em' }}>{c.meta}</div>
              <div className="ca-serif" style={{ fontSize:15, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, lineHeight:1.25, display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{c.title}</div>
              {c.warn && (
                <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-bad)', marginTop:8, letterSpacing:'0.16em' }}>⚠ EDGE CASE</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop:18, padding:16, background:'#fff', border:'1px solid var(--ca-rule)' }}>
        <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>RULES THAT FALL OUT OF THIS</div>
        <ol className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink)', marginTop:8, paddingLeft:18, lineHeight:1.6, columnCount:2, columnGap:32 }}>
          <li>Cap titles at 3 lines via line-clamp; editorial guideline 12 words max.</li>
          <li>Cards must have a min-height so single-word titles don't shrink the row.</li>
          <li>Drafts surface visibly only in admin; never in public lists.</li>
          <li>Episode duration formatted h:mm above 60min, "NN MIN" below.</li>
        </ol>
      </div>
    </div>
  );
};

Object.assign(window, { StressTestHero, StressTestCards });
