import React, { Component, PropTypes } from 'react';
import quiz from '../../../data/quiz.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }

  componentDidMount() {
    // console.log(this.props.actions.quiz.getQuestions());
    this.props.actions.quiz.getQuestions(quiz[0].questions);
  }

  render() {
    return (
      <section className='page-content'>
        <h1>Are you a Colorado Native?</h1>
        <p>Do you think you know Colorado? Test yourself with these fun facts about Colorado.</p>
        <button>Take Quiz</button>
      </section>
    );
  }
}

Main.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};

export default Main;
