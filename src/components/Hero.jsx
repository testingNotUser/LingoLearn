import heroImg from '../assets/hero.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="grid-container hero-grid">
        <div className="hero-content">
          <h1 className="text-gradient">Unlock Your World with LingoLeap</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            The smartest way for students to master Spanish, German, French, and more. 
            Interactive, engaging, and built for the next generation of polyglots.
          </p>
          <div style={{ display: 'grid', gridAutoFlow: 'column', gap: '1rem', justifyContent: 'start' }}>
            <Link to="/courses" className="btn btn-primary">Start Learning</Link>
            <a href="#about" className="btn btn-outline" style={{ border: '1px solid var(--glass-border)', color: 'white' }}>Learn More</a>
          </div>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img src={heroImg} alt="Students learning" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
