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
                },
                {
                    name: 'FamilyCar',
                    model: 'Tacoma',
                    make: 'Tundra',
                    notes: 'weekend warrior'
                }

            ],
            charts: []
        };
    }

    render = () => (
        <Tile className="is-ancestor dashboard">
            {this.state.vehicles.length ? (

                this.state.vehicles.map(vehicle => (
                    <Tile className ="is-child is-3" key={vehicle.name}>
                    <Vehicle vehicle={vehicle}  />
                        
                        
                    </Tile>
                ))

            ) : (
                    <h3>No Results to Display</h3>
                )}
        </Tile>


    );
}

export default Home;
