export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const addAnswer = (qa) => {
  return {
    type: ADD_ANSWER,
    user: qa.authorizedUser,
    qid: qa.questionId,
    answer: qa.answer,
  };
};

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};
