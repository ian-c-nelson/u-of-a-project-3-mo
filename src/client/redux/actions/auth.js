import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import API from "../../../../apiControllers/internal";

// ACTION CREATORS
const signUpRequest = createAction("SIGN_UP_REQUEST");
const signUpResponse = createAction("SIGN_UP_RESPONSE");

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  console.log(credentials);
  API.signUp(credentials)
    .then(value => {
      dispatch(signUpResponse(value));
    })
    .catch(err => {
      dispatch(signUpResponse(err));
    });
};

export const logOut = createAction("LOG_OUT_USER");

// REDUCERS
const requested = handleActions(
  {
    [signUpRequest]() {
      return true;
    },
    [signUpResponse]() {
      return false;
    }
  },
  false
);

const value = handleActions(
  {
    [signUpResponse]: {
      next(state, { payload }) {
        return payload;
      }
    },
    [logOut]() {
      return null;
    }
  },
  null
);

const error = handleActions(
  {
    [signUpResponse]: {
      next(state, { payload }) {
        return payload;
      },
      throw(
        state,
        {
          payload: { message }
        }
      ) {
        return message;
      }
    },
    [logOut]() {
      return null;
    }
  },
  null
);

const authReducers = combineReducers({
  error,
  requested,
  value
});

export default authReducers;

// SELECTORS
export const getToken = state => {
  return state && state.auth && state.auth.value
    ? state.auth.value.token
    : null;
};

export const getSignUpError = state => {
  return state && state.auth ? state.auth.error : null;
};

export const getSignUpRequested = state => {
  return state && state.auth ? state.auth.requested : false;
};
