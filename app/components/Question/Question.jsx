import React, { PropTypes } from 'react';
import Answers from '../Answers';

const Question = ({ id, question, answers, sumScore }) => {

  return (
    <section key={id}>
      <h3>{question}</h3>
      {answers.map((answer, index) =>
        <Answers
          key={index}
          id={id}
          sumScore={sumScore}
          answers={answer.label}
          score={answer.score}
        />
      )}
    </section>
  );
};

Question.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  answers: PropTypes.array,
  sumScore: PropTypes.func
};

export default Question;
