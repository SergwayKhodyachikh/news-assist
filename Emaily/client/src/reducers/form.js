import { SAVE_VALUES } from '../actions/types';
const initialState = {
  title: '',
  subject: '',
  body: '',
  recipients: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_VALUES:
      return { ...state, ...payload };

    default:
      return state;
  }
};
