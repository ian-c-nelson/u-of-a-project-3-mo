import { combineReducers } from "redux";
import { reducer as burgerMenu } from "redux-burger-menu";
import auth from "../actions/auth";
import counter from "../actions/counter";
import phraseReducers from "../actions/fetchPhrase";

export default combineReducers({
  auth,
  burgerMenu,
  counter,
  phraseReducers
});
