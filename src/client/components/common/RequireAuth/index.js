import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default function requireAuth(WrappedComponent) {
  // eslint-disable-next-line react/prefer-stateless-function
  class Authentication extends Component {
    render() {
      // TODO read JWT
      // if (!this.props.authenticated) {
      //   return <Redirect to="/" />;
      // }

      return <WrappedComponent {...this.props} />;
    }
  }

  return Authentication;
}
