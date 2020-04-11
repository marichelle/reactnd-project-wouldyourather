import { addUserQuestion } from '../actions/users';
import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

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

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authorizedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authorizedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
      })
      .then(dispatch(hideLoading()));
  };
}
