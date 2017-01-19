import React, { PropTypes, Component } from 'react';
import quiz from '../../../data/quiz.js';
import Question from '../Question';

class Quiz extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'green';
    const { getQuestions } = this.props.actions.quiz;
    getQuestions(quiz);
  }

  render() {
    const questions = this.props.state.getQuestions.questions[0];
    const { sumScore } = this.props.actions.quiz;
    let score = this.props.state.sumScore;

    return (
      <section>
        <h1>Total Score: {score}</h1>
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
