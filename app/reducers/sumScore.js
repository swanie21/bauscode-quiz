import { SUM_SCORE } from '../actions/quiz';

export default function sumScore(state = 0, action) {
  switch (action.type) {
  case SUM_SCORE:
    return state + action.score;
  default:
    return state;
  }
}
