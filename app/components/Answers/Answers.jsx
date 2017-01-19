import React, { PropTypes } from 'react';

const Answers = ({ id, answers, score, setScores }) => {

  return (
    <ul className='answer-list'>
      <li onClick={() => console.log(setScores(id, score))}>
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
  // sumScore: PropTypes.func,
  setScores: PropTypes.func
};

export default Answers;
