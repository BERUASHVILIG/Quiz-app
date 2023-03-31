import { useState } from "react";
import "./App.css";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the capital of Georgia?",
      options: [
        { id: 0, text: "Qutaisi", isCorrect: false },
        { id: 1, text: "Tbilisi", isCorrect: true },
        { id: 2, text: "Gori", isCorrect: false },
        { id: 3, text: "Mtskheta", isCorrect: false },
      ],
    },
    {
      text: "What year was the Constitution of Georgia written?",
      options: [
        { id: 0, text: "1990", isCorrect: false },
        { id: 1, text: "1995", isCorrect: true },
        { id: 2, text: "1991", isCorrect: false },
        { id: 3, text: "1890", isCorrect: false },
      ],
    },
    {
      text: "Who was the First president of the Georgia?",
      options: [
        { id: 0, text: "shalva natelashvili", isCorrect: true },
        { id: 1, text: "salome zurabishvili", isCorrect: false },
        { id: 2, text: "zviad  gamsaxurdia", isCorrect: true },
        { id: 3, text: "none of them", isCorrect: false },
      ],
    },
    {
      text: "Who is current president of geogria?",
      options: [
        { id: 0, text: "nino burjanadze", isCorrect: false },
        { id: 1, text: "salome zurabishvili", isCorrect: true },
        { id: 2, text: "giorgi margvelashvili", isCorrect: false },
        { id: 3, text: "eduard shevardnadze", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the Georgia?",
      options: [
        { id: 0, text: "armenia", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: false },
        { id: 2, text: "Turkey", isCorrect: false },
        { id: 3, text: "Mexico", isCorrect: true },
      ],
    },
  ];

  const optionCliced = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  // const rightAnswer = (isCorrect) => {
  //   if (isCorrect) {
  //     return { backgroundColor: "green" };
  //   } else {
  //     return { backgroundColor: "red" };
  //   }
  // };

  return (
    <div className="App">
      <h1>Georgia Quiz</h1>
      <h2>Currect Score: {score}</h2>

      {showResult ? (
        <div className="final-result">
          <h1>Final Result</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={resetQuiz} className="reset-btn">
            Reset Quiz
          </button>
        </div>
      ) : (
        <div className="question-container">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="current-question">
            {questions[currentQuestion].text}
          </h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  // style={rightAnswer(option.isCorrect)}
                  onClick={() => optionCliced(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
