import React from "react";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";
import { Video } from "../../common";

import {
  getVideos,
  getVideosError,
  getVideosRequested
} from "../../../redux/actions/videos";

function RightSidebar(props) {
  const { state } = props;
  return (
    <Menu {...props}>
      {state.videos ? (
        state.videos.map(item => <Video key={uuidv4()} video={item} />)
      ) : (
        <p>Loading...</p>
      )}
    </Menu>
  );
}

function mapStateToProps(state) {
  return {
    state: {
      burgerMenu: state.burgerMenu,
      videos: getVideos(state),
      videosError: getVideosError(state),
      videosRequested: getVideosRequested(state)
    }
  };
}

export default reduxBurgerMenu(
  connect(
    mapStateToProps,
    null
  )(RightSidebar),
  "right"
);
