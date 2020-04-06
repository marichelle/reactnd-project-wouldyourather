import { _getQuestions, _getUsers } from '../utils/_DATA';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthorizedUser } from './authorizedUser';

// hardcode authenticated user
const AUTHORIZED_ID = 'johndoe';

export const RECEIVE_DATA = 'RECEIVE DATA';

export const handleInitialData = () => {
  return dispatch => {
    return Promise.all([_getQuestions(), _getUsers()]).then(
      ([questions, users]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(setAuthorizedUser(AUTHORIZED_ID));
      }
    );
  };
};
