import React from "react";

function ToolTip(props) {
  const { message, position, children } = props;
  const bubbleClassName = `tooltip-bubble ${position || "top"}`;
  return (
    <span className="tooltip-wrapper">
      {children}
      <span className={bubbleClassName}>{message}</span>
    </span>
  );
}

export default ToolTip;
