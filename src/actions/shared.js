import { getInitialData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthorizedUser } from './authorizedUser';
import { hideLoading, showLoading } from 'react-redux-loading';

// hardcode authenticated user
const AUTHORIZED_ID = 'johndoe';

export const RECEIVE_DATA = 'RECEIVE DATA';

export const handleInitialData = () => {
  // redux thunk pattern
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthorizedUser(AUTHORIZED_ID));
      dispatch(hideLoading());
    });
  };
};
