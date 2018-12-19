import React from "react";
import uuidv4 from "uuid/v4";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import { getLocation, push } from "../../../redux/actions/router";
import { getAuthData } from "../../../redux/actions/auth";
import { Vehicle } from "../../common";

import {
  clearVehicleData,
  getUserVehicles,
  getVehicleData,
  getVehicleError,
  getVehicleRequested
} from "../../../redux/actions/vehicles";

class Dashboard extends React.Component {
  componentDidMount = () => {
    const { actions, state } = this.props;
    const { authData } = state;
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
    actions.getUserVehicles(authData.user);
  };

  componentWillUnmount = () => {
    const { actions } = this.props;
    actions.clearVehicleData();
  };

  render() {
    const { state } = this.props;
    const { vehicleData: vehicles } = state;

    return (
      <div className="columns is-multiline is-centered">
        {vehicles && vehicles.length
          ? vehicles.map(vehicle => (
              <div
                className="column is-12-mobile is-5-tablet is-3-desktop"
                key={uuidv4()}
              >
                <Vehicle vehicle={vehicle} />
              </div>
            ))
          : null}
      </div>
    );
  }
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
        toggleMenu,
        clearVehicleData,
        getUserVehicles,
        push
      },
      dispatch
    )
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
