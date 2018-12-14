import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "../../common/Input";
import authActions from "../../../redux/actions/auth";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { credentials: { email: "", password: "" } };
  }

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
    actions.logInUser(credentials);
  };

  render = () => {
    const { credentials, counter } = this.state;

    return (
      <div className="page login">
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
                    id="sign-up-button"
                    type="button"
                    className="button is-light is-pulled-left"
                    onClick={this.onSave}
                  >
                    Sign Up
                  </button>
                  <button
                    id="log-in-button"
                    type="button"
                    className="button is-light is-pulled-right"
                    onClick={this.onSave}
                  >
                    Log In
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
