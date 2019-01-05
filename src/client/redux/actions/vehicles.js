import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import API from "../../../../apiControllers/internal";


// PRIVATE ACTION CREATORS
const vehicleRequest = createAction("VEHICLE_REQUEST");
const vehicleResponse = createAction("VEHICLE_RESPONSE");
const vehicleError = createAction("VEHICLE_ERROR");

// EXPORTED ACTION CREATORS
export const clearVehicleData = createAction("CLEAR_VEHICLE_DATA");
export const clearVehicleError = createAction("CLEAR_VEHICLE_ERROR");

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

  dispatch(vehicleError(payload));
}

export const addVehicle = vehicle => dispatch => {
  dispatch(vehicleRequest());
  return API.addVehicle(vehicle)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      handleAsyncActionError(err, dispatch);
    });
};

export const updateVehicle = vehicle => dispatch => {
  dispatch(vehicleRequest());
  return API.updateVehicle(vehicle)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      handleAsyncActionError(err, dispatch);
    });
};

export const getVehicle = id => dispatch => {
  dispatch(vehicleRequest());
  return API.getVehicle(id)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      handleAsyncActionError(err, dispatch);
    });
};

export const deleteVehicle = id => dispatch => {
  dispatch(vehicleRequest());
  return API.deleteVehicle(id)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      handleAsyncActionError(err, dispatch);
    });
};

export const getUserVehicles = user => dispatch => {
  dispatch(vehicleRequest());
  return API.getUserVehicles(user._id)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      handleAsyncActionError(err, dispatch);
    });
};

// REDUCERS
const error = handleActions(
  {
    [vehicleError](_state, { payload }) {
      return payload;
    },
    [vehicleRequest]() {
      return null;
    },
    [vehicleResponse]() {
      return null;
    },
    [clearVehicleError]() {
      return null;
    },
    [clearVehicleError]() {
      return null;
    }
  },
  null
);

const requested = handleActions(
  {
    [vehicleError]() {
      return false;
    },
    [vehicleRequest]() {
      return true;
    },
    [vehicleResponse]() {
      return false;
    },
    [clearVehicleError]() {
      return false;
    },
    [clearVehicleError]() {
      return false;
    }
  },
  false
);

const value = handleActions(
  {
    [vehicleError]() {
      return null;
    },
    [vehicleRequest]() {
      return null;
    },
    [vehicleResponse](_state, { payload }) {
      return payload;
    },
    [clearVehicleError]() {
      return null;
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
