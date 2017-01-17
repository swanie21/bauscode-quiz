import React, { PropTypes, Component } from 'react';
import quiz from '../../../data/quiz.js';
import Question from '../Question';

class Quiz extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getQuestions } = this.props.actions.quiz;
    getQuestions(quiz);
  }

  render() {
    const questions = this.props.state.getQuestions.questions[0]  ;

    return (
      <section>
        {questions.questions.map((question, index) =>
          <Question
            key={question.id}
            id={index}
            question={question.question}
            answers={question.answers}
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
