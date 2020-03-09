import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { RouterState, connectRouter } from 'connected-react-router';
import { all, fork } from 'redux-saga/effects';
import { History } from 'history'
import { AuthState } from './containers/Auth/types';
import { authReducer } from './containers/Auth/reducers';
import { Reducer } from 'typesafe-actions';
import { authSaga } from './containers/Auth/saga';

// The top-level state object.
//
// `connected-react-router` already injects the router state typings for us,
// so we can ignore them here.
export interface ApplicationState {
  auth: AuthState;
  router: RouterState<History.PoorMansUnknown>
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>
  combineReducers({
    auth: authReducer as Reducer<AuthState, AnyAction>,
    router: connectRouter(history)
  })

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([fork(authSaga)])
}
