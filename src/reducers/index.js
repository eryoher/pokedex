import { combineReducers } from "redux";
import Auth from "./Auth";
import Common from "./Common";
import Client from './Client';
import VoucherType from "./VoucherType";
import Voucher from './Voucher';
import ProductReducer from './Product';

const reducers = combineReducers({
  common: Common,
  auth: Auth,
  clients: Client,
  vouchertype: VoucherType,
  voucher: Voucher,
  product: ProductReducer
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
