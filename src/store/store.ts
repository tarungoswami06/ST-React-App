import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import raceReducer from "./reducers/Race";
import loginReducer from "./reducers/Login";
import globalReducer from "./reducers/Global";

// Combine all reducer
const rootReducer = combineReducers({
  login: loginReducer,
  race: raceReducer,
  global: globalReducer
});

// Create store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

// Rootstate & Dispatch Type
export type RootState = ReturnType<typeof store.getState>;

export default store;