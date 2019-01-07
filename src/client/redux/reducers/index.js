import { combineReducers } from "redux";
import { reducer as burgerMenu } from "redux-burger-menu";
import { connectRouter } from "connected-react-router";
import auth from "../actions/auth";
import vehicles from "../actions/vehicles";
import videos from "../actions/videos";

export default (history) => combineReducers({
  router: connectRouter(history),
  auth,
  burgerMenu,
  vehicles,
  videos
});
