import * as actionTypes from '../actions/actionTypes';

const initialState = {
  genderListData: [
    {
      id: 0,
      name: '',
      gender: ''
    }
  ],
  loading: false,
  getFailure: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NAME_CHANGE:
      let { id, value } = action.payload;
      let updatedName = {
        ...state.genderListData[id],
        name: value
      };
      const updatedGenderListData = [...state.genderListData];
      updatedGenderListData[id] = updatedName;
      return { ...state, genderListData: updatedGenderListData };


    case actionTypes.GET_GENDER_PENDING: {
      let { loading } = action.payload;
      return { ...state, loading };
    }
    case actionTypes.GET_GENDER_SUCCESS: {
      let { loading, getFailure, id, gender } = action.payload;
      const updatedItem = {
        ...state.genderListData[id],
        gender: gender
      };
      const updatedGenderListData = [...state.genderListData];
      updatedGenderListData[id] = updatedItem;
      return {
        ...state,
        loading,
        getFailure,
        genderListData: updatedGenderListData
      };
    }
    case actionTypes.GET_GENDER_FAILURE: {
      let { loading, getFailure } = action.payload;
      return { ...state, loading, getFailure };
    }



    case actionTypes.ADD_PERSON: {
      const newGenderListData = [...state.genderListData];
      newGenderListData.push({
        id: state.genderListData.length,
        name: '',
        gender: ''
      });
      return { ...state, genderListData: newGenderListData };
    }

    default:
      return state;
  }
};
