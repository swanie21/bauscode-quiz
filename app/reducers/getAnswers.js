import { GET_ANSWERS } from '../actions/quiz';

export default function getAnswers(state = {}, action) {
  switch (action.type) {
  case GET_ANSWERS:
    return Object.assign({}, state, { answers: action.answers });
  default:
    return state;
  }
}
