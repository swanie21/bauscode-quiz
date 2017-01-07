export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_ANSWERS = 'GET_ANSWERS';
export const SUM_SCORE = 'SUM_SCORE';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions: questions
  };
}

export function getAnswers(answers) {
  return {
    type: 'GET_ANSWERS',
    answers: answers
  };
}

export function sumScore(score) {
  return {
    type: 'SUM_SCORE',
    score: score
  };
}
