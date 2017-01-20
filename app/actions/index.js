import { bindActionCreators } from 'redux';
import * as QuizActions from './quiz';

export function bindActions (dispatch) {
  return {
    quiz: bindActionCreators(QuizActions, dispatch)
  };
}
