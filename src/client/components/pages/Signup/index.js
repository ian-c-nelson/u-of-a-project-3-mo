import React from "react";
import API from "../../../../../apiControllers/internal"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import { Input, Modal } from "../../common";

import {
  clearAuth,
  signUp,
  getAuthData,
  getSignUpError,
  getSignUpRequested
} from "../../../redux/actions/auth";

import {
  setFormValues,
  getFormValues
} from "../../../redux/actions/formValues";

class SignUp extends React.Component {
  handleModalOkayClick = () => {
    const { actions } = this.props;
    actions.clearAuth();
  };

  componentDidMount = () => {
    const { actions } = this.props;
    actions.setFormValues({ email: "", password: "" });
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  handleInputChange = event => {
    const { state } = this.props;
    const { actions } = this.props;
    const field = event.target.name;
    state.credentials[field] = event.target.value;
    actions.setFormValues(state.credentials);
  };


  onSave = event => {
    const { state } = this.props;
    const { actions } = this.props;
    event.preventDefault();
    actions.signUp(state.credentials);
  };

  render = () => {
    const { state } = this.props;
    const { credentials, signUpError } = state;

    return (
      <div className="page sign-up">
        <div className="columns is-centered is-vcentered">
          <div className="column is-10-mobile is-8-tablet is-4-desktop form-wrapper">
            <form>
              <div className="columns is-multiline is-centered">
                <div className="column is-12">
                  <Input
                    name="email"
                    type="email"
                    value={credentials.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <Input
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12 is-clearfix">
                  <button
                    type="button"
                    className="button is-light is-pulled-right"
                    onClick={this.onSave}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Modal
          show={!!signUpError}
          title="Authentication Error"
          handleModalOkayClick={this.handleModalOkayClick}
        >
          <p>{signUpError}</p>
        </Modal>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    state: {
      burgerMenu: state.burgerMenu,
      authData: getAuthData(state),
      credentials: getFormValues(state),
      signUpError: getSignUpError(state),
      signUpRequested: getSignUpRequested(state)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        clearAuth,
        setFormValues,
        signUp,
        toggleMenu
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
