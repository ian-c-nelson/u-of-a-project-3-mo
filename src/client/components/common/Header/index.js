/* eslint-disable jsx-a11y/anchor-is-valid */
import { action as toggleMenu } from "redux-burger-menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import React from "react";
import Icon from "../Icon";

class Header extends React.Component {
  onIconClick = event => {
    event.preventDefault();
    const { actions, burgerMenu } = this.props;
    const isOpen = !burgerMenu.isOpen;
    actions.toggleMenu(isOpen);
  };

  render = () => (
    <nav
      className="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="" className="navbar-item" onClick={this.onIconClick}>
          <Icon icon="car-mechanic" />
        </Link>
        <div className="navbar-item">
          <h4>Welcome to Mo!</h4>
        </div>
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
