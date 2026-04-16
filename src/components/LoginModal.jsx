import { useState } from 'react';

export default function LoginModal({ isOpen, onClose, onSuccess }) {
  const [username, setUsername] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(username);
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'rgba(0,0,0,0.8)', display: 'grid', placeItems: 'center',
        zIndex: 2000, backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
        className="glass" 
        style={{ width: '400px', padding: '3rem', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        <h2 style={{ marginBottom: '2rem' }}>Welcome Back!</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Username</label>
            <input 
              type="text" 
              required 
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{
                width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Password</label>
            <input 
              type="password" 
              required 
              style={{
                width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white'
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>Sign In</button>
        </form>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.5rem' }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
