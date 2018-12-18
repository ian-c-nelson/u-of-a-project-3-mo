import React from "react";
import MuiDatePicker from "material-ui/DatePicker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { purple400, purple700 } from "material-ui/styles/colors";
import Icon from "../../Icon";

const theme = getMuiTheme({
  palette: {
    primary1Color: purple400,
    primary2Color: purple700,
    pickerHeaderColor: purple400
  }
}); 

function DatePicker(props) {
  const {
    name,
    value,
    placeholder,
    icon,
    validation,
    className,
    onChange
  } = props;

  const i = icon || ["fas", "calendar-alt"];
  const ph = placeholder || "Date";
  const hasValidation = !!validation;
  const isValid = !hasValidation || validation.isValid;
  const validationMessage = validation ? validation.message : "";
  const validationIcon = isValid ? ["fas", "check"] : ["fas", "times"];
  const validationIconClass = isValid ? "has-text-success" : "has-text-danger";

  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <MuiThemeProvider muiTheme={theme}>
          <MuiDatePicker
            name={name}
            value={value}
            className={`input${className ? ` ${className}` : ""}`}
            hintText={ph}
            title={validationMessage}
            onChange={onChange}
          />
        </MuiThemeProvider>{" "}
        <span className="icon is-small is-left">
          <Icon icon={i} />
        </span>
        <span className="icon is-small is-right">
          <Icon
            icon={validationIcon}
            className={hasValidation ? validationIconClass : ""}
          />
        </span>
      </p>
    </div>
  );
}

export default DatePicker;
