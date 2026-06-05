// Pre-build planning canvas — composer
const { DesignCanvas, DCSection, DCArtboard, DCPostIt } = window;

function App() {
  return (
    <DesignCanvas>

      {/* INTRO */}
      <DCSection
        id="intro"
        title="Constitutional Africa · Pre-Build Planning"
        subtitle="What to resolve before we transition from wireframes to a real build. Sitemap, content model, components, stress tests, accessibility, and a v1 scope line."
      >
        <DCArtboard id="brief" label="What's in this canvas" width={1100} height={620}>
          <div style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:48, height:'100%', display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', right:-100, top:-60, opacity:0.08 }}>
              <MeridianMark size={460} color="#F6F1E4" />
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div>
                <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-300)', letterSpacing:'0.24em' }}>PRE-BUILD · ROUND 0</div>
                <div className="ca-serif" style={{ fontSize:38, fontWeight:600, marginTop:8, letterSpacing:'-0.02em' }}>Before we build, decide these.</div>
                <div className="ca-sans" style={{ fontSize:14, opacity:0.85, marginTop:14, maxWidth:640, lineHeight:1.55 }}>
                  Nine artboards covering information architecture, content modelling, component variants, real-content stress tests, accessibility & i18n, edge-case states, and a hard v1 scope line. Each one is a decision to make — not a thing to look at.
                </div>
              </div>
              <MeridianMark size={72} color="#F6F1E4" accent="#C6A050" />
            </div>

            <div style={{ marginTop:32, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24, flex:1 }}>
              <div>
                <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>01 · ARCHITECTURE</div>
                <ol style={{ marginTop:12, paddingLeft:18, lineHeight:1.7, fontFamily:'IBM Plex Sans', fontSize:13 }}>
                  <li>Sitemap v0.2 — 8 surfaces</li>
                  <li>User journeys — 3 personas</li>
                  <li>Nav model — header, footer, player</li>
                </ol>
              </div>
              <div>
                <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>02 · SYSTEM</div>
                <ol style={{ marginTop:12, paddingLeft:18, lineHeight:1.7, fontFamily:'IBM Plex Sans', fontSize:13 }}>
                  <li>Content model — 7 types</li>
                  <li>Taxonomy — pillar · theme · country · format</li>
                  <li>Imagery strategy — 4 directions</li>
                  <li>Component audit — episode card, byline, citation, viz</li>
                </ol>
              </div>
              <div>
                <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>03 · STRESS-TEST</div>
                <ol style={{ marginTop:12, paddingLeft:18, lineHeight:1.7, fontFamily:'IBM Plex Sans', fontSize:13 }}>
                  <li>Hero in EN · FR · SW · AR</li>
                  <li>Cards: short, long, edge cases</li>
                  <li>Accessibility · contrast · focus · landmarks</li>
                  <li>Empty · loading · error · 404 · form states</li>
                  <li>Scope — V1 / V1.1 / Later</li>
                </ol>
                <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em', marginTop:14 }}>TIP · ⤢ TO OPEN FULLSCREEN</div>
              </div>
            </div>
          </div>
        </DCArtboard>

        <DCPostIt rotate={-3} width={240}>
          Read in order. Each section ends with <b>a decision to confirm</b>.<br/><br/>
          Mark up anything you want changed and we&apos;ll iterate.
        </DCPostIt>
      </DCSection>

      {/* IA */}
      <DCSection
        id="ia"
        title="Information architecture"
        subtitle="Sitemap, user journeys, and how the global navigation actually behaves."
      >
        <DCArtboard id="sitemap" label="01 · Sitemap v0.2" width={1240} height={920}>
          <Sitemap/>
        </DCArtboard>
        <DCArtboard id="journeys" label="02 · User journeys" width={1240} height={900}>
          <UserJourneys/>
        </DCArtboard>
        <DCArtboard id="nav-model" label="03 · Navigation & global UI" width={1240} height={780}>
          <NavigationModel/>
        </DCArtboard>
      </DCSection>

      {/* CONTENT MODEL */}
      <DCSection
        id="content"
        title="Content model & taxonomy"
        subtitle="The CMS shape. Lock this and every page falls out cleanly."
      >
        <DCArtboard id="content-model" label="04 · Content model (7 types)" width={1240} height={1020}>
          <ContentModel/>
        </DCArtboard>
        <DCArtboard id="taxonomy" label="05 · Taxonomy (4 vocabularies)" width={1240} height={780}>
          <Taxonomy/>
        </DCArtboard>
        <DCArtboard id="imagery" label="06 · Imagery strategy" width={1240} height={820}>
          <ImageryStrategy/>
        </DCArtboard>
      </DCSection>

      {/* COMPONENTS */}
      <DCSection
        id="components"
        title="Component audit"
        subtitle="The repeating editorial primitives. Spec the variants before build."
      >
        <DCArtboard id="episode-card" label="07 · Episode card · 5 variants" width={1240} height={920}>
          <EpisodeCardVariants/>
        </DCArtboard>
        <DCArtboard id="primitives" label="08 · Editorial primitives" width={1240} height={840}>
          <OtherComponents/>
        </DCArtboard>
        <DCArtboard id="viz" label="09 · Data viz house style" width={1240} height={780}>
          <DataVizStyle/>
        </DCArtboard>
      </DCSection>

      {/* STRESS TESTS */}
      <DCSection
        id="stress"
        title="Real-content stress tests"
        subtitle="The wireframes work with placeholder copy. These check they survive real life."
      >
        <DCArtboard id="hero-stress" label="10 · Hero · headlines + languages" width={1240} height={1100}>
          <StressTestHero/>
        </DCArtboard>
        <DCArtboard id="card-stress" label="11 · Cards · edge cases" width={1240} height={780}>
          <StressTestCards/>
        </DCArtboard>
      </DCSection>

      {/* A11Y + STATES + SCOPE */}
      <DCSection
        id="ship"
        title="Accessibility, states, scope"
        subtitle="What it means to actually ship the thing."
      >
        <DCArtboard id="a11y" label="12 · Accessibility & i18n" width={1240} height={820}>
          <Accessibility/>
        </DCArtboard>
        <DCArtboard id="states" label="13 · Empty · Loading · Error · 404 · Form" width={1240} height={780}>
          <States/>
        </DCArtboard>
        <DCArtboard id="scope" label="14 · Scope · V1 / V1.1 / Later" width={1240} height={820}>
          <ScopeBoundary/>
        </DCArtboard>

        <DCPostIt rotate={4} width={260}>
          When you're ready, the next round can be:<br/><br/>
          <b>1.</b> Polish the Hi-Fi homepage against this brief<br/>
          <b>2.</b> Mock the inner-page templates (Episode, Essay, Country)<br/>
          <b>3.</b> Mobile hi-fi for the v1 surfaces<br/>
          <b>4.</b> Start the build — once these decisions are locked
        </DCPostIt>
      </DCSection>

    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('design-canvas-root')).render(<App />);
