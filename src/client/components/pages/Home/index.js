import React from "react";
import Sidebar from "../../common/Sidebar"
import Dashboard from "../../layouts/Dashboard"




class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render = () => (
    <div>
    <div className="page home tile is-ancestor">
      <div className="tile is-tall-tile">
        <Sidebar />
      </div>
     
     

      <div className="tile is-tall-tile">
        <section className="section content">
          <div className="container">
            <Dashboard/>
          </div>
        </section>
      </div>


    </div>
    </div>


  );
}

export default Home;
