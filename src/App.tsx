import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ApplicationState } from './store';
import configureStore from './configureStore';
import './App.css';
import AppNavigator from './navigator/AppNavigator';

const history = createBrowserHistory();

const initialState: ApplicationState = {
  router: ({ location: history.location, action: 'PUSH' })
}

const store = configureStore(history, initialState)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppNavigator/>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
