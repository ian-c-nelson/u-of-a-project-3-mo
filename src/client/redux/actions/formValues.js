import { createAction, handleActions } from "redux-actions";

// ACTION CREATORS
export const setFormValues = createAction("SET_FORM_VALUES");
export const clearFormValues = createAction("CLEAR_FORM_VALUES");

// REDUCERS
export default handleActions(
  {
    [setFormValues](state, { payload }) {
      return payload;
    },
    [clearFormValues]() {
      return null;
    }
  },
  {}
);

// SELECTORS
export const getFormValues = state => {
  console.log("getFormValues", state);

  return state.formValues;
};
