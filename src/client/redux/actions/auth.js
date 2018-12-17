import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import { push } from "connected-react-router";
import API from "../../../../apiControllers/internal";

// PRIVATE ACTION CREATORS
const authRequest = createAction("AUTH_UP_REQUEST");
const authResponse = createAction("AUTH_UP_RESPONSE");

// EXPORTED ACTION CREATORS
export const logOut = createAction("LOG_OUT_USER");
export const clearAuthError = createAction("CLEAR_AUTH_ERROR");

export const signUp = credentials => dispatch => {
  dispatch(authRequest());
  API.signIn(credentials)
    .then(res => {
      dispatch(authResponse(res.data));
    })
    .then(()=> {
      dispatch(push("/"));
    })
    .catch(err => {
      if (err.response) {
        dispatch(authResponse(err.response.data.error));
      } else {
        dispatch(authResponse(err));
      }
    });
};

export const logIn = credentials => dispatch => {
  dispatch(authRequest());
  API.logIn(credentials)
    .then(res => {
      dispatch(authResponse(res.data));
    })
    .then(()=> {
      dispatch(push("/"));
    })    
    .catch(err => {
      if (err.response) {
        dispatch(authResponse(err.response.data.error));
      } else {
        dispatch(authResponse(err.Error));
      }
    });
};

// REDUCERS
const requested = handleActions(
  {
    [authRequest]() {
      return true;
    },
    [authResponse]() {
      return false;
    }
  },
  false
);

const value = handleActions(
  {
    [authResponse]: {
      next(_state, { payload }) {
        return payload;
      }
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

const error = handleActions(
  {
    [authResponse]: {
      next(_state, { payload }) {
        return null;
      },
      throw(
        _state,
        {
          payload: { message }
        }
      ) {
        return message;
      }
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
  return state && state.auth ? state.auth.value : null;
};

export const getSignUpError = state => {
  return state && state.auth ? state.auth.error : null;
};

export const getAuthRequested = state => {
  return state && state.auth ? state.auth.requested : false;
};
