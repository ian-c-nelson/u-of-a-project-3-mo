/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-underscore-dangle */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import NoMatch from "./components/pages/NoMatch";
import Login from "./components/pages/Login";
import Sidebar from "./components/common/Sidebar"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
