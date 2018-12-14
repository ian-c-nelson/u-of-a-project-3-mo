import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import { Input } from "../../common";

class SignUp extends React.Component {
  constructor() {
    super();
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
    actions.logInUser(credentials);
  };

  render = () => {
    const { credentials, counter } = this.state;

    return (
      <div className="page login">
        <form>
          <div className="columns">
            <div className="column is-half is-centered">
              <Input
                name="email"
                type="email"
                value={credentials.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="column is-half is-centered">
              <Input
                name="password"
                type="password"
                value={credentials.password}
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
    );
  };
}

function mapStateToProps(state) {
  return {
    state: {
      burgerMenu: state.burgerMenu
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
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
