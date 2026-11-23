import React, { useState } from 'react';
import './QuizSection.css';
import { QUIZ_QUESTIONS, QUIZ_ICONS } from '../../data/products';

export default function QuizSection({ onAddToCart, onOpenCart }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[step];

  const handleSelect = (val) => {
    const updated = { ...answers, [step]: val };
    setAnswers(updated);

    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setIsFinished(false);
  };

  // Determine recommendation based on answers
  const getRecommendation = () => {
    if (answers[2] === 'dark' || answers[1] === 'rich') {
      return { id: 'afterglow', name: 'Afterglow (Coorg Dark Roast)' };
    }
    if (answers[2] === 'light' || answers[1] === 'fruit') {
      return { id: 'sunrise', name: 'Sunrise Ritual (Araku Valley Light Roast)' };
    }
    return { id: 'weekender', name: 'The Weekender (Chikmagalur Medium Roast)' };
  };

  const match = getRecommendation();

  return (
    <section className="quiz-section section-wrap" id="finder">
      <div className="quiz-card reveal">
        <div className="quiz-left">
          <div className="section-eyebrow">✦ COFFEE KNOW-HOW</div>
          <h2>
            Let's find your<br />
            <em>perfect cup.</em>
          </h2>
          <p>Three quick questions. One remarkably good morning recommendation.</p>
          <div className="quiz-watermark">✦</div>
        </div>

        <div className="quiz-right">
          <div className="quiz-progress-track">
            <span id="quizStepLabel">QUESTION 0{step + 1} / 03</span>
            <div className="quiz-progress-bar-bg">
              <div 
                className="quiz-progress-fill" 
                id="quizProgress" 
                style={{ width: `${((step + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {!isFinished ? (
            <div id="quizQuestionBox" className="quiz-question-box">
              <h3>{currentQ.q}</h3>
              <div className="quiz-options-list">
                {currentQ.opts.map((opt, i) => (
                  <button 
                    key={i}
                    className="quiz-option-btn" 
                    onClick={() => handleSelect(opt[2])}
                  >
                    <span className="opt-left">
                      <span 
                        className="quiz-opt-icon"
                        dangerouslySetInnerHTML={{ __html: QUIZ_ICONS[opt[0]] || '' }}
                      />
                      <span>{opt[1]}</span>
                    </span>
                    <span className="opt-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div id="quizResultBox" className="quiz-result-box">
              <div className="section-eyebrow">✦ YOUR COFFEE MATCH</div>
              <h3>{match.name}</h3>
              <p>Based on your brewing style and flavour preferences, this is your morning match made in heaven.</p>
              <button 
                className="btn-pill-primary" 
                id="quizAddMatch"
                onClick={() => {
                  onAddToCart(match.id);
                  onOpenCart?.();
                }}
              >
                Add my match to bag ↗
              </button>
              <div>
                <button 
                  id="quizReset" 
                  className="quiz-reset-btn" 
                  onClick={handleReset}
                >
                  Start over ↺
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
