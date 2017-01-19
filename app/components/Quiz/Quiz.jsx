import React, { PropTypes, Component } from 'react';
import Question from '../Question';

if (process.env.BROWSER) {
  require('../../stylesheets/modules/Quiz.scss');
}

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      selectedAnswers: [null, null, null, null]
    };
  }

  sumScore() {
    this.state.selectedAnswers.map(score => {
      this.setState({
        score: score
      });
    });
  }

  setScores(index, score) {
    let selectedAnswersArray = this.state.selectedAnswers;
    selectedAnswersArray[index] = score;
    this.setState({
      selectedAnswers: selectedAnswersArray
    });
    this.sumScore();
  }

  render() {
    const questions = this.props.state.getQuestions.questions[0];
    const { sumScore } = this.props.actions.quiz;
    let score = this.props.state.sumScore;

    return (
      <section>
        <h2>{this.state.score}</h2>
        <h2 className='score'>Total Score: <span>{score}</span></h2>
        {questions.questions.map((question, index) =>
          <Question
            key={question.id}
            id={index}
            question={question.question}
            answers={question.answers}
            sumScore={sumScore}
            setScores={this.setScores.bind(this)}
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
