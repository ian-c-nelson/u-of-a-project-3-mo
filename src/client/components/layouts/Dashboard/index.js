import React from "react";
import Vehicle from "../../common/Vehicle";
import API from "../../../../../apiControllers/internal";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      vehicles: [
        {
          name: "My Car",
          model: "Tacoma",
          make: "Toyota",
          notes: "Dependable, needs work."
        },
        {
          name: "Family Car",
          model: "Tundra",
          make: "Toyota",
          notes: "weekend warrior"
        }
      ]
    };
  }

  componentDidMount() {
    this.loadVehicles();
  }

  loadVehicles = () => {
    API.getUserVehicles()
      .then(res =>
        this.setState({ vehicles: res.data, name: "", model: "", make: "", notes: "" })
      )
      .catch(err => console.log(err));
  };

  // deleteVehicle = id => {
  //   API.deleteUserVehicle(id)
  //     .then(res => this.loadVehicles())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };


  render = () => {
    const { vehicles } = this.state;
    return (
      <div className="columns is-multiline is-centered">
        {vehicles.length ? (
          vehicles.map(vehicle => (
            <div
              className="column is-12-mobile is-5-tablet is-3-desktop"
              key={vehicle.name}
            >
              <Vehicle vehicle={vehicle} />
            </div>
          ))
        ) : (
          <div className="column">
            <h3>No Results to Display</h3>
          </div>
        )}
      </div>
    );
  };
}

export default Home;
