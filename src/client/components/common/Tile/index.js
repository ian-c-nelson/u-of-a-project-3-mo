import React from "react";

function Tile(props) {
    const { className, title } = props;
    const tileClass = "tile" + (className ? " " + className : "");
    console.log(tileClass);
    return (

        <div className={tileClass}>
            { title && <p className="title">{props.title}</p> }
            {props.children}
        </div>
    );
}

export default Tile;
