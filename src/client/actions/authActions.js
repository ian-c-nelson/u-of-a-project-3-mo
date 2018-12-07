import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import api from "../../../apiControllers/internalApiController";

// ** Create actions with redux-actions

export const logInUser = createAction("LOG_IN_USER");
export const logInSuccess = createAction("LOG_IN_SUCCESS");
export const logInFail = createAction("LOG_IN_FAIL");

export const logOutUser = createAction("LOG_OUT_USER");

// // ** handle actions with redux-actions
// export default handleActions({
//   [logInUser](credentials) {
//     return api.signIn(credentials).then(res => {
//       sessionStorage.setItem("jwt", res.jwt);
//       dispatch(loginSuccess());
//     });
//   }
// });
