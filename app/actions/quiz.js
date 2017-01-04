'use strict';

export const getQuestions = (questions) => {
  return {
    type: 'GET_QUESTIONS',
    questions: questions
  };
};

export const getAnswers = (answers) => {
  return {
    type: 'GET_ANSWERS',
    answers: answers
  };
};

export const sumScore = (score) => {
  return {
    type: 'SUM_SCORE',
    score: score
  };
};
