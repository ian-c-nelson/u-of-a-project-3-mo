import React from "react";
import { action as toggleMenu } from "redux-burger-menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  incrementCounter,
  decrementCounter,
  getCounter
} from "../../../redux/actions/counter";

import {
  getPhrase,
  getPhraseError,
  getPhraseRequested,
  clearPhrase,
  fetchPhrase
} from "../../../redux/actions/fetchPhrase";

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

  incrementIt = () => {
    const { actions } = this.props;
    actions.incrementCounter();
  };

  decrementIt = () => {
    const { actions, state } = this.props;
    actions.decrementCounter();
  };

  fetchIt = () => {
    const { actions, state } = this.props;
    actions.fetchPhrase();
  };

  clearIt = () => {
    const { actions, state } = this.props;
    actions.clearPhrase();
  };

  componentDidMount = () => {
    const { actions } = this.props;

    console.log("Mounted!");

    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  render = () => {
    const { actions, state } = this.props;
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
          onClick={this.decrementIt}
        >
          <Icon icon={["fas", "minus"]} fixedWidth />
        </button>

        <button
          type="button"
          className="button is-primary icon menu"
          onClick={this.incrementIt}
        >
          <Icon icon={["fas", "plus"]} fixedWidth />
        </button>

        <br />

        <span>
          <strong>Counter: </strong> {state.counter}
        </span>
        <br />

        <button
          type="button"
          disabled={state.phraseRequested}
          className="button is-primary icon menu"
          onClick={this.fetchIt}
        >
          <Icon icon={["fas", "plus"]} fixedWidth />
        </button>

        <button
          type="button"
          disabled={state.phraseRequested}
          className="button is-primary icon menu"
          onClick={this.clearIt}
        >
          <Icon icon={["fas", "minus"]} fixedWidth />
        </button>
        <br />
        <div>
          <b>REQUESTED</b>: {state.phraseRequested ? "TRUE" : "FALSE"}
        </div>
        <div>
          <b>PHRASE</b>: {state.phrase !== null ? state.phrase : "NO PHRASE"}
        </div>
        <div>
          <b>ERROR</b>: {state.phraseError !== null ? state.phraseError : "NO ERROR"}
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    state: {
      counter: getCounter(state),
      phrase: getPhrase(state),
      phraseError: getPhraseError(state),
      phraseRequested: getPhraseRequested(state)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        toggleMenu,
        incrementCounter,
        decrementCounter,
        clearPhrase,
        fetchPhrase
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SandBox);
