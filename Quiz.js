import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris"
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "Java", "C++", "JavaScript"],
      correctAnswer: "JavaScript"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
      correctAnswer: "Harper Lee"
    }
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionIndex, option) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setScore(null);
  };

  return (
    <div>
      {score === null ? (
        <div>
          {questions.map((question, index) => (
            <div key={index}>
              <h3>{question.question}</h3>
              {question.options.map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                  />
                  {option}
                </div>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
