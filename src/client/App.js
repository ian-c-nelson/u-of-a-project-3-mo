/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-underscore-dangle */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import RequireAuth from "./components/common/RequireAuth";
import rootReducer from "./redux/reducers";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { LeftSidebar, RightSidebar } from "./components/layouts";

import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import NoMatch from "./components/pages/NoMatch";
import Login from "./components/pages/Login";

// Configure redux with redux-thunk and dev tools
const middleware = [ReduxThunk];
const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(...middleware),
  // Required! Enable Redux DevTools with the monitors you chose
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const initialState = {
  burgerMenu: {
    left: {
      isOpen: false
    },
    right: {
      isOpen: false
    }
  }
};

const store = createStore(rootReducer, initialState, enhancer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wrapper">
            <div id="react-burger-container">
              <Header />
              <LeftSidebar pageWrapId="react-burger-page-wrap" />
              <RightSidebar pageWrapId="react-burger-page-wrap" right />
              <div id="react-burger-page">
                <Switch>
                  <Route path="/" exact component={RequireAuth(Home)} />
                  <Route path="/signup" exact component={Signup} />
                  <Route path="/login" exact component={Login} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
