import React from "react";
import API from "../../../../../apiControllers/internal"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import { Input } from "../../common";

import {
  signUp,
  getToken,
  getSignUpError,
  getSignUpRequested
} from "../../../redux/actions/auth";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  };

  state = {
    users: [],
    email: "",
    password: "",
  };

  handleFormSubmit = event =>{
    event.preventDefault();
    if (this.state.email && this.state.password){
      API.saveUser({
        email: this.state.email,
        password: this.state.password,
      })
      .then (res => this.loadSignUp)
      .catch(err => console.log(err));
    }
    this.state = { credentials: { email: "", password: "" } };
  }

  componentDidMount = () => {
    const { actions } = this.props;
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  handleInputChange = event => {
    const field = event.target.name;
    const { credentials } = this.state;
    credentials[field] = event.target.value;
    return this.setState({ credentials });
  };

  onSave = event => {
    const { actions } = this.props;
    const { credentials } = this.state;
    event.preventDefault();
    console.log(this.state);
    actions.signUp(credentials);
  };

  render = () => {
    const { credentials } = this.state;

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
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    state: {
      burgerMenu: state.burgerMenu,
      token: getToken(),
      signUpError: getSignUpError(),
      signUpRequested: getSignUpRequested()
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
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
