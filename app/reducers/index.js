import { combineReducers } from 'redux';
import counter from './counter';
import getQuestions from './getQuestions';
import getAnswers from './getAnswers';
import sumScore from './sumScore';

const reducers = {
  counter,
  getQuestions,
  getAnswers,
  sumScore
};

export default combineReducers(reducers);
