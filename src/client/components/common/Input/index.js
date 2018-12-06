import React from "react";
import Icon from "../Icon";


function Input(props) {
  let icon;
  let placeholder;
  const { name, type } = props;

  switch (type) {
    case "email":
      placeholder = "Email";
      icon = <Icon icon="envelope" />;
      break;
    case "password":
      placeholder = "Password";
      icon = <Icon icon="lock" />;
      break;
    default:
      icon = <Icon icon="pencilAlt" />;
      break;
  }

  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input className="input" name={name} type={type} placeholder={placeholder} />
        <span className="icon is-small is-left">{icon}</span>
        <span className="icon is-small is-right">
          <Icon icon="check" />
        </span>
      </p>
    </div>
  );
}

export default Input;
