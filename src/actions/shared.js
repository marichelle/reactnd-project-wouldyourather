import { addAnswer, addQuestion, receiveQuestions } from './questions';
import { addUserAnswer, addUserQuestion, receiveUsers } from './users';
import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { setAuthorizedUser } from './authorizedUser';
import { hideLoading, showLoading } from 'react-redux-loading';

export const handleInitialData = (userId) => {
  // redux thunk pattern
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));

      if (userId) {
        dispatch(setAuthorizedUser(userId));
      }

      dispatch(hideLoading());
    });
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
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddAnswer(answer, questionId) {
  return (dispatch, getState) => {
    const { authorizedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser: authorizedUser,
      qid: questionId,
      answer,
    })
      .then(() => {
        const qa = { answer, authorizedUser, questionId };

        dispatch(addAnswer(qa));
        dispatch(addUserAnswer(qa));
      })
      .then(() => dispatch(hideLoading()));
  };
}
