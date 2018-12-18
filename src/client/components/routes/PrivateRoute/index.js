import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authData, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authData ? <Component {...props} /> : <Redirect to="/login" />
        // <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
