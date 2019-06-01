import { LOGIN_USER, SIGN_OUT_USER } from "./AuthConstants";

export const loginUser = credentials => ({
  type: LOGIN_USER,
  payload: { credentials }
});

export const logOut = () => ({
  type: SIGN_OUT_USER
});
