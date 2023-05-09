import React, { useState, useEffect } from 'react';

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

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{question.question}</h2>
    </div>
  );
};

export default Question;