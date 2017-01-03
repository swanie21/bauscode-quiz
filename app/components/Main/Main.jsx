import React, { Component } from 'react';
// import QuestionOne from './Questions/Question.one.js';
import quiz from '../../../data/quiz.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }

  componentDidMount() {
    console.log(quiz[0].questions[0].answers);
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

export default Main;
