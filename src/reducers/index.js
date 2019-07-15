import { combineReducers } from "redux";
import Auth from "./Auth";
import Common from "./Common";
import Client from './Client';

const reducers = combineReducers({
  common: Common,
  auth: Auth,
  client:Client
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
