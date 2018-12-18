import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import { push } from "connected-react-router";
import API from "../../../../apiControllers/internal";

// PRIVATE ACTION CREATORS
const authRequest = createAction("VEHICLE_REQUEST");
const authResponse = createAction("VEHICLE_RESPONSE");

// EXPORTED ACTION CREATORS
export const logOut = createAction("LOG_OUT_USER");
export const clearVehicleError = createAction("CLEAR_VEHICLE_ERROR");

export const addVehicle = vehicle => dispatch => {
  dispatch(authRequest());
  API.saveVehicle(vehicle)
    .then(res => {
      dispatch(authResponse(res.data));
    })
    .then(() => {
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

export const getVehicle = id => dispatch => {
  dispatch(authRequest());
  API.getVehicle(id)
    .then(res => {
      dispatch(authResponse(res.data));
    })
    .then(() => {
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

export const getVehicles = user => dispatch => {
  dispatch(authRequest());
  API.getUserVehicles(user._id)
    .then(res => {
      dispatch(authResponse(res.data));
    })
    .then(() => {
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
    [clearVehicleError]() {
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
    [clearVehicleError]() {
      return null;
    }
  },
  null
);

export default combineReducers({
  error,
  requested,
  value
});

// SELECTORS
export const getVehicleData = state => {
  return state.vehicles.value;
};

export const getVehicleError = state => {
  return state.vehicles.error;
};

export const getVehicleRequested = state => {
  return state.vehicles.requested;
};
