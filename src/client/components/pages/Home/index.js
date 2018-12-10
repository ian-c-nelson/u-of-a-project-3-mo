import React from "react";
import Dashboard from "../../layouts/Dashboard";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render = () => (
    <div className="page home">
      <Dashboard />
    </div>
  );
}

export default Home;
