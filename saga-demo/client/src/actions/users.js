export const Types = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
  USERS_ERROR: 'USERS_ERROR',
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { items },
});

export const createUserRequest = (user) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: user,
});

export const deleteUserRequest = (userId) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: userId,
});

export const usersError = (e) => ({
  type: Types.USERS_ERROR,
  payload: e,
});
