import { GET_ANSWERS } from '../actions/quiz';

export default function getAnswers(state = {}, action) {
  switch (action.type) {
  case GET_ANSWERS:
    return [...state, Object.assign({}, action.answers)];
  default:
    return state;
  }
}
