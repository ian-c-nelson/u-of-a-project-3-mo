import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import PrivateRoute from "./PrivateRoute";
import { getAuthData } from "../../redux/actions/auth";

import { Header, Footer } from "../common";
import { LeftSidebar, RightSidebar } from "../layouts";
import * as pages from "../pages";

function Routes(props) {
    const { history, state } = props;
    const { authData } = state;
    return (
      <ConnectedRouter history={history}>
        <div className="wrapper">
          <div id="react-burger-container">
            <Header authData={authData} />
            <LeftSidebar
              authData={authData}
              pageWrapId="react-burger-page-wrap"
              className="left-nav"
              width={280}
            />
            <RightSidebar
              authData={authData}
              pageWrapId="react-burger-page-wrap"
              className="right-nav"
              width={375}
              right
            />
            <div id="react-burger-page">
              <Switch>
                {/* Open Routes */}
                <Route path="/login" exact component={pages.LogIn} />
                <Route path="/signup" exact component={pages.SignUp} />
                {/* Secured Routes */}
                <PrivateRoute
                  path="/home"
                  exact
                  component={pages.Home}
                  authData={authData}
                />
                <PrivateRoute
                  path="/sandbox"
                  exact
                  component={pages.SandBox}
                  authData={authData}
                />
                <PrivateRoute
                  path="/vehicles/add"
                  exact
                  component={pages.AddVehicle}
                  authData={authData}
                />
                <PrivateRoute
                  path="/"
                  exact
                  component={pages.Home}
                  authData={authData}
                />
                {/* 404 */}
                <Route component={pages.NoMatch} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </ConnectedRouter>
    );
}

function mapStateToProps(state) {
  return {
    state: {
      authData: getAuthData(state)
    }
  };
}

export default connect(
  mapStateToProps,
  null
)(Routes);
