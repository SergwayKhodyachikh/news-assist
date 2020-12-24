import { combineReducers } from 'redux';
import genderList from './genderListReducer';
import nameRegistration from './nameRegistrationReducer';

export default combineReducers({
  genderList,
  nameRegistration
});
