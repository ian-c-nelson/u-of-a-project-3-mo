import React from "react";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";

function RightSidebar(props) {
  const { children } = props;
  return <Menu {...props}>{children}</Menu>;
}

export default reduxBurgerMenu(RightSidebar, "right");
