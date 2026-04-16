import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const quizData = {
  spanish: [
    { q: "How do you say 'Hello' in Spanish?", a: "Hola", options: ["Hola", "Adiós", "Gracias", "Por favor"] },
    { q: "What does 'Gato' mean?", a: "Cat", options: ["Dog", "Cat", "Bird", "Fish"] },
    { q: "Translate 'The red house'", a: "La casa roja", options: ["El casa rojo", "La roja casa", "La casa roja", "El rojo casa"] }
  ],
  german: [
    { q: "How do you say 'Thank you' in German?", a: "Danke", options: ["Bitte", "Danke", "Hallo", "Ja"] },
    { q: "What does 'Hund' mean?", a: "Dog", options: ["Cat", "Dog", "Mouse", "Horse"] },
    { q: "Translate 'Good morning'", a: "Guten Morgen", options: ["Guten Tag", "Guten Abend", "Guten Morgen", "Gute Nacht"] }
  ],
  french: [
    { q: "How do you say 'Beautiful' (masculine) in French?", a: "Beau", options: ["Belle", "Beau", "Bon", "Bien"] },
    { q: "What does 'Pomme' mean?", a: "Apple", options: ["Bread", "Apple", "Cheese", "Water"] },
    { q: "Translate 'Thank you very much'", a: "Merci beaucoup", options: ["Merci", "S'il vous plaît", "Merci beaucoup", "De rien"] }
  ]
};

export default function QuizPage() {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'spanish';
  const questions = quizData[lang] || quizData.spanish;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);

  const handleAnswer = (opt) => {
    setSelectedOpt(opt);
    if (opt === questions[currentIdx].a) setScore(s => s + 1);

    setTimeout(() => {
      setSelectedOpt(null);
      if (currentIdx + 1 < questions.length) {
        setCurrentIdx(c => c + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  if (showResult) {
    return (
      <div className="container" style={{ padding: '10rem 0' }}>
        <div className="glass quiz-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Excellent! 🎉</h2>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            You scored {score} out of {questions.length}
          </p>
          <div style={{ display: 'grid', gridAutoFlow: 'column', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
            <button className="btn btn-outline" onClick={() => window.location.reload()} style={{ border: '1px solid var(--glass-border)', color: 'white' }}>Retry Quiz</button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentIdx];

  return (
    <div className="container" style={{ padding: '10rem 0' }}>
      <div className="glass quiz-container">
        <div style={{ width: '100%', height: '8px', background: 'var(--glass-bg)', borderRadius: '10px', overflow: 'hidden', marginBottom: '2rem' }}>
          <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', width: `${((currentIdx) / questions.length) * 100}%`, transition: 'width 0.5s ease' }}></div>
        </div>
        
        <h2 style={{ marginBottom: '2rem' }}>{q.q}</h2>
        <div className="options-grid">
          {q.options.map((opt, i) => (
            <button 
              key={i} 
              className={`quiz-option btn`} 
              disabled={selectedOpt !== null}
              onClick={() => handleAnswer(opt)}
              style={{
                width: '100%', padding: '1.2rem', justifyContent: 'start', borderRadius: '12px',
                background: selectedOpt === opt ? (opt === q.a ? '#10b98122' : '#f43f5e22') : 'var(--glass-bg)',
                border: `1px solid ${selectedOpt === opt ? (opt === q.a ? '#10b981' : '#f43f5e') : 'var(--glass-border)'}`,
                color: 'white'
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
