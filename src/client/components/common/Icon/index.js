import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconLibrary from "./library";


function Icon(props) {
  // console.log(iconLibrary.faTrashAltSolid);

  return <FontAwesomeIcon {...props} />;
}

export default Icon;
