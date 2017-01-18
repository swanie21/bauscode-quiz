import React, { PropTypes } from 'react';

const Answers = ({ id, answers, score, sumScore }) => {

  return (
    <ul>
      <li onClick={() => sumScore(score)}>
        <label>
          <input type="radio" name={id} />
          {answers}
        </label>
      </li>
    </ul>
  );
};

Answers.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
  id: PropTypes.number,
  answers: PropTypes.string,
  score: PropTypes.number,
  sumScore: PropTypes.func
};

export default Answers;
