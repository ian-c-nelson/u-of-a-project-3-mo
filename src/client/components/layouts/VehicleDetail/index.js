import React from "react";
import uuidv4 from "uuid/v4";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import { models, makes } from "../../../../../config/dropDownData";
import { getLocation, push } from "../../../redux/actions/router";
import { DropDown, Modal, TextBox, Icon } from "../../common";
import validation from "../../../../../services/validation";

import {
  getFormValues,
  setFormValues
} from "../../../redux/actions/formValues";
import { getAuthData } from "../../../redux/actions/auth";

import {
  addVehicle,
  updateVehicle,
  clearVehicleData,
  getVehicle,
  getVehicleData,
  getVehicleError,
  getVehicleRequested
} from "../../../redux/actions/vehicles";

class VehicleDetail extends React.Component {
  componentDidMount = () => {
    const { actions, match } = this.props;

    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");

    if (match.params.id) {
      actions.getVehicle(match.params.id);
    } else {
      actions.setFormValues({});
    }
  };

  componentDidUpdate = () => {
    const { actions, state, match, mode } = this.props;

    if (
      mode === "Edit" &&
      !state.formValues.loaded &&
      state.vehicleData &&
      state.vehicleData._id === match.params.id
    ) {
      const {
        vinNumber,
        year,
        make,
        model,
        name,
        mileage,
        color
      } = state.vehicleData;
      actions.setFormValues({
        vinNumber,
        year,
        make,
        model,
        name,
        mileage,
        color,
        loaded: true
      });
    }
  };

  componentWillUnmount = () => {
    const { actions } = this.props;
    actions.setFormValues({});
  };

  validateForm = () => {
    let isValid = true;
    const { state, actions } = this.props;
    const { vinNumber, year, make, model, name, mileage } = state.formValues;
    const newFormValues = { ...state.formValues };

    newFormValues.nameValidation = this.validateField("name", name);
    if (!newFormValues.nameValidation.isValid) {
      isValid = false;
    }

    newFormValues.vinNumberValidation = this.validateField(
      "vinNumber",
      vinNumber
    );
    if (!newFormValues.vinNumberValidation.isValid) {
      isValid = false;
    }

    newFormValues.makeValidation = this.validateField("make", make);
    if (!newFormValues.makeValidation.isValid) {
      isValid = false;
    }

    newFormValues.modelValidation = this.validateField("model", model);
    if (!newFormValues.modelValidation.isValid) {
      isValid = false;
    }

    newFormValues.yearValidation = this.validateField("year", year);
    if (!newFormValues.yearValidation.isValid) {
      isValid = false;
    }

    newFormValues.mileageValidation = this.validateField("mileage", mileage);
    if (!newFormValues.mileageValidation.isValid) {
      isValid = false;
    }

    actions.setFormValues(newFormValues);

    return isValid;
  };

  validateField = (fieldName, value) => {
    const { state, actions } = this.props;
    const newFormValues = { ...state.formValues };
    let results = validation.validationObject;

    newFormValues.errorMessages = newFormValues.errorMessages || [];

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
        // Nothing to do
        break;
    }

    if (!results.isValid) {
      newFormValues.errorMessages.push(results.message);
      actions.setFormValues(newFormValues);
    }

    return results;
  };

  handleInputChange = event => {
    const { actions, state } = this.props;
    const newFormValues = { ...state.formValues };

    const fieldValidationName = `${event.target.name}Validation`;
    const validationResults = this.validateField(
      event.target.name,
      event.target.value
    );

    newFormValues[event.target.name] = event.target.value;
    newFormValues[fieldValidationName] = validationResults;
    actions.setFormValues(newFormValues);
  };

  handleDropDownChange = (selectedOption, name) => {
    const { actions, state } = this.props;
    const newFormValues = { ...state.formValues };
    const { value } = selectedOption;

    const fieldValidationName = `${name}Validation`;
    const validationResults = this.validateField(name, value);

    newFormValues[name] = value;
    newFormValues[fieldValidationName] = validationResults;
    actions.setFormValues(newFormValues);
  };

  handleModalOkayClick = () => {
    const { actions, state } = this.props;
    const newFormValues = { ...state.formValues };
    newFormValues.errorMessages = [];
    newFormValues.showModal = false;
    actions.setFormValues(newFormValues);
    actions.clearVehicleData();
  };

  onSaveClick = () => {
    const { actions, state, mode, match } = this.props;
    const { formValues, authData } = state;
    const { year, make, model, color, name, mileage, vinNumber } = formValues;
    const userId = authData.user._id;

    const isValid = this.validateForm();
    if (isValid) {
      const vehicle = {
        vinNumber,
        year,
        make,
        model,
        color,
        name,
        mileage: validation.stripNonNumeric(mileage),
        user: userId
      };

      if(mode === "Edit") {
        vehicle._id = match.params.id
        actions.updateVehicle(vehicle).then(() => {
          actions.push("/");
        });
      } else {
        actions.addVehicle(vehicle).then(() => {
          actions.push("/");
        });
      }
    } else {
      const newFormValues = { ...state.formValues };
      newFormValues.showModal = !isValid;
      actions.setFormValues(newFormValues);
    }
  };

  render() {
    const { mode, state } = this.props;
    const { requested, requestError, formValues } = state;
    const {
      vinNumber,
      year,
      make,
      model,
      color,
      name,
      mileage,
      errorMessages,
      showModal
    } = formValues;

    if (requestError) {
      errorMessages.push(requestError);
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
                    value={name}
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
                    value={vinNumber}
                    icon={["fas", "hashtag"]}
                    placeholder="VIN Number"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <DropDown
                    name="make"
                    value={make}
                    options={makes}
                    placeholder="Vehicle Make"
                    onChange={this.handleDropDownChange}
                    showValidation
                  />
                </div>
                <div className="column is-12">
                  <DropDown
                    name="model"
                    value={model}
                    options={models}
                    filter={make}
                    placeholder="Vehicle Model"
                    onChange={this.handleDropDownChange}
                    showValidation
                  />
                </div>
                <div className="column is-12">
                  <TextBox
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
                  <TextBox
                    type="text"
                    name="color"
                    value={color}
                    placeholder="Vehicle Color"
                    icon={["fas", "paint-brush"]}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column is-12">
                  <TextBox
                    type="text"
                    name="mileage"
                    value={mileage}
                    placeholder="Vehicle Mileage"
                    icon={["fas", "tachometer-alt"]}
                    onChange={this.handleInputChange}
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
          show={showModal || !!requestError}
          title="Authentication Error"
          handleModalOkayClick={this.handleModalOkayClick}
        >
          <ul>
            {errorMessages ? (
              [...new Set(errorMessages)].map(msg =>
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
    state: {
      burgerMenu: state.burgerMenu,
      location: getLocation(state),
      authData: getAuthData(state),
      formValues: getFormValues(state),
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
        addVehicle,
        getVehicle,
        updateVehicle,
        push,
        setFormValues,
        toggleMenu
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleDetail);
