import { GET_QUESTIONS } from '../actions/quiz';

export default function getQuestions(state = {}, action) {
  switch (action.type) {
  case GET_QUESTIONS:
    return Object.assign({}, state, { questions: action.questions });
  default:
    return state;
  }
}
