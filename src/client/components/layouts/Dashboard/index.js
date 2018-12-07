import React from "react";


import Tile from "../../common/Tile"
import Vehicle from "../../common/Vehicle"

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            vehicles: [
                {
                    name: 'MyCar',
                    model: 'Tacoma',
                    make: 'Toyota',
                    notes: 'Dependable, needs work.'
                }
            ],
            charts: []
        };
    }

    render = () => (
        <div className="tile is-ancestor">
            {this.state.vehicles.length ? (

                this.state.vehicles.map(vehicle => (
                    <Tile key={vehicle.name}>
                    <Vehicle vehicle={vehicle}  />
                        
                        
                    </Tile>
                ))

            ) : (
                    <h3>No Results to Display</h3>
                )}
        </div>


    );
}

export default Home;
