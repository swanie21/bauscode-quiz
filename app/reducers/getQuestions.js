import { GET_QUESTIONS } from '../actions/quiz';

export default function getQuestions(state = {}, action) {
  switch (action.type) {
  case GET_QUESTIONS:
    return [...state, Object.assign({}, action.questions)];
  default:
    return state;
  }
}
