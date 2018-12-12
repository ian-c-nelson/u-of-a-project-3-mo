import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "../../common/Input";
// import authActions from "../../../redux/actions/auth";
import * as fromCounter from "../../../redux/actions/counter";

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
    // actions.logInUser(credentials);

    actions.decrementCounter();
  };

  render = () => {
    const { credentials, counter } = this.state;

    // console.log(this.state);

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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        decrementCounter: fromCounter.decrementCounter,
        incrementCounter: fromCounter.incrementCounter
      },
      dispatch
    )
  };
}

function mapStateToProps(state) {
  return {
    counter: fromCounter.getCounter(state)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
