import React from "react";
import questions from "../../data";
import "./styles.css";
import { useState } from "react";

function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Kullanıcının verdiği cevap ile doğru cevabı kıyaslayacak bir fonksiyon yazılacak
  const handleSubmit = () => {};
  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="question-section">
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-text">
            <p>{question.questionText}</p>
            <div className="answer-section">
              {question.answerOptions.map((answerOption, answerIndex) => (
                <>
                  <input
                    type="radio"
                    id="answer"
                    name="answer"
                    value={answerOption}
                  />
                  <label for="answer">{answerOption}</label>
                </>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="submit-button">
          Sonuçları Göster
        </button>
      </form>
    </div>
  );
}

export default Quiz;
