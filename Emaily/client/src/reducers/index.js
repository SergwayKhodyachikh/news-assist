import { combineReducers } from 'redux';
import auth from './authReducer';
import form from './form';
import surveys from './surveysReducer';

export default combineReducers({
  auth,
  form,
  surveys
});
