import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faEnvelope,
  faLock,
  faTrashAlt as faTrashAltSolid
} from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt as faPencilAltLight } from "@fortawesome/pro-light-svg-icons";
import { faWrench } from "@fortawesome/pro-regular-svg-icons";
import {
  faCarMechanic,
  faWrench as faWrenchSolid,
  faPencilAlt as faPencilAltSolid
} from "@fortawesome/pro-solid-svg-icons";

library.add(
  faCarMechanic,
  faCheck,
  faEnvelope,
  faLock,
  faPencilAltLight,
  faPencilAltSolid,
  faTrashAlt,
  faTrashAltSolid,
  faWrench,
  faWrenchSolid
);

function Icon(props) {
  console.log(faTrashAltSolid);

  return <FontAwesomeIcon {...props} />;
}

export default Icon;
