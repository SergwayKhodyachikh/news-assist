import axios from 'axios';
import _ from 'lodash';
import {
  FETCH_USER,
  PROJECTS_REQUESTED,
  PROJECTS_RECEIVED,
  PROJECTS_ERROR,
  CREATE_PROJECT
} from './types';
import history from '../history';

/**
|--------------------------------------------------
| Projects
|--------------------------------------------------
*/

export const fetchProjects = () => async dispatch => {
  dispatch({ type: PROJECTS_REQUESTED });
  try {
    const { data } = await axios.get('api/projects');
    dispatch({ type: PROJECTS_RECEIVED, payload: _.mapKeys(data, '_id') });
  } catch (err) {
    dispatch({ type: PROJECTS_ERROR, payload: err });
  }
};

export const createProject = formValues => async dispatch => {
  dispatch({ type: PROJECTS_REQUESTED });
  try {
    const { data } = await axios.post('api/projects', formValues);
    dispatch({ type: CREATE_PROJECT, payload: data });
    history.push('/dashboard/projects');
  } catch (err) {
    dispatch({ type: PROJECTS_ERROR, payload: err });
  }
};

/**
|--------------------------------------------------
| auth
|--------------------------------------------------
*/

export const fetchUser = () => async dispatch => {
  try {
    const { data: payload } = await axios.get('api/auth/current_user');
    dispatch({
      type: FETCH_USER,
      payload
    });
  } catch (err) {}
};
export const login = formValues => async dispatch => {
  await axios.post('/api/auth/login/', formValues);
  const { data: payload } = await axios.get('api/auth/current_user');
  dispatch({
    type: FETCH_USER,
    payload
  });
};

export const registerUser = formValues => async dispatch => {
  await axios.post('/api/auth/register', formValues);
  const { data: payload } = await axios.get('api/auth/current_user');
  dispatch({
    type: FETCH_USER,
    payload
  });
};
