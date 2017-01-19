import React, { PropTypes, Component } from 'react';
import Question from '../Question';

if (process.env.BROWSER) {
  require('../../stylesheets/modules/Quiz.scss');
}

class Quiz extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const questions = this.props.state.getQuestions.questions[0];
    const { sumScore } = this.props.actions.quiz;
    let score = this.props.state.sumScore;

    return (
      <section>
        <h2 className='score'>Total Score: <span>{score}</span></h2>
        {questions.questions.map((question, index) =>
          <Question
          key={question.id}
          id={index}
          question={question.question}
          answers={question.answers}
          sumScore={sumScore}
          />
        )}
      </section>
    );
  }
}

Quiz.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default Quiz;
