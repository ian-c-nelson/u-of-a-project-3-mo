import React from "react";
import uuidv4 from "uuid/v4";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { action as toggleMenu } from "redux-burger-menu";
import validation from "../../../../../services/validation";

import { getLocation, push } from "../../../redux/actions/router";
import {
  clearAuthError,
  getAuthData,
  getAuthError,
  getAuthRequested,
  logIn,
  signUp
} from "../../../redux/actions/auth";

import {
  getFormValues,
  setFormValues
} from "../../../redux/actions/formValues";

import { Icon, TextBox, Modal } from "../../common";

class SignUp extends React.Component {
  componentDidMount = () => {
    const { actions } = this.props;
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
    actions.setFormValues({});
  };

  componentWillUnmount = () => {
    const { actions } = this.props;
    actions.setFormValues({});
  };

  validateForm = () => {
    let isValid = true;

    const { state, actions, mode } = this.props;
    const { email, password, passwordConfirmation } = state.formValues;
    const newFormValues = { ...state.formValues };

    newFormValues.emailValidation = this.validateField("email", email);
    if (!newFormValues.emailValidation.isValid) {
      isValid = false;
    }

    newFormValues.passwordValidation = this.validateField("password", password);
    if (!newFormValues.passwordValidation.isValid) {
      isValid = false;
    }

    if (mode === "SignUp") {
      if (newFormValues.passwordValidation.isValid) {
        newFormValues.passwordConfirmationValidation = this.validateField(
          "passwordConfirmation",
          passwordConfirmation
        );
        if (!newFormValues.passwordConfirmationValidation.isValid) {
          isValid = false;
        }
      }
    }

    actions.setFormValues(newFormValues);

    return isValid;
  };

  validateField = (fieldName, value) => {
    const { state, mode } = this.props;
    const { password } = state.formValues;
    const results = validation.validationObject;

    switch (fieldName) {
      case "email":
        if (!value) {
          results.isValid = false;
          results.message = "Email is required.";
          return results;
        }
        return validation.validateEmail(value);

      case "password":
        if (!value) {
          results.isValid = false;
          results.message = "Password is required.";
          return results;
        }
        return mode === "SignUp"
          ? validation.validatePassword(value)
          : validation.validationObject;

      case "passwordConfirmation":
        if (value !== password) {
          results.isValid = false;
          results.message = "Password and Password Confirmation must match.";
          return results;
        }
        return validation.validatePassword(value);

      default:
        return results;
    }
  };

  handleInputChange = event => {
    const { actions, state } = this.props;
    const newFormValues = { ...state.formValues };

    const fieldValidationName = `${event.target.name}Validation`;
    const validationResults = this.validateField(
      event.target.name,
      event.target.value
    );

    newFormValues[event.target.name] = event.target.value;
    newFormValues[fieldValidationName] = validationResults;
    actions.setFormValues(newFormValues);
  };

  handleModalOkayClick = () => {
    const { actions, state } = this.props;
    const newFormValues = { ...state.formValues };
    newFormValues.showModal = false;
    actions.setFormValues(newFormValues);
    actions.clearAuthError();
  };

  onSignUpClick = () => {
    const { actions, state } = this.props;
    const { email, password, passwordConfirmation } = state.formValues;

    const isValid = this.validateForm();
    if (isValid) {
      actions.signUp({ email, password, passwordConfirmation }).then(() => {
        actions.push("/");
      });
    } else {
      const newFormValues = { ...state.formValues };
      newFormValues.showModal = !isValid;
      actions.setFormValues(newFormValues);
    }
  };

  onLogInClick = () => {
    const { actions, state } = this.props;
    const { email, password, passwordConfirmation } = state.formValues;

    const isValid = this.validateForm();
    if (isValid) {
      actions.logIn({ email, password, passwordConfirmation }).then(() => {
        actions.push("/");
      });
    } else {
      const newFormValues = { ...state.formValues };
      newFormValues.showModal = !isValid;
      actions.setFormValues(newFormValues);
    }
  };

  render = () => {
    const { state, mode } = this.props;
    const { requested, requestError, formValues } = state;
    const {
      email,
      emailValidation,
      password,
      passwordValidation,
      passwordConfirmation,
      passwordConfirmationValidation,
      showModal
    } = formValues;

    const errorMessages = [];

    if (requestError) {
      errorMessages.push(requestError);
    }

    if (emailValidation) {
      errorMessages.push(emailValidation.message);
    }

    if (passwordValidation) {
      errorMessages.push(passwordValidation.message);
    }

    if (passwordConfirmationValidation) {
      errorMessages.push(passwordConfirmationValidation.message);
    }

    return (
      <div className={`page ${mode === "LogIn" ? "log-in" : "sign-up"}`}>
        <div className="columns is-centered form-wrapper">
          <div className="column is-10-mobile is-8-tablet is-4-desktop">
            <form>
              <div className="form-header">
                <span className="form-title">
                  {`${mode === "LogIn" ? "Log In" : "Sign Up"}`}
                </span>
              </div>
              <div className="columns is-multiline is-centered form-content">
                <div className="column is-12">
                  <TextBox
                    type="email"
                    name="email"
                    value={email}
                    validation={emailValidation}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <TextBox
                    type="password"
                    name="password"
                    value={password}
                    validation={passwordValidation}
                    onChange={this.handleInputChange}
                  />
                </div>
                {mode === "SignUp" ? (
                  <div className="column is-12">
                    <TextBox
                      type="password"
                      name="passwordConfirmation"
                      placeholder="Confirm Password"
                      value={passwordConfirmation}
                      validation={passwordConfirmationValidation}
                      onChange={this.handleInputChange}
                    />
                  </div>
                ) : null}

                <div className="column is-12 is-clearfix button-bar">
                  {mode === "LogIn" ? (
                    <div>
                      <button
                        type="button"
                        disabled={requested}
                        className="button is-light is-pulled-left"
                        onClick={this.onLogInClick}
                      >
                        <strong>Log In</strong>
                      </button>
                      <Link
                        className="is-pulled-left"
                        to="/signup"
                        disabled={requested}
                      >
                        Or click here to create an account.
                      </Link>
                    </div>
                  ) : (
                    <button
                      type="button"
                      disabled={requested}
                      className="button is-light is-pulled-left"
                      onClick={this.onSignUpClick}
                    >
                      <strong>Sign Up</strong>
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <Modal
          show={showModal || !!requestError}
          title="Authentication Error"
          handleModalOkayClick={this.handleModalOkayClick}
        >
          <ul>
            {errorMessages ? (
              [...new Set(errorMessages)].map(msg =>
                msg ? (
                  <li key={uuidv4()} className="error-message">
                    <div className="columns">
                      <div className="column is-1 has-text-right">
                        <Icon
                          icon={["far", "exclamation-circle"]}
                          className="has-text-danger"
                          size="s"
                        />
                      </div>
                      <div className="column is-11">{msg}</div>
                    </div>
                  </li>
                ) : null
              )
            ) : (
              <p>Loading...</p>
            )}
          </ul>
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
      requestError: getAuthError(state),
      requested: getAuthRequested(state),
      location: getLocation(state)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        clearAuthError,
        logIn,
        push,
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
