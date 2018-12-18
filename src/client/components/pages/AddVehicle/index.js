import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import Input from "../../common/Input";
import API from "../../../../../apiControllers/internal";

class AddVehicle extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      vinNumber: null,
      year: null,
      make: null,
      model: null,
      color: null,
      mileage: null
    };
  }

  componentDidMount = () => {
    const { actions } = this.props;
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveAndContinue = event => {
    const { actions } = this.props;
    event.preventDefault();
  };

  handleFormSubmit = event => {
    const {name, vinNumber, model, make, year, color, mileage } = this.state;

    event.preventDefault();
    if (model && make) {
      API.saveUserVehicle({
        name,
        vinNumber,
        model,
        make,
        year,
        color,
        mileage
      })
        .then(res => this.loadAddVehicle)
        .catch(err => console.log(err));
    }
  };

  render() {
    const {
      vinNumber,
      showVinError,
      year,
      make,
      model,
      color,
      name,
      mileage
    } = this.state;
    return (
      <div className="page login">
        <div className="columns is-centered is-vcentered">
          <div className="column is-10-mobile is-8-tablet is-4-desktop form-wrapper">
            <form>
              <h1>Add a vehicle to your account</h1>
              <div className="columns is-multiline is-centered">
                <div className="column is-12">
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
                </div>
                <div className="column is-12">
                  <Input
                    name="vinNumber"
                    type="text"
                    value={vinNumber}
                    icon={["fas", "hashtag"]}
                    placeholder="VIN Number"
                    onChange={this.handleInputChange}
                    errorVisible={showVinError}
                  />
                </div>
                <div className="column is-12">
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
                </div>
                <div className="column is-12">
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
                </div>
                <div className="column is-12">
                  <Input
                    type="text"
                    name="model"
                    value={model}
                    placeholder="Vehicle Model"
                    onChange={this.handleInputChange}
                    // emptyMessage="Please confirm your Model"
                    // errorMessage="Model does not match"
                  />
                </div>
                <div className="column is-12">
                  <Input
                    type="text"
                    name="vehicleColor"
                    value={color}
                    placeholder="Vehicle Color"
                    onChange={this.handleInputChange}
                    // emptyMessage="Please confirm your color"
                  />
                </div>
                <div className="column is-12">
                  <Input
                    type="text"
                    name="mileage"
                    value={mileage}
                    placeholder="Vehicle Mileage"
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="column is-12 is-clearfix">
                  <button
                    id="log-in-button"
                    type="button"
                    className="button is-light is-pulled-right"
                    onClick={this.handleFormSubmit}
                  >
                    Add Vehicle
                  </button>
                </div>
              </div>
            </form>
          </div>
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
