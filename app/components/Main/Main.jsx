import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Main () {
  return (
    <section className='page-content'>
      <h1>Are you a Colorado Native?</h1>
      <p>Do you think you know Colorado? Test yourself with these fun facts about Colorado.</p>
      <Link to={'/quiz'} className='nav-item-link' activeClassName='active'><button>Take Quiz</button></Link>
    </section>
  );
}

Main.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default Main;
