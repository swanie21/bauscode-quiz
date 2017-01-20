import React, { PropTypes, Component } from 'react';
import { IndexLink } from 'react-router';
import Question from '../Question';

if (process.env.BROWSER) {
  require('../../stylesheets/modules/Quiz.scss');
}

class Quiz extends Component {
  constructor(props) {
    super(props);
  }

  resetScore() {
    this.props.state.sumScore = 0;
  }

  answerFeedback(score) {
    if(score === 10) {
      alert('You are correct!');
    }
    if(score === 0) {
      alert('Sorry, you are incorrect!');
    }
  }

  render() {
    const questions = this.props.state.getQuestions.questions[0];
    const { sumScore } = this.props.actions.quiz;
    let score = this.props.state.sumScore;

    return (
      <section>
        <h1 className='quiz-title'>Colorado Questionnaire</h1>
        {questions.questions.map((question, index) =>
          <Question
            key={question.id}
            id={index}
            question={question.question}
            answers={question.answers}
            sumScore={sumScore}
            answerFeedback={this.answerFeedback.bind(this)}
          />
        )}
        <h2 className='score'>Total Score: <span>{score}</span></h2>
        <div className='button-container'>
          <IndexLink to={'/'} className='nav-item-link' activeClassName='active' onClick={this.resetScore.bind(this)}>
            <button className='retry-quiz-button'>Take Quiz Again</button>
          </IndexLink>
        </div>
      </section>
    );
  }
}

Quiz.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default Quiz;
