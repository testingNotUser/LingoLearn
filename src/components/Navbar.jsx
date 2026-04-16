import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

export default function Navbar({ user, setUser }) {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="grid-container nav-grid">
          <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', textDecoration: 'none' }}>
            Lingo<span style={{ color: 'var(--primary-light)' }}>Leap</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <a href="#about">About</a>
            <a href="#activities">Activities</a>
          </div>

          <button 
            className={`btn ${user ? 'btn-outline' : 'btn-primary'}`} 
            onClick={() => user ? null : setIsModalOpen(true)}
          >
            {user || 'Login'}
          </button>
        </div>
      </nav>

      <LoginModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={(name) => {
          setUser(name);
          localStorage.setItem('lingoUser', name);
        }}
      />
    </>
  );
}
