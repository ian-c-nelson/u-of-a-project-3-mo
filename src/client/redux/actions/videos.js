import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import API from "../../../../apiControllers/youtube";

// PRIVATE ACTION CREATORS
const fetchVideosRequest = createAction("FETCH_VIDEOS_REQUEST");
const fetchVideosResponse = createAction("FETCH_VIDEOS_RESPONSE");
const fetchVideosError = createAction("FETCH_VIDEOS_ERROR");

// EXPORTED ACTION CREATORS
export const clearVideos = createAction("CLEAR_VIDEOS");
export const clearFetchVideosError = createAction("CLEAR_FETCH_VIDEOS_ERROR");

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

  dispatch(fetchVideosError(payload));
}

export const fetchVideos = (
  make,
  model,
  year,
  procedure,
  maxResults,
  orderby
) => dispatch => {
  dispatch(fetchVideosRequest());
  API.getVideo(make, model, year, procedure, maxResults, orderby)
    .then(response => {
      dispatch(fetchVideosResponse(response.data.items));
    })
    .catch(err => {
      handleAsyncActionError(err, dispatch);
    });
};

// REDUCERS
const error = handleActions(
  {
    [fetchVideosError](_state, { payload }) {
      return payload;
    },
    [fetchVideosRequest]() {
      return null;
    },
    [fetchVideosResponse]() {
      return null;
    },
    [clearVideos]() {
      return null;
    },
    [clearFetchVideosError]() {
      return null;
    }
  },
  null
);

const requested = handleActions(
  {
    [fetchVideosError]() {
      return false;
    },
    [fetchVideosRequest]() {
      return true;
    },
    [fetchVideosResponse]() {
      return false;
    },
    [clearVideos]() {
      return false;
    },
    [clearFetchVideosError]() {
      return false;
    }
  },
  false
);

const value = handleActions(
  {
    [fetchVideosError]() {
      return null;
    },
    [fetchVideosRequest]() {
      return null;
    },
    [fetchVideosResponse](_state, { payload }) {
      return payload;
    },
    [clearVideos]() {
      return null;
    },
    [clearFetchVideosError]() {
      return null;
    }
  },
  null
);


const phraseReducers = combineReducers({
  error,
  requested,
  value
});

export default phraseReducers;

// SELECTORS
export const getVideos = state => state.videos.value;
export const getVideosError = state => state.videos.error;
export const getVideosRequested = state => state.videos.requested;
