/* eslint-disable no-undef */
import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import api from "../../../../apiControllers/internalApiController";

// ** Create actions with redux-actions

export const authRequest = createAction("AUTH_REQUEST");
export const authResponse = createAction("AUTH_RESPONSE");

// ** handle actions with redux-actions
export default handleActions({
  [authRequest](credentials) {
    return api.signIn(credentials).then(res => {
      sessionStorage.setItem("jwt", res.jwt);
      dispatch(authResponse());
    });
  }
}, {});
