import Hero from '../components/Hero';

export default function LandingPage() {
  return (
    <main>
      <Hero />
      
      <section id="about" style={{ padding: '8rem 0' }}>
        <div className="grid-container">
          <div className="page-section" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Mission: Global Connection</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
              At LingoLeap, we believe language is the bridge to new cultures and opportunities. 
              Our institute combines expert instruction with high-tech interactive tools.
            </p>
          </div>
          
          <div className="col-4 glass">
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🚀</div>
            <h3 style={{ fontSize: '1.5rem' }}>Fast-Track Method</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Master conversational basics in weeks, not months.</p>
          </div>
          <div className="col-4 glass">
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>👥</div>
            <h3 style={{ fontSize: '1.5rem' }}>Expert Teachers</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Learn from native speakers who specialize in young learners.</p>
          </div>
          <div className="col-4 glass">
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🎮</div>
            <h3 style={{ fontSize: '1.5rem' }}>Gamified Quizzes</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Stay motivated with interactive challenges.</p>
          </div>
        </div>
      </section>

      <section id="activities" style={{ padding: '8rem 0' }}>
        <div className="grid-container">
          <div className="page-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Interactive Learning Activities</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              We don't just teach languages; we make you live them. Discover our unique approach to immersive learning.
            </p>
          </div>
          
          <div className="col-4 glass" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎭</div>
            <h4>Role-Play Simulations</h4>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Practice real-world scenarios in our controlled VR environments.</p>
          </div>
          <div className="col-4 glass" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🧩</div>
            <h4>Cultural Puzzles</h4>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Solve linguistic challenges based on historical artifacts.</p>
          </div>
          <div className="col-4 glass" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎤</div>
            <h4>Podcast Studio</h4>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Record your own sessions and get instant AI pronunciation feedback.</p>
          </div>
        </div>
      </section>

      <section id="teachers" style={{ padding: '8rem 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="grid-container" style={{ alignItems: 'center' }}>
          <div className="col-4">
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Meet Your Guides</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Our world-class educators represent over 15 countries and bring years of immersion experience to every session.
            </p>
            <button className="btn btn-primary">See All Instructors</button>
          </div>
          
          <div className="col-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {['Maria Garcia', 'Hans Müller', 'Chloe Dubois'].map((name, i) => (
              <div key={i} className="glass" style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', 
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem'
                }}>
                  {['👩‍🏫', '👨‍🏫', '👩‍🎨'][i]}
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{name}</h4>
                <p style={{ color: 'var(--primary-light)', fontWeight: '600' }}>Senior Educator</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                  <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.8rem' }}>English</span>
                  <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.8rem' }}>{['Spanish', 'German', 'French'][i]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
