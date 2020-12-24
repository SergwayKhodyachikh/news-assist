import _ from 'lodash';
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
  EDIT_POST,
  CREATE_POST,
  FETCH_POST,
  DELETE_POST
} from '../actions/types';

const initialState = {
  userList: {},
  searchValue: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_USER:
      return { ...state, searchValue: payload };

    case FETCH_USERS:
      return {
        ...state,
        userList: { ...state.userList, ..._.mapKeys(payload, 'id') },
        searchValue: ''
      };

    case CREATE_USER:
    case FETCH_USER:
    case EDIT_USER:
      return {
        ...state,
        userList: { ...state.userList, [payload.id]: payload },
        searchValue: ''
      };

    case DELETE_USER:
      return {
        ...state,
        userList: { ..._.omit(state.userList, payload) },
        searchValue: ''
      };

    /**
    |--------------------------------------------------
    | TASKS
    |--------------------------------------------------
    */
    case EDIT_TASK:
    case CREATE_TASK:
    case FETCH_TASK:
      return {
        ...state,
        searchValue: '',
        userList: {
          ...state.userList,
          [payload.userId]: {
            ...state.userList[payload.userId],
            tasks: state.userList[payload.userId]
              ? {
                  ...state.userList[payload.userId].tasks,
                  [payload.id]: payload
                }
              : {
                  [payload.id]: payload
                }
          }
        }
      };

    case DELETE_TASK:
      return {
        ...state,
        searchValue: '',
        userList: {
          ...state.userList,
          [payload.id]: {
            ...state.userList[payload.id],
            tasks: {
              ..._.omit(state.userList[payload.id].tasks, payload.taskId)
            }
          }
        }
      };

    /**
  |--------------------------------------------------
  | POSTS
  |--------------------------------------------------
  */
    case EDIT_POST:
    case CREATE_POST:
    case FETCH_POST:
      return {
        ...state,
        searchValue: '',
        userList: {
          ...state.userList,
          [payload.userId]: {
            ...state.userList[payload.userId],
            posts: state.userList[payload.userId]
              ? {
                  ...state.userList[payload.userId].posts,
                  [payload.id]: payload
                }
              : {
                  [payload.id]: payload
                }
          }
        }
      };

    case DELETE_POST:
      return {
        ...state,
        searchValue: '',
        userList: {
          ...state.userList,
          [payload.id]: {
            ...state.userList[payload.id],
            posts: {
              ..._.omit(state.userList[payload.id].posts, payload.postId)
            }
          }
        }
      };

    default:
      return state;
  }
};
