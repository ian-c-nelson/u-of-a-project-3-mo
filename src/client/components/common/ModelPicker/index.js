import React, { Component } from 'react';
import './MakePicker.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { models } from "../../../../../config/dropDownData";



class ModelPicker extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: {}
    }
  }

  render() {

    const filteredOptions = models.filter((o) => o.filter === this.props.filter)

    return (
      <Dropdown
        name={this.props.name}
        value={this.state.selectedOption.value}
        onChange={this.props.onChange}
        options={filteredOptions}
      />
    );
  }
}

export default ModelPicker;