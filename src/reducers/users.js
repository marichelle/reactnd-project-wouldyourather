import { ADD_USER_QUESTION } from '../actions/users';
import { RECEIVE_USERS } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
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
