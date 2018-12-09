import React from "react";
import Vehicle from "../../common/Vehicle";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      vehicles: [
        {
          name: "MyCar",
          model: "Tacoma",
          make: "Toyota",
          notes: "Dependable, needs work."
        },
        {
          name: "FamilyCar",
          model: "Tacoma",
          make: "Tundra",
          notes: "weekend warrior"
        }
      ],
    //   charts: []
    };
  }

  render = () => {
    const { vehicles } = this.state;
    return (
      <div className="columns is-multiline is-centered">
        {vehicles.length ? (
          vehicles.map(vehicle => (
            <div className="column is-10-mobile is-5-tablet is-3-desktop" key={vehicle.name}>
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
