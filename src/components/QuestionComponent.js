import React, { useState, useEffect } from 'react';
import "./QuestionComponent.css"

const Question = () => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch('http://localhost:8080/question/1');
      const data = await response.json();
      setQuestion(data);
    };

    fetchQuestion();
  }, []);

  console.log("Question", question)
  if (!question) {
    return <div>Loading...</div>;
  }

  const options = question && question.answer.map((answer, index) => (
    <li key={index}>{answer.answer}</li>
  ));

  return (
    <div>
    <div class="question">
      <h2>{question.question}</h2>
    </div>
    <div class="answer">
      <ul>
        {options}
      </ul>
    </div>
    </div>
  );
};

export default Question;