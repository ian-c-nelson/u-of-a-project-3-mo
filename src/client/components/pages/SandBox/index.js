import React from "react";
import { action as toggleMenu } from "redux-burger-menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";

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

import {
  getVideos,
  getVideosError,
  getVideosRequested,
  clearVideos,
  fetchVideos
} from "../../../redux/actions/videos";

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
    const { actions } = this.props;
    actions.clearPhrase();
  };

  fetchVideos = () => {
    const { actions } = this.props;
    actions.fetchVideos("Oil Change", "Toyota", "Corolla", "2010");
  };

  componentDidMount = () => {
    const { actions } = this.props;
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  render = () => {
    const { state } = this.props;
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
          onClick={this.openVideoMenu}
        >
          <Icon icon={["fab", "youtube"]} fixedWidth />
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
          <b>ERROR</b>:{" "}
          {state.phraseError !== null ? state.phraseError : "NO ERROR"}
        </div>
        <br />
        <button
          type="button"
          disabled={state.videoRequested}
          className="button is-primary icon menu"
          onClick={this.fetchVideos}
        >
          <Icon icon={["fab", "youtube"]} fixedWidth />
        </button>
        <div>
          <b>REQUESTED</b>: {state.videosRequested ? "TRUE" : "FALSE"}
        </div>
        <div>
          <b>ERROR</b>:
          {state.phraseError !== null ? state.videosError : "NO ERROR"}
        </div>
        <div>
          {state.videos ? (
            state.videos.map(item => {
              const link = `https://www.youtube.com/embed/${item.id.videoId}`;

              const uuid = uuidv4();
              return (
                <div key={uuid}>
                  <iframe
                    title="tester"
                    width="560"
                    height="315"
                    src={link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <p>{item.snippet.title}</p>
                </div>
              );
            })
          ) : (
            <h3>No Videos</h3>
          )}
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    state: {
      burgerMenu: state.burgerMenu,
      counter: getCounter(state),
      phrase: getPhrase(state),
      phraseError: getPhraseError(state),
      phraseRequested: getPhraseRequested(state),
      videos: getVideos(state),
      videosError: getVideosError(state),
      videosRequested: getVideosRequested(state)
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
        fetchPhrase,
        fetchVideos
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SandBox);
