import React, { useState, useEffect } from 'react';
import "./QuestionComponent.css"
import WebcamFeed from './WebCamComponent';
import Lifelines from './LifeLineComponent';

const Question = () => {
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch('http://localhost:8080/question/1');
      const data = await response.json();
      setQuestion(data);
    };

    fetchQuestion();
  }, []);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    const isCorrect = async() => {
        try {
            console.log('before fetch');
          const response = await fetch('http://localhost:8080/answer/1');
          console.log('after fetch');
          const data = await response.json();
          console.log("Select Option Id: " + selectedOption)
          const result = data.id === selectedOption ? true : false;
          console.log("Is answer correct:" + result)
          setIsCorrect(result);
        } catch (error) {
          console.error(error);
          // Handle the error here
        }
      };
    
      isCorrect();
  };

  console.log("Question", question)
  if (!question) {
    return <div>Loading...</div>;
  }

  const options = question && question.answer.map((answer, index) => (
    <div key={index} 
    className={`answer-option ${selectedOption === answer.id ? 'selected' : ''} ${isCorrect ? 'correct' : 'incorrect'}`}
    onClick={() => handleOptionSelect(answer.id)}>
        {answer.answer}
    </div>
    // <li key={index}>{answer.answer}</li>
  ));

 

  return (
    <div>
        <div>
      <WebcamFeed />
    </div>
    <div class="question">
      <h2>{question.question}</h2>
    </div>
    <div class="options-grid">
        {options}
    </div>
    </div>
  );
};

export default Question;