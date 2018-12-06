import React from "react";
import Input from "../../common/Input";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render = () => {
    const { email, password } = this.state;
    return (
      <div className="page login">
        <div className="container">
          <form>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </form>
        </div>
      </div>
    );
  };
}

export default Login;
