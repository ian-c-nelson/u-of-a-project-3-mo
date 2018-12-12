import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import API from "../../../../apiControllers/youtube";

// ACTION CREATORS
const fetchVideosRequest = createAction("FETCH_VIDEOS_REQUEST");
const fetchVideosResponse = createAction("FETCH_VIDEOS_RESPONSE");
export const clearVideos = createAction("CLEAR_VIDEOS");

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
      dispatch(fetchVideosResponse(err));
    });
};

// REDUCERS
const requested = handleActions(
  {
    [fetchVideosRequest]() {
      return true;
    },
    [fetchVideosResponse]() {
      return false;
    }
  },
  false
);

const value = handleActions(
  {
    [fetchVideosResponse]: {
      next(state, { payload }) {
        return payload;
      }
    },
    [clearVideos]() {
      return null;
    }
  },
  null
);

const error = handleActions(
  {
    [fetchVideosResponse]: {
      next() {
        return null;
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
    [clearVideos]() {
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
