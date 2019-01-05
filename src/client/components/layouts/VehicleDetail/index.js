import React from "react";
import uuidv4 from "uuid/v4";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import { models, makes } from "../../../../../config/dropDownData";
import { getLocation, push } from "../../../redux/actions/router";
import { DropDown, Modal, TextArea, TextBox, Icon } from "../../common";
import validation from "../../../../../services/validation";

import {
  addVehicle,
  updateVehicle,
  clearVehicleData,
  getVehicle,
  getVehicleData,
  getVehicleError,
  getVehicleRequested
} from "../../../redux/actions/vehicles";
import { getAuthData } from "../../../redux/actions/auth";

class VehicleDetail extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }

  componentDidMount = () => {
    const { actions, match } = this.props;

    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");

    if (match.params.id) {
      actions.getVehicle(match.params.id);
    }
  };

  getInitialState = () => {
    return {
      formValues: {
        vinNumber: "",
        year: "",
        make: "",
        model: "",
        name: "",
        mileage: "",
        color: "",
        errorMessages: [],
        showModal: false,
        loaded: true
      },
      formValidation: {
        vinNumber: null,
        year: null,
        make: null,
        model: null,
        name: null,
        mileage: null,
        color: null
      }
    };
  };

  validateForm = () => {
    let isValid = true;

    const { formValues, formValidation } = this.state;

    formValues.errorMessages = [];

    formValidation.name = this.validateField("name", formValues.name);
    if (!formValidation.name.isValid) {
      formValues.errorMessages.push(formValidation.name.message);
      isValid = false;
    }

    formValidation.vinNumber = this.validateField(
      "vinNumber",
      formValues.vinNumber
    );
    if (!formValidation.vinNumber.isValid) {
      formValues.errorMessages.push(formValidation.vinNumber.message);
      isValid = false;
    }

    formValidation.make = this.validateField("make", formValues.make);
    if (!formValidation.make.isValid) {
      formValues.errorMessages.push(formValidation.make.message);
      isValid = false;
    }

    formValidation.model = this.validateField("model", formValues.model);
    if (!formValidation.model.isValid) {
      formValues.errorMessages.push(formValidation.model.message);
      isValid = false;
    }

    formValidation.year = this.validateField("year", formValues.year);
    if (!formValidation.year.isValid) {
      formValues.errorMessages.push(formValidation.year.message);
      isValid = false;
    }

    formValidation.mileage = this.validateField("mileage", formValues.mileage);
    if (!formValidation.mileage.isValid) {
      formValues.errorMessages.push(formValidation.mileage.message);
      isValid = false;
    }

    this.setState({ formValidation });

    return isValid;
  };

  validateField = (fieldName, value) => {
    let results = { ...validation.validationObject };

    switch (fieldName) {
      case "name":
        if (!value) {
          results.isValid = false;
          results.message = "Email is required.";
        }
        break;
      case "make":
        if (!value) {
          results.isValid = false;
          results.message = "Vehicle Make is required.";
        }
        break;

      case "model":
        if (!value) {
          results.isValid = false;
          results.message = "Vehicle Model is required.";
        }
        break;

      case "mileage":
        if (value) {
          results = validation.validateMileage(value);
        }
        break;

      case "vinNumber":
        if (value) {
          results = validation.validateVinNumber(value);
        }
        break;

      case "year":
        if (!value) {
          results.isValid = false;
          results.message = "Vehicle Year is required.";
        } else {
          results = validation.validateYear(value);
        }
        break;

      default:
        break;
    }

    return results;
  };

  handleInputChange = event => {
    const { formValues, formValidation } = this.state;
    const validationResults = this.validateField(
      event.target.name,
      event.target.value
    );

    formValues[event.target.name] = event.target.value;
    formValidation[event.target.name] = validationResults;
    this.setState({ formValues, formValidation });
  };

  handleDropDownChange = (selectedOption, name) => {
    const { formValues, formValidation } = this.state;
    const { value } = selectedOption;
    const validationResults = this.validateField(name, value);

    formValues[name] = value;
    formValidation[name] = validationResults;
    this.setState({ formValues, formValidation });
  };

  handleModalOkayClick = () => {
    const { actions } = this.props;
    const { formValues } = this.state;
    formValues.showModal = false;
    this.setState({ formValues });
    actions.clearVehicleData();
  };

  onSaveClick = () => {
    const { actions, mode, match, reduxState } = this.props;
    const { formValues } = this.state;
    const { authData } = reduxState;
    const isValid = this.validateForm();
    if (isValid) {
      const vehicle = {
        vinNumber: formValues.vinNumber,
        year: formValues.year,
        make: formValues.make,
        model: formValues.model,
        color: formValues.color,
        name: formValues.name,
        mileage: validation.stripNonNumeric(formValues.mileage),
        user: authData.user._id
      };

      if (mode === "Edit") {
        vehicle._id = match.params.id;
        actions.updateVehicle(vehicle).then(() => {
          this.setState(this.getInitialState());
          actions.push("/");
        });
      } else {
        actions.addVehicle(vehicle).then(() => {
          this.setState(this.getInitialState());
          actions.push("/");
        });
      }
    } else {
      formValues.showModal = !isValid;
      this.setState({ formValues });
    }
  };

  render() {
    const { mode, reduxState } = this.props;
    const { formValues, formValidation } = this.state;
    const { requested, requestError } = reduxState;

    if (requestError) {
      formValues.errorMessages.push(requestError);
    }

    return (
      <div className="page login">
        <div className="columns is-centered form-wrapper">
          <div className="column is-10-mobile is-8-tablet is-4-desktop">
            <form>
              <div className="form-header">
                <span className="form-title">{`${mode} Vehicle`}</span>
              </div>
              <div className="columns is-multiline is-centered form-content">
                <div className="column is-12">
                  <TextBox
                    name="name"
                    type="text"
                    value={formValues.name}
                    placeholder="Vehicle Name"
                    icon={["far", "pencil-alt"]}
                    onChange={this.handleInputChange}
                    errorMessage="Name is required."
                  />
                </div>
                <div className="column is-12">
                  <TextBox
                    name="vinNumber"
                    type="text"
                    value={formValues.vinNumber}
                    icon={["fas", "hashtag"]}
                    placeholder="VIN Number"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <DropDown
                    name="make"
                    value={formValues.make}
                    options={makes}
                    placeholder="Vehicle Make"
                    onChange={this.handleDropDownChange}
                    showValidation
                  />
                </div>
                <div className="column is-12">
                  <DropDown
                    name="model"
                    value={formValues.model}
                    options={models}
                    filter={formValues.make}
                    placeholder="Vehicle Model"
                    onChange={this.handleDropDownChange}
                    showValidation
                  />
                </div>
                <div className="column is-12">
                  <TextBox
                    type="text"
                    name="year"
                    value={formValues.year}
                    icon={["fas", "calendar-alt"]}
                    placeholder="Vehicle Year"
                    validate={this.validateRequired}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <TextBox
                    type="text"
                    name="color"
                    value={formValues.color}
                    placeholder="Vehicle Color"
                    icon={["fas", "paint-brush"]}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <TextBox
                    type="text"
                    name="mileage"
                    value={formValues.mileage}
                    placeholder="Vehicle Mileage"
                    icon={["fas", "tachometer-alt"]}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <TextArea
                    name="notes"
                    value={formValues.notes}
                    placeholder="Notes"
                    icon={["fas", "sticky-note"]}
                    onChange={this.handleInputChange}
                    rows="4"
                  />
                </div>

                <div className="column is-12 is-clearfix button-bar">
                  <button
                    type="button"
                    disabled={requested}
                    className="button is-light is-pulled-right"
                    onClick={this.onSaveClick}
                  >
                    <strong>Save Vehicle</strong>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Modal
          show={formValues.showModal || !!requestError}
          title="Authentication Error"
          handleModalOkayClick={this.handleModalOkayClick}
        >
          <ul>
            {formValues.errorMessages ? (
              [...new Set(formValues.errorMessages)].map(msg =>
                msg ? (
                  <li key={uuidv4()} className="error-message">
                    <div className="columns">
                      <div className="column is-1 has-text-right">
                        <Icon
                          icon={["far", "exclamation-circle"]}
                          className="has-text-danger"
                          size="s"
                        />
                      </div>
                      <div className="column is-11">{msg}</div>
                    </div>
                  </li>
                ) : null
              )
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reduxState: {
      authData: getAuthData(state),
      burgerMenu: state.burgerMenu,
      location: getLocation(state),
      requested: getVehicleRequested(state),
      requestError: getVehicleError(state),
      vehicleData: getVehicleData(state)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addVehicle,
        clearVehicleData,
        getVehicle,
        push,
        toggleMenu,
        updateVehicle
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleDetail);
