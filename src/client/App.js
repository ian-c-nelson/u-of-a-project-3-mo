import React from "react";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import initialState from "../../config/initialState";

import Routes from "./components/routes";

const history = createBrowserHistory();

// Configure redux with redux-thunk and dev tools
const middleware = [ReduxThunk];
const enhancer = compose(
  applyMiddleware(routerMiddleware(history), ...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

// Create the redux store
const store = createStore(rootReducer(history), initialState, enhancer);

function App() {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
}

export default App;
