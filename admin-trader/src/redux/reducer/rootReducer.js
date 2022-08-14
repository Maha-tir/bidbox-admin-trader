import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import signalReducer from "./signalReducer";
import pairReducer from "./pairReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  signal: signalReducer,
  pair:pairReducer,
});

export default persistReducer(persistConfig, rootReducer);
