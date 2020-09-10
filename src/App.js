import './App.css';
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "store";
import Routes from "routes";
const history = createBrowserHistory();


export default () => {

  return (
      <Provider store={store}>
            <Router history={history}>
              <Routes/>
            </Router>
      </Provider>
  );
};
