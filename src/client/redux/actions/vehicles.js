import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import API from "../../../../apiControllers/internal";

// PRIVATE ACTION CREATORS
const vehicleRequest = createAction("VEHICLE_REQUEST");
const vehicleResponse = createAction("VEHICLE_RESPONSE");

// EXPORTED ACTION CREATORS
export const clearVehicleData = createAction("CLEAR_VEHICLE_DATA");

export const addVehicle = vehicle => dispatch => {
  console.log("addVehicle");

  dispatch(vehicleRequest());
  return API.addVehicle(vehicle)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      if (err.response) {
        dispatch(vehicleResponse(err.response.data.error));
      } else {
        dispatch(vehicleResponse(err));
      }
    });
};

export const updateVehicle = vehicle => dispatch => {
  console.log("updateVehicle");

  dispatch(vehicleRequest());
  return API.updateVehicle(vehicle)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      if (err.response) {
        dispatch(vehicleResponse(err.response.data.error));
      } else {
        dispatch(vehicleResponse(err));
      }
    });
};

export const getVehicle = id => dispatch => {
  console.log("getVehicle");

  dispatch(vehicleRequest());
  return API.getVehicle(id)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      if (err.response) {
        dispatch(vehicleResponse(err.response.data.error));
      } else {
        dispatch(vehicleResponse(err));
      }
    });
};

export const deleteVehicle = id => dispatch => {
  console.log("deleteVehicle");

  dispatch(vehicleRequest());
  return API.deleteVehicle(id)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      if (err.response) {
        dispatch(vehicleResponse(err.response.data.error));
      } else {
        dispatch(vehicleResponse(err));
      }
    });
};

export const getUserVehicles = user => dispatch => {
  console.log("getUserVehicles");

  dispatch(vehicleRequest());
  return API.getUserVehicles(user._id)
    .then(res => {
      dispatch(vehicleResponse(res.data));
    })
    .catch(err => {
      if (err.response) {
        dispatch(vehicleResponse(err.response.data.error));
      } else {
        dispatch(vehicleResponse(err));
      }
    });
};

// REDUCERS
const requested = handleActions(
  {
    [vehicleRequest]() {
      return true;
    },
    [vehicleResponse]() {
      return false;
    }
  },
  false
);

const value = handleActions(
  {
    [vehicleResponse]: {
      next(_state, { payload }) {
        return payload;
      }
    },
    [clearVehicleData]() {
      return null;
    }
  },
  null
);

const error = handleActions(
  {
    [vehicleResponse]: {
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
    [clearVehicleData]() {
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
