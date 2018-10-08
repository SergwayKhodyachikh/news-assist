import { combineReducers } from 'redux';
import articleListPullerReducer from './articleListPullerReducer';

export default combineReducers({
  articleListPuller: articleListPullerReducer
});
