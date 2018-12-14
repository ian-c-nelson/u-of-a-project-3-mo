import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "../../common/Input";
// import authActions from "../../../redux/actions/auth";
import * as fromCounter from "../../../redux/actions/counter";

class AddVehicle extends React.Component {
  constructor() {
    super();

    var AddVehicle = React.createClass({
      getInitialState: function () {
        return {
          vinNumber: null,
          model: null,
          make: null,
          year: null,
          color: null,
          mileage: null,
        }
      },

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.model && this.state.make) {
          API.saveUserVehicle({
            vinNumber: this.state.vinNumber,
            model: this.state.model,
            make: this.state.make,
            year: this.state.year,
            color: this.state.color,
            mileage: this.state.mileage
          })
            .then(res => this.loadSignUp)
            .catch(err => console.log(err));
        }
      },

      handleVinInput = event => {

      },


      handleYearInput = event => {

      },

      handleMakeInput = event => {

      },

      handleModelInput = event => {

      },

      handleColorInput = event => {

      },




      render: function () {
        return (
          <div className="addvehcile">

            <div className="addvehicle">
              <h1>Add a vehcile to your account</h1>
              <form onSubmit={this.saveAndContinue}>

                <Input
                  text="VIN"
                  ref="vin"
                  type="text"
                  defaultValue={this.state.vinNumber}
                  validate={this.validateVinNumber}
                  value={this.state.vinNumber}
                  onChange={this.handleVinInput}
                  errorMessage="VIN is invalid"
                  errorVisible={this.state.showVinError}
                />

                <Input
                  text="Model"
                  ref="model"
                  type="model"
                  value={this.state.model}
                  emptyMessage="Please confirm your Model"
                  errorMessage="Model does not match"
                  onChange={this.handleModelInput}
                />

                <Input
                  text="Make"
                  type="make"
                  ref="make"
                  validator="true"
                  value={this.state.make}
                  emptyMessage="Please confirm your Make"
                  errorMessage="Make does not match"
                  onChange={this.handleMakeInput}
                />

                <Input
                  text="Year"
                  ref="year"
                  validate={this.state.validateYear}
                  value={this.state.year}
                  onChange={this.handleYearInput}
                  emptyMessage="Year can't be empty"
                />

                <Input
                  text="Color of Vehicle"
                  ref="colorConfirm"
                  type="vehicleColor"
                  validate={this.state.color}
                  value={this.state.color}
                  onChange={this.handleColorInput}
                  emptyMessage="Please confirm your color"
                />

                <Input
                  text="Mileage"
                  ref="mileage"
                  type="mileage"
                  value={this.state.mileage}
                  emptyMessage="Please confirm your Model"
                  errorMessage="Model does not match"
                  onChange={this.handleModelInput}
                />


                <button
                  onClick={this.handleFormSubmit}
                  type="submit"
                  className="button button_wide">
                  Add Vehicle
              </button>

              </form>


            </div>

          </div>
        );
      }

    });
  }}

    module.exports = AddVehicle;
