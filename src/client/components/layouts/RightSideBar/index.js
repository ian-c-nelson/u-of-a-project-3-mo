import React from "react";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";

function RightSidebar(props) {
  const { children } = props;
  return (
    <Menu {...props}>
      {/* {state.videos ? (
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
        <h3>No Videos</h3>
      )} */}
    </Menu>
  );
}

export default reduxBurgerMenu(RightSidebar, "right");
