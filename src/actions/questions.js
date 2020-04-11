import { addUserQuestion } from '../actions/users';
import { saveQuestion } from '../utils/api';

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

const addQuestion = (question) => {
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

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authorizedUser } = getState();

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authorizedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(question));
    });
  };
}
