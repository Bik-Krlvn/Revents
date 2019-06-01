import createReducer from "../../app/common/utils/reducerUtils";
import { LOGIN_USER, SIGN_OUT_USER } from "./AuthConstants";

const initialState = {
  currentUser: {}
};

export const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.credentials.email
  };
};

export const logOut = state => {
  return { ...state, authenticated: false, currentUser: {} };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: logOut
});
