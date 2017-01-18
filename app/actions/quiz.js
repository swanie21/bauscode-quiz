'use strict';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SUM_SCORE = 'SUM_SCORE';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions: questions
  };
}

export function sumScore(score) {
  return {
    type: SUM_SCORE,
    score: score
  };
}
