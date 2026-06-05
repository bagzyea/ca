// Constitutional Africa — Wireframe deck composition.
// Loads all artboards into a DesignCanvas with sections.

const { DesignCanvas, DCSection, DCArtboard, DCPostIt } = window;

function App() {
  return (
    <DesignCanvas>

      {/* ============ INTRO ============ */}
      <DCSection id="intro" title="Constitutional Africa · Wireframes & Brand Direction" subtitle="Initial low-fi exploration · b&w with selective color · 8 areas → drill into any board with the ⤢ icon">
        <DCArtboard id="brief" label="Brief · context" width={780} height={520}>
          <div style={{ padding:36, background:'#faf7f0', height:'100%', display:'flex', flexDirection:'column' }}>
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
              <div>
                <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:10, color:'#5a544b', letterSpacing:'0.16em' }}>WIREFRAME ROUND · 01</div>
                <div style={{ fontFamily:'IBM Plex Serif, serif', fontSize:32, fontWeight:700, marginTop:6, lineHeight:1.05 }}>
                  Constitutional Africa
                </div>
                <div style={{ fontFamily:'Kalam, cursive', fontSize:20, marginTop:4, color:'#7a6b4a' }}>
                  ideas · institutions · infrastructure · integration
                </div>
              </div>
              <div className="wf-handwrite" style={{ fontSize:20, color:'#b25a32', maxWidth:200, textAlign:'right' }}>
                a low-fi sweep to lock in the<br/>aesthetic & architecture
              </div>
            </div>
            <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
              <div>
                <LabelU>The platform</LabelU>
                <div style={{ marginTop:10, fontFamily:'IBM Plex Sans, sans-serif', fontSize:13, lineHeight:1.55 }}>
                  A serious African intellectual platform operating through a podcast,
                  digital media, strategic analysis, and an emerging framework — <i>African Constitutional Economics</i>.
                  Not a casual podcast blog; closer to a continental policy institute.
                </div>
              </div>
              <div>
                <LabelU>This document covers</LabelU>
                <ol style={{ marginTop:10, fontFamily:'IBM Plex Sans, sans-serif', fontSize:13, lineHeight:1.7, paddingLeft:18 }}>
                  <li>4 logo directions (drill in to view)</li>
                  <li>3 colour-palette explorations</li>
                  <li>Typography direction</li>
                  <li>Sitemap & information architecture</li>
                  <li>2 homepage layout variants (A · editorial / B · institutional)</li>
                  <li>Key inner pages — About, Podcast, ACE framework, Insights</li>
                  <li>Mobile screens — Homepage & Podcast player</li>
                </ol>
              </div>
            </div>
            <div style={{ marginTop:'auto', borderTop:'1px dashed #1a1612', paddingTop:14, display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
              {[
                ['SERIOUSNESS', 'continental policy institute'],
                ['IDENTITY', 'modern African, pan-african'],
                ['DEPTH', 'intellectual & strategic'],
                ['ACCESS', 'youthful · digital-first · mobile'],
              ].map(([k,v]) => (
                <div key={k}>
                  <div style={{ fontFamily:'IBM Plex Mono, monospace', fontSize:9, fontWeight:600, letterSpacing:'0.1em' }}>{k}</div>
                  <div style={{ fontFamily:'IBM Plex Sans, sans-serif', fontSize:11, color:'#5a544b', marginTop:3 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </DCArtboard>

        <DCPostIt rotate={-3} width={220}>
          Wireframes are intentionally rough — we're locking in <b>structure & vibe</b>, not pixels.
          Comment freely; we'll pick winners and move to hi-fi.
        </DCPostIt>
      </DCSection>

      {/* ============ LOGOS ============ */}
      <DCSection id="logos" title="Logo concepts" subtitle="Four directions across a credibility ↔ youth axis. Pillar = most institutional; Sahel chip pairs = most youthful.">
        <DCArtboard id="logo-01" label="01 · Pillar" width={420} height={320}><LogoPillar /></DCArtboard>
        <DCArtboard id="logo-02" label="02 · Aperture" width={420} height={320}><LogoAperture /></DCArtboard>
        <DCArtboard id="logo-03" label="03 · Meridian" width={420} height={320}><LogoMeridian /></DCArtboard>
        <DCArtboard id="logo-04" label="04 · Monogram seal" width={420} height={320}><LogoMonogram /></DCArtboard>
      </DCSection>

      {/* ============ PALETTES ============ */}
      <DCSection id="palettes" title="Colour palette explorations" subtitle="Each draws from pan-african heritage colours — original to Constitutional Africa, not borrowed from any institution.">
        <DCArtboard id="pal-01" label="01 · Sovereign Forest" width={620} height={460}><Palette1 /></DCArtboard>
        <DCArtboard id="pal-02" label="02 · Constitutional Indigo" width={620} height={460}><Palette2 /></DCArtboard>
        <DCArtboard id="pal-03" label="03 · Sahel Modern" width={620} height={460}><Palette3 /></DCArtboard>
      </DCSection>

      {/* ============ TYPE + SITEMAP ============ */}
      <DCSection id="system" title="Type system & sitemap" subtitle="Editorial-grade type pairing + the information architecture in three clusters.">
        <DCArtboard id="type" label="Typography direction" width={760} height={500}><TypeSystem /></DCArtboard>
        <DCArtboard id="sitemap" label="Sitemap · v0.1" width={920} height={620}><Sitemap /></DCArtboard>
      </DCSection>

      {/* ============ HOMEPAGE VARIANTS ============ */}
      <DCSection id="home" title="Homepage — two layout variants" subtitle="A · Editorial / magazine-like, conversational. &nbsp; B · Institutional / publication-grade, more typographic. Open either fullscreen to scroll the whole layout.">
        <DCArtboard id="home-a" label="Variant A · Editorial" width={1280} height={2200}><HomeA /></DCArtboard>
        <DCArtboard id="home-b" label="Variant B · Institutional" width={1280} height={2200}><HomeB /></DCArtboard>
      </DCSection>

      {/* ============ INNER PAGES ============ */}
      <DCSection id="inner" title="Inner pages" subtitle="About, Podcast index, ACE framework, Insights. Same chrome across all — uses the system from sections above.">
        <DCArtboard id="about" label="About" width={1280} height={1600}><PageAbout /></DCArtboard>
        <DCArtboard id="podcast" label="Podcast · Index" width={1280} height={1800}><PagePodcast /></DCArtboard>
        <DCArtboard id="ace" label="ACE Framework" width={1280} height={1700}><PageACE /></DCArtboard>
        <DCArtboard id="insights" label="Insights" width={1280} height={1500}><PageInsights /></DCArtboard>
      </DCSection>

      {/* ============ MOBILE ============ */}
      <DCSection id="mobile" title="Mobile views" subtitle="Africa is mobile-first. Homepage feed + native-feeling podcast player.">
        <DCArtboard id="m-home" label="Mobile · Home" width={360} height={720}><MobileHome /></DCArtboard>
        <DCArtboard id="m-pod" label="Mobile · Podcast player" width={360} height={720}><MobilePodcast /></DCArtboard>

        <DCPostIt rotate={3} width={220}>
          Next round: pick winning <b>logo direction</b> + <b>palette</b>,
          then I'll move home + 1 inner page to hi-fi with real imagery.
        </DCPostIt>
      </DCSection>

    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('design-canvas-root')).render(<App />);
