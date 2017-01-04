import { SUM_SCORE } from '../actions/counter';

export default function sumScore(state = 0, action) {
  switch (action.type) {
  case SUM_SCORE:
    return state + 10;
  default:
    return state;
  }
}
