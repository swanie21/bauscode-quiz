import { combineReducers } from 'redux';
import counter from './counter';
import getQuestions from './getQuestions';
import sumScore from './sumScore';

const reducers = {
  counter,
  getQuestions,
  sumScore
};

export default combineReducers(reducers);
