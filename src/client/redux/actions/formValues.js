/* eslint-disable no-restricted-syntax */
import { createAction, handleActions } from "redux-actions";

// ACTION CREATORS
export const setFormValues = createAction("SET_FORM_VALUES");
export const clearFormValues = createAction("CLEAR_FORM_VALUES");

// REDUCERS
export default handleActions(
  {
    [setFormValues](state, { payload }) {
      const p = JSON.parse(JSON.stringify(state));
      // match and override keys.
      for (const key of Object.keys(payload)) {
          p[key] = payload[key];
      }
      return p;
    },
    [clearFormValues]() {
      return null;
    }
  },
  {}
);

// SELECTORS
export const getFormValues = state => {
  return state.formValues;
};
