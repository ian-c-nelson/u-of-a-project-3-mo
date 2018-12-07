import React from "react";

function Tile(props) {
  return (
    
    <div className="tile is-child box">
      <p className="title">{props.title}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default Tile;
