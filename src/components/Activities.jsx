import React from 'react';

const activities = [
  { title: 'VR Simulations', desc: 'Practice real-world scenarios in virtual markets and cafes.', icon: '👓' },
  { title: 'Cultural Puzzles', desc: 'Solve mysteries from around the world using your new skills.', icon: '🧩' },
  { title: 'Podcast Studio', desc: 'Record and review your pronunciation with native coaches.', icon: '🎙️' }
];

export default function Activities() {
  return (
    <section id="activities" className="activities-section premium-padding" style={{ padding: '8rem 0', background: 'var(--glass-bg)' }}>
      <div className="container">
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Learning Beyond Lexicon</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {activities.map(act => (
            <div key={act.title} className="glass" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{act.icon}</div>
              <h3>{act.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>{act.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
