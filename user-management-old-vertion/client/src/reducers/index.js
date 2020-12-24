import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import users from './usersReducer';
export default combineReducers({
  users,
  form, // for redux-form package to work
});
