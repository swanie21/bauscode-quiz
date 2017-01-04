import { bindActionCreators } from 'redux';
import * as CounterActions from './counter';
import * as QuizActions from './quiz';

export function bindActions (dispatch) {
  return {
    counter: bindActionCreators(CounterActions, dispatch),
    quiz: bindActionCreators(QuizActions, dispatch)
  };
}
