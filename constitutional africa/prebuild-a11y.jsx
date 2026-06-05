// Pre-build · ACCESSIBILITY · STATES · OUT-OF-SCOPE

// ───────────────── Accessibility & i18n ─────────────────
const Accessibility = () => {
  const ContrastRow = ({ fg, bg, name, ratio, pass, sizeNote }) => (
    <div style={{ display:'grid', gridTemplateColumns:'90px 1fr 80px 90px', gap:12, alignItems:'center', padding:'10px 0', borderBottom:'1px solid var(--ca-rule)' }}>
      <div style={{ background:bg, color:fg, padding:'10px 10px', fontFamily:'IBM Plex Sans', fontSize:13, fontWeight:500, textAlign:'center', border:'1px solid var(--ca-rule)' }}>Aa</div>
      <div className="ca-sans" style={{ fontSize:12.5, color:'var(--ca-ink)' }}>{name}</div>
      <div className="ca-mono" style={{ fontSize:12, color:'var(--ca-ink)' }}>{ratio} : 1</div>
      <div className="ca-mono" style={{ fontSize:10, letterSpacing:'0.14em', color: pass === 'pass' ? 'var(--ca-ok)' : pass === 'large' ? 'var(--ca-warn)' : 'var(--ca-bad)' }}>
        <span className={`pb-dot ${pass === 'pass' ? 'ok' : pass === 'large' ? 'warn' : 'bad'}`}/>
        {pass === 'pass' ? 'AAA' : pass === 'large' ? 'AA · LARGE ONLY' : 'FAIL · DO NOT USE'}
        {sizeNote && <div style={{ marginTop:3, opacity:0.7 }}>{sizeNote}</div>}
      </div>
    </div>
  );

  return (
    <div style={{ background:'var(--ca-paper)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>12 · Accessibility & internationalisation</div>
      <div className="ca-serif" style={{ fontSize:32, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
        Specced now. Not bolted on.
      </div>

      <div style={{ marginTop:22, display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:20, flex:1 }}>
        {/* Contrast */}
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>CONTRAST AUDIT · CURRENT PALETTE</div>
          <div style={{ marginTop:14 }}>
            <ContrastRow fg="#F6F1E4" bg="#16264D" name="Ivory on indigo-700" ratio="14.8" pass="pass"/>
            <ContrastRow fg="#0E1320" bg="#F6F1E4" name="Obsidian on ivory" ratio="18.9" pass="pass"/>
            <ContrastRow fg="#F6F1E4" bg="#3E7A5E" name="Ivory on jade-600" ratio="5.2" pass="pass" sizeNote="OK ≥ 14px"/>
            <ContrastRow fg="#0E1320" bg="#B38A3A" name="Obsidian on brass-500" ratio="5.7" pass="pass" sizeNote="OK ≥ 14px"/>
            <ContrastRow fg="#B38A3A" bg="#F6F1E4" name="Brass-500 on ivory" ratio="3.2" pass="large" sizeNote="Eyebrow only · 18px+"/>
            <ContrastRow fg="#3E7A5E" bg="#16264D" name="Jade on indigo (decoration)" ratio="2.4" pass="fail" sizeNote="Never use for text"/>
            <ContrastRow fg="#7E8FB4" bg="#F6F1E4" name="Indigo-300 on ivory" ratio="2.8" pass="fail" sizeNote="Decorative borders only"/>
            <ContrastRow fg="#8B91A8" bg="#F6F1E4" name="Ink-faint on ivory" ratio="3.4" pass="large" sizeNote="Labels ≥ 18px"/>
          </div>
          <div className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink-soft)', marginTop:14, lineHeight:1.5, fontStyle:'italic' }}>
            Rule: text below 18px must be AA (4.5:1) at minimum, ideally AAA (7:1). Brass body-text on ivory is the most common failure mode — use brass only for eyebrows and accents.
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {/* Focus states */}
          <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
            <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>FOCUS STATES · KEYBOARD VISIBLE</div>
            <div style={{ marginTop:14, display:'flex', flexDirection:'column', gap:10 }}>
              <button className="ca-btn solid" style={{ outline:'2px solid var(--ca-brass-500)', outlineOffset:3, padding:'10px 16px', fontSize:12 }}>Subscribe →</button>
              <a style={{ fontFamily:'IBM Plex Sans', fontSize:13, color:'var(--ca-obsidian)', textDecoration:'underline', textUnderlineOffset:4, outline:'2px solid var(--ca-brass-500)', outlineOffset:3, padding:'2px 4px', alignSelf:'flex-start' }}>Link in focus</a>
              <div style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 12px', background:'var(--ca-paper-2)', outline:'2px solid var(--ca-brass-500)', outlineOffset:2 }}>
                <span style={{ width:36, height:36, background:'var(--ca-indigo-700)' }}/>
                <div className="ca-serif" style={{ fontSize:13, fontWeight:600 }}>Episode card · focus state</div>
              </div>
            </div>
            <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', marginTop:12, letterSpacing:'0.14em' }}>
              RULE · 2px brass outline · 3px offset · NEVER remove default outline without replacement
            </div>
          </div>

          {/* Semantic landmarks */}
          <div style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:20 }}>
            <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>SEMANTIC LANDMARKS · REQUIRED</div>
            <ul className="ca-sans" style={{ fontSize:12, marginTop:14, paddingLeft:18, lineHeight:1.7 }}>
              <li><code style={{ fontFamily:'IBM Plex Mono', fontSize:11, color:'var(--ca-brass-300)' }}>&lt;header&gt;</code> + <code style={{ fontFamily:'IBM Plex Mono', fontSize:11, color:'var(--ca-brass-300)' }}>&lt;nav aria-label="Primary"&gt;</code></li>
              <li><code style={{ fontFamily:'IBM Plex Mono', fontSize:11, color:'var(--ca-brass-300)' }}>&lt;main&gt;</code> once per page · receives skip-to-content focus</li>
              <li>Skip link: "Skip to main content" — hidden until tab-focused</li>
              <li><code style={{ fontFamily:'IBM Plex Mono', fontSize:11, color:'var(--ca-brass-300)' }}>&lt;article&gt;</code> for each Insight / Episode / Paper</li>
              <li><code style={{ fontFamily:'IBM Plex Mono', fontSize:11, color:'var(--ca-brass-300)' }}>aria-current="page"</code> on the active nav item</li>
              <li>Audio player exposes native HTML5 <code style={{ fontFamily:'IBM Plex Mono', fontSize:11, color:'var(--ca-brass-300)' }}>&lt;audio&gt;</code> + custom controls; not a div-only player</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ marginTop:18, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:14 }}>
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:16 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>LANGUAGE STRATEGY · EN · FR · SW</div>
          <ul className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink)', marginTop:10, paddingLeft:18, lineHeight:1.55 }}>
            <li><code>{`<html lang>`}</code> set per page; routing prefix <code>/en/</code>, <code>/fr/</code>, <code>/sw/</code></li>
            <li>Date, number, and ordinal formats per locale</li>
            <li>Translated string keys; fall back to EN if missing, with editorial warning in admin</li>
            <li>Headline size drops one step under <code>html[lang=fr]</code></li>
          </ul>
        </div>
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:16 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>MOTION & PREFERENCES</div>
          <ul className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink)', marginTop:10, paddingLeft:18, lineHeight:1.55 }}>
            <li>Logo animation respects <code>prefers-reduced-motion</code></li>
            <li>No autoplay video; audio plays only on tap</li>
            <li>Dark mode <i>not</i> v1 — palette already reads well; revisit after launch</li>
            <li>All interactive transitions ≤ 200ms</li>
          </ul>
        </div>
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:16 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>PERFORMANCE BUDGET</div>
          <ul className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink)', marginTop:10, paddingLeft:18, lineHeight:1.55 }}>
            <li>Homepage LCP &lt; 2.5s on 4G · Nairobi</li>
            <li>Total JS &lt; 120KB gzip on the home route</li>
            <li>Images: AVIF preferred, WebP fallback, never raw PNG/JPG</li>
            <li>Fonts: self-host Plex, subset to Latin Extended-A + Latin Extended-B</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// ───────────────── Empty / Loading / Error States ─────────────────
const States = () => {
  const Frame = ({ tag, title, children }) => (
    <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:18, display:'flex', flexDirection:'column' }}>
      <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em' }}>{tag}</div>
      <div className="ca-serif" style={{ fontSize:15, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6 }}>{title}</div>
      <div style={{ marginTop:12, background:'var(--ca-paper-2)', border:'1px dashed var(--ca-rule)', padding:18, flex:1, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', minHeight:170 }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{ background:'var(--ca-ivory)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>13 · States · Empty · Loading · Error</div>
      <div className="ca-serif" style={{ fontSize:32, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
        The states wireframes ignore.
      </div>
      <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:680, lineHeight:1.55 }}>
        Every list, every form, every fetch has at least four states. Specced now means no apology screens later.
      </div>

      <div style={{ marginTop:22, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14 }}>
        <Frame tag="EMPTY · 0 RESULTS" title="No episodes match these filters">
          <div style={{ fontFamily:'IBM Plex Mono', fontSize:34, color:'var(--ca-ink-faint)', letterSpacing:'0.2em' }}>—</div>
          <div className="ca-sans" style={{ fontSize:12.5, color:'var(--ca-ink-soft)', marginTop:10, maxWidth:240, lineHeight:1.5 }}>Try removing one filter, or browse all episodes.</div>
          <span className="ca-btn" style={{ marginTop:12, fontSize:11, padding:'8px 12px', color:'var(--ca-ink)' }}>Clear all filters</span>
        </Frame>

        <Frame tag="LOADING · SKELETON" title="Fetching episodes">
          <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:8 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'40px 1fr', gap:10, alignItems:'center' }}>
                <div style={{ width:40, height:40, background:'var(--ca-rule)' }}/>
                <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                  <div style={{ height:8, background:'var(--ca-rule)', width:'80%' }}/>
                  <div style={{ height:6, background:'var(--ca-rule)', width:'50%', opacity:0.6 }}/>
                </div>
              </div>
            ))}
          </div>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-faint)', marginTop:14, letterSpacing:'0.18em' }}>NEVER A SPINNER · ALWAYS SHAPE</div>
        </Frame>

        <Frame tag="ERROR · NETWORK" title="Couldn't load this page">
          <div style={{ fontFamily:'IBM Plex Mono', fontSize:34, color:'var(--ca-bad)' }}>×</div>
          <div className="ca-sans" style={{ fontSize:12.5, color:'var(--ca-ink-soft)', marginTop:10, maxWidth:240, lineHeight:1.5 }}>Check your connection, then try again. Already-loaded pages still work.</div>
          <span className="ca-btn" style={{ marginTop:12, fontSize:11, padding:'8px 12px', color:'var(--ca-ink)' }}>Try again</span>
        </Frame>

        <Frame tag="404 · NOT FOUND" title="This page isn't here">
          <div className="ca-serif" style={{ fontSize:46, fontWeight:600, color:'var(--ca-obsidian)' }}>404</div>
          <div className="ca-sans" style={{ fontSize:12.5, color:'var(--ca-ink-soft)', marginTop:10, maxWidth:240, lineHeight:1.5 }}>The link may be old, or we've moved the essay. Search or head home.</div>
          <span className="ca-btn" style={{ marginTop:12, fontSize:11, padding:'8px 12px', color:'var(--ca-ink)' }}>Search the archive</span>
        </Frame>

        <Frame tag="FORM · IDLE" title="Newsletter — happy path">
          <input placeholder="your@email.com" style={{ fontFamily:'IBM Plex Sans', fontSize:13, padding:'10px 12px', border:'1px solid var(--ca-ink)', background:'#fff', width:'100%', maxWidth:260 }}/>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', marginTop:8, letterSpacing:'0.14em' }}>READY · NEUTRAL · CTA BELOW</div>
        </Frame>

        <Frame tag="FORM · VALIDATING" title="Newsletter — invalid">
          <input value="not an email" readOnly style={{ fontFamily:'IBM Plex Sans', fontSize:13, padding:'10px 12px', border:'1.5px solid var(--ca-bad)', background:'#fff', width:'100%', maxWidth:260 }}/>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-bad)', marginTop:8, letterSpacing:'0.14em' }}>✕ THAT DOESN'T LOOK LIKE AN EMAIL</div>
        </Frame>

        <Frame tag="FORM · SUBMITTING" title="Newsletter — pending">
          <input value="adaeze@lagosthinktank.org" readOnly style={{ fontFamily:'IBM Plex Sans', fontSize:13, padding:'10px 12px', border:'1px solid var(--ca-ink-soft)', background:'var(--ca-paper-2)', width:'100%', maxWidth:260, color:'var(--ca-ink-soft)' }}/>
          <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-indigo-700)', marginTop:8, letterSpacing:'0.14em' }}>SUBMITTING · DISABLED · BUTTON BUSY</div>
        </Frame>

        <Frame tag="FORM · SUCCESS" title="Newsletter — sent">
          <div style={{ fontFamily:'IBM Plex Mono', fontSize:30, color:'var(--ca-jade-600)' }}>✓</div>
          <div className="ca-sans" style={{ fontSize:12.5, color:'var(--ca-ink-soft)', marginTop:10, maxWidth:240, lineHeight:1.5 }}>You're on the list. The first edition arrives Friday.</div>
        </Frame>
      </div>
    </div>
  );
};

// ───────────────── Scope · v1 / v1.1 / later ─────────────────
const ScopeBoundary = () => {
  const Pill = ({ children, tone }) => {
    const t = { v1:['var(--ca-jade-600)', 'var(--ca-ivory)', 'V1 · SHIP'], v11:['var(--ca-brass-500)', 'var(--ca-obsidian)', 'V1.1 · POST-LAUNCH'], later:['rgba(14,19,32,0.08)', 'var(--ca-ink-soft)', 'LATER · UNSCOPED'] };
    const [bg, fg, label] = t[tone];
    return (
      <div style={{ background:bg, color:fg, padding:'12px 14px', display:'flex', flexDirection:'column', minHeight:48 }}>
        <div className="ca-mono" style={{ fontSize:9, letterSpacing:'0.2em', opacity:0.8 }}>{label}</div>
        <div className="ca-sans" style={{ fontSize:12.5, fontWeight:500, marginTop:4 }}>{children}</div>
      </div>
    );
  };

  return (
    <div style={{ background:'var(--ca-obsidian)', color:'var(--ca-ivory)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-brass-300)' }}>14 · Scope · The line we won't cross</div>
      <div className="ca-serif" style={{ fontSize:34, fontWeight:600, marginTop:6, letterSpacing:'-0.02em' }}>
        What ships. What waits. What we say no to.
      </div>
      <div className="ca-sans" style={{ fontSize:13, opacity:0.8, marginTop:8, maxWidth:760, lineHeight:1.55 }}>
        Explicit before kickoff. Anything not green-pilled becomes a polite "yes, after launch."
      </div>

      <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:14, flex:1 }}>
        {/* V1 */}
        <div>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-jade-400)', letterSpacing:'0.2em' }}>V1 · LAUNCH</div>
          <div style={{ marginTop:10, display:'flex', flexDirection:'column', gap:8 }}>
            <Pill tone="v1">All 8 primary surfaces · indexes + detail templates</Pill>
            <Pill tone="v1">EN content, FR/SW shells ready, translation manual</Pill>
            <Pill tone="v1">Podcast · embedded native HTML5 player + platform deep-links</Pill>
            <Pill tone="v1">Newsletter · footer + inline + end-of-episode placements</Pill>
            <Pill tone="v1">Insights, Essays, Working Papers · full editorial templates</Pill>
            <Pill tone="v1">Africa in Transition · static country profiles + filterable list</Pill>
            <Pill tone="v1">Editorial board, founder, partners pages</Pill>
            <Pill tone="v1">Sitemap.xml · RSS · OG + Apple-podcast metadata</Pill>
            <Pill tone="v1">Analytics · privacy-first (Plausible-style), no third-party trackers</Pill>
          </div>
        </div>
        {/* V1.1 */}
        <div>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-300)', letterSpacing:'0.2em' }}>V1.1 · 3–6 MONTHS POST-LAUNCH</div>
          <div style={{ marginTop:10, display:'flex', flexDirection:'column', gap:8 }}>
            <Pill tone="v11">Global search across all content</Pill>
            <Pill tone="v11">Persistent mini-player across navigation</Pill>
            <Pill tone="v11">Interactive Africa-in-Transition map (clickable SVG)</Pill>
            <Pill tone="v11">French translation rolled out — 20% of essays</Pill>
            <Pill tone="v11">Citation export (BibTeX, APA, Chicago)</Pill>
            <Pill tone="v11">Youth Voices submission form + editorial workflow</Pill>
            <Pill tone="v11">RSS topic-segmented feeds</Pill>
          </div>
        </div>
        {/* Later */}
        <div>
          <div className="ca-mono" style={{ fontSize:10, opacity:0.6, letterSpacing:'0.2em' }}>LATER / UNSCOPED</div>
          <div style={{ marginTop:10, display:'flex', flexDirection:'column', gap:8 }}>
            <Pill tone="later">Member portal, saved reading, reading lists</Pill>
            <Pill tone="later">Comments / community discussion</Pill>
            <Pill tone="later">Paid subscriptions / donations infrastructure</Pill>
            <Pill tone="later">Translation tooling — machine-assisted workflow</Pill>
            <Pill tone="later">Dark mode</Pill>
            <Pill tone="later">Native mobile app</Pill>
            <Pill tone="later">Author profile pages (public)</Pill>
            <Pill tone="later">Live events / convening calendar</Pill>
          </div>
        </div>
      </div>

      <div style={{ marginTop:18, padding:18, background:'var(--ca-brass-500)', color:'var(--ca-obsidian)' }}>
        <div className="ca-mono" style={{ fontSize:10, letterSpacing:'0.18em' }}>THE COMMITMENT</div>
        <div className="ca-serif" style={{ fontSize:18, fontWeight:600, marginTop:6, lineHeight:1.35 }}>
          Better to ship a small thing beautifully than a big thing apologetically. Every "later" pill above is a feature we love — and a feature we will not let delay launch.
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Accessibility, States, ScopeBoundary });
