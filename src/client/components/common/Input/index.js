import React from "react";
import Icon from "../Icon";

function Input(props) {
  let i, ph;
  const { name, type, placeholder, icon, onChange } = props;

  switch (type) {
    case "email":
      ph = placeholder || "Email";
      i = icon || ["far", "envelope"];
      break;
    case "password":
      ph = placeholder || "Password";
      i = icon || ["far", "lock"];
      break;
    default:
      ph = placeholder;
      i = icon || ["far", "pencil-alt"];
      break;
  }

  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input
          className="input"
          name={name}
          type={type}
          placeholder={ph}
          onChange={onChange}
        />
        <span className="icon is-small is-left">
          <Icon icon={i} />
        </span>
        <span className="icon is-small is-right">
          <Icon icon="check" />
        </span>
      </p>
    </div>
  );
}

export default Input;
