import { Link } from 'react-router-dom';

const courses = [
  { id: 'spanish', title: 'Spanish Foundation', icon: '🇪🇸', level: 'Beginner', lessons: 12 },
  { id: 'german', title: 'German Basics', icon: '🇩🇪', level: 'Beginner', lessons: 10 },
  { id: 'french', title: 'French Discovery', icon: '🇫🇷', level: 'Intermediate', lessons: 15 },
];

export default function CoursesPage() {
  return (
    <section style={{ padding: '12rem 0 8rem' }}>
      <div className="grid-container">
        <div className="col-12" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Explore Our Courses
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Choose your language and start your journey today. Our courses are designed by linguistic experts.
          </p>
        </div>

        <div className="col-12">
          {/* Forced 3 columns on desktop, adapts to vertical stack on mobile */}
          <div className="responsive-3-grid">
            {courses.map(course => (
              <div key={course.id} className="glass course-card">
                <div style={{ 
                  padding: '3rem', 
                  background: 'rgba(255,255,255,0.03)', 
                  borderRadius: '16px', 
                  textAlign: 'center', 
                  fontSize: '4rem',
                  marginBottom: '1rem',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
                }}>
                  {course.icon}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                    {course.level}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{course.lessons} Lessons</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{course.title}</h3>
                <Link to={`/quiz?lang=${course.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Start Lesson
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12" style={{ marginTop: '4rem' }}>
          <div className="glass" style={{ padding: '2.5rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Native instructors</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Learn from the best.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>AI-driven feedback</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Master pronunciation.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Certificate</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Get recognized.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
