import React from "react";
import { Card, CardHeader, CardFooter, CardContent } from "../Card";
import ToolTip from "../ToolTip";
import Icon from "../Icon";

function Vehicle(props) {
  const { vehicle } = props;

  // console.log(vehicle);

  return (
    <div className="vehicle">
      <Card>
        <CardHeader title={vehicle.name} />
        <CardContent>
          <div className="content-header">
            <span className="year">{vehicle.year}</span>{" "}
            <span className="make">{vehicle.make}</span>{" "}
            <span className="model">{vehicle.model}</span>
          </div>
          <hr />
          <div className="details">
            <ul>
              <li>
                <span className="label">{"   "}Color:</span>
                <span className="value">{vehicle.color}</span>
              </li>
              <li>
                <span className="label">{"   "}VIN #:</span>
                <span className="value">{vehicle.vinNumber}</span>
              </li>
              <li>
                <span className="label">Odometer:</span>
                <span className="value">{vehicle.mileage}</span>
              </li>
            </ul>
          </div>
          <hr />
          <p className="notes">{vehicle.notes}</p>
        </CardContent>
        <CardFooter>
          <p className="card-footer-item">
            <ToolTip message="Manage Maintenance">
              <button
                type="button"
                className="button is-primary icon"
                data-tooltip=""
              >
                <Icon icon={["fas", "wrench"]} fixedWidth />
              </button>
            </ToolTip>
          </p>
          <p className="card-footer-item">
            <ToolTip message="Edit Vehicle">
              <button type="button" className="button is-primary icon">
                <Icon icon={["fas", "pencil-alt"]} fixedWidth />
              </button>
            </ToolTip>
          </p>
          <p className="card-footer-item">
            <ToolTip message="Delete Vehicle">
              <button type="button" className="button is-primary icon">
                <Icon icon={["fas", "trash-alt"]} fixedWidth />
              </button>
            </ToolTip>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Vehicle;
