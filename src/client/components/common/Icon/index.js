import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/pro-light-svg-icons";
import { faCarMechanic } from "@fortawesome/pro-solid-svg-icons";

library.add(faCheck, faEnvelope, faLock, faPencilAlt, faCarMechanic);

function Icon(props) {
  const { icon } = props;
  return <FontAwesomeIcon icon={icon} />;
}

export default Icon;
