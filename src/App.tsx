import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ApplicationState } from "./store";
import configureStore from "./configureStore";
import "./App.css";
import AppNavigator from "./navigator/AppNavigator";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import { authInitialState } from "./containers/Auth/reducers";
import React from "react";

const history = createBrowserHistory();

const initialState: ApplicationState | any = {
  auth: authInitialState,
  router: { location: history.location, action: "PUSH" },
};

const store = configureStore(history, initialState);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <AppNavigator />
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
