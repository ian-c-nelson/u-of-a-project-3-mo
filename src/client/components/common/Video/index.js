import React from "react";

function Video(props) {
  const { video } = props;
  const link = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video">
      <div className="header">
        <p className="menu-label">{video.snippet.title}</p>
      </div>
      <div className="content">
        <iframe
          title={video.snippet.title}
          width="auto"
          src={link}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Video;
