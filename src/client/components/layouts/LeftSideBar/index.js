import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";

function LeftSidebar(props) {
  return (
    <Menu {...props}>
      <ul className="menu-list">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <p className="menu-label">Vehicle Information</p>
      <ul className="menu-list">
        <li>
          <Link to="/vehicles/search">Search for Vehicles</Link>
        </li>
        <li>
          <Link to="/vehicles/for-sale">Vehicles for Sale</Link>
        </li>
        <li>
          <Link to="/vehicles/how-to">How To</Link>
        </li>
        <li>
          <Link to="/vehicles/maintentance">Set Maintenance Reminders</Link>
        </li>
      </ul>
      <hr />
      <div className="buttons">
        <Link className="button is-primary" to="/signup">
          <strong>Sign up</strong>
        </Link>
        <Link className="button is-light" to="/login">
          Log in
        </Link>
      </div>
    </Menu>
  );
}

export default reduxBurgerMenu(LeftSidebar, "left");
