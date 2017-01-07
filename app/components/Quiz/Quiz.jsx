import React, { PropTypes, Component } from 'react';
import quiz from '../../../data/quiz.js';

class Quiz extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getQuestions } = this.props.actions.quiz;
    getQuestions(quiz);
  }

  render() {
    return(
      <section>
        <p>{quiz[0].questions[0].question}</p>
        <p>{quiz[0].questions[1].question}</p>
        <p>{quiz[0].questions[2].question}</p>
        <p>{quiz[0].questions[3].question}</p>
        <p>{quiz[0].questions[4].question}</p>
      </section>
    );
  }
}

Quiz.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default Quiz;
