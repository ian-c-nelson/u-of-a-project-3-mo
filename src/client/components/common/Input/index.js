import React from "react";
import Icon from "../Icon";
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { purple400, purple700 } from "material-ui/styles/colors";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const theme = getMuiTheme({
  palette: {
    primary1Color: purple400,
    primary2Color: purple700,
    pickerHeaderColor: purple400,
  },
});


function Input(props) {
  let i, ph, input;
  const { name, value, type, placeholder, icon, validation, onChange, options, filter } = props;
  const filteredOptions = filter ? options.filter((o) => o.filter === filter) : options;
  const hasValidation = !!validation;
  const isValid = (!hasValidation) || validation.isValid;
  const validationMessage = validation ? validation.message : "";
  const validationIcon = isValid ? ["fas", "check"] : ["fas", "times"];
  const validationIconClass = isValid ? "has-text-success" : "has-text-danger";

  const baseInput = <input
    className="input"
    name={name}
    value={value}
    type={type}
    placeholder={ph}
    title={validationMessage}
    onChange={onChange}
  />;

  const dpInput = (<MuiThemeProvider muiTheme={theme}>
    <DatePicker
    name={name}
    value={value}
    
    
    className="input" hintText={ph} title={validationMessage}
      onChange={onChange} />
  </MuiThemeProvider>);

  const ddInput = (<Dropdown
    name={name}
    value={value}
    onChange={onChange}
    options={filteredOptions}
  />)

  switch (type) {
    case "email":
      ph = placeholder || "Email";
      i = icon || ["fas", "envelope"];
      input = baseInput;
      break;
    case "password":
      ph = placeholder || "Password";
      i = icon || ["fas", "lock"];
      input = baseInput;
      break;
    case "datepicker":
      ph = placeholder || "Date";
      i = icon || ["fas", "calendar-alt"];
      input = dpInput;
    case "dropdown":
      ph = placeholder || "Select";
      i = icon || ["fas", "pencil-alt"];
      input = ddInput;
    default:
      ph = placeholder;
      i = icon || ["fas", "pencil-alt"];
      input = baseInput;
      break;
  }

  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        {input}
        <span className="icon is-small is-left">
          <Icon icon={i} />
        </span>
        <span className="icon is-small is-right">
          <Icon icon={validationIcon} className={hasValidation ? validationIconClass : ""} />
        </span>
      </p>
    </div>
  );
}

export default Input;
