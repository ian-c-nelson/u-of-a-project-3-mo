import React from "react";
import { Card, CardHeader, CardFooter, CardContent } from "../../common/Card"
import { Link } from "react-router-dom";


function Vehicle(props) {
    console.log(props);
    const { vehicle } = props;

    return (
       
        <Card   >
            <CardHeader title={vehicle.name} />
            <CardContent >
                <h4>{vehicle.make}</h4>
                <h6>{vehicle.model}</h6>
                <p>{vehicle.notes}</p>
            </CardContent>
            <CardFooter>
                <Link to="#" className="card-footer-item">Maintenance</Link>
                <Link to="#" className="card-footer-item">Edit</Link>
                <Link to="#" className="card-footer-item">Delete</Link>
            </CardFooter>


        </Card>






    );
}

export default Vehicle;
