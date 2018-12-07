import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "../../common/Input";
import authActions from "../../../actions/authActions";

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
    const { email, password } = this.state;
    return (
      <div className="page login">
        <div className="container">
          <form>
            <div className="columns">
              <div className="column is-half is-centered">
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="column is-half is-centered">
                <Input
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="column is-half is-centered">
                <button
                  type="button"
                  className="button is-primary"
                  text="Login"
                  onClick={this.onSave}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
