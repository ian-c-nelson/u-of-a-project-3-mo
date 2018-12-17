import React, { Component } from 'react';
import './MakeModel.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import API from "../../../../apiControllers/internal";

class MakeModel extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      selectedOption1: {},
      selectedOption2: {}
    }
  }

  handleChange1 = (selectedOption1) => {
    this.setState({selectedOption1});
  }

  handleChange2 = (selectedOption1) => {
    this.setState({selectedOption2: selectedOption1});
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.model && this.state.make) {
      API.saveUserVehicle({
        // vinNumber: this.state.vinNumber,
        model: this.state.selectedOption1,
        make: this.state.selectedOption2,
        // year: this.state.year,
        // color: this.state.color,
        // mileage: this.state.mileage
      })
        .then(res => this.loadSignUp)
        .catch(err => console.log(err));
    }
  }

  render() {

    const options1 = [
      { value: 'Acura', label: 'Acura' },
      { value: 'BMW', label: 'BMW' },
      { value: 'Buick', label: 'Buick' },
      { value: 'Cadillac', label: 'Cadillac' },
      { value: 'Chevrolet', label: 'Chevrolet' },
      { value: 'Chrysler', label: 'Chrysler' },
      { value: 'Dodge', label: 'Dodge' },
      { value: 'Ford', label: 'Ford' },
      { value: 'GMC', label: 'GMC' },
      { value: 'Honda', label: 'Honda' },
      { value: 'Infiniti', label: 'Infiniti' },
      { value: 'Jaguar', label: 'Jaguar' },
      { value: 'Jeep', label: 'Jeep' },
      { value: 'Kia', label: 'Kia' },
      { value: 'Lexus', label: 'Lexus' },
      { value: 'Lincoln', label: 'Lincoln' },
      { value: 'Mercedes', label: 'Mercedes' },
      { value: 'Mitsubishi', label: 'Mitsubishi' },
      { value: 'Nissan', label: 'Nissan' },
      { value: 'Ram', label: 'Ram' },
      { value: 'Tesla', label: 'Tesla' },
      { value: 'Toyota', label: 'Toyota' },
      { value: 'Volkswagen', label: 'Volkswagen' },
    ]

    const options2 = [
      //Acura
      { value: 'ILX', label: 'ILX', link: 'Acura' },
      { value: 'MDX', label: 'MDX', link: 'Acura' },
      { value: 'NSX', label: 'NSX', link: 'Acura' },
      { value: 'RLX', label: 'RLX', link: 'Acura' },
      { value: 'TLX', label: 'TLX', link: 'Acura' },
      //BMW
      { value: '1 Series', label: '1 Series', link: 'BMW' },
      { value: '2 Series', label: '2 Series', link: 'BMW' },
      { value: '3 Series', label: '3 Series', link: 'BMW' },
      { value: '4 Series', label: '4 Series', link: 'BMW' },
      { value: '5 Series', label: '5 Series', link: 'BMW' },
      { value: '6 Series', label: '6 Series', link: 'BMW' },
      { value: '7 Series', label: '7 Series', link: 'BMW' },
      { value: '8 Series', label: '8 Series', link: 'BMW' },
      { value: 'i3', label: 'i3', link: 'BMW' },
      { value: 'i8', label: 'i8', link: 'BMW' },
      { value: 'X1', label: 'X1', link: 'BMW' },
      { value: 'X2', label: 'X2', link: 'BMW' },
      { value: 'X3', label: 'X3', link: 'BMW' },
      { value: 'X4', label: 'X4', link: 'BMW' },
      { value: 'X5', label: 'X5', link: 'BMW' },
      { value: 'X6', label: 'X6', link: 'BMW' },
      { value: 'X7', label: 'X7', link: 'BMW' },
      { value: 'Z4', label: 'Z4', link: 'BMW' },
      //Buick
      { value: 'Cascada', label: 'Cascada', link: 'Buick' },
      { value: 'Encore', label: 'Encore', link: 'Buick' },
      { value: 'Envision', label: 'Envision', link: 'Buick' },
      { value: 'Enclave', label: 'Enclave', link: 'Buick' },
      { value: 'LaCrosse', label: 'LaCrosse', link: 'Buick' },
      { value: 'Regal', label: 'Regal', link: 'Buick' },
      //Cadillac
      { value: 'CT6', label: 'CT6', link: 'Cadillac' },
      { value: 'CTS', label: 'CTS', link: 'Cadillac' },
      { value: 'Escalade', label: 'Escalade', link: 'Cadillac' },
      { value: 'XT4 Crossover', label: 'XT4 Crossover', link: 'Cadillac' },
      { value: 'XT5 Crossover', label: 'XT5 Crossover', link: 'Cadillac' },
      { value: 'XTS', label: 'XTS', link: 'Cadillac' },
      //Chevrolet
      { value: 'Bolt', label: 'Bolt', link: 'Chevrolet' },
      { value: 'Camaro', label: 'Camaro', link: 'Chevrolet' },
      { value: 'Colorado', label: 'Colorado', link: 'Chevrolet' },
      { value: 'Corvette', label: 'Corvette', link: 'Chevrolet' },
      { value: 'Cruze', label: 'Cruze', link: 'Chevrolet' },
      { value: 'Equinox', label: 'Equinox', link: 'Chevrolet' },
      { value: 'Imapla', label: 'Impala', link: 'Chevrolet' },
      { value: 'Malibu', label: 'Malibu', link: 'Chevrolet' },
      { value: 'Silverado', label: 'Silverado', link: 'Chevrolet' },
      { value: 'Sonic', label: 'Sonic', link: 'Chevrolet' },
      { value: 'Spark', label: 'Spark', link: 'Chevrolet' },
      { value: 'Suburban', label: 'Suburban', link: 'Chevrolet' },
      { value: 'Tahoe', label: 'Tahoe', link: 'Chevrolet' },
      { value: 'Traverse', label: 'Traverse', link: 'Chevrolet' },
      { value: 'Trax', label: 'Trax', link: 'Chevrolet' },
      { value: 'Volt', label: 'Volt', link: 'Chevrolet' },
      //Chrysler
      { value: '300', label: '300', link: 'Chrysler' },
      { value: 'Pacifica', label: 'Pacifica', link: 'Chrysler' },
      //Dodge
      { value: 'Avenger', label: 'Avenger', link: 'Dodge' },
      { value: 'Caravan', label: 'Caravan', link: 'Dodge' },
      { value: 'Challenger', label: 'Challenger', link: 'Dodge' },
      { value: 'Charger', label: 'Charger', link: 'Dodge' },
      { value: 'Durango', label: 'Durango', link: 'Dodge' },
      { value: 'Journey', label: 'Journey', link: 'Dodge' },
      //Ford
      { value: 'Edge', label: 'Edge', link: 'Ford' },
      { value: 'Ecosport', label: 'Ecosport', link: 'Ford' },
      { value: 'Escape', label: 'Escape', link: 'Ford' },
      { value: 'Expedition', label: 'Expidition', link: 'Ford' },
      { value: 'Explorer', label: 'Explorer', link: 'Ford' },
      { value: 'F-150', label: 'F-150', link: 'Ford' },
      { value: 'F-250', label: 'F-250', link: 'Ford' },
      { value: 'F-350', label: 'F-350', link: 'Ford' },
      { value: 'Fiesta', label: 'Fiesta', link: 'Ford' },
      { value: 'Flex', label: 'Flex', link: 'Ford' },
      { value: 'Focus', label: 'Focus', link: 'Ford' },
      { value: 'Fusion', label: 'Fusion', link: 'Ford' },
      { value: 'Mustang', label: 'Mustang', link: 'Ford' },
      { value: 'Ranger', label: 'Ranger', link: 'Ford' },
      { value: 'Taurus', label: 'Taurus', link: 'Ford' },
      //GMC
      { value: 'Acadia', label: 'Acadia', link: 'GMC' },
      { value: 'Canyon', label: 'Canyon', link: 'GMC' },
      { value: 'Sierra', label: 'Sierra', link: 'GMC' },
      { value: 'Terrain', label: 'Terrain', link: 'GMC' },
      { value: 'Yukon', label: 'Yukon', link: 'GMC' },
      //Honda
      { value: 'Accord', label: 'Accord', link: 'Honda' },
      { value: 'Civic', label: 'Civic', link: 'Honda' },
      { value: 'Clarity', label: 'Clarity', link: 'Honda' },
      { value: 'CR-V', label: 'CR-V', link: 'Honda' },
      { value: 'Fit', label: 'Fit', link: 'Honda' },
      { value: 'HR-V', label: 'HR-V', link: 'Honda' },
      { value: 'Insight', label: 'Insight', link: 'Honda' },
      { value: 'Odyssey', label: 'Odyssey', link: 'Honda' },
      { value: 'Pilot', label: 'Pilot', link: 'Honda' },
      { value: 'Ridgeline', label: 'Ridgeline', link: 'Honda' },
      //Infiniti
      { value: 'Q50', label: 'Q50', link: 'Infiniti' },
      { value: 'Q60', label: 'Q60', link: 'Infiniti' },
      { value: 'Q70', label: 'Q70', link: 'Infiniti' },
      { value: 'QX30', label: 'QX30', link: 'Infiniti' },
      { value: 'QX50', label: 'QX50', link: 'Infiniti' },
      { value: 'QX60', label: 'QX60', link: 'Infiniti' },
      { value: 'QX80', label: 'QX80', link: 'Infiniti' },
      //Jaguar
      { value: 'E-Pace', label: 'E-Pace', link: 'Jaguar' },
      { value: 'F-Pace', label: 'F-Pace', link: 'Jaguar' },
      { value: 'F-Type', label: 'F-Type', link: 'Jaguar' },
      { value: 'XE', label: 'XE', link: 'Jaguar' },
      { value: 'XJ', label: 'XJ', link: 'Jaguar' },
      { value: 'XF', label: 'XF', link: 'Jaguar' },
      //Jeep
      { value: 'Cherokee', label: 'Cherokee', link: 'Jeep' },
      { value: 'Compass', label: 'Compass', link: 'Jeep' },
      { value: 'Grand Cherokee', label: 'Grand Cherokee', link: 'Jeep' },
      { value: 'Renegade', label: 'Renegade', link: 'Jeep' },
      { value: 'Wrangler', label: 'Wrangler', link: 'Jeep' },
      //Kia
      { value: 'Forte', label: 'Forte', link: 'Kia' },
      { value: 'Niro', label: 'Niro', link: 'Kia' },
      { value: 'Optima', label: 'Optima', link: 'Kia' },
      { value: 'Rio', label: 'Rio', link: 'Kia' },
      { value: 'Sedona', label: 'Sedona', link: 'Kia' },
      { value: 'Sorento', label: 'Sorento', link: 'Kia' },
      { value: 'Soul', label: 'Soul', link: 'Kia' },
      { value: 'Sportage', label: 'Sportage', link: 'Kia' },
      //Lexus
      { value: 'ES', label: 'ES', link: 'Lexus' },
      { value: 'IS', label: 'IS', link: 'Lexus' },
      { value: 'GS', label: 'GS', link: 'Lexus' },
      { value: 'GX', label: 'GX', link: 'Lexus' },
      { value: 'LS', label: 'LS', link: 'Lexus' },
      { value: 'LX', label: 'LX', link: 'Lexus' },
      { value: 'RX-350', label: 'RX-350', link: 'Lexus' },
      { value: 'RX-450', label: 'RX-450', link: 'Lexus' },
      //Lincoln
      { value: 'Aviator', label: 'Aviator', link: 'Lincoln' },
      { value: 'Continental', label: 'Continental', link: 'Lincoln' },
      { value: 'MKC', label: 'MKC', link: 'Lincoln' },
      { value: 'MKZ', label: 'MKZ', link: 'Lincoln' },
      { value: 'Nautilus', label: 'Nautilus', link: 'Lincoln' },
      { value: 'Navigator', label: 'Navigator', link: 'Lincoln' },
      //Mercedes
      { value: 'A-Class', label: 'A-Class', link: 'Mercedes' },
      { value: 'C-Class', label: 'C-Class', link: 'Mercedes' },
      { value: 'E-Class', label: 'E-Class', link: 'Mercedes' },
      { value: 'CLA', label: 'CLA', link: 'Mercedes' },
      { value: 'GLA', label: 'GLA', link: 'Mercedes' },
      { value: 'G-Class SUV', label: 'G-Class SUV', link: 'Mercedes' },
      //Mitsubishi
      { value: 'Eclipse', label: 'Eclipse', link: 'Mitsubishi' },
      { value: 'Mirage', label: 'Mirage', link: 'Mitsubishi' },
      { value: 'Outlander', label: 'Outlander', link: 'Mitsubishi' },
      //Nissan
      { value: '370z', label: '370z', link: 'Nissan' },
      { value: 'Altima', label: 'Altima', link: 'Nissan' },
      { value: 'Armada', label: 'Armada', link: 'Nissan' },
      { value: 'Frontier', label: 'Frontier', link: 'Nissan' },
      { value: 'G-TR', label: 'G-TR', link: 'Nissan' },
      { value: 'Leaf', label: 'Leaf', link: 'Nissan' },
      { value: 'Maxima', label: 'Maxima', link: 'Nissan' },
      { value: 'Murano', label: 'Murano', link: 'Nissan' },
      { value: 'Note', label: 'Note', link: 'Nissan' },
      { value: 'Pathfinder', label: 'Pathfinder', link: 'Nissan' },
      { value: 'Rogue', label: 'Rogue', link: 'Nissan' },
      { value: 'Sentra', label: 'Sentra', link: 'Nissan' },
      { value: 'Titan', label: 'Titan', link: 'Nissan' },
      { value: 'Versa', label: 'Versa', link: 'Nissan' },
      //Ram
      { value: '1500', label: '1500', link: 'Ram' },
      { value: '2500', label: '2500', link: 'Ram' },
      { value: '3500', label: '3500', link: 'Ram' },
      //Tesla
      { value: 'Model 3', label: 'Model 3', link: 'Tesla' },
      { value: 'Model S', label: 'Model S', link: 'Tesla' },
      { value: 'Model X', label: 'Model X', link: 'Tesla' },
      //Toyota
      { value: '4Runner', label: '4Runner', link: 'Toyota' },
      { value: 'Avalon', label: 'Avalon', link: 'Toyota' },
      { value: 'Camry', label: 'Camry', link: 'Toyota' },
      { value: 'C-HR', label: 'C-HR', link: 'Toyota' },
      { value: 'Corolla', label: 'Corolla', link: 'Toyota' },
      { value: 'Highlander', label: 'Highlander', link: 'Toyota' },
      { value: 'Land Cruiser', label: 'Land Cruiser', link: 'Toyota' },
      { value: 'Prius', label: 'Prius', link: 'Toyota' },
      { value: 'RAV4', label: 'RAV4', link: 'Toyota' },
      { value: 'Sequoia', label: 'Sequoia', link: 'Toyota' },
      { value: 'Sienna', label: 'Sienna', link: 'Toyota' },
      { value: 'Tacoma', label: 'Tacoma', link: 'Toyota' },
      { value: 'Tundra', label: 'Tundra', link: 'Toyota' },
      //Volkswagen
      { value: 'Atlas', label: 'Atlas', link: 'Volkswagen' },
      { value: 'Beetle', label: 'Beetle', link: 'Volkswagen' },
      { value: 'Golf', label: 'Golf', link: 'Volkswagen' },
      { value: 'Jetta', label: 'Jetta', link: 'Volkswagen' },
      { value: 'Passat', label: 'Passat', link: 'Volkswagen' },
      { value: 'Tiguan', label: 'Tiguan', link: 'Volkswagen' },
    ];

    const filteredOptions = options2.filter((o) => o.link === this.state.selectedOption1.value)

    return (
      <div className="App">
        <p>Select Make</p>
        <Dropdown 
          name="form-field-name"
          value={this.state.selectedOption1.value}
          onChange={this.handleChange1}
          options={options1}
        />
        <p>Select Model</p>    
        <Dropdown
          name="form-field-name"
          value={this.state.selectedOption2.value}
          onChange={this.handleChange2}
          options={filteredOptions}
          />
          <br></br>
          <button 
          type="submit"
          onClick={this.handleFormSubmit}
          >Add Vehicle
          </button>
      </div>
    );
  }
}

export default MakeModel;
