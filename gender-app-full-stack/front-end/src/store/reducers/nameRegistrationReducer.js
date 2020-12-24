import * as actionTypes from '../actions/actionTypes';

const initialState = {
  registerName: '',
  registerGender: '',
  loading: false,
  getFailure: false,
  res: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_NAME_CHANGE:
      return { ...state, registerName: action.payload };
    case actionTypes.REGISTER_GENDER_SELECT:
      return { ...state, registerGender: action.payload };


    case actionTypes.POST_GENDER_PENDING: {
      let { loading, res } = action.payload;
      return { ...state, loading, res };
    }
    case actionTypes.POST_GENDER_SUCCESS: {
      let { loading, getFailure, res } = action.payload;
      return { ...state, loading, getFailure, res };
    }
    case actionTypes.POST_GENDER_FAILURE: {
      let { loading, getFailure, res } = action.payload;
      return { ...state, loading, getFailure, res };
    }

    default:
      return state;
  }
};
