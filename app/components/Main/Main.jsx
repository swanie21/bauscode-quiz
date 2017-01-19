import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import quiz from '../../../data/quiz.js';

if (process.env.BROWSER) {
  require('../../stylesheets/modules/Main.scss');
}

class Main extends Component {

  componentDidMount() {
    const { getQuestions } = this.props.actions.quiz;
    getQuestions(quiz);
  }

  render() {
    return (
      <section className='page-content'>
        <h1 className='title'>Are you a<span className='flag-text'>Colorado Native</span>?</h1>
        <p className='quiz-topic'>Do you think you know Colorado? Test yourself with these fun facts about Colorado.</p>
        <div className='button-container'>
          <Link to={'/quiz'} className='nav-item-link' activeClassName='active'><button className='quiz-button'>Take Quiz</button></Link>
        </div>
      </section>
    );
  }
}

Main.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default Main;
