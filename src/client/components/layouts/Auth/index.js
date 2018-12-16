/* eslint-disable no-useless-escape */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { action as toggleMenu } from "redux-burger-menu";
import { Input, Modal } from "../../common";
import validation from "../../../../../services/validation";

import {
  clearAuthError,
  getAuthData,
  getSignUpError,
  getAuthRequested,
  logIn,
  signUp
} from "../../../redux/actions/auth";

import {
  setFormValues,
  getFormValues
} from "../../../redux/actions/formValues";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  }

  handleModalOkayClick = () => {
    const { actions } = this.props;
    actions.clearAuthError();
  };

  componentDidMount = () => {
    const { actions } = this.props;
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  handleInputChange = event => {
    const fieldValidationName = `${event.target.name}Validation`;
    const validationResults = this.validateField(
      event.target.name,
      event.target.value
    );

    this.setState({
      [event.target.name]: event.target.value,
      [fieldValidationName]: validationResults
    });
  };

  validateForm = () => {
    const {
      emailValidation,
      passwordValidation,
      passwordConfirmationValidation
    } = this.state;

    return (
      emailValidation && passwordValidation && passwordConfirmationValidation
    );
  };

  validateField = (fieldName, value) => {
    const { password } = this.state;
    const results = validation.validationObject;
    switch (fieldName) {
      case "email":
        if (!value) {
          results.IsValid = false;
          results.message = "Email is required.";
          return results;
        }
        return validation.email(value);

      case "password":
        return validation.password(value);

      case "passwordConfirmation":
        if (value !== password) {
          results.IsValid = false;
          results.message = "Password and Password Confirmation must match.";
          return results;
        }
        return validation.password(value);

      default:
        return results;
    }
  };

  onSignUpClick = () => {
    const { state, actions } = this.props;
    actions.signUp(state.formValues);
  };

  onLogInClick = () => {
    const { state, actions } = this.props;
    actions.logIn(state.formValues);
  };

  render = () => {
    const {
      email,
      emailValidation,
      password,
      passwordValidation,
      passwordConfirmation,
      passwordConfirmationValidation
    } = this.state;
    const { state, mode } = this.props;
    const { authError } = state;

    return (
      <div className={`page ${mode === "LogIn" ? "log-in" : "sign-up"}`}>
        <div className="columns is-centered is-vcentered">
          <div className="column is-10-mobile is-8-tablet is-4-desktop form-wrapper">
            <form>
              <div className="columns is-multiline is-centered">
                <div className="column is-12">
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    validation={emailValidation}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    validation={passwordValidation}
                    onChange={this.handleInputChange}
                  />
                </div>
                {mode === "SignUp" ? (
                  <div className="column is-12">
                    <Input
                      type="password"
                      name="passwordConfirmation"
                      placeholder="Confirm Password"
                      value={passwordConfirmation}
                      validation={passwordConfirmationValidation}
                      onChange={this.handleInputChange}
                    />
                  </div>
                ) : null}

                <div className="column is-12 is-clearfix">
                  {mode === "LogIn" ? (
                    <div>
                      <Link
                        className="button is-light is-pulled-left"
                        to="/signup"
                      >
                        Sign Up
                      </Link>

                      <button
                        type="button"
                        className="button is-light is-pulled-right"
                        onClick={this.onLogInClick}
                      >
                        Log In
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="button is-light is-pulled-left"
                      onClick={this.onSignUpClick}
                    >
                      Sign Up
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <Modal
          show={!!authError}
          title="Authentication Error"
          handleModalOkayClick={this.handleModalOkayClick}
        >
          <p>{authError}</p>
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
      formValues: getFormValues(state),
      authError: getSignUpError(state),
      authRequested: getAuthRequested(state)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        clearAuthError,
        logIn,
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
