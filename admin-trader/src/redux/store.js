import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducer/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
