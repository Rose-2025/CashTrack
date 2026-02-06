import React from 'react';
import cashPic from './cashPic.png';

const styles = {
  container: {
    maxWidth: 960,
    margin: '32px auto',
    padding: '24px',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: 12,
    color: 'var(--text-cream)',
    boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
  },
  header: { textAlign: 'center', marginBottom: 20 },
  title: { fontSize: 28, margin: 0 },
  tagline: { color: 'var(--text-cream)', opacity: 0.9, marginTop: 8 },
  contentRow: { display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' },
  textCol: { flex: '1 1 420px', minWidth: 280 },
  aside: { width: 240, flex: '0 0 240px', textAlign: 'center' },
  img: { maxWidth: '100%', height: 'auto', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)' },
  sectionTitle: { fontSize: 18, margin: '16px 0 8px' },
  list: { paddingLeft: 18, lineHeight: 1.6 },
  footer: { marginTop: 24, textAlign: 'center', color: 'rgba(243,229,171,0.8)' },
};

function About() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About CashTrack</h1>
        <p style={styles.tagline}>Clear, simple finance tracking for daily businesses and traders.</p>
      </header>

      <div style={styles.contentRow}>
        <div style={styles.textCol}>
          <p>
            CashTrack helps small business owners and daily traders clearly understand their money — not just how much comes in,
            but what they actually keep. We separate Cash on Hand from Bank/Digital balances, making it easy to see true daily
            profitability and track personal withdrawals.
          </p>

          <h2 style={styles.sectionTitle}>How CashTrack Helps</h2>
          <ul style={styles.list}>
            <li>Separate Cash & Bank balances so your reports reflect real cash flow.</li>
            <li>Daily check-ins and end-of-day summaries to make bookkeeping effortless.</li>
            <li>Simple tools to record personal withdrawals, loans, and money owed.</li>
          </ul>

          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p>
            To empower everyday entrepreneurs with a lightweight, user-friendly tool that turns daily transactions into clear
            financial insight — so you always know whether you’re up or down, and why.
          </p>
        </div>

        <aside style={styles.aside}>
          <img src={cashPic} alt="CashTrack illustration" style={styles.img} />
          <p style={{ marginTop: 12, fontSize: 13, opacity: 0.9 }}>Visualize your money at a glance</p>
        </aside>
      </div>

      <footer style={styles.footer}>
        <small>&copy; 2026 CashTrack. All rights reserved.</small>
      </footer>
    </main>
  );
}

export default About;