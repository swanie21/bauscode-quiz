import { combineReducers } from 'redux';
import getQuestions from './getQuestions';
import sumScore from './sumScore';

const reducers = {
  getQuestions,
  sumScore
};

export default combineReducers(reducers);
