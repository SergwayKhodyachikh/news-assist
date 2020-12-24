import {
  CREATE_USER,
  FETCH_USERS,
  EDIT_USER,
  FETCH_USER,
  SEARCH_USER,
  DELETE_USER,
  CREATE_TASK,
  FETCH_TASK,
  EDIT_TASK,
  DELETE_TASK,
  CREATE_POST,
  FETCH_POST,
  EDIT_POST,
  DELETE_POST
} from './types';
import userManagementServer from '../apis/userManagementServer';
import history from '../history';
import _ from 'lodash';

export const createUser = formValues => async dispatch => {
  const { data } = await userManagementServer.post('/users', formValues);
  await dispatch({
    type: CREATE_USER,
    payload: data
  });
  history.push('/');
};

export const createTask = formValues => async dispatch => {
  const { data } = await userManagementServer.post('/tasks/', formValues);
  await dispatch({ type: CREATE_TASK, payload: data });
  history.push('/');
};

export const createPost = formValues => async dispatch => {
  const { data } = await userManagementServer.post('/posts/', formValues);
  await dispatch({ type: CREATE_POST, payload: data });
  history.push('/');
};

export const fetchUsers = () => async dispatch => {
  const { data: users } = await userManagementServer.get('/users/');
  const { data: tasks } = await userManagementServer.get('/tasks/');
  const { data: posts } = await userManagementServer.get('/posts/');
  users.forEach(user => {
    user.tasks = _.mapKeys(tasks.filter(task => task.userId === user.id), 'id');
    user.posts = _.mapKeys(posts.filter(post => post.userId === user.id), 'id');
  });
  dispatch({ type: FETCH_USERS, payload: users });
};

export const fetchTask = taskId => async dispatch => {
  const { data } = await userManagementServer.get(`/tasks/${taskId}`);
  dispatch({ type: FETCH_TASK, payload: data });
};
export const fetchPost = postId => async dispatch => {
  const { data } = await userManagementServer.get(`/posts/${postId}`);
  dispatch({ type: FETCH_POST, payload: data });
};

export const editTask = (taskId, formValues) => async dispatch => {
  console.log(formValues);

  const { data } = await userManagementServer.put(
    `/tasks/${taskId}`,
    formValues
  );
  console.log(data);

  dispatch({ type: EDIT_TASK, payload: data });
  history.push('/');
};

export const editPost = (postId, formValues) => async dispatch => {
  const { data } = await userManagementServer.put(
    `/posts/${postId}`,
    formValues
  );
  dispatch({ type: EDIT_POST, payload: data });
  history.push('/');
};

export const fetchUser = id => async dispatch => {
  const { data } = await userManagementServer.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: data });
};

export const editUser = (id, formValues) => async dispatch => {
  const { city, email, name, number, phoneType } = formValues;
  if (number)
    await userManagementServer.post(`/users/${id}/phones`, {
      number,
      phoneType
    });
  const { data } = await userManagementServer.put(`/users/${id}`, {
    name,
    email,
    city
  });
  await dispatch({ type: EDIT_USER, payload: data });
  history.push('/');
};

export const searchUser = value => ({ type: SEARCH_USER, payload: value });

export const deleteUser = id => async dispatch => {
  await userManagementServer.delete(`/users/${id}`);
  dispatch({ type: DELETE_USER, payload: id });
  history.push('/');
};

export const deleteTask = idParams => async dispatch => {
  await userManagementServer.delete(`/tasks/${idParams.taskId}`);
  dispatch({ type: DELETE_TASK, payload: idParams });
  history.push('/');
};
export const deletePost = idParams => async dispatch => {
  await userManagementServer.delete(`/posts/${idParams.postId}`);
  dispatch({ type: DELETE_POST, payload: idParams });
  history.push('/');
};
