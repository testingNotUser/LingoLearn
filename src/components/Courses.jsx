import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Spanish for Beginners', level: 'Level 1', duration: '12 Weeks', price: '$199' },
  { id: 2, title: 'German Mastery', level: 'Level 2', duration: '10 Weeks', price: '$249' },
  { id: 3, title: 'French Culture', level: 'Level 1', duration: '8 Weeks', price: '$179' },
  { id: 4, title: 'Italian Conversational', level: 'Level 3', duration: '14 Weeks', price: '$299' }
];

export default function Courses() {
  return (
    <section className="courses-section" style={{ padding: '8rem 0', background: 'var(--glass-bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Explore Our Courses</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>Join over 5,000 students mastering new languages with our immersive, fast-track framework.</p>
          </div>
          <Link to="/courses" className="btn btn-outline">View All Courses</Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {courses.map(course => (
            <div key={course.id} className="glass" style={{ padding: '2rem', transition: 'transform 0.3s ease' }}>
              <div style={{ color: 'var(--primary-light)', fontWeight: 'bold', marginBottom: '0.5rem' }}>{course.level}</div>
              <h3 style={{ marginBottom: '1rem' }}>{course.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{course.duration}</span>
                <span style={{ fontWeight: '800', fontSize: '1.2rem' }}>{course.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
