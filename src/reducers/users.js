import {
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
  RECEIVE_USERS,
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case ADD_USER_ANSWER:
      const { user, qid, answer } = action;

      return {
        ...state,
        [user]: {
          ...state[user],
          answers: {
            ...state[user].answers,
            [qid]: answer,
          },
        },
      };

    case ADD_USER_QUESTION:
      const { author, id } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id]),
        },
      };

    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    default:
      return state;
  }
}
