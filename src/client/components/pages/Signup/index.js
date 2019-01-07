import React from "react";
import uuidv4 from "uuid/v4";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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

import { Icon, TextBox, Modal } from "../../common";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }

  componentDidMount = () => {
    const { actions } = this.props;
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  getInitialState = () => {
    return {
      formValues: {
        email: "",
        password: "",
        passwordConfirmation: "",
        errorMessages: [],
        showModal: false
      },
      formValidation: {
        email: null,
        password: null,
        passwordConfirmation: null
      }
    };
  };

  validateForm = () => {
    let isValid = true;

    const { formValues, formValidation } = this.state;

    formValues.errorMessages = [];

    formValidation.email = this.validateField("email", formValues.email);
    if (!formValidation.email.isValid) {
      formValues.errorMessages.push(formValidation.email.message);
      isValid = false;
    }

    formValidation.password = this.validateField(
      "password",
      formValues.password
    );
    if (!formValidation.password.isValid) {
      formValues.errorMessages.push(formValidation.password.message);
      isValid = false;
    }

    formValidation.passwordConfirmation = this.validateField(
      "passwordConfirmation",
      formValues.passwordConfirmation
    );
    if (!formValidation.passwordConfirmation.isValid) {
      formValues.errorMessages.push(
        formValidation.passwordConfirmation.message
      );
      isValid = false;
    }

    this.setState({ formValidation });

    return isValid;
  };

  validateField = (fieldName, value) => {
    const { formValues } = this.state;
    let results = { ...validation.validationObject };

    switch (fieldName) {
      case "email":
        if (!value) {
          results.isValid = false;
          results.message = "Email is required.";
        } else {
          results = validation.validateEmail(value);
        }
        break;

      case "password":
        if (!value) {
          results.isValid = false;
          results.message = "Password is required.";
        } else {
          results = validation.validatePassword(value);
        }
        break;

      case "passwordConfirmation":
        if (!value) {
          results.isValid = false;
          results.message = "Password Confirmation is required.";
        } else if (value !== formValues.password) {
          results.isValid = false;
          results.message = "Password and Password Confirmation must match.";
        } else {
          results = validation.validatePassword(value);
        }
        break;

      default:
        break;
    }

    return results;
  };

  handleInputChange = event => {
    const { formValues, formValidation } = this.state;

    const validationResults = this.validateField(
      event.target.name,
      event.target.value
    );

    formValues[event.target.name] = event.target.value;
    formValidation[event.target.name] = validationResults;
    this.setState({
      formValues,
      formValidation
    });
  };

  handleModalOkayClick = () => {
    const { actions } = this.props;
    const { formValues } = this.state;
    formValues.showModal = false;
    this.setState({ formValues });
    actions.clearAuthError();
  };

  onSignUpClick = () => {
    const { actions } = this.props;
    const { formValues } = this.state;
    const { email, password, passwordConfirmation } = formValues;

    const isValid = this.validateForm();
    if (isValid) {
      actions.signUp({ email, password, passwordConfirmation }).then(() => {
        this.setState(this.getInitialState());
        actions.push("/");
      });
    } else {
      formValues.showModal = !isValid;
      this.setState({ formValues });
    }
  };

  render = () => {
    const { actions, reduxState } = this.props;
    const { requested, requestError, authData } = reduxState;
    const { formValues, formValidation } = this.state;
    let { showModal } = formValues;

    if (requestError) {
      showModal = true;
      formValues.errorMessages.push(requestError);
    }
    
    if (authData) {
      this.setState(this.getInitialState());
      actions.push("/");
    }

    return (
      <div className="page sign-up">
        <div className="columns is-centered form-wrapper">
          <div className="column is-10-mobile is-8-tablet is-4-desktop">
            <form>
              <div className="form-header">
                <span className="form-title">Sign Up</span>
              </div>
              <div className="columns is-multiline is-centered form-content">
                <div className="column is-12">
                  <TextBox
                    type="email"
                    name="email"
                    value={formValues.email}
                    validation={formValidation.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <TextBox
                    type="password"
                    name="password"
                    value={formValues.password}
                    validation={formValidation.password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <TextBox
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    value={formValues.passwordConfirmation}
                    validation={formValidation.passwordConfirmation}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="column is-12 is-clearfix button-bar">
                  <button
                    type="button"
                    disabled={requested}
                    className="button is-light is-pulled-left"
                    onClick={this.onSignUpClick}
                  >
                    <strong>Sign Up</strong>
                  </button>
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
            {formValues.errorMessages ? (
              [...new Set(formValues.errorMessages)].map(msg =>
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
    reduxState: {
      burgerMenu: state.burgerMenu,
      authData: getAuthData(state),
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
