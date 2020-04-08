import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import authorizedUser from '../reducers/authorizedUser';
import questions from '../reducers/questions';
import users from '../reducers/users';

export default combineReducers({
  loadingBar: loadingBarReducer,
  authorizedUser,
  questions,
  users,
});
