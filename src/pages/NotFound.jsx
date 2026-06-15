import { Link } from 'react-router-dom';
import { FONT, Container, Button } from '../components/ui';
import MeridianMark from '../components/MeridianMark';

export default function NotFound() {
  return (
    <section style={{ background: 'var(--ca-ivory)', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Container style={{ textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, opacity: 0.4 }}>
          <MeridianMark size={64} color="var(--ca-indigo-700)" variant="sealed" />
        </div>
        <h1 style={{ fontFamily: FONT.serif, fontSize: 48, fontWeight: 400, color: 'var(--ca-obsidian)', margin: '0 0 12px' }}>Page not found</h1>
        <p style={{ fontFamily: FONT.sans, fontSize: 16, color: 'var(--ca-ink-soft)', margin: '0 0 32px' }}>
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Button as={Link} to="/" variant="indigo">Return home</Button>
      </Container>
    </section>
  );
}
