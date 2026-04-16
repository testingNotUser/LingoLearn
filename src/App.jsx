import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Activities from './components/Activities';
import Guides from './components/Guides';
import Footer from './components/Footer';
import CoursesPage from './pages/CoursesPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router basename="/LingoLearn">
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div id="courses">
                <Courses />
              </div>
              <Activities />
              <div id="about">
                <Guides />
              </div>
            </>
          } />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
