import React from "react";
import { Card, CardHeader, CardFooter, CardContent } from "../../common/Card"


function Vehicle(props) {
    const { vehicle } = props;
    const btns = [

    ]
    return (
        <Card btns={btns}  >
            <CardHeader title={vehicle.name} />
            <CardContent >
                <h2>{vehicle.make}</h2>
                <h4>{vehicle.model}</h4>
                <p>{vehicle.notes}</p>
            </CardContent>
            <CardFooter>
                <a href="#" className="card-footer-item">Save</a>,
                <a href="#" className="card-footer-item">Edit</a>,
                <a href="#" className="card-footer-item">Delete</a>

            </CardFooter>


        </Card>






    );
}

export default Vehicle;
