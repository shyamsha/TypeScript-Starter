import { Action } from "redux";
import { put,call, takeLatest, all, fork } from "redux-saga/effects";
import { loginError, loginSuccess } from "./actions";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { AuthActionTypes } from "./types";

type SagaAction<T> = Action & { payload: T };

function* login(): any {
  try {
    let res = yield call(Api.test);
    if (res.error) {
      yield put(loginError(res.error));
    } else {
      yield put(loginSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(loginError(err));
    } else {
      yield put(loginError(unknownError("An unknown error occurred")));
    }
  }
}

function* watchFetchRequest() {
    yield takeLatest(AuthActionTypes.LOGIN_REQUEST, login);
  }

  export function* authSaga() {
    yield all([fork(watchFetchRequest)]);
  }
