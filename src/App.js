import './App.css';
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserHistory } from "history";
import { store, persistor } from "store";
import Routes from "routes";
export const history = createBrowserHistory();


export default () => {

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </PersistGate>
  );
};
