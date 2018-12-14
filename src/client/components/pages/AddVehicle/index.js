import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import Input from "../../common/Input";

class AddVehicle extends React.Component {
  constructor() {
    super();
    this.state = {
      vinNumber: null,
      year: null,
      make: null,
      model: null,
      color: null
    };
  }

  componentDidMount = () => {
    const { actions } = this.props;
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  handleInputChange = event => {
    const field = event.target.name;
    const { credentials } = this.state;
    credentials[field] = event.target.value;
    return this.setState({ credentials });
  };

  saveAndContinue = event => {
    const { actions } = this.props;
    event.preventDefault();
  };

  validateRequired = event => {};

  render() {
    const {
      vinNumber,
      showVinError,
      validateYear,
      year,
      make,
      model,
      color,
      name,
      mileage
    } = this.state;
    return (
      <div className="addvehcile">
        <div className="addvehicle">
          <h1>Add a vehicle to your account</h1>
          <form>
            <Input
              name="name"
              type="text"
              value={name}
              placeholder="Vehicle Name"
              icon={["far", "pencil-alt"]}
              onChange={this.handleInputChange}
              errorMessage="Name is required."
              errorVisible={showVinError}
            />

            <Input
              name="vinNumber"
              type="text"
              value={vinNumber}
              icon={["fas", "hashtag"]}
              placeholder="VIN Number"
              onChange={this.handleInputChange}
              errorVisible={showVinError}
            />

            <Input
              type="text"
              name="year"
              value={year}
              icon={["fas", "calendar-alt"]}
              placeholder="Vehicle Year"
              validate={this.validateRequired}
              onChange={this.handleInputChange}
              emptyMessage="Year is required"
            />

            <Input
              type="text"
              name="make"
              value={make}
              placeholder="Vehicle Make"
              onChange={this.handleInputChange}
              // validator="true"
              // emptyMessage="Please confirm your Make"
              // errorMessage="Make does not match"
            />

            <Input
              type="text"
              name="model"
              value={model}
              placeholder="Vehicle Model"
              onChange={this.handleInputChange}
              // emptyMessage="Please confirm your Model"
              // errorMessage="Model does not match"
            />

            <Input
              type="text"
              name="vehicleColor"
              value={color}
              placeholder="Vehicle Color"
              onChange={this.handleInputChange}
              // emptyMessage="Please confirm your color"
            />

            <Input
              type="text"
              name="mileage"
              value={mileage}
              placeholder="Vehicle Mileage"
              onChange={this.handleInputChange}
            />

            <button
              type="button"
              className="button button_wide"
              onClick={this.saveAndContinue}
            >
              Add Vehicle
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: {
      burgerMenu: state.burgerMenu
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        toggleMenu
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVehicle);
