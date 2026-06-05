// Hi-fi · ACE Framework page.
// Constitutional Indigo palette + Plex Sans dominant.

// — Hero —
const ACEHero = () => (
  <section style={{ background:'var(--ca-indigo-700)', color:'var(--ca-ivory)', padding:'88px 56px 72px', position:'relative', overflow:'hidden' }}>
    {/* Background mark */}
    <div style={{ position:'absolute', right:-160, top:-100, opacity:0.08 }}>
      <MeridianMark size={640} color="#F6F1E4" variant="latitudes" />
    </div>

    {/* Top ledger */}
    <div style={{ display:'grid', gridTemplateColumns:'auto 1fr auto auto', gap:20, alignItems:'center', marginBottom:64, color:'rgba(246,241,228,0.7)' }}>
      <span className="ca-mono" style={{ fontSize:10, letterSpacing:'0.24em' }}>THE FRAMEWORK</span>
      <div style={{ height:1, background:'rgba(246,241,228,0.2)' }} />
      <span className="ca-mono" style={{ fontSize:10, letterSpacing:'0.24em' }}>VERSION 0.1</span>
      <span className="ca-mono" style={{ fontSize:10, letterSpacing:'0.24em' }}>MMXXVI · KAMPALA</span>
    </div>

    <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:64, alignItems:'end', position:'relative' }}>
      <div>
        <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-300)', letterSpacing:'0.26em', marginBottom:24 }}>
          AN EMERGING INTELLECTUAL FRAMEWORK
        </div>
        <h1 className="ca-sans" style={{
          fontSize:104, fontWeight:300, lineHeight:0.92, letterSpacing:'-0.035em',
          color:'var(--ca-ivory)', margin:0,
        }}>
          African<br/>
          <span style={{ fontWeight:600 }}>Constitutional</span><br/>
          <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, color:'var(--ca-brass-400)' }}>Economics.</span>
        </h1>
      </div>
      <div style={{ paddingBottom:14 }}>
        <div className="ca-serif" style={{ fontStyle:'italic', fontSize:22, lineHeight:1.4, opacity:0.95, borderLeft:'2px solid var(--ca-brass-500)', paddingLeft:20 }}>
          A working framework for how constitutional and institutional design influence Africa's economic transformation, investment climate, infrastructure and long-term prosperity.
        </div>
        <div style={{ marginTop:28, display:'flex', gap:12 }}>
          <button className="ca-btn brass" style={{ padding:'14px 22px', fontSize:13 }}>
            Read the working paper →
          </button>
          <button className="ca-btn" style={{ padding:'14px 22px', fontSize:13, color:'var(--ca-ivory)', borderColor:'var(--ca-ivory)' }}>
            Download · PDF
          </button>
        </div>
      </div>
    </div>

    {/* Bottom metadata strip */}
    <div style={{ marginTop:72, paddingTop:24, borderTop:'1px solid rgba(246,241,228,0.2)', display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:32 }}>
      {[
        ['EDITORIAL LEAD', 'Ruth Sebatindira, SC'],
        ['CONTRIBUTING THINKERS', '14 across the continent'],
        ['WORKING PAPERS', '4 published · 9 in draft'],
        ['ANCHORED IN', '6 interlocking pillars'],
      ].map(([k, v]) => (
        <div key={k}>
          <div className="ca-mono" style={{ fontSize:10, color:'rgba(246,241,228,0.6)', letterSpacing:'0.18em' }}>{k}</div>
          <div className="ca-sans" style={{ fontSize:18, fontWeight:600, marginTop:8 }}>{v}</div>
        </div>
      ))}
    </div>
  </section>
);

// — The Thesis —
const ACEThesis = () => (
  <section style={{ background:'var(--ca-paper)', padding:'96px 56px' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:80, alignItems:'start' }}>
      <div style={{ position:'sticky', top:80 }}>
        <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-700)', letterSpacing:'0.26em' }}>§ 01</div>
        <h2 className="ca-serif" style={{ fontSize:38, fontWeight:600, marginTop:14, lineHeight:1.0, letterSpacing:'-0.02em', color:'var(--ca-obsidian)' }}>
          The thesis.
        </h2>
        <div className="ca-mono" style={{ fontSize:10, marginTop:24, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>
          READING TIME · 4 MIN
        </div>
      </div>
      <div style={{ maxWidth:720 }}>
        <p className="ca-serif" style={{ fontSize:30, fontWeight:500, lineHeight:1.25, color:'var(--ca-obsidian)', margin:0, letterSpacing:'-0.005em' }}>
          The wealth of African nations is not, in the first instance, an economic question. It is a <i style={{ color:'var(--ca-indigo-700)' }}>constitutional</i> one.
        </p>
        <p className="ca-sans" style={{ fontSize:17, lineHeight:1.65, color:'var(--ca-ink)', marginTop:24 }}>
          African Constitutional Economics is a framework for thinking about how the design of constitutions, the credibility of institutions, and the physical infrastructure they make possible together determine the long-run trajectory of economic transformation.
        </p>
        <p className="ca-sans" style={{ fontSize:17, lineHeight:1.65, color:'var(--ca-ink)', marginTop:18 }}>
          It is the missing language between three rooms that rarely speak to each other: the constitutional lawyer's chamber, the development economist's seminar, and the infrastructure financier's deal table. We believe these are one conversation.
        </p>

        {/* Pull quote */}
        <div style={{ margin:'48px 0', padding:'32px 36px', background:'var(--ca-ivory)', borderLeft:'3px solid var(--ca-brass-500)' }}>
          <div className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, fontSize:26, lineHeight:1.3, color:'var(--ca-indigo-700)' }}>
            "A constitution is, before anything else, an economic instrument. It determines what can be promised — and to whom — across generations."
          </div>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', marginTop:18, letterSpacing:'0.18em' }}>
            FROM THE WORKING PAPER, § II
          </div>
        </div>

        <p className="ca-sans" style={{ fontSize:17, lineHeight:1.65, color:'var(--ca-ink)' }}>
          The framework rests on six interlocking pillars. They are not a checklist; they are a circuit. The credibility of one depends on the credibility of the others. We treat them as a single system, with implications for policy, investment, and the daily institutional craft on which a continent's future rests.
        </p>

        <div style={{ marginTop:32, display:'flex', gap:14 }}>
          <a className="ca-mono" style={{ fontSize:11, color:'var(--ca-indigo-700)', letterSpacing:'0.18em', cursor:'pointer', borderBottom:'1px solid var(--ca-indigo-700)', paddingBottom:2 }}>CONTINUE TO THE PILLARS ↓</a>
        </div>
      </div>
    </div>
  </section>
);

// — The Six Pillars —
const Pillar = ({ num, title, desc, kicker, list, img }) => (
  <article style={{ display:'grid', gridTemplateColumns:'120px 1fr 1.2fr', gap:48, alignItems:'start', padding:'56px 0', borderTop:'1px solid var(--ca-rule)' }}>
    <div>
      <div className="ca-serif" style={{ fontStyle:'italic', fontWeight:400, fontSize:88, color:'var(--ca-brass-500)', lineHeight:0.85 }}>{num}</div>
    </div>
    <div>
      <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-700)', letterSpacing:'0.24em' }}>{kicker}</div>
      <h3 className="ca-sans" style={{ fontSize:38, fontWeight:600, marginTop:8, lineHeight:1.05, letterSpacing:'-0.02em', color:'var(--ca-obsidian)' }}>{title}</h3>
      <p className="ca-sans" style={{ fontSize:15, lineHeight:1.65, color:'var(--ca-ink)', marginTop:18, maxWidth:460 }}>{desc}</p>
      <ul style={{ marginTop:20, paddingLeft:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
        {list.map(item => (
          <li key={item} className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink-soft)', display:'flex', gap:12, alignItems:'baseline' }}>
            <span className="ca-mono" style={{ fontSize:10, color:'var(--ca-brass-700)', letterSpacing:'0.1em' }}>—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <div className={`ca-img ${img.tone || ''}`} style={{ aspectRatio:'4/3' }}>
        <span className="ca-img-tag">{img.tag}</span>
        <span className="ca-img-label">{img.label}</span>
      </div>
      <div style={{ marginTop:14, display:'flex', justifyContent:'space-between' }}>
        <a className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.18em', cursor:'pointer' }}>WORKING PAPER →</a>
        <a className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', letterSpacing:'0.18em', cursor:'pointer' }}>READING LIST</a>
      </div>
    </div>
  </article>
);

const ACEPillars = () => (
  <section style={{ background:'var(--ca-ivory)', padding:'80px 56px' }}>
    <div style={{ marginBottom:24 }}>
      <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-700)', letterSpacing:'0.26em' }}>§ 02 · THE PILLARS</div>
      <h2 className="ca-sans" style={{ fontSize:54, fontWeight:300, marginTop:14, lineHeight:1.0, letterSpacing:'-0.03em', color:'var(--ca-obsidian)' }}>
        Six pillars,<br/><span style={{ fontWeight:600 }}>one circuit.</span>
      </h2>
    </div>

    {[
      {
        num:'I', kicker:'PILLAR · ONE',
        title:'Constitutional design.',
        desc:'The source code: rules, rights and the separation of powers that determine what a state can credibly promise across decades. A constitution is not a ceremony — it is the deepest layer of economic infrastructure.',
        list:[
          'Constitutional commitment & sovereign credibility',
          'Property rights, contracts, and the rule of law',
          'Federalism, devolution, and sub-national capacity',
        ],
        img:{ tag:'FIG · 01', label:'parliament chamber · accra', tone:'' },
      },
      {
        num:'II', kicker:'PILLAR · TWO',
        title:'Institutions.',
        desc:'The day-to-day craft of governance: central banks, courts, electoral commissions, statistical agencies. Capacity is a habit; accountability is a culture. Trust compounds — or it doesn\'t.',
        list:[
          'Institutional capacity & technocratic depth',
          'Accountability, audit, and the public-sector compact',
          'Civil service reform, talent and continental mobility',
        ],
        img:{ tag:'FIG · 02', label:'audit office · pretoria', tone:'warm' },
      },
      {
        num:'III', kicker:'PILLAR · THREE',
        title:'Infrastructure & energy.',
        desc:'The physical layer of sovereignty. A constitution that cannot keep the lights on, the trains running, or the ports cleared cannot keep its promises. Grid, rail, ports, water, telecoms — and the legal architecture that lets them cross borders.',
        list:[
          'Regional power pools & continental grid sovereignty',
          'Logistics corridors, ports and standard-gauge rail',
          'Concessions, off-take agreements & PPP frameworks',
        ],
        img:{ tag:'FIG · 03', label:'grid corridor · sub-saharan', tone:'jade' },
      },
      {
        num:'IV', kicker:'PILLAR · FOUR',
        title:'Technology & AI.',
        desc:'Digital public infrastructure as constitutional infrastructure. Identity, payments, data and AI now sit alongside courts and ministries as instruments of the modern state. Who governs the model weights matters as much as who governs the central bank.',
        list:[
          'Sovereign digital public infrastructure (DPI)',
          'AI governance, data localisation & cross-border flows',
          'Telecoms competition and digital inclusion',
        ],
        img:{ tag:'FIG · 04', label:'data centre · nairobi', tone:'' },
      },
      {
        num:'V', kicker:'PILLAR · FIVE',
        title:'Finance & investment.',
        desc:'Deep markets are constitutional achievements. Pension reform, capital-market depth, sovereign credit and the credibility of the central bank are the financial expression of the institutions above. Markets price institutions before they price assets.',
        list:[
          'Capital-market depth & domestic pension reform',
          'Sovereign credit, monetary credibility & exchange',
          'Blended finance, PE/VC ecosystems and AfCFTA flows',
        ],
        img:{ tag:'FIG · 05', label:'exchange floor · johannesburg', tone:'warm' },
      },
      {
        num:'VI', kicker:'PILLAR · SIX',
        title:'Continental integration.',
        desc:'The African common project: AfCFTA, freedom of movement, harmonised standards, and the political imagination that holds them together. The constitutional question of the 21st century is, in many ways, a continental one.',
        list:[
          'AfCFTA implementation & regulatory harmonisation',
          'Free movement, common visa & continental mobility',
          'Pan-African institutions, peace & security architecture',
        ],
        img:{ tag:'FIG · 06', label:'border crossing · kasumbalesa', tone:'jade' },
      },
    ].map(p => <Pillar key={p.num} {...p} />)}
  </section>
);

// — Diagram — pillars as a circuit —
const ACEDiagram = () => (
  <section style={{ background:'var(--ca-obsidian)', color:'var(--ca-ivory)', padding:'96px 56px' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:64, alignItems:'center' }}>
      <div>
        <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-300)', letterSpacing:'0.26em' }}>§ 03 · THE CIRCUIT</div>
        <h2 className="ca-sans" style={{ fontSize:46, fontWeight:600, marginTop:14, lineHeight:1.0, letterSpacing:'-0.025em' }}>
          Not a checklist — <span className="ca-serif" style={{ fontStyle:'italic', fontWeight:500, color:'var(--ca-brass-400)' }}>a circuit.</span>
        </h2>
        <p className="ca-sans" style={{ fontSize:15, lineHeight:1.65, marginTop:22, opacity:0.85, maxWidth:440 }}>
          The pillars are interdependent. Constitutional design enables institutional credibility; credibility enables infrastructure finance; infrastructure enables digital and industrial capacity; that capacity, in turn, makes integration a real continental project — which feeds back to constitutional reform.
        </p>
        <div className="ca-mono" style={{ fontSize:10, marginTop:32, color:'var(--ca-brass-300)', letterSpacing:'0.18em' }}>
          THE CIRCUIT IS THE FRAMEWORK.
        </div>
      </div>

      {/* SVG circuit diagram */}
      <div style={{ position:'relative', aspectRatio:'1/1', maxWidth:560, margin:'0 auto', width:'100%' }}>
        <svg viewBox="0 0 600 600" style={{ width:'100%', height:'100%', position:'absolute', inset:0 }}>
          {/* faint outer ring */}
          <circle cx="300" cy="300" r="240" stroke="rgba(246,241,228,0.15)" strokeWidth="1"/>
          <circle cx="300" cy="300" r="180" stroke="rgba(246,241,228,0.1)" strokeWidth="1" strokeDasharray="2 5"/>

          {/* 6 pillar nodes on a circle */}
          {[
            { i:'I',   t:'Constitutional', a:-90 },
            { i:'II',  t:'Institutions',   a:-30 },
            { i:'III', t:'Infrastructure', a:30  },
            { i:'IV',  t:'Technology',     a:90  },
            { i:'V',   t:'Finance',        a:150 },
            { i:'VI',  t:'Integration',    a:210 },
          ].map((n, idx, arr) => {
            const r = 200;
            const rad = (n.a * Math.PI) / 180;
            const x = 300 + r * Math.cos(rad);
            const y = 300 + r * Math.sin(rad);
            // connecting arc to next node
            const next = arr[(idx + 1) % arr.length];
            const radN = (next.a * Math.PI) / 180;
            const x2 = 300 + r * Math.cos(radN);
            const y2 = 300 + r * Math.sin(radN);
            return (
              <g key={n.i}>
                <path d={`M ${x} ${y} A ${r} ${r} 0 0 1 ${x2} ${y2}`} stroke="var(--ca-brass-500)" strokeWidth="1.5" fill="none" opacity="0.5"/>
                <circle cx={x} cy={y} r="38" fill="var(--ca-indigo-800)" stroke="var(--ca-brass-500)" strokeWidth="1.5"/>
                <text x={x} y={y - 2} textAnchor="middle" fontFamily="IBM Plex Serif" fontStyle="italic" fontSize="20" fontWeight="500" fill="var(--ca-brass-400)">{n.i}</text>
                <text x={x} y={y + 14} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="rgba(246,241,228,0.85)" letterSpacing="1.5">{n.t.toUpperCase()}</text>
              </g>
            );
          })}

          {/* center: ACE */}
          <circle cx="300" cy="300" r="76" fill="var(--ca-indigo-700)" stroke="var(--ca-brass-500)" strokeWidth="2"/>
          <text x="300" y="288" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="var(--ca-brass-300)" letterSpacing="2.5">FRAMEWORK</text>
          <text x="300" y="310" textAnchor="middle" fontFamily="IBM Plex Serif" fontSize="26" fontWeight="600" fontStyle="italic" fill="var(--ca-ivory)">ACE</text>
          <text x="300" y="328" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="8" fill="rgba(246,241,228,0.7)" letterSpacing="1.5">v0.1 · 2026</text>
        </svg>
      </div>
    </div>
  </section>
);

// — Working papers list —
const ACEWorkingPapers = () => (
  <section style={{ background:'var(--ca-paper)', padding:'96px 56px' }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:40 }}>
      <div>
        <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-700)', letterSpacing:'0.26em' }}>§ 04 · PUBLICATIONS</div>
        <h2 className="ca-sans" style={{ fontSize:46, fontWeight:600, marginTop:14, lineHeight:1.0, letterSpacing:'-0.025em', color:'var(--ca-obsidian)' }}>
          Working papers & reading list.
        </h2>
      </div>
      <a className="ca-mono" style={{ fontSize:11, color:'var(--ca-indigo-700)', letterSpacing:'0.2em', cursor:'pointer' }}>FULL ARCHIVE →</a>
    </div>

    {/* Filter row */}
    <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
      {['All', 'Constitutional', 'Institutions', 'Infrastructure', 'Technology & AI', 'Finance', 'Integration'].map((t, i) => (
        <span key={t} className="ca-pill" style={{
          color: i === 0 ? 'var(--ca-ivory)' : 'var(--ca-ink)',
          background: i === 0 ? 'var(--ca-indigo-700)' : 'transparent',
          borderColor: i === 0 ? 'var(--ca-indigo-700)' : 'var(--ca-ink-soft)',
        }}>{t}</span>
      ))}
    </div>

    {[
      { ref:'WP · 04 / 2026', title:'Energy sovereignty and the next constitutional frontier.', author:'Adaeze Obiora', pillar:'INFRASTRUCTURE', length:'24p' },
      { ref:'WP · 03 / 2026', title:'Sovereign credibility as a constitutional achievement.', author:'Dr. Samuel Kamau', pillar:'FINANCE', length:'31p' },
      { ref:'WP · 02 / 2026', title:'The harmonisation problem — AfCFTA at five.', author:'Prof. Chinedu Okolo', pillar:'INTEGRATION', length:'42p' },
      { ref:'WP · 01 / 2026', title:'A framework for the constitutional century.', author:'Ruth Sebatindira, SC', pillar:'FRAMEWORK', length:'18p' },
    ].map(p => (
      <article key={p.ref} style={{
        display:'grid', gridTemplateColumns:'120px 1fr 200px 90px 80px 60px',
        gap:24, alignItems:'center',
        padding:'24px 0', borderTop:'1px solid var(--ca-rule)',
      }}>
        <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-ink-soft)', letterSpacing:'0.14em' }}>{p.ref}</div>
        <div>
          <h4 className="ca-serif" style={{ fontSize:21, fontWeight:600, color:'var(--ca-obsidian)', margin:0, lineHeight:1.25 }}>{p.title}</h4>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', marginTop:6, letterSpacing:'0.14em' }}>BY {p.author.toUpperCase()}</div>
        </div>
        <span className="ca-chip" style={{ background:'transparent', color:'var(--ca-brass-700)', border:'1px solid var(--ca-brass-500)', justifySelf:'start' }}>{p.pillar}</span>
        <span className="ca-mono" style={{ fontSize:11, color:'var(--ca-ink-soft)' }}>{p.length}</span>
        <span className="ca-mono" style={{ fontSize:11, color:'var(--ca-ink-soft)' }}>PDF</span>
        <a className="ca-mono" style={{ fontSize:11, color:'var(--ca-indigo-700)', letterSpacing:'0.14em', cursor:'pointer', textAlign:'right' }}>READ →</a>
      </article>
    ))}
  </section>
);

// — Contributors —
const ACEContributors = () => (
  <section style={{ background:'var(--ca-ivory)', padding:'96px 56px', borderTop:'1px solid var(--ca-rule)' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:80, alignItems:'start' }}>
      <div>
        <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-700)', letterSpacing:'0.26em' }}>§ 05 · CONTRIBUTORS</div>
        <h2 className="ca-sans" style={{ fontSize:42, fontWeight:600, marginTop:14, lineHeight:1.0, letterSpacing:'-0.025em', color:'var(--ca-obsidian)' }}>
          The thinkers building the framework.
        </h2>
        <p className="ca-sans" style={{ fontSize:14, lineHeight:1.6, marginTop:18, color:'var(--ca-ink-soft)' }}>
          African constitutional lawyers, economists, technologists and infrastructure financiers — across 11 countries and three generations.
        </p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }}>
        {[
          { n:'Ruth Sebatindira, SC', r:'Founder · Editorial Lead', c:'KAMPALA · UG' },
          { n:'Prof. Chinedu Okolo',  r:'Constitutional Theory',     c:'IBADAN · NG' },
          { n:'Dr. Kebadi Nthatisi',  r:'AfCFTA & Trade Policy',     c:'MASERU · LS' },
          { n:'Adaeze Obiora',        r:'Energy & Infrastructure',   c:'LAGOS · NG' },
          { n:'Dr. Samuel Kamau',     r:'Sovereign Finance',          c:'NAIROBI · KE' },
          { n:'Aïssatou Diallo',      r:'Fiscal Sovereignty',         c:'DAKAR · SN' },
        ].map(p => (
          <article key={p.n}>
            <div className={`ca-img ${p.r.includes('Energy') ? 'jade' : p.r.includes('Finance') ? 'warm' : ''}`} style={{ aspectRatio:'4/5' }} />
            <div className="ca-sans" style={{ fontSize:17, fontWeight:600, marginTop:14, color:'var(--ca-obsidian)' }}>{p.n}</div>
            <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-indigo-700)', marginTop:4 }}>{p.r}</div>
            <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-ink-soft)', marginTop:6, letterSpacing:'0.16em' }}>{p.c}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// — CTA strip —
const ACECTA = () => (
  <section style={{ background:'var(--ca-brass-500)', color:'var(--ca-obsidian)', padding:'72px 56px' }}>
    <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:48, alignItems:'center' }}>
      <div>
        <div className="ca-mono" style={{ fontSize:10, letterSpacing:'0.24em' }}>JOIN THE WORK</div>
        <h2 className="ca-sans" style={{ fontSize:42, fontWeight:600, marginTop:10, lineHeight:1.0, letterSpacing:'-0.025em' }}>
          Build the framework with us.
        </h2>
        <div className="ca-sans" style={{ fontSize:15, marginTop:12, lineHeight:1.6, maxWidth:520, opacity:0.85 }}>
          We're commissioning working papers, building a roster of contributors, and convening conversations. If your work touches any of the six pillars — write to us.
        </div>
      </div>
      <div style={{ display:'flex', gap:12, justifyContent:'flex-end' }}>
        <button className="ca-btn solid" style={{ padding:'16px 24px', fontSize:13 }}>
          Submit a paper →
        </button>
        <button className="ca-btn" style={{ padding:'16px 24px', fontSize:13, color:'var(--ca-obsidian)', borderColor:'var(--ca-obsidian)' }}>
          Contact editorial
        </button>
      </div>
    </div>
  </section>
);

// — Page composition —
const HiFiACE = () => (
  <div style={{ background:'var(--ca-ivory)', minHeight:'100%' }}>
    <HiFiNav active="ACE Framework" />
    <ACEHero />
    <ACEThesis />
    <ACEPillars />
    <ACEDiagram />
    <ACEWorkingPapers />
    <ACEContributors />
    <ACECTA />
    <HiFiFooter />
  </div>
);

Object.assign(window, { HiFiACE });
