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
                component={pages.Home}
                authData={authData}
                exact
              />
              <PrivateRoute
                path="/sandbox"
                component={pages.SandBox}
                authData={authData}
                exact
              />
              <PrivateRoute
                path="/vehicles/add"
                component={pages.AddVehicle}
                authData={authData}
                exact
              />
              <PrivateRoute
                path="/vehicles/edit/:id"
                component={pages.EditVehicle}
                authData={authData}
              />
              <PrivateRoute
                path="/maintenance/add"
                component={pages.AddMaintenance}
                authData={authData}
                exact
              />
              <PrivateRoute
                path="/maintenance/"
                component={pages.ViewMaintenance}
                authData={authData}
                exact
              />
              <PrivateRoute
                path="/maintenance/edit/:id"
                component={pages.ViewMaintenance}
                authData={authData}
              />

              <PrivateRoute
                path="/"
                exact
                component={pages.Home}
                // component={pages.AddVehicle}
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
