import React from "react";
import Select from "react-select";
import Icon from "../../Icon";

function DropDown(props) {
  const {
    name,
    value,
    placeholder,
    icon,
    showValidation,
    validation,
    onChange,
    options,
    filter,
    className,
    isSearchable
  } = props;

  const i = icon || ["far", "bars"];
  const ph = placeholder || "Select";
  const hasValidation = !!validation;
  const isValid = !hasValidation || validation.isValid;
  const validationMessage = validation ? validation.message : "";
  const validationIcon = isValid ? ["fas", "check"] : ["fas", "times"];
  const validationIconClass = isValid ? "has-text-success" : "has-text-danger";
  const filteredOptions = filter
    ? options.filter(o => o.filter === filter)
    : options;

  filteredOptions.sort((a, b) => {
    return a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1;
  });

  return (
    <div className="field">
      <p
        className={`control has-icons-left${
          showValidation ? " has-icons-right" : ""
        }`}
      >
        <Select
          className={`react-select-container input${
            className ? ` ${className}` : ""
          }`}
          classNamePrefix="react-select"
          name={name}
          value={options.filter(o => o.value === value)}
          placeholder={ph}
          title={validationMessage}
          options={filteredOptions}
          isSearchable={isSearchable}
          onChange={event => {
            onChange(event, name);
          }}
        />
        <span className="icon is-small is-left">
          <Icon icon={i} />
        </span>
        {showValidation && (
          <span className="icon is-small is-right">
            <Icon
              icon={validationIcon}
              className={hasValidation ? validationIconClass : ""}
            />
          </span>
        )}
      </p>
    </div>
  );
}

export default DropDown;
