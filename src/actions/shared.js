import { getInitialData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthorizedUser } from './authorizedUser';
import { hideLoading, showLoading } from 'react-redux-loading';

export const handleInitialData = (userId) => {
  console.log('user-id cookie val: ', userId);

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
