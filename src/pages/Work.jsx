import { Container, useViewport } from '../components/ui';
import PageHero from '../components/PageHero';
import PillarCard from '../components/PillarCard';
import { PILLARS } from '../data/pillars';

export default function Work() {
  const { isMobile, isTablet } = useViewport();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <>
      <PageHero
        eyebrow="The Work · Six Pillars"
        title="One continental story, examined through six pillars"
        intro="Each pillar is a dimension of Africa's constitutional and economic future. Together they form a single lens: how the rules a society chooses shape the prosperity it can build."
      />
      <section style={{ background: 'var(--ca-ivory)' }}>
        <Container style={{ padding: isMobile ? '40px 24px 64px' : '72px 56px 104px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: cols, border: '1px solid var(--ca-rule)', borderBottom: 'none' }}>
            {PILLARS.map((p, i) => (
              <div key={p.id} style={{ borderRight: '1px solid var(--ca-rule)', borderBottom: '1px solid var(--ca-rule)' }}>
                <PillarCard pillar={p} index={i} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
