import {
  // PROJECTS_REQUESTED,
  PROJECTS_RECEIVED,
  // PROJECTS_ERROR,
  CREATE_PROJECT
} from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROJECTS_RECEIVED:
      return { ...state, ...payload };
    case CREATE_PROJECT:
      return { ...state, [payload._id]: payload };
    default:
      return state;
  }
};
