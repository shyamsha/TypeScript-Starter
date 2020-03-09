export interface LoginFormParams {
  username: string;
  password: string;
}

export enum AuthActionTypes {
  LOGIN_REQUEST = "@@auth/login/LOGIN_REQUEST",
  LOGIN_SUCCESS = "@@auth/login/LOGIN_SUCCESS",
  LOGIN_ERROR = "@@auth/login/LOGIN_ERROR",

  LOGOUT_REQUEST = "@@auth/logout/LOGOUT_REQUEST",
  LOGOUT_SUCCESS = "@@auth/logout/LOGOUT_SUCCESS",
  LOGOUT_ERROR = "@@auth/logout/LOGOUT_ERROR",
}

export interface AuthState {
  readonly loading: boolean;
  readonly errors: {};
}
