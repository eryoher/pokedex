import { combineReducers } from "redux";
import Auth from "./Auth";
import Common from "./Common";
import Client from './Client';
import VoucherType from "./VoucherType";

const reducers = combineReducers({
  common: Common,
  auth: Auth,
  client:Client,
  vouchertype:VoucherType
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
