import { AuthState, AuthActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: AuthState = {
  loading: false,
  errors: { }
};

// const loginSuccess = (
//   state: AuthState,
//   res: { headers: { "x-session-id": string }; data: User }
// ) => {
//   API.saveToLocalStorage("x-session-id", res.headers["x-session-id"]);
//   API.saveToLocalStorage("user", res.data.customerName);
//   API.saveToLocalStorage("tradeLicenseNumber", res.data.tradeLicenseNumber);

//   return {
//     ...state,
//     loading: false,
//     xSessionID: res.headers["x-session-id"],
//     user: res.data
//   };
// };

// const logOutSuccess = (state: AuthState) => {
//   API.clearFromLocalStorage("x-session-id");
//   API.clearFromLocalStorage("user");
//   API.clearFromLocalStorage("tradeLicenseNumber");

//   return {
//     ...state,
//     loading: false,
//     isLoginSuccess: false,
//     sendOtp:false,
//     xSessionID: null,
//     user: null
//   };
// };

type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<AuthState, A> = (
  state: AuthState = initialState,
  action: A
) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, user: undefined }
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {...state,loading:false,};
    case AuthActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, user: action.payload }
      };

    default:
      return state;
  }
};

export { initialState as authInitialState, reducer as authReducer };
