import React from "react";
import Icon from "../../Icon";

function TextBox(props) {
  let i, ph;
  const {
    name,
    value,
    type,
    placeholder,
    icon,
    validation,
    className,
    onChange
  } = props;

  const hasValidation = !!validation;
  const isValid = !hasValidation || validation.isValid;
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
    default:
      ph = placeholder;
      i = icon || ["fas", "pencil-alt"];
      break;
  }

  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input
          className={`input${className ? ` ${className}` : ""}`}
          name={name}
          value={value}
          type={type}
          placeholder={ph}
          title={validationMessage}
          onChange={onChange}
        />
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

export default TextBox;
