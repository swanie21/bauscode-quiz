import React, { PropTypes } from 'react';

const Answers = ({ id, answers, score, sumScore, answerFeedback }) => {
  return (
    <ul className='answer-list'>
      <li onClick={() => sumScore(score)}>
        <label onClick={() => answerFeedback(score)}>
          <input type='radio' name={id} />
          {answers}
        </label>
      </li>
    </ul>
  );
};

Answers.propTypes = {
  id: PropTypes.number,
  answers: PropTypes.string,
  score: PropTypes.number,
  sumScore: PropTypes.func,
  answerFeedback: PropTypes.func
};

export default Answers;
