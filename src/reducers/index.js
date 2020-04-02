import { combineReducers } from 'redux';
import authorizedUser from '../reducers/authorizedUser';
import questions from '../reducers/questions';
import users from '../reducers/users';

export default combineReducers({
  authorizedUser,
  questions,
  users
});
