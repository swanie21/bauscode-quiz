import React, { PropTypes } from 'react';
import Answers from '../Answers';

const Question = ({ id, question, answers }) => {

  return (
    <section key={id}>
      <h3>{question}</h3>
      {answers.map((answer, index) =>
        <Answers
          key={index}
          id={id}
          answers={answer.label}
        />
      )}
    </section>
  );
};

Question.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  answers: PropTypes.array
};

export default Question;
