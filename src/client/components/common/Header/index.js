/* eslint-disable jsx-a11y/anchor-is-valid */
import { action as toggleMenu } from "redux-burger-menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import React from "react";
import Icon from "../Icon";

class Header extends React.Component {
  openMainMenu = event => {
    event.preventDefault();
    const { actions, burgerMenu } = this.props;
    const isOpen = !burgerMenu.left.isOpen;
    actions.toggleMenu(isOpen, "left");
    // actions.toggleMenu(isOpen, "right");
  };

  onKeyUp = event => {};

  render = () => (
    <nav
      className="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="" className="navbar-item" onClick={this.openMainMenu}>
          <Icon icon={["fas", "car-mechanic"]} size="2x" />
        </Link>
        <div className="navbar-item">
          <h4>Welcome to Mo!</h4>
        </div>
        <button
          type="button"
          className="button is-primary navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={this.openMainMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        toggleMenu
      },
      dispatch
    )
  };
}

function mapStateToProps(state) {
  console.log(state);
  return { ...state };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
