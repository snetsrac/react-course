import { CHANGE_AUTH } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload ;
    default:
      return state;
  }
};

export default authReducer;