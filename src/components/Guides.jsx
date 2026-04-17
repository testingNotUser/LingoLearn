import React from 'react';

const guides = [
  { name: 'Maria Garcia', role: 'Spanish Specialist', icon: '🔵' },
  { name: 'Hans Müller', role: 'German Expert', icon: '🔵' },
  { name: 'Chloe Dubois', role: 'French Coach', icon: '🔴' }
];

export default function Guides() {
  return (
    <section id="about" className="guides-section premium-padding" style={{ padding: '8rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Meet Your Guides</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {guides.map(guide => (
            <div key={guide.name} className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{guide.icon}</div>
              <h3>{guide.name}</h3>
              <p style={{ color: 'var(--primary-light)' }}>{guide.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
