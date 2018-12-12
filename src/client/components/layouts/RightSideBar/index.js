import React from "react";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";

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
        state.videos.map(item => {
          console.log(item);
          const YTLink = "https://www.youtube.com/embed/";
          const link = YTLink + item.id.videoId;
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
