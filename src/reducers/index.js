import { combineReducers } from "redux";
import Auth from "./Auth";
import Common from "./Common";

const reducers = combineReducers({
  common: Common,
  auth: Auth
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
