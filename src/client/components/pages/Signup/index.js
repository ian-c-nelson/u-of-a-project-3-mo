import React from "react";
import API from "../../../../../apiControllers/databaseAPI"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "../../common/Input";
import authActions from "../../../redux/actions/auth";

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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {

      },
      dispatch
    )
  };
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
