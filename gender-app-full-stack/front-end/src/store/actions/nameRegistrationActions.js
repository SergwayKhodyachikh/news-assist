import * as actionTypes from './actionTypes';
import * as api from '../../api';

export const registerNameChange = name => ({
  type: actionTypes.REGISTER_NAME_CHANGE,
  payload: name
});

export const registerGenderSelect = gender => ({
  type: actionTypes.REGISTER_GENDER_SELECT,
  payload: gender
});

export const postGender = (registerName, registerGender) => async dispatch => {
  dispatch({
    type: actionTypes.POST_GENDER_PENDING,
    payload: { loading: true, res: '' }
  });
  const res = await api.postGender(registerName, registerGender);
  console.log(res);

  try {
    dispatch({
      type: actionTypes.POST_GENDER_SUCCESS,
      payload: { loading: false, getFailure: false, res: 'send' }
    });
    if(res.status!==200) {
      return Promise.reject(res.status);
    }
  } catch (err) {
    dispatch({
      type: actionTypes.POST_GENDER_FAILURE,
      payload: { loading: false, getFailure: true, res: 'send' }
    });
  }
};
