import { action } from "typesafe-actions";
import { AuthActionTypes } from "./types";

export const loginRequest = () =>
action(AuthActionTypes.LOGIN_REQUEST);
export const loginSuccess = (res: any) =>
action(AuthActionTypes.LOGIN_SUCCESS, res);
export const loginError = (message: Error) =>
action(AuthActionTypes.LOGIN_ERROR, message);

