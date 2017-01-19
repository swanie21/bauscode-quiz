import React, { PropTypes } from 'react';
import Answers from '../Answers';

const Question = ({ id, question, answers, sumScore }) => {

  return (
    <section className='question' key={id}>
      <h3 className='question-title'>{question}</h3>
      <article className='answers'>
        {answers.map((answer, index) =>
          <Answers
            key={index}
            id={id}
            sumScore={sumScore}
            answers={answer.label}
            score={answer.score}
          />
        )}
      </article>
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
