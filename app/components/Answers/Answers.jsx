import React, { PropTypes } from 'react';

const Answers = ({ id, answers }) => {
  return (
    <ul>
      <li>
        <label>
          <input type="radio" name={id} />
          {answers}
        </label>
      </li>
    </ul>
  );
};

Answers.propTypes = {
  id: PropTypes.number,
  answers: PropTypes.string
};

export default Answers;
