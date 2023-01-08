import React, { useState, useEffect } from 'react';

const questions = [
  {
    id: 1,
    question: "What is the name of Rick's grandchild and Morty's sister?",
    options: ['Summer', 'Jessica', 'Beth', 'Jerry'],
    answer: 'A',
  },
  // other questions...
];

function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [counter, setCounter] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(counter - 1);
      if (counter === 0) {
        clearInterval(timer);
        setAlertMessage('Time is up!');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  function handleAnswerSelection(questionId, selectedOption) {
    const selectedQuestion = questions.find((q) => q.id === questionId);
    if (selectedOption === selectedQuestion.answer) {
      setAlertMessage('Correct!');
    } else {
      setAlertMessage('Wrong!');
    }
    setSelectedAnswer(selectedOption);
  }

  function handleNextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCounter(10);
      setAlertMessage(null);
      setSelectedAnswer(null);
    }
  }

  function handlePreviousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setCounter(10);
      setAlertMessage(null);
      setSelectedAnswer(null);
    }
  }

  return (
    <div>
      <div>
        <h3>{questions[currentQuestion].question}</h3>
        <p>Time remaining: {counter} seconds</p>
        <ul>
          {questions[currentQuestion].options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name={`question-${questions[currentQuestion].id}`}
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() =>
                    handleAnswerSelection(questions[currentQuestion].id, option)
                  }
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {alertMessage && <p>{alertMessage}</p>}
      <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
        Previous
      </button>
      <button
        onClick={handleNextQuestion}
        disabled={currentQuestion === questions.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default Quiz;
