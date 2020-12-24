import { AUTH_USER, AUTH_ERROR } from './types';
import history from '../history';
import server from '../api/server';

export const signup = formValues => async dispatch => {
  try {
    const { data: payload } = await server.post('/signup', formValues);

    dispatch({
      type: AUTH_USER,
      payload
    });

    localStorage.setItem('token', payload.token);
    history.push('/feature');
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email in use'
    });
  }
};

export const signin = formValues => async dispatch => {
  try {
    const { data: payload } = await server.post('/signin', formValues);

    dispatch({
      type: AUTH_USER,
      payload
    });
    localStorage.setItem('token', payload.token);
    history.push('/feature');
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid login credential!'
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};
