export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const RECEIVE_USERS = 'RECEIVE_USERS';

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
