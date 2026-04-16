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
        <div className="col-4">
          <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Explore Our Courses
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Choose your language and start your journey today. Our courses are designed by linguistic experts.
          </p>
          <div className="glass" style={{ padding: '1.5rem', marginTop: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Why LingoLeap?</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>✓ Native instructors</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ AI-driven feedback</li>
              <li>✓ Certificate of completion</li>
            </ul>
          </div>
        </div>

        <div className="col-8">
          <div className="course-grid" style={{ marginTop: '0' }}>
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
      </div>
    </section>
  );
}
