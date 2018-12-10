import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import {
  faCarMechanic as faCarMechanicLight,
  faBars as faBarsLight,
  faCheck as faCheckLight,
  faEnvelope as faEnvelopeLight,
  faLock as faLockLight,
  faPencilAlt as faPencilAltLight,
  faTrashAlt as faTrashAltLight,
  faWrench as faWrenchLight
} from "@fortawesome/pro-light-svg-icons";

import {
  faBars,
  faCarMechanic,
  faCheck,
  faEnvelope,
  faLock,
  faPencilAlt,
  faTrashAlt,
  faWrench
} from "@fortawesome/pro-regular-svg-icons";

import {
  faCarMechanic as faCarMechanicSolid,
  faBars as faBarsSolid,
  faCheck as faCheckSolid,
  faEnvelope as faEnvelopeSolid,
  faLock as faLockSolid,
  faPencilAlt as faPencilAltSolid,
  faTrashAlt as faTrashAltSolid,
  faWrench as faWrenchSolid
} from "@fortawesome/pro-solid-svg-icons";

iconLibrary.add(
  faBars,
  faBarsLight,
  faBarsSolid,
  faCarMechanic,
  faCarMechanicLight,
  faCarMechanicSolid,
  faCheck,
  faCheckLight,
  faCheckSolid,
  faEnvelope,
  faEnvelopeLight,
  faEnvelopeSolid,
  faLock,
  faLockLight,
  faLockSolid,
  faPencilAlt,
  faPencilAltLight,
  faPencilAltSolid,
  faTrashAlt,
  faTrashAltLight,
  faTrashAltSolid,
  faWrench,
  faWrenchLight,
  faWrenchSolid,
  faYoutube
);

export default iconLibrary;
