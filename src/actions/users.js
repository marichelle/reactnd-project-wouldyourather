import { addAnswer } from '../actions/questions';
import { saveQuestionAnswer } from '../utils/api';

export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export function addUserAnswer(qa) {
  return {
    type: ADD_USER_ANSWER,
    user: qa.authorizedUser,
    qid: qa.questionId,
    answer: qa.answer,
  };
}

export function addUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    author: question.author,
    id: question.id,
  };
}

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export function handleAddAnswer(answer, questionId) {
  return (dispatch, getState) => {
    const { authorizedUser } = getState();

    return saveQuestionAnswer({
      authedUser: authorizedUser,
      qid: questionId,
      answer,
    }).then(() => {
      const qa = { answer, authorizedUser, questionId };

      dispatch(addAnswer(qa));
      dispatch(addUserAnswer(qa));
    });
  };
}
