import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Main from './components/Main';
import NoMatch from './components/NoMatch';
import Quiz from './components/Quiz';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/quiz" component={Quiz} />
    <Route path="/*" component={NoMatch} />
  </Route>
);
