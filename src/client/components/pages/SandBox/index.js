import React from "react";
import { action as toggleMenu } from "redux-burger-menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Icon, ToolTip } from "../../common";

class SandBox extends React.Component {
  openMainMenu = event => {
    event.preventDefault();
    const { actions, state } = this.props;
    const isOpen = !state.burgerMenu.left.isOpen;
    actions.toggleMenu(isOpen, "left");
  };

  openVideoMenu = event => {
    event.preventDefault();
    const { actions, state } = this.props;
    const isOpen = !state.burgerMenu.right.isOpen;
    actions.toggleMenu(isOpen, "right");
  };

  componentDidMount = () => {
    const { actions } = this.props;

    console.log("Mounted!");

    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  render = () => {
    console.log(this.props);

    return (
      <div className="page sandbox">
        <button
          type="button"
          className="button is-primary icon menu"
          onClick={this.openMainMenu}
        >
          <Icon icon={["fas", "bars"]} fixedWidth />
        </button>

        <button
          type="button"
          className="button is-primary icon menu"
          onClick={this.openMainMenu}
        >
          <Icon icon={["fas", "bars"]} fixedWidth />
        </button>

        <br />

        <button
          type="button"
          className="button is-primary icon menu"
          onClick={this.openVideoMenu}
        >
          <Icon icon={["fab", "youtube"]} fixedWidth />
        </button>

        <button
          type="button"
          className="button is-primary icon menu"
          onClick={this.openVideoMenu}
        >
          <Icon icon={["fab", "youtube"]} fixedWidth />
        </button>
      </div>
    );
  };
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
  return { state: { ...state } };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SandBox);
