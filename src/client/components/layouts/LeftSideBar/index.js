/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import {
  decorator as reduxBurgerMenu,
  action as toggleMenu
} from "redux-burger-menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { clearVideos, fetchVideos } from "../../../redux/actions/videos";

function videoLinkOnClick(event, actions, query) {
  event.preventDefault();
  actions.clearVideos();
  actions.fetchVideos(query);
  actions.toggleMenu(false, "left");
  actions.toggleMenu(true, "right");
}

function LeftSidebar(props) {
  const { actions } = props;
  return (
    <Menu {...props}>
      <ul className="menu-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <p className="menu-label">Vehicle Information</p>
      <ul className="menu-list">
        <li>
          <Link to="/vehicles/add">Add Vehicle</Link>

        </li>
        <li>
          <Link to="/maintenance/add">
            Add Maintenance
          </Link>
        </li>
        <li>
          <Link to="/vehicles/search">Search for Vehicles</Link>
        </li>
        <li>
          <Link to="/vehicles/for-sale">Vehicles for Sale</Link>
        </li>
        <p className="menu-label">How To</p>
        <li>
          <Link
            to="#"
            onClick={event => {
              videoLinkOnClick(event, actions, "Change Oil");
            }}
          >
            Change Oil
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={event => {
              videoLinkOnClick(event, actions, "Replace Wiper Blades");
            }}
          >
            Replace Wiper Blades
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={event => {
              videoLinkOnClick(event, actions, "Replace Air Filter");
            }}
          >
            Replace Air Filter
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={event => {
              videoLinkOnClick(event, actions, "Change Tires");
            }}
          >
            Change Tires
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={event => {
              videoLinkOnClick(event, actions, "Replace Battery");
            }}
          >
            Replace Battery
          </Link>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        toggleMenu,
        clearVideos,
        fetchVideos
      },
      dispatch
    )
  };
}

export default reduxBurgerMenu(
  connect(
    null,
    mapDispatchToProps
  )(LeftSidebar),
  "left"
);
