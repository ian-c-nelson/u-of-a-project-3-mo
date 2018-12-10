import React from "react";
import { Card, CardHeader, CardFooter, CardContent } from "../Card";
import Tooltip from "../ToolTip";
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
          <Tooltip message="Maintenance">
            <button
              type="button"
              className="button is-primary icon"
              data-tooltip=""
            >
              <Icon icon={["fas", "wrench"]} fixedWidth />
            </button>
          </Tooltip>
        </p>
        <p className="card-footer-item">
          <Tooltip message="Edit Vehicle">
            <button type="button" className="button is-primary icon">
              <Icon icon={["fas", "pencil-alt"]} fixedWidth />
            </button>
          </Tooltip>
        </p>
        <p className="card-footer-item">
          <Tooltip message="Delete Vehicle">
            <button type="button" className="button is-primary icon">
              <Icon icon={["fas", "trash-alt"]} fixedWidth />
            </button>
          </Tooltip>
        </p>
      </CardFooter>
    </Card>
  );
}

export default Vehicle;
