export default function Footer() {
  return (
    <footer style={{ padding: '4rem 0 2rem', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
      <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        <div>
          <span style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', display: 'block' }}>LingoLeap</span>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Empowering the next generation of global citizens through language and culture.</p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.2rem' }}>Platform</h4>
          <ul style={{ listStyle: 'none' }}>
            <li><a href="/courses" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Courses</a></li>
            <li><a href="/quiz" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Quizzes</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.2rem' }}>Contact</h4>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Instagram</li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Twitter</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        &copy; 2026 LingoLeap Institute. All rights reserved.
      </div>
    </footer>
  );
}
