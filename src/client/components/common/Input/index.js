import React from "react";
import Icon from "../Icon";
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { purple400, purple700 } from "material-ui/styles/colors";
import { createMuiTheme } from 'material-ui/styles';

const theme = getMuiTheme({
  palette: {
     primary1Color: purple400,
     primary2Color: purple700,
     pickerHeaderColor: purple400,
   
  
  },
});


function Input(props) {
  let i, ph;
  const { name, type, placeholder, icon, validation, onChange } = props;

  const hasValidation = !!validation;
  const isValid = (!hasValidation) || validation.isValid;
  const validationMessage = validation ? validation.message : "";
  const validationIcon = isValid ? ["fas", "check"] : ["fas", "times"];
  const validationIconClass = isValid ? "has-text-success" : "has-text-danger";

  switch (type) {
    case "email":
      ph = placeholder || "Email";
      i = icon || ["fas", "envelope"];
      break;
    case "password":
      ph = placeholder || "Password";
      i = icon || ["fas", "lock"];
      break;
    case "datepicker":
      ph = placeholder || "Date";
      i = icon || ["fas", "calendar-alt"];
    default:
      ph = placeholder;
      i = icon || ["fas", "pencil-alt"];
      break;
  }

  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        {type === "datepicker" ? (
          <MuiThemeProvider  muiTheme={theme}>
            <DatePicker className="input" hintText={ph} title={validationMessage}
              onChange={onChange} />
          </MuiThemeProvider>
        ) : (
            <input
              className="input"
              name={name}
              type={type}
              placeholder={ph}
              title={validationMessage}
              onChange={onChange}
            />
          )}

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
