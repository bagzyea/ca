// Hi-fi Round 1 — composer
const { DesignCanvas, DCSection, DCArtboard, DCPostIt } = window;

function App() {
  return (
    <DesignCanvas>

      {/* INTRO */}
      <DCSection
        id="intro"
        title="Constitutional Africa · Hi-Fi Round 1"
        subtitle="Meridian refined · Constitutional Indigo · Homepage A (editorial) · ACE Framework — based on your selections from round 1."
      >
        <DCArtboard id="brief" label="What's in this round" width={920} height={520}>
          <div style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:48, height:'100%', display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', right:-100, top:-60, opacity:0.08 }}>
              <MeridianMark size={460} color="#F6F1E4" />
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div>
                <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-300)', letterSpacing:'0.24em' }}>HI-FI · ROUND 1</div>
                <div className="ca-serif" style={{ fontSize:38, fontWeight:600, marginTop:8, letterSpacing:'-0.02em' }}>From wireframes to a system.</div>
              </div>
              <MeridianMark size={72} color="#F6F1E4" accent="#C6A050" />
            </div>

            <div style={{ marginTop:32, display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, flex:1 }}>
              <div>
                <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>YOUR SELECTIONS</div>
                <ol style={{ marginTop:14, paddingLeft:18, lineHeight:1.7, fontFamily:'IBM Plex Sans', fontSize:14 }}>
                  <li>Logo · <b>Meridian</b> — refined here</li>
                  <li>Palette · <b>Constitutional Indigo</b></li>
                  <li>Typography · <b>UI Sans</b> (Plex Sans-led)</li>
                  <li>Architecture · <b>Sitemap v0.1</b></li>
                  <li>Homepage · <b>Variant A (Editorial)</b></li>
                  <li>Inner page · <b>ACE Framework</b></li>
                </ol>
              </div>
              <div>
                <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>SECTIONS IN THIS DOC</div>
                <ol style={{ marginTop:14, paddingLeft:18, lineHeight:1.7, fontFamily:'IBM Plex Sans', fontSize:14 }}>
                  <li>Meridian — mark variations</li>
                  <li>Meridian — lockups</li>
                  <li>Meridian — applications & motion</li>
                  <li>Constitutional Indigo — token system</li>
                  <li>Homepage · Variant A (full page)</li>
                  <li>ACE Framework (full page)</li>
                </ol>
                <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em', marginTop:18 }}>
                  TIP · DRILL IN WITH THE ⤢ ICON ON ANY ARTBOARD
                </div>
              </div>
            </div>
          </div>
        </DCArtboard>
      </DCSection>

      {/* MERIDIAN — LOGO SYSTEM */}
      <DCSection
        id="meridian"
        title="Meridian — refined system"
        subtitle="The C, the meridian, the north star. Five variations, four lockups, applications at scale."
      >
        <DCArtboard id="mark-sheet" label="Mark · variations" width={1240} height={780}>
          <MeridianMarkSheet />
        </DCArtboard>
        <DCArtboard id="lockups" label="Lockups · wordmark system" width={1240} height={780}>
          <MeridianLockups />
        </DCArtboard>
        <DCArtboard id="applications" label="Applications · at scale" width={1240} height={780}>
          <MeridianApplications />
        </DCArtboard>
      </DCSection>

      {/* INDIGO PALETTE */}
      <DCSection
        id="indigo"
        title="Constitutional Indigo — token system"
        subtitle="Five core colours, scales, contrast, and the 60 / 30 / 10 usage ratio in action."
      >
        <DCArtboard id="tokens" label="Tokens · scales · usage" width={1240} height={840}>
          <IndigoSystem />
        </DCArtboard>
      </DCSection>

      {/* HOMEPAGE */}
      <DCSection
        id="home"
        title="Homepage · Variant A (Editorial) — hi-fi"
        subtitle="The full scroll. Open it fullscreen with ⤢ to see the full layout end-to-end."
      >
        <DCArtboard id="home-a-hifi" label="Homepage · Variant A" width={1440} height={3400}>
          <HiFiHomeA />
        </DCArtboard>
      </DCSection>

      {/* ACE */}
      <DCSection
        id="ace"
        title="African Constitutional Economics — hi-fi"
        subtitle="The framework page. Thesis → six pillars → circuit diagram → working papers → contributors → CTA."
      >
        <DCArtboard id="ace-hifi" label="ACE Framework" width={1440} height={4200}>
          <HiFiACE />
        </DCArtboard>

        <DCPostIt rotate={3} width={240}>
          Next round options:<br/><br/>
          <b>1.</b> Another inner page (Podcast, About, Insights, Youth Voices)<br/>
          <b>2.</b> Mobile hi-fi for Home + Podcast<br/>
          <b>3.</b> Social/podcast templates + brand kit<br/>
          <b>4.</b> Tighten anything you've seen
        </DCPostIt>
      </DCSection>

    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('design-canvas-root')).render(<App />);
