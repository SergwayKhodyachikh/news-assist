import { Types } from '../actions/users';

const initialState = {
  items: [],
  error: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.GET_USERS_REQUEST:
      return { ...state, ...payload };
    case Types.GET_USERS_SUCCESS: {
      return {
        items: payload.items,
      };
    }

    case Types.USERS_ERROR: {
      console.log(payload);

      return { ...state, error: payload };
    }

    default:
      return state;
  }
};
