import React, { Component } from 'react';
import './MakePicker.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { makes } from "../../../../../config/dropDownData";

class MakePicker extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: {}
    }
  }

  render() {

    return (
      <Dropdown
        name={this.props.name}
        value={this.state.selectedOption.value}
        onChange={this.props.onChange}
        options={makes}
      />
    );
  }
}

export default MakePicker;
