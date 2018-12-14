import { createAction, handleActions } from "redux-actions";

// ACTION CREATORS
export const setFormValues = createAction("SET_FORM_VALUES");

// REDUCERS
export default handleActions(
  {
    [setFormValues](state, { payload }) {
      return payload;
    }
  },
  {}
);

// SELECTORS
export const getFormValues = state => {
  console.log("getFormValues", state);

  return state.formValues;
};
