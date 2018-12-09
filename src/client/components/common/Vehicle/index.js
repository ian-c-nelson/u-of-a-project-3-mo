import React from "react";
import { Card, CardHeader, CardFooter, CardContent } from "../Card";
import Icon from "../Icon";

function Vehicle(props) {
  console.log(props);
  const { vehicle } = props;

  return (
    <Card>
      <CardHeader title={vehicle.name} />
      <CardContent>
        <h4>{vehicle.make}</h4>
        <h6>{vehicle.model}</h6>
        <p>{vehicle.notes}</p>
      </CardContent>
      <CardFooter>
        <p className="card-footer-item">
          <button
            type="button"
            className="button  is-primary icon"
            title="Maintenance"
          >
            <Icon icon={["fas", "wrench"]} fixedWidth />
          </button>
        </p>
        <p className="card-footer-item">
          <button
            type="button"
            className="button is-primary icon"
            title="Edit Vehicle"
          >
            <Icon icon={["fas", "pencil-alt"]} fixedWidth />
          </button>
        </p>
        <p className="card-footer-item">
          <button
            type="button"
            className="button is-primary icon"
            title="Delete Vehicle"
          >
            <Icon icon={["fas", "trash-alt"]} fixedWidth />
          </button>
        </p>
      </CardFooter>
    </Card>
  );
}

export default Vehicle;
