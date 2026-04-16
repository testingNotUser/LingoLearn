import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import QuizPage from './pages/QuizPage';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(localStorage.getItem('lingoUser'));

  useEffect(() => {
    const handleStorage = () => setUser(localStorage.getItem('lingoUser'));
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
