import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import { Input } from "../../common";
import API from "../../../../../apiControllers/internal";
import { models, makes } from "../../../../../config/dropDownData";

class AddVehicle extends React.Component {
  constructor() {
    super();
    this.state = {
      vinNumber: null,
      year: null,
      make: null,
      model: null,
      color: null,
      name: null,
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
    const { make, model, vinNumber, year, color, mileage } = this.state;

    event.preventDefault();
    if (model && make) {
      API.saveUserVehicle({
        vinNumber,
        year,
        make,
        model,
        color,
        name,
        mileage
      })
        .then(res => this.loadAddVehicle)
        .catch(err => console.log(err));
    }
  };

  render() {
    const {
      vinNumber,
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
                  />
                </div>
                <div className="column is-12">
                  <Input
                    type="dropdown"
                    name="make"
                    value={make}
                    options={makes}
                    placeholder="Vehicle Make"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <Input
                    type="dropdown"
                    name="model"
                    value={model}
                    options={models}
                    filter={make}
                    placeholder="Vehicle Model"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <Input
                    type="text"
                    name="vehicleColor"
                    value={color}
                    placeholder="Vehicle Color"
                    onChange={this.handleInputChange}
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
                    onClick={this.saveAndContinue}
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
