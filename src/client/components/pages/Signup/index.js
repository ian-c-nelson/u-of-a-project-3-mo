import React from "react";
import API from "../../../../../apiControllers/databaseAPI"

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
  }

  render = () => (
    <div className="page sign-up">
      <h1>Signup Page</h1>
    </div>
  );
}

export default SignUp;
