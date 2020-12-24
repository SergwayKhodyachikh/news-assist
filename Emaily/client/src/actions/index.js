import axios from 'axios';
import { FETCH_USER, SAVE_VALUES, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const { data: payload } = await axios.get('api/current_user');
  dispatch({
    type: FETCH_USER,
    payload
  });
};

export const handleToken = token => async dispatch => {
  const { data: payload } = await axios.post('/api/stripe', token);
  dispatch({
    type: FETCH_USER,
    payload
  });
};
export const saveValues = formValues => ({
  type: SAVE_VALUES,
  payload: formValues
});

export const submitSurvey = (values, history) => async dispatch => {
  const { data } = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: data });
};

export const fetchSurveys = () => async dispatch => {
  const { data } = await axios.get('api/surveys');

  dispatch({
    type: FETCH_SURVEYS,
    payload: data
  });
};
