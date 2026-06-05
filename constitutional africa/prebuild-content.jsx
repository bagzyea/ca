// Pre-build · CONTENT MODEL · TAXONOMY · IMAGERY STRATEGY

// ───────────────── Content Model ─────────────────
const ContentModel = () => {
  const types = [
    {
      name: 'Episode',
      slug: '/podcast/:slug',
      tone: 'indigo',
      req: ['title', 'slug', 'season + number', 'publish date', 'audio file or embed', 'duration', 'description (160 char)', 'cover image', 'transcript'],
      opt: ['chapter markers', 'video url', 'related papers', 'related insights'],
      rels: ['Person (guest, host)', 'Country (topic)', 'Pillar (ACE)', 'Tag (theme)'],
      use: ['Podcast index', 'Home latest strip', 'Player metadata', 'OG / Apple Podcasts'],
    },
    {
      name: 'Insight / Essay',
      slug: '/insights/:slug',
      tone: 'brass',
      req: ['title', 'slug', 'publish date', 'author (Person)', 'body (markdown)', 'reading time (auto)', 'lead image', 'excerpt (240 char)'],
      opt: ['translator', 'cover variant for OG', 'pull quotes', 'footnotes', 'citation export'],
      rels: ['Person (author)', 'Country', 'Pillar', 'Tag', 'Related insights', 'Related episodes'],
      use: ['Insights index', 'Home features grid', 'Country / Pillar pages'],
    },
    {
      name: 'Working Paper',
      slug: '/ace/papers/:id',
      tone: 'jade',
      req: ['paper id (WP/NN/YYYY)', 'title', 'authors[]', 'publish date', 'abstract', 'PDF file', 'pillar', 'citation block'],
      opt: ['DOI', 'data appendix', 'errata log', 'translated abstract (FR/SW)'],
      rels: ['Person (authors)', 'Pillar', 'Country', 'Cited-by (other papers)'],
      use: ['ACE pillar pages', 'Papers index', 'Researcher landing'],
    },
    {
      name: 'Country Profile',
      slug: '/transition/:iso',
      tone: 'indigo',
      req: ['ISO-3166 code', 'name (EN/FR/SW)', 'capital', 'population', 'constitutional snapshot', 'last updated'],
      opt: ['flag SVG', 'key indicators set', 'timeline events', 'editor note'],
      rels: ['Episodes (about this country)', 'Insights', 'Papers', 'Person (correspondents)'],
      use: ['Transition map', 'Filters across the site', 'Tag in any other content type'],
    },
    {
      name: 'Person',
      slug: '— (no public profile page in v1)',
      tone: 'brass',
      req: ['name', 'role label', 'short bio (120 char)', 'affiliation'],
      opt: ['portrait', 'long bio', 'external links', 'pronouns'],
      rels: ['Episodes (guest/host)', 'Insights (author)', 'Papers (author)', 'Country (based in)'],
      use: ['Bylines', 'Episode guest list', 'Editorial board', 'OG card credit'],
    },
    {
      name: 'Youth Voice',
      slug: '/youth/:slug',
      tone: 'jade',
      req: ['author name + age + country', 'title', 'body', 'publish date', 'editorial note'],
      opt: ['portrait', 'audio reading'],
      rels: ['Country', 'Tag'],
      use: ['Youth Voices index', 'Featured on Home occasionally'],
    },
    {
      name: 'Pillar (ACE)',
      slug: '/ace/:slug',
      tone: 'indigo',
      req: ['name', 'slug', 'one-line', 'long description', 'order index (1–6)'],
      opt: ['cover image', 'recommended reading'],
      rels: ['Episodes', 'Insights', 'Papers'],
      use: ['ACE overview grid', 'Tag in any content', 'Reading-list groupings'],
    },
  ];

  return (
    <div style={{ background:'var(--ca-paper)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>04 · Content model · v1</div>
      <div className="ca-serif" style={{ fontSize:34, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
        Seven content types. Build the CMS once.
      </div>
      <div className="ca-sans" style={{ fontSize:13.5, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:760, lineHeight:1.55 }}>
        Every page in the prototype consumes from these — never invents new fields. Lock this before the build kicks off and the CMS implementation falls out of it.
      </div>

      <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
        {types.map(t => {
          const accent = t.tone === 'brass' ? 'var(--ca-brass-700)' : t.tone === 'jade' ? 'var(--ca-jade-700)' : 'var(--ca-indigo-700)';
          return (
            <div key={t.name} style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:18, display:'flex', flexDirection:'column' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                <div className="ca-serif" style={{ fontSize:20, fontWeight:600, color:'var(--ca-obsidian)' }}>{t.name}</div>
                <div className="ca-mono" style={{ fontSize:10, color:accent, letterSpacing:'0.14em' }}>{t.slug}</div>
              </div>
              <div style={{ height:1, background:'var(--ca-rule)', margin:'10px 0 12px' }}/>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                <div>
                  <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>REQUIRED</div>
                  <ul className="ca-sans" style={{ fontSize:11.5, color:'var(--ca-ink)', marginTop:6, paddingLeft:14, lineHeight:1.5 }}>
                    {t.req.map(x => <li key={x}>{x}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>OPTIONAL</div>
                  <ul className="ca-sans" style={{ fontSize:11.5, color:'var(--ca-ink-soft)', marginTop:6, paddingLeft:14, lineHeight:1.5 }}>
                    {t.opt.map(x => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </div>
              <div style={{ marginTop:12, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                <div>
                  <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>RELATIONSHIPS</div>
                  <div className="ca-sans" style={{ fontSize:11.5, color:'var(--ca-ink)', marginTop:6, lineHeight:1.5 }}>{t.rels.join(' · ')}</div>
                </div>
                <div>
                  <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-ink-soft)', letterSpacing:'0.18em' }}>CONSUMED BY</div>
                  <div className="ca-sans" style={{ fontSize:11.5, color:'var(--ca-ink)', marginTop:6, lineHeight:1.5 }}>{t.use.join(' · ')}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ───────────────── Taxonomy ─────────────────
const Taxonomy = () => {
  const themes = ['Federalism', 'Energy sovereignty', 'Monetary policy', 'AfCFTA', 'Land tenure', 'Diaspora & citizenship', 'Constitutionalism', 'Mineral rights', 'Climate adaptation', 'Digital infrastructure', 'Education', 'Judiciary'];
  const formats = ['Episode', 'Essay', 'Working paper', 'Country profile', 'Youth voice', 'Reading list'];
  const countries = ['NGA', 'KEN', 'ZAF', 'EGY', 'GHA', 'ETH', 'SEN', 'RWA', 'UGA', 'TZA', 'CIV', 'MAR', 'DZA', 'AGO', 'ZMB', 'BWA', '+ 39 more'];
  const pillars = [
    ['01', 'Constitutional design'],
    ['02', 'Institutions of state'],
    ['03', 'Infrastructure & energy'],
    ['04', 'Macroeconomic sovereignty'],
    ['05', 'Continental integration'],
    ['06', 'Human capital & education'],
  ];

  return (
    <div style={{ background:'var(--ca-ivory)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-ink-soft)' }}>05 · Taxonomy</div>
      <div className="ca-serif" style={{ fontSize:34, fontWeight:600, color:'var(--ca-obsidian)', marginTop:6, letterSpacing:'-0.02em' }}>
        Four controlled vocabularies. No free-text tags.
      </div>
      <div className="ca-sans" style={{ fontSize:13, color:'var(--ca-ink-soft)', marginTop:8, maxWidth:680, lineHeight:1.55 }}>
        Every chip in the prototype maps to one of these. Editorial cannot invent new tags from the CMS — they go through a controlled add.
      </div>

      <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.2em' }}>PILLAR · ACE · 6 values · ordered</div>
          <div style={{ marginTop:14, display:'flex', flexDirection:'column', gap:8 }}>
            {pillars.map(([n, name]) => (
              <div key={n} style={{ display:'flex', alignItems:'center', gap:14, padding:'8px 0', borderBottom:'1px solid var(--ca-rule)' }}>
                <div className="ca-mono" style={{ fontSize:11, color:'var(--ca-brass-700)', letterSpacing:'0.18em' }}>{n}</div>
                <div className="ca-serif" style={{ fontSize:15, fontWeight:600, color:'var(--ca-obsidian)' }}>{name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20 }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.2em' }}>FORMAT · 6 values · system-managed</div>
          <div style={{ marginTop:14, display:'flex', flexWrap:'wrap', gap:8 }}>
            {formats.map(f => (
              <span key={f} className="ca-chip" style={{ border:'1px solid var(--ca-rule)', color:'var(--ca-ink)', background:'var(--ca-paper)' }}>{f}</span>
            ))}
          </div>
          <div style={{ marginTop:24 }}>
            <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.2em' }}>COUNTRY · ISO-3166 alpha-3 · 55 values</div>
            <div style={{ marginTop:14, display:'flex', flexWrap:'wrap', gap:6 }}>
              {countries.map(c => (
                <span key={c} className="ca-chip" style={{ border:'1px solid var(--ca-rule)', color:'var(--ca-ink-soft)', background:'#fff', fontSize:9 }}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background:'#fff', border:'1px solid var(--ca-rule)', padding:20, gridColumn:'span 2' }}>
          <div className="ca-mono" style={{ fontSize:10, color:'var(--ca-indigo-700)', letterSpacing:'0.2em' }}>THEME · curated · ~24 max · editor-extensible via review</div>
          <div style={{ marginTop:14, display:'flex', flexWrap:'wrap', gap:8 }}>
            {themes.map(t => (
              <span key={t} className="ca-chip" style={{ border:'1px solid var(--ca-brass-500)', color:'var(--ca-brass-700)', background:'#fff' }}>{t}</span>
            ))}
          </div>
          <div className="ca-sans" style={{ fontSize:12, color:'var(--ca-ink-soft)', marginTop:16, lineHeight:1.5, fontStyle:'italic', maxWidth:720 }}>
            Themes are the only soft vocabulary — anything else (Pillar, Format, Country) is hard-coded into the schema. This is what keeps the chips on the homepage from drifting into chaos over six months.
          </div>
        </div>
      </div>
    </div>
  );
};

// ───────────────── Imagery Strategy ─────────────────
const ImageryStrategy = () => {
  const directions = [
    {
      tag: 'A · DOCUMENTARY',
      title: 'Photojournalism',
      desc: 'Wide-angle, available-light reportage. Parliaments, chambers, classrooms, energy infrastructure. Subjects often in the middle distance.',
      pros: ['Highest credibility', 'Reusable for OG / social', 'Pairs naturally with serif headlines'],
      cons: ['Expensive — needs commissioned photographers', 'Rights & releases', 'Hardest to sustain at cadence'],
      sources: ['Commission 3 photographers per region', 'Editorial budget ~$8k/quarter', 'Magnum / VII as gold standard'],
      bg: 'pb-img',
    },
    {
      tag: 'B · ARCHIVAL',
      title: 'Found & archival imagery',
      desc: 'Historical photographs, treaty signings, constitutional moments, treated with a fixed duotone (indigo + ivory).',
      pros: ['Affordable — public-domain sources', 'Reinforces the scholarly tone', 'Avoids representational shallowness'],
      cons: ['Reads backward-looking if overused', 'Hard for episodes about now', 'Treatment must stay consistent'],
      sources: ['IISH, AfricaMuseum, AP archive', 'Apply fixed indigo duotone in Sharp/Cloudinary'],
      bg: 'pb-img warm',
    },
    {
      tag: 'C · ILLUSTRATED PORTRAITS',
      title: 'Commissioned portraiture',
      desc: 'A small roster of African illustrators producing single-author portrait series. Used for guest covers, editorial board, founder.',
      pros: ['Distinct, ownable visual language', 'Solves the rights problem for guests', 'Pairs well with archival B-side'],
      cons: ['Style lock-in — hard to change later', 'One illustrator = bottleneck; three = inconsistency', 'No good map / data application'],
      sources: ['Commission Diana Ejaita / Olamide Akinkugbe / Wale Awoyinka type'],
      bg: 'pb-img jade',
    },
    {
      tag: 'D · DATA-FIRST',
      title: 'Editorial data viz',
      desc: 'Images are charts. A house style for maps, ranked lists, and time-series. Photography reserved for hero/podcast only.',
      pros: ['Cheapest to sustain', 'Reinforces the "constitutional economics" positioning', 'Charts are the content'],
      cons: ['Cold without portraits', 'Hard to use on social', 'Requires a data team or strict house-style doc'],
      sources: ['Adopt FT/Reuters/Datawrapper conventions', 'Lock palette to indigo+brass+jade'],
      bg: 'pb-img terra',
    },
  ];

  return (
    <div style={{ background:'var(--ca-obsidian)', color:'var(--ca-ivory)', padding:40, height:'100%', display:'flex', flexDirection:'column' }}>
      <div className="ca-eyebrow" style={{ color:'var(--ca-brass-300)' }}>06 · Imagery strategy</div>
      <div className="ca-serif" style={{ fontSize:34, fontWeight:600, marginTop:6, letterSpacing:'-0.02em' }}>
        Pick a primary, a B-side, and a hard "no".
      </div>
      <div className="ca-sans" style={{ fontSize:13, opacity:0.75, marginTop:8, maxWidth:760, lineHeight:1.55 }}>
        The biggest open question before build. The CMS, the OG cards, the social templates, even the page templates depend on which of these we commit to.
      </div>

      <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, flex:1 }}>
        {directions.map(d => (
          <div key={d.tag} style={{ display:'flex', flexDirection:'column', background:'rgba(246,241,228,0.04)', border:'1px solid rgba(246,241,228,0.15)' }}>
            <div className={d.bg} style={{ height:140 }}>
              <span className="pb-img-label">{d.tag}</span>
            </div>
            <div style={{ padding:18, display:'flex', flexDirection:'column', flex:1 }}>
              <div className="ca-serif" style={{ fontSize:20, fontWeight:600 }}>{d.title}</div>
              <div className="ca-sans" style={{ fontSize:12.5, opacity:0.85, marginTop:6, lineHeight:1.55 }}>{d.desc}</div>
              <div style={{ marginTop:14, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                <div>
                  <div className="ca-mono" style={{ fontSize:9, color:'var(--ca-jade-400)', letterSpacing:'0.18em' }}>PROS</div>
                  <ul className="ca-sans" style={{ fontSize:11, opacity:0.85, marginTop:6, paddingLeft:14, lineHeight:1.45 }}>
                    {d.pros.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="ca-mono" style={{ fontSize:9, color:'#E07A5F', letterSpacing:'0.18em' }}>CONS</div>
                  <ul className="ca-sans" style={{ fontSize:11, opacity:0.75, marginTop:6, paddingLeft:14, lineHeight:1.45 }}>
                    {d.cons.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
              <div style={{ marginTop:'auto', paddingTop:12, borderTop:'1px solid rgba(246,241,228,0.15)' }}>
                <div className="ca-mono" style={{ fontSize:9, opacity:0.7, letterSpacing:'0.18em' }}>HOW WE\u2019D SOURCE</div>
                <div className="ca-sans" style={{ fontSize:11, opacity:0.85, marginTop:5, lineHeight:1.5 }}>{d.sources.join(' · ')}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop:18, padding:18, background:'var(--ca-brass-500)', color:'var(--ca-obsidian)' }}>
        <div className="ca-mono" style={{ fontSize:10, letterSpacing:'0.18em' }}>RECOMMENDED</div>
        <div className="ca-serif" style={{ fontSize:18, fontWeight:600, marginTop:6, lineHeight:1.35 }}>
          Primary: <b>B · Archival</b> with fixed indigo duotone — affordable, scholarly, distinctive. B-side: <b>C · Illustrated portraits</b> for guests & board. Hard no: stock photography, ever.
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { ContentModel, Taxonomy, ImageryStrategy });
