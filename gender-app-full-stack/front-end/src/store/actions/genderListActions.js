import * as actionTypes from './actionTypes';
import * as api from '../../api';

export const nameChange = (id, value) => ({
  type: actionTypes.NAME_CHANGE,
  payload: { id, value }
});

export const addPerson = () => ({
  type: actionTypes.ADD_PERSON
})


export const getGender = (id, name) => async dispatch => {
  console.log(id);
  
  const res = await api.getGender(name);  
  const gender = res.data.gender;
  dispatch({
    type: actionTypes.GET_GENDER_PENDING,
    payload: { loading: true }
  });
  try {
    dispatch({
      type: actionTypes.GET_GENDER_SUCCESS,
      payload: { id, gender, loading: false, getFailure: false}
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_GENDER_FAILURE,
      payload: { getFailure: true, loading: false }
    });
  }
};


