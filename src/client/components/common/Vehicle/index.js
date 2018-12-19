import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getLocation, push } from "../../../redux/actions/router";
import { getAuthData } from "../../../redux/actions/auth";
import {
  deleteVehicle,
  getVehicle,
  getVehicleData,
  getVehicleError,
  getVehicleRequested,
  clearVehicleData
} from "../../../redux/actions/vehicles";

import { Card, CardHeader, CardFooter, CardContent, ToolTip, Icon } from "..";

function Vehicle(props) {
  const { vehicle, actions } = props;

  const onDeleteClick = () => {
    actions.deleteVehicle(vehicle._id);
    actions.push("/");
  };

  const onEditClick = () => {
    actions.push(`/vehicles/edit/${vehicle._id}`);
  };

  const onMaintenanceClick = () => {
    actions.push(`/vehicles/maintenance/${vehicle._id}`);
  };

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
                <span className="label">Color:</span>
                <span className="value">{vehicle.color}</span>
              </li>
              <li>
                <span className="label">VIN #:</span>
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
                onClick={onMaintenanceClick}
              >
                <Icon icon={["fas", "wrench"]} fixedWidth />
              </button>
            </ToolTip>
          </p>
          <p className="card-footer-item">
            <ToolTip message="Edit Vehicle">
              <button
                type="button"
                className="button is-primary icon"
                onClick={onEditClick}
              >
                <Icon icon={["fas", "pencil-alt"]} fixedWidth />
              </button>
            </ToolTip>
          </p>
          <p className="card-footer-item">
            <ToolTip message="Delete Vehicle">
              <button
                type="button"
                className="button is-primary icon"
                onClick={onDeleteClick}
              >
                <Icon icon={["fas", "trash-alt"]} fixedWidth />
              </button>
            </ToolTip>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state: {
      burgerMenu: state.burgerMenu,
      location: getLocation(state),
      authData: getAuthData(state),
      vehicleData: getVehicleData(state),
      requestError: getVehicleError(state),
      requested: getVehicleRequested(state)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        clearVehicleData,
        deleteVehicle,
        getVehicle,
        push
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vehicle);
