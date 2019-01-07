import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import API from "../../../../apiControllers/internal";

// PRIVATE ACTION CREATORS
const authRequest = createAction("AUTH_REQUEST");
const authResponse = createAction("AUTH_RESPONSE");
const authError = createAction("AUTH_ERROR");

// EXPORTED ACTION CREATORS
export const logOut = createAction("LOG_OUT_USER");
export const clearAuthError = createAction("CLEAR_AUTH_ERROR");

// PRIVATE FUNCTIONS
function handleAsyncActionError(err, dispatch) {
  let payload = {};
  if (err.response) {
    if (err.response.data.error) {
      payload = err.response.data.error;
    } else {
      payload = err.response.data;
    }
  } else {
    payload = err;
  }

  dispatch(authError(payload));
}

export const signUp = credentials => dispatch => {
  dispatch(authRequest());
  return API.signUp(credentials)
    .then(res => {
      dispatch(authResponse(res.data));
    })
    .catch(err => {
      handleAsyncActionError(err, dispatch);
    });
};

export const logIn = credentials => dispatch => {
  dispatch(authRequest());
  return API.logIn(credentials)
    .then(res => {
      dispatch(authResponse(res.data));
    })
    .catch(err => {
      handleAsyncActionError(err, dispatch);
    });
};

// REDUCERS
const error = handleActions(
  {
    [authError](_state, { payload }) {
      return payload;
    },
    [authRequest]() {
      return null;
    },
    [authResponse]() {
      return null;
    },
    [logOut]() {
      return null;
    },
    [clearAuthError]() {
      return null;
    }
  },
  null
);

const requested = handleActions(
  {
    [authError]() {
      return false;
    },
    [authRequest]() {
      return true;
    },
    [authResponse]() {
      return false;
    },
    [logOut]() {
      return false;
    },
    [clearAuthError]() {
      return false;
    }
  },
  false
);

const value = handleActions(
  {
    [authError]() {
      return null;
    },
    [authRequest]() {
      return null;
    },
    [authResponse](_state, { payload }) {
      return payload;
    },
    [logOut]() {
      return null;
    },
    [clearAuthError]() {
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
export const getAuthData = state => {
  return state.auth.value;
};

export const getAuthError = state => {
  return state.auth.error;
};

export const getAuthRequested = state => {
  return state.auth.requested;
};
