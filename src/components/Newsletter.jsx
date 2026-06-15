import { useState } from 'react';
import { FONT } from './ui';
import { SITE } from '../data/site';

// Reusable newsletter form.
// - If SITE.newsletterAction is set, it posts to that provider URL (Buttondown,
//   Mailchimp, ConvertKit, etc).
// - Otherwise it simulates a successful subscription client-side so the UX is real
//   while you wire up a provider.
export default function Newsletter({ dark = true }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | done | error

  const onLight = !dark;
  const inputBorder = onLight ? 'var(--ca-rule)' : 'rgba(246,241,228,0.35)';
  const inputBg = onLight ? '#fff' : 'rgba(246,241,228,0.08)';
  const inputColor = onLight ? 'var(--ca-ink)' : 'var(--ca-ivory)';

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      if (SITE.newsletterAction) {
        await fetch(SITE.newsletterAction, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ email }).toString(),
        });
      } else {
        await new Promise((r) => setTimeout(r, 600)); // simulate
      }
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p style={{ fontFamily: FONT.sans, fontSize: 15, color: dark ? 'var(--ca-brass-300)' : 'var(--ca-jade-700)', margin: 0 }}>
        ✓ You’re on the list. Look out for the next brief.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
      <label htmlFor="nl-email" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
        Email address
      </label>
      <input
        id="nl-email"
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
        placeholder="your@email.com"
        style={{
          fontFamily: FONT.sans,
          padding: '12px 18px',
          border: `1.5px solid ${status === 'error' ? 'var(--ca-terra-500)' : inputBorder}`,
          background: inputBg,
          color: inputColor,
          borderRadius: 3,
          fontSize: 14,
          minWidth: 260,
          flex: '1 1 260px',
          maxWidth: 360,
          outline: 'none',
        }}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          fontFamily: FONT.sans,
          padding: '12px 28px',
          background: 'var(--ca-brass-500)',
          border: 'none',
          color: 'var(--ca-obsidian)',
          cursor: status === 'submitting' ? 'wait' : 'pointer',
          borderRadius: 3,
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p style={{ flexBasis: '100%', textAlign: 'center', fontFamily: FONT.sans, fontSize: 13, color: dark ? 'var(--ca-brass-300)' : 'var(--ca-terra-600)', margin: '4px 0 0' }}>
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
