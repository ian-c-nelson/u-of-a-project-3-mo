import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import API from "../../../../apiControllers/internal";

// ACTION CREATORS
const signUpRequest = createAction("PHRASE_FETCH_REQUEST");
const signUpResponse = createAction("PHRASE_FETCH_RESPONSE");

export const signUp = () => dispatch => {
  dispatch(signUpRequest());
  API.getPhrase()
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
    [logOut]() {
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
export const getPhrase = state => state.phrase.value;
export const getPhraseError = state => state.phrase.error;
export const getPhraseRequested = state => state.phrase.requested;
